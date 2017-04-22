(function(){
    'use strict'
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope){

        $scope.checkNumberOfItem = function(){
            var count = 0;
            if($scope.item != undefined){
                var numberOfitem = $scope.item.split(',');
                for(var i =0; i<numberOfitem.length;i++){
                    if(numberOfitem[i].trim().length !=0){
                        count++;
                    }
                } 
                if(count === 0){
                    $scope.message= "Please enter data first";
                    document.getElementById('msdDiv').style.color="red";
                    document.getElementById('lunch-menu').style.borderColor="red";
                }
               else if(count <=3){
                $scope.message = "Enjoy!";
                document.getElementById('msdDiv').style.color="green";
                document.getElementById('lunch-menu').style.borderColor="green";   
                }
                else{
                    $scope.message = "Too much!";
                    document.getElementById('msdDiv').style.color="green";
                    document.getElementById('lunch-menu').style.borderColor="green";
                }
                }
            else{
                $scope.message= "Please enter data first";
                $scope.message.fontcolor("red");
                document.getElementById('msdDiv').style.color="red";
                document.getElementById('lunch-menu').style.borderColor="red";
            }
        }
        
    };
})()