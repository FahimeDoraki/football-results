import React from 'react';
import {fetchData} from './api';
import {Matches} from './components';
import styles from './App.module.css';

class App extends React.Component{

  async componentDidMount() {

    const data = await fetchData();
    console.log(data);

  }
   
  render() {

    return(
      <div className={styles.container}>
        <Matches />
      </div>
    )

  }
}
export default App 
