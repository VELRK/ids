import MarqueeCommon from "@/components/common/MarqueeCommon";
import bg_img from "@/assets/img/home-2/video-bg.jpg"

const VideoBg = () => {
    return (
        <div className="video-bg-section bg-cover" style={{ backgroundImage: `url(${bg_img.src})` }}>
            <MarqueeCommon/>
        </div>
    )
}

export default VideoBg
