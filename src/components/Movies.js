import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectMovies } from '../features/movie/movieSlice'
import { Link } from 'react-router-dom'

export default function Movies() {
    const movies = useSelector(selectMovies);
    console.log(movies)
    return (
        <Container>
            <h4>Recommended for  you</h4>
            <Content>
                {movies.map((movie) => {
                    return (
                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>
                                <img src={movie.primaryImage ? movie.primaryImage.url : "./images/viewers-starwars.png"} />
                            </Link>

                        </Wrap>
                    )
                })}
            </Content>
        </Container>
    )
}

const Container = styled.div`

`

const Content = styled.div`
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 50px;
    
`

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    border: 4px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms ease-in;

    img {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 4/5;
        
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`

