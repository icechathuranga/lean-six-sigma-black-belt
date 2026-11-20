/* Lean Six Sigma — Black Belt — shared script.
   Progress tracked by MODULE completion (16), in its OWN localStorage key (no clash with the Green Belt site). */
(function(){
"use strict";
var PKEY="lss_bb_progress_v1", TKEY="lss_bb_theme", LKEY="lss_bb_last", TOTAL=16;

var MODULES=[
 {n:0, name:"Orientation", weeks:"Week 1", file:"lessons/00-orientation.html",
  d:"What Black Belt adds beyond Green Belt — scope, statistics, leadership — and how to use this course."},
 {n:1, name:"Enterprise deployment & project selection", weeks:"Weeks 2–3", file:"lessons/01-deployment-project-selection.html",
  d:"Choosing high-impact projects, building a pipeline, and tying projects to strategy and hard savings."},
 {n:2, name:"Team leadership & change management", weeks:"Weeks 4–5", file:"lessons/02-team-leadership-change.html",
  d:"Leading project teams, stakeholder influence, and overcoming resistance to change."},
 {n:3, name:"Advanced Define", weeks:"Weeks 6–7", file:"lessons/03-advanced-define.html",
  d:"VOC to CTQ with Kano and QFD, and a financially-scoped, governed project charter."},
 {n:4, name:"Measurement Systems Analysis", weeks:"Weeks 8–9", file:"lessons/04-msa.html",
  d:"Gage R&R by ANOVA, bias/linearity/stability, and attribute agreement with Fleiss' kappa."},
 {n:5, name:"Process Capability", weeks:"Weeks 10–11", file:"lessons/05-capability.html",
  d:"Cp/Cpk/Pp/Ppk, short- vs long-term, non-normal data and transforms."},
 {n:6, name:"Statistics Foundations", weeks:"Weeks 12–13", file:"lessons/06-statistics-foundations.html",
  d:"Distributions, the Central Limit Theorem, sampling, standard error, and confidence intervals."},
 {n:7, name:"Hypothesis Testing in Depth", weeks:"Weeks 14–15", file:"lessons/07-hypothesis-testing.html",
  d:"t-tests, ANOVA, chi-square, non-parametrics, and power / sample-size planning."},
 {n:8, name:"Correlation & regression", weeks:"Weeks 16–17", file:"lessons/08-regression.html",
  d:"Simple and multiple regression, residual diagnostics, and prediction with care."},
 {n:9, name:"Multi-vari studies & advanced root cause", weeks:"Weeks 18–19", file:"lessons/09-multi-vari.html",
  d:"Partitioning sources of variation and structured root-cause analysis."},
 {n:10, name:"Design of Experiments I", weeks:"Weeks 20–21", file:"lessons/10-doe-1.html",
  d:"Full factorial designs: main effects, interactions, and reading the analysis."},
 {n:11, name:"Design of Experiments II", weeks:"Weeks 22–23", file:"lessons/11-doe-2.html",
  d:"Fractional factorials, blocking, center points, and response-surface methods."},
 {n:12, name:"Advanced Lean for Black Belts", weeks:"Weeks 24–25", file:"lessons/12-advanced-lean.html",
  d:"Flow, pull and complex value streams applied at enterprise scale."},
 {n:13, name:"Advanced Statistical Process Control", weeks:"Weeks 26–27", file:"lessons/13-advanced-control.html",
  d:"Choosing the right control chart, subgrouping, and special charts (EWMA, CUSUM, attributes)."},
 {n:14, name:"Sustain, Replicate & Coach", weeks:"Weeks 28–29", file:"lessons/14-sustain-coach-dfss.html",
  d:"Locking in gains, replicating across sites, coaching Green Belts, and an intro to DFSS."},
 {n:15, name:"Capstone — Lead a Full Black Belt Project", weeks:"Weeks 30+", file:"lessons/15-capstone.html",
  d:"Run a complete DMAIC project end to end and present it to a review board."}
];

function loadSet(){try{var s=localStorage.getItem(PKEY);return new Set(s?JSON.parse(s):[]);}catch(e){return new Set();}}
function saveSet(set){try{localStorage.setItem(PKEY,JSON.stringify(Array.from(set)));}catch(e){}}
var done=loadSet();

function updateBar(){
  var n=done.size, pct=Math.round(n/TOTAL*100);
  var f=document.getElementById("fill"), t=document.getElementById("progTxt");
  if(f) f.style.width=pct+"%";
  if(t) t.textContent=n+" / "+TOTAL+" modules";
}

function reflect(cb){
  var det=cb.closest("details.module"); if(det) det.classList.toggle("m-done",cb.checked);
  var lab=cb.closest(".ep-check"); if(lab) lab.classList.toggle("done",cb.checked);
  var sub=det?det.querySelector(".m-sub"):null;
  if(sub){ var m=MODULES[parseInt(det.getAttribute("data-mod"),10)];
    sub.textContent=cb.checked?"✓ Completed":(m?m.weeks:""); }
}
function syncBoxes(){
  var boxes=document.querySelectorAll(".mod-cb");
  for(var i=0;i<boxes.length;i++){(function(cb){
    var mod=parseInt(cb.getAttribute("data-mod"),10);
    cb.checked=done.has(mod); reflect(cb);
    // clicking the checkbox must not toggle a parent <details>
    cb.addEventListener("click",function(e){e.stopPropagation();});
    cb.addEventListener("change",function(){
      if(cb.checked) done.add(mod); else done.delete(mod);
      saveSet(done); updateBar();
      var same=document.querySelectorAll('.mod-cb[data-mod="'+mod+'"]');
      for(var j=0;j<same.length;j++){ same[j].checked=cb.checked; reflect(same[j]); }
    });
  })(boxes[i]);}
}

function renderHub(){
  var root=document.getElementById("curriculum"); if(!root) return;
  var pad=function(n){return (n<10?"0":"")+n;};
  root.innerHTML="";
  MODULES.forEach(function(m){
    var det=document.createElement("details");
    det.className="module"+(done.has(m.n)?" m-done":""); det.setAttribute("data-mod",m.n);
    det.innerHTML=
      '<summary>'+
        '<input type="checkbox" class="cb mod-cb" data-mod="'+m.n+'" id="hub-m'+m.n+'" aria-label="Mark '+m.name+' complete">'+
        '<div class="m-badge">'+pad(m.n)+'</div>'+
        '<div class="m-meta"><h3><a href="'+m.file+'">'+m.name+'</a></h3>'+
          '<div class="m-sub">'+(done.has(m.n)?"✓ Completed":m.weeks)+'</div></div>'+
        '<div class="m-weeks">'+m.weeks+'</div><div class="chev">▶</div>'+
      '</summary>'+
      '<div class="m-body"><p>'+m.d+'</p><a class="read" href="'+m.file+'">Read the module →</a></div>';
    root.appendChild(det);
  });
}

function recordVisit(){
  if(window.LSS_PAGE && /^lessons\//.test(window.LSS_PAGE.href)){
    try{localStorage.setItem(LKEY,JSON.stringify(window.LSS_PAGE));}catch(e){}
  }
}
function renderContinue(){
  var el=document.getElementById("continue"); if(!el) return;
  var last=null; try{var s=localStorage.getItem(LKEY); if(s) last=JSON.parse(s);}catch(e){}
  if(last&&last.href) el.innerHTML='<a class="btn" href="'+last.href+'">▶ Continue: '+last.title+'</a>';
}

function persistChecks(){
  var page=(window.LSS_PAGE&&window.LSS_PAGE.href)||location.pathname;
  document.querySelectorAll("input[data-persist]").forEach(function(cb,idx){
    var key="lss_bb_chk:"+page+":"+idx;
    try{cb.checked=localStorage.getItem(key)==="1";}catch(e){}
    cb.addEventListener("change",function(){try{localStorage.setItem(key,cb.checked?"1":"0");}catch(e){}});
  });
}

function wireReset(){
  var r=document.getElementById("reset"); if(!r) return;
  r.addEventListener("click",function(){
    done=new Set(); saveSet(done);
    document.querySelectorAll(".mod-cb").forEach(function(cb){cb.checked=false; reflect(cb);});
    renderHub(); syncBoxes(); updateBar();
  });
}

function wireTheme(){
  try{var t=localStorage.getItem(TKEY); if(t) document.documentElement.setAttribute("data-theme",t);}catch(e){}
  var btn=document.getElementById("theme"); if(!btn) return;
  btn.addEventListener("click",function(){
    var cur=document.documentElement.getAttribute("data-theme");
    var dark=window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches;
    var next=cur?(cur==="dark"?"light":"dark"):(dark?"light":"dark");
    document.documentElement.setAttribute("data-theme",next);
    try{localStorage.setItem(TKEY,next);}catch(e){}
  });
}

function markNav(){
  if(!window.LSS_PAGE) return;
  document.querySelectorAll(".nav-menu a").forEach(function(a){
    var href=a.getAttribute("href")||"";
    if(href.replace(/^(\.\.\/)+/,"")===window.LSS_PAGE.href) a.setAttribute("aria-current","page");
  });
}

/* audio: duration when ready, "coming soon" when missing (handles pre-attach errors) */
function fmtDur(d){ var m=Math.floor(d/60), s=Math.floor(d%60); return m+":"+(s<10?"0":"")+s; }
function wireAudio(){
  document.querySelectorAll("audio").forEach(function(a){
    var block=a.closest(".audio-block")||a.parentNode, shown=false;
    function soon(){
      if(shown) return; shown=true; a.hidden=true;
      var lab=block.querySelector(".audio-label"); if(lab) lab.hidden=true;
      var chip=document.createElement("span");
      chip.className="audio-soon"; chip.textContent="🎧 Audio coming soon";
      block.appendChild(chip);
    }
    function dur(){
      if(!isFinite(a.duration)||a.duration<=0) return;
      var lab=block.querySelector(".audio-label");
      if(lab && !lab.getAttribute("data-dur")){ lab.setAttribute("data-dur","1"); lab.textContent=lab.textContent+" · "+fmtDur(a.duration); }
    }
    if(a.error || a.networkState===3){ soon(); return; }
    if(a.readyState>=1) dur();
    a.addEventListener("error", soon);
    a.addEventListener("loadedmetadata", dur);
    setTimeout(function(){ if(!shown && a.readyState<1 && (a.error||a.networkState===3)) soon(); }, 4000);
  });
}

function init(){
  wireTheme(); renderHub(); syncBoxes(); updateBar();
  renderContinue(); recordVisit(); persistChecks(); wireReset(); markNav(); wireAudio();
}
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init); else init();
})();
