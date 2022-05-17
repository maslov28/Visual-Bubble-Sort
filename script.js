const arr = [13, 1, 0, 22, 2, 32, 2];
let out = document.querySelector('#root');

bubbleSort(arr);

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    (function(index) {
      setTimeout(function(){
        for (let k = 0; k < arr.length - 1 - i; k++) {
          (function(index) {
            setTimeout(function() {
              out.innerHTML = '';
              if (arr[k] > arr[k + 1]) {
                let minValue = arr[k + 1];
                arr[k + 1] = arr[k];
                arr[k] = minValue;
              }
              console.log(k);
              renderArray(arr);
            }, 1000 * index)
          })(k)
        }
      }, 1000 * index * (arr.length - 1))
    })(i)
  }
}

function renderArray(arr) {
  for (let item of arr) {
    let column = document.createElement('div');
    column.textContent = item;
    column.classList.add('column');
    column.style.width = `${item * 10}px`;
    out.append(column);
  }
}

