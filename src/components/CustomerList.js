import React from 'react'
import { connect } from 'react-redux'




class CustomerList extends React.Component{





    render(){
        console.log(this.props)
        return(
            <div>Hello</div>
        )
    }
}

const reduxState = state => {
    return {
        
    }
}
export default connect(reduxState, null)(CustomerList)
//Connect is a high order function
//A High order function is a function that returns a function

//the returned function expects a component as the argument
//the returned function will then return a connected version of our compoenent

//Connect takes in two arguments, functions
//one will read state, the other will tell us how we can talk to the store