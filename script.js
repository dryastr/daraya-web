document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.menu-link');

  function highlightActiveLink() {
    const scrollPosition = window.scrollY;

    // Iterate through menu links and check the position of associated sections
    menuLinks.forEach(link => {
      const targetSectionId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetSectionId);

      if (
        targetSection.offsetTop <= scrollPosition + 1 &&
        targetSection.offsetTop + targetSection.offsetHeight > scrollPosition
      ) {
        // Add 'active' class to the menu link that corresponds to the active section
        menuLinks.forEach(otherLink => otherLink.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  // Initial highlight when the page loads
  highlightActiveLink();

  // Highlight the active link on scroll
  document.addEventListener('scroll', highlightActiveLink);

  // Highlight the active link on click
  menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default behavior of anchor links
      const targetSectionId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetSectionId);

      // Scroll to the target section
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }

      // Remove 'active' class from all links
      menuLinks.forEach(otherLink => otherLink.classList.remove('active'));

      // Add 'active' class to the clicked link
      link.classList.add('active');
    });
  });

  // Check for hash in URL and scroll to the corresponding section
  const hash = window.location.hash.substring(1);
  if (hash) {
    const targetSection = document.getElementById(hash);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });

      // Add 'active' class to the corresponding menu link
      menuLinks.forEach(link => {
        if (link.getAttribute('href').substring(1) === hash) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }
});
