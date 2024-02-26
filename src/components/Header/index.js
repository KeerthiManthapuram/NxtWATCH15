import {Link, withRouter, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FaMoon, FaBars, FaUserCircle} from 'react-icons/fa'

import {FiLogOut} from 'react-icons/fi'

import {BiSun} from 'react-icons/bi'

import Popup from 'reactjs-popup'

import {
  HeaderSection,
  NxtWatchLogo,
  HeaderIconsHolder,
  ThemeIconHolder,
  BarsIconHolder,
  DarkThemeProfile,
  ProfileIconHolder,
  LogoutIconHolder,
  ThemeButton,
  LogoutButton,
  PopupContainer,
  PopupText,
  PopupButtonsHolder,
  CancelButton,
  ConfirmButton,
  SmLogoutButton,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const Header = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const nxtWatchLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onClickingLogout = () => {
        Cookies.remove('jwtToken')
        return <Redirect to="/login" />
      }

      return (
        <HeaderSection isDark={isDarkTheme}>
          <Link to="/">
            <NxtWatchLogo src={nxtWatchLogoUrl} alt="nxt watch logo" />
          </Link>
          <HeaderIconsHolder>
            <ThemeIconHolder>
              <ThemeButton data-testid="theme" onClick={toggleTheme}>
                {isDarkTheme ? (
                  <BiSun color="#ffffff" size="30" />
                ) : (
                  <FaMoon size="30" />
                )}
              </ThemeButton>
            </ThemeIconHolder>
            <BarsIconHolder>
              <FaBars size="30" color={isDarkTheme ? '#ffffff' : '#000000'} />
            </BarsIconHolder>
            <ProfileIconHolder>
              {isDarkTheme ? (
                <DarkThemeProfile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              ) : (
                <FaUserCircle size="30" color="#000000" />
              )}
            </ProfileIconHolder>
            <Popup
              modal
              trigger={
                <LogoutIconHolder>
                  <SmLogoutButton>
                    <FiLogOut
                      color={isDarkTheme ? '#ffffff' : '#000000'}
                      size="30"
                    />
                  </SmLogoutButton>
                  <LogoutButton isDark={isDarkTheme}>Logout</LogoutButton>
                </LogoutIconHolder>
              }
            >
              {close => (
                <PopupContainer isDark={isDarkTheme}>
                  <PopupText isDark={isDarkTheme}>
                    Are you sure you want to logout?
                  </PopupText>
                  <PopupButtonsHolder>
                    <CancelButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onClickingLogout}>
                      Confirm
                    </ConfirmButton>
                  </PopupButtonsHolder>
                </PopupContainer>
              )}
            </Popup>
          </HeaderIconsHolder>
        </HeaderSection>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
