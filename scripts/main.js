let myObj = {
    "business_id": "5UmKMjUEUNdYWqANhGckJw",
    "full_address": "4734 Lebanon Church Rd\nDravosburg, PA 15034",
    "hours": {
      "Friday": {
        "close": "21:00",
        "open": "11:00"
      },
      "Tuesday": {
        "close": "21:00",
        "open": "11:00"
      },
      "Thursday": {
        "close": "21:00",
        "open": "11:00"
      },
      "Wednesday": {
        "close": "21:00",
        "open": "11:00"
      },
      "Monday": {
        "close": "21:00",
        "open": "11:00"
      }
    },
    "open": true,
    "categories": [
      "Fast Food",
      "Restaurants"
    ],
    "city": "Dravosburg",
    "review_count": 4,
    "name": "Mr Hoagie",
    "neighborhoods": [],
    "longitude": -79.9007057,
    "state": "PA",
    "stars": 4.5,
    "latitude": 40.3543266,
    "attributes": {
      "Take-out": true,
      "Drive-Thru": false,
      "Good For": {
        "dessert": false,
        "latenight": true,
        "lunch": true,
        "dinner": true,
        "brunch": true,
        "breakfast": true
      },
      "Caters": false,
      "Noise Level": "average",
      "Takes Reservations": true,
      "Delivery": false,
      "Ambience": {
        "romantic": true,
        "intimate": false,
        "classy": false,
        "hipster": true,
        "divey": false,
        "touristy": false,
        "trendy": true,
        "upscale": false,
        "casual": true
      },
      "Parking": {
        "garage": false,
        "street": true,
        "validated": false,
        "lot": true,
        "valet": false
      },
      "Has TV": true,
      "Outdoor Seating": true,
      "Attire": "casual",
      "Alcohol": "none",
      "Waiter Service": true,
      "Accepts Credit Cards": true,
      "Good for Kids": true,
      "Good For Groups": true,
      "Price Range": 2
    },
    "type": "business"
}

function showName() {
    let name = document.getElementById("name");
    let restaurant = JSON.parse(JSON.stringify(myObj));
    name.textContent = restaurant["name"]

}

function showAdress() {
    let name = document.getElementById("address");
    let restaurant = JSON.parse(JSON.stringify(myObj));
    name.textContent = restaurant["full_address"]
}

function showHours() {
    let restaurant = JSON.parse(JSON.stringify(myObj));
    let cleaned_hours = {
        "Monday": {"close": "Closed", "open": "Closed"},
        "Tuesday": {"close": "Closed", "open": "Closed"},
        "Wednesday": {"close": "Closed", "open": "Closed"},
        "Thursday": {"close": "Closed", "open": "Closed"},
        "Friday": {"close": "Closed", "open": "Closed"},
        "Saturday": {"close": "Closed", "open": "Closed"},
        "Sunday": {"close": "Closed", "open": "Closed"}
    }

    let hours = restaurant["hours"]

    for(day in hours){
        cleaned_hours[day].close = convertToStandard(hours[day].close).toLowerCase()
        cleaned_hours[day].open = convertToStandard(hours[day].open).toLowerCase()
    }

    for(day in cleaned_hours){
        document.getElementById(day).textContent = day + "\t\t" + cleaned_hours[day].open + " - " + cleaned_hours[day].close
    }
}

function showMenu() {
    
}

function showServicesAndFeatures() {
    let restaurant = JSON.parse(JSON.stringify(myObj));
    let attributes = restaurant["attributes"]

    let text = []

    for(item in attributes){
        if(attributes[item] instanceof Object){
            for(subitem in attributes[item]){
                if(attributes[item][subitem] == true){
                    text.push(item + " " + subitem);
                }
            }
        }
        else{
            if(attributes[item] == true){
                text.push(item);
            }
        }
    }

    let attributsElement = document.getElementById("s&f")

    for(let x = text.length; x > 0; x--){
        const p = document.createElement("p");
        p.textContent = text[x];
        attributsElement.parentNode.insertBefore(p, attributsElement.nextSibling)
    }
}

function unshowMenu(){
    let elements = document.getElementsByClassName("dropdown-content");
    elements[0].style.display = "none";
}

function convertToStandard(time) {
    return moment(time, 'HH:mm').format('h:mm A');
}