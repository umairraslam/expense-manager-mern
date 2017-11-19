//client/components/Update.js
import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
var querystring = require('querystring');
class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      description: '',
      amount: '',
      month: '',
      year: '',
      messageFromServer: '',
      modalIsOpen: false
    }
this.update = this.update.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
}
componentDidMount() {
    this.setState({
      id: this.props.expense._id,
      description: this.props.expense.description,
      amount: this.props.expense.amount,
      month: this.props.expense.month,
      year: this.props.expense.year
    });
  }
componentWillReceiveProps(nextProps){
    this.setState({
      id: nextProps.expense._id,
      description: nextProps.expense.description,
      month:nextProps.expense.month,
      year:nextProps.expense.year
    })
  }
openModal() {
    this.setState({
      modalIsOpen: true
    });
  }
closeModal() {
    this.setState({
      modalIsOpen: false,
      messageFromServer: ''
    });
  }
handleSelectChange(e) {
    if (e.target.name == "month") {
      this.setState({
        month: e.target.value
      });
    }
    if (e.target.name == "year") {
      this.setState({
        year: e.target.value
      });
    }
  }
handleTextChange(e) {
    if (e.target.name == "description") {
      this.setState({
        description: e.target.value
      });
    }
if (e.target.name == "amount") {
      this.setState({
        amount: e.target.value
      });
    }
  }
onClick(e) {
    this.update(this);
  }
update(e) {
    axios.post('/update',
      querystring.stringify({
        _id: e.state.id,
        description: e.state.description,
        amount: e.state.amount,
        month: e.state.month,
        year: e.state.year
      }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(function(response) {
      e.setState({
        messageFromServer: response.data
      });
});
  }
render() {
    if(this.state.messageFromServer == ''){
      return (
        <div>
          <Button bsStyle="warning" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-edit"></span></Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Add Expense"
            className="Modal">
<Link to={{pathname: '/', search: '?month='+this.state.month+'&year='+this.state.year }} style={{ textDecoration: 'none' }}>
            <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
          </Link><br/>
<fieldset>
            <label for="description">Description:</label><input type="text" id="description" name="description" value={this.state.description} onChange={this.handleTextChange}></input>
            <label for="amount">Amount:</label><input type="number" id="amount" name="amount" value={this.state.amount} onChange={this.handleTextChange}></input>
            <label for="month">Month:</label><select id="month" name="month" value={this.state.month} onChange={this.handleSelectChange}>
                      <option value="Jan" id="Jan">January</option>
                      <option value="Feb" id="Feb">Febrary</option>
                      <option value="Mar" id="Mar">March</option>
                      <option value="Apr" id="Apr">April</option>
                      <option value="May" id="May">May</option>
                      <option value="Jun" id="Jun">June</option>
                      <option value="Jul" id="Jul">July</option>
                      <option value="Aug" id="Aug">August</option>
                      <option value="Sep" id="Sep">September</option>
                      <option value="Oct" id="Oct">October</option>
                      <option value="Nov" id="Nov">November</option>
                      <option value="Dec" id="Dec">December</option>
                </select>
            <label for="year">Year:</label><select id="year" name="year" value={this.state.year} onChange={this.handleSelectChange}>
                      <option value="2015" id="17">2015</option>
                      <option value="2016" id="17">2016</option>
                      <option value="2017" id="17">2017</option>
                      <option value="2018" id="18">2018</option>
                      <option value="2019" id="19">2019</option>
                      <option value="2020" id="20">2020</option>
                </select>
          </fieldset>
<div className='button-center'>
              <br/>
              <Button bsStyle="warning" bsSize="small" onClick={this.onClick}>Update</Button>
            </div>
          </Modal>
        </div>
      )
    }
    else{
      return (
        <div>
         <Button bsStyle="warning" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-edit"></span></Button>
         <Modal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           contentLabel="Add Expense"
           className="Modal">
<div className='button-center'>
              <h3>{this.state.messageFromServer}</h3>
              <Link to={{pathname: '/', search: '?month='+this.state.month+'&year='+this.state.year}} style={{ textDecoration: 'none' }}>
                <Button bsStyle="success" bsSize="mini" onClick={this.closeModal}>Close the Dialog</Button>
              </Link>
            </div>
          </Modal>
        </div>
        )
      }
  }
}
export default Update;
