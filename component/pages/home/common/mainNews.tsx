import Link from "next/link"
import dateFormat from "dateformat";
const classprops = {
    activeItem: {
        height: '500px'
    },
    img: {
        objectFit: 'cover'
    }

}
const Mainnews = ({ news }: any) => {

    let fourNews = news && news.slice(0, 4)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7 px-0">
                    <div className="owl-carousel main-carousel position-relative">
                        {fourNews && fourNews.map((n: any, i: any) =>
                            <div key={i} className="position-relative overflow-hidden" style={classprops.activeItem}>
                                <img className="img-fluid h-100" src={n.image} style={{ objectFit: 'cover' }} />
                                <div className="overlay">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                            href="">{n.category[0].categoryTitle}</a>
                                        <a className="text-white" href="">{dateFormat(n.publishDate, "mmmm d, yyyy")}</a>
                                    </div>
                                    <Link href={`/${n.category[0].categorySlug}/${n.postslug}`} className="h2 m-0 text-white text-uppercase font-weight-bold" >
                                        {n.title}
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-lg-5 px-0">
                    <div className="row mx-0">
                        {fourNews && fourNews.map((n: any, i: any) =>
                            <div className="col-md-6 px-0">
                                <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                                    <img className="img-fluid w-100 h-100" src={n.image} style={{ objectFit: 'cover' }} />
                                    <div className="overlay">
                                        <div className="mb-2">
                                            <Link className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="">{n.category[0].categoryTitle}</Link>
                                            <a className="text-white" href=""><small>{dateFormat(n.publishDate, "mmmm d, yyyy")}</small></a>
                                        </div>
                                        <Link href={`/${n.category[0].categorySlug}/${n.postslug}`} className="h6 m-0 text-white text-uppercase font-weight-semi-bold">{n.title}</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Mainnews;