import React from 'react'

function Span({text,preText=''}) {
    function formatPreText() {
        if (preText) {
            return `${preText}: `
        }
        return ''
    }
  return (
    <>
        {text && (
           <><h4 style={{display:'inline'}}>{formatPreText()} </h4><span>{text}</span><br /></> 
        )
        
        }
        
    </>
  )
}

export default Span