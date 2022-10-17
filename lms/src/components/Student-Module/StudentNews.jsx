import { CCol, CImage, CRow } from '@coreui/react'
import React from 'react'

const StudentNews = () => {
  const newsData = [
    {
      id: 1,
      imgsrc:
        'https://xqsuperschool.org/rethinktogether/wp-content/uploads/sites/5/2021/05/pexels-pixabay-267885.jpg',
      title: 'Face to Face Graduation',
      body: 'Pandemic is Over! ABCUniversity will conduct a face to face graduation for batch 2020 and 2021.',
    },
    {
      id: 2,
      imgsrc:
        'https://www.liberty.edu/news/wp-content/uploads/sites/137/2019/12/Christmas-Tree-lighting-Liberty-campus-20131115LBmain.jpg',
      title: 'University Christmas Program',
      body: '  Its Christmas Season! The ABCUniversity will hold a Christmas mass and party on December 22, 2022.',
    },
  ]

  return (
    <>
      {newsData.map((news) => (
        <CRow key={news.id}>
          <div>
            <CImage
              src={news.imgsrc}
              alt="News pic"
              style={{
                float: 'left',
                margin: '0 20px 20px 0',
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
              }}
            />
            <div>
              <h3>{news.title}</h3>
              <p>{news.body}</p>
            </div>
          </div>
        </CRow>
      ))}
    </>
  )
}

export default StudentNews
