import Alpine from "alpinejs";
Alpine.store("search", {
	isSearching: false,
	setSearching(value) {
		this.isSearching = value;
		console.log(value);
	},
});

Alpine.store("products", {
	products: [
		{
			id: "prd001",
			name: "Summer Bloom Dress",
			brand: "Elara",
			description:
				"A breezy, floral pastel midi perfect for casual brunches, strolls, or weekend getaways. Lightweight cotton blend with a flowy fit and ruffled sleeves.",
			rental_price: 299,
			deposit: 200,
			category: "Casual",
			sizes: ["S", "M", "L"],
			available: true,
			available_colors: [
				{ name: "Pastel Pink", hex: "#FADADD" },
				{ name: "Sky Blue", hex: "#A2DDF0" },
				{ name: "Sunshine Yellow", hex: "#FFF275" },
			],
			images: [
				"https://i.pinimg.com/1200x/a4/17/cc/a417cc15181cc630a6563cde01ffed3b.jpg",
				"https://i.pinimg.com/736x/6e/b2/1d/6eb21dcff5885d3e84f29e3ee692b956.jpg",
			],
			specifications: {
				fabric: "100% Cotton",
				length: "Midi",
				fit: "Relaxed Fit",
				sleeve: "Ruffled Short Sleeve",
				closure: "Back Zip",
			},
			occasion: ["Brunch", "Picnic", "Date"],
			rating: 4.8,
			care_instructions: "Dry clean only. Do not bleach. Steam press preferred.",
			what_you_get: ["Dress", "Garment Cover", "Return Bag"],
		},
		{
			id: "prd002",
			name: "Moonlit Rose Gown",
			brand: "Velvié",
			description:
				"A luxurious deep maroon evening gown with subtle glitter threadwork, long sleeves, and a flared hem. Ideal for weddings and receptions.",
			rental_price: 499,
			deposit: 300,
			category: "Evening Wear",
			sizes: ["M", "L", "XL"],
			available: true,
			available_colors: [
				{ name: "Deep Maroon", hex: "#800000" },
				{ name: "Emerald Green", hex: "#028A0F" },
				{ name: "Royal Blue", hex: "#4169E1" },
			],
			images: [
				"https://i.pinimg.com/1200x/a7/2e/f5/a72ef51f7abcf8015c7be36bcbc9d4c5.jpg",
				"https://i.pinimg.com/736x/9b/06/a0/9b06a034b64bdf65802d9b9417dea771.jpg",
				"https://i.pinimg.com/736x/d1/74/dc/d174dc4cf9efaa1c2b1050055cb61891.jpg",
			],
			specifications: {
				fabric: "Chiffon Blend",
				length: "Full Length",
				fit: "Slim at waist, flared hem",
				sleeve: "Full sleeve",
				closure: "Side Zip",
			},
			occasion: ["Weddings", "Receptions", "Formal Galas"],
			rating: 4.9,
			care_instructions: "Dry clean only. Store in cool place. Avoid heavy ironing.",
			what_you_get: ["Gown", "Garment Cover", "Return Courier Kit"],
		},
		{
			id: "prd003",
			name: "Glitter Riot Dress",
			brand: "Noiré",
			description:
				"Shiny black sequin party dress with a bodycon fit and side slit. Showstopper for bold nights out.",
			rental_price: 399,
			deposit: 250,
			category: "Party",
			sizes: ["XS", "S", "M"],
			available: true,
			available_colors: [
				{ name: "Black", hex: "#000000" },
				{ name: "Silver", hex: "#C0C0C0" },
				{ name: "Wine Red", hex: "#722F37" },
			],
			images: [
				"https://i.pinimg.com/1200x/61/39/f8/6139f86a4b9b52885d853e6bdf5fccae.jpg",
				"https://i.pinimg.com/1200x/9c/d3/97/9cd3977296c832e8a61335a80a427504.jpg",
				"https://i.pinimg.com/736x/5b/5c/1f/5b5c1f0378cceaead90ab9aaf1e7bb6b.jpg",
			],
			specifications: {
				fabric: "Sequin Mesh with Lining",
				length: "Above Knee",
				fit: "Bodycon",
				sleeve: "Sleeveless",
				closure: "Back Zip",
			},
			occasion: ["Nightclubs", "Birthdays", "New Year"],
			rating: 4.7,
			care_instructions: "Do not machine wash. Spot clean gently. Store flat.",
			what_you_get: ["Dress", "Silica Pack", "Return Packaging"],
		},
		{
			id: "prd004",
			name: "Lavender Breeze Kurti Set",
			brand: "Auraa",
			description:
				"A flowy kurti and palazzo set in soft lavender with delicate embroidery. A perfect blend of comfort and ethnic elegance for casual outings.",
			rental_price: 349,
			deposit: 200,
			category: "Ethnic",
			sizes: ["S", "M", "L", "XL"],
			available: true,
			available_colors: [
				{ name: "Lavender", hex: "#CBAACB" },
				{ name: "Mint Green", hex: "#AAF0D1" },
			],
			images: [
				"https://i.pinimg.com/736x/b8/ad/17/b8ad17b76ef4490ffd5c0175126b3686.jpg",
				"https://i.pinimg.com/736x/94/bd/61/94bd61b3db1d365f9e8c86532587b9fa.jpg",
			],
			specifications: {
				fabric: "Rayon Blend",
				length: "Ankle Length",
				fit: "Straight Fit",
				sleeve: "3/4th Sleeve",
				closure: "Slip-on",
			},
			occasion: ["Festive", "Casual", "Work"],
			rating: 4.6,
			care_instructions: "Machine wash cold. Iron inside out.",
			what_you_get: ["Kurti", "Palazzo", "Return Bag"],
		},
		{
			id: "prd005",
			name: "Scarlet Sunset Saree",
			brand: "Zylora",
			description:
				"A vibrant red georgette saree with gold border and matching blouse, made for traditional glam with modern flow.",
			rental_price: 450,
			deposit: 300,
			category: "Traditional",
			sizes: ["Free Size"],
			available: true,
			available_colors: [
				{ name: "Scarlet Red", hex: "#FF2400" },
				{ name: "Golden", hex: "#FFD700" },
			],
			images: [
				"https://i.pinimg.com/1200x/14/14/45/141445c22d474904ea625110a7e0efc2.jpg",
				"https://i.pinimg.com/originals/1b/69/2f/1b692fd2f7309e9229f6c07e126fd48a.jpg",
			],
			specifications: {
				fabric: "Georgette",
				length: "6.5 meters",
				fit: "Drape Style",
				sleeve: "Short (Blouse)",
				closure: "Tie & Zip (Blouse)",
			},
			occasion: ["Weddings", "Festivals", "Cultural Events"],
			rating: 4.9,
			care_instructions: "Dry clean only. Steam lightly if wrinkled.",
			what_you_get: ["Saree", "Blouse Piece", "Return Kit"],
		},
		{
			id: "prd006",
			name: "Lilac Lounge Co-Ord Set",
			brand: "Urbanya",
			description:
				"Trendy oversized co-ord set with cropped shirt and wide-leg trousers. Streetwear meets soft-girl in the best way.",
			rental_price: 379,
			deposit: 250,
			category: "Casual",
			sizes: ["S", "M", "L"],
			available: true,
			available_colors: [
				{ name: "Lilac", hex: "#C8A2C8" },
				{ name: "Baby Blue", hex: "#BFEFFF" },
			],
			images: [
				"https://i.pinimg.com/1200x/22/72/72/227272a7ea9332b436152df9e7124a8f.jpg",
				"https://i.pinimg.com/736x/2f/f1/4f/2ff14fcad2736d30d2db0bc4e7703b78.jpg",
			],
			specifications: {
				fabric: "Cotton-Polyester Mix",
				length: "Full (trouser)",
				fit: "Oversized",
				sleeve: "Half sleeve shirt",
				closure: "Button & Elastic Waist",
			},
			occasion: ["Casual", "College", "Travel"],
			rating: 4.5,
			care_instructions: "Machine wash gentle. Do not bleach. Line dry.",
			what_you_get: ["Top", "Trousers", "Bag"],
		},
	],
});

Alpine.start();
