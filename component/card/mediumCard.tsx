import Link from "next/link"
import Image from "next/image";
import dateFormat from "dateformat";
import Imagesection from "../image/image";
const Mediumcard = ({ news }: any) => {
    return (
        news &&
        <div className="row news-lg mx-0 mb-3">
            <div className="col-md-6 h-100 px-0">
                <Imagesection width={372} height={350} className="img-fluid h-100" src={news && news[0].image} style={{ objectFit: 'cover' }} />
            </div>
            <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                <div className="mt-auto p-4">
                    <div className="mb-2">
                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                            href="">Business</a>
                        <a className="text-body" href=""><small>{dateFormat(news && news[0].publishDate, "mmmm d, yyyy")}</small></a>
                    </div>
                    <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">{news && news[0].title}</a>
                    <p className="m-0" dangerouslySetInnerHTML={{ __html: news && news[0].description.slice(0, 300) + '...' }}></p>
                    <small className="ml-3" style={{ position: 'absolute', right: '6px' }}><i className="far fa-eye mr-2"></i>127</small>
                </div>
                {/* <div className="d-flex justify-content-between bg-white border-top mt-auto p-4">
                    <div className="d-flex align-items-center">
                                                <img className="rounded-circle mr-2" src="img/user.jpg" width="25" height="25" alt="" />
                                                <small>John Doe</small>
                                            </div>
                    <div className="d-flex align-items-center">
                        <small className="ml-3"><i className="far fa-eye mr-2"></i>232</small>
                        <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default Mediumcard