import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
import Delete from '../images/delete.png'
import Edit from '../images/edit.png'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="D:\Whioo\WebD\Level Prac\React Basics\Project Blog\client\src\images\you-blog-low-resolution-color-logo.png" alt="woah" />
        <div className="user">
          <img src="you-blog-low-resolution-logo-color-on-transparent-background.png" alt="what" />
          <div className="info">
            <span>Bushra</span>
            <p>Posted 2 days ago!</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione atque minus nam voluptate quod accusantium, cumque adipisci ex iste voluptatem id perferendis blanditiis? Modi ratione cum illum officiis quisquam.
         
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio illum veniam cupiditate nam reiciendis sit harum deleniti, nesciunt nihil sint repudiandae eligendi, fugit beatae, labore recusandae molestias saepe fuga facilis.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates excepturi nobis, officia ipsam, vero delectus reiciendis repellendus sunt, laborum sequi minima nostrum tempora a molestias quam sapiente nemo mollitia eligendi.
         
        </p>
      </div>
     <Menu/>
    </div>
  )
}

export default Single
