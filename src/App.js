import React from 'react'
import Navbar from './components/Navbar';
import { reservamosApi, useGetPlacesQuery } from './services/reserApi';
import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react';
import PlacesList from './components/PlacesList';
import './App.css';

function App() {



  const [trigger , result, lastPromiseInfo] = reservamosApi.endpoints.getPlaces.useLazyQuery()

  const [input, setInput] = React.useState('')

  console.log(result, 'spy el')

  if(result.status === 'fulfilled' && result.data.length == 0 ){
    alert('No se encontraron destinos con ese nombre')
  }

  if(result.isLoading === true){
    return(
      <Flex h={'100vh'} >

        Cargando...
      </Flex>
    )
  }

  return (
    <Box bgColor='#6B728E' >

      <Navbar trigger={trigger} />  

    <Flex mt='1vh' ml='3vw' wrap={'wrap'} justify='space-around' w='90%'>
          
    {!result.isUninitialized === true ?
    result.data?.map(ele =>{
      return(
        <PlacesList list={ele} /> 
        )
      })
      : <Flex h={'100vh'} align='center' justify={'center'} > <Heading> Ingresar una ciudad... </Heading>  </Flex>
    }
      </Flex> 
    </Box>
  );
}

export default App;
