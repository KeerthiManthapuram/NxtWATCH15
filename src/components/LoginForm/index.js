import {Component} from 'react'

import Cookies from 'js-cookie'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  LoginContainer,
  LoginCard,
  WebsiteLogo,
  FormContainer,
  LabelElement,
  InputElement,
  CheckboxContainer,
  PasswordCheckbox,
  CheckboxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMessage: false,
    errorMessage: '',
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwtToken', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailure = errorMessage => {
    this.setState({
      showErrorMessage: true,
      errorMessage,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onChangingUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangingPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onToggleCheckbox = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showErrorMessage,
      errorMessage,
    } = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const websiteLogoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer isDark={isDarkTheme}>
              <LoginCard isDark={isDarkTheme}>
                <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
                <FormContainer onSubmit={event => this.submitForm(event)}>
                  <LabelElement isDark={isDarkTheme} htmlFor="username">
                    USERNAME
                  </LabelElement>
                  <InputElement
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={this.onChangingUsername}
                  />

                  <LabelElement isDark={isDarkTheme} htmlFor="password">
                    PASSWORD
                  </LabelElement>
                  <InputElement
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    placeholder="Password"
                    onChange={this.onChangingPassword}
                  />
                  <CheckboxContainer>
                    <PasswordCheckbox
                      id="checkbox"
                      type="checkbox"
                      checked={showPassword}
                      onChange={this.onToggleCheckbox}
                    />
                    <CheckboxLabel htmlFor="checkbox" isDark={isDarkTheme}>
                      Show Password
                    </CheckboxLabel>
                  </CheckboxContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMessage && (
                    <ErrorMessage>*{errorMessage}</ErrorMessage>
                  )}
                </FormContainer>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default LoginForm
