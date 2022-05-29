import styled from "styled-components"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.2)),
    no-repeat url("/img_couverture.jpg") center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    background-color: white;
    padding: 20px;
`
const Title = styled.h1`
    font-style: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    outline: none;
    padding: 10px;
    font-size: 16px;
`
const PasswordContainer = styled.div`
    flex: 1;
    font-size: 16px;
    min-width: 40%;
    margin: 20px 10px 0 0;
    position: relative;
`
const PasswordInput = styled.input`
    width: 100%;
    outline: none;
    font-size: 16px;
    padding: 10px;
`
const CloseEyeIcon = styled(VisibilityOffIcon) `
    color: grey;
    position: absolute;
    right: 10px;
    top: 0px;
    bottom: 0;
    margin: auto 0;
    cursor: pointer;
    &:hover {
        color: #979494;
    }
`
const OpenEyeIcon = styled(VisibilityIcon) `
    color: grey;
    position: absolute;
    right: 10px;
    top: 0px;
    bottom: 0;
    margin: auto 0;
    cursor: pointer;
    &:hover {
        color: #979494;
    }
`
const Agreement = styled.div`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    margin-top: 10px;
    padding: 15px 40px;
    width: 40%;
    font-weight: 600;
    border: 0.5 solid transparent;
    background-color: #212a2f;
    color:white ;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: #212a2f;
        border-color: black ;
        transition: all ease-in 0.2s;
        /* transform: scale(1.01); */
    }
`
const ErrorMessage = styled.p`
    /* flex: 2; */
    width: 100%;
    color: red;
    animation: blink 1.7s linear infinite;
    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.3;
        }
        100% {
            opacity: 1;
        }
    }
`

const Signup = () => {
    const navigate = useNavigate()
    const [isHidden, setIsHidden] = useState(true)

    const formik = useFormik({
        initialValues: {
            firstName:"",
            lastName: "",
            birthDate:"",          
            email:"",
            password:"",
            phoneNumber:"",
            adress:"",
        },
        onSubmit: values => {
            signup(values)
        },
        validateOnChange: false,
        validationSchema: Yup.object({
            firstName: Yup.string()
            .required("Le prénom est requis"),
            lastName: Yup.string()
            .required("Le nom est requis"),
            birthDate: Yup.string()
            .required("la date de naissance est requise"),
            email: Yup.string()
            .email("Email est incorrecte")
            .required("email est requis"),
            password: Yup.string()
            .min(6, "Mot de passe trop court")
            .required("mot de passe requis"),
            phoneNumber: Yup.string()
            .required("numero de telephone requis"),
            adress: Yup.string()
            .required("l'adresse est requis"),
            
        })
    })

    const signup = async values => {
        const response = await fetch ('http://localhost:5000/auth/signup', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })

        // if(response.status >= 400) {
        //     alert("Error")
        // }else {
        //     const userCreation = await response.json()
        //     const user = await log
        // }
    }
    return (
        <motion.Container
            initial= {{ oapcity: 0 }}
            animate= {{ opacity: 1 }}
            exit= {{ opacity: 0 }}
        >
            <Navbar/>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form  onSubmit={formik.handleSubmit}>
                    <Input 
                        placeholder= "prénom"
                        type= "text"
                        name= "firstName"
                        value= {formik.values.firstName}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.firstName && <ErrorMessage>{formik.errors.firstName}</ErrorMessage>}
                    <Input 
                        placeholder= "nom"
                        type= "text"
                        name= "lastName"
                        value= {formik.values.lastName}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.lastName && <ErrorMessage>{formik.errors.lastName}</ErrorMessage>}
                    <Input 
                        placeholder= "email"
                        type= "text"
                        name= "email"
                        value= {formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && <ErrorMessage>{formik.errors.email}</ErrorMessage>}
                    <Input 
                        placeholder= "age" 
                        type= "text"
                        name= "birthDate"
                        value= {formik.values.birthDate}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.birthDate && <ErrorMessage>{formik.errors.birthDate}</ErrorMessage>}
                    <Input 
                        placeholder= "numero"
                        type= "text"
                        name= "phoneNumber"
                        value= {formik.values.phoneNumber}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.numero && <ErrorMessage>{formik.errors.numero}</ErrorMessage>}
                    <PasswordContainer>
                        <PasswordInput 
                            placeholder= "mot de passe" 
                            type= {isHidden ? "password" : "text"}
                            name= "password"
                            value= {formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {isHidden 
                            ? <CloseEyeIcon onClick={() => setIsHidden(false)}/> 
                            : <OpenEyeIcon onClick={() => setIsHidden(true)}/>
                        }
                        
                    </PasswordContainer>
                    {formik.errors.password && <ErrorMessage>{formik.errors.password}</ErrorMessage>}
                    <Input 
                        placeholder= "adresse"
                        type= "text"
                        name= "adress"
                        value= {formik.values.adress}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.adress && <ErrorMessage>{formik.errors.adress}</ErrorMessage>}
                    {/* <PasswordContainer>
                        <PasswordInput placeholder= "confirme mot de passe" type= "password"/>
                    </PasswordContainer> */}
                    <Agreement>
                        By creating an account, I consent to the processing of my
                        personnal data in accordance with the <b>PRIVACY POLICY</b> 
                    </Agreement>
                    <Button type="submit">S'inscrire</Button>
                </Form>
            </Wrapper>
        </motion.Container>
    )
}

export default Signup