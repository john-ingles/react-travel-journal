import data from "../data.js";
import Card from "./Card.jsx";

export default function Main() {
  const locations = data.map((location, i, arr) => {
    return (
      <>
        <Card key={location.id} {...location} />
        {!(arr.length - 1 === i) && <hr />}
      </>
    );
  });
  return (
    <div className="main">
      <section className="cards-list">{locations}</section>
    </div>
  );
}
