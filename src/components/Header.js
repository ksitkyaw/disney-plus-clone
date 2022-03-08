import React from 'react';
import styled from 'styled-components'

export default function Header() {
    return (
        <Nav>
            <Logo src='/images/logo.svg' />
            <NavMenu>
                <a>
                    <img src="images/home-icon.svg" alt="" />
                    <span>Home</span>
                </a>
                <a>
                    <img src="images/search-icon.svg" alt="" />
                    <span>Search</span>
                </a>
                <a>
                    <img src="images/watchlist-icon.svg" alt="" />
                    <span>WatchList</span>
                </a>
                <a>
                    <img src="images/original-icon.svg" alt="" />
                    <span>Originals</span>
                </a>
                <a>
                    <img src="images/movie-icon.svg" alt="" />
                    <span>Movies</span>
                </a>
                <a>
                    <img src="images/series-icon.svg" alt="" />
                    <span>Series</span>
                </a>
            </NavMenu>
            <UserImg>
                <img src="logo192.png" />
            </UserImg>
        </Nav>
    )
}

const Nav = styled.div`
    height: 70px;
    background-color: black;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 60px;
    margin-right: 2rem;
`

const NavMenu = styled.div`
    display: flex;
    flex-grow: 1;       
    margin-left: 2rem;
    & > * + * {
        margin-left: 1.5rem;
    }
    a {
        display: flex;

        span {
            position: relative;
            

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transition: all 250ms ease;
                transform-origin: left center;
                

            }
        }
        &:hover {
            span:after{
                opacity: 1;
                transform: scaleX(1);
            }
        }

        & > img {
            width: 1.5rem;
        }
    }
`

const UserImg = styled.div`
    width: 48px;
    & > img {
        width: 100%;
    }
    
`