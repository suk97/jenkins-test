import RegisterItem from "./RegisterItem";
import "../../styles/insertResult/insertResult.scss";
import "../../styles/insertResult/pagination.scss"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Pagination from 'react-js-pagination'
import React, {useCallback, useEffect, useState} from "react";
import InsertResultAction from "../../redux/modules/InsertResult/InsertResultAction";
import {useDispatch} from "react-redux";

const RegisterList = ({RegisterInfo, onConclusion}) => {

    let item = 10;

    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
    };

    const dispatch = useDispatch();

    const [stDate, setStDate] = useState(new Date().toISOString().slice(0, 10));
    const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));
    const [barcode, setBarcode] = useState('');

    const changeStDate = useCallback(e => {
        if ("0000-00-00" <= e.target.value && e.target.value <= endDate) {
            setStDate(e.target.value);
        }
    }, [endDate]);

    const onChangeEndDate = useCallback(e => {
        if (stDate <= e.target.value && e.target.value<= new Date().toISOString().slice(0, 10)) {
            setEndDate(e.target.value);
        }
    }, [stDate]);

    const onChangeBarcode = (e) => {
        setBarcode(e.target.value);
    };

    const onSubmit = useCallback( (barcode,stDate,endDate) => {
        dispatch(InsertResultAction.getSearchRegister(barcode,stDate,endDate));
    },[dispatch])

    const EnterKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            onSubmit(barcode, stDate, endDate);
            setBarcode('');
        }
    }, [onSubmit, barcode, stDate, endDate]);

    const SearchButtonClick =() => {
        onSubmit(barcode, stDate, endDate);
        setBarcode('');
    };

    useEffect(() => {
        setPage(1);
    },[RegisterInfo]);

    return (
        <div className="frame">
            <div className="con_title">
                <ArticleOutlinedIcon/>
                <p>?????? ?????????</p>
                <input className="startDate" type="date" value={stDate} onChange={changeStDate}/>
                <input className="endDate" type="date" value={endDate} onChange={onChangeEndDate}/>
                <input
                    className="input_text"
                    placeholder="?????????"
                    onChange={onChangeBarcode}
                    onKeyDown={EnterKeyPress}
                    value={barcode}
                />
                <button className="search_btn" onClick={SearchButtonClick}>??????</button>
            </div>
            <div className="table_max_size">
                <table>
                    <tbody>
                    <tr className="table_title">
                        <th>?????????</th>
                        <th>????????????</th>
                    </tr>

                    {RegisterInfo?.data?.length > 0 && RegisterInfo.data.slice(
                        item * (page - 1),
                        item * (page - 1) + item
                    ).map((data, index) => {
                        return (
                            <RegisterItem
                                key={index}
                                registerCode={data.registerCode}
                                barcode={data.barcode}
                                registerDt={data.registerDt}
                                onConclusion={onConclusion}
                            />
                        )
                    })}

                    </tbody>
                </table>
            </div>

            <div className="pagination_box">
                <Pagination
                    activePage={page}  // ?????? ???????????? ?????????
                    itemsCountPerPage={item}  // ??????????????? ????????? ????????????
                    totalItemsCount={RegisterInfo?.data?.length}  // ??? ????????????
                    pageRangeDisplayed={5}  // ????????? ????????????
                    onChange={handlePageChange} >
                </Pagination>
            </div>

        </div>
    )
}


export default RegisterList;
