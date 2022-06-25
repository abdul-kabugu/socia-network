import { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import { connect, fetchPostsBySpaceIs } from '../logics/Index';
import { ShotsContainer } from '../Styles';

const ShotsPage = () => {
   let [shotsData, setshotsData] = useState([])
    
    const fetchPosts =  async () => {
        await connect()
     let  data = await fetchPostsBySpaceIs()
       const allData = data.map(data => {
        const {content, struct} =  data
        return {
            id: struct.id,
            description: content?.body,
            userName : struct.owner.toString()
        }
       })
       setshotsData(allData as any)
    }
    useEffect(() => {
        fetchPosts()
       
    }, [])
   
     console.log(shotsData)
    return <ShotsContainer>
        <TopBar />
      
    </ShotsContainer>
}



export default ShotsPage;