(function (){
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController)

  LunchCheckController.$inject = ['$scope']
  function LunchCheckController ($scope){
    $scope.lunchItems = '';
    $scope.message = '';

    $scope.checkIfTooMuch = function (){
      var nonEmptyLunchItems = getNumberOfLunchItems($scope.lunchItems)
      if (nonEmptyLunchItems == 0){
        $scope.message = 'Please Enter Data First';
      }
      else if (nonEmptyLunchItems > 3){
        $scope.message = 'Too much';
      }
      else {
        $scope.message = 'Enjoy!!'
      }
    };
  };

  // Getting Number of Non Empty Lunch items
  // , , is considered as an item.
  // ,, is not considered any item.
  function getNumberOfLunchItems (lunchitems){
    var lunchItemsArray = lunchitems.split(',')
    var totalLunchItems = lunchItemsArray.length

    for (var i=0; i< totalLunchItems; i++){
      if (!lunchItemsArray[i]) {
          lunchItemsArray.pop(i);
      }
    }
    var realLunchItems = lunchItemsArray.length
    return realLunchItems
  };


})();
