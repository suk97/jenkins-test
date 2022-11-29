import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchForm = ({ onSubmit, setDate }) => {
    const [query, setQuery] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    // new Date().toISOString().slice(0, 10)

    const onChangeStartDate = (e) => {
        if (e.target.value <= endDate) {
            setStartDate(e.target.value);
        }
    };

    const onChangeEndDate = (e) => {
        if (e.target.value <= new Date().toISOString().slice(0, 10)) {
            setEndDate(e.target.value);
        }
    };

    const onQueryChange = useCallback(
        (e) => {
            setQuery(e.target.value);
        },
        []
    );

    const SearchButtonClick = useCallback(() => {
        if (!query) {
            toast.error('환자번호를 입력해주세요.', {
                position: 'top-right',
                autoClose: 2000,
                theme: 'colored',
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }
        onSubmit(query, startDate, endDate);
        setQuery('');
    }, [onSubmit, query, startDate, endDate]);

    const EnterKeyPress = useCallback(
        (e) => {
            if (e.key === 'Enter') {
                if (!query) {
                    toast.error('환자번호를 입력해주세요.', {
                        position: 'top-right',
                        autoClose: 2000,
                        theme: 'colored',
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                    return;
                }
                onSubmit(query, startDate, endDate);
                setQuery('');
            }
        },
        [onSubmit, query, startDate, endDate]
    );

    return (
        <>
            <Container>
                <SearchOutlinedIcon />
                <SearchTitle>환자번호 조회</SearchTitle>
                <SearchInput
                    placeholder="환자번호를 입력해주세요."
                    onChange={onQueryChange}
                    onKeyDown={EnterKeyPress}
                    value={query}
                />

                <StartDate
                    type="date"
                    value={startDate}
                    onChange={onChangeStartDate}
                />
                <EndDate
                    type="date"
                    value={endDate}
                    onChange={onChangeEndDate}
                />
                <SearchSpan>접수일자</SearchSpan>
                <SelectData type="radio" name="#" value="#" checked readOnly />
                <SearchSpan>보고일자</SearchSpan>
                <SelectData type="radio" name="#" value="#" />
                <SubmitBtn onClick={SearchButtonClick}>조회</SubmitBtn>
            </Container>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default SearchForm;

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1em;
    border: 1px solid #b9b9b9;
    padding: 10px 10px 10px 10px;
    border-radius: 15px;
    box-shadow: 0px 1.5px 2px rgba(0, 0, 0, 0.25);
`;

const SearchTitle = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-left: 0.2em;
`;

const SearchInput = styled.input`
    margin-left: 1em;
    padding: 3px 10px 3px 10px;
`;

const SearchSpan = styled.span`
    margin-left: 10px;
    font-size: 14px;
`;

const StartDate = styled.input`
    font-size: 12px;
    margin-left: 1em;
    padding: 3px 10px 3px 10px;
    word-spacing: -5px;
`;

const EndDate = styled.input`
    font-size: 12px;
    margin-left: 1em;
    padding: 3px 10px 3px 10px;
    word-spacing: -5px;
`;

const SelectData = styled.input`
    margin-left: 5px;
`;

const SubmitBtn = styled.button`
    border: 1px solid #3c9df6;
    background: #fff;
    color: #3c9df6;
    font-weight: bold;
    padding: 3px 13px 3px 13px;
    margin-left: 1em;
    cursor: pointer;
    &:hover {
        background: #3c9df6;
        color: #fff;
        transition: 0.5s;
        font-weight: bold;
    }
    &:active {
        background: #217bce;
        border: 1px solid #217bce;
        transition: 0.5s;
    }
`;
