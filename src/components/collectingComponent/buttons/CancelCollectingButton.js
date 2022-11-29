import React from "react";
import GetCheckedRow from "./GetCheckRow";
import {useDispatch} from "react-redux";
import CollectingActions from "../../../redux/modules/Collecting/CollectingActions";

const prescribeCode = {
    prescribeCodeList: []
}
const CancelCollectingButton = ({dataProvider, gridView})=>{
    const dispatch = useDispatch();
    const click = async ()=>{
        gridView.commit();
        const checkedRow = GetCheckedRow(gridView ,dataProvider);

        let rows = dataProvider.getJsonRows();

        for (let i = 0; i < rows.length; i++) {
            if(rows[checkedRow[i]] !== undefined){
                prescribeCode.prescribeCodeList[i] = rows[checkedRow[i]]?.prescribe_code;
            }
        }


        await dispatch(CollectingActions.cancelCollecting(prescribeCode));
        gridView.resetCheckables(false);

        alert("채혈이 취소 되었습니다!");
    }
    return (
        <button className={'collecting-button'} onClick={click}>채혈취소</button>
    )
}

export default CancelCollectingButton