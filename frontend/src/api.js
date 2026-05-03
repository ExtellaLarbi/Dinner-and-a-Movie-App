const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY;
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export async function fetchRandomRestaurant() {
  const url =
    "https://api.yelp.com/v3/businesses/search?location=Austin&categories=restaurants&limit=50";

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch restaurant");
  }

  const data = await response.json();
  const businesses = data.businesses || [];
  if (businesses.length === 0) throw new Error("No restaurants found");

  const randomIndex = Math.floor(Math.random() * businesses.length);
  return businesses[randomIndex];
}

export async function fetchRandomMovie() {
  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${'f0dc0bf73c3dc7b1400037f5d25e1ce2'}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch movie");
  }

  const data = await response.json();
  const results = data.results || [];
  if (results.length === 0) throw new Error("No movies found");

  const randomIndex = Math.floor(Math.random() * results.length);
  return results[randomIndex];
}
