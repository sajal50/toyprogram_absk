import {hashHistory} from "react-router";
export function setNewTask (payload) {

	return (dispatch, getState) => {


		let newId = getState().tasks[getState().tasks.length - 1].id + 1;

		payload.id = newId;

		hashHistory.push('tasks');
		dispatch ({

			"type" : 'ADD_NEW_TASK',
			payload


		});

	};



}