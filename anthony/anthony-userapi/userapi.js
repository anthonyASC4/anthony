var randomUserUrl = "https://randomuser.me/api";

$.ajax({
    url:randomUserUrl,
    success: function(data) {
        console.log(data);
        var descriptions = data.results[0];
        var name = descriptions.name.first;
        var lastName = descriptions.name.last;
        var photo = descriptions.picture.large;
        var state = descriptions.location.state;
        var username = descriptions.login.username;
        var password = descriptions.login.password;
        $("body").append("<img src="+ photo +">");
        $("body").append("<h2>" + "My name is " + name + " " + lastName + "</h2>");
        $("body").append("<h2>" + "I live in " + state + "</h2>");
        $("body").append("<h2>" + "My username is " + username + " and my password is " + password + "</h2>");
        
    }
});