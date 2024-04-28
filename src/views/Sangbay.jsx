import React from "react";
import { Container } from "reactstrap";
import "../App.css";

import skyline from "../assets/skyline.jpeg";
import skyline1 from "../assets/skyline1.jpg";
import skyline2 from "../assets/skyline2.jpg";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: '985px',
    height: '400px',
    // borderRadius: '6px'
};

const center = {
    lat: 17.181259892546258,
    lng: 120.64993910118888
};

function Skyline() {
    return (
        <>
            <div className="subComponent">
                <Container>
                    <section className="tour-cover item-center">
                        <img src={skyline} alt="" />
                        <h1>Skyline View Deck</h1>
                        <h4>Quirino, Ilocos Sur</h4>
                    </section>
                </Container>
            </div>
            <div className="destination">
                <div className="first-des">
                    <div className="des-text">
                        <p>Ilocos Sur is no short of stunning landscapes and breathtaking beaches. Heritage parks and attractions usually come to mind when you think of Ilocos Sur, but the province also has some beautiful natural features, including this Skyline in Ilocos Sur. This famous sea of clouds in Ilocos Sur is one of the best tourist destinations in Ilocos. It is best visited at 5:00 AM if you want to see the famous sea of clouds (also depending on the weather of your trip). If you didn’t witness the sea of clouds, you could marvel at the view of this Skyline Ilocos Sur with your loved ones. There are nearby stores at the Skyline View Deck, so you can have a mini breakfast picnic. Camping grounds are also available for rent at this tourist spot in Ilocos for those who want to stay longer. This Skyline Ilocos Sur is located in Quirino Ilocos Sur and is a one-hour drive from Candon City to Banayoyo, passing by the Lidlidda and San Emilio towns. Going to this best tourist destination in Ilocos, there’s free entrance for persons with disabilities and children ages six and below. The entrance fee at the Skyline View Deck is PhP30 for non-residents of the municipality, PhP20 for resident and non-resident senior citizens entrance fee at this Skyline Ilocos Sur, and PhP15 for resident senior citizens.</p>
                    </div>
                    <div className="image">

                            <img src={skyline1} alt="img" />


                            <img src={skyline2} alt="img" />

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
                                zoom={12}
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

export default Skyline;
