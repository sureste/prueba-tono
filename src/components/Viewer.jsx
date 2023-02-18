import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Font
} from "@react-pdf/renderer";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from '../Context';
import AnexoB from "./PdfParts/AnexoB";
import { ClauItem, ClauItem2, ClauItem3, ListC } from "./PdfParts/Clausulas";
import List, { DefItem, DeclaItem, DeclaItem2, ClauList, ClauList2, ClauList3 } from "./PdfParts/Definiciones";
import Signatures from "./PdfParts/Signatures";
import {Table} from './PdfParts/Table'


// Create styles
const styles = StyleSheet.create({
    page: {
        padding: 40,
    },

    body:{
        width:'90%',
    },

    headText: {
        width: '100%',
        fontSize:'8px',
        textAlign: 'justify',
    },

    definicionesText:{
        fontSize:'8px',
        textAlign:'justify',
    },

    definicionesBold:{

    },

    viewer: {
        width: '100vw', 
        height: '100vh',
    },

    defContainer : {
        marginTop:'20px'
    },

    declContainer : {
        marginTop:'20px',
        flexDirection:'column',
        rowGap:'20px'
    },

    title: {
        textAlign: 'center',
        color:'red',
        fontWeight: 800,
        fontSize: 8,
        marginBottom: 10,
        textTransform: 'uppercase',
    },
});

Font.register({
    family: 'Roboto',
    src: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap',
});

// Create Document Component
function Viewer() {


    const {form} = useContext(FormContext);
    const navigate = useNavigate()


    useEffect(() => {
        if (!form.name.length) {
            return navigate('/')
        }
    }, [])

    

    

    return (
        <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page style={styles.page} size="A4" wrap>
                    <View style={styles.body}>
                        <Text style={styles.headText}>
                            CONTRATO DE ARRENDAMIENTO DE VEHÍCULO QUE EN TÉRMINOS DE LO DISPUESTO POR EL CAPÍTULO VI,
                            DEL CÓDIGO CIVIL PARA EL DISTRITO FEDERAL (AHORA CIUDAD DE MÉXICO), CELEBRAN POR UNA PARTE E-
                            MKT GOODS DE MÉXICO S.A.P.I. DE C.V., REPRESENTADA EN ESTE ACTO POR SU APODERADO LEGAL EL C.
                            MAIRON ESTEBAN SANDOVAL GÓMEZ, A QUIEN EN LO SUCESIVO SE LE DENOMINARÁ “EL ARRENDADOR” Y,
                            POR LA OTRA, EL C. {form.name}, POR SU PROPIO DERECHO, A QUIEN PARA LOS EFECTOS DE
                            ESTE CONTRATO SE LE DENOMINARÁ COMO “EL ARRENDATARIO” Y CUANDO ACTUEN CONJUNTAMENTE SE
                            LES DENOMINARÁ COMO “LAS PARTES”, QUIENES SE SUJETAN A LAS SIGUIENTES, DEFINICIONES,
                            DECLARACIONES Y CLÁUSULAS:
                        </Text>

                    <View style={styles.defContainer} >
                        <Text style={styles.title} > D E F I N I C I O N E S </Text>

                        <List>
                            
                                <DefItem />
                        </List>
                    </View>




    
                    <View style={styles.declContainer} >
                        <Text style={styles.title} > D E C L A R A C I O N E S </Text>
                        <Text style={styles.definicionesText} > PRIMERA.- DECLARA “EL ARRENDADOR”, A TRAVÉS DE SU REPRESENTANTE LEGAL QUE: </Text>
                        <List>
                            <DeclaItem />
                        </List>
                    </View>


                    <View style={styles.declContainer} >
                        <Text style={styles.title} > D E C L A R A C I O N E S </Text>
                            <Text style={styles.definicionesText} > SEGUNDA.- DECLARA “EL ARRENDATARIO”: </Text>
                        <List>
                            <DeclaItem2 />
                        </List>
                    </View>



                    <View style={styles.declContainer} >
                        <Text style={styles.title} >  C L Á U S U L A S  </Text>
                        <ListC>

                            <ClauItem />
                        </ListC>

                            <Text style={styles.definicionesText} > En el cumplimiento del presente contrato “EL ARRENDADOR” se obliga a: </Text>
                            <List>
                                <ClauList />
                            </List>


                            <Text style={styles.definicionesText} > Para los efectos de este contrato, son obligaciones de “EL ARRENDATARIO”: </Text>
                            <List>
                                <ClauList2 />
                            </List>

                            <ListC>
                                <ClauItem2 />
                            </ListC>

                            <List>
                                <ClauList3 />
                            </List>

                            <ListC>
                                {/* Es mejor encontrar la manera de pasarle la fecha al componente */}
                                <ClauItem3 month={form.month} year={form.year} />

                            </ListC>

                             </View>
                            
                            <Signatures name={form.name} />


                            <Table contract = { form.contract } phone ={ form.phone } deliverDate={form.deliverDate} weeklyCost={form.weeklyCost} name={form.name} rfc={form.rfc} email={form.email} address={form.address} />

                            <Signatures name={form.name} />

                            {/* <AnexoB />  */}

                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}
export default Viewer;