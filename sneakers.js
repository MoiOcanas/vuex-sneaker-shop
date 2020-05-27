const sneakers = [
    {
        id: 1,
        name: "Jordan IV Retro Cactus Jack",
        price: 549.99,
        brand: "Jordan",
        sold: 13345,
        sale: true,
        img: "jordan-4-cactus-jack.jpg"
    },
    {
        id: 2,
        name: "Jordan I Retro High OFF-WHITE",
        price: 1199.99,
        brand: "Jordan",
        sold: 1784,
        sale: false,
        img: "jordan-1-off-white.jpg"
    },
    {
        id: 3,
        name: "Jordan III Retro White Cement",
        price: 299.99,
        brand: "Jordan",
        sold: 3581,
        sale: false,
        img: "jordan-3-white-cement.jpg"
    },
    {
        id: 4,
        name: "Jordan I Retro High Cactus Jack",
        price: 799.99,
        brand: "Jordan",
        sold: 1454,
        sale: false,
        img: "jordan-1-cactus-jack.jpg"
    },
    {
        id: 5,
        name: "Jordan XI Retro Playoffs Bred",
        price: 239.99,
        brand: "Jordan",
        sold: 8456,
        sale: true,
        img: "jordan-11-playoffs.jpg"
    },
    {
        id: 8,
        name: "adidas NMD Hu Pharrell ",
        price: 254.99,
        brand: "adidas",
        sold: 1287,
        sale: true,
        img: "adidas-pharrell-hu.jpg"
    },
    {
        id: 9,
        name: "Nike Blazer Mid sacai Snow Beach",
        price: 144.99,
        brand: "Nike",
        sold: 15254,
        sale: false,
        img: "nike-sacai-blazer.jpg"
    },
    {
        id: 10,
        name: "Nike AF1 OFF-WHITE",
        price: 804.99,
        brand: "Nike",
        sold: 7653,
        sale: true,
        img: "nike-air-force-off-white.jpg"
    },
    {
        id: 11,
        name: "Nike sacai Waffle",
        price: 564.99,
        brand: "Nike",
        sold: 9345,
        sale: true,
        img: "nike-sacai-waffle.jpg"
    },
    {
        id: 12,
        name: "Nike Dunk Off-White Pine Green",
        price: 244.99,
        brand: "Nike",
        sold: 2313,
        sale: false,
        img: "nike-dunk-off-white.jpg"
    },
    {
        id: 13,
        name: "Nike Air Fear Of God 1 Frosted",
        price: 799.99,
        brand: "Nike",
        sold: 9865,
        sale: false,
        img: "nike-fear-of-god.jpg"
    },
    {
        id: 14,
        name: "Nike Undercover Blue Jay",
        price: 329.99,
        brand: "Nike",
        sold: 6752,
        sale: true,
        img: "nike-undercover.jpg"
    },
    {
        id: 15,
        name: "Jordan V Retro OFF-WHITE",
        price: 549.99,
        brand: "Jordan",
        sold: 8768,
        sale: false,
        img: "jordan-5-off-white.jpg"
    },
    {
        id: 16,
        name: "Jordan I Retro High Gatorade",
        price: 149.99,
        brand: "Jordan",
        sold: 6532,
        sale: true,
        img: "jordan-1-gatorade.jpg"
    },
    {
        id: 18,
        name: "adidas Yeezy Calabasas",
        price: 39.99,
        brand: "adidas",
        sold: 6757,
        sale: true,
        img: "adidas-calabasas.jpg"
    },
    {
        id: 20,
        name: "adidas Harden 4 Pink",
        price: 139.99,
        brand: "adidas",
        sold: 7556,
        sale: false,
        img: "adidas-harden-pink.jpg"
    },
    {
        id: 21,
        name: "adidas Ultra Boost Beyonce",
        price: 199.99,
        brand: "adidas",
        sold: 9595,
        sale: false,
        img: "adidas-ultra-boost-beyonce.jpg"
    },
    {
        id: 21,
        name: "adidas Mailman Karl Malone",
        price: 99.99,
        brand: "adidas",
        sold: 7399,
        sale: false,
        img: "adidas-mailman-karl-malone.jpg"
    },
    {
        id: 22,
        name: "adidas D.O.N. Issue Spider Man",
        price: 129.99,
        brand: "adidas",
        sold: 4349,
        sale: true,
        img: "adidas-spider-man.jpg"
    },
    {
        id: 23,
        name: "Jordan I Retro High Purple",
        price: 249.99,
        brand: "Jordan",
        sold: 5449,
        sale: false,
        img: "jordan-1-purple.jpg"
    },
    {
        id: 24,
        name: "Jordan 3 Retro Tinker White",
        price: 239.99,
        brand: "Jordan",
        sold: 14349,
        sale: true,
        img: "jordan-3-tinker.jpg"
    },
    {
        id: 25,
        name: "Nike SB Dunk Parra",
        price: 199.99,
        brand: "Nike",
        sold: 9654,
        sale: true,
        img: "nike-sb-dunk-parra.jpg"
    },
    {
        id: 26,
        name: "Nike Vapormax OFF-WHITE",
        price: 679.99,
        brand: "Nike",
        sold: 6629,
        sale: false,
        img: "nike-vapormax-of.jpg"
    },
    {
        id: 27,
        name: "adidas Harden Vol.3 Iron Man",
        price: 79.99,
        brand: "adidas",
        sold: 4824,
        sale: true,
        img: "adidas-harden-ironman.jpg"
    },
    {
        id: 28,
        name: "adidas Streetball Black",
        price: 49.99,
        brand: "adidas",
        sold: 9976,
        sale: true,
        img: "adidas-streetball-black.jpg"
    },
    {
        id: 29,
        name: "adidas Yeezy Vol. 2 Yeezreel",
        price: 239.99,
        brand: "Yeezy",
        sold: 19109,
        sale: false,
        img: "yeezy-yeezreel.jpg"
    },
    {
        id: 30,
        name: "adidas Yeezy Vol. 2 Taillight",
        price: 259.99,
        brand: "Yeezy",
        sold: 19023,
        sale: true,
        img: "yeezy-taillight.jpg"
    },
    {
        id: 31,
        name: "adidas Yeezy 700 Solid Gray",
        price: 414.99,
        brand: "Yeezy",
        sold: 10629,
        sale: false,
        img: "yeezy-700-solid-gray.jpg"
    },
    {
        id: 32,
        name: "adidas Yeezy 700 Geode",
        price: 314.99,
        brand: "Yeezy",
        sold: 8841,
        sale: true,
        img: "yeezy-700-geode.jpg"
    },
    {
        id: 33,
        name: "adidas Yeezy 700 Azael",
        price: 454.99,
        brand: "Yeezy",
        sold: 10734,
        sale: true,
        img: "yeezy-700-azael.jpg"
    },
    {
        id: 35,
        name: "adidas Yeezy Static",
        price: 319.99,
        brand: "Yeezy",
        sold: 16934,
        sale: true,
        img: "yeezy-static.jpg"
    },
    {
        id: 36,
        name: "adidas Yeezy Earth",
        price: 379.99,
        brand: "Yeezy",
        sold: 8234,
        sale: false,
        img: "yeezy-earth.jpg"
    },
    {
        id: 37,
        name: "adidas 500 Stone",
        price: 279.99,
        brand: "Yeezy",
        sold: 14954,
        sale: false,
        img: "yeezy-500-stone.jpg"
    },
];

export default sneakers;