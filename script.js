$(function () {

    var beers = [];

    var sortFlag = true;

    var addBeer = function (name, category, rating) {
        beers.push({ name: name, category: category, rating: rating });
    }

    var updateBeer = function () {
        $(".beers-list").empty();
        for (i = 0; i < beers.length; i++) {
            $(".beers-list").append("<li>Beer Name: " + beers[i].name + ". Category: " + beers[i].category + ". Rating: " + beers[i].rating + ".");
        }
    }

    var sort = function (array) {
        var count;
        while (count != array.length) {
            count = 1
            if (sortFlag) {
                for (i = 0; i < array.length - 1; i++) {
                    if (array[i].rating > array[i + 1].rating) {
                        array.splice(i, 2, array[i + 1], array[i]);
                    }
                    else {
                        count++;
                    }
                }
            }
            else {
                for (i = 0; i < array.length - 1; i++) {
                    if (array[i].rating < array[i + 1].rating) {
                        array.splice(i, 2, array[i + 1], array[i]);
                    }
                    else {
                        count++;
                    }
                }
            }
        }
        sortFlag = !sortFlag;
    }

    $(".post-beer").click(function () {
        addBeer($(".beer-input").val(), $(".category-input").val(), $(".select1").val());
        updateBeer();
        $(".beer-input").val("");
        $(".category-input").val("");
        $(".select1").val("");
        console.log(beers[0].rating);
    })

    $(".sort-beer").click(function () {
        sort(beers);
        updateBeer();
    })

});