import React from 'react';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { defsData } from '../PdfData/DefinicionesList';
import { DeclaracionesList, DeclaracionesList2 } from '../PdfData/DeclaracionesList';
import { clausulaLetter, clausulaLetter2, ClausulasLetter3 } from '../PdfData/ClausulasList';




Font.register({family:'Helvetica'})


const styles = StyleSheet.create({

    definicionContainer:{
        flexDirection:'column',
        rowGap:'15px',
    },

    item: {
        flexDirection: 'row',
        alignContent:'center',
        marginLeft:'30px',

    },
    letterPoint: {
        fontSize: 8,
        marginRight:17
    },

    letterPointD: {
        fontSize: 8,
        marginRight:10
    },
    itemContent: {
        textAlign: 'justify',
        fontSize: 8 ,
        fontFamily:'Helvetica',
        width:'100%'
    },

    defTitle:{
        fontSize:8,
        fontFamily:'Helvetica-Bold',
        fontWeight:'bold'
    }
});

const List = ({ children }) => children;

export const DefItem = () => (
    <View style={styles.definicionContainer} >

            {
            
            defsData.map(({letter , title , description}) =>{
                return (
                    <View style={styles.item}  > 
                        <View>
                            <Text style={styles.letterPoint}> {letter}) </Text>
                        </View>

                        <Text style={styles.itemContent}  > <Text style={styles.defTitle} > {title} </Text> {description} </Text>
                        
                    </View>
                ) 
            })
            }
    </View>
);


export const DeclaItem = () =>(


    <View style={styles.definicionContainer} >

        {

            DeclaracionesList.map(({ letter, description }) => {
                return (
                    <View style={styles.item} >
                        <View>
                            <Text style={styles.letterPointD}> {letter}) </Text>
                        </View>
                        <Text style={styles.itemContent}> {description} </Text>
                    </View>
                )
            })
        }


    </View>


)
export const DeclaItem2 = () =>(


    <View style={styles.definicionContainer} >

        {

            DeclaracionesList2.map(({ letter, description }) => {
                return (
                    <View style={styles.item} >
                        <View>
                            <Text style={styles.letterPointD}> {letter}) </Text>
                        </View>
                        <Text style={styles.itemContent}>  {description} </Text>
                    </View>
                )
            })
        }


    </View>


)


export const ClauList = () =>(
    <View style={styles.definicionContainer} >

        {

            clausulaLetter.map(({ letter, description }) => {
                return (
                    <View style={styles.item} >
                        <View>
                            <Text style={styles.letterPointD}> {letter}) </Text>
                        </View>
                        <Text style={styles.itemContent}>  {description} </Text>
                    </View>
                )
            })
        }


    </View>
)

export const ClauList2 = () =>(
    <View style={styles.definicionContainer} >

        {

            clausulaLetter2.map(({ letter, description }) => {
                return (
                    <View style={styles.item} >
                        <View>
                            <Text style={styles.letterPointD}> {letter}) </Text>
                        </View>
                        <Text style={styles.itemContent}>  {description} </Text>
                    </View>
                )
            })
        }


    </View>
)

export const ClauList3 = () =>(
    <View style={styles.definicionContainer} >

        {

            ClausulasLetter3.map(({ letter, description }) => {
                return (
                    <View style={styles.item} >
                        <View>
                            <Text style={styles.letterPointD}> {letter}) </Text>
                        </View>
                        <Text style={styles.itemContent}>  {description} </Text>
                    </View>
                )
            })
        }


    </View>
)


export default List;