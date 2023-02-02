import React, { useState, useEffect, useRef } from "react";


const useAudio = (url: string) => {
    const audio = useRef<HTMLAudioElement | undefined>(
        typeof Audio !== "undefined" ? new Audio(url) : undefined
    );

    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);
    //const toggle = setPlaying(!playing);

    useEffect(() => {
        playing ? audio.current?.play() : audio.current?.pause();
    }, [playing]);

    useEffect(() => {
        audio.current?.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.current?.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Player = ({ url }: any) => {



    const [playing, toggle] = useAudio(url);

    return (
        <div style={{ float: 'right' }}>
            <button className="btn btn-warning" onClick={url && toggle}>
                {playing ? <i className="fa fa-pause" aria-hidden="true"></i>
                    : <i className="fa fa-play" aria-hidden="true"></i>}</button>
        </div >
    );
};

export default Player;