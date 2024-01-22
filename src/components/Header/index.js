import React, { useEffect, useState } from 'react'
import { faRebel } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faWallet,
  faSearch,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
import { useAnimation, useScroll } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { darkTheme, GlobalStyles2, lightTheme } from '../../styles'
import Styled from './header.styled'
import { ThemeProvider } from 'styled-components'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { accountState } from '../../recoil/atoms'

const Header = () => {
  const headerAnimation = useAnimation()
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(true)
  const [account, setAccount] = useRecoilState(accountState)
  const resetAccount = useResetRecoilState(accountState)
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
  // localStorage로 로그인 여부 판단
  useEffect(() => {
    const loggedInAccount = localStorage.getItem('isLoggedIn')
    if (loggedInAccount !== null) {
      setIsLoggedIn(true)
      setAccount(loggedInAccount)
    }
  }, [])
  const connectWallet = async () => {
    await window.ethereum
      .request({
        method: 'eth_requestAccounts',
      })
      .then((res) => {
        // setAccount(res[0])
        setAccount(res[0])
        setIsLoggedIn(true)
        localStorage.setItem('isLoggedIn', res[0])
      })

      .catch((e) => console.log(e))
  }
  const signOut = () => {
    resetAccount()
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
    navigate('/')
  }
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
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

            <Styled.Search></Styled.Search>
            <Styled.Nav>
              <Link to="/market">
                <Styled.Menu>Market</Styled.Menu>
              </Link>

              <Link to="/create">
                <Styled.Menu>Create</Styled.Menu>
              </Link>
              <Link to="https://sepoliafaucet.com/" target="_blank">
                <Styled.Menu>Faucet</Styled.Menu>
              </Link>
            </Styled.Nav>
          </Styled.Column>
          {isLoggedIn ? (
            <Styled.Column>
              {/* <Link to={`/users/:username`}> */}
              <Styled.Icon>
                <FontAwesomeIcon
                  onClick={() => navigate(`/users/${account}`)}
                  icon={faUser}
                />
              </Styled.Icon>
              {/* </Link> */}
              {/* <Styled.Icon>
                <FontAwesomeIcon icon={faWallet} />
              </Styled.Icon> */}
              <Styled.Icon>
                <FontAwesomeIcon onClick={signOut} icon={faSignOutAlt} />
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
    </ThemeProvider>
  )
}

export default Header
