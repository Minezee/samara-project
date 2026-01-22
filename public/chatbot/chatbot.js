const whatsappNumber = "6285122602002";

const knowledgeBase = {
    id: {
        faq: [
            {
                intent: "greeting",
                keywords: ["hi", "hai", "halo", "hello", "pagi", "siang", "sore", "malam", "permisi", "assalamualaikum", "test", "tes", "p", "kak", "min", "sis", "bro", "gan", "bang", "mbak", "mimin"],
                response: "Halo! Terima kasih sudah menghubungi Coklat Samara 🍫💙 Ada yang bisa saya bantu hari ini? Mau tanya produk atau konsultasi hadiah?"
            },
            {
                intent: "product",
                keywords: ["produk", "jual apa", "menu", "katalog", "ada apa aja", "list", "varian", "jenis", "coklat apa", "mau beli", "liat dong", "kasi liat", "spill produk", "item", "dagangan", "what products do you have", "view products", "view product", "lihat produk", "ada produk apa saja"],
                response: "Kami memiliki 3 kategori paket Gift Box: Classic (3 pcs), Signature (9 pcs), dan Grand Luxe (12 pcs). \n\nUntuk varian rasanya, kami memiliki **12 rasa signature**. Silakan klik tombol di bawah untuk detail setiap rasanya 👇"
            },
            {
                intent: "price",
                keywords: ["harga", "berapa", "price", "pricelist", "mahal", "murah", "biaya", "duit", "tarif", "budget", "harganya", "pricenya", "hrg", "how much", "how much are your packages", "cek harga", "cek pricelist"],
                response: "Berikut pilihan paket Coklat Samara. Klik paket yang ingin Kakak lihat harganya 👇"
            },
            {
                intent: "flavor",
                keywords: ["rasa", "enak", "paling enak", "rekomen", "rekomendasi", "best seller", "favorit", "isi", "flavor", "taste", "yummy", "manis", "pahit", "krim", "creamy", "what flavors", "flavors"],
                response: "Kami punya 12 rasa unik! Mulai dari yang buah-buahan segar (Mangosteen, Pineapple), rempah (Jamu, Chili), sampai klasik (Coffee, Caramel). Klik tombol 'Lihat Produk' untuk memilih detailnya ya! ✨"
            },
            {
                intent: "card",
                keywords: ["kartu", "ucapan", "tulis", "custom", "request tulisan", "notes", "surat", "kata-kata", "bisa tulis", "nama", "pake kartu", "greeting card"],
                response: "Bisa banget kak! Terutama untuk Paket Grand Luxe, sudah free kartu ucapan. Kakak tinggal kirim kalimat ucapannya ke kami ya 💌"
            },
            {
                intent: "stock",
                keywords: ["ready", "stok", "tersedia", "ada gak", "masih ada", "kapan ready", "po", "preorder", "booking", "aman", "ready stock", "available", "in stock"],
                response: "Stok Coklat Samara ready ya kak 💙 Kami produksi fresh setiap hari. Silakan langsung diorder sebelum kehabisan slot hari ini!"
            },
            {
                intent: "shipping",
                keywords: ["kirim", "ongkir", "kurir", "pengiriman", "gojek", "grab", "paxel", "sameday", "instan", "antar", "cod", "nyampe", "berapa lama", "lokasi", "ekspedisi", "jne", "jnt", "delivery", "shipping"],
                response: "Kami bisa kirim via Gojek/Grab (Instant/Sameday) atau ekspedisi reguler (Paxel/JNE) yang aman untuk makanan. Lokasi pengiriman dari Jakarta. Mau dikirim ke mana kak? 🚚"
            },
            {
                intent: "closing",
                keywords: ["makasih", "terima kasih", "thanks", "tq", "oke", "siap", "baik", "nanti", "pikir dulu", "bye", "dah", "tks", "maacih", "sip", "thank", "thanks", "bye"],
                response: "Sama-sama! Terima kasih telah mampir ke Coklat Samara 💙 Jangan ragu chat lagi kalau butuh asupan coklat enak ya!"
            }
        ],
        products: [
            { name: "Mango Chili Dark Truffle", keywords: ["mangga", "pedas", "mango", "chili", "cabe", "pedes", "hot"], description: "Sensasi unik mangga manis dipadu dengan sedikit sengatan pedas cabai rawit yang lembut, dibalut dark chocolate." },
            { name: "Passion Fruit Jasmine", keywords: ["markisa", "passion", "jasmine", "melati", "teh", "asam", "seger", "fresh"], description: "Rasa asam segar buah markisa berpadu dengan aroma teh melati yang wangi dan menenangkan." },
            { name: "Pineapple Lemongrass", keywords: ["nanas", "pineapple", "serai", "sereh", "lemongrass", "tropis"], description: " Rasa tropis nanas yang cerah dikombinasikan dengan aroma serai wangi dan karamel." },
            { name: "Pandan Coconut Klepon", keywords: ["pandan", "kelapa", "klepon", "jajan pasar", "indo", "gula jawa"], description: "Nostalgia rasa klepon dalam bentuk praline! Wangi pandan, gula jawa, dan kelapa parut." },
            { name: "Honey & Sea Salt", keywords: ["garam", "asin", "salt", "madu", "honey", "gurih", "salty"], description: "Karamel madu hutan yang lumer dengan sedikit taburan garam laut Bali. Manis-asin sempurna!" },
            { name: "Durian King Truffle", keywords: ["durian", "duren", "king", "bau", "legit"], description: " Menggunakan daging durian asli! Creamy, bold, dan lumer di mulut. Wajib buat pecinta durian." },
            { name: "Mangosteen Vanilla", keywords: ["manggis", "vanilla", "vanila", "ratu", "lembut"], description: " Rasa buah manggis yang manis-asam lembut (Queen of Fruits) dipadu vanila creamy." },
            { name: "Calamansi Zest", keywords: ["jeruk", "calamansi", "kunci", "sonkit", "lemon", "citrus"], description: " Ganache coklat dengan perasan jeruk Calamansi. Sangat segar dan memecah rasa manis coklat." },
            { name: "Jamu Turmeric Ginger", keywords: ["jamu", "kunyit", "jahe", "ginger", "herbal", "sehat", "hangat"], description: " Terinspirasi jamu kunyit asam. Hangatnya jahe dan kunyit dibalut coklat putih yang creamy." },
            { name: "Kaffir Lime Cashew", keywords: ["jeruk purut", "daun jeruk", "mete", "kacang", "cashew", "lime"], description: " Kacang mete panggang yang gurih dengan aroma daun jeruk purut yang khas Indonesia." },
            { name: "Sumatra Coffee", keywords: ["kopi", "coffee", "kopi susu", "caffeine", "ngopi", "latte"], description: " Menggunakan biji kopi Sumatra asli dan susu kambing untuk rasa 'kopi susu' yang premium." },
            { name: "Purple Ube Coconut", keywords: ["ube", "ubi", "ungu", "taro", "talas", "santan"], description: " Ubi ungu manis yang earthy dipadu dengan santan kelapa. Warnanya cantik, rasanya lembut." }
        ]
    },
    en: {
        faq: [
            { intent: "greeting", keywords: ["hi", "hello", "hey", "morning", "afternoon", "evening", "yo", "greetings", "sup"], response: "Hello! Thank you for contacting Samara Chocolates 🍫💙 How may I assist you today? Looking for gifts or treats?" },
            { intent: "product", keywords: ["product", "catalog", "menu", "list", "what do you have", "buy", "purchase", "variants", "flavors list", "items", "goods", "view products", "view product", "what products do you have"], response: "We offer 3 premium Gift Box packages: Classic (3 pcs), Signature (9 pcs), and Grand Luxe (12 pcs).\n\nWe also have **12 signature artisan flavors**. Please click the buttons below for details 👇" },
            { intent: "price", keywords: ["price", "cost", "how much", "expensive", "cheap", "rates", "pricing", "budget", "how much are your packages"], response: "Here are our package options. Click any package to see the price 👇" },
            { intent: "flavor", keywords: ["flavor", "taste", "delicious", "best seller", "recommendation", "yummy", "sweet", "dark", "milk", "tasty", "what flavors"], response: "We have 12 artisan flavors ranging from Tropical Fruits, Indonesian Spices, to Classic Pralines. Click 'View Products' to see the full list! ✨" },
            { intent: "card", keywords: ["card", "message", "note", "writing", "personal", "greeting", "letter"], response: "Absolutely! The Grand Luxe package includes a complimentary personalized greeting card. You can send us your message to be included 💌" },
            { intent: "stock", keywords: ["available", "stock", "in stock", "ready", "out of stock"], response: "Yes, Samara Chocolates are in stock 💙 We produce fresh daily. Feel free to place your order!" },
            { intent: "shipping", keywords: ["delivery", "ship", "courier", "send", "shipping", "post", "arrive", "track", "gojek", "grab"], response: "We ship via Instant/Same-day couriers (Gojek/Grab) or safe Regular expeditions. Based in Jakarta. Where would you like us to ship? 🚚" },
            { intent: "closing", keywords: ["thank", "thanks", "bye", "goodbye", "ok", "okay", "cool", "great", "cheers"], response: "You're welcome! Thank you for choosing Samara Chocolates 💙 Feel free to reach out anytime!" }
        ],
        products: [
            { name: "Mango Chili Dark Truffle", keywords: ["mango", "chili", "spicy", "hot", "pepper"], description: "Sweet mango ganache with a gentle spicy kick from bird's eye chili, enrobed in dark chocolate." },
            { name: "Passion Fruit Jasmine", keywords: ["passion", "fruit", "jasmine", "tea", "sour", "flower"], description: "Tangy passion fruit balanced with the delicate, floral aroma of jasmine tea." },
            { name: "Pineapple Lemongrass", keywords: ["pineapple", "lemon", "grass", "citrusy", "tropical"], description: " Fresh tropical pineapple caramel infused with aromatic lemongrass." },
            { name: "Pandan Coconut Klepon", keywords: ["pandan", "coconut", "klepon", "palm sugar", "sweet"], description: " A tribute to the Indonesian sweet snack! Pandan, palm sugar (Gula Melaka), and coconut." },
            { name: "Honey & Sea Salt", keywords: ["honey", "salt", "savory", "caramel", "salty"], description: " Luxurious wild forest honey caramel with a sprinkle of Bali sea salt." },
            { name: "Durian King Truffle", keywords: ["durian", "king", "fruit", "strong"], description: " Made with real Durian flesh. Bold, creamy, dan silky smooth. A must for Durian lovers." },
            { name: "Mangosteen Vanilla", keywords: ["mangosteen", "vanilla", "queen", "soft"], description: "The Queen of Fruits meets creamy vanilla ganache for a delicate, feminine flavor." },
            { name: "Calamansi Zest", keywords: ["calamansi", "lime", "citrus", "zest", "sour"], description: " Refreshing citrus ganache made from Calamansi limes, cutting through the sweetness perfectly." },
            { name: "Jamu Turmeric Ginger", keywords: ["jamu", "turmeric", "ginger", "health", "spice", "warm"], description: "Inspired by the traditional herbal drink. Warm ginger and turmeric in white chocolate." },
            { name: "Kaffir Lime Cashew", keywords: ["kaffir", "lime", "cashew", "nut", "leaf"], description: "Creamy roasted cashew praline infused with fresh aromatic Kaffir Lime leaves." },
            { name: "Sumatra Coffee", keywords: ["coffee", "latte", "milk", "caffeine", "bean"], description: " Using authentic Sumatran coffee beans and goat milk for a premium latte experience." },
            { name: "Purple Ube Coconut", keywords: ["ube", "yam", "purple", "taro", "sweet"], description: "Earthy sweet purple yam paired with coconut milk. Beautiful color, comforting taste." }
        ]
    }
};

