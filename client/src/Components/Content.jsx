import React, { Component } from 'react';
import { connect } from 'react-redux';

import loading from './load.gif'
import cpuController from '../Controllers/cpuController'
import networkController from '../Controllers/networkController'
class Content extends Component {

    componentDidMount(){
        this.props.dispatcher(cpuController.getCpuInformations());
        this.props.dispatcher(networkController.getNetworkInformations());
    }

    cpuRefresh() {
        this.props.dispatcher(cpuController.getCpuInformations());
    }

    networkRefresh() {
        this.props.dispatcher(networkController.getNetworkInformations());
    }

    render() {
        if (this.props.cpu.data.cpu === undefined) {
            return null;
        }
        if (this.props.network.data.network === undefined) {
            return null;
            
        }
        return (
            <div className='container-fluid mt-5'>
                <div className="row">
                    <div className="col-6">
                        <div className="card d-flex justify-content-center">
                            <h5 className="card-header">
                                Cpu
                            </h5>
                            <div className="card-body d-flex flex-column justify-content-center"
                                style={{ height: '60vh', overflowY: 'scroll' }} >
                                <div>
                                    <h3>Frequency: <span>{this.props.cpu.data.cpu.freq}</span></h3>
                                    <h3>Percent: <span>{this.props.cpu.data.cpu.percent}</span></h3>
                                    <h3>User Times: <span>{this.props.cpu.data.cpu.userTimes[1]}</span></h3>
                                    <h3>System Times: <span>{this.props.cpu.data.cpu.systemTimes[1]}</span></h3>
                                    <h3>Idle Times: <span>{this.props.cpu.data.cpu.idleTimes[1]}</span></h3>
                                </div>
                            </div>
                            <button className="btn btn-primary w-25 ml-auto mr-auto" onClick={() => this.cpuRefresh()}>
                                {this.props.cpu.progress ? <img src={loading} width='25' height='20' /> : 'Refresh'}
                            </button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card d-flex justify-content-center">
                            <h5 className="card-header">
                                Network
                            </h5>
                            <div className="card-body d-flex flex-column justify-content-center"
                                style={{ height: '60vh', overflowY: 'scroll' }}>
                                <div>
                                    <h3>Recv Bytes: <span>{this.props.network.data.network.counters}</span></h3>
                                    {/* <h3>Connections: <span>{this.props.network.data.network.connections}</span></h3> */}
                                    {/* <h3>Address: <span>{this.props.network.data.network.addrs}</span></h3> */}
                                </div>
                            </div>
                            <button className="btn btn-primary w-25 ml-auto mr-auto" onClick={() => this.networkRefresh()}>
                                {this.props.network.progress ? <img src={loading} width='25' height='20' /> : 'Refresh'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    cpu: state.cpu,
    network: state.network,
});
const mapDispatchToProps = (dispatch) => ({
    dispatcher(action) {
        return dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
