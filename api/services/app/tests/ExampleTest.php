<?php

class ExampleTest extends TestCase {

	/**
	 * A basic functional test example.
	 *
	 * @return void
	 */
	public function testGetAllTasks()
	{
		$response = $this->call('GET','/tasks');

		$responeArray = (array)$response->getData();
		$flag = true;

		foreach ($responeArray as $value) {

			if (!array_key_exists('task_id', $value) ) {

				$flag = false;
			} 
		} 
		



        $this->assertEquals(true, $flag);

		
	}
	public function testSetNewTask()
	{
		$response = $this->call('POST','/task', array('taskName' => 'test',  "taskAssignee" => 'testing' ));

		$responeArray = (array)$response->getData();
		$flag = true;

		if (!array_key_exists('taskId', $responeArray)) {

			$flag = false;

		}		



        $this->assertEquals(true, $flag);

		
	}

}
