function  Contact(){
    

    return(
        <>
         <h1 className="text-center my-3 contatUsHeading">Contact Us</h1>
        <div className="container bg-info my-4">
            <div className="row pt-4 pb-4">
                <div className="col-sm-6">
                    <form action="">
                        <div className="pb-2">
                            <input type="text" className="form-control" placeholder="Enter Your Name" name="" id="name" />
                        </div>
                        <div className="pb-2">
                            <input type="email" className="form-control" placeholder="Enter Your Email" name="" id="email" />
                        </div>
                        <div className="pb-2">
                            <input type="number" className="form-control" placeholder="Enter Your Contact No" name=""
                                id="number" />
                        </div>
                        <div className="pb-2">
                            <textarea name="" className="form-control" id="message" cols="30"
                                placeholder="Enter Your Message" rows="10"></textarea>
                        </div>

                    </form>
                    <div className="pb-2">
                        <button className=" button " onclick="contact()">Submit</button>
                    </div>
                </div>
                <div className="col-6">
                    <h1 className="text-center" id="contatUsHeading"> Feedback</h1>
                    <form action="">
                        <textarea className="border-2 shadow-lg rounded-1 form-control" name="" id="feedback" cols="60"
                            rows="10" placeholder="Type Here"></textarea>
                    </form>
                    <div>
                        <button onclick="sendData()" className=" button"> Save </button>

                    </div>
                </div>
            </div>
            <div className="row pb-3">
                <iframe title="myFrame"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14482.114301007767!2d67.0727158!3d24.8457905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc1c451ae85db7aa!2sPeshawari%20Ice%20Cream!5e0!3m2!1sen!2s!4v1660588082962!5m2!1sen!2s"
                    width="400" height="300" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </>
    )
};

export default  Contact;