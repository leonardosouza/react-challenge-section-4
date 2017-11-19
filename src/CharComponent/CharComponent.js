import React from 'react';

const charComponent = props => {
  let { style, text, click } = props,
      letters = text.split('') || [];
  return <ul>
      {letters.map((letter, index) => {
        return <li style={style} key={index} onClick={() => click(index)}>{letter}</li>;
      })}
    </ul>; 
};

export default charComponent;
