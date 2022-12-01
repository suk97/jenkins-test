import Swal from "sweetalert2";

const SAlert = (text, smText, icon) =>{
    Swal.fire(
        text,
        smText,
        icon
    )
}

export default SAlert