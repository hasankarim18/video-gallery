import React, { useEffect } from 'react'
import Tag from './Tag'
import { fetchTags } from '../../features/Tags/TagSlice'
import { useSelector, useDispatch } from 'react-redux'
import { resetSearch } from '../../features/filter/filterSlice'

const Tags = () => {

    const dispatch = useDispatch()
    const { tags } = useSelector(state => state.tags)


    useEffect(() => {
        dispatch(fetchTags())

    }, [dispatch])

    const resetSearchHandler = () => {
        dispatch(resetSearch())
    }


    return tags?.length > 0 ?
        <section  >
            <div style={{ display: "flex", padding: "0 30px" }} >
                <div style={{ width: "80%" }} className=" mx-auto px-5 py-6 lg:px-0 flex gap-2 items-center border-b overflow-y-auto">

                    {
                        tags.map(tag => <Tag key={tag.id} title={tag.title} />)
                    }
                    {/* <!-- selected --> */}

                </div>
                <div className="border-b" style={{ width: "20%" }} >
                    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                        <span
                            onClick={resetSearchHandler}
                            className="
                        cursor-pointer 
                         bg-transparent hover:bg-orange-700 text-orange-700 font-semibold hover:text-white py-2 px-4 border-2 border-orange-700 hover:border-transparent rounded"
                        > Reset Search</span>
                    </div>

                </div>
            </div>
        </section>
        : null

}

export default Tags


    // < div className = "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" >
    //     redux
    //             </div >