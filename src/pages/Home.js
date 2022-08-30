import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import VideoGrid from '../components/Grid/VideoGrid'
import Navbar from '../components/Navbar/Navbar'
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