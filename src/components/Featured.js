import React from 'react'

export function Featured(props) {
    

    return (
        <>
            <div className='d-flex justify-content-between mx-4'>
                <h1 className=' fw-bold' id="feat-text1">&middot;Featured Product</h1>
                <button type="button" className="btn btn-danger ">VIEW ALL ITEMS</button>
            </div>
            <hr className='bg-danger'/>
        </>
    )
}
