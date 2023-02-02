import Link from "next/link";
const Menu = () => {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
                <a href="index.html" className="navbar-brand d-block d-lg-none">
                    <h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-white font-weight-normal">News</span></h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                        <Link href="/" className="nav-item nav-link active">Home</Link>
                        <Link href="/national" className="nav-item nav-link">National</Link>
                        <Link href="/sport" className="nav-item nav-link">Sports</Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">State</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link href="/madhya-pradesh" className="dropdown-item">Madhya Pradesh</Link>
                                <Link href="/uttar-pradesh" className="dropdown-item">Uttar Pradesh</Link>
                                <Link href="/delhi" className="dropdown-item">Delhi</Link>
                            </div>
                        </div>
                        <Link href="/politics" className="nav-item nav-link">Politics</Link>
                    </div>
                    <div className="input-group ml-auto d-none d-lg-flex" style={{ width: "100%", maxWidth: "300px" }}>
                        <input type="text" className="form-control border-0" placeholder="Keyword" />
                        <div className="input-group-append">
                            <button className="input-group-text bg-primary text-dark border-0 px-3"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu;