import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from '../styles/components/Layout.module.css';

import Aux from '../hoc/Aux';
import Toolbar from './Toolbar';
import SideDrawer from './SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHangler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <div>
          <Toolbar
            isAuth={this.props.isAuthenticated}
            drawerToggleClicked={this.sideDrawerToggleHandler}
          />
          <SideDrawer
            isAuth={this.props.isAuthenticated}
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHangler}
          />
        </div>
        <main className={styles.content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
