import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      <li className={className} onClick={onClick}  
        style={{
          cursor:'pointer', 
          width: 100,
          backgroundColor: activeTab === label ? '#dfdfdf' : 'white', 
          color: 'black',
          textAlign: 'center',
          borderWidth: 0.5,
          // border: 'solid',
          boderColor: '#dfdfdf',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginLeft: label == 'Scrum' ? 30 : 0
        }} >
        {label}
      </li>
    );
  }
}

export default Tab;