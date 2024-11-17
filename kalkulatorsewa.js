function calculateRent() {
    const monthlyRent = parseFloat(document.getElementById('monthlyRent').value);
    const duration = parseInt(document.getElementById('duration').value);

    if (isNaN(monthlyRent) || isNaN(duration) || monthlyRent <= 0 || duration <= 0) {
        document.getElementById('totalCost').innerHTML = "Mohon masukkan nilai yang valid.";
        return;
    }

    const totalCost = monthlyRent * duration;
    document.getElementById('totalCost').innerHTML = "Total Biaya Sewa: Rp " + totalCost.toLocaleString();
}