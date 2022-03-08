import React from 'react'
import styled from 'styled-components'

export default function Detail() {
    return (
        <Container>
            <Background>
                <img src='images/login-background.jpg' />
            </Background>
            <AboutMovie>
                <img src='images/viewers-marvel.png' />
                <div>
                    <button class='play'><img src='images/play-icon-black.png' />Play</button>
                    <button class='trailer'><img src='images/play-icon-white.png' />Trailer</button>
                    <button class='plus'>+</button>
                    <button class='group'><img src='images/group-icon.png' /></button>
                </div>
                <Subtitle>2018 . 7m . Family, Fantasy, Kids, Animation</Subtitle>
                <Description>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas sunt nam qui laborum impedit
                    minus amet ex alias, expedita aperiam magni. Dolorum molestiae voluptatibus culpa sed et iste eligendi
                    minima!
                </Description>
            </AboutMovie>

        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding:  0 calc(3.5vw  + 5px);
    position: relative;
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

const AboutMovie = styled.div`
    padding-top: 20vh;
    padding-left: calc(3.5vw + 10px);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    min-width: 60ch;
    max-width: 80ch;

    & > * + * {
        margin-top: 20px;
    }

    img {
        width: 40%;
        height: 35%;
        object-fit: contain;
    }
    div {
        display: flex;
        align-items: center;
        & > * + * {
            margin-left: 20px;
        }

        .play {
            padding: 10px 10px;
            background-color: #ebe4e4;
            vertical-align: middle;
            color: black;
            font-weight: bold;
            text-transform: uppercase;
            border-radius: 10px;
            border: 0;
            
            img {
                height: 30%;
                object-fit: contain;
                vertical-align: -8px;
                &:hover {
                    color: white;
                }
            }

            &:hover {
                background-color:rgba(41, 31, 31, 0.5);
                color: white;
            }
        }
        .trailer {
            padding: 10px 10px;
            background-color:rgba(41, 31, 31, 0.8);
            vertical-align: middle;
            color: white;
            font-weight: bold;
            text-transform: uppercase;
            border-radius: 10px;
            border: 0;

            img {
                height: 30%;
                width: 30%;
                vertical-align: -8px;
                object-fit: contain;
                &:hover {
                    color: black;
                }
            }

            &:hover {
                background-color:#f2f0f0;
                color: black;
            }
        }
        .plus {
            width: 34px;
            height: 34px;
            color: white;
            background-color: rgba(10, 7, 7, 0.6);
            text-align: center;
            border-radius: 50%;
            border: 1px solid rgba(249,249,249,0.9);
            &:hover {
                border: 1px solid rgba(249,249,249,0.9);
            }
        }
        .group {
            border-radius: 50%;
            height: 34px;
            width: 34px;
            background-color: rgba(10, 7, 7, 0.6);
            border: 0;
            border: 2px solid rgba(249,249,249,0.9);
            &:hover {
                border: 2px solid rgba(249,249,249,0.9);
            }

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                
            }
        }
    }
`

const Subtitle = styled.p`
    font-size: 18px;
    color: rgb(199, 193, 193);
    text-align: center;
`

const Description = styled.p`
    font-size: 18px;
    color: rgb(237, 230, 230);
    
`