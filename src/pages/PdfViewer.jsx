import Viewer from "./components/Viewer";
import { FormContext } from "../Context";
import { useNavigate } from "react-router-dom";



function PdfViewer() {

    const navigate = useNavigate()
    const { form } = useContext(FormContext);

    if(form.name.length === 0){
        navigate('/')
    }

    return (
        <div >
            <Viewer />
        </div>
    );
}
export default PdfViewer;