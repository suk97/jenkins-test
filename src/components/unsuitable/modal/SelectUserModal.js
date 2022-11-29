import React, {useState, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../../styles/unsuitable/unsuitable_select_user.scss"
import "../../../styles/modal.scss";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import UnsuitableActions from "../../../redux/modules/Unsuitable/UnsuitableActions";
import UnsuitableUserList from "../reasonleft/UnsuitableUserList";
import DefaultData2 from "../defaultData/DefaultData2";

function SelectUser(props) {
    const [selectUser, setSelectUser] = useState('');
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const {userInfo} = useSelector((state) => state.userInfo);

    // 검색 버튼
    const onSubmit = useCallback((query) => {
        dispatch(UnsuitableActions.getUsers(query));
    }, [dispatch])

    const onQueryChange = useCallback((e) => {
        setQuery(e.target.value);
    }, [setQuery]);

    // 유저 선택 버튼
    const sendUserName = (e) => {
        if(selectUser) {
            dispatch(UnsuitableActions.getOneUser(selectUser));
            closeModal();
        } else {
            e.preventDefault();
            toast.error("피통보자를 선택해주세요.", {
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

    function closeModal() {
        props.closeModal();
    }

    const SearchButtonClick = useCallback(() => {
        if (!query) {
            toast.error("이름을 입력해주세요!", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            return;
        }
        onSubmit(query);
        setQuery('');
    }, [onSubmit, query]);

    const EnterKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            if (!query) {
                toast.error("이름을 입력하세요.", {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "colored",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                return;
            }
            onSubmit(query);
            setQuery('');
        }
    }, [onSubmit, query]);

    return (
        <div className="user">
            <div className="con-title">
                <ContentPasteSearchOutlinedIcon />
                <h2>피통보자 검색</h2>
            </div>
            <div className="text">
                <p>찾으시려는 피통보자를 검색해주세요.</p>
            </div>
            <div className="input-name">
                <input type="text" 
                       placeholder="이름을 입력해주세요."
                       onChange={onQueryChange}
                       onKeyDown={EnterKeyPress}
                       value={query}
                />
                <button id="btn"
                        onClick={SearchButtonClick}>검색</button>
            </div>
            <div className="content">
                {userInfo?.data?.length > 0 && userInfo.data[0].userName ?
                <UnsuitableUserList setSelectUser={setSelectUser}/>
                : <DefaultData2 />}
            </div>
            <div className="footer">
                <button className="btn2" onClick={sendUserName}>완료</button>
                <button className="btn2" onClick={closeModal}>닫기</button>
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

export default SelectUser;