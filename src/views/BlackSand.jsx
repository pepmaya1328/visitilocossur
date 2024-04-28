import React from "react";
import { Container } from "reactstrap";
import "../App.css";

import mindoro from "../assets/mindoro.jpg";
import mindoro1 from "../assets/mindoro1.jpg";
import mindoro2 from "../assets/mindoro2.jpg";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: '985px',
    height: '400px',
    // borderRadius: '6px'
};

const center = {
    lat: 17.560046650165756,
    lng: 120.34592342464165
};

function BlackSand() {
    return (
        <>
            <div className="subComponent">
                <Container>
                    <section className="tour-cover item-center">
                        <img src={mindoro} alt="" />
                        <h1>Mindoro Beach: The Black Sand Beach</h1>
                        <h4>Vigan City, Ilocos Sur</h4>
                    </section>
                </Container>
            </div>
            <div className="destination">
                <div className="first-des">
                    <div className="des-text">
                        <p>This is Mindoro Beach in Vigan and also known as the Black Beach. This beach is famous for surfers as its got pretty goof waves that's pretty good for surfing. There are some days that swimming are and are not allowed here depending on the situation of the waves. Barangay Mindoro is at the far end of Vigan, you may rent a tricycle to go there from wherever you are staying in Vigan and might cost you 200. There is entrance fee here so you can enjoy your time here without spending money. However, there are no restos and cafes here so better bring your own food. Enjoy!</p>
                    </div>
                    <div className="image">

                            <img src={mindoro1} alt="img" />


                            <img src={mindoro2} alt="img" />

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

export default BlackSand;
