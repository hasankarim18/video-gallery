import React from 'react'
import { Link } from 'react-router-dom'
import { fetchVideos } from '../../features/Videos/VideosSlice'
import { useSelector, useDispatch } from 'react-redux'
import { authorSelected } from '../../features/filter/filterSlice'
import { useMatch, useNavigate } from 'react-router-dom'



const RelatedVideoListItem = (props) => {
    //   console.log(props.video)
    const dispatch = useDispatch()
    const match = useMatch('/')
    const navigate = useNavigate()
    const { title, views, author, date, duration, id, thumbnail, authorId } = props.video




    const authorVideoHandler = (id) => {
        if (!match) {
            navigate('/')
        }
        dispatch(fetchVideos({ tags: [], search: '', authorId: id }))
        dispatch(authorSelected(authorId))
    }

    return (
        <div className="w-full flex flex-row gap-2 mb-4">
            <Link to={`/videos/${id}`}>
                <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">

                    <img src={thumbnail}
                        className="object-cover" alt="Some video title" />

                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                        {duration}
                    </p>
                </div>
            </Link>

            <div className="flex flex-col w-full">
                <Link to={`/videos/${id}`} >
                    <p className="text-slate-900 text-sm font-semibold">
                        {title}
                    </p>
                </Link>
                <a onClick={() => authorVideoHandler(authorId)} className="text-gray-400 text-xs mt-2 hover:text-gray-600" href="#">
                    {author}
                </a>
                <p className="text-gray-400 text-xs mt-1">
                    {views}K views . {date}
                </p>
            </div>
        </div >
    )
}

export default RelatedVideoListItem