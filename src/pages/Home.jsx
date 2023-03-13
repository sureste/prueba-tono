import * as Yup from 'yup';
import { Box, Button, CheckboxIcon, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, HStack, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, Radio, RadioGroup, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FormContext } from '../Context';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2'; 

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

    phone: Yup.string()
    .min(10,'Ingrese un celular valido')
    .required('Campo obligatorio!'),


    landline: Yup.string()
    .min(10,'Ingrese un celular valido'),

    street : Yup.string().min(2, 'Muy breve!').required('Campo obligatorio!'),

    exterior : Yup.number().required('Campo obligatorio!'),

    interior : Yup.number(),

    colony : Yup.string().min(2, 'Muy breve!').required('Campo obligatorio!'),

    postalNumber: Yup.string().min(5,'Ingrese un codigo postal valido').required('Campo obligatorio!'),

    postalNumberF: Yup.string().min(5,'Ingrese un codigo postal valido'),

    alcaldia: Yup.string().required('Campo obligatorio!'),

    entidad: Yup.string().required('Campo obligatorio!'),

    branch: Yup.string().required('Campo obligatorio!'),

    model: Yup.string().required('Campo obligatorio!'),

    version: Yup.string().required('Campo obligatorio!'),
    
    deliverDate: Yup.string().required('Campo obligatorio!'),

    deliverHour: Yup.string().required('Campo obligatorio!'),
    
    weeklyCost : Yup.number('Ingresar solo numeros!').required('Campo obligatorio!'),
    
    finalSale : Yup.number('Ingresar solo numeros!').required('Campo obligatorio!'),

    insurance : Yup.string().required('Campo obligatorio!'),

    finalSaleText: Yup.string().required('Campo obligatorio!'),

  });

