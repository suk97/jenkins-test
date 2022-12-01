import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import '../../styles/collecting.scss'
import {useEffect} from "react";

const IncommingInfo = ({info, buttonForPrescribeInfo}) => {
    // console.log("incomming");
    // console.log(info);

    // const clickButton = (e) => {
    //     e.preventDefault();
    //
    // }
    //     [sampleInfo]
    // );

    useEffect(() => {

        const ul = document.querySelectorAll(".visit-btn");

        for (let i = 0; i < ul.length; i++) {
            ul[i].addEventListener('click', (e) => {
                buttonForPrescribeInfo(ul[i].getAttribute('data-key'));
            })
        }
        ;
    },[info,buttonForPrescribeInfo ]);


    return (
            <div className={'left-table patient-comming'}>
                <div className={"content-title"}>
                    <AssignmentOutlinedIcon/>
                    <h3>내원 정보</h3>
                </div>
                <div className={"table visit-table"}>
                    <ul className={"first-li"}>
                        <li className={"fl table-title comming-table"}>진료과</li>
                        <li className={"fl table-title comming-table visit-dt"}>내원일자</li>
                        <li className={"fl table-title comming-table"}>진료의</li>
                        <li className={"fl table-title comming-table"}>상태</li>
                    </ul>
                    {
                        info.length > 0 ? info.map((data, index) => {

                                // {/*FIXEME 아래는 스크롤 처리 */}
                                return (
                                    <ul className={"second-li visit-btn"} key={data?.visitCode} data-key={data?.visitCode}>
                                        <li className={"fl comming-table"}>{data?.departmentName}</li>
                                        <li className={"fl comming-table visit-dt"}>{data?.visitDt}</li>
                                        <li className={"fl comming-table"}>{data?.userName}</li>
                                        <li className={"fl comming-table"}>{data?.visitStatus}</li>
                                    </ul>
                                )
                            }
                        ) : ''
                    }
                </div>
            </div>
    );
}

export default IncommingInfo;