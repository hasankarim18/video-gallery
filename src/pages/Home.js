import React, { Fragment } from 'react'

import VideoGrid from '../components/Grid/VideoGrid'

import Tags from '../components/Tags/Tags'
import Pagination from '../components/ui/Pagination'

const Home = () => {
    return (
        <Fragment>

            <Tags />
            <VideoGrid />
            <Pagination />

        </Fragment>
    )
}

export default Home