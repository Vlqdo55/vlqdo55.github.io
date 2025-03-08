// При презареждане на сайтът се скролва до горе
window.onload = function () {
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 100);
}

//Взима страничното меню по клас и от стил none преминава във flex
function showSidebar(){
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'flex';
}

//Взима страничното меню по клас и от стил flex преминава във none
function hideSidebar(){
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
}

//Функция за автоматично затваряне на страничното меню
function autoCloseSidebar() {
    const sidebar = document.getElementById('sidebar');
    const maxWidth = 974; 

    if (window.innerWidth > maxWidth) {
        sidebar.style.display = 'none'; // Скрива страничното меню ако прозорецът е по-широк от 974px
    }
}
window.addEventListener('resize', autoCloseSidebar);

// Filter
function filterPackagesPS() {
    const selectedCategory = document.getElementById("category-photosessions").value; // Взима се стойността на избраната категория
    
    const packageIds = ["wedding", "individual", "family", "prom", "other"]; // Списък с всички категории

    packageIds.forEach(id => {
        document.getElementById(id).style.display = "none"; // Първоначално се скриват преди проверката
    });

    // Проверка дали е избрана конкретна категория, и ако да се показва само тя, иначе се показват всички
    if (selectedCategory !== "all") {
        document.getElementById(selectedCategory).style.display = "flex";
    } else {
        packageIds.forEach(id => {
            document.getElementById(id).style.display = "flex";
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const categoryPhotosessions = document.getElementById("category-photosessions");

    if(categoryPhotosessions){
        categoryPhotosessions.addEventListener("change", filterPackagesPS); // Вика функцията за филтър при промяна на категорията
    }
});

function filterPackagesMM() {
    const selectedCategory = document.getElementById("category-multimedia").value; // Взима се стойността на избраната категория
    
    const packageIds = ["photo-edit", "product-photography", "drone", "video-edit", "animation"]; // Списък с всички категории

    packageIds.forEach(id => {
        document.getElementById(id).style.display = "none"; // Първоначално се скриват преди проверката
    });

    // Проверка дали е избрана конкретна категория, и ако да се показва само тя, иначе се показват всички
    if (selectedCategory !== "all") {
        document.getElementById(selectedCategory).style.display = "flex";
    } else {
        packageIds.forEach(id => {
            document.getElementById(id).style.display = "flex";
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const categoryMultimedia = document.getElementById("category-multimedia");

    if(categoryMultimedia){
        categoryMultimedia.addEventListener("change", filterPackagesMM); // Вика функцията за филтър при промяна на категорията
    }
});

// Sorting
function sortPackages() {
    const sortOption = document.getElementById("sort").value;
    const container = document.querySelector(".packages");
    const packages = Array.from(document.querySelectorAll(".package"));

    if (sortOption === "price-asc") {
        packages.sort((a, b) => Number(a.getAttribute("data-price")) - Number(b.getAttribute("data-price")));
    } else if (sortOption === "price-desc") {
        packages.sort((a, b) => Number(b.getAttribute("data-price")) - Number(a.getAttribute("data-price")));
    }

    console.log("Sorted Order:", packages.map(pkg => pkg.getAttribute("data-price")));

    packages.forEach(pkg => container.appendChild(pkg));
}

document.addEventListener("DOMContentLoaded", function () {
    const sort = document.getElementById("sort");

    if(sort){
        sort.addEventListener("change", sortPackages);   
    }
});
