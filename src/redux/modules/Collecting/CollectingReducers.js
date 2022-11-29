import Types from "../../ActionConstants";

const initialData = {
    barcodeList : {
        loading: false,
        data: {
            barcodeList: {
                barcode: ''
            }
        }

    }
}

const reducer = (state = initialData, {type, payload}) => {
    switch (type){
        case Types.PUT_COLLECTING_DATA : {
            const barcode = {
                ...state,
                barcodeList : {
                    ...state.barcodeList,
                    loading: false,
                    data : payload
                }
            }
            return barcode;
        }

        case Types.CANCEL_COLLECTING : {
            const barcode = {
                ...state,
                barcodeList : {
                    ...state.barcodeList,
                    loading: false,
                    data : payload
                }
            }
            return barcode;
        }
        default:
            return state;

    }
}

export default reducer;