import React from "react";
import { Container } from "reactstrap";
import "../App.css";

import chichacorn from "../assets/chichacorn.jpg";
import chichacorn1 from "../assets/chichacorn1.jpg";
import chichacorn2 from "../assets/chichacorn2.jpg";

function Chichacorn() {
    return (
        <>
            <div className="subComponent">
                <Container>
                    <section className="tour-cover item-center">
                        <img src={chichacorn} alt="" />
                        <h1>Chichacorn</h1>
                        <h4>Filipino Snack From Northern Luzon!</h4>
                    </section>
                </Container>
            </div>
            <div className="destination">
                <div className="first-des">
                    <div className="des-text">
                        <p>Chichacorn is a semi-popped style of cornick that uses glutinous corn, which is treated with lime before frying. The name is a combination of the words chicharon (crispy pork rinds) and corn. The corn variety used is the white one from plants that are common in the Philippines, not the sweet yellow corn more familiar to Westerners. The crop is grown not only in the Ilocos region, which is most famous for chichacorn, but also in surrounding provinces like La Union. Flavors can be natural, garlic, chili garlic, sweet (seasoned with caramelized white and/or brown sugar), sweet & spicy, barbecue, adobo, and even cheese. With the addition of different flavored powders, the possibilities are endless. Quite a few eaters swear that homemade chichacorn from Ilocos is a hundred times better than the more known Boy Bawang, which are factory-processed corn nuts.</p>
                    </div>
                    <div className="image">

                            <img src={chichacorn1} alt="img" />


                            <img src={chichacorn2} alt="img" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Chichacorn;
