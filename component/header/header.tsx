import { useEffect } from 'react'
import Menu from "./menu/menu"
import Link from 'next/link'
const Header = ({ sections }: any) => {


    return (

        <>
            <div className="row align-items-center bg-white py-3 px-lg-5">
                <div className="col-lg-4">
                    <Link href="/" className="navbar-brand p-0 d-none d-lg-block">
                        <h1 className="m-0 display-4 text-uppercase text-secondary">TejAKHABAR
                            {/* <span className="text-primary font-weight-normal">AKHABAR</span> */}
                        </h1>
                    </Link>
                </div>
                <div className="col-lg-8 text-center text-lg-right">

                    <Link href="/"><img className="img-fluid" src="img/ads-728x90.png" alt="" /></Link>
                </div>
            </div>
            <Menu />
        </>
    )
}

export default Header;