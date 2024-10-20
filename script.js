
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
script.async = true;
script.defer = true;
document.head.appendChild(script);


let map;
let currentInfoWindow = null; 


const landmarks = [
    { name: "Rexburg LDS Temple", position: { lat: 43.8186, lng: -111.7820 }, description: "Beautiful temple overlooking the city." },
    { name: "Brigham Young University–Idaho", position: { lat: 43.8202, lng: -111.7836 }, description: "A large private university in Rexburg." },
    { name: "Rexburg Rapids", position: { lat: 43.8255, lng: -111.7970 }, description: "Fun waterpark with slides and pools." },
    { name: "Porter's Craft & Frame", position: { lat: 43.8237, lng: -111.7887 }, description: "A famous local arts and crafts store." },
    { name: "Legacy Flight Museum", position: { lat: 43.8346, lng: -111.8023 }, description: "Small museum showcasing vintage aircraft." },
    { name: "Nature Park", position: { lat: 43.8295, lng: -111.8078 }, description: "A large park with ponds and walking trails." },
    { name: "Teton Dam Site", position: { lat: 43.9212, lng: -111.5209 }, description: "Historic site of the Teton Dam." },
    { name: "Hemming Village", position: { lat: 43.8146, lng: -111.7839 }, description: "A popular shopping and dining area near BYU-Idaho." },
    { name: "Beaver Dick Park", position: { lat: 43.8145, lng: -111.9467 }, description: "A scenic park along the Snake River." },
    { name: "Fat Cats Rexburg", position: { lat: 43.8109, lng: -111.7974 }, description: "Entertainment center with bowling, arcades, and movies." },
    { name: "Adam Mongolian Grill", position: { lat: 43.8362149, lng: -111.7788867 }, description: "Restaurant with the Freshest food of all Rexburg" },
    { name: "Porter Park", position: { lat: 43.821955, lng: -111.791762 }, description: "Leafy green space featuring an open field, playground & spray park, plus an old carousel." },
    { name: "Kiwi Loco", position: { lat: 43.821944, lng: -111.787778 }, description: "Fun place to get frozen yogurt in the Rexburg area. Staff is funny, nice, and polite." },
    { name: "Smith Park", position: { lat: 43.8272, lng: -111.7736 }, description: "A large park with picnic areas and playgrounds." },
    { name: "Madison Jr High School", position: { lat: 43.8278, lng: -111.7728 }, description: "Local junior high school in Rexburg." },
    { name: "Madison Women's Hospital", position: { lat: 43.8233, lng: -111.7728 }, description: "Women's hospital serving the Rexburg area." },
    { name: "Legacy Flight Museum", position: { lat: 43.8347, lng: -111.8069 }, description: "Museum showcasing vintage aircraft and aviation history." },
    { name: "Park Street Park", position: { lat: 43.8222, lng: -111.7983 }, description: "A local park offering open spaces and playgrounds." },
    { name: "Ballet Arts", position: { lat: 43.8142, lng: -111.7981 }, description: "Dance school offering ballet classes in Rexburg." },
    { name: "BYU-Idaho Rope Course", position: { lat: 43.8094, lng: -111.7856 }, description: "Outdoor ropes course offering team-building activities." }



   
];


function initMap() {
   
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 43.8231, lng: -111.7924 },
        zoom: 13, 
    });

    
    landmarks.forEach((landmark) => {
        const marker = new google.maps.Marker({
            position: landmark.position,
            map: map,
            title: landmark.name,
        });

        
        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${landmark.name}</h3><p>${landmark.description}</p>`,
        });

        
        marker.addListener("click", () => {
            
            if (currentInfoWindow) {
                currentInfoWindow.close();
            }

            
            infoWindow.open(map, marker);
            currentInfoWindow = infoWindow;
        });
    });
}