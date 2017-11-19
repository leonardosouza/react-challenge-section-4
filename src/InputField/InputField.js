import React from 'react';

const inputField = (props) => {
  let { change, style } = props;
  return (
    <div>
      <input placeholder="insert text here" onChange={change} style={style} />
    </div>
  );
}

export default inputField;
