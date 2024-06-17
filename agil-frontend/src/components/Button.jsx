

const Button = (props) => {


  return (
    <div className="p-4">
      <button onClick={props.onClick} type="button" class={`px-5 py-2.5 bg-agilzorange text-sm font-medium text-white inline-flex items-center hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ${props.color}`}>
      {props.icon || ""}
      {props.label}
    </button>
    </div>
    
  )
}





export default Button