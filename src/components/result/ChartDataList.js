import React from 'react';
import ChartDataItem from './ChartDataItem';

const ChartDataList = ({ resultInfo }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>검사명</th>
                    <th>참고치 / 단위</th>
                    <th>결과수치</th>
                    <th>검사일</th>
                </tr>

                {resultInfo?.data?.length > 0 &&
                    resultInfo.data.map((data, index) => {
                        return (
                            <ChartDataItem
                                key={index}
                                sampleName={data.sampleName}
                                figures={data.figures}
                                baseline={data.baseline}
                                unit={data.unit}
                                registerDt={data.registerDt}
                            />
                        );
                    })}
            </tbody>
        </table>
    );
};

export default ChartDataList;
