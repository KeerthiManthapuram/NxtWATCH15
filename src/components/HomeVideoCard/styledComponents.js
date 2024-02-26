import styled from 'styled-components'

export const HomeVideoCardItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 375px;
  margin: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 575px) {
    height: 350px;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    height: 350px;
    width: 40%;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`
export const VideoThumbnail = styled.img`
  height: 50%;
  width: 100%;
`
export const VideoChannelAndDetailsSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const ChannelProfileHolder = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 30%;
  margin-top: 15px;
`
export const ChannelProfile = styled.img`
  height: 30px;
  width: 30px;
`
export const VideoDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f4f4f4' : '#231f20')};
  margin-bottom: 0px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 0px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#f4f4f4' : '#231f20')};
`
export const ViewsCountAndPublishedTime = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 0px
  font-weight: 400;
  color: ${props => (props.isDark ? '#f4f4f4' : '#231f20')};
`
