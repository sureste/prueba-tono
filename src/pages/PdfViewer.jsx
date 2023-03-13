import Viewer from "./components/Viewer";
import { FormContext } from "../Context";
import { useNavigate } from "react-router-dom";



function PdfViewer() {

    const navigate = useNavigate()
    const { form } = useContext(FormContext);
    const [instance, updateInstance] = usePDF({ document: Viewer });

    if (instance.loading) return <div>Por favor espera en lo que se genera tu PDF ...</div>;

    if (instance.error) return <div>Something went wrong: {error}</div>;

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