import React from 'react'
import { Link } from 'react-router-dom'

function Button() {
    return (

        <Link to='/menu'>
            <button>
                Order now
            </button>
        </Link>


    )
}

export default Button
