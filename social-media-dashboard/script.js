const checkboxItem = document.querySelector('.theme-switch input[type="checkbox"]');

function ifChecked (e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

checkboxItem.addEventListener('change', ifChecked, false);