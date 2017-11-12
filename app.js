(function () {

    angular.module('LunchCheck', [])

    .controller('LunchController', function($scope) {

        $scope.meal = "";
        $scope.result = "";
        $scope.getResult = function() {
            var fragments = $scope.meal.split(',');

            var found = 0;
            for(var index = 0; index < fragments.length; index++) {
                if(fragments[index].trim() != '') {
                    found++;
                }
            }
            if(found == 0) {
                $scope.result = "Please enter data first";
            }
            else if(found <= 3) {
                $scope.result = "Enjoy!";
            }
            else {
                $scope.result = "Too much!";
            }
        }
    });

})();