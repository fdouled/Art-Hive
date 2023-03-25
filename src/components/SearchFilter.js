import React, {useState} from 'react'
import Gallery from "./galleryArt.json";


const SearchFilter = () => {
const [selected, listed] = useState(Gallery);
const [likedItems, setLikedItems] = useState([]);



const handleLike = (title, artwork) => {
    const newItem = { title: title, artwork: artwork };
    const index = likedItems.findIndex((item) => item.artwork === artwork);
    if (index > -1) {
      // item already in liked items, unheart it
      const updatedItems = [...likedItems];
      updatedItems.splice(index, 1);
      setLikedItems(updatedItems);
    } else {
      // item not in liked items, heart it
      setLikedItems([...likedItems, newItem]);
    }
  };
  



const filterMedium = (category) => {
const update = Gallery.filter((button) => {
return button.medium === category;
});
listed(update);
}

return (
<main className="main-filter">
<h1 className="filter-title heading color-change">Gallery</h1>
<h2 className="filter-title art">Search <span className="line-art">art </span>by <span className="line-art">medium</span>.</h2>
<section id="medium-container" role="menu">
<button id="Paint" className="btn filter-btn" onClick={() => filterMedium('Paint')}>PAINT</button>
<button id="Mixed Media" className="btn filter-btn" onClick={() => filterMedium('Mixed Media')}>MIXED MEDIA</button>
<button id="Chromolithography" className="btn filter-btn" onClick={() => filterMedium('Chromolithography')}>CHROMOLITHOGRAPHY</button>
<button id="Sculpture" className="btn filter-btn" onClick={() => filterMedium('Sculpture')}>SCULPTURE</button>
<button id="Acrylics" className="btn filter-btn" onClick={() => filterMedium('Print')}>PRINT</button>
<button id="Water Color" className="btn filter-btn" onClick={() => filterMedium('Water Color')}>WATER COLOR</button>
<button id="ShowAll" className="btn filter-btn" onClick={() => listed(Gallery)}>SHOW ALL</button>
</section>

<div className="gallery-card-container"> {
    selected.map((selected) => {
      const {title, artwork, medium, seller} = selected;
      return (
        <div className="gallery-card" aria-label="Card for artwork">
          <div className="img-div">
            <img src={artwork} alt={title} className="img-fluid" aria-label="Image of artwork"/>
          </div>
          <p className="gallery-card-title" aria-label="Title of art piece">{title}</p>
          <p className="gallery-card-medium" aria-label="Medium of art piece">{ medium }</p>
          <p className="gallery-card-medium" aria-label="Seller of art piece">Seller: { seller }</p>
          <button className="like" aria-label="Like button to save art" onClick={() => handleLike(title, artwork)}>
        <i className={`fa fa-heart${likedItems.some((item) => item.artwork === artwork) ? ' liked' : ''}`}></i> </button>
        </div>
      )
    })
  }
  </div>

  <div className="liked-items-container">
    <h2 className="filter-title liked-items-title">Liked Items</h2>
    <div className="gallery-card-container">
      {likedItems.map((item) => (
        <div className="gallery-card" key={item.artwork}>
          <img src={item.artwork} alt={item.title} className="img-fluid" aria-label="Image of liked artwork"/>
          <p className="liked-item-title" aria-label="Title of liked art piece">{item.title}</p>
        </div>
      ))}
    </div>
  </div>

</main>

)
}

export default SearchFilter;



