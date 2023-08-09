import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Ecommerce App"}>
      <div className='row contactus'>
          <div className='col-md-6'>
            <img
              src='/images/about.jpeg'
              alt='about'
              style={{ width: "100%" }}
            />
          </div>
          <div className='col-md-4'>
            <p className='text-justify mt-2'>
              Ex proident dolore enim pariatur aute magna occaecat enim voluptate excepteur dolore sit aliquip consequat. Reprehenderit eiusmod eu ad consequat cupidatat consequat anim excepteur eu sunt cillum. Ad reprehenderit ea commodo veniam officia irure ea ad. Occaecat magna id culpa mollit veniam officia ullamco id exercitation sunt consequat laboris nostrud.
            </p>
          </div>
        </div>
    </Layout>
  )
}

export default About
