window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 400) nav.className = 'navbar';
  else if(this.scrollY <= 1200)nav.className = "navbar scroll one";
  else if(this.scrollY <= 1900)nav.className = "navbar scroll two";
  else nav.className = 'navbar scroll three';
};
