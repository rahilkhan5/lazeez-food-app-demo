/* Lazeez food delivery — demo app logic (vanilla, no build step). */

const I = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  chevd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  chevr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  sliders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="1" x2="7" y1="14" y2="14"/><line x1="9" x2="15" y1="8" y2="8"/><line x1="17" x2="23" y1="16" y2="16"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17.8 5.9 20.3l1.4-6.7-5-4.6 6.8-.7z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1"><path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.2 1.5 4 3 5.5l7 7Z"/></svg>',
  heartf: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21 4.5 13.5C3 12 2 10.2 2 8.5A4.5 4.5 0 0 1 12 5 4.5 4.5 0 0 1 22 8.5c0 1.7-1 3.5-2.5 5z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M5 12h14"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  bike: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 17.5h-5l-2.5-7H5m8 7 3-9h3m-6 9 1.5-4.5"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>',
  receipt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1-2-1.5-3.5-.5-5 .5 1.5 2 2.8 3.5 4 1.5 1.2 2.5 2.5 2.5 4.5a5 5 0 1 1-10 0c0-1.3.5-2.3 1-3 .5.8 1 1.5 1.5 2Z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/><path d="M21 9h-6a2 2 0 0 0 0 6h6Z"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2H5a3 3 0 0 0-3 3v4l11 11 7-7Z"/><circle cx="7.5" cy="7.5" r="1.3" fill="currentColor"/></svg>',
  heartp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.2 1.5 4 3 5.5l7 7Z"/></svg>',
  flash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>',
  signal: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="14" width="3" height="6" rx="1"/><rect x="6" y="10" width="3" height="10" rx="1"/><rect x="11" y="6" width="3" height="14" rx="1"/><rect x="16" y="2" width="3" height="18" rx="1" opacity=".4"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M2 8a15 15 0 0 1 20 0"/><path d="M5 12a10 10 0 0 1 14 0"/><path d="M8.5 15.5a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1" fill="currentColor" stroke="none"/></svg>',
  batt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="18" height="10" rx="3"/><rect x="4" y="9" width="12" height="6" rx="1.5" fill="currentColor" stroke="none"/><path d="M22 10v4" stroke-linecap="round"/></svg>',
};

const money = (n) => 'Rs ' + n.toLocaleString('en-PK');
const el = (id) => document.getElementById(id);

let DATA = [];
const state = {
  screen: 'home', tab: 'home', cat: 'all',
  rest: null, cart: [], cartRest: null,
  payment: 'cod', promoOn: false,
  trackStep: 1,
};
const stack = [];

const CATS = [
  { id: 'all', emoji: '🍽️', label: 'All', rid: null },
  { id: 'flame', emoji: '🍖', label: 'BBQ', rid: 'flame' },
  { id: 'ocean', emoji: '🦐', label: 'Seafood', rid: 'ocean' },
  { id: 'pasta', emoji: '🍝', label: 'Pasta', rid: 'pasta' },
  { id: 'green', emoji: '🥗', label: 'Healthy', rid: 'green' },
  { id: 'sweet', emoji: '🍰', label: 'Dessert', rid: 'sweet' },
];

function go(screen, push = true) {
  if (push) stack.push(state.screen);
  state.screen = screen;
  render();
  const v = document.querySelector('.view, .rsheet, .track-sheet');
  if (v) v.scrollTop = 0;
}
function back() {
  const prev = stack.pop() || 'home';
  state.screen = prev;
  render();
}

function cartCount() { return state.cart.reduce((a, c) => a + c.qty, 0); }
function subtotal() { return state.cart.reduce((a, c) => a + c.dish.price * c.qty, 0); }
function deliveryFee() { return state.cartRest ? state.cartRest.deliveryFee : 0; }
function discount() { return state.promoOn ? 150 : 0; }
function total() { return Math.max(0, subtotal() + deliveryFee() + 30 - discount()); }

