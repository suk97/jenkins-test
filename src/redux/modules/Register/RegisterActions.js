import Types from "../../ActionConstants";
import * as RegisterApi from "../../../api/RegisterApi";
const RegisterActions ={

    getDateSearch: (barcode) => async (dispatch) => {

        dispatch({ type: Types.GET_SEARCH_RESULT_PATIENT });

        try {
            const register = await RegisterApi.getPrescribe(barcode);
 
            if (!register) throw new Error(`Error adding patitent: ${register}`); 


            dispatch({
                type: Types.GET_SEARCH_RESULT_PATIENT_SUCCESS,
                payload: register.data
            })

        } catch (error) {
            dispatch({
                type: Types.GET_SEARCH_RESULT_PATIENT_FAILURE,
                payload: error.toString()
            })
        }
    },
    getDateSearchd: (barcode) => async (dispatch) => {

        dispatch({ type: Types.GET_SEARCH_RESULT_COLLET });

        try {
            const register = await RegisterApi.getCollect(barcode);
 
            if (!register) throw new Error(`Error adding patitent: ${register}`); 


            dispatch({
                type: Types.GET_SEARCH_RESULT_COLLET_SUCCESS,
                payload: register.data
            })

        } catch (error) {
            dispatch({
                type: Types.GET_SEARCH_RESULT_COLLET_FAILURE,
                payload: error.toString()
            })
        }
    },

}
export default RegisterActions;