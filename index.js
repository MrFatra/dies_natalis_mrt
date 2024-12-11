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
      description: "Deskripsi 1.2",
      author: "RadenPahikallFikri",
      image:
        "https://thumb.viva.co.id/media/frontend/thumbs3/2019/10/30/5db955d0bc6a4-the-golden-age-of-islam-masa-kejayaan-umat-islam_1265_711.jpg",
      link: "ahttps://www.viva.co.id/vstory/sejarah-vstory/1185912-the-golden-age-of-islam-masa-kejayaan-umat-islam",
    },
    {
      title: "Judul 1.3",
      description: "Deskripsi 1.3",
      author: "Penulis C",
      image: "https://via.placeholder.com/150",
      link: "article1-3.html",
    },
  ],
  [
    {
      title: "Judul 2.1",
      description: "Deskripsi 2.1",
      author: "Penulis D",
      image: "https://via.placeholder.com/150",
      link: "article2-1.html",
    },
    {
      title: "Judul 2.2",
      description: "Deskripsi 2.2",
      author: "Penulis E",
      image: "https://via.placeholder.com/150",
      link: "article2-2.html",
    },
    {
      title: "Judul 2.3",
      description: "Deskripsi 2.3",
      author: "Penulis F",
      image: "https://via.placeholder.com/150",
      link: "article2-3.html",
    },
  ],
  [
    {
      title: "Judul 3.1",
      description: "Deskripsi 3.1",
      author: "Penulis G",
      image: "https://via.placeholder.com/150",
      link: "article3-1.html",
    },
    {
      title: "Judul 3.2",
      description: "Deskripsi 3.2",
      author: "Penulis H",
      image: "https://via.placeholder.com/150",
      link: "article3-2.html",
    },
    {
      title: "Judul 3.3",
      description: "Deskripsi 3.3",
      author: "Penulis I",
      image: "https://via.placeholder.com/150",
      link: "article3-3.html",
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
