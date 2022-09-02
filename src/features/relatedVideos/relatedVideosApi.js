import axios from '../../utils/axios'

export const getRelatedVideos = async ({ tags, id }) => {
    //  http://localhost:9000/videos?tags_like=javascript&tags_like=react&id_ne=4&_limit=5

    //http://localhost:9000/videos?tags_like=tailwind&tags_like=css&tags_like=ui&tags_like=javascript&id_ne=7&_limit=5

    const limit = 5
    // console.log(tags)
    let queryString = tags?.length > 0 ?
        tags.map(tag => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}`
        : `id_ne=${id}&_limit=${limit}`

    // console.log(queryString)

    const finalQueryString = `/videos?${queryString}`


    const response = await axios.get(finalQueryString)


    //console.log('api called')

    // console.log(response)
    if (response.status !== 200 && response.statusText !== 'OK') {
        throw new Error(`Some thing went wrong!!! ${response.statusText}`)

    }

    return response.data
}