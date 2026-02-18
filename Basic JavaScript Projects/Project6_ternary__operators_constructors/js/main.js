function myFunction() {
    var age, can_vote;
    age = document.getElementById("Age").value;
    can_vote = (age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("Vote").innerHTML = can_vote;
}

function Computer (Motherboard, CPU, RAM, GPU) {
    this.Computer_Motherboard = Motherboard;
    this.Computer_CPU = CPU;
    this.Computer_RAM = RAM;
    this.Computer_GPU = GPU;
}

const PC1 = new Computer(
    "ASUS ROG Strix B650E-F",
    "AMD Ryzen 7 7800X3D",
    "32GB DDR5 6000MHz",
    "NVIDIA RTX 4080 Super"
);

const PC2 = new Computer(
    "MSI MAG B760 Tomahawk WiFi",
    "Intel Core i7-14700K",
    "64GB DDR5 5600MHz",
    "NVIDIA RTX 4070 Ti Super"
);

const PC3 = new Computer(
    "Gigabyte X670 AORUS Elite AX",
    "AMD Ryzen 9 7950X",
    "128GB DDR5 6000MHz",
    "NVIDIA RTX 4090"
);

const PC4 = new Computer(
    "ASRock B550M Steel Legend",
    "AMD Ryzen 5 5600X",
    "16GB DDR4 3600MHz",
    "AMD Radeon RX 6700 XT"
);

const PC5 = new Computer(
    "ASUS Prime H610M-E",
    "Intel Core i5-12400",
    "16GB DDR4 3200MHz",
    "NVIDIA RTX 3060"
);


function myFunction2() {
    document.getElementById("New_and_This").innerHTML = 
    `PC1 has a 
    ${PC1.Computer_Motherboard} motherboard, 
    ${PC1.Computer_CPU} processor, with 
    ${PC1.Computer_RAM} of RAM, and a 
    ${PC1.Computer_GPU} graphics card.`;
}

function myFunction3() {
    var input = 5;
    function nestedFunction1(x) {
        
        function nestedFunction2() {
            input *= x;
        }
        nestedFunction2();
    }
    nestedFunction1(8);
    document.getElementById("Nested_Function").innerHTML = `The value of input is now ${input}.`;
}