import ResultItem from './ResultItem';
import ResultModal from './ResultModal';
import React, { useState } from 'react';

const ResultList = ({ resultInfo }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            {/* {resultInfo?.data?.length > 0 &&
                resultInfo.data.map((data, index) => {
                    return (
                        <ResultModal
                            key={index}
                            open={modalOpen}
                            close={closeModal}
                            patientName={data.patientName}
                            patientNo={data.patientNo}
                            patientPhoneNumber={data.patientPhoneNumber}
                        />
                    );
                })}  리팩토링때 수정예정 221124 */}

            <ResultModal
                open={modalOpen}
                close={closeModal}
                // patientName={respatientName}
                // patientNo={patientNo}
                // patientPhoneNumber={patientPhoneNumber}
            />

            <table>
                <tbody>
                    <tr>
                        <th> </th>
                        <th>접수일</th>
                        <th>검체명</th>
                        <th>오더일</th>
                        <th>검사명</th>
                        <th>수치</th>
                        <th>참고치/단위</th>
                        <th>HL</th>
                        <th>비고</th>
                        <th>검체비고</th>
                        <th>결과발송</th>
                    </tr>

                    {resultInfo?.data?.length > 0 &&
                        resultInfo.data.map((data, index) => {
                            return (
                                <ResultItem
                                    key={index}
                                    registerDt={data.registerDt}
                                    sampleName={data.sampleName}
                                    prescribeDt={data.prescribeDt}
                                    inspectionName={data.inspectionName}
                                    figures={data.figures}
                                    baseline={data.baseline}
                                    unit={data.unit}
                                    note={data.note}
                                    sampleNote={data.sampleNote}
                                    resultInfo={resultInfo}
                                    patientNo={data.patientNo}
                                    patientName={data.patientName}
                                    patientPhoneNumber={data.patientPhoneNumber}
                                    openModal={openModal}
                                    data={data}
                                />
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};

export default ResultList;
