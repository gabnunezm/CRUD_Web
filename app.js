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
    renderVehicles();
});

// Mostrar vehículos
function renderVehicles() {
    vehicleList.innerHTML = vehicles.map(vehicle => `
        <tr class="border text-center">
            <td class="p-2 border">${vehicle.brand}</td>
            <td class="p-2 border">${vehicle.model}</td>
            <td class="p-2 border">${vehicle.year}</td>
            <td class="p-2 border">$${vehicle.price}</td>
            <td class="p-2 border">${vehicle.color}</td>
            <td class="p-2 border">
                <button onclick="editVehicle('${vehicle.id}')" class="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                    Editar
                </button>
                <button onclick="deleteVehicle('${vehicle.id}')" class="bg-red-500 text-white px-2 py-1 rounded">
                    Eliminar
                </button>
            </td>
        </tr>
    `).join('');
}
renderVehicles();