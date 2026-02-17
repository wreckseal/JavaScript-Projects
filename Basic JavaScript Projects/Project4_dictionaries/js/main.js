function my_Dictionary() {
    var ComputerParts = {
        CPU: "AMD Ryzen 9 5950X", // Property CPU is assigned the value of "AMD Ryzen 9 5950X"
        GPU: "NVIDIA GeForce RTX 3090", // Property GPU is assigned the value of "NVIDIA GeForce RTX 3090"
        RAM: "Corsair Vengeance LPX 32GB", // Property RAM is assigned the value of "Corsair Vengeance LPX 32GB"
        Storage: "Samsung 970 EVO Plus 1TB", // Property Storage is assigned the value of "Samsung 970 EVO Plus 1TB"
        Motherboard: "ASUS ROG Strix X570-E Gaming" // Property Motherboard is assigned the value of "ASUS ROG Strix X570-E Gaming"
    };
    delete ComputerParts.CPU; // The property GPU is deleted from the ComputerParts object
    document.getElementById("Dictionary").innerHTML = ComputerParts.CPU; // The value of the property CPU is put into the HTML element with the id "Dictionary"
}