function addToCart(dishId) {
  let dish, rest;
  for (const r of DATA) { const d = r.dishes.find((x) => x.id === dishId); if (d) { dish = d; rest = r; break; } }
  if (!dish) return;
  if (state.cartRest && state.cartRest.id !== rest.id && state.cart.length) {
    state.cart = []; // one restaurant per order (demo)
  }
  state.cartRest = rest;
  const line = state.cart.find((c) => c.dish.id === dishId);
  if (line) line.qty++; else state.cart.push({ dish, qty: 1 });
  toast('Added to cart');
  renderChrome();
}
function changeQty(dishId, d) {
  const line = state.cart.find((c) => c.dish.id === dishId);
  if (!line) return;
  line.qty += d;
  if (line.qty <= 0) state.cart = state.cart.filter((c) => c.dish.id !== dishId);
  if (!state.cart.length) state.cartRest = null;
  render();
}

let toastT;
function toast(msg) {
  const t = el('toast'); if (!t) return;
  t.innerHTML = I.check + '<span>' + msg + '</span>';
  t.classList.remove('show'); void t.offsetWidth; t.classList.add('show');
}

/* ---------- shared bits ---------- */
function statusBar(onHero) {
  return `<div class="statusbar ${onHero ? 'onhero' : ''}">
    <span>9:41</span><div class="notch"></div>
    <div class="sb-right">${I.signal}${I.wifi}${I.batt}</div>
  </div>`;
}
function tabBar() {
  const t = (id, icon, label) => `<button class="tab ${state.tab === id ? 'active' : ''}" data-act="tab" data-id="${id}">${icon}<span>${label}</span><span class="dot"></span></button>`;
  return `<nav class="tabbar">${t('home', I.home, 'Home')}${t('search', I.search, 'Search')}${t('orders', I.receipt, 'Orders')}${t('profile', I.user, 'Profile')}</nav>`;
}
function cartBar(withTabs) {
  if (!state.cart.length || ['cart', 'checkout', 'track'].includes(state.screen)) return '';
  return `<button class="cartbar ${withTabs ? 'with-tabs' : ''}" data-act="openCart">
    <span class="ci"><span class="badge">${cartCount()}</span> View cart</span>
    <span class="go">${money(total())} ${I.chevr}</span>
  </button>`;
}

/* ---------- screens ---------- */
function homeScreen() {
  const cats = CATS.map((c) => `<button class="cat ${state.cat === c.id ? 'active' : ''}" data-act="cat" data-id="${c.id}"><span class="emoji">${c.emoji}</span><span>${c.label}</span></button>`).join('');
  const popular = DATA.flatMap((r) => r.dishes.map((d) => ({ d, r }))).sort((a, b) => b.d.rating - a.d.rating).slice(0, 8);
  const pcards = popular.map(({ d, r }) => `
    <button class="dish-card" data-act="rest" data-id="${r.id}">
      <div class="thumb"><img src="${d.img}" alt="${d.name}" loading="lazy">
        <span class="rate">${I.star} ${d.rating}</span>
        <span class="heart">${I.heart}</span>
      </div>
      <div class="body"><b>${d.name}</b><small>${r.name}</small>
        <div class="row2"><span class="price">${money(d.price)}</span><span class="add-btn" data-act="add" data-id="${d.id}" data-stop>${I.plus}</span></div>
      </div>
    </button>`).join('');
  const rests = DATA.filter((r) => state.cat === 'all' || r.id === state.cat).map(restCard).join('');
  return `
  <div class="view anim-in">
    <div class="home-hero">
      ${statusBar(true)}
      <div class="loc-row">
        <div class="loc"><span class="pin">${I.pin}</span><div><small>DELIVER TO</small><b>Gulberg III, Lahore ${I.chevd}</b></div></div>
        <div class="avatar" style="display:grid;place-items:center;background:rgba(255,255,255,.2);font-size:20px">🧑</div>
      </div>
      <div class="greet"><span>Assalam o alaikum, Ali 👋</span>What are you craving today?</div>
      <div class="searchbar">${I.search}<span>Search dishes, restaurants…</span><span class="filter">${I.sliders}</span></div>
    </div>

    <div class="cats">${cats}</div>

    <div class="promo">
      <div class="ptext"><span class="tag">LAZEEZ50</span><h4>50% OFF<br>first order</h4><p>Up to Rs 150 off</p></div>
      <img class="pimg" src="${DATA[0]?.dishes[1]?.img || DATA[0]?.cover}" alt="">
    </div>

    <div class="pad"><div class="sec-head"><h3>Popular now ${I.flame}</h3><a>See all</a></div></div>
    <div class="hcards">${pcards}</div>

    <div class="pad">
      <div class="sec-head"><h3>Restaurants near you</h3><a>See all</a></div>
      ${rests}
    </div>
    <div class="gap-bottom"></div>
  </div>`;
}

