import React from 'react'
import style from './Button.module.scss'

type Props = {
  text: string;
}

function Button({ text }: Props) {
  return (
    <button className={style.button}>
      {text}
    </button>
  )
}

export default Button;