import React from "react";
import styledComponents from "styled-components";

const Button = styledComponents.button`
  background: ${(props)=> props.bg};
  color: ${(props) => props.color};
`;

function StatusButton(props) {
  if (props.status === "Delivered") {
    return (
      <Button className="border-22 b-none px-1 py-1" bg="#f1f8ff" color="#5695d0">{props.status}</Button>
    );
  }

  if (props.status === "Prepared") {
    return (
      <Button className="border-22 b-none px-1 py-1" bg="#fff7eb" color="#fdc776">{props.status}</Button>
    );
  }

  if (props.status === "Completed") {
    return (
      <Button className="border-22 b-none px-1 py-1 " bg="#f3fcf7" color="#3bcc74">{props.status}</Button>
    );
  }
 
}

export default StatusButton;