function restCard(r) {
  const promo = r.promo ? `<span class="ptag">${r.promo}</span>` : '';
  const free = r.deliveryFee === 0;
  return `<button class="rest-card" data-act="rest" data-id="${r.id}">
    <div class="cover"><img src="${r.cover}" alt="${r.name}" loading="lazy">${promo}<span class="fav">${I.heart}</span></div>
    <div class="meta">
      <div class="t"><h4>${r.name}</h4><span class="r">${I.star} ${r.rating}</span></div>
      <div class="sub">${r.tag} · ${r.dishes.length} dishes</div>
      <div class="chips">
        <span class="c">${I.clock} ${r.mins} min</span>
        <span class="c ${free ? 'free' : ''}">${I.bike} ${free ? 'Free' : money(r.deliveryFee)}</span>
        <span class="c">${I.star} ${(400 + Math.floor(Math.random() * 900))}+ ratings</span>
      </div>
    </div>
  </button>`;
}

function restaurantScreen() {
  const r = state.rest;
  const rows = r.dishes.map((d) => `
    <div class="mrow">
      <img class="mimg" src="${d.img}" alt="${d.name}">
      <div class="mb">
        <b>${d.name}</b>
        <div class="desc">Freshly made · <span class="mini-kcal">${I.flame} ${d.kcal} kcal</span></div>
        <div class="pr"><span class="price">${money(d.price)} <i>· ${I.star ? '' : ''}${d.rating}★</i></span>
          <button class="plus" data-act="add" data-id="${d.id}">${I.plus}</button>
        </div>
      </div>
    </div>`).join('');
  const free = r.deliveryFee === 0;
  return `
  <div class="screen-inner anim-in" style="display:flex;flex-direction:column;height:100%">
    <div class="rhero">
      ${statusBar(true)}
      <div class="topbtns"><button class="circ" data-act="back">${I.back}</button><button class="circ">${I.heart}</button></div>
      <img src="${r.cover}" alt="${r.name}">
    </div>
    <div class="rsheet">
      <h2 class="rtitle">${r.name}</h2>
      <p class="rtag">${r.tag} · Open now</p>
      <div class="rstats">
        <div class="stat r"><b>${I.star} ${r.rating}</b><small>${(400 + Math.floor(Math.random()*900))}+ ratings</small></div>
        <div class="stat t"><b>${I.clock} ${r.mins}</b><small>minutes</small></div>
        <div class="stat d"><b>${I.bike} ${free ? 'Free' : r.deliveryFee}</b><small>delivery</small></div>
      </div>
      <div class="menu-head">Menu · ${r.dishes.length} items</div>
      ${rows}
      <div class="gap-bottom"></div>
    </div>
  </div>`;
}

