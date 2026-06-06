"use client"
const TeamForm = () => {
    return (

        <form onSubmit={(e) => e.preventDefault()} id="contact-form" className="contact-form-box">
            <div className="row g-4 align-items-center">
                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                    <div className="form-clt">
                        <input type="text" placeholder="Full name *" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                    <div className="form-clt">
                        <input type="email" placeholder="Email address *" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                    <div className="form-clt">
                        <input type="tel" placeholder="Phone number *" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                    <div className="form-clt">
                        <div className="form">
                            <select className="single-select w-100">
                                <option>Chose a option</option>
                                <option>Digital Marketing</option>
                                <option>Software & IT Service</option>
                                <option>Finance & Investment</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                    <div className="form-clt">
                        <textarea name="message" placeholder="Type your message"></textarea>
                    </div>
                </div>
                <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                    <button type="submit" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                        Send now
                    </button>
                </div>
            </div>
        </form>
    )
}

export default TeamForm
