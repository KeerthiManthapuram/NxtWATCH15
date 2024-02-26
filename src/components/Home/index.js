import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {IoIosClose, IoIosSearch} from 'react-icons/io'

import NavigationBar from '../NavigationBar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import Header from '../Header'

import HomeVideos from '../HomeVideos'

import {
  HomeContainer,
  PopupContainer,
  LogoAndCloseButtonHolder,
  WebsiteLogo,
  CloseButton,
  PopupContent,
  GetItNowButton,
  LeftSectionAndRightSection,
  LeftSection,
  RightSection,
  SearchInputContainer,
  SearchInputElement,
  SearchIconHolder,
  ContactUsSection,
  ContactUsTitle,
  ContactUsText,
  IconsContainer,
  NoSearchResultsContainer,
  NoSearchResultsImage,
  NoSearchResultsHeading,
  NoSearchResultsText,
  RetryButton,
  FailureViewContainer,
  FailureImage,
  FailureViewHeading,
  FailureViewText,
  Icon,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    videosList: [],
    popupDispaly: 'flex',
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwtToken')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    const updatedData = data.videos.map(eachVideo => ({
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
        apiStatus: apiStatusConstant.success,
        videosList: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  onClickingCloseBtn = () => {
    this.setState({
      popupDispaly: 'none',
    })
  }

  renderPopupContainer = () => {
    const {popupDispaly} = this.state
    return (
      popupDispaly === 'flex' && (
        <PopupContainer>
          <LogoAndCloseButtonHolder>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <CloseButton type="button" onClick={this.onClickingCloseBtn}>
              <IoIosClose size="30" />
            </CloseButton>
          </LogoAndCloseButtonHolder>
          <PopupContent>
            Buy Nxt Watch Premium prepaid plans with <br />
            UPI
          </PopupContent>
          <GetItNowButton>GET IT NOW</GetItNowButton>
        </PopupContainer>
      )
    )
  }

  renderLoaderContainer = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  onChangingSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onSubmittingSearchInput = () => {
    const {searchInput, videosList} = this.state
    const filteredSearchresults = videosList.filter(eachVideo =>
      eachVideo.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({
      videosList: filteredSearchresults,
    })
  }

  renderNoSearchResultsView = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NoSearchResultsContainer>
            <NoSearchResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchResultsHeading isDark={isDarkTheme}>
              No Search results found
            </NoSearchResultsHeading>
            <NoSearchResultsText isDark={isDarkTheme}>
              Try different key words or remove search filter
            </NoSearchResultsText>
            <RetryButton onClick={this.getVideos}>Retry</RetryButton>
          </NoSearchResultsContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  renderFailureView = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer>
            <FailureImage src={failureImageUrl} alt="failure view" />
            <FailureViewHeading isDark={isDarkTheme}>
              No Search results found
            </FailureViewHeading>
            <FailureViewText isDark={isDarkTheme}>
              Try different key words or remove search filter
            </FailureViewText>
            <RetryButton onClick={this.getVideos}>Retry</RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    const isVideosListLengthZero = videosList.length === 0
    return isVideosListLengthZero ? (
      this.renderNoSearchResultsView()
    ) : (
      <HomeVideos homeVideosList={videosList} />
    )
  }

  renderRightSectionView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoaderContainer()
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    console.log('123')
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeContainer>
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
                  {this.renderPopupContainer()}
                  <SearchInputContainer>
                    <SearchInputElement
                      type="text"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangingSearchInput}
                    />
                    <SearchIconHolder
                      onClick={this.onSubmittingSearchInput}
                      type="search"
                      isDark={isDarkTheme}
                    >
                      <IoIosSearch />
                    </SearchIconHolder>
                  </SearchInputContainer>
                  {this.renderRightSectionView()}
                </RightSection>
              </LeftSectionAndRightSection>
            </HomeContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
