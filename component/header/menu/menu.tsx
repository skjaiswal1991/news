import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'
import menu from './../../../config/menu.json'
import { array } from 'prop-types';

export const Chield = ({ data }: any) => {

    return (
        <NavDropdown title="State" id="navbarScrollingDropdown">
            {data.map((c: any, i: any) =>
                <NavDropdown.Item key={i} as={Link} href={c.path}>
                    {c.title}
                </NavDropdown.Item>

            )}
        </NavDropdown>
    )

}
const Menu = () => {

    console.log(menu.menudata)


    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {menu.menudata.map((m: any, i: any) => {


                            if (m.chield) {

                                return <Chield key={i} data={m.submenu} />

                            } else {

                                return <Nav.Link key={i} as={Link} href={m.path} >{m.title}</Nav.Link>
                            }


                        }
                        )}
                    </Nav>
                    {/* <Form className="d-flex justify-content-end">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div className="container-fluid p-0">
        //     <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
        //         <a href="index.html" className="navbar-brand d-block d-lg-none">
        //             <h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-white font-weight-normal">News</span></h1>
        //         </a>
        //         <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
        //             <div className="navbar-nav mr-auto py-0">
        //                 <Link href="/" className="nav-item nav-link active">Home</Link>
        //                 <Link href="/national" className="nav-item nav-link">National</Link>
        //                 <Link href="/sport" className="nav-item nav-link">Sports</Link>
        //                 <div className="nav-item dropdown">
        //                     <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">State</a>
        //                     <div className="dropdown-menu rounded-0 m-0">
        //                         <Link href="/madhya-pradesh" className="dropdown-item">Madhya Pradesh</Link>
        //                         <Link href="/uttar-pradesh" className="dropdown-item">Uttar Pradesh</Link>
        //                         <Link href="/delhi" className="dropdown-item">Delhi</Link>
        //                     </div>
        //                 </div>
        //                 <Link href="/politics" className="nav-item nav-link">Politics</Link>
        //             </div>
        //             <div className="input-group ml-auto d-none d-lg-flex" style={{ width: "100%", maxWidth: "300px" }}>
        //                 <input type="text" className="form-control border-0" placeholder="Keyword" />
        //                 <div className="input-group-append">
        //                     <button className="input-group-text bg-primary text-dark border-0 px-3"><i className="fa fa-search"></i></button>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
    )
}

export default Menu;