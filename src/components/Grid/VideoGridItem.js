import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchVideos } from '../../features/Videos/VideosSlice'
import { useSelector, useDispatch } from 'react-redux'
import { authorSelected } from '../../features/filter/filterSlice'
import { fetchAuthorVideos } from '../../features/authorFilter/authorSlice'


const VideoGridItem = ({ video = {} }) => {
    const { authorId } = useSelector(state => state.filter)

    const dispatch = useDispatch()
    // console.log(video)

    const authorVideoHandler = () => {

        dispatch(fetchVideos({ tags: [], search: '', authorId: video.authorId }))
        dispatch(authorSelected(video.authorId))
    }


    //   console.log(props)
    const { thumbnail, title, views, author, id, avatar, date } = video
    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
            <div className="w-full flex flex-col">
                <div className="relative">
                    <Link to={`/videos/${id}`}>
                        <img src={thumbnail}
                            className="w-full h-auto" alt="Some video title" />
                    </Link>

                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                        12:10
                    </p>
                </div>

                <div className="flex flex-row mt-2 gap-2">
                    <a href="#" className="shrink-0">
                        <img alt={author} src={avatar}
                            className="rounded-full h-6 w-6" />
                    </a>

                    <div clas="flex flex-col">
                        <a href="video.html">
                            <p className="text-slate-900 text-sm font-semibold">
                                {title}
                            </p>
                        </a>
                        <a onClick={authorVideoHandler}
                            className="text-gray-400 text-xs mt-2 hover:text-gray-600" href="#">
                            {author}
                        </a>
                        <p className="text-gray-400 text-xs mt-1">
                            {views} views . {date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoGridItem
