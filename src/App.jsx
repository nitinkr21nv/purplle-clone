import carmesi from "./assets/images/carmesi.webp";
import carmesiNatural from "./assets/images/carmesnatural.webp";
import ay from "./assets/images/AY.webp";
import aya from "./assets/images/AYA.webp";
import alpsBanner from "./assets/images/alpsbanner.webp";
import cera from "./assets/images/cera.webp";
import comfyBanner from "./assets/images/comfybanner.webp";
import cosrx from "./assets/images/cosrx.webp";
import curlup from "./assets/images/curlup.webp";
import dermdoc from "./assets/images/dermdoc.webp";
import dermdocOffer from "./assets/images/dermdoc2.avif";
import dove from "./assets/images/Dove.webp";
import elle from "./assets/images/ELLE.webp";
import faceCleanser from "./assets/images/facecleanser.webp";
import fixMyCurls from "./assets/images/fixmycurls.webp";
import himalaya from "./assets/images/himalaya.webp";
import justHerbs from "./assets/images/justherbs.webp";
import khadiNatural from "./assets/images/khadinatural.webp";
import laFrench from "./assets/images/la'french.webp";
import meskin from "./assets/images/meskin.webp";
import minimum from "./assets/images/minimum.webp";
import nybae from "./assets/images/nybae.webp";
import pears from "./assets/images/Pears.webp";
import pureOrigin from "./assets/images/pureorigin.webp";
import sesa from "./assets/images/sesa.webp";
import shine from "./assets/images/shinesealingconditioner.webp";
import sirona from "./assets/images/sirona.webp";
import sunsilk from "./assets/images/sunsilk.webp";
import tnw from "./assets/images/tnw.webp";
import vanillaCaramel from "./assets/images/vanillacaramel.webp";
import venus from "./assets/images/venus.webp";
import vitaminC from "./assets/images/vitaminc.webp";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./App.css";

const products = [
  {
    name: "Shine Sealing Conditioner",
    tag: "New",
    price: "Rs. 399",
    image: shine,
  },
  {
    name: "DermDoc Niacinamide Sunscreen",
    tag: "Sponsored",
    price: "Rs. 549",
    image: dermdoc,
  },
  {
    name: "Carmesi Natural Roll On",
    tag: "Popular",
    price: "Rs. 699",
    image: carmesiNatural,
  },
  {
    name: "Fresh Blossom Roll On",
    tag: "Deal",
    price: "Rs. 299",
    image: carmesi,
  },
  {
    name: "DermDoc Cleansing Bar",
    tag: "Offer",
    price: "Rs. 249",
    image: dermdocOffer,
  },
  {
    name: "Gloss Hair Ritual",
    tag: "Haircare",
    price: "Rs. 599",
    image: shine,
  },
];

const brandTiles = [
  {
    name: "Dot & Key",
    image: carmesi,
  },
  {
    name: "Faces Canada",
    image: carmesiNatural,
  },
  {
    name: "DermDoc",
    image: dermdoc,
  },
  {
    name: "Swiss Beauty",
    image: dermdocOffer,
  },
];

const footerRows = [
  {
    title: "Discover",
    links:
      "Nail Art / Eye Makeup / Bridal Makeup / How To Do Makeup / Pimples / Stretchmark Removal / Best Eye Creams / Hairstyles / Burgundy Hair Colors / Best Facewashes For Men / Best Perfumes For Men / Skincare Tips",
  },
  {
    title: "Shop Makeup",
    links: "Lakme / Maybelline / Colorbar / Loreal / Revlon / Avon / Elle 18",
  },
  {
    title: "Skin Care",
    links: "Bio Oil / Olay / Neutrogena / Lotus Herbals / VLCC / Kaya / Vichy / Nivea / Gillette / Park Avenue",
  },
  {
    title: "Hair Products",
    links: "Loreal Professionnel / Schwarzkopf / Matrix Biolage / Livon Hair Gain / Biotique / Roots",
  },
  {
    title: "Fragrance",
    links: "Davidoff / Hugo Boss / Calvin Klein / Elizabeth Arden / Jaguar / Victoria's Secret",
  },
  {
    title: "Electronics",
    links: "Philips / Wahl / Braun / Remington",
  },
];

