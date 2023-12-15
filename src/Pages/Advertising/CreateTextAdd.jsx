import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../../Components/SideBar.jsx";
import NaveBar from "../../Components/NaveBar.jsx";
import BannerTab from "./BannerTab";
import ModalCard from "./Modal/TextAdd/CreateTextAdd.jsx";
import Modal from "react-bootstrap/Modal";
import { baseUrl } from "../../Constants/Constants.js";
import axios from "axios";

const CreateTextAdd = () => {
  //------------------------- Modal---------------------------------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [textData, setTextData] = useState({
    // Add your request data here
    type: "TextAd",
    title: "Special Offer",
    description: "Get 20% off on all products. Limited time offer!",
  });

  const handleNextButtonClick = async () => {
    try {
      // Make the API call with the request payload and headers
      const response = await axios.post(
        `${baseUrl}/api/advertisement/new`,
        textData, // Include the data you want to send in the request body
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // Log the response data
      console.log("Request", response.data);
    } catch (error) {
      // Handle API call errors
      console.error("API Error:", error);
    }
  };

  return (
    <>
      <Container fluid className="  h-100">
        <Row>
          <Col
            xs={2}
            md={2}
            className="text-center p-0"
            style={{ backgroundColor: "#495057", height: "100vh" }}
          >
            <SideBar activetabe="Advertising" />
          </Col>
          <Col md={10} xs={10} style={{ height: "100vh", overflowY: "auto" }}>
            <Row>
              <NaveBar />
            </Row>
            <Row>
              <BannerTab activeBtn="newAdd" />
            </Row>
            <Row className="mt-4">
              <h4 className="mt-3 text-muted ">Create new Text Ad</h4>
            </Row>
            <Row className="mt-4">
              <Col lg={6} xl={6} xs={12}>
                <label className="text-muted">Ad title</label>
                <input
                  placeholder="Immigration Paralegal Services"
                  className="border border-1 rounded-3 p-2 w-100 "
                  onChange={(e) =>
                    setTextData({ ...textData, title: e.target.value })
                  }
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={6} xl={6} xs={12}>
                <label className="text-muted">Description</label>
                <textarea
                  placeholder="Get to know Legally and Cos services and ask your questions, Get to know Legally and Cos services and ask your questions, Get to know Legally and Cos services and ask your questions I"
                  className="border border-1 rounded-3 p-2 w-100 h-100"
                  onChange={(e) =>
                    setTextData({ ...textData, description: e.target.value })
                  }
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={6} xl={6} xs={12}>
                <Row className="mt-5 justify-content-end">
                  <Col lg={3} xl={3} xs={12}>
                    <button className="w-100 p-1 border-0 rounded-2 text-dark">
                      Cancel
                    </button>
                  </Col>
                  <Col lg={3} xl={3} xs={12}>
                    <button
                      variant="primary"
                      onClick={handleShow}
                      className=" w-100 p-1 border-0 rounded-2 text-white"
                      style={{ backgroundColor: "#CD9403" }}
                      onClick={handleNextButtonClick}
                    >
                      Next
                    </button>
                  </Col>
                  <div>
                    <Modal show={show} onHide={handleClose} centered>
                      <ModalCard onHide={handleClose} />
                    </Modal>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CreateTextAdd;
