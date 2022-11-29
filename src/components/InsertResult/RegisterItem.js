import React from 'react';

import "../../styles/insertResult/insertResult.scss";

const RegisterItem = ({barcode, registerDt, onConclusion, registerCode}) => {

    const onCCC =()=>{
        onConclusion(barcode, registerCode);
    }

    return (
        <tr onClick={onCCC}>
            <td>{barcode}</td>
            <td>{registerDt.replace('T',' ')}</td>
        </tr>
    )
};

export default RegisterItem;

