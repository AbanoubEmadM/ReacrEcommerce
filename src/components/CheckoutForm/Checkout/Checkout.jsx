import React , {useState , useEffect} from 'react'
import {Paper , Stepper , Step , StepLabel , Typography , CircularProgress , Divider , Button} from '@material-ui/core'
import useStyles from './styles'
import Address from '../Address';
import Payment from '../Payment';
import {commerce} from '../../../lib/commerce'

const steps = ['Shipping address' , 'Payment details'];
const Checkout = ({cart}) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null)
    useEffect(()=> {
        const generateToken = async () => {
            try{
                const token = await commerce.checkout.generateToken(cart.id,{type:'cart'});
                setCheckoutToken(token)
            }catch(error){

            }
        }
        generateToken()
    },[cart])
    const Confirmation = () => (
        <div>
            Confirmation
        </div>

    )
    
    const Form = () => 
        activeStep === 0 ? <Address CheckoutToken={checkoutToken}/> : <Payment/>
    
    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography varirant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step} </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep.length ? <Confirmation /> : <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout
