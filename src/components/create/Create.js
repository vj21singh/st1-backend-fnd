import React from "react"
import "./create.css"

export const Create = () => {
  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img '>
            <img src='https://images.pexels.com/photos/7235331/pexels-photo-7235331.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='image' class='image-preview' />
          </div>
          <form>
            <div className='inputfile flexCenter'>
              <input type='file' accept='image/*' alt='img' />
            </div>
            <input type='text' placeholder='Title' />

            <textarea name='' id='' cols='30' rows='10'></textarea>

            <button className='button'>Create Post</button>
          </form>
        </div>
      </section>
    </>
  )
}