// State
let currentLanguage = null;
let conversationHistory = [];
let humanTakeoverRequested = false;

// Elements
const chatButton = document.getElementById('chatButton');
const chatContainer = document.getElementById('chatContainer');
const chatMessages = document.getElementById('chatMessages');
const quickReplies = document.getElementById('quickReplies');

function waitForChatElements() {
    const chatButton = document.getElementById('chatButton');
    const closeBtn = document.getElementById('closeBtn');

    if (!chatButton || !closeBtn) {
        setTimeout(waitForChatElements, 100);
        return;
    }

    chatButton.addEventListener('click', openChat);
    closeBtn.addEventListener('click', closeChat);
}

waitForChatElements();

function escapeRegex(str) {
    return str.replace(/[.*+?^${ }()|[\]\\]/g, '\\$&');
}

function isKeywordMatch(normalizedMsg, keyword) {
    if (!keyword) return false;
    const k = String(keyword).toLowerCase().trim();
    const escaped = escapeRegex(k);
    const re = new RegExp('\\b' + escaped + 's?\\b', 'i');
    if (re.test(normalizedMsg)) return true;
    const escapedMsg = escapeRegex(normalizedMsg);
    const re2 = new RegExp('\\b' + escapedMsg + '\\b', 'i');
    if (re2.test(k)) return true;
    return normalizedMsg.indexOf(k) !== -1;
}

