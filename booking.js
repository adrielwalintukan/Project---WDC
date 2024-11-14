let selectedKost = {};

document.getElementById('selectKostButton').onclick = function() {
    document.getElementById('kostList').style.display = 'block';
};

function selectKost(name, location, price, image) {
    selectedKost = { name, location, price, image };
    document.getElementById('kostName').innerText = name;
    document.getElementById('kostLocation').innerText = location;
    document.getElementById('kostPrice').innerText = price;
    const kostImage = document.getElementById('kostImage');
    kostImage.src = image;
    kostImage.style.display = 'block';
    document.getElementById('kostList').style.display = 'none';
    document.getElementById('detailKostLink').style.display = 'block';
}

function goToDetailKost() {
    const queryString = `?name=${encodeURIComponent(selectedKost.name)}&location=${encodeURIComponent(selectedKost.location)}&price=${encodeURIComponent(selectedKost.price)}`;
    window.location.href = `detailkost.html${queryString}`;
}

function filterKost() {
    const input = document.getElementById('searchKost');
    const filter = input.value.toLowerCase();
    const kostItems = document.getElementsByClassName('kost-item');

    for (let i = 0; i < kostItems.length; i++) {
        const item = kostItems[i];
        if (item.innerText.toLowerCase().includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
}