import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { useGetTempQuery } from '../services/weatherApi'
import TempCard from './TempCard'

const PlacesList = ({list}) => {

  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  
  const query = {
    lat : list.lat,
    lon : list.long
  }
  //Aqui va el hook de weather api y al hacer click va al detalle de los proximos 7 dias
  
  const date = new Date();
  console.log(date.addDays(5) , 'magiaaa' );

  const { data, error, isLoading } = useGetTempQuery(query)
  console.log(data,'soy la data')

  
  if(isLoading){
    return(
      <div>
        Cargando...
      </div>
    )
  }




  return (
    <>
      <Flex borderRadius='23px' bgColor={'#FBFBFB'} pt={'1.2vh'} direction={'column'} rowGap='2vh' m='0.5vw' w='30%' h='400px' boxShadow={' 13px 15px 52px -11px rgba(0,0,0,0.75);'}  >
        <Heading fontSize={'20px'} textAlign='center' >   {list.display}  </Heading>

        <Flex ml='1vw' w={'100%'}  justify='space-around' >
        <Flex direction={'column'} w='50%'   >
        <Text> Ciudad :  {list.city_name}  </Text>
          <Text> {date.toLocaleDateString()} </Text>
          <Text> {data?.current.temp}º </Text>
        </Flex>


          <Box w={'50%'} h='20%'>
              <Image w={'50%'}  src='https://www.thoughtco.com/thmb/QIHGvOYobApZ_sY6xRjIkBdhcqg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/521928855-56a9e2925f9b58b7d0ffac0a.jpg' />
          </Box>

        </Flex>
          <Text textAlign='center' > Temperatura en la proxima semana </Text>
          <Flex m='10px' alignSelf={'center'} wrap={'wrap'} gap='0.2vw' justify='space-around' w='80%' >
             {data?.daily.slice(1).map((ele,index) =>{
              let fecha = date.addDays(index + 1)
               return(
                <TempCard min={ele.temp.min} max = {ele.temp.max} date={fecha.toLocaleDateString()}  />
              )
            })}
            </Flex>
       
    </Flex>
            </>
  )
}

export default PlacesList