/* Shared site chrome: one source of truth for the navigation and footer.
   Usage: <site-header root="../" current="projects"></site-header>
          <site-footer root="../"></site-footer>
   `root` is the relative path back to the site root ("" from index.html). */

const NAV_ITEMS = [
    { key: 'home', label: 'Home', path: 'index.html' },
    { key: 'projects', label: 'Projects', path: 'pages/projects.html' },
    { key: 'about', label: 'About &amp; Contact', path: 'pages/about.html' },
    { key: 'wireframe', label: 'Wireframe', path: 'pages/wireframe.html' },
    { key: 'combined', label: 'Combined', path: 'pages/combined.html' }
];

const SOCIAL_LINKS = [
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Twitter', url: 'https://twitter.com' }
];

const BRAND = 'Developer Portfolio';

const externalLink = ({ label, url }) =>
    `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;

class SiteHeader extends HTMLElement {
    connectedCallback() {
        const root = this.getAttribute('root') || '';
        const current = this.getAttribute('current') || '';
        const links = NAV_ITEMS.map(({ key, label, path }) => {
            const currentAttr = key === current ? ' aria-current="page"' : '';
            return `<a href="${root}${path}"${currentAttr}>${label}</a>`;
        }).join('\n                    ');

        this.innerHTML = `
        <header class="site-header">
            <nav class="header-nav" aria-label="Primary navigation">
                <a class="header-brand" href="${root}index.html">${BRAND}</a>
                <div class="header-links">
                    ${links}
                </div>
            </nav>
        </header>`;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="site-footer">
            <p>&copy; 2026 My Portfolio Site</p>
            <div class="footer-links">
                ${SOCIAL_LINKS.map(externalLink).join('\n                ')}
            </div>
        </footer>`;
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
