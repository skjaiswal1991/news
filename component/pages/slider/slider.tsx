import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from "next/link"
import dateFormat from "dateformat";
import Imagesection from "../../image/image";
function Slider({ sliderdata }: any) {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} showArrows={true} showIndicators={false} showThumbs={false} className="position-relative" >
            {sliderdata && sliderdata.map((n: any, i: any) =>
                <div key={i} className="position-relative overflow-hidden" style={{ height: 500 }} >
                    <Imagesection width={800} height={500} className="img-fluid h-100" src={n.image} style={{ objectFit: 'cover' }} />
                    <div className="overlay">
                        <div className="mb-2">
                            <Link href={`/${n.category[0].categorySlug}/${n.postslug}`}
                                className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                            >{n.category[0].categoryTitle}
                            </Link>
                            <Link className="text-white" href="">{dateFormat(n.publishDate, "mmmm d, yyyy")}</Link>
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