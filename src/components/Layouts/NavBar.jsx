import Icon from '../../assets/img/icon-phone.svg';
import Logo from '../../assets/img/logo.svg';

export const NavBar = () => {
    return (
        <div className="row navbar-block">
            <div className="col-3 col-sm-2">
                <img src={Logo} className="img-fluid" />
            </div>
            <div className="col-9 col-sm-5 offset-sm-5">
                <div className="contact-block">
                    <p className="text-contact">¡Compra por este medio!</p>
                    <p className="call-contact"><img src={Icon} className="icon-contact" />(01) 411 6001</p>
                </div>
            </div>
        </div>
    );
};
