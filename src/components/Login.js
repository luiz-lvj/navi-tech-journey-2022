import React from 'react';
import logoPurple from '../imgs/Logo_Purple.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Login(props){
    const history = useNavigate();

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        if(name == "username"){
            props.setUserName(value);
        }
        // setInputs({
        //     'username': name == 'username' ? value : '',
        //     'email': name == 'email' ? value : '',
        //     'password': name == 'password' ? value : '',
        // });
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        history("/home");
    }
    
    return(
        <LoginStyle>

            <LogoStyle src={logoPurple} alt="" />

            <MyForm onSubmit={handleSubmit}>

                <LabelStyle>nome</LabelStyle>
                
                <InputStyle
                type="text"
                placeholder="seu nome"
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
                />

                <LabelStyle>email</LabelStyle>
                
                <InputStyle
                type="text"
                placeholder="seu email"
                name="email" 
                value={inputs.email || ""} 
                onChange={handleChange}
                />

                <LabelStyle>senha</LabelStyle>

                <InputStyle
                type="password"
                placeholder="sua senha"
                name="password" 
                value={inputs.password || ""} 
                onChange={handleChange}
                />

                <ButtonStyle 
                type="submit"
                value="Sign in"
                />

            </MyForm>

        </LoginStyle>
    );
}

const LoginStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    background: #FFFFFF;
    padding-top: 80px;
    padding-bottom: 123px;
    
    h2{
        padding-top: 20px;
        padding-bottom: 20px;
        color: #A800FF;
        text-align: center;
    }
`;

const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;


const LabelStyle = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 80%;

    font-family: 'Lato', Helvetica, sans-serif;
    font-size:   10px;
    color:  #A800FF;
    font-style:  italic;

    padding-top: 5px;
    padding-bottom: 8px;
`;

const InputStyle = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    font-family: 'Lato', Helvetica, sans-serif;
    font-size:   10px;
    color:  #212121;
    text-indent: 10px;
    
    border-radius: 15px;
    border: 1px solid #A800FF;
    height: 40px;
    margin-bottom: 10px;

    outline: 0;
`;

const LogoStyle = styled.img`
    margin-bottom: 60px;
    width: 100%;
    height: 179px;
`;

const ButtonStyle = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;

    font-family: 'Lato', Helvetica, sans-serif;
    font-size:   10px;
    color:  #FFFFFF;
    font-style:  bold;

    border-radius: 15px;
    background: #A800FF;
    height: 40px;
    margin-top: 40px;

    border: 0;
    outline: 0;
`;