import React from 'react';
import axios from 'axios';

import {Matches , Menu} from './components';
import styles from './App.module.css';


class App extends React.Component{
  
  state = {
    matchesArray : [],
    selectedMatchWeek : 38,
    matchArrayRelatedTSelectedDay: []
  }

  onSelectMatchWeek = (week) => {
      this.setState({
        selectedMatchWeek: week
      })
  }

  getSelectedMatchs = (week) => {
    let matchArrayRelatedTSelectedDay = this.state.matchesArray.filter((match) => {
      if(match.matchday == week){
        return match;
      }
    });

    this.setState({
      matchArrayRelatedTSelectedDay
    })
  }

  async componentDidMount() {
    const url='https://api.football-data.org/v2/competitions/2021/matches';
    var token='ea7cb0230e764362aef72269a19ed9d5';

    await axios.get(url,{headers:{'X-Auth-Token':token}})
    .then(response =>{
      this.setState({matchesArray: response.data.matches},() => {
        this.getSelectedMatchs(this.state.selectedMatchWeek)
      });
    });
  } 

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.selectedMatchWeek !== prevState.selectedMatchWeek) {
      this.getSelectedMatchs(this.state.selectedMatchWeek)

    }
}

  render() {
      return(
        <div className={styles.container}>  
          <h1>برنامه بازی ها</h1>
          <hr/>

          <div className={styles.container_menu}>
            <Menu onSelectMatchWeek={this.onSelectMatchWeek} selectedMatchWeek={this.state.selectedMatchWeek}/>   
          </div>

          <div className={styles.container_detail}>
            {this.state.matchArrayRelatedTSelectedDay.map((match, index) =>{
                return (<Matches key={match.id} match={match}/>)
            })}
          </div>
          
        </div>
      );

    }
}
export default App 
