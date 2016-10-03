import React from 'react';

import TaskAddForm from './TaskAddForm/TaskAddForm.js'

class TaskComponent extends React.Component {

	constructor (props) {

		super(props);

		
		

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

	render () {

		let {tasks} = this.props;

		let table = this.getTasksRender(tasks);

		let {taskActions} = this.props;
		let {setNewTask} = taskActions;
		return (
			<div>
				<div className = 'col-md-6'>

				{table}


				</div>

				<TaskAddForm setNewTask = {setNewTask} />
				
			</div>


			);



	}



}

export default TaskComponent;