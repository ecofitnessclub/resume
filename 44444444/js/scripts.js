/////////////////// hide blocks while developing

document.querySelector(".submit").style.display = "none";
document.querySelector(".video1").style.display = "none";
document.querySelector(".processing").style.display = "none";
document.querySelector(".zend").style.display = "none";
document.querySelector(".result1").style.display = "none";
document.querySelector(".result2").style.display = "none";
document.querySelector(".result3").style.display = "none";
///////////////////

let polls = [
  {
    q: "Как давно вы замечаете проблемы в половой жизни?",
    a: `<li class="item"><input type="radio" name="radio" value="1" id="b1"><label for="b1"><h5>6 месяцев</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="2" id="b2"><label for="b2"><h5>1 год</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="3" id="b3"><label for="b3"><h5>Более 3-х лет</h5></label></li>`,
  },
  {
    q: "Сколько у вас половых актов в неделю",
    a: `<li class="item"><input type="radio" name="radio" value="2" id="b1"><label for="b1"><h5>1 раз в неделю</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="1" id="b2"><label for="b2"><h5>2-3 раза в неделю</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="3" id="b3"><label for="b3"><h5>1 раз в месяц</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="4" id="b4"><label for="b4"><h5>Давно нет</h5></label></li>`,
  },
  {
    q: "Продолжительность вашего полового акта менее 5 минут?",
    a: `<li class="item"><input type="radio" name="radio" value="2" id="b1"><label for="b1"><h5>Да</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="1" id="b2"><label for="b2"><h5>Нет</h5></label></li>`,
  },

  {
    q: "Ощущаете ли вы боли в спине и ногах?",
    a: `<li class="item"><input type="radio" name="radio" value="2" id="b1"><label for="b1"><h5>Редко</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="3" id="b2"><label for="b2"><h5>Иногда</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="4" id="b3"><label for="b3"><h5>Часто</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="5" id="b4"><label for="b4"><h5>Постоянно</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="1" id="b5"><label for="b5"><h5>Нет</h5></label></li>`,
  },
  {
    q: "Ощущаете ли вы жжение, режущие боли или дискомфорт при мочеиспускании?",
    a: `<li class="item"><input type="radio" name="radio" value="3" id="b1"><label for="b1"><h5>Да</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="1" id="b2"><label for="b2"><h5>Нет</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="2" id="b3"><label for="b3"><h5>Иногда</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="4" id="b4"><label for="b4"><h5>Постоянно</h5></label></li>`,
  },
  {
    q: "Хотите ли вы начать решать возникшие проблемы со здоровьем и избавиться от всех неприятных симптомов?",
    a: `<li class="item"><input type="radio" name="radio" value="1" id="b1"><label for="b1"><h5>Да</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="1" id="b2"><label for="b2"><h5>Пока не уверен / или не знаю</h5></label></li>
        <li class="item"><input type="radio" name="radio" value="1" id="b3"><label for="b3"><h5>Хочу решить проблему раз и навсегда</h5></label></li>`,
  },
];

let current = 1;
let progress = 1;
let equl = 6;
let out = 1;
let rbtn = [];

function f1() {
  setTimeout(() => {
    document.querySelector(".video").style.display = "none";
    document.querySelector(".background").style.display = "none";
    document.querySelector(".video1").style.display = "block";
    document.querySelector(".img1").style.display = "none";
    document.querySelector(".arrow1").style.display = "none";
    document.querySelector(".hquer").style.display = "none";
    // document.querySelector(".zend").style.display = "none";
    document.querySelector(".submit").style.display = "none";
    // document.querySelector(".myVideo").style.display = "none";
    document.querySelector(".section1").style.display = "none";
    document.querySelector(".quiz-wrapper").style.display = "block";
    document.querySelector(".vopros").style.display = "block";
  }, 100);
}

document.querySelector(".vopros").innerHTML = "Вопрос" + " " + out;

