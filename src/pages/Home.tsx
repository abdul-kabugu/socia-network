import React from 'react';
import HomeView from '../components/HomeView'
import FeatureOne from '../components/FeatureOne';
import ShortIntro from '../components/ShortIntro';
import HowToUse from '../components/HowToUse';
import TopBar from '../components/TopBar';
import { HomeContainer } from '../Styles';
const Home = () => {
    return (
      <HomeContainer>
         <TopBar />
        <HomeView  />
        <ShortIntro />
        <HowToUse />
       <FeatureOne />
        </HomeContainer> 
    )
}


export default Home;