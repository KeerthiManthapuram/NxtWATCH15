import {Link} from 'react'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  TrendingVideoContainer,
  TrendingThumbnail,
  VideoProfileAndDetailsSection,
  TrendingProfile,
  VideoDetailsSection,
  VideoTitle,
  ChannelName,
  ChannelNameAndViewsSection,
  Views,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {trendingVideoDetails} = props

  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    channelProfileImageUrl,
    viewCount,
    publishedAt,
  } = trendingVideoDetails
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`}>
            <TrendingVideoContainer>
              <TrendingThumbnail src={thumbnailUrl} alt="thumbnail" />
              <VideoProfileAndDetailsSection>
                <TrendingProfile
                  src={channelProfileImageUrl}
                  alt="channel profile"
                />
                <VideoDetailsSection>
                  <VideoTitle isDark={isDarkTheme}>{title}</VideoTitle>
                  <ChannelNameAndViewsSection>
                    <ChannelName isDark={isDarkTheme}>
                      {channelName}
                    </ChannelName>
                    <Views isDark={isDarkTheme}>
                      {viewCount} views . {publishedAt}
                    </Views>
                  </ChannelNameAndViewsSection>
                </VideoDetailsSection>
              </VideoProfileAndDetailsSection>
            </TrendingVideoContainer>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default TrendingVideoCard
