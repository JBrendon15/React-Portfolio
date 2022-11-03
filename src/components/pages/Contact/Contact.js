import React from 'react';

export default function Contact() {
    return (
        <div className='container row vh-100 text-white'>
            <h1>Contact Me</h1>
            <form>
                <div className="form-group col-4">
                    <label for="exampleFormControlSelect1">Name</label>
                    <input className='form-control'/>
                </div>
                <div className="form-group col-4">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group col-4">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        </div>
    )
}