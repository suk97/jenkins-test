import Types from "../../ActionConstants";

const initialState ={
    RegisterInfo:{
        loading: false,
        data:{
            registerCode:'',
            inspectorId:'',
            barcode:'',
            registerDt:'',
        }
    },

    InspectionTypeInfo:{
        loading: false,
        data:{
            inspectionCode:'',
            orderCode:'',
            inspectionName:'',
            unit:'',
            baseline:''
        }
    },

    ConclusionInfo:{
        loading: false,
        data:{
            resultNo:'',
            registerCode:'',
            inspectionCode:'',
            barcode:'',
            figures:'',
            inspectionDt:'',
            reportedDt:'',
            note:'',
            sampleNote:''
        }
    }
}

const reducer = (state=initialState, action) =>{

    switch (action.type){
        case Types.GET_SEARCH_REGISTER:
            return{
                ...state,
                RegisterInfo: {
                    ...state.RegisterInfo,
                    loading: true,
                    data: action.payload  //payload : 불러온 데이터 값
                }
            }

        case Types.GET_SEARCH_REGISTER_SUCCESS:
            return{
                ...state,
                RegisterInfo: {
                    ...state.RegisterInfo,
                    loading: false,
                    data: action.payload
                }
            }

        case Types.GET_SEARCH_REGISTER_FAILURE:
            return {
                ...state,
                RegisterInfo: {
                    ...state.RegisterInfo,
                    loading: false,
                    data: {
                        error: action.payload
                    }
                }
            }


        case Types.GET_SEARCH_INSPECTION:
            return{
                ...state,
                InspectionTypeInfo: {
                    ...state.InspectionTypeInfo,
                    loading: true,
                    data: action.payload  //payload : 불러온 데이터 값
                }
            }

        case Types.GET_SEARCH_INSPECTION_SUCCESS:
            return{
                ...state,
                InspectionTypeInfo: {
                    ...state.InspectionTypeInfo,
                    loading: false,
                    data: action.payload
                }
            }

        case Types.GET_SEARCH_INSPECTION_FAILURE:
            return {
                ...state,
                InspectionTypeInfo: {
                    ...state.InspectionTypeInfo,
                    loading: false,
                    data: {
                        error: action.payload
                    }
                }
            }

        case Types.POST_INSERT_CONCLUSION:
            return{
                ...state,
                ConclusionInfo: {
                    ...state.ConclusionInfo,
                    loading: true,
                    data: action.payload
                }
            }

        case Types.POST_INSERT_CONCLUSION_SUCCESS:
            return{
                ...state,
                ConclusionInfo: {
                    ...state.ConclusionInfo,
                    loading: false,
                    data: action.payload
                }
            }

        case Types.POST_INSERT_CONCLUSION_FAILURE:
            return {
                ...state,
                ConclusionInfo: {
                    ...state.ConclusionInfo,
                    loading: false,
                    data: {
                        error: action.payload
                    }
                }
            }






        case Types.GET_SEARCH_CONCLUSION:
            return{
                ...state,
                ConclusionInfo: {
                    ...state.ConclusionInfo,
                    loading: true,
                    data: action.payload
                }
            }

        case Types.GET_SEARCH_CONCLUSION_SUCCESS:
            return{
                ...state,
                ConclusionInfo: {
                    ...state.ConclusionInfo,
                    loading: false,
                    data: action.payload
                }
            }

        case Types.GET_SEARCH_CONCLUSION_FAILURE:
            return {
                ...state,
                ConclusionInfo: {
                    ...state.ConclusionInfo,
                    loading: false,
                    data: {
                        error: action.payload
                    }
                }
            }





        case Types.PUT_UPDATE_CONCLUSION:
            return{
                ...state,
                ConclusionInfo: {
                    ...state.ConclusionInfo,
                    loading: true,
                    data: action.payload
                }
            }

        case Types.PUT_UPDATE_CONCLUSION_SUCCESS:
            return{
                ...state,
                ConclusionInfo: {
                    ...state.ConclusionInfo,
                    loading: false,
                    data: action.payload
                }
            }

        case Types.PUT_UPDATE_CONCLUSION_FAILURE:
            return {
                ...state,
                ConclusionInfo: {
                    ...state.ConclusionInfo,
                    loading: false,
                    data: {
                        error: action.payload
                    }
                }
            }

        default:
            return state;
    }
}

export default reducer;