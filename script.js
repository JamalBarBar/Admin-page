window.onload = function() {
    fetchVessels();
};

function fetchVessels() {
    fetch('https://api.example.com/vessels')
        .then(response => response.json())
        .then(data => {
            const vesselList = document.getElementById('vesselList');
            data.forEach(vessel => {
                const vesselDiv = document.createElement('div');
                vesselDiv.classList.add('vessel');
                vesselDiv.textContent = `Name: ${vessel.name}, Type: ${vessel.type}, Description: ${vessel.description}, Price: ${vessel.price}`;
                vesselList.appendChild(vesselDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching vessels:', error);
        });
}
