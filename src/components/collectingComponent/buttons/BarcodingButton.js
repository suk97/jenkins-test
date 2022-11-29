import React from "react";
import {useDispatch, useSelector} from "react-redux";
import BarcodeActions from "../../../redux/modules/Collecting/BarcodeActions";
import GetCheckedRow from "./GetCheckRow";

const prescribeCode = {
    prescribeCodeList: []
}
const BarcodingButton = ({dataProvider, gridView, print}) => {
    const { collecting } = useSelector((state)=> state.BarcodeInfo);
    const dispatch = useDispatch();
    const click = async () => {

        gridView.commit();
        let checkedRow = GetCheckedRow(gridView, dataProvider);

        if(checkedRow[0] === undefined){
            alert("처방을 선택해주세요!");
            return null;
        }

        let rows = dataProvider.getJsonRows();
        console.log(rows);

        for (let i = 0; i < rows.length; i++) {
            if(rows[checkedRow[i]] !== undefined){
                prescribeCode.prescribeCodeList[i] = rows[checkedRow[i]]?.prescribe_code;
            }
        }
            console.log("prescribeCodeList");
            console.log(prescribeCode.prescribeCodeList);

       await dispatch(BarcodeActions.postPrescribeData(prescribeCode));
        gridView.resetCheckables(true);
        console.log("collecting");
        console.log(collecting);
        print();
    }
    return (
        <button className={'collecting-button'} onClick={click}>채취</button>
    )
}

export default BarcodingButton;