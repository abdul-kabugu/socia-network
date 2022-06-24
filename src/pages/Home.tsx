import React from 'react';
import HomeView from '../components/HomeView'
import HomeViewFour from '../components/HomeViewFour';
import HomeViewTow from '../components/HomeViewTow';
import HomeViewTthree from '../components/HomeViewTthree';
import TopBar from '../components/TopBar';
import { HomeContainer } from '../Styles';
const Home = () => {
    return (
      <HomeContainer>
         <TopBar />
        <HomeView  />
        <HomeViewTow  />
       <HomeViewTthree />
       <HomeViewFour />
        </HomeContainer> 
    )
}


export default Home;