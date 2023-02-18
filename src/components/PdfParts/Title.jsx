import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    title: {
        textAlign:'center',
        fontWeight:'black',
        fontSize: 8,
        marginBottom: 10,
        textTransform: 'uppercase',
    },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;