const footerColumns = [
  {
    title: "Purplle",
    links: ["About Us", "Our Team", "Careers", "Press", "Sitemap", "Investor Relation"],
  },
  {
    title: "Privacy Info",
    links: ["Privacy Policy", "Terms of Use", "Return & Cancellation Policy"],
  },
  {
    title: "Need Help?",
    links: ["FAQ's", "Contact Us"],
  },
];

const bundleProducts = [
  {
    name: "NY Bae All I Need Makeup Kit - 80 gm | Primer | BB Cream | Compact",
    image: carmesi,
    price: "649",
    oldPrice: "999",
    off: "35% off",
  },
  {
    name: "Good Vibes Ubtan De-Tan Glow Kit | Face Wash 120 ml + Face Pack",
    image: shine,
    price: "609",
    oldPrice: "1044",
    off: "42% off",
  },
  {
    name: "NY Bae Strobe Skin Tint Combo - Medium Skin | Strobe Pink Topaz",
    image: dermdocOffer,
    price: "389",
    oldPrice: "554",
    off: "30% off",
  },
  {
    name: "NY Bae Sweet Shop Staples Pack of 3 Lipsticks: Nudes and Browns",
    image: carmesiNatural,
    price: "249",
    oldPrice: "399",
    off: "38% off",
  },
  {
    name: "NY Bae Strobe Skin Tint Combo - Fair Skin | Strobe Pink Topaz",
    image: dermdocOffer,
    price: "389",
    oldPrice: "554",
    off: "30% off",
  },
];

const seasonOffers = [
  {
    brand: "New this season",
    image: shine,
    title: "Starting at ₹75",
  },
  {
    brand: "Layer'r Wottagirl",
    image: carmesiNatural,
    title: "Upto 60% off",
    sub: "on entire brand",
  },
  {
    brand: "Carmesi",
    image: carmesi,
    title: "Upto 35% off",
    sub: "on combos",
  },
  {
    brand: "Plix",
    image: dermdocOffer,
    title: "Unlock exciting cart offers",
  },
  {
    brand: "Renee",
    image: dermdoc,
    title: "Everyday makeup deals",
  },
  {
    brand: "Simple",
    image: shine,
    title: "Fresh skincare picks",
  },
  {
    brand: "Foxtale",
    image: carmesi,
    title: "Glow care offers",
  },
  {
    brand: "Aqualogica",
    image: dermdocOffer,
    title: "Sunscreen favorites",
  },
];

const essentials = [
  {
    name: "LOreal Paris Glycolic Extra Gloss Shampoo, Powered By 3%",
    image: shine,
    price: "295",
    oldPrice: "440",
    off: "33% off",
  },
  {
    name: "NY Bae Runway Radiance Compact Powder - Pale Ivory",
    image: carmesiNatural,
    price: "123",
    oldPrice: "175",
    off: "30% off",
  },
  {
    name: "LOreal Paris Glycolic Gloss Serum",
    image: dermdocOffer,
    price: "212",
    oldPrice: "249",
    off: "15% off",
  },
  {
    name: "Sunsilk Luscious Thick and Long Shampoo",
    image: carmesi,
    price: "252",
    oldPrice: "370",
    off: "32% off",
  },
  {
    name: "NY Bae Runway Radiance Compact Powder - Fair Beige",
    image: carmesiNatural,
    price: "119",
    oldPrice: "175",
    off: "32% off",
  },
];

const newBrands = [
  {
    name: "Good Vibes Vitamin C SPF 50 PA+++ Sunscreen | Brightening",
    image: vitaminC,
    price: "185",
    oldPrice: "240",
    off: "23% off",
    tag: "Free Gift on 599+",
  },
  {
    name: "Good Vibes Rice Brightening Face Cleanser | Korean Rice Glow",
    image: faceCleanser,
    price: "175",
    oldPrice: "250",
    off: "30% off",
    tag: "Free Gift on 599+",
  },
  {
    name: "Good Vibes Vanilla & Caramel Niacinamide Hydrating Body Lotion",
    image: vanillaCaramel,
    price: "150",
    oldPrice: "250",
    off: "40% off",
    tag: "Free Gift on 599+",
  },
  {
    name: "NY BAE PRO Strobe Cream - Pink Topaz 10 gm",
    image: nybae,
    price: "99",
    oldPrice: "149",
    off: "34% off",
  },
  {
    name: "DERMDOC Cera-Soft Body Lotion (200 ml) With 0.1%",
    image: cera,
    price: "219",
    oldPrice: "265",
    off: "17% off",
    tag: "Freebie on 599+",
  },
];

