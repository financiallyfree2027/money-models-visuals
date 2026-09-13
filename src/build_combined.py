import re, sys

MM = open('/home/claude/mm/money-models-offers.html').read()
CP = open('/mnt/user-data/uploads/Downloads/constraint-pipe-v1_1.html').read()

# ---------- helpers ----------
def split_doc(s):
    css = re.search(r'<style>(.*?)</style>', s, re.S).group(1)
    return css

def prefix_css(css, scope):
    """Prefix every selector with scope; handle nested @media; convert :root/body/html."""
    out = []
    i = 0; n = len(css)
    def prefix_sel(sel):
        parts = []
        for p in sel.split(','):
            p = p.strip()
            if not p: continue
            if p in (':root', 'html', 'body', 'html,body') or p.startswith(':root'):
                parts.append(scope + p[len(':root'):] if p.startswith(':root') else scope)
            elif re.match(r'^(html\s*,\s*)?body\b', p):
                parts.append(re.sub(r'^(html\s*,\s*)?body', scope, p))
            elif p.startswith('html'):
                parts.append(scope)
            else:
                parts.append(f'{scope} {p}')
        # dedupe
        seen = []; [seen.append(x) for x in parts if x not in seen]
        return ', '.join(seen)
    def walk(block, in_keyframes=False):
        res = []; j = 0; L = len(block)
        while j < L:
            k = block.find('{', j)
            if k < 0: res.append(block[j:]); break
            head = block[j:k]
            # find matching brace
            depth = 1; m = k + 1
            while m < L and depth:
                if block[m] == '{': depth += 1
                elif block[m] == '}': depth -= 1
                m += 1
            inner = block[k+1:m-1]
            h = head.strip()
            if h.startswith('@keyframes') or h.startswith('@font-face') or h.startswith('@-webkit-keyframes'):
                res.append(head + '{' + inner + '}')
            elif h.startswith('@media') or h.startswith('@supports'):
                res.append(head + '{' + walk(inner) + '}')
            elif h.startswith('@'):
                res.append(head + '{' + inner + '}')
            else:
                # strip comments from head
                h2 = re.sub(r'/\*.*?\*/', '', h, flags=re.S).strip()
                res.append('\n' + prefix_sel(h2) + '{' + inner + '}')
            j = m
        return ''.join(res)
    css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
    return walk(css)

# ---------- offers (tab 1) ----------
mm_css = split_doc(MM)
mm_body = MM[MM.find('<body>')+6:MM.rfind('</body>')]
mm_scripts = re.findall(r'<script[^>]*>.*?</script>', mm_body, re.S)
mm_markup = re.sub(r'<script[^>]*>.*?</script>', '', mm_body, flags=re.S)

# layout fixes for tab 1 inside a scrolling document
mm_css = mm_css.replace('html,body{height:100%}\n', '')
mm_css = mm_css.replace('body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);-webkit-font-smoothing:antialiased;overflow:hidden}',
                        'body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);-webkit-font-smoothing:antialiased;height:calc(100dvh - 48px);overflow:hidden;display:flex;flex-direction:column}')
mm_css = mm_css.replace('.stage{display:grid;grid-template-columns:230px 1fr 250px;gap:22px;height:calc(100vh - 56px);padding:22px 28px}',
                        '.stage{display:grid;grid-template-columns:230px 1fr 250px;gap:22px;flex:1;min-height:0;padding:22px 28px}')
mm_css = mm_css.replace('@media(max-width:1100px){.stage{grid-template-columns:1fr;height:auto;overflow:auto}.rail,.steps{display:none}body{overflow:auto}}', '')
# drop the top bar inside tab 1 (the outer tab bar replaces it)
mm_markup = re.sub(r'<div class="top">.*?</div>\s*</div>', '', mm_markup, count=1, flags=re.S)

