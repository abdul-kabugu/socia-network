import styled from 'styled-components'

export const AppContainer = styled.div`
background-color: red;



`
export const HomeContainer = styled.div`

background-color: yellow ;
background-image: linear-gradient(to bottom right, #F4D8E2, #F8F8F8,#DFDFF6,#F8F8F8);
width: 100vw;
  

`

export const TopBarContainer = styled.div`
 display: flex;
 justify-content: space-between ;
 padding: 0 20px ;
 height: 60px ;
  
`
export const NavLeft =  styled.div`
  
 
   display: flex;
   align-items: center;
`
export const NavCenter =  styled.div`
   width: 30% ;
  
 
 
`
export const NavRight =  styled.div`
 display: flex;
   align-items: center;
 
`

export const NavList = styled.ul`
 list-style-type: none ;
 display: flex;
justify-content: space-between ;
`
export const NavItem =  styled.li`
  text-transform: capitalize ;
  cursor: pointer ;
    font-size: 19px ;
    font-weight: 400 ;

`
export const  StartBtn = styled.button`
  padding: 13px 27px;
  border-radius: 10px;
  outline: none ;
  border: none ;
  background-color: #2563EB ;
  font-weight: 500 ;
  color: white;
  font-size: 17px ;
  text-transform: capitalize ;
  cursor: pointer ;
`
export const Logo = styled.h3`
  cursor:  pointer;
  cursor: pointer ;
`

export const HomeViewContainer = styled.div `
width: 100vw ;
height: 90vh ;
display: flex;
align-items:center ;
justify-content: center ;


`

export const  CenteredTxt = styled.p`
font-family: 'Montserrat', sans-serif;
 font-weight: 900 ;
 text-align: center ;
 font-size: 60px ;
  
`

export const  ViewTwoContainer = styled.div`
  width: 95vw;
  height: 89vh ;
  margin: 0 auto ;
  background-color: #06018E ;
  border-radius: 14px ;
  display: flex;
  align-items: center ;
  justify-content: center ;
  flex-direction: column ;

`
export const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800 ;
  font-size: 60px;
  color: white ;
  text-transform: capitalize ;

`
export const SectionSubtitle = styled.h5`
 font-family: 'Montserrat', sans-serif;
  font-weight: 700 ;
  font-size: 30px;
  line-height: 40px ;
  color: white;
  text-transform: capitalize ;
  text-align: center ;
  
`
export const LgTitle = styled( SectionTitle)`
    color: #1b1b1b ;
    font-weight: 900 ;
    font-size: 60px ;

`
export const ViewThreeContainer = styled.div`
  width: 95vw;
  height: 70vh;
  margin: 0 auto ;
  border-radius: 14px ;
  padding: 15px ;
  display: flex;
  justify-content: center ;
  align-items: center ;
  flex-direction: column ;

`
export const StepsContainer = styled.div`
width: 70% ;
display: flex;
justify-content: space-between ;
`
export const StepBox = styled.div`
 display: flex;
 flex-direction: column ;
 justify-content: center ;
 align-items: center ;
`
export const SmallTxt = styled.p`
font-family: "Montserrat", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";;
  font-weight: 400 ;
  font-size: 16px;
  color: #777e91;
  text-transform: capitalize ;
  cursor: pointer ;
  text-align: center ;

`
export const SectionSubBlack = styled(SectionSubtitle)`
color:  #1b1b1b;

`
export const ViewFourContainer = styled.div`
   width: 95vw;
  height: 40vh;
  margin: 0 auto ;
  border-radius: 14px ;
  padding: 15px ;
  
  display: flex;
  align-items: center ;
  justify-content: center ;
  flex-direction: column ;


`
