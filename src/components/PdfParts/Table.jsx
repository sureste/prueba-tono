import React from 'react';
import { Text, StyleSheet, View } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    table: {
        display: "table",
        width: "auto",
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
        flexDirection: "row"
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
    }
});

export const Table = ({ contract , phone, deliverDate, weeklyCost , name , rfc , email , address }) => (
   
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
                        <Text style={styles.tableHeadCell}>  a) Nombre o razón social: E MKT GOODS DE MÉXICO S.A.P.I. DE C.V. </Text>
                        <Text style={styles.tableHeadCell}> b) Domicilio: Prolongación Paseo de la Reforma 1015 PISO 5 INT 140, Santa Fe Cuajimalpa, Cuajimalpa de Morelos, Ciudad de México, 05348,  México </Text>
                        <Text style={styles.tableHeadCell}> c) Teléfono: 55 9063 2045  </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableHead} >
                        <Text style={styles.tableHeadCellTitle}>DATOS DE “EL ARRENDATARIO”. </Text>
                        <Text style={styles.tableHeadCell}>  a) Nombre: {name}  </Text>
                        <Text style={styles.tableHeadCell}> b) Domicilio: { address}  </Text>
                        <Text style={styles.tableHeadCell}> c) Teléfono personal: {phone}  Teléfono fijo:  </Text>
                        <Text style={styles.tableHeadCell}> d) Correo electrónico: { email }  </Text>
                        <Text style={styles.tableHeadCell}> e) Registro Federal de Contribuyentes: {rfc}  </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableHead} >
                        <Text style={styles.tableHeadCellTitle}>LUGAR Y FECHA DE ENTREGA Y RECEPCIÓN DEL VEHÍCULO  </Text>
                        <Text style={styles.tableHeadCell}>  Lugar de entrega: Oficinas Administrativas OneCarNow! Lugar de Recepción Oficinas Administrativas OneCarNow! </Text>
                        <Text style={styles.tableHeadCell}> Fecha y hora de entrega: {deliverDate}   Fecha y hora de recepción:  </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableHead} >
                        <Text style={styles.tableHeadCellTitle}>Personalizacion del contrato  </Text>
                        </View>
                    </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Duración del contrato: 36 Meses</Text>
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
                        <Text style={styles.tableCell}>Costo total ${weeklyCost * 15} MXN</Text>
                    </View>
                </View>

                    <View style={styles.tableRow}>
                        <View style={styles.tableHead} >
                        <Text style={styles.tableHeadCellTitle}>  MÉTODO DE PAGO  </Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Tarjeta de crédito o débito</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Transferencia electrónica o depósito</Text>
                    </View>
                     </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableHead} >
                                <Text style={styles.tableHeadCellTitle}>  DATOS DE FACTURACIÓN   </Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>RFC : </Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Nombre o Razón social : </Text>
                            </View>
                     </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>Calle</Text>
                                 <Text style={styles.tableCell}>Número Exterior:</Text>
                                <Text style={styles.tableCell}>Número interior:</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>Colonia:</Text>
                                <Text style={styles.tableCell}>Código Postal:</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}> Alcaldía o Municipio: </Text>
                                <Text style={styles.tableCell}>Entidad Federativa: </Text>
                            </View>
                         </View>



                         <View style={styles.tableRow}>
                            <View style={styles.tableHead} >
                                <Text style={styles.tableHeadCellTitle}> DESCRIPCIÓN DEL OBJETO DEL CONTRATO: CARACTERÍSTICAS DEL AUTO   </Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>Marca : </Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>Modelo :</Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>Versión: </Text>
                            </View>
                         </View>

                         <View style={styles.tableRow}>
                        <View style={styles.tableHead} >
                        <Text style={styles.tableHeadCellTitle}>DOCUMENTACIÓN </Text>
                        <Text style={styles.tableHeadCell}>Documentación que se entregará al arrendatario para amparar la legal tenencia del vehículo: </Text>
                        <Text style={styles.tableHeadCell}>   SEGURO “COBERTURA AMPLIA” </Text>
                        <Text style={styles.tableHeadCell}> Aseguradora: QUALITAS </Text>
                        <Text style={styles.tableHeadCell}> Daños Materiales: Valor del mercado del Vehículo  Deducible: 20% </Text>
                        <Text style={styles.tableHeadCell}> {'Robo total: Valor comercial        Deducible 20%'} </Text>
                        <Text style={styles.tableHeadCell}> Responsabilidad Civil por Daños a Terceros hasta $3,000,000 MXN por evento </Text>
                        <Text style={styles.tableHeadCell}> Asistencia Jurídica: AMPARADA  </Text>
                        <Text style={styles.tableHeadCell}> Asistencia vial: AMPARADA </Text>
                        <Text style={styles.tableHeadCell}> Gastos médicos a ocupantes: $40,000.00MXN por evento </Text>
                        <Text style={styles.tableHeadCell}> Responsabilidad Civil por daños a ocupantes: $1,000,000 </Text>
                        <Text style={styles.tableHeadCell}> Muerte del Conductor por Accidente Automovilístico $100,000.00 MXN </Text>
                        <Text style={styles.tableHeadCellTitle}> ACLARACIONES </Text> 
                        <Text style={styles.tableHeadCell}> Domicilio: Prolongacíon paseo de la Reforma 1015 PISO 5 INT 140 </Text>
                        <Text style={styles.tableHeadCell}> Teléfono: 5590632045 </Text>
                        <Text style={styles.tableHeadCell}> Correo electrónico: estrena@onecarnow.com  </Text>
                        <Text style={styles.tableHeadCell}> {' '} </Text>
                        <Text style={styles.tableHeadCell}> {' '} </Text>
                        <Text style={styles.tableHeadCell}> Autorización para la utilización de información con fines mercadotécnicos o publicitarios.  </Text>
                        <Text style={styles.tableHeadCellTitle}> ___________________________________________________________________________  </Text>
                <Text style={styles.tableHeadCell}> {'El solicitante del servicio SI (    ) NO (    ) acepta que el proveedor ceda o transmita a terceros, con fines mercadotécnicos o publicitarios, la información proporcionada por él con motivo del presente contrato y SI (    ) NO (    ) acepta que el arrendador le envíe publicidad sobre bienes y servicios.'}  </Text>
                        </View>
                    </View>


            </View>
     
);