// src/components/RestaurantCard.js
function RestaurantCard({ restaurant }) {
  if (!restaurant) return null;

  return (
    <div className="card">
      <h2>{restaurant.name}</h2>
      {restaurant.image_url && (
        <img src={restaurant.image_url} alt={restaurant.name} />
      )}
      <p>Rating: {restaurant.rating} ⭐</p>
      {restaurant.price && <p>Price: {restaurant.price}</p>}
      <p>{restaurant.location?.address1}</p>
      <a href={restaurant.url} target="_blank" rel="noreferrer">
        View on Yelp
      </a>
    </div>
  );
}

export default RestaurantCard;
