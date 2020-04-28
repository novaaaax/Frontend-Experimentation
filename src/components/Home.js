import React from 'react';


export class Home extends React.Component {

    render() {
        return (
            <>
                <div className="jumbotron" id="mainjumbo">
                    <h1 className="display-4">Solve Staking</h1>
                    <p className="lead">Staking made easy.</p>
                    <hr className="my-4" />
                    <p>Click here to stake with us.</p>
                    <a className="btn btn-dark btn-lg" href="#" role="button">Learn more</a>
                </div>
                <h2>Stay up to date on Cardano with our news section.</h2>
                <div id="carouselExampleCaptions" class="carousel slide container" data-ride="carousel"
                style={{height: "100%",
                        width: "100%"}}
                >
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner container">
                        <div class="carousel-item active">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed?v=OPtPipPN8qkuseQo"></iframe>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <iframe src="https://www.youtube.com/embed?v=bhG_9Wk7ZFc"></iframe>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <iframe src="https://www.youtube.com/embed?v=bhG_9Wk7ZFc"></iframe>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </>
        )
    }
}

export function Staking() {
    return (
        <>
            <h1>HELLO</h1>
            <div id="stakingservice">Staking service will go here</div>
        </>
    )
}