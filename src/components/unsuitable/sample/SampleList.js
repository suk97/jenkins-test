import SampleItem from "./SampleItem";
import React from "react";

const SampleList = ({sampleInfo}) => {


    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>바코드</th>
                        <th>검사상태</th>
                        <th>바코드출력일자</th>
                        <th>채취일자</th>
                        <th>용기명</th>
                        <th>채취자</th>
                        <th>채혈자</th>
                        <th>처방코드</th>
                    </tr>
                    {sampleInfo.data.barcode &&
                        <SampleItem
                            barcode={sampleInfo.data.barcode}
                            statusName={sampleInfo.data.statusName}
                            barcodeDt={sampleInfo.data.barcodeDt}
                            collectingDt={sampleInfo.data.collectingDt}
                            vesselCode={sampleInfo.data.vesselCode}
                            barcodePrinterId={sampleInfo.data.barcodePrinterId}
                            collectorId={sampleInfo.data.collectorId}
                            prescribeCode={sampleInfo.data.prescribeCode}
                        />
                    }
                </tbody>
            </table>
         </>
    )
}

export default React.memo(SampleList);