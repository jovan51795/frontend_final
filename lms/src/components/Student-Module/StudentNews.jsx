import { CImage } from '@coreui/react'
import React from 'react'

const StudentNews = () => {
  return (
    <div>
      <CImage
        src="https://www.liberty.edu/news/wp-content/uploads/sites/137/2019/12/Christmas-Tree-lighting-Liberty-campus-20131115LBmain.jpg"
        alt="News pic"
        style={{
          float: 'left',
          margin: '0 20px 20px 0',
          width: '100%',
          maxWidth: '500px',
          height: 'auto',
        }}
      />
      <div>
        <h3>University Christmas Program!</h3>
        <p>
          Its Christmas Season! The ABCUniversity will hold a Christmas mass and party on December
          22, 2022. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At non ex earum,
          libero dignissimos voluptates. Quis beatae dolorem autem ipsa! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. At non ex earum, libero dignissimos voluptates. Quis beatae
          dolorem autem ipsa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. At non ex
          earum, libero dignissimos voluptates. Quis beatae dolorem autem ipsa!
        </p>
      </div>
    </div>
  )
}

export default StudentNews
