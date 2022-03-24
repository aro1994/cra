import { FC } from 'react';
import styles from './app.module.scss'
import { Header } from './components/header/Header';
import { Technologies } from './components/technologies/Technologies';



export const App: FC = ()=>{
  return <div>
    <Header/>
    <Technologies/>
    
  </div>

}
