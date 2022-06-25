import styled from "styled-components"
import { UserContext } from "../context/User";
import { useContext, useState } from "react";
import moment from "moment";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect } from "react";
// moment().format();

const Container = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    margin-left: 20%;
    @media (max-width: 645px) {
       margin: 0;
       justify-content: center;
       margin-top: 40px;
    }
`
const Card = styled.div`
    background-color: #ffff;
    padding: 20px;
    width: 400px;
`
const Input = styled.input`
    width: 100%;
    padding: 10px ;
    margin-bottom: 20px;
`
const Paragraph = styled.div`
  padding :20px 0;
`

const Span = styled.span`
    font-weight: 600; 
    margin-right: 10px;
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    color: #ffff;
    background-color: #212A2F;
    cursor: pointer;
    font-weight: 600;
    margin-top: 10px;
    &:hover {
        transform: scale(1.003);
    }
`
const UserInfo = () => {
    const {user, getUser} = useContext(UserContext)
    const [modification, setModification] = useState(false)

    // useEffect(() => {
    //     getUser()
    // }, [user])

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
            adress: "",
            birthDate: "",          
        },
        onSubmit: (e, values) => {
            modifyUser(values)
            console.log(values);
        },
        validateOnChange: false,
        validationSchema: Yup.object({
            firstName: Yup.string()
            .required("Le prénom est requis"),
            lastName: Yup.string()
            .required("Le nom est requis"),
            email: Yup.string()
            .email("Email est incorrecte")
            .required("email est requis"),
            password: Yup.string()
            .min(8, "Mot de passe trop court")
            .required("mot de passe requis"),
            phoneNumber: Yup.string()
            .required("numero de telephone requis"),
            adress: Yup.string()
            .required("l'adresse est requis"),
            birthDate: Yup.string()
            .required("la date de naissance est requise"),
            
        })
    })

    const modifyUser = async (values) => {
        const response = await fetch (`http://localhost:5000/user/${user._id}`, {
            method: 'put',
            headers: {
                    'Content-Type': 'application/json',
                },
            credentials: 'include',
            body: JSON.stringify(values)
        })
        if(response.status >= 400) {
            console.log("Error")
        } else {
            getUser()
            setModification(!modification)
        }
    }
        
    const onButtonClick = () => {
        setModification(!modification)
    }


if(!user) {
    return null
}
  return (
    <Container>
        <Card>
            {modification && user &&
                <form  onSubmit={formik.handleSubmit}>
                    <Input 
                        placeholder= {user.firstName}
                        type= "text"
                        name= "firstName"
                        value= {formik.values.firstName}
                        onChange={formik.handleChange}
                    />
                    <Input 
                        placeholder= {user.lastName}
                        type= "text"
                        name= "lastName"
                        value= {formik.values.lastName}
                        onChange={formik.handleChange}
                    />
                    <Input 
                        placeholder= {user.email}
                        type= "text"
                        name= "email"
                        value= {formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <Input 
                        placeholder= {user.password}
                        name= "password"
                        value= {formik.values.password}
                        onChange={formik.handleChange}
                        type= "password"
                    />
                    <Input 
                        placeholder= {user.phoneNumber}
                        type= "text"
                        name= "phoneNumber"
                        value= {formik.values.phoneNumber}
                        onChange={formik.handleChange}
                    />
                    <Input
                        placeholder= {user.adress}
                        type= "text"
                        name= "adress"
                        value= {formik.values.adress}
                        onChange={formik.handleChange}
                    />
                    <Input
                        placeholder= {user.birthDate} 
                        type= "text"
                        name= "birthDate"
                        value= {formik.values.birthDate}
                        onChange={formik.handleChange}
                    />
                    <Button 
                        type="submit"
                        // onClick={onButtonClick} 
                    >
                        Modifier
                    </Button>
                </form>
            }
            {!modification && 
                <>
                    <Paragraph><Span>Prénom & nom: </Span> {user.firstName} {user.lastName}</Paragraph>
                    <Paragraph><Span>Email: </Span> {user.email}</Paragraph>
                    <Paragraph><Span>Numéro de télephone: </Span> {user.phoneNumber}</Paragraph>
                    <Paragraph><Span>Adresse: </Span> {user.adress}</Paragraph>
                    <Paragraph><Span>Date de naissance: </Span> {moment(user.birthDate).format('L')}</Paragraph>
                </>
            }
            {!modification && 
                <Button 
                    onClick={onButtonClick} 
                >
                    appliquer
                </Button>
            }
        </Card>
    </Container>
  )
}

export default UserInfo