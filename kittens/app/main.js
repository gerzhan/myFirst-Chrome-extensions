/**
 * Created by Admin on 19.12.13.
 */
angular.module('mainApp',['ngResource','choreApp','timer']).controller('TaskController',[
    '$scope',function($scope){

        $scope.onClickDone = function(chore){
            console.log(chore);
            alert(chore);
        }
    }
]);