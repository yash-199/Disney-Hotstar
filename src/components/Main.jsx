import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome'
import Home from './Home'

function Main() {
    const [search, setSearch] = useState(false);
    const searchRef = useRef(null);
    return (
        <div className='bg-black min-h-screen'>
            <div className="flex  h-full w-full">
                <div className="w-1/12">
                    <Navbar setSearch={setSearch} search={search} searchRef={searchRef} />
                </div>
                <div className="w-11/12">
                    <Welcome />
                </div>
            </div>
            <div>
                <Home search={search} searchRef={searchRef} />
            </div>
        </div>
    )
}

export default Main