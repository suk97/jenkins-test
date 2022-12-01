import { useState } from 'react';
import '../styles/login.scss';
import logo from '../assets/images/DOUZONE-white.png';
import axios from 'axios';
import { GATEWAY_URL } from '../utils/constants/Config';
import Swal from 'sweetalert2';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Access-Control-Allow-Origin'] =
    'http://localhost:3000';
axios.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'post';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';

const Login = () => {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };
    
    const OnClicked = () =>{
        axios.post(`${GATEWAY_URL}/user-service/login`,{
            id: inputId,
            pw: inputPw
        })
        .then((res)=>{
            console.log(res.data.accessToken)
            localStorage.setItem("AccessToken",res.data.accessToken);
            Swal.fire({
                title: '로그인에 성공하였습니다.',
                icon: 'success',
                confirmButtonColor: '#3C9DF6',
                confirmButtonText: '확인'
            }).then((resl)=>{
                window.location.href="/all";
            })
        })
        .catch(error =>{
            console.log(error.response.status)
            if(error.response.status===403){
                Swal.fire({
                    title: '로그인에 실패하셨습니다.',
                    icon: 'error',
                    confirmButtonColor: '#3C9DF6',
                    confirmButtonText: '확인'
                })
            }
        })
    }

    return (
        <div className='login-body'>
            <div>
                <div className='login-form'>
                    
                    <h1><img src={logo} alt="로고"/></h1>
                    <h2>Health Information System</h2>
                    <div>
                        <input value={inputId} onChange={handleInputId} placeholder='아이디를 입력 해주세요'></input><br/>
                        <input value={inputPw} onChange={handleInputPw} type = "password" placeholder='비밀번호를 입력해주세요'></input><br/>
                    </div>
                        <button onClick={()=>OnClicked()}>로그인</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
