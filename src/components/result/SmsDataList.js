import React from 'react';
import SmsDataItem from './SmsDataItem';

const SmsDataList = ({ data, close }) => {
    return (
        <>
            <SmsDataItem data={data} close={close} />
        </>
    );
};

export default SmsDataList;
