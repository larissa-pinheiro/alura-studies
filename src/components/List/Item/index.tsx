import style from '../List.module.scss'

type Props = {
  task: string,
  time: string
}

export default function Item({task, time}: Props) {
  return (
    <li className={style.item}>
    <h3>{task}</h3>
    <span>{time}</span>
  </li>
  )
}