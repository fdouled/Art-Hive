import React, {useState} from 'react'
import Seller from "./seller.json";

const LocationFilter = () => {
    const [selected, listed] = useState(Seller);
    const filterLocation = (category) => {
        const update = Seller.filter((button) => {
            return button.location === category;
        });
        listed(update);
    }
    return (
        <>
        <main className="main-filter">
                <h1 className="filter-title text-center dark">Sellers</h1>
                <h2 class="filter-title artist">Search <span class="line-artist">sellers</span> by <span class="line-artist">location</span>.</h2>
                <section id="seller-container" role="menu">
                        <button id="Covington, Washington" className="btn filter-btn-loc" onClick={() => filterLocation('Covington, Washington')}>COVINGTON</button>
                        <button id="Seattle, Washington" className="btn filter-btn-loc" onClick={() => filterLocation('Seattle, Washington')}>SEATTLE</button>
                        <button id="Spokane, Washington" className="btn filter-btn-loc" onClick={() => filterLocation('Spokane, Washington')}>SPOKANE</button>
                        <button id="Brooklyn, New York" className="btn filter-btn-loc" onClick={() => filterLocation('Brooklyn, New York')}>BROOKLYN</button>
                        <button id="San Jose, California" className="btn filter-btn-loc" onClick={() => filterLocation('San Jose, California')}>SAN JOSE</button>
                        <button id="ShowAll"  className="btn filter-btn" onClick={() => listed(Seller)}>SHOW ALL</button>
                </section>
            {/* this is the search gallery for all the art-----------------------------------------------------------------*/}

                <div className="gallery-card-container"> {
                    selected.map((selected) => {
                        const {seller, image, location, names} = selected;
                            return (
                                <div className="gallery-card" aria-label="Profile card for artist">
                                {/* for images */}
                                    <div>
                                        <img src={image} alt={seller} className="img-fluid" aria-label="Image of artist"/>
                                    </div>
                                {/* label for gallery item */}
                                    <p className="gallery-card-title" aria-label="Name of artist">{seller}</p>
                                    <p className="gallery-card-artist" aria-label="Names of works"> Current Art Listed: { names }</p>
                                    <p className="gallery-card-location" aria-label="Location of artist">{location }</p>
                                    </div>
                                )
                            })
                        }
                </div>
        </main>
        </>
    )
}

export default LocationFilter;

