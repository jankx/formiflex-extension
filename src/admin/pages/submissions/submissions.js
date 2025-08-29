/* eslint-disable @wordpress/no-unsafe-wp-apis */
/**
 * WordPress dependencies
 */
import {
	Button,
	Card,
	Icon,
	Spinner,
	__experimentalHStack as HStack,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import { useState, useMemo, Fragment, RawHTML } from '@wordpress/element';
import { dateI18n, getDate, getSettings } from '@wordpress/date';
import { heading, seen, starFilled } from '@wordpress/icons';
import { trashSubmissionAction } from '../../actions/trash-submission.js';
import { toggleNew, toggleStar } from '../../actions/toggle.js';
import { useEntityRecord, useEntityRecords } from '@wordpress/core-data';
/**
 * Internal dependencies
 */
import { DataViews } from '@wordpress/dataviews/wp';
import Header from '../../components/masthead.js';
import { useHistory, useLocation } from '../../router';

const EMPTY_ARRAY = [];

const STATUSES = [
	{ value: 'starred', label: __( 'Favorites' ) },
	{ value: 'is_new', label: __( 'Unread' ) },
];

const defaultLayouts = {
	table: {
		layout: {
			primaryField: 'id',
			combinedFields: [
				{
					id: 'title',
					label: 'Title',
					children: [ 'status' ],
					direction: 'horizontal',
				},
			],
			styles: {
				id: {
					maxWidth: '40px',
					width: '40px',
				},
				status: {
					maxWidth: '40px',
					width: '40px',
				},
			},
		},
	},
};

const DataView = ( { columns } ) => {
	const history = useHistory();
	const { params } = useLocation();
	const [ view, setView ] = useState( {
		type: 'table',
		filters: [],
		titleField: 'id',
		descriptionField: 'status',
		fields: [ ...columns ],
		page: 1,
		perPage: 10,
		sort: {
			field: 'submitted_at',
			direction: 'desc',
		},
		search: '',
		// All fields are visible by default, so it's
		// better to keep track of the hidden ones.
		layout: defaultLayouts.table.layout,
	} );

	const queryArgs = useMemo( () => {
		const filters = {};
		view.filters.forEach( ( filter ) => {
			if ( filter.field === 'status' && filter.operator === 'isAny' ) {
				filters.status = filter.value;
			}
		} );
		// We want to provide a different default item for the status filter
		// than the REST API provides.
		if ( ! filters.status || filters.status === 'all' ) {
			filters.status = '';
		}

		return {
			id: params.form_id,
			per_page: view.perPage,
			page: view.page,
			order: view.sort?.direction,
			orderby: view.sort?.field,
			search: view.search || undefined,
			...filters,
		};
	}, [ view, params ] );

	const {
		records: submissions,
		isResolving: isLoadingSubmissions,
		totalItems,
		totalPages,
	} = useEntityRecords( 'formiflex/v1', 'submissions', queryArgs );

	const paginationInfo = useMemo( () => {
		return {
			totalItems,
			totalPages,
		};
	}, [ totalItems, totalPages ] );

	const fields = useMemo( () => {
		const _fields = [
			{
				header: __( 'Status' ),
				id: 'status',
				render: ( { item } ) => {
					return (
						<HStack spacing={ 1 }>
							{ parseInt( item.details.is_new ) && (
								<div className={ 'formiflex-new' }>
									<Icon
										size="18"
										icon={ heading }
										title={ __( 'Is new', 'formiflex' ) }
										fill={ 'currentColor' }
									/>
								</div>
							) }
							{ parseInt( item.details.starred ) && (
								<div className={ 'formiflex-star' }>
									<Icon
										size="18"
										icon={ starFilled }
										fill={ 'currentColor' }
										title={ __(
											'Is favorite',
											'formiflex'
										) }
									/>
								</div>
							) }
						</HStack>
					);
				},
				filters: [ 'isAny' ],
				elements: STATUSES,
				enableHiding: false,
				enableSorting: false,
			},
			{
				header: '#',
				id: 'id',
				getValue: ( { item } ) => item.id,
				render: ( { item } ) => (
					<Button
						variant="link"
						text={ item.id }
						onClick={ () =>
							history.push( {
								page: 'formiflex',
								section: 'submission',
								form_id: params.form_id,
								submission_id: item.id,
							} )
						}
					/>
				),
				enableHiding: false,
				enableSorting: true,
			},
		];
		const _columns = columns?.map( ( key ) => {
			return {
				id: key,
				header: key.replaceAll( '_', ' ' ).toUpperCase(),
				getValue: ( item ) => item[ key ],
				filters: [ { id: 'search', type: 'search' } ],
				render: ( { item } ) => {
					if ( 'submitted_at' === key ) {
						const formattedDate = dateI18n(
							getSettings().formats.datetimeAbbreviated,
							getDate( item.details.submitted_at )
						);
						return <time>{ formattedDate }</time>;
					}
					return (
						<RawHTML className="field-content">
							{ decodeEntities( item.fields[ key ] ) }
						</RawHTML>
					);
				},
				enableSorting: true,
				maxWidth: '240px',
				width: '240px',
			};
		} );
		return _fields.concat( _columns );
	}, [ history, columns, params.form_id ] );

	const actions = useMemo(
		() => [
			{
				id: 'view-submission',
				label: __( 'View Submission', 'formiflex' ),
				isPrimary: true,
				icon: seen,
				callback( posts ) {
					const post = posts[ 0 ];
					history.push( {
						page: 'formiflex',
						section: 'submission',
						submission_id: post.id,
					} );
				},
			},
			trashSubmissionAction,
			toggleNew,
			toggleStar,
		],
		[ history ]
	);

	return (
		<DataViews
			paginationInfo={ paginationInfo }
			fields={ fields }
			actions={ actions }
			data={ submissions || EMPTY_ARRAY }
			isLoading={ isLoadingSubmissions }
			view={ view }
			onChangeView={ setView }
			defaultLayouts={ defaultLayouts }
		/>
	);
};

export const Submissions = () => {
	const history = useHistory();
	const { params } = useLocation();

	const columns = useEntityRecord( 'formiflex/v1', 'columns', params.form_id );

	return (
		<Fragment>
			<Header
				title={ __( 'Submissions', 'formiflex' ) }
				className="full-width"
			>
				<Button
					variant="primary"
					size="small"
					icon={ 'arrow-left' }
					onClick={ () =>
						history.push( {
							page: 'formiflex',
						} )
					}
				>
					{ __( 'Go back', 'formiflex' ) }
				</Button>
			</Header>
			<div className="formiflex-content">
				<Card>
					{ columns.hasResolved ? (
						<DataView columns={ columns.record.columns } />
					) : (
						<Spinner />
					) }
				</Card>
			</div>
		</Fragment>
	);
};
