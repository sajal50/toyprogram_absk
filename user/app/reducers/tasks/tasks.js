import initialState from '../../initialState/initialState.js';



const tasks = (state = initialState.tasks, action) => {


	switch (action.type) {


		case 'ADD_NEW_TASK' : 


		return addNewTask(state, action);

		case 'SET_INITIAL_TASKS' : 


		return setInitialTasks(state, action);
	

		default :
		return state;
	

	}

	
	
};


let setInitialTasks = (state, action) => {

	let taskList = state.slice();
	taskList = action.payload.slice();
	return taskList;


};

let addNewTask = (state, action) => {

	let taskList = state.slice();
	taskList.push(action.payload);
	return taskList;



};
export default tasks;