# mobile swipe-deck css for tab 1
mm_mobile = """
.mpick{display:none}
@media(max-width:900px){
  .stage{grid-template-columns:1fr;padding:10px 12px 12px;gap:10px}
  .rail,.steps{display:none}
  .mpick{display:flex;gap:8px;align-items:center}
  .mpick select{flex:1;min-width:0;appearance:none;-webkit-appearance:none;background:var(--card);border:1.5px solid var(--green);border-radius:999px;padding:10px 38px 10px 14px;font:600 14px var(--sans);color:var(--ink);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%232E9E6E' stroke-width='2' fill='none'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center}
  .mpick .madapt{flex:none;width:38px;height:38px;border-radius:50%;border:1.5px solid var(--line2);background:var(--card);color:var(--mute);font:600 12px var(--mono);cursor:pointer}
  .mpick .madapt[aria-pressed="true"]{border-color:var(--green);color:var(--green-d);background:var(--green-xl)}
  .head{padding:0 2px 8px;align-items:flex-start;flex-direction:column;gap:8px}
  .head .k{font-size:10px;gap:8px;margin-bottom:2px}
  .head h3{font-size:20px}
  .ibtn{height:32px;font-size:10px;padding:0 12px 0 8px}
  .canvas{padding:12px;border-radius:12px;touch-action:pan-y}
  .nav{padding:10px 0 0}
  .arrow{width:40px;height:40px;font-size:20px}
  .sent{font-size:9px;letter-spacing:.1em;text-align:center;flex-wrap:wrap;justify-content:center}
  .drawer{width:100%;top:auto;height:82%;border-left:0;border-top:1px solid var(--line);border-radius:16px 16px 0 0;transform:translateY(104%);padding:22px 18px 30px}
  .drawer.on{transform:none}
  .drawer h4{font-size:19px}
  .exlabel{display:none}
  .exmeta-m{font-size:11.5px;color:var(--dim);line-height:1.45;padding:8px 2px 0}
  .exmeta-m b{color:var(--mute);font-family:var(--mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;display:block;margin-bottom:2px;font-weight:400}
}
@media(max-width:900px) and (orientation:portrait){ .canvas{min-height:52dvh} }
"""

# ---------- constraint pipe (tab 2) ----------
cp_css = split_doc(CP)
cp_after_style = CP[CP.find('</style>')+8:]
cp_json = re.search(r'<script id="pbdata"[^>]*>.*?</script>', cp_after_style, re.S).group(0)
cp_js = cp_after_style[cp_after_style.rfind('<script>'):cp_after_style.rfind('</script>')+9]
cp_markup = cp_after_style[:cp_after_style.find('<script id="pbdata"')]
cp_markup = re.sub(r'</?(html|body|head)[^>]*>', '', cp_markup)

css1 = prefix_css(mm_css + mm_mobile, '#t1')
css2 = prefix_css(cp_css, '#t2')

# ---------- outer frame ----------
frame_css = """
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:#F6F3EC;font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;-webkit-text-size-adjust:100%}
.tabbar{position:sticky;top:0;z-index:50;height:48px;display:flex;align-items:center;justify-content:space-between;padding:0 16px;background:rgba(246,243,236,.92);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid #E4DFD3}
.tabbar .brand{font-family:'DM Mono',ui-monospace,Menlo,monospace;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:#1F7A54;display:flex;align-items:center;gap:8px;white-space:nowrap}
.tabbar .brand i{width:24px;height:24px;border-radius:6px;background:#1E1E1A;display:inline-flex;align-items:center;justify-content:center;color:#7FE7C4;font-style:normal;font-weight:700;font-size:12px}
.tabbar nav{display:flex;gap:4px;background:#fff;border:1px solid #E4DFD3;border-radius:999px;padding:3px}
.tabbar nav button{border:0;background:transparent;border-radius:999px;padding:7px 14px;font:600 12.5px 'DM Sans',sans-serif;color:#5F5E57;cursor:pointer;white-space:nowrap}
.tabbar nav button[aria-selected="true"]{background:#2E9E6E;color:#fff}
.tabpage:not(.on){display:none!important}
.tabpage.on{display:block}
#t1.on{display:flex}
#t2 .stage,#t2 .hero,#t2 .toggles{min-width:0}#t2 .stage>*,#t2 .toggles>*,#t2 .hero>*{min-width:0;max-width:100%}#t2 .stage{grid-template-columns:minmax(0,1fr) 260px}@media(max-width:980px){#t2 .stage{grid-template-columns:minmax(0,1fr)}}#t2 .pipeCard svg{max-width:100%}
@media(max-width:560px){.tabbar{padding:0 10px}.tabbar .brand span{display:none}.tabbar nav button{padding:7px 11px;font-size:12px}}
"""

