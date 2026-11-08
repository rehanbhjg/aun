import {useState,useEffect,useRef} from 'react'
import {Routes,Route,NavLink,useLocation} from 'react-router-dom'
import {AnimatePresence,motion,useScroll} from 'framer-motion'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import {Cursor} from './extras'
import {Crown,Music,Menu,X,ArrowUp} from 'lucide-react'
import C from './config'
import {Home,Story,Memories,Archive,Letter,Legend,Games,Soundtrack,Surprise,NotFound,boom} from './pages'
const L=[['/','Home'],['/story','Our Story'],['/memories','Memories'],['/archive','Archive'],['/letter','Letter'],['/legend','Legend'],['/games','Games'],['/music','Music'],['/surprise','Surprise']]
function Dust(){const r=useRef();useEffect(()=>{if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;const c=r.current,x=c.getContext('2d');let p,id;const s=()=>{c.width=innerWidth;c.height=innerHeight;p=Array.from({length:innerWidth<600?30:60},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.6+.3,v:Math.random()*.35+.08}))};s();addEventListener('resize',s);const l=()=>{x.clearRect(0,0,c.width,c.height);x.fillStyle='rgba(214,181,109,.55)';p.forEach(o=>{o.y-=o.v;if(o.y<0)o.y=c.height;x.beginPath();x.arc(o.x,o.y,o.r,0,7);x.fill()});id=requestAnimationFrame(l)};l();return()=>{cancelAnimationFrame(id);removeEventListener('resize',s)}},[]);return <canvas ref={r} className="p"/>}
export default function App(){const {scrollYProgress}=useScroll(),[o,setO]=useState(false),[s,setS]=useState(false),[up,setUp]=useState(false),[sec,setSec]=useState(false),k=useRef({n:0,t:0}),loc=useLocation(),[pre,setPre]=useState(true)
useEffect(()=>{const f=()=>{setS(scrollY>30);setUp(scrollY>500)};addEventListener('scroll',f,{passive:true});setTimeout(()=>setPre(false),900);return()=>removeEventListener('scroll',f)},[])
useEffect(()=>{setO(false);scrollTo(0,0)},[loc.pathname])
useEffect(()=>{if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;const l=new Lenis({lerp:.09});let id;const f=t=>{l.raf(t);id=requestAnimationFrame(f)};id=requestAnimationFrame(f);return()=>{cancelAnimationFrame(id);l.destroy()}},[])
useEffect(()=>{if(Date.now()>=new Date(C.date)&&!sessionStorage.bd){sessionStorage.bd=1;setTimeout(()=>boom(200),1500)}},[])
const logo=()=>{clearTimeout(k.current.t);k.current.t=setTimeout(()=>k.current.n=0,1500);if(++k.current.n>=5){k.current.n=0;setSec(true);boom(90)}}
const share=()=>navigator.share?navigator.share({title:'The Aun Experience',url:location.href}).catch(()=>{}):navigator.clipboard?.writeText(location.href)
return <>
<AnimatePresence>{pre&&<motion.div exit={{opacity:0}} style={{position:'fixed',inset:0,background:'#090909',zIndex:200,display:'grid',placeItems:'center'}}><Crown size={64} color="#D6B56D"/></motion.div>}</AnimatePresence>
<Dust/><Cursor/><motion.div className="prog" style={{scaleX:scrollYProgress}}/><div className="frame"><nav className={s?'s':''}><button className="logo" onClick={logo} aria-label="AUN"><Crown size={22}/>AUN</button>
<div className={'links'+(o?' o':'')}>{L.map(([p,n])=><NavLink key={p} to={p} end={p==='/'} className={({isActive})=>isActive?'active':''}>{n}</NavLink>)}</div>
<div style={{display:'flex',gap:8}}><NavLink to="/music" className="ib" aria-label="Music"><Music size={18}/></NavLink><button className="ib burger" onClick={()=>setO(!o)} aria-label="Menu">{o?<X/>:<Menu/>}</button></div></nav>
<AnimatePresence mode="wait"><motion.div key={loc.pathname} className="pg" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:.4}}>
<Routes location={loc}><Route path="/" element={<Home/>}/><Route path="/story" element={<Story/>}/><Route path="/memories" element={<Memories/>}/><Route path="/archive" element={<Archive/>}/><Route path="/letter" element={<Letter/>}/><Route path="/legend" element={<Legend/>}/><Route path="/games" element={<Games/>}/><Route path="/music" element={<Soundtrack/>}/><Route path="/surprise" element={<Surprise/>}/><Route path="*" element={<NotFound/>}/></Routes></motion.div></AnimatePresence>
<div className="foot">Made with brotherhood ♥ by {C.me} · <button className="chip" onClick={share}>Share</button></div></div>
{up&&<button className="ib top" onClick={()=>scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top"><ArrowUp/></button>}
{sec&&<div className="modal"><div className="mb"><Crown color="#D6B56D" size={40}/><h2 style={{color:'#D6B56D',margin:'12px 0'}}>{C.secret.t}</h2><p>{C.secret.m}</p><br/><button className="btn" onClick={()=>setSec(false)}>Close</button></div></div>}</>}
