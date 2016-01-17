'use strict';

angular.module('testApp', []);

angular.module('testApp').controller('TaskListCtrl', function($scope){

  $scope.taskList = [];

  $scope.index = '';

  $scope.taskObj = {
    name: '',
    description: ''
  };

  var Task = function (obj) {
    this.name = obj.taskName;
    this.desc = obj.taskDesc;
    this.date = new Date();
  };

// $scope.name isn't defined
  var RevTask = function (obj) {
    this.name = $scope.taskObj.name;
    this.desc = $scope.taskObj.description;
  };

  $scope.addTask = function (task) {
    let x = new Task(task);
    $scope.taskList.push(x);
    console.log($scope.taskList);

  };

// When existing task is clicked
  $scope.edit = function (task, index) {
    $scope.taskNameInput = task.taskName;
    $scope.taskDesc = task.taskDesc;
    $scope.index = index;
    console.log($scope.taskList);


    $scope.taskObj = {
      name: task.taskName,
      description: task.taskDesc
    };
  };

  $scope.editSubmit = function(task) {
    let x = new RevTask(task);
    $scope.taskList[$scope.index] = x;
    console.log($scope.taskObj);
    console.log($scope.index);

  };
	




  var taskList = this;
	return taskList;




});
