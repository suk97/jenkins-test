import React from 'react';
import '../../styles/resultCheck/default.scss';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';

const ChartDefaultData = () => {
    return (
        <div className='default'>
            <div className='default-wrap'>
                <div className='default-icon'>
                    <WarningOutlinedIcon />
                </div>
                <h3>입력된 데이터가 없습니다.</h3>
                <p>
                    환자번호 조회 후 체크박스를 클릭하여 데이터를 입력 해주세요.
                </p>
            </div>
        </div>
    );
};

export default ChartDefaultData;
