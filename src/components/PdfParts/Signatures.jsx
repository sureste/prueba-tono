import React from 'react';
import { Text, StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    containerS: {
        marginTop:'5vh',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    content:{
        width:'35%',
        flexDirection:'column',
        justifyContent:'center',
        rowGap:'5px'
    },
    names:{
        fontSize:8,
        textAlign:'center',
        fontFamily:'Helvetica'
    },
});

const Signatures = ({name}) =>( 

    <View style={styles.containerS} >

                <View style={styles.content} >
                    <Text style={styles.names} >
                        ______________________________________
                    </Text>
                    <Text style={styles.names} >
                        E-MKT GOODS DE MÉXICO, S.A.P.I. DE C.V.
                    </Text>
                    <Text style={styles.names} >
                        Por medio de su representante
                    </Text>
                </View>


                <View style={styles.content} >
                    <Text style={styles.names} >
                        ______________________________________
                    </Text>
                    <Text style={styles.names} >
                        {name}
                    </Text>
                    <Text style={styles.names} >
                        Por su propio derecho
                    </Text>
                </View>



    </View>
   
);

export default Signatures;