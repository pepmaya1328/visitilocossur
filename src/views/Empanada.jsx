import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

import empanada from "../assets/empanada.jpg";
import empanada1 from "../assets/empanada1.jpg";
import empanada2 from "../assets/empanada2.jpg";

function Empanada() {
    return (
        <>
            <div className="subComponent">
                <Container>
                    <section className="tour-cover item-center">
                        <img src={empanada} alt="" />
                        <h1>Ilocos Empanada</h1>
                        <h4>Crispy, Savory, Irresistible!</h4>
                    </section>
                </Container>
            </div>
            <div className="destination">
                <div className="first-des">
                    <div className="des-text">
                        <p>ILOCOS EMPANADA - a popular Ilocano dish that originated in the Ilocos region of the Philippines, particularly in the province of Ilocos Norte and in the City of Vigan, Ilocos Sur. It is a type of empanada, which is a pastry turnover filled with various ingredients. Ilocos empanada is distinct in its appearance, flavor, and preparation. The crust of Ilocos empanada is typically made from a combination of glutinous rice flour with annato and water, resulting in a crispy texture when fried. The filling traditionally consists of green papaya, bean sprouts, Vigan longganisa (local sausage), and sometimes, egg. The ingredients are mixed together and then wrapped in the dough before frying. The empanada is usually deep-fried until golden brown and served hot. It is commonly eaten as a snack or as a meal in itself. Some variations may include additional ingredients such as grated carrots, onions, or garlic. It is often served with vinegar (sukang Iloco) or spicy vinegar dipping sauce and banana ketchup to complement its flavors.</p>
                    </div>
                    <div className="image">

                            <img src={empanada1} alt="img" />


                            <img src={empanada2} alt="img" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Empanada;
