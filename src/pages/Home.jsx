import * as Yup from 'yup';
import { Box, Button, CheckboxIcon, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FormContext } from '../Context';
import { Formik, Form, Field } from 'formik';
import moment from 'moment';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Ingresar nombre valido!')
      .max(50, 'Too Long!')
    .required('Campo obligatorio!'),
    lastName: Yup.string()
      .min(2, 'Ingresar apellido valido!')
      .max(50, 'Too Long!')
    .required('Campo obligatorio!'),
    email: Yup.string().email('Invalid email').required('Campo obligatorio!'),
    rfc: Yup.string()
    .min(13,'Ingrese un RFC valido')
    .max(13, 'Ingrese un RFC valido')
    .required('Campo obligatorio!'),
    phone: Yup.number()
    .min(10,'Ingrese un celular valido')
    .required('Campo obligatorio!'),
    street : Yup.string().min(2, 'Muy breve!').required('Campo obligatorio!'),
    exterior : Yup.string().min(2, 'Muy breve!').required('Campo obligatorio!'),
    interior : Yup.string().min(2, 'Muy breve!').required('Campo obligatorio!'),
    colony : Yup.string().min(2, 'Muy breve!').required('Campo obligatorio!'),
    postalNumber: Yup.string().required('Campo obligatorio!'),
    alcaldia: Yup.string().required('Campo obligatorio!'),
    entidad: Yup.string().required('Campo obligatorio!'),
    branch: Yup.string().required('Campo obligatorio!'),
    model: Yup.string().required('Campo obligatorio!'),
    version: Yup.string().required('Campo obligatorio!'),
    deliverDate: Yup.string().required('Campo obligatorio!'),
    weeklyCost : Yup.number('Ingresar solo numeros!').required('Campo obligatorio!'),
  });

