var app = angular.module("myApp",[]);
app.controller("myCont", function($scope){
    	$scope.showImage=false;
		$scope.captureImage = function() {
		     $scope.showImage=true;
			 if(navigator.camera){
						navigator.camera.getPicture(this.onSuccess, this.onFail, { quality: 25,
						 destinationType: Camera.DestinationType.FILE_URI,
						 saveToPhotoAlbum:true
					 });
			}
			else{
			   alert("camera not found");
			
			}  
		};
		
		$scope.newImage = function() {
			$scope.showImage=false;
		};
   
        $scope.onSuccess=function(imageUri) {
		
		     console.log( $scope.onSuccess)
				  $scope.showImage=true;
			      var image = document.getElementById('capturedImage');
			      image.src =imageUri;
			}

	    $scope.onFail=function (message) {
				alert('Failed because: ' + message);
			}
    });