function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function showDetails(kost) {
    let name, address, price, type, image, facilities, contact, mapUrl;

    switch (kost) {
        case 'kostWullur':
            name = "KOST WULLUR";
            address = "CX8Q+434, Airmadidi Atas, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara";
            price = "Rp. 1.000.000 / Bulan";
            type = "Kost Pria";
            image = "gambar/kostWullur1.jpg";
            facilities = ["Wi-Fi Gratis", "Kamar Mandi Dalam", "AC", "Dapur Bersama", "Keamanan 24 Jam"];
            contact = "0812-3456-7890";
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6012168604943!2d124.98512437477766!3d1.4152587985714082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870f006f0eac51%3A0xc261f9a65490b598!2sKos%20wulur!5e0!3m2!1sen!2sid!4v1731417652688!5m2!1sen!2sid";
            break;
        case 'kostMizpa':
            name = "KOST MIZPA";
            address = "CX9Q+337, Airmadidi Atas, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara";
            price = "Rp. 300.000 / Bulan";
            type = "Kost Pria";
            image = "gambar/kostMizpa.png";
            facilities = ["Wi-Fi Gratis", "Kamar Mandi Dalam", "AC", "Dapur Bersama", "Keamanan 24 Jam"];
            contact = "0813-4567-8901";
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.597067546435!2d124.98510567477776!3d1.4176692985689678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870ee6970c56fb%3A0x1e52d0f891278f42!2sMizpa%20kost!5e0!3m2!1sen!2sid!4v173 1417968295!5m2!1sen!2sid";
            break;
        case 'cornerResidence':
            name = "CORNER RESIDENCE";
            address = " CX8P+FHM, Airmadidi Atas, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara";
            price = "Rp. 850.000 / Bulan";
            type = "Kost Wanita";
            image = "gambar/cornerResidence1.jpg";
            facilities = ["Kasur", "Lemari", "Meja", "Kursi", "AC", "TV"];
            contact = "0812-4244-2527";
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.599579323055!2d124.98383257477768!3d1.4162105985704314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870ee5cc9b4173%3A0xdec00ed212e1827!2sCorner%20Residence!5e0!3m2!1sen!2sid!4v1731482600276!5m2!1sen!2sid";
            break;
        case 'kostMaringka':
            name = "KOST MARINGKA";
            address = "CX9Q+337, Airmadidi Atas, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara";
            price = "Rp. 300.000 / Bulan";
            type = "Kost Pria";
            image = "gambar/kostMaringka1.jpg";
            facilities = ["Wi-Fi Gratis", "Kamar Mandi Dalam", "AC", "Dapur Bersama", "Keamanan 24 Jam"];
            contact = "0853-9936-4308";
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...";
            break;
        case 'anugerahWisma':
            name = "ANUGERAH WISMA";
            address = "Airmadidi Atas, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara";
            price = "Rp. 700.000 / Bulan";
            type = "Kost Wanita";
            image = "gambar/anugerahWisma.jpg";
            facilities = ["Kamar Mandi Dalam", "Dapur Dalam", "Meja", "Lemari"];
            contact = "0821-9143-3152";
            mapUrl = "-";
            break;
        case 'kostKainde':
            name = "KOST KAINDE";
            address = "Airmadidi Atas, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara";
            price = "Rp. 375.000 / Bulan";
            type = "Kost Wanita";
            image = "gambar/kostKainde.jpg";
            facilities = ["Dapur", "Kasur", "Lemari"];
            contact = "-";
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127634.75853938416!2d124.90238407977841!3d1.4239608319565271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870fe8771f1fc9%3A0x7e83781ad77b9a8!2sKost%20Kainde!5e0!3m2!1sen!2sid!4v1731483272636!5m2!1sen!2sid";
            break;
        case 'kostAJ1':
            name = "KOST AJ 1";
            address = "Lingkungan 11, Airmadidi Atas, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara";
            price = "Rp. 500.000 / Bulan";
            type = "Kost Wanita";
            image = "gambar/kostAJ1(1).jpg";
            facilities = ["Kamar Mandi Dalam", "Kasur", "Meja", "Lemari"];
            contact = "0813-1044-9264";
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.598127105785!2d124.98487707477763!3d1.4170541485695927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870fff6f4321e7%3A0x864424f4afce6bd2!2sA%26J%20Kost%201%20Airmadidi!5e0!3m2!1sen!2sid!4v1731483477476!5m2!1sen!2sid";
            break;
        default:
            name = "Kost tidak ditemukan";
            address = "";
            price = "";
            type = "";
            image = "images/default.jpg";
            facilities = [];
            contact = "Tidak ada kontak tersedia";
            mapUrl = "";
    }

    document.getElementById("kostName").innerText = name;
    document.getElementById("kostAddress").innerText = address;
    document.getElementById("kostPrice").innerText = price;
    document.getElementById("kostType").innerText = type;
    document.getElementById("kostImage").querySelector("img").src = image;
    document.getElementById("kostContact").innerText = contact;
    document.getElementById('kostMap').src = mapUrl;

    const facilitiesList = document.getElementById("kostFacilities");
    facilitiesList.innerHTML = "";
    facilities.forEach(facility => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = facility;
        facilitiesList.appendChild(li);
    });
}

window.onload = function() {
    const kost = getQueryParameter('kost');
    showDetails(kost);
};