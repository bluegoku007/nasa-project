// app/page.js
import 'bulma/css/bulma.min.css';

// This is a server component with async data fetching
export default async function Home() {
  const response = await fetch(
    'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
    { cache: 'no-store' } // Ensure it fetches fresh data every time
  );
  const apodData = await response.json();

  return (
    <div className="columns is-centered mt-2">
      <div data-theme="dark" className="column is-half">
      <h1 className="title has-text-primary has-text-centered">Nasa News</h1>

        <div className="card">
          <div className="card-image">
            <figure className="image is-5by3">
              <img
                src={apodData?.url || "https://bulma.io/assets/images/placeholders/1280x960.png"}
                alt={apodData?.title || "Placeholder image"}
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="avatar-test.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{apodData?.title || "John Smith"}</p>
                <p className="subtitle is-6">{apodData?.copyright || "John Smith"}</p>
              </div>
            </div>

            <div className="content">
              {apodData?.explanation || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              <br />
              <time dateTime={apodData?.date}>{apodData?.date || "11:09 PM - 1 Jan 2016"}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
