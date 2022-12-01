import styled from '@emotion/styled';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { GATEWAY_URL } from '../../utils/constants/Config';
import Swal from 'sweetalert2';

// axios.defaults.withCredentials = true;
// axios.defaults.headers.post['Access-Control-Allow-Origin'] =
//     'http://localhost:3000';
// axios.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
// axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'post';
// axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';

const Insert = () => {
    const test = useSelector((state) => state.Listinfoplus.Listinfoplus.data);
    const testFuc = () => {
        Swal.fire({
            title: '접수를 진행 하시겠습니까?',
            text: '접수 버튼을 누르면 접수가 진행 됩니다.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3C9DF6',
            cancelButtonColor: '#d33',
            confirmButtonText: '접수',
            cancelButtonText: '취소',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '접수가 완료 되었습니다.',
                    icon: 'success'
                })
                if(test.length > 0){
                    axios.post(`${GATEWAY_URL}/inspection-service/insert`,{
                        barcode: test[0].barcode
                    })
                    .then((res)=>{
                    })
                    .catch();

                    axios.post(`${GATEWAY_URL}/inspection-service/updateData`,{
                        
                        prescribeCodeList: [test[0].prescribeCode]
                        
                    })
                    .then((resq)=>{
                    })
                    .catch();
                }
            }
        });
    };
    return (
        <InsertButton className="insert" onClick={testFuc}>
            접수하기
        </InsertButton>
    );
};
export default Insert;

const InsertButton = styled.button`
    border: 1px solid #3c9df6;
    background: #fff;
    border-radius: 5px;
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
