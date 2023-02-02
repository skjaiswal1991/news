import Footer from "../footer/footer";
import Header from "../header/header";
const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];



const Default = (props: any) => {
    // const googleTranslateElementInit = () => {
    //     new window.google.translate.TranslateElement(
    //         {
    //             pageLanguage: "en",
    //             autoDisplay: false
    //         },
    //         "google_translate_element"
    //     );
    // };
    // useEffect(() => {
    //     var addScript = document.createElement("script");
    //     addScript.setAttribute(
    //         "src",
    //         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    //     );
    //     document.body.appendChild(addScript);
    //     window.googleTranslateElementInit = googleTranslateElementInit;
    // }, []);
    return (
        <>

            <Header sections={sections} title="news14" />


            {props.children}


            <Footer title="Footer"
                description="Something here to give the footer a purpose!" />

        </>
    )
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
}
export default Default;