import { useParams, Link } from 'react-router-dom'
import { cateringMenu } from '../data/cateringMenu'

function MenuCategoryPage() {
  const { categoryId } = useParams()
  const category = cateringMenu.find((c) => c.id === categoryId)

  if (!category) {
    return (
      <section className="section">
        <h2>Category not found</h2>
        <Link to="/menu" className="back-link">← Back to Menu</Link>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="menu-details-header">
        <h2>{category.icon} {category.title}</h2>
        <Link to="/menu" className="back-link">← Back to Menu</Link>
      </div>

      <div className="menu-items-grid">
  {category.items.map((item, idx) => (
    <div className="menu-item-card" key={idx}>
      <p><strong>{item.name}</strong></p>
      <p className="price">{item.price}</p>
    </div>
  ))}
</div>


    </section>
  )
}

export default MenuCategoryPage
