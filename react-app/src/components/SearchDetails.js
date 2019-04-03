import React, { Component } from "react";

import { serachReducer } from '../redux.js';
import { connect } from 'react-redux';


class SearchDetails extends Component {
  constructor(props) {
    super(props);
    };
  

  render() {
      const displayDetails=this.props.searchItems.map((items,index)=>{
       if(items.name=== this.props.match.params.name){
         return <div>
                 <p className="namestyle">{items.name}</p>
                 <p>City:{items.City}</p>
                 <p>Industry: {items.Industry}</p>
                 <p>Hobbies:{items.Hobbies}</p>
                 <p>Email:{items.Email}</p>
                 </div>
       }
       return null;       

      })
   
    return (
        <div className="displaydetailsbox">{displayDetails}</div>
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
)(SearchDetails);
