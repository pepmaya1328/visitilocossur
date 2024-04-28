import React from "react";
import { Container } from "reactstrap";
import "../App.css";

import pinakbet from "../assets/pinakbet.jpg";
import pinakbet1 from "../assets/pinakbet1.jpg";
import pinakbet2 from "../assets/pinakbet2.jpg";

function Pinakbet() {
    return (
        <>
            <div className="subComponent">
                <Container>
                    <section className="tour-cover item-center">
                        <img src={pinakbet} alt="" />
                        <h1>Pinakbet</h1>
                        <h4>Pinoy Mixed Veggies In Fish Paste!</h4>
                    </section>
                </Container>
            </div>
            <div className="destination">
                <div className="first-des">
                    <div className="des-text">
                        <p>Pakbet or pinakbet is a popular vegetable dish that originated from one of the northern provinces of the Philippines, Ilocos. The vegetables used on this dish are usually grown in the back yard of every villager and are available almost all year long. Bitter Melon, eggplant, okra, and string beans are just some of the vegetables that make-up this delightful dish. Pakbet is cooked in a clay pot called “Palayok” and Anchovy sauce (bagoong isda) is used to add flavor. As the fame of this dish grew, several versions have sprouted. In the National Capital Region (Manila and the near by cities), Pakbet is cooked with squash (kalabasa) and bagoong alamang (shrimp paste) is used to give flavor to the dish. This variation is known as “Pakbet Tagalog”. A very easy-to-cook dish packed with different vitamins and minerals (just limit the bagnet if you are conscious of your health), Pakbet is a dish that is really worth trying. By the way, having an extra cup of rice around might help.</p>
                    </div>
                    <div className="image">

                            <img src={pinakbet1} alt="img" />


                            <img src={pinakbet2} alt="img" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Pinakbet;
