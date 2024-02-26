import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : 'ffffff')};
`
export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 70vh;
  box-shadow: ${props => (props.isDark ? 'none' : '5px 5px 5px 5px #f1f1f1')};
  border-radius: 10px;
  background-color: ${props => (props.isDark ? '#000000' : 'ffffff')};
`
export const WebsiteLogo = styled.img`
  height: 70px;
  width: 180px;
  padding: 10px;
  align-self: center;
  @media screen and (max-width: 767px) {
    height: 60px;
    width: 150px;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 25px;
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#64748b')};
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const InputElement = styled.input`
  font-family: 'Roboto';
  font-size: 19px;
  font-weight: 500;
  height: 50px;
  width: 95%;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background-color: transparent;
  margin-top: 7px;
  margin-bottom: 15px;
  color: #94a3b8;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const PasswordCheckbox = styled.input`
  height: 14px;
  width: 14px;
  margin-right: 10px;
  @media screen and (max-width: 767px) {
    height: 9px;
    width: 9px;
  }
`

export const CheckboxLabel = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#0f0f0f')};
  @media screen and (max-width: 767px) {
    font-size: 9px;
  }
`
export const LoginButton = styled.button`
  height: 40px;
  width: 100%;
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  border-radius: 7px;
  @media screen and (max-width: 767px) {
    font-size: 13px;
    height: 25px;
    width: 100%;
  }
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #ff0b37;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
