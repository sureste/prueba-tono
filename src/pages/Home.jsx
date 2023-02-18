import { Box, Button, Flex, FormLabel, Input } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FormContext } from '../Context';


const Home = () => {

    const {setForm,form} = useContext(FormContext);
    const navigate = useNavigate();



    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handlePdf =(e) =>{
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        console.log(form, 'soy el form')
    }

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/pdf')
    }


    return (
        <Flex h={'100vh'} justify={'center'} align='center'  >
            <Flex direction={'column'} p='15px' borderRadius='15px' rowGap='5vh' w={'30%'} border='1px solid purple' boxShadow={'20px'} >
                <Box>
                <FormLabel> Nombre </FormLabel>
                <Input onChange={handleChange} name='name' value={form.name} type='text' placeholder='Ingresa un nombre' />

                <FormLabel>Mes </FormLabel>
                <Input onChange={handleChange} name='month' value={form.month} type='string' placeholder='Ingresa fecha' />

                <FormLabel> Año </FormLabel>
                <Input onChange={handleChange} name='year' value={form.year} type='number' placeholder='Ingresar año ' />

                <FormLabel> Contrato </FormLabel>
                <Input onChange={handleChange} name='contract' value={form.contract} type='string' placeholder='Ingresar numero de contrato' />

                <FormLabel> Numero de telefono </FormLabel>
                <Input onChange={handleChange} name='phone' value={form.phone} type='string' placeholder='55 01 23 45 69' />


                <FormLabel> Correo electronico </FormLabel>
                <Input onChange={handleChange} name='email' value={form.email} type='string' placeholder='example@gmail.com' />


                <FormLabel> Domicilio </FormLabel>
                <Input onChange={handleChange} name='address' value={form.address} type='string' placeholder='Calle ejemplo 12' />


                <FormLabel> RFC </FormLabel>
                <Input onChange={handleChange} name='rfc' value={form.rfc} type='string' placeholder='Ingresar RFC de cliente' />

                <FormLabel> Fecha de entrega </FormLabel>
                <Input onChange={handleChange} name='deliverDate' value={form.deliverDate} type='string' placeholder='Ingresa fecha' />

                <FormLabel> Costo semanal </FormLabel>
                <Input onChange={handleChange} name='weeklyCost' value={form.weeklyCost} type='number' placeholder='Precio $' />

                </Box>
                <Button onClick={handlePdf} > Subir pdf </Button>
                <Button onClick={handleClick} >
                    Ir al pdf
                </Button>
            </Flex>
        </Flex>
    );
}
export default Home;