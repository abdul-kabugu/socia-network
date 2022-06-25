import { AccountBookFilled } from "@ant-design/icons"
import {isWeb3Injected, web3Enable, web3AccountsSubscribe} from "@polkadot/extension-dapp"
import { fetchProfile } from "../logics/Index"

export const connectWallet = async  () => {
    const injectedExtensions = await web3Enable("weCollabo")
    if(!isWeb3Injected){
        alert("you do not  have  web3 extension")
        return
    }

    if(!injectedExtensions.length){
        alert("polkadot  extension did not  authorize  us to access ")
        return
    }

    await web3AccountsSubscribe(async (accounts) => {
        if(accounts.length > 0 ){
            const addresses = accounts.map((account) => account.address)
            console.log(addresses)
            //integrate  subsocial SDK
           
          fetchProfile("3pmF59u9YijhvEeGCzPhtCiXwRLFvgp3Uq1gwxbWr6A5CKLV")
            
        }
    })


}