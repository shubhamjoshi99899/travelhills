import React, {useState} from 'react'

const Contact = () => {
    const[userData, setUserData] = useState({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        adress:"",
        message:"", 

    });
    let name, value;
    const postUserData =(event)=>{
        name= event.target.name;
        value=event.target.value;

        setUserData({...userData,[name]:value});

    };

    const submitData =async(event)=>{
   event.preventDefault();
   const{firstName,lastName,phone,email,adress,message} = userData;


   if(firstName&&lastName&&phone&&email&&adress&&message){
   const res = fetch('https://travel-hi-default-rtdb.firebaseio.com/userDataRecords.json',{
   method:"post",
   Headers: {
       "content-Type":"application/json",
    },
    body:JSON.stringify({
        firstName,lastName,phone,email,adress,message,
    })
   }
   );
   if(res){
       setUserData({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        adress:"",
        message:"", 
 
       })
       alert("Data Stored");
   }else{
       alert("Please fill the data")
   }
 
   }
else{
    alert("Please fill the data")
    };
}
    return (
        <div>
            <section className="contactus-section">
		<div className="container">
        <h1 className="main-heading  text-center fw-bolder">Contact Us</h1>
        		<div className="row">
		<div className="col-12 col-lg-10 mx-auto">
         
				<div class="row">
				<div className="contact-leftside col-12 col-lg-5">
                
					<h2 className="main-heading">
						Get in touch with <br /> with us.
					</h2>
					
					<figure>
						<img src="./images/5.jpg" alt="bookimg" className="img-fluid"/>
					</figure>
        </div>
        <div className="contact-rightside col-12 col-lg-7">
            <form method="post">
                    <div className="row">
                    <div className="col-12 col-lg-6 contact-input-field">
                        <input className="form-control" type="text" name="firstName" id="" placeholder="First name" value={userData.firstName} onChange={postUserData}/>
                    </div>
                    <div className="col-12 col-lg-6 contact-input-field">
                        <input className="form-control" type="text" name="lastName" id="" placeholder="Last name" value={userData.lastName}  onChange={postUserData}/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12 col-lg-6 contact-input-field">
                        <input className="form-control" type="number" name="phone" id="" placeholder="Phone number" value={userData.phone} onChange={postUserData}/>
                    </div>
                    <div className="col-12 col-lg-6 contact-input-field">
                        <input className="form-control" type="email" name="email" id="" placeholder="Email" value={userData.email} onChange={postUserData}/>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-12 contact-input-field">
                            <input type="text" className="form-control" name="adress" id="" placeholder="Your adress" value={userData.adress} onChange={postUserData}/>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="col-12">
                            <input type="text" name='message' className="form-control" id="" placeholder="Your Message" value={userData.message} onChange={postUserData}/>
                        </div>
                    </div>

                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label" className="main-hero-para">
                        I agree that the travelhills may contact me at the
                        email address or phone number above.
                      </label>
                    </div>
                    <div class="frame">
              <button class="custom-btn btn-3" onClick={submitData}><span>Submit</span></button>
              </div>
            </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </div>

    )
}

export default Contact
