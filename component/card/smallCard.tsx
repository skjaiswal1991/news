import Link from "next/link"
import Image from "next/image";
import dateFormat from "dateformat";
import Imagesection from "../image/image";
const Smallcard = ({ news }: any) => {
    return (
        news &&
        <div className="d-flex align-items-center bg-white mb-3" style={{ height: '110px' }}>
            <Imagesection height="110" width="110" src={news.image} alt="" />
            <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                    <a className="text-body" href=""><small>{dateFormat(news.publishDate, "mmmm d, yyyy")}</small></a>
                </div>
                <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">{news.title}</a>
            </div>
        </div>
    )
}
export default Smallcard