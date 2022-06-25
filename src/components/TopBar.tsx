import React from 'react';
import { Logo, NavCenter, NavItem, NavLeft, NavList, NavRight, StartBtn, TopBarContainer } from '../Styles';
import {Link} from 'react-router-dom'
const TopBar = () => {
    return <TopBarContainer>
      <NavLeft>
      <Logo> <Link to="/" style={{color: "black", textDecoration: "none"}}> weCollabo </Link></Logo>
      </NavLeft>
      <NavCenter>
        <NavList>
           <NavItem>home</NavItem> 
            <NavItem>news</NavItem>
            <NavItem>community</NavItem>
           
        
        </NavList>
        </NavCenter>
      <NavRight>
          <StartBtn><Link to="/create-profile" style={{textDecoration: "none", color: "white"}}> get started </Link></StartBtn>
      </NavRight>
    </TopBarContainer>
}



export default TopBar;