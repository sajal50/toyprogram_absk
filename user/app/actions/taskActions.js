
export function setNewTask (payload) {

	return (dispatch, getState) => {


		let newId = getState().tasks[getState().tasks.length - 1].id + 1;

		payload.id = newId;

		
		dispatch ({

			"type" : 'ADD_NEW_TASK',
			payload


		});

	};



}