import react from 'react';
import dateFormat from "dateformat";
import Link from 'next/link';
import SectionSlider from '../../slider/section-slider';
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
                <SectionSlider sliderdata={news} />
            </div>
        </div>
    )
}

export default Featurenews;