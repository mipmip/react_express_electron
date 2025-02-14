import * as React                                                 from 'react';
import { Route }                                                  from 'react-router-dom';
import {TopToolbarRight, ToolbarButton, ToolbarToggleButtonGroup} from '../TopToolbarRight'
import AppsIcon                                                   from '@material-ui/icons/Apps';
import SettingsApplicationsIcon                                   from '@material-ui/icons/SettingsApplications';
import InputIcon                                                  from '@material-ui/icons/Input';
import AddIcon                                                    from '@material-ui/icons/Add';
import ViewListIcon                                               from '@material-ui/icons/ViewList';
import ViewModuleIcon                                             from '@material-ui/icons/ViewModule';

export class SiteLibraryToolbarRight extends React.Component {

  render(){
    return <Route render={({history})=>{ return this.renderWithRoute(history) }} />
  }

  renderWithRoute(history){

    const leftButtons = [
      <ToolbarButton
        key="buttonNewSite"
        action={()=>{
          this.props.handleLibraryDialogClick('newSiteDialog')
        }}
        title="New"
        icon={AddIcon}
      />,

      <ToolbarButton
        key="buttonImportSite"
        action={()=>{
          this.props.handleLibraryDialogClick('importSiteDialog')
        }}
        title="Import"
        icon={InputIcon}
      />,

    ]
    const centerButtons = [
      <ToolbarToggleButtonGroup
        key="buttonViewGroup"
        activeOption={this.props.activeLibraryView}
        handleChange={this.props.handleChange}
        optionItems={[
          {
            icon: <ViewListIcon />,
            value:"list"
          },
          {
            icon: <ViewModuleIcon />,
            value:"cards"
          }
        ]}

      />
    ]

    const rightButtons = [
      <ToolbarButton
        key={"toolbarbutton-library"}
        active={true}
        action={()=>{
          history.push('/sites/last')
        }}
        title="Site Library"
        icon={AppsIcon}
      />,
      <ToolbarButton
        key="buttonPrefs"
        action={()=>{
          history.push('/prefs/')
        }}
        title="Preferences"
        icon={SettingsApplicationsIcon}
      />,
    ];

    return <TopToolbarRight
      key="toolbar-right-new-site"
      itemsLeft={leftButtons}
      itemsCenter={centerButtons}
      itemsRight={rightButtons}
    />


  }
}
