(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Vendor carousel
  $(".vendor-carousel").owlCarousel({
    loop: true,
    margin: 45,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 4,
      },
      768: {
        items: 6,
      },
      992: {
        items: 8,
      },
    },
  });
})(jQuery);


// Scrollbar

document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".horizontal-scroll");

  if (scrollContainer) {
    function startAutoScroll() {
      // Hitung kecepatan berdasarkan lebar layar
      const viewportWidth = window.innerWidth;
      const scrollSpeed = viewportWidth <= 768 ? 200 : 300; // Kecepatan lebih lambat di layar kecil
      const duration = scrollContainer.scrollWidth / scrollSpeed; // Durasi dihitung berdasarkan scrollWidth

      // GSAP animation
      gsap.to(scrollContainer, {
        scrollLeft: scrollContainer.scrollWidth - scrollContainer.clientWidth,
        duration: duration,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          scrollContainer.scrollLeft = 0; // Reset posisi saat ulang
        },
      });
    }

    function adjustAutoScroll() {
      gsap.killTweensOf(scrollContainer); // Hentikan animasi sebelumnya
      startAutoScroll(); // Mulai animasi baru dengan parameter yang diperbarui
    }

    // Jalankan auto-scroll saat halaman dimuat
    startAutoScroll();

    // Pantau perubahan ukuran layar
    window.addEventListener("resize", adjustAutoScroll);
  } else {
    console.error("Element '.horizontal-scroll' not found.");
  }
});

// Perubahan Warna

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});