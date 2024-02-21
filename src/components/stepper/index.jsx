import React, { useEffect, useRef, useState } from 'react'
import "./styles.css";
import CustomerInfo from './componenets/CustomerInfo'
import ShippingInfo from './componenets/ShippingInfo'
import Delivered from './componenets/Delivered'
import PaymentDetails from './componenets/PaymentDetails'

function Stepper() {
    const stepCount = [{
        id: 1,
        stepName: 'Customer Info',
        component: <CustomerInfo />,

    },
    {
        id: 2,
        stepName: 'Shipping Info',
        component: <ShippingInfo />

    },
    {
        id: 3,
        stepName: 'Payment Details',
        component: <PaymentDetails />

    },
    {
        id: 4,
        stepName: 'Delivered',
        component: <Delivered />

    }
    ]

    const [currentStep, setCurrentStep] = useState(1)
    const [isComplete, setIsComplete] = useState(false)
    const stepRef = useRef([])

    const handleNext = () => {
        setCurrentStep((prevStep) => {
            if (prevStep === stepCount.length) {
                setIsComplete(true);
                return prevStep;
            } else {
                return prevStep + 1;
            }
        });
    }




    useEffect(() => {
    }, [])

    return (
        <div className='wrapper'>
            <div className="content">
                {stepCount.map((val, index) => {
                    return (
                        <div className='step_wrapper'>

                            <div
                                key={val.id}
                                ref={(el) => stepRef.current[index] = el}
                                className={`stepper_div ${currentStep > index + 1 || isComplete ? "complete" : ""
                                    } ${currentStep === index + 1 ? "active" : ""} `}
                            >
                                <div className="step-number">
                                    {index + 1}
                                </div>
                                <div className="step-name">{val.stepName}</div>

                            </div>


                        </div>
                    )
                })}

                <div className={`line ${currentStep === stepRef.current ? 'complete' : ''}`}></div>


            </div>
            <div className="comp">
                {stepCount[currentStep - 1]?.component}
            </div>

            <button onClick={handleNext}>Next</button>
        </div>


    )
}

export default Stepper