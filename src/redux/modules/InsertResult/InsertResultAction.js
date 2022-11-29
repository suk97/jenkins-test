import Types from "../../ActionConstants";
import * as InsertResultAPI from "../../../api/InsertResultAPI";

const InsertResultAction = {
    getTodayRegister: () => async(dispatch) => {
        dispatch({type: Types.GET_SEARCH_REGISTER});

        try{
            const todayRegister = await InsertResultAPI.getTodayRegister();

            dispatch({
                type:Types.GET_SEARCH_REGISTER_SUCCESS,
                payload:todayRegister.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_SEARCH_REGISTER_FAILURE,
                payload: error.toString()
            })
        }
    },

    getSearchRegister: (barcode,stDate,endDate) => async(dispatch) => {
        dispatch({type: Types.GET_SEARCH_REGISTER});

        try{
            const searchRegister = await InsertResultAPI.getSearchRegister(barcode,stDate,endDate);

            dispatch({
                type:Types.GET_SEARCH_REGISTER_SUCCESS,
                payload:searchRegister.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_SEARCH_REGISTER_FAILURE,
                payload: error.toString()
            })
        }
    },

    getSearchInspectionType: (barcode) => async(dispatch) => {
        dispatch({type: Types.GET_SEARCH_INSPECTION});

        try{
            const searchInspectionType = await InsertResultAPI.getSearchInspectionType(barcode);

            dispatch({
                type:Types.GET_SEARCH_INSPECTION_SUCCESS,
                payload:searchInspectionType.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_SEARCH_INSPECTION_FAILURE,
                payload: error.toString()
            })
        }
    },

    insertConclusionResult:(conclusion) => async(dispatch) => {
        dispatch({type: Types.POST_INSERT_CONCLUSION});

        try{
            const insertConclusion = await InsertResultAPI.insertConclusionResult(conclusion);

            dispatch({
                type:Types.POST_INSERT_CONCLUSION_SUCCESS,
                payload:insertConclusion.data
            })
        } catch (error){
            dispatch({
                type:Types.POST_INSERT_CONCLUSION_FAILURE,
                payload: error.toString()
            })
        }
    },

    getSearchConclusion:(barcode) => async(dispatch) => {
        dispatch({type: Types.GET_SEARCH_CONCLUSION});

        try{
            const allConclusion = await InsertResultAPI.getSearchConclusion(barcode);

            dispatch({
                type:Types.GET_SEARCH_CONCLUSION_SUCCESS,
                payload:allConclusion.data
            })
        } catch (error){
            dispatch({
                type:Types.GET_SEARCH_CONCLUSION_FAILURE,
                payload: error.toString()
            })
        }
    },

    updateConclusion:(conclusion) => async(dispatch) => {
        dispatch({type: Types.PUT_UPDATE_CONCLUSION});

        try{
            const updateConclusion = await InsertResultAPI.updateConclusion(conclusion);

            dispatch({
                type:Types.PUT_UPDATE_CONCLUSION_SUCCESS,
                payload:updateConclusion.data
            })
        } catch (error){
            dispatch({
                type:Types.PUT_UPDATE_CONCLUSION_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default InsertResultAction;