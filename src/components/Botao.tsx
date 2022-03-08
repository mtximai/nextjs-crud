// 03/03/22

interface BotaoProps {
   cor?: 'green' | 'blue' | 'gray' | 'red'
   className?: string
   children: any
   onClick?: (p: any) => void
}

export default function Botao(props: BotaoProps) {

  const cor = props.cor ?? 'blue'

  // bg-gradient-to-r from-${cor}-400 to-${cor}-700

  return (
    <button onClick={props.onClick} className={`
      bg-gradient-to-r from-${cor}-400 to-${cor}-700
      text-white px-4 py-2 rounded-md
      ${props.className}
    `}>
      {props.children}
    </button>
  )
}
