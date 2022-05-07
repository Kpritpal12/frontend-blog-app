import React from 'react'
import { NavLink } from 'react-router-dom'
import './components/App.css'
const Navbar = () => {
  return (
    <div>
    <div className="logo">
                <span className="text-vertical">the</span>
                <span className="text-capital">siren</span>
            </div>
    <div className='navbar'>
        <NavLink
            style={({ isActive }) => {
                return {
                    // color:isActive ? 'blue' : 'black',
                    borderBottom: isActive ? '10px solid aqua' : ' 10px solid white'

                }
            }}
            to='/home' className='nav-link'>Home</NavLink>


        <NavLink style={({ isActive }) => {
            return {

                // color:isActive ? 'blue' : 'black',
                borderBottom: isActive ? '10px solid aqua' : ' 10px solid white'

            }
        }} to='/tourism' className='nav-link'>Tourism</NavLink>


        <NavLink style={({ isActive }) => {
            return {

                // color:isActive ? 'blue' : 'black',

                borderBottom: isActive ? '10px solid aqua' : ' 10px solid white'
            }
        }} to='/fitness' className='nav-link'>Fitness</NavLink>

        <NavLink style={({ isActive }) => {
            return {

                // color:isActive ? 'blue' : 'black',
                borderBottom: isActive ? '10px solid aqua' : ' 10px solid white'

            }
        }} to='/technology' className='nav-link'> Technology</NavLink>

        <NavLink style={({ isActive }) => {
            return {

                // color:isActive ? 'blue' : 'black',
                borderBottom: isActive ? '10px solid aqua' : ' 10px solid white'

            }
        }} to='/bollywood' className='nav-link'> Bollywood</NavLink>

        <NavLink style={({ isActive }) => {
            return {

                // color:isActive ? 'blue' : 'black',
                borderBottom: isActive ? '10px solid aqua' : ' 10px solid white'

            }
        }} to='/food' className='nav-link'>Food</NavLink>



    </div>

    <hr />

</div>


  )
}

export default Navbar