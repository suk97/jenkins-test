import axios from 'axios';
import { GATEWAY_URL } from '../utils/constants/Config';

export const getAllResult = () => {
    return axios.get(`${GATEWAY_URL}/data-service/result/all`); // 전체 조회
};

export const getResults = (patientNo, startDate, endDate, radioDate) => {
    return axios.get(
        `${GATEWAY_URL}/data-service/result/search?patientNo=${patientNo}&startDate=${startDate}&endDate=${endDate}&radioDate=${radioDate}`,
    ); // 날짜 조회
};

export const getSearchNoDate = (text) => {
    return axios.get(`${GATEWAY_URL}/data-service/result/${text}`); // 환자번호 조회
};

export const postSendMessage = (to, content) => {
    // return axios.post(`${API_URL}/send/sms`, { to: to, content: content });
    return axios.post(`${GATEWAY_URL}/data-service/send/sms`, {
        to: to,
        content: content,
    });
};
