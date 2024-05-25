let parties = [];

    function openForm() {
        document.querySelector('.popup-form').style.display = 'block';
        document.querySelector('.overlay').style.display = 'block';
    }

    function closeForm() {
        document.querySelector('.popup-form').style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';
    }

    function submitForm() {
        const form = document.getElementById('myForm');
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const phone = form.elements['phone'].value;
        const amount = form.elements['amount'].value;

        const party = { name, email, phone, amount };
        parties.push(party);

        renderParties();

        form.reset();
        closeForm();

        return false;
    }

    function renderParties() {
        const partiesList = document.getElementById('partiesList');
        partiesList.innerHTML = '';

        parties.forEach(party => {
            const li = document.createElement('li');
            li.textContent = ` name-${party.name} - email-${party.email} -phone- ${party.phone} -amount- ${party.amount}`;
            partiesList.appendChild(li);
        });
    }

// Function to format the amount input
function formatAmount(input) {
    // Remove non-numeric characters from the input
    input.value = input.value.replace(/[^0-9.]/g, '');
}

function formatAmount(input) {
// Remove non-numeric characters from the input value
let amount = input.value.replace(/\D/g, '');

// Add the ₹ symbol
amount = '₹' + amount;

// Update the input value
input.value = amount;
}