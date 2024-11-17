document.addEventListener('DOMContentLoaded', function() {
    // Ambil query dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query') ? urlParams.get('query').toLowerCase() : '';

    // Isi ulang kolom pencarian dengan kata kunci
    document.querySelector('input[name="query"]').value = query;

    // Data kost lengkap
    const kostList = [
        {
            name: "KOST WULLUR",
            address: "Airmadidi Atas, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara",
            price: 300000,
            type: "Kost Pria",
            size: "4x4",
            img: "gambar/kostWullur1.jpg",
            detailLink: "detailkost.html?kost=kostWullur"
        },
        {
            name: "KOST MIZPA",
            address: "Airmadidi Atas, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara",
            price: 300000,
            type: "Kost Pria",
            size: "3x3",
            img: "gambar/kostMizpa.png",
            detailLink: "detailkost.html?kost=kostMizpa"
        },
        {
            name: "CORNER RESIDENCE",
            address: "Airmadidi Atas, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara",
            price: 850000,
            type: "Kost Wanita",
            size: "5x4",
            img: "gambar/cornerResidence1.jpg",
            detailLink: "detailkost.html?kost=cornerResidence"
        },
        {
            name: "KOST MARINGKA",
            address: "Airmadidi Atas, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara",
            price: 300000,
            type: "Kost Pria",
            size: "3x3",
            img: "gambar/kostMaringka1.jpg",
            detailLink: "detailkost.html?kost=kostMaringka"
        },
        {
            name: "ANUGERAH WISMA",
            address: "Airmadidi Atas, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara",
            price: 700000,
            type: "Kost Wanita",
            size: "3x3",
            img: "gambar/anugerahWisma.jpg",
            detailLink: "detailkost.html?kost=anugerahWisma"
        },
        {
            name: "KOST KAINDE",
            address: "Airmadidi Atas, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara",
            price: 375000,
            type: "Kost Wanita",
            size: "3x3",
            img: "gambar/kostKainde.jpg",
            detailLink: "detailkost.html?kost=kostKainde"
        },
        {
            name: "KOST AJ 1",
            address: "Lingkungan 11, Airmadidi Atas, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara",
            price: 500000,
            type: "Kost Wanita",
            size: "3x3",
            img: "gambar/kostAJ1(1).jpg",
            detailLink: "detailkost.html?kost=kostAJ1"
        }
    ];

    const resultContainer = document.getElementById('resultContainer');

    const isPria = query.includes("pria");
    const isWanita = query.includes("wanita");
    const priceMatch = query.match(/\d+/);
    const searchTerm = query.replace(/\d+|pria|wanita/g, '').trim();

    const searchPrice = priceMatch ? parseInt(priceMatch[0]) : null;

    kostList.forEach(kost => {
        const matchesType = (!isPria && !isWanita) || 
                            (isPria && kost.type.toLowerCase().includes("pria")) || 
                            (isWanita && kost.type.toLowerCase().includes("wanita"));
        
        const matchesPrice = !searchPrice || kost.price <= searchPrice;

        const matchesNameOrLocation = !searchTerm || 
                                      kost.name.toLowerCase().includes(searchTerm) ||
                                      kost.address.toLowerCase().includes(searchTerm);

        if (matchesType && matchesPrice && matchesNameOrLocation) {
            const kostElement = document.createElement('div');
            kostElement.classList.add('recommendation');
            kostElement.style.cursor = 'pointer';
            kostElement.onclick = function() {
                window.location.href = kost.detailLink;
            };
            kostElement.innerHTML = `
                <div class="row">
                    <div class="col-md-4">
                        <img alt="Image of ${kost.name}" class="img-fluid" src="${kost.img}" />
                    </div>
                    <div class="col-md-8">
                        <h5><strong>${kost.name}</strong></h5>
                        <p><strong>Alamat:</strong><br>${kost.address}</p>
                        <p><strong>Harga:</strong><br>Rp. ${kost.price.toLocaleString('id-ID')} / Bulan</p>
                        <p><strong>${kost.type}</strong></p>
                        <p><strong>Ukuran Kamar: ${kost.size}</strong></p>
                    </div>
                </div>
            `;
            resultContainer.appendChild(kostElement);
        }
    });

    if (!resultContainer.hasChildNodes()) {
        resultContainer.innerHTML = '<p>Tidak ada kost yang sesuai dengan pencarian Anda.</p>';
    }
});
