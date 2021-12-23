import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Level from '../Components/Level';
import Info from '../Components/Info';
import Timer from '../Components/Timer';
import styles from '../CSS/app.module.css'
import Choose from '../Components/Choose';
import Grid from '../Components/Grid';
import Overlay from '../Components/Overlay';
import Popup from '../Components/Popup';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/store';

const App = () => {
  const [_level, setLevel] = useState(undefined);
  const [_weapon, setWeapon] = useState(undefined);
  const [_size, setSize] = useState(undefined);
  const [conclusion, setConclusion] = useState(undefined);
  let dispatch= useDispatch();

  let { level, weapon, size, conclusion: _conclusion } = useSelector(state => state.state);

  useEffect(() => {
    setLevel(level);
    setWeapon(weapon);
    setSize(size);

    console.log(level, weapon, size);
  }, [level, weapon, size]);

  useEffect(()=> {
    setConclusion(_conclusion);
    if(_conclusion!== "NOT_CONCLUDED") {
      dispatch(actions.setInitialState());
    }
  }, [_conclusion])

  return (
    <div >
      {
        conclusion !== "NOT_CONCLUDED" ? <Overlay />
          : <></>
      }
      {
        conclusion !== "NOT_CONCLUDED" ? <Popup />
          : <></>}
      <Header></Header>
      <div className={styles.hero}>
        {
          _level ?
            <Level />
            :
            _weapon ?
              <Choose />
              :
              <Grid n={_size} />
        }
        {
          _level || _weapon ?
            <Info />
            :
            <Timer time={_size === 3 ? 60 : _size === 4 ? 120 : 180} />
        }
      </div>
    </div>
  );
}

export default App;
