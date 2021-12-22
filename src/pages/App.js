import React, {useState} from 'react';
import Header from '../Components/Header';
import Level from '../Components/Level';
import Info from '../Components/Info';
import styles from '../CSS/app.module.css'
import Choose from '../Components/Choose';

function App() {
  const [levelChosen, setLevelChosen]= useState(false);

  return (
    <div >
      <Header></Header>
      <div className={styles.hero}>
        { levelChosen? <Level></Level>: <Choose />}
        <Info></Info>
      </div>

    </div>
  );
}

export default App;
