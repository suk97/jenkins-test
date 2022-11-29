import React from 'react';
import { GoArrowUp, GoArrowDown } from 'react-icons/go';

const ResultItem = ({
    patientName,
    patientPhoneNumber,
    patientNo,
    registerDt,
    sampleName,
    prescribeDt,
    inspectionName,
    figures,
    baseline,
    unit,
    note,
    sampleNote,
    resultInfo,
    openModal,
}) => {
    // const [modalOpen, setModalOpen] = useState(false);
    // const openModal = () => {
    //     setModalOpen(true);
    // };

    // const closeModal = () => {
    //     setModalOpen(false);
    // };

    // const data = {
    //     patientName: patientName,
    //     patientNo: patientNo,
    //     patientPhoneNumber: patientPhoneNumber,
    //     figures: figures,
    // };

    return (
        <>
            {/* <ResultModal open={modalOpen} close={closeModal} data={data} /> */}

            <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>{registerDt}</td>
                <td>{sampleName}</td>
                <td>{prescribeDt}</td>
                <td>{inspectionName}</td>
                <td>{figures}</td>
                <td>
                    {baseline} / {unit}
                </td>
                <td>
                    {figures > baseline ? (
                        <GoArrowUp className="arrow-up" />
                    ) : (
                        <GoArrowDown className="arrow-down" />
                    )}
                </td>
                <td>{note}</td>
                <td>{sampleNote}</td>
                <td>
                    <button
                        key={resultInfo.index}
                        className="sms-btn"
                        onClick={openModal}
                    >
                        SMS 발송
                    </button>
                </td>
                <td className="note-text">{note}</td>
                <td className="sampleNote-text">{sampleNote}</td>
            </tr>
        </>
    );
};

export default ResultItem;
