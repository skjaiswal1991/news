import Head from 'next/head'
import axios from 'axios'
import Link from "next/link"
import { useEffect } from 'react'
import Player from '../../audio/audio'
import Commentform from '../form/comment'
import BreakingNews from '../home/common/breakingNews'
import Sidebar from '../sidebar/sidebar'
import dataLaye from '../../../data-laye'
import { useState } from 'react'
import useSound from 'use-sound';

const Newspage = ({ page, category }: any) => {
    console.log(page)
    let indedPage = page && page[0].description.split('\n')
    const [audio, setAudio] = useState<String>('')
    const [play, { stop }] = useSound(page && `http://localhost:3030/uploads/${page[0].postslug}.mp3`);
    console.log(`http://localhost:3030/uploads/${page && page[0].postslug}.mp3`)
    useEffect(() => {

        async function initload() {
            let result = await dataLaye.getAudioGenerate({ slug: page[0].postslug })
            if (result.status == 200)
                setAudio(`http://localhost:3030/uploads/${page && page[0].postslug}.mp3`)
        }

        initload()

        // if (page && page[0].postslug != 'undefined') {
        //     console.log("if", page && page[0].postslug)
        //     setAudio(`http://localhost:3030/uploads/${page && page[0].postslug}.mp3`)
        // } else {
        //     console.log("else", page && page[0].postslug)
        // }

    }, [])

    return (
        <>
            {/* <BreakingNews page={page} /> */}

            <div className="container-fluid">

                {audio}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* <!-- News Detail Start --> */}
                            <div className="position-relative mb-3">
                                <img className="img-fluid w-100" src={page && page[0].image} style={{ objectFit: 'cover' }} />
                                <div className="bg-white border border-top-0 p-4">
                                    <div className="mb-3">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                            href="">{category}</a>
                                        <a className="text-body" href="">Jan 01, 2045</a>
                                        {audio && <Player url={audio} />}
                                        <button onClick={() => play()}>play!</button>
                                        <button onClick={() => stop()}>stop!</button>
                                    </div>
                                    <h1 className="mb-3 text-secondary text-uppercase font-weight-bold">{page && page[0].title}</h1>
                                    {indedPage && indedPage.map((ne: any, i: any) =>
                                        <p style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: page && ne }} />
                                    )}

                                </div>
                                <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                                    <div className="d-flex align-items-center">
                                        <Link target="_blank" href={`${page && page[0].sourceUrl}`}>
                                            <span>Published By:  {page && page[0].publishname}</span>
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="ml-3"><i className="far fa-eye mr-2"></i>1</span>
                                        {/* <span className="ml-3"><i className="far fa-comment mr-2"></i>123</span> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Detail End -->

                                <!-- Comment List Start --> */}
                            {/* <div className="mb-3">
                                <div className="section-title mb-0">
                                    <h4 className="m-0 text-uppercase font-weight-bold">3 Comments</h4>
                                </div>
                                <div className="bg-white border border-top-0 p-4">
                                    <div className="media mb-4">
                                        <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: '45px' }} />
                                        <div className="media-body">
                                            <h6><a className="text-secondary font-weight-bold" href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                            <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                                accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                            <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: '45px' }} />
                                        <div className="media-body">
                                            <h6><a className="text-secondary font-weight-bold" href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                            <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                                accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                            <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                            <div className="media mt-4">
                                                <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1"
                                                    style={{ width: '45px' }} />
                                                <div className="media-body">
                                                    <h6><a className="text-secondary font-weight-bold" href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                                                        labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                                                        eirmod ipsum.</p>
                                                    <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <!-- Comment List End -->

                            <!-- Comment Form Start --> */}
                            {/* <Commentform /> */}
                            {/* <!-- Comment Form End --> */}
                        </div>
                        <Sidebar news={page} />
                    </div>
                </div>
            </div>


        </>

    )
}

export default Newspage;