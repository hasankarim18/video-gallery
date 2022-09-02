import React, { useEffect } from 'react'
import Tag from './Tag'
import { fetchTags } from '../../features/Tags/TagSlice'
import { useSelector, useDispatch } from 'react-redux'

const Tags = () => {

    const dispatch = useDispatch()
    const { tags } = useSelector(state => state.tags)


    useEffect(() => {
        dispatch(fetchTags())

    }, [dispatch])



    return tags?.length > 0 ?
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {
                    tags.map(tag => <Tag key={tag.id} title={tag.title} />)
                }
                {/* <!-- selected --> */}

            </div>
        </section>
        : null

}

export default Tags


    // < div className = "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" >
    //     redux
    //             </div >