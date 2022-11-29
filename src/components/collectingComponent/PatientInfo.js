import React from 'react'
import SickOutlinedIcon from "@mui/icons-material/SickOutlined";

const PatientInfo = ({info}) => {

    return (
        <div className={'right'}>
            <div className={'content-title'}>
                <SickOutlinedIcon/><h3>환자 정보</h3>
            </div>
            <div className={'table patient-info'}>
                <ul className={'patient-table'}>
                    <li className={'fl first table-title'}>이름</li>
                    {/*<li className={'fl first-result'}>{info === [] || info === undefined ?*/}
                    {/*    " ": info}</li>*/}
                    <li className={'fl first-result'}>{info !== [] ?
                        info[0]?.patientName : ''}</li>
                    <li className={'fl second table-title'}>주민번호</li>
                    <li className={'fl second-result'}>{info !== [] ?info[0]?.patientResidentNumber : ''}</li>
                    <li className={'fl third table-title'}>키/몸무게</li>
                    <li className={'fl third-result'}>{info !== [] ?info[0]?.patientHeight : ''}/
                        {info !== [] ? info[0]?.patientWeight:''}</li>
                </ul>
                <ul className={'patient-table'}>
                    <li className={'fl first table-title'}>혈액형</li>
                    <li className={'fl first-result'}>{info !== [] ?info[0]?.patientBloodType : ''}</li>
                    <li className={'fl second table-title'}>나이/성별</li>
                    <li className={'fl second-result'}>{info !== [] ?info[0]?.patientAge : ''}/
                        {info !== [] ?info[0]?.patientGender : ''}</li>
                    <li className={'fl third table-title'}>전화번호</li>
                    <li className={'fl third-result'}>{info !== [] ? info[0]?.patientPhoneNumber: ''}</li>
                </ul>
                <ul className={'patient-table'}>
                    <li className={'fl first table-title'}>주소</li>
                    <li className={'fl address-result'}>{info[0]?.patientAddress}</li>
                </ul>
            </div>
        </div>


    )
}


export default PatientInfo;