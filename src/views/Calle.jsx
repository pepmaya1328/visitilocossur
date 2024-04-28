import React from "react";
import { Container } from "reactstrap";
import "../App.css";

import calle from "../assets/calle.jpg";
import calle1 from "../assets/calle1.jpg";
import calle2 from "../assets/calle2.jpg";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: '985px',
    height: '400px',
    // borderRadius: '6px'
};

const center = {
    lat: 17.572916037417624,
    lng: 120.38913104340413
};

function Calle() {
    return (
        <>
            <div className="subComponent">
                <Container>
                    <section className="tour-cover item-center">
                        <img src={calle} alt="" />
                        <h1>Calle Crisologo</h1>
                        <h4>Vigan City, Ilocos Sur</h4>
                    </section>
                </Container>
            </div>
            <div className="destination">
                <div className="first-des">
                    <div className="des-text">
                        <p>Though only 500 meters long, Calle Crisologo in Vigan, Ilocos Sur, is one of the most beautiful streets in the Philippines. It boasts centuries-old stone houses, lovely tungsten lamps, and antique cobblestone, where horse-drawn carriages or kalesas are still used for transport. In fact, the street is a pedestrian-only zone, save for kalesas favored for touring the historical sites around town. A few of the ancestral houses have also become restaurants that serve the famous Ilocos bagnet (deep fried pork belly) or empanadas. Meanwhile, others have been converted into inns and souvenir shops for traditional Inabel linen.</p>
                    </div>
                    <div className="image">

                            <img src={calle1} alt="img" />


                            <img src={calle2} alt="img" />

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
                                zoom={13}
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

export default Calle;
