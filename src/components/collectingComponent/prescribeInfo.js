/* eslint-disable */
import React, {useEffect, useRef, useState} from 'react'
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import "../../styles/collecting.scss";
import 'realgrid/dist/realgrid-style.css';
import {GridView, LocalDataProvider} from "realgrid";
import {columns, fields} from "./realgrid-data";
import BarcodingButton from "./buttons/BarcodingButton";
import CancelCollectingButton from "./buttons/CancelCollectingButton";
import CollectingButton from "./buttons/CollectingButton";
import CancelBarcodeButton from "./buttons/CancelBarcodeButton";

let options = {
    summaryMode: 'aggregate',
    display: {
        syncGridHeight: "always",
        maxRowHeight: 30
    },
    grouping: {
        enabled: false
    }
};

const PrescribeInfo = ({prescribeInfo, visitNo, initPrescribeCodeInfo}) => {

    const init = useRef(null);
    const [dataProvider, SetDataProvider] = useState();
    const [gridView, setGridView] = useState();
    let dp;
    let gv;

    useEffect(() => {
        const container = init.current;
        dp = new LocalDataProvider(true);
        gv = new GridView(container);

        PrescribeInfoItem(gv, dp, prescribeInfo);

        SetDataProvider(dp);
        setGridView(gv);

        return () => {
            dp.clearRows()
            gv.destroy()
            dp.destroy()
        }
    }, [prescribeInfo]);

    // function checkData() {
    //     return dataProvider.getRowCount();
    // }

    return (
        <div className={'patient-order right'}>
            <div className={'content-title'}>
                <LocalHospitalOutlinedIcon/>
                <h3>처방 정보</h3>
            </div>
                <div
                    style={{height: '5%', width: '85%'}}
                    id={'prescribeInfo-info'} ref={init}>
                </div>
            <div className={'buttons'}>
                <BarcodingButton dataProvider={dataProvider}
                                 gridView={gridView}
                                 visitNo={visitNo}
                                 initPrescribeInfo={initPrescribeCodeInfo}/>
                <CancelBarcodeButton dataProvider={dataProvider} gridView={gridView} visitNo={visitNo}/>
                <CollectingButton dataProvider={dataProvider} gridView={gridView} visitNo={visitNo}/>
                <CancelCollectingButton dataProvider={dataProvider} gridView={gridView} visitNo={visitNo}/>
                <button className={'collecting-button'}>바코드 재발급</button>
            </div>


        </div>
    )
}

const PrescribeInfoItem = (gv, dp, prescribeInfo) => {

    gv.setDataSource(dp);
    dp.setFields(fields);
    gv.setColumns(columns);
    dp.setRows(prescribeInfo);

    gv.checkBar.mergeRule = "value['classification_code']";
    gv.checkBar.width = 30;
    gv.setOptions(options);
    gv.displayOptions.fitStyle = "even";

    gv.footer.visible = false;

    gv.setCheckBar({
        showAll: false
    });
    gv.setStateBar({
        visible: false
    });
    gv.setRowIndicator({
        visible: false
    });
}

export default PrescribeInfo;