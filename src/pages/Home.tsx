

export default function Home() {
    return (
        <div className="container text-white text-center">
            <h1 className='page-header'>Home</h1>
            <hr></hr>
            <br></br>
            <h3>Upcoming Scripts</h3>
            <div className="d-flex justify-content-center">
                
                <div className="card bg-dark text-white shadow-lg" style={{ maxWidth: '28rem' }}>
                    <div className="card-body">
                        <h3 className="card-title mb-3">lbs_drugun</h3>
                        <h6 className="card-subtitle mb-2 text-info">In Development</h6>
                        <p className="card-text">
                            A QBCore drug running script designed to enhance the gameplay experience with immersive features and robust functionality. This script is currently under development, focusing on creating a seamless and engaging drug running experience for players.
                        </p>
                        <span className="badge bg-primary">Work in Progress</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