function f2() {
  if (current < polls.length - 1) {
    console.log("func");
    setTimeout(() => {
      var radios = document.getElementsByName("radio");
      for (var radio of radios) {
        if (radio.checked) {
          rbtn.push(radio.value);
          console.log(rbtn);
        }
      }
      console.log("delay");
      document.querySelector(".question").textContent = polls[current].q;
      document.querySelector(".list").innerHTML = polls[current].a;

      out += 1;
      document.querySelector(".vopros").textContent = "Вопрос" + " " + out;

      progress += 1;
      document.querySelector(".num").textContent = progress + " " + "из 6";

      document.querySelectorAll(".item input").forEach((elem) => {
        elem.onclick = f2;
      });
      current++;
      document.querySelector(".arrow1").style.display = "block";
      document.querySelector(".img1").style.display = "block";
    }, 300);
  } else if (equl == polls.length) {
    setTimeout(() => {
      console.log("delay");
      document.querySelector(".question").textContent = polls[current].q;
      document.querySelector(".list").innerHTML = polls[current].a;

      out += 1;
      document.querySelector(".vopros").textContent = "Вопрос" + " " + out;

      progress += 1;
      document.querySelector(".num").textContent = progress + " " + "из 6";

      document.querySelector(".img2").style.display = "none";
      document.querySelector(".arrow2").style.display = "none";
      document.querySelector(".quiz-wrapper").style.display = "block";
      document.querySelector(".hquer").style.display = "block";
      document.querySelectorAll(".item input").forEach((elem) => {
        elem.onclick = f2;
      });
      current++;
    }, 300);
  } else {
    setTimeout(() => {
      progress += 1;
      out += 1;
      // document.querySelector('.prg-value').textContent = progress + '%';
      // document.querySelector('#prg').value = progress;
      document.querySelector(".question").style.display = "none";
      document.querySelector(".answers").style.display = "none";
      document.querySelector(".quiz-top").style.height = 50 + "px";

      document.querySelector(".analis").style.display = "block";
    }, 300);
  }
}

function f5() {
  setTimeout(() => {
    let sum = 0;
    for (let i = 0; i < rbtn.length; i++) {
      sum = sum + +rbtn[i];
    }
    console.log(sum);

    progress += 1;
    out += 1;
    // document.querySelector('.prg-value').textContent = progress + '%';
    // document.querySelector('#prg').value = progress;
    document.querySelector(".question").style.display = "none";
    document.querySelector(".answers").style.display = "none";
    document.querySelector(".video1").style.display = "none";
    document.querySelector(".hquer").style.display = "none";
    document.querySelector(".quiz-wrapper").style.display = "block";
    document.querySelector(".quiz-top").style.display = "none";
    // document.querySelector(".quiz-wrapper").style.display = "none";
    // document.querySelector(".myVideo").style.display = "none";
    document.querySelector(".quiz-top").style.height = 50 + "px";

    document.querySelector(".processing").style.display = "block";
    f4();
  }, 300);
}

document.querySelector(".hquer").onclick = f5;

function f3() {
  setTimeout(() => {
    // progress += 1;
    // document.querySelector('.prg-value').textContent = progress + '%';
    // document.querySelector('#prg').value = progress;

    // document.querySelector(".myVideo").style.display = "none";

    document.querySelector(".answers").style.display = "none";
    document.querySelector(".video").style.display = "none";
    document.querySelector(".processing").style.display = "block";

    f4();
  }, 1000000000);
}

// let prev = document.querySelector(".arrow1");
// let next = document.querySelector(".arrow2");

// let slideIndex = 0;

// prev = addEventListener("click", () => dasGret(-1));
// next = addEventListener("click", () => dasGret(1));

// function dasGret(n) {
//   // console.log(n);
//   slideIndex += n;
//   console.log(slideIndex);

//   if (slideIndex < 0) slideIndex = polls.length - 1;
//   if (slideIndex >= polls.length) slideIndex = 0;
// }

function f4() {
  setTimeout(() => {
    document.querySelector(".processing").style.display = "none";
    document.querySelector(".vopros").style.display = "none";

    let sum = 0;
    for (let i = 0; i < rbtn.length; i++) {
      sum = sum + +rbtn[i];
    }
    console.log(sum);

    if (sum <= 6) {
      document.querySelector(".submit").style.display = "block";
      document.querySelector(".result1").style.display = "block";
    } else if ((sum > 6, sum <= 9)) {
      document.querySelector(".submit").style.display = "block";

      document.querySelector(".result2").style.display = "block";
      // document.querySelector(".zend").style.display = "none";
    } else {
      document.querySelector(".submit").style.display = "block";
      document.querySelector(".result3").style.display = "block";
    }
  }, 3000);
}

function f6() {
  setTimeout(() => {
    document.querySelector(".submit").style.display = "none";
    document.querySelector(".blank").style.display = "none";
    document.querySelector(".zend").style.display = "block";
    document.querySelector(".result1").style.display = "none";
    document.querySelector(".result2").style.display = "none";
    document.querySelector(".result3").style.display = "none";
    console.log("ok");
  }, 300);
}
document.querySelector(".submit").onclick = f6;

document.querySelector(".start-test").onclick = f1;

document.querySelectorAll(".item input").forEach((elem) => {
  elem.onclick = f2;
});

// document.querySelector(".get-result").onclick = f3;
