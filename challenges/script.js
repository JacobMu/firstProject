var today;

today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

function isWednesday() {
   if (daylist[day] === "Wednesday") {
      console.log("It's Wednesday, my dudes.");

   }  else {
      console.log("It's not Wednesday.");
      document.querySelector('.dude').style.display='none';
      document.getElementById('notWednesday').style.display='block';
   }
}

isWednesday();
