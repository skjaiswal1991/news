
import Link from "next/link"
import dateFormat from "dateformat";
// import Carousel from "react-elastic-carousel";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Imagesection from "../../image/image";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const SectionSlider = ({ sliderdata }: any) => {

    const ampBeaking = [{
        width: 1, itemsToShow: 1
    }]
    const nextData = () => {
        return true;
    }
    const prevData = () => {
        return true;
    }
    const sliderlinght = sliderdata && sliderdata.length;

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
        const { carouselState: { currentSlide } } = rest;
        return (

            <div className="owl-nav">
                <div className={currentSlide === 0 ? 'owl-nav-disable' : 'owl-prev'} onClick={() => previous()}>
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <div className={sliderlinght - 4 === currentSlide ? 'owl-nav-disable' : 'owl-next'} onClick={() => next()}>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
            // <div className="carousel-button-group" style={{ position: 'absolute' }}> // remember to give it position:absolute
            //     <div className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} >pre</div>
            //     <div onClick={() => next()} >next</div>
            //     <div onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </div>
            // </div>
        );
    };
    return (

        <Carousel
            arrows={false}
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 0"
            transitionDuration={100}
            // containerclassName="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // dotListclassName="custom-dot-list-style"
            // itemclassName="carousel-item-padding-0-px"
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
        >
            {sliderdata && sliderdata.map((n: any, i: any) =>
                <div key={i} className="position-relative overflow-hidden" style={{ height: '300px' }}>
                    <Imagesection width={375} height={700} className="img-fluid h-100" src={n.image} />

                    <div className="overlay">
                        <div className="mb-2">
                            <Link className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="">{n.category[0].categoryTitle}</Link>
                            <Link className="text-white" href=""><small>{dateFormat(n.publishDate, "mmmm d, yyyy")}</small></Link>
                        </div>
                        <Link href={`/${n.category[0].categorySlug}/${n.postslug}`} className="h6 m-0 text-white text-uppercase font-weight-semi-bold" >{n.title}</Link>
                    </div>
                </div>

            )}
        </Carousel >
    );
}

export default SectionSlider;