function openChat() {
    chatContainer.classList.add('active');
    if (!currentLanguage) {
        showLanguageSelection();
    }
}

function closeChat() {
    chatContainer.classList.remove('active');
}

function showLanguageSelection() {
    const welcomeMsg = {
        en: "Welcome to Samara chocolates! 🍫<br>Please select your preferred language:",
        id: "Selamat datang di Samara Chocolates! 🍫<br>Silakan pilih bahasa Anda:"
    };

    addMessage('bot', `${welcomeMsg.en}<br><br>${welcomeMsg.id}`);

    const languageDiv = document.createElement('div');
    languageDiv.className = 'language-selection';
    languageDiv.innerHTML = `
                    <button class="language-btn" onclick="selectLanguage('en')"> English</button>
                    <button class="language-btn" onclick="selectLanguage('id')"> Bahasa Indonesia</button>
                    `;
    chatMessages.appendChild(languageDiv);
    scrollToBottom();
}

window.selectLanguage = function (lang) {
    currentLanguage = lang;
    const sel = document.querySelector('.language-selection');
    if (sel) sel.style.display = 'none';

    const greetings = {
        en: "Great! How may I assist you today? Feel free to ask about our products, prices, or gift packages! 😊",
        id: "Baik! Ada yang bisa saya bantu hari ini? Silakan tanya tentang produk, harga, atau paket hadiah kami! 😊"
    };

    setTimeout(() => {
        addMessage('bot', greetings[lang]);
        showQuickReplies();
    }, 400);
};

