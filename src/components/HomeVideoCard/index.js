import {Link} from 'react'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  HomeVideoCardItem,
  VideoThumbnail,
  VideoChannelAndDetailsSection,
  ChannelProfileHolder,
  ChannelProfile,
  VideoDetailsSection,
  VideoTitle,
  ChannelName,
  ViewsCountAndPublishedTime,
} from './styledComponents'

const HomeVideoCard = props => {
  const {videoCardItemDetails} = props

  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    channelProfileImageUrl,
    viewCount,
    publishedAt,
  } = videoCardItemDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link to={`/videos/${id}`}>
            <HomeVideoCardItem>
              <VideoThumbnail src={thumbnailUrl} alt="thumbnail" />
              <VideoChannelAndDetailsSection>
                <ChannelProfileHolder>
                  <ChannelProfile
                    src={channelProfileImageUrl}
                    alt="channel profile"
                  />
                </ChannelProfileHolder>
                <VideoDetailsSection>
                  <VideoTitle isDark={isDarkTheme}>{title}</VideoTitle>
                  <ChannelName isDark={isDarkTheme}>{channelName}</ChannelName>
                  <ViewsCountAndPublishedTime isDark={isDarkTheme}>
                    {viewCount} views . {publishedAt}
                  </ViewsCountAndPublishedTime>
                </VideoDetailsSection>
              </VideoChannelAndDetailsSection>
            </HomeVideoCardItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideoCard
