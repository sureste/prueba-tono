import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { ClausulasList, ClausulasList2, ClausulasList3, ClausulasList3_1 } from '../PdfData/ClausulasList';
import moment from 'moment';
import 'moment/locale/es';


const styles = StyleSheet.create({

    clausulasContainer:{
        flexDirection:'column',
        rowGap:'10px',

    },

    item: {
        flexDirection: 'row',
        alignContent: 'center',

    },
  
    
    itemContent: {
        textAlign: 'justify',
        fontSize: 8,
        fontFamily:'Helvetica',
        width:'100%'

    },

    clasulasBolds : {
        textAlign: 'justify',
        fontSize: 8,
        fontFamily:'Helvetica-Bold'        
    }

});






export const ListC = ({ children }) => children;

export const ClauItem = () => (
    <View style={styles.clausulasContainer} >

        {

            ClausulasList.map(({ title ,description }) => {
                return (
                    <View style={styles.item}  >
                        <Text style={styles.itemContent} break > {title ?  <Text style={styles.clasulasBolds} > { title } </Text>  : '' } {description} </Text>

                    </View>
                )
            })
        }
    </View>
);

export const ClauItem2 = () => (
    <View style={styles.clausulasContainer} >

        {

            ClausulasList2.map(({ title ,description }) => {
                return (
                    <View style={styles.item}  >
                        <Text style={styles.itemContent} break > {title ?  <Text style={styles.clasulasBolds} > { title } </Text>  : '' } {description} </Text>

                    </View>
                )
            })
        }
    </View>
);

export const ClauItem3 = ( {deliverDate, finalSale,finalSaleText } ) =>{
    let date = moment(deliverDate, 'YYYY-MM-DD')
    
    return (
        <View style={styles.clausulasContainer} >

        {
            
            ClausulasList3.map(({ title ,description }) => {
                return (
                    <View style={styles.item}  >
                        <Text style={styles.itemContent}  > {title ?  <Text style={styles.clasulasBolds} > { title } </Text>  : '' } {description} </Text>
                    </View>
                )
            })
        }
            
            <View style={styles.item} >

                <Text style={styles.itemContent} >
                    <Text style={styles.clasulasBolds}  >  'DÉCIMA CUARTA.- VENTA DEL VEHÍCULO ARRENDADO.' </Text>
                   { `Las partes convienen que al vencimiento del plazo a que se refiere el "ANEXO A"y el “ANEXO C” del presente contrato, una vez que “EL ARRENDADOR” haya cumplido con todas sus obligaciones de pago,  “EL ARRENDADOR” le concede a “EL ARRENDATARIO” la opción de compra del vehículo arrendado en el presente contrato, mediante el pago de la cantidad de $ ${finalSale} M.N. (${finalSaleText} pesos 00/100 Moneda Nacional). “EL ARRENDATARIO” efectuará el pago de contado del precio de la compra por el vehículo arrendado en los siguientes 3 (tres) días en que se cubra la parte correspondiente de la última renta, según se establece en el "ANEXO A" y en el “ANEXO C” del presente contrato.`}
                </Text>
            </View>

            {
            
            ClausulasList3_1.map(({ title ,description }) => {
                return (
                    <View style={styles.item}  >
                        <Text style={styles.itemContent}  > {title ?  <Text style={styles.clasulasBolds} > { title } </Text>  : '' } {description} </Text>
                    </View>
                )
            })
        }
        
        <Text style={styles.itemContent}  > Leído que fue el presente contrato por las partes y enteradas del alcance legal de todo el contenido de este, lo firman al calce y al margen para constancia, en la Ciudad de México, México en el mes de { date.locale('es').format('LL') }. </Text>

    </View>
)};

