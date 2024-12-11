// Navbar
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  if (mobileMenu.classList.contains("hidden")) {
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
  } else {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-times");
  }
});

// Hero
const navbar = document.getElementById("navbar");
const hero = document.getElementById("hero");

window.addEventListener("scroll", () => {
  const heroHeight = hero.offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition > heroHeight) {
    navbar.classList.add("bg-white", "text-primary", "shadow-lg");
    navbar.classList.remove("bg-transparent", "text-secondary", "text-white");
  } else {
    console.log("masuk sini 1");
    navbar.classList.add(
      "bg-transparent",
      "text-secondary",
      "backdrop-blur-md"
    );
    navbar.classList.remove("bg-white", "text-primary", "shadow-lg");
  }
});

// Article
const articlesData = [
  [
    {
      title: "Sejarah 8 Tokoh pada Masa Kejayaan Islam Beserta Hasil Karyanya",
      description:
        "Banyak tokoh ilmuwan Islam beserta hasil karyanya yang tercatat dalam sejarah. Berikut profil 8 tokoh ilmuwan Islam yang sebaiknya Anda tahu.",
      author: " Abdul Hadi",
      image:
        "https://mmc.tirto.id/image/otf/970x0/2017/06/16/headeribn-sina-1_ratio-16x9.jpg",
      link: "https://tirto.id/sejarah-8-tokoh-pada-masa-kejayaan-islam-beserta-hasil-karyanya-gawe",
    },
    {
      title: "Kontribusi Ilmuwan Muslim pada Masa Kejayaan Islam",
      description: "Menceritakan tenatang masa keemasan islam",
      author: "RadenPahikallFikri",
      image:
        "https://thumb.viva.co.id/media/frontend/thumbs3/2019/10/30/5db955d0bc6a4-the-golden-age-of-islam-masa-kejayaan-umat-islam_1265_711.jpg",
      link: "https://www.viva.co.id/vstory/sejarah-vstory/1185912-the-golden-age-of-islam-masa-kejayaan-umat-islam",
    },
    {
      title: "Siswa, Kenali Tokoh-tokoh Ilmuwan dalam Peradaban Islam",
      description: "Memberikan Pengetahuan tokoh tokoh ilmuan muslim",
      author: "Ayunda Pininta Kasih",
      image:
        "https://asset.kompas.com/crops/rXpeOasSn9E_SrC26f6CFGagVVY=/0x0:739x493/1200x800/data/photo/2020/05/21/5ec66efd015ea.jpg",
      link: "https://edukasi.kompas.com/read/2021/04/14/090259471/siswa-kenali-tokoh-tokoh-ilmuwan-dalam-peradaban-islam",
    },
  ],
  [
    {
      title: "Islam Di Indonesia",
      description:
        "Indonesia adalah negara yang memiliki populasi Muslim terbesar di seluruh dunia. Pada saat ini diperkirakan bahwa jumlah umat Muslim mencapai 207 juta orang,",
      author: "Indonesi Invesment",
      image:
        "https://www.indonesia-investments.com/upload/images/islam-in-indonesia.png",
      link: "https://www.indonesia-investments.com/id/budaya/agama/islam/item248",
    },
    {
      title:
        "Kisah Perang: Sejarah Penaklukan Konstantinopel oleh Turki Ottoman",
      description: "Menceritakan Sejarah awal keruntuhan konstantinopel",
      author: "Aditya Jaya Iswara",
      image:
        "https://asset.kompas.com/crops/ltUxH6s-3KP9Q1XCGhHzRxG9mcQ=/0x0:1999x1333/1200x800/data/photo/2021/04/20/607e8701d70f4.jpg",
      link: "https://internasional.kompas.com/read/2021/04/20/160000170/kisah-perang-sejarah-penaklukan-konstantinopel-oleh-turki-ottoman?page=all",
    },
    {
      title: "6 Jalur Penyebaran Islam di Indonesia",
      description:
        "Penyebaran Islam di Indonesia terjadi melalui beberapa jalur. Salah satu yang populer adalah jalur perdagangan. Namun, ada sejumlah jalur lain pada saat itu.",
      author: "Annisa dayana Salsabilla",
      image:
        "https://akcdn.detik.net.id/community/media/visual/2020/05/08/7b95ade5-b052-4dba-9d79-099f191cc408.jpeg?w=700&q=90",
      link: "https://www.detik.com/hikmah/khazanah/d-7313985/6-jalur-penyebaran-islam-di-indonesia",
    },
  ],
  [
    {
      title: "Sejarah Nabi Muhammad dan Pengaruhnya bagi Peradaban Dunia",
      description:
        "Sebagai seorang muslim mengetahui sejarah Nabi Muhammad SAW tentunya merupakan sebuah kewajiban sebagai bentuk keimanan kepada beliau sebagai utusan Allah SWT.",
      author: "Sejarah dan Sosial",
      image:
        "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01gwwnsg1gz0dg6qn02sd959p2.jpg",
      link: "https://kumparan.com/sejarah-dan-sosial/sejarah-nabi-muhammad-dan-pengaruhnya-bagi-peradaban-dunia-207lSz3OnNf",
    },
    {
      title: "4 Kitab yang Diturunkan Allah SWT Beserta Rasul yang Menerimanya",
      description:
        "Kitab suci merupakan tuntunan awal dan keyakinan bagi suatu agama. Dalam Islam, kitab punya dua arti yaitu perintah dan tulisan di atas kertas.",
      author: "Meilani Teniwut",
      image:
        "https://mediaindonesia.com/cdn-cgi/image/width=800,quality=80,format=webp/https://asset.mediaindonesia.com/news/2023/01/bc7f74a9eb121857c81f21284441d92c.jpg",
      link: "https://mediaindonesia.com/humaniora/550056/4-kitab-yang-diturunkan-allah-swt-beserta-rasul-yang-menerimanya",
    },
    {
      title: "Mengenal 9 Wali Songo, Cara Dakwah dan Asal Usulnya",
      description:
        "Di sepanjang sejarah Islam di Indonesia, Wali Songo dikenal sebagai tokoh-tokoh agama yang berkontribusi besar pada penyebaran Islam di tanah Jawa dan wilayah sekitarnya.",
      author: "Nesa Azra",
      image:
        "https://uici.ac.id/wp-content/uploads/2023/12/Nama-Nama-Wali-Songo-Beserta-Sejarah-Silsilah-Kisah-dan-Fotonya.jpg.webp",
      link: "https://uici.ac.id/mengenal-9-wali-songo-cara-dakwah-dan-asal-usulnya/",
    },
  ],
];

