import initialState from '../../initialState/initialState.js';


const basicInfo = (state = initialState.tasks, action) => {


	switch (action.type) {


		case 'ADD_NEW_TASK' : 


		return addNewTask(state, action);

	

		default :
		return state;
	

	}

	
	
};


let addNewTask = (state, action) => {

	let taskList = state.slice();
	taskList.push(action.payload);
	return taskList;



};
export default basicInfo;
