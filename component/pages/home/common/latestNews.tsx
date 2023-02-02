import Newssiderbar from "./newsSidebar"
import Link from "next/link"
import Image from "next/image";
import dateFormat from "dateformat";
import Siderbar from "../../sidebar/sidebar";
const Latestnews = ({ news }: any) => {

    const fourNews = news && news.slice(0, 4)
    const twoNews = news && news.slice(5, 7)
    const oneNews = news && news.slice(7, 8)
    return (
        <div className="container-fluid mt-5 pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h4 className="m-0 text-uppercase font-weight-bold">Latest News</h4>
                                    <a className="text-secondary font-weight-medium text-decoration-none" href="">View All</a>
                                </div>
                            </div>
                            {fourNews && fourNews.map((n: any, i: any) =>

                                <div className="col-lg-6">
                                    <div className="position-relative mb-3">
                                        <Image width="365" height="226" alt="" className="w-100" src={n.image} style={{ objectFit: 'cover' }} />
                                        <div className="bg-white border border-top-0 p-4">
                                            <div className="mb-2">
                                                <Link className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                    href="">{n.category[0].categoryTitle}</Link>
                                                <a className="text-body" href=""><small>{dateFormat(n.publishDate, "mmmm d, yyyy")}</small></a>
                                            </div>
                                            <Link href={`/${n.category[0].categorySlug}/${n.postslug}`} className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" style={{
                                                overflow: 'hidden', height: '86px', minHeight: '86px', padding: '2px'
                                            }}>{n.title}</Link>
                                            <p className="m-0" dangerouslySetInnerHTML={{ __html: n.description.slice(0, 80) + '...' }}></p>
                                        </div>
                                        <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                                            <div className="d-flex align-items-center">
                                                <img className="rounded-circle mr-2" src="img/user.jpg" width="25" height="25" alt="" />
                                                <small>John Doe</small>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                                <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}


                            <div className="col-lg-6">
                                {twoNews && twoNews.map((n: any, i: any) =>
                                    <div className="d-flex align-items-center bg-white mb-3" style={{ height: '110px' }}>
                                        <Image height="110" width="110" src={n.image} alt="" />
                                        <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                            <div className="mb-2">
                                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                <a className="text-body" href=""><small>{dateFormat(n.publishDate, "mmmm d, yyyy")}</small></a>
                                            </div>
                                            <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                        </div>
                                    </div>
                                )}


                            </div>
                            <div className="col-lg-6">
                                {twoNews && twoNews.map((n: any, i: any) =>
                                    <div className="d-flex align-items-center bg-white mb-3" style={{ height: '110px' }}>
                                        <Image height="110" width="110" src={n.image} alt="" />
                                        <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                            <div className="mb-2">
                                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                <a className="text-body" href=""><small>{dateFormat(n.publishDate, "mmmm d, yyyy")}</small></a>
                                            </div>
                                            <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="col-lg-12">
                                <div className="row news-lg mx-0 mb-3">
                                    <div className="col-md-6 h-100 px-0">
                                        <img className="img-fluid h-100" src={oneNews && oneNews[0].image} style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                                        <div className="mt-auto p-4">
                                            <div className="mb-2">
                                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                    href="">Business</a>
                                                <a className="text-body" href=""><small>{dateFormat(oneNews && oneNews[0].publishDate, "mmmm d, yyyy")}</small></a>
                                            </div>
                                            <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">{oneNews && oneNews[0].title}</a>
                                            <p className="m-0" dangerouslySetInnerHTML={{ __html: oneNews && oneNews[0].description.slice(0, 205) + '...' }}></p>
                                        </div>
                                        <div className="d-flex justify-content-between bg-white border-top mt-auto p-4">
                                            {/* <div className="d-flex align-items-center">
                                                <img className="rounded-circle mr-2" src="img/user.jpg" width="25" height="25" alt="" />
                                                <small>John Doe</small>
                                            </div> */}
                                            <div className="d-flex align-items-center">
                                                <small className="ml-3"><i className="far fa-eye mr-2"></i>232</small>
                                                {/* <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                {twoNews && twoNews.map((n: any, i: any) =>
                                    <div className="d-flex align-items-center bg-white mb-3" style={{ height: '110px' }}>
                                        <Image height="110" width="110" src={n.image} alt="" />
                                        <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                            <div className="mb-2">
                                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                <a className="text-body" href=""><small>{dateFormat(n.publishDate, "mmmm d, yyyy")}</small></a>
                                            </div>
                                            <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="col-lg-6">
                                {twoNews && twoNews.map((n: any, i: any) =>
                                    <div className="d-flex align-items-center bg-white mb-3" style={{ height: '110px' }}>
                                        <Image height="110" width="110" src={n.image} alt="" />
                                        <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                            <div className="mb-2">
                                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                <a className="text-body" href=""><small>{dateFormat(n.publishDate, "mmmm d, yyyy")}</small></a>
                                            </div>
                                            <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                        </div>
                                    </div>
                                )}

                            </div>

                        </div>
                    </div>
                    <Siderbar news={news} />
                </div>
            </div>
        </div>
    )
}
export default Latestnews;