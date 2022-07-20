import React from 'react'
import style from './Button.module.scss'

type Props = {
  texto: string;
}

function Button({ texto }: Props) {
  return (
    <button className={style.button}>
      {texto}
    </button>
  )
}

export default Button;