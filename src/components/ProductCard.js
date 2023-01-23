import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetAllProductsQuery } from '../features/AllProductsApi'

export function ProductCard(props) {
    const results = useGetAllProductsQuery()
    console.log('Our Response: ',results.data)
    
    return (
        <>
            <h4>Our ProductCard Component is called</h4>
        </>
    )
}

