import { useSelector } from "react-redux";
import UnsuitableReasonItem from "./UnsuitableReasonItem"

const UnsuitableReasonList = () => {
    const { unsuitableSampleInfo } = useSelector((state) => state.unsuitableSampleInfo);
    
    return (
        <>
            {unsuitableSampleInfo?.data?.length > 0 &&
            unsuitableSampleInfo.data.map((data, index) => {
                if(index !== 0) { 
                return (
                    <li key={index}>
                        <UnsuitableReasonItem
                            key2={index}
                            notificatorId={data.notificatorId}
                            notifiedId={data.notifiedId}
                            query={data.query}
                            sampleBarcode={data.sampleBarcode}
                            selectedReason={data.selectedReason}
                            selectedReasonName={data.selectedReasonName}
                        />
                    </li>
                )}
                return <UnsuitableReasonItem key={index}/> ;
            })
            } 
        </>
            
    )
}
export default UnsuitableReasonList;


