const products = [
  {
    name: "Ferrero Rocher Premium Chocolates 24 Pieces, 300 g",
    imageUrl:
      "https://images-eu.ssl-images-amazon.com/images/I/51WkiNNfVJL._SX300_SY300_QL70_FMwebp_.jpg",
    description:
      "Whole hazelnut covered in milk chocolate. A creamy filling, a crunchy wafer and a delicious hazelnut centre.Ferrero Rocher, the golden experience in a box of 24 premium pralines. Homemade:No",
    price: 895,
    countInStock: 15,
  },
  {
    name: "WILDHORN Black Leather Wallet, Blue Keychain and Black Diamond Pen for Men I Gift Hamper",
    imageUrl: "https://m.media-amazon.com/images/I/71BJbk9h0fL._SX679_.jpg",
    description: "https://m.media-amazon.com/images/I/71BJbk9h0fL._SX679_.jpg",
    price: 630,
    countInStock: 15,
  },
  {
    name: "Home Decorise Vastu Feng Shui Crystal Turtle Tortoise, Kachua for Good Luck, Best Gift for Career & Luck",
    imageUrl: "https://m.media-amazon.com/images/I/41O8SPromqL.jpg",
    description:
      "Best Gift for Career and Good Luck, Turtle Tortoise Plate for Good Luck. Representation of protection, riches, healthiness and success Uses: Home, Shop & Office",
    price: 600,
    countInStock: 15,
  },
  {
    name: "Bella Vita Organic Women's Luxury Perfume Gift Set 4x20 ML ",
    imageUrl:
      "https://images-eu.ssl-images-amazon.com/images/I/41F-W1-zs4L._SX300_SY300_QL70_FMwebp_.jpg",
    description: "Boosts Confidence. Makes You Attractive",
    price: 599,
    countInStock: 15,
  },
  {
    name: "Titan Analog Blue Dial Men's Watch",
    imageUrl: "https://m.media-amazon.com/images/I/61WkDUtq5aL._UX522_.jpg",
    description:
      " If this product is sold by another party, please contact the seller directly for warranty information for this product. You may also be able to find warranty information on the manufacturer’s website.",
    price: 11995,
    countInStock: 15,
  },
  {
    name: "WildHorn Wildhorn India Bombay Bron Leather Men's Wallet & Belt Combo Set",
    imageUrl: "https://m.media-amazon.com/images/I/81craG8eNhL._SX679_.jpg",
    description:
      "This Wildhorn Combo Gift set comes with an Classic belt and a wallet. Made of Exclusive High Quality Genuine Leather, Well Designed By Skilled Handcraft Man, Durable Cloth Lining.",
    price: 925,
    countInStock: 15,
  },
  {
    name: "The Man Company Premium Skin Glow Collection 6 in 1 Combo Travel Mini Kit",
    imageUrl: "https://m.media-amazon.com/images/I/61i9Y0MCDnL._SX466_.jpg",
    description:
      "Face wash for men enhanced with the regenerative properties of Argan, helps to remove dead skin cells which tend to accumulate over time causing your face to look very dull. This charcoal Face Wash benefits people with oily skin by reducing the excess oil secretion. It clears the minute pores that get accumulated with the oil secreted from the sebaceous glands to give you a fresh face.",
    price: 599,
    countInStock: 15,
  },
  {
    name: "Shining Diva Fashion Multicolor Non Precious Metal Base Metal Crystal Latest Heart Box Design Stud Earrings for Girls",
    imageUrl: "https://m.media-amazon.com/images/I/81SJqDXGy4L._UY625_.jpg",
    description:
      "Combo of 36 pairs latest design stylish stud earings. Multi-color multi-design crystal stud earrings combo set",
    price: 399,
    countInStock: 15,
  },
  {
    name: "Polyresin Laughing Buddha Statue, Small, Set of 4",
    imageUrl: "https://m.media-amazon.com/images/I/51pFcJanebL._SX466_.jpg",
    description:
      "This buddah figure is having detailed hand work, made of polyresin material and have beautiful hand work of skilled indian artist",
    price: 299,
    countInStock: 15,
  },
  {
    name: "AuraDecor Fragrance Jar Candle Set of 6",
    imageUrl: "https://m.media-amazon.com/images/I/71kXFe6l29L._SX385_.jpg",
    description:
      "Aura Decor Jar Scented Candles Gift Set includes 6 fragrance's: LAVENDER, CINNAMON, ROSE, STRAWBERRY, LEMON GRASS, JASMINE.",
    price: 299,
    countInStock: 15,
  },
  {
    name: "FlowerAura Decorative Bunch of 12 Red Rose Flowers Bouquet ",
    imageUrl: "https://m.media-amazon.com/images/I/81O8QhV5MxL._SX466_.jpg",
    description:
      "The beautiful bunch of roses are delicately tied and wrapped in premium cellophane with a ribbon adorning the front part.",
    price: 429,
    countInStock: 15,
  },
  {
    name: "Bear Ball Pit with 20 Playballs",
    imageUrl: "https://m.media-amazon.com/images/I/41SEiQFSyNL.jpg",
    description:
      "Includes 20 balls and ideal for indoor and outdoor use. It helps develops motor skill and movement of the child",
    price: 2239,
    countInStock: 15,
  },
  {
    name: "appy Birthday Gift for Mom Mother Mummy (1 Ceramic Mug, 1 Fridge Magnet)",
    imageUrl: "https://m.media-amazon.com/images/I/51auSOMFDUL._SX679_.jpg",
    description:
      "A perfect gift on mothers day gift or as birthday gift for mother – a combo set of mug and fridge magnet which will bring out true emotions of the bond that you share with your mother.",
    price: 219,
    countInStock: 15,
  },
  {
    name: "Fargo Handbag For Women And Girls COMBO SET OF 5",
    imageUrl: "https://m.media-amazon.com/images/I/51-+SFrhYFL._UX695_.jpg",
    description:
      "Handbag Dimensions In INCH : Length 12, Height 10.5; Only One Compartment Handbag with Detachable Shoulder Strap.",
    price: 499,
    countInStock: 15,
  },
  {
    name: "Crossword Scrabble Board Game",
    imageUrl: "https://m.media-amazon.com/images/I/81tAR-DYIfL._SX466_.jpg",
    description:
      "Make the best word you can using any of your 7 letter tiles drawn at random",
    price: 599,
    countInStock: 15,
  },
  {
    name: "Dream Catcher With Photo Frame For Mother's day gift",
    imageUrl: "https://m.media-amazon.com/images/I/71SP3ZSzZmL._SX522_.jpg",
    description:
      "Photo Size : 5x7 cm in Small & 7x10 cm in Medium ; Five photo paste with double sided tape or fevicol",
    price: 800,
    countInStock: 15,
  },
  {
    name: "Harry Potter Box Set: The Complete Collection (Set of 7 Volumes)",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41yL3Uz3HrL._SY407_BO1,204,203,200_.jpg",
    description:
      "A beautiful boxed set containing all seven Harry Potter novels in paperback. These new editions of the classic and internationally bestselling, multi-award-winning series feature instantly pick-up-able new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers. It's time to PASS THE MAGIC ON .",
    price: 5000,
    countInStock: 15,
  },
  {
    name: "Crafter Metal Plant Stand with Planter, Gold, Standard, 6 Pieces",
    imageUrl: "https://m.media-amazon.com/images/I/61-7GZ7sH3S._SX679_.jpg",
    description:
      "Modern Simple Design - Elegant house floor planter stand reflects minimalist which inspired by classic mid-century style. Well fits to most home decor and furnitures, can be paired with a variety of plants, such as cactus, flowers, and more.; Premium Quality - Both Indoor planter stand and flower pot are made of wrought iron material, with safe and environment-friendly high-temperature paint, rustproof and durable.",
    price: 1800,
    countInStock: 15,
  },
];

module.exports = products;
