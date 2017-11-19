//client/components/tabs/monthTabs.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs } from 'react-bootstrap'
import MonthTabsRouter from './monthTabsRouter'
import YearTabsRouter  from './yearTabsRouter'
class MonthTabs extends React.Component {
 constructor(){
  super();
  this.state = {activeTab:''};
  this.handleSelect = this.handleSelect.bind(this);
}
componentWillReceiveProps(nextProps) {
    this.setState({activeTab:this.props.year+'-'+nextProps.monthlyActiveTab});
  }
handleSelect(selectedTab) {
     this.setState({
       activeTab: selectedTab
     });
 }
render(){
  return <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
            <Tab eventKey={this.props.year+'-All'} title={<MonthTabsRouter tabId='All' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Jan'} title={<MonthTabsRouter tabId='Jan' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Feb'} title={<MonthTabsRouter tabId='Feb' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Mar'} title={<MonthTabsRouter tabId='Mar' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Apr'} title={<MonthTabsRouter tabId='Apr' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-May'} title={<MonthTabsRouter tabId='May' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Jun'} title={<MonthTabsRouter tabId='Jun' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Jul'} title={<MonthTabsRouter tabId='Jul' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Aug'} title={<MonthTabsRouter tabId='Aug' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Sep'} title={<MonthTabsRouter tabId='Sep' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Oct'} title={<MonthTabsRouter tabId='Oct' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Nov'} title={<MonthTabsRouter tabId='Nov' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Dec'} title={<MonthTabsRouter tabId='Dec' year={this.props.year}/>}></Tab>
    </Tabs>
}
}
export default MonthTabs;
