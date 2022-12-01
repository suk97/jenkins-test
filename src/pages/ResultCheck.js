/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExportExcel from '../components/result/ExportExcel';
import ResultActions from '../redux/modules/Result/ResultActions';
import '../styles/resultCheck/result.scss';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import SearchForm from '../components/result/SearchForm';
import ResultList from '../components/result/ResultList';
import ChartElement from '../components/result/ChartElement';
import ChartDataList from '../components/result/ChartDataList';
import ExportCSV from '../components/result/ExportCSV';
import DefaultData from '../components/result/DefaultData';
import ChartDefaultData from '../components/result/ChartDefaultData';
import ResultModal from '../components/result/ResultModal';

const ResultCheck = () => {
    const { resultInfo } = useSelector((state) => state.ResultInfo);
    const dispatch = useDispatch();
    const [date, setDate] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);

    const closeModal = () => {
        setModalOpen(false);
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const onSubmit = async (query, target, startDate, endDate, radioDate) => {
        if (startDate === '') {
            dispatch(ResultActions.getNoDateSearch(query));
        } else {
            endDate && startDate === ''
                ? dispatch(ResultActions.getNoDateSearch(query))
                : dispatch(
                      ResultActions.getDateSearch(
                          query,
                          target,
                          startDate,
                          endDate,
                          radioDate,
                      ),
                  );
        }
    };

    return (
        <div className='wrap'>
            <ResultModal open={modalOpen} close={closeModal} />
            <div className='max-wrap'>
                <div className='title-wrap'>
                    <ContentPasteSearchOutlinedIcon />
                    <h2>
                        검사결과 조회 <span>Inspection result inquiry</span>
                    </h2>
                </div>

                <SearchForm onSubmit={onSubmit} setDate={setDate} />

                <div className='result-wrap'>
                    <div className='con-title'>
                        <TextSnippetOutlinedIcon />
                        <p>검사결과</p>
                        <div className='export-btn-wrap'>
                            <ExportCSV
                                csvData={
                                    resultInfo.data.length > 0
                                        ? resultInfo.data
                                        : []
                                }
                                filename={`resultInfo`}
                            />
                            <ExportExcel
                                csvData={
                                    resultInfo.data.length > 0
                                        ? resultInfo.data
                                        : []
                                }
                                fileName='Customers_Infomation_xlsx'
                            />
                            <button
                                key={resultInfo.index}
                                className='sms-btn'
                                onClick={openModal}
                            >
                                SMS 발송
                            </button>
                        </div>
                    </div>
                    <div className='scroll-wrap'>
                        {resultInfo.data.length > 0 ? (
                            <ResultList
                                resultInfo={resultInfo}
                                patientName={resultInfo.data.patientName}
                                checkedItems={checkedItems}
                                setCheckedItems={setCheckedItems}
                            />
                        ) : (
                            <DefaultData />
                        )}
                    </div>
                </div>

                <div className='chart-wrap'>
                    <div className='chart chart-line'>
                        <div className='con-title'>
                            <TimelineOutlinedIcon />
                            <p>결과차트</p>
                        </div>
                        {checkedItems.length > 0 ? (
                            <ChartElement
                                checkedItems={checkedItems}
                                date={date}
                            />
                        ) : (
                            <ChartDefaultData />
                        )}
                    </div>
                    <div className='chart chart-data'>
                        <div className='con-title'>
                            <InsertChartOutlinedIcon />
                            <p>결과차트 데이터</p>
                        </div>
                        <div className='scroll-wrap'>
                            {checkedItems.length > 0 ? (
                                <ChartDataList checkedItems={checkedItems} />
                            ) : (
                                <ChartDefaultData />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultCheck;
