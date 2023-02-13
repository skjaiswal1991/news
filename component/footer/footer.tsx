import { useEffect, useState } from 'react'
import Link from 'next/link'
import Loaderimage from './loader.svg'
import dataLayer from '../../data-laye'
const Footer = ({ title }: any) => {

    const [category, setCategory] = useState([])

    const getCategory = async () => {
        let cat = await dataLayer.getCategory();
        if (cat.status == 200) {
            let category = await cat.data;
            setCategory(category)
        }
    }
    useEffect(() => {
        getCategory()
    }, [])
    return (
        <>
            <div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
                {/* <Loaderimage /> */}
                <div className="row py-4">
                    <div className="col-lg-4 col-md-6 mb-5">
                        {/*<h5 className="mb-4 text-white text-uppercase font-weight-bold">Get In Touch</h5>
                        <p className="font-weight-medium"><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                        <p className="font-weight-medium"><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p className="font-weight-medium"><i className="fa fa-envelope mr-2"></i>info@example.com</p> */}
                        <h6 className="mt-4 mb-3 text-white text-uppercase font-weight-bold">Follow Us</h6>
                        <div className="d-flex justify-content-start">
                            <Link className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-instagram"></i></Link>
                            <Link className="btn btn-lg btn-secondary btn-lg-square" href="#"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5">
                        <h5 className="mb-4 text-white text-uppercase font-weight-bold">Popular News</h5>
                        <div className="mb-3">
                            <div className="mb-2">
                                <Link className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</Link>
                                <Link className="text-body" href=""><small>Jan 01, 2045</small></Link>
                            </div>
                            <Link className="small text-body text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</Link>
                        </div>
                        <div className="mb-3">
                            <div className="mb-2">
                                <Link className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</Link>
                                <Link className="text-body" href=""><small>Jan 01, 2045</small></Link>
                            </div>
                            <Link className="small text-body text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</Link>
                        </div>
                        <div className="">
                            <div className="mb-2">
                                <Link className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</Link>
                                <Link className="text-body" href=""><small>Jan 01, 2045</small></Link>
                            </div>
                            <Link className="small text-body text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5">
                        <h5 className="mb-4 text-white text-uppercase font-weight-bold">Categories</h5>
                        <div className="m-n1">
                            {category && category.map((cat: any, i: any) =>
                                <Link key={i} href={cat.categorySlug} className="btn btn-sm btn-secondary m-1">{cat.categoryTitle}</Link>
                            )}
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="mb-4 text-white text-uppercase font-weight-bold">Flickr Photos</h5>
                        <div className="row">
                            <div className="col-4 mb-3">
                                <Link href=""><img className="w-100" src="img/news-110x110-1.jpg" alt="" /></Link>
                            </div>
                            <div className="col-4 mb-3">
                                <Link href=""><img className="w-100" src="img/news-110x110-2.jpg" alt="" /></Link>
                            </div>
                            <div className="col-4 mb-3">
                                <Link href=""><img className="w-100" src="img/news-110x110-3.jpg" alt="" /></Link>
                            </div>
                            <div className="col-4 mb-3">
                                <Link href=""><img className="w-100" src="img/news-110x110-4.jpg" alt="" /></Link>
                            </div>
                            <div className="col-4 mb-3">
                                <Link href=""><img className="w-100" src="img/news-110x110-5.jpg" alt="" /></Link>
                            </div>
                            <div className="col-4 mb-3">
                                <Link href=""><img className="w-100" src="img/news-110x110-1.jpg" alt="" /></Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="container-fluid py-4 px-sm-3 px-md-5" style={{ background: '#111111' }}>
                <p className="m-0 text-center">&copy; <Link href="#">news14.com</Link>. All Rights Reserved.


                    Design by <Link href="/">news14.com</Link></p>
            </div>
        </>
    )
}
export default Footer;