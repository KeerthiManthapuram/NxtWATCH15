import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  toggleTheme: () => {},
  changeTab: () => {},
})

export default ThemeAndVideoContext
