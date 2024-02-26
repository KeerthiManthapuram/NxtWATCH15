import styled from 'styled-components'

export const GamingSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isdark ? '#000000' : '#ffffff')};
`

export const GameCardsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100vw;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
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
export const LeftSectionAndRightSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin-top: 0px;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-left: 250px;
  background-color: ${props => (props.isDark ? '#000000' : '#f8fafc')};
  overflow: auto;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
  }
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
export const Icon = styled.img`
  height: 30px;
  width: 30px;
`
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  justify-content: space-between;
`
export const GamingHeadingHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10vh;
  width: 100%;
  padding: 10px;
  margin-top: 0px;
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
`
export const GamingIconHolder = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f8fafc')};
`
export const GamingTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 23px;
  margin-left: 10px;
`
