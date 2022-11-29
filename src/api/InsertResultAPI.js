import axios from 'axios';
import {API_URL,DATA_URL} from "../utils/constants/Config";

export const getTodayRegister = () =>{
    return axios.get(`${DATA_URL}/data-service/inspection-service/register/today`)
}


export const getSearchRegister = (barcode, stDate, endDate) =>{
    return axios.get(`${DATA_URL}/data-service/inspection-service/register/search?barcode=${barcode}&stDate=${stDate}&endDate=${endDate}`)
}

export const getSearchInspectionType = (barcode) =>{
    return axios.get(`${DATA_URL}/data-service/inspection-service/inspection-type/search?barcode=${barcode}`)
}

export const getSearchConclusion = (barcode) =>{
    return axios.get(`${DATA_URL}/data-service/inspection-service/conclusion/search?barcode=${barcode}`)
}

export const insertConclusionResult = (conclusion) =>{
    return axios.post(`${API_URL}/inspection-service/conclusion`, conclusion)
}

export const updateConclusion = (conclusion) =>{
    return axios.put(`${API_URL}/inspection-service/conclusion`, conclusion)
}