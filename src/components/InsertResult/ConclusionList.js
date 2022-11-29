import ConclusionItem from "./ConclusionItem";
import "../../styles/insertResult/insertResult.scss";
import "../../styles/insertResult/pagination.scss"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import React, {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import InsertResultAction from "../../redux/modules/InsertResult/InsertResultAction";
import {useDispatch} from "react-redux";

const ConclusionList = ({ConclusionInfo, InspectionTypeInfo, code, register}) => {

    const dispatch = useDispatch();

    const [conclusionDataList,setConclusionDataList]=useState([]);
    const [disable,setDisable] = useState(false);

    const addResult = ((e) => {
        if(conclusionDataList.find(item => item.figures === '')){
            toast.error("검사결과를 전부 입력해주세요!", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            return
        }
        dispatch(InsertResultAction.insertConclusionResult(conclusionDataList));
    });

    const updateResult = ((e) => {
        if(conclusionDataList.find(item => item.figures === '')){
            toast.error("검사결과를 입력해주세요!", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            return
        }
        dispatch(InsertResultAction.updateConclusion(conclusionDataList));
    });

    useEffect(()=>{
        setDisable(false);
        if(ConclusionInfo?.data?.length > 0){
            setDisable(true);
        }
    },[ConclusionInfo]);

    useEffect(()=>{
        setConclusionDataList([]);
    },[code]);

    return (
        <div className="frame">
            <div className="con_title">
                <ArticleOutlinedIcon/>
                <p>결과 입력</p>
                <div className="title_barcode">
                    <p>{code}</p>
                </div>
            </div>
            <div className="table_max_size table_scroll">
                <table>
                    <tbody>
                    <tr className="table_title">
                        <th>검사이름</th>
                        <th>검사 결과</th>
                        <th>단위</th>
                        <th>비고</th>
                    </tr>
                    {InspectionTypeInfo?.data?.length > 0 && InspectionTypeInfo.data.map((data, index) => {
                        return(
                        <ConclusionItem
                        key={index}
                        ConclusionInfo={ConclusionInfo}
                        inspectionCode={data.inspectionCode}
                        unit={data.unit}
                        registerCode={register}
                        conclusionDataList={conclusionDataList}
                        setConclusionDataList={setConclusionDataList}
                        />
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div className="footer">
                <button disabled={disable} className="item_btn" onClick={addResult}>등록</button>
                <button disabled={!disable} className="item_btn" onClick={updateResult}>수정</button>
            </div>
            <ToastContainer
                position='top-right'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>

    )
}


export default ConclusionList;
