document.addEventListener('DOMContentLoaded',()=>{
  const path=(window.location.pathname.split('/').pop()||'index.html');document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===path)a.classList.add('active')});
  const topBtn=document.getElementById('backToTop');window.addEventListener('scroll',()=>{topBtn.style.display=(window.scrollY>250)?'flex':'none'});
  topBtn&&topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  const roles=['Full Stack Developer','Cloud Enthusiast','Python Developer'],el=document.getElementById('typing');if(el){let i=0,j=0,d=false;const t=()=>{const w=roles[i];el.textContent=d?w.substring(0,j--):w.substring(0,j++);if(!d&&j===w.length+1){d=true;setTimeout(t,900);return}if(d&&j===0){d=false;i=(i+1)%roles.length}setTimeout(t,d?60:110)};t()}
});