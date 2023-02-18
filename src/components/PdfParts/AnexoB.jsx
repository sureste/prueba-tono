import React from 'react';
import { Text, StyleSheet, View, Page } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 40,
    },

    body: {
        width: '90%',
    },
    anexoTitle: {
        textAlign: 'center',
        color: 'purple',
        fontWeight: 800,
        fontSize: 12,
        textTransform: 'uppercase',
    },
    anexoSubTitle: {
        textAlign: 'right',
        color: 'red',
        fontWeight: 800,
        fontSize: 8,
        marginBottom: 10,
    },
});

const AnexoB = () =>( 
    <Page  style={styles.page}  >

    <View style={styles.body} >


        <Text style={styles.anexoTitle}>Anexo B</Text>
        <Text style={styles.anexoTitle}>Constancia de entrega </Text>
        <Text style={styles.anexoSubTitle}>{ 'Ciudad de México, _______ del mes de ______________ del 2022' }</Text>
        <Text>
                Por medio de la presente hago constatar que yo ____________________________________
                recibi el vehículo de la marca ____________________ modelo______________________ y
                version_____________________con numero de serie______________________________
                en conjunto con los siguientes documentos del auto:
        </Text>
        <Text>
                Por medio de la presente hago constatar que yo ____________________________________
                recibi el vehículo de la marca ____________________ modelo______________________ y
                version_____________________con numero de serie______________________________
                en conjunto con los siguientes documentos del auto:

        </Text>

        <Text>
                ● Póliza de seguro con número __________________.
                ● Placas con número _________________ del estado / ciudad de
                ________________.
                ● Tarjeta de circulación con numero ____________________.
                ● Folio de pago de verificación __________________. (en ocasión)
                El auto se entregó con ___________ km, desde los cuales empezará a correr el kilometraje
                incluido en mi contrato.
        </Text>

    </View>

    </Page>

);

export default AnexoB;