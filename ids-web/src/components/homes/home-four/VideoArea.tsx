"use client"
import VideoPopup from '@/modals/VideoPopup'
import bg_img from "@/assets/img/home-4/bg.jpg"
import { useState } from 'react'

const VideoArea = () => {

    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className="video-play-section fix bg-cover" style={{ backgroundImage: `url(${bg_img.src})` }}>
                <div className="container">
                    <div className="video-play-box">
                        <h3>
                            Watch the magic happen behind scenes.
                        </h3>
                        <div className="play-item">
                            <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-btn video-popup">
                                <i className="fa-solid fa-play"></i>
                            </a>
                            <h4>
                                Support companies that aim higher and move.
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <VideoPopup
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoId="Cn4G2lZ_g2I"
            />
        </>
    )
}

export default VideoArea
