import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {iplTeam} = props
  const {name, teamImageUrl, id} = iplTeam

  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="team-card">
        <img src={teamImageUrl} className="team-logo" alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
