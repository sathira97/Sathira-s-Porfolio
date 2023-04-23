import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {FaArtstation} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/sathira-nimhana/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/sathira97' target='_blank'><ImGithub /></a>
        <a href='https://www.artstation.com/sathiranimahana' target='_blank'><FaArtstation /></a>
    </div>
  )
}

export default HeaderSocials