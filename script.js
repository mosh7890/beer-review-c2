
// var beers = [];

// var sortNFlag = true;
// var sortCFlag = true;
// var sortRFlag = true;

// var addBeer = function (name, category, rating) {
//     beers.push({ name: name, category: category, rating: rating });
// }

// var updateBeer = function () {
//     $(".beers-list").empty();
//     for (i = 0; i < beers.length; i++) {
//         $(".beers-list").append("<li>Beer Name: " + beers[i].name + ". Category: " + beers[i].category + ". Rating: " + beers[i].rating + ".");
//     }
// }

// var sort = function (array, property, flag) {
//     var count;
//     while (count != array.length) {
//         count = 1
//         if (flag) {
//             for (i = 0; i < array.length - 1; i++) {
//                 if (array[i][property] > array[i + 1][property]) {
//                     array.splice(i, 2, array[i + 1], array[i]);
//                 }
//                 else {
//                     count++;
//                 }
//             }
//         }
//         else {
//             for (i = 0; i < array.length - 1; i++) {
//                 if (array[i][property] < array[i + 1][property]) {
//                     array.splice(i, 2, array[i + 1], array[i]);
//                 }
//                 else {
//                     count++;
//                 }
//             }
//         }
//     }
// }

// function dynamicSort(property, flag) {
//     return function (a, b) {
//         if (flag) {
//             return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
//         }
//         else {
//             return (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
//         }
//     };
// }

// $(".post-beer").click(function () {
//     addBeer($(".beer-input").val(), $(".category-input").val(), $(".select1").val());
//     updateBeer();
//     $(".beer-input").val("");
//     $(".category-input").val("");
//     $(".select1").val("");
// })

// $(".sort-beer-name").click(function () {
//     sort(beers, "name", sortNFlag);
//     //beers.sort(dynamicSort('name',sortNFlag));
//     sortNFlag = !sortNFlag
//     updateBeer();
// })

// $(".sort-beer-category").click(function () {
//     sort(beers, "category", sortCFlag);
//     //beers.sort(dynamicSort('category', sortCFlag));
//     sortCFlag = !sortCFlag
//     updateBeer();
// })

// $(".sort-beer-rating").click(function () {
//     sort(beers, "rating", sortRFlag);
//     //beers.sort(dynamicSort('rating', sortRFlag));
//     sortRFlag = !sortRFlag
//     updateBeer();
// })

var beerReviewApp = function () {

    var beers = [];

    var addBeer = function (name, category, rating) {
        beers.push({ name: name, category: category, rating: rating });
    }

    var updateBeer = function () {
        $(".beers-list").empty();
        for (i = 0; i < beers.length; i++) {
            $(".beers-list").append("<li>Beer Name: " + beers[i].name + ". Category: " + beers[i].category + ". Rating: " + beers[i].rating + ".");
        }
    }

    return {
        addBeer: addBeer,
        updateBeer: updateBeer
    };
}

var BeerReviewApp = beerReviewApp ();

$(".post-beer").click(function () {
    BeerReviewApp.addBeer($(".beer-input").val(), $(".category-input").val(), $(".select1").val());
    BeerReviewApp.updateBeer();
    $(".beer-input").val("");
    $(".category-input").val("");
    $(".select1").val("");
})