import React, { Component } from "react";
import { serachReducer } from '../redux.js';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './../style/search.css'


class SearchMain extends Component {
  constructor(props) {
    super(props);
    this.state={
                serachKey:""
               }
    };
  
  handleChange=(e)=>{

    this.setState({[e.target.name]:e.target.value});


  }
  render() {
      console.log(this.props.searchItems);
      const displayList=this.props.searchItems.map((items,index)=>{
       if(this.state.serachKey!==""){
           if(items.name.includes(this.state.serachKey)){
            return <div ><Link className="linkstyle" to={`/searchdetails/${items.name}`} >{items.name}</Link></div>
           }
       }else{
            return <div ><Link className="linkstyle" to={`/searchdetails/${items.name}`} >{items.name}</Link></div>
       }
       return null;
      })
   
    return (
        <div className="outerdiv">
            <div>
                <input className="inputboxstyle" onChange={this.handleChange} style={{ width: "150px", display: "inline-block" }} type="text" name="serachKey" placeholder="Enter Task" />
                <button className="buttonstyle" type="button" >Search</button>
            </div>
            <div className="displaybox">
            {displayList}
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
    searchItems: state.searchItems
})

const mapDispatchToProps = (dispatch) => ({
    serachReducer: (id) => dispatch(serachReducer(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMain);