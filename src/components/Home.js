import React from 'react';
import cent from "./cent.png"
import decent from "./decent.png"
import bitcoin1 from "./bitcoin1.jpeg"
import tree from "./tree.png"


export class Home extends React.Component{

    render(){
    return(
        <div id="intro">
        <div style={{
            // backgroundImage: "url(" + sky + ")",
            // background:""
            backgroundPosition: "center",
            backgroundSize: "cover"
            // backgroundImage: solve8
            // paddingTop: "120px",
            // backgroundColor: "#74e2ff",
            // color: "#black",
            // borderRadius: "25px",
            // textAlign: "center"

        }} id="welcome" className="jumbotron jumbotron-fluid">
            {/* <p> <img id="solve8" src={solve8} alt="solve"></p> */}
            <h1 style={{
                padding: "60px"
            }}>Welcome to Solve,</h1>
            <h3> we recognize that we must pave the way for the next generation and therefore, we are committed to take you on the Journey of awareness about Cryptocurrencies, Cardano and Decentralization.</h3>
            {/* </img> */}
            {/* <h1> </h1>
            <h3></h3> */}

            <div id="tree" style={{ width: '50px', height: '50px' }}  >
                <img src={tree} alt="ADA" />

            </div>

        </div>

        <div id="centralize" className="hero column col-11 col-xs-12 container">
            <div className="row">
                <div className="column1">
                    <div >
                        <img src={cent} align="right" alt="cent"></img>
                    </div>
                    <h5 style={{marginTop: '110px'}}>First lets take a look at what centralized systems look like.</h5>
                    {/* like vs. decentralized systems */}
                    <ul>
                        <li>A centralized system is a kind of system that requires, to you give your power, data or money to either a big corporation, a bank or, a government for convenience.</li>
                        <li>Banks are centralized - FOR profit systems that are not, accessible to all! Especially the lower class and those in poorer countries, 1.7 Billion Adults are un banked !</li>
                        <li>Centralized systems confine you to their strict rules and regulations </li>
                        <li>In Centralized systems you don't have control over your data </li>
                        <li>You can lose your freedom of speech on a centralized platform and even be banned</li>
                        <li>A very good example of the ramifications of a fully centralized system is China. A country that is using its digital power to control and suppress the people, where basic rights are being taken away, censorship is taking over and a social score is being implemented. </li>

                    </ul>

                </div>

            </div>
        </div>
        {/* <div id="vs" className="hero column col-4 col-xs-12 container">
            <div className="row">


                <div id="cvsd">
                    <img src={vs}></img>
                </div>

            </div>

        </div> */}
        <div id="decentralize" className="hero column col-11 col-xs-12 container">
            <div className="row">
                <div className="column2">
                    <div id="decent1">
                        <img src={decent} align="left"></img>
                    </div>


                    <h5> Now lets take a look at what decentralized systems look like</h5>
                    <ul>
                        <li>A Decentralized system is a kind of system that has no central authority making decisions in the name of all participants. </li>
                        <li>Each participant, also known as ‘peer,’ makes their own autonomous decisions pursuing their own self-interest that may collide with the goals of other peers.</li>
                        <li>In decentralized systems the participants directly interact with each other, share information, or, offer services to others.</li>
                        <li>In an open, decentralized system, there are no limits or regulations for new users to access it because of country or their social and economic status.</li>
                        <li>Any new participant can enter or leave the system at will.</li>
                        <li>No one can be banned and each individual can vote by being part of the system and by owning a pice of the system</li>
                    </ul>

                </div>

            </div>

        </div>

        <div style={{
            // backgroundImage: "url(" + bitcoin1 + ")",
            // backgroundPosition: "center",
            // backgroundSize: "cover"
            // backgroundImage: solve8
            // paddingTop: "120px",
            // backgroundColor: "#74e2ff",
            // color: "#black",
            // borderRadius: "25px",
            // textAlign: "center"

        }} id="decentralize" className="hero column col-11 col-xs-12 container">
            <div className="row">

                <div id="decent2">

                    <img style={{ height: "450px" }} src={bitcoin1} align="left"></img>
                </div>

                <h6>After the 2008 financial crash and bailout of the "to-big to fail" corporations and banks, </h6>
                <h4>a new system of technology emerged!</h4>
                <ul>
                    <li>This system is like the internet where people can build on top of it</li>
                    <li>It is fully transparent </li>
                    <li>Censorship resistent</li>
                    <li>Not only can you own a pice of the system but you can transfer it</li>
                    <li>It is borderless </li>
                    <li>This system is deflationary</li>
                    <li>It is used as a store of value, because of its set supply</li>
                    <li>Bitcoin is the first generation of cryptocurrencies aka. digital gold</li>
                    {/* <li> Decentralization began with bitcoin and continues with to expand throughout the globe</li> */}
                </ul>
                <h3>We sincerely believe that decentralization began with bitcoin and that it continues to expand its reach with <a color="red" href="/cardano">Cardano</a>.</h3>


            </div>

        </div>
        </div>
    )
}
}

export function Staking(){
    return(
        <>
        <h1>HELLO</h1>
        <div id="stakingservice">Staking service will go here</div>
        </>
    )
}