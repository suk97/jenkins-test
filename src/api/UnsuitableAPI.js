import axios from "axios";
import { GATEWAY_URL } from '../utils/constants/Config';

export const getSample = (barcode) => {
    return axios.get(`${GATEWAY_URL}/data-service/sample/search/${barcode}`)
}

export const getPrescribe = (barcode) => {
    return axios.get(`${GATEWAY_URL}/data-service/prescribe/search/${barcode}`)
}

export const getUser = (userName) => {
    return axios.get(`${GATEWAY_URL}/data-service/user/search/${userName}`)
}

export const getUnsuitableReason = () => {
    return axios.get(`${GATEWAY_URL}/data-service/unsuitable-reason/`)
}

export const insertUnsuitableSample = (unsuitableSampleList) => {
    return axios.post(`${GATEWAY_URL}/collecting-service/unsuitable-reason-management/`, (unsuitableSampleList), {
        headers: {'Content-Type': `application/json`}
    })
                
}

