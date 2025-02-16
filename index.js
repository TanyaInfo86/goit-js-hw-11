import{a as d,S as f,i as a}from"./assets/vendor-tnUJPedx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const u="48882977-05c15dd410216085f6c7fee9f",m="https://pixabay.com/api/";async function y(i){try{return(await d.get(m,{params:{key:u,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){throw console.error("Error fetching images:",r),r}}function p(i){const r=document.querySelector(".gallery");r.innerHTML=i.map(t=>`
      <a class="gallery-item" href="${t.largeImageURL}">
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
        <div class="image-info">
          <div class="info-item">
            <div class="info-title">Likes</div>
            <div class="info-value">${t.likes}</div>
          </div>
          <div class="info-item">
            <div class="info-title">Views</div>
            <div class="info-value">${t.views}</div>
          </div>
          <div class="info-item">
            <div class="info-title">Comments</div>
            <div class="info-value">${t.comments}</div>
          </div>
          <div class="info-item">
            <div class="info-title">Downloads</div>
            <div class="info-value">${t.downloads}</div>
          </div>
        </div>
      </a>`).join("")}const l=document.querySelector("#search-form"),v=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:200});l.addEventListener("submit",async i=>{i.preventDefault();const r=i.target.elements.searchQuery.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search term!",position:"topRight"});return}c.style.display="block",v.innerHTML="";try{const t=await y(r);t.length===0?a.warning({title:"No results",message:"Sorry, no images found. Please try another search.",position:"topLeft"}):(p(t),g.refresh())}catch(t){a.error({title:"Error",message:t.message,position:"topRight"})}finally{c.style.display="none",l.reset()}});
//# sourceMappingURL=index.js.map