function cartScreen() {
  if (!state.cart.length) {
    return `<div class="view anim-in">${statusBar(false)}
      <div class="plain-head"><button class="circ sm" data-act="back">${I.back}</button><h2>Your cart</h2></div>
      <div class="empty"><div class="big">🛒</div><b>Your cart is empty</b>Add some lazeez food to get started</div></div>`;
  }
  const items = state.cart.map((c) => `
    <div class="citem">
      <img src="${c.dish.img}" alt="">
      <div class="cb"><b>${c.dish.name}</b><span class="price">${money(c.dish.price)}</span></div>
      <div class="stepper">
        <button data-act="dec" data-id="${c.dish.id}">${I.minus}</button><b>${c.qty}</b><button data-act="inc" data-id="${c.dish.id}">${I.plus}</button>
      </div>
    </div>`).join('');
  return `
  <div class="view anim-in">${statusBar(false)}
    <div class="plain-head"><button class="circ sm" data-act="back">${I.back}</button><h2>Your cart</h2></div>
    <div class="pad">
      <div style="color:var(--muted);font-weight:600;font-size:12.5px;margin-bottom:10px">From ${state.cartRest.name}</div>
      ${items}
      <div class="promo-in"><input value="${state.promoOn ? 'LAZEEZ50' : ''}" placeholder="Promo code (try LAZEEZ50)" id="promoInput"><button data-act="applyPromo">Apply</button></div>
      <div class="bill">
        <div class="bline"><span>Subtotal</span><span>${money(subtotal())}</span></div>
        <div class="bline"><span>Delivery fee</span><span>${deliveryFee() === 0 ? 'Free' : money(deliveryFee())}</span></div>
        <div class="bline"><span>Platform fee</span><span>${money(30)}</span></div>
        ${state.promoOn ? `<div class="bline" style="color:var(--green)"><span>Promo LAZEEZ50</span><span>- ${money(150)}</span></div>` : ''}
        <div class="bline total"><span>Total</span><span>${money(total())}</span></div>
      </div>
      <div class="gap-bottom"></div>
    </div>
    <button class="cta" data-act="checkout">Proceed to checkout · ${money(total())} ${I.chevr}</button>
  </div>`;
}

function checkoutScreen() {
  const pay = (id, label, sub, bg, txt) => `
    <button class="pay ${state.payment === id ? 'sel' : ''}" data-act="pay" data-id="${id}" style="width:100%;text-align:left">
      <span class="picon" style="background:${bg}">${txt}</span>
      <div><b>${label}</b><small>${sub}</small></div>
      <span class="radio"></span>
    </button>`;
  return `
  <div class="view anim-in">${statusBar(false)}
    <div class="plain-head"><button class="circ sm" data-act="back">${I.back}</button><h2>Checkout</h2></div>
    <div class="pad">
      <div class="block-card">
        <div class="bh">${I.pin} Delivery address</div>
        <div class="addr"><span class="ic">${I.home}</span><div><b>Home</b><p>House 24-B, Street 7, Gulberg III, Lahore</p></div><span class="edit">Change</span></div>
      </div>
      <div class="block-card">
        <div class="bh">${I.bike} Delivery</div>
        <div class="addr"><span class="ic">${I.clock}</span><div><b>Standard · ${state.cartRest?.mins || 30} min</b><p>Delivered by a Lazeez rider to your door</p></div></div>
      </div>
      <div class="block-card">
        <div class="bh">${I.wallet} Payment method</div>
        ${pay('cod', 'Cash on delivery', 'Pay when it arrives', '#18a957', 'COD')}
        ${pay('jazzcash', 'JazzCash', 'Mobile wallet', '#b01116', 'JC')}
        ${pay('card', 'Debit / Credit card', 'Visa •••• 4291', 'linear-gradient(135deg,#2a2a35,#555)', 'CARD')}
      </div>
      <div class="bill">
        <div class="bline"><span>Subtotal</span><span>${money(subtotal())}</span></div>
        <div class="bline"><span>Delivery + platform</span><span>${money(deliveryFee() + 30)}</span></div>
        ${state.promoOn ? `<div class="bline" style="color:var(--green)"><span>Promo</span><span>- ${money(150)}</span></div>` : ''}
        <div class="bline total"><span>Total</span><span>${money(total())}</span></div>
      </div>
      <div class="gap-bottom"></div>
    </div>
    <button class="cta" data-act="placeOrder">${I.bag} Place order · ${money(total())}</button>
  </div>`;
}

