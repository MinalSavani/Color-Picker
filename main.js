document.querySelectorAll('input[type=color]').forEach(function (picker) {
  var targetLabel = document.querySelector('label[for="' + picker.id + '"]');
  var colorArea = document.createElement('span');

  const container = document.getElementById('container')

  colorArea.innerHTML = picker.value;
  console.log('picker.value', picker.value)
  targetLabel.appendChild(colorArea);

  picker.addEventListener('change', function () {
    colorArea.innerHTML = picker.value.toUpperCase();
    container.style.backgroundColor = picker.value;
  });
});
