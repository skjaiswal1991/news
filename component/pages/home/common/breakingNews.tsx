import Marquee from "react-fast-marquee";
import Link from 'next/link'
const BreakingNews = ({ news, themes }: any) => {
    console.log("breaking News", news);
    return (

        <div className={`container-fluid ${themes} py-3 mb-3`}>
            <div className="container">
                <div className={`row align-items-center ${themes}`}>
                    <div className="col-12">
                        <div className="d-flex justify-content-between">
                            <div className="bg-primary text-dark text-center font-weight-medium py-2" style={{ width: '170px' }}>Breaking News</div>
                            <Marquee pauseOnHover={true} gradient={false} play={true} direction="left" speed={30} className="d-inline-flex align-items-center ml-3" style={{ width: '100%', background: '#1e2025', color: 'white' }} >
                                {news && news.map((n: any, i: any) =>
                                    <div key={i}>
                                        <Link className="text-white text-uppercase font-weight-semi-bold p-2" style={{ background: '#1e2025' }} href={n.category[0] ? `/${n.category[0].categorySlug}/${n.postslug}` : ''}>{i + 1}: {`${n.title}    `}</Link >
                                    </div>
                                )}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default BreakingNews;