/* ============================================================
   InkScribe — main.js
   Dynamic blog posts, search, categories, modal reader
   ============================================================ */

const posts = [
  {
    id: 1,
    title: "Designing calm: how negative space improves focus",
    excerpt: "Minimalism isn't emptiness — it's clarity. Learn how intentional whitespace guides attention and reduces cognitive load in modern interfaces.",
    body: "In a world flooded with notifications and cluttered dashboards, negative space has become a luxury. Yet the calmest products share one trait: they respect the user's attention.\n\nWhitespace isn't wasted canvas; it is a breathing room that lets each element speak. When every pixel competes, nothing wins. Designers who embrace restraint create interfaces that feel effortless.\n\nStart by removing one element a day. Cut a border, reduce a shadow, lighten a color. Before long, your layouts will feel lighter — and your users more focused.",
    category: "Design",
    author: "Aria Bennett",
    date: "Aug 04, 2026",
    minutes: 6,
    icon: "fa-palette",
    gradient: "linear-gradient(135deg,#6d28d9,#a78bfa)"
  },
  {
    id: 2,
    title: "The hidden costs of AI in everyday software",
    excerpt: "AI features are everywhere, but who pays for them? A practical look at latency, energy and privacy trade-offs in modern apps.",
    body: "Artificial intelligence has quietly slipped into almost every tool we use. From smart replies to autocomplete, the convenience is real — but so are the trade-offs.\n\nLatency changes how users feel about speed. Energy usage grows with every inference. And privacy? Your data often becomes the training fuel.\n\nThe responsible path is transparency. Let users know when AI is helping, what data it uses, and how to turn it off. Good tools don't hide their intelligence.",
    category: "Technology",
    author: "Marcus Chen",
    date: "Aug 02, 2026",
    minutes: 8,
    icon: "fa-microchip",
    gradient: "linear-gradient(135deg,#db2777,#f472b6)"
  },
  {
    id: 3,
    title: "Morning routines that actually stick",
    excerpt: "Forget the 5 AM club. A realistic, science-backed approach to building habits that survive your busy schedule.",
    body: "Every productivity guru promises a miracle morning. But habits that feel like punishment never last past January.\n\nThe secret is anchoring. Attach a new habit to something you already do — a cup of coffee, a commute, a nightly shower. Small actions compound faster than grand gestures.\n\nGive yourself permission to start embarrassingly small. One page of reading. Five push-ups. Two minutes of journaling. Momentum, not intensity, builds lasting change.",
    category: "Lifestyle",
    author: "Sofia Alvarez",
    date: "Jul 30, 2026",
    minutes: 5,
    icon: "fa-mug-hot",
    gradient: "linear-gradient(135deg,#f59e0b,#fbbf24)"
  },
  {
    id: 4,
    title: "Writing in the age of short attention spans",
    excerpt: "Long-form is not dead. Here's how to structure prose so readers finish what they start — with hooks, beats and breathing room.",
    body: "We scroll more and read less. But the articles that truly move us still win our minutes — by earning them paragraph by paragraph.\n\nLead with the payoff. Front-load your best idea in the first line. Keep paragraphs to one thought. Vary sentence length like a drummer varies rhythm.\n\nAnd above all, respect the reader's time. Every sentence should either teach, inspire or entertain. If it does none of those, cut it.",
    category: "Writing",
    author: "Daniel Okafor",
    date: "Jul 27, 2026",
    minutes: 7,
    icon: "fa-feather",
    gradient: "linear-gradient(135deg,#0d9488,#2dd4bf)"
  },
  {
    id: 5,
    title: "A beginner's guide to CSS container queries",
    excerpt: "Media queries watch the viewport — container queries watch the component. Build truly responsive cards and widgets.",
    body: "For years, responsive design meant reacting to the browser window. But a sidebar card doesn't care how wide your monitor is; it cares how wide its container is.\n\nContainer queries change the game. By scoping styles to a container, you can design components that adapt to any layout automatically.\n\nBrowser support is solid in 2026. Pair them with flexible grids and your UI finally responds to its real environment: the space it lives in.",
    category: "Design",
    author: "Priya Sharma",
    date: "Jul 24, 2026",
    minutes: 9,
    icon: "fa-code",
    gradient: "linear-gradient(135deg,#2563eb,#60a5fa)"
  },
  {
    id: 6,
    title: "Cooking on a budget without eating the same meal",
    excerpt: "Seven pantry staples, five sauces, and a lifetime of combinations. Smart meal planning for people who hate planning.",
    body: "Eating cheap doesn't have to mean eating boring. The trick is a modular pantry — a small set of ingredients that combine in endless ways.\n\nMaster one sauce a week: tomato, tahini, vinaigrette, coconut curry. Rotate your grain, your protein, your greens. Same sauce, different canvas.\n\nPlan only the proteins and perishables. Everything else can live in the pantry, waiting for your next culinary impulse.",
    category: "Food",
    author: "Emma Laurent",
    date: "Jul 20, 2026",
    minutes: 4,
    icon: "fa-utensils",
    gradient: "linear-gradient(135deg,#ea580c,#fdba74)"
  }
];

