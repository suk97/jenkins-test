import React from "react";

const SampleItem = ({
    barcode,
    statusName,
    barcodeDt,
    collectingDt,
    vesselCode,
    barcodePrinterId,
    collectorId,
    prescribeCode,

}) => {
    return (
        <>
            <tr>
                <td>{barcode}</td>
                <td>{statusName}</td>
                <td>{barcodeDt}</td>
                {!collectingDt? 
                    <td>-</td>:
                    <td>{collectingDt}</td>
                }
                <td>{vesselCode}</td>
                <td>{barcodePrinterId}</td>
                {!collectorId?
                    <td>-</td>:
                    <td>{collectorId}</td>
                }
                <td>{prescribeCode}</td>
            </tr>
        </>
    )
}

export default SampleItem;