class Prices extends React.Component{
    state = {
        currency: 'USD'
    }

    render() {

        let list = '';

        if(this.state.currency === 'USD'){
            list = <li className="list-group-item">
            Bitcoin rate for {this.props.bpi.USD.description} : <span className="badge badge-primary">{this.props.bpi.USD.code}</span> <strong>{this.props.bpi.USD.rate}</strong></li>
        } else if(this.state.currency === 'GBP'){
            list = <li className="list-group-item">
            Bitcoin rate for {this.props.bpi.GBP.description} : <span className="badge badge-primary">{this.props.bpi.GBP.code}</span> <strong>{this.props.bpi.GBP.rate}</strong></li>
        } else if(this.state.currency === 'EUR'){
         list = <li className="list-group-item">
            Bitcoin rate for {this.props.bpi.EUR.description} : <span className="badge badge-primary">{this.props.bpi.EUR.code}</span> <strong>{this.props.bpi.EUR.rate}</strong></li>
        }
            


        return(
            <div className="row">
                <div className="col-lg-6 colmd-6 col-sm-12 col-xs-12">
                    <ul className="list-group">
                        {list}
                    </ul>
                </div>
                <div className="col-lg-6 colmd-6 col-sm-12 col-xs-12">
                    <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
                        <option value="USD">USD</option>
                        <option value="GBP">GMP</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
            </div>)
    }
}
export default Prices;