const categories = [
  { name: "All", icon: "fa-layer-group", gradient: "linear-gradient(135deg,#6d28d9,#a78bfa)" },
  { name: "Technology", icon: "fa-microchip", gradient: "linear-gradient(135deg,#db2777,#f472b6)" },
  { name: "Design", icon: "fa-palette", gradient: "linear-gradient(135deg,#6d28d9,#a78bfa)" },
  { name: "Writing", icon: "fa-feather", gradient: "linear-gradient(135deg,#0d9488,#2dd4bf)" },
  { name: "Lifestyle", icon: "fa-mug-hot", gradient: "linear-gradient(135deg,#f59e0b,#fbbf24)" },
  { name: "Food", icon: "fa-utensils", gradient: "linear-gradient(135deg,#ea580c,#fdba74)" }
];

const state = { category: "All", query: "" };

const $ = (sel) => document.querySelector(sel);

/* ---------- Category chips ---------- */
function renderCategories() {
  const wrap = $("#categoryChips");
  if (!wrap) return;
  wrap.innerHTML = categories
    .map((c) => `
      <div class="col-6 col-md-4 col-lg-2">
        <div class="category-chip ${state.category === c.name ? "active" : ""}" data-category="${c.name}">
          <span class="chip-icon"><i class="fa-solid ${c.icon}"></i></span>
          <span class="chip-label">${c.name}</span>
        </div>
      </div>`)
    .join("");
}

/* ---------- Post cards ---------- */
function renderPosts() {
  const grid = $("#postsGrid");
  const noResults = $("#noResults");
  if (!grid) return;

  const filtered = posts.filter((p) => {
    const inCat = state.category === "All" || p.category === state.category;
    const q = state.query.trim().toLowerCase();
    const inQuery = !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.author.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return inCat && inQuery;
  });

  grid.innerHTML = filtered
    .map((p) => `
      <div class="col-md-6 col-lg-4">
        <article class="blog-card" data-id="${p.id}">
          <div class="card-thumb" style="background:${p.gradient}">
            <i class="fa-solid ${p.icon}"></i>
          </div>
          <div class="card-body-flex">
            <span class="card-cat">${p.category}</span>
            <h3 class="card-title">${p.title}</h3>
            <p class="card-text">${p.excerpt}</p>
            <span class="read-more">Read article <i class="fa-solid fa-arrow-right ms-1"></i></span>
            <div class="card-meta">
              <span class="avatar">${p.author.charAt(0)}</span>
              <span><i class="fa-solid fa-user me-1"></i>${p.author}</span>
              <span><i class="fa-regular fa-clock me-1"></i>${p.minutes} min</span>
              <span><i class="fa-regular fa-calendar me-1"></i>${p.date}</span>
            </div>
          </div>
        </article>
      </div>`)
    .join("");

  const countEl = $("#resultCount");
  if (countEl) {
    countEl.textContent = state.query || state.category !== "All"
      ? `${filtered.length} of ${posts.length} articles`
      : `${posts.length} articles`;
  }

  if (noResults) noResults.classList.toggle("d-none", filtered.length > 0);
}

/* ---------- Read modal ---------- */
function openPost(id) {
  const post = posts.find((p) => p.id === id);
  if (!post) return;
  const body = $("#readModalBody");
  $("#readModalLabel").textContent = post.title;
  body.innerHTML = `
    <div class="post-hero" style="background:${post.gradient}">
      <i class="fa-solid ${post.icon}"></i>
    </div>
    <div class="d-flex flex-wrap gap-3 align-items-center text-muted small mb-3">
      <span><span class="avatar me-1">${post.author.charAt(0)}</span> ${post.author}</span>
      <span><i class="fa-regular fa-calendar me-1"></i>${post.date}</span>
      <span><i class="fa-regular fa-clock me-1"></i>${post.minutes} min read</span>
    </div>
    <div class="post-body">
      ${post.body.split("\n").map((para) => `<p>${para}</p>`).join("")}
    </div>
    <div class="d-flex gap-2 mt-4">
      <button class="btn btn-outline-dark flex-fill"><i class="fa-regular fa-heart me-2"></i>Like</button>
      <button class="btn btn-outline-dark flex-fill"><i class="fa-solid fa-share-nodes me-2"></i>Share</button>
      <button class="btn btn-brand flex-fill"><i class="fa-regular fa-bookmark me-2"></i>Save</button>
    </div>`;
  bootstrap.Modal.getOrCreateInstance($("#readModal")).show();
}

/* ---------- Events ---------- */
function bindEvents() {
  document.addEventListener("click", (e) => {
    const chip = e.target.closest(".category-chip");
    if (chip) {
      state.category = chip.dataset.category;
      renderCategories();
      renderPosts();
    }
    const card = e.target.closest(".blog-card");
    if (card) {
      openPost(Number(card.dataset.id));
    }
  });

  const searchInput = $("#searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.query = e.target.value;
      renderPosts();
    });
  }

  const setSearchPlaceholder = () => {
    if (searchInput) {
      searchInput.placeholder = window.innerWidth < 576 ? "Search..." : "Search articles...";
    }
  };
  setSearchPlaceholder();
  window.addEventListener("resize", setSearchPlaceholder);

  const newsForm = $("#newsletterForm");
  if (newsForm) {
    newsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = $("#newsletterEmail").value;
      $("#newsletterMsg").textContent = `You're subscribed! Check ${email} for a welcome note.`;
      newsForm.reset();
    });
  }

  const nav = $("#siteNav");
  const backTop = $("#backToTop");
  window.addEventListener("scroll", () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 30);
    if (backTop) backTop.classList.toggle("show", window.scrollY > 500);
  });
  if (backTop) backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderPosts();
  bindEvents();
});
