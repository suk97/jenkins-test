import React from "react";
import GetCheckedRow from "./GetCheckRow";
import {useDispatch} from "react-redux";
import CollectingActions from "../../../redux/modules/Collecting/CollectingActions";

const prescribeCode = {
    prescribeCodeList: []
}
const CollectingButton = ({dataProvider, gridView})=>{

    const dispatch = useDispatch();
    const click = async () => {

        gridView.commit();
        let checkedRow = GetCheckedRow(gridView, dataProvider);

        if(checkedRow[0] === undefined){
            alert("처방을 선택해주세요!");
            return null;
        }

        console.log(checkedRow);

        let rows = dataProvider.getJsonRows();

        for (let i = 0; i < rows.length; i++) {
            if(rows[checkedRow[i]] !== undefined){
                prescribeCode.prescribeCodeList[i] = rows[checkedRow[i]]?.prescribe_code;
            }
        }

        dispatch(CollectingActions.putCollectingData(prescribeCode));
        gridView.resetCheckables(true);
        alert("채혈등록이 되었습니다");
    }

    return (
            <button className={'collecting-button'} onClick={click}>채혈</button>
    )
}

export default CollectingButton