document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    // Daftar domain aman
    const allowedDomains = [
        "facebook.com", "x.com", "twitter.com",
        "youtube.com", "instagram.com", "tiktok.com", "pinterest.com"
    ];

    // Event tombol dropdown
    dropdownButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const isOpen = content.classList.contains("show");

            // Tutup semua dropdown
            document.querySelectorAll(".dropdown-content").forEach(dc => dc.classList.remove("show"));

            // Buka dropdown yang dipilih
            if (!isOpen) {
                content.classList.add("show");
            }
        });
    });

    // Cek semua link keluar
    document.querySelectorAll(".dropdown-content a").forEach(link => {
        link.addEventListener("click", function (e) {
            try {
                const url = new URL(this.href);
                if (!allowedDomains.some(domain => url.hostname.includes(domain))) {
                    e.preventDefault();
                    alert("Link ini tidak aman dan diblokir!");
                }
            } catch {
                e.preventDefault();
                alert("URL tidak valid!");
            }
        });
    });
});
