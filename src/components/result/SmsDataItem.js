import React from 'react';
import ForwardToInboxSharpIcon from '@mui/icons-material/ForwardToInboxSharp';
import { useDispatch, useSelector } from 'react-redux';
import ResultActions from '../../redux/modules/Result/ResultActions';
import Swal from 'sweetalert2';

const SmsDataItem = ({ data, close }) => {
    const dispatch = useDispatch();
    const { resultInfo, smsInfo } = useSelector((state) => state.ResultInfo);
    // const [contentData, setContentData] = useState(
    const contentData =`더존병원입니다. ${resultInfo.data[0].patientName}님의 수치결과 확인을 위해 병원에 방문 부탁드리겠습니다.`
    // );

    const onSubmit = async (to, content) => {
        to = resultInfo.data[0].patientPhoneNumber;
        content = contentData;
        dispatch(ResultActions.postSendSms(to, content));

        if (smsInfo.data.requestId === null) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'center-center',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: 'warning',
                title: 'SMS 알림 전송을 실패하였습니다.',
            });
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'center-center',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: 'success',
                title: 'SMS 알림이 정상적으로 실행 되었습니다.',
            });
        }
    };

    return (
        <div className="phone-content">
            <p>
                <ForwardToInboxSharpIcon />
                메세지 내용
            </p>
            <textarea className="message" defaultValue={contentData} />

            <footer>
                <p className="patient-no">
                    환자 번호: {resultInfo.data[0].patientNo}
                </p>
                <p className="patient-name">
                    수신 인: {resultInfo.data[0].patientName} 님
                </p>
                <p className="phone-num">
                    수신 번호: {resultInfo.data[0].patientPhoneNumber}
                </p>

                <div className="ft-btn-wrap">
                    <button onClick={close}>닫기</button>
                    <button onClick={onSubmit}>보내기</button>
                </div>
            </footer>
        </div>
    );
};

export default SmsDataItem;
