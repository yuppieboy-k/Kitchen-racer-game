var tc=Object.defineProperty;var ec=(i,t,e)=>t in i?tc(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var W=(i,t,e)=>ec(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Br="170",nc=0,ao=1,ic=2,pa=1,ma=2,rn=3,Tn=0,be=1,Fe=2,yn=0,si=1,co=2,lo=3,ho=4,sc=5,Fn=100,rc=101,oc=102,ac=103,cc=104,lc=200,hc=201,dc=202,uc=203,Js=204,Qs=205,fc=206,pc=207,mc=208,gc=209,_c=210,xc=211,vc=212,Mc=213,Sc=214,tr=0,er=1,nr=2,ci=3,ir=4,sr=5,rr=6,or=7,ga=0,yc=1,wc=2,wn=0,Tc=1,Ec=2,bc=3,_a=4,Ac=5,Cc=6,Rc=7,xa=300,li=301,hi=302,ar=303,cr=304,_s=306,cn=1e3,On=1001,lr=1002,We=1003,Pc=1004,Gi=1005,$e=1006,ys=1007,Bn=1008,un=1009,va=1010,Ma=1011,Di=1012,zr=1013,zn=1014,ln=1015,Ni=1016,kr=1017,Gr=1018,di=1020,Sa=35902,ya=1021,wa=1022,He=1023,Ta=1024,Ea=1025,ri=1026,ui=1027,ba=1028,Vr=1029,Aa=1030,Hr=1031,Wr=1033,hs=33776,ds=33777,us=33778,fs=33779,hr=35840,dr=35841,ur=35842,fr=35843,pr=36196,mr=37492,gr=37496,_r=37808,xr=37809,vr=37810,Mr=37811,Sr=37812,yr=37813,wr=37814,Tr=37815,Er=37816,br=37817,Ar=37818,Cr=37819,Rr=37820,Pr=37821,ps=36492,Lr=36494,Dr=36495,Ca=36283,Ir=36284,Ur=36285,Fr=36286,Lc=3200,Dc=3201,Ra=0,Ic=1,Sn="",me="srgb",pi="srgb-linear",xs="linear",$t="srgb",Vn=7680,uo=519,Uc=512,Fc=513,Nc=514,Pa=515,Oc=516,Bc=517,zc=518,kc=519,fo=35044,po="300 es",hn=2e3,gs=2001;class mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mo=1234567;const Pi=Math.PI/180,Ii=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function Xr(i,t){return(i%t+t)%t}function Gc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Vc(i,t,e){return i!==t?(e-i)/(t-i):0}function Li(i,t,e){return(1-e)*i+e*t}function Hc(i,t,e,n){return Li(i,t,1-Math.exp(-e*n))}function Wc(i,t=1){return t-Math.abs(Xr(i,t*2)-t)}function Xc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Yc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function qc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Kc(i,t){return i+Math.random()*(t-i)}function Zc(i){return i*(.5-Math.random())}function $c(i){i!==void 0&&(mo=i);let t=mo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jc(i){return i*Pi}function Jc(i){return i*Ii}function Qc(i){return(i&i-1)===0&&i!==0}function tl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function el(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nl(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),d=a((t+n)/2),h=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*d,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*d,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*d,o*l);break;case"XZX":i.set(o*d,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*d,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Pe={DEG2RAD:Pi,RAD2DEG:Ii,generateUUID:gi,clamp:Me,euclideanModulo:Xr,mapLinear:Gc,inverseLerp:Vc,lerp:Li,damp:Hc,pingpong:Wc,smoothstep:Xc,smootherstep:Yc,randInt:qc,randFloat:Kc,randFloatSpread:Zc,seededRandom:$c,degToRad:jc,radToDeg:Jc,isPowerOfTwo:Qc,ceilPowerOfTwo:tl,floorPowerOfTwo:el,setQuaternionFromProperEuler:nl,normalize:ye,denormalize:ni};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,r,a,o,c,l){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],u=s[6],w=s[1],T=s[4],M=s[7],U=s[2],A=s[5],b=s[8];return r[0]=a*v+o*w+c*U,r[3]=a*m+o*T+c*A,r[6]=a*u+o*M+c*b,r[1]=l*v+d*w+h*U,r[4]=l*m+d*T+h*A,r[7]=l*u+d*M+h*b,r[2]=f*v+p*w+g*U,r[5]=f*m+p*T+g*A,r[8]=f*u+p*M+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8];return e*a*d-e*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],h=d*a-o*l,f=o*c-d*r,p=l*r-a*c,g=e*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*l-d*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(d*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ws.makeScale(t,e)),this}rotate(t){return this.premultiply(ws.makeRotation(-t)),this}translate(t,e){return this.premultiply(ws.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ws=new It;function La(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ui(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function il(){const i=Ui("canvas");return i.style.display="block",i}const go={};function Ci(i){i in go||(go[i]=!0,console.warn(i))}function sl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function rl(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ol(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===$t&&(i.r=dn(i.r),i.g=dn(i.g),i.b=dn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===$t&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Sn?xs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const _o=[.64,.33,.3,.6,.15,.06],xo=[.2126,.7152,.0722],vo=[.3127,.329],Mo=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),So=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[pi]:{primaries:_o,whitePoint:vo,transfer:xs,toXYZ:Mo,fromXYZ:So,luminanceCoefficients:xo,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:_o,whitePoint:vo,transfer:$t,toXYZ:Mo,fromXYZ:So,luminanceCoefficients:xo,outputColorSpaceConfig:{drawingBufferColorSpace:me}}});let Hn;class al{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hn===void 0&&(Hn=Ui("canvas")),Hn.width=t.width,Hn.height=t.height;const n=Hn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ui("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=dn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(dn(e[n]/255)*255):e[n]=dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cl=0;class Da{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cl++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ts(s[a].image)):r.push(Ts(s[a]))}else r=Ts(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ts(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ll=0;class Se extends mi{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=On,s=On,r=$e,a=Bn,o=He,c=un,l=Se.DEFAULT_ANISOTROPY,d=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ll++}),this.uuid=gi(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cn:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cn:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=xa;Se.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,e=0,n=0,s=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],d=c[4],h=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],u=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,M=(p+1)/2,U=(u+1)/2,A=(d+f)/4,b=(h+v)/4,P=(g+m)/4;return T>M&&T>U?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=b/n):M>U?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=P/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=b/r,s=P/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-v)/w,this.z=(f-d)/w,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hl extends mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Se(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends hl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ia extends Se{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dl extends Se{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],h=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(h!==v||c!==f||l!==p||d!==g){let m=1-o;const u=c*f+l*p+d*g+h*v,w=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const U=Math.sqrt(T),A=Math.atan2(U,u*w);m=Math.sin(m*A)/U,o=Math.sin(o*A)/U}const M=o*w;if(c=c*m+f*M,l=l*m+p*M,d=d*m+g*M,h=h*m+v*M,m===1-o){const U=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=U,l*=U,d*=U,h*=U}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+d*h+c*p-l*f,t[e+1]=c*g+d*f+l*h-o*p,t[e+2]=l*g+d*p+o*f-c*h,t[e+3]=d*g-o*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),h=o(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*d*h+l*p*g,this._y=l*p*h-f*d*g,this._z=l*d*g+f*p*h,this._w=l*d*h-f*p*g;break;case"YXZ":this._x=f*d*h+l*p*g,this._y=l*p*h-f*d*g,this._z=l*d*g-f*p*h,this._w=l*d*h+f*p*g;break;case"ZXY":this._x=f*d*h-l*p*g,this._y=l*p*h+f*d*g,this._z=l*d*g+f*p*h,this._w=l*d*h-f*p*g;break;case"ZYX":this._x=f*d*h-l*p*g,this._y=l*p*h+f*d*g,this._z=l*d*g-f*p*h,this._w=l*d*h+f*p*g;break;case"YZX":this._x=f*d*h+l*p*g,this._y=l*p*h+f*d*g,this._z=l*d*g-f*p*h,this._w=l*d*h-f*p*g;break;case"XZY":this._x=f*d*h-l*p*g,this._y=l*p*h-f*d*g,this._z=l*d*g+f*p*h,this._w=l*d*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],d=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(d-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),h=Math.sin((1-e)*d)/l,f=Math.sin(e*d)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),d=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*d,this.y=n+c*d+o*l-r*h,this.z=s+c*h+r*d-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Es.copy(this).projectOnVector(t),this.sub(Es)}reflect(t){return this.sub(Es.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Es=new R,yo=new Oi;class Bi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Be):Be.fromBufferAttribute(r,a),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vi.copy(n.boundingBox)),Vi.applyMatrix4(t.matrixWorld),this.union(Vi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Si),Hi.subVectors(this.max,Si),Wn.subVectors(t.a,Si),Xn.subVectors(t.b,Si),Yn.subVectors(t.c,Si),mn.subVectors(Xn,Wn),gn.subVectors(Yn,Xn),An.subVectors(Wn,Yn);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-An.z,An.y,mn.z,0,-mn.x,gn.z,0,-gn.x,An.z,0,-An.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-An.y,An.x,0];return!bs(e,Wn,Xn,Yn,Hi)||(e=[1,0,0,0,1,0,0,0,1],!bs(e,Wn,Xn,Yn,Hi))?!1:(Wi.crossVectors(mn,gn),e=[Wi.x,Wi.y,Wi.z],bs(e,Wn,Xn,Yn,Hi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new R,new R,new R,new R,new R,new R,new R,new R],Be=new R,Vi=new Bi,Wn=new R,Xn=new R,Yn=new R,mn=new R,gn=new R,An=new R,Si=new R,Hi=new R,Wi=new R,Cn=new R;function bs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Cn.fromArray(i,r);const o=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),c=t.dot(Cn),l=e.dot(Cn),d=n.dot(Cn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const ul=new Bi,yi=new R,As=new R;class vs{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ul.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yi.subVectors(t,this.center);const e=yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(As.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yi.copy(t.center).add(As)),this.expandByPoint(yi.copy(t.center).sub(As))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new R,Cs=new R,Xi=new R,_n=new R,Rs=new R,Yi=new R,Ps=new R;class Ua{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Cs.copy(t).add(e).multiplyScalar(.5),Xi.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(Cs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Xi),o=_n.dot(this.direction),c=-_n.dot(Xi),l=_n.lengthSq(),d=Math.abs(1-a*a);let h,f,p,g;if(d>0)if(h=a*c-o,f=a*o-c,g=r*d,h>=0)if(f>=-g)if(f<=g){const v=1/d;h*=v,f*=v,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Cs).addScaledVector(Xi,f),p}intersectSphere(t,e){tn.subVectors(t.center,this.origin);const n=tn.dot(this.direction),s=tn.dot(tn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,n,s,r){Rs.subVectors(e,t),Yi.subVectors(n,t),Ps.crossVectors(Rs,Yi);let a=this.direction.dot(Ps),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,t);const c=o*this.direction.dot(Yi.crossVectors(_n,Yi));if(c<0)return null;const l=o*this.direction.dot(Rs.cross(_n));if(l<0||c+l>a)return null;const d=-o*_n.dot(Ps);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,a,o,c,l,d,h,f,p,g,v,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,d,h,f,p,g,v,m)}set(t,e,n,s,r,a,o,c,l,d,h,f,p,g,v,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/qn.setFromMatrixColumn(t,0).length(),r=1/qn.setFromMatrixColumn(t,1).length(),a=1/qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*d,p=a*h,g=o*d,v=o*h;e[0]=c*d,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=f-v*l,e[9]=-o*c,e[2]=v-f*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*d,p=c*h,g=l*d,v=l*h;e[0]=f+v*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*h,e[5]=a*d,e[9]=-o,e[2]=p*o-g,e[6]=v+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*d,p=c*h,g=l*d,v=l*h;e[0]=f-v*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*d,e[9]=v-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*d,p=a*h,g=o*d,v=o*h;e[0]=c*d,e[4]=g*l-p,e[8]=f*l+v,e[1]=c*h,e[5]=v*l+f,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*d,e[4]=v-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*d,e[9]=-o*d,e[2]=-l*d,e[6]=p*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*d,e[4]=-h,e[8]=l*d,e[1]=f*h+v,e[5]=a*d,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*d,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fl,t,pl)}lookAt(t,e,n){const s=this.elements;return Ce.subVectors(t,e),Ce.lengthSq()===0&&(Ce.z=1),Ce.normalize(),xn.crossVectors(n,Ce),xn.lengthSq()===0&&(Math.abs(n.z)===1?Ce.x+=1e-4:Ce.z+=1e-4,Ce.normalize(),xn.crossVectors(n,Ce)),xn.normalize(),qi.crossVectors(Ce,xn),s[0]=xn.x,s[4]=qi.x,s[8]=Ce.x,s[1]=xn.y,s[5]=qi.y,s[9]=Ce.y,s[2]=xn.z,s[6]=qi.z,s[10]=Ce.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],u=n[14],w=n[3],T=n[7],M=n[11],U=n[15],A=s[0],b=s[4],P=s[8],y=s[12],_=s[1],C=s[5],O=s[9],B=s[13],Y=s[2],X=s[6],G=s[10],J=s[14],H=s[3],rt=s[7],dt=s[11],St=s[15];return r[0]=a*A+o*_+c*Y+l*H,r[4]=a*b+o*C+c*X+l*rt,r[8]=a*P+o*O+c*G+l*dt,r[12]=a*y+o*B+c*J+l*St,r[1]=d*A+h*_+f*Y+p*H,r[5]=d*b+h*C+f*X+p*rt,r[9]=d*P+h*O+f*G+p*dt,r[13]=d*y+h*B+f*J+p*St,r[2]=g*A+v*_+m*Y+u*H,r[6]=g*b+v*C+m*X+u*rt,r[10]=g*P+v*O+m*G+u*dt,r[14]=g*y+v*B+m*J+u*St,r[3]=w*A+T*_+M*Y+U*H,r[7]=w*b+T*C+M*X+U*rt,r[11]=w*P+T*O+M*G+U*dt,r[15]=w*y+T*B+M*J+U*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],d=t[2],h=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],u=t[15];return g*(+r*c*h-s*l*h-r*o*f+n*l*f+s*o*p-n*c*p)+v*(+e*c*p-e*l*f+r*a*f-s*a*p+s*l*d-r*c*d)+m*(+e*l*h-e*o*p-r*a*h+n*a*p+r*o*d-n*l*d)+u*(-s*o*d-e*c*h+e*o*f+s*a*h-n*a*f+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],h=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],u=t[15],w=h*m*l-v*f*l+v*c*p-o*m*p-h*c*u+o*f*u,T=g*f*l-d*m*l-g*c*p+a*m*p+d*c*u-a*f*u,M=d*v*l-g*h*l+g*o*p-a*v*p-d*o*u+a*h*u,U=g*h*c-d*v*c-g*o*f+a*v*f+d*o*m-a*h*m,A=e*w+n*T+s*M+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=w*b,t[1]=(v*f*r-h*m*r-v*s*p+n*m*p+h*s*u-n*f*u)*b,t[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*u+n*c*u)*b,t[3]=(h*c*r-o*f*r-h*s*l+n*f*l+o*s*p-n*c*p)*b,t[4]=T*b,t[5]=(d*m*r-g*f*r+g*s*p-e*m*p-d*s*u+e*f*u)*b,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*u-e*c*u)*b,t[7]=(a*f*r-d*c*r+d*s*l-e*f*l-a*s*p+e*c*p)*b,t[8]=M*b,t[9]=(g*h*r-d*v*r-g*n*p+e*v*p+d*n*u-e*h*u)*b,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*u+e*o*u)*b,t[11]=(d*o*r-a*h*r-d*n*l+e*h*l+a*n*p-e*o*p)*b,t[12]=U*b,t[13]=(d*v*s-g*h*s+g*n*f-e*v*f-d*n*m+e*h*m)*b,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*m-e*o*m)*b,t[15]=(a*h*s-d*o*s+d*n*c-e*h*c-a*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,d=a+a,h=o+o,f=r*l,p=r*d,g=r*h,v=a*d,m=a*h,u=o*h,w=c*l,T=c*d,M=c*h,U=n.x,A=n.y,b=n.z;return s[0]=(1-(v+u))*U,s[1]=(p+M)*U,s[2]=(g-T)*U,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(f+u))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(g+T)*b,s[9]=(m-w)*b,s[10]=(1-(f+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=qn.set(s[0],s[1],s[2]).length();const a=qn.set(s[4],s[5],s[6]).length(),o=qn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ze.copy(this);const l=1/r,d=1/a,h=1/o;return ze.elements[0]*=l,ze.elements[1]*=l,ze.elements[2]*=l,ze.elements[4]*=d,ze.elements[5]*=d,ze.elements[6]*=d,ze.elements[8]*=h,ze.elements[9]*=h,ze.elements[10]*=h,e.setFromRotationMatrix(ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=hn){const c=this.elements,l=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(o===hn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===gs)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=hn){const c=this.elements,l=1/(e-t),d=1/(n-s),h=1/(a-r),f=(e+t)*l,p=(n+s)*d;let g,v;if(o===hn)g=(a+r)*h,v=-2*h;else if(o===gs)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qn=new R,ze=new se,fl=new R(0,0,0),pl=new R(1,1,1),xn=new R,qi=new R,Ce=new R,wo=new se,To=new Oi;class Ye{constructor(t=0,e=0,n=0,s=Ye.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return To.setFromEuler(this),this.setFromQuaternion(To,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ye.DEFAULT_ORDER="XYZ";class Fa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ml=0;const Eo=new R,Kn=new Oi,en=new se,Ki=new R,wi=new R,gl=new R,_l=new Oi,bo=new R(1,0,0),Ao=new R(0,1,0),Co=new R(0,0,1),Ro={type:"added"},xl={type:"removed"},Zn={type:"childadded",child:null},Ls={type:"childremoved",child:null};class ge extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ml++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new R,e=new Ye,n=new Oi,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new It}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(bo,t)}rotateY(t){return this.rotateOnAxis(Ao,t)}rotateZ(t){return this.rotateOnAxis(Co,t)}translateOnAxis(t,e){return Eo.copy(t).applyQuaternion(this.quaternion),this.position.add(Eo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bo,t)}translateY(t){return this.translateOnAxis(Ao,t)}translateZ(t){return this.translateOnAxis(Co,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ki.copy(t):Ki.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(wi,Ki,this.up):en.lookAt(Ki,wi,this.up),this.quaternion.setFromRotationMatrix(en),s&&(en.extractRotation(s.matrixWorld),Kn.setFromRotationMatrix(en),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ro),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xl),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ro),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,t,gl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,_l,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),d=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ge.DEFAULT_UP=new R(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ke=new R,nn=new R,Ds=new R,sn=new R,$n=new R,jn=new R,Po=new R,Is=new R,Us=new R,Fs=new R,Ns=new jt,Os=new jt,Bs=new jt;class Ve{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ke.subVectors(t,e),s.cross(ke);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ke.subVectors(s,e),nn.subVectors(n,e),Ds.subVectors(t,e);const a=ke.dot(ke),o=ke.dot(nn),c=ke.dot(Ds),l=nn.dot(nn),d=nn.dot(Ds),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(l*c-o*d)*f,g=(a*d-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,sn.x),c.addScaledVector(a,sn.y),c.addScaledVector(o,sn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ns.setScalar(0),Os.setScalar(0),Bs.setScalar(0),Ns.fromBufferAttribute(t,e),Os.fromBufferAttribute(t,n),Bs.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ns,r.x),a.addScaledVector(Os,r.y),a.addScaledVector(Bs,r.z),a}static isFrontFacing(t,e,n,s){return ke.subVectors(n,e),nn.subVectors(t,e),ke.cross(nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),ke.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;$n.subVectors(s,n),jn.subVectors(r,n),Is.subVectors(t,n);const c=$n.dot(Is),l=jn.dot(Is);if(c<=0&&l<=0)return e.copy(n);Us.subVectors(t,s);const d=$n.dot(Us),h=jn.dot(Us);if(d>=0&&h<=d)return e.copy(s);const f=c*h-d*l;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector($n,a);Fs.subVectors(t,r);const p=$n.dot(Fs),g=jn.dot(Fs);if(g>=0&&p<=g)return e.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(jn,o);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Po.subVectors(r,s),o=(h-d)/(h-d+(p-g)),e.copy(s).addScaledVector(Po,o);const u=1/(m+v+f);return a=v*u,o=f*u,e.copy(n).addScaledVector($n,a).addScaledVector(jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Na={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function zs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=Xr(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=zs(a,r,t+1/3),this.g=zs(a,r,t),this.b=zs(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){const n=Na[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return Xt.fromWorkingColorSpace(ve.copy(this),t),Math.round(Me(ve.r*255,0,255))*65536+Math.round(Me(ve.g*255,0,255))*256+Math.round(Me(ve.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(ve.copy(this),e);const n=ve.r,s=ve.g,r=ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=me){Xt.fromWorkingColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,s=ve.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vn),this.setHSL(vn.h+t,vn.s+e,vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vn),t.getHSL(Zi);const n=Li(vn.h,Zi.h,e),s=Li(vn.s,Zi.s,e),r=Li(vn.l,Zi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new Nt;Nt.NAMES=Na;let vl=0;class _i extends mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vl++}),this.uuid=gi(),this.name="",this.blending=si,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Js,this.blendDst=Qs,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Js&&(n.blendSrc=this.blendSrc),this.blendDst!==Qs&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ge extends _i{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new R,$i=new zt;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fo,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$i.fromBufferAttribute(this,e),$i.applyMatrix3(t),this.setXY(e,$i.x,$i.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fo&&(t.usage=this.usage),t}}class Oa extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ba extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ml=0;const Ue=new se,ks=new ge,Jn=new R,Re=new Bi,Ti=new Bi,pe=new R;class Te extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ml++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(La(t)?Ba:Oa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return ks.lookAt(t),ks.updateMatrix(),this.applyMatrix4(ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Re.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(pe.addVectors(Re.min,Ti.min),Re.expandByPoint(pe),pe.addVectors(Re.max,Ti.max),Re.expandByPoint(pe)):(Re.expandByPoint(Ti.min),Re.expandByPoint(Ti.max))}Re.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)pe.fromBufferAttribute(o,l),c&&(Jn.fromBufferAttribute(t,l),pe.add(Jn)),s=Math.max(s,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new R,c[P]=new R;const l=new R,d=new R,h=new R,f=new zt,p=new zt,g=new zt,v=new R,m=new R;function u(P,y,_){l.fromBufferAttribute(n,P),d.fromBufferAttribute(n,y),h.fromBufferAttribute(n,_),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,_),d.sub(l),h.sub(l),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(C),o[P].add(v),o[y].add(v),o[_].add(v),c[P].add(m),c[y].add(m),c[_].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,y=w.length;P<y;++P){const _=w[P],C=_.start,O=_.count;for(let B=C,Y=C+O;B<Y;B+=3)u(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const T=new R,M=new R,U=new R,A=new R;function b(P){U.fromBufferAttribute(s,P),A.copy(U);const y=o[P];T.copy(y),T.sub(U.multiplyScalar(U.dot(y))).normalize(),M.crossVectors(A,y);const C=M.dot(c[P])<0?-1:1;a.setXYZW(P,T.x,T.y,T.z,C)}for(let P=0,y=w.length;P<y;++P){const _=w[P],C=_.start,O=_.count;for(let B=C,Y=C+O;B<Y;B+=3)b(t.getX(B+0)),b(t.getX(B+1)),b(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,d=new R,h=new R;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(o,c){const l=o.array,d=o.itemSize,h=o.normalized,f=new l.constructor(c.length*d);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*d;for(let u=0;u<d;u++)f[g++]=l[p++]}return new Xe(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,h=l.length;d<h;d++){const f=l[d],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];d.push(p.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(e))}const r=t.morphAttributes;for(const l in r){const d=[],h=r[l];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lo=new se,Rn=new Ua,ji=new vs,Do=new R,Ji=new R,Qi=new R,ts=new R,Gs=new R,es=new R,Io=new R,ns=new R;class Q extends ge{constructor(t=new Te,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){es.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],h=r[c];d!==0&&(Gs.fromBufferAttribute(h,t),a?es.addScaledVector(Gs,d):es.addScaledVector(Gs.sub(e),d))}e.add(es)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(r),Rn.copy(t.ray).recast(t.near),!(ji.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(ji,Do)===null||Rn.origin.distanceToSquared(Do)>(t.far-t.near)**2))&&(Lo.copy(r).invert(),Rn.copy(t.ray).applyMatrix4(Lo),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],u=a[m.materialIndex],w=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,U=T;M<U;M+=3){const A=o.getX(M),b=o.getX(M+1),P=o.getX(M+2);s=is(this,u,t,n,l,d,h,A,b,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const w=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);s=is(this,a,t,n,l,d,h,w,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],u=a[m.materialIndex],w=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,U=T;M<U;M+=3){const A=M,b=M+1,P=M+2;s=is(this,u,t,n,l,d,h,A,b,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const w=m,T=m+1,M=m+2;s=is(this,a,t,n,l,d,h,w,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Sl(i,t,e,n,s,r,a,o){let c;if(t.side===be?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Tn,o),c===null)return null;ns.copy(o),ns.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ns);return l<e.near||l>e.far?null:{distance:l,point:ns.clone(),object:i}}function is(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ji),i.getVertexPosition(c,Qi),i.getVertexPosition(l,ts);const d=Sl(i,t,e,n,Ji,Qi,ts,Io);if(d){const h=new R;Ve.getBarycoord(Io,Ji,Qi,ts,h),s&&(d.uv=Ve.getInterpolatedAttribute(s,o,c,l,h,new zt)),r&&(d.uv1=Ve.getInterpolatedAttribute(r,o,c,l,h,new zt)),a&&(d.normal=Ve.getInterpolatedAttribute(a,o,c,l,h,new R),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new R,materialIndex:0};Ve.getNormal(Ji,Qi,ts,f.normal),d.face=f,d.barycoord=h}return d}class yt extends Te{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(h,2));function g(v,m,u,w,T,M,U,A,b,P,y){const _=M/b,C=U/P,O=M/2,B=U/2,Y=A/2,X=b+1,G=P+1;let J=0,H=0;const rt=new R;for(let dt=0;dt<G;dt++){const St=dt*C-B;for(let Ot=0;Ot<X;Ot++){const Jt=Ot*_-O;rt[v]=Jt*w,rt[m]=St*T,rt[u]=Y,l.push(rt.x,rt.y,rt.z),rt[v]=0,rt[m]=0,rt[u]=A>0?1:-1,d.push(rt.x,rt.y,rt.z),h.push(Ot/b),h.push(1-dt/P),J+=1}}for(let dt=0;dt<P;dt++)for(let St=0;St<b;St++){const Ot=f+St+X*dt,Jt=f+St+X*(dt+1),K=f+(St+1)+X*(dt+1),nt=f+(St+1)+X*dt;c.push(Ot,Jt,nt),c.push(Jt,K,nt),H+=6}o.addGroup(p,H,y),p+=H,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function we(i){const t={};for(let e=0;e<i.length;e++){const n=fi(i[e]);for(const s in n)t[s]=n[s]}return t}function yl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function za(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const wl={clone:fi,merge:we};var Tl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,El=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends _i{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tl,this.fragmentShader=El,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fi(t.uniforms),this.uniformsGroups=yl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ka extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new R,Uo=new zt,Fo=new zt;class Le extends ka{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ii*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(Pi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z)}getViewSize(t,e){return this.getViewBounds(t,Uo,Fo),e.subVectors(Fo,Uo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qn=-90,ti=1;class bl extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Le(Qn,ti,t,e);s.layers=this.layers,this.add(s);const r=new Le(Qn,ti,t,e);r.layers=this.layers,this.add(r);const a=new Le(Qn,ti,t,e);a.layers=this.layers,this.add(a);const o=new Le(Qn,ti,t,e);o.layers=this.layers,this.add(o);const c=new Le(Qn,ti,t,e);c.layers=this.layers,this.add(c);const l=new Le(Qn,ti,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ga extends Se{constructor(t,e,n,s,r,a,o,c,l,d){t=t!==void 0?t:[],e=e!==void 0?e:li,super(t,e,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Al extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ga(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yt(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:yn});r.uniforms.tEquirect.value=e;const a=new Q(s,r),o=e.minFilter;return e.minFilter===Bn&&(e.minFilter=$e),new bl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Vs=new R,Cl=new R,Rl=new It;class In{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Vs.subVectors(n,e).cross(Cl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rl.getNormalMatrix(t),s=this.coplanarPoint(Vs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new vs,ss=new R;class Yr{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],d=s[5],h=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],u=s[12],w=s[13],T=s[14],M=s[15];if(n[0].setComponents(c-r,f-l,m-p,M-u).normalize(),n[1].setComponents(c+r,f+l,m+p,M+u).normalize(),n[2].setComponents(c+a,f+d,m+g,M+w).normalize(),n[3].setComponents(c-a,f-d,m-g,M-w).normalize(),n[4].setComponents(c-o,f-h,m-v,M-T).normalize(),e===hn)n[5].setComponents(c+o,f+h,m+v,M+T).normalize();else if(e===gs)n[5].setComponents(o,h,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ss.x=s.normal.x>0?t.max.x:t.min.x,ss.y=s.normal.y>0?t.max.y:t.min.y,ss.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Va(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pl(i){const t=new WeakMap;function e(o,c){const l=o.array,d=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const d=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,d);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];i.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Ke extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,h=t/o,f=e/c,p=[],g=[],v=[],m=[];for(let u=0;u<d;u++){const w=u*f-a;for(let T=0;T<l;T++){const M=T*h-r;g.push(M,-w,0),v.push(0,0,1),m.push(T/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let w=0;w<o;w++){const T=w+l*u,M=w+l*(u+1),U=w+1+l*(u+1),A=w+1+l*u;p.push(T,M,A),p.push(M,U,A)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ll=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Il=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ul=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ol=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zl=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ql=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$l=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ql=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,th=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ah="gl_FragColor = linearToOutputTexel( gl_FragColor );",ch=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ph=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_h=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Th=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ah=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ch=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ph=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ih=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Oh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ed=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,od=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ld=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,md=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_d=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Md=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Td=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ed=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ld=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Id=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Od=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,su=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ru=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ou=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,au=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Ll,alphahash_pars_fragment:Dl,alphamap_fragment:Il,alphamap_pars_fragment:Ul,alphatest_fragment:Fl,alphatest_pars_fragment:Nl,aomap_fragment:Ol,aomap_pars_fragment:Bl,batching_pars_vertex:zl,batching_vertex:kl,begin_vertex:Gl,beginnormal_vertex:Vl,bsdfs:Hl,iridescence_fragment:Wl,bumpmap_pars_fragment:Xl,clipping_planes_fragment:Yl,clipping_planes_pars_fragment:ql,clipping_planes_pars_vertex:Kl,clipping_planes_vertex:Zl,color_fragment:$l,color_pars_fragment:jl,color_pars_vertex:Jl,color_vertex:Ql,common:th,cube_uv_reflection_fragment:eh,defaultnormal_vertex:nh,displacementmap_pars_vertex:ih,displacementmap_vertex:sh,emissivemap_fragment:rh,emissivemap_pars_fragment:oh,colorspace_fragment:ah,colorspace_pars_fragment:ch,envmap_fragment:lh,envmap_common_pars_fragment:hh,envmap_pars_fragment:dh,envmap_pars_vertex:uh,envmap_physical_pars_fragment:wh,envmap_vertex:fh,fog_vertex:ph,fog_pars_vertex:mh,fog_fragment:gh,fog_pars_fragment:_h,gradientmap_pars_fragment:xh,lightmap_pars_fragment:vh,lights_lambert_fragment:Mh,lights_lambert_pars_fragment:Sh,lights_pars_begin:yh,lights_toon_fragment:Th,lights_toon_pars_fragment:Eh,lights_phong_fragment:bh,lights_phong_pars_fragment:Ah,lights_physical_fragment:Ch,lights_physical_pars_fragment:Rh,lights_fragment_begin:Ph,lights_fragment_maps:Lh,lights_fragment_end:Dh,logdepthbuf_fragment:Ih,logdepthbuf_pars_fragment:Uh,logdepthbuf_pars_vertex:Fh,logdepthbuf_vertex:Nh,map_fragment:Oh,map_pars_fragment:Bh,map_particle_fragment:zh,map_particle_pars_fragment:kh,metalnessmap_fragment:Gh,metalnessmap_pars_fragment:Vh,morphinstance_vertex:Hh,morphcolor_vertex:Wh,morphnormal_vertex:Xh,morphtarget_pars_vertex:Yh,morphtarget_vertex:qh,normal_fragment_begin:Kh,normal_fragment_maps:Zh,normal_pars_fragment:$h,normal_pars_vertex:jh,normal_vertex:Jh,normalmap_pars_fragment:Qh,clearcoat_normal_fragment_begin:td,clearcoat_normal_fragment_maps:ed,clearcoat_pars_fragment:nd,iridescence_pars_fragment:id,opaque_fragment:sd,packing:rd,premultiplied_alpha_fragment:od,project_vertex:ad,dithering_fragment:cd,dithering_pars_fragment:ld,roughnessmap_fragment:hd,roughnessmap_pars_fragment:dd,shadowmap_pars_fragment:ud,shadowmap_pars_vertex:fd,shadowmap_vertex:pd,shadowmask_pars_fragment:md,skinbase_vertex:gd,skinning_pars_vertex:_d,skinning_vertex:xd,skinnormal_vertex:vd,specularmap_fragment:Md,specularmap_pars_fragment:Sd,tonemapping_fragment:yd,tonemapping_pars_fragment:wd,transmission_fragment:Td,transmission_pars_fragment:Ed,uv_pars_fragment:bd,uv_pars_vertex:Ad,uv_vertex:Cd,worldpos_vertex:Rd,background_vert:Pd,background_frag:Ld,backgroundCube_vert:Dd,backgroundCube_frag:Id,cube_vert:Ud,cube_frag:Fd,depth_vert:Nd,depth_frag:Od,distanceRGBA_vert:Bd,distanceRGBA_frag:zd,equirect_vert:kd,equirect_frag:Gd,linedashed_vert:Vd,linedashed_frag:Hd,meshbasic_vert:Wd,meshbasic_frag:Xd,meshlambert_vert:Yd,meshlambert_frag:qd,meshmatcap_vert:Kd,meshmatcap_frag:Zd,meshnormal_vert:$d,meshnormal_frag:jd,meshphong_vert:Jd,meshphong_frag:Qd,meshphysical_vert:tu,meshphysical_frag:eu,meshtoon_vert:nu,meshtoon_frag:iu,points_vert:su,points_frag:ru,shadow_vert:ou,shadow_frag:au,sprite_vert:cu,sprite_frag:lu},it={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Ze={basic:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:we([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:we([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:we([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:we([it.points,it.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:we([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:we([it.common,it.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:we([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:we([it.sprite,it.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:we([it.common,it.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:we([it.lights,it.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Ze.physical={uniforms:we([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const rs={r:0,b:0,g:0},Ln=new Ye,hu=new se;function du(i,t,e,n,s,r,a){const o=new Nt(0);let c=r===!0?0:1,l,d,h=null,f=0,p=null;function g(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?e:t).get(T)),T}function v(w){let T=!1;const M=g(w);M===null?u(o,c):M&&M.isColor&&(u(M,1),T=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,T){const M=g(T);M&&(M.isCubeTexture||M.mapping===_s)?(d===void 0&&(d=new Q(new yt(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:fi(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Ln.copy(T.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(hu.makeRotationFromEuler(Ln)),d.material.toneMapped=Xt.getTransfer(M.colorSpace)!==$t,(h!==M||f!==M.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,h=M,f=M.version,p=i.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Q(new Ke(2,2),new En({name:"BackgroundMaterial",uniforms:fi(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(M.colorSpace)!==$t,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,p=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function u(w,T){w.getRGB(rs,za(i)),n.buffers.color.setClear(rs.r,rs.g,rs.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(w,T=1){o.set(w),c=T,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,u(o,c)},render:v,addToRenderList:m}}function uu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,C,O,B,Y){let X=!1;const G=h(B,O,C);r!==G&&(r=G,l(r.object)),X=p(_,B,O,Y),X&&g(_,B,O,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(_,C,O,B),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function d(_){return i.deleteVertexArray(_)}function h(_,C,O){const B=O.wireframe===!0;let Y=n[_.id];Y===void 0&&(Y={},n[_.id]=Y);let X=Y[C.id];X===void 0&&(X={},Y[C.id]=X);let G=X[B];return G===void 0&&(G=f(c()),X[B]=G),G}function f(_){const C=[],O=[],B=[];for(let Y=0;Y<e;Y++)C[Y]=0,O[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:B,object:_,attributes:{},index:null}}function p(_,C,O,B){const Y=r.attributes,X=C.attributes;let G=0;const J=O.getAttributes();for(const H in J)if(J[H].location>=0){const dt=Y[H];let St=X[H];if(St===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(St=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(St=_.instanceColor)),dt===void 0||dt.attribute!==St||St&&dt.data!==St.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(_,C,O,B){const Y={},X=C.attributes;let G=0;const J=O.getAttributes();for(const H in J)if(J[H].location>=0){let dt=X[H];dt===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(dt=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(dt=_.instanceColor));const St={};St.attribute=dt,dt&&dt.data&&(St.data=dt.data),Y[H]=St,G++}r.attributes=Y,r.attributesNum=G,r.index=B}function v(){const _=r.newAttributes;for(let C=0,O=_.length;C<O;C++)_[C]=0}function m(_){u(_,0)}function u(_,C){const O=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;O[_]=1,B[_]===0&&(i.enableVertexAttribArray(_),B[_]=1),Y[_]!==C&&(i.vertexAttribDivisor(_,C),Y[_]=C)}function w(){const _=r.newAttributes,C=r.enabledAttributes;for(let O=0,B=C.length;O<B;O++)C[O]!==_[O]&&(i.disableVertexAttribArray(O),C[O]=0)}function T(_,C,O,B,Y,X,G){G===!0?i.vertexAttribIPointer(_,C,O,Y,X):i.vertexAttribPointer(_,C,O,B,Y,X)}function M(_,C,O,B){v();const Y=B.attributes,X=O.getAttributes(),G=C.defaultAttributeValues;for(const J in X){const H=X[J];if(H.location>=0){let rt=Y[J];if(rt===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor)),rt!==void 0){const dt=rt.normalized,St=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;const Jt=Ot.buffer,K=Ot.type,nt=Ot.bytesPerElement,xt=K===i.INT||K===i.UNSIGNED_INT||rt.gpuType===zr;if(rt.isInterleavedBufferAttribute){const ot=rt.data,At=ot.stride,Pt=rt.offset;if(ot.isInstancedInterleavedBuffer){for(let Bt=0;Bt<H.locationSize;Bt++)u(H.location+Bt,ot.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Bt=0;Bt<H.locationSize;Bt++)m(H.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Bt=0;Bt<H.locationSize;Bt++)T(H.location+Bt,St/H.locationSize,K,dt,At*nt,(Pt+St/H.locationSize*Bt)*nt,xt)}else{if(rt.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)u(H.location+ot,rt.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ot=0;ot<H.locationSize;ot++)m(H.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let ot=0;ot<H.locationSize;ot++)T(H.location+ot,St/H.locationSize,K,dt,St*nt,St/H.locationSize*ot*nt,xt)}}else if(G!==void 0){const dt=G[J];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(H.location,dt);break;case 3:i.vertexAttrib3fv(H.location,dt);break;case 4:i.vertexAttrib4fv(H.location,dt);break;default:i.vertexAttrib1fv(H.location,dt)}}}}w()}function U(){P();for(const _ in n){const C=n[_];for(const O in C){const B=C[O];for(const Y in B)d(B[Y].object),delete B[Y];delete C[O]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const C=n[_.id];for(const O in C){const B=C[O];for(const Y in B)d(B[Y].object),delete B[Y];delete C[O]}delete n[_.id]}function b(_){for(const C in n){const O=n[C];if(O[_.id]===void 0)continue;const B=O[_.id];for(const Y in B)d(B[Y].object),delete B[Y];delete O[_.id]}}function P(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function fu(i,t,e){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),e.update(d,n,1)}function a(l,d,h){h!==0&&(i.drawArraysInstanced(n,l,d,h),e.update(d,n,h))}function o(l,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];e.update(p,n,1)}function c(l,d,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function pu(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==He&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const P=b===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==un&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ln&&!P)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:U,maxSamples:A}}function mu(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new In,o=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=d(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,u=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{const w=r?0:n,T=w*4;let M=u.clippingState||null;c.value=M,M=d(g,f,T,p);for(let U=0;U!==T;++U)M[U]=e[U];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const u=p+v*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let T=0,M=p;T!==v;++T,M+=4)a.copy(h[T]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function gu(i){let t=new WeakMap;function e(a,o){return o===ar?a.mapping=li:o===cr&&(a.mapping=hi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ar||o===cr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Al(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ha extends ka{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ii=4,No=[.125,.215,.35,.446,.526,.582],Nn=20,Hs=new Ha,Oo=new Nt;let Ws=null,Xs=0,Ys=0,qs=!1;const Un=(1+Math.sqrt(5))/2,ei=1/Un,Bo=[new R(-Un,ei,0),new R(Un,ei,0),new R(-ei,0,Un),new R(ei,0,Un),new R(0,Un,-ei),new R(0,Un,ei),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class zo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ws=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ws,Xs,Ys),this._renderer.xr.enabled=qs,t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===li||t.mapping===hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ws=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Ni,format:He,colorSpace:pi,depthBuffer:!1},s=ko(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ko(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_u(r)),this._blurMaterial=xu(r,t,e)}return s}_compileMaterial(t){const e=new Q(this._lodPlanes[0],t);this._renderer.compile(e,Hs)}_sceneToCubeUV(t,e,n,s){const o=new Le(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Oo),d.toneMapping=wn,d.autoClear=!1;const p=new Ge({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new Q(new yt,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Oo),v=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):w===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const T=this._cubeSize;os(s,w*T,u>2?T:0,T,T),d.setRenderTarget(s),v&&d.render(g,o),d.render(t,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===li||t.mapping===hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Go());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Q(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;os(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Hs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bo[(s-r-1)%Bo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Q(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Nn-1),v=r/g,m=isFinite(r)?1+Math.floor(d*v):Nn;m>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nn}`);const u=[];let w=0;for(let b=0;b<Nn;++b){const P=b/v,y=Math.exp(-P*P/2);u.push(y),b===0?w+=y:b<m&&(w+=2*y)}for(let b=0;b<u.length;b++)u[b]=u[b]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const M=this._sizeLods[s],U=3*M*(s>T-ii?s-T+ii:0),A=4*(this._cubeSize-M);os(e,U,A,3*M,2*M),c.setRenderTarget(e),c.render(h,Hs)}}function _u(i){const t=[],e=[],n=[];let s=i;const r=i-ii+1+No.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ii?c=No[a-i+ii-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,h=1+l,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,v=3,m=2,u=1,w=new Float32Array(v*g*p),T=new Float32Array(m*g*p),M=new Float32Array(u*g*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,P=A>2?0:-1,y=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];w.set(y,v*g*A),T.set(f,m*g*A);const _=[A,A,A,A,A,A];M.set(_,u*g*A)}const U=new Te;U.setAttribute("position",new Xe(w,v)),U.setAttribute("uv",new Xe(T,m)),U.setAttribute("faceIndex",new Xe(M,u)),t.push(U),s>ii&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ko(i,t,e){const n=new kn(i,t,e);return n.texture.mapping=_s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xu(i,t,e){const n=new Float32Array(Nn),s=new R(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Go(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Vo(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function qr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vu(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ar||c===cr,d=c===li||c===hi;if(l||d){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new zo(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||d&&p&&s(p)?(e===null&&(e=new zo(i)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Mu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ci("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Su(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,u=v.length;m<u;m++)t.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,u=v.length;m<u;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let T=0,M=w.length;T<M;T+=3){const U=w[T+0],A=w[T+1],b=w[T+2];f.push(U,A,A,b,b,U)}}else if(g!==void 0){const w=g.array;v=g.version;for(let T=0,M=w.length/3-1;T<M;T+=3){const U=T+0,A=T+1,b=T+2;f.push(U,A,A,b,b,U)}}else return;const m=new(La(f)?Ba:Oa)(f,1);m.version=v;const u=r.get(h);u&&t.remove(u),r.set(h,m)}function d(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function yu(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function d(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function h(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/a,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let u=0;for(let w=0;w<g;w++)u+=p[w]*v[w];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function wu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tu(i,t,e){const n=new WeakMap,s=new jt;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let _=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var p=_;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let U=o.attributes.position.count*M,A=1;U>t.maxTextureSize&&(A=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const b=new Float32Array(U*A*4*h),P=new Ia(b,U,A,h);P.type=ln,P.needsUpdate=!0;const y=M*4;for(let C=0;C<h;C++){const O=u[C],B=w[C],Y=T[C],X=U*A*4*C;for(let G=0;G<O.count;G++){const J=G*y;g===!0&&(s.fromBufferAttribute(O,G),b[X+J+0]=s.x,b[X+J+1]=s.y,b[X+J+2]=s.z,b[X+J+3]=0),v===!0&&(s.fromBufferAttribute(B,G),b[X+J+4]=s.x,b[X+J+5]=s.y,b[X+J+6]=s.z,b[X+J+7]=0),m===!0&&(s.fromBufferAttribute(Y,G),b[X+J+8]=s.x,b[X+J+9]=s.y,b[X+J+10]=s.z,b[X+J+11]=Y.itemSize===4?s.w:1)}}f={count:h,texture:P,size:new zt(U,A)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Eu(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,h=t.get(c,d);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Wa extends Se{constructor(t,e,n,s,r,a,o,c,l,d=ri){if(d!==ri&&d!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ri&&(n=zn),n===void 0&&d===ui&&(n=di),super(null,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:We,this.minFilter=c!==void 0?c:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xa=new Se,Ho=new Wa(1,1),Ya=new Ia,qa=new dl,Ka=new Ga,Wo=[],Xo=[],Yo=new Float32Array(16),qo=new Float32Array(9),Ko=new Float32Array(4);function xi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Wo[s];if(r===void 0&&(r=new Float32Array(s),Wo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ms(i,t){let e=Xo[t];e===void 0&&(e=new Int32Array(t),Xo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Au(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2fv(this.addr,t),fe(e,t)}}function Cu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;i.uniform3fv(this.addr,t),fe(e,t)}}function Ru(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4fv(this.addr,t),fe(e,t)}}function Pu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(ue(e,n))return;Ko.set(n),i.uniformMatrix2fv(this.addr,!1,Ko),fe(e,n)}}function Lu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(ue(e,n))return;qo.set(n),i.uniformMatrix3fv(this.addr,!1,qo),fe(e,n)}}function Du(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(ue(e,n))return;Yo.set(n),i.uniformMatrix4fv(this.addr,!1,Yo),fe(e,n)}}function Iu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Uu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2iv(this.addr,t),fe(e,t)}}function Fu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3iv(this.addr,t),fe(e,t)}}function Nu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4iv(this.addr,t),fe(e,t)}}function Ou(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2uiv(this.addr,t),fe(e,t)}}function zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3uiv(this.addr,t),fe(e,t)}}function ku(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4uiv(this.addr,t),fe(e,t)}}function Gu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ho.compareFunction=Pa,r=Ho):r=Xa,e.setTexture2D(t||r,s)}function Vu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qa,s)}function Hu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ka,s)}function Wu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ya,s)}function Xu(i){switch(i){case 5126:return bu;case 35664:return Au;case 35665:return Cu;case 35666:return Ru;case 35674:return Pu;case 35675:return Lu;case 35676:return Du;case 5124:case 35670:return Iu;case 35667:case 35671:return Uu;case 35668:case 35672:return Fu;case 35669:case 35673:return Nu;case 5125:return Ou;case 36294:return Bu;case 36295:return zu;case 36296:return ku;case 35678:case 36198:case 36298:case 36306:case 35682:return Gu;case 35679:case 36299:case 36307:return Vu;case 35680:case 36300:case 36308:case 36293:return Hu;case 36289:case 36303:case 36311:case 36292:return Wu}}function Yu(i,t){i.uniform1fv(this.addr,t)}function qu(i,t){const e=xi(t,this.size,2);i.uniform2fv(this.addr,e)}function Ku(i,t){const e=xi(t,this.size,3);i.uniform3fv(this.addr,e)}function Zu(i,t){const e=xi(t,this.size,4);i.uniform4fv(this.addr,e)}function $u(i,t){const e=xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ju(i,t){const e=xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ju(i,t){const e=xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qu(i,t){i.uniform1iv(this.addr,t)}function tf(i,t){i.uniform2iv(this.addr,t)}function ef(i,t){i.uniform3iv(this.addr,t)}function nf(i,t){i.uniform4iv(this.addr,t)}function sf(i,t){i.uniform1uiv(this.addr,t)}function rf(i,t){i.uniform2uiv(this.addr,t)}function of(i,t){i.uniform3uiv(this.addr,t)}function af(i,t){i.uniform4uiv(this.addr,t)}function cf(i,t,e){const n=this.cache,s=t.length,r=Ms(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Xa,r[a])}function lf(i,t,e){const n=this.cache,s=t.length,r=Ms(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||qa,r[a])}function hf(i,t,e){const n=this.cache,s=t.length,r=Ms(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ka,r[a])}function df(i,t,e){const n=this.cache,s=t.length,r=Ms(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ya,r[a])}function uf(i){switch(i){case 5126:return Yu;case 35664:return qu;case 35665:return Ku;case 35666:return Zu;case 35674:return $u;case 35675:return ju;case 35676:return Ju;case 5124:case 35670:return Qu;case 35667:case 35671:return tf;case 35668:case 35672:return ef;case 35669:case 35673:return nf;case 5125:return sf;case 36294:return rf;case 36295:return of;case 36296:return af;case 35678:case 36198:case 36298:case 36306:case 35682:return cf;case 35679:case 36299:case 36307:return lf;case 35680:case 36300:case 36308:case 36293:return hf;case 36289:case 36303:case 36311:case 36292:return df}}class ff{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xu(e.type)}}class pf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=uf(e.type)}}class mf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ks=/(\w+)(\])?(\[|\.)?/g;function Zo(i,t){i.seq.push(t),i.map[t.id]=t}function gf(i,t,e){const n=i.name,s=n.length;for(Ks.lastIndex=0;;){const r=Ks.exec(n),a=Ks.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Zo(e,l===void 0?new ff(o,i,t):new pf(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new mf(o),Zo(e,h)),e=h}}}class ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);gf(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function $o(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const _f=37297;let xf=0;function vf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const jo=new It;function Mf(i){Xt._getMatrix(jo,Xt.workingColorSpace,i);const t=`mat3( ${jo.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case xs:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+vf(i.getShaderSource(t),a)}else return s}function Sf(i,t){const e=Mf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yf(i,t){let e;switch(t){case Tc:e="Linear";break;case Ec:e="Reinhard";break;case bc:e="Cineon";break;case _a:e="ACESFilmic";break;case Cc:e="AgX";break;case Rc:e="Neutral";break;case Ac:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const as=new R;function wf(){Xt.getLuminanceCoefficients(as);const i=as.x.toFixed(4),t=as.y.toFixed(4),e=as.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function Ef(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ri(i){return i!==""}function Qo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ta(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Af=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nr(i){return i.replace(Af,Rf)}const Cf=new Map;function Rf(i,t){let e=Ft[t];if(e===void 0){const n=Cf.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nr(e)}const Pf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ea(i){return i.replace(Pf,Lf)}function Lf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function na(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Df(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ma?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rn&&(t="SHADOWMAP_TYPE_VSM"),t}function If(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case li:case hi:t="ENVMAP_TYPE_CUBE";break;case _s:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Uf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:t="ENVMAP_MODE_REFRACTION";break}return t}function Ff(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ga:t="ENVMAP_BLENDING_MULTIPLY";break;case yc:t="ENVMAP_BLENDING_MIX";break;case wc:t="ENVMAP_BLENDING_ADD";break}return t}function Nf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Of(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Df(e),l=If(e),d=Uf(e),h=Ff(e),f=Nf(e),p=Tf(e),g=Ef(r),v=s.createProgram();let m,u,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ri).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ri).join(`
`),u.length>0&&(u+=`
`)):(m=[na(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),u=[na(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==wn?yf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Sf("linearToOutputTexel",e.outputColorSpace),wf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ri).join(`
`)),a=Nr(a),a=Qo(a,e),a=ta(a,e),o=Nr(o),o=Qo(o,e),o=ta(o,e),a=ea(a),o=ea(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===po?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=w+m+a,M=w+u+o,U=$o(s,s.VERTEX_SHADER,T),A=$o(s,s.FRAGMENT_SHADER,M);s.attachShader(v,U),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(C){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(U).trim(),Y=s.getShaderInfoLog(A).trim();let X=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,U,A);else{const J=Jo(s,U,"vertex"),H=Jo(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+J+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||Y==="")&&(G=!1);G&&(C.diagnostics={runnable:X,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:u}})}s.deleteShader(U),s.deleteShader(A),P=new ms(s,v),y=bf(s,v)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,_f)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xf++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=A,this}let Bf=0;class zf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kf(t),e.set(t,n)),n}}class kf{constructor(t){this.id=Bf++,this.code=t,this.usedTimes=0}}function Gf(i,t,e,n,s,r,a){const o=new Fa,c=new zf,l=new Set,d=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,_,C,O,B){const Y=O.fog,X=B.geometry,G=y.isMeshStandardMaterial?O.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),H=J&&J.mapping===_s?J.image.height:null,rt=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,St=dt!==void 0?dt.length:0;let Ot=0;X.morphAttributes.position!==void 0&&(Ot=1),X.morphAttributes.normal!==void 0&&(Ot=2),X.morphAttributes.color!==void 0&&(Ot=3);let Jt,K,nt,xt;if(rt){const Zt=Ze[rt];Jt=Zt.vertexShader,K=Zt.fragmentShader}else Jt=y.vertexShader,K=y.fragmentShader,c.update(y),nt=c.getVertexShaderID(y),xt=c.getFragmentShaderID(y);const ot=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Pt=B.isInstancedMesh===!0,Bt=B.isBatchedMesh===!0,re=!!y.map,Ht=!!y.matcap,ce=!!J,F=!!y.aoMap,De=!!y.lightMap,kt=!!y.bumpMap,Gt=!!y.normalMap,Tt=!!y.displacementMap,ee=!!y.emissiveMap,wt=!!y.metalnessMap,E=!!y.roughnessMap,x=y.anisotropy>0,N=y.clearcoat>0,Z=y.dispersion>0,j=y.iridescence>0,q=y.sheen>0,vt=y.transmission>0,at=x&&!!y.anisotropyMap,ut=N&&!!y.clearcoatMap,Wt=N&&!!y.clearcoatNormalMap,tt=N&&!!y.clearcoatRoughnessMap,ft=j&&!!y.iridescenceMap,bt=j&&!!y.iridescenceThicknessMap,Ct=q&&!!y.sheenColorMap,pt=q&&!!y.sheenRoughnessMap,Vt=!!y.specularMap,Ut=!!y.specularColorMap,Qt=!!y.specularIntensityMap,L=vt&&!!y.transmissionMap,st=vt&&!!y.thicknessMap,V=!!y.gradientMap,$=!!y.alphaMap,ht=y.alphaTest>0,ct=!!y.alphaHash,Lt=!!y.extensions;let ae=wn;y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ae=i.toneMapping);const _e={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:Jt,fragmentShader:K,defines:y.defines,customVertexShaderID:nt,customFragmentShaderID:xt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&B._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&B.instanceColor!==null,instancingMorph:Pt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:pi,alphaToCoverage:!!y.alphaToCoverage,map:re,matcap:Ht,envMap:ce,envMapMode:ce&&J.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:De,bumpMap:kt,normalMap:Gt,displacementMap:f&&Tt,emissiveMap:ee,normalMapObjectSpace:Gt&&y.normalMapType===Ic,normalMapTangentSpace:Gt&&y.normalMapType===Ra,metalnessMap:wt,roughnessMap:E,anisotropy:x,anisotropyMap:at,clearcoat:N,clearcoatMap:ut,clearcoatNormalMap:Wt,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:j,iridescenceMap:ft,iridescenceThicknessMap:bt,sheen:q,sheenColorMap:Ct,sheenRoughnessMap:pt,specularMap:Vt,specularColorMap:Ut,specularIntensityMap:Qt,transmission:vt,transmissionMap:L,thicknessMap:st,gradientMap:V,opaque:y.transparent===!1&&y.blending===si&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ht,alphaHash:ct,combine:y.combine,mapUv:re&&v(y.map.channel),aoMapUv:F&&v(y.aoMap.channel),lightMapUv:De&&v(y.lightMap.channel),bumpMapUv:kt&&v(y.bumpMap.channel),normalMapUv:Gt&&v(y.normalMap.channel),displacementMapUv:Tt&&v(y.displacementMap.channel),emissiveMapUv:ee&&v(y.emissiveMap.channel),metalnessMapUv:wt&&v(y.metalnessMap.channel),roughnessMapUv:E&&v(y.roughnessMap.channel),anisotropyMapUv:at&&v(y.anisotropyMap.channel),clearcoatMapUv:ut&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&v(y.sheenRoughnessMap.channel),specularMapUv:Vt&&v(y.specularMap.channel),specularColorMapUv:Ut&&v(y.specularColorMap.channel),specularIntensityMapUv:Qt&&v(y.specularIntensityMap.channel),transmissionMapUv:L&&v(y.transmissionMap.channel),thicknessMapUv:st&&v(y.thicknessMap.channel),alphaMapUv:$&&v(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Gt||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(re||$),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:At,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ot,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:re&&y.map.isVideoTexture===!0&&Xt.getTransfer(y.map.colorSpace)===$t,decodeVideoTextureEmissive:ee&&y.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(y.emissiveMap.colorSpace)===$t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fe,flipSided:y.side===be,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Lt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&y.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function u(y){const _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)_.push(C),_.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(w(_,y),T(_,y),_.push(i.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function w(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function T(y,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const _=g[y.type];let C;if(_){const O=Ze[_];C=wl.clone(O.uniforms)}else C=y.uniforms;return C}function U(y,_){let C;for(let O=0,B=d.length;O<B;O++){const Y=d[O];if(Y.cacheKey===_){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new Of(i,_,y,r),d.push(C)),C}function A(y){if(--y.usedTimes===0){const _=d.indexOf(y);d[_]=d[d.length-1],d.pop(),y.destroy()}}function b(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:U,releaseProgram:A,releaseShaderCache:b,programs:d,dispose:P}}function Vf(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ia(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function sa(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,p,g,v,m){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=v,u.group=m),t++,u}function o(h,f,p,g,v,m){const u=a(h,f,p,g,v,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function c(h,f,p,g,v,m){const u=a(h,f,p,g,v,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function l(h,f){e.length>1&&e.sort(h||Hf),n.length>1&&n.sort(f||ia),s.length>1&&s.sort(f||ia)}function d(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:d,sort:l}}function Wf(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new sa,i.set(n,[a])):s>=r.length?(a=new sa,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Xf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Nt};break;case"SpotLight":e={position:new R,direction:new R,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Yf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let qf=0;function Kf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zf(i){const t=new Xf,e=Yf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new se,a=new se;function o(l){let d=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,v=0,m=0,u=0,w=0,T=0,M=0,U=0,A=0,b=0;l.sort(Kf);for(let y=0,_=l.length;y<_;y++){const C=l[y],O=C.color,B=C.intensity,Y=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=O.r*B,h+=O.g*B,f+=O.b*B;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],B);b++}else if(C.isDirectionalLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,H=e.get(C);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=C.shadow.matrix,w++}n.directional[p]=G,p++}else if(C.isSpotLight){const G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(O).multiplyScalar(B),G.distance=Y,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[v]=G;const J=C.shadow;if(C.map&&(n.spotLightMap[U]=C.map,U++,J.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[v]=J.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=X,M++}v++}else if(C.isRectAreaLight){const G=t.get(C);G.color.copy(O).multiplyScalar(B),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const J=C.shadow,H=e.get(C);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=C.shadow.matrix,T++}n.point[g]=G,g++}else if(C.isHemisphereLight){const G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(B),G.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[u]=G,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==w||P.numPointShadows!==T||P.numSpotShadows!==M||P.numSpotMaps!==U||P.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=w,P.numPointShadows=T,P.numSpotShadows=M,P.numSpotMaps=U,P.numLightProbes=b,n.version=qf++)}function c(l,d){let h=0,f=0,p=0,g=0,v=0;const m=d.matrixWorldInverse;for(let u=0,w=l.length;u<w;u++){const T=l[u];if(T.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(T.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function ra(i){const t=new Zf(i),e=[],n=[];function s(d){l.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function $f(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ra(i),t.set(s,[o])):r>=a.length?(o=new ra(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class jf extends _i{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jf extends _i{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Qf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ep(i,t,e){let n=new Yr;const s=new zt,r=new zt,a=new jt,o=new jf({depthPacking:Dc}),c=new Jf,l={},d=e.maxTextureSize,h={[Tn]:be,[be]:Tn,[Fe]:Fe},f=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Qf,fragmentShader:tp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Te;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Q(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pa;let u=this.type;this.render=function(A,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=i.getRenderTarget(),_=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(yn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=u!==rn&&this.type===rn,Y=u===rn&&this.type!==rn;for(let X=0,G=A.length;X<G;X++){const J=A[X],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const rt=H.getFrameExtents();if(s.multiply(rt),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/rt.x),s.x=r.x*rt.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/rt.y),s.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||B===!0||Y===!0){const St=this.type!==rn?{minFilter:We,magFilter:We}:{};H.map!==null&&H.map.dispose(),H.map=new kn(s.x,s.y,St),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const dt=H.getViewportCount();for(let St=0;St<dt;St++){const Ot=H.getViewport(St);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),O.viewport(a),H.updateMatrices(J,St),n=H.getFrustum(),M(b,P,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===rn&&w(H,P),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(y,_,C)};function w(A,b){const P=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(b,null,P,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(b,null,P,p,v,null)}function T(A,b,P,y){let _=null;const C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)_=C;else if(_=P.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=_.uuid,B=b.uuid;let Y=l[O];Y===void 0&&(Y={},l[O]=Y);let X=Y[B];X===void 0&&(X=_.clone(),Y[B]=X,b.addEventListener("dispose",U)),_=X}if(_.visible=b.visible,_.wireframe=b.wireframe,y===rn?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:h[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=i.properties.get(_);O.light=P}return _}function M(A,b,P,y,_){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const B=t.update(A),Y=A.material;if(Array.isArray(Y)){const X=B.groups;for(let G=0,J=X.length;G<J;G++){const H=X[G],rt=Y[H.materialIndex];if(rt&&rt.visible){const dt=T(A,rt,y,_);A.onBeforeShadow(i,A,b,P,B,dt,H),i.renderBufferDirect(P,null,B,dt,A,H),A.onAfterShadow(i,A,b,P,B,dt,H)}}}else if(Y.visible){const X=T(A,Y,y,_);A.onBeforeShadow(i,A,b,P,B,X,null),i.renderBufferDirect(P,null,B,X,A,null),A.onAfterShadow(i,A,b,P,B,X,null)}}const O=A.children;for(let B=0,Y=O.length;B<Y;B++)M(O[B],b,P,y,_)}function U(A){A.target.removeEventListener("dispose",U);for(const P in l){const y=l[P],_=A.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}const np={[tr]:er,[nr]:rr,[ir]:or,[ci]:sr,[er]:tr,[rr]:nr,[or]:ir,[sr]:ci};function ip(i,t){function e(){let L=!1;const st=new jt;let V=null;const $=new jt(0,0,0,0);return{setMask:function(ht){V!==ht&&!L&&(i.colorMask(ht,ht,ht,ht),V=ht)},setLocked:function(ht){L=ht},setClear:function(ht,ct,Lt,ae,_e){_e===!0&&(ht*=ae,ct*=ae,Lt*=ae),st.set(ht,ct,Lt,ae),$.equals(st)===!1&&(i.clearColor(ht,ct,Lt,ae),$.copy(st))},reset:function(){L=!1,V=null,$.set(-1,0,0,0)}}}function n(){let L=!1,st=!1,V=null,$=null,ht=null;return{setReversed:function(ct){if(st!==ct){const Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const ae=ht;ht=null,this.setClear(ae)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?ot(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(ct){V!==ct&&!L&&(i.depthMask(ct),V=ct)},setFunc:function(ct){if(st&&(ct=np[ct]),$!==ct){switch(ct){case tr:i.depthFunc(i.NEVER);break;case er:i.depthFunc(i.ALWAYS);break;case nr:i.depthFunc(i.LESS);break;case ci:i.depthFunc(i.LEQUAL);break;case ir:i.depthFunc(i.EQUAL);break;case sr:i.depthFunc(i.GEQUAL);break;case rr:i.depthFunc(i.GREATER);break;case or:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ct}},setLocked:function(ct){L=ct},setClear:function(ct){ht!==ct&&(st&&(ct=1-ct),i.clearDepth(ct),ht=ct)},reset:function(){L=!1,V=null,$=null,ht=null,st=!1}}}function s(){let L=!1,st=null,V=null,$=null,ht=null,ct=null,Lt=null,ae=null,_e=null;return{setTest:function(Zt){L||(Zt?ot(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(Zt){st!==Zt&&!L&&(i.stencilMask(Zt),st=Zt)},setFunc:function(Zt,Ne,je){(V!==Zt||$!==Ne||ht!==je)&&(i.stencilFunc(Zt,Ne,je),V=Zt,$=Ne,ht=je)},setOp:function(Zt,Ne,je){(ct!==Zt||Lt!==Ne||ae!==je)&&(i.stencilOp(Zt,Ne,je),ct=Zt,Lt=Ne,ae=je)},setLocked:function(Zt){L=Zt},setClear:function(Zt){_e!==Zt&&(i.clearStencil(Zt),_e=Zt)},reset:function(){L=!1,st=null,V=null,$=null,ht=null,ct=null,Lt=null,ae=null,_e=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let d={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,u=null,w=null,T=null,M=null,U=null,A=null,b=new Nt(0,0,0),P=0,y=!1,_=null,C=null,O=null,B=null,Y=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=J>=2);let rt=null,dt={};const St=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),Jt=new jt().fromArray(St),K=new jt().fromArray(Ot);function nt(L,st,V,$){const ht=new Uint8Array(4),ct=i.createTexture();i.bindTexture(L,ct),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<V;Lt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(st+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ct}const xt={};xt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(ci),kt(!1),Gt(ao),ot(i.CULL_FACE),F(yn);function ot(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function At(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Pt(L,st){return h[L]!==st?(i.bindFramebuffer(L,st),h[L]=st,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=st),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Bt(L,st){let V=p,$=!1;if(L){V=f.get(st),V===void 0&&(V=[],f.set(st,V));const ht=L.textures;if(V.length!==ht.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Lt=ht.length;ct<Lt;ct++)V[ct]=i.COLOR_ATTACHMENT0+ct;V.length=ht.length,$=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,$=!0);$&&i.drawBuffers(V)}function re(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const Ht={[Fn]:i.FUNC_ADD,[rc]:i.FUNC_SUBTRACT,[oc]:i.FUNC_REVERSE_SUBTRACT};Ht[ac]=i.MIN,Ht[cc]=i.MAX;const ce={[lc]:i.ZERO,[hc]:i.ONE,[dc]:i.SRC_COLOR,[Js]:i.SRC_ALPHA,[_c]:i.SRC_ALPHA_SATURATE,[mc]:i.DST_COLOR,[fc]:i.DST_ALPHA,[uc]:i.ONE_MINUS_SRC_COLOR,[Qs]:i.ONE_MINUS_SRC_ALPHA,[gc]:i.ONE_MINUS_DST_COLOR,[pc]:i.ONE_MINUS_DST_ALPHA,[xc]:i.CONSTANT_COLOR,[vc]:i.ONE_MINUS_CONSTANT_COLOR,[Mc]:i.CONSTANT_ALPHA,[Sc]:i.ONE_MINUS_CONSTANT_ALPHA};function F(L,st,V,$,ht,ct,Lt,ae,_e,Zt){if(L===yn){v===!0&&(At(i.BLEND),v=!1);return}if(v===!1&&(ot(i.BLEND),v=!0),L!==sc){if(L!==m||Zt!==y){if((u!==Fn||M!==Fn)&&(i.blendEquation(i.FUNC_ADD),u=Fn,M=Fn),Zt)switch(L){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case co:i.blendFunc(i.ONE,i.ONE);break;case lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ho:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case co:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ho:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,T=null,U=null,A=null,b.set(0,0,0),P=0,m=L,y=Zt}return}ht=ht||st,ct=ct||V,Lt=Lt||$,(st!==u||ht!==M)&&(i.blendEquationSeparate(Ht[st],Ht[ht]),u=st,M=ht),(V!==w||$!==T||ct!==U||Lt!==A)&&(i.blendFuncSeparate(ce[V],ce[$],ce[ct],ce[Lt]),w=V,T=$,U=ct,A=Lt),(ae.equals(b)===!1||_e!==P)&&(i.blendColor(ae.r,ae.g,ae.b,_e),b.copy(ae),P=_e),m=L,y=!1}function De(L,st){L.side===Fe?At(i.CULL_FACE):ot(i.CULL_FACE);let V=L.side===be;st&&(V=!V),kt(V),L.blending===si&&L.transparent===!1?F(yn):F(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const $=L.stencilWrite;o.setTest($),$&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(L){_!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),_=L)}function Gt(L){L!==nc?(ot(i.CULL_FACE),L!==C&&(L===ao?i.cullFace(i.BACK):L===ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),C=L}function Tt(L){L!==O&&(G&&i.lineWidth(L),O=L)}function ee(L,st,V){L?(ot(i.POLYGON_OFFSET_FILL),(B!==st||Y!==V)&&(i.polygonOffset(st,V),B=st,Y=V)):At(i.POLYGON_OFFSET_FILL)}function wt(L){L?ot(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function E(L){L===void 0&&(L=i.TEXTURE0+X-1),rt!==L&&(i.activeTexture(L),rt=L)}function x(L,st,V){V===void 0&&(rt===null?V=i.TEXTURE0+X-1:V=rt);let $=dt[V];$===void 0&&($={type:void 0,texture:void 0},dt[V]=$),($.type!==L||$.texture!==st)&&(rt!==V&&(i.activeTexture(V),rt=V),i.bindTexture(L,st||xt[L]),$.type=L,$.texture=st)}function N(){const L=dt[rt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(L){Jt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Jt.copy(L))}function pt(L){K.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function Vt(L,st){let V=l.get(st);V===void 0&&(V=new WeakMap,l.set(st,V));let $=V.get(L);$===void 0&&($=i.getUniformBlockIndex(st,L.name),V.set(L,$))}function Ut(L,st){const $=l.get(st).get(L);c.get(st)!==$&&(i.uniformBlockBinding(st,$,L.__bindingPointIndex),c.set(st,$))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},rt=null,dt={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,u=null,w=null,T=null,M=null,U=null,A=null,b=new Nt(0,0,0),P=0,y=!1,_=null,C=null,O=null,B=null,Y=null,Jt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:At,bindFramebuffer:Pt,drawBuffers:Bt,useProgram:re,setBlending:F,setMaterial:De,setFlipSided:kt,setCullFace:Gt,setLineWidth:Tt,setPolygonOffset:ee,setScissorTest:wt,activeTexture:E,bindTexture:x,unbindTexture:N,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:ft,texImage3D:bt,updateUBOMapping:Vt,uniformBlockBinding:Ut,texStorage2D:Wt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:Ct,viewport:pt,reset:Qt}}function oa(i,t,e,n){const s=sp(n);switch(e){case ya:return i*t;case Ta:return i*t;case Ea:return i*t*2;case ba:return i*t/s.components*s.byteLength;case Vr:return i*t/s.components*s.byteLength;case Aa:return i*t*2/s.components*s.byteLength;case Hr:return i*t*2/s.components*s.byteLength;case wa:return i*t*3/s.components*s.byteLength;case He:return i*t*4/s.components*s.byteLength;case Wr:return i*t*4/s.components*s.byteLength;case hs:case ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case us:case fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dr:case fr:return Math.max(i,16)*Math.max(t,8)/4;case hr:case ur:return Math.max(i,8)*Math.max(t,8)/2;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Mr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Sr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Tr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Er:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case br:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ar:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Cr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Rr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Pr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ps:case Lr:case Dr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ca:case Ir:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ur:case Fr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sp(i){switch(i){case un:case va:return{byteLength:1,components:1};case Di:case Ma:case Ni:return{byteLength:2,components:1};case kr:case Gr:return{byteLength:2,components:4};case zn:case zr:case ln:return{byteLength:4,components:1};case Sa:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function rp(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new zt,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return p?new OffscreenCanvas(E,x):Ui("canvas")}function v(E,x,N){let Z=1;const j=wt(E);if((j.width>N||j.height>N)&&(Z=N/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(Z*j.width),vt=Math.floor(Z*j.height);h===void 0&&(h=g(q,vt));const at=x?g(q,vt):h;return at.width=q,at.height=vt,at.getContext("2d").drawImage(E,0,0,q,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+vt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps}function u(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,x,N,Z,j=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=x;if(x===i.RED&&(N===i.FLOAT&&(q=i.R32F),N===i.HALF_FLOAT&&(q=i.R16F),N===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.R8UI),N===i.UNSIGNED_SHORT&&(q=i.R16UI),N===i.UNSIGNED_INT&&(q=i.R32UI),N===i.BYTE&&(q=i.R8I),N===i.SHORT&&(q=i.R16I),N===i.INT&&(q=i.R32I)),x===i.RG&&(N===i.FLOAT&&(q=i.RG32F),N===i.HALF_FLOAT&&(q=i.RG16F),N===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RG8UI),N===i.UNSIGNED_SHORT&&(q=i.RG16UI),N===i.UNSIGNED_INT&&(q=i.RG32UI),N===i.BYTE&&(q=i.RG8I),N===i.SHORT&&(q=i.RG16I),N===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(q=i.RGB16UI),N===i.UNSIGNED_INT&&(q=i.RGB32UI),N===i.BYTE&&(q=i.RGB8I),N===i.SHORT&&(q=i.RGB16I),N===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),N===i.UNSIGNED_INT&&(q=i.RGBA32UI),N===i.BYTE&&(q=i.RGBA8I),N===i.SHORT&&(q=i.RGBA16I),N===i.INT&&(q=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),x===i.RGBA){const vt=j?xs:Xt.getTransfer(Z);N===i.FLOAT&&(q=i.RGBA32F),N===i.HALF_FLOAT&&(q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(q=vt===$t?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function M(E,x){let N;return E?x===null||x===zn||x===di?N=i.DEPTH24_STENCIL8:x===ln?N=i.DEPTH32F_STENCIL8:x===Di&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zn||x===di?N=i.DEPTH_COMPONENT24:x===ln?N=i.DEPTH_COMPONENT32F:x===Di&&(N=i.DEPTH_COMPONENT16),N}function U(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==We&&E.minFilter!==$e?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function A(E){const x=E.target;x.removeEventListener("dispose",A),P(x),x.isVideoTexture&&d.delete(x)}function b(E){const x=E.target;x.removeEventListener("dispose",b),_(x)}function P(E){const x=n.get(E);if(x.__webglInit===void 0)return;const N=E.source,Z=f.get(N);if(Z){const j=Z[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(E),Object.keys(Z).length===0&&f.delete(N)}n.remove(E)}function y(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const N=E.source,Z=f.get(N);delete Z[x.__cacheKey],a.memory.textures--}function _(E){const x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let j=0;j<x.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=E.textures;for(let Z=0,j=N.length;Z<j;Z++){const q=n.get(N[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(N[Z])}n.remove(E)}let C=0;function O(){C=0}function B(){const E=C;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function Y(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function X(E,x){const N=n.get(E);if(E.isVideoTexture&&Tt(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(N,E,x);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function G(E,x){const N=n.get(E);if(E.version>0&&N.__version!==E.version){K(N,E,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function J(E,x){const N=n.get(E);if(E.version>0&&N.__version!==E.version){K(N,E,x);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function H(E,x){const N=n.get(E);if(E.version>0&&N.__version!==E.version){nt(N,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}const rt={[cn]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[lr]:i.MIRRORED_REPEAT},dt={[We]:i.NEAREST,[Pc]:i.NEAREST_MIPMAP_NEAREST,[Gi]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[ys]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},St={[Uc]:i.NEVER,[kc]:i.ALWAYS,[Fc]:i.LESS,[Pa]:i.LEQUAL,[Nc]:i.EQUAL,[zc]:i.GEQUAL,[Oc]:i.GREATER,[Bc]:i.NOTEQUAL};function Ot(E,x){if(x.type===ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===$e||x.magFilter===ys||x.magFilter===Gi||x.magFilter===Bn||x.minFilter===$e||x.minFilter===ys||x.minFilter===Gi||x.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,rt[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,rt[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,rt[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,dt[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,dt[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===We||x.minFilter!==Gi&&x.minFilter!==Bn||x.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Jt(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",A));const Z=x.source;let j=f.get(Z);j===void 0&&(j={},f.set(Z,j));const q=Y(x);if(q!==E.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[q].usedTimes++;const vt=j[E.__cacheKey];vt!==void 0&&(j[E.__cacheKey].usedTimes--,vt.usedTimes===0&&y(x)),E.__cacheKey=q,E.__webglTexture=j[q].texture}return N}function K(E,x,N){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const j=Jt(E,x),q=x.source;e.bindTexture(Z,E.__webglTexture,i.TEXTURE0+N);const vt=n.get(q);if(q.version!==vt.__version||j===!0){e.activeTexture(i.TEXTURE0+N);const at=Xt.getPrimaries(Xt.workingColorSpace),ut=x.colorSpace===Sn?null:Xt.getPrimaries(x.colorSpace),Wt=x.colorSpace===Sn||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let tt=v(x.image,!1,s.maxTextureSize);tt=ee(x,tt);const ft=r.convert(x.format,x.colorSpace),bt=r.convert(x.type);let Ct=T(x.internalFormat,ft,bt,x.colorSpace,x.isVideoTexture);Ot(Z,x);let pt;const Vt=x.mipmaps,Ut=x.isVideoTexture!==!0,Qt=vt.__version===void 0||j===!0,L=q.dataReady,st=U(x,tt);if(x.isDepthTexture)Ct=M(x.format===ui,x.type),Qt&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,ft,bt,null));else if(x.isDataTexture)if(Vt.length>0){Ut&&Qt&&e.texStorage2D(i.TEXTURE_2D,st,Ct,Vt[0].width,Vt[0].height);for(let V=0,$=Vt.length;V<$;V++)pt=Vt[V],Ut?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,bt,pt.data):e.texImage2D(i.TEXTURE_2D,V,Ct,pt.width,pt.height,0,ft,bt,pt.data);x.generateMipmaps=!1}else Ut?(Qt&&e.texStorage2D(i.TEXTURE_2D,st,Ct,tt.width,tt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,ft,bt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,ft,bt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ut&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Ct,Vt[0].width,Vt[0].height,tt.depth);for(let V=0,$=Vt.length;V<$;V++)if(pt=Vt[V],x.format!==He)if(ft!==null)if(Ut){if(L)if(x.layerUpdates.size>0){const ht=oa(pt.width,pt.height,x.format,x.type);for(const ct of x.layerUpdates){const Lt=pt.data.subarray(ct*ht/pt.data.BYTES_PER_ELEMENT,(ct+1)*ht/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ct,pt.width,pt.height,1,ft,Lt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,tt.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Ct,pt.width,pt.height,tt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,tt.depth,ft,bt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Ct,pt.width,pt.height,tt.depth,0,ft,bt,pt.data)}else{Ut&&Qt&&e.texStorage2D(i.TEXTURE_2D,st,Ct,Vt[0].width,Vt[0].height);for(let V=0,$=Vt.length;V<$;V++)pt=Vt[V],x.format!==He?ft!==null?Ut?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Ct,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,bt,pt.data):e.texImage2D(i.TEXTURE_2D,V,Ct,pt.width,pt.height,0,ft,bt,pt.data)}else if(x.isDataArrayTexture)if(Ut){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Ct,tt.width,tt.height,tt.depth),L)if(x.layerUpdates.size>0){const V=oa(tt.width,tt.height,x.format,x.type);for(const $ of x.layerUpdates){const ht=tt.data.subarray($*V/tt.data.BYTES_PER_ELEMENT,($+1)*V/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,ft,bt,ht)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ft,bt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,ft,bt,tt.data);else if(x.isData3DTexture)Ut?(Qt&&e.texStorage3D(i.TEXTURE_3D,st,Ct,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ft,bt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,ft,bt,tt.data);else if(x.isFramebufferTexture){if(Qt)if(Ut)e.texStorage2D(i.TEXTURE_2D,st,Ct,tt.width,tt.height);else{let V=tt.width,$=tt.height;for(let ht=0;ht<st;ht++)e.texImage2D(i.TEXTURE_2D,ht,Ct,V,$,0,ft,bt,null),V>>=1,$>>=1}}else if(Vt.length>0){if(Ut&&Qt){const V=wt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,st,Ct,V.width,V.height)}for(let V=0,$=Vt.length;V<$;V++)pt=Vt[V],Ut?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ft,bt,pt):e.texImage2D(i.TEXTURE_2D,V,Ct,ft,bt,pt);x.generateMipmaps=!1}else if(Ut){if(Qt){const V=wt(tt);e.texStorage2D(i.TEXTURE_2D,st,Ct,V.width,V.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,bt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,ft,bt,tt);m(x)&&u(Z),vt.__version=q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function nt(E,x,N){if(x.image.length!==6)return;const Z=Jt(E,x),j=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);const q=n.get(j);if(j.version!==q.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);const vt=Xt.getPrimaries(Xt.workingColorSpace),at=x.colorSpace===Sn?null:Xt.getPrimaries(x.colorSpace),ut=x.colorSpace===Sn||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Wt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!Wt&&!tt?ft[$]=v(x.image[$],!0,s.maxCubemapSize):ft[$]=tt?x.image[$].image:x.image[$],ft[$]=ee(x,ft[$]);const bt=ft[0],Ct=r.convert(x.format,x.colorSpace),pt=r.convert(x.type),Vt=T(x.internalFormat,Ct,pt,x.colorSpace),Ut=x.isVideoTexture!==!0,Qt=q.__version===void 0||Z===!0,L=j.dataReady;let st=U(x,bt);Ot(i.TEXTURE_CUBE_MAP,x);let V;if(Wt){Ut&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Vt,bt.width,bt.height);for(let $=0;$<6;$++){V=ft[$].mipmaps;for(let ht=0;ht<V.length;ht++){const ct=V[ht];x.format!==He?Ct!==null?Ut?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,Vt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,ct.width,ct.height,Ct,pt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,Vt,ct.width,ct.height,0,Ct,pt,ct.data)}}}else{if(V=x.mipmaps,Ut&&Qt){V.length>0&&st++;const $=wt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Vt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,Ct,pt,ft[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,ft[$].width,ft[$].height,0,Ct,pt,ft[$].data);for(let ht=0;ht<V.length;ht++){const Lt=V[ht].image[$].image;Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,Lt.width,Lt.height,Ct,pt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,Vt,Lt.width,Lt.height,0,Ct,pt,Lt.data)}}else{Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ct,pt,ft[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,Ct,pt,ft[$]);for(let ht=0;ht<V.length;ht++){const ct=V[ht];Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,Ct,pt,ct.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,Vt,Ct,pt,ct.image[$])}}}m(x)&&u(i.TEXTURE_CUBE_MAP),q.__version=j.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function xt(E,x,N,Z,j,q){const vt=r.convert(N.format,N.colorSpace),at=r.convert(N.type),ut=T(N.internalFormat,vt,at,N.colorSpace),Wt=n.get(x),tt=n.get(N);if(tt.__renderTarget=x,!Wt.__hasExternalTextures){const ft=Math.max(1,x.width>>q),bt=Math.max(1,x.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,q,ut,ft,bt,x.depth,0,vt,at,null):e.texImage2D(j,q,ut,ft,bt,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,tt.__webglTexture,0,kt(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,tt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(E,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){const Z=x.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,q=M(x.stencilBuffer,j),vt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=kt(x);Gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,q,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,E)}else{const Z=x.textures;for(let j=0;j<Z.length;j++){const q=Z[j],vt=r.convert(q.format,q.colorSpace),at=r.convert(q.type),ut=T(q.internalFormat,vt,at,q.colorSpace),Wt=kt(x);N&&Gt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ut,x.width,x.height):Gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const j=Z.__webglTexture,q=kt(x);if(x.depthTexture.format===ri)Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(x.depthTexture.format===ui)Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pt(E){const x=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const Z=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=Z}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");At(x.__webglFramebuffer,E)}else if(N){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),ot(x.__webglDepthbuffer[Z],E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ot(x.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(E,x,N){const Z=n.get(E);x!==void 0&&xt(Z.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Pt(E)}function re(E){const x=E.texture,N=n.get(E),Z=n.get(x);E.addEventListener("dispose",b);const j=E.textures,q=E.isWebGLCubeRenderTarget===!0,vt=j.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++),q){N.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[at]=[];for(let ut=0;ut<x.mipmaps.length;ut++)N.__webglFramebuffer[at][ut]=i.createFramebuffer()}else N.__webglFramebuffer[at]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)N.__webglFramebuffer[at]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,ut=j.length;at<ut;at++){const Wt=n.get(j[at]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Gt(E)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const ut=j[at];N.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[at]);const Wt=r.convert(ut.format,ut.colorSpace),tt=r.convert(ut.type),ft=T(ut.internalFormat,Wt,tt,ut.colorSpace,E.isXRRenderTarget===!0),bt=kt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,ft,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,N.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(N.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)xt(N.__webglFramebuffer[at][ut],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else xt(N.__webglFramebuffer[at],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(x)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ut=j.length;at<ut;at++){const Wt=j[at],tt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Ot(i.TEXTURE_2D,Wt),xt(N.__webglFramebuffer,E,Wt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Wt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),Ot(at,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)xt(N.__webglFramebuffer[ut],E,x,i.COLOR_ATTACHMENT0,at,ut);else xt(N.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,at,0);m(x)&&u(at),e.unbindTexture()}E.depthBuffer&&Pt(E)}function Ht(E){const x=E.textures;for(let N=0,Z=x.length;N<Z;N++){const j=x[N];if(m(j)){const q=w(E),vt=n.get(j).__webglTexture;e.bindTexture(q,vt),u(q),e.unbindTexture()}}}const ce=[],F=[];function De(E){if(E.samples>0){if(Gt(E)===!1){const x=E.textures,N=E.width,Z=E.height;let j=i.COLOR_BUFFER_BIT;const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(E),at=x.length>1;if(at)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const Wt=n.get(x[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,N,Z,0,0,N,Z,j,i.NEAREST),c===!0&&(ce.length=0,F.length=0,ce.push(i.COLOR_ATTACHMENT0+ut),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ce.push(q),F.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const Wt=n.get(x[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function kt(E){return Math.min(s.maxSamples,E.samples)}function Gt(E){const x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(E){const x=a.render.frame;d.get(E)!==x&&(d.set(E,x),E.update())}function ee(E,x){const N=E.colorSpace,Z=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==pi&&N!==Sn&&(Xt.getTransfer(N)===$t?(Z!==He||j!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function wt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=Bt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Gt}function op(i,t){function e(n,s=Sn){let r;const a=Xt.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===kr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===va)return i.BYTE;if(n===Ma)return i.SHORT;if(n===Di)return i.UNSIGNED_SHORT;if(n===zr)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===Ni)return i.HALF_FLOAT;if(n===ya)return i.ALPHA;if(n===wa)return i.RGB;if(n===He)return i.RGBA;if(n===Ta)return i.LUMINANCE;if(n===Ea)return i.LUMINANCE_ALPHA;if(n===ri)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===ba)return i.RED;if(n===Vr)return i.RED_INTEGER;if(n===Aa)return i.RG;if(n===Hr)return i.RG_INTEGER;if(n===Wr)return i.RGBA_INTEGER;if(n===hs||n===ds||n===us||n===fs)if(a===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ds)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===us)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hr||n===dr||n===ur||n===fr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ur)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pr||n===mr||n===gr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pr||n===mr)return a===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_r||n===xr||n===vr||n===Mr||n===Sr||n===yr||n===wr||n===Tr||n===Er||n===br||n===Ar||n===Cr||n===Rr||n===Pr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_r)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Er)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===br)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ar)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ps||n===Lr||n===Dr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ps)return a===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ca||n===Ir||n===Ur||n===Fr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ps)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ir)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ap extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class de extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cp={type:"move"};class Zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),u=this._getHandJoint(l,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const lp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Se,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new En({vertexShader:lp,fragmentShader:hp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new Ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class up extends mi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,f=null,p=null,g=null;const v=new dp,m=e.getContextAttributes();let u=null,w=null;const T=[],M=[],U=new zt;let A=null;const b=new Le;b.viewport=new jt;const P=new Le;P.viewport=new jt;const y=[b,P],_=new ap;let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let nt=T[K];return nt===void 0&&(nt=new Zs,T[K]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(K){let nt=T[K];return nt===void 0&&(nt=new Zs,T[K]=nt),nt.getGripSpace()},this.getHand=function(K){let nt=T[K];return nt===void 0&&(nt=new Zs,T[K]=nt),nt.getHandSpace()};function B(K){const nt=M.indexOf(K.inputSource);if(nt===-1)return;const xt=T[nt];xt!==void 0&&(xt.update(K.inputSource,K.frame,l||a),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",X);for(let K=0;K<T.length;K++){const nt=M[K];nt!==null&&(M[K]=null,T[K].disconnect(nt))}C=null,O=null,v.reset(),t.setRenderTarget(u),p=null,f=null,h=null,s=null,w=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new kn(p.framebufferWidth,p.framebufferHeight,{format:He,type:un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,xt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?ui:ri,xt=m.stencil?di:zn);const At={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new kn(f.textureWidth,f.textureHeight,{format:He,type:un,depthTexture:new Wa(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(K){for(let nt=0;nt<K.removed.length;nt++){const xt=K.removed[nt],ot=M.indexOf(xt);ot>=0&&(M[ot]=null,T[ot].disconnect(xt))}for(let nt=0;nt<K.added.length;nt++){const xt=K.added[nt];let ot=M.indexOf(xt);if(ot===-1){for(let Pt=0;Pt<T.length;Pt++)if(Pt>=M.length){M.push(xt),ot=Pt;break}else if(M[Pt]===null){M[Pt]=xt,ot=Pt;break}if(ot===-1)break}const At=T[ot];At&&At.connect(xt)}}const G=new R,J=new R;function H(K,nt,xt){G.setFromMatrixPosition(nt.matrixWorld),J.setFromMatrixPosition(xt.matrixWorld);const ot=G.distanceTo(J),At=nt.projectionMatrix.elements,Pt=xt.projectionMatrix.elements,Bt=At[14]/(At[10]-1),re=At[14]/(At[10]+1),Ht=(At[9]+1)/At[5],ce=(At[9]-1)/At[5],F=(At[8]-1)/At[0],De=(Pt[8]+1)/Pt[0],kt=Bt*F,Gt=Bt*De,Tt=ot/(-F+De),ee=Tt*-F;if(nt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ee),K.translateZ(Tt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),At[10]===-1)K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const wt=Bt+Tt,E=re+Tt,x=kt-ee,N=Gt+(ot-ee),Z=Ht*re/E*wt,j=ce*re/E*wt;K.projectionMatrix.makePerspective(x,N,Z,j,wt,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function rt(K,nt){nt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(nt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let nt=K.near,xt=K.far;v.texture!==null&&(v.depthNear>0&&(nt=v.depthNear),v.depthFar>0&&(xt=v.depthFar)),_.near=P.near=b.near=nt,_.far=P.far=b.far=xt,(C!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,O=_.far),b.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,_.layers.mask=b.layers.mask|P.layers.mask;const ot=K.parent,At=_.cameras;rt(_,ot);for(let Pt=0;Pt<At.length;Pt++)rt(At[Pt],ot);At.length===2?H(_,b,P):_.projectionMatrix.copy(b.projectionMatrix),dt(K,_,ot)};function dt(K,nt,xt){xt===null?K.matrix.copy(nt.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(nt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ii*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let St=null;function Ot(K,nt){if(d=nt.getViewerPose(l||a),g=nt,d!==null){const xt=d.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let ot=!1;xt.length!==_.cameras.length&&(_.cameras.length=0,ot=!0);for(let Pt=0;Pt<xt.length;Pt++){const Bt=xt[Pt];let re=null;if(p!==null)re=p.getViewport(Bt);else{const ce=h.getViewSubImage(f,Bt);re=ce.viewport,Pt===0&&(t.setRenderTargetTextures(w,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(w))}let Ht=y[Pt];Ht===void 0&&(Ht=new Le,Ht.layers.enable(Pt),Ht.viewport=new jt,y[Pt]=Ht),Ht.matrix.fromArray(Bt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Bt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(re.x,re.y,re.width,re.height),Pt===0&&(_.matrix.copy(Ht.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ot===!0&&_.cameras.push(Ht)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Pt=h.getDepthInformation(xt[0]);Pt&&Pt.isValid&&Pt.texture&&v.init(t,Pt,s.renderState)}}for(let xt=0;xt<T.length;xt++){const ot=M[xt],At=T[xt];ot!==null&&At!==void 0&&At.update(ot,nt,l||a)}St&&St(K,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Jt=new Va;Jt.setAnimationLoop(Ot),this.setAnimationLoop=function(K){St=K},this.dispose=function(){}}}const Dn=new Ye,fp=new se;function pp(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,za(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,w,T,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),h(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,w,T):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===be&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===be&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const w=t.get(u),T=w.envMap,M=w.envMapRotation;T&&(m.envMap.value=T,Dn.copy(M),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),m.envMapRotation.value.setFromMatrix4(fp.makeRotationFromEuler(Dn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,w,T){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=T*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===be&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const w=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mp(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,T){const M=T.program;n.uniformBlockBinding(w,M)}function l(w,T){let M=s[w.id];M===void 0&&(g(w),M=d(w),s[w.id]=M,w.addEventListener("dispose",m));const U=T.program;n.updateUBOMapping(w,U);const A=t.render.frame;r[w.id]!==A&&(f(w),r[w.id]=A)}function d(w){const T=h();w.__bindingPointIndex=T;const M=i.createBuffer(),U=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,U,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const T=s[w.id],M=w.uniforms,U=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,b=M.length;A<b;A++){const P=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,_=P.length;y<_;y++){const C=P[y];if(p(C,A,y,U)===!0){const O=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let X=0;X<B.length;X++){const G=B[X],J=v(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+Y,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,T,M,U){const A=w.value,b=T+"_"+M;if(U[b]===void 0)return typeof A=="number"||typeof A=="boolean"?U[b]=A:U[b]=A.clone(),!0;{const P=U[b];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return U[b]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(w){const T=w.uniforms;let M=0;const U=16;for(let b=0,P=T.length;b<P;b++){const y=Array.isArray(T[b])?T[b]:[T[b]];for(let _=0,C=y.length;_<C;_++){const O=y[_],B=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,X=B.length;Y<X;Y++){const G=B[Y],J=v(G),H=M%U,rt=H%J.boundary,dt=H+rt;M+=rt,dt!==0&&U-dt<J.storage&&(M+=U-dt),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=J.storage}}}const A=M%U;return A>0&&(M+=U-A),w.__size=M,w.__cache={},this}function v(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function u(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}class gp{constructor(t={}){const{canvas:e=il(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const w=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=wn,this.toneMappingExposure=1;const M=this;let U=!1,A=0,b=0,P=null,y=-1,_=null;const C=new jt,O=new jt;let B=null;const Y=new Nt(0);let X=0,G=e.width,J=e.height,H=1,rt=null,dt=null;const St=new jt(0,0,G,J),Ot=new jt(0,0,G,J);let Jt=!1;const K=new Yr;let nt=!1,xt=!1;const ot=new se,At=new se,Pt=new R,Bt=new jt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function ce(){return P===null?H:1}let F=n;function De(S,D){return e.getContext(S,D)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Br}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),F===null){const D="webgl2";if(F=De(D,S),F===null)throw De(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let kt,Gt,Tt,ee,wt,E,x,N,Z,j,q,vt,at,ut,Wt,tt,ft,bt,Ct,pt,Vt,Ut,Qt,L;function st(){kt=new Mu(F),kt.init(),Ut=new op(F,kt),Gt=new pu(F,kt,t,Ut),Tt=new ip(F,kt),Gt.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),ee=new wu(F),wt=new Vf,E=new rp(F,kt,Tt,wt,Gt,Ut,ee),x=new gu(M),N=new vu(M),Z=new Pl(F),Qt=new uu(F,Z),j=new Su(F,Z,ee,Qt),q=new Eu(F,j,Z,ee),Ct=new Tu(F,Gt,E),tt=new mu(wt),vt=new Gf(M,x,N,kt,Gt,Qt,tt),at=new pp(M,wt),ut=new Wf,Wt=new $f(kt),bt=new du(M,x,N,Tt,q,p,c),ft=new ep(M,q,Gt),L=new mp(F,ee,Gt,Tt),pt=new fu(F,kt,ee),Vt=new yu(F,kt,ee),ee.programs=vt.programs,M.capabilities=Gt,M.extensions=kt,M.properties=wt,M.renderLists=ut,M.shadowMap=ft,M.state=Tt,M.info=ee}st();const V=new up(M,F);this.xr=V,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=kt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=kt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(G,J,!1))},this.getSize=function(S){return S.set(G,J)},this.setSize=function(S,D,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,J=D,e.width=Math.floor(S*H),e.height=Math.floor(D*H),z===!0&&(e.style.width=S+"px",e.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(G*H,J*H).floor()},this.setDrawingBufferSize=function(S,D,z){G=S,J=D,H=z,e.width=Math.floor(S*z),e.height=Math.floor(D*z),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(St)},this.setViewport=function(S,D,z,k){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,D,z,k),Tt.viewport(C.copy(St).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Ot)},this.setScissor=function(S,D,z,k){S.isVector4?Ot.set(S.x,S.y,S.z,S.w):Ot.set(S,D,z,k),Tt.scissor(O.copy(Ot).multiplyScalar(H).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(S){Tt.setScissorTest(Jt=S)},this.setOpaqueSort=function(S){rt=S},this.setTransparentSort=function(S){dt=S},this.getClearColor=function(S){return S.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(S=!0,D=!0,z=!0){let k=0;if(S){let I=!1;if(P!==null){const et=P.texture.format;I=et===Wr||et===Hr||et===Vr}if(I){const et=P.texture.type,lt=et===un||et===zn||et===Di||et===di||et===kr||et===Gr,mt=bt.getClearColor(),gt=bt.getClearAlpha(),Rt=mt.r,Dt=mt.g,_t=mt.b;lt?(g[0]=Rt,g[1]=Dt,g[2]=_t,g[3]=gt,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Rt,v[1]=Dt,v[2]=_t,v[3]=gt,F.clearBufferiv(F.COLOR,0,v))}else k|=F.COLOR_BUFFER_BIT}D&&(k|=F.DEPTH_BUFFER_BIT),z&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ut.dispose(),Wt.dispose(),wt.dispose(),x.dispose(),N.dispose(),q.dispose(),Qt.dispose(),L.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Qr),V.removeEventListener("sessionend",to),bn.stop()};function $(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=ee.autoReset,D=ft.enabled,z=ft.autoUpdate,k=ft.needsUpdate,I=ft.type;st(),ee.autoReset=S,ft.enabled=D,ft.autoUpdate=z,ft.needsUpdate=k,ft.type=I}function ct(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Lt(S){const D=S.target;D.removeEventListener("dispose",Lt),ae(D)}function ae(S){_e(S),wt.remove(S)}function _e(S){const D=wt.get(S).programs;D!==void 0&&(D.forEach(function(z){vt.releaseProgram(z)}),S.isShaderMaterial&&vt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,z,k,I,et){D===null&&(D=re);const lt=I.isMesh&&I.matrixWorld.determinant()<0,mt=ja(S,D,z,k,I);Tt.setMaterial(k,lt);let gt=z.index,Rt=1;if(k.wireframe===!0){if(gt=j.getWireframeAttribute(z),gt===void 0)return;Rt=2}const Dt=z.drawRange,_t=z.attributes.position;let Yt=Dt.start*Rt,te=(Dt.start+Dt.count)*Rt;et!==null&&(Yt=Math.max(Yt,et.start*Rt),te=Math.min(te,(et.start+et.count)*Rt)),gt!==null?(Yt=Math.max(Yt,0),te=Math.min(te,gt.count)):_t!=null&&(Yt=Math.max(Yt,0),te=Math.min(te,_t.count));const ne=te-Yt;if(ne<0||ne===1/0)return;Qt.setup(I,k,mt,z,gt);let Ee,qt=pt;if(gt!==null&&(Ee=Z.get(gt),qt=Vt,qt.setIndex(Ee)),I.isMesh)k.wireframe===!0?(Tt.setLineWidth(k.wireframeLinewidth*ce()),qt.setMode(F.LINES)):qt.setMode(F.TRIANGLES);else if(I.isLine){let Mt=k.linewidth;Mt===void 0&&(Mt=1),Tt.setLineWidth(Mt*ce()),I.isLineSegments?qt.setMode(F.LINES):I.isLineLoop?qt.setMode(F.LINE_LOOP):qt.setMode(F.LINE_STRIP)}else I.isPoints?qt.setMode(F.POINTS):I.isSprite&&qt.setMode(F.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)qt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))qt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Mt=I._multiDrawStarts,Je=I._multiDrawCounts,Kt=I._multiDrawCount,Oe=gt?Z.get(gt).bytesPerElement:1,Gn=wt.get(k).currentProgram.getUniforms();for(let Ae=0;Ae<Kt;Ae++)Gn.setValue(F,"_gl_DrawID",Ae),qt.render(Mt[Ae]/Oe,Je[Ae])}else if(I.isInstancedMesh)qt.renderInstances(Yt,ne,I.count);else if(z.isInstancedBufferGeometry){const Mt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Je=Math.min(z.instanceCount,Mt);qt.renderInstances(Yt,ne,Je)}else qt.render(Yt,ne)};function Zt(S,D,z){S.transparent===!0&&S.side===Fe&&S.forceSinglePass===!1?(S.side=be,S.needsUpdate=!0,ki(S,D,z),S.side=Tn,S.needsUpdate=!0,ki(S,D,z),S.side=Fe):ki(S,D,z)}this.compile=function(S,D,z=null){z===null&&(z=S),u=Wt.get(z),u.init(D),T.push(u),z.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),S!==z&&S.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();const k=new Set;return S.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const et=I.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){const mt=et[lt];Zt(mt,z,I),k.add(mt)}else Zt(et,z,I),k.add(et)}),T.pop(),u=null,k},this.compileAsync=function(S,D,z=null){const k=this.compile(S,D,z);return new Promise(I=>{function et(){if(k.forEach(function(lt){wt.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){I(S);return}setTimeout(et,10)}kt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ne=null;function je(S){Ne&&Ne(S)}function Qr(){bn.stop()}function to(){bn.start()}const bn=new Va;bn.setAnimationLoop(je),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(S){Ne=S,V.setAnimationLoop(S),S===null?bn.stop():bn.start()},V.addEventListener("sessionstart",Qr),V.addEventListener("sessionend",to),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,D,P),u=Wt.get(S,T.length),u.init(D),T.push(u),At.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),K.setFromProjectionMatrix(At),xt=this.localClippingEnabled,nt=tt.init(this.clippingPlanes,xt),m=ut.get(S,w.length),m.init(),w.push(m),V.enabled===!0&&V.isPresenting===!0){const et=M.xr.getDepthSensingMesh();et!==null&&Ss(et,D,-1/0,M.sortObjects)}Ss(S,D,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(rt,dt),Ht=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ht&&bt.addToRenderList(m,S),this.info.render.frame++,nt===!0&&tt.beginShadows();const z=u.state.shadowsArray;ft.render(z,S,D),nt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,I=m.transmissive;if(u.setupLights(),D.isArrayCamera){const et=D.cameras;if(I.length>0)for(let lt=0,mt=et.length;lt<mt;lt++){const gt=et[lt];no(k,I,S,gt)}Ht&&bt.render(S);for(let lt=0,mt=et.length;lt<mt;lt++){const gt=et[lt];eo(m,S,gt,gt.viewport)}}else I.length>0&&no(k,I,S,D),Ht&&bt.render(S),eo(m,S,D);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(M,S,D),Qt.resetDefaultState(),y=-1,_=null,T.pop(),T.length>0?(u=T[T.length-1],nt===!0&&tt.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ss(S,D,z,k){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){k&&Bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(At);const lt=q.update(S),mt=S.material;mt.visible&&m.push(S,lt,mt,z,Bt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const lt=q.update(S),mt=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Bt.copy(S.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Bt.copy(lt.boundingSphere.center)),Bt.applyMatrix4(S.matrixWorld).applyMatrix4(At)),Array.isArray(mt)){const gt=lt.groups;for(let Rt=0,Dt=gt.length;Rt<Dt;Rt++){const _t=gt[Rt],Yt=mt[_t.materialIndex];Yt&&Yt.visible&&m.push(S,lt,Yt,z,Bt.z,_t)}}else mt.visible&&m.push(S,lt,mt,z,Bt.z,null)}}const et=S.children;for(let lt=0,mt=et.length;lt<mt;lt++)Ss(et[lt],D,z,k)}function eo(S,D,z,k){const I=S.opaque,et=S.transmissive,lt=S.transparent;u.setupLightsView(z),nt===!0&&tt.setGlobalState(M.clippingPlanes,z),k&&Tt.viewport(C.copy(k)),I.length>0&&zi(I,D,z),et.length>0&&zi(et,D,z),lt.length>0&&zi(lt,D,z),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function no(S,D,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[k.id]===void 0&&(u.state.transmissionRenderTarget[k.id]=new kn(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Ni:un,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const et=u.state.transmissionRenderTarget[k.id],lt=k.viewport||C;et.setSize(lt.z,lt.w);const mt=M.getRenderTarget();M.setRenderTarget(et),M.getClearColor(Y),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),Ht&&bt.render(z);const gt=M.toneMapping;M.toneMapping=wn;const Rt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),u.setupLightsView(k),nt===!0&&tt.setGlobalState(M.clippingPlanes,k),zi(S,z,k),E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let _t=0,Yt=D.length;_t<Yt;_t++){const te=D[_t],ne=te.object,Ee=te.geometry,qt=te.material,Mt=te.group;if(qt.side===Fe&&ne.layers.test(k.layers)){const Je=qt.side;qt.side=be,qt.needsUpdate=!0,io(ne,z,k,Ee,qt,Mt),qt.side=Je,qt.needsUpdate=!0,Dt=!0}}Dt===!0&&(E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et))}M.setRenderTarget(mt),M.setClearColor(Y,X),Rt!==void 0&&(k.viewport=Rt),M.toneMapping=gt}function zi(S,D,z){const k=D.isScene===!0?D.overrideMaterial:null;for(let I=0,et=S.length;I<et;I++){const lt=S[I],mt=lt.object,gt=lt.geometry,Rt=k===null?lt.material:k,Dt=lt.group;mt.layers.test(z.layers)&&io(mt,D,z,gt,Rt,Dt)}}function io(S,D,z,k,I,et){S.onBeforeRender(M,D,z,k,I,et),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(M,D,z,k,S,et),I.transparent===!0&&I.side===Fe&&I.forceSinglePass===!1?(I.side=be,I.needsUpdate=!0,M.renderBufferDirect(z,D,k,I,S,et),I.side=Tn,I.needsUpdate=!0,M.renderBufferDirect(z,D,k,I,S,et),I.side=Fe):M.renderBufferDirect(z,D,k,I,S,et),S.onAfterRender(M,D,z,k,I,et)}function ki(S,D,z){D.isScene!==!0&&(D=re);const k=wt.get(S),I=u.state.lights,et=u.state.shadowsArray,lt=I.state.version,mt=vt.getParameters(S,I.state,et,D,z),gt=vt.getProgramCacheKey(mt);let Rt=k.programs;k.environment=S.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(S.isMeshStandardMaterial?N:x).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Rt===void 0&&(S.addEventListener("dispose",Lt),Rt=new Map,k.programs=Rt);let Dt=Rt.get(gt);if(Dt!==void 0){if(k.currentProgram===Dt&&k.lightsStateVersion===lt)return ro(S,mt),Dt}else mt.uniforms=vt.getUniforms(S),S.onBeforeCompile(mt,M),Dt=vt.acquireProgram(mt,gt),Rt.set(gt,Dt),k.uniforms=mt.uniforms;const _t=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(_t.clippingPlanes=tt.uniform),ro(S,mt),k.needsLights=Qa(S),k.lightsStateVersion=lt,k.needsLights&&(_t.ambientLightColor.value=I.state.ambient,_t.lightProbe.value=I.state.probe,_t.directionalLights.value=I.state.directional,_t.directionalLightShadows.value=I.state.directionalShadow,_t.spotLights.value=I.state.spot,_t.spotLightShadows.value=I.state.spotShadow,_t.rectAreaLights.value=I.state.rectArea,_t.ltc_1.value=I.state.rectAreaLTC1,_t.ltc_2.value=I.state.rectAreaLTC2,_t.pointLights.value=I.state.point,_t.pointLightShadows.value=I.state.pointShadow,_t.hemisphereLights.value=I.state.hemi,_t.directionalShadowMap.value=I.state.directionalShadowMap,_t.directionalShadowMatrix.value=I.state.directionalShadowMatrix,_t.spotShadowMap.value=I.state.spotShadowMap,_t.spotLightMatrix.value=I.state.spotLightMatrix,_t.spotLightMap.value=I.state.spotLightMap,_t.pointShadowMap.value=I.state.pointShadowMap,_t.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Dt,k.uniformsList=null,Dt}function so(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=ms.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function ro(S,D){const z=wt.get(S);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function ja(S,D,z,k,I){D.isScene!==!0&&(D=re),E.resetTextureUnits();const et=D.fog,lt=k.isMeshStandardMaterial?D.environment:null,mt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:pi,gt=(k.isMeshStandardMaterial?N:x).get(k.envMap||lt),Rt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),_t=!!z.morphAttributes.position,Yt=!!z.morphAttributes.normal,te=!!z.morphAttributes.color;let ne=wn;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ne=M.toneMapping);const Ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,qt=Ee!==void 0?Ee.length:0,Mt=wt.get(k),Je=u.state.lights;if(nt===!0&&(xt===!0||S!==_)){const Ie=S===_&&k.id===y;tt.setState(k,S,Ie)}let Kt=!1;k.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Je.state.version||Mt.outputColorSpace!==mt||I.isBatchedMesh&&Mt.batching===!1||!I.isBatchedMesh&&Mt.batching===!0||I.isBatchedMesh&&Mt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Mt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Mt.instancing===!1||!I.isInstancedMesh&&Mt.instancing===!0||I.isSkinnedMesh&&Mt.skinning===!1||!I.isSkinnedMesh&&Mt.skinning===!0||I.isInstancedMesh&&Mt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Mt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Mt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Mt.instancingMorph===!1&&I.morphTexture!==null||Mt.envMap!==gt||k.fog===!0&&Mt.fog!==et||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==tt.numPlanes||Mt.numIntersection!==tt.numIntersection)||Mt.vertexAlphas!==Rt||Mt.vertexTangents!==Dt||Mt.morphTargets!==_t||Mt.morphNormals!==Yt||Mt.morphColors!==te||Mt.toneMapping!==ne||Mt.morphTargetsCount!==qt)&&(Kt=!0):(Kt=!0,Mt.__version=k.version);let Oe=Mt.currentProgram;Kt===!0&&(Oe=ki(k,D,I));let Gn=!1,Ae=!1,vi=!1;const ie=Oe.getUniforms(),qe=Mt.uniforms;if(Tt.useProgram(Oe.program)&&(Gn=!0,Ae=!0,vi=!0),k.id!==y&&(y=k.id,Ae=!0),Gn||_!==S){Tt.buffers.depth.getReversed()?(ot.copy(S.projectionMatrix),rl(ot),ol(ot),ie.setValue(F,"projectionMatrix",ot)):ie.setValue(F,"projectionMatrix",S.projectionMatrix),ie.setValue(F,"viewMatrix",S.matrixWorldInverse);const fn=ie.map.cameraPosition;fn!==void 0&&fn.setValue(F,Pt.setFromMatrixPosition(S.matrixWorld)),Gt.logarithmicDepthBuffer&&ie.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ie.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,Ae=!0,vi=!0)}if(I.isSkinnedMesh){ie.setOptional(F,I,"bindMatrix"),ie.setOptional(F,I,"bindMatrixInverse");const Ie=I.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ie.setValue(F,"boneTexture",Ie.boneTexture,E))}I.isBatchedMesh&&(ie.setOptional(F,I,"batchingTexture"),ie.setValue(F,"batchingTexture",I._matricesTexture,E),ie.setOptional(F,I,"batchingIdTexture"),ie.setValue(F,"batchingIdTexture",I._indirectTexture,E),ie.setOptional(F,I,"batchingColorTexture"),I._colorsTexture!==null&&ie.setValue(F,"batchingColorTexture",I._colorsTexture,E));const Mi=z.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&Ct.update(I,z,Oe),(Ae||Mt.receiveShadow!==I.receiveShadow)&&(Mt.receiveShadow=I.receiveShadow,ie.setValue(F,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(qe.envMap.value=gt,qe.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(qe.envMapIntensity.value=D.environmentIntensity),Ae&&(ie.setValue(F,"toneMappingExposure",M.toneMappingExposure),Mt.needsLights&&Ja(qe,vi),et&&k.fog===!0&&at.refreshFogUniforms(qe,et),at.refreshMaterialUniforms(qe,k,H,J,u.state.transmissionRenderTarget[S.id]),ms.upload(F,so(Mt),qe,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ms.upload(F,so(Mt),qe,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ie.setValue(F,"center",I.center),ie.setValue(F,"modelViewMatrix",I.modelViewMatrix),ie.setValue(F,"normalMatrix",I.normalMatrix),ie.setValue(F,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ie=k.uniformsGroups;for(let fn=0,pn=Ie.length;fn<pn;fn++){const oo=Ie[fn];L.update(oo,Oe),L.bind(oo,Oe)}}return Oe}function Ja(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Qa(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,D,z){wt.get(S.texture).__webglTexture=D,wt.get(S.depthTexture).__webglTexture=z;const k=wt.get(S);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){const z=wt.get(S);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,z=0){P=S,A=D,b=z;let k=!0,I=null,et=!1,lt=!1;if(S){const gt=wt.get(S);if(gt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(F.FRAMEBUFFER,null),k=!1;else if(gt.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(gt.__hasExternalTextures)E.rebindTextures(S,wt.get(S.texture).__webglTexture,wt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const _t=S.depthTexture;if(gt.__boundDepthTexture!==_t){if(_t!==null&&wt.has(_t)&&(S.width!==_t.image.width||S.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const Dt=wt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Dt[D])?I=Dt[D][z]:I=Dt[D],et=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?I=wt.get(S).__webglMultisampledFramebuffer:Array.isArray(Dt)?I=Dt[z]:I=Dt,C.copy(S.viewport),O.copy(S.scissor),B=S.scissorTest}else C.copy(St).multiplyScalar(H).floor(),O.copy(Ot).multiplyScalar(H).floor(),B=Jt;if(Tt.bindFramebuffer(F.FRAMEBUFFER,I)&&k&&Tt.drawBuffers(S,I),Tt.viewport(C),Tt.scissor(O),Tt.setScissorTest(B),et){const gt=wt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt.__webglTexture,z)}else if(lt){const gt=wt.get(S.texture),Rt=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,gt.__webglTexture,z||0,Rt)}y=-1},this.readRenderTargetPixels=function(S,D,z,k,I,et,lt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){Tt.bindFramebuffer(F.FRAMEBUFFER,mt);try{const gt=S.texture,Rt=gt.format,Dt=gt.type;if(!Gt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-k&&z>=0&&z<=S.height-I&&F.readPixels(D,z,k,I,Ut.convert(Rt),Ut.convert(Dt),et)}finally{const gt=P!==null?wt.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(S,D,z,k,I,et,lt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){const gt=S.texture,Rt=gt.format,Dt=gt.type;if(!Gt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-k&&z>=0&&z<=S.height-I){Tt.bindFramebuffer(F.FRAMEBUFFER,mt);const _t=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,_t),F.bufferData(F.PIXEL_PACK_BUFFER,et.byteLength,F.STREAM_READ),F.readPixels(D,z,k,I,Ut.convert(Rt),Ut.convert(Dt),0);const Yt=P!==null?wt.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,Yt);const te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await sl(F,te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,_t),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,et),F.deleteBuffer(_t),F.deleteSync(te),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,z=0){S.isTexture!==!0&&(Ci("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);const k=Math.pow(2,-z),I=Math.floor(S.image.width*k),et=Math.floor(S.image.height*k),lt=D!==null?D.x:0,mt=D!==null?D.y:0;E.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,lt,mt,I,et),Tt.unbindTexture()},this.copyTextureToTexture=function(S,D,z=null,k=null,I=0){S.isTexture!==!0&&(Ci("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1],D=arguments[2],I=arguments[3]||0,z=null);let et,lt,mt,gt,Rt,Dt,_t,Yt,te;const ne=S.isCompressedTexture?S.mipmaps[I]:S.image;z!==null?(et=z.max.x-z.min.x,lt=z.max.y-z.min.y,mt=z.isBox3?z.max.z-z.min.z:1,gt=z.min.x,Rt=z.min.y,Dt=z.isBox3?z.min.z:0):(et=ne.width,lt=ne.height,mt=ne.depth||1,gt=0,Rt=0,Dt=0),k!==null?(_t=k.x,Yt=k.y,te=k.z):(_t=0,Yt=0,te=0);const Ee=Ut.convert(D.format),qt=Ut.convert(D.type);let Mt;D.isData3DTexture?(E.setTexture3D(D,0),Mt=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),Mt=F.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),Mt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const Je=F.getParameter(F.UNPACK_ROW_LENGTH),Kt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Oe=F.getParameter(F.UNPACK_SKIP_PIXELS),Gn=F.getParameter(F.UNPACK_SKIP_ROWS),Ae=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ne.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ne.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,gt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Rt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Dt);const vi=S.isDataArrayTexture||S.isData3DTexture,ie=D.isDataArrayTexture||D.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const qe=wt.get(S),Mi=wt.get(D),Ie=wt.get(qe.__renderTarget),fn=wt.get(Mi.__renderTarget);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,Ie.__webglFramebuffer),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,fn.__webglFramebuffer);for(let pn=0;pn<mt;pn++)vi&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(S).__webglTexture,I,Dt+pn),S.isDepthTexture?(ie&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(D).__webglTexture,I,te+pn),F.blitFramebuffer(gt,Rt,et,lt,_t,Yt,et,lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):ie?F.copyTexSubImage3D(Mt,I,_t,Yt,te+pn,gt,Rt,et,lt):F.copyTexSubImage2D(Mt,I,_t,Yt,te+pn,gt,Rt,et,lt);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ie?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Mt,I,_t,Yt,te,et,lt,mt,Ee,qt,ne.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(Mt,I,_t,Yt,te,et,lt,mt,Ee,ne.data):F.texSubImage3D(Mt,I,_t,Yt,te,et,lt,mt,Ee,qt,ne):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,I,_t,Yt,et,lt,Ee,qt,ne.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,I,_t,Yt,ne.width,ne.height,Ee,ne.data):F.texSubImage2D(F.TEXTURE_2D,I,_t,Yt,et,lt,Ee,qt,ne);F.pixelStorei(F.UNPACK_ROW_LENGTH,Je),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Kt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Oe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Gn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ae),I===0&&D.generateMipmaps&&F.generateMipmap(Mt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(S,D,z=null,k=null,I=0){return S.isTexture!==!0&&(Ci("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,S=arguments[2],D=arguments[3],I=arguments[4]||0),Ci('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,z,k,I)},this.initRenderTarget=function(S){wt.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),Tt.unbindTexture()},this.resetState=function(){A=0,b=0,P=null,Tt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class Kr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(t),this.density=e}clone(){return new Kr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _p extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Za extends _i{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const aa=new se,Or=new Ua,cs=new vs,ls=new R;class xp extends ge{constructor(t=new Te,e=new Za){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(s),cs.radius+=r,t.ray.intersectsSphere(cs)===!1)return;aa.copy(s).invert(),Or.copy(t.ray).applyMatrix4(aa);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,v=p;g<v;g++){const m=l.getX(g);ls.fromBufferAttribute(h,m),ca(ls,m,c,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,v=p;g<v;g++)ls.fromBufferAttribute(h,g),ca(ls,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ca(i,t,e,n,s,r,a){const o=Or.distanceSqToPoint(i);if(o<e){const c=new R;Or.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ei extends Se{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class le extends Te{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],f=[],p=[];let g=0;const v=[],m=n/2;let u=0;w(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new oe(h,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(p,2));function w(){const M=new R,U=new R;let A=0;const b=(e-t)/n;for(let P=0;P<=r;P++){const y=[],_=P/r,C=_*(e-t)+t;for(let O=0;O<=s;O++){const B=O/s,Y=B*c+o,X=Math.sin(Y),G=Math.cos(Y);U.x=C*X,U.y=-_*n+m,U.z=C*G,h.push(U.x,U.y,U.z),M.set(X,b,G).normalize(),f.push(M.x,M.y,M.z),p.push(B,1-_),y.push(g++)}v.push(y)}for(let P=0;P<s;P++)for(let y=0;y<r;y++){const _=v[y][P],C=v[y+1][P],O=v[y+1][P+1],B=v[y][P+1];(t>0||y!==0)&&(d.push(_,C,B),A+=3),(e>0||y!==r-1)&&(d.push(C,O,B),A+=3)}l.addGroup(u,A,0),u+=A}function T(M){const U=g,A=new zt,b=new R;let P=0;const y=M===!0?t:e,_=M===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*_,0),f.push(0,_,0),p.push(.5,.5),g++;const C=g;for(let O=0;O<=s;O++){const Y=O/s*c+o,X=Math.cos(Y),G=Math.sin(Y);b.x=y*G,b.y=m*_,b.z=y*X,h.push(b.x,b.y,b.z),f.push(0,_,0),A.x=X*.5+.5,A.y=G*.5*_+.5,p.push(A.x,A.y),g++}for(let O=0;O<s;O++){const B=U+O,Y=C+O;M===!0?d.push(Y,Y+1,B):d.push(Y+1,Y,B),P+=3}l.addGroup(u,P,M===!0?1:2),u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ai extends le{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ai(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zr extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),d(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const T=new R,M=new R,U=new R;for(let A=0;A<e.length;A+=3)p(e[A+0],T),p(e[A+1],M),p(e[A+2],U),c(T,M,U,w)}function c(w,T,M,U){const A=U+1,b=[];for(let P=0;P<=A;P++){b[P]=[];const y=w.clone().lerp(M,P/A),_=T.clone().lerp(M,P/A),C=A-P;for(let O=0;O<=C;O++)O===0&&P===A?b[P][O]=y:b[P][O]=y.clone().lerp(_,O/C)}for(let P=0;P<A;P++)for(let y=0;y<2*(A-P)-1;y++){const _=Math.floor(y/2);y%2===0?(f(b[P][_+1]),f(b[P+1][_]),f(b[P][_])):(f(b[P][_+1]),f(b[P+1][_+1]),f(b[P+1][_]))}}function l(w){const T=new R;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(w),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function d(){const w=new R;for(let T=0;T<r.length;T+=3){w.x=r[T+0],w.y=r[T+1],w.z=r[T+2];const M=m(w)/2/Math.PI+.5,U=u(w)/Math.PI+.5;a.push(M,1-U)}g(),h()}function h(){for(let w=0;w<a.length;w+=6){const T=a[w+0],M=a[w+2],U=a[w+4],A=Math.max(T,M,U),b=Math.min(T,M,U);A>.9&&b<.1&&(T<.2&&(a[w+0]+=1),M<.2&&(a[w+2]+=1),U<.2&&(a[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function p(w,T){const M=w*3;T.x=t[M+0],T.y=t[M+1],T.z=t[M+2]}function g(){const w=new R,T=new R,M=new R,U=new R,A=new zt,b=new zt,P=new zt;for(let y=0,_=0;y<r.length;y+=9,_+=6){w.set(r[y+0],r[y+1],r[y+2]),T.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),A.set(a[_+0],a[_+1]),b.set(a[_+2],a[_+3]),P.set(a[_+4],a[_+5]),U.copy(w).add(T).add(M).divideScalar(3);const C=m(U);v(A,_+0,w,C),v(b,_+2,T,C),v(P,_+4,M,C)}}function v(w,T,M,U){U<0&&w.x===1&&(a[T]=w.x-1),M.x===0&&M.z===0&&(a[T]=U/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function u(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.vertices,t.indices,t.radius,t.details)}}class $r extends Zr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $r(t.radius,t.detail)}}class Fi extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const d=[],h=new R,f=new R,p=[],g=[],v=[],m=[];for(let u=0;u<=n;u++){const w=[],T=u/n;let M=0;u===0&&a===0?M=.5/e:u===n&&c===Math.PI&&(M=-.5/e);for(let U=0;U<=e;U++){const A=U/e;h.x=-t*Math.cos(s+A*r)*Math.sin(a+T*o),h.y=t*Math.cos(a+T*o),h.z=t*Math.sin(s+A*r)*Math.sin(a+T*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(A+M,1-T),w.push(l++)}d.push(w)}for(let u=0;u<n;u++)for(let w=0;w<e;w++){const T=d[u][w+1],M=d[u][w],U=d[u+1][w],A=d[u+1][w+1];(u!==0||a>0)&&p.push(T,M,A),(u!==n-1||c<Math.PI)&&p.push(M,U,A)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class an extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],d=new R,h=new R,f=new R;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),f.subVectors(h,d).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,u=(s+1)*(p-1)+g,w=(s+1)*p+g;a.push(v,m,w),a.push(m,u,w)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Et extends _i{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vp extends Et{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const la={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Mp{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}}const Sp=new Mp;class jr{constructor(t){this.manager=t!==void 0?t:Sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}jr.DEFAULT_MATERIAL_NAME="__DEFAULT";class yp extends jr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=la.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Ui("img");function c(){d(),la.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){d(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class wp extends jr{constructor(t){super(t)}load(t,e,n,s){const r=new Se,a=new yp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Jr extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Tp extends Jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $s=new se,ha=new R,da=new R;class $a{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ha.setFromMatrixPosition(t.matrixWorld),e.position.copy(ha),da.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(da),e.updateMatrixWorld(),$s.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($s),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($s)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ua=new se,bi=new R,js=new R;class Ep extends $a{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),bi.setFromMatrixPosition(t.matrixWorld),n.position.copy(bi),js.copy(n.position),js.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(js),n.updateMatrixWorld(),s.makeTranslation(-bi.x,-bi.y,-bi.z),ua.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua)}}class bp extends Jr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ep}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ap extends $a{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cp extends Jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Ap}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Br}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Br);const Rp={title:"Messy Kitchen Racer - 3D Scene & Collision Data",version:"1.0.0",coordinateSystem:"Three.js Y-Up Right-Handed (X: Right, Y: Up, Z: South/Foreground)",counterHeight:9,floorHeight:0,totalTrackLength:139.408,waypointCount:160,checkpointCount:10},Pp={position:[-4,9.15,16],forward:[-1,0,0],rotationY:-1.5707963267948966,rowSpacing:2.2,lateralSpacing:1.8},Lp={counterSlabs:[{id:"peninsula_counter_slab",name:"Foreground White Quartz Peninsula Counter",center:[-10,8.65,16],size:[28,.7,12],topY:9,color:"#f3f1eb"},{id:"left_wall_counter_slab",name:"Left Wall White Quartz Counter (Sink & Appliances)",center:[-16,8.65,-7],size:[16,.7,34],topY:9,color:"#f3f1eb"},{id:"back_wall_counter_slab",name:"Back Wall White Quartz Counter (6-Burner Stove)",center:[4,8.65,-20],size:[40,.7,8],topY:9,color:"#f3f1eb"},{id:"right_bridge_counter_slab",name:"Right Stove-to-Ramp Launch Deck",center:[15.5,8.65,-14],size:[8,.7,6],topY:9,color:"#f3f1eb"}],baseCabinets:[{id:"peninsula_base_cabinet",center:[-10,4.15,15.5],size:[26.8,8.3,10.2],color:"#28201c"},{id:"left_base_cabinet",center:[-16.5,4.15,-7],size:[14.5,8.3,33],color:"#28201c"},{id:"back_base_cabinet",center:[4,4.15,-20.2],size:[39,8.3,7.2],color:"#28201c"},{id:"far_left_white_storage",center:[-26.5,3.6,20.5],size:[5,7.2,10],color:"#e6e7eb"}],upperCabinets:[{id:"upper_left_frosted_cabinet",name:"4-Door Dark Wood & Frosted Glass Upper Cabinet (with Red Chinese Knot Ornament)",center:[-19.5,18.5,5.5],size:[4.2,7.5,16.5],color:"#28201c",frostedGlassColor:"#cad4d9",hasChineseKnot:!0,chineseKnotPosition:[-17.2,15.2,7.5]},{id:"upper_corner_frosted_cabinet",name:"Back-Left Corner Frosted Glass Upper Cabinet",center:[-16,18.5,-20.5],size:[9.5,7.5,4.2],color:"#28201c",frostedGlassColor:"#cad4d9"}],pantryAndWalls:[{id:"dark_wood_pantry_column",name:"Tall Dark Wood Pantry Enclosure with Red Hanging Calendar",center:[22.5,11.5,-6],size:[6.5,23,9.5],color:"#241c18",calendarPosition:[22.5,12.8,-1.2]},{id:"foreground_multiplication_pillar",name:"Right Foreground Wall Pillar with 1x-12x Multiplication Chart",center:[26.5,12,18],size:[4.5,24,8],color:"#eceae4",chartPosition:[24.2,10.5,18]},{id:"sink_window_with_blinds",name:"Kitchen Window with Beige Venetian Blinds",center:[-23.8,16.5,-10],size:[.6,9.5,11],color:"#d8c8b0"}]},Dp=[{index:0,position:[-4,9,16],forward:[-.9987,-.0183,-.0469],right:[.0469,0,-.9989],up:[0,1,0],width:5.2,banking:0,surfaceType:"counter_stone",distanceFromStart:0},{index:1,position:[-4.855,9,15.951],forward:[-.999,0,-.0458],right:[.0458,0,-.999],up:[0,1,0],width:5.175,banking:.005,surfaceType:"counter_stone",distanceFromStart:.856},{index:2,position:[-5.807,9,15.917],forward:[-.9994,0,-.0336],right:[.0336,0,-.9994],up:[0,1,0],width:5.15,banking:.01,surfaceType:"counter_stone",distanceFromStart:1.809},{index:3,position:[-6.82,9,15.885],forward:[-.9992,0,-.0389],right:[.0389,0,-.9992],up:[0,1,0],width:5.125,banking:.015,surfaceType:"counter_stone",distanceFromStart:2.822},{index:4,position:[-7.856,9,15.838],forward:[-.9982,0,-.06],right:[.06,0,-.9982],up:[0,1,0],width:5.1,banking:.02,surfaceType:"counter_stone",distanceFromStart:3.86},{index:5,position:[-8.879,9,15.761],forward:[-.9951,0,-.0989],right:[.0989,0,-.9951],up:[0,1,0],width:5.075,banking:.025,surfaceType:"counter_stone",distanceFromStart:4.886},{index:6,position:[-9.852,9,15.639],forward:[-.9869,0,-.1611],right:[.1611,0,-.9869],up:[0,1,0],width:5.05,banking:.03,surfaceType:"counter_stone",distanceFromStart:5.866},{index:7,position:[-10.738,9,15.457],forward:[-.9663,0,-.2575],right:[.2575,0,-.9663],up:[0,1,0],width:5.025,banking:.035,surfaceType:"counter_stone",distanceFromStart:6.771},{index:8,position:[-11.5,9,15.2],forward:[-.918,.0854,-.3872],right:[.3886,0,-.9214],up:[0,1,0],width:5,banking:.04,surfaceType:"counter_stone",distanceFromStart:7.575},{index:9,position:[-12.154,9.132,14.86],forward:[-.8346,.2206,-.5047],right:[.5174,0,-.8557],up:[0,1,0],width:4.95,banking:.035,surfaceType:"counter_stone",distanceFromStart:8.324},{index:10,position:[-12.743,9.329,14.448],forward:[-.75,.2917,-.5936],right:[.6206,0,-.7841],up:[0,1,0],width:4.9,banking:.03,surfaceType:"counter_stone",distanceFromStart:9.069},{index:11,position:[-13.268,9.565,13.978],forward:[-.6684,.3295,-.6668],right:[.7062,0,-.708],up:[0,1,0],width:4.85,banking:.025,surfaceType:"counter_stone",distanceFromStart:9.812},{index:12,position:[-13.731,9.816,13.463],forward:[-.5945,.3362,-.7305],right:[.7756,0,-.6312],up:[0,1,0],width:4.8,banking:.02,surfaceType:"counter_stone",distanceFromStart:10.549},{index:13,position:[-14.134,10.055,12.914],forward:[-.5283,.3122,-.7895],right:[.8311,0,-.5561],up:[0,1,0],width:4.75,banking:.015,surfaceType:"counter_stone",distanceFromStart:11.271},{index:14,position:[-14.479,10.257,12.345],forward:[-.468,.2536,-.8466],right:[.8752,0,-.4838],up:[0,1,0],width:4.7,banking:.01,surfaceType:"counter_stone",distanceFromStart:11.966},{index:15,position:[-14.767,10.398,11.77],forward:[-.4094,.1513,-.8997],right:[.9102,0,-.4141],up:[0,1,0],width:4.65,banking:.005,surfaceType:"counter_stone",distanceFromStart:12.624},{index:16,position:[-15,10.45,11.2],forward:[-.3238,0,-.9461],right:[.9461,0,-.3238],up:[0,1,0],width:4.6,banking:0,surfaceType:"ramp_wood",distanceFromStart:13.242},{index:17,position:[-15.159,10.398,10.624],forward:[-.1925,-.1587,-.9684],right:[.9808,0,-.195],up:[0,1,0],width:4.625,banking:0,surfaceType:"ramp_wood",distanceFromStart:13.842},{index:18,position:[-15.234,10.257,10.025],forward:[-.0639,-.2705,-.9606],right:[.9978,0,-.0664],up:[0,1,0],width:4.65,banking:0,surfaceType:"ramp_wood",distanceFromStart:14.462},{index:19,position:[-15.24,10.055,9.407],forward:[.0301,-.3331,-.9424],right:[.9995,0,.0319],up:[0,1,0],width:4.675,banking:0,surfaceType:"ramp_wood",distanceFromStart:15.112},{index:20,position:[-15.194,9.816,8.775],forward:[.0942,-.3575,-.9292],right:[.9949,0,.1009],up:[0,1,0],width:4.7,banking:0,surfaceType:"ramp_wood",distanceFromStart:15.789},{index:21,position:[-15.111,9.565,8.134],forward:[.1344,-.3506,-.9268],right:[.9896,0,.1435],up:[0,1,0],width:4.725,banking:0,surfaceType:"ramp_wood",distanceFromStart:16.483},{index:22,position:[-15.007,9.329,7.487],forward:[.1542,-.3141,-.9368],right:[.9867,0,.1624],up:[0,1,0],width:4.75,banking:0,surfaceType:"ramp_wood",distanceFromStart:17.179},{index:23,position:[-14.898,9.132,6.841],forward:[.1539,-.2443,-.9574],right:[.9873,0,.1587],up:[0,1,0],width:4.775,banking:0,surfaceType:"ramp_wood",distanceFromStart:17.863},{index:24,position:[-14.8,9,6.2],forward:[.1628,-.1008,-.9815],right:[.9865,0,.1636],up:[0,1,0],width:4.8,banking:0,surfaceType:"counter_stone",distanceFromStart:18.525},{index:25,position:[-14.685,9,5.56],forward:[.2069,0,-.9784],right:[.9784,0,.2069],up:[0,1,0],width:4.775,banking:-.0063,surfaceType:"counter_stone",distanceFromStart:19.176},{index:26,position:[-14.528,9,4.914],forward:[.2549,0,-.967],right:[.967,0,.2549],up:[0,1,0],width:4.75,banking:-.0125,surfaceType:"counter_stone",distanceFromStart:19.84},{index:27,position:[-14.344,9,4.265],forward:[.279,0,-.9603],right:[.9603,0,.279],up:[0,1,0],width:4.725,banking:-.0188,surfaceType:"counter_stone",distanceFromStart:20.515},{index:28,position:[-14.15,9,3.612],forward:[.2808,0,-.9598],right:[.9598,0,.2808],up:[0,1,0],width:4.7,banking:-.025,surfaceType:"counter_stone",distanceFromStart:21.196},{index:29,position:[-13.962,9,2.959],forward:[.2607,0,-.9654],right:[.9654,0,.2607],up:[0,1,0],width:4.675,banking:-.0312,surfaceType:"counter_stone",distanceFromStart:21.876},{index:30,position:[-13.797,9,2.305],forward:[.2175,0,-.976],right:[.976,0,.2175],up:[0,1,0],width:4.65,banking:-.0375,surfaceType:"counter_stone",distanceFromStart:22.55},{index:31,position:[-13.671,9,1.651],forward:[.1492,0,-.9888],right:[.9888,0,.1492],up:[0,1,0],width:4.625,banking:-.0438,surfaceType:"counter_stone",distanceFromStart:23.216},{index:32,position:[-13.6,9,1],forward:[.0561,0,-.9984],right:[.9984,0,.0561],up:[0,1,0],width:4.6,banking:-.05,surfaceType:"counter_stone",distanceFromStart:23.871},{index:33,position:[-13.598,9,.354],forward:[-.0419,0,-.9991],right:[.9991,0,-.0419],up:[0,1,0],width:4.6,banking:-.0388,surfaceType:"counter_stone",distanceFromStart:24.517},{index:34,position:[-13.654,9,-.286],forward:[-.1185,0,-.993],right:[.993,0,-.1185],up:[0,1,0],width:4.6,banking:-.0275,surfaceType:"counter_stone",distanceFromStart:25.159},{index:35,position:[-13.75,9,-.924],forward:[-.166,0,-.9861],right:[.9861,0,-.166],up:[0,1,0],width:4.6,banking:-.0163,surfaceType:"counter_stone",distanceFromStart:25.804},{index:36,position:[-13.869,9,-1.562],forward:[-.1845,0,-.9828],right:[.9828,0,-.1845],up:[0,1,0],width:4.6,banking:-.005,surfaceType:"counter_stone",distanceFromStart:26.454},{index:37,position:[-13.991,9,-2.206],forward:[-.1751,0,-.9845],right:[.9845,0,-.1751],up:[0,1,0],width:4.6,banking:.0062,surfaceType:"counter_stone",distanceFromStart:27.109},{index:38,position:[-14.099,9,-2.858],forward:[-.1384,0,-.9904],right:[.9904,0,-.1384],up:[0,1,0],width:4.6,banking:.0175,surfaceType:"counter_stone",distanceFromStart:27.77},{index:39,position:[-14.175,9,-3.521],forward:[-.0749,0,-.9972],right:[.9972,0,-.0749],up:[0,1,0],width:4.6,banking:.0287,surfaceType:"counter_stone",distanceFromStart:28.438},{index:40,position:[-14.2,9,-4.2],forward:[.0021,.0165,-.9999],right:[1,0,.0021],up:[0,1,0],width:4.6,banking:.04,surfaceType:"counter_stone",distanceFromStart:29.117},{index:41,position:[-14.172,9.023,-4.896],forward:[.0659,.0401,-.997],right:[.9978,0,.0659],up:[0,1,0],width:4.55,banking:.035,surfaceType:"counter_stone",distanceFromStart:29.814},{index:42,position:[-14.107,9.057,-5.608],forward:[.1086,.0517,-.9927],right:[.9941,0,.1087],up:[0,1,0],width:4.5,banking:.03,surfaceType:"counter_stone",distanceFromStart:30.529},{index:43,position:[-14.015,9.097,-6.331],forward:[.1365,.0571,-.989],right:[.9906,0,.1367],up:[0,1,0],width:4.45,banking:.025,surfaceType:"counter_stone",distanceFromStart:31.259},{index:44,position:[-13.906,9.141,-7.062],forward:[.1512,.0568,-.9869],right:[.9885,0,.1514],up:[0,1,0],width:4.4,banking:.02,surfaceType:"counter_stone",distanceFromStart:32},{index:45,position:[-13.79,9.182,-7.799],forward:[.1533,.051,-.9869],right:[.9881,0,.1535],up:[0,1,0],width:4.35,banking:.015,surfaceType:"counter_stone",distanceFromStart:32.746},{index:46,position:[-13.677,9.217,-8.536],forward:[.1431,.0397,-.9889],right:[.9897,0,.1432],up:[0,1,0],width:4.3,banking:.01,surfaceType:"counter_stone",distanceFromStart:33.493},{index:47,position:[-13.577,9.241,-9.271],forward:[.1202,.0225,-.9925],right:[.9927,0,.1202],up:[0,1,0],width:4.25,banking:.005,surfaceType:"counter_stone",distanceFromStart:34.235},{index:48,position:[-13.5,9.25,-10],forward:[.0748,-.001,-.9972],right:[.9972,0,.0748],up:[0,1,0],width:4.2,banking:0,surfaceType:"sink_bridge",distanceFromStart:34.969},{index:49,position:[-13.467,9.239,-10.745],forward:[.0154,-.0252,-.9996],right:[.9999,0,.0154],up:[0,1,0],width:4.275,banking:.0075,surfaceType:"sink_bridge",distanceFromStart:35.715},{index:50,position:[-13.477,9.212,-11.52],forward:[-.0262,-.0431,-.9987],right:[.9997,0,-.0263],up:[0,1,0],width:4.35,banking:.015,surfaceType:"sink_bridge",distanceFromStart:36.49},{index:51,position:[-13.508,9.172,-12.307],forward:[-.0388,-.0539,-.9978],right:[.9992,0,-.0388],up:[0,1,0],width:4.425,banking:.0225,surfaceType:"sink_bridge",distanceFromStart:37.278},{index:52,position:[-13.537,9.127,-13.088],forward:[-.0236,-.059,-.998],right:[.9997,0,-.0236],up:[0,1,0],width:4.5,banking:.03,surfaceType:"sink_bridge",distanceFromStart:38.061},{index:53,position:[-13.544,9.081,-13.845],forward:[.0222,-.0581,-.9981],right:[.9998,0,.0223],up:[0,1,0],width:4.575,banking:.0375,surfaceType:"sink_bridge",distanceFromStart:38.82},{index:54,position:[-13.505,9.041,-14.561],forward:[.1058,-.0499,-.9931],right:[.9944,0,.106],up:[0,1,0],width:4.65,banking:.045,surfaceType:"sink_bridge",distanceFromStart:39.538},{index:55,position:[-13.398,9.012,-15.219],forward:[.2387,-.0323,-.9706],right:[.9711,0,.2388],up:[0,1,0],width:4.725,banking:.0525,surfaceType:"sink_bridge",distanceFromStart:40.205},{index:56,position:[-13.2,9,-15.8],forward:[.3985,-.0035,-.9172],right:[.9172,0,.3985],up:[0,1,0],width:4.8,banking:.06,surfaceType:"counter_stone",distanceFromStart:40.819},{index:57,position:[-12.923,9.008,-16.311],forward:[.5305,.0282,-.8472],right:[.8475,0,.5307],up:[0,1,0],width:4.8,banking:.0575,surfaceType:"counter_stone",distanceFromStart:41.401},{index:58,position:[-12.591,9.032,-16.772],forward:[.6336,.0525,-.7719],right:[.773,0,.6344],up:[0,1,0],width:4.8,banking:.055,surfaceType:"counter_stone",distanceFromStart:41.969},{index:59,position:[-12.207,9.067,-17.184],forward:[.7249,.0668,-.6856],right:[.6871,0,.7265],up:[0,1,0],width:4.8,banking:.0525,surfaceType:"counter_stone",distanceFromStart:42.534},{index:60,position:[-11.769,9.108,-17.55],forward:[.8012,.0705,-.5943],right:[.5958,0,.8032],up:[0,1,0],width:4.8,banking:.05,surfaceType:"counter_stone",distanceFromStart:43.106},{index:61,position:[-11.279,9.149,-17.872],forward:[.8616,.0641,-.5035],right:[.5046,0,.8634],up:[0,1,0],width:4.8,banking:.0475,surfaceType:"counter_stone",distanceFromStart:43.694},{index:62,position:[-10.737,9.185,-18.153],forward:[.9072,.0489,-.4178],right:[.4183,0,.9083],up:[0,1,0],width:4.8,banking:.045,surfaceType:"counter_stone",distanceFromStart:44.305},{index:63,position:[-10.144,9.21,-18.395],forward:[.9401,.0267,-.3397],right:[.3399,0,.9405],up:[0,1,0],width:4.8,banking:.0425,surfaceType:"counter_stone",distanceFromStart:44.946},{index:64,position:[-9.5,9.22,-18.6],forward:[.9667,.0013,-.256],right:[.256,0,.9667],up:[0,1,0],width:4.8,banking:.04,surfaceType:"bacon_strip",distanceFromStart:45.622},{index:65,position:[-8.79,9.212,-18.753],forward:[.9864,-.0193,-.163],right:[.163,0,.9866],up:[0,1,0],width:4.825,banking:.0312,surfaceType:"bacon_strip",distanceFromStart:46.349},{index:66,position:[-8.005,9.191,-18.847],forward:[.9959,-.0318,-.0845],right:[.0846,0,.9964],up:[0,1,0],width:4.85,banking:.0225,surfaceType:"bacon_strip",distanceFromStart:47.139},{index:67,position:[-7.161,9.16,-18.892],forward:[.9988,-.0386,-.0305],right:[.0306,0,.9995],up:[0,1,0],width:4.875,banking:.0137,surfaceType:"bacon_strip",distanceFromStart:47.985},{index:68,position:[-6.269,9.124,-18.9],forward:[.9992,-.0409,.0047],right:[-.0047,0,1],up:[0,1,0],width:4.9,banking:.005,surfaceType:"bacon_strip",distanceFromStart:48.878},{index:69,position:[-5.343,9.086,-18.883],forward:[.9989,-.0395,.025],right:[-.0251,0,.9997],up:[0,1,0],width:4.925,banking:-.0038,surfaceType:"bacon_strip",distanceFromStart:49.804},{index:70,position:[-4.398,9.05,-18.853],forward:[.9989,-.0346,.0325],right:[-.0325,0,.9995],up:[0,1,0],width:4.95,banking:-.0125,surfaceType:"bacon_strip",distanceFromStart:50.751},{index:71,position:[-3.445,9.02,-18.822],forward:[.9993,-.0262,.028],right:[-.028,0,.9996],up:[0,1,0],width:4.975,banking:-.0213,surfaceType:"bacon_strip",distanceFromStart:51.704},{index:72,position:[-2.5,9,-18.8],forward:[.9998,-.0105,.019],right:[-.019,0,.9998],up:[0,1,0],width:5,banking:-.03,surfaceType:"counter_stone",distanceFromStart:52.65},{index:73,position:[-1.548,9,-18.785],forward:[.9998,0,.0178],right:[-.0178,0,.9998],up:[0,1,0],width:5.025,banking:-.0262,surfaceType:"counter_stone",distanceFromStart:53.602},{index:74,position:[-.57,9,-18.766],forward:[.9997,0,.0241],right:[-.0241,0,.9997],up:[0,1,0],width:5.05,banking:-.0225,surfaceType:"counter_stone",distanceFromStart:54.58},{index:75,position:[.427,9,-18.738],forward:[.9995,0,.0327],right:[-.0327,0,.9995],up:[0,1,0],width:5.075,banking:-.0187,surfaceType:"counter_stone",distanceFromStart:55.578},{index:76,position:[1.438,9,-18.7],forward:[.9991,0,.0435],right:[-.0435,0,.9991],up:[0,1,0],width:5.1,banking:-.015,surfaceType:"counter_stone",distanceFromStart:56.589},{index:77,position:[2.456,9,-18.65],forward:[.9984,0,.0566],right:[-.0566,0,.9984],up:[0,1,0],width:5.125,banking:-.0112,surfaceType:"counter_stone",distanceFromStart:57.609},{index:78,position:[3.477,9,-18.584],forward:[.9974,0,.0723],right:[-.0723,0,.9974],up:[0,1,0],width:5.15,banking:-.0075,surfaceType:"counter_stone",distanceFromStart:58.631},{index:79,position:[4.493,9,-18.502],forward:[.9959,0,.0908],right:[-.0908,0,.9959],up:[0,1,0],width:5.175,banking:-.0037,surfaceType:"counter_stone",distanceFromStart:59.651},{index:80,position:[5.5,9,-18.4],forward:[.9952,7e-4,.0977],right:[-.0977,0,.9952],up:[0,1,0],width:5.2,banking:0,surfaceType:"counter_stone",distanceFromStart:60.663},{index:81,position:[6.541,9.001,-18.301],forward:[.9963,.0022,.0855],right:[-.0855,0,.9963],up:[0,1,0],width:5.175,banking:.01,surfaceType:"counter_stone",distanceFromStart:61.709},{index:82,position:[7.641,9.005,-18.216],forward:[.997,.0033,.0774],right:[-.0774,0,.997],up:[0,1,0],width:5.15,banking:.02,surfaceType:"counter_stone",distanceFromStart:62.812},{index:83,position:[8.764,9.009,-18.128],forward:[.9961,.0035,.0881],right:[-.0881,0,.9961],up:[0,1,0],width:5.125,banking:.03,surfaceType:"counter_stone",distanceFromStart:63.938},{index:84,position:[9.875,9.012,-18.019],forward:[.993,.0026,.1183],right:[-.1183,0,.993],up:[0,1,0],width:5.1,banking:.04,surfaceType:"counter_stone",distanceFromStart:65.055},{index:85,position:[10.94,9.015,-17.869],forward:[.9851,8e-4,.1718],right:[-.1718,0,.9851],up:[0,1,0],width:5.075,banking:.05,surfaceType:"counter_stone",distanceFromStart:66.13},{index:86,position:[11.922,9.014,-17.662],forward:[.9664,-.0026,.2569],right:[-.2569,0,.9664],up:[0,1,0],width:5.05,banking:.06,surfaceType:"counter_stone",distanceFromStart:67.134},{index:87,position:[12.787,9.01,-17.378],forward:[.9222,-.0082,.3867],right:[-.3867,0,.9222],up:[0,1,0],width:5.025,banking:.07,surfaceType:"counter_stone",distanceFromStart:68.045},{index:88,position:[13.5,9,-17],forward:[.8291,.002,.5591],right:[-.5591,0,.8291],up:[0,1,0],width:5,banking:.08,surfaceType:"counter_stone",distanceFromStart:68.852},{index:89,position:[14.051,9.013,-16.526],forward:[.6852,.0426,.7271],right:[-.7278,0,.6858],up:[0,1,0],width:4.975,banking:.07,surfaceType:"counter_stone",distanceFromStart:69.579},{index:90,position:[14.469,9.06,-15.972],forward:[.5233,.0772,.8486],right:[-.8512,0,.5249],up:[0,1,0],width:4.95,banking:.06,surfaceType:"counter_stone",distanceFromStart:70.274},{index:91,position:[14.777,9.12,-15.348],forward:[.3748,.0766,.9239],right:[-.9267,0,.3759],up:[0,1,0],width:4.925,banking:.05,surfaceType:"counter_stone",distanceFromStart:70.973},{index:92,position:[15,9.169,-14.662],forward:[.2598,.0436,.9647],right:[-.9656,0,.26],up:[0,1,0],width:4.9,banking:.04,surfaceType:"counter_stone",distanceFromStart:71.695},{index:93,position:[15.16,9.184,-13.926],forward:[.1824,-.0167,.9831],right:[-.9832,0,.1824],up:[0,1,0],width:4.875,banking:.03,surfaceType:"counter_stone",distanceFromStart:72.449},{index:94,position:[15.281,9.143,-13.147],forward:[.1403,-.1,.985],right:[-.99,0,.141],up:[0,1,0],width:4.85,banking:.02,surfaceType:"counter_stone",distanceFromStart:73.239},{index:95,position:[15.387,9.023,-12.335],forward:[.129,-.2022,.9708],right:[-.9913,0,.1317],up:[0,1,0],width:4.825,banking:.01,surfaceType:"counter_stone",distanceFromStart:74.066},{index:96,position:[15.5,8.8,-11.5],forward:[.1152,-.31,.9437],right:[-.9926,0,.1212],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:74.938},{index:97,position:[15.596,8.46,-10.623],forward:[.071,-.3951,.9159],right:[-.997,0,.0773],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:75.883},{index:98,position:[15.641,8.018,-9.688],forward:[.0237,-.4488,.8933],right:[-.9996,0,.0265],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:76.919},{index:99,position:[15.646,7.497,-8.705],forward:[-.0068,-.4816,.8763],right:[-1,0,-.0078],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:78.031},{index:100,position:[15.625,6.919,-7.688],forward:[-.0246,-.5001,.8656],right:[-.9996,0,-.0285],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:79.201},{index:101,position:[15.588,6.307,-6.646],forward:[-.0321,-.5074,.8611],right:[-.9993,0,-.0373],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:80.409},{index:102,position:[15.547,5.685,-5.594],forward:[-.0304,-.5049,.8627],right:[-.9994,0,-.0352],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:81.633},{index:103,position:[15.514,5.075,-4.541],forward:[-.0195,-.4925,.8701],right:[-.9997,0,-.0224],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:82.85},{index:104,position:[15.5,4.5,-3.5],forward:[-.0029,-.4892,.8722],right:[-1,0,-.0033],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:84.039},{index:105,position:[15.507,3.916,-2.475],forward:[.0098,-.5116,.8592],right:[-.9999,0,.0115],up:[0,1,0],width:4.925,banking:0,surfaceType:"ramp_wood",distanceFromStart:85.219},{index:106,position:[15.523,3.284,-1.457],forward:[.0154,-.5338,.8454],right:[-.9998,0,.0182],up:[0,1,0],width:5.05,banking:0,surfaceType:"ramp_wood",distanceFromStart:86.418},{index:107,position:[15.544,2.629,-.437],forward:[.0161,-.536,.844],right:[-.9998,0,.0191],up:[0,1,0],width:5.175,banking:0,surfaceType:"ramp_wood",distanceFromStart:87.629},{index:108,position:[15.562,1.981,.594],forward:[.012,-.5187,.8549],right:[-.9999,0,.0141],up:[0,1,0],width:5.3,banking:0,surfaceType:"ramp_wood",distanceFromStart:88.847},{index:109,position:[15.573,1.367,1.644],forward:[.0032,-.481,.8767],right:[-1,0,.0037],up:[0,1,0],width:5.425,banking:0,surfaceType:"ramp_wood",distanceFromStart:90.064},{index:110,position:[15.57,.813,2.723],forward:[-.0105,-.4209,.9071],right:[-.9999,0,-.0115],up:[0,1,0],width:5.55,banking:0,surfaceType:"ramp_wood",distanceFromStart:91.276},{index:111,position:[15.548,.348,3.838],forward:[-.0291,-.3362,.9413],right:[-.9995,0,-.0309],up:[0,1,0],width:5.675,banking:0,surfaceType:"ramp_wood",distanceFromStart:92.485},{index:112,position:[15.5,0,5],forward:[-.0404,-.1442,.9887],right:[-.9992,0,-.0409],up:[0,1,0],width:5.8,banking:0,surfaceType:"floor_wood",distanceFromStart:93.699},{index:113,position:[15.45,0,6.227],forward:[-.0341,0,.9994],right:[-.9994,0,-.0341],up:[0,1,0],width:5.85,banking:.0075,surfaceType:"floor_wood",distanceFromStart:94.927},{index:114,position:[15.414,0,7.519],forward:[-.029,0,.9996],right:[-.9996,0,-.029],up:[0,1,0],width:5.9,banking:.015,surfaceType:"floor_wood",distanceFromStart:96.22},{index:115,position:[15.374,0,8.857],forward:[-.0376,0,.9993],right:[-.9993,0,-.0376],up:[0,1,0],width:5.95,banking:.0225,surfaceType:"floor_wood",distanceFromStart:97.558},{index:116,position:[15.312,0,10.219],forward:[-.0593,0,.9982],right:[-.9982,0,-.0593],up:[0,1,0],width:6,banking:.03,surfaceType:"floor_wood",distanceFromStart:98.921},{index:117,position:[15.212,0,11.585],forward:[-.0945,0,.9955],right:[-.9955,0,-.0945],up:[0,1,0],width:6.05,banking:.0375,surfaceType:"floor_wood",distanceFromStart:100.291},{index:118,position:[15.055,0,12.934],forward:[-.1445,0,.9895],right:[-.9895,0,-.1445],up:[0,1,0],width:6.1,banking:.045,surfaceType:"floor_wood",distanceFromStart:101.649},{index:119,position:[14.823,0,14.246],forward:[-.2113,0,.9774],right:[-.9774,0,-.2113],up:[0,1,0],width:6.15,banking:.0525,surfaceType:"floor_wood",distanceFromStart:102.981},{index:120,position:[14.5,0,15.5],forward:[-.2839,0,.9588],right:[-.9588,0,-.2839],up:[0,1,0],width:6.2,banking:.06,surfaceType:"floor_wood",distanceFromStart:104.277},{index:121,position:[14.08,0,16.755],forward:[-.3394,0,.9406],right:[-.9406,0,-.3394],up:[0,1,0],width:6.175,banking:.0625,surfaceType:"floor_wood",distanceFromStart:105.6},{index:122,position:[13.578,0,18.055],forward:[-.3814,0,.9244],right:[-.9244,0,-.3814],up:[0,1,0],width:6.15,banking:.065,surfaceType:"floor_wood",distanceFromStart:106.993},{index:123,position:[13.006,0,19.358],forward:[-.4239,0,.9057],right:[-.9057,0,-.4239],up:[0,1,0],width:6.125,banking:.0675,surfaceType:"floor_wood",distanceFromStart:108.417},{index:124,position:[12.375,0,20.625],forward:[-.4704,0,.8825],right:[-.8825,0,-.4704],up:[0,1,0],width:6.1,banking:.07,surfaceType:"floor_wood",distanceFromStart:109.832},{index:125,position:[11.697,0,21.814],forward:[-.5244,0,.8515],right:[-.8515,0,-.5244],up:[0,1,0],width:6.075,banking:.0725,surfaceType:"floor_wood",distanceFromStart:111.2},{index:126,position:[10.984,0,22.883],forward:[-.5909,0,.8067],right:[-.8067,0,-.5909],up:[0,1,0],width:6.05,banking:.075,surfaceType:"floor_wood",distanceFromStart:112.485},{index:127,position:[10.248,0,23.792],forward:[-.6762,0,.7367],right:[-.7367,0,-.6762],up:[0,1,0],width:6.025,banking:.0775,surfaceType:"floor_wood",distanceFromStart:113.655},{index:128,position:[9.5,0,24.5],forward:[-.7922,0,.6103],right:[-.6103,0,-.7922],up:[0,1,0],width:6,banking:.08,surfaceType:"floor_wood",distanceFromStart:114.685},{index:129,position:[8.673,0,25.006],forward:[-.9024,0,.4309],right:[-.4309,0,-.9024],up:[0,1,0],width:5.85,banking:.07,surfaceType:"floor_wood",distanceFromStart:115.655},{index:130,position:[7.727,0,25.347],forward:[-.9644,0,.2646],right:[-.2646,0,-.9644],up:[0,1,0],width:5.7,banking:.06,surfaceType:"floor_wood",distanceFromStart:116.661},{index:131,position:[6.714,0,25.543],forward:[-.9916,0,.1292],right:[-.1292,0,-.9916],up:[0,1,0],width:5.55,banking:.05,surfaceType:"floor_wood",distanceFromStart:117.692},{index:132,position:[5.688,0,25.613],forward:[-.9999,0,.0155],right:[-.0155,0,-.9999],up:[0,1,0],width:5.4,banking:.04,surfaceType:"floor_wood",distanceFromStart:118.721},{index:133,position:[4.7,0,25.574],forward:[-.9962,0,-.0876],right:[.0876,0,-.9962],up:[0,1,0],width:5.25,banking:.03,surfaceType:"floor_wood",distanceFromStart:119.709},{index:134,position:[3.805,0,25.447],forward:[-.9811,0,-.1937],right:[.1937,0,-.9811],up:[0,1,0],width:5.1,banking:.02,surfaceType:"floor_wood",distanceFromStart:120.613},{index:135,position:[3.054,0,25.249],forward:[-.9362,.1435,-.3207],right:[.324,0,-.946],up:[0,1,0],width:4.95,banking:.01,surfaceType:"floor_wood",distanceFromStart:121.39},{index:136,position:[2.5,.2,25],forward:[-.734,.458,-.5015],right:[.5641,0,-.8257],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:122.029},{index:137,position:[2.174,.549,24.648],forward:[-.3677,.6409,-.6738],right:[.8778,0,-.479],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:122.623},{index:138,position:[2.038,1.005,24.154],forward:[-.0873,.6693,-.7378],right:[.9931,0,-.1174],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:123.308},{index:139,position:[2.044,1.542,23.553],forward:[.0617,.6636,-.7455],right:[.9966,0,.0825],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:124.115},{index:140,position:[2.144,2.138,22.881],forward:[.1308,.6579,-.7417],right:[.9848,0,.1737],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:125.018},{index:141,position:[2.288,2.765,22.174],forward:[.1479,.6593,-.7372],right:[.9805,0,.1967],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:125.974},{index:142,position:[2.427,3.402,21.468],forward:[.1208,.6691,-.7333],right:[.9867,0,.1626],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:126.935},{index:143,position:[2.514,4.021,20.798],forward:[.0416,.6863,-.7261],right:[.9984,0,.0572],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:127.852},{index:144,position:[2.5,4.6,20.2],forward:[-.0535,.7051,-.7071],right:[.9971,0,-.0755],up:[0,1,0],width:4.8,banking:0,surfaceType:"ramp_wood",distanceFromStart:128.684},{index:145,position:[2.426,5.18,19.636],forward:[-.0853,.7217,-.687],right:[.9924,0,-.1232],up:[0,1,0],width:4.825,banking:.005,surfaceType:"ramp_wood",distanceFromStart:129.497},{index:146,position:[2.358,5.803,19.055],forward:[-.0855,.7335,-.6743],right:[.9921,0,-.1258],up:[0,1,0],width:4.85,banking:.01,surfaceType:"ramp_wood",distanceFromStart:130.351},{index:147,position:[2.279,6.443,18.474],forward:[-.1063,.7398,-.6644],right:[.9874,0,-.158],up:[0,1,0],width:4.875,banking:.015,surfaceType:"ramp_wood",distanceFromStart:131.219},{index:148,position:[2.175,7.075,17.913],forward:[-.1499,.7403,-.6554],right:[.9748,0,-.2229],up:[0,1,0],width:4.9,banking:.02,surfaceType:"ramp_wood",distanceFromStart:132.071},{index:149,position:[2.03,7.672,17.387],forward:[-.2228,.7318,-.6441],right:[.9451,0,-.3269],up:[0,1,0],width:4.925,banking:.025,surfaceType:"ramp_wood",distanceFromStart:132.88},{index:150,position:[1.83,8.209,16.914],forward:[-.3371,.7053,-.6236],right:[.8797,0,-.4755],up:[0,1,0],width:4.95,banking:.03,surfaceType:"ramp_wood",distanceFromStart:133.622},{index:151,position:[1.558,8.661,16.513],forward:[-.5088,.6388,-.577],right:[.75,0,-.6614],up:[0,1,0],width:4.975,banking:.035,surfaceType:"ramp_wood",distanceFromStart:134.285},{index:152,position:[1.2,9,16.2],forward:[-.7303,.4985,-.4671],right:[.5389,0,-.8424],up:[0,1,0],width:5,banking:.04,surfaceType:"counter_stone",distanceFromStart:134.869},{index:153,position:[.752,9.21,15.997],forward:[-.9134,.2908,-.2849],right:[.2977,0,-.9547],up:[0,1,0],width:5.025,banking:.035,surfaceType:"counter_stone",distanceFromStart:135.403},{index:154,position:[.228,9.309,15.897],forward:[-.989,.0991,-.1102],right:[.1107,0,-.9939],up:[0,1,0],width:5.05,banking:.03,surfaceType:"counter_stone",distanceFromStart:135.946},{index:155,position:[-.363,9.322,15.873],forward:[-.9996,-.0277,.0025],right:[-.0025,0,-1],up:[0,1,0],width:5.075,banking:.025,surfaceType:"counter_stone",distanceFromStart:136.538},{index:156,position:[-1.012,9.275,15.9],forward:[-.9938,-.0951,.0583],right:[-.0586,0,-.9983],up:[0,1,0],width:5.1,banking:.02,surfaceType:"counter_stone",distanceFromStart:137.19},{index:157,position:[-1.71,9.193,15.952],forward:[-.9904,-.1187,.0712],right:[-.0717,0,-.9974],up:[0,1,0],width:5.125,banking:.015,surfaceType:"counter_stone",distanceFromStart:137.894},{index:158,position:[-2.447,9.103,16.003],forward:[-.9929,-.1079,.05],right:[-.0503,0,-.9987],up:[0,1,0],width:5.15,banking:.01,surfaceType:"counter_stone",distanceFromStart:138.638},{index:159,position:[-3.213,9.03,16.028],forward:[-.9978,-.0662,-.002],right:[.002,0,-1],up:[0,1,0],width:5.175,banking:.005,surfaceType:"counter_stone",distanceFromStart:139.408}],Ip=[{index:0,id:"checkpoint_00",label:"Start / Finish (Peninsula Quartz)",waypointIndex:0,position:[-4,9,16],forward:[-.9987,-.0183,-.0469],width:6.7,surfaceType:"counter_stone"},{index:1,id:"checkpoint_01",label:"Giant Lollipop Jump Ramp",waypointIndex:16,position:[-15,10.45,11.2],forward:[-.3238,0,-.9461],width:6.1,surfaceType:"ramp_wood"},{index:2,id:"checkpoint_02",label:"Toaster & Cutlery Chicane",waypointIndex:32,position:[-13.6,9,1],forward:[.0561,0,-.9984],width:6.1,surfaceType:"counter_stone"},{index:3,id:"checkpoint_03",label:"Sink Dish-Rack Bridge",waypointIndex:48,position:[-13.5,9.25,-10],forward:[.0748,-.001,-.9972],width:5.7,surfaceType:"sink_bridge"},{index:4,id:"checkpoint_04",label:"Wavy Bacon Strip Chicane",waypointIndex:64,position:[-9.5,9.22,-18.6],forward:[.9667,.0013,-.256],width:6.3,surfaceType:"bacon_strip"},{index:5,id:"checkpoint_05",label:"Cereal Box & Ceramic Bowl Slalom",waypointIndex:80,position:[5.5,9,-18.4],forward:[.9952,7e-4,.0977],width:6.7,surfaceType:"counter_stone"},{index:6,id:"checkpoint_06",label:"6-Burner Gas Stove Straight",waypointIndex:96,position:[15.5,8.8,-11.5],forward:[.1152,-.31,.9437],width:6.3,surfaceType:"ramp_wood"},{index:7,id:"checkpoint_07",label:"Counter-to-Floor Launch Ramp",waypointIndex:112,position:[15.5,0,5],forward:[-.0404,-.1442,.9887],width:7.3,surfaceType:"floor_wood"},{index:8,id:"checkpoint_08",label:"Hardwood Floor & Trash Bin Sweeper",waypointIndex:128,position:[9.5,0,24.5],forward:[-.7922,0,.6103],width:7.5,surfaceType:"floor_wood"},{index:9,id:"checkpoint_09",label:"Barstool Slalom & Return Ramp",waypointIndex:144,position:[2.5,4.6,20.2],forward:[-.0535,.7051,-.7071],width:6.3,surfaceType:"ramp_wood"}],Up=[{id:"lollipop_jump_ramp",name:"Giant Lollipop Jump Ramp",type:"tabletop_jump_ramp",start:[-13.2,9,14.2],apex:[-15,10.55,11.2],end:[-15,9,8],width:4.6,slopeNormal:[0,.948,-.318],boostMultiplier:1.25,description:"Wooden tabletop jump ramp launching cars cleanly over the Giant Rainbow Swirl Lollipop."},{id:"sink_cutting_board_bridge",name:"Double Sink Cutting-Board & Dish-Rack Bridge",type:"flat_bridge",start:[-13.5,9,-6.5],apex:[-13.5,9.25,-10],end:[-13.5,9,-13.5],width:4.4,slopeNormal:[0,1,0],boostMultiplier:1,description:"Wooden cutting board and stainless wire dish rack spanning the double kitchen sink."},{id:"bacon_strip_chicane_bridge",name:"Crispy Wavy Bacon Strip Chicane Bridge",type:"wavy_bridge",start:[-12.2,9,-17.8],apex:[-9.5,9.28,-18.6],end:[-6.8,9,-18.8],width:4.8,slopeNormal:[0,.99,.14],boostMultiplier:1.1,description:"Giant crispy wavy bacon strips laid across the back-left counter corner."},{id:"counter_to_floor_ramp",name:"Counter-to-Floor Launch Ramp",type:"elevation_ramp_down",start:[15.5,9,-12.5],apex:[15.5,4.5,-3.5],end:[15.5,0,5.5],width:5,slopeNormal:[0,.894,.447],boostMultiplier:1.35,description:"Long wooden launch ramp descending from the right-hand stove counter down to the hardwood floor."},{id:"floor_to_counter_ramp",name:"Floor-to-Counter Return Ramp",type:"elevation_ramp_up",start:[2.5,0,25.5],apex:[2.2,4.5,20.8],end:[1.5,9,16.2],width:5,slopeNormal:[0,.72,.69],boostMultiplier:1.2,description:"Steep wooden return ramp climbing from the hardwood floor back onto the white quartz peninsula."}],Fp=[{id:"giant_lollipop_candy_head",name:"Giant Rainbow Swirl Lollipop (Candy Disc)",type:"giant_lollipop",colliderType:"cylinder",position:[-18.2,10.35,11.2],size:[3.2,2.7,3.2],radius:1.6,rotationY:.35,color:"#ff2e88",secondaryColor:"#ffee33",stickStart:[-18.2,9.35,11.2],stickEnd:[-12.5,9.22,11.2],description:"Giant rainbow swirl lollipop lying across the counter directly beneath the Lollipop Jump Ramp!"},{id:"cereal_box_crunchy_loops",name:"Crunchy Fruit Loops Cereal Box",type:"cereal_box",colliderType:"box",position:[-10.5,11.1,4.2],size:[2.2,4.2,1.1],rotationY:-.35,color:"#ff5722",secondaryColor:"#ffd54f"},{id:"cereal_box_honey_stars",name:"Honey Stars Giant Family Cereal Box",type:"cereal_box",colliderType:"box",position:[-5.2,11.2,-15.4],size:[2.4,4.4,1.2],rotationY:.18,color:"#ffc107",secondaryColor:"#1e88e5"},{id:"cereal_box_choco_pops",name:"Choco Pops Cereal Box",type:"cereal_box",colliderType:"box",position:[1.2,11,-21.8],size:[2.1,4,1.1],rotationY:-.12,color:"#5d4037",secondaryColor:"#ffca28"},{id:"peninsula_red_snack_box",name:"Red Cookie & Snack Box (From Photo Foreground)",type:"cereal_box",colliderType:"box",position:[-4.5,9.75,11.8],size:[3.2,1.5,2.4],rotationY:.28,color:"#c62828",secondaryColor:"#ffcc80"},{id:"curious_goat_coffee_bag",name:"Curious Goat White Coffee Bag (From Photo Peninsula)",type:"cereal_box",colliderType:"box",position:[-11.8,10.45,19.2],size:[1.4,2.9,1.1],rotationY:.42,color:"#f5f5f5",secondaryColor:"#212121"},{id:"ceramic_bowl_blue_rim",name:"Large Ceramic Mixing Bowl",type:"ceramic_bowl",colliderType:"cylinder",position:[-17.4,9.75,-.5],size:[2.4,1.5,2.4],radius:1.2,rotationY:0,color:"#e3f2fd",secondaryColor:"#1976d2"},{id:"ceramic_bowl_cereal_spoon",name:"Ceramic Breakfast Bowl with Milk",type:"ceramic_bowl",colliderType:"cylinder",position:[-.8,9.65,-15.2],size:[2.1,1.3,2.1],radius:1.05,rotationY:.5,color:"#fff8e1",secondaryColor:"#ff8f00"},{id:"ceramic_bowl_peninsula",name:"Pink Ceramic Fruit Bowl",type:"ceramic_bowl",colliderType:"cylinder",position:[-8.2,9.65,19.6],size:[2.2,1.3,2.2],radius:1.1,rotationY:0,color:"#fce4ec",secondaryColor:"#d81b60"},{id:"cutlery_chef_knife_1",name:"Stainless Steel Chef's Knife (Chicane Barrier)",type:"cutlery_knife",colliderType:"box",position:[-17.2,9.18,2.8],size:[.55,.35,3.4],rotationY:.15,color:"#dfe4ea",secondaryColor:"#1e272e"},{id:"cutlery_chef_knife_2",name:"Serrated Bread Knife (Back Counter Guide Rail)",type:"cutlery_knife",colliderType:"box",position:[-5.8,9.18,-21.6],size:[3.5,.35,.55],rotationY:.08,color:"#dfe4ea",secondaryColor:"#1e272e"},{id:"cutlery_dinner_fork_1",name:"Oversized Stainless Steel Dinner Fork",type:"cutlery_fork",colliderType:"box",position:[-10.4,9.16,-1.2],size:[.6,.3,2.9],rotationY:-.22,color:"#ced6e0",secondaryColor:"#a4b0be"},{id:"cutlery_dinner_fork_2",name:"Stainless Steel Salad Fork (Stove Approach)",type:"cutlery_fork",colliderType:"box",position:[8.5,9.16,-15.2],size:[2.8,.3,.6],rotationY:-.1,color:"#ced6e0",secondaryColor:"#a4b0be"},{id:"cutlery_soup_spoon_1",name:"Polished Stainless Soup Spoon",type:"cutlery_spoon",colliderType:"box",position:[-16.8,9.16,-14.2],size:[.7,.3,2.8],rotationY:.38,color:"#eccc68",secondaryColor:"#dfe4ea"},{id:"cutlery_soup_spoon_2",name:"Stainless Tablespoon (Peninsula Guard)",type:"cutlery_spoon",colliderType:"box",position:[-6.2,9.16,19.2],size:[2.8,.3,.7],rotationY:.05,color:"#dfe4ea",secondaryColor:"#a4b0be"},{id:"bacon_strip_guard_left",name:"Crispy Wavy Bacon Strip (Inner Corner Curb)",type:"bacon_strip",colliderType:"box",position:[-8.2,9.18,-15.6],size:[3.4,.32,.9],rotationY:.42,color:"#8d2319",secondaryColor:"#d97b59"},{id:"bacon_strip_guard_right",name:"Crispy Wavy Bacon Strip (Outer Corner Curb)",type:"bacon_strip",colliderType:"box",position:[-11.5,9.18,-21.6],size:[3.6,.32,.9],rotationY:.32,color:"#8d2319",secondaryColor:"#d97b59"},{id:"appliance_sodastream",name:"Black SodaStream Sparkling Water Maker",type:"appliance",colliderType:"box",position:[-21.8,11.2,13.5],size:[2.2,4.4,2.4],rotationY:.2,color:"#18191c",secondaryColor:"#cfd8dc"},{id:"appliance_smart_display",name:"White Smart Kitchen Screen Display",type:"appliance",colliderType:"box",position:[-19.2,9.8,15.2],size:[2.1,1.6,1.1],rotationY:.45,color:"#f5f6fa",secondaryColor:"#3742fa"},{id:"appliance_toaster_oven",name:"Stainless Steel Countertop Toaster Oven",type:"appliance",colliderType:"box",position:[-20.2,10.6,6.2],size:[3.8,3.2,5.2],rotationY:.05,color:"#b0bec5",secondaryColor:"#263238"},{id:"appliance_espresso_machine",name:"Chrome Espresso & Cappuccino Maker",type:"appliance",colliderType:"box",position:[-19.8,11.1,-2.5],size:[3.6,4.2,4],rotationY:0,color:"#cfd8dc",secondaryColor:"#1c1c1c"},{id:"appliance_gas_stove_grates",name:"6-Burner Stainless Gas Range (Back Wall side)",type:"appliance_stove",colliderType:"box",position:[6.5,9.35,-22.2],size:[11.5,.7,2.6],rotationY:0,color:"#cfd8dc",secondaryColor:"#212121"},{id:"floor_stainless_trash_bin",name:"Light Grey / Stainless Rectangular Kitchen Trash Bin",type:"trash_bin",colliderType:"box",position:[20.5,3.2,1.5],size:[3.2,6.4,2.4],rotationY:-.1,color:"#c8cacd",secondaryColor:"#8d9096"},{id:"floor_barstool_left",name:"Curved Walnut & Black Leather Barstool (Left)",type:"barstool",colliderType:"cylinder",position:[-16.5,4.8,23.2],size:[4.2,9.6,4.2],radius:2.1,rotationY:.4,color:"#3e2723",secondaryColor:"#1a1a1a"},{id:"floor_barstool_right",name:"Curved Walnut & Black Leather Barstool (Right)",type:"barstool",colliderType:"cylinder",position:[-5.8,4.8,24.5],size:[4.4,9.6,4.4],radius:2.2,rotationY:-.25,color:"#3e2723",secondaryColor:"#1a1a1a"}],Np=[{id:"dyn_floral_tissue_box",name:"Floral Pattern Tissue Box (Peninsula)",type:"tissue_box",colliderType:"box",position:[-8.8,9.6,13.8],size:[2.2,1.2,1.3],radius:1.1,mass:.8,rotationY:.15,color:"#e1bee7"},{id:"dyn_wooden_napkin_holder",name:"Wooden Napkin Dispenser (Peninsula Corner)",type:"napkin_holder",colliderType:"box",position:[-2.2,9.5,19.5],size:[2,.9,1.4],radius:1,mass:1.1,rotationY:-.35,color:"#d7ccc8"},{id:"dyn_pink_coffee_mug",name:"Pink Ceramic Coffee Mug (Near Sink)",type:"coffee_cup",colliderType:"sphere",position:[-11.5,9.55,-5.2],size:[1,1.1,1],radius:.65,mass:.6,rotationY:0,color:"#f48fb1"},{id:"dyn_blue_coffee_mug",name:"Blue Ceramic Coffee Mug",type:"coffee_cup",colliderType:"sphere",position:[-11.2,9.55,8.2],size:[1,1.1,1],radius:.65,mass:.6,rotationY:1.1,color:"#42a5f5"},{id:"dyn_espresso_cup_white",name:"White Ceramic Espresso Cup",type:"coffee_cup",colliderType:"sphere",position:[-15.8,9.45,-1],size:[.85,.9,.85],radius:.55,mass:.45,rotationY:.4,color:"#ffffff"},{id:"dyn_yellow_cereal_mug",name:"Sunny Yellow Latte Cup (Back Counter)",type:"coffee_cup",colliderType:"sphere",position:[3.2,9.55,-16.2],size:[1,1.1,1],radius:.65,mass:.6,rotationY:-.5,color:"#ffee58"},{id:"dyn_spice_jar_paprika",name:"Smoked Paprika Spice Jar",type:"spice_jar",colliderType:"sphere",position:[-4.2,9.5,-19.8],size:[.75,1,.75],radius:.5,mass:.4,rotationY:0,color:"#d84315"},{id:"dyn_spice_jar_ basil",name:"Sweet Basil Glass Shaker",type:"spice_jar",colliderType:"sphere",position:[11.2,9.5,-18.8],size:[.75,1,.75],radius:.5,mass:.4,rotationY:.2,color:"#2e7d32"},{id:"dyn_floor_blue_gift_bag",name:"Blue Paper Shopping Bag on Hardwood Floor",type:"gift_bag",colliderType:"box",position:[18.5,.35,16.8],size:[2.8,.6,3.6],radius:1.6,mass:.5,rotationY:.45,color:"#039be5"},{id:"dyn_floor_white_slipper_left",name:"White Slide Slipper (Left)",type:"slipper",colliderType:"box",position:[-4.5,.25,22.8],size:[1.1,.45,2.2],radius:.9,mass:.35,rotationY:.55,color:"#eceff1"},{id:"dyn_floor_white_slipper_right",name:"White Slide Slipper (Right)",type:"slipper",colliderType:"box",position:[-2.8,.25,23.4],size:[1.1,.45,2.2],radius:.9,mass:.35,rotationY:.25,color:"#eceff1"}],Op={metadata:Rp,startGrid:Pp,architecture:Lp,trackWaypoints:Dp,checkpoints:Ip,ramps:Up,staticObstacles:Fp,dynamicProps:Np};class Ai{static createMultiplicationChartTexture(){const t=document.createElement("canvas");t.width=512,t.height=640;const e=t.getContext("2d");e.fillStyle="#fcfbf7",e.fillRect(0,0,t.width,t.height),e.fillStyle="#1e293b",e.fillRect(20,18,472,48),e.fillStyle="#ffffff",e.font="bold 26px sans-serif",e.textAlign="center",e.fillText("MULTIPLICATION TABLE 1x - 12x",256,50);const n=["#ef5350","#ec407a","#ab47bc","#7e57c2","#5c6bc0","#42a5f5","#26c6da","#26a69a","#66bb6a","#9ccc65","#ffca28","#ffa726"],s=3,r=4,a=22,o=80,c=(t.width-a*2-16)/s,l=(t.height-o-24)/r;for(let h=0;h<12;h++){const f=h%s,p=Math.floor(h/s),g=a+f*(c+8),v=o+p*(l+6);e.fillStyle=n[h],e.fillRect(g,v,c,l-4),e.fillStyle="rgba(255,255,255,0.92)",e.fillRect(g+4,v+22,c-8,l-30),e.fillStyle="#ffffff",e.font="bold 14px monospace",e.textAlign="center",e.fillText(`${h+1} TIMES`,g+c/2,v+16),e.fillStyle="#1e293b",e.font="bold 9px monospace";for(let m=1;m<=8;m++)e.fillText(`${h+1} x ${m} = ${(h+1)*m}`,g+c/2,v+34+(m-1)*11)}const d=new Ei(t);return d.colorSpace=me,d}static createRedCalendarTexture(){const t=document.createElement("canvas");t.width=256,t.height=384;const e=t.getContext("2d");e.fillStyle="#b71c1c",e.fillRect(0,0,256,384),e.strokeStyle="#ffd54f",e.lineWidth=6,e.strokeRect(10,10,236,364),e.fillStyle="#ffd54f",e.beginPath(),e.arc(128,76,40,0,Math.PI*2),e.fill(),e.fillStyle="#b71c1c",e.font="bold 34px serif",e.textAlign="center",e.fillText("福",128,88),e.fillStyle="#fffdf9",e.fillRect(24,145,208,210),e.fillStyle="#c62828",e.fillRect(24,145,208,36),e.fillStyle="#ffffff",e.font="bold 18px sans-serif",e.fillText("OCTOBER 2026",128,169),e.fillStyle="#334155",e.font="bold 13px monospace";for(let s=0;s<5;s++)for(let r=0;r<7;r++){const a=s*7+r+1;a<=31&&(e.fillStyle=r===0||r===6?"#d32f2f":"#1e293b",e.fillText(String(a),42+r*28,208+s*30))}const n=new Ei(t);return n.colorSpace=me,n}static createSmartDisplayTexture(){const t=document.createElement("canvas");t.width=256,t.height=192;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,256,192);n.addColorStop(0,"#0f172a"),n.addColorStop(1,"#1e3a8a"),e.fillStyle=n,e.fillRect(0,0,256,192),e.fillStyle="#38bdf8",e.font="bold 16px sans-serif",e.fillText("KITCHEN HUB • 22°C",20,34),e.fillStyle="#ffffff",e.font="bold 42px monospace",e.fillText("09:42",20,88),e.fillStyle="#facc15",e.font="bold 14px sans-serif",e.fillText("⚡ F1 COUNTERTOP GP LIVE",20,128),e.fillStyle="rgba(255,255,255,0.15)",e.fillRect(20,144,216,28),e.fillStyle="#4ade80",e.font="12px monospace",e.fillText("TRACK TEMP: OPTIMAL",30,162);const s=new Ei(t);return s.colorSpace=me,s}static createCheckeredTexture(t=12,e=2){const n=document.createElement("canvas");n.width=512,n.height=128;const s=n.getContext("2d"),r=n.width/t,a=n.height/e;for(let c=0;c<e;c++)for(let l=0;l<t;l++)s.fillStyle=(l+c)%2===0?"#ffffff":"#11151c",s.fillRect(l*r,c*a,r,a);const o=new Ei(n);return o.wrapS=cn,o.wrapT=cn,o.colorSpace=me,o}static createBoostChevronTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#1e293b",e.fillRect(0,0,256,256),e.fillStyle="#f59e0b",e.fillRect(0,0,18,256),e.fillRect(238,0,18,256);const n=["#00e5ff","#ffd13b","#ff2a3c"];for(let r=0;r<3;r++){const a=35+r*75;e.strokeStyle=n[r%n.length],e.lineWidth=18,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(52,a+45),e.lineTo(128,a),e.lineTo(204,a+45),e.stroke()}const s=new Ei(t);return s.wrapS=cn,s.wrapT=cn,s.colorSpace=me,s}}class Bp{constructor(t,e,n){W(this,"scene");W(this,"data");W(this,"dynamicBodies",[]);W(this,"loadedTexturesCount",0);W(this,"totalTexturesToLoad",6);W(this,"textures",{});W(this,"chevronTexture");this.scene=t,this.data=e,this.loadNanoBananaTextures(n.capabilities.getMaxAnisotropy()),this.chevronTexture=Ai.createBoostChevronTexture(),this.setupLighting(),this.buildRoomShell(),this.buildArchitecture(),this.buildRaceTrackRibbon(),this.buildRampsAndBridges(),this.buildStaticObstacles(),this.buildDynamicProps()}loadNanoBananaTextures(t){const e=new wp,n=[{key:"stone_benchtop",url:"/textures/stone_benchtop.png",repeat:[4,4]},{key:"hardwood_floor",url:"/textures/hardwood_floor.png",repeat:[10,10]},{key:"brushed_metal",url:"/textures/brushed_metal.png",repeat:[2,2]},{key:"cereal_box",url:"/textures/cereal_box.png",repeat:[1,1]},{key:"lollipop_swirl",url:"/textures/lollipop_swirl.png",repeat:[1,1]},{key:"bacon_strip",url:"/textures/bacon_strip.png",repeat:[2,1]}];for(const s of n){const r=e.load(s.url,()=>{this.loadedTexturesCount++},void 0,()=>{this.loadedTexturesCount++});r.wrapS=cn,r.wrapT=cn,r.repeat.set(s.repeat[0],s.repeat[1]),r.colorSpace=me,r.anisotropy=Math.min(8,t||4),this.textures[s.key]=r}}setupLighting(){this.scene.background=new Nt("#1a1e26"),this.scene.fog=new Kr("#1a1e26",.0045);const t=new Tp("#fff8eb","#382e28",1.15);t.position.set(0,28,0),this.scene.add(t);const e=new Cp("#fff3db",2.2);e.position.set(-28,26,-6),e.target.position.set(0,6,4),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=2,e.shadow.camera.far=75;const n=32;e.shadow.camera.left=-n,e.shadow.camera.right=n,e.shadow.camera.top=n,e.shadow.camera.bottom=-n,e.shadow.bias=-5e-4,this.scene.add(e),this.scene.add(e.target);const s=[[-10,22.5,14],[-12,22.5,-8],[6,22.5,-14],[10,22.5,12]];for(const[r,a,o]of s){const c=new bp("#ffe8bf",65,38,1.5);c.position.set(r,a,o),this.scene.add(c);const l=new le(.65,.65,.15,16),d=new Ge({color:"#fff9e6"}),h=new Q(l,d);h.position.set(r,23.85,o),this.scene.add(h)}}buildRoomShell(){const t=new Ke(76,76),e=new Et({map:this.textures.hardwood_floor,color:"#d4a373",roughness:.38,metalness:.05}),n=new Q(t,e);n.rotation.x=-Math.PI/2,n.position.set(0,0,2),n.receiveShadow=!0,this.scene.add(n);const s=new Et({color:"#eae6df",roughness:.85,metalness:.02}),r=new Q(new yt(72,26,1.2),s);r.position.set(0,13,-24.6),r.receiveShadow=!0,this.scene.add(r);const a=new Q(new yt(1.2,26,64),s);a.position.set(-24.6,13,2),a.receiveShadow=!0,this.scene.add(a);const o=new Q(new yt(1.2,26,64),s);o.position.set(28.5,13,2),o.receiveShadow=!0,this.scene.add(o);const c=new Q(new Ke(76,76),new Et({color:"#f5f3ef",roughness:.9}));c.rotation.x=Math.PI/2,c.position.set(0,24,2),this.scene.add(c);const l=new Et({color:"#dce1e5",roughness:.25,metalness:.1}),d=new Q(new yt(44,6.2,.3),l);d.position.set(2,12.1,-23.9),this.scene.add(d);const h=new Q(new yt(.3,6.2,36),l);h.position.set(-23.9,12.1,-6),this.scene.add(h)}buildArchitecture(){const{counterSlabs:t,baseCabinets:e,upperCabinets:n,pantryAndWalls:s}=this.data.architecture,r=new Et({map:this.textures.stone_benchtop,color:"#f7f5f0",roughness:.22,metalness:.05});for(const h of t){const f=new Q(new yt(h.size[0],h.size[1],h.size[2]),r);f.position.set(h.center[0],h.center[1],h.center[2]),f.castShadow=!0,f.receiveShadow=!0,this.scene.add(f)}const a=new Q(new yt(.65,9,12),r);a.position.set(3.7,4.5,16),a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a),this.buildDoubleSinkAndFaucet();for(const h of e){const f=new Et({color:h.color,roughness:.55,metalness:.08}),p=new Q(new yt(h.size[0],h.size[1],h.size[2]),f);p.position.set(h.center[0],h.center[1],h.center[2]),p.castShadow=!0,p.receiveShadow=!0,this.scene.add(p)}for(const h of n){const f=new de;f.position.set(h.center[0],h.center[1],h.center[2]);const p=new Et({color:h.color,roughness:.5}),g=new Q(new yt(h.size[0],h.size[1],h.size[2]),p);g.castShadow=!0,f.add(g);const v=new vp({color:h.frostedGlassColor,roughness:.35,transmission:.35,transparent:!0,opacity:.85}),m=h.size[2]>h.size[0],u=m?new yt(.18,h.size[1]-.8,h.size[2]-.8):new yt(h.size[0]-.8,h.size[1]-.8,.18),w=new Q(u,v);m?w.position.set(h.size[0]/2+.05,0,0):w.position.set(0,0,h.size[2]/2+.05),f.add(w),this.scene.add(f),h.hasChineseKnot&&h.chineseKnotPosition&&this.buildChineseKnotOrnament(h.chineseKnotPosition)}for(const h of s){const f=new Et({color:h.color,roughness:.6}),p=new Q(new yt(h.size[0],h.size[1],h.size[2]),f);if(p.position.set(h.center[0],h.center[1],h.center[2]),p.castShadow=!0,p.receiveShadow=!0,this.scene.add(p),h.calendarPosition){const g=Ai.createRedCalendarTexture(),v=new Q(new Ke(3.2,4.8),new Et({map:g,roughness:.5}));v.position.set(h.calendarPosition[0],h.calendarPosition[1],h.calendarPosition[2]+.08),this.scene.add(v)}if(h.chartPosition){const g=Ai.createMultiplicationChartTexture(),v=new Q(new Ke(4.2,5.4),new Et({map:g,roughness:.45}));v.rotation.y=-Math.PI/2,v.position.set(h.chartPosition[0]-.08,h.chartPosition[1],h.chartPosition[2]),this.scene.add(v)}h.id==="sink_window_with_blinds"&&this.buildWindowBlinds(h.center,h.size)}const o=new de;o.position.set(6.5,17.5,-21.5);const c=new Et({map:this.textures.brushed_metal,color:"#d0d7de",metalness:.75,roughness:.28}),l=new Q(new yt(11.2,1.2,4.4),c);l.position.set(0,-2.2,0),o.add(l);const d=new Q(new yt(3.6,5.5,2.8),c);d.position.set(0,1.1,-.5),o.add(d),this.scene.add(o)}buildDoubleSinkAndFaucet(){const t=new de;t.position.set(-15.2,8.95,-10);const e=new Et({map:this.textures.brushed_metal,color:"#cfd8dc",metalness:.82,roughness:.24}),n=new Q(new yt(5.6,.14,7.8),e);t.add(n);const s=new Et({color:"#37474f",metalness:.65,roughness:.35}),r=new Q(new yt(4.6,.16,3.3),s);r.position.set(0,.02,-1.85),t.add(r);const a=new Q(new yt(4.6,.16,3.3),s);a.position.set(0,.02,1.85),t.add(a);const o=new Q(new le(.22,.26,2.2,16),e);o.position.set(-2.4,1.1,0),t.add(o);const c=new Q(new an(.95,.16,12,24,Math.PI),e);c.position.set(-1.45,2.2,0),t.add(c),this.scene.add(t)}buildChineseKnotOrnament(t){const e=new de;e.position.set(t[0],t[1],t[2]);const n=new Et({color:"#d50000",roughness:.4,emissive:"#3a0000"}),s=new Et({color:"#ffd700",metalness:.7,roughness:.3}),r=new Q(new $r(.65,0),n);r.scale.set(.4,1,1),e.add(r);const a=new Q(new an(.22,.05,8,16),s);a.position.set(0,.8,0),a.rotation.y=Math.PI/2,e.add(a);const o=new Q(new le(.08,.22,1.4,12),n);o.position.set(0,-1.1,0),e.add(o),this.scene.add(e)}buildWindowBlinds(t,e){const n=new de;n.position.set(t[0],t[1],t[2]);const s=new Q(new yt(.2,e[1]-.6,e[2]-.6),new Ge({color:"#fff9e6"}));n.add(s);const r=new Et({color:"#e6d7c3",roughness:.5}),a=16;for(let o=0;o<a;o++){const c=-e[1]/2+.5+o/a*(e[1]-1),l=new Q(new yt(.45,.12,e[2]-.8),r);l.position.set(.15,c,0),l.rotation.z=.25,n.add(l)}this.scene.add(n)}buildRaceTrackRibbon(){const t=this.data.trackWaypoints,e=t.length,n=[],s=[],r=[],a=[],o=[],c=[],l=.04,d=.42;for(let u=0;u<=e;u++){const w=t[u%e],T=new R(...w.position),M=new R(...w.right).normalize(),U=w.width*.48,A=T.clone().addScaledVector(M,-U),b=T.clone().addScaledVector(M,U);n.push(A.x,A.y+l,A.z),n.push(b.x,b.y+l,b.z);const P=u*.25;s.push(0,P,1,P);const y=A.clone().addScaledVector(M,-d),_=b.clone().addScaledVector(M,d),C=u%2===0,O=C?.92:.96,B=C?.15:.96,Y=C?.2:.96;a.push(y.x,y.y+l+.02,y.z,A.x,A.y+l+.02,A.z,b.x,b.y+l+.02,b.z,_.x,_.y+l+.02,_.z);for(let X=0;X<4;X++)o.push(O,B,Y);if(u<e){const X=u*2;r.push(X,X+1,X+2),r.push(X+1,X+3,X+2);const G=u*4;c.push(G,G+1,G+4),c.push(G+1,G+5,G+4),c.push(G+2,G+3,G+6),c.push(G+3,G+7,G+6)}}const h=new Te;h.setAttribute("position",new oe(n,3)),h.setAttribute("uv",new oe(s,2)),h.setIndex(r),h.computeVertexNormals();const f=new Et({color:"#2b303a",roughness:.65,metalness:.1,transparent:!0,opacity:.82,side:Fe}),p=new Q(h,f);p.receiveShadow=!0,this.scene.add(p);const g=new Te;g.setAttribute("position",new oe(a,3)),g.setAttribute("color",new oe(o,3)),g.setIndex(c),g.computeVertexNormals();const v=new Et({vertexColors:!0,roughness:.45,side:Fe}),m=new Q(g,v);m.receiveShadow=!0,this.scene.add(m),this.buildStartFinishGantry()}buildStartFinishGantry(){const t=this.data.trackWaypoints[0],e=new de;e.position.set(t.position[0],t.position[1],t.position[2]),e.rotation.y=this.data.startGrid.rotationY;const n=Ai.createCheckeredTexture(12,2),s=new Q(new Ke(t.width,1.2),new Ge({map:n,side:Fe}));s.rotation.x=-Math.PI/2,s.position.set(0,.07,0),e.add(s);const r=new Et({color:"#1e293b",metalness:.7,roughness:.3}),a=t.width*.56,o=new Q(new le(.14,.18,3.6,12),r);o.position.set(-a,1.8,0),e.add(o);const c=new Q(new le(.14,.18,3.6,12),r);c.position.set(a,1.8,0),e.add(c);const l=new Q(new yt(a*2+.5,.65,.45),r);l.position.set(0,3.5,0),e.add(l);for(let d=-2;d<=2;d++){const h=new Q(new Fi(.15,12,12),new Ge({color:"#ff1744"}));h.position.set(d*.75,3.5,.26),e.add(h)}this.scene.add(e)}buildRampsAndBridges(){for(const t of this.data.ramps)this.buildSingleRamp(t)}buildSingleRamp(t){const e=new R(...t.start),n=new R(...t.apex),s=new R(...t.end);t.id==="lollipop_jump_ramp"?(this.createRampSegment(e,n,t.width,this.chevronTexture,"#f59e0b",!0),this.createRampSegment(n,s,t.width,this.textures.hardwood_floor,"#d97706",!1)):t.id==="sink_cutting_board_bridge"?this.createRampSegment(e,s,t.width,this.textures.hardwood_floor,"#deb887",!1,.28):t.id==="bacon_strip_chicane_bridge"?this.createRampSegment(e,s,t.width,this.textures.bacon_strip,"#c0564b",!1,.24):this.createRampSegment(e,s,t.width,this.chevronTexture,"#eab308",!0,.35)}createRampSegment(t,e,n,s,r,a=!0,o=.25){const c=new R().subVectors(e,t),l=c.length(),d=new R().addVectors(t,e).multiplyScalar(.5),h=new de;h.position.copy(d);const f=c.clone().normalize(),p=new R(0,1,0),g=new R().crossVectors(p,f).normalize(),v=new R().crossVectors(f,g).normalize(),m=new se().makeBasis(g,v,f);h.quaternion.setFromRotationMatrix(m);const u=new Et({map:s,roughness:.4,metalness:.15}),w=new Q(new yt(n,o,l),u);if(w.castShadow=!0,w.receiveShadow=!0,h.add(w),a){const T=new Et({color:r,roughness:.3,emissive:r,emissiveIntensity:.2}),M=new Q(new yt(.22,.42,l),T);M.position.set(-n/2+.11,.22,0),h.add(M);const U=new Q(new yt(.22,.42,l),T);U.position.set(n/2-.11,.22,0),h.add(U)}this.scene.add(h)}buildStaticObstacles(){for(const t of this.data.staticObstacles){const e=this.createStaticObstacleMesh(t);this.scene.add(e)}}createStaticObstacleMesh(t){const e=new de;switch(e.position.set(t.position[0],t.position[1],t.position[2]),e.rotation.y=t.rotationY||0,t.type){case"giant_lollipop":{const n=t.radius||1.6,s=new le(n,n,.65,32),r=new Et({map:this.textures.lollipop_swirl,roughness:.15,metalness:.05}),a=new Q(s,r);if(a.rotation.z=Math.PI/2,a.castShadow=!0,e.add(a),t.stickStart&&t.stickEnd){const o=new R(...t.stickStart),c=new R(...t.stickEnd),l=o.distanceTo(c),d=o.clone().add(c).multiplyScalar(.5),h=new Q(new le(.14,.14,l,12),new Et({color:"#ffffff",roughness:.3}));h.position.copy(d),h.rotation.z=Math.PI/2,h.castShadow=!0,this.scene.add(h)}break}case"cereal_box":{const n=new yt(t.size[0],t.size[1],t.size[2]),s=new Et({map:this.textures.cereal_box,color:t.color,roughness:.42}),r=new Q(n,s);r.castShadow=!0,r.receiveShadow=!0,e.add(r);break}case"ceramic_bowl":{const n=t.radius||1.1,s=t.size[1],r=new le(n,n*.68,s,24),a=new Et({color:t.color,roughness:.18,metalness:.05}),o=new Q(r,a);o.castShadow=!0,e.add(o);const c=new Q(new le(n*.88,n*.88,.1,20),new Et({color:t.secondaryColor||"#fff8e1",roughness:.3}));c.position.y=s*.35,e.add(c);break}case"cutlery_knife":case"cutlery_fork":case"cutlery_spoon":{const n=new Et({map:this.textures.brushed_metal,color:"#e2e8f0",metalness:.88,roughness:.18}),s=new Et({color:t.secondaryColor||"#1e272e",roughness:.5}),r=t.size[2]>t.size[0],a=Math.max(t.size[0],t.size[2]),o=Math.min(t.size[0],t.size[2]),c=new de;r||(c.rotation.y=Math.PI/2);const l=new Q(new yt(o*.65,t.size[1],a*.42),s);if(l.position.set(0,0,-a*.28),l.castShadow=!0,c.add(l),t.type==="cutlery_knife"){const d=new Q(new yt(o*.25,t.size[1]*.9,a*.58),n);d.position.set(0,0,a*.2),d.castShadow=!0,c.add(d)}else if(t.type==="cutlery_fork")for(let d=-1.5;d<=1.5;d+=1){const h=new Q(new yt(o*.12,t.size[1]*.5,a*.45),n);h.position.set(d*o*.2,0,a*.22),c.add(h)}else{const d=new Q(new Fi(o*.55,16,12),n);d.scale.set(1,.35,1.5),d.position.set(0,0,a*.25),c.add(d)}e.add(c);break}case"bacon_strip":{const n=new Et({map:this.textures.bacon_strip,color:"#b83b2b",roughness:.45}),s=new Q(new yt(t.size[0],t.size[1],t.size[2]),n);s.castShadow=!0,e.add(s);break}case"appliance_stove":{const n=new Et({map:this.textures.brushed_metal,color:"#cfd8dc",metalness:.8,roughness:.25}),s=new Q(new yt(t.size[0],t.size[1],t.size[2]),n);s.castShadow=!0,e.add(s);const r=new Et({color:"#1e2229",roughness:.7,metalness:.4}),a=new Ge({color:"#00e5ff"});for(let o=-1;o<=1;o++){const c=new Q(new yt(3.2,.22,2.2),r);c.position.set(o*3.6,t.size[1]*.55,0),e.add(c);const l=new Q(new an(.55,.06,8,20),a);l.rotation.x=Math.PI/2,l.position.set(o*3.6,t.size[1]*.58,0),e.add(l)}break}case"barstool":{const n=t.radius||2.1,s=t.size[1],r=new Et({color:"#3e2723",roughness:.45}),a=new Et({color:"#18191c",roughness:.35}),o=new Et({color:"#cfd8dc",metalness:.85,roughness:.2});for(let h=0;h<4;h++){const f=h*Math.PI/2+Math.PI/4,p=new Q(new le(.18,.12,s*.75,10),r);p.position.set(Math.cos(f)*(n*.55),-s*.12,Math.sin(f)*(n*.55)),p.castShadow=!0,e.add(p)}const c=new Q(new an(n*.56,.1,10,24),o);c.rotation.x=Math.PI/2,c.position.y=-s*.2,e.add(c);const l=new Q(new le(n*.75,n*.7,.65,24),a);l.position.y=s*.26,l.castShadow=!0,e.add(l);const d=new Q(new le(n*.76,n*.76,s*.22,20,1,!0,0,Math.PI),r);d.position.y=s*.38,e.add(d);break}default:{const n=t.id.includes("toaster")||t.id.includes("espresso")||t.id.includes("trash"),s=new Et({map:n?this.textures.brushed_metal:null,color:t.color,metalness:n?.72:.2,roughness:n?.28:.4}),r=new Q(new yt(t.size[0],t.size[1],t.size[2]),s);if(r.castShadow=!0,r.receiveShadow=!0,e.add(r),t.id==="appliance_smart_display"){const a=Ai.createSmartDisplayTexture(),o=new Q(new Ke(t.size[0]*.88,t.size[1]*.82),new Ge({map:a}));o.position.set(0,0,t.size[2]/2+.04),e.add(o)}else if(t.id==="appliance_toaster_oven"){const a=new Q(new yt(.1,t.size[1]*.6,t.size[2]*.68),new Et({color:"#263238",emissive:"#ff6d00",emissiveIntensity:.35,roughness:.2}));a.position.set(t.size[0]/2+.03,0,-.3),e.add(a)}break}}return e}buildDynamicProps(){for(const t of this.data.dynamicProps){const e=new de;if(e.position.set(t.position[0],t.position[1],t.position[2]),e.rotation.y=t.rotationY||0,t.type==="coffee_cup"||t.type==="spice_jar"){const n=t.size[0]*.48,s=t.size[1],r=new Et({color:t.color,roughness:.2,metalness:.05}),a=new Q(new le(n,n*.85,s,18),r);if(a.castShadow=!0,e.add(a),t.type==="coffee_cup"){const o=new Q(new an(s*.28,.08,8,16,Math.PI),r);o.rotation.z=-Math.PI/2,o.position.set(n,0,0),e.add(o);const c=new Q(new le(n*.88,n*.88,.05,16),new Et({color:"#3e2723",roughness:.15}));c.position.y=s*.44,e.add(c)}}else if(t.type==="tissue_box"){const n=new Q(new yt(t.size[0],t.size[1],t.size[2]),new Et({color:t.color,roughness:.45}));n.castShadow=!0,e.add(n);const s=new Q(new ai(.45,.65,8),new Et({color:"#ffffff",roughness:.6}));s.position.y=t.size[1]*.5+.25,e.add(s)}else{const n=new Q(new yt(t.size[0],t.size[1],t.size[2]),new Et({color:t.color,roughness:.5}));n.castShadow=!0,e.add(n)}this.scene.add(e),this.dynamicBodies.push({data:t,mesh:e,position:new R(...t.position),velocity:new R,angularVelocity:new R,rotation:new Ye(0,t.rotationY||0,0),restY:t.position[1],hitCount:0})}}}class fa{constructor(t){W(this,"id");W(this,"name");W(this,"isPlayer");W(this,"root");W(this,"chassisGroup");W(this,"frontLeftPivot");W(this,"frontRightPivot");W(this,"wheelMeshes",[]);W(this,"leftFlame");W(this,"rightFlame");W(this,"flameMat");W(this,"brakeLightMat");W(this,"driftSparks");W(this,"sparkPositions");W(this,"position",new R);W(this,"velocity",new R);W(this,"speed",0);W(this,"heading",0);W(this,"pitch",0);W(this,"roll",0);W(this,"verticalVelocity",0);W(this,"groundY",9);W(this,"isGrounded",!0);W(this,"airTime",0);W(this,"isDrifting",!1);W(this,"driftDirection",0);W(this,"driftCharge",.35);W(this,"boostTimer",0);W(this,"boostStrength",1);W(this,"hopOffset",0);W(this,"hopVelocity",0);W(this,"currentWaypointIndex",0);W(this,"currentCheckpointIndex",0);W(this,"checkpointsPassed",new Set([0]));W(this,"lap",1);W(this,"totalDistanceDriven",0);W(this,"finished",!1);W(this,"finishTimeMs",0);this.id=t.id,this.name=t.name,this.isPlayer=t.isPlayer,this.root=new de,this.chassisGroup=new de,this.root.add(this.chassisGroup),this.frontLeftPivot=new de,this.frontRightPivot=new de,this.flameMat=new Ge({color:"#00e5ff",transparent:!0,opacity:0}),this.brakeLightMat=new Ge({color:"#ff1744"}),this.leftFlame=new Q(new ai(.11,.75,10),this.flameMat),this.rightFlame=new Q(new ai(.11,.75,10),this.flameMat);const e=28;this.sparkPositions=new Float32Array(e*3);const n=new Te;n.setAttribute("position",new Xe(this.sparkPositions,3));const s=new Za({color:"#ffab00",size:.16,transparent:!0,opacity:.85});this.driftSparks=new xp(n,s),this.driftSparks.visible=!1,this.root.add(this.driftSparks),this.buildF1Mesh(t)}buildF1Mesh(t){const e=new Et({color:t.primaryColor,roughness:.22,metalness:.35}),n=new Et({color:t.accentColor,roughness:.28,metalness:.25}),s=new Et({color:"#181b22",roughness:.45,metalness:.4}),r=new Q(new yt(.92,.06,2.15),s);r.position.set(0,.14,-.05),r.castShadow=!0,this.chassisGroup.add(r);const a=new Q(new yt(.46,.26,1.35),e);a.position.set(0,.28,-.1),a.castShadow=!0,this.chassisGroup.add(a);const o=new ai(.24,.95,4);o.rotateY(Math.PI/4),o.rotateX(Math.PI/2);const c=new Q(o,e);c.scale.set(1,.58,1),c.position.set(0,.23,.92),c.castShadow=!0,this.chassisGroup.add(c);const l=new Q(new yt(1.22,.045,.28),s);l.position.set(0,.14,1.28),l.castShadow=!0,this.chassisGroup.add(l);const d=new Q(new yt(1.18,.035,.16),n);d.position.set(0,.18,1.22),d.rotation.x=-.18,this.chassisGroup.add(d);for(const y of[-1,1]){const _=new Q(new yt(.04,.2,.36),e);_.position.set(y*.61,.2,1.26),this.chassisGroup.add(_)}for(const y of[-1,1]){const _=new Q(new yt(.28,.22,.92),e);_.position.set(y*.34,.25,-.15),_.castShadow=!0,this.chassisGroup.add(_);const C=new Q(new yt(.29,.06,.86),n);C.position.set(y*.34,.28,-.14),this.chassisGroup.add(C)}const h=new Q(new yt(.26,.32,.68),e);h.position.set(0,.48,-.38),h.castShadow=!0,this.chassisGroup.add(h);const f=new Q(new yt(.04,.26,.62),n);f.position.set(0,.56,-.58),this.chassisGroup.add(f);const p=new Et({color:t.helmetColor,roughness:.15,metalness:.2}),g=new Q(new Fi(.16,16,16),p);g.position.set(0,.48,.06),this.chassisGroup.add(g);const v=new Q(new le(.165,.165,.09,16,1,!1,-Math.PI/3,2*Math.PI/3),new Et({color:"#11151c",metalness:.9,roughness:.1}));v.position.set(0,.49,.07),this.chassisGroup.add(v);const m=new Q(new an(.22,.028,8,20,Math.PI),s);m.rotation.x=Math.PI/2-.15,m.position.set(0,.53,.05),this.chassisGroup.add(m);const u=new Q(new le(.025,.025,.18,8),s);u.position.set(0,.45,.26),u.rotation.x=-.25,this.chassisGroup.add(u);const w=new Q(new yt(.96,.05,.26),s);w.position.set(0,.62,-.98),w.castShadow=!0,this.chassisGroup.add(w);const T=new Q(new yt(.94,.04,.16),n);T.position.set(0,.7,-1.02),T.rotation.x=.25,this.chassisGroup.add(T);for(const y of[-1,1]){const _=new Q(new yt(.04,.42,.36),e);_.position.set(y*.48,.54,-.98),this.chassisGroup.add(_)}const M=new Q(new yt(.08,.12,.05),this.brakeLightMat);M.position.set(0,.26,-1.12),this.chassisGroup.add(M),this.leftFlame.rotation.x=-Math.PI/2,this.leftFlame.position.set(-.12,.32,-1.35),this.chassisGroup.add(this.leftFlame),this.rightFlame.rotation.x=-Math.PI/2,this.rightFlame.position.set(.12,.32,-1.35),this.chassisGroup.add(this.rightFlame);const U=this.createWheel(.24,.22,t.accentColor);this.frontLeftPivot.position.set(.56,.24,.72),this.frontLeftPivot.add(U),this.chassisGroup.add(this.frontLeftPivot);const A=this.createWheel(.24,.22,t.accentColor);this.frontRightPivot.position.set(-.56,.24,.72),this.frontRightPivot.add(A),this.chassisGroup.add(this.frontRightPivot);const b=this.createWheel(.27,.28,t.accentColor);b.position.set(.58,.27,-.72),this.chassisGroup.add(b);const P=this.createWheel(.27,.28,t.accentColor);P.position.set(-.58,.27,-.72),this.chassisGroup.add(P),this.wheelMeshes.push(U,A,b,P)}createWheel(t,e,n){const s=new de,r=new Et({color:"#141619",roughness:.75,metalness:.1}),a=new Q(new le(t,t,e,20),r);a.rotation.z=Math.PI/2,a.castShadow=!0,s.add(a);const o=new Et({color:"#e2e8f0",metalness:.8,roughness:.25}),c=new Q(new le(t*.56,t*.56,e+.02,12),o);c.rotation.z=Math.PI/2,s.add(c);const l=new Ge({color:n});for(const d of[-1,1]){const h=new Q(new an(t*.78,.02,6,20),l);h.rotation.y=Math.PI/2,h.position.x=d*(e*.5+.005),s.add(h)}return s}updateVisuals(t,e,n){this.root.position.set(this.position.x,this.position.y+this.hopOffset,this.position.z),this.root.rotation.order="YXZ",this.root.rotation.y=this.heading,this.root.rotation.x=this.pitch;const s=-e*Math.min(1,Math.abs(this.speed)/18)*.14+(this.isDrifting?-this.driftDirection*.1:0);this.roll=Pe.lerp(this.roll,s,Math.min(1,t*12)),this.chassisGroup.rotation.z=this.roll,this.chassisGroup.rotation.y=this.isDrifting?this.driftDirection*.24:0;const r=.42;this.frontLeftPivot.rotation.y=e*r,this.frontRightPivot.rotation.y=e*r;const a=this.speed*t/.25;for(const o of this.wheelMeshes)o.rotation.x+=a;if(this.brakeLightMat.color.setHex(n?16717636:5570577),this.boostTimer>0||this.isDrifting&&this.driftCharge>.2){this.flameMat.opacity=.88,this.boostTimer>0?this.flameMat.color.setHex(58879):this.driftCharge>=.85?this.flameMat.color.setHex(13959417):this.driftCharge>=.5?this.flameMat.color.setHex(16748800):this.flameMat.color.setHex(58879);const o=.85+Math.random()*.45;this.leftFlame.scale.set(1,o,1),this.rightFlame.scale.set(1,o,1)}else this.flameMat.opacity=0;if((this.isDrifting||this.boostTimer>0)&&Math.abs(this.speed)>5){this.driftSparks.visible=!0;for(let o=0;o<this.sparkPositions.length;o+=3){const c=o/3%2===0?-.55:.55;this.sparkPositions[o]=c+(Math.random()-.5)*.35,this.sparkPositions[o+1]=.1+Math.random()*.35,this.sparkPositions[o+2]=-.85-Math.random()*1.1}this.driftSparks.geometry.attributes.position.needsUpdate=!0}else this.driftSparks.visible=!1}}class zp{constructor(t,e,n,s){W(this,"data");W(this,"dynamicBodies");W(this,"sound");W(this,"callbacks");W(this,"maxBaseSpeed",24.5);W(this,"maxBoostSpeed",33.5);W(this,"totalLaps",3);W(this,"totalPropsHit",0);W(this,"calloutCooldown",0);this.data=t,this.dynamicBodies=e,this.sound=n,this.callbacks=s}resetVehiclesToGrid(t,e){const n=this.data.trackWaypoints[0],s=new R(...n.forward).normalize(),r=new R(...n.right).normalize(),a=Math.atan2(s.x,s.z);t.forEach((o,c)=>{o.root.visible=c<e;const l=Math.floor(c/2),d=c%2===0?-1:1,h=new R(...n.position).addScaledVector(s,-l*2.4).addScaledVector(r,c===0?0:d*1.15);h.y=n.position[1],o.position.copy(h),o.velocity.set(0,0,0),o.speed=0,o.heading=a,o.pitch=0,o.roll=0,o.verticalVelocity=0,o.groundY=h.y,o.isGrounded=!0,o.airTime=0,o.isDrifting=!1,o.driftCharge=c===0?.45:.2,o.boostTimer=0,o.hopOffset=0,o.hopVelocity=0,o.currentWaypointIndex=0,o.currentCheckpointIndex=0,o.checkpointsPassed=new Set([0]),o.lap=1,o.totalDistanceDriven=-c*1.5,o.finished=!1,o.finishTimeMs=0,o.updateVisuals(.016,0,!1)})}respawnCarAtWaypoint(t){const e=this.data.trackWaypoints[t.currentWaypointIndex];t.position.set(e.position[0],e.position[1]+.15,e.position[2]),t.velocity.set(0,0,0),t.speed=0,t.verticalVelocity=0,t.heading=Math.atan2(e.forward[0],e.forward[2]),t.pitch=0,t.roll=0,t.isDrifting=!1,t.boostTimer=0}step(t,e,n,s,r){this.calloutCooldown>0&&(this.calloutCooldown=Math.max(0,this.calloutCooldown-t)),s.respawn&&(this.respawnCarAtWaypoint(e),this.callbacks.onCallout("TRACK RESPAWN","BACK ON RACING LINE")),this.updateVehiclePhysics(t,e,s,!0,r),n.forEach((o,c)=>{if(!o.root.visible)return;const l=this.computeAIInput(o,c,e);this.updateVehiclePhysics(t,o,l,!1,r)});const a=[e,...n.filter(o=>o.root.visible)];this.resolveCarToCarCollisions(a),this.updateDynamicProps(t,a)}computeAIInput(t,e,n){const s=this.data.trackWaypoints,r=(t.currentWaypointIndex+4)%s.length,a=s[r],o=(e-1)*.85,l=new R(...a.position).addScaledVector(new R(...a.right),o).sub(t.position);l.y=0;let h=Math.atan2(l.x,l.z)-t.heading;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;const f=Pe.clamp(h*2.1,-1,1),p=Math.abs(h)>.48,g=n.totalDistanceDriven-t.totalDistanceDriven,v=Pe.clamp(g*.012,-.1,.14),m=.86+e*.03+v;return{throttle:p?.68:Math.min(1,m),brake:0,steer:f,drift:p&&t.speed>14,boost:t.driftCharge>.75&&Math.abs(h)<.2,respawn:!1}}updateVehiclePhysics(t,e,n,s,r){if(n.boost&&e.driftCharge>=.3&&e.boostTimer<=0){const M=e.driftCharge>=.85?3:e.driftCharge>=.55?2:1;e.boostTimer=.9+M*.45,e.boostStrength=1.18+M*.08,e.driftCharge=Math.max(0,e.driftCharge-.45),s&&(this.sound.playBoostWhoosh(),this.calloutCooldown<=0&&(this.callbacks.onCallout(M===3?"PURPLE ULTRA TURBO!":"F1 DRS TURBO BOOST!",`TIER ${M} NITRO ENGAGED`),this.calloutCooldown=1.4))}e.boostTimer>0&&(e.boostTimer=Math.max(0,e.boostTimer-t));const a=e.boostTimer>0?this.maxBoostSpeed:this.maxBaseSpeed,o=e.boostTimer>0?34:21.5,c=28,l=4.2;n.throttle>0?e.speed+=n.throttle*o*t:n.brake>0?e.speed>.5?e.speed-=n.brake*c*t:e.speed-=n.brake*12*t:Math.abs(e.speed)>.2?e.speed-=Math.sign(e.speed)*l*t:e.speed=0,e.speed=Pe.clamp(e.speed,-9.5,a),n.drift&&e.isGrounded&&Math.abs(e.speed)>8.5?(e.isDrifting||(e.isDrifting=!0,e.driftDirection=n.steer!==0?Math.sign(n.steer):1,e.hopVelocity=2.6),e.driftCharge=Math.min(1,e.driftCharge+t*(.28+Math.abs(n.steer)*.22))):e.isDrifting?(e.driftCharge>=.55&&e.boostTimer<=0&&(e.boostTimer=.75,s&&this.sound.playBoostWhoosh()),e.isDrifting=!1,e.driftDirection=0):e.driftCharge=Math.min(1,e.driftCharge+t*.045),(e.hopOffset>0||e.hopVelocity!==0)&&(e.hopOffset+=e.hopVelocity*t,e.hopVelocity-=18*t,e.hopOffset<=0&&(e.hopOffset=0,e.hopVelocity=0));const d=Math.min(1,Math.abs(e.speed)/6),h=e.speed<-.1?-1:1,f=e.isDrifting?2.65:2.15,p=(n.steer*f+(e.isDrifting?e.driftDirection*.45:0))*d*h*t;e.heading+=p;const g=Math.sin(e.heading),v=Math.cos(e.heading),m=g*e.speed,u=v*e.speed,w=e.isDrifting?Math.min(1,t*4.5):Math.min(1,t*12);e.velocity.x=Pe.lerp(e.velocity.x,m,w),e.velocity.z=Pe.lerp(e.velocity.z,u,w);const T=e.position.clone();e.position.x+=e.velocity.x*t,e.position.z+=e.velocity.z*t,this.updateTrackAndSurfaceElevation(t,e,T,s),this.resolveStaticObstacleCollisions(e,s),this.updateCheckpointsAndLaps(e,s,r),e.updateVisuals(t,n.steer,n.brake>0&&e.speed>0)}updateTrackAndSurfaceElevation(t,e,n,s){const r=this.data.trackWaypoints,a=r.length;let o=e.currentWaypointIndex,c=1/0;for(let P=-12;P<=18;P++){const y=(e.currentWaypointIndex+P+a)%a,_=r[y],C=e.position.x-_.position[0],O=e.position.z-_.position[2],B=C*C+O*O;B<c&&(c=B,o=y)}if(c>36)for(let P=0;P<a;P++){const y=r[P],_=e.position.x-y.position[0],C=e.position.z-y.position[2],O=_*_+C*C;O<c&&(c=O,o=P)}let l=o-e.currentWaypointIndex;l<-a/2&&(l+=a),l>a/2&&(l-=a),l>0&&l<15&&(e.totalDistanceDriven+=n.distanceTo(e.position)),e.currentWaypointIndex=o;const d=r[o],h=r[(o+1)%a],f=new R(h.position[0]-d.position[0],0,h.position[2]-d.position[2]),p=Math.max(.001,f.length()),g=f.divideScalar(p),v=new R(e.position.x-d.position[0],0,e.position.z-d.position[2]),m=Pe.clamp(v.dot(g)/p,0,1);let u=Pe.lerp(d.position[1],h.position[1],m);const w=h.position[1]-d.position[1];let T=-Math.atan2(w,p);for(const P of this.data.ramps){const y=new R(...P.start),_=new R(...P.end),C=y.clone().add(_).multiplyScalar(.5),O=Math.hypot(e.position.x-C.x,e.position.z-C.z);if(O<4.5&&P.id==="lollipop_jump_ramp"){const B=1-Math.min(1,O/4.5);u=Math.max(u,9+B*1.55),e.speed>14&&e.isGrounded&&e.position.z<12.2&&e.position.z>10.2&&(e.verticalVelocity=Math.max(e.verticalVelocity,e.speed*.34),e.isGrounded=!1,e.boostTimer=Math.max(e.boostTimer,.85),s&&this.calloutCooldown<=0&&(this.sound.playBoostWhoosh(),this.callbacks.onCallout("LOLLIPOP AIR BONUS!","CLEARED THE GIANT RAINBOW CANDY!"),this.calloutCooldown=2))}}const M=new R(Pe.lerp(d.position[0],h.position[0],m),u,Pe.lerp(d.position[2],h.position[2],m)),U=new R(...d.right).normalize(),A=new R().subVectors(e.position,M).dot(U),b=d.width*.62;if(Math.abs(A)>b){const P=A-Math.sign(A)*b;e.position.addScaledVector(U,-P*.92),e.speed*=.94}e.groundY=u,!e.isGrounded||e.position.y>u+.08?(e.isGrounded=!1,e.airTime+=t,e.verticalVelocity-=26*t,e.position.y+=e.verticalVelocity*t,T=Pe.clamp(-e.verticalVelocity*.04,-.35,.35),e.position.y<=u&&(e.position.y=u,e.verticalVelocity=0,e.isGrounded=!0,s&&e.airTime>.45&&this.calloutCooldown<=0&&(this.callbacks.onCallout("SMOOTH TOUCHDOWN!",`AIR TIME ${e.airTime.toFixed(2)}s`),this.calloutCooldown=1.5),e.airTime=0)):(e.position.y=u,e.verticalVelocity=0,e.isGrounded=!0,e.airTime=0),e.pitch=Pe.lerp(e.pitch,T,Math.min(1,t*10))}resolveStaticObstacleCollisions(t,e){for(const s of this.data.staticObstacles)if(!(Math.abs(t.position.y-s.position[1])>s.size[1]*.65+.5))if(s.colliderType==="cylinder"||s.colliderType==="sphere"){const a=(s.radius||s.size[0]*.5)*.85,o=t.position.x-s.position[0],c=t.position.z-s.position[2],l=Math.hypot(o,c),d=.72+a;if(l<d&&l>.001){const h=o/l,f=c/l,p=d-l;t.position.x+=h*p,t.position.z+=f*p,t.speed*=.72,e&&this.sound.playCollisionClatter(!1)}}else{const a=t.position.x-s.position[0],o=t.position.z-s.position[2],c=Math.cos(-(s.rotationY||0)),l=Math.sin(-(s.rotationY||0)),d=a*c-o*l,h=a*l+o*c,f=s.size[0]*.45+.72,p=s.size[2]*.45+.72;if(Math.abs(d)<f&&Math.abs(h)<p){const g=f-Math.abs(d),v=p-Math.abs(h);let m=0,u=0;g<v?m=Math.sign(d||1)*g:u=Math.sign(h||1)*v;const w=Math.cos(s.rotationY||0),T=Math.sin(s.rotationY||0);if(t.position.x+=m*w-u*T,t.position.z+=m*T+u*w,t.speed*=.75,e){const M=s.type.includes("cutlery")||s.type.includes("appliance");this.sound.playCollisionClatter(M)}}}}resolveCarToCarCollisions(t){for(let n=0;n<t.length;n++)for(let s=n+1;s<t.length;s++){const r=t[n],a=t[s];if(Math.abs(r.position.y-a.position.y)>1.5)continue;const o=a.position.x-r.position.x,c=a.position.z-r.position.z,l=Math.hypot(o,c);if(l<1.25&&l>.001){const d=(1.25-l)*.5,h=o/l,f=c/l;r.position.x-=h*d,r.position.z-=f*d,a.position.x+=h*d,a.position.z+=f*d}}}updateDynamicProps(t,e){for(const n of this.dynamicBodies){for(const s of e){if(Math.abs(s.position.y-n.position.y)>1.8)continue;const r=n.position.x-s.position.x,a=n.position.z-s.position.z,o=Math.hypot(r,a),c=n.data.radius+.75;if(o<c&&o>.001){const l=r/o,d=a/o,h=Math.max(8,Math.abs(s.speed)*1.15);n.velocity.x=l*h,n.velocity.z=d*h,n.velocity.y=4.5+Math.random()*3,n.angularVelocity.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),n.position.x+=l*(c-o+.1),n.position.z+=d*(c-o+.1),s.isPlayer&&(n.hitCount++,this.totalPropsHit++,this.sound.playCollisionClatter(n.data.type==="coffee_cup"))}}(n.velocity.lengthSq()>.01||n.position.y>n.restY+.02)&&(n.position.addScaledVector(n.velocity,t),n.velocity.y-=22*t,n.velocity.x*=Math.pow(.25,t),n.velocity.z*=Math.pow(.25,t),n.rotation.x+=n.angularVelocity.x*t,n.rotation.y+=n.angularVelocity.y*t,n.rotation.z+=n.angularVelocity.z*t,n.position.y<=n.restY&&(n.position.y=n.restY,Math.abs(n.velocity.y)>1.5?n.velocity.y=-n.velocity.y*.35:(n.velocity.y=0,n.angularVelocity.multiplyScalar(.5))),n.mesh.position.copy(n.position),n.mesh.rotation.copy(n.rotation))}}updateCheckpointsAndLaps(t,e,n){const s=this.data.checkpoints,r=(t.currentCheckpointIndex+1)%s.length,a=s[r],o=t.position.x-a.position[0],c=t.position.z-a.position[2];Math.hypot(o,c)<a.width*1.15&&(t.currentCheckpointIndex=r,t.checkpointsPassed.add(r),r===0&&t.checkpointsPassed.size>=Math.floor(s.length*.6)?(t.checkpointsPassed.clear(),t.checkpointsPassed.add(0),t.lap<this.totalLaps?(t.lap++,e&&(this.sound.playChime(!0),this.callbacks.onLapComplete(t.lap,n))):t.finished||(t.finished=!0,t.finishTimeMs=n,e&&(this.sound.playChime(!0),this.callbacks.onRaceFinish()))):e&&r!==0&&(this.sound.playChime(!1),this.callbacks.onCheckpoint(r,a.label)))}}class kp{constructor(t){W(this,"camera");W(this,"mode","CHASE");W(this,"modes",["CHASE","OVERHEAD","COCKPIT","OVERVIEW"]);W(this,"currentPos",new R(-.5,11.5,16.5));W(this,"currentLookAt",new R(-8,9.5,15.5));this.camera=new Le(62,t,.15,180),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLookAt)}cycleMode(){const t=this.modes.indexOf(this.mode);return this.mode=this.modes[(t+1)%this.modes.length],this.mode}setMode(t){this.mode=t}getModeLabel(){switch(this.mode){case"CHASE":return"CHASE CAM";case"OVERHEAD":return"OVERHEAD CAM";case"COCKPIT":return"HOOD CAM";case"OVERVIEW":return"KITCHEN CAM"}}snapToCar(t){const e=new R(Math.sin(t.heading),0,Math.cos(t.heading));this.currentPos.copy(t.position).addScaledVector(e,-4.4).add(new R(0,2.15,0)),this.currentLookAt.copy(t.position).addScaledVector(e,3.2).add(new R(0,.65,0)),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLookAt)}update(t,e){const n=new R(Math.sin(e.heading),0,Math.cos(e.heading)),s=new R(n.z,0,-n.x),r=new R,a=new R;let o=62;if(this.mode==="CHASE"){const c=e.boostTimer>0?.55:0,l=e.isDrifting?e.driftDirection*.65:0;r.copy(e.position).addScaledVector(n,-(4.2+c)).addScaledVector(s,l).add(new R(0,2.05,0)),a.copy(e.position).addScaledVector(n,3.6).add(new R(0,.55-e.pitch*1.4,0)),o=60+Math.min(14,Math.abs(e.speed)*.35)+(e.boostTimer>0?7:0);const d=Math.min(1,t*11);this.currentPos.lerp(r,d),this.currentLookAt.lerp(a,Math.min(1,t*15))}else if(this.mode==="OVERHEAD"){const c=e.position.x<-10?5.5:2.5;r.copy(e.position).add(new R(c,15.5,9.5)),a.copy(e.position).addScaledVector(n,1.8),o=52,this.currentPos.lerp(r,Math.min(1,t*8)),this.currentLookAt.lerp(a,Math.min(1,t*12))}else this.mode==="COCKPIT"?(r.copy(e.position).addScaledVector(n,.32).add(new R(0,.72+e.hopOffset,0)),a.copy(e.position).addScaledVector(n,8).add(new R(0,.55-Math.sin(e.pitch)*6,0)),o=72+(e.boostTimer>0?8:0),this.currentPos.copy(r),this.currentLookAt.lerp(a,Math.min(1,t*22))):(r.set(6.5,16.5,29.5),a.copy(e.position).lerp(new R(-6,8.5,2),.55),o=55,this.currentPos.lerp(r,Math.min(1,t*5)),this.currentLookAt.lerp(a,Math.min(1,t*8)));this.camera.fov=Pe.lerp(this.camera.fov,o,Math.min(1,t*10)),this.camera.updateProjectionMatrix(),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLookAt)}}class Gp{constructor(){W(this,"ctx",null);W(this,"oscSaw",null);W(this,"oscSub",null);W(this,"engineFilter",null);W(this,"engineGain",null);W(this,"screechGain",null);W(this,"isMuted",!1);W(this,"isInitialized",!1)}initOnUserGesture(){if(this.isInitialized){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.oscSaw=this.ctx.createOscillator(),this.oscSaw.type="sawtooth",this.oscSaw.frequency.value=95,this.oscSub=this.ctx.createOscillator(),this.oscSub.type="triangle",this.oscSub.frequency.value=47.5,this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="bandpass",this.engineFilter.frequency.value=380,this.engineFilter.Q.value=2.4,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=0,this.oscSaw.connect(this.engineFilter),this.oscSub.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.ctx.destination),this.oscSaw.start(),this.oscSub.start();const e=this.ctx.sampleRate*1.5,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);for(let o=0;o<e;o++)s[o]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=n,r.loop=!0;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=1650,a.Q.value=6.5,this.screechGain=this.ctx.createGain(),this.screechGain.gain.value=0,r.connect(a),a.connect(this.screechGain),this.screechGain.connect(this.ctx.destination),r.start(),this.isInitialized=!0}catch{}}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted&&this.engineGain&&this.screechGain&&this.ctx&&(this.engineGain.gain.setTargetAtTime(0,this.ctx.currentTime,.04),this.screechGain.gain.setTargetAtTime(0,this.ctx.currentTime,.04)),this.isMuted}updateEngine(t,e,n,s){if(!this.isInitialized||!this.ctx||!this.oscSaw||!this.oscSub||!this.engineFilter||!this.engineGain||!this.screechGain||this.isMuted)return;const r=this.ctx.currentTime,a=Math.min(1.25,Math.abs(t)/e),o=a*6%1,c=75+a*185+o*55+(s?65:0);this.oscSaw.frequency.setTargetAtTime(c,r,.04),this.oscSub.frequency.setTargetAtTime(c*.5,r,.04),this.engineFilter.frequency.setTargetAtTime(280+a*1400,r,.05);const l=.035+Math.min(.085,a*.075);this.engineGain.gain.setTargetAtTime(l,r,.05);const d=n&&Math.abs(t)>6?.045:0;this.screechGain.gain.setTargetAtTime(d,r,.05)}playBoostWhoosh(){if(!this.isInitialized||!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(520,t+.35),n.gain.setValueAtTime(.11,t),n.gain.exponentialRampToValueAtTime(.001,t+.42),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.43)}playCollisionClatter(t=!1){if(!this.isInitialized||!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type=t?"triangle":"sine";const r=t?780+Math.random()*350:180+Math.random()*90;n.frequency.setValueAtTime(r,e),n.frequency.exponentialRampToValueAtTime(55,e+.16),s.gain.setValueAtTime(.12,e),s.gain.exponentialRampToValueAtTime(.001,e+.17),n.connect(s),s.connect(this.ctx.destination),n.start(e),n.stop(e+.18)}playChime(t=!1){if(!this.isInitialized||!this.ctx||this.isMuted)return;const e=this.ctx.currentTime;(t?[523.25,659.25,783.99,1046.5]:[587.33,880]).forEach((s,r)=>{if(!this.ctx)return;const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(s,e+r*.08),o.gain.setValueAtTime(.09,e+r*.08),o.gain.exponentialRampToValueAtTime(.001,e+r*.08+.22),a.connect(o),o.connect(this.ctx.destination),a.start(e+r*.08),a.stop(e+r*.08+.24)})}}class on{constructor(t){W(this,"data");W(this,"minimapCtx");W(this,"minimapCanvas");W(this,"elLap");W(this,"elPosition");W(this,"elCheckpoint");W(this,"elTimer");W(this,"elBestLap");W(this,"elLastLap");W(this,"elSectorName");W(this,"elSpeed");W(this,"elGear");W(this,"elRpmFill");W(this,"elBoostFill");W(this,"elBoostStatus");W(this,"elElevationBadge");W(this,"elCameraLabel");W(this,"elCallout");W(this,"elCalloutTitle");W(this,"elCalloutSub");W(this,"elFinishModal");W(this,"elFinishTitle");W(this,"elFinishSub");W(this,"elFinishTotalTime");W(this,"elFinishBestLap");W(this,"elFinishPropsHit");W(this,"calloutTimeout",null);this.data=t,this.minimapCanvas=document.getElementById("minimap-canvas"),this.minimapCtx=this.minimapCanvas.getContext("2d"),this.elLap=document.getElementById("hud-lap"),this.elPosition=document.getElementById("hud-position"),this.elCheckpoint=document.getElementById("hud-checkpoint"),this.elTimer=document.getElementById("hud-timer"),this.elBestLap=document.getElementById("hud-best-lap"),this.elLastLap=document.getElementById("hud-last-lap"),this.elSectorName=document.getElementById("hud-sector-name"),this.elSpeed=document.getElementById("hud-speed"),this.elGear=document.getElementById("hud-gear"),this.elRpmFill=document.getElementById("hud-rpm-fill"),this.elBoostFill=document.getElementById("hud-boost-fill"),this.elBoostStatus=document.getElementById("hud-boost-status"),this.elElevationBadge=document.getElementById("hud-elevation-badge"),this.elCameraLabel=document.getElementById("hud-camera-label"),this.elCallout=document.getElementById("hud-callout"),this.elCalloutTitle=document.getElementById("hud-callout-title"),this.elCalloutSub=document.getElementById("hud-callout-sub"),this.elFinishModal=document.getElementById("finish-modal"),this.elFinishTitle=document.getElementById("finish-title"),this.elFinishSub=document.getElementById("finish-subtitle"),this.elFinishTotalTime=document.getElementById("finish-total-time"),this.elFinishBestLap=document.getElementById("finish-best-lap"),this.elFinishPropsHit=document.getElementById("finish-props-hit")}static formatTime(t){if(!Number.isFinite(t)||t<=0)return"00:00.000";const e=Math.floor(t/1e3),n=Math.floor(e/60),s=e%60,r=Math.floor(t%1e3);return`${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")}.${String(r).padStart(3,"0")}`}showCallout(t,e){this.elCalloutTitle.textContent=t,this.elCalloutSub.textContent=e,this.elCallout.classList.remove("hidden"),this.calloutTimeout!==null&&window.clearTimeout(this.calloutTimeout),this.calloutTimeout=window.setTimeout(()=>{this.elCallout.classList.add("hidden")},1850)}setCameraLabel(t){this.elCameraLabel.textContent=t}setSectorName(t){this.elSectorName.textContent=t}hideFinishModal(){this.elFinishModal.classList.add("hidden")}showFinishModal(t,e,n,s,r){const o=["1ST","2ND","3RD","4TH"][Math.min(3,Math.max(0,t-1))];this.elFinishTitle.textContent=e==="GP"?`${o} PLACE — KITCHEN GRAND PRIX!`:"TIME TRIAL COMPLETE!",this.elFinishSub.textContent=t===1?"Victory across the Quartz Peninsula, Giant Lollipop & Hardwood Floor!":"Great racing through the messy kitchen circuit!",this.elFinishTotalTime.textContent=on.formatTime(n),this.elFinishBestLap.textContent=s>0?on.formatTime(s):on.formatTime(n/3),this.elFinishPropsHit.textContent=String(r),this.elFinishModal.classList.remove("hidden")}update(t,e,n,s,r,a){this.elLap.textContent=`${t.lap} / 3`,this.elCheckpoint.textContent=`${t.currentCheckpointIndex+1} / ${this.data.checkpoints.length}`;const o=this.computePlayerRank(t,e,n);if(n==="GP"){const f=["1st","2nd","3rd","4th"];this.elPosition.textContent=`${f[o-1]||"1st"} / 4`}else this.elPosition.textContent="SOLO TT";this.elTimer.textContent=on.formatTime(s),this.elBestLap.textContent=r>0?on.formatTime(r):"--:--.---",this.elLastLap.textContent=a>0?on.formatTime(a):"--:--.---";const c=Math.round(Math.abs(t.speed)*9.6);this.elSpeed.textContent=String(c);let l="1";t.speed<-.5?l="R":c>235?l="6":c>185?l="5":c>135?l="4":c>85?l="3":c>38&&(l="2"),this.elGear.textContent=l;const d=Math.min(100,Math.max(8,c/290*100));this.elRpmFill.style.width=`${d}%`;const h=Math.round(t.driftCharge*100);this.elBoostFill.style.width=`${h}%`,this.elBoostFill.className="boost-fill",t.driftCharge>=.85?(this.elBoostFill.classList.add("tier-3"),this.elBoostStatus.textContent="ULTRA TURBO [E]"):t.driftCharge>=.55?(this.elBoostFill.classList.add("tier-2"),this.elBoostStatus.textContent="SUPER BOOST [E]"):t.driftCharge>=.3?(this.elBoostFill.classList.add("tier-1"),this.elBoostStatus.textContent="READY [E]"):(this.elBoostFill.classList.add("tier-0"),this.elBoostStatus.textContent="DRIFT TO CHARGE"),!t.isGrounded&&t.airTime>.12?this.elElevationBadge.textContent=`AIRBORNE +${t.position.y.toFixed(1)}m`:t.position.y>6.5?this.elElevationBadge.textContent=`COUNTER +${t.position.y.toFixed(1)}m`:t.position.y>1.2?this.elElevationBadge.textContent=`RAMP +${t.position.y.toFixed(1)}m`:this.elElevationBadge.textContent="FLOOR +0.0m",this.drawMinimap(t,e,n)}computePlayerRank(t,e,n){if(n==="TIME_TRIAL")return 1;let s=1;for(const r of e)r.root.visible&&r.totalDistanceDriven>t.totalDistanceDriven&&s++;return s}drawMinimap(t,e,n){const s=this.minimapCtx,r=this.minimapCanvas.width,a=this.minimapCanvas.height;s.clearRect(0,0,r,a);const o=p=>(p+25)/50*(r-28)+14,c=p=>(p+25)/54*(a-28)+14;s.fillStyle="rgba(255, 255, 255, 0.12)";for(const p of this.data.architecture.counterSlabs){const g=o(p.center[0]-p.size[0]/2),v=c(p.center[2]-p.size[2]/2),m=p.size[0]/50*(r-28),u=p.size[2]/54*(a-28);s.fillRect(g,v,m,u)}const l=this.data.trackWaypoints;s.beginPath(),l.forEach((p,g)=>{const v=o(p.position[0]),m=c(p.position[2]);g===0?s.moveTo(v,m):s.lineTo(v,m)}),s.closePath(),s.strokeStyle="rgba(148, 163, 184, 0.55)",s.lineWidth=6,s.stroke(),s.strokeStyle="#ffd13b",s.lineWidth=4;for(const p of this.data.ramps)s.beginPath(),s.moveTo(o(p.start[0]),c(p.start[2])),s.lineTo(o(p.end[0]),c(p.end[2])),s.stroke();const d=l[0];if(s.fillStyle="#ffffff",s.fillRect(o(d.position[0])-4,c(d.position[2])-4,8,8),n==="GP")for(const p of e)p.root.visible&&(s.beginPath(),s.arc(o(p.position.x),c(p.position.z),4.2,0,Math.PI*2),s.fillStyle="#00e5ff",s.fill());const h=o(t.position.x),f=c(t.position.z);s.save(),s.translate(h,f),s.rotate(-t.heading+Math.PI),s.beginPath(),s.moveTo(0,-7),s.lineTo(5.5,5.5),s.lineTo(0,3),s.lineTo(-5.5,5.5),s.closePath(),s.fillStyle="#ff2a3c",s.fill(),s.strokeStyle="#ffffff",s.lineWidth=1.5,s.stroke(),s.restore()}}class Vp{constructor(){W(this,"sceneData");W(this,"canvas");W(this,"renderer");W(this,"scene");W(this,"environment");W(this,"sound");W(this,"cameraController");W(this,"hud");W(this,"physics");W(this,"playerCar");W(this,"aiCars",[]);W(this,"gameMode","GP");W(this,"keysPressed",new Set);W(this,"oneShotBoost",!1);W(this,"oneShotRespawn",!1);W(this,"syntheticInput",null);W(this,"raceTimeMs",0);W(this,"currentLapStartMs",0);W(this,"bestLapMs",0);W(this,"lastLapMs",0);W(this,"isRaceActive",!0);W(this,"lastFrameTime",performance.now());W(this,"smoothedFps",60);W(this,"animate",()=>{requestAnimationFrame(this.animate);const t=performance.now(),e=(t-this.lastFrameTime)/1e3;this.lastFrameTime=t;const n=Math.min(.05,Math.max(.001,e)),s=1/Math.max(.001,e);this.smoothedFps=this.smoothedFps*.92+s*.08;const r=this.readPlayerInput();this.isRaceActive&&((this.playerCar.speed>.2||r.throttle>0||this.raceTimeMs>0)&&(this.raceTimeMs+=n*1e3),this.physics.step(n,this.playerCar,this.aiCars,r,this.raceTimeMs)),this.cameraController.update(n,this.playerCar),this.sound.updateEngine(this.playerCar.speed,this.physics.maxBaseSpeed,this.playerCar.isDrifting,this.playerCar.boostTimer>0),this.hud.update(this.playerCar,this.aiCars,this.gameMode,this.raceTimeMs,this.bestLapMs,this.lastLapMs),this.renderer.render(this.scene,this.cameraController.camera)});this.sceneData=Op,this.canvas=document.getElementById("game-canvas"),this.renderer=new gp({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ma,this.renderer.toneMapping=_a,this.renderer.toneMappingExposure=1.08,this.scene=new _p,this.sound=new Gp,this.environment=new Bp(this.scene,this.sceneData,this.renderer),this.cameraController=new kp(window.innerWidth/window.innerHeight),this.hud=new on(this.sceneData),this.playerCar=new fa({id:"player_f1",name:"Scuderia Espresso #1",primaryColor:"#e6192e",accentColor:"#ffd13b",helmetColor:"#00e5ff",isPlayer:!0}),this.scene.add(this.playerCar.root);const t=[{id:"ai_papaya",name:"McLaren Marmalade #4",primaryColor:"#ff8000",accentColor:"#38bdf8",helmetColor:"#facc15"},{id:"ai_teal",name:"Silver Toaster AMG #44",primaryColor:"#00d2be",accentColor:"#1e293b",helmetColor:"#a855f7"},{id:"ai_cobalt",name:"RedBull Blueberry #11",primaryColor:"#1d4ed8",accentColor:"#ef4444",helmetColor:"#fbbf24"}];for(const e of t){const n=new fa({...e,isPlayer:!1});this.aiCars.push(n),this.scene.add(n.root)}this.physics=new zp(this.sceneData,this.environment.dynamicBodies,this.sound,{onCheckpoint:(e,n)=>{this.hud.setSectorName(n),e===1?this.hud.showCallout("CHECKPOINT — LOLLIPOP JUMP",n):e===4?this.hud.showCallout("BACON STRIP CHICANE!",n):e===7&&this.hud.showCallout("FLOOR DROP LAUNCH!",n)},onLapComplete:(e,n)=>{const s=n-this.currentLapStartMs;this.currentLapStartMs=n,this.lastLapMs=s,(this.bestLapMs===0||s<this.bestLapMs)&&(this.bestLapMs=s),this.hud.showCallout(e===3?"FINAL LAP — 3 / 3!":`LAP ${e} / 3`,`LAP TIME ${on.formatTime(s)}`)},onRaceFinish:()=>{const e=this.raceTimeMs-this.currentLapStartMs;this.lastLapMs=e,(this.bestLapMs===0||e<this.bestLapMs)&&(this.bestLapMs=e),this.isRaceActive=!1;const n=this.hud.computePlayerRank(this.playerCar,this.aiCars,this.gameMode);this.hud.showFinishModal(n,this.gameMode,this.raceTimeMs,this.bestLapMs,this.physics.totalPropsHit)},onCallout:(e,n)=>{this.hud.showCallout(e,n)}}),this.setupEventListeners(),this.exposeDebugHook(),this.startNewRace("GP"),this.animate()}startNewRace(t){this.gameMode=t,this.raceTimeMs=0,this.currentLapStartMs=0,this.lastLapMs=0,this.isRaceActive=!0,this.hud.hideFinishModal();const e=document.getElementById("btn-mode-gp"),n=document.getElementById("btn-mode-tt");e&&n&&(e.classList.toggle("active",t==="GP"),n.classList.toggle("active",t==="TIME_TRIAL"));const s=t==="GP"?4:1;this.physics.resetVehiclesToGrid([this.playerCar,...this.aiCars],s),this.cameraController.snapToCar(this.playerCar),this.hud.setSectorName(this.sceneData.checkpoints[0].label),this.hud.update(this.playerCar,this.aiCars,this.gameMode,this.raceTimeMs,this.bestLapMs,this.lastLapMs)}setupEventListeners(){var t,e,n,s,r,a,o;window.addEventListener("resize",()=>{this.cameraController.camera.aspect=window.innerWidth/window.innerHeight,this.cameraController.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),window.addEventListener("keydown",c=>{this.sound.initOnUserGesture();const l=c.code;this.keysPressed.add(l),l==="KeyC"&&!c.repeat?(this.cameraController.cycleMode(),this.hud.setCameraLabel(this.cameraController.getModeLabel())):l==="KeyE"&&!c.repeat?this.oneShotBoost=!0:l==="KeyR"&&!c.repeat?this.oneShotRespawn=!0:l==="KeyM"&&!c.repeat&&this.toggleAudioMute()}),window.addEventListener("keyup",c=>{this.keysPressed.delete(c.code)}),window.addEventListener("pointerdown",()=>{this.sound.initOnUserGesture()}),(t=document.getElementById("btn-mode-gp"))==null||t.addEventListener("click",()=>{this.sound.initOnUserGesture(),this.startNewRace("GP")}),(e=document.getElementById("btn-mode-tt"))==null||e.addEventListener("click",()=>{this.sound.initOnUserGesture(),this.startNewRace("TIME_TRIAL")}),(n=document.getElementById("btn-camera"))==null||n.addEventListener("click",()=>{this.sound.initOnUserGesture(),this.cameraController.cycleMode(),this.hud.setCameraLabel(this.cameraController.getModeLabel())}),(s=document.getElementById("btn-respawn"))==null||s.addEventListener("click",()=>{this.sound.initOnUserGesture(),this.oneShotRespawn=!0}),(r=document.getElementById("btn-audio"))==null||r.addEventListener("click",()=>{this.sound.initOnUserGesture(),this.toggleAudioMute()}),(a=document.getElementById("btn-finish-gp"))==null||a.addEventListener("click",()=>{this.startNewRace("GP")}),(o=document.getElementById("btn-finish-tt"))==null||o.addEventListener("click",()=>{this.startNewRace("TIME_TRIAL")})}toggleAudioMute(){const t=this.sound.toggleMute(),e=document.getElementById("btn-audio");e&&(e.textContent=t?"🔇 AUDIO MUTED":"🔊 AUDIO ON")}readPlayerInput(){if(this.syntheticInput)return{throttle:this.syntheticInput.throttle??0,brake:this.syntheticInput.brake??0,steer:this.syntheticInput.steer??0,drift:this.syntheticInput.drift??!1,boost:this.syntheticInput.boost??!1,respawn:this.syntheticInput.respawn??!1};const t=this.keysPressed.has("KeyW")||this.keysPressed.has("ArrowUp")?1:0,e=this.keysPressed.has("KeyS")||this.keysPressed.has("ArrowDown")?1:0,n=this.keysPressed.has("KeyA")||this.keysPressed.has("ArrowLeft")?1:0,s=this.keysPressed.has("KeyD")||this.keysPressed.has("ArrowRight")?1:0,r=this.keysPressed.has("Space")||this.keysPressed.has("ShiftLeft")||this.keysPressed.has("ShiftRight"),a=this.oneShotBoost||this.keysPressed.has("KeyE"),o=this.oneShotRespawn;return this.oneShotBoost=!1,this.oneShotRespawn=!1,{throttle:t,brake:e,steer:n-s,drift:r,boost:a,respawn:o}}exposeDebugHook(){window.__KITCHEN_RACER_DEBUG__={getState:()=>({fps:Math.round(this.smoothedFps),mode:this.gameMode,cameraMode:this.cameraController.mode,loadedTexturesCount:this.environment.loadedTexturesCount,totalTexturesToLoad:this.environment.totalTexturesToLoad,player:{position:[Number(this.playerCar.position.x.toFixed(3)),Number(this.playerCar.position.y.toFixed(3)),Number(this.playerCar.position.z.toFixed(3))],speed:Number(this.playerCar.speed.toFixed(2)),scaleKmh:Math.round(Math.abs(this.playerCar.speed)*9.6),heading:Number(this.playerCar.heading.toFixed(3)),lap:this.playerCar.lap,checkpoint:this.playerCar.currentCheckpointIndex,isGrounded:this.playerCar.isGrounded,isDrifting:this.playerCar.isDrifting,driftCharge:Number(this.playerCar.driftCharge.toFixed(2)),boostTimer:Number(this.playerCar.boostTimer.toFixed(2))},raceTimeMs:Math.round(this.raceTimeMs),totalPropsHit:this.physics.totalPropsHit}),setCameraMode:t=>{this.cameraController.setMode(t),this.hud.setCameraLabel(this.cameraController.getModeLabel())},cycleCamera:()=>{const t=this.cameraController.cycleMode();return this.hud.setCameraLabel(this.cameraController.getModeLabel()),t},setSyntheticInput:t=>{this.syntheticInput=t},triggerBoost:()=>{this.playerCar.driftCharge=1,this.oneShotBoost=!0},respawn:()=>{this.oneShotRespawn=!0},switchGameMode:t=>{this.startNewRace(t)},stepFrames:(t,e)=>{const n=.016666666666666666;for(let s=0;s<t;s++){const r={throttle:(e==null?void 0:e.throttle)??0,brake:(e==null?void 0:e.brake)??0,steer:(e==null?void 0:e.steer)??0,drift:(e==null?void 0:e.drift)??!1,boost:(e==null?void 0:e.boost)??!1,respawn:(e==null?void 0:e.respawn)??!1};(r.throttle>0||this.playerCar.speed>.2||this.raceTimeMs>0)&&(this.raceTimeMs+=n*1e3),this.physics.step(n,this.playerCar,this.aiCars,r,this.raceTimeMs),this.cameraController.update(n,this.playerCar)}this.hud.update(this.playerCar,this.aiCars,this.gameMode,this.raceTimeMs,this.bestLapMs,this.lastLapMs),this.renderer.render(this.scene,this.cameraController.camera)}}}}window.addEventListener("DOMContentLoaded",()=>{new Vp});
