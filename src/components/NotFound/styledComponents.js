import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
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

export const NotFoundSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const NotFoundImage = styled.img`
  height: 250px;
  width: 200px;
  @media screen and (max-width: 767px) {
    height: 200px;
    width: 150px;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (max-width: 767px) {
    font-size: 19px;
  }
`
export const NotFoundText = styled.p`
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