function trackScreen() {
  const steps = [
    { t: 'Order confirmed', s: 'Restaurant accepted your order', done: true },
    { t: 'Preparing your food', s: `${state.cartRest?.name || 'Kitchen'} is cooking`, active: state.trackStep === 1 },
    { t: 'On the way', s: 'Rider is heading to you', active: state.trackStep === 2 },
    { t: 'Delivered', s: 'Enjoy your meal! 🎉', active: state.trackStep === 3 },
  ];
  const cls = (i) => i < state.trackStep ? 'done' : (steps[i].active ? 'active' : '');
  const ic = (i) => i < state.trackStep ? I.check : (i === 1 ? I.flame : i === 2 ? I.bike : I.home);
  const stepHtml = steps.map((st, i) => `
    <div class="step ${cls(i)}"><span class="sdot">${ic(i)}</span><div class="st"><b>${st.t}</b><small>${st.s}</small></div></div>`).join('');
  const eta = [20, 14, 4, 0][state.trackStep];
  return `
  <div class="screen-inner anim-in" style="display:flex;flex-direction:column;height:100%">
    <div class="track-map">
      ${statusBar(false)}
      <div class="topbtns"><button class="circ" data-act="goHome">${I.back}</button></div>
      <svg class="roads" viewBox="0 0 392 240" preserveAspectRatio="none"><path d="M0 160 C 90 150 130 110 180 110 S 300 70 392 60" stroke="#ffffff" stroke-width="10" fill="none" opacity=".6"/><path d="M40 240 L 120 120 L 240 150 L 340 20" stroke="#ffffff" stroke-width="5" fill="none" opacity=".5"/></svg>
      <div class="shop-pin">${I.flame}</div>
      <div class="home-pin">${I.home}</div>
      <div class="rider">${I.bike}</div>
    </div>
    <div class="track-sheet">
      <div class="eta-card"><div class="l"><small>${state.trackStep >= 3 ? 'Delivered' : 'Arriving in'}</small><b>${eta <= 0 ? 'Now 🎉' : eta + ' min'}</b></div><div class="ring"></div></div>
      <div class="steps">${stepHtml}</div>
      <div class="rider-card">
        <div style="width:50px;height:50px;border-radius:50%;background:var(--accent-grad);display:grid;place-items:center;font-size:24px;flex:none">🛵</div>
        <div class="rc"><b>Bilal Ahmed</b><small>${I.star} 4.9 · Your rider</small></div>
        <button class="chat">${I.chat}</button><button class="call">${I.phone}</button>
      </div>
      <button class="cta block" data-act="goHome">Back to home</button>
      <div class="gap-bottom"></div>
    </div>
  </div>`;
}

function searchScreen() {
  const terms = ['Biryani', 'Burgers', 'Pizza', 'BBQ', 'Seafood', 'Pasta', 'Desserts', 'Healthy', 'Karahi', 'Shawarma'];
  const all = DATA.flatMap((r) => r.dishes.map((d) => ({ d, r }))).slice(0, 10);
  const rows = all.map(({ d, r }) => `
    <div class="mrow" data-act="rest" data-id="${r.id}">
      <img class="mimg" src="${d.img}" alt=""><div class="mb"><b>${d.name}</b><div class="desc">${r.name}</div><div class="pr"><span class="price">${money(d.price)}</span><button class="plus" data-act="add" data-id="${d.id}" data-stop>${I.plus}</button></div></div>
    </div>`).join('');
  return `<div class="view anim-in">${statusBar(false)}
    <div class="pad"><h2 style="font-size:24px;font-weight:800;margin:6px 0 14px">Search</h2>
      <div class="searchbar" style="box-shadow:var(--shadow-sm);color:var(--muted)">${I.search}<span>Search dishes, restaurants…</span></div>
      <div style="font-weight:800;font-size:15px;margin:20px 0 2px">Popular searches</div>
      <div class="schips">${terms.map((t) => `<span class="schip">${t}</span>`).join('')}</div>
      <div style="font-weight:800;font-size:15px;margin:6px 0 8px">Trending dishes</div>
      ${rows}<div class="gap-bottom"></div>
    </div></div>`;
}

function ordersScreen() {
  const active = state.cart.length || state.screen === 'track';
  return `<div class="view anim-in">${statusBar(false)}
    <div class="pad"><h2 style="font-size:24px;font-weight:800;margin:6px 0 16px">Your orders</h2>
      <div class="block-card"><div class="bh" style="color:var(--accent)">${I.bike} Active order</div>
        <div class="addr"><span class="ic">${I.flame}</span><div><b>${state.cartRest?.name || 'Flame & Grill'}</b><p>Arriving soon · tap to track your rider</p></div><span class="edit" data-act="trackNow">Track</span></div>
      </div>
      <div style="font-weight:800;font-size:15px;margin:18px 0 10px">Past orders</div>
      ${DATA.slice(0, 3).map((r) => `<div class="citem"><img src="${r.cover}" alt=""><div class="cb"><b>${r.name}</b><small style="color:var(--muted);font-size:12px;font-weight:500">${r.dishes.length} items · delivered</small></div><button class="promo-in" style="margin:0"><span style="background:var(--ink);color:#fff;border-radius:11px;padding:8px 13px;font-size:12px;font-weight:700">Reorder</span></button></div>`).join('')}
      <div class="gap-bottom"></div>
    </div></div>`;
}

