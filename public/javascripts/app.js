var app = window.angular.module('app', [])

app.factory('classFetcher',classFetcher)
app.controller('mainCtrl', mainCtrl)

function classFetcher ($http) {

  var API_ROOT = 'classes'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, classFetcher, $http) {

  $scope.classes = []

$scope.addHW = function() {
  var formData = {name:$scope.Name,section:$scope.Section,date:$scope.Ddate};
  console.log(formData);
  var classURL = 'classes';
  $http({
     url: classURL,
     method: "POST",
     data: formData
  }).success(function(data, status, headers, config) {
    console.log("Post worked");
  }).error(function(data, status, headers, config) {
    console.log("Post failed");
  });
}

  classFetcher.get()
    .then(function (data) {
      $scope.classes = data
    })
}
