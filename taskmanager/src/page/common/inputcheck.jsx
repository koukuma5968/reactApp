import React from 'react';
import ReactDOM from 'react-dom';

class InputCheck extends React.Component {
    /* 必須チェック */
    checkRequired = (value) => {
        return value != null && value != '';
    }
    /* 半角英数チェック */
    checkAlphaNumber = (value) => {
        return value.match(/^[a-zA-Z0-9]+$/);
    }
    /* 桁数範囲チェック */
    checkNumberScope = (size, start, end) => {
        console.log(size);
        return size >= start && size <= end;
    }
    /* 半角英数記号チェック */
    checkAlphaNumberSymbol = (value) => {
        return value.match(/^[a-zA-Z0-9@#&]+$/);
    }
}
export default new InputCheck