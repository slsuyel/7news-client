import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, FormControl } from "react-bootstrap";

function Header() {
  return (

    <Container style={{ backgroundColor: "#EEEEEE" }}>
      <Navbar expand="lg" className="py-2">
        <Navbar.Brand as={Link} className="mb-2  pt-0" to="/">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/seven-news-logo-png-transparent.png"
            alt=""
            width={'185px'}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className=" justify-content-between ">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              প্রচ্ছদ
            </Nav.Link>
            <Nav.Link as={Link} to="categories/National">
              জাতীয়
            </Nav.Link>
            <Nav.Link as={Link} to="categories/International">
              আন্তর্জাতিক
            </Nav.Link>
            <Nav.Link as={Link} to="categories/sara-desh">
              সারাদেশ
            </Nav.Link>
            <NavDropdown title="বিভাগীয়" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="categories/Dhaka">
                ঢাকা
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/Khulna">
                খুলনা
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/Rangpur">
                রংপুর
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/Chittagong">
                চট্টগ্রাম
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/sylhet">
                সিলেট
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/Barisal">
                বরিশাল
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/Rajshahi">
                রাজশাহী
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/panchagarh-news">
                পঞ্চগড়ের খবর
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="অন্যান্য" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="categories/Sports">
                খেলাধূলা
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/Entertainment">
                বিনোদন
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/Education">
                শিক্ষা
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/health">
                স্বাস্থ্য
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/jobs">
                চাকুরী
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/lifestyle">
                লাইফ স্টাইল
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/video-gallery">
                ভিডিও গ্যালারি
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/Feature">
                ফিচার
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/Tech">
                তথ্যপ্রযুক্তি
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/agriculture">
                ভ্রমণকৃষি
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categories/other">
                সাম্প্রতিক
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="categories/politics">
              রাজনীতি
            </Nav.Link>
          </Nav>

          <Form className="align-items-center d-flex">
            <FormControl
              type="text"
              placeholder="খোঁজ করুন"
              className="mr-sm-2"
            />
            <Button className=" ms-2 w-50" variant="outline-success">
              খোঁজ করুন
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    </Container>
  );
}
export default Header;
