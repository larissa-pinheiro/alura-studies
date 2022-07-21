import Button from '../Button'
import Clock from './Clock'
import style from './Timer.module.scss'

export default function Timer() {
  return (
    <div className={style.timer}>
      <h3 className={style.title}>Escolha um card e inicie o cronômetro</h3>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button
        text="Começar!"
      />
    </div>
  )
}