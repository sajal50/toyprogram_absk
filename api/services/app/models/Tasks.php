<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class Tasks extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'tasks';

	public static function getAllTasks () {


		return Tasks::get()->toArray();




	}

	public static function addTask ($taskName, $taskAssignee) { 


		return Tasks::insertGetId(array ('taskName' => $taskName , 'taskAssignee' => $taskAssignee));

		


	}

}
