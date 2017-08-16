import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
// import NavLink from './NavLink'

export default class App extends Component{
  constructor(props){
    super(props)

    this.handleTouchTap = this.handleTouchTap.bind(this)
  }

  handleTouchTap() {
    alert('onClick triggered on the title component');
  }


  render() {
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };

    return(
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <AppBar
          title={<span style={styles.title}>Title</span>}
          handleTouchTap={() => this.handleTouchTap()}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={<FlatButton label="Save" />}
        />
      </div>
    )
  }
}