frame_js = """
<script>
(function(){
  const pages={t1:document.getElementById('t1'),t2:document.getElementById('t2')};
  const btns=[...document.querySelectorAll('.tabbar nav button')];
  function show(id,push){
    for(const k in pages)pages[k].classList.toggle('on',k===id);
    btns.forEach(b=>b.setAttribute('aria-selected',b.dataset.t===id));
    if(push){try{history.replaceState(null,'','#'+(id==='t1'?'offers':'diagnosis'));}catch(e){}}
    window.scrollTo(0,0);
    if(id==='t1'&&window.__mmFit)setTimeout(window.__mmFit,30);
  }
  btns.forEach(b=>b.onclick=()=>show(b.dataset.t,true));
  const h=location.hash.replace('#','');
  show(h==='diagnosis'||h==='t2'?'t2':'t1',false);
  window.__showTab=show;
})();
</script>
"""

# expose fit() + mobile picker in offers script
mm_script_main = mm_scripts[-1]
mm_script_main = mm_script_main.replace("window.addEventListener('resize',fit);", "window.addEventListener('resize',fit); window.__mmFit=fit;")
# mobile picker: build a <select> of offers + adapted toggle + example meta
mm_script_main = mm_script_main.replace("buildRail();\n", """buildRail();
// mobile picker
const mpick=document.getElementById('mpick'), msel=document.getElementById('msel'), madapt=document.getElementById('madapt');
function buildPick(){
  msel.innerHTML='';
  SECTIONS.forEach(sec=>{const items=OFFERS.map((o,n)=>[o,n]).filter(([o])=>o.section===sec); if(!items.length)return;
    const g=document.createElement('optgroup'); g.label=sec+' offers';
    items.forEach(([o,n])=>{const op=document.createElement('option');op.value=n;op.textContent=o.name+(o.examples.length?'':' (no book example)');g.appendChild(op);});
    msel.appendChild(g);});
  msel.value=oi; madapt.setAttribute('aria-pressed',showAdapted);
}
buildPick();
msel.onchange=()=>{oi=+msel.value;ei=0;si=0;render();};
madapt.onclick=()=>{tg.checked=!tg.checked;tg.onchange();};
""")
mm_script_main = mm_script_main.replace("tg.onchange=()=>{showAdapted=tg.checked;", "tg.onchange=()=>{showAdapted=tg.checked; madapt.setAttribute('aria-pressed',showAdapted);")
mm_script_main = mm_script_main.replace("$('exmeta').innerHTML=`<b>Example ${ei+1} of ${o.examples.length} · ${ex.source||''}</b>${ex.about||''}`;",
  "$('exmeta').innerHTML=`<b>Example ${ei+1} of ${o.examples.length} · ${ex.source||''}</b>${ex.about||''}`; $('exmeta-m').innerHTML=`<b>Example ${ei+1} of ${o.examples.length} · ${ex.label}</b>${ex.about||''}`; msel.value=oi;")
# swipe on canvas
mm_script_main = mm_script_main.replace("// allow ?offer=slug", """// touch swipe
(function(){let x0=null,y0=null;const c=document.querySelector('#t1 .canvas');
c.addEventListener('touchstart',e=>{if(drawer.classList.contains('on'))return;x0=e.touches[0].clientX;y0=e.touches[0].clientY;},{passive:true});
c.addEventListener('touchend',e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;x0=null;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.3){dx<0?$('next').click():$('prev').click();}},{passive:true});})();
// allow ?offer=slug""")

# insert mobile picker + exmeta-m into markup (top of .center)
mm_markup = mm_markup.replace('<section class="center">', '<section class="center"><div class="mpick" id="mpick"><select id="msel" aria-label="Choose an offer"></select><button class="madapt" id="madapt" title="Show adapted examples">+ex</button></div>', 1)
mm_markup = mm_markup.replace('<button class="arrow" id="next">›</button>\n    </div>', '<button class="arrow" id="next">›</button>\n    </div><div class="exmeta-m" id="exmeta-m"></div>', 1)

fonts = '<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">'

html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>$100M Money Models — Offers & Diagnosis</title>
{fonts}
<style>{frame_css}</style>
<style>{css1}</style>
<style>{css2}</style>
</head>
<body>
<header class="tabbar">
  <div class="brand"><i>F</i><span>Financially Free</span></div>
  <nav><button data-t="t1" aria-selected="true">Money Model Offers</button><button data-t="t2">Diagnosis &amp; Healing</button></nav>
</header>
<div id="t1" class="tabpage on">
{mm_markup}
</div>
<div id="t2" class="tabpage">
{cp_markup}
</div>
{''.join(mm_scripts[:-1])}
{mm_script_main}
{cp_json}
{cp_js}
{frame_js}
</body>
</html>"""
open('/home/claude/mm/money-models.html','w').write(html)
print('written', len(html))
