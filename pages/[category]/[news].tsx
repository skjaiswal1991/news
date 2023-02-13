import { useRouter } from 'next/router';
import Newspage from "../../component/pages/newspage/Newspage";
import dataLayer from './../../data-laye'

interface newspage {
    page: [],
    category: String
    relatedNews: []
}
const News = ({ page, category, relatedNews }: newspage) => {
    const router = useRouter()
    console.log('relatedNews--', page)
    console.log('relatedNews++page', relatedNews)

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        page && <Newspage page={page} category={category} releatednew={relatedNews} />

    )
}


export default News;

export async function getStaticProps({ params, preview = true, previewData }: any) {
    const object = { postslug: params.news }

    let news: any = [];
    let getRelatedNews: any = [];

    let getData = await dataLayer.getPostBySlug(object)
    if (getData.status == 200) {
        news = await getData.data

        const paramData = {
            start: 0,
            end: 10,
            categoryID: news && news[0].categoryID
        }
        let getNews = await dataLayer.getPostByCategoryID(paramData)
        if (getNews.status == 200)
            getRelatedNews = await getNews.data
        console.log(getRelatedNews, "getRelatedNews")
    }



    if (getData)
        return {
            props: {
                page: news || [],
                category: params.category || [],
                relatedNews: getRelatedNews || []
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