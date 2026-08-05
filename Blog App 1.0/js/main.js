/* ------------------------------------------------------------------
   Blog App - Frontend only demo
   Data + interactivity for index.html, post.html and about.html
------------------------------------------------------------------- */

const POSTS = [
  {
    id: 1,
    slug: "beautiful-html",
    title: "The Art of Writing Beautiful HTML",
    excerpt:
      "Semantic, accessible and clean markup is the quiet foundation of every great website. Here is how to make your HTML a joy to read.",
    category: "Web Development",
    author: "Aarav Sharma",
    date: "Aug 2, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop",
    content: `
      <p>When most people think about front-end development they picture colours, animations and sleek layouts. But underneath every great interface sits a layer of well-structured markup that makes the whole experience possible.</p>
      <p>Writing clean HTML is about respect — respect for the next developer who reads your code, respect for screen readers, and respect for the browser that has to parse it.</p>
      <h3>Use semantic elements</h3>
      <p>Choose the element that describes the content, not the one that makes it look right. Reach for <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code> and <code>&lt;aside&gt;</code> before you grab another <code>&lt;div&gt;</code>.</p>
      <blockquote>Semantic HTML isn't just for machines. It is documentation that your future self will thank you for.</blockquote>
      <h3>Accessibility starts in the markup</h3>
      <p>Add descriptive alt text, proper heading hierarchy and meaningful link text. An accessible site is not a feature — it is the baseline.</p>
      <p>Start small: replace one meaningless div a day and watch your codebase become easier to navigate, debug and maintain.</p>
    `,
  },
  {
    id: 2,
    slug: "bootstrap-vs-tailwind",
    title: "Bootstrap vs Tailwind CSS: Which One Should You Pick?",
    excerpt:
      "Components-first or utility-first? A practical comparison to help you choose the right CSS framework for your next project.",
    category: "CSS",
    author: "Priya Verma",
    date: "Jul 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    content: `
      <p>Every front-end developer eventually faces the same question: should I use Bootstrap or Tailwind? The honest answer is that both are excellent — they just solve different problems.</p>
      <h3>Bootstrap: batteries included</h3>
      <p>Bootstrap gives you a complete design system out of the box. Navbars, cards, modals and a responsive grid all arrive pre-styled, which makes it perfect for rapid prototypes and dashboards.</p>
      <h3>Tailwind: build it your way</h3>
      <p>Tailwind is utility-first. You compose styles in your HTML using small utility classes, which gives you complete control and avoids fighting a framework's opinionated look.</p>
      <blockquote>Use Bootstrap when you need speed. Use Tailwind when you need control.</blockquote>
      <h3>Why not both?</h3>
      <p>This very blog combines them — Bootstrap for layout and components, Tailwind utilities for fine-grained spacing and theming. There is nothing wrong with mixing tools when it serves your users.</p>
    `,
  },
  {
    id: 3,
    slug: "javascript-mastery",
    title: "JavaScript Fundamentals Every Front-End Dev Must Know",
    excerpt:
      "From closures to event bubbling, these core JavaScript concepts will sharpen the way you write interactive web pages.",
    category: "JavaScript",
    author: "Rohan Mehta",
    date: "Jul 22, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&auto=format&fit=crop",
    content: `
      <p>JavaScript powers the interactive layer of the web. Understanding a few deep ideas makes every framework and library you use later make far more sense.</p>
      <h3>Closures</h3>
      <p>A closure is a function that remembers the scope in which it was created. This is what powers data privacy and lets you build things like counters and memoization utilities.</p>
      <h3>Event delegation</h3>
      <p>Instead of attaching a listener to every element, attach one to a parent and let events bubble up. It is faster, cleaner and handles dynamically added elements automatically.</p>
      <blockquote>Write code for humans first and machines second.</blockquote>
      <h3>The event loop</h3>
      <p>JavaScript is single-threaded, yet somehow non-blocking. The event loop explains how: tasks run, async callbacks queue, and the loop keeps everything moving.</p>
      <p>Master these fundamentals and every framework you pick up later will feel familiar.</p>
    `,
  },
  {
    id: 4,
    slug: "responsive-design",
    title: "Responsive Design in 2026: Mobile-First Is No Longer Optional",
    excerpt:
      "Half of your traffic is on a phone. Learn the modern approach to layouts that feel great on every screen size.",
    category: "Web Development",
    author: "Aarav Sharma",
    date: "Jul 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
    content: `
      <p>The mobile web is not coming — it is here. If your site does not adapt, your users simply leave.</p>
      <h3>Design for the smallest screen first</h3>
      <p>Starting mobile-first forces you to prioritise content. What truly matters? That question is easier to answer on a 375px wide screen.</p>
      <h3>Fluid grids and flexible media</h3>
      <p>Use relative units, fluid grids and <code>max-width: 100%</code> on images. These small habits prevent the vast majority of broken mobile layouts.</p>
      <blockquote>Responsive design is not a feature. It is a requirement.</blockquote>
      <h3>Test on real devices</h3>
      <p>DevTools are great, but nothing beats holding an actual phone. A quick once-over on a real device catches what emulation misses.</p>
    `,
  },
  {
    id: 5,
    slug: "future-of-frontend",
    title: "What the Future of Front-End Development Looks Like",
    excerpt:
      "AI assistants, web components and faster runtimes — a look at the trends shaping how we build the web in the coming years.",
    category: "Tech Trends",
    author: "Sana Iqbal",
    date: "Jul 8, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
    content: `
      <p>The only constant in front-end development is change. Here are the trends I am watching closely.</p>
      <h3>AI-assisted development</h3>
      <p>Code assistants now handle boilerplate, generate components and even suggest entire pages. The best developers treat AI as a senior pair-programmer, not a replacement.</p>
      <h3>Web components everywhere</h3>
      <p>Encapsulated, framework-agnostic components are finally practical across browsers, promising reusable building blocks that outlive any single framework's hype cycle.</p>
      <blockquote>The future belongs to developers who keep learning how to learn.</blockquote>
      <h3>Performance as a feature</h3>
      <p>With new runtimes and edge computing, blazing-fast experiences are becoming the default expectation rather than a nice-to-have.</p>
    `,
  },
  {
    id: 6,
    slug: "css-clean-code",
    title: "Clean CSS: Organizing Stylesheets That Scale",
    excerpt:
      "Naming conventions, layers and tokens — practical tips for stylesheets that stay maintainable as your project grows.",
    category: "CSS",
    author: "Priya Verma",
    date: "Jun 29, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
    content: `
      <p>CSS is the easiest language to start writing and one of the hardest to maintain at scale. A little discipline goes a long way.</p>
      <h3>Use design tokens</h3>
      <p>Define your colours, spacing and typography as CSS variables. When your brand shifts, you change one value instead of two hundred.</p>
      <h3>Adopt a naming convention</h3>
      <p>Whether it is BEM or something simpler, consistency beats cleverness. Choose a system and document it.</p>
      <blockquote>Good CSS is invisible. Bad CSS is a tax you pay on every future change.</blockquote>
      <h3>Leverage cascade layers</h3>
      <p>Cascade layers give you explicit control over specificity battles, so you can stop reaching for <code>!important</code>.</p>
    `,
  },
  {
    id: 7,
    slug: "ui-trends-2026",
    title: "7 UI Design Trends That Will Dominate 2026",
    excerpt:
      "From soft gradients to bold typography, these are the visual directions designers are leaning into this year.",
    category: "UI Design",
    author: "Sana Iqbal",
    date: "Jun 18, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    content: `
      <p>Design trends ebb and flow, but a few clear directions are shaping interfaces in 2026.</p>
      <h3>Soft, glassy surfaces</h3>
      <p>Subtle transparency, blurred backdrops and layered depth create a premium, tactile feel without visual noise.</p>
      <h3>Expressive typography</h3>
      <p>Brands are leaning into oversized, characterful typefaces as the primary visual statement — sometimes with no hero image at all.</p>
      <blockquote>Trends are inspiration, not instructions. Always serve your users first.</blockquote>
      <h3>Purposeful micro-interactions</h3>
      <p>Small, delightful responses to user action build trust and make products feel alive.</p>
    `,
  },
  {
    id: 8,
    slug: "build-your-own-blog",
    title: "How I Built My Own Blog With Pure HTML, CSS and JS",
    excerpt:
      "No frameworks, no build step — just clean front-end code. Here is the journey behind the site you are reading right now.",
    category: "JavaScript",
    author: "Rohan Mehta",
    date: "Jun 10, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop",
    content: `
      <p>Everyone told me to reach for a framework. I decided to build this blog with nothing but HTML, CSS and JavaScript — and I learned more than I expected.</p>
      <h3>The data layer</h3>
      <p>All posts live in a JavaScript array. Rendering them with a few template literals keeps everything simple, fast and dependency-free.</p>
      <h3>Search and filters</h3>
      <p>With the data in memory, search and category filters become a few lines of <code>filter()</code> and <code>map()</code>. No server round-trips needed.</p>
      <blockquote>Sometimes the simplest stack is the smartest one.</blockquote>
      <h3>Why it works</h3>
      <p>For a content-focused site this is fast, portable and easy to maintain. When the day comes that I need a database and auth, I will graduate to something heavier — but until then, this is pure joy.</p>
    `,
  },
];

const CATEGORIES = [...new Set(POSTS.map((p) => p.category))];

/* ------------------------------------------------------------------
   Render helper
------------------------------------------------------------------- */

function postCard(post) {
  return `
    <div class="col-md-6 col-lg-4 d-flex">
      <article class="blog-card w-100">
        <img src="${post.image}" alt="${post.title}" class="card-img-top" loading="lazy" />
        <div class="card-body d-flex flex-column p-4">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <span class="category-chip">${post.category}</span>
            <span class="meta-line">${post.readTime}</span>
          </div>
          <h3 class="card-title fs-5 mb-2"><a href="post.html?slug=${post.slug}">${post.title}</a></h3>
          <p class="card-text text-muted flex-grow-1">${post.excerpt}</p>
          <div class="d-flex align-items-center justify-content-between mt-3">
            <div class="d-flex align-items-center gap-2">
              <img src="${authorAvatar(post.author)}" alt="${post.author}" class="avatar" />
              <div>
                <div class="fw-semibold small">${post.author}</div>
                <div class="meta-line">${post.date}</div>
              </div>
            </div>
            <a href="post.html?slug=${post.slug}" class="btn btn-sm btn-brand">Read</a>
          </div>
        </div>
      </article>
    </div>`;
}

function authorAvatar(name) {
  return `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(
    name
  )}&backgroundColor=6d28d9&textColor=ffffff`;
}

/* ------------------------------------------------------------------
   index.html logic
------------------------------------------------------------------- */

function initIndex() {
  const grid = document.getElementById("posts-grid");
  const countEl = document.getElementById("result-count");
  if (!grid) return;

  const state = { query: "", category: "All" };

  function render() {
    const filtered = POSTS.filter((p) => {
      const matchCat = state.category === "All" || p.category === state.category;
      const q = state.query.toLowerCase();
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });

    grid.innerHTML = filtered.length
      ? filtered.map(postCard).join("")
      : `<div class="col-12 text-center py-5">
           <h4 class="fw-bold">No posts found</h4>
           <p class="text-muted">Try a different search term or category.</p>
         </div>`;

    countEl.textContent = `${filtered.length} post${filtered.length === 1 ? "" : "s"}`;
  }

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.query = e.target.value.trim();
      render();
    });
  }

  const catBar = document.getElementById("category-filter");
  if (catBar) {
    catBar.innerHTML = ["All", ...CATEGORIES]
      .map(
        (c) =>
          `<button class="btn btn-sm btn-outline-brand ${c === "All" ? "active" : ""}" data-cat="${c}">${c}</button>`
      )
      .join("");

    catBar.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-cat]");
      if (!btn) return;
      state.category = btn.dataset.cat;
      catBar.querySelectorAll("[data-cat]").forEach((b) => b.classList.toggle("active", b === btn));
      render();
    });
  }

  render();
}

/* ------------------------------------------------------------------
   post.html logic
------------------------------------------------------------------- */

function initPost() {
  const container = document.getElementById("post-detail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const post = POSTS.find((p) => p.slug === slug) || POSTS[0];

  document.title = `${post.title} — DevBlog`;

  container.innerHTML = `
    <nav aria-label="breadcrumb" class="mb-3">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item"><a href="index.html" class="text-decoration-none">Home</a></li>
        <li class="breadcrumb-item"><a href="index.html" class="text-decoration-none">Blog</a></li>
        <li class="breadcrumb-item active" aria-current="page">${post.title}</li>
      </ol>
    </nav>

    <span class="category-chip mb-3">${post.category}</span>
    <h1 class="display-5 fw-bold mb-3">${post.title}</h1>
    <p class="lead text-muted mb-4">${post.excerpt}</p>

    <div class="d-flex align-items-center gap-3 mb-4">
      <img src="${authorAvatar(post.author)}" alt="${post.author}" class="avatar-lg" />
      <div>
        <div class="fw-bold">${post.author}</div>
        <div class="meta-line">${post.date} &middot; ${post.readTime}</div>
      </div>
      <button id="like-btn" class="btn btn-outline-brand ms-auto d-inline-flex align-items-center gap-2">
        <span id="like-icon">&#9825;</span> <span id="like-count">0</span>
      </button>
    </div>

    <img src="${post.image}" alt="${post.title}" class="img-fluid rounded-4 mb-4 w-100" style="max-height:420px;object-fit:cover;" />

    <div class="post-body">${post.content}</div>

    <div class="d-flex align-items-center gap-2 mt-5 pt-4 border-top">
      <span class="fw-semibold me-1">Share:</span>
      <button class="btn btn-sm btn-outline-brand share-btn" data-text="Twitter">Twitter</button>
      <button class="btn btn-sm btn-outline-brand share-btn" data-text="Facebook">Facebook</button>
      <button class="btn btn-sm btn-outline-brand share-btn" data-text="LinkedIn">LinkedIn</button>
    </div>
  `;

  const likeBtn = document.getElementById("like-btn");
  const likeCount = document.getElementById("like-count");
  const likeIcon = document.getElementById("like-icon");
  let liked = false;
  let likes = 0;

  likeBtn.addEventListener("click", () => {
    liked = !liked;
    likes += liked ? 1 : -1;
    likeIcon.innerHTML = liked ? "&#9829;" : "&#9825;";
    likeBtn.classList.toggle("active", liked);
    likeCount.textContent = likes;
  });

  const related = POSTS.filter((p) => p.id !== post.id).slice(0, 3);
  const relatedEl = document.getElementById("related-posts");
  if (relatedEl) {
    relatedEl.innerHTML = related.map(postCard).join("");
  }

  const popularEl = document.getElementById("popular-posts");
  if (popularEl) {
    const popular = POSTS.filter((p) => p.id !== post.id).slice(0, 3);
    popularEl.innerHTML = popular
      .map(
        (p) => `
          <div class="post-card-sm mb-3">
            <img src="${p.image}" alt="${p.title}" />
            <div>
              <div class="sm-title"><a href="post.html?slug=${p.slug}">${p.title}</a></div>
              <div class="meta-line">${p.date}</div>
            </div>
          </div>`
      )
      .join("");
  }
}

/* ------------------------------------------------------------------
   about.html logic
------------------------------------------------------------------- */

function initAbout() {
  const stats = document.getElementById("author-stats");
  if (stats) {
    stats.innerHTML = `
      <div class="d-flex justify-content-around text-center py-3">
        <div><div class="fs-3 fw-bold text-brand">${POSTS.length}</div><div class="text-muted small">Articles</div></div>
        <div><div class="fs-3 fw-bold text-brand">${POSTS.reduce((n, p) => n + parseInt(p.readTime), 0)}</div><div class="text-muted small">Read Minutes</div></div>
        <div><div class="fs-3 fw-bold text-brand">${CATEGORIES.length}</div><div class="text-muted small">Categories</div></div>
      </div>`;
  }

  const recent = document.getElementById("recent-posts");
  if (recent) {
    recent.innerHTML = POSTS.slice(0, 4).map(postCard).join("");
  }
}

/* ------------------------------------------------------------------
   Boot
------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  initIndex();
  initPost();
  initAbout();
});
