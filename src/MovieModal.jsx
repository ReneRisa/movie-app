import Modal from 'react-modal';

function MovieModal(props) {
    return (
        <Modal
            isOpen={props.isModalOpen}
            onRequestClose={props.closeModal}
            contentLabel={props.movie.Title}
            className='modal'
            overlayClassName='modal-overlay'
        >
            <div className='modal-content'>
                <span onClick={props.closeModal} className='close'>
                    &times;
                </span>
                
                <div className='modal-header'>
                     <img src={props.movie.Poster} alt={props.movie.Title} />
                     <div className='modal-title'>
                        <h3>{props.movie.Title}</h3>
                        <p>{props.movie.Year}</p>
                    </div> 
                </div>
                <div className='modal-body'>
                    <p>
                        <strong>Genre:</strong> {props.movie.Genre}
                    </p>
                    <p>
                        <strong>Director:</strong> {props.movie.Director}
                    </p>
                    <p>
                        <strong>Writer:</strong> {props.movie.Writer}
                    </p>
                    <p>
                        <strong>Actors:</strong> {props.movie.Actors}
                    </p>
                    {props.movie.Plot}
                </div>
            </div>
        </Modal>
    )
}
export default MovieModal;