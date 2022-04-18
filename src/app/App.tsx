import { FC } from 'react';

import { Header } from '../components/header/Header';
import { Main } from '../components/main/main';
import { Nav } from '../components/nav/Nav';

import styles from './app.module.scss'



export const App: FC = ()=>{
  return <div className={styles.app}>
    <Header/>
    <Nav/>
    <Main/>

  </div>

}
