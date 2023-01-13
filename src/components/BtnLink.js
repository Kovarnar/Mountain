import '../sass/layouts/BtnLink.scss';

function BtnLink(props) {
    return ( 
        <a className="btn-link">{props.btnLink}</a>
    );
}

export default BtnLink;