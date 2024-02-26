import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'

import NavigationBar from '../NavigationBar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  GameCardsList,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureViewHeading,
  FailureViewText,
  RetryButton,
  GamingSection,
  LeftSection,
  LeftSectionAndRightSection,
  RightSection,
  ContactUsSection,
  ContactUsTitle,
  ContactUsText,
  IconsContainer,
  Icon,
  GamingHeadingHolder,
  GamingIconHolder,
  GamingTitle,
} from './styledComponents'

import GamingCardItem from '../GamingCardItem'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwtToken')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const updatedData = data.videos.map(eachOne => ({
      id: eachOne.id,
      title: eachOne.title,
      thumbnailUrl: eachOne.thumbnail_url,
      viewCount: eachOne.view_count,
    }))
    if (response.ok === true) {
      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  renderGameCards = () => {
    const {gamingVideosList} = this.state
    return (
      <GameCardsList>
        {gamingVideosList.map(eachCard => (
          <GamingCardItem key={eachCard.id} gameCardDetails={eachCard} />
        ))}
      </GameCardsList>
    )
  }

  renderLoaderContainer = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderGameSectionFailureView = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failedImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer>
            <FailureImage src={failedImgUrl} alt="failure view" />
            <FailureViewHeading isDark={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewText isDark={isDarkTheme}>
              We are having some trouble to complete your request.
              <br />
              Please try again.
            </FailureViewText>
            <RetryButton onClick={this.getGamingVideos}>Retry</RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  renderGamingSection = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderGameCards()
      case apiStatusConstant.failure:
        return this.renderGameSectionFailureView()
      case apiStatusConstant.inProgress:
        return this.renderLoaderContainer()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamingSection isDark={isDarkTheme}>
              <Header />
              <LeftSectionAndRightSection isDark={isDarkTheme}>
                <LeftSection isDark={isDarkTheme}>
                  <NavigationBar />
                  <ContactUsSection>
                    <ContactUsTitle isDark={isDarkTheme}>
                      CONTACT US
                    </ContactUsTitle>
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
                  <GamingHeadingHolder isDark={isDarkTheme}>
                    <GamingIconHolder isDark={isDarkTheme}>
                      <SiYoutubegaming size="35" color="#ff0000" />
                    </GamingIconHolder>
                    <GamingTitle isDark={isDarkTheme}>Gaming</GamingTitle>
                  </GamingHeadingHolder>
                  {this.renderGamingSection()}
                </RightSection>
              </LeftSectionAndRightSection>
            </GamingSection>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Gaming
