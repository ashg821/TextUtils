import React from "react";

export default function Alert(props) {
    const capitalize=(type)=>{
        let capital= type[0].toUpperCase();
        return capital+type.slice(1);
    }
  return (
    props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
    </div>
  );
}
