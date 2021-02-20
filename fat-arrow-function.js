var javascript = {
    name: "javaScript",
    libraries: ["react", "angular", "vue"],
    printLibraries: function() {
        this.libraries.forEach(function(a) {
            console.log(this);
            console.log(`${this.name} loves ${a}`);
        });

    },

};

javascript.printLibraries();