import styled from "styled-components"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useContext, useState } from "react";
import { UserContext } from "../context/User";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion'
import { CartContext } from "../context/Cart";

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 60px);
    background: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.2)),
    no-repeat url("/img_couverture.jpg") center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    /* width: 30%; */
    background-color: white;
    padding: 20px;
`
const Title = styled.h1`
    font-style: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 280px;
`
const PasswordContainer = styled.div`
    position: relative;
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
const Input = styled.input`
    flex: 1;
    /* min-width: 40%; */
    width: 100%;
    margin:15px 0 ;
    outline: none;
    padding: 10px;
    font-size: 16px;
`

const Button = styled.button`
    margin: 10px 0;
    padding: 12px 35px;
    width: 100%;
    font-weight: 600;
    border: 0.5 solid transparent;
    background-color: #212a2f;
    color:white ;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: #212a2f;
        border-color: black ;
        transition: all ease-in-out 0.2s;
        /* transform: scale(1.01); */
    }
`
const Paragraph = styled.p`
    font-size: 12px;
`
const Linker = styled(Link)`
    color: black;
    margin: 5px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
        color: #646464;
    }

`

const Login = () => {
    const navigate = useNavigate()
    const [isHidden, setIsHidden] = useState(true)
    const {setUser} = useContext(UserContext)
    const {onLogin} = useContext(CartContext)

    const formik = useFormik({
        initialValues: {
            email: "karimou.cisse@gmail.com",
            password: "Karimou1234",
        },
        onSubmit: async values => {
            login(values)
        },

        validateOnChange: false,
        validationSchema: Yup.object({
            
            password: Yup.string()
                .required("Mot de passe est requis"),
            email: Yup.string()
                .email("Email est incorrecte")
                .required("email est requis")
        })
    })

    const login = async values => {
        const response = await fetch ('http://localhost:5000/auth/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })
        if(response.status >= 400) {
            alert("Error")
        } else {
            const userLogged = await response.json()
            setUser(userLogged)
            onLogin()
            navigate('/')
        }
    }


  return (
    <motion.Container
        initial= {{ oapcity: 0 }}
        animate= {{ opacity: 1 }}
        exit= {{ opacity: 0 }}
    >
        <Navbar/>
        <Container>
            <Wrapper>
                <Title>SE CONNECTER</Title>
                <Form onSubmit={formik.handleSubmit}>
                    <Input 
                        placeholder= "email"
                        type= "text"
                        name= "email"
                        value= {formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <PasswordContainer>
                        <Input 
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
                    <Button type= "submit">SE CONNECTER</Button>
                    <Linker to ="/">Mot de passe oublié</Linker>
                    <Paragraph>Vous n'êtes pas encore membre ?<Linker to= "/signup">Rejoignez-nous.</Linker></Paragraph>
                </Form>
            </Wrapper>
        </Container>
    </motion.Container>
  )
}

export default Login