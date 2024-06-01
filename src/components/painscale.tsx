import React, { useEffect } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FormSchema } from './form'
import { z } from 'zod'
import "./painscale.css"

export default function Painscale(props: {
  register: UseFormRegister<z.infer<typeof FormSchema>>
}) {

  useEffect(() => {
    const lines = document.getElementsByClassName('hori-line')
    lines.item(0)?.setAttribute('style', 'width: 50%')
    lines.item(10)?.setAttribute('style', 'width: 50%; left: 0')
  }, [])

  return (
    <div className='painscale-container'>
      
      <div className='vert-lines-container'>
        {Array.from({length: 11}).map((_, e) => (
          <div className='line-radio-container'>
            <div key={e} className='vert-line' />
            <div className='hori-line'/>
            <div key={e} className='painscale-radio'>
              <label>
                <input
                  type="radio"
                  value="option3"
                />
                {e}
              </label>
            </div>
          </div>
        ))}
      </div>
      

    </div>
  )
}

