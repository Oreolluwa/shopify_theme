/**
 * Global JavaScript for Shopify Liquor Store Theme
 */

// Theme JavaScript namespace
window.theme = window.theme || {};

/**
 * Utility Functions
 */
theme.utils = {
  /**
   * Debounce function to limit how often a function is called
   */
  debounce: function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * Get URL parameters
   */
  getUrlParameter: function(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  },

  /**
   * Serialize form data
   */
  serializeForm: function(form) {
    const obj = {};
    const formData = new FormData(form);
    for (const [key, value] of formData) {
      if (obj[key] !== undefined) {
        if (!Array.isArray(obj[key])) {
          obj[key] = [obj[key]];
        }
        obj[key].push(value);
      } else {
        obj[key] = value;
      }
    }
    return obj;
  }
};

/**
 * Cart Functions
 */
theme.cart = {
  /**
   * Add item to cart
   */
  addItem: function(data) {
    return fetch(window.routes.cart_add_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      this.updateCartCount();
      return data;
    })
    .catch(error => {
      console.error('Error adding to cart:', error);
      throw error;
    });
  },

  /**
   * Update cart item quantity
   */
  updateItem: function(line, quantity) {
    return fetch(window.routes.cart_change_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        line: line,
        quantity: quantity
      })
    })
    .then(response => response.json())
    .then(data => {
      this.updateCartCount();
      return data;
    })
    .catch(error => {
      console.error('Error updating cart:', error);
      throw error;
    });
  },

  /**
   * Get current cart
   */
  getCart: function() {
    return fetch('/cart.js')
      .then(response => response.json())
      .catch(error => {
        console.error('Error getting cart:', error);
        throw error;
      });
  },

  /**
   * Update cart count in header
   */
  updateCartCount: function() {
    this.getCart().then(cart => {
      const cartCountElements = document.querySelectorAll('.cart-count-bubble');
      cartCountElements.forEach(element => {
        element.textContent = cart.item_count;
        if (cart.item_count > 0) {
          element.style.display = 'flex';
        } else {
          element.style.display = 'none';
        }
      });
    });
  }
};

/**
 * Product Forms
 */
theme.product = {
  /**
   * Initialize product form
   */
  initForm: function(formElement) {
    if (!formElement) return;

    formElement.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitButton = formElement.querySelector('[type="submit"]');
      const originalText = submitButton.textContent;
      
      // Disable button and show loading state
      submitButton.disabled = true;
      submitButton.textContent = 'Adding...';

      const formData = new FormData(formElement);
      const data = {
        items: [{
          id: formData.get('id'),
          quantity: parseInt(formData.get('quantity') || 1)
        }]
      };

      theme.cart.addItem(data)
        .then(response => {
          // Show success message
          submitButton.textContent = 'Added!';
          setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
          }, 2000);

          // Optionally open cart drawer
          const cartDrawer = document.getElementById('cart-drawer');
          if (cartDrawer) {
            cartDrawer.classList.add('active');
            document.getElementById('cart-drawer-overlay').classList.add('active');
          }
        })
        .catch(error => {
          // Show error message
          alert('Error adding to cart. Please try again.');
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        });
    });
  }
};

/**
 * Mobile Menu
 */
theme.mobileMenu = {
  init: function() {
    const menuToggle = document.querySelector('.header-menu-mobile-toggle');
    const menuDrawer = document.getElementById('mobile-menu-drawer');
    const menuClose = document.querySelector('.mobile-menu-drawer__close-button');

    if (menuToggle && menuDrawer) {
      menuToggle.addEventListener('click', function() {
        menuDrawer.setAttribute('open', '');
      });

      if (menuClose) {
        menuClose.addEventListener('click', function() {
          menuDrawer.removeAttribute('open');
        });
      }

      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (menuDrawer.hasAttribute('open') && 
            !menuDrawer.contains(e.target) && 
            !menuToggle.contains(e.target)) {
          menuDrawer.removeAttribute('open');
        }
      });
    }
  }
};

/**
 * Sticky Header
 */
theme.stickyHeader = {
  init: function() {
    const header = document.querySelector('.shopify-section-header-sticky');
    if (!header) return;

    let lastScroll = 0;
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', theme.utils.debounce(function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        header.style.transform = 'translateY(0)';
        return;
      }

      if (currentScroll > lastScroll && currentScroll > headerHeight) {
        // Scrolling down
        header.style.transform = `translateY(-${headerHeight}px)`;
      } else if (currentScroll < lastScroll) {
        // Scrolling up
        header.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    }, 100));
  }
};

/**
 * Quick View (optional feature)
 */
theme.quickView = {
  init: function() {
    const quickViewButtons = document.querySelectorAll('[data-quick-view]');
    
    quickViewButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const productHandle = this.getAttribute('data-quick-view');
        theme.quickView.open(productHandle);
      });
    });
  },

  open: function(productHandle) {
    // Implementation for quick view modal
    console.log('Quick view for:', productHandle);
  }
};

/**
 * Announcement Bar Auto-close
 */
theme.announcementBar = {
  init: function() {
    const closeButton = document.querySelector('.announcement-bar__close');
    const announcementBar = document.querySelector('.announcement-bar');
    
    if (closeButton && announcementBar) {
      closeButton.addEventListener('click', function() {
        announcementBar.style.display = 'none';
        localStorage.setItem('announcement-bar-closed', 'true');
      });

      // Check if user has previously closed the bar
      if (localStorage.getItem('announcement-bar-closed') === 'true') {
        announcementBar.style.display = 'none';
      }
    }
  }
};

/**
 * Initialize theme on DOM ready
 */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize mobile menu
  theme.mobileMenu.init();

  // Initialize sticky header
  theme.stickyHeader.init();

  // Initialize product forms
  const productForms = document.querySelectorAll('.product-form, .product-card__form');
  productForms.forEach(form => {
    theme.product.initForm(form);
  });

  // Initialize announcement bar
  theme.announcementBar.init();

  // Update cart count on page load
  theme.cart.updateCartCount();

  // Add animation classes on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections for fade-in animation
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    observer.observe(section);
  });
});

/**
 * Handle newsletter form submissions
 */
document.addEventListener('submit', function(e) {
  if (e.target.classList.contains('footer__newsletter-form')) {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    // Submit the form
    form.submit();
  }
});

/**
 * Handle age verification for liquor store
 */
theme.ageVerification = {
  init: function() {
    // Check if user has already verified age
    if (localStorage.getItem('age-verified') === 'true') {
      return;
    }

    // Create age verification modal
    const modal = document.createElement('div');
    modal.className = 'age-verification';
    modal.innerHTML = `
      <div class="age-verification__content">
        <h2 class="age-verification__title">Age Verification</h2>
        <p class="age-verification__text">
          You must be of legal drinking age to enter this website.
        </p>
        <div class="age-verification__buttons">
          <button class="button button--primary" id="age-verify-yes">
            I am 21 or older
          </button>
          <button class="button button--secondary" id="age-verify-no">
            I am under 21
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Handle verification
    document.getElementById('age-verify-yes').addEventListener('click', function() {
      localStorage.setItem('age-verified', 'true');
      modal.remove();
    });

    document.getElementById('age-verify-no').addEventListener('click', function() {
      window.location.href = 'https://www.google.com';
    });
  }
};

// Uncomment the line below to enable age verification
// theme.ageVerification.init();
