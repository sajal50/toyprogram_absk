import React from 'react';
import {hashHistory} from 'react-router';

class TaskComponent extends React.Component {

	constructor (props) {

		super(props);

		this.onAddTaskClickHandler = this.onAddTaskClickHandler.bind(this);
		

	}

	
	getTasksRender (tasks) {


		let taskRows = tasks.map((task) => {

			return (

				<tr key = {task.id}> 

					<td>
					{task.id}
					</td>

					<td>
					{task.taskName}
					</td>

					<td>

					{task.taskAssigned}
					</td>


				</tr>
				);


		});

		

		return (

			<table className = "table table-bordered">
				<thead>
					<tr>
						<th>
						ID

						</th>
						<th>
						
						Task Name

						</th>
						<th>
						
						Task Assigned to

						</th>
					</tr>
				</thead>
				<tbody>
				{taskRows}
				</tbody>

				
			</table>

			);



	}

	onAddTaskClickHandler () {

		console.log("being clicked");
		hashHistory.push('addTask');


	}

	render () {

		let {tasks} = this.props;

		let table = this.getTasksRender(tasks);
		
		return (
			<div>
				<div className = 'col-md-6'>

				{table}


				</div>

				<input type = 'button' className = 'btn btn-primary' onClick = {this.onAddTaskClickHandler} value = "Add Task" />
				
			</div>


			);



	}



}

export default TaskComponent;