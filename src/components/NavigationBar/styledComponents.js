import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const NavigationBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavOption = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  width: 90%;
  padding: 5px;
  margin-left: 0px;
  margin-bottom: 8px;
  font-weight: ${props => (props.isActive ? 'bold' : 'none')};
`

export const TabName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-weight: ${props => (props.isActive ? 'bold' : 'none')};
  text-decoration: none;
  margin-left: 15px;
`
