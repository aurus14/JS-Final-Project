let FlightsView = require("./flights-view.js");
let HotelsView = require("./hotels-view.js");
let RentalsView = require("./rentals-view.js");
let RestaurantsView = require("./restaurants-view.js");

class ViewFactory {

    createView(type, args) {
        switch(type) {
            case "hotels":
                return new HotelsView();
            case "flights":
                return new FlightsView();
            case "rentals":
            	return new RentalsView();
            case "restaurants":
                return new RestaurantsView();
        }
    }
}

module.exports = ViewFactory;