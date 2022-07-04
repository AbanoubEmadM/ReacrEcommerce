import React , {useState , useEffect} from 'react';
import { InputLabel , Select , MenuItem , Button , Grid , Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField';
import {commerce} from '../../lib/commerce'
const Address = ({CheckoutToken}) => {
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    const [shippingOptions, setshippingOptions] = useState([])
    const [shippingOption, setshippingOption] = useState('')
    const methods = useForm();

    const fetchCountries = async (CheckoutTokenId) => {
        const {countries} = await commerce.services.localeListCountries(CheckoutTokenId);
        console.log(countries);
       
        setShippingCountries(countries)

    }
    useEffect(() => {
        fetchCountries(CheckoutToken.id)
    },[])
    return (
        <>
            <Typography variant="h6" gutterBottom></Typography>
            <FormProvider {...methods}>
                <form>
                    <Grid container spacing={3}>
                        <FormInput required name='First Name' label="first name"/>
                        <FormInput required name='Last Name' label="Last Name"/>
                        <FormInput required name='Address1' label="Address1"/>
                        <FormInput required name='Email' label="Email"/>
                        <FormInput required name='City' label="City"/>
                        <FormInput required name='Zip' label="Zip"/>
                        {/* <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select fullWidth>
                                <MenuItem>
                                    Select me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping subdevision</InputLabel>
                            <Select fullWidth>
                                <MenuItem >
                                    Select me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Option</InputLabel>
                            <Select fullWidth>
                                <MenuItem>
                                    Select me
                                </MenuItem>
                            </Select>
                        </Grid> */}
                        </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default Address
