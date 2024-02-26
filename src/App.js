import {Component} from 'react'

import {Switch, Redirect, Route} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import LoginForm from './components/LoginForm'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import NotFound from './components/NotFound'

import VideoDetailsView from './components/VideoDetailsView'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'Home',
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  changeTab = tab => {
    this.setState({
      activeTab: tab,
    })
  }

  render() {
    const {isDarkTheme, activeTab} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDarkTheme,
          activeTab,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsView}
          />
          <ProtectedRoute path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}
export default App
