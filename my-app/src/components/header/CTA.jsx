import React from 'react'
import Resume from '../../assets/Chase Testwuide Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={Resume} target='_blank' className="btn">Download Resume</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA;