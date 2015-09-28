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
      template:'<span class="button btn btn-primary" ng-click="warn()">Alert!</span>'
  }
});

courseRoster.directive("debug", function ($compile) {
  return {
    terminal: true,
    priority: 1000000,
    link: function(scope, element) {
      var clone = element.clone();
      element.attr("style", "color:red");
      clone.removeAttr("debug");
      var clonedElement = $compile(clone)(scope);
      element.after(clonedElement);
    }
  }
});
