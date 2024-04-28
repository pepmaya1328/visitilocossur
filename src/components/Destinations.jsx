import React from "react";
import "../App.css";
import { Container, Row, CardColumns } from "reactstrap";
import Listing from "./Listing";

import baluarte1 from "../assets/baluarte.jpg";
import vitalis from "../assets/vitalis.jpg";
import beach1 from "../assets/suso-beach1.jpg";
import calle1 from "../assets/calle.jpg";
import sangbay from "../assets/sangbay2.jpg";
import skyline from "../assets/skyline.jpeg";
import mindoro from "../assets/mindoro.jpg";
import port from "../assets/port.jpg";


const tourlists = [
    {
        img: mindoro,
        alt: "mindoro",
        title: "Mindoro Beach: The Black Sand Beach",
        subtitle: "Vigan City, Ilocos Sur",
        url: "/blacksand"
    },
    {
        img: sangbay,
        alt: "sangbay-ni-ragsak",
        title: "Sangbay Ni Ragsak",
        subtitle: "Suyo, Ilocos Sur",
        url: "/sangbay"
    },
    {
        img: baluarte1,
        alt: "baluarte1",
        title: "Baluarte Mini Zoo and Resort",
        subtitle: "Vigan City, Ilocos Sur",
        url: "/baluarte"
    },

    {
        img: beach1,
        alt: "beach1",
        title: "Suso Beach",
        subtitle: "Sta. Maria, Ilocos Sur",
        url: "/susobeach"
    },
    {
        img: calle1,
        alt: "calle",
        title: "Calle Crisologo",
        subtitle: "Vigan City",
        url: "/calle"
    },
    {
        img: vitalis,
        alt: "vitalis",
        title: "Vitalis: The Santorini In The North",
        subtitle: "Santiago, Ilocos Sur",
        url: "/vitalis"
    },
    {
        img: skyline,
        alt: "skyline",
        title: "Skyline View Deck",
        subtitle: "Quirino, Ilocos Sur",
        url: "/skyline"
    },

    {
        img: port,
        alt: "port",
        title: "Port Adventure",
        subtitle: "San Esteban, Ilocos Sur",
        url: "/port"
    }
];

function Destinations () {
    return (
        <div className="subComponent-lg" id="destinations">
            <Container>
                <header className="headerTitle text-center">
                    <h1>Top Destinations</h1>
                </header>
                <br />
                <Row>
                    <CardColumns>
                        {tourlists.map((listing, index) => (
                            <Listing
                            key={index}
                            img={listing.img}
                            alt={listing.alt}
                            title={listing.title}
                            subtitle={listing.subtitle}
                            url={listing.url}
                            />
                        ))}
                    </CardColumns>
                </Row>
            </Container>
        </div>
    )

}  export default Destinations;
