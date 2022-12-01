import React, {useRef, useState} from 'react';
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import '../styles/collecting.scss'
import InsertPatientNo from "../components/collectingComponent/InsertPatientNo";
import PatientInfo from "../components/collectingComponent/PatientInfo";
import IncommingInfo from "../components/collectingComponent/IncommingInfo";
import PrescribeInfo from "../components/collectingComponent/prescribeInfo";
import {useDispatch, useSelector} from "react-redux";
import PatientActions from "../redux/modules/Collecting/PatientActions";
import PrescribeActions from "../redux/modules/Collecting/PrescribeActions";
import InitialData from "../redux/modules/Collecting/InitialData";

const Collecting = () => {

    const { patientInfo } = useSelector((state)=> state.PatientInfo);
    const { prescribeInfo } = useSelector((state)=> state.PrescribeInfo);
    // const { barcodeInfo } = useSelector((state)=> state.BarcodeInfo);
    const [visitNo, setVisitNo] = useState(0);
    // const { collecting } = useSelector((state)=> state.);

    const dispatch = useDispatch();
    const [patientLength, setPatientLength] = useState(0);
    const [prescribeLength, setPrescribeLength] = useState(0);
    const flag = useRef(false);

    const buttonForPatientInfo = async (patientNo, visitStatus) => {
        await dispatch(PatientActions.getPatientData(patientNo, visitStatus));
        setPatientLength(Object.keys(patientInfo.data).length);

        flag.current = true;
    }
    const buttonForPrescribeInfo = async (visitNo) =>{
        await dispatch(PrescribeActions.getPrescribeData(visitNo));
        setPrescribeLength(Object.keys(prescribeInfo.data).length);
        setVisitNo(visitNo);
    }

    const initPrescribeCodeInfo = () =>{
        PrescribeInfo = InitialData;
    }
    // const createBarcode = async (prescribeCode)=> {
    //     await dispatch(BarcodeActions.postPrescribeData(prescribeCode));
    // }

    return (
        <div className={'collecting-wrap'}>
            <div className={'max-wrap'}>
                <div className={'title-wrap'}>
                    <ContentPasteSearchOutlinedIcon/>
                    <h2>채혈 접수&nbsp;&nbsp;<span>collecting received</span></h2>
                </div>
                <div className={'main-content up'}>
                    <div className={'left-content'}>
                    <InsertPatientNo buttonForPatientInfo={buttonForPatientInfo}/>
                    </div>
                {/*    TODO 2   */}
                    <div className={'right-content'}>
                <PatientInfo
                    info={patientLength > 0 ? patientInfo.data : []}
                />
                    </div>
                </div>
                <div className={'main-content down'}>
                    {/*IXME : classname */}
                    <div className={'left-content'}>
                    <IncommingInfo
                        info={patientLength > 0 ? patientInfo.data : []}
                        buttonForPrescribeInfo={buttonForPrescribeInfo}
                        flag={flag}
                    />
                    </div>
                    <div className={'right-content prescribe'}>
                    <PrescribeInfo
                     prescribeInfo={prescribeLength>0 ? prescribeInfo.data : []}
                     visitNo={visitNo}
                     initPrescribeCodeInfo = {initPrescribeCodeInfo}
                    />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Collecting;