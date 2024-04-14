import React, { useEffect, useState } from 'react'
import ViewTrailer from './ViewTrailer';
// import criminalJustice from "../Image/criminaljustice.png"
// import TitleImage from "../Image/criminalJusticeTitle.png"

function Welcome() {
    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=3e019319a93abf335fdb6aa5790bf17e");
            const json = await response.json();
            setMovie(json.results[6]); // Assuming you want the first movie
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getMovie();
    }, []);
    console.log(movie);

    return (
        <div style={{ backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${movie.poster_path})`, backgroundRepeat: "no-repeat", marginLeft: "-40px", backgroundSize: "1600px 1000px" }} className='pb-7 h-screen grid grid-cols-2 pl-4'>
            <div>
                {/* <img src={TitleImage} alt="" className='pt-60' /> */}
                <h1 className='text-slate-300 pt-80 font-bold text-4xl'>{movie.title}</h1>
                <div className='flex mt-4'>
                    <div className='w-60'>
                        <span className='text-white font-bold'>{movie.date}</span>
                    </div>
                    {/* <div className='w-30'>
                        <span className='text-white font-bold'>1 Season <span className='ml-1'>|</span></span>
                    </div>
                    <div className='w-30'>
                        <span className='text-white font-bold ml-2'>7 Languages <span className='ml-2'>|</span></span>
                    </div> */}
                    {/* <div className='w-30'>
                        <span className='text-white font-bold ml-4' style={{ backgroundColor: "hsla(0, 0%, 100%, .2)", padding: "6px", borderRadius: "4px" }}>U/A 16+</span>
                    </div> */}
                </div>
                <h1 className='font-medium text-base text-slate-100 mt-4'>23-10-2024</h1>
                <h1 className='font-medium text-slate-400 mt-3'>{movie?.overview ? movie.overview.substring(0, movie.overview.indexOf(".")) : ""}</h1>
                <div className='flex mt-4'>
                    <div className='w-20'>
                        <span className='text-white font-bold'>Drama <span className='ml-2'>|</span></span>
                    </div>
                    <div className='w-20'>
                        <span className='text-white font-bold'>Crime <span className='ml-2'>|</span></span>
                    </div>
                    <div className='w-20'>
                        <span className='text-white font-bold'>Mystery <span className='ml-2'>|</span></span>
                    </div>
                    <div className='w-20'>
                        <span className='text-white font-bold ml-4'>Family</span>
                    </div>
                </div>
                {/* <button className='bg-gray-600 mt-10 w-80 h-12 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Watch Now
                </button> */}
                {movie && < ViewTrailer welcomeId={movie?.id} />}
            </div>
        </div>
    )
}

export default Welcome