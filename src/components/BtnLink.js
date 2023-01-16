import '../sass/layouts/BtnLink.scss';

function BtnLink(props) {
    return ( 
        <a className="btn-link" href='#'>{props.btnLink}</a>
    );
}

export default BtnLink;