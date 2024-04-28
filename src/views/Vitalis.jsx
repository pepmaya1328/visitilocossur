import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

import vitalis from "../assets/vitalis.jpg";
import vitalis1 from "../assets/vitalis1.jpg";
import vitalis2 from "../assets/vitalis2.jpg";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: '985px',
    height: '400px',
    // borderRadius: '6px'
};

const center = {
    lat: 17.288845049713682,
    lng: 120.42818906542588
};

function Vitalis() {
    return (
        <>
            <div className="subComponent">
                <Container>
                    <section className="tour-cover item-center">
                        <img src={vitalis} alt="" />
                        <h1>Vitalis: The Santorini In The North</h1>
                        <h4>Santiago, Ilocos Sur</h4>
                    </section>
                </Container>
            </div>
            <div className="destination">
                <div className="first-des">
                    <div className="des-text">
                        <p>Majestically situated high on a mountain cliff overlooking the sea and the beautiful Santiago Cove. Villas are crafted in traditional Greek architectural style and offer the warmth of Filipino island charm and the convenience of modern amenities. Known as the ‘Santorini of the North’, Vitalis Villas welcomes guests with a blue and white expanse of villas. Explore the property through its cobblestone walkways that look up to clear skies and lead to crisp, pristine waters. Feel right at home with our rooms and villas with its elegant interiors and plush white beds. Spacious and cozy, all fully equipped with amenities.</p>
                    </div>
                    <div className="image">

                            <img src={vitalis1} alt="img" />


                            <img src={vitalis2} alt="img" />

                    </div>
                </div>
            </div>
            <div className="subComponent">
                <Container>
                    <section className="tour-cover item-center">
                        <LoadScript googleMapsApiKey="AIzaSyBCOWdrHosBkPDK8cRmeqxA03mw6Rpsio0">
                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                center={center}
                                zoom={16}
                            >
                                <Marker position={center} />
                            </GoogleMap>
                        </LoadScript>
                    </section>
                </Container>
            </div>
        </>
    )
}

export default Vitalis;
