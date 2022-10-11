function Order(){

    return(
        <>
       <h1 className="text-center my-3  contatUsHeading"> Order Now </h1>
        <h1 className="text-center contatUsHeading display-3"> Fast Home Delivery </h1>
        <div className="container bg-info my-4">
            <div className="row pt-4">
                <div className="col">
                    <form action="">
                        <div className="pb-2">
                            <input type="text" className="form-control" placeholder="Enter Your Name" name="" id="name" />
                        </div>
                        <div className="pb-2">
                            <input type="email" className="form-control" placeholder="Enter Your Email" name="" id="email" />
                        </div>
                        <div className="pb-2">
                            <input type="number" className="form-control" placeholder="Enter Your Contact No" name=""
                                id="contact" />
                        </div>
                        <div className="pb-2">
                            <select className="form-control" name="" id="food">
                                <option value="Food You Want">Food You Want</option>
                                <option value="Pishawari Ice Cream">Pishawari Ice Cream</option>
                                <option value="Chocolate Ice Cream">Chocolate Ice Cream</option>
                                <option value="Strawberry Ice Cream">Strawberry Ice Cream</option>
                                <option value="Mango Ice Cream">Mango Ice Cream</option>
                                <option value="Kulfa Ice Cream">Kulfa Ice Cream</option>
                                <option value="Pishawari Pista Ice Cream">Pishawari Pista Ice Cream</option>
                                <option value="Faalooda">Faalooda</option>
                                <option value="Special Faalooda">Special Faalooda</option>
                                <option value="Mango Milk Shake">Mango Milk Shake</option>
                                <option value="Dates Milk Shake">Dates Milk Shake</option>
                                <option value="Banana Milk Shake">Banana Milk Shake</option>
                                <option value="Rose Milk Shake">Rose Milk Shake</option>
                                <option value="Pomegranates Juice">Pomegranates Juice</option>
                                <option value="Orrange Juice">Orrange Juice</option>
                                <option value="Grapes Juice">Grapes Juice</option>
                                <option value="Apple Juice">Apple Juice</option>
                                <option value="Zinger Burger">Zinger Burger</option>
                                <option value="Braost">Braost</option>
                                <option value="Chicken Club Sandwitch">Chicken Club Sandwitch</option>
                                <option value="Shawarma">Shawarma</option>
                            </select>
                        </div>
                        <div className="pb-2">
                            <input type="number" className="form-control" placeholder="How Much Want" name="" id="much" />
                        </div>
                        <div className="pb-2">
                            <input type="text" className="form-control" placeholder="Order Details" name="" id="detials" />
                        </div>
                        <div className="pb-2">
                            <textarea name="" className="form-control" id="address" cols="30"
                                placeholder="Enter Your Address" rows="10"></textarea>
                        </div>
                    </form>
                    <div className="pb-2 text-center">
                        <button className="button px-5" onclick="order()">Order Now</button>
                    </div>
                </div>
                <div className="row pb-3">
                    <iframe title="myFrame"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14482.114301007767!2d67.0727158!3d24.8457905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc1c451ae85db7aa!2sPeshawari%20Ice%20Cream!5e0!3m2!1sen!2s!4v1660588082962!5m2!1sen!2s"
                        width="400" height="300" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div> 

        </div>
        </>
    )
}

export default Order;