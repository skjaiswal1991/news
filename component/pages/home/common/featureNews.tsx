import react from 'react';
import dateFormat from "dateformat";
import Link from 'next/link';
const classprops = {
    activeItem: {
        height: '500px'
    },
    img: {
        objectFit: 'cover'
    }

}
const Featurenews = ({ news }: any) => {

    return (
        <div className="container-fluid pt-5 mb-3">
            <div className="container">
                <div className="section-title">
                    <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
                </div>
                <div className="owl-carousel news-carousel carousel-item-4 position-relative">
                    {news && news.map((n: any, i: any) =>
                        <div key={i} className="position-relative overflow-hidden" style={{ height: '300px' }}>
                            <img className="img-fluid h-100" src={n.image} style={{ objectFit: 'cover' }} />
                            <div className="overlay">
                                <div className="mb-2">
                                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                        href="">{n.category[0].categoryTitle}</a>
                                    <a className="text-white" href=""><small>{dateFormat(n.publishDate, "mmmm d, yyyy")}</small></a>
                                </div>
                                <Link href={`/${n.category[0].categorySlug}/${n.postslug}`} className="h6 m-0 text-white text-uppercase font-weight-semi-bold" >{n.title}</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Featurenews;