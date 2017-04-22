(function(){
    'use strict'
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope){
        $scope.checkNumberOfItem = function(){
            var count = 0;
            var numberOfitem = $scope.item.split(',');
            for(var i =0; i<numberOfitem.length;i++){
                if(numberOfitem[i] !== "")
                    count++;
            }
            if(count === 0)
                $scope.message= "Please enter data first";
            else if(count <=3)
                $scope.message = "Enjoy!";
            else
                $scope.message = "Too much!";

        }
        
    };
})()