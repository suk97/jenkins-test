import React, {useCallback, useState} from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const InsertPatientNo = ({buttonForPatientInfo}) => {

    const [patientNo, setPatientNo] = useState('');
    const [visitStatus, setVisitStatus] = useState('전체');

    const setValue = useCallback((e) => {
        setPatientNo(e.target.value);
    },[]);

    const selectBoxValue = () => {
        const visitStatus = document.getElementById('patientStatus');
        setVisitStatus(visitStatus.options[visitStatus.selectedIndex].text);
    }

    const getPatientInfo = ()=> {
        buttonForPatientInfo(patientNo, visitStatus);
    }

    const EnterKeyPress = useCallback(
        (e) => {
            if(e.key === 'Enter'){
            buttonForPatientInfo(patientNo);
            }
        },
        [buttonForPatientInfo, patientNo]
    );



    return (
        <div className={'input-patientNumber left-table'}>
            <div className={'content-title'}>
                <SearchOutlinedIcon/>
                <h3>조회 조건</h3>
            </div>
            <div className={'input-form'}>
                <select defaultValue={'전체'} id={'patientStatus'} onChange={selectBoxValue}>
                    <option value={'전체'}>전체</option>
                    <option value={'입원'}>입원</option>
                    <option value={'외래'}>외래</option>
                    <option value={'응급'}>응급</option>
                </select>
                <input type={"text"} className={'patientNo-input'} placeholder={'환자번호를 입력하세요'} onKeyDown={EnterKeyPress} onChange={setValue}/>
                <input type={"submit"} onClick={getPatientInfo} className={'patientBtn'}/>
        </div>
        </div>
    );
}

export default InsertPatientNo;