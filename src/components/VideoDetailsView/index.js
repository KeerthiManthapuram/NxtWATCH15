import {Component} from 'react'

import Cookies from 'js-cookie'

import {VideoDetailsContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetailsView extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetailsView()
  }

  getVideoDetailsView = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwtToken')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      id: data.video_details.id,
      title: data.video_details.title,
      videoUrl: data.video_details.video_url,
      thumbnailUrl: data.video_details.thumbnail_url,
      channelName: data.video_details.channel.name,
      channelProfileImageUrl: data.video_details.channel.profile_image_url,
      channelSubscriberCount: data.video_details.channel.subscriber_count,
      viewCount: data.video_details.view_count,
      publishedAt: data.video_details.published_at,
      description: data.video_details.description,
    }
    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  render() {
    const {videoDetails} = this.state
    return (
      <VideoDetailsContainer>
        <h1>Hello</h1>
      </VideoDetailsContainer>
    )
  }
}

export default VideoDetailsView
