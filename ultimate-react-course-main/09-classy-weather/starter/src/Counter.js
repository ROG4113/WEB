import React from "react";

class Counter extends React.Component{
  constructor(props){
    super(props);

    this.state={count:0};
    this.handleIncrement=this.handleIncrement.bind(this);
    this.handleDecrement=this.handleDecrement.bind(this);
  }

  handleIncrement(){
    this.setState(cur=>{
      return {count:cur.count+1};
    });
  }
  handleDecrement(){
    this.setState(cur=>{
      return {count:cur.count-1};
    });
  }

  render(){
    const date=new Date("nov 04 2027");
    date.setDate(date.getDate()+this.state.count);

    return(
    <div>
      <button onClick={this.handleDecrement} >-</button>
      <span>{date.toDateString()} [{this.state.count}]</span>
      <button onClick={this.handleIncrement} >+</button>
    </div>
    );
  }
}

export default Counter;