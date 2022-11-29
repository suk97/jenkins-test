import React, {useCallback, useState} from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const InsertPatientNo = ({buttonForPatientInfo}) => {

    const [patientNo, setPatientNo] = useState('');

    const setValue = useCallback((e) => {
        setPatientNo(e.target.value);
    },[]);

    const clickButton = useCallback(
        () => {
            buttonForPatientInfo(patientNo);
        },
        [buttonForPatientInfo, patientNo]
    );

    const EnterKeyPress = useCallback(
        (e) => {
            if(e.key === 'Enter'){
            buttonForPatientInfo(patientNo);
            }
        },
        [buttonForPatientInfo, patientNo]
    );



    return (
        <div className={'input-patientNumber left'}>
            <div className={'content-title'}>
                <SearchOutlinedIcon/>
                <h3>조회 조건</h3>
            </div>
            <div className={'input-form'}>
                <select defaultValue={'전체'} name={'patientStatus'}>
                    <option value={'전체'}>전체</option>
                    <option value={'입원'}>입원</option>
                    <option value={'외래'}>외래</option>
                    <option value={'응급'}>응급</option>
                </select>
                <input type={"text"} className={'patientNo-input'} placeholder={'환자번호를 입력하세요'} onKeyDown={EnterKeyPress} onChange={setValue}/>
                <input type={"submit"} onClick={clickButton} className={'patientBtn'}/>
        </div>
        </div>
    );
}

export default InsertPatientNo;