import React from 'react';
import {connect} from 'react-redux';
import {setNewTask} from '../../actions/taskActions.js';
import AddTaskComponent from '../../components/AddTaskComponent/AddTaskComponent.js';



let mapStateToProps = (state) => {

	return {

		

		
	};	
};

let mapDispatchToProps = (dispatch) => {

	return {

		

		"setNewTask" : (payload) => {

			dispatch (setNewTask(payload));


			
		}


		
	}


};


export default connect(mapStateToProps, mapDispatchToProps)(AddTaskComponent);