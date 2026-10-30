import React from 'react'
import PropTypes from 'prop-types'

export const BlurBlob = ({position,size,color='#D9CCFF'}) => {
    const {top,left}=position
    const {width,height}=size
  return (
    <div className='absolute pointer-events-none animate-blob'
    style={{
        top:top,
        left:left,
        width:width,
        height:height,
        transform: 'translate(-50%,-50%)',
    }}>
        <div className='w-full h-full rounded-full opacity-60 blur-3xl'
        style={{ background: color }}>


        </div>



    </div>
  )
}


BlurBlob.propTypes={
    position: PropTypes.shape({
        top: PropTypes.string,
        left:PropTypes.string,
    }),
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    }),
    color: PropTypes.string,
};
