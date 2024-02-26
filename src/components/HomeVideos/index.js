import {HomeVideosContainer} from './styledComponents'

import HomeVideoCard from '../HomeVideoCard'

const HomeVideos = props => {
  const {homeVideosList} = props
  return (
    <HomeVideosContainer>
      {homeVideosList.map(eachVideo => (
        <HomeVideoCard key={eachVideo.id} videoCardItemDetails={eachVideo} />
      ))}
    </HomeVideosContainer>
  )
}

export default HomeVideos
