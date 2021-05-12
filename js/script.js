function calculate(operator) {
    var number1, number2;
    /*
    Uncaught TypeError: cannot read property 'innerHTML' of null
    The 'id' element does not exist in your webpage.
    So document.getElementById("id") return null. While you can not use innerHTML property of NULL.
    https://stackoverflow.com/questions/9003270/uncaught-typeerror-cannot-read-property-innerhtml-of-null
    */
    if (document.getElementById('text1') != null) {
      number1 = document.getElementById('text1').value;
    }
    if (document.getElementById('text2') != null) {
      number2 = document.getElementById('text2').value;
    }
    number1 = Number(number1);
    number2 = Number(number2);
    // Values of other types can be converted to numbers using the Number() function.
    switch (operator) {
      case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

      case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

      case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

      case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

      default:
        result = 'Invalid operator';
        console.log('Invalid operator');
        break;
    }
    if (document.getElementById('text3') != null) {
      document.getElementById('text3').innerHTML = result.toString(); // (property) InnerHTML.innerHTML: string
    }
}
/*
function get_Week() {
     
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    var data_Week = new Date().getDate();
    document.getElementById('numWeek').innerHTML = 'Today is no.' + data_Week;
    document.getElementById('msg').innerHTML = dateTime;
    alert('It is ' + dateTime + ' now！');
}
*/

function confirmFunction() {
    var txt;
    var r = confirm("Press a button!");
    if (r == true) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("confirmMsg").innerHTML = txt;
}

function getLocationHostNameFunction() {
    alert(location.hostname);
}

function PromptBoxFunction() {
    var txt;
    var person = prompt("Please enter your name:", "");
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("name").innerHTML = txt;
}

function focusFunction() {
    var myWindow = window.open(document.URL, '_blank', 'location=yes, height=570, width=520, scrollbars=yes, status=yes');
    myWindow.focus();
}

  
// 當使用者在網頁中按下鍵盤按鍵時
document.onkeydown = function(e){
  
  // Main e.keyCode display
  document.querySelector('.keycode-display').innerHTML = e.keyCode;
  const cards = document.querySelector('.cards');
  cards.classList.add('active');
  cards.classList.remove('hide');
  document.querySelector('.text-display').classList.add('hide');

  newKeyText = e.key;
  newLocationText = e.location;
  newCodeText = e.code || '';

  document.querySelector('.item-key .main-description').innerHTML = newKeyText;
  document.querySelector('.item-location .main-description').innerHTML = newLocationText;
  document.querySelector('.item-code .main-description').innerHTML = newCodeText;
  
  
}


function doDate(){
  var str = "";

  var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

  var now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  str += "Today is: " + days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + hours +":" + minutes + ":" + seconds;
  document.getElementById("todaysDate").innerHTML = str;

  const secondsDeg = (seconds / 60) * 360 + 90;
  const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  const secondHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}
setInterval(doDate, 1000);

const checkboxes = document.querySelectorAll('.item input[type="checkbox"]');
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.inbox');
const items = JSON.parse(localStorage.getItem('items')) || [];
var lastChecked;
function addItem(e) {
  // 加上preventDefault()避免每次submit都會重整網頁
  e.preventDefault();
  /*
  var focusCondition = document.querySelectorAll('input')
  focusCondition.forEach(focus => {
    if (focus.matches(":focus"))
      e.preventDefault();
  });
  */
  // 利用再次querySelector來選取form中的input欄位值
  const text = this.querySelector('[name=item]').value;
  // 宣告新增要存入的物件，是輸入的文字與是否勾選的狀態(done)
  const item = {
    text,
    done: false
  }
  console.log(item);
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  // 清空輸入欄位
  this.reset();
}

// ES6可在function中的參數直接設定參數預設值
function populateList(inbox = [], inboxList) {
  // 使用map搭配join來組成字串，並顯示在html的清單ul中
  inboxList.innerHTML = inbox.map((inbox, i) => {
    return `
      <div class="item">
        <input type="checkbox" data-index=${i} id="item${i}" ${inbox.done ? 'checked' : ''}/>
        <p>${inbox.text}</p>
        <div class="delete-button">
          <span data-index=${i}>delete</span> 
        </div>
      </div>
    `;
  }).join('');
}

function toggleDone(e) {
  // 初始化一個存檔狀態
  var save = false;
  // 取得觸發元素的data-index值
  const el = e.target;
  const index = el.dataset.index;
  // 判斷觸發元素，如果是input則為checkbox的狀態切換
  if (e.target.matches('input')){
    items[index].done = !items[index].done;
    save = true;
  }
  // 如果是span則是透過splice刪除該物件
  if (e.target.matches('span')){
    items.splice(index, 1);
    save = true;
  }
  // 判斷上方有做事才存擋
  if (save){
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);  
  }
}
// 監聽click
itemsList.addEventListener('click', toggleDone);

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
// 監聽submit按鈕
addItems.addEventListener('submit', addItem);

// 取得操作元素
const checkAllBtn = document.querySelector('.checkAll');
// 全選/全取消
const checkAll = function(e) {
  // 取得觸發當下全選按鈕是否已勾選
  const checkStatus = e.target.checked;
  // 透過迴圈將每個item的checkbox狀態改為與全選checkbox狀態相同
  items.forEach(index => {
    index.done = checkStatus;
  });
  // 存檔
  localStorage.setItem('items', JSON.stringify(items));
  // 重整
  populateList(items, itemsList);
}
// 監聽操作元素動作
checkAllBtn.addEventListener('click', checkAll);

const shadow_move = document.querySelector('.shadow-move');
const text = shadow_move.querySelector('h1');
const walk = 500; // 100px
function shadow(e) {
  const { offsetHeight: height, offsetWidth: width } = shadow_move;
  var { offsetX: x, offsetY: y  } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
}
    
shadow_move.addEventListener('mousemove', shadow);

// 當使用者要離開或關閉目前頁面時
window.onbeforeunload = function(event) {

  // 返回要顯示給使用者看的提醒文字
  return '你確定要離開本頁面嗎？';
};


