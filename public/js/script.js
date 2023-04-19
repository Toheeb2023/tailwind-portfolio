const skill = document.getElementById('skills');
const experienc = document.getElementById('experience');
const edu = document.getElementById('education');

const skills = document.querySelector('.skills');
const experience = document.querySelector('.experience');
const education = document.querySelector('.education');

const ham = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const ul = document.querySelector('.ul');

const header = document.querySelector('.home');

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
