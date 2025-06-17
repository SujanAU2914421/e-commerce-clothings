import Alpine from "alpinejs";
Alpine.store("search", {
	isSearching: false,
	setSearching(value) {
		this.isSearching = value;
		console.log(value);
	},
});

Alpine.start();
