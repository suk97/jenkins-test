import axios from 'axios';
import { API_URL } from '../utils/constants/Config';

export const getAllResult = () => {
    return axios.get(`${API_URL}/result/all`); // 전체 조회
};

export const getResults = (patientNo, startDate, endDate) => {
    return axios.get(
        `${API_URL}/result?patientNo=${patientNo}&startDate=${startDate}&endDate=${endDate}`
    ); // 날짜 조회
};

export const getSearchNoDate = (text) => {
    return axios.get(`${API_URL}/result/${text}`); // 환자번호 조회
};

export const postSendMessage = (to, content) => {
    // return axios.post(`${API_URL}/send/sms`, { to: to, content: content });
    return axios.post(`${API_URL}/send/sms`, { to: to, content: content });
};
