/**
 * Created by Admin on 19.12.13.
 */
angular.module('choreApp',[]).directive('kid',function(){
     return{
         restrict: "E",
         template: "<input type='text' ng-model='chore2'>{{chore}}" +
             "<button type='button' ng-click=\"done({chore:chore2})\">Done</button> ",
         scope:{
             done: "&"
         }
     }

    }
)

