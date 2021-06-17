import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { BigPara,SmallIcon } from '../global.styles'


function Footer() {
    let code = "<code/>"
    
    return (
        <footer>
           <BigPara dark>{code} with</BigPara>
           <SmallIcon><FaHeart /></SmallIcon>
           <BigPara dark>by Subham Das</BigPara>
        </footer>
    )
}

export default Footer
