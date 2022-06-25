import React, {useState} from 'react';
import TopBar from '../components/TopBar';
import { BottomNav, ConnectWalletContainer, CreateProfileContainer, Input, SmallTxt, StartBtn, StepThreeContainer, StepTitle, StepTwoContainer, UserStepsContainer } from '../Styles';
 import { Steps } from 'antd'

const CreateProfile = () => {
    const [userName, setuserName] = useState("")
    const [userBio, setuserBio] = useState("")
    const { Step } = Steps;
    return <CreateProfileContainer>
       <TopBar  />
        <UserStepsContainer>
            <Steps direction='vertical' current={1}>
                <Step title="Step 1" description={
                    <ConnectWalletContainer >
                       <StepTitle> connect  wallet </StepTitle>
                          <StartBtn>connect wallet</StartBtn>
                    </ConnectWalletContainer>
                }  />
                <Step style={{width: 600}}  title= "Step 2" description={
                    <StepTwoContainer>
                       <StepTitle> create profile </StepTitle>
                       <Input type="text" value={userName} placeholder="user name" onChange={e => setuserName(e.target.value)}/>
                       <Input type="text" value={userBio} placeholder="your  bio" onChange={e => setuserBio(e.target.value)} />
                       <StartBtn>submit</StartBtn>
                       </StepTwoContainer>
                }/>
                <Step style={{ width: 500}} title = "Step 3" description={
                   <StepThreeContainer>
                       <StepTitle> What is Your  interested in </StepTitle>
                       <StepTwoContainer>
                       <StepTitle> create profile </StepTitle>
                       <Input type="text" value={userName} placeholder="user name" onChange={e => setuserName(e.target.value)}/>
                       <Input type="text" value={userBio} placeholder="your  bio" onChange={e => setuserBio(e.target.value)} />
                       <StartBtn>submit</StartBtn>
                       </StepTwoContainer>
                       </StepThreeContainer>
                }/>
            </Steps>
        </UserStepsContainer>
        <BottomNav></BottomNav>
       </CreateProfileContainer>
}

export default CreateProfile;