import RegisterItem from "./RegisterItem";
const ListViewPlus =({Listinfoplus})=>{
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>바코드</th>
                        <th>채혈시간</th>
                        <th>채혈자코드</th>
                        <th>오더번호</th>
                        <th>용기코드</th>
                        <th>검체코드</th>
                        <th>상태코드</th>
                        <th>부적합상태</th>
                    </tr>

                    { Listinfoplus?.data?.length > 0 && Listinfoplus.data.map((data, index) => {
                            return (
                                <RegisterItem
                                    key={index}
                                    barcode={data.barcode}
                                    collectingDt={data.collectingDt}
                                    collectorId={data.collectorId}
                                    orderCode={data.orderCode}
                                    vesselCode={data.vesselCode}
                                    sampleCode={data.sampleCode}
                                    statusCode={data.statusCode}
                                    unsuitableReasonCode={data.unsuitableReasonCode}
                                />
                            );
                        })} 
                </tbody>
            </table>
        </div>
        
    )
}

export default ListViewPlus;