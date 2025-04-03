// Gmaps URL example: `https://www.google.com/maps/search/?api=1&query=Starbucks Meguro,Tokyo`;

// /// Card example data ///
// picture: "https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg",
// title: "DDSK SAIGON KITCHEN",
// address: "ss, 135-0061, Tokyo",
// criteria: ["Power sockets", "Quiet"]

import "./Cafe.css";

const Cafe = ({cafeData}) => {
  // const cafeData = {
  //   picture: "https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg",
  //   title: "DDSK SAIGON KITCHEN",
  //   address: "ss, 135-0061, Tokyo",
  //   criteria: ["Power sockets", "Quiet"]
  // };
const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${cafeData.address}`;

  return (
    <div className="cafe-card">
    <img src={cafeData.picture} />
    <div>
    <div>
        <h5>{cafeData.title}</h5>
        <p>{cafeData.criteria.join(", ")}</p>
    </div>
    <a target="_blank" href={gmapsUrl}>
      Show the map 📍</a>
    </div>
</div>
  );
};

export default Cafe;
