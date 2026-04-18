function Card({ item }) {
  return (
    <article className="product-card">
      <span className="ad-tag">AD</span>
      <img src={item.image} alt={item.name} />
      <div className="product-info">
        <p className="product-tag">{item.tag}</p>
        <h3>{item.name}</h3>
        <div className="product-meta">
          <span>{item.price}</span>
          <button type="button">Add</button>
        </div>
      </div>
    </article>
  )
}

export default Card
