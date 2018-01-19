var ratings = {
    'movie 1': '2.8',
    'movie 2': '2.8',
    'movie 3': '2.8',
    'movie 4': '2.8',
    'movie 5': '2.8',
};

$(document).ready(function () {
    $.each(ratings, function (key, value) {
        var percentStar = (ratings[key] / 10) * 100;
        alert(key + ": " + value + percentStar + '%');
    if (percentStar.val() === 2) {
        console.log(percentStar.val())
        $('#star1').css ('color', 'yellow');
    }
    if (percentStar.val() === 4) {
        $('#star1').css ('color', 'yellow');
    }
    });

});