
const week = ["понедельник", "вторник","среда","четверг","пятница","суббота","воскресенье"];

let day = new Date();
let d = day.getDay();

for (let i = 0; i < week.length; i++) {
  if (i === 5 || i === 6) {
    document.write('</b><i> <br>', week[i]);
  } else if(i === d-1){
    document.write('<b> <br>', week[i]);
  } else {
    document.write('<br>', week[i]);
  }
};
