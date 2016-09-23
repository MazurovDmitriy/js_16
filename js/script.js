$(function(){
  $('.search__button').on('click', search);
  $('.search__input').keypress(function(eventObject){
    if(eventObject.which == 13) {
      search();
    }
  });
});

function search() {
  $('.result').html('');
  var q = $('.search__input').val();
  if(q.length < 3) return;
  var params = {
    tag: q,
    key: 'LIVDSRZULELA',
    limit: 10
  }
  $.getJSON('https://api.riffsy.com/v1/search', params, function(data){
    var resultHTML = tmpl("result_template", data);
    $('.result').html(resultHTML);
  });
}

function Human(name, age, sex, height, weight) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.height = height;
  this.weight = weight;
}

function Worker(workPlace, salary) {
  this.workPlace = workPlace;
  this.salary = salary;
  this.work = function() {
    console.log('I am working!');
  }
}

function Student (studyPlace, scholarship) {
  this.studyPlace = studyPlace;
  this.scholarship = scholarship;
  this.watchTV = function() {
    console.log('I am watch TV!');
  }
}

var human = new Human('Ivan', 18, 'male', 180, 75);
Worker.prototype = human;
Student.prototype = human;
var worker = new Worker('CNN', '2500$');
var student = new Student('Oxford', '100$');
console.log('worker Object', worker);
console.log('student Object', student);
console.log('worker age', worker.age);
console.log('student name', student.name);
