import React, { useEffect } from 'react'
import RelatedVideoListItem from './RelatedVideoListItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice'
import Loading from '../../components/ui/Loadiing'
import { useLocation, useParams } from 'react-router-dom';


const RelatedVideoList = ({ currentVideoId, tags }) => {

    const dispatch = useDispatch()
    const location = useLocation()
    const { videoId } = useParams()
    console.log('videoId', videoId)


    const alldata = useSelector(state => state.relatedVideos)
    // console.log(alldata)

    const { relatedVideos, isLoading, error, isError } = alldata


    // console.log(relatedVideos)

    //  console.log(tags)
    console.log('current use value', currentVideoId)

    useEffect(() => {
        //  console.log(currentVideoId)
        dispatch(fetchRelatedVideos({ tags, id: videoId }))
    }, [dispatch, tags, videoId])

    // decide what to remder 
    let content = null

    if (isLoading) {
        content = <Loading />
    } else if (!isLoading && isError) {
        content = <div>{error}</div>
    } else if (!isLoading && !isError && relatedVideos?.length === 0) {
        content = <div>No videos related videos found</div>
    } else if (!isLoading && !isError && relatedVideos?.length > 0) {
        content = relatedVideos.map(video => {
            return <RelatedVideoListItem video={video} key={video.id} />
        })
    }


    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {/* <!-- single related video --> */}
            {content}
        </div>
    )
}

export default RelatedVideoList
