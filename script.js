function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

document.getElementById("dataForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const tglTahan = new Date(document.getElementById("tgl_tahan").value);
    const thn = parseInt(document.getElementById("thn").value);
    const bln = parseInt(document.getElementById("bln").value);
    const hr = parseInt(document.getElementById("hr").value);
    const remisi = parseInt(document.getElementById("remisi").value);

    // Hitung tanggal bebas murni
    let bebasMurni = new Date(tglTahan);
    bebasMurni.setFullYear(bebasMurni.getFullYear() + thn);
    bebasMurni.setMonth(bebasMurni.getMonth() + bln);
    bebasMurni.setDate(bebasMurni.getDate() + hr);

    // Bebas setelah remisi
    let bebasRemisi = new Date(bebasMurni);
    bebasRemisi.setDate(bebasRemisi.getDate() - remisi);

    // Hitung PB (½ masa pidana setelah dikurangi remisi)
    let totalHari = Math.floor((bebasRemisi - tglTahan) / (1000 * 60 * 60 * 24));
    let pbDate = new Date(tglTahan);
    pbDate.setDate(pbDate.getDate() + Math.floor(totalHari / 2));

    // Tampilkan hasil
    document.getElementById("output").innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Bebas Murni:</strong> ${bebasMurni.toLocaleDateString()}</p>
        <p><strong>Tanggal Bebas Setelah Remisi:</strong> ${bebasRemisi.toLocaleDateString()}</p>
        <p><strong>Tanggal PB (½ Masa Pidana Setelah Remisi):</strong> ${pbDate.toLocaleDateString()}</p>
    `;
});

function cetakPDF() {
    window.print(); // Sederhana untuk versi awal
}
