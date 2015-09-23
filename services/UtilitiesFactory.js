//UtilitiesFactory finds an object in a collection by an id.
//In a separate factory as it could theoretically be extended to another type of object
courseRoster.factory('UtilitiesFactory', function() {
  return {
    findById: function(collection, id) {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i].id == id){
          console.log(collection[i]);
          return collection[i];
        }
      }
        console.log("null");
        return null;

    }
}
});
