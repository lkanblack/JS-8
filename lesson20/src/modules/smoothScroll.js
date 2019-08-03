    // smooth scroll
  
    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 400,
    framesCount = 50;

    anchors.forEach(function(item) {
        item.addEventListener('click', function(element) {
            element.preventDefault();
          
          let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
          console.log(coordY);

          let scroller = setInterval(function() {
            let scrollBy = coordY / framesCount;
            if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
              window.scrollBy(0, scrollBy);
            } else {
              window.scrollTo(0, coordY);
              clearInterval(scroller);
            }
          }, animationTime / framesCount);
        });
      });
