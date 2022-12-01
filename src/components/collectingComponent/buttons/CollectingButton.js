import React, {useEffect} from "react";
import GetCheckedRow from "./GetCheckRow";
import {useDispatch} from "react-redux";
import CollectingActions from "../../../redux/modules/Collecting/CollectingActions";
import SAlert from "./SAlert";

let prescribeCode = {
    prescribeCodeList: []
}
const CollectingButton = ({dataProvider, gridView})=>{

    let index=0;

    const dispatch = useDispatch();

    useEffect(() => {

    }, [dataProvider]);

    const click = () => {

        gridView.commit();
        let checkedRow = GetCheckedRow(gridView, dataProvider);

        if(checkedRow.length === 0){
            SAlert("처방을 선택해 주세요!", "", "error");
            return null;
        }

        let rows = dataProvider.getJsonRows();

        for (let i = 0; i < checkedRow.length; i++) {
            if(rows[checkedRow[i]] !== undefined){
                prescribeCode.prescribeCodeList[index] = rows[checkedRow[i]]?.prescribe_code;
                index++;
            }
        }

        dispatch(CollectingActions.putCollectingData(prescribeCode));
        gridView.resetCheckables(true);
        SAlert('채혈 등록이 완료되었습니다!','','success');
        prescribeCode.prescribeCodeList = [];
    }

    return (
            <button className={'collecting-button'} onClick={click}>채혈</button>
    )
}

export default CollectingButton