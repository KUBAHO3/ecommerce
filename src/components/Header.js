import React from 'react'

export function Header(props) {
    

    return (
        <>
        
            <div className="jumbotron jumbotron-fluid bg-primary border rounded m-4">
                <div className="container ">
                    <div className='row py-4'>
                         <button type="button" className="btn btn-danger w-25">GET 50% OFF</button>
                    </div>
                    <div className='row'>
                        <div className='col-6 pt-4'>
                            
                            <h2 className='text-white py-4 fw-bold' id="jumb-text1">Super sale</h2>
                            <h1 className='text-white py-4 fw-bold' id="jumb-text2">Plastic Modelling</h1>
                            <h4 className='text-white py-4 fw-bold' id="jumb-text3">Don't miss the deal</h4>
                            <button type="button" className="btn btn-warning mt-4">SHOP NOW</button>
                        </div>
                        <div className='col-6'>
                            <img src='BTR-logo.png' className='rounded-circle mb-4' width="550" height="550" alt=''></img>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
