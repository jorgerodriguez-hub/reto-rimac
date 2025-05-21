import { useState } from 'react';
import IconHome from '../../assets/img/icon-home.svg';
import IconHospital from '../../assets/img/icon-hospital.svg';
import IconLeft from '../../assets/img/icon-left.svg';
import IconRight from '../../assets/img/icon-right.svg';
import { toast } from 'react-toastify';

export const PlanTwo = () => {

    const [numberPlan, setNumberPlan] = useState(1);

    const planSelected = () => {
        toast.success("Plan seleccionado con éxito!", {
            position: "top-right"
        });
    };

    const handleLeft = () => {
        if (numberPlan === 1) return;
        setNumberPlan(numberPlan - 1);
    };

    const handleRight = () => {
        if (numberPlan === 3) return;
        setNumberPlan(numberPlan + 1);
    };

    return (
        <>
            <div className="plan-block-two">
                <div className="container-plan">
                    <ul className="grid">
                        <li className="card">
                            <div className="card__content">
                                <p className="title-card">Plan en Casa</p>
                                <img src={IconHome} className="img-fluid" />
                                <p className="title-cost">COSTO DE PLAN</p>
                                <p className="old-cost">$39 antes</p>
                                <p className="new-cost">$37.05 al mes</p>
                                <hr />
                                <ul>
                                    <li><strong>Médico general a domicilio</strong> <br />por S/20 y medicinas <br />cubiertas al 100%.</li>
                                    <li><strong>Videoconsulta</strong> y <br />orientación telefónica al <br />100% en medicina general <br />+ pediatría.</li>
                                    <li><strong>Indemnización</strong> de S/300 en <br />caso de hospitalización por <br />más de un día.</li>
                                </ul>
                                <button type="button" className="btn btn-danger btn-card" onClick={planSelected}>Seleccionar plan</button>
                            </div>
                        </li>
                        <li className="card">
                            <div className="card__content">
                                <p className="title-card">Plan en Casa y <br />Clínica</p>
                                <img src={IconHospital} className="img-fluid" />
                                <p className="title-cost">COSTO DE PLAN</p>
                                <p className="old-cost">$99 antes</p>
                                <p className="new-cost">$94.05 al mes</p>
                                <hr />
                                <ul>
                                    <li><strong>Consultas en clínica</strong> para <br />cualquier especialidad.</li>
                                    <li><strong>Medicinas y exámenes</strong> <br />derivados cubiertos al 80%.</li>
                                    <li>Atención médica en <strong>más de <br />200 clínicas del país.</strong></li>
                                </ul>
                                <button type="button" className="btn btn-danger btn-card" onClick={planSelected}>Seleccionar plan</button>
                            </div>
                        </li>
                        <li className="card">
                            <div className="card__content">
                                <p className="title-card">Plan en Casa <br />+ Chequeo</p>
                                <img src={IconHome} className="img-fluid" />
                                <p className="title-cost">COSTO DE PLAN</p>
                                <p className="old-cost">$49 antes</p>
                                <p className="new-cost">$46.55 al mes</p>
                                <hr />
                                <ul>
                                    <li><strong>Un Chequeo preventivo <br />general </strong>de manera <br />presencial o virtual.</li>
                                    <li>Acceso a <strong>Vacunas</strong> en el <br />Programa del MINSA en <br />centros privados.</li>
                                    <li><strong>Incluye todos los beneficios <br /> del plan en casa.</strong></li>
                                </ul>
                                <button type="button" className="btn btn-danger btn-card" onClick={planSelected}>Seleccionar plan</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="plan-block-two-mobile">
                <div className="container-plan">
                    <ul className="grid">
                        {numberPlan === 1 &&
                            <li className="card">
                                <div className="card__content">
                                    <p className="title-card">Plan en Casa</p>
                                    <img src={IconHome} className="img-fluid" />
                                    <p className="title-cost">COSTO DE PLAN</p>
                                    <p className="old-cost">$39 antes</p>
                                    <p className="new-cost">$37.05 al mes</p>
                                    <hr />
                                    <ul>
                                        <li><strong>Médico general a domicilio</strong> <br />por S/20 y medicinas <br />cubiertas al 100%.</li>
                                        <li><strong>Videoconsulta</strong> y <br />orientación telefónica al <br />100% en medicina general <br />+ pediatría.</li>
                                        <li><strong>Indemnización</strong> de S/300 en <br />caso de hospitalización por <br />más de un día.</li>
                                    </ul>
                                    <button type="button" className="btn btn-danger btn-card" onClick={planSelected}>Seleccionar plan</button>
                                </div>
                            </li>
                        }
                        {numberPlan === 2 &&
                            <li className="card">
                                <div className="card__content">
                                    <p className="title-card">Plan en Casa y <br />Clínica</p>
                                    <img src={IconHospital} className="img-fluid" />
                                    <p className="title-cost">COSTO DE PLAN</p>
                                    <p className="old-cost">$99 antes</p>
                                    <p className="new-cost">$94.05 al mes</p>
                                    <hr />
                                    <ul>
                                        <li><strong>Consultas en clínica</strong> para <br />cualquier especialidad.</li>
                                        <li><strong>Medicinas y exámenes</strong> <br />derivados cubiertos al 80%.</li>
                                        <li>Atención médica en <strong>más de <br />200 clínicas del país.</strong></li>
                                    </ul>
                                    <button type="button" className="btn btn-danger btn-card" onClick={planSelected}>Seleccionar plan</button>
                                </div>
                            </li>
                        }
                        {numberPlan === 3 &&
                            <li className="card">
                                <div className="card__content">
                                    <p className="title-card">Plan en Casa <br />+ Chequeo</p>
                                    <img src={IconHome} className="img-fluid" />
                                    <p className="title-cost">COSTO DE PLAN</p>
                                    <p className="old-cost">$49 antes</p>
                                    <p className="new-cost">$46.55 al mes</p>
                                    <hr />
                                    <ul>
                                        <li><strong>Un Chequeo preventivo <br />general </strong>de manera <br />presencial o virtual.</li>
                                        <li>Acceso a <strong>Vacunas</strong> en el <br />Programa del MINSA en <br />centros privados.</li>
                                        <li><strong>Incluye todos los beneficios <br /> del plan en casa.</strong></li>
                                    </ul>
                                    <button type="button" className="btn btn-danger btn-card" onClick={planSelected}>Seleccionar plan</button>
                                </div>
                            </li>
                        }
                    </ul>
                    <div className="counter-block">
                        <img src={IconLeft} className="img-fluid counter" onClick={handleLeft} />
                        <p className="text-counter">{numberPlan}/3</p>
                        <img src={IconRight} className="img-fluid counter" onClick={handleRight} />
                    </div>
                </div>
            </div>
        </>
    );
};
