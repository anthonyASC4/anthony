var appId = "ad6c1ba9";
var appKey = "2366320d9ee97092193748ab70af49ac";
var mcDonaldsUrl = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId="+ appId + "&appKey=" + appKey;

$.ajax({
    url:mcDonaldsUrl,
    success: function(data) {
        console.log(data);
        var foodItem = data.hits[0];
        var name = foodItem.fields.item_name;
        var cals = foodItem.fields.nf_calories;
        $("body").append("<h2>This " + name + " has " + cals + " calories!!!</h2>");
    }
});