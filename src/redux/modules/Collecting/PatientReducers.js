import Types from "../../ActionConstants";


const initialData = {
    patientInfo: {
        loading: false,
        data: {
            patientInfo: {
                patientNo: '',
                patientName: '',
                patientAge: '',
                patientBloodType: '',
                patientHeight: '',
                patientWeight: '',
                patientAddress: '',
                patientPhoneNumber: '',
                patientResidentNumber: '',
                patientGender: '',
                visitCode: '',
                visitDt: '',
                visitStatus: '',
                userName: '',
                departmentName: ''
            }
        }
    }
}

const reducer = (state = initialData, {type, payload}) => {
    switch (type) {
        case Types.GET_PATIENT_INFO:
            const tmp = {
                ...state, // TODO 3
                patientInfo: {
                    ...state.patientInfo,
                    loading: false,
                    data: payload
                }
            };
            console.log(tmp);
            return tmp;
        default:
            return state;
    }
}

export default reducer;