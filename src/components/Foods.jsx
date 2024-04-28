import "./Foods.css";

import bagnet from "../assets/bagnet.jpeg";
import empanada from "../assets/empanada.jpg";
import longganisa from "../assets/longganisa.jpg";
import kalamay from "../assets/kalamay.jpg";
import pinakbet from "../assets/pinakbet.jpg";
import chichacorn from "../assets/chichacorn.jpg";

function Foods() {
    return (
        // row row-cols-1 row-cols-md-3
        <div className="container">
            <div className="header">
                <h1>What To Eat In Ilocos?</h1>
            </div>
            <br />
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card">
                        <img src={bagnet} class="card-img-top" alt="bagnet"/>
                        <div className="card-body">
                            <h5 className="card-title">Bagnet</h5>
                            <p className="card-text">Crispy Pork Belly</p>
                            <a href="/bagnet" className="button btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src={empanada} className="card-img-top" alt="empanada"/>
                        <div className="card-body">
                            <h5 className="card-title">Empanada</h5>
                            <p className="card-text">Crispy, Savory, Irresisitible!</p>
                            <a href="/empanada" className="button btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src={longganisa} className="card-img-top" alt="longganisa"/>
                        <div className="card-body">
                            <h5 className="card-title">Vigan Longganisa</h5>
                            <p className="card-text">Garlicky Pork Sausage</p>
                            <a href="/longganisa" className="button btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src={kalamay} className="card-img-top" alt="kalamay"/>
                        <div className="card-body">
                            <h5 className="card-title">Kalamay</h5>
                            <p className="card-text">Sticky Sweet Delicacy</p>
                            <a href="/kalamay" className="button btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src={pinakbet} className="card-img-top" alt="pinakbet"/>
                        <div className="card-body">
                            <h5 className="card-title">Pinakbet</h5>
                            <p class="card-text">Pinoy Mixed veggies In Fish Paste!</p>
                            <a href="/pinakbet" className="button btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src={chichacorn} className="card-img-top" alt="chichacorn"/>
                        <div className="card-body">
                            <h5 className="card-title">Chichacorn</h5>
                            <p className="card-text">Filipino Snack From Northern Luzon!</p>
                            <a href="/chichacorn" className="button btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Foods;
