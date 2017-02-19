(function (){
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', function ($scope){
    $scope.lunchItems = '';
    $scope.message = '';

    $scope.checkIfTooMuch = function (){
      var nonEmptyLunchItems = getNumberOfLunchItems($scope.lunchItems)
      if (nonEmptyLunchItems == 0){
        $scope.message = 'Empty';
      }
      else if (nonEmptyLunchItems > 3){
        $scope.message = 'Too much';
      }
      else {
        $scope.message = 'Enjoy!!'
      }
    };
  });

  // Getting Number of Non Empty Lunch items
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
