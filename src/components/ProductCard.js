import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetAllProductsQuery } from '../features/AllProductsApi'

export function ProductCard(props) {
    const results = useGetAllProductsQuery()
    console.log('Our Response: ',results.data)
    
    return (
        <>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='m-2 bg-secondary border rounded text-center shadow-sm'>
                    <img src='BTR-logo.png' className="mt-3 img-fluid" width="300" height="300"></img>
                    <hr/>
                    <h4 className=' fw-bold' id="">Skating link</h4>
                    <h6>$17.05</h6>
                    <button type="button" className="btn btn-warning my-2">More details</button>
                </div>
            </div>
        </>
    )
}

