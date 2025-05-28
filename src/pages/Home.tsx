import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="container text-white text-center">
            <header>
                <h1 className='p-5'>Lebubble Scripts</h1>
            </header>
            <div className="container">
                <p>
                    Lebubble Scripts is a project born out of a passion for creating custom solutions tailored to the FiveM community. With expertise in database management and a solid foundation in web development, I focus on building scalable and efficient systems to meet diverse needs.
                    <br />
                    <br />
                    This journey started as a way to enhance my skills in software development. Each script is meticulously designed and iteratively improved to adapt to changing requirements.
                    <br />
                    <br />
                    My goal is to deliver innovative and personalized scripts that add value to the community. Constructive feedback plays a crucial role in this process, helping to refine and optimize every solution.
                    <br />
                    <br />
                    If you enjoy my work and want to support the project, consider contributing through the links below. Your support is greatly appreciated and helps sustain the development of new features and improvements.
                </p>
            </div>
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

export default Home;