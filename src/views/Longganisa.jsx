import React from "react";
import { Container } from "reactstrap";
import "../App.css";

import longganisa from "../assets/longganisa.jpg";
import longganisa1 from "../assets/longganisa1.jpg";
import longganisa2 from "../assets/longganisa2.jpg";

function Longganisa() {
    return (
        <>
            <div className="subComponent">
                <Container>
                    <section className="tour-cover item-center">
                        <img src={longganisa} alt="" />
                        <h1>Vigan Longganisa</h1>
                        <h4>Garlicky Pork Sausage</h4>
                    </section>
                </Container>
            </div>
            <div className="destination">
                <div className="first-des">
                    <div className="des-text">
                        <p>The Vigan longaganisa is a small and plump native sausage, good for about two or three bites. It is garlicky and has a yellowish color. Although it is eaten anytime, even as a bread filling, it is traditional favored as breakfast fare together with fried eggs and steamed or fried rice. It is best dipped in Ilocos vinegar with plenty of chili, garlic and onions. Filipinos cook them in a pan with water. The longganisa cooks in its own fat after the water evaporates and is then cooked further until it slightly caramelizes. A tip to avoid crumbling is to place it in the freezer for a while before frying it. Vigan longganisa is said to be an influence of the Mexican salami. The tradition of making this native has existed since the period of the Spanish galleon trade. It is distinct from other Philippine sausages because of its use of the local sugar cane vinegar and Vigan-grown garlic, which are major products of the city as well. The Biguenos are so fiercely proud of their longganisa that they have made it as the product they would like to be most known for. They had it recognized as the city’s One Town, One Project (OTOP) selection under this national government program. They’ve endeavored throughout the years to be the top longganisa producer in the Philippines.</p>
                    </div>
                    <div className="image">

                            <img src={longganisa1} alt="img" />


                            <img src={longganisa2} alt="img" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Longganisa;
