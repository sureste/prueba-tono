import React from 'react'
import { Box, Button, Flex, Input } from '@chakra-ui/react'
import './Navbar.css'

const Navbar = ({trigger}) => {

    const [input , setInput] = React.useState('')

    const handleChange = (e) =>{
        setInput(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(input)
        trigger(input)
        setInput('')
    }

  return (
      <Flex justify={'center'} align='center' w={'100%'} h='7vh' bgColor={'#404258'} >
        <div >
            <form onSubmit={handleSubmit} >
                <Flex  >
                <Input  type='text' color={'white'} value={input} onChange={handleChange} placeholder='Ingresa el nombre de una ciudad' />
                <Button ml={'20px'} type='submit'  > Buscar! </Button>
                </Flex>
            </form>
        </div>


    </Flex>
  )
}

export default Navbar