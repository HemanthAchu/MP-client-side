import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

export const uploadvideoAPI =async (video)=>{
  return  await commonAPI("POST",`${SERVER_URL}/videos`,video)
}
export const getAllvideoAPI =async ()=>{
  return await commonAPI("GET",`${SERVER_URL}/videos`,"")
}
export const savehistoryAPI= async (videoDetails)=>{
  return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}
export const gethistoryAPI=async ()=>{
  return await commonAPI("GET",`${SERVER_URL}/history`,"")
}
export const DeletehistoryAPI =async(Id)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/history/${Id}`,{})
}
export const DeleteVideoAPI =async(Id)=>{
return await commonAPI("DELETE",`${SERVER_URL}/videos/${Id}`,{})
}
export const AddcategoryAPI =async(categoryDetails)=>{
  return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}
export const getCategoryAPI =async()=>{
  return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}
export const DeleteCategoryAPI= async(Id)=>{
return await commonAPI("DELETE",`${SERVER_URL}/categories/${Id}`,{})
}
export const GetAVideoAPI= async(Id)=>{
  return await commonAPI("GET",`${SERVER_URL}/videos/${Id}`,"")
}
export const updateCategoryAPI = async(Id,UpdatecategoryDetails)=>{
   return await commonAPI("PUT",`${SERVER_URL}/categories/${Id}`,UpdatecategoryDetails)
}
export const getsingleCategoryAPI = async(caId)=>{
  return await commonAPI("GET",`${SERVER_URL}/categories/${caId}`)
}