import Modal from 'react-modal';

function MovieModal(props) {
    return (
        <Modal
            isOpen={props.isModalOpen}
            onRequestClose={props.closeModal}
            contentLabel={props.movie.Title}
        >
            <div>
                <span onClick={props.closeModal}>
                    &times;
                </span>
                
                <div>
                     <img src={props.movie.Poster} alt={props.movie.Title} />
                     <div>
                        <h3>{props.movie.Title}</h3>
                        <p>{props.movie.Year}</p>
                    </div> 
                </div>
                <div>
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