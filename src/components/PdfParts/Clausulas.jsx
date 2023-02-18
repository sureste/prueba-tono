import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { ClausulasList, ClausulasList2, ClausulasList3 } from '../PdfData/ClausulasList';
const styles = StyleSheet.create({

    clausulasContainer:{
        flexDirection:'column',
        rowGap:'10px'
    },

    item: {
        flexDirection: 'row',
        alignContent: 'center',
    },
  
    
    itemContent: {
        textAlign: 'justify',
        fontSize: 8
    },

    clasulasBolds : {
        textAlign: 'justify',
        fontSize: 8,
        color:'red'
        
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

export const ClauItem3 = ( {month , year} ) => (
    <View style={styles.clausulasContainer} >

        {

            ClausulasList3.map(({ title ,description }) => {
                return (
                    <View style={styles.item}  >
                        <Text style={styles.itemContent} break > {title ?  <Text style={styles.clasulasBolds} > { title } </Text>  : '' } {description} </Text>
                    </View>
                )
            })
        }
        <Text style={styles.itemContent} break > Leído que fue el presente contrato por las partes y enteradas del alcance legal de todo el contenido de este, lo firman al calce y al margen para constancia, en la Ciudad de México, México en el mes de {month} del {year}. </Text>

    </View>
);