function profileScreen() {
  const row = (icon, label) => `<div class="prof-row"><span class="pi">${icon}</span>${label}<span class="ch">${I.chevr}</span></div>`;
  return `<div class="view anim-in">${statusBar(false)}
    <div class="pad"><h2 style="font-size:24px;font-weight:800;margin:6px 0 16px">Profile</h2>
      <div class="prof-top"><div style="width:58px;height:58px;border-radius:50%;background:var(--accent-grad);display:grid;place-items:center;font-size:28px">🧑</div><div><b>Ali Raza</b><small>ali.raza@email.com · +92 300 1234567</small></div></div>
      ${row(I.receipt, 'My orders')}
      ${row(I.pin, 'Saved addresses')}
      ${row(I.wallet, 'Payment methods')}
      ${row(I.heartp, 'Favourites')}
      ${row(I.tag, 'Promos & offers')}
      ${row(I.user, 'Account settings')}
      <div class="gap-bottom"></div>
    </div></div>`;
}

/* ---------- render ---------- */
function render() {
  let html = '';
  if (state.screen === 'home') html = homeScreen();
  else if (state.screen === 'restaurant') html = restaurantScreen();
  else if (state.screen === 'cart') html = cartScreen();
  else if (state.screen === 'checkout') html = checkoutScreen();
  else if (state.screen === 'track') html = trackScreen();
  else if (state.screen === 'search') html = searchScreen();
  else if (state.screen === 'orders') html = ordersScreen();
  else if (state.screen === 'profile') html = profileScreen();
  el('app').innerHTML = html;
  renderChrome();
}
function renderChrome() {
  const showTabs = ['home', 'search', 'orders', 'profile'].includes(state.screen);
  el('chrome').innerHTML = `<div id="toast" class="toast"></div>${cartBar(showTabs)}${showTabs ? tabBar() : ''}`;
}

/* ---------- events ---------- */
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-act]');
  if (!t) return;
  const act = t.dataset.act, id = t.dataset.id;
  // inner add buttons should not trigger the parent card
  if (act === 'add') { e.stopPropagation(); addToCart(id); return; }
  switch (act) {
    case 'tab': state.tab = id; state.screen = id; stack.length = 0; render(); break;
    case 'cat': state.cat = id; render(); break;
    case 'rest': state.rest = DATA.find((r) => r.id === id); go('restaurant'); break;
    case 'back': back(); break;
    case 'openCart': go('cart'); break;
    case 'inc': changeQty(id, 1); break;
    case 'dec': changeQty(id, -1); break;
    case 'applyPromo': {
      const v = (el('promoInput')?.value || '').trim().toUpperCase();
      state.promoOn = v === 'LAZEEZ50'; render();
      toast(state.promoOn ? 'Promo applied 🎉' : 'Invalid code');
      break;
    }
    case 'checkout': go('checkout'); break;
    case 'pay': state.payment = id; render(); break;
    case 'placeOrder': state.trackStep = 1; go('track'); startTracking(); break;
    case 'trackNow': state.trackStep = 1; go('track'); startTracking(); break;
    case 'goHome': state.tab = 'home'; stack.length = 0; go('home', false); break;
  }
});

let trackTimer;
function startTracking() {
  clearInterval(trackTimer);
  trackTimer = setInterval(() => {
    if (state.screen !== 'track') { clearInterval(trackTimer); return; }
    if (state.trackStep < 3) { state.trackStep++; render(); }
    else clearInterval(trackTimer);
  }, 3200);
}

/* ---------- boot ---------- */
fetch('menu.json').then((r) => r.json()).then((d) => { DATA = d; render(); }).catch((err) => {
  el('app').innerHTML = '<div class="empty"><div class="big">⚠️</div><b>Could not load menu</b>' + err + '</div>';
});
