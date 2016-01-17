'use strict';

angular.module('testApp', []);

angular.module('testApp').controller('TaskListCtrl', function($scope){

  $scope.taskList = [];

  $scope.index = '';

  $scope.taskObj = {
    name: '',
    description: '',
    date: '',
    index: ''
  };

  var Task = function (obj) {
    this.name = obj.taskName;
    this.desc = obj.taskDesc;
    this.date = new Date();
  };


  var RevTask = function (obj) {
    this.name = $scope.taskObj.name;
    this.desc = $scope.taskObj.description;
    this.date = $scope.taskObj.date;
    this.index = $scope.taskObj.date;
  };

  $scope.addTask = function (task) {
    let x = new Task(task);
    $scope.taskList.push(x);
    $scope.taskObj.index = ($scope.taskList.length - 1);

  };

// When existing task is clicked
  $scope.edit = function (task, index) {
    $scope.taskObj = {
      name: $scope.taskList[index].name,
      description: $scope.taskList[index].desc
    };
    console.log($scope.taskList[index]);
    console.log($scope.taskObj);


    $scope.taskNameInput = task.taskName;
    $scope.taskDesc = task.taskDesc;
    $scope.index = index;


    // $scope.taskObj = {
    //   name: task.taskName,
    //   description: task.taskDesc,
    //   date: new Date()
    // };
  };

  $scope.editSubmit = function(task) {
    let x = new RevTask(task);
    $scope.taskList[$scope.taskObj.index] = x;
    console.log($scope.taskList);
  };

  $scope.deleteTask = function(task) {
    console.log($scope.taskList[0]);
    $scope.taskList.splice($scope.taskObj.index,1);
    console.log($scope.taskList);
    
  };
	




  var taskList = this;
	return taskList;




});
