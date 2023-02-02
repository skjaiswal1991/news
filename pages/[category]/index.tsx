import CategoryPage from "../../component/pages/category/category";
import dataLayer from "../../data-laye";

const Categorys = ({ page }: any) => {
    return (
        <CategoryPage news={page} />
    )
}
export default Categorys;

export async function getStaticProps({ params, preview = true, previewData }: any) {

    let getData = await dataLayer.getPostData()
    let news = await getData.data
    if (getData)
        return {
            props: {
                page: news || [],

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

