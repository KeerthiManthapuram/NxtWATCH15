import styled from 'styled-components'

export const HomeVideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  padding: 10px;
  @media screen and (max-width: 575px){
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
  @media screen and (min-width: 576px) and  (max-width: 767px){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px;
  }
}
`
