import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

import {
  NavigationBarContainer,
  NavLink,
  NavOption,
  TabName,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const NavigationBar = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeTab} = value

      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
      const activeTabBg = isDarkTheme ? ' #475569' : '#cbd5e1'
      const onClickingHome = () => {
        changeTab('Home')
      }

      const onClickingTrending = () => {
        changeTab('Trending')
      }

      const onClickingGaming = () => {
        changeTab('Gaming')
      }

      const onClickingSavedVideos = () => {
        changeTab('SavedVideos')
      }
      return (
        <NavigationBarContainer>
          <NavLink to="/">
            <NavOption
              key="Home"
              onClick={onClickingHome}
              isActive={activeTab === 'Home'}
              isDark={isDarkTheme}
              bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
            >
              <AiFillHome
                size="25"
                color={activeTab === 'Home' ? '#ff0000' : '#606060'}
              />
              <TabName isDark={isDarkTheme}>Home</TabName>
            </NavOption>
          </NavLink>

          <NavLink to="/trending">
            <NavOption
              key="Trending"
              isActive={activeTab === 'Trending'}
              onClick={onClickingTrending}
              bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
            >
              <HiFire
                size="25"
                color={activeTab === 'Trending' ? '#ff0000' : '#606060'}
              />
              <TabName isDark={isDarkTheme}>Trending</TabName>
            </NavOption>
          </NavLink>

          <NavLink to="/gaming">
            <NavOption
              key="Gaming"
              isActive={activeTab === 'Gaming'}
              onClick={onClickingGaming}
              bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
            >
              <SiYoutubegaming
                size="25"
                color={activeTab === 'Gaming' ? '#ff0000' : '#606060'}
              />
              <TabName isDark={isDarkTheme}>Gaming</TabName>
            </NavOption>
          </NavLink>

          <NavLink to="/savedVideos">
            <NavOption
              key="SavedVideos"
              isActive={activeTab === 'SavedVideos'}
              onClick={onClickingSavedVideos}
              bgColor={activeTab === 'SavedVideos' ? activeTabBg : 'none'}
            >
              <CgPlayListAdd
                size="25"
                color={activeTab === 'SavedVideos' ? '#ff0000' : '#606060'}
              />
              <TabName isDark={isDarkTheme}>Saved videos</TabName>
            </NavOption>
          </NavLink>
        </NavigationBarContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NavigationBar