const Home = () => {

    const {setForm} = useContext(FormContext);
    const navigate = useNavigate();
    const today = new Date()
    today.setDate(today.getDate());
    const todayLimit = today.toISOString().split('T')[0];  
  

    const handleSubmit = (values, setSubmitting) => {
      // Envía el formulario
      setForm(values)
      setSubmitting(false);

    };

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
        landline:'',
        email : '',
        rfc : '',
        deliverDate:'',
        deliverHour:'',
        weeklyCost:'',
        street : '',
        exterior:'',
        interior:'',
        colony:'',
        postalNumber:'',
        alcaldia:'',
        entidad:'',
        streetF : '',
        exteriorF:'',
        interiorF:'',
        colonyF:'',
        postalNumberF:'',
        alcaldiaF:'',
        entidadF:'',
        branch:'',
        model:'',
        version:'',
        finalSale:'',
        insurance:'',
        finalSaleText:''
       }}
       validationSchema={SignupSchema}
       onSubmit={(values, { setSubmitting }) => {
        Swal.fire({
          title: '¿Estás seguro?',
          text: 'Una vez enviado no hay vuelta atrás y se tendra que volver a llenar el formulario',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, enviar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            // Envía el formulario
            handleSubmit(values, setSubmitting);
                
          }
        })
        .then(()=>navigate('/pdf'))
      }}
     >
     

    {({ errors, touched , isSubmitting }) => (

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
                <FormLabel>Celular</FormLabel>
                <InputGroup>
                    <InputLeftAddon children='+52' />
                    <Input focusBorderColor='green.300' {...field} type='tel' placeholder='Ingresar numero de celular' maxLength={10} />
                </InputGroup>
                <FormErrorMessage>{form.errors.phone }</FormErrorMessage>
              </FormControl>
            )}
          </Field>

           <Field name='landline' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.landline  && touched.landline }>
                <FormLabel>Telefono fijo </FormLabel>
                <InputGroup>
                    <InputLeftAddon children='+52' />
                    <Input focusBorderColor='green.300' {...field} type='tel' placeholder='Telefono fijo' maxLength={10} />
                </InputGroup>
                <FormErrorMessage>{form.errors.landline }</FormErrorMessage>
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


                <Heading fontSize={'16px'} mt={'10vh'} > Direccion del cliente </Heading>

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
                <Input  focusBorderColor='green.300' {...field} placeholder='Ingresar numero postal...' maxLength={5} />
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


              <Heading  fontSize={'16px'} mt={'10vh'} >  Datos de facturacion </Heading>

              <Field name='rfc' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.rfc  && touched.rfc }>
                <FormLabel>RFC </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar RFC...' maxLength={13} />
                <FormErrorMessage>{form.errors.rfc }</FormErrorMessage>
              </FormControl>
            )}
          </Field>


              <Heading fontSize={'16px'} mt='5vh' > Direccion de facturacion </Heading>
                <Text my='5vh' > Desea utilizar los mismos datos de la direccion del cliente? </Text>
                <Tabs isFitted variant='enclosed' isLazy >
                      <TabList>
                        <Tab>Si!</Tab>
                        <Tab>Ingresar otra direccion</Tab>
                      </TabList>

                      <TabPanels>
                        <TabPanel>
                        <Text>Se usaran los mismos datos de la direccion del cliente!</Text>
                        </TabPanel>
                        <TabPanel>

            <Field name='streetF' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.street  && touched.street }>
                <FormLabel>Calle   </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar calle...' />
                <FormErrorMessage>{form.errors.street }</FormErrorMessage>
              </FormControl>
            )}
          </Field>


           <Field name='exteriorF' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.exterior  && touched.exterior }>
                <FormLabel>N. exterior </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar N. exterior...' />
                <FormErrorMessage>{form.errors.exterior }</FormErrorMessage>
              </FormControl>
            )}
          </Field>


           <Field name='interiorF' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.interior  && touched.interior }>
                <FormLabel>N. interior </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar N. interior...' />
                <FormErrorMessage>{form.errors.interior }</FormErrorMessage>
              </FormControl>
            )}
          </Field>


           <Field name='colonyF' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.colony  && touched.colony }>
                <FormLabel>Direccion del cliente </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar colonia...' />
                <FormErrorMessage>{form.errors.colony }</FormErrorMessage>
              </FormControl>
            )}
          </Field>


           <Field name='postalNumberF' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.postalNumber  && touched.postalNumber }>
                <FormLabel> Numero postal </FormLabel>
                <Input  focusBorderColor='green.300' {...field} placeholder='Ingresar numero postal...' maxLength={5} />
                <FormErrorMessage>{form.errors.postalNumber }</FormErrorMessage>
              </FormControl>
            )}
          </Field>



           <Field name='alcaldiaF' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.alcaldia  && touched.alcaldia }>
                <FormLabel>Alcaldia </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar alcaldia...' />
                <FormErrorMessage>{form.errors.alcaldia }</FormErrorMessage>
              </FormControl>
            )}
          </Field>
           <Field name='entidadF' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.entidad  && touched.entidad }>
                <FormLabel>Entidad federativa </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar entidad federativa...' />
                <FormErrorMessage>{form.errors.entidad }</FormErrorMessage>
              </FormControl>
            )}
          </Field>                        </TabPanel>
                      </TabPanels>
                  </Tabs>


                <Heading fontSize={'16px'} mt={'10vh'} > Datos del vehiculo  </Heading>

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



           <Field name='insurance' >
            {({ field , form }) => (
              <FormControl as ='fieldset' isInvalid={errors.insurance  && touched.insurance }>
                <FormLabel> Seguro de coche </FormLabel>
                <RadioGroup >
                  <HStack spacing='24px'>
                    <Radio {...field} value='AFIRME'>Afirme</Radio>
                    <Radio {...field} value='QUALITAS'>Qualitas</Radio>
                  </HStack>
                </RadioGroup>               
              <FormErrorMessage>{form.errors.insurance }</FormErrorMessage>
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
                    min={todayLimit} 
                    onKeyDown={e => e.preventDefault()}
                    />
                    <FormHelperText> *Utilizar el boton de calendario </FormHelperText>
                <FormErrorMessage>{form.errors.deliverDate }</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name='deliverHour' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.deliverHour  && touched.deliverHour }>
                <FormLabel>Hora de entrega </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='ejemplo : 12:00PM' />
                <FormErrorMessage>{form.errors.deliverHour }</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name='weeklyCost' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.weeklyCost  && touched.weeklyCost }>
                <FormLabel>Renta semanal</FormLabel>
                <InputGroup>
                    <InputLeftElement
                    focusBorderColor='green.300'
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='$'
                    />
                    <Input  {...field} focusBorderColor='green.300' placeholder='Ingresar costo semanal' />
                    <InputRightElement children={<CheckboxIcon color='green.500' />} />
                </InputGroup>
                <FormErrorMessage>{form.errors.weeklyCost }</FormErrorMessage>
              </FormControl>
            )}
          </Field>


          <Field name='finalSale' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.finalSale  && touched.finalSale }>
                <FormLabel>Precio de venta final</FormLabel>
                <InputGroup>
                    <InputLeftElement
                    focusBorderColor='green.300'
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='$'
                    />
                    <Input  {...field} focusBorderColor='green.300' placeholder='Ingresar costo semanal' />
                    <InputRightElement children={<CheckboxIcon color='green.500' />} />
                </InputGroup>
                <FormErrorMessage>{form.errors.finalSale }</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name='finalSaleText' >
            {({ field , form }) => (
              <FormControl isInvalid={errors.finalSaleText  && touched.finalSaleText }>
                <FormLabel>Precio final en escrito </FormLabel>
                <Input focusBorderColor='green.300' {...field} placeholder='Ingresar cantidad escrita, sin incluir "pesos"...' />
                <FormHelperText> *No incluir el sufijo "pesos" </FormHelperText>
                <FormErrorMessage>{form.errors.finalSaleText }</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          
          <Flex my={'4vh'} justify={'center'} >

          <Button 
            mt={4}
            colorScheme='teal'
            type='submit'
            disabled={isSubmitting}
            >

            Generar PDF

          </Button>
            </Flex>
         </Form>
       )}
     </Formik>
            </Flex>
  
        </Flex>

        </Box>
    );
}
export default Home;