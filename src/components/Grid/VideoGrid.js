import React, { useEffect } from 'react'
import VideoGridItem from './VideoGridItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideos } from '../../features/Videos/VideosSlice'
import Loadiing from '../ui/Loadiing'

const VideoGrid = () => {
    const dispatch = useDispatch()
    const videos = useSelector(state => state.videos.videos)
    const isLoading = useSelector(state => state.videos.isLoading)
    const isError = useSelector(state => state.videos.isError)
    const error = useSelector(state => state.videos.error)
    const { tags, search, authorId } = useSelector(state => state.filter)


    const allVideo = videos.videos

    useEffect(() => {
        dispatch(fetchVideos({ tags, search, authorId }))
    }, [dispatch, tags, search, authorId])

    // decide what to do

    let content;

    if (isLoading) {
        content = <Loadiing />
    } else if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>
    } else if (!isError && !isLoading && videos?.length === 0) {
        content = <div className="col-span-12">No videos found</div>
    }
    else if (!isError && !isLoading && videos?.length > 0) {
        content = videos.map(video => {
            return (
                <VideoGridItem key={video.id} video={video} />
            )
        })
    }

    return (

        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {/* <!-- single video --> */}
                    {content}

                    {/* <!-- error section */}
                    {/* <div className="col-span-12">some error happened</div> --> */}
                </div>
            </section>
        </section>
    )
}

export default VideoGrid