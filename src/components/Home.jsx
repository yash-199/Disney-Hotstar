import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home({ search, searchRef }) {
    const [movie, setMovie] = useState([])
    const getMovie = async () => {
        try {
            await fetch("https://api.themoviedb.org/3/movie/popular?api_key=3e019319a93abf335fdb6aa5790bf17e")
                .then(res => res.json())
                .then(json => setMovie(json.results))
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getMovie()
    }, [])

    // console.log(movie);

    const [searchKey, setSearchKeys] = useState("");

    return (
        <>
            {search &&
                <input
                    ref={searchRef} onChange={(e) => setSearchKeys(e.target.value)}
                    type="text" className="mt-3 bg-gray-950 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10/12 ml-28 p-2.5"
                    placeholder="Movies, Show and more" required />}
            <h1 className='text-slate-300 pl-28 font-bold text-xl pt-7 mt-5'>Latest Release</h1>
            <div className='grid grid-cols-6 pl-24 pt-7'>
                {movie.filter((data) => data.title.includes(searchKey)).map((data) => {
                    return <>
                        <Link to='/details' state={{ data: data }}><div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2">
                            <img className="w-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Sunset in the mountains" />
                        </div>
                        </Link>
                    </>
                })}
            </div>
        </>
    )
}

export default Home