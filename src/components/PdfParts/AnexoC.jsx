import React from 'react'
import { Text, StyleSheet, View } from '@react-pdf/renderer';
import {  paymentsArray  } from '../PdfData/Lunes';

const styles = StyleSheet.create({

    content:{
        flexDirection:'column',
        rowGap:'4vh',
        marginTop:'25px'
    },

    anexoTitle: {
        textAlign: 'center',
        fontWeight: 800,
        fontSize: 12,
        textTransform: 'uppercase',
        marginBottom:'1.5vh',
        textTransform:'uppercase'
    },

    tablesContainer:{
        flexDirection:'row'
    },

    table: {
        display: "table",
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0
    },
    tableHead :{
        borderStyle: "solid",
        fontSize: 6,
        textAlign:'center',
        flexDirection: "row"
    },
    tableHeadCell :{
        textAlign:'left',
        marginTop: 5,
        fontSize: 10
    },

    tableHeadCellTitle :{
        textAlign:'center',
        marginTop: 5,
        fontSize: 6,
        color:'red'
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row"
    },

    tableRowLast: {
        flexDirection: "row"
    },

    tableCol: {
        width: "33.3333%",
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
        fontSize: 6
    }
})


const AnexoC = ({weeklyCost}) => {

    const nextDate = paymentsArray()

    

  return (
    <View style={styles.content} break>

        <Text style={styles.anexoTitle} > Anexo C </Text>
        <Text style={styles.anexoTitle} > Tabla de pagos semanales </Text>


        <View style={styles.tablesContainer}>

        <View style={styles.table} >     
        <View style={styles.tableHead}>

                    <View style={styles.tableCol}>
                        <Text style={styles.tableHeadCellTitle}>N. de pago</Text>
                    </View>

                    <View style={styles.tableCol}>
                        <Text style={styles.tableHeadCellTitle}>Fecha de vencimiento</Text>
                    </View>

                    <View style={styles.tableCol}>
                        <Text style={styles.tableHeadCellTitle}>Pago Total</Text>
                    </View>
                </View>

                {nextDate.slice(0,50).map(({day,number}) =>{
                    return (
                <View style={styles.tableRow} >

                <View style={styles.tableCol}>
                        <Text style={styles.tableCell}> {number} </Text>
                    </View>
                <View style={styles.tableCol}>
                        <Text style={styles.tableCell}> {day} </Text>
                    </View>
                <View style={styles.tableCol}>
                        <Text style={styles.tableCell}> ${weeklyCost} </Text>
                    </View>

                </View>
                        )})
                        
                        }
            
              

        </View>

        
        <View style={styles.table} >     
        <View style={styles.tableHead}>

                    <View style={styles.tableCol}>
                        <Text style={styles.tableHeadCellTitle}>N. de pago</Text>
                    </View>

                    <View style={styles.tableCol}>
                        <Text style={styles.tableHeadCellTitle}>Fecha de vencimiento</Text>
                    </View>

                    <View style={styles.tableCol}>
                        <Text style={styles.tableHeadCellTitle}>Pago Total</Text>
                    </View>
                </View>
                {nextDate.slice(50,100).map(({day,number}) =>{
                    return (
                <View style={styles.tableRow} >

                <View style={styles.tableCol}>
                        <Text style={styles.tableCell}> {number} </Text>
                    </View>
                <View style={styles.tableCol}>
                        <Text style={styles.tableCell}> {day} </Text>
                    </View>
                <View style={styles.tableCol}>
                        <Text style={styles.tableCell}> ${weeklyCost} </Text>
                    </View>

                </View>
                        )})
                        
                        }
        </View>





        <View style={styles.table} >     
        <View style={styles.tableHead}>

                    <View style={styles.tableCol}>
                        <Text style={styles.tableHeadCellTitle}>N. de pago</Text>
                    </View>

                    <View style={styles.tableCol}>
                        <Text style={styles.tableHeadCellTitle}>Fecha de vencimiento</Text>
                    </View>

                    <View style={styles.tableCol}>
                        <Text style={styles.tableHeadCellTitle}>Pago Total</Text>
                    </View>
                </View>

                {nextDate.slice(100,150).map(({day,number}) =>{
                    return (
                <View style={styles.tableRow} >

                <View style={styles.tableCol}>
                        <Text style={styles.tableCell}> {number} </Text>
                    </View>
                <View style={styles.tableCol}>
                        <Text style={styles.tableCell}> {day} </Text>
                    </View>
                <View style={styles.tableCol}>
                        <Text style={styles.tableCell}> ${weeklyCost} </Text>
                    </View>

                </View>
                        )})
                        
                        }



        </View>







        <View style={styles.table} >     
        <View style={styles.tableHead}>

                    <View style={styles.tableCol}>
                        <Text style={styles.tableHeadCellTitle}>N. de pago</Text>
                    </View>

                    <View style={styles.tableCol}>
                        <Text style={styles.tableHeadCellTitle}>Fecha de vencimiento</Text>
                    </View>

                    <View style={styles.tableCol}>
                        <Text style={styles.tableHeadCellTitle}>Pago Total</Text>
                    </View>
                </View>

                {nextDate.slice(150,156).map(({day,number}) =>{
                    return (
                <View style={styles.tableRowLast} >

                <View style={styles.tableCol}>
                        <Text style={styles.tableCell}> {number} </Text>
                    </View>
                <View style={styles.tableCol}>
                        <Text style={styles.tableCell}> {day} </Text>
                    </View>
                <View style={styles.tableCol}>
                        <Text style={styles.tableCell}> ${weeklyCost} </Text>
                    </View>

                </View>
                        )})
                        
                        }


        </View>
        

        
        </View>

    </View>



)}

export default AnexoC