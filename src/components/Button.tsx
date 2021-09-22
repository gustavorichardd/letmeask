type ButtonProps = {
  text?: string
  children?: string
  onClick: () => void
}

export function Button(props: ButtonProps) {
  return (
    <div>
      <button onClick={props.onClick} >{props.children || 'teste'} </button>
    </div>
  )
}
