import React from 'react'
import styled from 'styled-components'

export default function Login() {
    return (
        <Container>
            <Background>
                <img src='images/login-background.jpg' />
            </Background>
            <CTA>
                <HeaderImages>
                    <img src='images/cta-logo-one.svg' />
                </HeaderImages>
                <Signup>Get All There</Signup>
                <Description>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas sunt nam qui laborum impedit
                    minus amet ex alias, expedita aperiam magni. Dolorum molestiae voluptatibus culpa sed et iste eligendi
                    minima!
                </Description>
                <FooterImages src='images/cta-logo-two.png' />
            </CTA>
        </Container>
    )
}
const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: calc(3.5vw  + 5px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: top;
`
const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const CTA = styled.div`
    width: 60ch;
    & > * + * {
        margin-top: 10px;
    }
`

const HeaderImages = styled.div`
    width: 100%;
`

const Signup = styled.a`
    width: 100%;
    background-color: rgb(15, 52, 166);
    padding: 10px;
    display: block;
    text-align: center;
    letter-spacing: 1.8;
    text-transform: uppercase;
    &:hover {
        background-color: rgb(114, 130, 179);
    }
`

const Description = styled.p`
    font-size: 12px;
    text-align: center;
    line-height: 1.5;
    letter-spacing: 1.5;
`

const FooterImages = styled.img`
    width: 100%;
`