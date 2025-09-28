// Custom smooth scrolling animation with multiple easing options
export const scrollToSection = (sectionId, offset = 70, duration = 1000) => {
  const element = document.getElementById(sectionId);
  
  if (!element) {
    console.error(`Element with id '${sectionId}' not found`);
    return;
  }
  
  const targetPosition = element.offsetTop - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  
  // If distance is very small, just jump to avoid unnecessary animation
  if (Math.abs(distance) < 10) {
    window.scrollTo(0, targetPosition);
    return;
  }
  
  let startTime = null;

  // Easing function for smooth animation (ease-in-out-cubic)
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const ease = easeInOutCubic(progress);
    const currentPosition = startPosition + (distance * ease);
    
    window.scrollTo(0, currentPosition);
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };
  
  requestAnimationFrame(animation);
};

// Alternative scroll with different easing (faster, more responsive)
export const scrollToSectionFast = (sectionId, offset = 70, duration = 600) => {
  const element = document.getElementById(sectionId);
  
  if (!element) {
    console.error(`Element with id '${sectionId}' not found`);
    return;
  }
  
  const targetPosition = element.offsetTop - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  
  if (Math.abs(distance) < 10) {
    window.scrollTo(0, targetPosition);
    return;
  }
  
  let startTime = null;

  // Faster easing function
  const easeOutQuart = (t) => {
    return 1 - Math.pow(1 - t, 4);
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const ease = easeOutQuart(progress);
    const currentPosition = startPosition + (distance * ease);
    
    window.scrollTo(0, currentPosition);
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };
  
  requestAnimationFrame(animation);
};

// Alternative scroll function using getBoundingClientRect
export const scrollToSectionAlternative = (sectionId, offset = 70) => {
  const element = document.getElementById(sectionId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    // Animate scroll manually if smooth behavior doesn't work
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 800;
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      
      // Easing function
      const ease = percent < 0.5 ? 2 * percent * percent : -1 + (4 - 2 * percent) * percent;
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
    
    window.requestAnimationFrame(step);
  }
};