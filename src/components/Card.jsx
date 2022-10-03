import location_icon from "../images/location_icon.svg";

export default function Card(props) {
  return (
    <section className="card">
      <img className="card--image" src={props.imageUrl} />
      <div className="card--details">
        <div className="card--location">
          <img className="card--location_icon" src={location_icon} />
          <div className="card--location_name">
            {props.location.toUpperCase()}
          </div>
          <a
            href={props.googleMapsUrl}
            className="card--location--google_maps_link"
          >
            View on Google Maps
          </a>
        </div>
        <div className="card--title">{props.title}</div>
        <div className="card--date_range">
          {props.startDate} - {props.endDate}
        </div>
        <div className="card--text">{props.description}</div>
      </div>
    </section>
  );
}
