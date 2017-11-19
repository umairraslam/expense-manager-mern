//client/components/tabs/monthTabsRouter.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
class MonthTabsRouter extends React.Component {
 constructor(){
  super();
  this.state={style:{'font-size': '10px'}}
 }
render(){
  if(this.props.tabId == 'All'){
   return <Link to={{pathname: '/', search: '?month=All&year='+this.props.year}} >
     <p style={this.state.style}>Show All</p>
    </Link>
  }
else{
   return <Link to={{pathname: '/', search: '?month='+this.props.tabId + '&year='+this.props.year }} >
     <p style={this.state.style}>{this.props.tabId} {this.props.year}</p>
    </Link>
  }
}
}
export default MonthTabsRouter;
