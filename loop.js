// document.addEventListener('DOMContentLoaded', function () {
//     const marqueeWrapper = document.getElementById('marqueeWrapper');

//     // Kalkulasi durasi animasi berdasarkan jumlah gambar
//     const marqueeDuration = 100; // Atur sesuai kebutuhan
//     const singleImageDuration = marqueeDuration / marqueeWrapper.childElementCount;

//     // Atur durasi animasi pada elemen marquee-wrapper
//     marqueeWrapper.style.animationDuration = `${singleImageDuration}s`;

//     // Tambahkan event listener untuk memulai animasi ulang ketika animasi selesai
//     marqueeWrapper.addEventListener('animationiteration', () => {
//         // Memindahkan elemen pertama ke akhir setiap kali iterasi animasi
//         const firstItem = marqueeWrapper.firstElementChild;
//         marqueeWrapper.appendChild(firstItem);
//     });
// });
