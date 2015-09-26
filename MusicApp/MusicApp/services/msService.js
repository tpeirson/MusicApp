var service = angular.module('msService', []);

service.factory('service', function () {

    return {

        track: {

            title: "chandalier",
            artist: "sia",
            label: "foxtrot records",
            genre: "Pop",
            number1: true,
            speed: "slow"

        }//end track object

    }//end return

});