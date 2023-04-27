const skill = document.getElementById('skills');
const experienc = document.getElementById('experience');
const edu = document.getElementById('education');
// --------------------------------------------------------------

const skills = document.querySelector('.skills');
const experience = document.querySelector('.experience');
const education = document.querySelector('.education');
// --------------------------------------------------------------

const ham = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const ul = document.querySelector('.ul');
// --------------------------------------------------------------

const header = document.querySelector('.home');
// --------------------------------------------------------------

skills.addEventListener('click', () => {
    skill.style.display = 'block';
    experienc.style.display = 'none';
    edu.style.display = 'none';
})

experience.addEventListener('click', () => {
    experienc.style.display = 'block';
    skill.style.display = 'none';
    edu.style.display = 'none';
});

education.addEventListener('click', () => {
    edu.style.display = 'block';
    experienc.style.display = 'none';
    skill.style.display = 'none';
});


ham.addEventListener('click', () => {
    ul.style.right = '0'
})

close.addEventListener('click', () => {
    ul.style.right = '-100%'
})

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 100){
        header.style.backgroundColor = '#080808';
    }else{
        header.style.backgroundColor = 'transparent';
    }
});

document.querySelectorAll('.li').forEach(n => n.addEventListener('click', () => {
    ul.style.right = '-100%'
}))

// submitting and receiving messages in the google-sheet 

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxIbKOgGw2KW8JoV82i86e9Rcu7WPON2bHnod7ZWKVP7H0BpE-y1gaDf1AxV0AjBn7s6g/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'messsage sent successfully';
        setTimeout(() => {
            msg.innerHTML = ''
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


//   typing animation code
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };