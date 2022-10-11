import aboutImg from '../images/about-image.jpg'
import aboutIcon1 from '../images/about-icon-1.png'
import aboutIcon2 from '../images/about-icon-2.png'
import aboutIcon3 from '../images/about-icon-3.png'

function  About(){
    return(
        <>
        <div id="about">
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={aboutImg} width="100%" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="title">WELCOME TO OUR RESTURANT</h3>
                        <h1 className="about-heading">Pishawari Ice Cream</h1>

                            <p id="show-para">
                                <b>Peshawari Ice Cream</b> is one of topest ice cream in Pakistan, We have all variety
                                of
                                ice cream
                                flavours, fresh juices, milk shakes and lemonades.
                            </p>
                            <button onclick="readMore()" className="button">Read More</button>



                            <div className="row text-center">
                                <div className="col m-2 p-2 bg-light border border-dark">
                                    <img src={aboutIcon1} alt="" />
                                    <h5>Quality Foods</h5>
                                </div>
                                <div className="col m-2 p-2 bg-light border border-dark">
                                    <img src={aboutIcon2}  alt="" />
                                    <h5>Food & Drinks</h5>
                                </div>
                                <div className="col m-2 p-2 bg-light border border-dark">
                                    <img src={aboutIcon3}  alt="" />
                                    <h5>Expert Chefs</h5>
                                </div>
                            </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
};

export default  About;