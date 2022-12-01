import React from "react";

const RegisterItem = ({
    barcode,collectorId,collectingDt,orderCode,vesselCode,sampleCode,statusCode,unsuitableReasonCode
}) => {

    return(
        <tr>
            <td>{barcode}</td>
            <td>{collectingDt}</td>
            <td>{collectorId}</td>
            <td>{orderCode}</td>
            <td>{vesselCode}</td>
            <td>{sampleCode}</td>
            <td>{statusCode}</td>
            <td>{unsuitableReasonCode}</td>
        </tr>
    );
}
export default RegisterItem;