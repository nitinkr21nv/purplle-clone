const menuColumns = [
  {
    title: 'Lip Care',
    links: ['Lip Scrubs', 'Lip Balm', 'Lip Mask and Treatment'],
  },
  {
    title: 'Eye Care',
    links: ['Eye Masks and Patches', 'Under eye creams', 'Eye serums'],
  },
  {
    title: 'Moisturizers',
    links: ['Night Creams', 'Serums and Essences', 'Facial Oil'],
  },
  {
    title: 'Cleansers',
    links: ['Face Wash', 'Scrubs and Exfoliators', 'Face Mist'],
  },
  {
    title: 'Facial Kit',
    links: ['Complete Facial Kit', 'Aromatherapy', 'Essential Oils'],
  },
  {
    title: 'Specialised Skincare',
    links: ['Spot Corrector', 'Nose Strips', 'Face Tool'],
  },
]

function Navbar() {
  return (
    <header className="site-header">
      <div className="top-strip">
        <span>Download app</span>
        <span>Support</span>
        <span>Track order</span>
      </div>

      <div className="navbar">
        <a className="brand" href="#top" aria-label="Purplle home">
          purplle
          <small>join elite</small>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <div className="menu-item">
            <a href="#categories">Shop Categories</a>
            <div className="mega-menu">
              <div className="mega-tabs">
                <span>Skincare</span>
                <span>Makeup</span>
                <span>Hair Care</span>
                <span>Personal Care</span>
                <span>Fragrance</span>
              </div>
              <div className="mega-grid">
                {menuColumns.map((column) => (
                  <div key={column.title}>
                    <h3>{column.title}</h3>
                    {column.links.map((link) => (
                      <p key={link}>{link}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <a href="#brands">Brands</a>
          <a href="#offers">Offers</a>
          <a href="#new">New</a>
          <a href="#splurge">Splurge</a>
          <a href="#magazine">Magazine</a>
          <a href="#elite">Elite Offers</a>
        </nav>

        <div className="nav-icons">
          <button type="button" aria-label="Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button type="button" aria-label="Wishlist">
            <i className="fa-regular fa-heart"></i>
          </button>
          <button type="button" aria-label="Cart">
            <i className="fa-solid fa-basket-shopping"></i>
          </button>
          <button type="button" aria-label="Profile">
            <i className="fa-regular fa-face-smile"></i>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
