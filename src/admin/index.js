/* eslint-disable @wordpress/no-unsafe-wp-apis */
import { render, useEffect } from '@wordpress/element';
import { dispatch, useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { store as noticesStore } from '@wordpress/notices';
import { SnackbarList } from '@wordpress/components';
import './style.scss';
import { Forms } from './pages/submissions/forms';
import { Submissions } from './pages/submissions/submissions';
import { Submission } from './pages/submission';
import Settings from './pages/settings';
import Tools from './pages/tools';
import Addons from './pages/addons';
import { getQueryArg } from '@wordpress/url';
import SettingsContextProvider from './context/settings-context';
import { RouterProvider, useLocation, useHistory } from './router';

/**
 * Add our custom entities for retrieving external setting and variable data.
 *
 * @since 2.5.0
 */
dispatch( 'core' ).addEntities( [
	{
		label: __( 'Formiflex submissions', 'formiflex' ),
		kind: 'formiflex/v1',
		name: 'submissions',
		baseURL: '/formiflex/v1/submissions',
		supportsPagination: true,
	},
	{
		label: __( 'Formiflex addons', 'formiflex' ),
		kind: 'formiflex/v1',
		name: 'addons',
		baseURL: '/formiflex/v1/addons',
	},
	{
		label: __( 'Formiflex columns', 'formiflex' ),
		kind: 'formiflex/v1',
		name: 'columns',
		baseURL: '/formiflex/v1/columns',
	},
] );

const Router = () => {
	const history = useHistory();
	const { params } = useLocation();

	// Add null check for params
	if ( ! params ) {
		return <div>Loading...</div>;
	}

	const menuRoot = document.querySelector( '#toplevel_page_formiflex' );

	// Add null check for menuRoot
	if ( ! menuRoot ) {
		return <div>Menu not found</div>;
	}

	const reset = () => {
		const page = getQueryArg( window.location.href, 'page' );
		if ( ! page ) {
			return;
		}
		for ( const child of menuRoot.querySelectorAll( 'a' ) ) {
			const target = getQueryArg( child.href, 'page' );
			if ( page === target ) {
				child.classList.add( 'current' );
				child.parentElement.classList.add( 'current' );
			} else {
				child.classList.remove( 'current' );
				child.parentElement.classList.remove( 'current' );
			}
		}
	};

	const handleChange = ( e ) => {
		e.preventDefault();

		history.push( {
			page: getQueryArg( e.target.href, 'page' ),
		} );
		reset();
	};

	useEffect( () => {
		reset();
		menuRoot.addEventListener( 'click', handleChange, false );

		return () => {
			document
				.querySelector( '#toplevel_page_formiflex' )
				.removeEventListener( 'click', handleChange );
		};
	}, [] );

	if ( 'formiflex-settings' === params.page ) {
		return <Settings />;
	}
	if ( 'formiflex-tools' === params.page ) {
		return <Tools />;
	}
	if ( 'formiflex-addons' === params.page ) {
		return <Addons />;
	}
	if (
		'formiflex' === params.page &&
		'submission' === params.section &&
		params.submission_id
	) {
		return <Submission />;
	}
	if (
		'formiflex' === params.page &&
		'submissions' === params.section &&
		params.form_id
	) {
		return <Submissions />;
	}
	return <Forms />;
};

const App = () => {
	return (
		<RouterProvider>
			<SettingsContextProvider>
				<Router />
				<Notifications />
			</SettingsContextProvider>
		</RouterProvider>
	);
};

function Notifications() {
	const notices = useSelect(
		( select ) => select( noticesStore ).getNotices(),
		[]
	);
	const { removeNotice } = useDispatch( noticesStore );
	const snackbarNotices = notices.filter(
		( { type } ) => type === 'snackbar'
	);

	return (
		<SnackbarList notices={ snackbarNotices } onRemove={ removeNotice } />
	);
}

window.addEventListener( 'DOMContentLoaded', () => {
	const domNode = document.getElementById( 'formiflex-admin' );

	if ( domNode ) {
		render( <App />, domNode );
	}
} );
