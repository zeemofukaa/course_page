function view_more(course_name) {
  const buttonElement = document.querySelector(`.js-know_more_${course_name}`);
  if (buttonElement.innerText === 'Know more') {
    buttonElement.innerText = 'View less';
    if (course_name === 'python') {
      document.querySelector('.js-view_more_python').innerHTML = `<div class="course_features">
  <div class="image">
    <img class="course_img" src="python-course.png">

    <div class="below_img">
      <p class="heading">Teacher</p>
      <p class="heading">Enrolled</p>
    </div>
    <div class="below_img">
      <p>John Doe</p>
      <p>2852 students</p>
    </div>
  </div>
  <div class="features">
    <h3><span class="deco">C</span>o<span class="deco">urs</span>e Features</h3>
    <div class="table_content">
      <ul class="left_side">
        <li>Lectures</li>
        <li>Quizes</li>
        <li>Duration</li>
        <li>Skill level</li>
        <li>Certificate</li>
        <li>Language</li>
        <li>Mode</li>
      </ul>
      <ul class="right_side">
        <li>6</li>
        <li>Yes</li>
        <li>15 hrs</li>
        <li>Basic</li>
        <li>Yes</li>
        <li>English</li>
        <li>Online</li>
      </ul>
    </div>
    <div class="enroll_button">
      <a href="#"><button>Enroll Now</button></a>
    </div>
  </div>
  </div>
  <div class="day_wise_planner">
    <h2>Day-wise Planner</h2>
    <ul>
      <li><a href="https://drive.google.com/drive/folders/1NH6lVNd2LwQokAyZMhAgWJMoUkhK0rgc?usp=drive_link">Day 1: Python Basics</a></li>
      <li><a href="https://drive.google.com/drive/folders/1NH6lVNd2LwQokAyZMhAgWJMoUkhK0rgc?usp=drive_link">Day 2: OOPs</a></li>
      <li><a href="https://drive.google.com/drive/folders/1NH6lVNd2LwQokAyZMhAgWJMoUkhK0rgc?usp=drive_link">Day 3: Python Libraries: Part I: Numpy</a></li>
      <li><a href="https://drive.google.com/drive/folders/1NH6lVNd2LwQokAyZMhAgWJMoUkhK0rgc?usp=drive_link">Day 4: Python Libraries: Part II: Pandas</a></li>
      <li><a href="https://drive.google.com/drive/folders/1NH6lVNd2LwQokAyZMhAgWJMoUkhK0rgc?usp=drive_link">Day 5: Python Libraries: Part III: Matplotlib</a></li>
      <li><a href="https://drive.google.com/drive/folders/1NH6lVNd2LwQokAyZMhAgWJMoUkhK0rgc?usp=drive_link">Day 6: Python Libraries: Part IV: Seaborn</a></li>
    </ul>
  </div>`
    }
    else if (course_name === 'ML') {
      document.querySelector('.js-view_more_ML').innerHTML = `<div class="course_features">
  <div class="image">
    <img class="course_img" src="ml_course.jpg">
  
    <div class="below_img">
      <p class="heading">Teacher</p>
      <p class="heading">Enrolled</p>
    </div>
    <div class="below_img">
      <p>Jane Doe</p>
      <p>2091 students</p>
    </div>
  </div>
  <div class="features">
    <h3><span class="deco">C</span>o<span class="deco">urs</span>e Features</h3>
    <div class="table_content">
      <ul class="left_side">
        <li>Lectures</li>
        <li>Quizes</li>
        <li>Duration</li>
        <li>Skill level</li>
        <li>Certificate</li>
        <li>Language</li>
        <li>Mode</li>
      </ul>
      <ul class="right_side">
        <li>7</li>
        <li>Yes</li>
        <li>16 hrs</li>
        <li>Basic</li>
        <li>Yes</li>
        <li>English</li>
        <li>Online</li>
      </ul>
    </div>
    <div class="enroll_button">
      <a href="#"><button>Enroll Now</button></a>
    </div>
  </div>
  </div>
  <div class="day_wise_planner">
  <h2>Day-wise Planner</h2>
  <ul>
    <li><a href="https://drive.google.com/drive/folders/1NH6lVNd2LwQokAyZMhAgWJMoUkhK0rgc?usp=drive_link">Day 1: Regression & Classification: Part I</a></li>
    <li><a href="https://drive.google.com/drive/folders/1NH6lVNd2LwQokAyZMhAgWJMoUkhK0rgc?usp=drive_link">Day 2: Regression & Classification: Part II</a></li>
    <li><a href="https://drive.google.com/drive/folders/1NH6lVNd2LwQokAyZMhAgWJMoUkhK0rgc?usp=drive_link">Day 3: Trees & Ensembles: Part I</a></li>
    <li><a href="https://drive.google.com/drive/folders/1NH6lVNd2LwQokAyZMhAgWJMoUkhK0rgc?usp=drive_link">Day 4: Trees & Ensembles: Part II</a></li>
    <li><a href="https://drive.google.com/drive/folders/1NH6lVNd2LwQokAyZMhAgWJMoUkhK0rgc?usp=drive_link">Day 5: Deep Learning Part: I</a></li>
    <li><a href="https://drive.google.com/drive/folders/1NH6lVNd2LwQokAyZMhAgWJMoUkhK0rgc?usp=drive_link">Day 6: Deep Learning Part: II</a></li>
    <li><a href="https://drive.google.com/drive/folders/1NH6lVNd2LwQokAyZMhAgWJMoUkhK0rgc?usp=drive_link">Day 7: Hands on Session</a></li>
  </ul>
  </div>`}
  } else {
    buttonElement.innerText = 'Know more';
    document.querySelector(`.js-view_more_${course_name}`).innerHTML = '';
  }
}

function submit() {
  const buttonElement = document.querySelector('.js-submit-button');

  if (buttonElement.innerText === 'Submit') {
    buttonElement.innerHTML = 'Submitted';
  } else {
    buttonElement.innerHTML = 'Submit';
  }
}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 0;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
};

