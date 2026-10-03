const members = [
 {n:'01',name:'김캐마',en:'THE MEDIC',sin:'질투 · JEALOUSY',role:'조직의 메디컬',img:'assets/kim-kaema.jpg',details:[['상징','뱀 · 시든 꽃'],['무기','쇠로 된 주사기'],['담당','의료 · 메디컬'],['외형','허리까지 내려오는 긴 갈색 장발 · 초록색 눈동자']],quote:'음~ 눈이 참예쁘군요. 짜증나게… 그럼, 잘 받아갈게요?'},
 {n:'02',name:'대부기',en:'THE ENFORCER',sin:'분노 · WRATH',role:'조직의 행동대장',img:'assets/daebugi.jpg',details:[['상징','곰 · 지포라이터'],['무기','두 개의 금색 데저트 이글'],['담당','믹싱 · 디렉 · 강원도 사투리'],['외형','앞으로 내린 뾰족한 붉은 머리 · 붉은 눈동자 · 날카롭게 찢어진 눈매']],quote:'아, 씨... 수트에 구김 갔잖아. 하... 성질 올라오게 하네.'},
 {n:'03',name:'문향단',en:'THE INFORMATION BROKER',sin:'탐욕 · GREED',role:'조직의 정보상',img:'assets/munhyangdan.jpg',details:[['상징','독수리 · 외알 안경'],['무기','검은색 카람빗'],['담당','대본 · 일러 · 한자 번역 · 연변 사투리'],['외형','체리레드 중단발 반묶음 · 금색 눈동자 · 비녀']],quote:'가치를 몰라도 너무 모르는 거 아니야, 달링?'},
 {n:'04',name:'이정잭',en:'THE BOSS',sin:'오만 · PRIDE',role:'조직의 수장',img:'assets/lee-jeongjaek.jpg',details:[['상징','호랑이 · 왕관'],['무기','은색 너클'],['담당','믹싱 · 노래 · 경남 사투리'],['외형','다부진 체형 · 적색 머리 · 붉은 눈동자 · 오른쪽 눈의 세로 상처']],quote:'때론 과욕이 화를 부르는 법일세. 안타깝게 됐군, 자네에게는.'},
 {n:'05',name:'아랑',en:'THE NEGOTIATOR',sin:'색욕 · LUST',role:'조직의 협상가',img:'assets/arang.jpg',details:[['상징','공작 · 향수'],['무기','은색 콜트 파이슨 리볼버'],['담당','아지트 · 대본 · 노래'],['외형','창백한 피부 · 긴 백발 · 백안 · 흰 눈썹과 속눈썹']],quote:'이건 협박이란다. 살고 싶으면 기어 봐. 자기야.'},
 {n:'06',name:'우현',en:'THE CLEANER',sin:'식욕 · GLUTTONY',role:'현장 처리 담당',img:'assets/woohyun.jpg',details:[['상징','악어 · 성배'],['무기','보라색 카타나'],['담당','믹싱 · 일본어 번역'],['외형','흑발 · 검은 고양이 귀 · 보라색 눈동자 · 세로 동공']],quote:'아, 고기는 남겨 둬. 꽤나 신선해 보이니까.'},
 {n:'07',name:'개',en:'THE HACKER',sin:'나태 · SLOTH',role:'해커 · 마스코트 막내 공주',img:'assets/gae.jpg',details:[['상징','고양이 · 멈춘 모래시계'],['무기','노트북'],['담당','경북 사투리 · 영어 번역 · 중국어 표준어'],['외형','허리까지 내려오는 금발 · 회색 눈동자 · 강아지 귀 · 검은 보석 티아라']],quote:'그럼 굿나잇.'}
];

const grid=document.querySelector('#memberGrid');
const modal=document.querySelector('#modal');
const modalImage=document.querySelector('#modalImage');
const modalName=document.querySelector('#modalName');
const modalSin=document.querySelector('#modalSin');
const modalRole=document.querySelector('#modalRole');
const modalDetails=document.querySelector('#modalDetails');
const modalQuote=document.querySelector('#modalQuote');

if(grid){
  grid.innerHTML=members.map(m=>`<article class="member-card" data-id="${m.n}" tabindex="0" role="link" aria-label="${m.name} 상세 기록 열기"><a class="member-hit" href="member.html?id=${m.n}" aria-label="${m.name} 상세 기록"></a><img src="${m.img}" alt="${m.name} 공식 일러스트"><div class="member-info"><span class="member-num">${m.n} / ${m.sin.split(' · ')[1]}</span><h3>${m.name}</h3><div class="en">${m.en}</div><span class="sin">${m.sin.split(' · ')[0]}</span><span class="view-file">VIEW FILE ↗</span></div></article>`).join('');
  document.querySelectorAll('.member-card').forEach(card=>{
    card.addEventListener('click',e=>{ if(e.target.closest('.member-hit')) return; if(modal) openMember(card.dataset.id); });
    card.addEventListener('keydown',e=>{ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); location.href='member.html?id='+card.dataset.id; }});
  });
}
function openMember(id){
 const m=members.find(x=>x.n===id); if(!m || !modal)return;
 modalImage.src=m.img; modalImage.alt=m.name+' 공식 일러스트'; modalName.textContent=m.name; modalSin.textContent=m.sin; modalRole.textContent=m.role;
 modalDetails.innerHTML=m.details.map(d=>`<div><b>${d[0]}</b><span>${d[1]}</span></div>`).join(''); modalQuote.textContent='“ '+m.quote+' ”';
 modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closeModal(){if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
if(modal){ document.querySelectorAll('[data-close]').forEach(x=>x.addEventListener('click',closeModal)); }
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const glow=document.querySelector('.cursor-glow');
if(glow) window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#siteNav');
if(menuToggle && siteNav){
  menuToggle.addEventListener('click',()=>{
    const open = siteNav.classList.toggle('mobile-open');
    menuToggle.classList.toggle('active', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  siteNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    siteNav.classList.remove('mobile-open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded','false');
  }));
}
