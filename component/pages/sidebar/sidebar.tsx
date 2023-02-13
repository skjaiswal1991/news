import Link from "next/link"
import dateFormat from "dateformat";
import Imagesection from "../../image/image";
const Siderbar = ({ news }: any) => {

    const trandingNews = news.slice(0, 10) || []
    console.log("trandingNews", trandingNews)

    return (

        <div className="col-lg-4">
            {/* <!-- Social Follow Start --> */}
            {/* <div className="mb-3">
                <div className="section-title mb-0">
                    <h4 className="m-0 text-uppercase font-weight-bold">Follow Us</h4>
                </div>
                <div className="bg-white border border-top-0 p-3">
                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style="background: #39569E;">
                        <i className="fab fa-facebook-f text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i>
                        <span className="font-weight-medium">12,345 Fans</span>
                    </a>
                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style="background: #52AAF4;">
                        <i className="fab fa-twitter text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i>
                        <span className="font-weight-medium">12,345 Followers</span>
                    </a>
                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style="background: #0185AE;">
                        <i className="fab fa-linkedin-in text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i>
                        <span className="font-weight-medium">12,345 Connects</span>
                    </a>
                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style="background: #C8359D;">
                        <i className="fab fa-instagram text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i>
                        <span className="font-weight-medium">12,345 Followers</span>
                    </a>
                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style="background: #DC472E;">
                        <i className="fab fa-youtube text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i>
                        <span className="font-weight-medium">12,345 Subscribers</span>
                    </a>
                    <a href="" className="d-block w-100 text-white text-decoration-none" style="background: #055570;">
                        <i className="fab fa-vimeo-v text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i>
                        <span className="font-weight-medium">12,345 Followers</span>
                    </a>
                </div>
            </div> */}
            {/* <!-- Social Follow End -->

                    <!-- Ads Start --> */}
            <div className="mb-3">
                <div className="section-title mb-0">
                    <h4 className="m-0 text-uppercase font-weight-bold">Advertisement</h4>
                </div>
                <div className="bg-white text-center border border-top-0 p-3">
                    <Link href=""><img className="img-fluid" src="img/news-800x500-2.jpg" alt="" /></Link>
                </div>
            </div>
            {/* <!-- Ads End -->

                                                                                                            <!-- Popular News Start --> */}
            <div className="mb-3">
                <div className="section-title mb-0">
                    <h4 className="m-0 text-uppercase font-weight-bold">Tranding News</h4>
                </div>
                {trandingNews && trandingNews.map((n: any, i: any) =>

                    <div key={i} className="bg-white border border-top-0 p-3">
                        <div className="d-flex align-items-center bg-white mb-3" style={{ height: '110px' }}>
                            <Imagesection height="110" width="110" className="" src={n.image || `/no-image.png`} alt="" />
                            <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                <div className="mb-2">
                                    <Link className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">{n && n.category[0].categoryTitle}</Link>
                                    <Link className="text-body" href=""><small>{dateFormat(n.publishDate, "mmm d, yyyy")}</small></Link>
                                </div>
                                <Link className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">{n.title.slice(0, 45) + '...'}</Link>
                            </div>
                        </div>

                    </div>
                )}
            </div>
            {/* <!-- Popular News End -->

                    <!-- Newsletter Start --> */}
            {/* <div className="mb-3">
                    <div className="section-title mb-0">
                        <h4 className="m-0 text-uppercase font-weight-bold">Newsletter</h4>
                    </div>
                    <div className="bg-white text-center border border-top-0 p-3">
                        <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                        <div className="input-group mb-2" style={{ width: '100%' }}>
                            <input type="text" className="form-control form-control-lg" placeholder="Your Email" />
                            <div className="input-group-append">
                                <button className="btn btn-primary font-weight-bold px-3">Sign Up</button>
                            </div>
                        </div>
                        <small>Lorem ipsum dolor sit amet elit</small>
                    </div>
                </div> */}
            {/* <!-- Newsletter End -->

                    <!-- Tags Start --> */}
            <div className="mb-3">
                <div className="section-title mb-0">
                    <h4 className="m-0 text-uppercase font-weight-bold">Tags</h4>
                </div>
                <div className="bg-white border border-top-0 p-3">
                    <div className="d-flex flex-wrap m-n1">
                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Politics</a>
                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Business</a>
                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Corporate</a>
                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Business</a>
                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Health</a>
                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Education</a>
                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Science</a>
                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Business</a>
                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Foods</a>
                        <a href="" className="btn btn-sm btn-outline-secondary m-1">Travel</a>
                    </div>
                </div>
            </div>


        </div>
    )

}
export default Siderbar;