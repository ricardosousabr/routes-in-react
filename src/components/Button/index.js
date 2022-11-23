import React from "react";
import { PageSwitchButton } from "./style.js";

export default function Button(props) {
  return (
    <PageSwitchButton href={props.href}>{props.children}</PageSwitchButton>
  );
}
