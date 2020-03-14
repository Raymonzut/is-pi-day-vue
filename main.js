const now = new Date();

const is_right_day = now.getDate() === 14;
const is_right_month = (now.getMonth() + 1) === 3;

const is_pi_day = is_right_day && is_right_month;

var app = new Vue({
  el: '#app',
  data: {
    message: "It is" + (is_pi_day ? " " : " not ") + "pi day"
  },
})
