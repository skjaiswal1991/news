import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from "next/link"
import dateFormat from "dateformat";
function Slider({ sliderdata }: any) {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} showArrows={true} showIndicators={false} showThumbs={false} className="position-relative" >
            {sliderdata && sliderdata.map((n: any, i: any) =>
                <div key={i} className="position-relative overflow-hidden" style={{ height: 500 }} >
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
        </Carousel>
    );
}

export default Slider;