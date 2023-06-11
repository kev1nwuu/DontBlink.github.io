window.onload = function() {
    document.getElementById('name').textContent = localStorage.getItem('name');
    document.getElementById('location').textContent = localStorage.getItem('location');
    document.getElementById('appointmentDateTime').textContent = localStorage.getItem('appointmentDate') + ' ' + localStorage.getItem('appointmentTime');
    document.getElementById('expert').textContent = localStorage.getItem('expert');
    let serviceList = document.getElementById('serviceList');
    let serviceTypeQuantity = JSON.parse(localStorage.getItem('serviceTypeQuantity'));
    for (let i = 0; i < serviceTypeQuantity.length; i++) {
        let li = document.createElement('li');
        li.textContent = serviceTypeQuantity[i].type + ': ' + serviceTypeQuantity[i].quantity;
        serviceList.appendChild(li);
    }
    document.getElementById('totalPrice').textContent = localStorage.getItem('totalPrice');
}

