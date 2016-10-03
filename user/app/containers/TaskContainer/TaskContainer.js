import React from 'react';
import {connect} from 'react-redux';
import {setNewTask} from '../../actions/taskActions.js';
import TaskComponent from '../../components/TaskComponent/TaskComponent.js';



let mapStateToProps = (state) => {

	return {

		"tasks" : state.tasks

		
	};	
};

let mapDispatchToProps = (dispatch) => {

	return {

		"taskActions" : {

			"setNewTask" : (payload) => {

				dispatch (setNewTask(payload));


			}
		}


		
	}


};


export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent);