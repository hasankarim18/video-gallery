import axios from '../../utils/axios'

export const getVideos = async (tags, search) => {

    let queryString = ''
    if (tags.length > 0) {
        queryString += tags.map(tag => `tags_like=${tag}`).join('&')
    }

    if (search !== '') {
        queryString += `&q=${search}`
    }
    //  console.log(queryString)
    const response = await axios.get(`/videos?${queryString}`)
    //  const response = await axios.get(`/videos?${queryString}`)
    //  console.log(response.data)

    // console.log(response)
    if (response.status !== 200 && response.statusText !== 'OK') {
        throw new Error(`Some thing went wrong!!! ${response.statusText}`)

    }

    return response.data
}