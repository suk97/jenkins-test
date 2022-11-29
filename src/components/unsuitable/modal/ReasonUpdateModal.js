// import '../../../styles/unsuitable_reason_update.scss';
// import '../../../styles/modal.scss';
// import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
// import { useDispatch, useSelector } from 'react-redux';
import UnsuitableActions from '../../../redux/modules/Unsuitable/UnsuitableActions';
import React, { useCallback, useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import "../../../styles/unsuitable/unsuitable_reason_update.scss"
import "../../../styles/modal.scss";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function ReasonUpdate({
    setReasonUpdate,
    reasonUpdate,
    notificatorId,
    notifiedId,
    detail,
    selectedReason,
    sampleBarcode,
    selectedReasonName,
    key2}) {
    const dispatch = useDispatch();

    const [flag, setFlag] = useState(false);
    const [modify, setModify] = useState(false);
    const [update, setUpdate] = useState(false);
    const [sampleDelete, setSampleDelete] = useState([]);
    const [updateDetail, setUpdateDetail] = useState([]);
    const [query, setQuery] = useState(detail);

    const { unsuitableSampleInfo } = useSelector((state)=> state.unsuitableSampleInfo);

    const closeModal = useCallback(()=>{
        setReasonUpdate(!reasonUpdate);
    }, [reasonUpdate, setReasonUpdate])

    const onChangeDetail = useCallback((e) => {
        setQuery(e.target.value);
    }, [])

    const unsuitModifyBtn = (e) => {
        e.preventDefault();
        if(query === detail){
            toast.error("수정사항을 입력해주세요!", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            return;
        } else {
            if (window.confirm("수정하시겠습니까?")) {
                unsuitableSampleInfo?.data?.length > 0 && unsuitableSampleInfo.data.map((item, key) => {
                    if(key !== key2 && flag === false) {
                        setUpdateDetail(updateDetail => [...updateDetail, item]);
                    }
                    return updateDetail;
                })
                setModify(true);
            }
        }
    }

    useEffect(() => {
        if(modify){
            setModify(false);
            setUpdate(true);
            setUpdateDetail(updateDetail => [...updateDetail,
                                            {sampleBarcode,
                                            notificatorId,
                                            notifiedId,
                                            query,
                                            selectedReason,
                                            selectedReasonName}])
            
        }
    }, [modify,
        notificatorId, 
        notifiedId, 
        query, 
        sampleBarcode, 
        selectedReason, 
        selectedReasonName])

    useEffect(() => {
        if(update){
            dispatch(UnsuitableActions.getSample(updateDetail));
            setUpdate(false);
            closeModal();
        }
    }, [update, closeModal, dispatch, updateDetail])

    const unsuitDeleteBtn = (e) => {
        e.preventDefault(); 
        if (window.confirm("정말 삭제하시겠습니까?")) {
            unsuitableSampleInfo?.data?.length > 0 && unsuitableSampleInfo.data.map((item, key) => {
                if(key !== key2 && flag === false){
                    setSampleDelete(sampleDelete => [...sampleDelete, item]);
                }
                return sampleDelete;
            })
            setFlag(true);
        } 
    };  
    
    const close = useCallback(() => {
        if(flag){
            dispatch(UnsuitableActions.getSample(sampleDelete));
            setFlag(false);
        }
        closeModal();
    }, [closeModal, dispatch, flag, sampleDelete]);
    
    useEffect(()=> {
        if(flag){
            close();
        }
    }, [close, flag])

    return (
        <div className="reason">
            <div className="con-title">
                <div className="header">
                <ContentPasteSearchOutlinedIcon />
                <h2>부적합 사유</h2> 
                </div>
                <button  className="close-btn" onClick={close}><CloseOutlinedIcon /></button>

            </div>
            <div className="text">
                <p>{selectedReason}</p>
                <p className="reason-name">{selectedReasonName}</p>
            </div>
            <div className="content">
                <textarea placeholder="비고" value={query} onChange={onChangeDetail}>{query}
                </textarea>
            </div>
            <div className="footer">
                <button className="btn2" onClick={unsuitModifyBtn}>수정</button>
                <button className="btn2" onClick={unsuitDeleteBtn}>삭제</button>

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
    );
}

export default ReasonUpdate;
