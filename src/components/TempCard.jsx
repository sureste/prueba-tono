import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { WiDayHail } from 'react-icons/wi'

const TempCard = ({min,max,date}) => {
  return (
    <Flex direction={'column'} align='center' rowGap={'0.8vh'}  >
        <WiDayHail size='25px' color='blue' />
        <Text fontSize='13px' > {date} </Text>
        <Flex>
        <Text fontSize='11px' >{max}º - </Text>
        <Text color={'gray.400'} fontSize='11px' > {min}º </Text>
        </Flex>
    </Flex>
  )
}

export default TempCard