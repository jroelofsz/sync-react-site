import React from 'react';

const Scripts: React.FC = () => {
    return (
        <div className="container">
            <h1 className="text-center mb-4" id="script-header">Scripts</h1>
            <div className="row p-5">
                <div className="col-md-4">
                    <div className="card bg-dark text-white shadow-lg">
                        <img src="../images/lbs_pedshops_400.png" className="card-img-top" alt="Item 1" />
                        <div className="card-body">
                            <h5 className="card-title">lbs_pedshops</h5>
                            <p className="card-text">A custom ped selling script designed for QB-Core and Qbox.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-dark text-white shadow-lg">
                        <img src="../images/lbs_admin_400.png" className="card-img-top" alt="Item 2" />
                        <div className="card-body">
                            <h5 className="card-title">lbs_admin</h5>
                            <p className="card-text">A custom admin menu built with React + TS.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-dark text-white shadow-lg">
                        <img src="../images/lbs_drugrun_400.png" className="card-img-top" alt="Item 3" />
                        <div className="card-body">
                            <h5 className="card-title">lbs_drugrun</h5>
                            <p className="card-text">A QBCore drug running script.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row p-5">
                <div className="col-md-4">
                    <div className="card bg-dark text-white shadow-lg">
                        <img src="https://placehold.co/400" className="card-img-top" alt="Item 3" />
                        <div className="card-body">
                            <h5 className="card-title">lbs_billing</h5>
                            <p className="card-text">A simple QBCore billing cript.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Scripts;