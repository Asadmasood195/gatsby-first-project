import * as React from 'react'
import { Link } from 'gatsby'

const Menu: React.FC = () => {
    return (

        <nav style={{ backgroundColor: "#7952b3", color: 'white' }}
            className="navbar navbar-expand-lg ">
            <div className="container " >
                <Link to="/" className="navbar-brand" ><h2 className="text-light">Gatsby Blog</h2> </Link>
            </div >
        </nav >
    )
}

export default Menu



