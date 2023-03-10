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
                    <Text style={styles.clasulasBolds}  >  'D??CIMA CUARTA.- VENTA DEL VEH??CULO ARRENDADO.' </Text>
                   { `Las partes convienen que al vencimiento del plazo a que se refiere el "ANEXO A"y el ???ANEXO C??? del presente contrato, una vez que ???EL ARRENDADOR??? haya cumplido con todas sus obligaciones de pago,  ???EL ARRENDADOR??? le concede a ???EL ARRENDATARIO??? la opci??n de compra del veh??culo arrendado en el presente contrato, mediante el pago de la cantidad de $ ${finalSale} M.N. (${finalSaleText} pesos 00/100 Moneda Nacional). ???EL ARRENDATARIO??? efectuar?? el pago de contado del precio de la compra por el veh??culo arrendado en los siguientes 3 (tres) d??as en que se cubra la parte correspondiente de la ??ltima renta, seg??n se establece en el "ANEXO A" y en el ???ANEXO C??? del presente contrato.`}
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
        
        <Text style={styles.itemContent}  > Le??do que fue el presente contrato por las partes y enteradas del alcance legal de todo el contenido de este, lo firman al calce y al margen para constancia, en la Ciudad de M??xico, M??xico en el mes de { date.locale('es').format('LL') }. </Text>

    </View>
)};

