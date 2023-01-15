import '../sass/layouts/BtnOrange.scss';

function BtnOrange(props) {
    return ( 
        <button type='submit' className='btn-orange'>{props.btnOrng}</button>
    );
}

export default BtnOrange;