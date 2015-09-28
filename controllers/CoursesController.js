//Declaring courses controller and its scope and connecting with CoursesFactory:
courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, CoursesFactory){
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;

  $scope.alertAlert = function () {
    alert("Alert alert!");
  }


});
