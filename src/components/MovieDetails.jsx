import React from 'react'
import { useLocation } from 'react-router-dom'
import ViewTrailer from './ViewTrailer';

function MovieDetails() {
    const location = useLocation();
    console.log(location);
    return (
        <div style={{
            backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${location?.state?.data?.poster_path})`,
            backgroundRepeat: "no-repeat", marginLeft: "0px", backgroundSize: "cover"
        }} className='pl-20 pb-7 h-screen grid grid-cols-2 pl-4 w-screen'>
            <div>
                {/* <img src={TitleImage} alt="" className='pt-60' /> */}
                <h1 className='text-slate-300 pt-80 font-bold text-4xl'>{location?.state?.data?.title}</h1>
                <h1 className='text-white font-bold'>{location?.state?.data?.date} </h1>
                <h1 className='font-medium text-base text-slate-100 mt-4'>{location?.state?.data?.release_date} | Language  {location?.state?.data?.original_language
                }</h1>
                <h1 className='font-medium text-slate-400 mt-3'>{location?.state?.data?.overview}</h1>
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
                {/* <button className='bg-gray-600 mt-10 w-80 h-12 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Watch Now</button> */}
                <ViewTrailer detailsId={location?.state?.data?.id} />
            </div>
        </div>
    )
}

export default MovieDetails