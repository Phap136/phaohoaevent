// Khởi tạo EmailJS với User ID của bạn
emailjs.init("lip05QOif8Nr_mfd1");

let selectedFood = "";
let selectedTour = "";

function fadeIn(id) {
  const el = document.getElementById(id);
  el.classList.remove('hidden');
  el.classList.add('animate-fade-in');
}

function hide(id) {
  const el = document.getElementById(id);
  el.classList.add('hidden');
}

function agree() {
  hide('question1');
  fadeIn('question2');
  confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
}

function decline() {
  hide('question1');
  fadeIn('sadCat');
}

function dinnerOutside() {
  hide('question2');
  fadeIn('dinnerOptions');
}

function dinnerHome() {
  hide('question2');
  selectedFood = "Ăn tại nhà";
  fadeIn('question3');
}

function choose(food) {
  selectedFood = food;
  hide('dinnerOptions');
  fadeIn('question3');
}

function tourYes() {
  selectedTour = "Có";
  sendEmail();
}

function tourNo() {
  selectedTour = "Không";
  sendEmail();
}

function sendEmail() {
  hide('question3');
  fadeIn('result');

  const templateParams = {
    food: selectedFood,
    tour: selectedTour,
    time: new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })
  };

  emailjs.send('service_q3v5odn', 'template_7fk4d4h', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}
