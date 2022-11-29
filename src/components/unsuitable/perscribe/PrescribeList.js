import { useSelector } from "react-redux";
import PrescribeItem from "./PrescribeItem";

const PrescribeList = () => {
    const { prescribeInfo } = useSelector((state) => state.prescribeInfo);
    return(
        <>
            <table>
                <tbody>
                    <tr>
                        <th>처방코드</th>
                        <th>의사명</th>
                        <th>오더명</th>
                        <th>내원정보</th>
                        <th>검사상태</th>
                        <th>처방내용</th>
                        <th>처방일자</th>
                    </tr>
                                {prescribeInfo.data.prescribeCode &&
                                <PrescribeItem
                                    prescribeCode={prescribeInfo.data.prescribeCode}
                                    doctorId={prescribeInfo.data.userName}
                                    orderName={prescribeInfo.data.orderName}
                                    visitStatus={prescribeInfo.data.visitStatus}
                                    statusName={prescribeInfo.data.statusName}
                                    prescribeContents={prescribeInfo.data.prescribeContents}
                                    prescribeDt={prescribeInfo.data.prescribeDt}
                                />
                            }
                </tbody>
            </table>
        </>
    )
}

export default PrescribeList;