function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot typing-indicator-msg';
    typingDiv.innerHTML = `
                    <div class="typing-indicator">
                        <span></span><span></span><span></span>
                    </div>
                    `;
    chatMessages.appendChild(typingDiv);
    scrollToBottom();
    return typingDiv;
}

function removeTypingIndicator(element) {
    if (element) element.remove();
}

function sendMessage(message) {
    if (!message || !currentLanguage) return;

    addMessage('user', message);
    quickReplies.innerHTML = '';

    const typing = showTypingIndicator();

    setTimeout(() => {
        removeTypingIndicator(typing);
        const responseObj = processMessage(message);

        if (typeof responseObj === 'function') {
            responseObj();
        } else {
            addMessage('bot', responseObj.text);

            if (responseObj.intent === 'product') {
                showProductOptions();
            } else if (responseObj.intent === 'price') {
                showPackageOptions();
            } else if (!humanTakeoverRequested) {
                showQuickReplies();
            }
        }
    }, 700);
}

function processMessage(message) {
    const normalizedMsg = normalizeText(message);
    const kb = knowledgeBase[currentLanguage];

    // Cek GIFT/HADIAH keywords - langsung ke WhatsApp
    const giftKeywords = ["hadiah", "kado", "gift", "ulang tahun", "ultah", "anniv", "anniversary", "wisuda", "nikahan", "hampers", "bingkisan", "buat pacar", "surprise", "kejutan", "oleh-oleh", "paket", "present", "birthday", "celebration", "souvenir"];
    for (let keyword of giftKeywords) {
        if (isKeywordMatch(normalizedMsg, keyword)) {
            return () => {
                const msg = currentLanguage === 'en'
                    ? "Perfect choice! Our team can help you create the perfect gift package. Let's chat on WhatsApp to discuss your needs! 🎁"
                    : "Pilihan tepat! Tim kami siap bantu Kakak buat paket hadiah yang sempurna. Yuk chat di WhatsApp untuk konsultasi! 🎁";
                addMessage('bot', msg);
                setTimeout(() => showHumanTakeover(), 200);
            };
        }
    }

    const orderKeywords = ['order', 'pesan', 'beli', 'mau beli', 'mau pesan', 'buy', 'purchase', 'checkout', 'payment', 'bayar'];
    for (let keyword of orderKeywords) {
        if (isKeywordMatch(normalizedMsg, keyword)) {
            return () => {
                const msg = currentLanguage === 'en'
                    ? "Great! To place your order, please chat with us on WhatsApp for secure payment and delivery arrangements 🛒"
                    : "Baik kak! Untuk pemesanan, yuk chat kami di WhatsApp untuk pembayaran dan pengiriman yang aman 🛒";
                addMessage('bot', msg);
                setTimeout(() => showHumanTakeover(), 200);
            };
        }
    }

    for (let item of kb.faq) {
        for (let keyword of item.keywords) {
            if (isKeywordMatch(normalizedMsg, keyword)) {
                return { text: item.response, intent: item.intent };
            }
        }
    }

    for (let product of kb.products) {
        for (let keyword of product.keywords) {
            if (isKeywordMatch(normalizedMsg, keyword)) {
                return { text: product.description, intent: 'product_detail' };
            }
        }
        if (isKeywordMatch(normalizedMsg, product.name.toLowerCase())) {
            return { text: product.description, intent: 'product_detail' };
        }
    }

    if (isComplexQuestion(message)) {
        return () => {
            const msg = currentLanguage === 'en'
                ? "This seems like a detailed question. Let me connect you with our team on WhatsApp for better assistance! 💬"
                : "Pertanyaan Kakak cukup detail. Biar lebih jelas, yuk chat langsung dengan tim kami di WhatsApp! 💬";
            addMessage('bot', msg);
            setTimeout(() => showHumanTakeover(), 200);
        };
    }

    return { text: getDefaultResponse(), intent: 'unknown' };
}

