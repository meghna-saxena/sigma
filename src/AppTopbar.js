import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";
import { CustomMenuDropdown } from "./components";

export class AppTopbar extends Component {
  static defaultProps = {
    onToggleMenu: null,
  };

  static propTypes = {
    onToggleMenu: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="layout-topbar clearfix">
        <button
          className="p-link layout-menu-button"
          onClick={this.props.onToggleMenu}
        >
          <span className="pi pi-bars" />
        </button>
        <div className="layout-topbar-icons">
          <span className="layout-topbar-search">
            <InputText type="text" placeholder="Search" />
            <span className="layout-topbar-search-icon pi pi-search" />
          </span>
          <button className="p-link">
            <span className="layout-topbar-item-text">Events</span>
            <span className="layout-topbar-icon pi pi-calendar" />
            <span className="layout-topbar-badge">5</span>
          </button>
          <CustomMenuDropdown
            label="Settings"
            icon="layout-topbar-icon pi pi-cog"
          />
          <CustomMenuDropdown
            label="User"
            icon="layout-topbar-icon pi pi-user"
          />
        </div>
      </div>
    );
  }
}
