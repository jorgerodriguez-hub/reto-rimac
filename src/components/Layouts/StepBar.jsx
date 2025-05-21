import Return from '../../assets/img/icon-return-mobile.svg';
import { useHistory } from "react-router-dom";

export const StepBar = () => {

    let history = useHistory();

    const returnMobile = () => {
        history.push("/");
    };

    return (
        <>
            <div className="step-block">
                <div className="row">
                    <div className="col-sm-12">
                        <p className="tab-active">1</p>
                        <p className="text-active">Planes y coberturas</p>
                        <p className="tab-separate">····</p>
                        <p className="tab-inactive">2</p>
                        <p className="text-inactive">Resumen</p>
                    </div>
                </div>
            </div>
            <div className="step-block-mobile">
                <div className="row">
                    <div className="col-5">
                        <img src={Return} className="img-fluid" onClick={returnMobile} />
                        <p className="text-step">PASO 1 DE 2</p>
                    </div>
                    <div className="col-7">
                        <progress max="100" value="50">50%</progress>
                    </div>
                </div>
                <hr />
            </div>
        </>
    );
};
