import React from 'react';
import { Row, Container, Nav, NavItem } from 'reactstrap';

import { Colxx, Separator } from 'Components/CustomBootstrap';

const Footer = () => (
  <footer className="layout-footer font-small blue pt-3">
    <Container className="text-center text-md-left">
      <Row>
        <Colxx md={2} className="mb-3">
          <a href="/about-us" className="nav-link">
            About Us
          </a>
        </Colxx>
        <Colxx md={2} className="mb-3">
          <a href="/contact-us" className="nav-link">
            Contact Us
          </a>
        </Colxx>
        <Colxx md={3} className="mb-3">
          <Nav className="list-unstyled" style={{ flexDirection: 'column' }}>
            <NavItem>
              <a href="/terms-and-conditions" className="nav-link">
                Terms
              </a>
            </NavItem>
            <NavItem>
              <a href="/privacy-policy" className="nav-link">
                Privacy
              </a>
            </NavItem>
            <NavItem>
              <a href="/site-maps" className="nav-link">
                Site Maps
              </a>
            </NavItem>
          </Nav>
        </Colxx>
        <Colxx md={5} className="mb-3">
          <h4>Follow Us On social media</h4>
          <Row>
            <Colxx md={3}>
              <a href="https://www.facebook.com" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                  <path
                    fill="#4A4A4A"
                    fillRule="evenodd"
                    d="M16.024 30H1.656A1.656 1.656 0 0 1 0 28.344V1.656C0 .74.741 0 1.656 0h26.688C29.26 0 30 .741 30 1.656v26.688C30 29.26 29.259 30 28.344 30H20.7V18.382h3.9l.583-4.527H20.7v-2.89c0-1.312.364-2.205 2.243-2.205l2.398-.001v-4.05c-.415-.055-1.838-.178-3.494-.178-3.456 0-5.823 2.11-5.823 5.985v3.339h-3.91v4.527h3.91V30z"
                  />
                </svg>
              </a>
            </Colxx>
            <Colxx md={3}>
              <a href="https://www.twitter.com" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28">
                  <path
                    fill="#4A4A4A"
                    fillRule="evenodd"
                    d="M30 3.315a11.05 11.05 0 0 1-3.534 1.112c1.271-.874 2.247-2.259 2.706-3.91a11.391 11.391 0 0 1-3.91 1.714C24.141.857 22.54 0 20.77 0c-3.397 0-6.153 3.165-6.153 7.068 0 .554.053 1.092.158 1.61C9.66 8.383 5.125 5.572 2.088 1.29a7.877 7.877 0 0 0-.832 3.558c0 2.45 1.086 4.615 2.738 5.883a5.566 5.566 0 0 1-2.79-.882v.087c0 3.426 2.122 6.284 4.94 6.93a5.283 5.283 0 0 1-1.622.25 5.36 5.36 0 0 1-1.159-.126c.784 2.807 3.055 4.852 5.75 4.906-2.106 1.897-4.762 3.028-7.644 3.028-.497 0-.988-.032-1.469-.097C2.724 26.829 5.96 28 9.435 28c11.322 0 17.512-10.77 17.512-20.11 0-.308-.006-.615-.016-.917A13.635 13.635 0 0 0 30 3.315"
                  />
                </svg>
              </a>
            </Colxx>
            <Colxx md={3}>
              <a href="https://www.instagram.com" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                  <path
                    fill="#4A4A4A"
                    fillRule="evenodd"
                    d="M15 0c4.074 0 4.585.017 6.184.09 1.597.073 2.687.327 3.642.698a7.352 7.352 0 0 1 2.656 1.73 7.353 7.353 0 0 1 1.73 2.656c.371.955.625 2.045.698 3.642.073 1.6.09 2.11.09 6.184s-.017 4.585-.09 6.184c-.073 1.597-.327 2.687-.697 3.642a7.353 7.353 0 0 1-1.73 2.656 7.353 7.353 0 0 1-2.657 1.73c-.955.371-2.045.625-3.642.698-1.6.073-2.11.09-6.184.09s-4.585-.017-6.184-.09c-1.597-.073-2.687-.327-3.642-.697a7.353 7.353 0 0 1-2.656-1.73 7.352 7.352 0 0 1-1.73-2.657C.417 23.87.163 22.78.09 21.184.017 19.584 0 19.074 0 15s.017-4.585.09-6.184c.073-1.597.327-2.687.698-3.642a7.352 7.352 0 0 1 1.73-2.656A7.352 7.352 0 0 1 5.174.788C6.13.417 7.22.163 8.816.09 10.416.017 10.926 0 15 0zm0 2.703c-4.005 0-4.48.015-6.061.087-1.463.067-2.257.311-2.786.517-.7.272-1.2.597-1.724 1.122a4.647 4.647 0 0 0-1.122 1.724c-.206.529-.45 1.323-.517 2.786-.072 1.581-.087 2.056-.087 6.061s.015 4.48.087 6.061c.067 1.463.311 2.257.517 2.786.272.7.597 1.2 1.122 1.724.525.525 1.024.85 1.724 1.122.529.206 1.323.45 2.786.517 1.581.072 2.056.087 6.061.087s4.48-.015 6.061-.087c1.463-.067 2.257-.311 2.786-.517.7-.272 1.2-.597 1.724-1.122a4.647 4.647 0 0 0 1.122-1.724c.206-.529.45-1.323.517-2.786.072-1.581.087-2.056.087-6.061s-.015-4.48-.087-6.061c-.067-1.463-.311-2.257-.517-2.786-.272-.7-.597-1.2-1.122-1.724a4.647 4.647 0 0 0-1.724-1.122c-.529-.206-1.323-.45-2.786-.517-1.581-.072-2.056-.087-6.061-.087zm0 4.594a7.703 7.703 0 1 1 0 15.406 7.703 7.703 0 0 1 0-15.406zM15 20a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm9.807-13.007a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0z"
                  />
                </svg>
              </a>
            </Colxx>
          </Row>
        </Colxx>
      </Row>
      <Separator className="clearfix w-100 pb-3" />
      <div className="footer-copyright pt-3">
        <div>
          <img
            src="assets/icons/logo-short.png"
            srcSet="assets/icons/logo-short@2x.png, assets/icons/logo-short@3x.png"
            alt=""
          />{' '}
          Complete Farmer, Inc. All right reserved.
        </div>
        <div>© {new Date().getFullYear()} Copyright </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
