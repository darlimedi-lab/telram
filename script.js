
function hitungPB() {
    const nama = document.getElementById('nama').value;
    const nik = document.getElementById('nik').value;
    const tglMulai = new Date(document.getElementById('tglMulai').value);
    const lamaPidana = parseInt(document.getElementById('lamaPidana').value);

    if (!tglMulai || isNaN(lamaPidana)) {
        alert("Isi semua data dengan benar.");
        return;
    }

    const tglBebas = new Date(tglMulai);
    tglBebas.setMonth(tglBebas.getMonth() + lamaPidana);

    const tglPB = new Date(tglMulai);
    tglPB.setMonth(tglPB.getMonth() + Math.floor(lamaPidana / 2));

    document.getElementById('hasil').innerHTML = `
        <h3>Hasil Perhitungan</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>NIK:</strong> ${nik}</p>
        <p><strong>Tanggal PB (½ Pidana):</strong> ${tglPB.toLocaleDateString()}</p>
        <p><strong>Tanggal Bebas:</strong> ${tglBebas.toLocaleDateString()}</p>
    `;
}

function logout() {
    window.location.href = "login.html";
}
