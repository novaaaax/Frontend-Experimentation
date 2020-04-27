import React from 'react';
import axios from 'axios';
import moment from 'moment';
import ReactMomentCountDown from 'react-moment-countdown'
import coindesk from "./coindesk.png"
import cointelegraph from "./cointelegraph.png"
import blockchain from "./blockchain.png"

class Cryptocurrencies extends React.Component {
    state = {
        cryptoInfo: {},
        dateInFuture: undefined
        // BTC: []
    }
    componentDidMount() {
        console.log("component mounted");
        const dateInFuture = moment('05-12-2020', 'MM-DD-YYYY')
        var key = process.env.APIKey
        // eslint-disable-next-line no-useless-concat
        var URL = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ADA&tsyms=USD,EUR' + `&api+key=${key}`;


        axios.get(URL)
            .then(res => {
                this.setState({
                    cryptoInfo: res.data,
                    dateInFuture: moment('05-12-2020', 'MM-DD-YYYY')
                })
                console.log(res.data)
            })
            .catch(err =>
                console.log(err)
            )

    }

    render() {
        const dateInFuture = moment('2020-05-12')
        return (

            <>
                <table className="table table-striped table-hover col-xs-12" style={{
                    marginTop: "50px",
                    backgroundColor: "lightgray"
                }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>USD</th>
                            <th>EUR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="active">
                            <td>
                                BITCOIN
                            </td>
                            <td>
                                {this.state.cryptoInfo && this.state.cryptoInfo.BTC && this.state.cryptoInfo.BTC.USD && this.state.cryptoInfo.BTC.USD}
                            </td>
                            <td>
                                {this.state.cryptoInfo && this.state.cryptoInfo.BTC && this.state.cryptoInfo.BTC.USD && this.state.cryptoInfo.BTC.EUR}
                            </td>
                        </tr>
                        <tr className="active">
                            <td>
                                ETHEREUM
                            </td>
                            <td>
                                {this.state.cryptoInfo && this.state.cryptoInfo.ETH && this.state.cryptoInfo.ETH.USD && this.state.cryptoInfo.ETH.USD}
                            </td>
                            <td>
                                {this.state.cryptoInfo && this.state.cryptoInfo.ETH && this.state.cryptoInfo.ETH.USD && this.state.cryptoInfo.ETH.EUR}
                            </td>
                        </tr>
                        <tr className="active">
                            <td>
                                CARDANO
                            </td>
                            <td>
                                {this.state.cryptoInfo && this.state.cryptoInfo.ADA && this.state.cryptoInfo.ADA.USD && this.state.cryptoInfo.ADA.USD}
                            </td>
                            <td>
                                {this.state.cryptoInfo && this.state.cryptoInfo.ADA && this.state.cryptoInfo.ADA.USD && this.state.cryptoInfo.ADA.EUR}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h2>Time Until Bitcoin Halfening:</h2>
                <ReactMomentCountDown style={{
                    marginLeft: "20px"
                }} toDate={dateInFuture} targetFormatMask='DD:HH:mm:ss'></ReactMomentCountDown>
                <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Cardano Information
        </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <div id="cardano">
                                    <div className="master">


                                        <div style={{
                                            //  backgroundImage: "url(" + cardano + ")",
                                            backgroundPosition: "center",
                                            backgroundSize: "cover",
                                            // paddingTop:"293px",
                                            // paddingBottom:"127px",
                                            // marginTop:"-75px"
                                        }} id="cardano" className="hero column col-11 col-xs-12 container">
                                            <div className="row">
                                                <div className="column1">


                                                    <div id="imgcardano" style={{ width: '50px', height: '50px' }}  >
                                                        <img src="https://ucarecdn.com/f211e437-00c3-4ff2-8604-b5a94a3b8290/-/resize/300/" alt="Cardano" />

                                                    </div>

                                                    <h1>Cardano</h1>
                                                </div>



                                            </div>
                                        </div>


                                        <div id="carda" className="hero column col-11 col-xs-12 container">
                                            <div className="row">
                                                <div className="column">

                                                    <h5>We are exited about Cardano</h5>
                                                    <h5>The First blockchain protocol evolved out of a scientific philosophy and a research-first approach</h5>
                                                    <ul>
                                                        <li>Cardano is a public blockchain and a cryptocurrency project </li>
                                                        <li>Build from ground up by a large team of expert researchers and engineers from IOHK using peer reviewed academic papers </li>
                                                        <li>Cardano strives to become a social and economic decentralized system </li>
                                                        <li>Using the Ouroboros, Proof of Stake algorithm Cardano is 1000 times more decentralized then Bitcoin </li>
                                                        <li>Cardano is developing a smart contract platform that will outperform any cryptocurrency on the market. </li>
                                                        <li>With its treasury system Cardano will solve the governance/funding issue that other blockchain systems are having. </li>
                                                        <li>Scalability and interoperability of the network will be solved in the Basho era.</li>

                                                    </ul>
                                                </div>
                                                <div className="card">
                                                    <div className="card-image"><img className="img-responsive" src="" alt="" /></div>
                                                    <div className="card-header">
                                                        <div className="card-subtitle text-gray">Ouroboros Chronos: Proof-of-Stake </div>
                                                        <div className="card-title h5"><a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://eprint.iacr.org/2019/838.pdf">Read the Paper</a></div>
                                                        <br></br>
                                                        <div className="card-subtitle text-gray">Hydra: Fast Isomorphic State Channels</div>
                                                        <div className="card-title h5"><a className="btn btn-primary" href="#cards">Read the Paper</a></div>

                                                        {/* <div className="card-subtitle text-gray">Software and hardware</div> */}
                                                    </div>
                                                    <div className="card-body">Find more peer reviewed papers and learn more about IOHK </div>
                                                    <div className="card-footer"><a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://iohk.io/en/research/library/">IOHK Library</a> <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://iohk.io/en/research/researchers/">Researchers</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Collapsible Group Item #2
        </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Collapsible Group Item #3
        </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Cryptocurrencies
