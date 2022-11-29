import React from 'react'
import {Header} from '../layouts/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Unsuitable from '../pages/Unsuitable';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Collecting from "./Collecting";
import ResultCheck from './ResultCheck';
import '../styles/body.scss'
import InsertResult from "./InsertResult";
import Register from './Register';

const PagesIndex = () => {

    return (
        <div className='view'>
            <BrowserRouter>
                <div className='flex-wrap'>
                    <div>
                        <Sidebar/>
                    </div>
                    <div className='wrap'>
                        <Header/>
                        <Routes>
                            {/* 로그인 페이지 */}
                            {/* <Route path="/" element={<Login/>}/> */}
                            {/* 형님 페이지 */}
                            <Route path="/" element={<></>}/>
                            <Route path="/Collecting" element={<Collecting></Collecting>}/>
                            <Route path="/Register" element={<Register/>}/>
                            <Route path="/InsertResult" element={<InsertResult/>}/>
                            <Route path='/unsuitable' element={<Unsuitable/>}/>
                            <Route path='/ResultCheck' element={<ResultCheck/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default PagesIndex;