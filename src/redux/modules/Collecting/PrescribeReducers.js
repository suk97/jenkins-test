import Types from "../../ActionConstants";

const initialData = {
    prescribeInfo: {
        loading: false,
        data: {
            prescribeInfo: {
                orderCode: '',
                prescribeDt: '',
                doctorId: '',
                statusName: '',
                visitStatus: '',
                departmentName: '',
                inspectionCode: '',
                sampleCode: '',
                vesselName: '',
                classification: ''
            }
        }
    }
}

const reducer = (state = initialData, {type, payload}) => {

    switch (type) {
        case Types.GET_PRESCRIBE_INFO :
            const info = {
                ...state,
                prescribeInfo: {
                    ...state.prescribeInfo,
                    loading: false,
                    data: payload
                }
            }
                return info;
        default:
            return state;
    }

}

export default reducer;