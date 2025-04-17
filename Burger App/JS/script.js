// Script To Add and minus the quantity of the product
document.addEventListener('DOMContentLoaded', function () {
    const orderTypes = document.querySelectorAll('.quntaty');

    const minQuantity = 0;  // غيرت من 1 إلى 0 لأنك تبدأ من 0 في HTML
    const maxQuantity = 10;

    orderTypes.forEach(order => {
        const minusBtn = order.querySelector('.minus');
        const plusBtn = order.querySelector('.plus');
        const numElement = order.querySelector('.num');

        // استخدمنا dataset أو id لتخزين كل كمية بشكل منفصل
        let currentNum = parseInt(numElement.textContent) || minQuantity;
        numElement.textContent = currentNum;

        minusBtn.addEventListener('click', function () {
            if (currentNum > minQuantity) {
                currentNum--;
                numElement.textContent = currentNum;
                // يمكنك حفظ القيمة في localStorage إذا لزم الأمر
                // localStorage.setItem('quantity_' + someUniqueId, currentNum);
            }
        });

        plusBtn.addEventListener('click', function () {
            if (currentNum < maxQuantity) {
                currentNum++;
                numElement.textContent = currentNum;
                // يمكنك حفظ القيمة في localStorage إذا لزم الأمر
                // localStorage.setItem('quantity_' + someUniqueId, currentNum);
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const sizeOptions = document.querySelectorAll('.size .back');
    const selectedColor = '#c8161d';
    let currentSelection = null;

    sizeOptions.forEach(option => {
        option.addEventListener('click', function () {
            const size = this.querySelector('h3').textContent;

            if (currentSelection === size) {
                // إلغاء التحديد إذا تم النقر على نفس الخيار
                this.style.backgroundColor = '';
                this.style.color = '';
                currentSelection = null;
            } else {
                // تحديد خيار جديد
                sizeOptions.forEach(opt => {
                    opt.style.backgroundColor = '';
                    opt.style.color = '';
                });

                this.style.backgroundColor = selectedColor;
                this.style.color = '#fff';
                currentSelection = size;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const heartIcons = document.querySelectorAll('.right.bg .fa-heart');
    const favoriteColor = '#910203';

    heartIcons.forEach(icon => {
        // إضافة حدث النقر لكل أيقونة قلب
        icon.addEventListener('click', function (e) {
            e.preventDefault();

            // التبديل بين الحالتين
            if (this.classList.contains('fa-regular')) {
                this.classList.remove('fa-regular');
                this.classList.add('fa-solid');
                this.style.color = favoriteColor;
            } else {
                this.classList.remove('fa-solid');
                this.classList.add('fa-regular');
                this.style.color = ''; // إعادة اللون الأصلي
            }
        });
    });
});