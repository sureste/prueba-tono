import React from 'react';
import { Text, StyleSheet, View, Page } from '@react-pdf/renderer';

const styles = StyleSheet.create({

    body: {
        flexDirection:'column',
        rowGap:'1vh'
    },
    anexoTitle: {
        textAlign: 'center',
        color: 'purple',
        fontWeight: 800,
        fontSize: 12,
        textTransform: 'uppercase',
        marginBottom:'1.5vh'
    },
    anexoSubTitle: {
        textAlign: 'right',
        fontWeight: 800,
        fontSize: 10,
        marginBottom: 10,
    },

    anexoText:{
        fontSize:'11px',
        lineHeight:'2px'
    },

    bulletPoint: {
        width: 14,
        fontSize: 14,
      },
      containerS: {
        marginTop:'4vh',
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
        fontSize:12,
        textAlign:'center'
    },
});

const AnexoB = () =>( 

    <View style={styles.body} break >

    <View>
        <Text style={styles.anexoTitle}>Anexo B</Text>
        <Text style={styles.anexoTitle}>Constancia de entrega </Text>
        <Text style={styles.anexoSubTitle}>Ciudad de México, _______ del mes de ______________ del 2022</Text>
    </View>

    <View>
    <Text style={styles.anexoText} >
                Por medio de la presente hago constatar que yo ____________________________________
                recibi el vehículo de la marca ____________________ modelo______________________ y
                version_____________________con numero de serie______________________________
                en conjunto con los siguientes documentos del auto:

        </Text>
    </View>


    <View>
    <Text style={styles.anexoText} >
        <Text style={styles.bulletPoint}>•</Text> Póliza de seguro con número __________________.
    </Text>
    </View>

    <View>
    <Text style={styles.anexoText} >
        <Text style={styles.bulletPoint}>•</Text>Placas con número _________________ del estado / ciudad de
                ________________.
        </Text>
    </View>
    


        <View>
        <Text style={styles.anexoText} >
                <Text style={styles.bulletPoint}>•</Text> Tarjeta de circulación con numero ____________________.
            </Text>
        </View>


    
            <View>
            <Text style={styles.anexoText} >
                    <Text style={styles.bulletPoint}>•</Text> Folio de pago de verificación __________________. (en ocasión)
                </Text>
            </View> 
        
            <Text style={styles.anexoText} >
                  El auto se entregó con ___________ km, desde los cuales empezará a correr el kilometraje
                incluido en mi contrato.
                </Text>


                <Text style={styles.anexoTitle}>Anomalia, golpe o falla</Text>
                <Text style={styles.anexoText}>
                                        Pieza o componente dañado: __________________________________________________
                        Descripción: ________________________________________________________________
                        ___________________________________________________________________________
                        *en caso de que este apartado no contenga alguna información o descripción es debido a que el auto se encuentra en perfectas condiciones 

                        Durante el proceso de entrega del auto, el asesor realizó el inventario del automóvil con fotografías de todos los componentes y partes del vehículo; Por lo que recibo el auto tal y como lo evidencian las imágenes y esté formato de validación de entrega.

                </Text>

                <View style={styles.containerS} >

                        <View style={styles.content} >
                            <Text style={styles.names} >
                            ________________________________
                            </Text>
                            <Text style={styles.names} >
                                Nombre y firma del cliente
                            </Text>
                        </View>


                        <View style={styles.content} >
                            <Text style={styles.names} >
                                ________________________________
                            </Text>
                            <Text style={styles.names} >
                               Asesor responsable
                            </Text>
                        </View>



                        </View>


    </View>


);

export default AnexoB;