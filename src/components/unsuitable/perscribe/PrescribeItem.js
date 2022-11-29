import React from "react";

const PrescribeItem = ({
    prescribeCode,
    visitStatus,
    statusName,
    orderName,
    prescribeContents,
    prescribeDt,
    doctorId
    
}) => {
    return (
        <>
            <tr>
                <td>{prescribeCode}</td>
                <td>{doctorId}</td>
                <td>{orderName}<p className="hidden-text1">{orderName}</p></td>
                <td>{visitStatus}</td>
                <td>{statusName}</td>
                <td>{prescribeContents}<p className="hidden-text2">{prescribeContents}</p></td>
                <td>{prescribeDt}</td>
            </tr>
        </>
    )
}

export default PrescribeItem;