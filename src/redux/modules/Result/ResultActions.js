import Types from '../../ActionConstants';
import * as ResultApi from '../../../api/ResultApi';

const ResultActions = {
    getDateSearch: (patientNo, startDate, endDate) => async (dispatch) => {
        dispatch({ type: Types.GET_RESULTS });

        try {
            const result = await ResultApi.getResults(
                patientNo,
                startDate,
                endDate
            );

            if (!result) throw new Error(`Error adding patitent: ${result}`);

            dispatch({
                type: Types.GET_RESULTS_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.GET_RESULTS_FAILURE,
                payload: error.toString(),
            });
        }
    },

    getNoDateSearch: (text) => async (dispatch) => {
        dispatch({ type: Types.GET_SEARCH_RESULTS });

        try {
            const result = await ResultApi.getSearchNoDate(text);
            if (!result) throw new Error(`Error adding patitent: ${result}`); // 예외처리

            dispatch({
                type: Types.GET_SEARCH_RESULTS_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.GET_SEARCH_RESULTS_FAILURE,
                payload: error.toString(),
            });
        }
    },

    postSendSms: (to, content) => async (dispatch) => {
        dispatch({ type: Types.POST_RESULT_SMS });

        try {
            const result = await ResultApi.postSendMessage(to, content);
            if (!result) throw new Error(`Error adding patitent: ${result}`);
            dispatch({
                type: Types.POST_RESULT_SMS_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: Types.POST_RESULT_SMS_FAILURE,
                payload: error.toString(),
            });
        }
    },
};

export default ResultActions;
