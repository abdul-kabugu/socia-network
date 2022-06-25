import React, {useState} from 'react';
import TopBar from '../components/TopBar';
import { BottomNav, ConnectWalletContainer, CreateProfileContainer, Input, SmallTxt, StartBtn, StepThreeContainer, StepTitle, StepTwoContainer, UserStepsContainer } from '../Styles';
 import { Steps } from 'antd'
import { connectWallet } from '../hooks/useConnectWallet';
import { fetchProfile } from '../logics/Index';

const CreateProfile = () => {
    const [userName, setuserName] = useState("")
    const [userBio, setuserBio] = useState("")
    const { Step } = Steps;

    /*const connectWallet = async () => {
      const { isWeb3Injected, web3Enable, web3AccountsSubscribe } = await import('@polkadot/extension-dapp')
      const injectedExtensions = await web3Enable('twitter-dapp-subsocial')
      if (!isWeb3Injected) {
        alert('Browser do not have any polkadot extension')
        return;
      }
  
      if (!injectedExtensions.length) {
        alert('Polkadot Extension have not authorized us to get accounts');
        return;
      }
  
      await web3AccountsSubscribe(async (accounts) => {
        if (accounts.length > 0) {
          const addresses = accounts.map((account) => account.address)
          console.log(addresses[0])
  
          // Integrate SubSocial SDK.
          fetchProfile("3pmF59u9YijhvEeGCzPhtCiXwRLFvgp3Uq1gwxbWr6A5CKLV")
  
         // router.replace('/home')
        }
      })
    };*/
    return <CreateProfileContainer>
       <TopBar  />
        <UserStepsContainer>
            <Steps direction='vertical' current={1}>
                <Step title="Step 1" description={
                    <ConnectWalletContainer >
                       <StepTitle> connect  wallet </StepTitle>
                          <StartBtn onClick={connectWallet}>connect wallet</StartBtn>
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