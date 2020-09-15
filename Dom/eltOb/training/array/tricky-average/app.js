var grades = [2, 5, , , 9, 8, , 8];
prompt("enter");
if (grades.length > 0) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < grades.length; i++) {
    if (grades[i] != undefined) {
      sum += grades[i];
      count = count + 1;
      alert("hello");
    }
  }
  document.write(sum / grades.length);
}