const bestBrandDeals = [
  {
    brand: "AYA",
    image: aya,
    title: "Upto 60% off",
    sub: "Buy 2, get extra 5% off",
  },
  {
    brand: "Elle 18",
    image: elle,
    title: "Upto 40% off",
    sub: "on entire brand",
  },
  {
    brand: "Dove",
    image: dove,
    title: "Upto 45% off",
    sub: "on entire brand",
  },
  {
    brand: "AY",
    image: ay,
    title: "Upto 60% off",
    sub: "Buy 2, get extra 5% off",
  },
  {
    brand: "Pears",
    image: pears,
    title: "Upto 30% off",
    sub: "on entire brand",
  },
  {
    brand: "Lamel",
    image: minimum,
    title: "Minimum 15% off",
    sub: "on entire brand",
  },
  {
    brand: "La French",
    image: laFrench,
    title: "Upto 70% off",
    sub: "on entire brand",
  },
  {
    brand: "TNW",
    image: tnw,
    title: "Upto 20% off",
    sub: "on bestsellers",
  },
  {
    brand: "Sesa",
    image: sesa,
    title: "Upto 15% off",
    sub: "on entire brand",
  },
  {
    brand: "Just Herbs",
    image: justHerbs,
    title: "Flat 25% off",
    sub: "on entire brand",
  },
  {
    brand: "Pure Origin",
    image: pureOrigin,
    title: "Upto 35% off",
    sub: "extra 5% off on Rs. 399",
  },
  {
    brand: "Sunsilk",
    image: sunsilk,
    title: "Upto 40% off",
    sub: "on entire brand",
  },
  {
    brand: "Sirona",
    image: sirona,
    title: "Upto 45% off",
    sub: "on entire brand",
  },
  {
    brand: "Khadi Natural",
    image: khadiNatural,
    title: "Upto 25% off",
    sub: "on entire brand",
  },
  {
    brand: "Curl Up",
    image: curlup,
    title: "Buy 2, get extra 5% off",
    sub: "Buy 3, get extra 7% off",
  },
  {
    brand: "Fix My Curls",
    image: fixMyCurls,
    title: "Buy 2, get extra 5% off",
    sub: "Buy 3, get extra 10% off",
  },
  {
    brand: "Himalaya",
    image: himalaya,
    title: "Upto 20% off",
    sub: "Buy 2, get extra 15% off",
  },
  {
    brand: "Meskin",
    image: meskin,
    title: "Upto 50% off",
    sub: "on bestsellers",
  },
  {
    brand: "Cosrx",
    image: cosrx,
    title: "Upto 12% off",
    sub: "on entire brand",
  },
  {
    brand: "Venus",
    image: venus,
    title: "Upto 40% off",
    sub: "on entire brand",
  },
];

