import Return from '../assets/img/icon-return.svg';
import Protection from '../assets/img/icon-protection.svg';
import AddUser from '../assets/img/icon-adduser.svg';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { PlanOne } from './PlanOne';
import { PlanTwo } from './PlanTwo';

export const TabView = () => {

    let history = useHistory();

    const [viewPlanToMe, setViewPlanToMe] = useState(false);
    const [viewPlanSomeone, setViewPlanSomeone] = useState(false);
    const [selectedOne, setSelectedOne] = useState(false);
    const [selectedTwo, setSelectedTwo] = useState(false);

    const handleReturn = () => {
        history.push("/");
    };

    const handleCardOne = () => {
        setViewPlanToMe(true);
        setViewPlanSomeone(false);
        setSelectedOne(true);
        setSelectedTwo(false);
    };

    const handleCardTwo = () => {
        setViewPlanToMe(false);
        setViewPlanSomeone(true);
        setSelectedOne(false);
        setSelectedTwo(true);
    };

    return (
        <>
            <div className="block-tab">
                <div className="tab-view">
                    <div className="return-block" onClick={handleReturn}>
                        <img src={Return} className="img-fluid" />
                        <p className="text-return">Volver</p>
                    </div>
                    <p className="title-return-block">Rocío ¿Para quién deseas <br />cotizar?</p>
                    <p className="subtitle-return-block">Selecciona la opción que se ajuste más a tus necesidades.</p>
                </div>
                <div className="container">
                    <ul className="grid">
                        <li className="card" onClick={handleCardOne} style={{ border: selectedOne && '3px solid #141938' }}>
                            <label className="checkbox-control">
                                <input type="radio" name="card" className="checkbox" />
                                <span className="checkbox-control__target">Card Label</span>
                            </label>
                            <div className="card__content">
                                <img src={Protection} className="img-fluid" />
                                <p className="title-card">Para mí</p>
                                <p className="subtitle-card">Cotiza tu seguro de salud y agrega <br />familiares si así lo deseas.</p>
                            </div>
                        </li>
                        <li className="card" onClick={handleCardTwo} style={{ border: selectedTwo && '3px solid #141938' }}>
                            <label className="checkbox-control">
                                <input type="radio" name="card" className="checkbox" />
                                <span className="checkbox-control__target">Card Label</span>
                            </label>
                            <div className="card__content">
                                <img src={AddUser} className="img-fluid" />
                                <p className="title-card">Para alguien más</p>
                                <p className="subtitle-card">Realiza una cotización para uno de tus <br />familiares o cualquier persona.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="block-tab-mobile">
                <div className="tab-view-block">
                    <p className="title-return-block">Rocío ¿Para quién deseas <br />cotizar?</p>
                    <p className="subtitle-return-block">Selecciona la opción que se ajuste más a tus necesidades.</p>
                </div>
                <ul className="grid">
                    <li className="card" onClick={handleCardOne} style={{ border: selectedOne && '3px solid #141938' }}>
                        <label className="checkbox-control">
                            <input type="radio" name="card" className="checkbox" />
                            <span className="checkbox-control__target">Card Label</span>
                        </label>
                        <div className="card__content">
                            <img src={Protection} className="img-fluid" />
                            <p className="title-card">Para mí</p>
                            <p className="subtitle-card">Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
                        </div>
                    </li>
                    <li className="card" onClick={handleCardTwo} style={{ border: selectedTwo && '3px solid #141938' }}>
                        <label className="checkbox-control">
                            <input type="radio" name="card" className="checkbox" />
                            <span className="checkbox-control__target">Card Label</span>
                        </label>
                        <div className="card__content">
                            <img src={AddUser} className="img-fluid" />
                            <p className="title-card">Para alguien más</p>
                            <p className="subtitle-card">Realiza una cotización para uno de tus familiares o cualquier persona.</p>
                        </div>
                    </li>
                </ul>
            </div>

            {viewPlanToMe && <PlanOne />}
            {viewPlanSomeone && <PlanTwo />}

        </>
    );
};
