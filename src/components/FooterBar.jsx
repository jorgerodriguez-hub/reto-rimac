import Logo from '../assets/img/logo-black.svg';

export const FooterBar = () => {
    return (
        <>
            <div className="footer-block">
                <div className="row">
                    <div className="col-sm-2">
                        <img src={Logo} className="img-fluid" />
                    </div>
                    <hr />
                    <div className="col-sm-5 offset-sm-5">
                        <div className="contact-block-footer">
                            <p className="text-footer">© 2024 RIMAC Seguros y Reaseguros.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-block-mobile">
                <div className="row">
                    <div className="col-12">
                        <img src={Logo} className="img-fluid" />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12">
                        <div className="contact-block-footer">
                            <p className="text-footer">© 2024 RIMAC Seguros y Reaseguros.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
