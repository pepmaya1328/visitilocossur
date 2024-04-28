import React from "react";
import { Container } from "reactstrap";
import "../App.css";

import bagnet from "../assets/bagnet.jpeg";
import bagnet1 from "../assets/bagnet1.webp";
import bagnet2 from "../assets/bagnet2.jpg";

function Bagnet() {
    return (
        <>
            <div className="subComponent">
                <Container>
                    <section className="tour-cover item-center">
                        <img src={bagnet} alt="" />
                        <h1>Bagnet</h1>
                        <h4>Crispy Pork Belly</h4>
                    </section>
                </Container>
            </div>
            <div className="destination">
                <div className="first-des">
                    <div className="des-text">
                        <p>Bagnet (Northern Ilocano and Tagalog pronunciation: [bɐgˈnɛt], Southern Ilocano pronunciation: [bɐgˈnɯt]), also locally known as "chicharon" or tsitsaron in Ilocano is a Filipino dish consisting of pork belly (liempo) boiled and deep fried until it is crispy. It is seasoned with garlic, black peppercorns, bay leaves, and salt. First, the meat is boiled, and, then allowed to thoroughly drain excess moisture overnight before frying, to achieve its characteristic chicharon-like texture. Bagnet can be eaten on its own or with white rice. It can also be used as an ingredient or paired with other dishes like pinakbet and dinardaraan. Bagnet is traditionally dipped in vinegar-based sauces (usually sukang iloko), bagoong (fermented fish or shrimp paste), or (more rarely) pig's blood.</p>
                    </div>
                    <div className="image">

                            <img src={bagnet1} alt="img" />


                            <img src={bagnet2} alt="img" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Bagnet;
