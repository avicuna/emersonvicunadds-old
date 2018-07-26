var storage = firebase.storage();
var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/emersonvicunadds-1.appspot.com/o/patientregistration.pdf?alt=media&token=69911c8b-bb1e-4765-a841-fc7adc15cac6')
//var pathReference = storage.ref('patientregistration.pdf');

httpsReference.getDownloadURL().then(function(url) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
        var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

}).catch(function(error) {

    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
        case 'storage/object_not_found':
            // File doesn't exist
            break;

        case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

        case 'storage/canceled':
            // User canceled the upload
            break;

        case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
    }
});
