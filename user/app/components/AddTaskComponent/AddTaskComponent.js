import React from 'react';

class AddTaskComponent extends React.Component {

	constructor (props) {

		super(props);

		this.onClickAdd = this.onClickAdd.bind(this);
		

	}

	onClickAdd () {

		this.props.setNewTask ({

			"taskName" : this.taskNameRef.value,
			"taskAssigned" : this.assignedToRef.value
		});
		
		this.clearInputs();
	}

	clearInputs () {

		this.taskNameRef.value = '';
		this.assignedToRef.value = '';
	}

	render () {

		

		return (
			<div className = 'col-md-6'>
					
					<div className = 'col-md-12 text-center'>
						Add a task
					</div>

					<div>
						
						Task <br/>
						<input ref = {(ref) => {this.taskNameRef = ref} } type = "text" />
						<br/>
						Assigned To <br/>
						<input ref = {(ref) => {this.assignedToRef = ref}} type = "text" />
						<br/>
						<br/>
						<div>
							<input onClick = {this.onClickAdd} value = "Add" type = "button" className = 'btn btn-primary' />
						</div>
					</div>



			</div>

			);



	}



}

export default AddTaskComponent;