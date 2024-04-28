import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

import baluarte from "../assets/baluarte.jpg";
import baluarte1 from "../assets/baluarte1.jpg";
import baluarte2 from "../assets/baluarte2.jpg";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: '985px',
    height: '400px',
    // borderRadius: '6px'
};

const center = {
    lat: 17.551333728301582,
    lng: 120.37718683053663
};

function Baluarte() {
    return (
        <>
            <div className="subComponent">
                <Container>
                    <section className="tour-cover item-center">
                        <img src={baluarte} alt="" />
                        <h1>Baluarte Resort and Mini Zoo</h1>
                        <h4>Vigan City, Ilocos Sur</h4>
                    </section>
                </Container>
            </div>
            <div className="destination">
                <div className="first-des">
                    <div className="des-text">
                        <p>The Baluarte Zoo was established by local politician and businessman, Chavit Singson. Initially it was only a rest house for Singson. The site was already known as Baluarte prior to Singson's arrival, which came from the Spanish term for "stronghold" or "fortress". Singson, who cites his hunting hobby as his motive in setting up Baluarte only considered opening a zoo when his hunting trophy collection grew too big. He thought that a zoo would serve to edify it patrons aside from promoting conservation and protection of endangered species. Described as an interactive wildlife sanctuary, the facility was designed and developed by Singson himself.</p>
                    </div>
                    <div className="image">

                            <img src={baluarte1} alt="img" />


                            <img src={baluarte2} alt="img" />

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

export default Baluarte;
