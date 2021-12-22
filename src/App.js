import React from 'react';
import Header from './Components/Header';
import Level from './Components/Level';
import Info from './Components/Info';
import styles from './CSS/app.module.css'

function App() {
  return (
    <div >
      <Header></Header>
      {
        <div className={styles.hero}>
          <Level></Level>
          <Info></Info>
        </div>
      }

    </div>
  );
}

export default App;