function App() {
  return (
    <main>
      <Navbar />
      <Banner />

      <section className="section" id="offers">
        <div className="section-heading">
          <h2>Handpicked for you</h2>
          <a href="#offers">View all &gt;</a>
        </div>
        <p className="sponsored-text">Sponsored</p>
        <div className="product-grid">
          {products.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section className="offer-banner faces-banner" id="new">
        <button className="offer-arrow left" type="button" aria-label="Previous">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <img className="wide-offer-image" src={alpsBanner} alt="Alps Goodness offer" />
        <button className="offer-arrow right" type="button" aria-label="Next">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </section>

      <div className="small-dots">
        <span></span>
        <span></span>
        <span></span>
        <span className="active-dot"></span>
        <span></span>
        <span></span>
      </div>

      <section className="offer-banner brand-banner" id="splurge">
        <button className="offer-arrow left" type="button" aria-label="Previous">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <img className="wide-offer-image" src={comfyBanner} alt="Steal beauty essentials offer" />
        <button className="offer-arrow right" type="button" aria-label="Next">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </section>

      <div className="small-dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="active-dot"></span>
      </div>

      <section className="brand-tile-grid" id="magazine">
        {brandTiles.map((brand) => (
          <article className="brand-tile" key={brand.name}>
            <h3>{brand.name}</h3>
            <img src={brand.image} alt={`${brand.name} product`} />
          </article>
        ))}
      </section>

      <section className="bundle-section" id="elite">
        <div className="bundle-heading">
          <h2>Budget Beauty Bundles</h2>
          <a href="#elite">View all &gt;</a>
        </div>

        <div className="bundle-grid">
          {bundleProducts.map((item) => (
            <article className="bundle-card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>
                <b>₹{item.price}</b>
                <del> ₹{item.oldPrice}</del>
                <span>{item.off}</span>
              </p>
              <button type="button">Add to Cart</button>
            </article>
          ))}
        </div>
      </section>

      <section className="season-section">
        <div className="season-grid">
          {seasonOffers.map((offer) => (
            <article className="season-card" key={offer.brand}>
              <div className="season-image">
                <h3>{offer.brand}</h3>
                <img src={offer.image} alt={`${offer.brand} offer`} />
              </div>
              <div className="season-text">
                <h2>{offer.title}</h2>
                {offer.sub && <p>{offer.sub}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="simple-product-section">
        <div className="simple-heading">
          <h2>Essentials for you</h2>
          <a href="#top">View all &gt;</a>
          <p>Sponsored</p>
        </div>

        <div className="simple-product-grid">
          {essentials.map((item) => (
            <article className="simple-product-card" key={item.name}>
              <span className="ad-tag">AD</span>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>
                <b>₹{item.price}</b>
                <del> ₹{item.oldPrice}</del>
                <span>{item.off}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="new-brand-section">
        <div className="simple-heading">
          <h2>Brand new, just for you</h2>
          <a href="#top">View all &gt;</a>
        </div>

        <div className="new-brand-grid">
          {newBrands.map((brand) => (
            <article className="new-brand-card" key={brand.name}>
              <div className="new-brand-image">
                {brand.tag && <span>{brand.tag}</span>}
                <img src={brand.image} alt={brand.name} />
              </div>
              <h3>{brand.name}</h3>
              <p>
                <b>₹{brand.price}</b>
                <del> ₹{brand.oldPrice}</del>
                <em>{brand.off}</em>
              </p>
              <button type="button">Add to Cart</button>
            </article>
          ))}
        </div>
      </section>

      <section className="store-section">
        <div className="store-banner">
          <h2>Find a Purplle store near you!</h2>
          <p>Check & visit today</p>
        </div>

        <h2 className="deal-title">Amazing deals on best brands</h2>
        <div className="deal-grid">
          {bestBrandDeals.map((deal) => (
            <article className="deal-card" key={deal.brand}>
              <div className="deal-image">
                <img src={deal.image} alt={`${deal.brand} product`} />
              </div>
              <h3>{deal.brand}</h3>
              <p>{deal.title}</p>
              <span>{deal.sub}</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer" id="brands">
        <div className="footer-searches">
          {footerRows.map((row) => (
            <div className="footer-row" key={row.title}>
              <h3>{row.title}:</h3>
              <p>{row.links}</p>
            </div>
          ))}
        </div>

        <div className="footer-links">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <a href="#top" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="payment-box">
            <h3>Payment</h3>
            <span>VISA</span>
            <span>MasterCard</span>
            <span>AMEX</span>
            <span>Net Banking</span>
            <span>Cash on Delivery</span>
          </div>

          <div className="social-box">
            <h3>Connect</h3>
            <a href="#top" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#top" aria-label="Twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#top" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
            <a href="#top" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#top" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#top" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <p className="copyright">Copyright &copy; 2026 Purplle. All Rights Reserved.</p>
        <a className="back-top" href="#top" aria-label="Back to top">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </footer>
    </main>
  );
}

export default App;
