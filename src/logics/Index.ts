import { newFlatSubsocialApi } from '@subsocial/api'
import { FlatSubsocialApi } from '@subsocial/api/flat-subsocial'
import { ProfileData } from '@subsocial/types/dto'

import config from './config'

let flatApi : FlatSubsocialApi
let selectedAddress : string
let selectedProfile :  ProfileData | undefined
const spaceId = "1015"
export const connect = async () => flatApi =  await newFlatSubsocialApi({
    ...config,
    useServer: {
        httpRequestMethod : "get"
    }
})



  export const fetchProfile = async (address: string) => {
    const accountId = address
    const profile = await flatApi.findProfile(accountId)
    console.log(profile)
    selectedAddress = address
    selectedProfile = profile
  }

  export const fetchPostsBySpaceIs = async () => {
    
    const postIds = await flatApi.subsocial.substrate.postIdsBySpaceId(spaceId as any)
  
    const posts = await flatApi.subsocial.findPosts({ids: postIds})
    //console.log(posts)
    return posts
  }