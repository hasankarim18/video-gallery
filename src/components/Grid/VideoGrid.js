import React, { useEffect, useState } from 'react'
import VideoGridItem from './VideoGridItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideos } from '../../features/Videos/VideosSlice'
import Loadiing from '../ui/Loadiing'
import Pagination from '../ui/Pagination'


const VideoGrid = () => {
    const dispatch = useDispatch()
    const videos = useSelector(state => state.videos.videos)
    const isLoading = useSelector(state => state.videos.isLoading)
    const isError = useSelector(state => state.videos.isError)
    const error = useSelector(state => state.videos.error)
    const { tags, search, authorId } = useSelector(state => state.filter)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(4)



    useEffect(() => {
        dispatch(fetchVideos({ tags, search, authorId }))
        //  setPosts(videos)
    }, [dispatch, tags, search, authorId])

    // console.log('videos', videos)

    // pagination
    // get current post 
    const indexOflastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOflastPost - postsPerPage


    // console.log('currentpost', currentPosts)
    // decide what to do

    let content;
    // let postNumber = 0
    if (isLoading) {
        content = <Loadiing />
    } else if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>
    } else if (!isError && !isLoading && videos?.length === 0) {
        content = <div className="col-span-12">No videos found</div>
    }
    else if (!isError && !isLoading && videos.length > 0) {
        const currentPosts = videos.slice(indexOfFirstPost, indexOflastPost)


        content = currentPosts.map(video => {
            return (
                <VideoGridItem key={video.id} video={video} />
            )
        })
    }

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <React.Fragment>
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
            <Pagination paginate={paginate} postsPerPage={postsPerPage} totolPosts={videos.length} />
        </React.Fragment>
    )
}

export default VideoGrid