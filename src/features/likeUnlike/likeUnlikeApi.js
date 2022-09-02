import axios from '../../utils/axios'

export const getLike = async (id) => {
    // const response = await axios.get(`/videos/${id}`)
    const response = await axios.get(`/videos/${id}`)
    // console.log(response)
    return response.data.likes
}


export const getUnlike = async (id) => {
    const response = await axios.get(`/videos/${id}`)

    return response.data.unlikes
}





