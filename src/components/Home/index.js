import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplTeamsList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamsList()
  }

  getIplTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsData = await response.json()

    console.log(teamsData.teams)

    const updatedTeamsData = teamsData.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    console.log(updatedTeamsData)
    this.setState({iplTeamsList: updatedTeamsData, isLoading: false})
  }

  render() {
    const {iplTeamsList, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="ipl-dashboard-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1 className="ipl-dashboard">IPL Dashboard</h1>
        </div>
        <ul className="teams-list">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" height={50} />
            </div>
          ) : (
            iplTeamsList.map(iplTeam => (
              <TeamCard iplTeam={iplTeam} key={iplTeam.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default Home
