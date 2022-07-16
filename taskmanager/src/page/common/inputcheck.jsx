import React from 'react';
import ReactDOM from 'react-dom';

class InputCheck extends React.Component {
    checkRequired = (value) => {
        return value != null && value != '';
    }
    checkAlphaNumber = (value) => {
        return value.match(/^[a-zA-Z0-9]+$/);
    }
    checkNumberScope = (size, start, end) => {
        console.log(size);
        return size >= start && size <= end;
    }
    checkAlphaNumberSymbol = (value) => {
        return value.match(/^[a-zA-Z0-9@#&]+$/);
    }
}
export default new InputCheck