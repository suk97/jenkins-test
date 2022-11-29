import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import UnsuitableReasonList from "./UnsuitableReasonList";
import { useDispatch, useSelector } from "react-redux";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";
import { ToastContainer, toast } from 'react-toastify';


const UnsuitableReasonRight = () => {
    const dispatch = useDispatch();
    const { unsuitableSampleInfo } = useSelector((state) => state.unsuitableSampleInfo);
    
    const registryUnsuitableSampleBtn = (e) => {
        e.preventDefault();
        const unsuitableSampleList = [];
        if(unsuitableSampleInfo.data.length > 1){
            if (window.confirm("등록하시겠습니까?")) {
                 unsuitableSampleInfo.data.map((data, key) => {
                    if(key > 0) {
                        unsuitableSampleList.push(data);
                    }
                    return unsuitableSampleList;
                })
                dispatch(UnsuitableActions.postUnsuitInfo(unsuitableSampleList));
            } else {
                    e.preventDefault();
                    return ;
                    }
        } else {
            e.preventDefault();
            toast.error("부적합 검체 등록을 위한 과정을 진행해주세요.", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
    }

    return (
        <div className="unsuitable-wrap right">
                        <div className="con-title">
                            <TextSnippetOutlinedIcon />
                            <p>부적합 사유</p>
                        </div>
                        <form>
                            <div className="selected-reason">
                                <UnsuitableReasonList />
                            </div>
                                <button className="btn" onClick={registryUnsuitableSampleBtn}>등록</button>
                        </form>
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

export default UnsuitableReasonRight;