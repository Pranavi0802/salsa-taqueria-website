import { Link } from 'react-router-dom'
import { cateringMenu } from '../data/cateringMenu'

function Menu() {
  return (
    <section className="section">
      <h2>Catering Menu</h2>

      <div className="menu-category-grid">
        {cateringMenu.map((cat) => (
          <Link
            key={cat.id}
            to={`/menu/${cat.id}`}
            className="menu-category-card"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="menu-category-img"
            />
            <h3>{cat.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Menu
