import axios from '../../utils/axios'

export const getTags = async () => {
    const response = await axios.get('/tags')

    // console.log(response)
    if (response.status !== 200 && response.statusText !== 'OK') {
        throw new Error(`Some thing went wrong!!! ${response.statusText}`)

    }

    return response.data
}