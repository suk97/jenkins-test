import '../../styles/resultCheck/modal.scss';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import BatteryFullOutlinedIcon from '@mui/icons-material/BatteryFullOutlined';
import SmsDataList from './SmsDataList';

const ResultModal = ({ open, close }) => {
    return (
        <>
            <div
                className={open ? 'openModal modal modal-background' : 'modal'}
                onClick={close}
            />
            <div className='modal-wrap'>
                <div className={open ? 'openModal modal phone' : 'modal'}>
                    {open ? (
                        <div className='modal-in-wrap phone'>
                            <header>
                                <div className='camera-wrap'>
                                    <ul>
                                        <li className='sound'></li>
                                        <li className='camera'></li>
                                    </ul>
                                </div>
                                <ul className='top-icon'>
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
                            <SmsDataList close={close} />
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default ResultModal;
