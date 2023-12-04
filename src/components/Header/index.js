import ReactDOM from 'react-dom'
import { faRebel } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faWallet,
  faSearch,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
import { useAnimation, useScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Web3 from 'web3'
import { darkTheme, GlobalStyles2, lightTheme } from '../../styles'
import Styled from './header.styled'

function Header() {
  const headerAnimation = useAnimation()
  const [darkMode, setDarkMode] = useState(true)

  const { scrollY } = useScroll()
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 50) {
        headerAnimation.start('scroll')
        setDarkMode(false)
      } else {
        headerAnimation.start('top')
        setDarkMode(true)
      }
    })
  }, [scrollY, headerAnimation])

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [web3, setWeb3] = useState()
  // localStorage로 로그인 여부 판단
  useEffect(() => {
    const loggedInAccount = localStorage.getItem('isLoggedIn')
    if (loggedInAccount !== '') {
      setIsLoggedIn(true)
      setAccount(loggedInAccount)
    }
    if (typeof window.ethereum !== 'undefined') {
      // window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum) // 새로운 web3 객체를 만든다
        setWeb3(web)
      } catch (err) {
        console.log(err)
      }
    }
  }, [])
  const [account, setAccount] = useState('')
  const connectWallet = async () => {
    await window.ethereum
      .request({
        method: 'eth_requestAccounts',
      })
      .then((res) => {
        setAccount(res[0])
        setIsLoggedIn(true)
        localStorage.setItem('isLoggedIn', res[0])
      })

      .catch((e) => console.log(e))
  }
  const signOut = () => {
    setAccount('')
    setIsLoggedIn(false)
    localStorage.setItem('isLoggedIn', '')
  }
  return (
    <Styled.ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles2 />
      <Styled.SHeader
        className="header"
        variants={Styled.navVariants}
        animate={headerAnimation}
        initial={'top'}
      >
        <Styled.Wrapper>
          <Styled.Column>
            <Link to="/">
              <Styled.LogoIcon>
                <FontAwesomeIcon
                  icon={faRebel}
                  color={darkMode ? 'rgba(225,225,225,23)' : 'rgba(0,0,0,23)'}
                  fontSize="45px"
                />
              </Styled.LogoIcon>
            </Link>
            <Link to="">
              <Styled.Logo>EXODUS</Styled.Logo>
            </Link>

            <Styled.Search>
              <Styled.SearchBox>
                <Styled.SearchBar placeholder="Search NFT..." />
              </Styled.SearchBox>
              <Styled.SearchBox margin-right="10px">
                <FontAwesomeIcon
                  icon={faSearch}
                  fontSize="15px"
                  margin-right="10px"
                  color="black"
                />
              </Styled.SearchBox>
            </Styled.Search>
            <Styled.Nav>
              <Link to="/market">
                <Styled.Menu>Market</Styled.Menu>
              </Link>

              <Link to="/create">
                <Styled.Menu>Create</Styled.Menu>
              </Link>
            </Styled.Nav>
          </Styled.Column>
          {isLoggedIn ? (
            <Styled.Column>
              <Link to={`/users/:username`}>
                <Styled.Icon>
                  <FontAwesomeIcon icon={faUser} />
                </Styled.Icon>
              </Link>
              <Styled.Icon>
                <FontAwesomeIcon icon={faWallet} />
              </Styled.Icon>
              <Styled.Icon>
                <FontAwesomeIcon
                  onClick={() => {
                    signOut()
                  }}
                  icon={faSignOutAlt}
                />
              </Styled.Icon>
            </Styled.Column>
          ) : (
            <Styled.Column>
              <Styled.WalletBtn
                onClick={() => {
                  connectWallet()
                }}
              >
                Connect Wallet
              </Styled.WalletBtn>
            </Styled.Column>
          )}
        </Styled.Wrapper>
      </Styled.SHeader>
    </Styled.ThemeProvider>
  )
}

export default Header
