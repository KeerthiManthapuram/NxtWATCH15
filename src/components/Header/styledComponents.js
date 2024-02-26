import styled from 'styled-components'

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#000000' : 'ffffff')};
`
export const NxtWatchLogo = styled.img`
  height: 30px;
  width: 120px;
  margin-left: 15px;
  @media screen and (max-width: 576px) {
    height: 20px;
    width: 80px;
    margin-left: 10px;
  }
  @media screen and (max-width: 767px) {
    height: 25px;
    width: 100px;
    margin-left: 10px;
  }
`
export const HeaderIconsHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 20%;
  @media screen and (max-width: 576px) {
    height: 100%;
    width: 40%;
  }
  @media screen and (max-width: 767px) {
    height: 100%;
    width: 30%;
  }
`
export const ThemeIconHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BarsIconHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileIconHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutIconHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SmLogoutButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  height: 30px;
  width: 40px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  border: ${props => (props.isDark ? '#ffffff' : '#3b82f6')} 2px solid;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: bold;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  outline: none;
  cursor: pointer;
  height: 35px;
  min-width: 50px;
  margin-right: 15px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const DarkThemeProfile = styled.img`
  height: 30px;
  width: 30px;
`
export const ThemeButton = styled.button`
  height: 35px;
  width: 35px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? ' #181818' : '#ffffff')};
  height: 160px;
  width: 350px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PopupText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const PopupButtonsHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const CancelButton = styled.button`
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  border: ${props => (props.isDark ? '#ffffff' : '#3b82f6')} 2px solid;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: bold;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  height: 45px;
  width: 60px;
  margin-right: 15px;
`
export const ConfirmButton = styled.button`
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: bold;
  background-color: #3b82f6;
  outline: none;
  cursor: pointer;
  height: 45px;
  width: 60px;
`
