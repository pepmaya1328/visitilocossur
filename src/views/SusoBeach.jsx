import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

import beach from "../assets/suso-beach.jpg";
import beach1 from "../assets/suso-beach1.jpg";
import beach2 from "../assets/suso-beach2.jpg";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: '985px',
    height: '400px',
    // borderRadius: '6px'
};

const center = {
    lat: 17.357515186663733,
    lng: 120.45421398588874
};

function SusoBeach() {
    return (
        <>
            <div className="subComponent">
                <Container>
                    <section className="tour-cover item-center">
                        <img src={beach} alt="" />
                        <h1>Suso Beach</h1>
                        <h4>Sta. Maria, Ilocos Sur</h4>
                    </section>
                </Container>
            </div>
            <div className="destination">
                <div className="first-des">
                    <div className="des-text">
                        <p>The name of the beach is Suso Beach and there's no way I can change it! LOL! By the way this is a the most accessible beach in the town of Sta Maria in Ilocos Sur because it is located just along the Maharlika Highway. As you traverse the highway while you are riding with your car or bus and you are coming from south, look at your left and just immediately at the corner of the road is the white to golden sandy and coral beach of Suso. When you look at your right, it is a beautiful mountain range with lush green forest that is totally refreshing. So when you are already in this part of Sta Maria, choose where to view, left or right.</p>
                    </div>
                    <div className="image">

                            <img src={beach1} alt="img" />


                            <img src={beach2} alt="img" />

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

export default SusoBeach;
