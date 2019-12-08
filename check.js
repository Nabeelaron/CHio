function check() {
    // var XMLHttpRequest = XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    //index.php is in my web
    xhr.open('HEAD', 'https://www.clubhouse.io', true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, true);


    function processRequest(e) {
        // var result;
        if (xhr.readyState == 4) {
            //If you use a cache storage manager (service worker), it is likely that the
            //index.php file will be available even without internet, so do the following validation
            if (xhr.status >= 200 && xhr.status < 304) {
                //online
                // console.log("online");
            } else {

                window.location.href = "resources\\nointernet.html";
            }
        }
    }
}

// check()