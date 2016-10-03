import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import TaskContainer from './containers/TaskContainer/TaskContainer.js'
import AddTaskContainer from './containers/AddTaskContainer/AddTaskContainer.js'
import store from './store/store.js';


ReactDOM.render(

	<Provider store= {store}>

		<Router history={hashHistory} >

			<Route path = '/'>

				<Route path = "tasks" component = {TaskContainer} />
				<Route path = "addTask" component = {AddTaskContainer} />


			</Route>

		</Router>

	</Provider>

	

,document.getElementById('app'));