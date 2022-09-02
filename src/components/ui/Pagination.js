import React from 'react'
import classes from './Pagination.module.css'


const Pagination = ({ postsPerPage, totolPosts, paginate }) => {

    const pageNumbers = []



    for (let i = 1; i <= Math.ceil(totolPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const paginatHandler = (num) => {
        paginate(num)

    }

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">

                {pageNumbers.map(number => {
                    return (
                        <button onClick={() => paginatHandler(number)} key={number}
                            className={`${classes.btn} px-4 py-1 rounded-full cursor-pointer`}>
                            <span   >{number}</span>
                        </button>
                    )
                })}


                {/* <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                    3
                </div>
                <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                    4
                </div> */}
            </div>
        </section>
    )
}

export default Pagination