function isComplexQuestion(message) {
    const complexIndicators = [
        message.length > 50,
        /\b(cara|bagaimana|mengapa|kenapa|bisakah|apakah bisa|bisa gak|bisa tidak|gimana caranya|how do i|how can i|can you help me with)\b/i.test(message),
        (message.match(/\b(dan|atau|juga|serta|plus|with|and|or)\b/gi) || []).length >= 2,
        /\b(custom|customize|personalize|spesial|khusus|request|minta tolong|bantu saya)\b/i.test(message)
    ];

    return complexIndicators.filter(indicator => indicator === true).length >= 2;
}

function getDefaultResponse() {
    const responses = {
        en: "I'm not sure I understand. Could you please rephrase your question? Or you can ask about our products, prices, or gift packages!",
        id: "Maaf, saya kurang mengerti pertanyaan Kakak. Bisa diulangi dengan kata lain? Atau Kakak bisa tanya tentang produk, harga, atau paket hadiah kami!"
    };
    return responses[currentLanguage];
}

function normalizeText(text) {
    return text.toLowerCase()
        .replace(/[?!.,;]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function showHumanTakeover() {
    const messages = {
        en: { text: "Chat on WhatsApp 💬" },
        id: { text: "Chat via WhatsApp 💬" }
    };

    const prev = document.querySelector('.human-takeover');
    if (prev) prev.remove();

    const takeoverDiv = document.createElement('div');
    takeoverDiv.className = 'human-takeover';
    takeoverDiv.innerHTML = `
                    <strong>${currentLanguage === 'en' ? 'Need personalized help?' : 'Butuh bantuan personal?'}</strong>
                    <br />
                    <button onclick="requestHumanTakeover()">${messages[currentLanguage].text}</button>
                    <button class='back-btn' onclick="showLanguageSelection()">${currentLanguage === 'en' ? 'Back' : 'Kembali'}</button>
                    `;
    chatMessages.appendChild(takeoverDiv);
    scrollToBottom();
}

window.requestHumanTakeover = function () {
    openWhatsAppDirect();

    const confirmMsg = currentLanguage === 'en'
        ? "I've opened WhatsApp for you! Our team will reply there shortly. 💙"
        : "Saya sudah membukakan WhatsApp untuk Anda! Tim kami akan segera membalas di sana. 💙";

    addMessage('bot', confirmMsg);

    const el = document.querySelector('.human-takeover');
    if (el) el.style.display = 'none';
    showQuickReplies();
};

function openWhatsAppDirect() {
    const text = currentLanguage === 'en'
        ? "Hello Samara Chocolates, I need assistance with..."
        : "Halo Samara Chocolates, saya butuh bantuan mengenai...";
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
}

function showPackageOptions() {
    quickReplies.innerHTML = '';

    const packages = [
        {
            name: currentLanguage === 'en' ? "Classic Package" : "Paket Classic",
            detail: currentLanguage === 'en'
                ? "📦 Classic Package (3 pcs)\n💰 Price: IDR 112,000\n\nPerfect for tasting our premium flavors. Comes in elegant packaging!"
                : "📦 Paket Classic (3 pcs)\n💰 Harga: Rp 112.000\n\nCocok untuk mencicipi rasa premium kami. Sudah termasuk kemasan elegan!"
        },
        {
            name: currentLanguage === 'en' ? "Signature Package" : "Paket Signature",
            detail: currentLanguage === 'en'
                ? "📦 Signature Package (9 pcs)\n💰 Price: IDR 215,000\n\nOur best-selling package with variety of flavors. Great for sharing!"
                : "📦 Paket Signature (9 pcs)\n💰 Harga: Rp 215.000\n\nPaket terlaris dengan variasi rasa lengkap. Cocok untuk berbagi!"
        },
        {
            name: currentLanguage === 'en' ? "Grand Luxe Package" : "Paket Grand Luxe",
            detail: currentLanguage === 'en'
                ? "📦 Grand Luxe Package (12 pcs) ⭐\n💰 Price: IDR 250,000\n\nMost popular for gifts! Includes FREE personalized greeting card. Premium luxury box!"
                : "📦 Paket Grand Luxe (12 pcs) ⭐\n💰 Harga: Rp 250.000\n\nPaling populer untuk hadiah! GRATIS kartu ucapan personal. Box premium mewah!"
        }
    ];

    packages.forEach(pkg => {
        const btn = document.createElement('button');
        btn.className = 'quick-reply-btn';
        btn.textContent = pkg.name;
        btn.onclick = () => {
            addMessage('user', pkg.name);
            quickReplies.innerHTML = '';
            setTimeout(() => {
                addMessage('bot', pkg.detail);
                showQuickReplies();
            }, 350);
        };
        quickReplies.appendChild(btn);
    });
    scrollToBottom();
}

function showProductOptions() {
    quickReplies.innerHTML = '';
    const products = knowledgeBase[currentLanguage].products;

    addMessage('bot', currentLanguage === 'en' ? "Here are our flavors — click any to see details:" : "Berikut varian rasa kami — klik salah satu untuk melihat detail:");

    products.forEach(product => {
        const btn = document.createElement('button');
        btn.className = 'quick-reply-btn';
        btn.textContent = product.name;
        btn.onclick = () => {
            addMessage('user', product.name);
            quickReplies.innerHTML = '';
            setTimeout(() => {
                addMessage('bot', product.description);
                showQuickReplies();
            }, 350);
        };
        quickReplies.appendChild(btn);
    });
    scrollToBottom();
}

function showQuickReplies() {
    const replies = {
        en: [
            { text: "View Products", query: "view_products" },
            { text: "Check Prices", query: "check_prices" },
            { text: "Gift Packages", query: "gift packages" },
            { text: "Contact Customer Service", query: "customer_service" }
        ],
        id: [
            { text: "Lihat Produk", query: "view_products" },
            { text: "Cek Harga", query: "check_prices" },
            { text: "Paket Hadiah", query: "paket hadiah" },
            { text: "Hubungi Customer Service", query: "customer_service" }
        ]
    };

    quickReplies.innerHTML = '';
    const currentReplies = replies[currentLanguage] || replies.en;

    currentReplies.forEach(reply => {
        const btn = document.createElement('button');
        btn.className = 'quick-reply-btn';
        btn.textContent = reply.text;
        btn.onclick = () => {
            if (reply.query === 'view_products') {
                addMessage('user', reply.text);
                quickReplies.innerHTML = '';
                setTimeout(() => {
                    showProductOptions();
                }, 250);
            } else if (reply.query === 'check_prices') {
                addMessage('user', reply.text);
                quickReplies.innerHTML = '';
                setTimeout(() => {
                    showPackageOptions();
                }, 250);
            } else if (reply.query === 'customer_service') {
                addMessage('user', reply.text);
                quickReplies.innerHTML = '';
                setTimeout(() => {
                    const msg = currentLanguage === 'en'
                        ? "I'll connect you with our customer service team right away! 💬"
                        : "Saya akan menghubungkan Anda dengan tim customer service kami! 💬";
                    addMessage('bot', msg);
                    setTimeout(() => {
                        showHumanTakeover();
                    }, 500);
                }, 250);
            } else {
                sendMessage(reply.query);
            }
        };
        quickReplies.appendChild(btn);
    });

    scrollToBottom();
}

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

console.log('Samara Chocolates Chatbot initialized! 🍫');
