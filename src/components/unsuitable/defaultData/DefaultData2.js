import React from "react";
import '../../../styles/unsuitable/default_data2.scss';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import { useSelector } from "react-redux";

const DefaultData2 = () => {
    const {userInfo} = useSelector((state) => state.userInfo)

    return (
        <div className="default2">
            <div className="default-wrap2">
                <div className="default-icon2"><WarningOutlinedIcon /></div>
                    {userInfo?.data?.length > 0 && userInfo.data[0].message? 
                    <>
                        <h3>{userInfo.data[0].message}</h3>
                        <p>사용자 이름을 다시 입력해주세요</p>
                    </>
                    : 
                    <>
                        <h3>입력된 데이터가 없습니다.</h3>
                        <p>사용자 이름을 입력 후 조회해 주세요.</p>
                    </>
                }
            </div>
        </div>
    )
}

export default DefaultData2;