import React from "react";
import '../../../styles/unsuitable/default_data.scss';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import { useSelector } from "react-redux";

const DefaultData = () => {
    const {sampleInfo} = useSelector((state) => state.sampleInfo);

    return (
        <div className="default1">
            <div className="default-wrap1">
                <div className="default-icon1"><WarningOutlinedIcon /></div>
                    {sampleInfo.data.message? 
                    <>
                        <h3>{sampleInfo.data.message}</h3>
                        <p>바코드를 다시 입력해주세요.</p>
                    </>
                    : 
                    <>
                        <h3>입력된 데이터가 없습니다.</h3>
                        <p>바코드를 입력 후 조회해 주세요.</p>
                    </>
                }
            </div>
        </div>
    )
}

export default DefaultData;