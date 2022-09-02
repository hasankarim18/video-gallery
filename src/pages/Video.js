import React, { Fragment, useEffect } from 'react'
import Player from '../components/description/Player'
import VideoDescription from '../components/description/VideoDescription'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingelVideo } from '../features/Video/VideoSlice'
import { useParams } from 'react-router-dom'

import RelatedVideoList from '../components/List/RelatedVideoList'
import Loading from '../components/ui/Loadiing'


const Video = () => {

    const dispatch = useDispatch()
    const { videoId } = useParams()
    //  console.log(videoId)

    const { video, isLoading, isError, error } = useSelector(state => state.video)

    useEffect(() => {
        dispatch(fetchSingelVideo(videoId))
    }, [dispatch, videoId])

    // console.log(video)

    //decide what to do 
    const { link, title, tags, id } = video

    let content = null

    if (isLoading) {
        content = <Loading />
    } else if (!isLoading && isError) {
        content = <div>{error}</div>
    } else if (!isLoading && !isError && !id) {
        content = <div>No video fount ---</div>
    } else if (!isLoading && !isError && id) {
        content = <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
                {/* <!-- video player --> */}

                <Player link={link} title={title} />

                {/* <!-- video description --> */}
                <VideoDescription video={video} />
            </div>

            {/* <!-- related videos --> */}
            <RelatedVideoList currentVideoId={id} tags={tags} />
        </div>
    }

    return (
        <Fragment>

            <section className="pt-6 pb-20">
                <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    {
                        content
                    }
                </div>
            </section>

        </Fragment>
    )
}

export default Video