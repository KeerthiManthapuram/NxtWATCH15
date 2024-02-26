import {
  NotFoundContainer,
  LeftSectionAndRightSection,
  LeftSection,
  RightSection,
  ContactUsSection,
  ContactUsTitle,
  ContactUsText,
  IconsContainer,
  Icon,
  NotFoundSection,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import Header from '../Header'

import NavigationBar from '../NavigationBar'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImageurl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundContainer>
          <Header />
          <LeftSectionAndRightSection isDark={isDarkTheme}>
            <LeftSection isDark={isDarkTheme}>
              <NavigationBar />
              <ContactUsSection>
                <ContactUsTitle isDark={isDarkTheme}>CONTACT US</ContactUsTitle>
                <IconsContainer>
                  <Icon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Icon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Icon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </IconsContainer>
                <ContactUsText isDark={isDarkTheme}>
                  Enjoy! Now to see your
                  <br />
                  channels and <br />
                  recommendations!
                </ContactUsText>
              </ContactUsSection>
            </LeftSection>
            <RightSection isDark={isDarkTheme}>
              <NotFoundSection>
                <NotFoundImage src={notFoundImageurl} alt="not found" />
                <NotFoundHeading isDark={isDarkTheme}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundText isDark={isDarkTheme}>
                  We are sorry, the page you requested could not be found.
                </NotFoundText>
              </NotFoundSection>
            </RightSection>
          </LeftSectionAndRightSection>
        </NotFoundContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
