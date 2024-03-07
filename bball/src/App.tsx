import React from 'react';
import './App.css';
import jsonData from './CollegeBasketballTeams.json';

function Heading() {
  return (
    <div style={{ backgroundColor: '#A7C7E7' }}>
      <br></br>
      <h1>Welcome to March Sadness!</h1>
      <h3>
        Are you ready to waste hours of research on your bracket, only to be
        dissapointed in the second game?
      </h3>
      <p>
        Then you're in luck! This site lists all of the college basketball teams
        and some information about each of them so you can be even more
        dissapointed when your bracket sucks!
      </p>
      <br></br>
    </div>
  );
}

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
  tid: number; // Assuming 'tid' is a number based on your usage
}

interface TeamCardProps {
  team: Team;
}

class TeamCard extends React.Component<TeamCardProps> {
  render() {
    const { school, name, city, state } = this.props.team;
    return (
      <div className="teamItem">
        <br></br>
        <h2 className="teamName">School Name: {school}</h2>
        <h3>Mascot: {name}</h3>
        <h3>
          Location: {city}, {state}
        </h3>
        <br></br>
      </div>
    );
  }
}

class TeamList extends React.Component {
  render() {
    return (
      <div>
        {jsonData.teams.map((team) => (
          <TeamCard key={team.tid} team={team} />
        ))}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
