import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

function SideDrawer(props) {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.whenClicked}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  // const content = props.show && (
  //   <aside className="side-drawer" onClick={props.whenClicked}>
  //     {props.children}
  //   </aside>
  // );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}

export default SideDrawer;
