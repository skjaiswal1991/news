import Siderbar from "../../sidebar/sidebar";
import Bigcard from "../../../card/bigCard";
import Smallcard from "../../../card/smallCard";
import Mediumcard from "../../../card/mediumCard";
const Latestnews = ({ news }: any) => {

    const fourNews = news && news.slice(0, 4)
    const twoNews = news && news.slice(5, 7)
    const oneNews = news && news.slice(7, 8)
    return (
        <div className="container-fluid mt-5 pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h4 className="m-0 text-uppercase font-weight-bold">Latest News</h4>
                                    <a className="text-secondary font-weight-medium text-decoration-none" href="">View All</a>
                                </div>
                            </div>
                            {fourNews && fourNews.map((n: any, i: any) =>

                                <div key={i} className="col-lg-6">
                                    <Bigcard n={n} />
                                </div>
                            )}
                            <div className="col-lg-6">
                                {twoNews && twoNews.map((n: any, i: any) =>
                                    <Smallcard key={i} news={n} />
                                )}
                            </div>
                            <div className="col-lg-6">
                                {twoNews && twoNews.map((n: any, i: any) =>
                                    <Smallcard key={i} news={n} />
                                )}
                            </div>

                            <div className="col-lg-12">
                                <Mediumcard news={oneNews} />
                            </div>
                            <div className="col-lg-6">
                                {twoNews && twoNews.map((n: any, i: any) =>
                                    <Smallcard key={i} news={n} />
                                )}
                            </div>
                            <div className="col-lg-6">
                                {twoNews && twoNews.map((n: any, i: any) =>
                                    <Smallcard key={i} news={n} />
                                )}
                            </div>
                        </div>
                    </div>
                    <Siderbar news={news} />
                </div>
            </div>
        </div>
    )
}
export default Latestnews;