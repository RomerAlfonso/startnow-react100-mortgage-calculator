import React from 'react';

export default class App extends React.Component {
 constructor(props){
   super(props);
   this.state= {
     balance : 0,
     rate: 0,

     term:15,
     payment:"" 
    };
  
     this.handleChange = this.handleChange.bind(this);
     this.handleClick = this.handleClick.bind(this);

};
  //handlechange() listening and grabbing input values, set state with new values
//handleclick() calculate  monthly mortgage render to the screen
handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({
    [name]: parseFloat(value)
  });
}

handleClick(event) {
  event.preventDefault();
let final = "$" +this.calculate(this.state.balance, this.state.rate,this.state.term) +" "+ "Monthly Payment";
this.setState({ payment:final})
}


  
  //calculate logic method. function
calculate (balance,rate,term) {
 rate = rate / 100 /12
 term *=  12;
let top = Math.pow(1 + rate, term) - 1;
let bot= Math.pow(1 + rate, term) * rate;
let cal= (balance/ (top/bot)).toFixed(2);

return cal;
}


  // your Javascript goes here
  render() {
    return (
      <form className='container'>
        {/* your JSX goes here */}
        <h3>Mortgage Calculator</h3>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Loan Balance</label>
              <div className="col-sm-10">
                <input 
                id="balance"
                type="number" 
                //value = {this.state.balance}
                onChange={this.handleChange}
                className="form-control"  placeholder="Balance"
                name="balance"/>
            </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Interest Rate(%)</label>
              <div className="col-sm-10">
                <input id="rate"
                type="number" 
                //value = {this.state.rate}
                onChange={this.handleChange}
                className="form-control" placeholder="Rate"
                name='rate'/>
          </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 control-label">Loan Terms (years)</label>
                <div className="col-sm-10">
                  <select className="form-control" name="term" onChange={this.handleChange}>
                    <option value="15">15</option>
                    <option value="30">30</option>
                  </select>
                </div>
              </div>
                
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" name="submit" className="btn btn-primary"
                    onClick={this.handleClick} >Calculate</button>
                  </div>
                </div>
      </form>
      <div id="output">{this.state.payment}</div>
      </form>
              );
  
  }
}
