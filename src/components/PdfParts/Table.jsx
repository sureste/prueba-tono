import React from 'react';
import moment from 'moment';
import { Text, StyleSheet, View } from '@react-pdf/renderer';
import 'moment/locale/es';


const styles = StyleSheet.create({
    table: {
        display: "table",
        width: "100%",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0
    },
    tableHead :{
        width: "100%",
        borderStyle: "solid",
        fontSize: 10,
        textAlign:'center',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableHeadCell :{
        textAlign:'left',
        marginTop: 5,
        fontSize: 10,
        fontFamily:'Helvetica',
        fontSize:8
    },

    tableHeadCellTitle :{
        textAlign:'center',
        marginTop: 5,
        fontSize: 10,
        fontFamily:'Helvetica-Bold',
        fontSize:8
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row",
        height:'auto'
    },

    tableCol: {
        width: "50%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCol2:{
        width: "33.3333%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCell: {
        margin: "auto",
        marginTop: 5,
        fontSize: 10,
        fontFamily:'Helvetica',
        fontSize:8
    },
    tableCellRfc: {
        marginTop: 5,
        fontSize: 10,
        fontFamily:'Helvetica',
        fontSize:8,
        textAlign:'left'
    }
});

export const Table = ({ contract , phone, deliverDate, weeklyCost , firstName, lastName , rfc , email , street, streetF ,exterior, exteriorF, interior, interiorF, colony, colonyF, postalNumber, postalNumberF ,alcaldia, alcaldiaF,entidad, entidadF ,branch,model,version, landline , deliverHour , insurance}) => {
    
    let date = moment(deliverDate, 'YYYY-MM-DD')


    return(
        <>
   
            <View style={styles.table} break >

                    <View style={styles.tableRow}>
                        <View style={styles.tableHead} >
                        <Text style={styles.tableHeadCellTitle}>ANEXO A </Text>
                        <Text style={styles.tableHeadCellTitle}>  CONTRATO DE ARRENDAMIENTO DE AUTOS </Text>
                        <Text style={styles.tableHeadCellTitle}> { '  ' } </Text>
                        <Text style={styles.tableHeadCellTitle}> CONTRATO NO : {contract} </Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={styles.tableHead} >
                        <Text style={styles.tableHeadCellTitle}>DATOS DE "EL ARRENDADOR"</Text>
                        <Text style={styles.tableHeadCell}>  a) Nombre o raz??n social: E MKT GOODS DE M??XICO S.A.P.I. DE C.V. </Text>
                        <Text style={styles.tableHeadCell}> b) Domicilio: Prolongaci??n Paseo de la Reforma 1015 PISO 5 INT 140, Santa Fe Cuajimalpa, Cuajimalpa de Morelos, Ciudad de M??xico, 05348,  M??xico </Text>
                        <Text style={styles.tableHeadCell}> c) Tel??fono: 55 9063 2045  </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableHead} >
                        <Text style={styles.tableHeadCellTitle}>DATOS DE ???EL ARRENDATARIO???. </Text>
                        <Text style={styles.tableHeadCell}>  a) Nombre: {`${firstName} ${lastName}`}  </Text>
                        <Text style={styles.tableHeadCell}> b) Domicilio:{`${street} ${exterior} ${colony} ${entidad} ${alcaldia} ${postalNumber}`   }   </Text>
                        <Text style={styles.tableHeadCell}> c) Tel??fono personal: +52 {phone}  Tel??fono fijo:{landline ? `+52 ${landline}` : " " } </Text>
                        <Text style={styles.tableHeadCell}> d) Correo electr??nico: { email }  </Text>
                        <Text style={styles.tableHeadCell}> e) Registro Federal de Contribuyentes: {rfc}  </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableHead} >
                        <Text style={styles.tableHeadCellTitle}>LUGAR Y FECHA DE ENTREGA Y RECEPCI??N DEL VEH??CULO  </Text>
                        <Text style={styles.tableHeadCell}>  Lugar de entrega: Oficinas Administrativas OneCarNow! Lugar de Recepci??n Oficinas Administrativas OneCarNow! </Text>
                        <Text style={styles.tableHeadCell}> {`Fecha y hora de entrega: ${date.locale('es').format('LL')} ${deliverHour}   Fecha y hora de recepci??n: ${date.locale('es').format('LL')} ${deliverHour}`}   </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableHead} >
                        <Text style={styles.tableHeadCellTitle}>Personalizacion del contrato  </Text>
                        </View>
                    </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Duraci??n del contrato: 36 Meses</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Kilometraje anual contratado: 70,000 km</Text>
                    </View>
                </View>

                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Costo semanal ${weeklyCost} </Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Costo total ${weeklyCost * 156} MXN</Text>
                    </View>
                </View>

                    <View style={styles.tableRow}>
                        <View style={styles.tableHead} >
                        <Text style={styles.tableHeadCellTitle}>  M??TODO DE PAGO  </Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Tarjeta de cr??dito o d??bito</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Transferencia electr??nica o dep??sito</Text>
                    </View>
                     </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableHead} >
                                <Text style={styles.tableHeadCellTitle}>  DATOS DE FACTURACI??N   </Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCellRfc}>RFC : {rfc} </Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Nombre o Raz??n social : {`${firstName} ${lastName} `} </Text>
                            </View>
                     </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCellRfc}>Calle :{streetF? streetF : street} </Text>
                                 <Text style={styles.tableCellRfc}>N??mero Exterior:{ exteriorF? exteriorF : exterior} </Text>
                                <Text style={styles.tableCellRfc}>N??mero interior: { exteriorF? interiorF? interiorF : " " : interior } </Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCellRfc}>Colonia: { colonyF? colonyF :  colony} </Text>
                                <Text style={styles.tableCellRfc}>C??digo Postal: { postalNumberF? postalNumberF : postalNumber} </Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCellRfc}> Alcald??a o Municipio: {alcaldiaF? alcaldiaF : alcaldia} </Text>
                                <Text style={styles.tableCellRfc}>Entidad Federativa: {entidadF? entidadF : entidad} </Text>
                            </View>
                         </View>



                         <View style={styles.tableRow}>
                            <View style={styles.tableHead} >
                                <Text style={styles.tableHeadCellTitle}> DESCRIPCI??N DEL OBJETO DEL CONTRATO: CARACTER??STICAS DEL AUTO   </Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCellRfc}>Marca : {branch} </Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCellRfc}>Modelo : {model} </Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCellRfc}>Versi??n: {version} </Text>
                            </View>
                         </View>


                     </View>


                        <View style={styles.table} break > 

                         <View style={styles.tableRow}>
                        <View style={styles.tableHead} >
                        <Text style={styles.tableHeadCellTitle}  >DOCUMENTACI??N </Text>
                        <Text style={styles.tableHeadCell}>Documentaci??n que se entregar?? al arrendatario para amparar la legal tenencia del veh??culo: </Text>
                        <Text style={styles.tableHeadCell}>   SEGURO ???COBERTURA AMPLIA??? </Text>
                        <Text style={styles.tableHeadCell}> Aseguradora: {insurance} </Text>
                        <Text style={styles.tableHeadCell}> Da??os Materiales: Valor del mercado del Veh??culo  Deducible: 20% </Text>
                        <Text style={styles.tableHeadCell}> {'Robo total: Valor comercial        Deducible 20%'} </Text>
                        <Text style={styles.tableHeadCell}> Responsabilidad Civil por Da??os a Terceros hasta $3,000,000 MXN por evento </Text>
                        <Text style={styles.tableHeadCell}> Asistencia Jur??dica: AMPARADA  </Text>
                        <Text style={styles.tableHeadCell}> Asistencia vial: AMPARADA </Text>
                        <Text style={styles.tableHeadCell}> Gastos m??dicos a ocupantes: $40,000.00MXN por evento </Text>
                        <Text style={styles.tableHeadCell}> Responsabilidad Civil por da??os a ocupantes: $1,000,000 </Text>
                        <Text style={styles.tableHeadCell}> Muerte del Conductor por Accidente Automovil??stico $100,000.00 MXN </Text>
                        <Text style={styles.tableHeadCellTitle}> ACLARACIONES </Text> 
                        <Text style={styles.tableHeadCell}> Domicilio: Prolongac??on paseo de la Reforma 1015 PISO 5 INT 140 </Text>
                        <Text style={styles.tableHeadCell}> Tel??fono: 5590632045 </Text>
                        <Text style={styles.tableHeadCell}> Correo electr??nico: estrena@onecarnow.com  </Text>
                        <Text style={styles.tableHeadCell}> {' '} </Text>
                        <Text style={styles.tableHeadCell}> {' '} </Text>
                        <Text style={styles.tableHeadCell}> Autorizaci??n para la utilizaci??n de informaci??n con fines mercadot??cnicos o publicitarios.  </Text>
                        <Text style={styles.tableHeadCellTitle}> ___________________________________________________________________________  </Text>
                        <Text style={styles.tableHeadCell}> {'El solicitante del servicio SI (    ) NO (    ) acepta que el proveedor ceda o transmita a terceros, con fines mercadot??cnicos o publicitarios, la informaci??n proporcionada por ??l con motivo del presente contrato y SI (    ) NO (    ) acepta que el arrendador le env??e publicidad sobre bienes y servicios.'}  </Text>
                        </View>
                        </View>


                    </View>

        </>
     
)};