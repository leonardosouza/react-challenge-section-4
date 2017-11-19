import React from 'react';

const validationComponent = props => {
  let { size } = props;
  const MINIMUN_LENGTH = 5;
  const output = size === 0 ? null : size <= MINIMUN_LENGTH ? 'too short' : 'long enough';
  const msg = size === 0 ? null : `Text ${output} (current length of this is: ${size} chars).`;
  return <p>{msg}</p>;
};

export default validationComponent;
