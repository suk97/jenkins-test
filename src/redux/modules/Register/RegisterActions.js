import Types from "../../ActionConstants";
import * as RegisterApi from "../../../api/RegisterApi";
import Swal from "sweetalert2";
const RegisterActions ={

    getDateSearch: (barcode) => async (dispatch) => {

        dispatch({ type: Types.GET_SEARCH_RESULT_PATIENT });

        try {
            const register = await RegisterApi.getPrescribe(barcode);
 
            if (!register) throw new Error(`Error adding patitent: ${register}`);

            if (register.data.length === 0){
                Swal.fire({
                    title: '접수가 불가능한 바코드 입니다.',
                    icon: 'error',
                    confirmButtonColor: '#3C9DF6',
                    confirmButtonText: '확인',
                })
            }


            dispatch({
                type: Types.GET_SEARCH_RESULT_PATIENT_SUCCESS,
                payload: register.data
            })

        } catch (error) {
            Swal.fire({
                title: '바코드를 확인해주세요',
                text: "바코드 정보가 다릅니다.",
                icon: 'warning',
                confirmButtonColor: '#3C9DF6',
                confirmButtonText: '확인',
            })
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