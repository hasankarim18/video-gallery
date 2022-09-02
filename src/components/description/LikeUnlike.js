import React, { useEffect } from 'react'
import LikeImg from '../../assets/like.svg'
import UnlikeImg from '../../assets/unlike.svg'
import { useSelector } from 'react-redux'
import { likeNumber, unlikeNumber, giveLike, giveUnLike } from '../../features/likeUnlike/likeUnlikeFeature'
import { useDispatch } from 'react-redux'


const LikeUnlike = ({ videoId }) => {

    const { likes, unlikes } = useSelector(state => state.status)
    const dispatch = useDispatch()



    const likeHandle = () => {
        dispatch(giveLike({ id: videoId, prevAmount: unlikes }))
    }

    const unlikeHandler = () => {
        dispatch(giveUnLike({ id: videoId, prevAmount: unlikes }))
    }

    useEffect(() => {
        dispatch(likeNumber(videoId))
    }, [dispatch, likes, unlikes])

    useEffect(() => {
        dispatch(unlikeNumber(videoId))
    }, [dispatch, likes, unlikes])


    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div onClick={likeHandle} className="shrink-0">
                    <img className="w-5 block cursor-pointer" src={LikeImg} alt="Like" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {likes}
                </div>
            </div>
            <div className="flex gap-1">
                <div onClick={unlikeHandler} className="shrink-0">
                    <img className="w-5 block cursor-pointer" src={UnlikeImg} alt="Unlike" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {unlikes}
                </div>
            </div>
        </div>
    )
}

export default LikeUnlike