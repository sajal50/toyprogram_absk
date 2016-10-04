<?php

class TaskController extends BaseController {

	public function getTasks () {

		
		$tasks = Tasks::getAllTasks();
		return Response::json($tasks);

	}

	public function addTask () {

		$payload = Input::all();
		$taskId = Tasks::addTask($payload['taskName'], $payload['taskAssignee']);
		return Response::json(array('taskId'=>$taskId));
	}

}
