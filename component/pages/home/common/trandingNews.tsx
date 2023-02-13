import Marquee from "react-fast-marquee";
import Link from 'next/link'
const TrandingNews = ({ news, themes }: any) => {
    console.log("breaking News", news);
    return (

        <div className="container-fluid mt-5 mb-3 pt-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="d-flex justify-content-between">
                            <div className="section-title border-right-0 mb-0" style={{ width: '180px' }}>
                                <h4 className="m-0 text-uppercase font-weight-bold">Tranding</h4>
                            </div>
                            <Marquee pauseOnHover={true} gradient={false} play={true} direction="left" speed={30} className="d-inline-flex align-items-center ml-3" style={{ width: '100%', background: '#1e2025', color: 'white' }} >
                                {news && news.map((n: any, i: any) =>
                                    <div key={i}>
                                        <Link className="text-white text-uppercase font-weight-semi-bold p-2" style={{ background: '#1e2025' }} href={n.category[0] ? `/${n.category[0].categorySlug}/${n.postslug}` : ''}>{i + 1}: {`${n.title}    `}</Link >
                                    </div>
                                )}
                            </Marquee>
                            {/* <div className="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center bg-white border border-left-0 owl-loaded owl-drag" style="width: calc(100% - 180px); padding-right: 100px;">
                            
                            
                        <div className="owl-stage-outer"><div className="owl-stage" style="transform: translate3d(-2529px, 0px, 0px); transition: all 2s ease 0s; width: 5058px;"><div className="owl-item cloned" style="width: 843px;"><div className="text-truncate"><a className="text-secondary text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div></div><div className="owl-item cloned" style="width: 843px;"><div className="text-truncate"><a className="text-secondary text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div></div><div className="owl-item" style="width: 843px;"><div className="text-truncate"><a className="text-secondary text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div></div><div className="owl-item active" style="width: 843px;"><div className="text-truncate"><a className="text-secondary text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div></div><div className="owl-item cloned" style="width: 843px;"><div className="text-truncate"><a className="text-secondary text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div></div><div className="owl-item cloned" style="width: 843px;"><div className="text-truncate"><a className="text-secondary text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div></div></div></div><div className="owl-nav"><div className="owl-prev"><i className="fa fa-angle-left"></i></div><div className="owl-next"><i className="fa fa-angle-right"></i></div></div><div className="owl-dots disabled"></div></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className={`container-fluid ${themes} py-3 mb-3`}>
        //     <div className="container">
        //         <div className={`row align-items-center ${themes}`}>
        //             <div className="col-12">
        //                 <div className="d-flex justify-content-between">
        //                     <div className="bg-primary text-dark text-center font-weight-medium py-2" style={{ width: '170px' }}>Breaking News</div>
        //                     <Marquee pauseOnHover={true} gradient={false} play={true} direction="left" speed={30} className="d-inline-flex align-items-center ml-3" style={{ width: '100%', background: '#1e2025', color: 'white' }} >
        //                         {news && news.map((n: any, i: any) =>
        //                             <div key={i}>
        //                                 <Link className="text-white text-uppercase font-weight-semi-bold p-2" style={{ background: '#1e2025' }} href={n.category[0] ? `/${n.category[0].categorySlug}/${n.postslug}` : ''}>{i + 1}: {`${n.title}    `}</Link >
        //                             </div>
        //                         )}
        //                     </Marquee>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div >
    )
}
export default TrandingNews;