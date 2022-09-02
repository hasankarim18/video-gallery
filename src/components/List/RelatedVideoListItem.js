import React from 'react'
import { Link } from 'react-router-dom'



const RelatedVideoListItem = (props) => {
    //   console.log(props.video)

    const { title, views, author, date, duration, id, thumbnail } = props.video

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
                <a className="text-gray-400 text-xs mt-2 hover:text-gray-600" href="#">
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