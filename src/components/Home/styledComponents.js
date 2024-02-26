import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
  width: 100%;
  margin: 0px;
  padding: 15px;
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`
export const WebsiteLogo = styled.img`
  height: 35px;
  width: 145px;
  @media screen and (max-width: 767px) {
    height: 31px;
    width: 120px;
  }
`

export const CloseButton = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  barckground-color: transparent;
`
export const LogoAndCloseButtonHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const PopupContent = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: '#000000';
  margin-left: 15px;
  @media screen and (max-width: 566px) {
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    font-size: 17px;
  }
`
export const GetItNowButton = styled.button`
  height: 40px;
  width: 100px;
  border: #000000 1px solid;
  background-color: transparent;
  color: '#000000';
  font-family: 'Roboto';
  margin-top: 7px;
  margin-bottom: 15px;
  @media screen and (max-width: 566px) {
    height: 27px;
    width: 80px;
  }
  @media screen and (max-width: 767px) {
    height: 31px;
    width: 90px;
  }
`
export const LeftSectionAndRightSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin-top: 0px;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  height: 90vh;
  width: 250px;
  margin: 0px;

  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-left: 250px;
  background-color: ${props => (props.isDark ? '#000000' : '#f8fafc')};
  overflow: auto;
  margin-top: 8vh;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
  }
`
export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 35px;
  width: 600px;
  margin-left: 25px;
  margin-top: 10px;
  @media screen and (max-width: 767px) {
    margin-top: 20px;
    width: 93%;
  }
`
export const SearchInputElement = styled.input`
  height: 35px;
  width: 90%;
  border: #cccccc 1px solid;
  background-color: transparent;
`
export const SearchIconHolder = styled.button`
  height: 35px;
  width: 10%;
  outline: none;
  cursor: pointer;
  border: #cccccc 1px solid;
  background-color: ${props => (props.isDark ? '#424242' : '#f4f4f4')};
`
export const ContactUsSection = styled.div`
  display: 'flex';
  flex-direction: column;
  width: 80%;
  padding: 10px;
`

export const ContactUsTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const ContactUsText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  justify-content: space-between;
`
export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const NoSearchResultsImage = styled.img`
  height: 250px;
  width: 200px;
  @media screen and (max-width: 767px) {
    height: 200px;
    width: 150px;
  }
`
export const NoSearchResultsHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (max-width: 767px) {
    font-size: 19px;
  }
`
export const NoSearchResultsText = styled.p`
  font-family: 'Roboto';
  font-size: 23px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#231f20')};
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
export const RetryButton = styled.button`
  height: 40px;
  width: 100px;
  background-color: #4169e1;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  margin-top: 7px;
  margin-bottom: 15px;
  border-radius: 7px;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 566px) {
    height: 27px;
    width: 80px;
  }
  @media screen and (max-width: 767px) {
    height: 31px;
    width: 90px;
  }
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const FailureImage = styled.img`
  height: 250px;
  width: 200px;
  @media screen and (max-width: 767px) {
    height: 200px;
    width: 150px;
  }
`
export const FailureViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (max-width: 767px) {
    font-size: 19px;
  }
`
export const FailureViewText = styled.p`
  font-family: 'Roboto';
  font-size: 23px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#231f20')};
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
export const Icon = styled.img`
  height: 30px;
  width: 30px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`
