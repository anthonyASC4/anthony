var randomUserUrl = "https://randomuser.me/api";
var countriesUrl = "https://restcountries.eu/rest/v2/all";
$.ajax({
    url: 'https://randomuser.me/api/',
    success: function (data) {
        console.log(data);
        var descriptions = data.results[0];
        var name = descriptions.name.first;
        var lastName = descriptions.name.last;
        var dob = descriptions.dob;
        var photo = descriptions.picture.large;
        var state = descriptions.location.state;
        var nat = descriptions.nat;
        var username = descriptions.login.username;
        var password = descriptions.login.password;
        $("body").append("<img src=" + photo + ">");
        $("body").append("<h2>" + "My name is " + name + " " + lastName + "</h2>");
        $("body").append("<h2>" + "I was born on " + dob + "</h2>");
        $("body").append("<h2>" + "I live in " + state + "</h2>");
        //$("body").append("<h2>" + "I am from " + nat + "</h2>");
        $("body").append("<h2>" + "My username is " + username + " and my password is " + password + "</h2>");
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/alpha?codes=' + nat,
            success: function (data) {
                console.log(data);
                var countryName = data[0].name;
                console.log(countryName);
                $("body").append("<h2>" + "I am from " + countryName + "</h2>");
            }})
    }
});