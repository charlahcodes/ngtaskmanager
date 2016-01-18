'use strict';

angular.module('testApp', []);

angular.module('testApp').controller('TaskListCtrl', function($scope){

  $scope.taskList = [];

  $scope.types = ["Bug Fix", "Feature Request", "Other"];

  $scope.index = '';

  $scope.taskObj = {
    name: '',
    description: '',
    date: '',
    index: '',
    type: ''
  };

  $scope.showEdit = false;
  $scope.showAdd = true;
  $scope.haveTasks = false;

  var Task = function (obj) {
    this.name = obj.taskName;
    this.desc = obj.taskDesc;
    this.type = obj.taskType;
    this.date = new Date();
  };


  var RevTask = function (obj) {
    this.name = $scope.taskObj.name;
    this.desc = $scope.taskObj.description;
    this.date = new Date();
    this.index = $scope.taskObj.date;
    this.type = $scope.taskObj.type
  };

  $scope.addTask = function (task) {
    let x = new Task(task);
    $scope.taskList.push(x);
    $scope.taskObj.index = ($scope.taskList.length - 1);
    $scope.haveTasks = true;
  };

// When existing task is clicked
  $scope.edit = function (task, index) {
    $scope.taskObj = {
      name: $scope.taskList[index].name,
      description: $scope.taskList[index].desc
    };

    $scope.taskNameInput = task.taskName;
    $scope.taskDesc = task.taskDesc;
    $scope.index = index;
    $scope.showEdit = true;
    $scope.showAdd = false;
  };

  // $scope.editSubmit = function(task) {
  //   let x = new RevTask(task);
  //   $scope.taskList[$scope.taskObj.index] = x;
  // };

  $scope.editSubmit = function(task) {
    let x = new RevTask(task);
    $scope.taskList[$scope.index] = x;
    console.log($scope.taskObj);
    console.log($scope.index);
  };




  $scope.deleteTask = function(task) {
    console.log($scope.index);


    $scope.taskList.splice($scope.index,1);   
    if ($scope.taskList.length === 0) {
      $scope.haveTasks = false;
    }; 
  };
	
  var taskList = this;
	return taskList;
});
