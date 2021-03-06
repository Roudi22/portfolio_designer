import React, { Component } from 'react';

class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    id: 1,
                    image: './images/testimonial/remon2.jpg',
                    alt: 'images',
                },
                {
                    id: 2,
                    image: './images/testimonial/natili2.jpg',
                    alt: 'images',
                },
                {
                    id: 3,
                    image: './images/testimonial/fadi2.jpg',
                    alt: 'images',
                }
            ],
            testimonial: [
                {
                    id: 1,
                    text: '“Excellent design, great communication, fast turnaround of revisions. I had a clear vision of what I wanted. Ranaroy did not just deliver it he a improved upon it substantially. Recommended!”',
                    name: 'Davin Heily',
                    office: 'at CEO Brisben'
                },
                {
                    id: 2,
                    text: '“Excellent design, great communication, fast turnaround of revisions. I had a clear vision of what I wanted. Ranaroy did not just deliver it he a improved upon it substantially. Recommended!”',
                    name: 'Davin Heily',
                    office: 'at CEO Brisben'
                },
                {
                    id: 3,
                    text: '“Excellent design, great communication, fast turnaround of revisions. I had a clear vision of what I wanted. Ranaroy did not just deliver it he a improved upon it substantially. Recommended!”',
                    name: 'Davin Heily',
                    office: 'at CEO Brisben'
                }
            ]
        }            
    }
    
    render() {
        return (
            <div id="c_clients" className="tf-modalbox-wrapper">
                <div className="tf-modal-content">
                    <section className="testimonial t2 s2 bg-s1 position-relative" id="testimonial">
                        <div className="background-right bg-cl2">
                            <div className="text-testimonial color-d17">Testimonial</div>
                        </div>
                        <div className="background-transparent bg-cl4"></div>
                        <div className="container d-lg-flex">                         
                            <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                <div className="flat-spacer" data-desktop={4} data-mobile={0} data-smobile={0} />
                                <div className="wrap-box bg-white position-relative">
                                    <div className="featured-post mg-b27"><img style={{boxShadow: "5px 10px 18px #888888"}} src="images/testimonial/justin2.jpg" alt="images" /></div>
                                    <div className="images-list d-flex justify-content-between">
                                        {
                                            this.state.images.map(data =>(
                                                <img style={{boxShadow: "5px 10px 18px #888888"}} src={data.image} alt={data.alt} key={data.id}/>
                                            ))
                                        }
                                        
                                    </div>
                                    <div className="quote"><img src="images/testimonial/09.png" alt="images" /></div>
                                </div>
                            </div>
                            <div className="col-right animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <div className="flat-spacer" data-desktop={0} data-mobile={100} data-smobile={100} />
                                <div className="flat-title t1">
                                    <h4 className="sub-title mg-b13">Testimonial</h4>
                                    <h2 className="title-section color-d12">Client Brief</h2>
                                </div>
                                <div className="slider-drop-apps custom-dot dot-s1 none-nav-default mg-dots-s3">
                                    <div className="flat-carousel-box data-effect clearfix" data-gap={0} data-column={1} data-column2={1} data-column3={1} data-column4={1} data-column5={1} data-dots="true" data-auto="false" data-nav="false" data-loop="true">
                                        <div className="owl-carousel">
                                            {
                                                this.state.testimonial.map(data => (
                                                    <div className="client-info" key={data.id}>
                                                        <p className="color-d16">
                                                            {data.text}
                                                        </p>
                                                        <div className="client-detail">
                                                            <span className="color-d6 f-w500">{data.name}</span> {data.office}
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>               
                    </section>
                </div>
            </div>
        );
    }
}

export default Testimonial;
