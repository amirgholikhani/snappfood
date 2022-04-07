import React from "react";

const Item = (props) => {
  return (
    <div>
      <span>عنوان: </span>
      <span>{props.data?.title}</span>
    </div>
  )
}

export default Item;

