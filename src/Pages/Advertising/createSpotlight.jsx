import React, { useState, useRef } from 'react';
import SideBar from '../../Components/SideBar.jsx';
import NaveBar from '../../Components/NaveBar.jsx';
import BannerTab from './BannerTab';
import Modal from 'react-bootstrap/Modal';
import AdvTabs from './AdvTabs';
import ModalCard from './Modal/spotlight/next.jsx';
import { Container, Row, Col } from 'react-bootstrap';
export const CreateSpotlight = () => {
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    // Trigger the file input when the icon is clicked
    fileInputRef.current.click();
  };

  const handleFileSelected = e => {
    const selectedFile = e.target.files[0];
    // Do something with the selected file (e.g., upload or display it)
  };
  //------------------------- Modal---------------------------------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container fluid className='  h-100'>
        <Row>
          <Col
            xs={2}
            md={2}
            className='text-center p-0'
            style={{ backgroundColor: '#495057', height: '100vh' }}
          >
            <SideBar activetabe='Advertising' />
          </Col>
          <Col md={10} xs={10} style={{ height: '100vh', overflowY: 'auto' }}>
            <Row>
              <NaveBar />
            </Row>
            <Row>
              <BannerTab activeBtn='newSpotlight' />
            </Row>
            <Row className='mt-4'>
              <Row>
                <h4 className='mt-3 text-muted '>Create new Spotlight</h4>
              </Row>
              <Row className='mt-4'>
                <Col xl={4} xs={12}>
                  <div>
                    <label className='text-muted'>Ad title</label>
                    <input
                      placeholder='Immigration Paralegal Services'
                      className='border border-1 rounded-3 p-2 w-100 '
                    />
                  </div>
                </Col>
                <Col xl={4} xs={12}>
                  <div>
                    <label className='text-muted'>Price</label>
                    <input
                      placeholder='$ 93,000'
                      className='border border-1 rounded-3 p-2 w-100 '
                    />
                  </div>
                </Col>
                <Col xl={4} xs={12}>
                  <div>
                    <label for='cars' className='text-muted'>
                      Select listing
                    </label>
                    <select
                      name='cars'
                      id='cars'
                      className='text-muted border border-1 rounded-3 p-2 w-100 '
                    >
                      <option value='Makeup Kit'>Makeup Kit</option>
                      <option value='saab'>Saab</option>
                      <option value='mercedes'>Mercedes</option>
                      <option value='audi'>Audi</option>
                    </select>
                  </div>
                </Col>
              </Row>
            </Row>
            <Row className='mt-4'>
              <Col lg={6} xl={6} xs={12}>
                <h6 className='text-muted '>Video thumbnail</h6>
                <div
                  className='d-flex flex-column justify-content-center align-items-center w-100 p-4'
                  style={{
                    border: '2px dotted rgba(205, 148, 3, 0.5)',
                    height: '300px',
                  }}
                >
                  <Col xs='auto'>
                    {/* <img src='./BannerFilesIcon.svg' alt='files icon' /> */}
                    <img
                      src='./BannerFilesIcon.svg'
                      alt='files icon'
                      onClick={handleIconClick}
                      style={{
                        cursor: 'pointer',
                        marginTop: '50px',
                        width: '150%',
                      }}
                    />
                    <input
                      type='file'
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleFileSelected}
                    />
                  </Col>
                  <Col>
                    <p className='text-muted text-center fs-6 mt-2'>
                      <span style={{ fontSize: '12px' }}>
                        Required dimensions 1080x1920 pixels
                      </span>
                    </p>
                  </Col>
                </div>
              </Col>
              <Col lg={6} xl={6} xs={12}>
                <h6 className='text-muted '>Ad Thumbmail</h6>
                <div
                  className='d-flex flex-column justify-content-center align-items-center w-100 p-4'
                  style={{
                    border: '2px dotted rgba(205, 148, 3, 0.5)',
                    height: '300px',
                  }}
                >
                  <Col xs='auto'>
                    {/* <img src='./BannerFilesIcon.svg' alt='files icon' /> */}
                    <img
                      src='./BannerFilesIcon.svg'
                      alt='files icon'
                      onClick={handleIconClick}
                      style={{
                        cursor: 'pointer',
                        marginTop: '50px',
                        width: '150%',
                      }}
                    />
                    <input
                      type='file'
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleFileSelected}
                    />
                  </Col>
                  <Col>
                    <p className='text-muted text-center fs-6 mt-2'>
                      <span style={{ fontSize: '12px' }}>
                        Required dimensions 150x150 pixels
                      </span>
                    </p>
                  </Col>
                </div>
              </Col>
              <p className='text-end mt-2'>
                <img src='./spotlightbutton link.svg' alt='? icon' />
              </p>
            </Row>
            <Row>
              <Col>
                <label className='text-muted'>Button Link</label>
                <input
                  placeholder='wa.me/+1 389XXXXXXXXXXX  |'
                  className='border border-1 rounded-3 p-2 w-100 '
                />
              </Col>
            </Row>
            <Row className='mt-4 mb-4'>
              <Col lg={8}></Col>
              <Col
                lg={4}
                className='d-flex justify-content-center align-items-center'
              >
                <Col>
                  <button
                    type='button'
                    className='w-100 rounded-3 p-2 border-0'
                    style={{
                      backgroundColor: 'rgba(134, 142, 150, 0.2)',
                      color: '#868E96',
                    }}
                  >
                    Cancel
                  </button>
                </Col>
                <Col>
                  <button
                    type='button'
                    variant="primary" onClick={handleShow}
                    className='ms-2 w-100 rounded-3 p-2 border-0 text-white '
                    style={{ backgroundColor: '#596068' }}
                  >
                    Next
                  </button>
                </Col>
                <div>
                  <Modal
                   show={show} onHide={handleClose}
                    centered
                  >
                    <ModalCard  onHide={handleClose}/>
                  </Modal>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CreateSpotlight;
