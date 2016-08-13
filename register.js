function registerUser() {
    

function email_verification() {

    //frm is is taken from form button name="id"
    if(frm.email.value=="")
    {
        alert("Please enter the email");
        frm.email.focus();
        return false;
    }
    let reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(frm.email.value)==false)
    {
        alert('Invalud emil address');
        frm.email.focus();
        return false;
    }
    return true;
}
if (email_verification()==true) {
    function register() {

        let username = $('#username').val();
        let pass = $('#pass').val();
        let email = $('#email').val();

        let data = {
            username: username,
            password: pass,
            email: email
        };

        let baseUrl = "https://baas.kinvey.com/";
        let appKey = "kid_H11e5tDK";
        let appSecret = "3d722cbd26a44c018f36f522520cfa42";

        let method = "POST";
        let requestUrl = baseUrl + "user/" + appKey + "/";

        let headers = {};
        headers['Authorization'] = "Basic " + btoa(appKey + ":" + appSecret);
        headers['Content-Type'] = "application/json";

        let request = {
            url: requestUrl,
            method: method,
            headers: headers,
            data: JSON.stringify(data)
        };

        $.ajax(request);


    }
    return register();
}
    
}