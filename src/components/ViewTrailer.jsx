import React, { useEffect, useState, useCallback } from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../firebase/setup';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#000000',
    },
};

function ViewTrailer({ detailsId, welcomeId }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [video, setVideo] = useState([]);

    const getVideos = useCallback(async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${detailsId ?? welcomeId}/videos?api_key=3e019319a93abf335fdb6aa5790bf17e&language=en-US`);
            const json = await response.json();
            console.log("API Response:", json);
            if (json.results && json.results.length > 0) {
                setVideo(json.results);
            } else {
                setVideo([]);
            }
        } catch (err) {
            console.error(err);
        }
    }, [detailsId, welcomeId]);

    useEffect(() => {
        getVideos();
    }, [getVideos]); // Include getVideos as a dependency

    function openModal() {
        if (auth.currentUser?.phoneNumber) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
            toast.warning("Please login")
        }
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal} className='bg-zinc-600 mt-10 w-80 h-12 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Watch Now</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {video.length > 0 ? (
                    <YouTube videoId={video[0].key} />
                ) : (
                    <p>No video available</p>
                )}
            </Modal>
            <ToastContainer />
        </div>
    );
}

export default ViewTrailer;
