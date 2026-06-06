
const Progressbar = () => {
    return (
        <div className="progress-wrap">
            <div className="pro-items">
                <div className="pro-head">
                    <h6 className="title">
                        System Design
                    </h6>
                    <span className="point">
                        69%
                    </span>
                </div>
                <div className="progress">
                    <div className="progress-value"></div>
                </div>
            </div>
            <div className="pro-items">
                <div className="pro-head">
                    <h6 className="title">
                        Technological Skills
                    </h6>
                    <span className="point">
                        80%
                    </span>
                </div>
                <div className="progress">
                    <div className="progress-value style-two"></div>
                </div>
            </div>
            <div className="pro-items">
                <div className="pro-head">
                    <h6 className="title">
                        Safety Skills
                    </h6>
                    <span className="point">
                        98%
                    </span>
                </div>
                <div className="progress">
                    <div className="progress-value style-three"></div>
                </div>
            </div>
        </div>
    )
}

export default Progressbar