const Home = () => {

    const {setForm,form} = useContext(FormContext);
    const navigate = useNavigate();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayFormatted = yesterday.toISOString().split('T')[0];  
    const yesterdayM = moment(yesterday, 'YYYY-MM-DD');
  



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
        <Box h={'100vh'} >
        
        <Flex  justify={'center'} align='center'  >
            <Flex direction={'column'} p='15px' borderRadius='15px' rowGap='5vh' w={'800px'} border='1px solid purple' boxShadow={'20px'} >
            <Heading fontSize={'18px'} > Generador de contratos  </Heading>
        <Heading fontSize={'16px'} > Datos del cliente  </Heading>
     <Formik
       initialValues={{
        firstName : '',
        lastName : '' ,
        contract : '',
        phone : '',
        email : '',
        rfc : '',
        deliverDate:'',
        weeklyCost:'',
        street : '',
        exterior:'',
        interior:'',
        colony:'',
        postalNumber:'',
        alcaldia:'',
        entidad:'',
        branch:'',
        model:'',
        version:''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         setForm(values)
        navigate('/pdf')
       }}
     >
     

    {({ errors, touched }) => (

         <Form>
           <Field name='firstName' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.firstName  && touched.firstName }>
                <FormLabel> Nombre(s)  </FormLabel>
                <Input   focusBorderColor='green.300' {...field} placeholder='Nombres...' />
                <FormErrorMessage>{form.errors.firstName }</FormErrorMessage>
              </FormControl>
            )}
          </Field>

           <Field name='lastName' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.lastName  && touched.lastName }>
                <FormLabel>Apellidos cliente</FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Apellidos...' />
                <FormErrorMessage>{form.errors.lastName }</FormErrorMessage>
              </FormControl>
            )}
          </Field>

           <Field name='rfc' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.rfc  && touched.rfc }>
                <FormLabel>RFC </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar RFC...' maxLength={13} />
                <FormErrorMessage>{form.errors.rfc }</FormErrorMessage>
              </FormControl>
            )}
          </Field>

                <Heading fontSize={'16px'} > Direccion del cliente </Heading>

           <Field name='street' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.street  && touched.street }>
                <FormLabel>Calle   </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingreasr calle...' />
                <FormErrorMessage>{form.errors.street }</FormErrorMessage>
              </FormControl>
            )}
          </Field>


           <Field name='exterior' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.exterior  && touched.exterior }>
                <FormLabel>N. exterior </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar N. exterior...' />
                <FormErrorMessage>{form.errors.exterior }</FormErrorMessage>
              </FormControl>
            )}
          </Field>


           <Field name='interior' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.interior  && touched.interior }>
                <FormLabel>N. interior </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar N. interior...' />
                <FormErrorMessage>{form.errors.interior }</FormErrorMessage>
              </FormControl>
            )}
          </Field>


           <Field name='colony' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.colony  && touched.colony }>
                <FormLabel>Direccion del cliente </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar colonia...' />
                <FormErrorMessage>{form.errors.colony }</FormErrorMessage>
              </FormControl>
            )}
          </Field>


           <Field name='postalNumber' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.postalNumber  && touched.postalNumber }>
                <FormLabel> Numero postal </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar numero postal...' />
                <FormErrorMessage>{form.errors.postalNumber }</FormErrorMessage>
              </FormControl>
            )}
          </Field>



           <Field name='alcaldia' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.alcaldia  && touched.alcaldia }>
                <FormLabel>Alcaldia </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar alcaldia...' />
                <FormErrorMessage>{form.errors.alcaldia }</FormErrorMessage>
              </FormControl>
            )}
          </Field>
           <Field name='entidad' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.entidad  && touched.entidad }>
                <FormLabel>Entidad federativa </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar entidad federativa...' />
                <FormErrorMessage>{form.errors.entidad }</FormErrorMessage>
              </FormControl>
            )}
          </Field>

                <Heading fontSize={'16px'} > Datos del vehiculo  </Heading>

           <Field name='branch' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.branch  && touched.branch }>
                <FormLabel>Marca </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Marca del coche...' />
                <FormErrorMessage>{form.errors.branch }</FormErrorMessage>
              </FormControl>
            )}
          </Field>
           <Field name='model' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.model  && touched.model }>
                <FormLabel>Modelo </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar el modelo del coche...' />
                <FormErrorMessage>{form.errors.model }</FormErrorMessage>
              </FormControl>
            )}
          </Field>
           <Field name='version' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.version  && touched.version }>
                <FormLabel>Version </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar la marca del coche...' />
                <FormErrorMessage>{form.errors.version }</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          

           <Field name='contract' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.contract  && touched.contract }>
                <FormLabel>N. de contrato </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='N. de contrato...' />
                <FormErrorMessage>{form.errors.contract }</FormErrorMessage>
              </FormControl>
            )}
          </Field>

           <Field name='email' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.email  && touched.email }>
                <FormLabel>Email </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='example@gmail.com' />
                <FormErrorMessage>{form.errors.email }</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          
           <Field name='phone' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.phone  && touched.phone }>
                <FormLabel>Telefono</FormLabel>
                <InputGroup>
                    <InputLeftAddon children='+52' />
                    <Input focusBorderColor='green.300' {...field} type='tel' placeholder='phone number' maxLength={10} />
                </InputGroup>
                <FormErrorMessage>{form.errors.phone }</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          
           <Field name='deliverDate' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.deliverDate  && touched.deliverDate }>
                <FormLabel> Seleccionar fecha </FormLabel>
                <Input
                    {...field}
                    placeholder="Fecha"
                    size="md"
                    type="date"
                    focusBorderColor='green.300'
                    min={yesterdayFormatted} 
                    onKeyDown={e => e.preventDefault()}
                    />
                    <FormHelperText> *Utilizar el boton de calendario </FormHelperText>
                <FormErrorMessage>{form.errors.deliverDate }</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name='weeklyCost' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.weeklyCost  && touched.weeklyCost }>
                <FormLabel>Costo mensual</FormLabel>
                <InputGroup>
                    <InputLeftElement
                    focusBorderColor='green.300'
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='$'
                    />
                    <Input  {...field} focusBorderColor='green.300' placeholder='Ingresar costo mensual' />
                    <InputRightElement children={<CheckboxIcon color='green.500' />} />
                </InputGroup>
                <FormErrorMessage>{form.errors.weeklyCost }</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          
          <Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
         </Form>
       )}
     </Formik>
            </Flex>
  
        </Flex>

        </Box>
    );
}
export default Home;