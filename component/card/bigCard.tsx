import Link from "next/link"
import Image from "next/image";
import dateFormat from "dateformat";
import Imagesection from "../image/image";

const Bigcard = ({ n }: any) => {
    return (
        n &&
        <div className="position-relative mb-3">

            <Imagesection width="365" height="226" alt="" className="w-100" src={n.image} style={{ objectFit: 'cover' }} />
            <div className="bg-white border border-top-0 p-4">
                <div className="mb-2">
                    <Link className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">{n.category[0].categoryTitle}</Link>
                    <a className="text-body" href=""><small>{dateFormat(n.publishDate, "mmmm d, yyyy")}</small></a>
                </div>
                <Link href="/[category]/[news]" as={`/${n.category[0].categorySlug}/${n.postslug}`} className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" style={{
                    overflow: 'hidden', height: '86px', minHeight: '86px', padding: '2px'
                }}>{n.title}</Link>
                <p className="m-0" dangerouslySetInnerHTML={{ __html: n.description.slice(0, 120) + '...' }}></p>
                <small className="ml-3" style={{ position: 'absolute', right: '6px' }}><i className="far fa-eye mr-2"></i>127</small>
            </div>
            {/* <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                <div className="d-flex align-items-center">
                    <img className="rounded-circle mr-2" src="img/user.jpg" width="25" height="25" alt="" />
                    <small>John Doe</small>
                </div>
                <div className="d-flex align-items-center">
                    <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                    <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                </div>
            </div> */}
        </div>
    )
}
export default Bigcard