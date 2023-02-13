import Link from "next/link"
import dateFormat from "dateformat";
import Slider from "../../slider/slider";
import Imagesection from "../../../image/image";
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
                    <Slider sliderdata={fourNews} />
                </div>
                <div className="col-lg-5 px-0">
                    <div className="row mx-0">
                        {fourNews && fourNews.map((n: any, i: any) =>
                            <div key={i} className="col-md-6 px-0">
                                <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                                    <Imagesection height={'250'} width={'300'} className="img-fluid w-100 h-100" src={n.image} style={{ objectFit: 'cover' }} />
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