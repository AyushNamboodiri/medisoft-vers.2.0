const appointmentList = document.getElementById('appointmentList');
const addAppointmentBtn = document.getElementById('addAppointmentBtn');
const appointmentForm = document.getElementById('appointmentForm');
const newAppointmentForm = document.getElementById('newAppointmentForm');
const cancelBtn = document.getElementById('cancelBtn');

let appointments = [];

// Load appointments from localStorage
if (localStorage.getItem('appointments')) {
    appointments = JSON.parse(localStorage.getItem('appointments'));
    renderAppointments();
}

// Function to render appointments
function renderAppointments() {
    appointmentList.innerHTML = '';
    appointments.forEach(appointment => {
        const appointmentElement = document.createElement('div');
        appointmentElement.classList.add('appointment');
        appointmentElement.innerHTML = `
            <p><strong>Patient:</strong> ${appointment.patient}</p>
            <p><strong>Date:</strong> ${appointment.date}</p>
            <p><strong>Time:</strong> ${appointment.time}</p>
            <button class="deleteBtn" data-index="${appointments.indexOf(appointment)}">Delete</button>
        `;
        appointmentList.appendChild(appointmentElement);
    });
}

// Show appointment form
addAppointmentBtn.addEventListener('click', () => {
    appointmentForm.style.display = 'block';
});

// Hide appointment form
cancelBtn.addEventListener('click', () => {
    appointmentForm.style.display = 'none';
});

// Add new appointment
newAppointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const patientName = document.getElementById('patientName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const appointment = {
        patient: patientName,
        date: appointmentDate,
        time: appointmentTime
    };
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    renderAppointments();
    appointmentForm.style.display = 'none';
    newAppointmentForm.reset();
});

// Delete appointment
appointmentList.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
        const index = e.target.dataset.index;
        appointments.splice(index, 1);
        localStorage.setItem('appointments', JSON.stringify(appointments));
        renderAppointments();
    }
});