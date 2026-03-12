function Card({ className = "", children }) {
  
  return <article className={`card ${className}`.trim()}>
    
    {children}
  
  </article>;
}

export default Card;