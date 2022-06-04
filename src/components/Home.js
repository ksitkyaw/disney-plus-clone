import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'



export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://data-imdb1.p.rapidapi.com/titles/search/title/friend?info=mini_info&limit=8&page=1&titleType=movie", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_APIKEY
            }
        })
            .then(res => res.json())
            .then(data => dispatch(setMovies(data.results)))
    }, [])

    return (
        
        <Container>
            <ImageSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw  + 5px);
  position: relative;
  overflow-x: hidden;
  
  &:before {
      background: url("images/home-background.png") center center / cover no-repeat fixed;
      content: "";
      position: absolute;
      top:0;
      right:0;
      left: 0;
      bottom: 0;
      z-index: -1;
  }
`
