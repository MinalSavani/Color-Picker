document.querySelectorAll('input[type=color]').forEach(function(picker) {
    var targetLabel = document.querySelector('label[for="' + picker.id + '"]');
    var colorArea = document.createElement('span');
    
    colorArea.innerHTML = picker.value;
    targetLabel.appendChild(colorArea);

    picker.addEventListener('change', function() {
        colorArea.innerHTML = picker.value;
    });
});
