import React from "react";
import "./Container.css";

export default function Container(props) {
  const classNames = `container ${props.className}`;
  return <div className={classNames}>{props.children}</div>;
}
