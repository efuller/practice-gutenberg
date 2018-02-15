import React from 'react';

const Input = ({handleChange, text}) => (
    <input type="text" onChange={( event ) => handleChange( event.target.value )} value={text} />
);

export default Input;