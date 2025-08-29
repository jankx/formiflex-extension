import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { Settings } from './settings/basic';
import { AdvancedSettings } from './settings/advanced';
import { ActionsSettings } from './settings/actions';
import { useSelect } from '@wordpress/data';
import './filter';

const PluginDocumentSettingPanelExample = () => {
	const { postType } = useSelect( ( select ) => {
		return {
			postType: select( 'core/editor' ).getCurrentPostType(),
		};
	} );

	if ( 'formiflex_form' !== postType ) {
		return null;
	}

	return (
		<Fragment>
			<PluginDocumentSettingPanel
				name="plugin-sidebar-settings"
				title={ __( 'Settings' ) }
				className="formiflex-sidebar"
			>
				<Settings />
			</PluginDocumentSettingPanel>
			<PluginDocumentSettingPanel
				name="plugin-sidebar-actions"
				title={ __( 'Actions' ) }
				className="formiflex-sidebar"
			>
				<ActionsSettings />
			</PluginDocumentSettingPanel>
			<PluginDocumentSettingPanel
				name="plugin-sidebar-advanced"
				title={ __( 'Advanced' ) }
				className="formiflex-sidebar"
				isOpened
			>
				<AdvancedSettings />
			</PluginDocumentSettingPanel>
		</Fragment>
	);
};

// Register the plugin.
registerPlugin( 'plugin-sidebar-example', {
	render: PluginDocumentSettingPanelExample,
} );
