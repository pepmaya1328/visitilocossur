import React from "react";
import { Container } from "reactstrap";
import "../App.css";

import kalamay from "../assets/kalamay.jpg";
import kalamay1 from "../assets/kalamay1.jpg";
import kalamay2 from "../assets/kalamay2.jpg";

function Kalamay() {
    return (
        <>
            <div className="subComponent">
                <Container>
                    <section className="tour-cover item-center">
                        <img src={kalamay} alt="" />
                        <h1>Kalamay</h1>
                        <h4>Sticky Sweet Delicacy</h4>
                    </section>
                </Container>
            </div>
            <div className="destination">
                <div className="first-des">
                    <div className="des-text">
                        <p>Candon City is famous of two products: the tobacco farm plantations being the number one producer of quality Virginia tobacco leaves; and, the sweet rice delicacy known as kalamay or sweet rice cake. The story of calamay came back during the world war 2 when this rice cake helped the families of that time to cope up the hard times because of war. There was no food at that time because of the devastation of farm products like rice, corn and rootcrops. The only thing standing tall are the coconuts and it riping fruits.  A group of ladies tried to make product from this coconut through coconut milk and the maskovado... and so there was calamay. Today, the calamay became the OTOP or One Town One Product of the city. There is calamay stand built at the heart of the place just beside plaza and intended for calamay vendors. The original calamay was contained in the hard shell of coconut and wrapped with banana husk. Today it has gone through the famous flat type wrapped with cellophane and newspaper to a chunky and more presentable packaging. Thanks to the effort of city government and Department of Trade and Industry it leveled up.</p>
                    </div>
                    <div className="image">

                            <img src={kalamay1} alt="img" />


                            <img src={kalamay2} alt="img" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Kalamay;
