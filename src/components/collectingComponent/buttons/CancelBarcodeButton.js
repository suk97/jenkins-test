import React from "react";
import GetCheckedRow from "./GetCheckRow";
import {useDispatch} from "react-redux";
import BarcodeActions from "../../../redux/modules/Collecting/BarcodeActions";

const prescribeCode = {
    prescribeCodeList: []
}
const CancelBarcodeButton = ({dataProvider,gridView})=>{

    const dispatch = useDispatch();

    const click = ()=>{
        gridView.commit();
        const checkedRow = GetCheckedRow(gridView ,dataProvider);

        let rows = dataProvider.getJsonRows();

        for (let i = 0; i < rows.length; i++) {
            if(rows[checkedRow[i]] !== undefined){
                prescribeCode.prescribeCodeList[i] = rows[checkedRow[i]]?.prescribe_code;
            }
        }


        dispatch(BarcodeActions.forCancelData(prescribeCode));
        gridView.resetCheckables(false);

        alert("바코드 출력이 취소 되었습니다!");
    }
    return (

        <button className={'collecting-button'} onClick={click}>채취취소</button>

    )
}

export default CancelBarcodeButton;