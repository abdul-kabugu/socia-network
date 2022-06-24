import React from 'react';
import { LgTitle, SectionSubtitle, SmallTxt, StepBox, StepsContainer, ViewThreeContainer } from '../Styles';
import { DownloadOutlined, FormOutlined, LoginOutlined } from '@ant-design/icons'


const HowToUse = () => {
    return (
        <ViewThreeContainer>
           <LgTitle>using weCollabo</LgTitle> 
           <StepsContainer>
            <StepBox>
                    <DownloadOutlined  style={{color : "#FDA12F", fontSize: "50px"}}/>
                  <SmallTxt>download polkadot <br /> browser extension</SmallTxt>
            </StepBox>

            <StepBox>
                    <LoginOutlined  style={{color : "#5A9BFD", fontSize: "50px"}}/>
                  <SmallTxt>create account  <br />  or create team account (DAO)</SmallTxt>
            </StepBox>

            <StepBox>
                    <FormOutlined   style={{color : "#FF8988", fontSize: "50px"}}/>
                  <SmallTxt>start creating <br /> & growing on chain</SmallTxt>
            </StepBox>
           </StepsContainer>
        </ViewThreeContainer>
    )
}


export default HowToUse;
