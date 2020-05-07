import "antd/es/button/style";
import _Button from "antd/es/button";
import React from "react";
import styles from "./index.module.css";
import classnames from 'classnames';

var _BUtton = function _BUtton(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.button
  }, /*#__PURE__*/React.createElement(_Button, props, props && props.children));
};

export default _BUtton;