import React from 'react';
import { Logo, NavCenter, NavItem, NavLeft, NavList, NavRight, StartBtn, TopBarContainer } from '../Styles';

const TopBar = () => {
    return <TopBarContainer>
      <NavLeft>
      <Logo>weCollabo</Logo>
      </NavLeft>
      <NavCenter>
        <NavList>
           <NavItem>home</NavItem> 
            <NavItem>news</NavItem>
            <NavItem>community</NavItem>
           
        
        </NavList>
        </NavCenter>
      <NavRight>
          <StartBtn>get started</StartBtn>
      </NavRight>
    </TopBarContainer>
}



export default TopBar;