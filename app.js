// Variables globales
let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
let editingId = null;

// Elementos del DOM
const form = document.getElementById('vehicle-form');
const vehicleList = document.getElementById('vehicle-list');

// Guardar vehículo (Create)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const vehicle = {
        id: editingId || Date.now().toString(),
        brand: document.getElementById('brand').value,
        model: document.getElementById('model').value,
        year: document.getElementById('year').value,
        price: document.getElementById('price').value,
        color: document.getElementById('color').value
    };

        // Agregar vehiculo

        vehicles.push(vehicle);

    localStorage.setItem('vehicles', JSON.stringify(vehicles));
    form.reset();
    
});