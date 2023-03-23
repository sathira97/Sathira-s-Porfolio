import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {FaArtstation} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target=''><BsLinkedin /></a>
        <a href='https://github.com' target=''><ImGithub /></a>
        <a href='https://artstation.com/' target=''><FaArtstation /></a>
    </div>
  )
}

export default HeaderSocials