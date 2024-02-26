import {Component} from 'react'

import {HiFire} from 'react-icons/hi'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import Header from '../Header'

import NavigationBar from '../NavigationBar'

import TrendingVideoCard from '../TrendingVideoCard'

import {
  TrendingBgContainer,
  TrendingLeftAndRightHolder,
  TrendingLeftSection,
  TrendingRightSection,
  TrendingHeadingHolder,
  TrendingIconHolder,
  TrendingTitle,
  TrendingVideosList,
  TrendingFailureViewContainer,
  FailureImage,
  FailureViewHeading,
  FailureViewText,
  RetryButton,
  LoaderContainer,
  ContactUsSection,
  ContactUsTitle,
  ContactUsText,
  Icon,
  IconsContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwtToken')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const updatedVideos = data.videos.map(eachVideo => ({
      id: eachVideo.id,
      title: eachVideo.title,
      thumbnailUrl: eachVideo.thumbnail_url,
      channelName: eachVideo.channel.name,
      channelProfileImageUrl: eachVideo.channel.profile_image_url,
      viewCount: eachVideo.view_count,
      publishedAt: eachVideo.published_at,
    }))
    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideosList: updatedVideos,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <TrendingFailureViewContainer isDark={isDarkTheme}>
            <FailureImage src={failureImgUrl} alt="failure image" />
            <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
            <FailureViewText>
              We are having some trouble to complete your request <br />
              Please try again.
            </FailureViewText>
            <RetryButton onClick={this.getTrendingVideos}>Retry</RetryButton>
          </TrendingFailureViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  renderLoaderContainer = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingVideos = () => {
    const {trendingVideosList} = this.state
    return (
      <TrendingVideosList>
        {trendingVideosList.map(eachVideo => (
          <TrendingVideoCard
            key={eachVideo.id}
            trendingVideoDetails={eachVideo}
          />
        ))}
      </TrendingVideosList>
    )
  }

  renderTrendingSection = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderContainer()
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
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
            <TrendingBgContainer isDark={isDarkTheme}>
              <Header />
              <TrendingLeftAndRightHolder>
                <TrendingLeftSection isDark={isDarkTheme}>
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
                </TrendingLeftSection>
                <TrendingRightSection isDark={isDarkTheme}>
                  <TrendingHeadingHolder isDark={isDarkTheme}>
                    <TrendingIconHolder isDark={isDarkTheme}>
                      <HiFire size="35" color="#ff0000" />
                    </TrendingIconHolder>
                    <TrendingTitle isDark={isDarkTheme}>Trending</TrendingTitle>
                  </TrendingHeadingHolder>
                  {this.renderTrendingSection()}
                </TrendingRightSection>
              </TrendingLeftAndRightHolder>
            </TrendingBgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Trending
