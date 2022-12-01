import axios from "axios";

export const findPatientInfo = (data, visitStatus) => {
    return axios.get('http://localhost:8000/data-service/patient/info/' + data + '/' + visitStatus);
}

export const findPrescribeInfo = (data) => {
    return axios.get('http://localhost:8000/data-service/prescribe/' + data);
}

export const newBarcodeInfo = (data) => {
    console.log("data");
    console.log(data);
    return axios.post('http://localhost:8000/collecting-service/barcode', data);
}

export const cancelBarcode = (data) => {
    return axios.put('http://localhost:8000/collecting-service/barcode', data);
}

export const newCollecting = (data) => {
    return axios.put('http://localhost:8000/collecting-service/collecting', data);
}

export const cancelCollecting = (data) => {
    return axios.put('http://localhost:8000/collecting-service/collecting/canceldate', data);
}