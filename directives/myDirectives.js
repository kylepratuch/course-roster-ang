courseRoster.directive("hometext", function() {
  return {
    template: "Back to the beginning"
  }
});

courseRoster.directive("changeClass", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      element.toggleClass(attrs.changeClass);
    });
  }
});

courseRoster.directive("sampleCourse", function(){
  return {
    scope:{
      course: "@"
    },
    template: '<div>{{course}}</div>'
  }
});

courseRoster.directive("alert", function() {
  return {
    scope:{
      warn:"&"
    },
      template:'<div class="button" ng-click="warn()">Alert!</div>'
    
  }
});
