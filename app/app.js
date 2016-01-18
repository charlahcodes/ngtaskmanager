'use strict';

var jq = jQuery.noConflict(true);

jq(document).ready(function() {
    jq(document).foundation();
})

jq('.closeButton').click(function(){
  jq('#deleteModal').foundation('reveal', 'close');
});

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
    if (task === undefined) {
      alert("Please complete all fields.");
    } 
    else if (task.taskName === undefined || task.taskDesc === undefined || task.taskType === undefined) {
      alert("Please complete all fields.");
    } 
    else {
      let x = new Task(task);
      $scope.taskList.push(x);
      $scope.taskObj.index = ($scope.taskList.length - 1);
      $scope.haveTasks = true;
      $scope.task={};
      $scope.newTaskForm.$setPristine();
      $scope.newTaskForm.$setUntouched();
    };
  };

// When existing task is clicked
  $scope.edit = function (task, index) {
    $scope.taskObj = {
      name: $scope.taskList[index].name,
      description: $scope.taskList[index].desc,
      type: $scope.taskList[index].type
    };

    $scope.taskNameInput = task.taskName;
    $scope.taskDesc = task.taskDesc;
    $scope.index = index;
    $scope.showEdit = true;
    $scope.showAdd = false;
  };

  $scope.editSubmit = function(task) {
    if ($scope.taskObj === undefined) {
      alert("Please complete all fields.");
    } 
    else if ($scope.taskObj.name === '' || $scope.taskObj.description === '' || $scope.taskObj.type === '') {
      alert("Please complete all fields.");
    } 
    else {
      let x = new RevTask(task);
      $scope.taskList[$scope.index] = x;
      $scope.showEdit = false;
      $scope.showAdd = true;
    };
  };

  $scope.deleteTask = function(task) {

    $scope.taskList.splice($scope.index,1);   
    if ($scope.taskList.length === 0) {
      $scope.haveTasks = false;
    }; 
    $scope.showEdit = false;
    $scope.showAdd = true;
  };
	
  var taskList = this;
	return taskList;
});
