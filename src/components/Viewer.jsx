import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Font,
    Image
} from "@react-pdf/renderer";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from '../Context';
import AnexoB from "./PdfParts/AnexoB";
import AnexoC from "./PdfParts/AnexoC";
import { ClauItem, ClauItem2, ClauItem3, ListC } from "./PdfParts/Clausulas";
import List, { DefItem, DeclaItem, DeclaItem2, ClauList, ClauList2, ClauList3 } from "./PdfParts/Definiciones";
import Signatures from "./PdfParts/Signatures";
import {Table} from './PdfParts/Table'
import HeaderImg from './PdfData/Header.png'
 

Font.register({family:'Helvetica'})


// Create styles
const styles = StyleSheet.create({
    page: {
        paddingBottom:30
    },

    body:{
        width:'90%',
        padding: 35,

    },

    headText: {
        width: '100%',
        fontSize:'8px',
        textAlign: 'justify',
        fontFamily:'Helvetica-Bold'
    },

    definicionesText:{
        fontSize:'8px',
        textAlign:'justify',
        fontFamily:'Helvetica-Bold'
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
        fontWeight: 800,
        fontSize: 8,
        marginBottom: 10,
        textTransform: 'uppercase',
        fontFamily:'Helvetica-Bold'
    },
    tableDescription:{
        fontSize:8,
        marginTop: '10px'
    },
    pageNumber:{
        fontSize:'11px',
        textAlign:'right',
        paddingTop:'15px',
        marginRight:'40px'
    },
    header:{
        width:'100vw',
    }

});

Font.register({
    family: 'Helvetica'});

// Create Document Component
function Viewer() {


    const {form} = useContext(FormContext);
    const navigate = useNavigate()


    useEffect(() => {
        if (!form.firstName) {
            return navigate('/')
        }
    }, [])

    

    

    return (
        <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page style={styles.page} size="A4" wrap>
                <Image style={styles.header} src={HeaderImg} fixed />
                    <View style={styles.body}>
                        <Text style={styles.headText}>
                            CONTRATO DE ARRENDAMIENTO DE VEHÍCULO QUE EN TÉRMINOS DE LO DISPUESTO POR EL CAPÍTULO VI,
                            DEL CÓDIGO CIVIL PARA EL DISTRITO FEDERAL (AHORA CIUDAD DE MÉXICO), CELEBRAN POR UNA PARTE E-
                            MKT GOODS DE MÉXICO S.A.P.I. DE C.V., REPRESENTADA EN ESTE ACTO POR SU APODERADO LEGAL EL C.
                            MAIRON ESTEBAN SANDOVAL GÓMEZ, A QUIEN EN LO SUCESIVO SE LE DENOMINARÁ “EL ARRENDADOR” Y,
                            POR LA OTRA, EL C. {`${form.firstName} ${form.lastName}`}, POR SU PROPIO DERECHO, A QUIEN PARA LOS EFECTOS DE
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
                                <ClauItem3 deliverDate={form.deliverDate} />

                            </ListC>

                             </View>
                            
                             <Signatures firstName={form.firstName} lastName={form.lastName} />


                            <Table contract = { form.contract } phone ={ form.phone } deliverDate={form.deliverDate} weeklyCost={form.weeklyCost} firstName={form.firstName} lastName={form.lastName} rfc={form.rfc} email={form.email} street={form.street} exterior={form.exterior} interior={form.interior} colony={form.colony} postalNumber={form.postalNumber} alcaldia = {form.alcaldia} entidad={form.entidad} branch ={form.branch} model={form.model} version={form.version} />

                            <Signatures firstName={form.firstName} lastName={form.lastName} />

                            <AnexoB />  

                            <AnexoC deliverDate={form.deliverDate} weeklyCost={form.weeklyCost} />


                        <Text style={{fontFamily:'Helvetica' , fontSize:'8px' , marginTop:'15px' }} >
                        **El pago semanal señalado en el presente contrato por concepto de arrendamiento, se ajustará al año calendario, esto es, el primer día de los dos siguientes años, de conformidad con la inflación generada en el ejercicio anterior, publicada por el Banco Nacional de México. Esta modificación se verá reflejada en este anexo, generandose así una tabla actualizada con el nuevo costo semanal del arrendamiento.**

                        </Text>


                        <Signatures firstName={form.firstName} lastName={form.lastName} />


                    </View>

                    <Text style={styles.pageNumber} render={({ pageNumber }) => (`${pageNumber}` )} fixed />
                </Page>
            </Document>
        </PDFViewer>
    );
}
export default Viewer;