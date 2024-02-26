import styled from 'styled-components'

export const GamingCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  min-width: 380px;
  max-width: 400px;
  border-radius: 8px;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  margin: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  flex-grow: 1;
  @media screen and (max-width: 575px) {
    height: 200px;
    min-width: 80px;
    max-width: 100px;
  }
  @media screen and (max-width: 767px) {
    height: 390px;
    min-width: 160px;
    max-width: 180px;
  }
`
export const ThumbnailImage = styled.img`
  height: 70%;
  width: 100%;
  margin-bottom: 10px;
`
export const GameTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 18px;
  margin-top: 0px;
  margin-left: 10px;
  @media screen and (max-width: 575px) {
    font-size: 16px;
  }
`
export const ViewCountText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#cccccc' : '#383838')};
  font-size: 15px;
  margin-top: 0px;
  margin-left: 10px;
  @media screen and (max-width: 575px) {
    font-size: 13px;
  }
`
