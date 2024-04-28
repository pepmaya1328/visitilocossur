import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

import port from "../assets/port.jpg";
import port1 from "../assets/port1.webp";
import port2 from "../assets/port2.webp";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: '985px',
    height: '400px',
    // borderRadius: '6px'
};

const center = {
    lat: 17.33818317062869,
    lng: 120.44098897228805
};

function Port() {
    return (
        <>
            <div className="subComponent">
                <Container>
                    <section className="tour-cover item-center">
                        <img src={port} alt="" />
                        <h1>Port Adventure</h1>
                        <h4>San Esteban, Ilocos Sur</h4>
                    </section>
                </Container>
            </div>
            <div className="destination">
                <div className="first-des">
                    <div className="des-text">
                        <p>Looking for a place to unwind during summer and relax after a hard day work? Come and visit San Esteban, Ilocos Sur and enjoy the Scenic and captivating beauty specially during sun set. The Port Adventure Water Park is one of the pride of Ilocos Sur. This has a very accommodating cottages equipped with full air cons , television set and own comfort rooms. Foods are also served here. It is really very relaxing, enjoying and fun. It  seems you´re at the best wonder land you´ve  ever can imagine. Come one come all, bring your whole family here. Have fun.</p>
                    </div>
                    <div className="image">

                            <img src={port1} alt="img" />


                            <img src={port2} alt="img" />

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
                                zoom={14}
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

export default Port;
