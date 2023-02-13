import BreakingNews from "./common/breakingNews";
import Featurenews from "./common/featureNews";
import Latestnews from './common/latestNews';
import Mainnews from "./common/mainNews";

const Homepage = ({ page }: any) => {
    return (
        <>
            {/* <Head>
                <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
                <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></Script>
                <Script src="lib/easing/easing.min.js"></Script>
                <Script src="js/main.js"></Script>
            </Head> */}
            <Mainnews news={page} />
            <BreakingNews news={page} themes={`bg-dark`} />
            <Featurenews news={page} />
            <Latestnews news={page} />
        </>

    )
}

export default Homepage;