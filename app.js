//Declaring angular module and passing in ui.router dependency:
var courseRoster = angular.module('courseRoster', ['ui.router']);

//The UI's 'home', 'courses', and 'courses.students' states w/ URL and partials/template:
courseRoster.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url:"",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
        controller: 'HeadersCtrl',
      },
      'body': {
        templateUrl: "partials/home.html",
      },
    }
  });

  $stateProvider.state('courses', {
    url:"/courses",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
        controller: 'HeadersCtrl',
      },
      'body': {
        templateUrl: "partials/courses.html",
        controller: 'CoursesCtrl'
      },
    }
  });

  //This is a nested state; 'students' is nested in 'courses':
  $stateProvider.state('courses.students', {
    url: "/:courseId",
    views: {
      'header' : {
        templateUrl: 'partials/header.html',
        controller: 'HeadersCtrl',
      },
      'body': {
        templateUrl: "partials/courses.students.html",
        controller: 'StudentsCtrl'
      },
    }
  });
});
