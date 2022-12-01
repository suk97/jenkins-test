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
import Login from './login';
// import Login from './login';

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
                                {/* <Route path="/" element={<Navigate to="/all"></Navigate>}></Route> */}
                                <Route path="/" element={<Login/>}/>
                                <Route path="/all"/>
                                <Route path="/Collecting" element={<Collecting/>}/>
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