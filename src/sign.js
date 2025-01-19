import SignaturePad from "signature_pad";
import { showSignpage } from './signpage.js';
import { setupReview} from './prints.js';

export function setupSign(userinputs, datatables) {
    const container = document.querySelector(".container");
    container.innerHTML = showSignpage();

    const canvas = document.getElementById("signatureCanvas");
    const signaturePad = new SignaturePad(canvas);

    const savebtn = document.getElementById('savebutton');
    const clearbtn = document.getElementById('clearbutton');

    savebtn.addEventListener("click", () => {
        let signatureImage = signaturePad.toDataURL();
        if (signaturePad.isEmpty()) {
            alert("Please provide a signature.");
            return ;
        }
        userinputs.signature = signatureImage;
        setupReview(userinputs, datatables);
    });
    clearbtn.addEventListener("click", () => {
        signaturePad.clear();
    });
}