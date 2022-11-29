import '../../styles/resultCheck/modal.scss';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import BatteryFullOutlinedIcon from '@mui/icons-material/BatteryFullOutlined';
import SmsDataList from './SmsDataList';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const ResultModal = ({
    open,
    close,
    patientNo,
    patientPhoneNumber,
    patientName,
}) => {
    const data = {
        patientName: patientName,
        patientNo: patientNo,
        patientPhoneNumber: patientPhoneNumber,
    }; // 리팩토링때 수정예정 ... 221124

    return (
        <>
            <div
                className={open ? 'openModal modal modal-background' : 'modal'}
                onClick={close}
            />
            <div className="modal-wrap">
                <div className={open ? 'openModal modal phone' : 'modal'}>
                    {open ? (
                        <div className="modal-in-wrap phone">
                            <header>
                                <div className="camera-wrap">
                                    <ul>
                                        <li className="sound"></li>
                                        <li className="camera"></li>
                                    </ul>
                                </div>
                                <ul className="top-icon">
                                    <li>
                                        <SignalCellularAltOutlinedIcon />
                                    </li>
                                    <li>
                                        <WifiOutlinedIcon />
                                    </li>
                                    <li>
                                        <BatteryFullOutlinedIcon />
                                    </li>
                                </ul>
                            </header>
                            <SmsDataList data={data} close={close} resultInfo />
                        </div>
                    ) : null}
                </div>

                <div className={open ? 'openModal modal' : 'modal'}>
                    {open ? (
                        <div className="modal-in-wrap">
                            <header>
                                <MailOutlineOutlinedIcon />
                                결과발송
                            </header>

                            <footer></footer>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default ResultModal;
