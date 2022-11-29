import React from 'react';

const ChartDataItem = ({ sampleName, figures, baseline, unit, registerDt }) => {
    return (
        <>
            <tr>
                <td>{sampleName}</td>
                <td>
                    {baseline} / {unit}
                </td>
                <td>{figures}</td>

                <td>{registerDt}</td>
            </tr>
        </>
    );
};

export default ChartDataItem;
