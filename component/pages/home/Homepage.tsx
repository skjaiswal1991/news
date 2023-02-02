import Head from 'next/head'
import BreakingNews from "./common/breakingNews";
import Featurenews from "./common/featureNews";
import Latestnews from './common/latestNews';
import Mainnews from "./common/mainNews";
import Newssiderbar from "./common/newsSidebar";

const Homepage = ({ page }: any) => {
    return (
        <>
            <Head>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="js/main.js"></script>
            </Head>
            <Mainnews news={page} />
            <BreakingNews news={page} />
            <Featurenews news={page} />
            <Latestnews news={page} />
        </>

    )
}

export default Homepage;