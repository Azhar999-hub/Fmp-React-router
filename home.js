import slider1 from '../images/slider1.PNG'
import slider2 from '../images/slider2.PNG'
import slider3 from '../images/slider3.PNG'

function  Home(){
    return(
        <>
        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner" id="home">
                <div className="carousel-item active">
                    <img src={slider1} className="d-block w-100  " alt="..." />
                    <div className="carousel-caption d-none d-md-block fade-in-fade-out">
                        <h1 className="outstanding">Delicious Ice Cream</h1>

                        <button className="button" onclick="location.href='#iceCream'">Get Started</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider2}  className="d-block w-100 " alt="..." />
                    <div className="carousel-caption d-none d-md-block fade-in-fade-out">
                        <h1 className="outstanding">Authentic Juices</h1>

                        <button className="button " onclick="location.href='#Juices'">Get Started</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider3}  className="d-block w-100 " alt="..." />
                    <div className="carousel-caption d-none d-md-block fade-in-fade-out">
                        <h1 className="outstanding">Fast Foods</h1>

                        <button className="button" onclick="location.href='#fastFoods'">Get Started</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
};

export default Home;