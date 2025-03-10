function absen(sholat) {
    const catatanAbsen = document.getElementById('catatan-absen');
    const li = document.createElement('li');
    
    // Mencatat status puasa
    const puasaCheckbox = document.getElementById(`puasa-${sholat.toLowerCase()}`);
    const puasaStatus = puasaCheckbox.checked ? "Berpuasa" : "Tidak Berpuasa";
    
    // Membuat teks catatan
    li.textContent = `Absen untuk ${sholat} pada ${new Date().toLocaleString()} - Status Puasa: ${puasaStatus}`;
    
    // Membuat tombol Remove
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.style.marginLeft = '10px'; // Menambahkan margin untuk jarak
    removeButton.onclick = function() {
        catatanAbsen.removeChild(li); // Menghapus catatan dari daftar
    };
    
    // Menambahkan tombol ke catatan
    li.appendChild(removeButton);
    
    // Menambahkan catatan ke daftar
    catatanAbsen.appendChild(li);

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir secara default
        const imamName = document.getElementById('imamName').value;
        console.log(`Nama Ustazd Imam: ${imamName}`);
        // Lakukan sesuatu dengan nama ustazd, seperti menyimpannya atau mengirimnya ke server
    });
}