import React from 'react'
import styled from 'styled-components'

export default function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src='images/viewers-disney.png' />
            </Wrap>
            <Wrap>
                <img src='images/viewers-marvel.png' />
            </Wrap>
            <Wrap>
                <img src='images/viewers-national.png' />
            </Wrap>
            <Wrap>
                <img src='images/viewers-pixar.png' />
            </Wrap>
            <Wrap>
                <img src='images/viewers-starwars.png' />
            </Wrap>

        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 24px;

`

const Wrap = styled.div`
    border: 1px solid rgba(249, 249, 249, 0.8);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms ease;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`