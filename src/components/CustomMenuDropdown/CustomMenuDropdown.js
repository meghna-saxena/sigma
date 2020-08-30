import React, { Component } from "react";

import { Button } from "primereact/button";
import { Menu } from "primereact/menu";

import styles from "./CustomMenuDropdown.module.scss";

export default class CustomMenuDropdown extends Component {
  state = {
    items: [
      {
        label: "Options",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-plus",
            command: () => (window.location.hash = "/fileupload"),
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-trash",
            url: "http://primetek.com.tr",
          },
        ],
      },
      {
        label: "Account",
        items: [
          {
            label: "Options",
            icon: "pi pi-fw pi-cog",
            command: () => (window.location.hash = "/"),
          },
          { label: "Sign Out", icon: "pi pi-fw pi-power-off" },
        ],
      },
    ],
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Menu
          model={this.state.items}
          ref={(el) => (this.menu = el)}
          popup={true}
          style={{ width: 250 }}
          className={styles.popup}
        />
        <Button
          className={styles.button}
          icon={this.props.icon}
          onClick={(event) => this.menu.toggle(event)}
          aria-label={this.props.label}
        />
      </div>
    );
  }
}
