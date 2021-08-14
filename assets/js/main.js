(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 20;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Initiate gallery lightbox
   */
  const galleryLightbox = GLightbox({
    selector: ".gallery-lightbox",
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
  
    /**
   * Chart.js
   */
        $(function () {/*from   w ww .  ja va2 s  . c o  m*/

		//style
		    Chart.defaults.global.defaultFontFamily = 'arial';
			Chart.defaults.global.defaultFontSize = 16;
			Chart.defaults.global.defaultFontColor = '#000';
		
		
            var ctx = document.getElementById("chart-gender").getContext('2d');
            var data = {
                datasets: [{
                    data: [32099, 33193,],
                    backgroundColor: [
                        '#0dcaf0',
                        '#ff6c98',
                    ],
                }],
                labels: [
                    'Laki-laki',
                    'Perempuan'
                ]
            };
            var myPieChart = new Chart(ctx, {
                type: 'pie',
                data: data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12
                        }
                    }
                }
            });
	
            var ctx_2 = document.getElementById("chart-usia").getContext('2d');
            var data_2 = {
                datasets: [{
                    data: [16926, 37220, 11146],
                    backgroundColor: [
                        '#0dcaf0',
                        '#ff6c98',
                        '#51b25a',
                    ],
                }],
                labels: [
                    'Usia 0-15',
                    'Usia 15-65',
                    'Usia >65'
                ]
            };
            var myPieChart_2 = new Chart(ctx_2, {
                type: 'pie',
                data: data_2,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12
                        }
                    }
                }
            });
			

			var ctx_3 = document.getElementById("chart-pekerjaan").getContext('2d');
			var data_3 = {
                datasets: [{
                    data: [16991, 9210, 3416, 3613, 5652, 2814, 426, 58, 20012],
                    backgroundColor: [
                        '#0dcaf0',
                        '#ff6c98',
                        '#51b25a',
						'#ac6ec7',
						'#f89236',
						'#f9f871',
						'#aa2a6a',
						'#1d7868',
						'#2bd532',
                    ],
                }],
                labels: [
                    'Karyawan',
                    'Wiraswasta',
                    'Tani',
					'Pertukangan',
					'Buruh Tani',
					'Pensiunan',
					'Guru',
					'Lainnya',
					'Tidak bekerja'
                ]
            };
            var myPieChart_3 = new Chart(ctx_3, {
                type: 'pie',
                data: data_3,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12
                        }
                    }
                }
            });
			
			var ctx_4 = document.getElementById("chart-pendidikan").getContext('2d');
			var data_4 = {
                datasets: [{
                    data: [5955, 13618, 10908, 22368, 2731, 2317, 295],
                    backgroundColor: [
                        '#0dcaf0',
                        '#ff6c98',
                        '#51b25a',
						'#ac6ec7',
						'#f89236',
						'#f9f871',
						'#aa2a6a',
                    ],
                }],
                labels: [
                    'TK',
                    'SD/Sederajat',
                    'SMP/Sederajat',
					'SMA/Sederajat',
					'Akademi/D1-D3',
					'Sarjana (S1)',
					'Pascasarjana (S2,S3)',
                ]
            };
            var myPieChart_4 = new Chart(ctx_4, {
                type: 'pie',
                data: data_4,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12
                        }
                    }
                }
            });
        });
})();
