const Title = ({children, id}) => {
  return (
    <h2 
      id={id && id} 
      className="font-bold text-center m-8 text-4xl lg:text-4xl dark:text-white"
    >
      {children}
    </h2>
  )
}

export default Title