let currentPage = 1;

function renderArticles(page) {
  const articlesContainer = document.getElementById("articles");
  articlesContainer.innerHTML = "";
  articlesData[page - 1].forEach((article) => {
    articlesContainer.innerHTML += `
      <a href="${article.link}" class="p-4 border border-gray-300 rounded shadow-sm hover:scale-20 hover:shadow-lg transition-all duration-300 block">
        <img src="${article.image}" alt="${article.title}" class="h-32 w-full object-cover rounded mb-4">
        <h3 class="text-lg font-bold text-gray-700">${article.title}</h3>
        <p class="text-gray-600 mb-2">${article.description}</p>
        <p class="text-gray-500 text-sm">${article.author}</p>
      </a>
    `;
  });
}

function updatePaginationButtons() {
  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled =
    currentPage === articlesData.length;

  for (let i = 1; i <= articlesData.length; i++) {
    document.getElementById(`page${i}`).className =
      i === currentPage
        ? "px-3 py-1 text-white bg-primary rounded hover-animate"
        : "px-3 py-1 text-primary bg-white rounded hover-animate";
  }
}

function changePage(page) {
  if (page < 1 || page > articlesData.length) return;
  currentPage = page;
  renderArticles(currentPage);
  updatePaginationButtons();
}

renderArticles(currentPage);
updatePaginationButtons();

//  Modal
const readMoreButton = document.getElementById("read-more");
const section1 = document.getElementById("section-1");
const section2 = document.getElementById("section-2");

const images = section1.querySelectorAll(".image-container");
images.forEach((image, index) => {
  image.setAttribute("data-aos", "fade-up");
  image.setAttribute("data-aos-duration", (index + 1) * 800);
});

readMoreButton.addEventListener("click", function () {
  section2.classList.remove("hidden");
  const images = section2.querySelectorAll(".image-container");
  images.forEach((image, index) => {
    image.setAttribute("data-aos", "fade-up");
    image.setAttribute("data-aos-duration", (index + 1) * 800);
  });

  AOS.init();
  readMoreButton.style.display = "none";
});

const imageContainers = document.querySelectorAll(".image-container");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalField = document.getElementById("modal-field");
const modalContribution = document.getElementById("modal-contribution");
const closeModalBtn = document.getElementById("close-btn");

imageContainers.forEach((container) => {
  container.addEventListener("click", () => {
    modalImg.src = container.querySelector("img").src;
    modalTitle.textContent = container.getAttribute("data-title");
    modalField.innerHTML = `<strong>Bidang:</strong> ${container.getAttribute(
      "data-field"
    )}`;
    modalContribution.innerHTML = `${container.getAttribute(
      "data-contribution"
    )}`;
    modal.style.display = "flex";
  });
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
