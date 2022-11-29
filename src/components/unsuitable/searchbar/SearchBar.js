import React, {useState, useCallback} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchBar = ( { onSubmit } ) => {
    const [query, setQuery] = useState('');
    const onQueryChange = useCallback((e) => {
        setQuery(e.target.value);
    }, []);


    const SearchButtonClick = () => {
        if (!query) {
            toast.error("검체번호를 입력해주세요!", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        } 
        onSubmit(query);
        setQuery('');
    };

    
    const EnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (!query) {
                toast.error("번호가없습니다", {
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
    };

    return (
        <div className="search-bar">
            <SearchOutlinedIcon />
            <p>검체번호 조회</p>
            <input
                placeholder="검체번호를 입력하세요."
                onChange={onQueryChange}
                onKeyDown={EnterKeyPress}
                value={query}
            />
            <button
                className="search-btn"
                onClick={SearchButtonClick}
            >조회
            </button>
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

export default SearchBar;