import {hashHistory} from "react-router";




function serialize (obj, prefix) {
	let str = [];
	for(let p in obj) {
		if (obj.hasOwnProperty(p)) {
			let k = prefix ? prefix + '[' + p + ']' : p, v = obj[p];
			str.push(typeof v === 'object' ?
				serialize(v, k) :
				encodeURIComponent(k) + '=' + encodeURIComponent(v));
		}
	}
	return str.join('&');
}



export function setNewTask (payload) {

	return (dispatch) => {

		fetch('http://localhost/sampleASE/api/services/public/task', {

			method :'POST',
			headers: {
				'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			body: serialize({...payload})
		}).then((response) => {
			return response.json();
		}).then((json)=> {

			payload.id =  json.taskId

			dispatch ({

				"type" : 'ADD_NEW_TASK',
				payload


			});
			hashHistory.push('tasks');
			

		}).catch(() => {
			
		});
				

	};



}

function parseInput (json) {

	return json.map ((task) => {


		return {
			id : task.task_id,
			taskName : task.taskName,
			taskAssignee : task.taskAssignee
		}


	});
}

export function fetchTasks () {

	return (dispatch) => {

		fetch('http://localhost/sampleASE/api/services/public/tasks')
		.then((response)=> {

			return response.json();

		}).then ((json) => {

			console.log(json);

			dispatch({


				"type" : "SET_INITIAL_TASKS",
				"payload" : parseInput(json)
			});


		})
		.catch();



	};
}