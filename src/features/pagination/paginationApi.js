import axios from '../../utils/axios'

export const getVideos = async (tags, search, authorId) => {

    let queryString = ''
    if (tags.length > 0) {
        queryString += tags.map(tag => `tags_like=${tag}`).join('&')
    }

    if (search !== '') {
        queryString += `&q=${search}`
    }

    if (authorId !== '' && authorId > 0) {
        queryString += `&authorId_like=${authorId}`
    }

    // console.log(queryString)
    //  console.log(queryString)
    const response = await axios.get(`/videos?${queryString}&_limit=4`)

    if (response.status !== 200 && response.statusText !== 'OK') {
        throw new Error(`Some thing went wrong!!! ${response.statusText}`)

    }

    return response.data
}