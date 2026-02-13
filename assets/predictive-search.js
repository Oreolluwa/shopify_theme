/**
 * Predictive search component
 */

class PredictiveSearch extends HTMLElement {
  constructor() {
    super();
    this.cachedResults = {};
    this.input = this.querySelector('input[type="search"]');
    this.predictiveSearchResults = this.querySelector('[data-predictive-search]');

    this.input.addEventListener('input', this.debounce((event) => {
      this.onChange(event);
    }, 300).bind(this));
  }

  onChange(event) {
    const searchTerm = event.target.value.trim();

    if (!searchTerm.length) {
      this.close();
      return;
    }

    this.getSearchResults(searchTerm);
  }

  getSearchResults(searchTerm) {
    const queryKey = searchTerm.replace(" ", "-").toLowerCase();
    
    if (this.cachedResults[queryKey]) {
      this.renderSearchResults(this.cachedResults[queryKey]);
      return;
    }

    fetch(`${window.routes.predictive_search_url}?q=${encodeURIComponent(searchTerm)}&section_id=predictive-search`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.text();
      })
      .then((text) => {
        const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;
        this.cachedResults[queryKey] = resultsMarkup;
        this.renderSearchResults(resultsMarkup);
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
      });
  }

  renderSearchResults(resultsMarkup) {
    this.predictiveSearchResults.innerHTML = resultsMarkup;
    this.open();
  }

  open() {
    this.predictiveSearchResults.style.display = 'block';
  }

  close() {
    this.predictiveSearchResults.style.display = 'none';
  }

  debounce(fn, wait) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }
}

customElements.define('predictive-search', PredictiveSearch);
