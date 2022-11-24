import "./Location.scss";

export default function Location() {
  return (
    <section id="location" className="container-location bg-dark-purple">
      <div className="container-location-secondary">
        <div className="location-primary-div">
          <div className="location-title-div">
            <h2 className="location-title title fs-medium2 txt-dark-purple">
              ONDE ESTAMOS?
            </h2>
            <p className="text fs-small txt-dark-purple">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo
              ex, accumsan eu dui vel, viverra aliquam metus.
            </p>
          </div>
        </div>

        <div className="location-div-map">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                id="gmap_canvas"
                loading="'lazy"
                src="https://maps.google.com/maps?q=barra%20da%20tijuca&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
