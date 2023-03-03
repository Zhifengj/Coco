import React, { useState } from 'react';
import './products.css';
import IMAGES from '../Images/images.js';
import Modala from './modal';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { Gallery } from "react-grid-gallery";

const images = [
    {
        src: "../Images/jpg/105_00.jpg",
        width: 540,
        height: 330,
        isSelected: false,
        caption: "test"
    },


];

const images2 = [
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        width: 320,
        height: 212,
        tags: [
            { value: "Ocean", title: "Ocean" },
            { value: "People", title: "People" },
        ],
        alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        width: 320,
        height: 212,
        tags: [
            { value: "Ocean", title: "Ocean" },
            { value: "People", title: "People" },
        ],
        alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        width: 320,
        height: 212,
        tags: [
            { value: "Ocean", title: "Ocean" },
            { value: "People", title: "People" },
        ],
        alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        width: 320,
        height: 212,
        tags: [
            { value: "Ocean", title: "Ocean" },
            { value: "People", title: "People" },
        ],
        alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        width: 320,
        height: 212,
        tags: [
            { value: "Ocean", title: "Ocean" },
            { value: "People", title: "People" },
        ],
        alt: "Boats (Jeshu John - designerspics.com)",
    },

    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        width: 320,
        height: 212,
        tags: [
            { value: "Ocean", title: "Ocean" },
            { value: "People", title: "People" },
        ],
        alt: "Boats (Jeshu John - designerspics.com)",
    },



];

const images3 = [
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },

];

const images4 = [
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },

];

function MyVerticallyCenteredModal(props,imgs) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ASB-77
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imgs}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Products() {
    const [verticalActive, setVerticalActive] = useState('tab1');
    const [modalShow, setModalShow] = React.useState(false);
    const handleVerticalClick = (value: string) => {
        if (value === verticalActive) {
            return;
        }

        setVerticalActive(value);
    };
    const imageClick = () => {
        console.log('click');
    };
    return <div className='product_div'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdn.rawgit.com/tarkhov/postboot/v1.0.3/dist/css/postboot.min.css" />
        <h2> Product Info</h2>
        <div className='tab_div'>
            <>
                <MDBRow>
                    <MDBCol size='2'>
                        <MDBTabs pills className='flex-column text-center'>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                                    THE MOSAIC CYLINDER SERIES | 马赛克贵妃缸系列
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                                    系列2
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                                    系列3
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleVerticalClick('tab4')} active={verticalActive === 'tab4'}>
                                    系列4
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>
                    </MDBCol>
                    <MDBCol size='10'>
                        <MDBTabsContent>
                            <MDBTabsPane show={verticalActive === 'tab1'}>
                                <div class="card flex-row"><img class="card-img-lg-left" src={IMAGES.ASB_77_Tmb} onClick={() => setModalShow(true)}/>
                                    <div class="card-body">
                                        <div id="model">
                                            <h7 class="card-title h5 h4-sm">Model:</h7>
                                            <p class="card-text">ASB-77</p>
                                        </div>
                                        <div id="Size">
                                            <h7 class="card-title h5 h4-sm">Size(mm): </h7>
                                            <p class="card-text">1700x800x790<br></br>1600x780x770<br></br>1600x700x750<br></br>1550x690x750</p>
                                        </div>
                                        <div id="Prod_Cat">
                                            <h7 class="card-title h5 h4-sm">Product Categories:</h7>
                                            <p class="card-text">Empty Bathtub<br></br>Golden Mosaic With Golden Feet</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                
        
                            </MDBTabsPane>
                            <MDBTabsPane show={verticalActive === 'tab2'}>
                            <div class="test">
                                    <div class="card flex-row"><img class="card-img-lg-left" src={require('./pppp.jpg')} />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm">aaaaaaa test</h4>
                                            <p class="card-text">sfddsfsdfsdf</p>
                                        </div>
                                    </div>
                                    <div class="card flex-row"><img class="card-img-lg-left" src={require('./pppp.jpg')} />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm">Left image</h4>
                                            <p class="card-text">Example text</p>
                                        </div>
                                    </div>
                                    <div class="card flex-row"><img class="card-img-lg-left" src={require('./pppp.jpg')} />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm">Left image</h4>
                                            <p class="card-text">Example text</p>
                                        </div>
                                    </div>
                                    <div class="card flex-row"><img class="card-img-lg-left" src={require('./pppp.jpg')} />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm">Left image</h4>
                                            <p class="card-text">Example text</p>
                                        </div>
                                    </div>
                                    <div class="card flex-row"><img class="card-img-lg-left" src={require('./pppp.jpg')} />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-sm">Left image</h4>
                                            <p class="card-text">Example text</p>
                                        </div>
                                    </div>
                                </div>
                            </MDBTabsPane>
                            <MDBTabsPane show={verticalActive === 'tab3'}>
                                content tbd
                            </MDBTabsPane>
                            <MDBTabsPane show={verticalActive === 'tab4'}>
                                content tbd
                            </MDBTabsPane>
                        </MDBTabsContent>
                    </MDBCol>
                </MDBRow>
            </>
        </div>

        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />

        <p>
            <br></br>
            <br></br>
            <br></br>
        </p>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.rawgit.com/tarkhov/postboot/v1.0.3/dist/js/postboot.min.js"></script>
    <script src="path/to/lightbox.js"></script>
    </div>
};



export default Products;