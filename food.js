import pishawari from '../images/pishawari-image.jpg'
import chocolate from '../images/chocolate-image.jpg'
import strawberry from '../images/strawberry-image.jpg'
import mango from '../images/mango-image.jpg'
import kulfa from '../images/kulfa-image.jpg'
import pista from '../images/pishawari-pista-image.jpg'
import falooda from '../images/faalooda-image.jpg'
import frauti from '../images/frauti-faaloda.jpg'

function  Food(){
    return(
        <>


<div className="container-fluid my-3 ">
  <h1 className="food-heading text-center">Foods</h1>
  <h1 className="food-heading text-center" id="iceCream">Delicious Ice Creams</h1>
  <div className="row my-4 p-2">
    <div className="col-12 col-md-6 col-lg-3 pb-3 text-center">
      <div className="card">
        <img src={pishawari} className="rounded-circle mx-auto d-block pt-1" alt="..." width="280vh"
          height="280vh" />
        <div className="card-body">
          <h5 className="card-title">Pishawari Ice Cream</h5>
          <a className="button text-decoration-none" href="./order.html">Order Now</a>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3 pb-3 text-center">
      <div className="card">
        <img src={chocolate} className="rounded-circle mx-auto d-block pt-1" alt="..." width="280vh"
          height="280vh" />
        <div className="card-body">
          <h5 className="card-title">Chocolate Ice Cream</h5>
          <a className="button text-decoration-none" href="./order.html">Order Now</a>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3 pb-3 text-center">
      <div className="card">
        <img src={strawberry} className="rounded-circle mx-auto d-block pt-1" alt="..."
          width="280vh" height="280vh" />
        <div className="card-body">
          <h5 className="card-title">Stawaberry Ice Cream</h5>
          <a className="button text-decoration-none" href="./order.html">Order Now</a>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3 text-center">
      <div className="card">
        <img src={mango} className="rounded-circle mx-auto d-block pt-1" alt="..." width="280vh"
          height="280vh" />
        <div className="card-body">
          <h5 className="card-title">Mango Ice Cream</h5>
          <a className="button text-decoration-none" href="./order.html">Order Now</a>
        </div>
      </div>
    </div>

  </div>
</div>


<div className="container-fluid my-3">
  <div className="row my-3 p-2">
    <div className="col-12 col-md-6 col-lg-3 pb-3 text-center">
      <div className="card">
        <img src={kulfa} className="rounded-circle mx-auto d-block pt-1" alt="..." width="280vh"
          height="280vh" />
        <div className="card-body">
          <h5 className="card-title">Kulfa Ice Cream</h5>
          <a className="button text-decoration-none" href="./order.html">Order Now</a>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3 pb-3 text-center">
      <div className="card">
        <img src={pista} className="rounded-circle mx-auto d-block pt-1" alt="..."
          width="280vh" height="280vh" />
        <div className="card-body">
          <h5 className="card-title">Pishawari Pista Ice Cream</h5>
          <a className="button text-decoration-none" href="./order.html">Order Now</a>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3 pb-3 text-center">
      <div className="card">
        <img src={falooda} className="rounded-circle mx-auto d-block pt-1" alt="..." width="280vh"
          height="280vh" />
        <div className="card-body">
          <h5 className="card-title">Falooda</h5>
          <a className="button text-decoration-none" href="./order.html" id="Juices">Order Now</a>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3 text-center">
      <div className="card">
        <img src={frauti} className="rounded-circle mx-auto d-block pt-1" alt="..." width="280vh"
          height="280vh" />
        <div className="card-body">
          <h5 className="card-title">Special Falooda</h5>
          <a className="button text-decoration-none" href="./order.html" id="Juices">Order Now</a>
        </div>
      </div>
    </div>

  </div>
</div>


        </>
    )
};

export default  Food;