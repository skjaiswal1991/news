const BreakingNews = ({ news }: any) => {

    const breakingNews = news && news.slice(0, 4)

    return (

        <div className="container-fluid bg-dark py-3 mb-3">
            <div className="container">
                <div className="row align-items-center bg-dark">
                    <div className="col-12">
                        <div className="d-flex justify-content-between">
                            <div className="bg-primary text-dark text-center font-weight-medium py-2" style={{ width: '170px' }}>Breaking News</div>
                            <div className="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center ml-3"
                                style={{ width: 'calc(100% - 170px)', paddingRight: '120px' }}>
                                {breakingNews && breakingNews.map((n: any, i: any) =>
                                    <div key={i} className="text-truncate">
                                        <a className="text-white text-uppercase font-weight-semi-bold" href="">{n.title}</a>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BreakingNews;