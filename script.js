const btnUp = {
  el: document.querySelector('.getcourse'),
  show() {
    // удалим у кнопки класс btn-up_hide
    document.querySelector('.getcourseb').style.display = 'block';
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    console.log('hui')
    document.querySelector('.getcourseb').style.display = 'none';
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY ;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
        // scrollY < 600 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    // document.querySelector('.btn-up').onclick = () => {
    //   // переместим в начало страницы
    //   window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: 'smooth'
    //   });
    }
  }
// }

btnUp.addEventListener();



// после готовности DOM
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slider').forEach((el) => {
    ItcSlider.getOrCreateInstance(el);
  });
});

const formWrap = document.getElementById('form-wrap');

function openForm() {
    document.querySelector('.head').style = 'display: none'
    document.querySelector('.info').style = 'display: none'
    document.querySelector('.middle').style = 'display: none'
    document.querySelector('.zend').style = 'display: none'
    document.querySelector('#form-wrap').style = 'display: block'
    document. querySelector('body').style = 'background-image: url(images/3.jpg)'
    // formWrap.classList.add('open');
}

function openForm1() {
    document.querySelector('.head').style = 'display: none'
    document.querySelector('.info').style = 'display: none'
    document.querySelector('.middle').style = 'display: none'
    
    document.querySelector('#form-wrap').style = 'display: none'
    document. querySelector('body').style = 'background-image: url(images/3.jpg)'   
    document.querySelector('.zend').style = 'display: block'
}

function openForm2() {
    document.querySelector('.head').style = 'display: none'
    document.querySelector('.info').style = 'display: none'
    document.querySelector('.middle').style = 'display: none'
    
    document.querySelector('#form-wrap').style = 'display: none'
    document. querySelector('body').style = 'background-image: url(images/3.jpg)'   
    document.querySelector('.zend').style = 'display: block'
}

// function onEntry(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//      change.target.classList.add('element-show');
//     }
//   });
// }

// let options = {
//   threshold: [0.5] };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.cool');

// for (let elm of elements) {
//   observer.observe(elm);
// }