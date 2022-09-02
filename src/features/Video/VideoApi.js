import axios from '../../utils/axios'

export const getVideo = async (id) => {
    // const response = await axios.get(`/videos/${id}`)
    const response = await axios.get(`/videos/${id}`)

    //    console.log('api called')

    // console.log(response)
    if (response.status !== 200 && response.statusText !== 'OK') {
        throw new Error(`Some thing went wrong!!! ${response.statusText}`)

    }


    return response.data
}