import React, { useState } from 'react';
import styled from 'styled-components'

export default function Header() {
    const [login, setLogin] = useState(true);

    return (
        <Nav>
            {/*the images won't work  because gh-pages deploy code has change the path if you include repo name in front of every path(like I did in the first one), it would work */}
            <Logo src='/images/logo.svg' />
            <NavMenu>
                <a>
                    <img src="disney-plus-clone/images/home-icon.svg" alt="" />
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
            {login ?
                <UserImg onClick={() => {
                    alert("You have been logged out");
                    setLogin(!login)
                }}>
                    <img src="/images/mario-av.png" />
                </UserImg> :

                <LoginBtn onClick={() => {
                    alert("You are now login as Mario");
                    setLogin(!login)
                }}>
                    Login
                </LoginBtn>
            }

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

    @media (max-width: 896px) {
        display: none;
        overflow: hidden;
    }

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
    margin-left: auto;
    cursor: pointer;
    
    & > img {
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
    
`
const LoginBtn = styled.button`
    margin-left: auto;
    border: 2px solid #e3feff;
    color: white;
    background-color: black;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
`