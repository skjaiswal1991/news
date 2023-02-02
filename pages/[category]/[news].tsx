import Newspage from "../../component/pages/newspage/Newspage";
import dataLayer from './../../data-laye'

interface newspage {
    page: [],
    category: String

}
const News = ({ page, category }: newspage) => {
    return (
        page && <Newspage page={page} category={category} />

    )
}


export default News;

export async function getStaticProps({ params, preview = true, previewData }: any) {
    const object = { postslug: params.news }
    let getData = await dataLayer.getPostBySlug(object)
    let news = await getData.data
    console.log(news, "news");

    if (getData)
        return {
            props: {
                page: news || [],
                category: params.category
            },
            revalidate: 60,
        }


}

export async function getStaticPaths() {
    let path;
    try {

        //let data = ['developing-countries-want-globalization-that-prevents-climate-debt-crisis-pm']
        path = []


    } catch (error) {
        console.log(error)
    }

    return {
        paths: path || [],
        fallback: true,
    }
}