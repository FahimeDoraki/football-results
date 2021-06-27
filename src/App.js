import React from 'react';
import axios from 'axios';

import {Matches , Menu} from './components';
import styles from './App.module.css';


class App extends React.Component{
  
  state = {
    matchesArray : [],
  }
  async componentDidMount() {
    const url='https://api.football-data.org/v2/competitions/2021/matches';
    var token='ea7cb0230e764362aef72269a19ed9d5';

    await axios.get(url,{headers:{'X-Auth-Token':token}})
    .then(response =>{
      this.setState({matchesArray: response.data.matches});
      console.log(response.data.matches);
    });

  } 

  render() {
    

      return(

        <div className={styles.container}>  

          <h1>برنامه بازی ها</h1>
          <hr/>

          <div className={styles.container_menu}>
              <Menu />
          </div>

          <div className={styles.container_detail}>
            {this.state.matchesArray.map((match, index) =>{
                return (<Matches key={match.id} match={match}/>)
            })}
          </div>
          
        </div>
      );

    }
}
export default App 
