var service = angular.module('msService', []);

service.factory('service', function () {

    return {

        track: {

            title: "chandalier",
            artist: "sia",
            label: "foxtrot records",
            genre: "Dance",
            number1: "true",
            speed: "medium"

        }//end track object

    }//end return

});