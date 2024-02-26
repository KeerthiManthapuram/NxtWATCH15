import styled from 'styled-components'

export const TrendingVideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    min-height: 300px;
    max-height: 300px;
    width: 100%;
  }
`
export const TrendingThumbnail = styled.img`
  height: 100%;
  width: 40%;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }
  @media screen and (max-width: 576px) {
    height: 60%;
    width: 100%;
  }
`
export const VideoProfileAndDetailsSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 50%;
`
export const TrendingProfile = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const VideoDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-weight: bold;
  @media screen and (max-width: 567px) {
    font-size: 15px;
    margin-bottom: 0px;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (max-width: 567px) {
    font-size: 12px;
    margin-bottom: 0px;
  }
`
export const ChannelNameAndViewsSection = styled.div`
  display: flex;
  flex-direction: column;
`
export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (max-width: 567px) {
    font-size: 12px;
  }
`
