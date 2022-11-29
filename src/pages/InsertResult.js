import React, {useEffect, useState} from "react";
import {useDispatch, useSelector } from "react-redux";
import InsertResultAction from "../redux/modules/InsertResult/InsertResultAction";
import RegisterList from "../components/InsertResult/RegisterList"
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import ConclusionList from "../components/InsertResult/ConclusionList";

const InsertResult = () => {
    const {RegisterInfo} = useSelector((state) => state.RegisterInfo);
    const {ConclusionInfo} = useSelector((state) => state.ConclusionInfo);
    const {InspectionTypeInfo} = useSelector((state) => state.InspectionTypeInfo);

    const [code,setCode] = useState('');
    const [register,setRegister] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(InsertResultAction.getTodayRegister());
    },[dispatch]);

    const onConclusion = (barcode, registerCode) =>{
        dispatch(InsertResultAction.getSearchConclusion(barcode));
        dispatch(InsertResultAction.getSearchInspectionType(barcode));
        setCode(barcode);
        setRegister(registerCode);
    };


    return (
        <div className="wrap">
            <div className="max-wrap1">
                <div className="title-wrap">
                    <ContentPasteSearchOutlinedIcon />
                    <h2>검사결과 등록 <span>Registration of inspection results</span></h2>
                </div>
                <div className="content-wraps">
                    <div className="left-content-wrap">
                        <RegisterList RegisterInfo={RegisterInfo} onConclusion={onConclusion} />
                    </div>
                    <div className="right-content-wrap">
                        <ConclusionList ConclusionInfo={ConclusionInfo} InspectionTypeInfo={InspectionTypeInfo} code={code} register={register} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsertResult;