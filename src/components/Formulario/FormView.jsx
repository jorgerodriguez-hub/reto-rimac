import { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import Family from '../../assets/img/img-family.png';

export const FormView = () => {

    let history = useHistory();

    const [numberDoc, setNumberDoc] = useState('');
    const [mobilePhone, setMobilePhone] = useState('');
    const [privacidad, setPrivacidad] = useState(false);
    const [comerciales, setComerciales] = useState(false);

    const handleOnChangeDoc = (e) => {
        const refirst = /^[0-9.-]*$/;
        if (e.target.value === '' || refirst.test(e.target.value)) {
            setNumberDoc(e.target.value);
        } else {
            toast.error("Solo se permiten números", {
                position: "top-right"
            });
        }
    };

    const handleOnChangePhone = (e) => {
        const refirst = /^[0-9.-]*$/;
        if (e.target.value === '' || refirst.test(e.target.value)) {
            setMobilePhone(e.target.value);
        } else {
            toast.error("Solo se permiten números", {
                position: "top-right"
            });
        }
    };

    const handleOnClick = () => {
        if (numberDoc === '' || mobilePhone === '') {
            toast.error("Completar todos los campos", {
                position: "top-right"
            });
        } else if (privacidad === false || comerciales === false) {
            toast.error("Debe aceptar las políticas", {
                position: "top-right"
            });
        } else {
            history.push("/step-2");
        }
    };

    return (
        <>
            <div className="form-view">
                <div className="row">
                    <div className="col-6 col-sm-6">
                        <img src={Family} className="img-fluid" />
                    </div>
                    <div className="col-6 col-sm-6">
                        <p className="badge-form">Seguro Salud Flexible</p>
                        <p className="title-form">Creado para ti y tu <br />familia</p>
                        <p className="subtitle-form">Tú eliges cuánto pagar, ingresa tus datos, cotiza y <br />recibe nuestra asesoría, 100% online.</p>
                        <div className="col-sm-8">
                            <div className="input-group mb-3">
                                <select className="form-select" id="inputGroupSelect02">
                                    <option>Selecciona</option>
                                    <option value="1" selected>DNI</option>
                                    <option value="2">CARNET</option>
                                </select>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInputGroup1"
                                        placeholder="Username"
                                        onChange={(e) => handleOnChangeDoc(e)}
                                        value={numberDoc}
                                        maxLength="8" />
                                    <label for="floatingInputGroup1">Nro. de documento</label>
                                </div>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onChange={(e) => handleOnChangePhone(e)}
                                    value={mobilePhone}
                                    maxLength="9" />
                                <label for="floatingInput">Celular</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={privacidad} id="flexCheckDefault" onChange={(e) => setPrivacidad(e.target.checked)} />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Acepto la Política de Privacidad
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={comerciales} id="flexCheckChecked" onChange={(e) => setComerciales(e.target.checked)} />
                                <label className="form-check-label" for="flexCheckChecked">
                                    Acepto la Política de Comunicaciones Comerciales
                                </label>
                            </div>
                            <p className="text-conditions">Aplican Términos y Condiciones.</p>
                            <button type="button" className="btn btn-dark btn-form" onClick={handleOnClick}>Cotiza aquí</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-view-mobile">
                <div className="row">
                    <div className="col-7 mt-3">
                        <p className="badge-form">Seguro Salud Flexible</p>
                        <p className="title-form">Creado para ti y tu familia</p>
                    </div>
                    <div className="col-5">
                        <img src={Family} className="img-fluid" />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="subtitle-form">Tú eliges cuánto pagar, ingresa tus datos, <br />cotiza y recibe nuestra asesoría, 100% online.</p>
                </div>
                <div className="row">
                    <div className="input-group mb-3">
                        <select className="form-select" id="inputGroupSelect02">
                            <option>Selecciona</option>
                            <option value="1" selected>DNI</option>
                            <option value="2">CARNET</option>
                        </select>
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInputGroup1"
                                placeholder="Username"
                                onChange={(e) => handleOnChangeDoc(e)}
                                value={numberDoc}
                                maxLength="8" />
                            <label for="floatingInputGroup1">Nro. de documento</label>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={(e) => handleOnChangePhone(e)}
                            value={mobilePhone}
                            maxLength="9" />
                        <label for="floatingInput">Celular</label>
                    </div>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={privacidad} id="flexCheckDefault" onChange={(e) => setPrivacidad(e.target.checked)} />
                    <label className="form-check-label" for="flexCheckDefault">
                        Acepto la Política de Privacidad
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={comerciales} id="flexCheckChecked" onChange={(e) => setComerciales(e.target.checked)} />
                    <label className="form-check-label" for="flexCheckChecked">
                        Acepto la Política de Comunicaciones Comerciales
                    </label>
                </div>
                <p className="text-conditions">Aplican Términos y Condiciones.</p>
                <div className="row mb-5">
                    <button type="button" className="btn btn-dark btn-form" onClick={handleOnClick}>Cotiza aquí</button>
                </div>
            </div>
        </>
    );
};
