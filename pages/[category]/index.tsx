import { useRouter } from 'next/router';
import CategoryPage from "../../component/pages/category/category";
import dataLayer from "../../data-laye";

const Categorys = ({ page }: any) => {
    console.log("Categorys page", page)
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        page.length > 0 ? <CategoryPage news={page} /> : <center><h4>News Not Available</h4></center>
    )
}
export default Categorys;

export async function getStaticProps({ params, preview = true, previewData }: any) {
    let news = []
    const paramData = {
        start: 0,
        end: 20,
        categoryslug: params.category
    }

    let getNews = await dataLayer.getPostByCategorySlug(paramData)
    if (getNews.status == 200) {
        news = await getNews.data
    }
    if (news) {
        return {
            props: {
                page: news || [],

            },
            revalidate: 60,
        }
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

