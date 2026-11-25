(()=>{var jd=0,sh=1,Qd=2;var rr=1,or=2,Bn=3,Rn=0,Ce=1,ue=2,ai=0,ci=1,Kr=2,rh=3,oh=4,tf=5,Ti=100,ef=101,nf=102,sf=103,rf=104,of=200,af=201,cf=202,lf=203,Ga=204,Va=205,hf=206,uf=207,df=208,ff=209,pf=210,mf=211,gf=212,xf=213,yf=214,Wa=0,Xa=1,qa=2,us=3,Ya=4,Za=5,$a=6,Ja=7,fl=0,vf=1,_f=2,li=0,Mf=1,Ef=2,bf=3,pl=4,Sf=5,wf=6,Tf=7;var pu=300,ds=301,fs=302,Ka=303,ja=304,So=306,Pi=1e3,Ci=1001,Qa=1002,an=1003,Af=1004;var yr=1005;var Tn=1006,qs=1007;var Hn=1008;var Vn=1009,mu=1010,gu=1011,Js=1012,ml=1013,Ii=1014,An=1015,ar=1016,gl=1017,xl=1018,ps=1020,xu=35902,yu=1021,vu=1022,_n=1023,_u=1024,Mu=1025,cs=1026,ms=1027,yl=1028,vl=1029,Eu=1030,_l=1031;var Ml=1033,qr=33776,Yr=33777,Zr=33778,$r=33779,tc=35840,ec=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37808,cc=37809,lc=37810,hc=37811,uc=37812,dc=37813,fc=37814,pc=37815,mc=37816,gc=37817,xc=37818,yc=37819,vc=37820,_c=37821,Jr=36492,Mc=36494,Ec=36495,bu=36283,bc=36284,Sc=36285,wc=36286;var jr=2300,Tc=2301,ca=2302,ah=2400,ch=2401,lh=2402;var Rf=3200,Cf=3201;var El=0,Pf=1,oi="",xe="srgb",bs="srgb-linear",wo="linear",de="srgb";var Xi=7680;var hh=519,If=512,Lf=513,Df=514,Su=515,Uf=516,Nf=517,Of=518,Ff=519,uh=35044,$n=35048;var dh="300 es",zn=2e3,Qr=2001,ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var la=Math.PI/180,to=180/Math.PI;function Ss(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function Bf(i,t){return(i%t+t)%t}function ha(i,t,e){return(1-e)*i+e*t}function Os(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var St=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],_=s[1],v=s[4],y=s[7],A=s[2],S=s[5],T=s[8];return r[0]=o*x+a*_+c*A,r[3]=o*m+a*v+c*S,r[6]=o*p+a*y+c*T,r[1]=l*x+h*_+d*A,r[4]=l*m+h*v+d*S,r[7]=l*p+h*y+d*T,r[2]=u*x+f*_+g*A,r[5]=u*m+f*v+g*S,r[8]=u*p+f*y+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ua.makeScale(t,e)),this}rotate(t){return this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ua=new $t;function wu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kf(){let i=eo("canvas");return i.style.display="block",i}var fh={};function Ws(i){i in fh||(fh[i]=!0,console.warn(i))}function Hf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ne={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=ls(i.r),i.g=ls(i.g),i.b=ls(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===oi?wo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ph=[.64,.33,.3,.6,.15,.06],mh=[.2126,.7152,.0722],gh=[.3127,.329],xh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[bs]:{primaries:ph,whitePoint:gh,transfer:wo,toXYZ:xh,fromXYZ:yh,luminanceCoefficients:mh,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:ph,whitePoint:gh,transfer:de,toXYZ:xh,fromXYZ:yh,luminanceCoefficients:mh,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}});var qi,Ac=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=eo("canvas")),qi.width=t.width,qi.height=t.height;let n=qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=eo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vf=0,no=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(da(s[o].image)):r.push(da(s[o]))}else r=da(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ac.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wf=0,je=class i extends ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ci,s=Ci,r=Tn,o=Hn,a=_n,c=Vn,l=i.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Ss(),this.name="",this.source=new no(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=pu;je.DEFAULT_ANISOTROPY=1;var fe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,y=(f+1)/2,A=(p+1)/2,S=(h+u)/4,T=(d+x)/4,R=(g+m)/4;return v>y&&v>A?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=T/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=R/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=T/r,s=R/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rc=class extends ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new no(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends Rc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},io=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cc=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==u||l!==f||h!==g){let m=1-a,p=c*u+l*f+h*g+d*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let A=Math.sqrt(v),S=Math.atan2(A,p*_);m=Math.sin(m*S)/A,a=Math.sin(a*S)/A}let y=a*_;if(c=c*m+u*y,l=l*m+f*y,h=h*m+g*y,d=d*m+x*y,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fa=new D,vh=new Cn,Xn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(t.matrixWorld),this.union(vr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fs),_r.subVectors(this.max,Fs),Yi.subVectors(t.a,Fs),Zi.subVectors(t.b,Fs),$i.subVectors(t.c,Fs),ti.subVectors(Zi,Yi),ei.subVectors($i,Zi),vi.subVectors(Yi,$i);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-vi.z,vi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,vi.z,0,-vi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-vi.y,vi.x,0];return!pa(e,Yi,Zi,$i,_r)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,Yi,Zi,$i,_r))?!1:(Mr.crossVectors(ti,ei),e=[Mr.x,Mr.y,Mr.z],pa(e,Yi,Zi,$i,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Dn=[new D,new D,new D,new D,new D,new D,new D,new D],xn=new D,vr=new Xn,Yi=new D,Zi=new D,$i=new D,ti=new D,ei=new D,vi=new D,Fs=new D,_r=new D,Mr=new D,_i=new D;function pa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_i.fromArray(i,r);let a=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),c=t.dot(_i),l=e.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Xf=new Xn,Bs=new D,ma=new D,di=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Xf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(ma)),this.expandByPoint(Bs.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Un=new D,ga=new D,Er=new D,ni=new D,xa=new D,br=new D,ya=new D,so=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ga.copy(t).add(e).multiplyScalar(.5),Er.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(ga);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Er),a=ni.dot(this.direction),c=-ni.dot(Er),l=ni.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ga).addScaledVector(Er,u),f}intersectSphere(t,e){Un.subVectors(t.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){xa.subVectors(e,t),br.subVectors(n,t),ya.crossVectors(xa,br);let o=this.direction.dot(ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);let c=a*this.direction.dot(br.crossVectors(ni,br));if(c<0)return null;let l=a*this.direction.dot(xa.cross(ni));if(l<0||c+l>o)return null;let h=-a*ni.dot(ya);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qf,t,Yf)}lookAt(t,e,n){let s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ii.crossVectors(n,rn),ii.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ii.crossVectors(n,rn)),ii.normalize(),Sr.crossVectors(rn,ii),s[0]=ii.x,s[4]=Sr.x,s[8]=rn.x,s[1]=ii.y,s[5]=Sr.y,s[9]=rn.y,s[2]=ii.z,s[6]=Sr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],v=n[7],y=n[11],A=n[15],S=s[0],T=s[4],R=s[8],E=s[12],M=s[1],I=s[5],H=s[9],N=s[13],X=s[2],J=s[6],G=s[10],ct=s[14],K=s[3],yt=s[7],wt=s[11],Tt=s[15];return r[0]=o*S+a*M+c*X+l*K,r[4]=o*T+a*I+c*J+l*yt,r[8]=o*R+a*H+c*G+l*wt,r[12]=o*E+a*N+c*ct+l*Tt,r[1]=h*S+d*M+u*X+f*K,r[5]=h*T+d*I+u*J+f*yt,r[9]=h*R+d*H+u*G+f*wt,r[13]=h*E+d*N+u*ct+f*Tt,r[2]=g*S+x*M+m*X+p*K,r[6]=g*T+x*I+m*J+p*yt,r[10]=g*R+x*H+m*G+p*wt,r[14]=g*E+x*N+m*ct+p*Tt,r[3]=_*S+v*M+y*X+A*K,r[7]=_*T+v*I+y*J+A*yt,r[11]=_*R+v*H+y*G+A*wt,r[15]=_*E+v*N+y*ct+A*Tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*f-n*c*f)+x*(+e*c*f-e*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*d+e*a*u+s*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=d*m*l-x*u*l+x*c*f-a*m*f-d*c*p+a*u*p,v=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,y=h*x*l-g*d*l+g*a*f-o*x*f-h*a*p+o*d*p,A=g*d*c-h*x*c-g*a*u+o*x*u+h*a*m-o*d*m,S=e*_+n*v+s*y+r*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return t[0]=_*T,t[1]=(x*u*r-d*m*r-x*s*f+n*m*f+d*s*p-n*u*p)*T,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*T,t[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*f-n*c*f)*T,t[4]=v*T,t[5]=(h*m*r-g*u*r+g*s*f-e*m*f-h*s*p+e*u*p)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*f+e*c*f)*T,t[8]=y*T,t[9]=(g*d*r-h*x*r-g*n*f+e*x*f+h*n*p-e*d*p)*T,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*T,t[12]=A*T,t[13]=(h*x*s-g*d*s+g*n*u-e*x*u-h*n*m+e*d*m)*T,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*T,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*u+e*a*u)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,x=o*h,m=o*d,p=a*d,_=c*l,v=c*h,y=c*d,A=n.x,S=n.y,T=n.z;return s[0]=(1-(x+p))*A,s[1]=(f+y)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(f-y)*S,s[5]=(1-(u+p))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+v)*T,s[9]=(m-_)*T,s[10]=(1-(u+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ji.set(s[0],s[1],s[2]).length(),o=Ji.set(s[4],s[5],s[6]).length(),a=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);let l=1/r,h=1/o,d=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=zn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,g;if(a===zn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Qr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=zn){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*l,f=(n+s)*h,g,x;if(a===zn)g=(o+r)*d,x=-2*d;else if(a===Qr)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ji=new D,yn=new oe,qf=new D(0,0,0),Yf=new D(1,1,1),ii=new D,Sr=new D,rn=new D,_h=new oe,Mh=new Cn,cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _h.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_h,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zf=0,Eh=new D,Ki=new Cn,Nn=new oe,wr=new D,ks=new D,$f=new D,Jf=new Cn,bh=new D(1,0,0),Sh=new D(0,1,0),wh=new D(0,0,1),Th={type:"added"},Kf={type:"removed"},ji={type:"childadded",child:null},va={type:"childremoved",child:null},De=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new cn,n=new Cn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new $t}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(bh,t)}rotateY(t){return this.rotateOnAxis(Sh,t)}rotateZ(t){return this.rotateOnAxis(wh,t)}translateOnAxis(t,e){return Eh.copy(t).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bh,t)}translateY(t){return this.translateOnAxis(Sh,t)}translateZ(t){return this.translateOnAxis(wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wr.copy(t):wr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ks,wr,this.up):Nn.lookAt(wr,ks,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Th),ji.child=t,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kf),va.child=t,this.dispatchEvent(va),va.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Th),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,$f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new D(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new D,On=new D,_a=new D,Fn=new D,Qi=new D,ts=new D,Ah=new D,Ma=new D,Ea=new D,ba=new D,Sa=new fe,wa=new fe,Ta=new fe,Ai=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),On.subVectors(n,e),_a.subVectors(t,e);let o=vn.dot(vn),a=vn.dot(On),c=vn.dot(_a),l=On.dot(On),h=On.dot(_a),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Sa.setScalar(0),wa.setScalar(0),Ta.setScalar(0),Sa.fromBufferAttribute(t,e),wa.fromBufferAttribute(t,n),Ta.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Sa,r.x),o.addScaledVector(wa,r.y),o.addScaledVector(Ta,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),On.subVectors(t,e),vn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),vn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Qi.subVectors(s,n),ts.subVectors(r,n),Ma.subVectors(t,n);let c=Qi.dot(Ma),l=ts.dot(Ma);if(c<=0&&l<=0)return e.copy(n);Ea.subVectors(t,s);let h=Qi.dot(Ea),d=ts.dot(Ea);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Qi,o);ba.subVectors(t,r);let f=Qi.dot(ba),g=ts.dot(ba);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ts,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Ah.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Ah,a);let p=1/(m+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(Qi,o).addScaledVector(ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Bf(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Aa(o,r,t+1/3),this.g=Aa(o,r,t),this.b=Aa(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){let n=Tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return ne.fromWorkingColorSpace(ze.copy(this),t),Math.round(Ge(ze.r*255,0,255))*65536+Math.round(Ge(ze.g*255,0,255))*256+Math.round(Ge(ze.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=xe){ne.fromWorkingColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Tr);let n=ha(si.h,Tr.h,e),s=ha(si.s,Tr.s,e),r=ha(si.l,Tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Ft;Ft.NAMES=Tu;var jf=0,qn=class extends ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ss(),this.name="",this.blending=ci,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Va,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},me=class extends qn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new D,Ar=new St,pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Os(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Os(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Os(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uh&&(t.usage=this.usage),t}};var oo=class extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ao=class extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qf=0,dn=new oe,Ra=new De,es=new D,on=new Xn,Hs=new Xn,ke=new D,ye=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wu(t)?ao:oo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(on.min,Hs.min),on.expandByPoint(ke),ke.addVectors(on.max,Hs.max),on.expandByPoint(ke)):(on.expandByPoint(Hs.min),on.expandByPoint(Hs.max))}on.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ke.fromBufferAttribute(a,l),c&&(es.fromBufferAttribute(t,l),ke.add(es)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new D,c[R]=new D;let l=new D,h=new D,d=new D,u=new St,f=new St,g=new St,x=new D,m=new D;function p(R,E,M){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,R),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[R].add(x),a[E].add(x),a[M].add(x),c[R].add(m),c[E].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let R=0,E=_.length;R<E;++R){let M=_[R],I=M.start,H=M.count;for(let N=I,X=I+H;N<X;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new D,y=new D,A=new D,S=new D;function T(R){A.fromBufferAttribute(s,R),S.copy(A);let E=a[R];v.copy(E),v.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(S,E);let I=y.dot(c[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,I)}for(let R=0,E=_.length;R<E;++R){let M=_[R],I=M.start,H=M.count;for(let N=I,X=I+H;N<X;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new pe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rh=new oe,Mi=new so,Rr=new di,Ch=new D,Cr=new D,Pr=new D,Ir=new D,Ca=new D,Lr=new D,Ph=new D,Dr=new D,B=class extends De{constructor(t=new ye,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Ca.fromBufferAttribute(d,t),o?Lr.addScaledVector(Ca,h):Lr.addScaledVector(Ca.sub(e),h))}e.add(Lr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Rr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Rr,Ch)===null||Mi.origin.distanceToSquared(Ch)>(t.far-t.near)**2))&&(Rh.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(Rh),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,A=v;y<A;y+=3){let S=a.getX(y),T=a.getX(y+1),R=a.getX(y+2);s=Ur(this,p,t,n,l,h,d,S,T,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=Ur(this,o,t,n,l,h,d,_,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,A=v;y<A;y+=3){let S=y,T=y+1,R=y+2;s=Ur(this,p,t,n,l,h,d,S,T,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,v=m+1,y=m+2;s=Ur(this,o,t,n,l,h,d,_,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function tp(i,t,e,n,s,r,o,a){let c;if(t.side===Ce?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Rn,a),c===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Dr);return l<e.near||l>e.far?null:{distance:l,point:Dr.clone(),object:i}}function Ur(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Cr),i.getVertexPosition(c,Pr),i.getVertexPosition(l,Ir);let h=tp(i,t,e,n,Cr,Pr,Ir,Ph);if(h){let d=new D;Ai.getBarycoord(Ph,Cr,Pr,Ir,d),s&&(h.uv=Ai.getInterpolatedAttribute(s,a,c,l,d,new St)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,a,c,l,d,new St)),o&&(h.normal=Ai.getInterpolatedAttribute(o,a,c,l,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};Ai.getNormal(Cr,Pr,Ir,u.normal),h.face=u,h.barycoord=d}return h}var Ct=class i extends ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function g(x,m,p,_,v,y,A,S,T,R,E){let M=y/T,I=A/R,H=y/2,N=A/2,X=S/2,J=T+1,G=R+1,ct=0,K=0,yt=new D;for(let wt=0;wt<G;wt++){let Tt=wt*I-N;for(let Vt=0;Vt<J;Vt++){let ee=Vt*M-H;yt[x]=ee*_,yt[m]=Tt*v,yt[p]=X,l.push(yt.x,yt.y,yt.z),yt[x]=0,yt[m]=0,yt[p]=S>0?1:-1,h.push(yt.x,yt.y,yt.z),d.push(Vt/T),d.push(1-wt/R),ct+=1}}for(let wt=0;wt<R;wt++)for(let Tt=0;Tt<T;Tt++){let Vt=u+Tt+J*wt,ee=u+Tt+J*(wt+1),it=u+(Tt+1)+J*(wt+1),mt=u+(Tt+1)+J*wt;c.push(Vt,ee,mt),c.push(ee,it,mt),K+=6}a.addGroup(f,K,E),f+=K,u+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=gs(i[e]);for(let s in n)t[s]=n[s]}return t}function ep(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Au(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var np={clone:gs,merge:qe},ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends qn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},co=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ri=new D,Ih=new St,Lh=new St,Ue=class extends co{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=to*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return to*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Ih,Lh),e.subVectors(Lh,Ih)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(la*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ns=-90,is=1,Pc=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ue(ns,is,t,e);s.layers=this.layers,this.add(s);let r=new Ue(ns,is,t,e);r.layers=this.layers,this.add(r);let o=new Ue(ns,is,t,e);o.layers=this.layers,this.add(o);let a=new Ue(ns,is,t,e);a.layers=this.layers,this.add(a);let c=new Ue(ns,is,t,e);c.layers=this.layers,this.add(c);let l=new Ue(ns,is,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},lo=class extends je{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ic=class extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ct(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:ai});r.uniforms.tEquirect.value=e;let o=new B(s,r),a=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Tn),new Pc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Pa=new D,rp=new D,op=new $t,kn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Pa.subVectors(n,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||op.getNormalMatrix(t),s=this.coplanarPoint(Pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ei=new di,Nr=new D,Ks=class{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],v=s[14],y=s[15];if(n[0].setComponents(c-r,u-l,m-f,y-p).normalize(),n[1].setComponents(c+r,u+l,m+f,y+p).normalize(),n[2].setComponents(c+o,u+h,m+g,y+_).normalize(),n[3].setComponents(c-o,u-h,m-g,y-_).normalize(),n[4].setComponents(c-a,u-d,m-x,y-v).normalize(),e===zn)n[5].setComponents(c+a,u+d,m+x,y+v).normalize();else if(e===Qr)n[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Nr.x=s.normal.x>0?t.max.x:t.min.x,Nr.y=s.normal.y>0?t.max.y:t.min.y,Nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ru(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ap(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ve=class i extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*u-o;for(let v=0;v<l;v++){let y=v*d-r;g.push(y,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let v=_+l*p,y=_+l*(p+1),A=_+1+l*(p+1),S=_+1+l*p;f.push(v,y,S),f.push(y,A,S)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
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
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
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
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
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
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ep=`#ifdef USE_BUMPMAP
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ip=`#define PI 3.141592653589793
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
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dp=`vec3 transformedNormal = objectNormal;
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
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$p=`#ifdef USE_GRADIENTMAP
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
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
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
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
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
#endif`,om=`struct PhysicalMaterial {
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
}`,am=`
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xm=`#if defined( USE_POINTS_UV )
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
#endif`,ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
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
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
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
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qm=`float getShadowMask() {
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
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,$m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c0=`uniform sampler2D t2D;
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
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
}`,p0=`#if DEPTH_PACKING == 3200
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
}`,m0=`#define DISTANCE
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
}`,g0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
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
}`,_0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,E0=`uniform vec3 diffuse;
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
}`,b0=`#define LAMBERT
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
}`,S0=`#define LAMBERT
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
}`,w0=`#define MATCAP
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
}`,T0=`#define MATCAP
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
}`,A0=`#define NORMAL
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
}`,R0=`#define NORMAL
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
}`,C0=`#define PHONG
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
}`,P0=`#define PHONG
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
}`,I0=`#define STANDARD
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
}`,L0=`#define STANDARD
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
}`,D0=`#define TOON
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
}`,U0=`#define TOON
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
}`,N0=`uniform float size;
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
}`,O0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,B0=`uniform vec3 color;
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
}`,k0=`uniform float rotation;
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
}`,H0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:cp,alphahash_pars_fragment:lp,alphamap_fragment:hp,alphamap_pars_fragment:up,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:xp,begin_vertex:yp,beginnormal_vertex:vp,bsdfs:_p,iridescence_fragment:Mp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Tp,color_fragment:Ap,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Ip,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Op,emissivemap_pars_fragment:Fp,colorspace_fragment:Bp,colorspace_pars_fragment:kp,envmap_fragment:Hp,envmap_common_pars_fragment:zp,envmap_pars_fragment:Gp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:tm,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:qp,fog_fragment:Yp,fog_pars_fragment:Zp,gradientmap_pars_fragment:$p,lightmap_pars_fragment:Jp,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:jp,lights_pars_begin:Qp,lights_toon_fragment:em,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:sm,lights_physical_fragment:rm,lights_physical_pars_fragment:om,lights_fragment_begin:am,lights_fragment_maps:cm,lights_fragment_end:lm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:fm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:xm,metalnessmap_fragment:ym,metalnessmap_pars_fragment:vm,morphinstance_vertex:_m,morphcolor_vertex:Mm,morphnormal_vertex:Em,morphtarget_pars_vertex:bm,morphtarget_vertex:Sm,normal_fragment_begin:wm,normal_fragment_maps:Tm,normal_pars_fragment:Am,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:Om,premultiplied_alpha_fragment:Fm,project_vertex:Bm,dithering_fragment:km,dithering_pars_fragment:Hm,roughnessmap_fragment:zm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:qm,skinbase_vertex:Ym,skinning_pars_vertex:Zm,skinning_vertex:$m,skinnormal_vertex:Jm,specularmap_fragment:Km,specularmap_pars_fragment:jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:t0,transmission_fragment:e0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:s0,uv_vertex:r0,worldpos_vertex:o0,background_vert:a0,background_frag:c0,backgroundCube_vert:l0,backgroundCube_frag:h0,cube_vert:u0,cube_frag:d0,depth_vert:f0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:g0,equirect_vert:x0,equirect_frag:y0,linedashed_vert:v0,linedashed_frag:_0,meshbasic_vert:M0,meshbasic_frag:E0,meshlambert_vert:b0,meshlambert_frag:S0,meshmatcap_vert:w0,meshmatcap_frag:T0,meshnormal_vert:A0,meshnormal_frag:R0,meshphong_vert:C0,meshphong_frag:P0,meshphysical_vert:I0,meshphysical_frag:L0,meshtoon_vert:D0,meshtoon_frag:U0,points_vert:N0,points_frag:O0,shadow_vert:F0,shadow_frag:B0,sprite_vert:k0,sprite_frag:H0},Rt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},wn={basic:{uniforms:qe([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:qe([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:qe([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:qe([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:qe([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:qe([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:qe([Rt.points,Rt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:qe([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:qe([Rt.common,Rt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:qe([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:qe([Rt.sprite,Rt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:qe([Rt.common,Rt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:qe([Rt.lights,Rt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};wn.physical={uniforms:qe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Or={r:0,b:0,g:0},bi=new cn,z0=new oe;function G0(i,t,e,n,s,r,o){let a=new Ft(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1,y=g(_);y===null?p(a,c):y&&y.isColor&&(p(y,1),v=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){let y=g(v);y&&(y.isCubeTexture||y.mapping===So)?(h===void 0&&(h=new B(new Ct(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:gs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bi.copy(v.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(bi)),h.material.toneMapped=ne.getTransfer(y.colorSpace)!==de,(d!==y||u!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new B(new ve(2,2),new Ve({name:"BackgroundMaterial",uniforms:gs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ne.getTransfer(y.colorSpace)!==de,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(Or,Au(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:x,addToRenderList:m}}function V0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(M,I,H,N,X){let J=!1,G=d(N,H,I);r!==G&&(r=G,l(r.object)),J=f(M,N,H,X),J&&g(M,N,H,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,y(M,I,H,N),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,I,H){let N=H.wireframe===!0,X=n[M.id];X===void 0&&(X={},n[M.id]=X);let J=X[I.id];J===void 0&&(J={},X[I.id]=J);let G=J[N];return G===void 0&&(G=u(c()),J[N]=G),G}function u(M){let I=[],H=[],N=[];for(let X=0;X<e;X++)I[X]=0,H[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,I,H,N){let X=r.attributes,J=I.attributes,G=0,ct=H.getAttributes();for(let K in ct)if(ct[K].location>=0){let wt=X[K],Tt=J[K];if(Tt===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(Tt=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(Tt=M.instanceColor)),wt===void 0||wt.attribute!==Tt||Tt&&wt.data!==Tt.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function g(M,I,H,N){let X={},J=I.attributes,G=0,ct=H.getAttributes();for(let K in ct)if(ct[K].location>=0){let wt=J[K];wt===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(wt=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(wt=M.instanceColor));let Tt={};Tt.attribute=wt,wt&&wt.data&&(Tt.data=wt.data),X[K]=Tt,G++}r.attributes=X,r.attributesNum=G,r.index=N}function x(){let M=r.newAttributes;for(let I=0,H=M.length;I<H;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){let H=r.newAttributes,N=r.enabledAttributes,X=r.attributeDivisors;H[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),X[M]!==I&&(i.vertexAttribDivisor(M,I),X[M]=I)}function _(){let M=r.newAttributes,I=r.enabledAttributes;for(let H=0,N=I.length;H<N;H++)I[H]!==M[H]&&(i.disableVertexAttribArray(H),I[H]=0)}function v(M,I,H,N,X,J,G){G===!0?i.vertexAttribIPointer(M,I,H,X,J):i.vertexAttribPointer(M,I,H,N,X,J)}function y(M,I,H,N){x();let X=N.attributes,J=H.getAttributes(),G=I.defaultAttributeValues;for(let ct in J){let K=J[ct];if(K.location>=0){let yt=X[ct];if(yt===void 0&&(ct==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),ct==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),yt!==void 0){let wt=yt.normalized,Tt=yt.itemSize,Vt=t.get(yt);if(Vt===void 0)continue;let ee=Vt.buffer,it=Vt.type,mt=Vt.bytesPerElement,U=it===i.INT||it===i.UNSIGNED_INT||yt.gpuType===ml;if(yt.isInterleavedBufferAttribute){let W=yt.data,ot=W.stride,gt=yt.offset;if(W.isInstancedInterleavedBuffer){for(let vt=0;vt<K.locationSize;vt++)p(K.location+vt,W.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let vt=0;vt<K.locationSize;vt++)m(K.location+vt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let vt=0;vt<K.locationSize;vt++)v(K.location+vt,Tt/K.locationSize,it,wt,ot*mt,(gt+Tt/K.locationSize*vt)*mt,U)}else{if(yt.isInstancedBufferAttribute){for(let W=0;W<K.locationSize;W++)p(K.location+W,yt.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let W=0;W<K.locationSize;W++)m(K.location+W);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let W=0;W<K.locationSize;W++)v(K.location+W,Tt/K.locationSize,it,wt,Tt*mt,Tt/K.locationSize*W*mt,U)}}else if(G!==void 0){let wt=G[ct];if(wt!==void 0)switch(wt.length){case 2:i.vertexAttrib2fv(K.location,wt);break;case 3:i.vertexAttrib3fv(K.location,wt);break;case 4:i.vertexAttrib4fv(K.location,wt);break;default:i.vertexAttrib1fv(K.location,wt)}}}}_()}function A(){R();for(let M in n){let I=n[M];for(let H in I){let N=I[H];for(let X in N)h(N[X].object),delete N[X];delete I[H]}delete n[M]}}function S(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let H in I){let N=I[H];for(let X in N)h(N[X].object),delete N[X];delete I[H]}delete n[M.id]}function T(M){for(let I in n){let H=n[I];if(H[M.id]===void 0)continue;let N=H[M.id];for(let X in N)h(N[X].object),delete N[X];delete H[M.id]}}function R(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function W0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function X0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==_n&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!R)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:A,maxSamples:S}}function q0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new kn,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,v=_*4,y=p.clippingState||null;c.value=y,y=h(g,u,v,f);for(let A=0;A!==v;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==x;++v,y+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Y0(i){let t=new WeakMap;function e(o,a){return a===Ka?o.mapping=ds:a===ja&&(o.mapping=fs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ka||a===ja)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ic(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ho=class extends co{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},os=4,Dh=[.125,.215,.35,.446,.526,.582],Ri=20,Ia=new ho,Uh=new Ft,La=null,Da=0,Ua=0,Na=!1,wi=(1+Math.sqrt(5))/2,ss=1/wi,Nh=[new D(-wi,ss,0),new D(wi,ss,0),new D(-ss,0,wi),new D(ss,0,wi),new D(0,wi,-ss),new D(0,wi,ss),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Li=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(La,Da,Ua),this._renderer.xr.enabled=Na,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:ar,format:_n,colorSpace:bs,depthBuffer:!1},s=Oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z0(r)),this._blurMaterial=$0(r,t,e)}return s}_compileMaterial(t){let e=new B(this._lodPlanes[0],t);this._renderer.compile(e,Ia)}_sceneToCubeUV(t,e,n,s){let a=new Ue(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Uh),h.toneMapping=li,h.autoClear=!1;let f=new me({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new B(new Ct,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Uh),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;Fr(s,_*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ds||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Fr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ia)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nh[(s-r-1)%Nh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new B(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);let p=[],_=0;for(let T=0;T<Ri;++T){let R=T/x,E=Math.exp(-R*R/2);p.push(E),T===0?_+=E:T<m&&(_+=2*E)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;let y=this._sizeLods[s],A=3*y*(s>v-os?s-v+os:0),S=4*(this._cubeSize-y);Fr(e,A,S,3*y,2*y),c.setRenderTarget(e),c.render(d,Ia)}};function Z0(i){let t=[],e=[],n=[],s=i,r=i-os+1+Dh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-os?c=Dh[o-i+os-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let S=0;S<f;S++){let T=S%3*2/3-1,R=S>2?0:-1,E=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];_.set(E,x*g*S),v.set(u,m*g*S);let M=[S,S,S,S,S,S];y.set(M,p*g*S)}let A=new ye;A.setAttribute("position",new pe(_,x)),A.setAttribute("uv",new pe(v,m)),A.setAttribute("faceIndex",new pe(y,p)),t.push(A),s>os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Oh(i,t,e){let n=new Wn(i,t,e);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $0(i,t,e){let n=new Float32Array(Ri),s=new D(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Fh(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Bh(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function bl(){return`

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
	`}function J0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ka||c===ja,h=c===ds||c===fs;if(l||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Li(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Li(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function K0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function j0(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let v=0,y=_.length;v<y;v+=3){let A=_[v+0],S=_[v+1],T=_[v+2];u.push(A,S,S,T,T,A)}}else if(g!==void 0){let _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let A=v+0,S=v+1,T=v+2;u.push(A,S,S,T,T,A)}}else return;let m=new(wu(u)?ao:oo)(u,1);m.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Q0(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*x[_];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function tg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function eg(i,t,e){let n=new WeakMap,s=new fe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let S=new Float32Array(y*A*4*d),T=new io(S,y,A,d);T.type=An,T.needsUpdate=!0;let R=v*4;for(let M=0;M<d;M++){let I=m[M],H=p[M],N=_[M],X=y*A*4*M;for(let J=0;J<I.count;J++){let G=J*R;f===!0&&(s.fromBufferAttribute(I,J),S[X+G+0]=s.x,S[X+G+1]=s.y,S[X+G+2]=s.z,S[X+G+3]=0),g===!0&&(s.fromBufferAttribute(H,J),S[X+G+4]=s.x,S[X+G+5]=s.y,S[X+G+6]=s.z,S[X+G+7]=0),x===!0&&(s.fromBufferAttribute(N,J),S[X+G+8]=s.x,S[X+G+9]=s.y,S[X+G+10]=s.z,S[X+G+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new St(y,A)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ng(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var uo=class extends je{constructor(t,e,n,s,r,o,a,c,l,h=cs){if(h!==cs&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===cs&&(n=Ii),n===void 0&&h===ms&&(n=ps),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Cu=new je,kh=new uo(1,1),Pu=new io,Iu=new Cc,Lu=new lo,Hh=[],zh=[],Gh=new Float32Array(16),Vh=new Float32Array(9),Wh=new Float32Array(4);function ws(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Hh[s];if(r===void 0&&(r=new Float32Array(s),Hh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function To(i,t){let e=zh[t];e===void 0&&(e=new Int32Array(t),zh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;Wh.set(n),i.uniformMatrix2fv(this.addr,!1,Wh),Oe(e,n)}}function cg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;Vh.set(n),i.uniformMatrix3fv(this.addr,!1,Vh),Oe(e,n)}}function lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;Gh.set(n),i.uniformMatrix4fv(this.addr,!1,Gh),Oe(e,n)}}function hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kh.compareFunction=Su,r=kh):r=Cu,e.setTexture2D(t||r,s)}function vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Iu,s)}function _g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lu,s)}function Mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pu,s)}function Eg(i){switch(i){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return og;case 35674:return ag;case 35675:return cg;case 35676:return lg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return Mg}}function bg(i,t){i.uniform1fv(this.addr,t)}function Sg(i,t){let e=ws(t,this.size,2);i.uniform2fv(this.addr,e)}function wg(i,t){let e=ws(t,this.size,3);i.uniform3fv(this.addr,e)}function Tg(i,t){let e=ws(t,this.size,4);i.uniform4fv(this.addr,e)}function Ag(i,t){let e=ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rg(i,t){let e=ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cg(i,t){let e=ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pg(i,t){i.uniform1iv(this.addr,t)}function Ig(i,t){i.uniform2iv(this.addr,t)}function Lg(i,t){i.uniform3iv(this.addr,t)}function Dg(i,t){i.uniform4iv(this.addr,t)}function Ug(i,t){i.uniform1uiv(this.addr,t)}function Ng(i,t){i.uniform2uiv(this.addr,t)}function Og(i,t){i.uniform3uiv(this.addr,t)}function Fg(i,t){i.uniform4uiv(this.addr,t)}function Bg(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Cu,r[o])}function kg(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Iu,r[o])}function Hg(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Lu,r[o])}function zg(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Pu,r[o])}function Gg(i){switch(i){case 5126:return bg;case 35664:return Sg;case 35665:return wg;case 35666:return Tg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Ug;case 36294:return Ng;case 36295:return Og;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return zg}}var Lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Eg(e.type)}},Dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gg(e.type)}},Uc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Oa=/(\w+)(\])?(\[|\.)?/g;function Xh(i,t){i.seq.push(t),i.map[t.id]=t}function Vg(i,t,e){let n=i.name,s=n.length;for(Oa.lastIndex=0;;){let r=Oa.exec(n),o=Oa.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Xh(e,l===void 0?new Lc(a,i,t):new Dc(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Uc(a),Xh(e,d)),e=d}}}var hs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Vg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function qh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Wg=37297,Xg=0;function qg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Yh=new $t;function Yg(i){ne._getMatrix(Yh,ne.workingColorSpace,i);let t=`mat3( ${Yh.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case wo:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+qg(i.getShaderSource(t),o)}else return s}function Zg(i,t){let e=Yg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function $g(i,t){let e;switch(t){case Mf:e="Linear";break;case Ef:e="Reinhard";break;case bf:e="Cineon";break;case pl:e="ACESFilmic";break;case wf:e="AgX";break;case Tf:e="Neutral";break;case Sf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Br=new D;function Jg(){ne.getLuminanceCoefficients(Br);let i=Br.x.toFixed(4),t=Br.y.toFixed(4),e=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function jg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Xs(i){return i!==""}function $h(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(i){return i.replace(tx,nx)}var ex=new Map;function nx(i,t){let e=jt[t];if(e===void 0){let n=ex.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nc(e)}var ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(i){return i.replace(ix,sx)}function sx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function rx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rr?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===or?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function ox(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case fs:t="ENVMAP_TYPE_CUBE";break;case So:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ax(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fs&&(t="ENVMAP_MODE_REFRACTION"),t}function cx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fl:t="ENVMAP_BLENDING_MULTIPLY";break;case vf:t="ENVMAP_BLENDING_MIX";break;case _f:t="ENVMAP_BLENDING_ADD";break}return t}function lx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function hx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=rx(e),l=ox(e),h=ax(e),d=cx(e),u=lx(e),f=Kg(e),g=jg(r),x=s.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(m=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?jt.tonemapping_pars_fragment:"",e.toneMapping!==li?$g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Zg("linearToOutputTexel",e.outputColorSpace),Jg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Nc(o),o=$h(o,e),o=Jh(o,e),a=Nc(a),a=$h(a,e),a=Jh(a,e),o=Kh(o),a=Kh(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=_+m+o,y=_+p+a,A=qh(s,s.VERTEX_SHADER,v),S=qh(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(I){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(A).trim(),X=s.getShaderInfoLog(S).trim(),J=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,S);else{let ct=Zh(s,A,"vertex"),K=Zh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+ct+`
`+K)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||X==="")&&(G=!1);G&&(I.diagnostics={runnable:J,programLog:H,vertexShader:{log:N,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(A),s.deleteShader(S),R=new hs(s,x),E=Qg(s,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Wg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=S,this}var ux=0,Oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fc(t),e.set(t,n)),n}},Fc=class{constructor(t){this.id=ux++,this.code=t,this.usedTimes=0}};function dx(i,t,e,n,s,r,o){let a=new ro,c=new Oc,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,I,H,N){let X=H.fog,J=N.geometry,G=E.isMeshStandardMaterial?H.environment:null,ct=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),K=ct&&ct.mapping===So?ct.image.height:null,yt=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let wt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Tt=wt!==void 0?wt.length:0,Vt=0;J.morphAttributes.position!==void 0&&(Vt=1),J.morphAttributes.normal!==void 0&&(Vt=2),J.morphAttributes.color!==void 0&&(Vt=3);let ee,it,mt,U;if(yt){let re=wn[yt];ee=re.vertexShader,it=re.fragmentShader}else ee=E.vertexShader,it=E.fragmentShader,c.update(E),mt=c.getVertexShaderID(E),U=c.getFragmentShaderID(E);let W=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),gt=N.isInstancedMesh===!0,vt=N.isBatchedMesh===!0,It=!!E.map,V=!!E.matcap,tt=!!ct,P=!!E.aoMap,lt=!!E.lightMap,et=!!E.bumpMap,ft=!!E.normalMap,pt=!!E.displacementMap,zt=!!E.emissiveMap,Dt=!!E.metalnessMap,C=!!E.roughnessMap,b=E.anisotropy>0,z=E.clearcoat>0,st=E.dispersion>0,ht=E.iridescence>0,rt=E.sheen>0,Ot=E.transmission>0,Et=b&&!!E.anisotropyMap,Lt=z&&!!E.clearcoatMap,Kt=z&&!!E.clearcoatNormalMap,dt=z&&!!E.clearcoatRoughnessMap,Ut=ht&&!!E.iridescenceMap,Wt=ht&&!!E.iridescenceThicknessMap,k=rt&&!!E.sheenColorMap,Y=rt&&!!E.sheenRoughnessMap,nt=!!E.specularMap,ut=!!E.specularColorMap,xt=!!E.specularIntensityMap,L=Ot&&!!E.transmissionMap,at=Ot&&!!E.thicknessMap,q=!!E.gradientMap,Q=!!E.alphaMap,Mt=E.alphaTest>0,bt=!!E.alphaHash,Xt=!!E.extensions,Te=li;E.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Te=i.toneMapping);let Be={shaderID:yt,shaderType:E.type,shaderName:E.name,vertexShader:ee,fragmentShader:it,defines:E.defines,customVertexShaderID:mt,customFragmentShaderID:U,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:vt,batchingColor:vt&&N._colorsTexture!==null,instancing:gt,instancingColor:gt&&N.instanceColor!==null,instancingMorph:gt&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:bs,alphaToCoverage:!!E.alphaToCoverage,map:It,matcap:V,envMap:tt,envMapMode:tt&&ct.mapping,envMapCubeUVHeight:K,aoMap:P,lightMap:lt,bumpMap:et,normalMap:ft,displacementMap:u&&pt,emissiveMap:zt,normalMapObjectSpace:ft&&E.normalMapType===Pf,normalMapTangentSpace:ft&&E.normalMapType===El,metalnessMap:Dt,roughnessMap:C,anisotropy:b,anisotropyMap:Et,clearcoat:z,clearcoatMap:Lt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:dt,dispersion:st,iridescence:ht,iridescenceMap:Ut,iridescenceThicknessMap:Wt,sheen:rt,sheenColorMap:k,sheenRoughnessMap:Y,specularMap:nt,specularColorMap:ut,specularIntensityMap:xt,transmission:Ot,transmissionMap:L,thicknessMap:at,gradientMap:q,opaque:E.transparent===!1&&E.blending===ci&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:Mt,alphaHash:bt,combine:E.combine,mapUv:It&&x(E.map.channel),aoMapUv:P&&x(E.aoMap.channel),lightMapUv:lt&&x(E.lightMap.channel),bumpMapUv:et&&x(E.bumpMap.channel),normalMapUv:ft&&x(E.normalMap.channel),displacementMapUv:pt&&x(E.displacementMap.channel),emissiveMapUv:zt&&x(E.emissiveMap.channel),metalnessMapUv:Dt&&x(E.metalnessMap.channel),roughnessMapUv:C&&x(E.roughnessMap.channel),anisotropyMapUv:Et&&x(E.anisotropyMap.channel),clearcoatMapUv:Lt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:k&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Y&&x(E.sheenRoughnessMap.channel),specularMapUv:nt&&x(E.specularMap.channel),specularColorMapUv:ut&&x(E.specularColorMap.channel),specularIntensityMapUv:xt&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:at&&x(E.thicknessMap.channel),alphaMapUv:Q&&x(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ft||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(It||Q),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ot,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Vt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:It&&E.map.isVideoTexture===!0&&ne.getTransfer(E.map.colorSpace)===de,decodeVideoTextureEmissive:zt&&E.emissiveMap.isVideoTexture===!0&&ne.getTransfer(E.emissiveMap.colorSpace)===de,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ue,flipSided:E.side===Ce,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&E.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let I in E.defines)M.push(I),M.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(_(M,E),v(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){let M=g[E.type],I;if(M){let H=wn[M];I=np.clone(H.uniforms)}else I=E.uniforms;return I}function A(E,M){let I;for(let H=0,N=h.length;H<N;H++){let X=h[H];if(X.cacheKey===M){I=X,++I.usedTimes;break}}return I===void 0&&(I=new hx(i,M,E,r),h.push(I)),I}function S(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function T(E){c.remove(E)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:R}}function fx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function px(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function tu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,g,x,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function a(d,u,f,g,x,m){let p=o(d,u,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,u,f,g,x,m){let p=o(d,u,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||px),n.length>1&&n.sort(u||Qh),s.length>1&&s.sort(u||Qh)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function mx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new tu,i.set(n,[o])):s>=r.length?(o=new tu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function gx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ft};break;case"SpotLight":e={position:new D,direction:new D,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function xx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var yx=0;function vx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _x(i){let t=new gx,e=xx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new oe,o=new oe;function a(l){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,v=0,y=0,A=0,S=0,T=0;l.sort(vx);for(let E=0,M=l.length;E<M;E++){let I=l[E],H=I.color,N=I.intensity,X=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=H.r*N,d+=H.g*N,u+=H.b*N;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],N);T++}else if(I.isDirectionalLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ct=I.shadow,K=e.get(I);K.shadowIntensity=ct.intensity,K.shadowBias=ct.bias,K.shadowNormalBias=ct.normalBias,K.shadowRadius=ct.radius,K.shadowMapSize=ct.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=I.shadow.matrix,_++}n.directional[f]=G,f++}else if(I.isSpotLight){let G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(H).multiplyScalar(N),G.distance=X,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[x]=G;let ct=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,ct.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[x]=ct.matrix,I.castShadow){let K=e.get(I);K.shadowIntensity=ct.intensity,K.shadowBias=ct.bias,K.shadowNormalBias=ct.normalBias,K.shadowRadius=ct.radius,K.shadowMapSize=ct.mapSize,n.spotShadow[x]=K,n.spotShadowMap[x]=J,y++}x++}else if(I.isRectAreaLight){let G=t.get(I);G.color.copy(H).multiplyScalar(N),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let ct=I.shadow,K=e.get(I);K.shadowIntensity=ct.intensity,K.shadowBias=ct.bias,K.shadowNormalBias=ct.normalBias,K.shadowRadius=ct.radius,K.shadowMapSize=ct.mapSize,K.shadowCameraNear=ct.camera.near,K.shadowCameraFar=ct.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=G,g++}else if(I.isHemisphereLight){let G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(N),G.groundColor.copy(I.groundColor).multiplyScalar(N),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==y||R.numSpotMaps!==A||R.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+A-S,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,R.directionalLength=f,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=y,R.numSpotMaps=A,R.numLightProbes=T,n.version=yx++)}function c(l,h){let d=0,u=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let v=l[p];if(v.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function eu(i){let t=new _x(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Mx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new eu(i),t.set(s,[a])):r>=o.length?(a=new eu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Bc=class extends qn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},kc=class extends qn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bx=`uniform sampler2D shadow_pass;
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
}`;function Sx(i,t,e){let n=new Ks,s=new St,r=new St,o=new fe,a=new Bc({depthPacking:Cf}),c=new kc,l={},h=e.maxTextureSize,d={[Rn]:Ce,[Ce]:Rn,[ue]:ue},u=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Ex,fragmentShader:bx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new ye;g.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new B(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rr;let p=this.type;this.render=function(S,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),H=i.state;H.setBlending(ai),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let N=p!==Bn&&this.type===Bn,X=p===Bn&&this.type!==Bn;for(let J=0,G=S.length;J<G;J++){let ct=S[J],K=ct.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let yt=K.getFrameExtents();if(s.multiply(yt),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/yt.x),s.x=r.x*yt.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/yt.y),s.y=r.y*yt.y,K.mapSize.y=r.y)),K.map===null||N===!0||X===!0){let Tt=this.type!==Bn?{minFilter:an,magFilter:an}:{};K.map!==null&&K.map.dispose(),K.map=new Wn(s.x,s.y,Tt),K.map.texture.name=ct.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let wt=K.getViewportCount();for(let Tt=0;Tt<wt;Tt++){let Vt=K.getViewport(Tt);o.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),H.viewport(o),K.updateMatrices(ct,Tt),n=K.getFrustum(),y(T,R,K.camera,ct,this.type)}K.isPointLightShadow!==!0&&this.type===Bn&&_(K,R),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,I)};function _(S,T){let R=t.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Wn(s.x,s.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,R,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,R,f,x,null)}function v(S,T,R,E){let M=null,I=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)M=I;else if(M=R.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=M.uuid,N=T.uuid,X=l[H];X===void 0&&(X={},l[H]=X);let J=X[N];J===void 0&&(J=M.clone(),X[N]=J,T.addEventListener("dispose",A)),M=J}if(M.visible=T.visible,M.wireframe=T.wireframe,E===Bn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=i.properties.get(M);H.light=R}return M}function y(S,T,R,E,M){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Bn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);let N=t.update(S),X=S.material;if(Array.isArray(X)){let J=N.groups;for(let G=0,ct=J.length;G<ct;G++){let K=J[G],yt=X[K.materialIndex];if(yt&&yt.visible){let wt=v(S,yt,E,M);S.onBeforeShadow(i,S,T,R,N,wt,K),i.renderBufferDirect(R,null,N,wt,S,K),S.onAfterShadow(i,S,T,R,N,wt,K)}}}else if(X.visible){let J=v(S,X,E,M);S.onBeforeShadow(i,S,T,R,N,J,null),i.renderBufferDirect(R,null,N,J,S,null),S.onAfterShadow(i,S,T,R,N,J,null)}}let H=S.children;for(let N=0,X=H.length;N<X;N++)y(H[N],T,R,E,M)}function A(S){S.target.removeEventListener("dispose",A);for(let R in l){let E=l[R],M=S.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var wx={[Wa]:Xa,[qa]:$a,[Ya]:Ja,[us]:Za,[Xa]:Wa,[$a]:qa,[Ja]:Ya,[Za]:us};function Tx(i,t){function e(){let L=!1,at=new fe,q=null,Q=new fe(0,0,0,0);return{setMask:function(Mt){q!==Mt&&!L&&(i.colorMask(Mt,Mt,Mt,Mt),q=Mt)},setLocked:function(Mt){L=Mt},setClear:function(Mt,bt,Xt,Te,Be){Be===!0&&(Mt*=Te,bt*=Te,Xt*=Te),at.set(Mt,bt,Xt,Te),Q.equals(at)===!1&&(i.clearColor(Mt,bt,Xt,Te),Q.copy(at))},reset:function(){L=!1,q=null,Q.set(-1,0,0,0)}}}function n(){let L=!1,at=!1,q=null,Q=null,Mt=null;return{setReversed:function(bt){if(at!==bt){let Xt=t.get("EXT_clip_control");at?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);let Te=Mt;Mt=null,this.setClear(Te)}at=bt},getReversed:function(){return at},setTest:function(bt){bt?W(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(bt){q!==bt&&!L&&(i.depthMask(bt),q=bt)},setFunc:function(bt){if(at&&(bt=wx[bt]),Q!==bt){switch(bt){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case $a:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=bt}},setLocked:function(bt){L=bt},setClear:function(bt){Mt!==bt&&(at&&(bt=1-bt),i.clearDepth(bt),Mt=bt)},reset:function(){L=!1,q=null,Q=null,Mt=null,at=!1}}}function s(){let L=!1,at=null,q=null,Q=null,Mt=null,bt=null,Xt=null,Te=null,Be=null;return{setTest:function(re){L||(re?W(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(re){at!==re&&!L&&(i.stencilMask(re),at=re)},setFunc:function(re,$e,In){(q!==re||Q!==$e||Mt!==In)&&(i.stencilFunc(re,$e,In),q=re,Q=$e,Mt=In)},setOp:function(re,$e,In){(bt!==re||Xt!==$e||Te!==In)&&(i.stencilOp(re,$e,In),bt=re,Xt=$e,Te=In)},setLocked:function(re){L=re},setClear:function(re){Be!==re&&(i.clearStencil(re),Be=re)},reset:function(){L=!1,at=null,q=null,Q=null,Mt=null,bt=null,Xt=null,Te=null,Be=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,v=null,y=null,A=null,S=null,T=new Ft(0,0,0),R=0,E=!1,M=null,I=null,H=null,N=null,X=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ct=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=ct>=1):K.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=ct>=2);let yt=null,wt={},Tt=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),ee=new fe().fromArray(Tt),it=new fe().fromArray(Vt);function mt(L,at,q,Q){let Mt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(L,bt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<q;Xt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(at+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return bt}let U={};U[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(i.DEPTH_TEST),o.setFunc(us),et(!1),ft(sh),W(i.CULL_FACE),P(ai);function W(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function ot(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function gt(L,at){return d[L]!==at?(i.bindFramebuffer(L,at),d[L]=at,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=at),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=at),!0):!1}function vt(L,at){let q=f,Q=!1;if(L){q=u.get(at),q===void 0&&(q=[],u.set(at,q));let Mt=L.textures;if(q.length!==Mt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Xt=Mt.length;bt<Xt;bt++)q[bt]=i.COLOR_ATTACHMENT0+bt;q.length=Mt.length,Q=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Q=!0);Q&&i.drawBuffers(q)}function It(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let V={[Ti]:i.FUNC_ADD,[ef]:i.FUNC_SUBTRACT,[nf]:i.FUNC_REVERSE_SUBTRACT};V[sf]=i.MIN,V[rf]=i.MAX;let tt={[of]:i.ZERO,[af]:i.ONE,[cf]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[pf]:i.SRC_ALPHA_SATURATE,[df]:i.DST_COLOR,[hf]:i.DST_ALPHA,[lf]:i.ONE_MINUS_SRC_COLOR,[Va]:i.ONE_MINUS_SRC_ALPHA,[ff]:i.ONE_MINUS_DST_COLOR,[uf]:i.ONE_MINUS_DST_ALPHA,[mf]:i.CONSTANT_COLOR,[gf]:i.ONE_MINUS_CONSTANT_COLOR,[xf]:i.CONSTANT_ALPHA,[yf]:i.ONE_MINUS_CONSTANT_ALPHA};function P(L,at,q,Q,Mt,bt,Xt,Te,Be,re){if(L===ai){x===!0&&(ot(i.BLEND),x=!1);return}if(x===!1&&(W(i.BLEND),x=!0),L!==tf){if(L!==m||re!==E){if((p!==Ti||y!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,y=Ti),re)switch(L){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kr:i.blendFunc(i.ONE,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,v=null,A=null,S=null,T.set(0,0,0),R=0,m=L,E=re}return}Mt=Mt||at,bt=bt||q,Xt=Xt||Q,(at!==p||Mt!==y)&&(i.blendEquationSeparate(V[at],V[Mt]),p=at,y=Mt),(q!==_||Q!==v||bt!==A||Xt!==S)&&(i.blendFuncSeparate(tt[q],tt[Q],tt[bt],tt[Xt]),_=q,v=Q,A=bt,S=Xt),(Te.equals(T)===!1||Be!==R)&&(i.blendColor(Te.r,Te.g,Te.b,Be),T.copy(Te),R=Be),m=L,E=!1}function lt(L,at){L.side===ue?ot(i.CULL_FACE):W(i.CULL_FACE);let q=L.side===Ce;at&&(q=!q),et(q),L.blending===ci&&L.transparent===!1?P(ai):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let Q=L.stencilWrite;a.setTest(Q),Q&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),zt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function ft(L){L!==jd?(W(i.CULL_FACE),L!==I&&(L===sh?i.cullFace(i.BACK):L===Qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),I=L}function pt(L){L!==H&&(G&&i.lineWidth(L),H=L)}function zt(L,at,q){L?(W(i.POLYGON_OFFSET_FILL),(N!==at||X!==q)&&(i.polygonOffset(at,q),N=at,X=q)):ot(i.POLYGON_OFFSET_FILL)}function Dt(L){L?W(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function C(L){L===void 0&&(L=i.TEXTURE0+J-1),yt!==L&&(i.activeTexture(L),yt=L)}function b(L,at,q){q===void 0&&(yt===null?q=i.TEXTURE0+J-1:q=yt);let Q=wt[q];Q===void 0&&(Q={type:void 0,texture:void 0},wt[q]=Q),(Q.type!==L||Q.texture!==at)&&(yt!==q&&(i.activeTexture(q),yt=q),i.bindTexture(L,at||U[L]),Q.type=L,Q.texture=at)}function z(){let L=wt[yt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(L){ee.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function Y(L){it.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),it.copy(L))}function nt(L,at){let q=l.get(at);q===void 0&&(q=new WeakMap,l.set(at,q));let Q=q.get(L);Q===void 0&&(Q=i.getUniformBlockIndex(at,L.name),q.set(L,Q))}function ut(L,at){let Q=l.get(at).get(L);c.get(at)!==Q&&(i.uniformBlockBinding(at,Q,L.__bindingPointIndex),c.set(at,Q))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},yt=null,wt={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,v=null,y=null,A=null,S=null,T=new Ft(0,0,0),R=0,E=!1,M=null,I=null,H=null,N=null,X=null,ee.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:ot,bindFramebuffer:gt,drawBuffers:vt,useProgram:It,setBlending:P,setMaterial:lt,setFlipSided:et,setCullFace:ft,setLineWidth:pt,setPolygonOffset:zt,setScissorTest:Dt,activeTexture:C,bindTexture:b,unbindTexture:z,compressedTexImage2D:st,compressedTexImage3D:ht,texImage2D:Ut,texImage3D:Wt,updateUBOMapping:nt,uniformBlockBinding:ut,texStorage2D:Kt,texStorage3D:dt,texSubImage2D:rt,texSubImage3D:Ot,compressedTexSubImage2D:Et,compressedTexSubImage3D:Lt,scissor:k,viewport:Y,reset:xt}}function nu(i,t,e,n){let s=Ax(n);switch(e){case yu:return i*t;case _u:return i*t;case Mu:return i*t*2;case yl:return i*t/s.components*s.byteLength;case vl:return i*t/s.components*s.byteLength;case Eu:return i*t*2/s.components*s.byteLength;case _l:return i*t*2/s.components*s.byteLength;case vu:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case Ml:return i*t*4/s.components*s.byteLength;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ec:case ic:return Math.max(i,16)*Math.max(t,8)/4;case tc:case nc:return Math.max(i,8)*Math.max(t,8)/2;case sc:case rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case dc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case vc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jr:case Mc:case Ec:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bu:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Sc:case wc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ax(i){switch(i){case Vn:case mu:return{byteLength:1,components:1};case Js:case gu:case ar:return{byteLength:2,components:1};case gl:case xl:return{byteLength:2,components:4};case Ii:case ml:case An:return{byteLength:4,components:1};case xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Rx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return f?new OffscreenCanvas(C,b):eo("canvas")}function x(C,b,z){let st=1,ht=Dt(C);if((ht.width>z||ht.height>z)&&(st=z/Math.max(ht.width,ht.height)),st<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let rt=Math.floor(st*ht.width),Ot=Math.floor(st*ht.height);d===void 0&&(d=g(rt,Ot));let Et=b?g(rt,Ot):d;return Et.width=rt,Et.height=Ot,Et.getContext("2d").drawImage(C,0,0,rt,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+rt+"x"+Ot+")."),Et}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,b,z,st,ht=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=b;if(b===i.RED&&(z===i.FLOAT&&(rt=i.R32F),z===i.HALF_FLOAT&&(rt=i.R16F),z===i.UNSIGNED_BYTE&&(rt=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(rt=i.R8UI),z===i.UNSIGNED_SHORT&&(rt=i.R16UI),z===i.UNSIGNED_INT&&(rt=i.R32UI),z===i.BYTE&&(rt=i.R8I),z===i.SHORT&&(rt=i.R16I),z===i.INT&&(rt=i.R32I)),b===i.RG&&(z===i.FLOAT&&(rt=i.RG32F),z===i.HALF_FLOAT&&(rt=i.RG16F),z===i.UNSIGNED_BYTE&&(rt=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(rt=i.RG8UI),z===i.UNSIGNED_SHORT&&(rt=i.RG16UI),z===i.UNSIGNED_INT&&(rt=i.RG32UI),z===i.BYTE&&(rt=i.RG8I),z===i.SHORT&&(rt=i.RG16I),z===i.INT&&(rt=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),z===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),z===i.UNSIGNED_INT&&(rt=i.RGB32UI),z===i.BYTE&&(rt=i.RGB8I),z===i.SHORT&&(rt=i.RGB16I),z===i.INT&&(rt=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),z===i.UNSIGNED_INT&&(rt=i.RGBA32UI),z===i.BYTE&&(rt=i.RGBA8I),z===i.SHORT&&(rt=i.RGBA16I),z===i.INT&&(rt=i.RGBA32I)),b===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),b===i.RGBA){let Ot=ht?wo:ne.getTransfer(st);z===i.FLOAT&&(rt=i.RGBA32F),z===i.HALF_FLOAT&&(rt=i.RGBA16F),z===i.UNSIGNED_BYTE&&(rt=Ot===de?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function y(C,b){let z;return C?b===null||b===Ii||b===ps?z=i.DEPTH24_STENCIL8:b===An?z=i.DEPTH32F_STENCIL8:b===Js&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ii||b===ps?z=i.DEPTH_COMPONENT24:b===An?z=i.DEPTH_COMPONENT32F:b===Js&&(z=i.DEPTH_COMPONENT16),z}function A(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==Tn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function S(C){let b=C.target;b.removeEventListener("dispose",S),R(b),b.isVideoTexture&&h.delete(b)}function T(C){let b=C.target;b.removeEventListener("dispose",T),M(b)}function R(C){let b=n.get(C);if(b.__webglInit===void 0)return;let z=C.source,st=u.get(z);if(st){let ht=st[b.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&E(C),Object.keys(st).length===0&&u.delete(z)}n.remove(C)}function E(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let z=C.source,st=u.get(z);delete st[b.__cacheKey],o.memory.textures--}function M(C){let b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(b.__webglFramebuffer[st]))for(let ht=0;ht<b.__webglFramebuffer[st].length;ht++)i.deleteFramebuffer(b.__webglFramebuffer[st][ht]);else i.deleteFramebuffer(b.__webglFramebuffer[st]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[st])}else{if(Array.isArray(b.__webglFramebuffer))for(let st=0;st<b.__webglFramebuffer.length;st++)i.deleteFramebuffer(b.__webglFramebuffer[st]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let st=0;st<b.__webglColorRenderbuffer.length;st++)b.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[st]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=C.textures;for(let st=0,ht=z.length;st<ht;st++){let rt=n.get(z[st]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(z[st])}n.remove(C)}let I=0;function H(){I=0}function N(){let C=I;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function X(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function J(C,b){let z=n.get(C);if(C.isVideoTexture&&pt(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){let st=C.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(z,C,b);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function G(C,b){let z=n.get(C);if(C.version>0&&z.__version!==C.version){it(z,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function ct(C,b){let z=n.get(C);if(C.version>0&&z.__version!==C.version){it(z,C,b);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function K(C,b){let z=n.get(C);if(C.version>0&&z.__version!==C.version){mt(z,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}let yt={[Pi]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},wt={[an]:i.NEAREST,[Af]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[qs]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},Tt={[If]:i.NEVER,[Ff]:i.ALWAYS,[Lf]:i.LESS,[Su]:i.LEQUAL,[Df]:i.EQUAL,[Of]:i.GEQUAL,[Uf]:i.GREATER,[Nf]:i.NOTEQUAL};function Vt(C,b){if(b.type===An&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Tn||b.magFilter===qs||b.magFilter===yr||b.magFilter===Hn||b.minFilter===Tn||b.minFilter===qs||b.minFilter===yr||b.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,yt[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,yt[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,yt[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,wt[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,wt[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===an||b.minFilter!==yr&&b.minFilter!==Hn||b.type===An&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ee(C,b){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",S));let st=b.source,ht=u.get(st);ht===void 0&&(ht={},u.set(st,ht));let rt=X(b);if(rt!==C.__cacheKey){ht[rt]===void 0&&(ht[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ht[rt].usedTimes++;let Ot=ht[C.__cacheKey];Ot!==void 0&&(ht[C.__cacheKey].usedTimes--,Ot.usedTimes===0&&E(b)),C.__cacheKey=rt,C.__webglTexture=ht[rt].texture}return z}function it(C,b,z){let st=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=i.TEXTURE_3D);let ht=ee(C,b),rt=b.source;e.bindTexture(st,C.__webglTexture,i.TEXTURE0+z);let Ot=n.get(rt);if(rt.version!==Ot.__version||ht===!0){e.activeTexture(i.TEXTURE0+z);let Et=ne.getPrimaries(ne.workingColorSpace),Lt=b.colorSpace===oi?null:ne.getPrimaries(b.colorSpace),Kt=b.colorSpace===oi||Et===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let dt=x(b.image,!1,s.maxTextureSize);dt=zt(b,dt);let Ut=r.convert(b.format,b.colorSpace),Wt=r.convert(b.type),k=v(b.internalFormat,Ut,Wt,b.colorSpace,b.isVideoTexture);Vt(st,b);let Y,nt=b.mipmaps,ut=b.isVideoTexture!==!0,xt=Ot.__version===void 0||ht===!0,L=rt.dataReady,at=A(b,dt);if(b.isDepthTexture)k=y(b.format===ms,b.type),xt&&(ut?e.texStorage2D(i.TEXTURE_2D,1,k,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,k,dt.width,dt.height,0,Ut,Wt,null));else if(b.isDataTexture)if(nt.length>0){ut&&xt&&e.texStorage2D(i.TEXTURE_2D,at,k,nt[0].width,nt[0].height);for(let q=0,Q=nt.length;q<Q;q++)Y=nt[q],ut?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Y.width,Y.height,Ut,Wt,Y.data):e.texImage2D(i.TEXTURE_2D,q,k,Y.width,Y.height,0,Ut,Wt,Y.data);b.generateMipmaps=!1}else ut?(xt&&e.texStorage2D(i.TEXTURE_2D,at,k,dt.width,dt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Ut,Wt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,k,dt.width,dt.height,0,Ut,Wt,dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ut&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,k,nt[0].width,nt[0].height,dt.depth);for(let q=0,Q=nt.length;q<Q;q++)if(Y=nt[q],b.format!==_n)if(Ut!==null)if(ut){if(L)if(b.layerUpdates.size>0){let Mt=nu(Y.width,Y.height,b.format,b.type);for(let bt of b.layerUpdates){let Xt=Y.data.subarray(bt*Mt/Y.data.BYTES_PER_ELEMENT,(bt+1)*Mt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,bt,Y.width,Y.height,1,Ut,Xt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Y.width,Y.height,dt.depth,Ut,Y.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,k,Y.width,Y.height,dt.depth,0,Y.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Y.width,Y.height,dt.depth,Ut,Wt,Y.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,k,Y.width,Y.height,dt.depth,0,Ut,Wt,Y.data)}else{ut&&xt&&e.texStorage2D(i.TEXTURE_2D,at,k,nt[0].width,nt[0].height);for(let q=0,Q=nt.length;q<Q;q++)Y=nt[q],b.format!==_n?Ut!==null?ut?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Y.width,Y.height,Ut,Y.data):e.compressedTexImage2D(i.TEXTURE_2D,q,k,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Y.width,Y.height,Ut,Wt,Y.data):e.texImage2D(i.TEXTURE_2D,q,k,Y.width,Y.height,0,Ut,Wt,Y.data)}else if(b.isDataArrayTexture)if(ut){if(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,k,dt.width,dt.height,dt.depth),L)if(b.layerUpdates.size>0){let q=nu(dt.width,dt.height,b.format,b.type);for(let Q of b.layerUpdates){let Mt=dt.data.subarray(Q*q/dt.data.BYTES_PER_ELEMENT,(Q+1)*q/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,dt.width,dt.height,1,Ut,Wt,Mt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ut,Wt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,k,dt.width,dt.height,dt.depth,0,Ut,Wt,dt.data);else if(b.isData3DTexture)ut?(xt&&e.texStorage3D(i.TEXTURE_3D,at,k,dt.width,dt.height,dt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ut,Wt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,k,dt.width,dt.height,dt.depth,0,Ut,Wt,dt.data);else if(b.isFramebufferTexture){if(xt)if(ut)e.texStorage2D(i.TEXTURE_2D,at,k,dt.width,dt.height);else{let q=dt.width,Q=dt.height;for(let Mt=0;Mt<at;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,k,q,Q,0,Ut,Wt,null),q>>=1,Q>>=1}}else if(nt.length>0){if(ut&&xt){let q=Dt(nt[0]);e.texStorage2D(i.TEXTURE_2D,at,k,q.width,q.height)}for(let q=0,Q=nt.length;q<Q;q++)Y=nt[q],ut?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Ut,Wt,Y):e.texImage2D(i.TEXTURE_2D,q,k,Ut,Wt,Y);b.generateMipmaps=!1}else if(ut){if(xt){let q=Dt(dt);e.texStorage2D(i.TEXTURE_2D,at,k,q.width,q.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,Wt,dt)}else e.texImage2D(i.TEXTURE_2D,0,k,Ut,Wt,dt);m(b)&&p(st),Ot.__version=rt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function mt(C,b,z){if(b.image.length!==6)return;let st=ee(C,b),ht=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let rt=n.get(ht);if(ht.version!==rt.__version||st===!0){e.activeTexture(i.TEXTURE0+z);let Ot=ne.getPrimaries(ne.workingColorSpace),Et=b.colorSpace===oi?null:ne.getPrimaries(b.colorSpace),Lt=b.colorSpace===oi||Ot===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,dt=b.image[0]&&b.image[0].isDataTexture,Ut=[];for(let Q=0;Q<6;Q++)!Kt&&!dt?Ut[Q]=x(b.image[Q],!0,s.maxCubemapSize):Ut[Q]=dt?b.image[Q].image:b.image[Q],Ut[Q]=zt(b,Ut[Q]);let Wt=Ut[0],k=r.convert(b.format,b.colorSpace),Y=r.convert(b.type),nt=v(b.internalFormat,k,Y,b.colorSpace),ut=b.isVideoTexture!==!0,xt=rt.__version===void 0||st===!0,L=ht.dataReady,at=A(b,Wt);Vt(i.TEXTURE_CUBE_MAP,b);let q;if(Kt){ut&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,nt,Wt.width,Wt.height);for(let Q=0;Q<6;Q++){q=Ut[Q].mipmaps;for(let Mt=0;Mt<q.length;Mt++){let bt=q[Mt];b.format!==_n?k!==null?ut?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,0,0,bt.width,bt.height,k,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,nt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,0,0,bt.width,bt.height,k,Y,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,nt,bt.width,bt.height,0,k,Y,bt.data)}}}else{if(q=b.mipmaps,ut&&xt){q.length>0&&at++;let Q=Dt(Ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,nt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(dt){ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ut[Q].width,Ut[Q].height,k,Y,Ut[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,nt,Ut[Q].width,Ut[Q].height,0,k,Y,Ut[Q].data);for(let Mt=0;Mt<q.length;Mt++){let Xt=q[Mt].image[Q].image;ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,0,0,Xt.width,Xt.height,k,Y,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,nt,Xt.width,Xt.height,0,k,Y,Xt.data)}}else{ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,k,Y,Ut[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,nt,k,Y,Ut[Q]);for(let Mt=0;Mt<q.length;Mt++){let bt=q[Mt];ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,0,0,k,Y,bt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,nt,k,Y,bt.image[Q])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),rt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function U(C,b,z,st,ht,rt){let Ot=r.convert(z.format,z.colorSpace),Et=r.convert(z.type),Lt=v(z.internalFormat,Ot,Et,z.colorSpace),Kt=n.get(b),dt=n.get(z);if(dt.__renderTarget=b,!Kt.__hasExternalTextures){let Ut=Math.max(1,b.width>>rt),Wt=Math.max(1,b.height>>rt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,rt,Lt,Ut,Wt,b.depth,0,Ot,Et,null):e.texImage2D(ht,rt,Lt,Ut,Wt,0,Ot,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ft(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ht,dt.__webglTexture,0,et(b)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ht,dt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function W(C,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){let st=b.depthTexture,ht=st&&st.isDepthTexture?st.type:null,rt=y(b.stencilBuffer,ht),Ot=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=et(b);ft(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,rt,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,rt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,rt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,C)}else{let st=b.textures;for(let ht=0;ht<st.length;ht++){let rt=st[ht],Ot=r.convert(rt.format,rt.colorSpace),Et=r.convert(rt.type),Lt=v(rt.internalFormat,Ot,Et,rt.colorSpace),Kt=et(b);z&&ft(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Lt,b.width,b.height):ft(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,Lt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=n.get(b.depthTexture);st.__renderTarget=b,(!st.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);let ht=st.__webglTexture,rt=et(b);if(b.depthTexture.format===cs)ft(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(b.depthTexture.format===ms)ft(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function gt(C){let b=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let st=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),st){let ht=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",ht)};st.addEventListener("dispose",ht),b.__depthDisposeCallback=ht}b.__boundDepthTexture=st}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ot(b.__webglFramebuffer,C)}else if(z){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=i.createRenderbuffer(),W(b.__webglDepthbuffer[st],C,!1);else{let ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),W(b.__webglDepthbuffer,C,!1);else{let st=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(C,b,z){let st=n.get(C);b!==void 0&&U(st.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&gt(C)}function It(C){let b=C.texture,z=n.get(C),st=n.get(b);C.addEventListener("dispose",T);let ht=C.textures,rt=C.isWebGLCubeRenderTarget===!0,Ot=ht.length>1;if(Ot||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=b.version,o.memory.textures++),rt){z.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[Et]=[];for(let Lt=0;Lt<b.mipmaps.length;Lt++)z.__webglFramebuffer[Et][Lt]=i.createFramebuffer()}else z.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let Et=0;Et<b.mipmaps.length;Et++)z.__webglFramebuffer[Et]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let Et=0,Lt=ht.length;Et<Lt;Et++){let Kt=n.get(ht[Et]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ft(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Et=0;Et<ht.length;Et++){let Lt=ht[Et];z.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Et]);let Kt=r.convert(Lt.format,Lt.colorSpace),dt=r.convert(Lt.type),Ut=v(Lt.internalFormat,Kt,dt,Lt.colorSpace,C.isXRRenderTarget===!0),Wt=et(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Ut,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,z.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),W(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,b);for(let Et=0;Et<6;Et++)if(b.mipmaps&&b.mipmaps.length>0)for(let Lt=0;Lt<b.mipmaps.length;Lt++)U(z.__webglFramebuffer[Et][Lt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt);else U(z.__webglFramebuffer[Et],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let Et=0,Lt=ht.length;Et<Lt;Et++){let Kt=ht[Et],dt=n.get(Kt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),Vt(i.TEXTURE_2D,Kt),U(z.__webglFramebuffer,C,Kt,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),m(Kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Et=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,st.__webglTexture),Vt(Et,b),b.mipmaps&&b.mipmaps.length>0)for(let Lt=0;Lt<b.mipmaps.length;Lt++)U(z.__webglFramebuffer[Lt],C,b,i.COLOR_ATTACHMENT0,Et,Lt);else U(z.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,Et,0);m(b)&&p(Et),e.unbindTexture()}C.depthBuffer&&gt(C)}function V(C){let b=C.textures;for(let z=0,st=b.length;z<st;z++){let ht=b[z];if(m(ht)){let rt=_(C),Ot=n.get(ht).__webglTexture;e.bindTexture(rt,Ot),p(rt),e.unbindTexture()}}}let tt=[],P=[];function lt(C){if(C.samples>0){if(ft(C)===!1){let b=C.textures,z=C.width,st=C.height,ht=i.COLOR_BUFFER_BIT,rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(C),Et=b.length>1;if(Et)for(let Lt=0;Lt<b.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Lt=0;Lt<b.length;Lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);let Kt=n.get(b[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,z,st,0,0,z,st,ht,i.NEAREST),c===!0&&(tt.length=0,P.length=0,tt.push(i.COLOR_ATTACHMENT0+Lt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(tt.push(rt),P.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Lt=0;Lt<b.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);let Kt=n.get(b[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function et(C){return Math.min(s.maxSamples,C.samples)}function ft(C){let b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function pt(C){let b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function zt(C,b){let z=C.colorSpace,st=C.format,ht=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==bs&&z!==oi&&(ne.getTransfer(z)===de?(st!==_n||ht!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function Dt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=ct,this.setTextureCube=K,this.rebindTextures=vt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=U,this.useMultisampledRTT=ft}function Cx(i,t){function e(n,s=oi){let r,o=ne.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mu)return i.BYTE;if(n===gu)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===ml)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===ar)return i.HALF_FLOAT;if(n===yu)return i.ALPHA;if(n===vu)return i.RGB;if(n===_n)return i.RGBA;if(n===_u)return i.LUMINANCE;if(n===Mu)return i.LUMINANCE_ALPHA;if(n===cs)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===yl)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===Eu)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===Ml)return i.RGBA_INTEGER;if(n===qr||n===Yr||n===Zr||n===$r)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===oc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===rc)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ac||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===yc||n===vc||n===_c)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr||n===Mc||n===Ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jr)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bu||n===bc||n===Sc||n===wc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Hc=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Jt=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},Px={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Px)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
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

}`,zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:Ix,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new B(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gc=class extends ui{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,x=new zc,m=e.getContextAttributes(),p=null,_=null,v=[],y=[],A=new St,S=null,T=new Ue;T.viewport=new fe;let R=new Ue;R.viewport=new fe;let E=[T,R],M=new Hc,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let mt=v[it];return mt===void 0&&(mt=new Ys,v[it]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(it){let mt=v[it];return mt===void 0&&(mt=new Ys,v[it]=mt),mt.getGripSpace()},this.getHand=function(it){let mt=v[it];return mt===void 0&&(mt=new Ys,v[it]=mt),mt.getHandSpace()};function N(it){let mt=y.indexOf(it.inputSource);if(mt===-1)return;let U=v[mt];U!==void 0&&(U.update(it.inputSource,it.frame,l||o),U.dispatchEvent({type:it.type,data:it.inputSource}))}function X(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",J);for(let it=0;it<v.length;it++){let mt=y[it];mt!==null&&(y[it]=null,v[it].disconnect(mt))}I=null,H=null,x.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,_=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(it){l=it},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",X),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){let mt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Wn(f.framebufferWidth,f.framebufferHeight,{format:_n,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let mt=null,U=null,W=null;m.depth&&(W=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=m.stencil?ms:cs,U=m.stencil?ps:Ii);let ot={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Wn(u.textureWidth,u.textureHeight,{format:_n,type:Vn,depthTexture:new uo(u.textureWidth,u.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(it){for(let mt=0;mt<it.removed.length;mt++){let U=it.removed[mt],W=y.indexOf(U);W>=0&&(y[W]=null,v[W].disconnect(U))}for(let mt=0;mt<it.added.length;mt++){let U=it.added[mt],W=y.indexOf(U);if(W===-1){for(let gt=0;gt<v.length;gt++)if(gt>=y.length){y.push(U),W=gt;break}else if(y[gt]===null){y[gt]=U,W=gt;break}if(W===-1)break}let ot=v[W];ot&&ot.connect(U)}}let G=new D,ct=new D;function K(it,mt,U){G.setFromMatrixPosition(mt.matrixWorld),ct.setFromMatrixPosition(U.matrixWorld);let W=G.distanceTo(ct),ot=mt.projectionMatrix.elements,gt=U.projectionMatrix.elements,vt=ot[14]/(ot[10]-1),It=ot[14]/(ot[10]+1),V=(ot[9]+1)/ot[5],tt=(ot[9]-1)/ot[5],P=(ot[8]-1)/ot[0],lt=(gt[8]+1)/gt[0],et=vt*P,ft=vt*lt,pt=W/(-P+lt),zt=pt*-P;if(mt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(zt),it.translateZ(pt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),ot[10]===-1)it.projectionMatrix.copy(mt.projectionMatrix),it.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{let Dt=vt+pt,C=It+pt,b=et-zt,z=ft+(W-zt),st=V*It/C*Dt,ht=tt*It/C*Dt;it.projectionMatrix.makePerspective(b,z,st,ht,Dt,C),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function yt(it,mt){mt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(mt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let mt=it.near,U=it.far;x.texture!==null&&(x.depthNear>0&&(mt=x.depthNear),x.depthFar>0&&(U=x.depthFar)),M.near=R.near=T.near=mt,M.far=R.far=T.far=U,(I!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,H=M.far),T.layers.mask=it.layers.mask|2,R.layers.mask=it.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;let W=it.parent,ot=M.cameras;yt(M,W);for(let gt=0;gt<ot.length;gt++)yt(ot[gt],W);ot.length===2?K(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),wt(it,M,W)};function wt(it,mt,U){U===null?it.matrix.copy(mt.matrixWorld):(it.matrix.copy(U.matrixWorld),it.matrix.invert(),it.matrix.multiply(mt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(mt.projectionMatrix),it.projectionMatrixInverse.copy(mt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=to*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(it){c=it,u!==null&&(u.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Tt=null;function Vt(it,mt){if(h=mt.getViewerPose(l||o),g=mt,h!==null){let U=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let W=!1;U.length!==M.cameras.length&&(M.cameras.length=0,W=!0);for(let gt=0;gt<U.length;gt++){let vt=U[gt],It=null;if(f!==null)It=f.getViewport(vt);else{let tt=d.getViewSubImage(u,vt);It=tt.viewport,gt===0&&(t.setRenderTargetTextures(_,tt.colorTexture,u.ignoreDepthValues?void 0:tt.depthStencilTexture),t.setRenderTarget(_))}let V=E[gt];V===void 0&&(V=new Ue,V.layers.enable(gt),V.viewport=new fe,E[gt]=V),V.matrix.fromArray(vt.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(vt.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(It.x,It.y,It.width,It.height),gt===0&&(M.matrix.copy(V.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),W===!0&&M.cameras.push(V)}let ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")){let gt=d.getDepthInformation(U[0]);gt&&gt.isValid&&gt.texture&&x.init(t,gt,s.renderState)}}for(let U=0;U<v.length;U++){let W=y[U],ot=v[U];W!==null&&ot!==void 0&&ot.update(W,mt,l||o)}Tt&&Tt(it,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),g=null}let ee=new Ru;ee.setAnimationLoop(Vt),this.setAnimationLoop=function(it){Tt=it},this.dispose=function(){}}},Si=new cn,Dx=new oe;function Ux(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Au(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ce&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ce&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,Si.copy(y),Si.x*=-1,Si.y*=-1,Si.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(Si)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ce&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Nx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let y=v.program;n.uniformBlockBinding(_,y)}function l(_,v){let y=s[_.id];y===void 0&&(g(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));let A=v.program;n.updateUBOMapping(_,A);let S=t.render.frame;r[_.id]!==S&&(u(_),r[_.id]=S)}function h(_){let v=d();_.__bindingPointIndex=v;let y=i.createBuffer(),A=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let v=s[_.id],y=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,T=y.length;S<T;S++){let R=Array.isArray(y[S])?y[S]:[y[S]];for(let E=0,M=R.length;E<M;E++){let I=R[E];if(f(I,S,E,A)===!0){let H=I.__offset,N=Array.isArray(I.value)?I.value:[I.value],X=0;for(let J=0;J<N.length;J++){let G=N[J],ct=x(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+X,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,X),X+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,y,A){let S=_.value,T=v+"_"+y;if(A[T]===void 0)return typeof S=="number"||typeof S=="boolean"?A[T]=S:A[T]=S.clone(),!0;{let R=A[T];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return A[T]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function g(_){let v=_.uniforms,y=0,A=16;for(let T=0,R=v.length;T<R;T++){let E=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,I=E.length;M<I;M++){let H=E[M],N=Array.isArray(H.value)?H.value:[H.value];for(let X=0,J=N.length;X<J;X++){let G=N[X],ct=x(G),K=y%A,yt=K%ct.boundary,wt=K+yt;y+=yt,wt!==0&&A-wt<ct.storage&&(y+=A-wt),H.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=ct.storage}}}let S=y%A;return S>0&&(y+=A-S),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var fo=class{constructor(t={}){let{canvas:e=kf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=li,this.toneMappingExposure=1;let y=this,A=!1,S=0,T=0,R=null,E=-1,M=null,I=new fe,H=new fe,N=null,X=new Ft(0),J=0,G=e.width,ct=e.height,K=1,yt=null,wt=null,Tt=new fe(0,0,G,ct),Vt=new fe(0,0,G,ct),ee=!1,it=new Ks,mt=!1,U=!1,W=new oe,ot=new oe,gt=new D,vt=new fe,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},V=!1;function tt(){return R===null?K:1}let P=n;function lt(w,O){return e.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),P===null){let O="webgl2";if(P=lt(O,w),P===null)throw lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let et,ft,pt,zt,Dt,C,b,z,st,ht,rt,Ot,Et,Lt,Kt,dt,Ut,Wt,k,Y,nt,ut,xt,L;function at(){et=new K0(P),et.init(),ut=new Cx(P,et),ft=new X0(P,et,t,ut),pt=new Tx(P,et),ft.reverseDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),zt=new tg(P),Dt=new fx,C=new Rx(P,et,pt,Dt,ft,ut,zt),b=new Y0(y),z=new J0(y),st=new ap(P),xt=new V0(P,st),ht=new j0(P,st,zt,xt),rt=new ng(P,ht,st,zt),k=new eg(P,ft,C),dt=new q0(Dt),Ot=new dx(y,b,z,et,ft,xt,dt),Et=new Ux(y,Dt),Lt=new mx,Kt=new Mx(et),Wt=new G0(y,b,z,pt,rt,f,c),Ut=new Sx(y,rt,ft),L=new Nx(P,zt,ft,pt),Y=new W0(P,et,zt),nt=new Q0(P,et,zt),zt.programs=Ot.programs,y.capabilities=ft,y.extensions=et,y.properties=Dt,y.renderLists=Lt,y.shadowMap=Ut,y.state=pt,y.info=zt}at();let q=new Gc(y,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(G,ct,!1))},this.getSize=function(w){return w.set(G,ct)},this.setSize=function(w,O,Z=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,ct=O,e.width=Math.floor(w*K),e.height=Math.floor(O*K),Z===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(G*K,ct*K).floor()},this.setDrawingBufferSize=function(w,O,Z){G=w,ct=O,K=Z,e.width=Math.floor(w*Z),e.height=Math.floor(O*Z),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Tt)},this.setViewport=function(w,O,Z,$){w.isVector4?Tt.set(w.x,w.y,w.z,w.w):Tt.set(w,O,Z,$),pt.viewport(I.copy(Tt).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(Vt)},this.setScissor=function(w,O,Z,$){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,O,Z,$),pt.scissor(H.copy(Vt).multiplyScalar(K).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(w){pt.setScissorTest(ee=w)},this.setOpaqueSort=function(w){yt=w},this.setTransparentSort=function(w){wt=w},this.getClearColor=function(w){return w.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(w=!0,O=!0,Z=!0){let $=0;if(w){let F=!1;if(R!==null){let _t=R.texture.format;F=_t===Ml||_t===_l||_t===vl}if(F){let _t=R.texture.type,Pt=_t===Vn||_t===Ii||_t===Js||_t===ps||_t===gl||_t===xl,Bt=Wt.getClearColor(),kt=Wt.getClearAlpha(),Yt=Bt.r,Zt=Bt.g,Ht=Bt.b;Pt?(g[0]=Yt,g[1]=Zt,g[2]=Ht,g[3]=kt,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=Yt,x[1]=Zt,x[2]=Ht,x[3]=kt,P.clearBufferiv(P.COLOR,0,x))}else $|=P.COLOR_BUFFER_BIT}O&&($|=P.DEPTH_BUFFER_BIT),Z&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Lt.dispose(),Kt.dispose(),Dt.dispose(),b.dispose(),z.dispose(),rt.dispose(),xt.dispose(),L.dispose(),Ot.dispose(),q.dispose(),q.removeEventListener("sessionstart",Jl),q.removeEventListener("sessionend",Kl),yi.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=zt.autoReset,O=Ut.enabled,Z=Ut.autoUpdate,$=Ut.needsUpdate,F=Ut.type;at(),zt.autoReset=w,Ut.enabled=O,Ut.autoUpdate=Z,Ut.needsUpdate=$,Ut.type=F}function bt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xt(w){let O=w.target;O.removeEventListener("dispose",Xt),Te(O)}function Te(w){Be(w),Dt.remove(w)}function Be(w){let O=Dt.get(w).programs;O!==void 0&&(O.forEach(function(Z){Ot.releaseProgram(Z)}),w.isShaderMaterial&&Ot.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,Z,$,F,_t){O===null&&(O=It);let Pt=F.isMesh&&F.matrixWorld.determinant()<0,Bt=$d(w,O,Z,$,F);pt.setMaterial($,Pt);let kt=Z.index,Yt=1;if($.wireframe===!0){if(kt=ht.getWireframeAttribute(Z),kt===void 0)return;Yt=2}let Zt=Z.drawRange,Ht=Z.attributes.position,se=Zt.start*Yt,ge=(Zt.start+Zt.count)*Yt;_t!==null&&(se=Math.max(se,_t.start*Yt),ge=Math.min(ge,(_t.start+_t.count)*Yt)),kt!==null?(se=Math.max(se,0),ge=Math.min(ge,kt.count)):Ht!=null&&(se=Math.max(se,0),ge=Math.min(ge,Ht.count));let Ee=ge-se;if(Ee<0||Ee===1/0)return;xt.setup(F,$,Bt,Z,kt);let Je,le=Y;if(kt!==null&&(Je=st.get(kt),le=nt,le.setIndex(Je)),F.isMesh)$.wireframe===!0?(pt.setLineWidth($.wireframeLinewidth*tt()),le.setMode(P.LINES)):le.setMode(P.TRIANGLES);else if(F.isLine){let Gt=$.linewidth;Gt===void 0&&(Gt=1),pt.setLineWidth(Gt*tt()),F.isLineSegments?le.setMode(P.LINES):F.isLineLoop?le.setMode(P.LINE_LOOP):le.setMode(P.LINE_STRIP)}else F.isPoints?le.setMode(P.POINTS):F.isSprite&&le.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)le.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))le.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Gt=F._multiDrawStarts,Ln=F._multiDrawCounts,he=F._multiDrawCount,gn=kt?st.get(kt).bytesPerElement:1,Wi=Dt.get($).currentProgram.getUniforms();for(let sn=0;sn<he;sn++)Wi.setValue(P,"_gl_DrawID",sn),le.render(Gt[sn]/gn,Ln[sn])}else if(F.isInstancedMesh)le.renderInstances(se,Ee,F.count);else if(Z.isInstancedBufferGeometry){let Gt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ln=Math.min(Z.instanceCount,Gt);le.renderInstances(se,Ee,Ln)}else le.render(se,Ee)};function re(w,O,Z){w.transparent===!0&&w.side===ue&&w.forceSinglePass===!1?(w.side=Ce,w.needsUpdate=!0,xr(w,O,Z),w.side=Rn,w.needsUpdate=!0,xr(w,O,Z),w.side=ue):xr(w,O,Z)}this.compile=function(w,O,Z=null){Z===null&&(Z=w),p=Kt.get(Z),p.init(O),v.push(p),Z.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==Z&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let $=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let _t=F.material;if(_t)if(Array.isArray(_t))for(let Pt=0;Pt<_t.length;Pt++){let Bt=_t[Pt];re(Bt,Z,F),$.add(Bt)}else re(_t,Z,F),$.add(_t)}),v.pop(),p=null,$},this.compileAsync=function(w,O,Z=null){let $=this.compile(w,O,Z);return new Promise(F=>{function _t(){if($.forEach(function(Pt){Dt.get(Pt).currentProgram.isReady()&&$.delete(Pt)}),$.size===0){F(w);return}setTimeout(_t,10)}et.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let $e=null;function In(w){$e&&$e(w)}function Jl(){yi.stop()}function Kl(){yi.start()}let yi=new Ru;yi.setAnimationLoop(In),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(w){$e=w,q.setAnimationLoop(w),w===null?yi.stop():yi.start()},q.addEventListener("sessionstart",Jl),q.addEventListener("sessionend",Kl),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,O,R),p=Kt.get(w,v.length),p.init(O),v.push(p),ot.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),it.setFromProjectionMatrix(ot),U=this.localClippingEnabled,mt=dt.init(this.clippingPlanes,U),m=Lt.get(w,_.length),m.init(),_.push(m),q.enabled===!0&&q.isPresenting===!0){let _t=y.xr.getDepthSensingMesh();_t!==null&&aa(_t,O,-1/0,y.sortObjects)}aa(w,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(yt,wt),V=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,V&&Wt.addToRenderList(m,w),this.info.render.frame++,mt===!0&&dt.beginShadows();let Z=p.state.shadowsArray;Ut.render(Z,w,O),mt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){let _t=O.cameras;if(F.length>0)for(let Pt=0,Bt=_t.length;Pt<Bt;Pt++){let kt=_t[Pt];Ql($,F,w,kt)}V&&Wt.render(w);for(let Pt=0,Bt=_t.length;Pt<Bt;Pt++){let kt=_t[Pt];jl(m,w,kt,kt.viewport)}}else F.length>0&&Ql($,F,w,O),V&&Wt.render(w),jl(m,w,O);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(y,w,O),xt.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],mt===!0&&dt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function aa(w,O,Z,$){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||it.intersectsSprite(w)){$&&vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ot);let Pt=rt.update(w),Bt=w.material;Bt.visible&&m.push(w,Pt,Bt,Z,vt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||it.intersectsObject(w))){let Pt=rt.update(w),Bt=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),vt.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),vt.copy(Pt.boundingSphere.center)),vt.applyMatrix4(w.matrixWorld).applyMatrix4(ot)),Array.isArray(Bt)){let kt=Pt.groups;for(let Yt=0,Zt=kt.length;Yt<Zt;Yt++){let Ht=kt[Yt],se=Bt[Ht.materialIndex];se&&se.visible&&m.push(w,Pt,se,Z,vt.z,Ht)}}else Bt.visible&&m.push(w,Pt,Bt,Z,vt.z,null)}}let _t=w.children;for(let Pt=0,Bt=_t.length;Pt<Bt;Pt++)aa(_t[Pt],O,Z,$)}function jl(w,O,Z,$){let F=w.opaque,_t=w.transmissive,Pt=w.transparent;p.setupLightsView(Z),mt===!0&&dt.setGlobalState(y.clippingPlanes,Z),$&&pt.viewport(I.copy($)),F.length>0&&gr(F,O,Z),_t.length>0&&gr(_t,O,Z),Pt.length>0&&gr(Pt,O,Z),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Ql(w,O,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Wn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?ar:Vn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let _t=p.state.transmissionRenderTarget[$.id],Pt=$.viewport||I;_t.setSize(Pt.z,Pt.w);let Bt=y.getRenderTarget();y.setRenderTarget(_t),y.getClearColor(X),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),V&&Wt.render(Z);let kt=y.toneMapping;y.toneMapping=li;let Yt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),mt===!0&&dt.setGlobalState(y.clippingPlanes,$),gr(w,Z,$),C.updateMultisampleRenderTarget(_t),C.updateRenderTargetMipmap(_t),et.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ht=0,se=O.length;Ht<se;Ht++){let ge=O[Ht],Ee=ge.object,Je=ge.geometry,le=ge.material,Gt=ge.group;if(le.side===ue&&Ee.layers.test($.layers)){let Ln=le.side;le.side=Ce,le.needsUpdate=!0,th(Ee,Z,$,Je,le,Gt),le.side=Ln,le.needsUpdate=!0,Zt=!0}}Zt===!0&&(C.updateMultisampleRenderTarget(_t),C.updateRenderTargetMipmap(_t))}y.setRenderTarget(Bt),y.setClearColor(X,J),Yt!==void 0&&($.viewport=Yt),y.toneMapping=kt}function gr(w,O,Z){let $=O.isScene===!0?O.overrideMaterial:null;for(let F=0,_t=w.length;F<_t;F++){let Pt=w[F],Bt=Pt.object,kt=Pt.geometry,Yt=$===null?Pt.material:$,Zt=Pt.group;Bt.layers.test(Z.layers)&&th(Bt,O,Z,kt,Yt,Zt)}}function th(w,O,Z,$,F,_t){w.onBeforeRender(y,O,Z,$,F,_t),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(y,O,Z,$,w,_t),F.transparent===!0&&F.side===ue&&F.forceSinglePass===!1?(F.side=Ce,F.needsUpdate=!0,y.renderBufferDirect(Z,O,$,F,w,_t),F.side=Rn,F.needsUpdate=!0,y.renderBufferDirect(Z,O,$,F,w,_t),F.side=ue):y.renderBufferDirect(Z,O,$,F,w,_t),w.onAfterRender(y,O,Z,$,F,_t)}function xr(w,O,Z){O.isScene!==!0&&(O=It);let $=Dt.get(w),F=p.state.lights,_t=p.state.shadowsArray,Pt=F.state.version,Bt=Ot.getParameters(w,F.state,_t,O,Z),kt=Ot.getProgramCacheKey(Bt),Yt=$.programs;$.environment=w.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(w.isMeshStandardMaterial?z:b).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Yt===void 0&&(w.addEventListener("dispose",Xt),Yt=new Map,$.programs=Yt);let Zt=Yt.get(kt);if(Zt!==void 0){if($.currentProgram===Zt&&$.lightsStateVersion===Pt)return nh(w,Bt),Zt}else Bt.uniforms=Ot.getUniforms(w),w.onBeforeCompile(Bt,y),Zt=Ot.acquireProgram(Bt,kt),Yt.set(kt,Zt),$.uniforms=Bt.uniforms;let Ht=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ht.clippingPlanes=dt.uniform),nh(w,Bt),$.needsLights=Kd(w),$.lightsStateVersion=Pt,$.needsLights&&(Ht.ambientLightColor.value=F.state.ambient,Ht.lightProbe.value=F.state.probe,Ht.directionalLights.value=F.state.directional,Ht.directionalLightShadows.value=F.state.directionalShadow,Ht.spotLights.value=F.state.spot,Ht.spotLightShadows.value=F.state.spotShadow,Ht.rectAreaLights.value=F.state.rectArea,Ht.ltc_1.value=F.state.rectAreaLTC1,Ht.ltc_2.value=F.state.rectAreaLTC2,Ht.pointLights.value=F.state.point,Ht.pointLightShadows.value=F.state.pointShadow,Ht.hemisphereLights.value=F.state.hemi,Ht.directionalShadowMap.value=F.state.directionalShadowMap,Ht.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ht.spotShadowMap.value=F.state.spotShadowMap,Ht.spotLightMatrix.value=F.state.spotLightMatrix,Ht.spotLightMap.value=F.state.spotLightMap,Ht.pointShadowMap.value=F.state.pointShadowMap,Ht.pointShadowMatrix.value=F.state.pointShadowMatrix),$.currentProgram=Zt,$.uniformsList=null,Zt}function eh(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=hs.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function nh(w,O){let Z=Dt.get(w);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function $d(w,O,Z,$,F){O.isScene!==!0&&(O=It),C.resetTextureUnits();let _t=O.fog,Pt=$.isMeshStandardMaterial?O.environment:null,Bt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:bs,kt=($.isMeshStandardMaterial?z:b).get($.envMap||Pt),Yt=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Zt=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ht=!!Z.morphAttributes.position,se=!!Z.morphAttributes.normal,ge=!!Z.morphAttributes.color,Ee=li;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ee=y.toneMapping);let Je=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,le=Je!==void 0?Je.length:0,Gt=Dt.get($),Ln=p.state.lights;if(mt===!0&&(U===!0||w!==M)){let un=w===M&&$.id===E;dt.setState($,w,un)}let he=!1;$.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Ln.state.version||Gt.outputColorSpace!==Bt||F.isBatchedMesh&&Gt.batching===!1||!F.isBatchedMesh&&Gt.batching===!0||F.isBatchedMesh&&Gt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Gt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Gt.instancing===!1||!F.isInstancedMesh&&Gt.instancing===!0||F.isSkinnedMesh&&Gt.skinning===!1||!F.isSkinnedMesh&&Gt.skinning===!0||F.isInstancedMesh&&Gt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Gt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Gt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Gt.instancingMorph===!1&&F.morphTexture!==null||Gt.envMap!==kt||$.fog===!0&&Gt.fog!==_t||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==dt.numPlanes||Gt.numIntersection!==dt.numIntersection)||Gt.vertexAlphas!==Yt||Gt.vertexTangents!==Zt||Gt.morphTargets!==Ht||Gt.morphNormals!==se||Gt.morphColors!==ge||Gt.toneMapping!==Ee||Gt.morphTargetsCount!==le)&&(he=!0):(he=!0,Gt.__version=$.version);let gn=Gt.currentProgram;he===!0&&(gn=xr($,O,F));let Wi=!1,sn=!1,Us=!1,be=gn.getUniforms(),Sn=Gt.uniforms;if(pt.useProgram(gn.program)&&(Wi=!0,sn=!0,Us=!0),$.id!==E&&(E=$.id,sn=!0),Wi||M!==w){pt.buffers.depth.getReversed()?(W.copy(w.projectionMatrix),zf(W),Gf(W),be.setValue(P,"projectionMatrix",W)):be.setValue(P,"projectionMatrix",w.projectionMatrix),be.setValue(P,"viewMatrix",w.matrixWorldInverse);let jn=be.map.cameraPosition;jn!==void 0&&jn.setValue(P,gt.setFromMatrixPosition(w.matrixWorld)),ft.logarithmicDepthBuffer&&be.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&be.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,sn=!0,Us=!0)}if(F.isSkinnedMesh){be.setOptional(P,F,"bindMatrix"),be.setOptional(P,F,"bindMatrixInverse");let un=F.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),be.setValue(P,"boneTexture",un.boneTexture,C))}F.isBatchedMesh&&(be.setOptional(P,F,"batchingTexture"),be.setValue(P,"batchingTexture",F._matricesTexture,C),be.setOptional(P,F,"batchingIdTexture"),be.setValue(P,"batchingIdTexture",F._indirectTexture,C),be.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&be.setValue(P,"batchingColorTexture",F._colorsTexture,C));let Ns=Z.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&k.update(F,Z,gn),(sn||Gt.receiveShadow!==F.receiveShadow)&&(Gt.receiveShadow=F.receiveShadow,be.setValue(P,"receiveShadow",F.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Sn.envMap.value=kt,Sn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(Sn.envMapIntensity.value=O.environmentIntensity),sn&&(be.setValue(P,"toneMappingExposure",y.toneMappingExposure),Gt.needsLights&&Jd(Sn,Us),_t&&$.fog===!0&&Et.refreshFogUniforms(Sn,_t),Et.refreshMaterialUniforms(Sn,$,K,ct,p.state.transmissionRenderTarget[w.id]),hs.upload(P,eh(Gt),Sn,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(hs.upload(P,eh(Gt),Sn,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&be.setValue(P,"center",F.center),be.setValue(P,"modelViewMatrix",F.modelViewMatrix),be.setValue(P,"normalMatrix",F.normalMatrix),be.setValue(P,"modelMatrix",F.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let un=$.uniformsGroups;for(let jn=0,Qn=un.length;jn<Qn;jn++){let ih=un[jn];L.update(ih,gn),L.bind(ih,gn)}}return gn}function Jd(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Kd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,O,Z){Dt.get(w.texture).__webglTexture=O,Dt.get(w.depthTexture).__webglTexture=Z;let $=Dt.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Z===void 0,$.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let Z=Dt.get(w);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,Z=0){R=w,S=O,T=Z;let $=!0,F=null,_t=!1,Pt=!1;if(w){let kt=Dt.get(w);if(kt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(P.FRAMEBUFFER,null),$=!1;else if(kt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(kt.__hasExternalTextures)C.rebindTextures(w,Dt.get(w.texture).__webglTexture,Dt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ht=w.depthTexture;if(kt.__boundDepthTexture!==Ht){if(Ht!==null&&Dt.has(Ht)&&(w.width!==Ht.image.width||w.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}let Yt=w.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Pt=!0);let Zt=Dt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Zt[O])?F=Zt[O][Z]:F=Zt[O],_t=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?F=Dt.get(w).__webglMultisampledFramebuffer:Array.isArray(Zt)?F=Zt[Z]:F=Zt,I.copy(w.viewport),H.copy(w.scissor),N=w.scissorTest}else I.copy(Tt).multiplyScalar(K).floor(),H.copy(Vt).multiplyScalar(K).floor(),N=ee;if(pt.bindFramebuffer(P.FRAMEBUFFER,F)&&$&&pt.drawBuffers(w,F),pt.viewport(I),pt.scissor(H),pt.setScissorTest(N),_t){let kt=Dt.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,kt.__webglTexture,Z)}else if(Pt){let kt=Dt.get(w.texture),Yt=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,Z||0,Yt)}E=-1},this.readRenderTargetPixels=function(w,O,Z,$,F,_t,Pt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Bt=Bt[Pt]),Bt){pt.bindFramebuffer(P.FRAMEBUFFER,Bt);try{let kt=w.texture,Yt=kt.format,Zt=kt.type;if(!ft.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-$&&Z>=0&&Z<=w.height-F&&P.readPixels(O,Z,$,F,ut.convert(Yt),ut.convert(Zt),_t)}finally{let kt=R!==null?Dt.get(R).__webglFramebuffer:null;pt.bindFramebuffer(P.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(w,O,Z,$,F,_t,Pt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Bt=Bt[Pt]),Bt){let kt=w.texture,Yt=kt.format,Zt=kt.type;if(!ft.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-$&&Z>=0&&Z<=w.height-F){pt.bindFramebuffer(P.FRAMEBUFFER,Bt);let Ht=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ht),P.bufferData(P.PIXEL_PACK_BUFFER,_t.byteLength,P.STREAM_READ),P.readPixels(O,Z,$,F,ut.convert(Yt),ut.convert(Zt),0);let se=R!==null?Dt.get(R).__webglFramebuffer:null;pt.bindFramebuffer(P.FRAMEBUFFER,se);let ge=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Hf(P,ge,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ht),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,_t),P.deleteBuffer(Ht),P.deleteSync(ge),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,Z=0){w.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let $=Math.pow(2,-Z),F=Math.floor(w.image.width*$),_t=Math.floor(w.image.height*$),Pt=O!==null?O.x:0,Bt=O!==null?O.y:0;C.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,Z,0,0,Pt,Bt,F,_t),pt.unbindTexture()},this.copyTextureToTexture=function(w,O,Z=null,$=null,F=0){w.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],O=arguments[2],F=arguments[3]||0,Z=null);let _t,Pt,Bt,kt,Yt,Zt,Ht,se,ge,Ee=w.isCompressedTexture?w.mipmaps[F]:w.image;Z!==null?(_t=Z.max.x-Z.min.x,Pt=Z.max.y-Z.min.y,Bt=Z.isBox3?Z.max.z-Z.min.z:1,kt=Z.min.x,Yt=Z.min.y,Zt=Z.isBox3?Z.min.z:0):(_t=Ee.width,Pt=Ee.height,Bt=Ee.depth||1,kt=0,Yt=0,Zt=0),$!==null?(Ht=$.x,se=$.y,ge=$.z):(Ht=0,se=0,ge=0);let Je=ut.convert(O.format),le=ut.convert(O.type),Gt;O.isData3DTexture?(C.setTexture3D(O,0),Gt=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),Gt=P.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),Gt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let Ln=P.getParameter(P.UNPACK_ROW_LENGTH),he=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gn=P.getParameter(P.UNPACK_SKIP_PIXELS),Wi=P.getParameter(P.UNPACK_SKIP_ROWS),sn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ee.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ee.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,kt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Yt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Zt);let Us=w.isDataArrayTexture||w.isData3DTexture,be=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Sn=Dt.get(w),Ns=Dt.get(O),un=Dt.get(Sn.__renderTarget),jn=Dt.get(Ns.__renderTarget);pt.bindFramebuffer(P.READ_FRAMEBUFFER,un.__webglFramebuffer),pt.bindFramebuffer(P.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Qn=0;Qn<Bt;Qn++)Us&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.get(w).__webglTexture,F,Zt+Qn),w.isDepthTexture?(be&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.get(O).__webglTexture,F,ge+Qn),P.blitFramebuffer(kt,Yt,_t,Pt,Ht,se,_t,Pt,P.DEPTH_BUFFER_BIT,P.NEAREST)):be?P.copyTexSubImage3D(Gt,F,Ht,se,ge+Qn,kt,Yt,_t,Pt):P.copyTexSubImage2D(Gt,F,Ht,se,ge+Qn,kt,Yt,_t,Pt);pt.bindFramebuffer(P.READ_FRAMEBUFFER,null),pt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else be?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Gt,F,Ht,se,ge,_t,Pt,Bt,Je,le,Ee.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Gt,F,Ht,se,ge,_t,Pt,Bt,Je,Ee.data):P.texSubImage3D(Gt,F,Ht,se,ge,_t,Pt,Bt,Je,le,Ee):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Ht,se,_t,Pt,Je,le,Ee.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Ht,se,Ee.width,Ee.height,Je,Ee.data):P.texSubImage2D(P.TEXTURE_2D,F,Ht,se,_t,Pt,Je,le,Ee);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ln),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,he),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Wi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,sn),F===0&&O.generateMipmaps&&P.generateMipmap(Gt),pt.unbindTexture()},this.copyTextureToTexture3D=function(w,O,Z=null,$=null,F=0){return w.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,$=arguments[1]||null,w=arguments[2],O=arguments[3],F=arguments[4]||0),Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,Z,$,F)},this.initRenderTarget=function(w){Dt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),pt.unbindTexture()},this.resetState=function(){S=0,T=0,R=null,pt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var xs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Di=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Vc=class extends je{constructor(t=null,e=1,n=1,s,r,o,a,c,l=an,h=an,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var js=class extends pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},rs=new oe,iu=new oe,kr=[],su=new Xn,Ox=new oe,zs=new B,Gs=new di,fi=class extends B{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new js(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ox)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),su.copy(t.boundingBox).applyMatrix4(rs),this.boundingBox.union(su)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Gs.copy(t.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),t.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rs),iu.multiplyMatrices(n,rs),zs.matrixWorld=iu,zs.raycast(t,kr);for(let o=0,a=kr.length;o<a;o++){let c=kr[o];c.instanceId=r,c.object=this,e.push(c)}kr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vc(new Float32Array(s*this.count),s,this.count,yl,An));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Wc=class extends qn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ru=new oe,Xc=new so,Hr=new di,zr=new D,po=class extends De{constructor(t=new ye,e=new Wc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,t.ray.intersectsSphere(Hr)===!1)return;ru.copy(s).invert(),Xc.copy(t.ray).applyMatrix4(ru);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,x=f;g<x;g++){let m=l.getX(g);zr.fromBufferAttribute(d,m),ou(zr,m,c,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)zr.fromBufferAttribute(d,g),ou(zr,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ou(i,t,e,n,s,r,o){let a=Xc.distanceSqToPoint(i);if(a<e){let c=new D;Xc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Qe=class extends je{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new St:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],o=[],a=new D,c=new oe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ge(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ge(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qs=class extends fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new St){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},qc=class extends Qs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Gr=new D,Fa=new Sl,Ba=new Sl,ka=new Sl,Yc=class extends fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Gr.subVectors(s[0],s[1]).add(s[0]),l=Gr);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Gr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Gr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Fa.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,x,m),Ba.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,x,m),ka.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Ba.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),ka.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Fa.calc(c),Ba.calc(c),ka.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function au(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Fx(i,t){let e=1-i;return e*e*t}function Bx(i,t){return 2*(1-i)*i*t}function kx(i,t){return i*i*t}function Zs(i,t,e,n){return Fx(i,t)+Bx(i,e)+kx(i,n)}function Hx(i,t){let e=1-i;return e*e*e*t}function zx(i,t){let e=1-i;return 3*e*e*i*t}function Gx(i,t){return 3*(1-i)*i*i*t}function Vx(i,t){return i*i*i*t}function $s(i,t,e,n,s){return Hx(i,t)+zx(i,e)+Gx(i,n)+Vx(i,s)}var mo=class extends fn{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},tr=class extends fn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y),$s(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},go=class extends fn{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zc=class extends fn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends fn{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Zs(t,s.x,r.x,o.x),Zs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$c=class extends fn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Zs(t,s.x,r.x,o.x),Zs(t,s.y,r.y,o.y),Zs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(au(a,c.x,l.x,h.x,d.x),au(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new St().fromArray(s))}return this}},Jc=Object.freeze({__proto__:null,ArcCurve:qc,CatmullRomCurve3:Yc,CubicBezierCurve:mo,CubicBezierCurve3:tr,EllipseCurve:Qs,LineCurve:go,LineCurve3:Zc,QuadraticBezierCurve:xo,QuadraticBezierCurve3:$c,SplineCurve:yo}),Kc=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Jc[s.type]().fromJSON(s))}return this}},ys=class extends Kc{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new go(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new xo(this.currentPoint.clone(),new St(t,e),new St(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new mo(this.currentPoint.clone(),new St(t,e),new St(n,s),new St(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new yo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Qs(t,e,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Yn=class i extends ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new D,h=new St;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qt=class i extends ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],m=n/2,p=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function _(){let y=new D,A=new D,S=0,T=(e-t)/n;for(let R=0;R<=r;R++){let E=[],M=R/r,I=M*(e-t)+t;for(let H=0;H<=s;H++){let N=H/s,X=N*c+a,J=Math.sin(X),G=Math.cos(X);A.x=I*J,A.y=-M*n+m,A.z=I*G,d.push(A.x,A.y,A.z),y.set(J,T,G).normalize(),u.push(y.x,y.y,y.z),f.push(N,1-M),E.push(g++)}x.push(E)}for(let R=0;R<s;R++)for(let E=0;E<r;E++){let M=x[E][R],I=x[E+1][R],H=x[E+1][R+1],N=x[E][R+1];(t>0||E!==0)&&(h.push(M,I,N),S+=3),(e>0||E!==r-1)&&(h.push(I,H,N),S+=3)}l.addGroup(p,S,0),p+=S}function v(y){let A=g,S=new St,T=new D,R=0,E=y===!0?t:e,M=y===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;let I=g;for(let H=0;H<=s;H++){let X=H/s*c+a,J=Math.cos(X),G=Math.sin(X);T.x=E*G,T.y=m*M,T.z=E*J,d.push(T.x,T.y,T.z),u.push(0,M,0),S.x=J*.5+.5,S.y=G*.5*M+.5,f.push(S.x,S.y),g++}for(let H=0;H<s;H++){let N=A+H,X=I+H;y===!0?h.push(X,X+1,N):h.push(X+1,X,N),R+=3}l.addGroup(p,R,y===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pe=class i extends qt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vo=class i extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new D,y=new D,A=new D;for(let S=0;S<e.length;S+=3)f(e[S+0],v),f(e[S+1],y),f(e[S+2],A),c(v,y,A,_)}function c(_,v,y,A){let S=A+1,T=[];for(let R=0;R<=S;R++){T[R]=[];let E=_.clone().lerp(y,R/S),M=v.clone().lerp(y,R/S),I=S-R;for(let H=0;H<=I;H++)H===0&&R===S?T[R][H]=E:T[R][H]=E.clone().lerp(M,H/I)}for(let R=0;R<S;R++)for(let E=0;E<2*(S-R)-1;E++){let M=Math.floor(E/2);E%2===0?(u(T[R][M+1]),u(T[R+1][M]),u(T[R][M])):(u(T[R][M+1]),u(T[R+1][M+1]),u(T[R+1][M]))}}function l(_){let v=new D;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let _=new D;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let y=m(_)/2/Math.PI+.5,A=p(_)/Math.PI+.5;o.push(y,1-A)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){let v=o[_+0],y=o[_+2],A=o[_+4],S=Math.max(v,y,A),T=Math.min(v,y,A);S>.9&&T<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),A<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,v){let y=_*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){let _=new D,v=new D,y=new D,A=new D,S=new St,T=new St,R=new St;for(let E=0,M=0;E<r.length;E+=9,M+=6){_.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),S.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),A.copy(_).add(v).add(y).divideScalar(3);let I=m(A);x(S,M+0,_,I),x(T,M+2,v,I),x(R,M+4,y,I)}}function x(_,v,y,A){A<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=A/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ui=class i extends vo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var pn=class extends ys{constructor(t){super(t),this.uuid=Ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ys().fromJSON(s))}return this}},Wx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Du(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,u,f;if(n&&(r=$x(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)d=i[g],u=i[g+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return er(r,o,e,a,c,f,0),o}};function Du(i,t,e,n,s){let r,o;if(s===oy(i,t,e,n)>0)for(r=t;r<e;r+=n)o=cu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=cu(r,i[r],i[r+1],o);return o&&Ao(o,o.next)&&(ir(o),o=o.next),o}function Ni(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ao(e,e.next)||Re(e.prev,e,e.next)===0)){if(ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function er(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ty(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?qx(i,n,s,r):Xx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ir(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Yx(Ni(i),t,e),er(i,t,e,n,s,r,2)):o===2&&Zx(i,t,e,n,s,r):er(Ni(i),t,e,n,s,r,1);break}}}function Xx(i){let t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&as(s,a,r,c,o,l,g.x,g.y)&&Re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Re(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<d?h<u?h:u:d<u?d:u,x=a>c?a>l?a:l:c>l?c:l,m=h>d?h>u?h:u:d>u?d:u,p=jc(f,g,t,e,n),_=jc(x,m,t,e,n),v=i.prevZ,y=i.nextZ;for(;v&&v.z>=p&&y&&y.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&as(a,h,c,d,l,u,v.x,v.y)&&Re(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&as(a,h,c,d,l,u,y.x,y.y)&&Re(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&as(a,h,c,d,l,u,v.x,v.y)&&Re(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&as(a,h,c,d,l,u,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Yx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Ao(s,r)&&Uu(s,n,n.next,r)&&nr(s,r)&&nr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ir(n),ir(n.next),n=i=r),n=n.next}while(n!==i);return Ni(n)}function Zx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&iy(o,a)){let c=Nu(o,a);o=Ni(o,o.next),c=Ni(c,c.next),er(o,t,e,n,s,r,0),er(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function $x(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Du(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(ny(l));for(s.sort(Jx),r=0;r<s.length;r++)e=Kx(s[r],e);return e}function Jx(i,t){return i.x-t.x}function Kx(i,t){let e=jx(i,t);if(!e)return t;let n=Nu(e,i);return Ni(n,n.next),Ni(e,e.next)}function jx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&as(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),nr(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Qx(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Qx(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function ty(i,t,e,n){let s=i;do s.z===0&&(s.z=jc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ey(s)}function ey(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function jc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ny(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function as(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function iy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!sy(i,t)&&(nr(i,t)&&nr(t,i)&&ry(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||Ao(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ao(i,t){return i.x===t.x&&i.y===t.y}function Uu(i,t,e,n){let s=Wr(Re(i,t,e)),r=Wr(Re(i,t,n)),o=Wr(Re(e,n,i)),a=Wr(Re(e,n,t));return!!(s!==r&&o!==a||s===0&&Vr(i,e,t)||r===0&&Vr(i,n,t)||o===0&&Vr(e,i,n)||a===0&&Vr(e,t,n))}function Vr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Wr(i){return i>0?1:i<0?-1:0}function sy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Uu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function nr(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function ry(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nu(i,t){let e=new Qc(i.i,i.x,i.y),n=new Qc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function cu(i,t,e,n){let s=new Qc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function oy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var hi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];lu(t),hu(n,t);let o=t.length;e.forEach(lu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,hu(n,e[c]);let a=Wx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function lu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function hu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var vs=class i extends ye{constructor(t=new pn([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:ay,v,y=!1,A,S,T,R;p&&(v=p.getSpacedPoints(h),y=!0,u=!1,A=p.computeFrenetFrames(h,!1),S=new D,T=new D,R=new D),u||(m=0,f=0,g=0,x=0);let E=a.extractPoints(l),M=E.shape,I=E.holes;if(!hi.isClockWise(M)){M=M.reverse();for(let V=0,tt=I.length;V<tt;V++){let P=I[V];hi.isClockWise(P)&&(I[V]=P.reverse())}}let N=hi.triangulateShape(M,I),X=M;for(let V=0,tt=I.length;V<tt;V++){let P=I[V];M=M.concat(P)}function J(V,tt,P){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(tt,P)}let G=M.length,ct=N.length;function K(V,tt,P){let lt,et,ft,pt=V.x-tt.x,zt=V.y-tt.y,Dt=P.x-V.x,C=P.y-V.y,b=pt*pt+zt*zt,z=pt*C-zt*Dt;if(Math.abs(z)>Number.EPSILON){let st=Math.sqrt(b),ht=Math.sqrt(Dt*Dt+C*C),rt=tt.x-zt/st,Ot=tt.y+pt/st,Et=P.x-C/ht,Lt=P.y+Dt/ht,Kt=((Et-rt)*C-(Lt-Ot)*Dt)/(pt*C-zt*Dt);lt=rt+pt*Kt-V.x,et=Ot+zt*Kt-V.y;let dt=lt*lt+et*et;if(dt<=2)return new St(lt,et);ft=Math.sqrt(dt/2)}else{let st=!1;pt>Number.EPSILON?Dt>Number.EPSILON&&(st=!0):pt<-Number.EPSILON?Dt<-Number.EPSILON&&(st=!0):Math.sign(zt)===Math.sign(C)&&(st=!0),st?(lt=-zt,et=pt,ft=Math.sqrt(b)):(lt=pt,et=zt,ft=Math.sqrt(b/2))}return new St(lt/ft,et/ft)}let yt=[];for(let V=0,tt=X.length,P=tt-1,lt=V+1;V<tt;V++,P++,lt++)P===tt&&(P=0),lt===tt&&(lt=0),yt[V]=K(X[V],X[P],X[lt]);let wt=[],Tt,Vt=yt.concat();for(let V=0,tt=I.length;V<tt;V++){let P=I[V];Tt=[];for(let lt=0,et=P.length,ft=et-1,pt=lt+1;lt<et;lt++,ft++,pt++)ft===et&&(ft=0),pt===et&&(pt=0),Tt[lt]=K(P[lt],P[ft],P[pt]);wt.push(Tt),Vt=Vt.concat(Tt)}for(let V=0;V<m;V++){let tt=V/m,P=f*Math.cos(tt*Math.PI/2),lt=g*Math.sin(tt*Math.PI/2)+x;for(let et=0,ft=X.length;et<ft;et++){let pt=J(X[et],yt[et],lt);W(pt.x,pt.y,-P)}for(let et=0,ft=I.length;et<ft;et++){let pt=I[et];Tt=wt[et];for(let zt=0,Dt=pt.length;zt<Dt;zt++){let C=J(pt[zt],Tt[zt],lt);W(C.x,C.y,-P)}}}let ee=g+x;for(let V=0;V<G;V++){let tt=u?J(M[V],Vt[V],ee):M[V];y?(T.copy(A.normals[0]).multiplyScalar(tt.x),S.copy(A.binormals[0]).multiplyScalar(tt.y),R.copy(v[0]).add(T).add(S),W(R.x,R.y,R.z)):W(tt.x,tt.y,0)}for(let V=1;V<=h;V++)for(let tt=0;tt<G;tt++){let P=u?J(M[tt],Vt[tt],ee):M[tt];y?(T.copy(A.normals[V]).multiplyScalar(P.x),S.copy(A.binormals[V]).multiplyScalar(P.y),R.copy(v[V]).add(T).add(S),W(R.x,R.y,R.z)):W(P.x,P.y,d/h*V)}for(let V=m-1;V>=0;V--){let tt=V/m,P=f*Math.cos(tt*Math.PI/2),lt=g*Math.sin(tt*Math.PI/2)+x;for(let et=0,ft=X.length;et<ft;et++){let pt=J(X[et],yt[et],lt);W(pt.x,pt.y,d+P)}for(let et=0,ft=I.length;et<ft;et++){let pt=I[et];Tt=wt[et];for(let zt=0,Dt=pt.length;zt<Dt;zt++){let C=J(pt[zt],Tt[zt],lt);y?W(C.x,C.y+v[h-1].y,v[h-1].x+P):W(C.x,C.y,d+P)}}}it(),mt();function it(){let V=s.length/3;if(u){let tt=0,P=G*tt;for(let lt=0;lt<ct;lt++){let et=N[lt];ot(et[2]+P,et[1]+P,et[0]+P)}tt=h+m*2,P=G*tt;for(let lt=0;lt<ct;lt++){let et=N[lt];ot(et[0]+P,et[1]+P,et[2]+P)}}else{for(let tt=0;tt<ct;tt++){let P=N[tt];ot(P[2],P[1],P[0])}for(let tt=0;tt<ct;tt++){let P=N[tt];ot(P[0]+G*h,P[1]+G*h,P[2]+G*h)}}n.addGroup(V,s.length/3-V,0)}function mt(){let V=s.length/3,tt=0;U(X,tt),tt+=X.length;for(let P=0,lt=I.length;P<lt;P++){let et=I[P];U(et,tt),tt+=et.length}n.addGroup(V,s.length/3-V,1)}function U(V,tt){let P=V.length;for(;--P>=0;){let lt=P,et=P-1;et<0&&(et=V.length-1);for(let ft=0,pt=h+m*2;ft<pt;ft++){let zt=G*ft,Dt=G*(ft+1),C=tt+lt+zt,b=tt+et+zt,z=tt+et+Dt,st=tt+lt+Dt;gt(C,b,z,st)}}}function W(V,tt,P){c.push(V),c.push(tt),c.push(P)}function ot(V,tt,P){vt(V),vt(tt),vt(P);let lt=s.length/3,et=_.generateTopUV(n,s,lt-3,lt-2,lt-1);It(et[0]),It(et[1]),It(et[2])}function gt(V,tt,P,lt){vt(V),vt(tt),vt(lt),vt(tt),vt(P),vt(lt);let et=s.length/3,ft=_.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);It(ft[0]),It(ft[1]),It(ft[3]),It(ft[1]),It(ft[2]),It(ft[3])}function vt(V){s.push(c[V*3+0]),s.push(c[V*3+1]),s.push(c[V*3+2])}function It(V){r.push(V.x),r.push(V.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return cy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Jc[s.type]().fromJSON(s)),new i(n,t.options)}},ay={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new St(r,o),new St(a,c),new St(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new St(o,1-c),new St(l,1-d),new St(u,1-g),new St(x,1-p)]:[new St(a,1-c),new St(h,1-d),new St(f,1-g),new St(m,1-p)]}};function cy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var pi=class i extends vo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var _o=class i extends ye{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=t,u=(e-t)/s,f=new D,g=new St;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,v=_,y=_+n+1,A=_+n+2,S=_+1;a.push(v,y,S),a.push(y,A,S)}}this.setIndex(a),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Oi=class i extends ye{constructor(t=new pn([new St(0,.5),new St(-.5,-.5),new St(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(o,2));function l(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;hi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let _=g[m];hi.isClockWise(_)===!0&&(g[m]=_.reverse())}let x=hi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=x.length;m<p;m++){let _=x[m],v=_[0]+d,y=_[1]+d,A=_[2]+d;n.push(v,y,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return ly(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function ly(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var _e=class i extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new D,u=new D,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],v=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){let S=A/e;d.x=-t*Math.cos(s+S*r)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(s+S*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(S+y,1-v),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let v=h[p][_+1],y=h[p][_],A=h[p+1][_],S=h[p+1][_+1];(p!==0||o>0)&&f.push(v,y,S),(p!==n-1||c<Math.PI)&&f.push(y,A,S)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ln=class i extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var j=class extends qn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Mo=class extends qn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Xr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function hy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var _s=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tl=class extends _s{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ch:r=t,a=2*e-n;break;case lh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ch:o=t,c=2*n-e;break;case lh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,_=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+_*o[l+A]+v*o[c+A]+y*o[d+A];return r}},el=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},nl=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xr(e,this.TimeBufferType),this.values=Xr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xr(t.times,Array),values:Xr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case jr:e=this.InterpolantFactoryMethodDiscrete;break;case Tc:e=this.InterpolantFactoryMethodLinear;break;case ca:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return Tc;case this.InterpolantFactoryMethodSmooth:return ca}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&hy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ca,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Tc;var Fi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=jr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends Mn{};il.prototype.ValueTypeName="color";var sl=class extends Mn{};sl.prototype.ValueTypeName="number";var rl=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Cn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Eo=class extends Mn{InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}};Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=jr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends Mn{};ol.prototype.ValueTypeName="vector";var al=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},uy=new al,cl=class{constructor(t){this.manager=t!==void 0?t:uy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ms=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Es=class extends Ms{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ha=new oe,uu=new D,du=new D,sr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(uu),du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(du),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ll=class extends sr{constructor(){super(new Ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=to*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},bo=class extends Ms{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ll}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},fu=new oe,Vs=new D,za=new D,hl=class extends sr{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vs),za.copy(n.position),za.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(za),n.updateMatrixWorld(),s.makeTranslation(-Vs.x,-Vs.y,-Vs.z),fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu)}},Zn=class extends Ms{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ul=class extends sr{constructor(){super(new ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ki=class extends Ms{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new ul}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var wl="\\[\\]\\.:\\/",dy=new RegExp("["+wl+"]","g"),Tl="[^"+wl+"]",fy="[^"+wl.replace("\\.","")+"]",py=/((?:WC+[\/:])*)/.source.replace("WC",Tl),my=/(WCOD+)?/.source.replace("WCOD",fy),gy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),xy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),yy=new RegExp("^"+py+my+gy+xy+"$"),vy=["material","materials","bones","map"],dl=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dy,"")}static parseTrackName(t){let e=yy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=dl;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var cr=class extends Di{constructor(){super();let t=new Ct;t.deleteAttribute("uv");let e=new j({side:Ce}),n=new j,s=new Zn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new B(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new B(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new B(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new B(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new B(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new B(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new B(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let u=new B(t,Ts(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let f=new B(t,Ts(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new B(t,Ts(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new B(t,Ts(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new B(t,Ts(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new B(t,Ts(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ts(i){let t=new me;return t.color.setScalar(i),t}var _y=Math.PI/180,Al=i=>[-Math.sin(i),Math.cos(i)];function Ou(i){let t=0,e=0,n=0,s=0;for(let r of i){if(r.s0=t,r.x0=e,r.z0=n,r.th0=s,r.type==="S")r.length=r.len,e+=Math.cos(s)*r.len,n+=Math.sin(s)*r.len;else{let o=r.ang*_y,a=Math.sign(o);r.length=Math.abs(o)*r.r;let[c,l]=Al(s);r.cx=e+c*r.r*a,r.cz=n+l*r.r*a,s+=o;let[h,d]=Al(s);e=r.cx-h*r.r*a,n=r.cz-d*r.r*a}t+=r.length}return{s:t,x:e,z:n,th:s}}function My(i){let t=i.map(f=>({...f})),e=Ou(t),n=t.find(f=>f.solve==="X"),s=t.find(f=>f.solve==="Y"),r=Math.cos(n.th0),o=Math.sin(n.th0),a=Math.cos(s.th0),c=Math.sin(s.th0),l=r*c-o*a,h=(-e.x*c+e.z*a)/l,d=(-r*e.z+o*e.x)/l;n.len=h,s.len=d;let u=Ou(t);if(Math.hypot(u.x,u.z)>.01||h<50||d<50)throw new Error("El circuito no cierra");return{segs:t,length:u.s}}var Fu=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Ro=class{constructor(t){this.circuit=t,this.theme=t.theme;let{segs:e,length:n}=My(t.layout);this.segs=e,this.length=n,this.N=Math.round(n),this.ds=n/this.N;let s=this.N;this.px=new Float32Array(s),this.pz=new Float32Array(s),this.th=new Float32Array(s);for(let r=0;r<s;r++){let o=this.evalAt(r*this.ds);this.px[r]=o.x,this.pz[r]=o.z,this.th[r]=o.th}this.buildFeatures()}at(t,e){return this.snap(this.segs[t].s0+e)}snap(t){return Math.round(t/this.ds)*this.ds}wrap(t){let e=this.length;return t%=e,t<0?t+e:t}evalAt(t){t=this.wrap(t);let e=this.segs[this.segs.length-1];for(let c of this.segs)if(t<c.s0+c.length){e=c;break}let n=t-e.s0;if(e.type==="S")return{x:e.x0+Math.cos(e.th0)*n,z:e.z0+Math.sin(e.th0)*n,th:e.th0};let s=Math.sign(e.ang),r=e.th0+s*n/e.r,[o,a]=Al(r);return{x:e.cx-o*e.r*s,z:e.cz-a*e.r*s,th:r}}buildFeatures(){let t=this.circuit.features((e,n)=>this.at(e,n),15);Object.assign(this,{plateaus:[],whoops:[],ramps:[],pits:[],mud:[],lakes:[],reserved:[],meteors:[],crossings:[]},t);for(let e of this.crossings)e.s=(e.s0+e.s1)/2,e.g0=Math.ceil((e.s-6.5)/this.ds)*this.ds,e.g1=Math.floor((e.s+6.5)/this.ds)*this.ds;for(let e of this.pits)e.water=!!e.liquid,e.top=this.baseAt((e.s0+e.s1)/2),e.floor=Math.min(e.floor,e.top-3),e.respawnS=e.s1+10,e.bridges=e.bridges||(e.bridge?[e.bridge]:[]);this.patchKind=this.theme.patch||"mud",this.startLine=0}baseAt(t){t=this.wrap(t);let e=0;for(let n of this.plateaus)t>n.a&&t<n.d&&(e+=n.h*Fu(n.a,n.b,t)*(1-Fu(n.c,n.d,t)));for(let n of this.whoops)t>n.a&&t<n.b&&(e+=n.amp*(1-Math.cos(2*Math.PI*(t-n.a)/n.wl))/2);return e}surfaceAt(t,e){t=this.wrap(t);let n=this.baseAt(t),s=Math.abs(e)<=11?"road":"grass";for(let r of this.ramps)t>=r.s0&&t<r.s1&&e>=r.d0&&e<=r.d1&&(n+=r.h*(t-r.s0)/(r.s1-r.s0),s="ramp");for(let r of this.pits)if(t>=r.s0&&t<r.s1){for(let o of r.bridges)if(e>=o[0]&&e<=o[1])return{h:n+.3,type:"bridge",top:n};return{h:r.floor,type:r.water?"water":"pit",top:n,pit:r}}for(let r of this.lakes)if(t>=r.s0&&t<r.s1&&Math.abs(e)<=15)return{h:n,type:"ice"};if(s==="road")for(let r of this.mud){let o=t-r.s;if(o>this.length/2&&(o-=this.length),(o/r.rs)**2+((e-r.d)/r.rd)**2<1){s=this.patchKind==="mud"?"mud":"ice";break}}return{h:n,type:s}}inTunnel(t){return t=this.wrap(t),t>this.tunnel.s0&&t<this.tunnel.s1}pointAt(t,e=0){t=this.wrap(t);let n=t/this.ds,s=Math.floor(n)%this.N,r=(s+1)%this.N,o=n-Math.floor(n),a=this.th[s],l=this.th[r]-a;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;let h=a+l*o,d=this.px[s]+(this.px[r]-this.px[s])*o,u=this.pz[s]+(this.pz[r]-this.pz[s])*o,f=-Math.sin(h),g=Math.cos(h);return{x:d+f*e,z:u+g*e,th:h,rx:f,rz:g,tx:Math.cos(h),tz:Math.sin(h)}}project(t,e,n=-1){let s=this.N,r=this.px,o=this.pz,a=0,c=1/0;if(n>=0)for(let m=-40;m<=40;m++){let p=(n+m+s)%s,_=t-r[p],v=e-o[p],y=_*_+v*v;y<c&&(c=y,a=p)}if(n<0||c>1600){c=1/0;for(let m=0;m<s;m++){let p=t-r[m],_=e-o[m],v=p*p+_*_;v<c&&(c=v,a=m)}}let l=this.th[a],h=Math.cos(l),d=Math.sin(l),u=t-r[a],f=e-o[a],g=u*h+f*d,x=-u*d+f*h;return{s:this.wrap(a*this.ds+g),d:x,i:a,th:l}}curvatureAhead(t,e){let n=this.pointAt(t).th,r=this.pointAt(t+e).th-n;for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;return r}ahead(t,e){return this.wrap(e-t)}};function ie(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ye,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Bu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let g=Bu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Bu(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new pe(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let x=h.getComponent(u,g);a.setComponent(u+d,g,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Rl=4;function Hu(i){Rl=i}var zu=()=>Rl;function Jn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ie(i,t,e,{repeat:n=!0,srgb:s=!0}={}){let r=document.createElement("canvas");r.width=i,r.height=t;let o=r.getContext("2d");e(o,i,t);let a=new Qe(r);return s&&(a.colorSpace=xe),n&&(a.wrapS=a.wrapT=Pi),a.anisotropy=Rl,a}function lr(i,t,e,n,s,r,o,a){for(let c=0;c<n;c++){i.fillStyle=s[Math.floor(a()*s.length)];let l=r+a()*(o-r);i.globalAlpha=.25+a()*.5,i.fillRect(a()*t,a()*e,l,l)}i.globalAlpha=1}var ku={},Gu=new WeakSet;function Cl(i){return Gu.add(i),i}var Vu=i=>Gu.has(i),Ye=(i,t)=>ku[i]||(ku[i]=Cl(t())),Wu={id:"clasico",edge:["#5f7d34","#4e6b2a","#76923f","#6b5a35","#839b4a"],road:["#9a7048","#8a6240","#a87d52","#7c5638","#b58a5c","#6e4c30"],ruts:"#4a321e",lanes:!1,curb:["#d6261f","#f4f4f4"],grass:["#5c8a35","#4f7a2c","#6c9c3f","#7aa94a","#477026","#83a650"],dirt:["#7a5434","#6a4629","#8c6241","#5a3a22","#9b7150"],barrier:["#d42a20","#f2f2f2"],rock:["#6d6862","#5b5751","#7c776f","#4a4641","#8a857c"],patch:[[70,44,22],[84,55,30],[120,90,60]],water:["#2f6b5e","rgba(190,240,220,0.35)"]},Fe=Wu;function Xu(i){Fe={...Wu,...i}}var As=(i,t)=>Ye(i+"@"+Fe.id,t),qu=()=>As("road",()=>Ie(512,512,(i,t,e)=>{let n=Jn(7);i.fillStyle=Fe.edge[0],i.fillRect(0,0,t,e),lr(i,t,e,4e3,Fe.edge.slice(1),1,4,n);let s=Math.round(t*(4/30)),r=Math.round(t*(26/30));if(i.save(),i.beginPath(),i.rect(s,0,r-s,e),i.clip(),i.fillStyle=Fe.road[0],i.fillRect(s,0,r-s,e),lr(i,t,e,9e3,Fe.road.slice(1),1,5,n),i.restore(),Fe.lanes){i.fillStyle="rgba(245,245,235,0.85)";for(let c of[1/3,2/3])i.fillRect(s+(r-s)*c-3,e*.1,6,e*.4);i.fillRect(s+6,0,5,e),i.fillRect(r-11,0,5,e)}i.globalAlpha=.18,i.fillStyle=Fe.ruts;for(let c of[.3,.38,.62,.7])for(let l=0;l<e;l+=2)i.fillRect(t*c+Math.sin(l*.05)*3,l,9,2);i.globalAlpha=1;let o=12,a=8;for(let c=0;c<a;c++)i.fillStyle=Fe.curb[c%2],i.fillRect(s-o,c*e/a,o,e/a),i.fillRect(r,c*e/a,o,e/a)})),Yu=()=>As("grass",()=>Ie(256,256,(i,t,e)=>{let n=Jn(3);if(i.fillStyle=Fe.grass[0],i.fillRect(0,0,t,e),lr(i,t,e,5e3,Fe.grass.slice(1),1,3,n),Fe.tiles){i.strokeStyle="rgba(0,0,0,0.18)",i.lineWidth=2;for(let s=0;s<=4;s++)i.beginPath(),i.moveTo(s*t/4,0),i.lineTo(s*t/4,e),i.moveTo(0,s*e/4),i.lineTo(t,s*e/4),i.stroke()}})),Co=()=>As("dirt",()=>Ie(256,256,(i,t,e)=>{let n=Jn(11);i.fillStyle=Fe.dirt[0],i.fillRect(0,0,t,e),lr(i,t,e,6e3,Fe.dirt.slice(1),1,5,n),i.globalAlpha=.15,i.fillStyle="#3b2615";for(let s=0;s<e;s+=16)i.fillRect(0,s+n()*6,t,2);i.globalAlpha=1})),Zu=()=>As("barrier",()=>Ie(256,64,(i,t,e)=>{for(let n=0;n<4;n++)i.fillStyle=Fe.barrier[n%2],i.fillRect(n*t/4,0,t/4,e);i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(0,e-8,t,8),i.fillStyle="rgba(255,255,255,0.35)",i.fillRect(0,0,t,4),i.fillStyle="rgba(0,0,0,0.3)";for(let n=0;n<4;n++)i.fillRect(n*t/4,0,2,e)})),Pl=()=>Ye("planks",()=>Ie(256,256,(i,t,e)=>{let n=Jn(5),s=8;for(let r=0;r<s;r++){let o=120+Math.floor(n()*40);i.fillStyle=`rgb(${o+40},${o},${Math.floor(o*.55)})`,i.fillRect(0,r*e/s,t,e/s-3),i.fillStyle="rgba(60,35,10,0.3)";for(let a=0;a<6;a++)i.fillRect(0,r*e/s+n()*(e/s),t,1);i.fillStyle="#3a2410",i.fillRect(0,(r+1)*e/s-3,t,3)}i.fillStyle="rgba(255,200,0,0.85)";for(let r of[t*.25,t*.75])i.beginPath(),i.moveTo(r-40,e*.75),i.lineTo(r,e*.35),i.lineTo(r+40,e*.75),i.lineTo(r+22,e*.75),i.lineTo(r,e*.5),i.lineTo(r-22,e*.75),i.closePath(),i.fill()})),hr=()=>As("rock",()=>Ie(256,256,(i,t,e)=>{let n=Jn(21);i.fillStyle=Fe.rock[0],i.fillRect(0,0,t,e),lr(i,t,e,5e3,Fe.rock.slice(1),2,8,n),i.strokeStyle="rgba(30,28,25,0.5)",i.lineWidth=2;for(let s=0;s<14;s++){i.beginPath();let r=n()*t,o=n()*e;i.moveTo(r,o);for(let a=0;a<4;a++)r+=(n()-.5)*60,o+=(n()-.5)*60,i.lineTo(r,o);i.stroke()}})),$u=()=>Ye("tread",()=>Ie(512,64,(i,t,e)=>{i.fillStyle="#1b1b1b",i.fillRect(0,0,t,e),i.fillStyle="#2e2e2e";let n=18;for(let s=0;s<n;s++){let r=s*t/n;i.beginPath(),i.moveTo(r,0),i.lineTo(r+14,0),i.lineTo(r+26,e/2),i.lineTo(r+14,e),i.lineTo(r,e),i.lineTo(r+12,e/2),i.closePath(),i.fill()}})),Ju=()=>Ye("tireSide",()=>Ie(256,256,(i,t,e)=>{i.fillStyle="#1c1c1c",i.fillRect(0,0,t,e),i.strokeStyle="#333",i.lineWidth=6;for(let n of[118,100,84])i.beginPath(),i.arc(128,128,n,0,Math.PI*2),i.stroke();i.fillStyle="#444",i.font="bold 20px sans-serif",i.textAlign="center",i.save(),i.translate(128,128);for(let n=0;n<2;n++)i.rotate(Math.PI),i.fillText("MONSTRUO",0,-102);i.restore()},{repeat:!1})),Il=()=>Ye("itemBox",()=>Ie(128,128,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,e);n.addColorStop(0,"#ff4fd8"),n.addColorStop(.35,"#ffd400"),n.addColorStop(.7,"#27e3ff"),n.addColorStop(1,"#7b5cff"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="rgba(255,255,255,0.9)",i.lineWidth=8,i.strokeRect(4,4,t-8,e-8),i.fillStyle="#fff",i.font="bold 90px Arial Black, sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=6,i.strokeStyle="rgba(0,0,0,0.35)",i.strokeText("?",t/2,e/2+6),i.fillText("?",t/2,e/2+6)},{repeat:!1})),Ku=()=>Ye("turbo",()=>Ie(128,256,(i,t,e)=>{i.fillStyle="#1a1206",i.fillRect(0,0,t,e);for(let n=0;n<3;n++){let s=n*(e/3)+10,r=i.createLinearGradient(0,s,0,s+70);r.addColorStop(0,"#ffe600"),r.addColorStop(1,"#ff5a00"),i.fillStyle=r,i.beginPath(),i.moveTo(t/2,s),i.lineTo(t-10,s+50),i.lineTo(t-34,s+50),i.lineTo(t/2,s+26),i.lineTo(34,s+50),i.lineTo(10,s+50),i.closePath(),i.fill()}})),ju=()=>Ye("net",()=>Ie(256,256,(i,t,e)=>{i.clearRect(0,0,t,e),i.strokeStyle="#f3e7c4",i.lineWidth=7;let n=4;for(let s=0;s<=n;s++)i.beginPath(),i.moveTo(0,s*e/n),i.lineTo(t,s*e/n),i.stroke(),i.beginPath(),i.moveTo(s*t/n,0),i.lineTo(s*t/n,e),i.stroke();i.fillStyle="#c9b98e";for(let s=0;s<=n;s++)for(let r=0;r<=n;r++)i.beginPath(),i.arc(s*t/n,r*e/n,7,0,Math.PI*2),i.fill()})),Po=()=>Ye("checker",()=>Ie(128,128,(i,t,e)=>{for(let s=0;s<8;s++)for(let r=0;r<8;r++)i.fillStyle=(s+r)%2?"#111":"#f5f5f5",i.fillRect(s*t/8,r*e/8,t/8,e/8)})),Io=(i,t="#d42a20",e="#fff")=>Ye("banner"+i+t,()=>Ie(1024,128,(n,s,r)=>{n.fillStyle=t,n.fillRect(0,0,s,r);let o=4,a=r/o;for(let c of[0,s-a*3])for(let l=0;l<3;l++)for(let h=0;h<o;h++)n.fillStyle=(l+h)%2?"#111":"#f5f5f5",n.fillRect(c+l*a,h*a,a,a);n.fillStyle=e,n.font="bold 84px Impact, Arial Black, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(i,s/2,r/2+4)},{repeat:!1})),Qu=()=>As("mud",()=>Ie(256,256,(i,t,e)=>{let n=Jn(9),[s,r,o]=Fe.patch,a=i.createRadialGradient(128,128,20,128,128,128);a.addColorStop(0,`rgba(${s},1)`),a.addColorStop(.75,`rgba(${r},0.95)`),a.addColorStop(1,`rgba(${r},0)`),i.fillStyle=a,i.fillRect(0,0,t,e),i.globalCompositeOperation="source-atop";for(let c=0;c<40;c++)i.fillStyle=`rgba(${o[0]+n()*40},${o[1]+n()*30},${o[2]+n()*20},0.35)`,i.beginPath(),i.ellipse(n()*t,n()*e,4+n()*14,2+n()*6,n()*3,0,Math.PI*2),i.fill()},{repeat:!1})),Ll=(i=Fe.water)=>Ye("water"+i.join(),()=>Ie(256,256,(t,e,n)=>{let s=Jn(13);t.fillStyle=i[0],t.fillRect(0,0,e,n),t.strokeStyle=i[1],t.lineWidth=2;for(let r=0;r<60;r++){let o=s()*e,a=s()*n,c=8+s()*24;t.beginPath(),t.moveTo(o,a),t.quadraticCurveTo(o+c/2,a-4,o+c,a),t.stroke()}})),Lo=()=>Ye("dot",()=>Ie(64,64,(i,t,e)=>{let n=i.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.45,"rgba(255,255,255,0.75)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)},{repeat:!1,srgb:!1})),td=(i,t,e)=>Ie(128,128,(n,s,r)=>{n.clearRect(0,0,s,r),n.fillStyle=e,n.beginPath(),n.arc(64,64,60,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(64,64,50,0,Math.PI*2),n.fill(),n.fillStyle=t,n.font="bold 72px Impact, Arial Black, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(i),64,68)},{repeat:!1}),ed=()=>Ye("crowd",()=>Ie(256,128,(i,t,e)=>{let n=Jn(17);i.fillStyle="#3b3b48",i.fillRect(0,0,t,e);let s=["#e63946","#f1fa8c","#2a9df4","#ffffff","#ff9f1c","#2ec4b6","#9b5de5","#f15bb5"];for(let r=0;r<4;r++)for(let o=0;o<t;o+=9){i.fillStyle=s[Math.floor(n()*s.length)];let a=r*32+8+n()*4;i.fillRect(o+n()*3,a+8,7,14),i.fillStyle=["#f1c27d","#c68642","#8d5524","#ffdbac"][Math.floor(n()*4)],i.beginPath(),i.arc(o+4,a+4,4,0,Math.PI*2),i.fill()}})),Do=()=>Ye("bark",()=>Ie(256,128,(i,t,e)=>{let n=Jn(31);i.fillStyle="#5b3a1e",i.fillRect(0,0,t,e);for(let s=0;s<70;s++)i.fillStyle=n()>.5?"rgba(40,24,10,0.6)":"rgba(120,84,50,0.4)",i.fillRect(0,n()*e,t,1+n()*3);for(let s=0;s<20;s++)i.fillStyle="rgba(30,18,8,0.7)",i.beginPath(),i.ellipse(n()*t,n()*e,6+n()*10,2+n()*3,0,0,Math.PI*2),i.fill()})),ur=()=>Ye("rings",()=>Ie(128,128,(i,t,e)=>{i.fillStyle="#c9a26b",i.fillRect(0,0,t,e),i.strokeStyle="rgba(110,70,30,0.6)",i.lineWidth=2;for(let n=6;n<64;n+=7)i.beginPath(),i.arc(64,64,n,0,Math.PI*2),i.stroke();i.strokeStyle="#5b3a1e",i.lineWidth=10,i.beginPath(),i.arc(64,64,60,0,Math.PI*2),i.stroke()},{repeat:!1})),nd=()=>Ye("barrel",()=>Ie(256,128,(i,t,e)=>{i.fillStyle="#c4161c",i.fillRect(0,0,t,e),i.fillStyle="#ffd200",i.fillRect(0,e*.38,t,e*.24),i.fillStyle="#111";for(let n=0;n<2;n++){let s=t*(.25+n*.5),r=e*.5;i.beginPath(),i.moveTo(s,r-13),i.lineTo(s+15,r+12),i.lineTo(s-15,r+12),i.closePath(),i.fill(),i.fillStyle="#ffd200",i.font="bold 18px sans-serif",i.textAlign="center",i.fillText("!",s,r+10),i.fillStyle="#111"}i.fillStyle="rgba(0,0,0,0.3)",i.fillRect(0,6,t,5),i.fillRect(0,e-11,t,5)}));function Ey(i,t=160){let e=i.geometry.index?i.geometry.toNonIndexed():i.geometry,n=e.attributes.position,s=Object.keys(e.attributes),r=new Map;for(let a=0;a<n.count;a+=3){let c=(n.getX(a)+n.getX(a+1)+n.getX(a+2))/3,l=(n.getZ(a)+n.getZ(a+1)+n.getZ(a+2))/3,h=Math.floor(c/t)+","+Math.floor(l/t),d=r.get(h);d||(d=[],r.set(h,d)),d.push(a)}if(r.size<2)return[i];let o=[];for(let a of r.values()){let c=new ye;for(let h of s){let d=e.attributes[h],u=d.itemSize,f=new d.array.constructor(a.length*3*u),g=0;for(let x of a)for(let m=0;m<3;m++)for(let p=0;p<u;p++)f[g++]=d.array[(x+m)*u+p];c.setAttribute(h,new pe(f,u,d.normalized))}c.computeBoundingSphere();let l=new B(c,i.material);l.castShadow=i.castShadow,l.receiveShadow=i.receiveShadow,l.renderOrder=i.renderOrder,l.position.copy(i.position),l.quaternion.copy(i.quaternion),l.scale.copy(i.scale),o.push(l)}return o}function No(i,t=3e3,e=160){for(let n of[...i.children]){if(!n.isMesh||n.isInstancedMesh||n.isSkinnedMesh)continue;let s=n.geometry;if((s.index?s.index.count:s.attributes.position.count)/3<t)continue;let o=Ey(n,e);if(!(o.length<2)){i.remove(n);for(let a of o)i.add(a);s.dispose()}}}function Oo(i,t=200){let e=i.count,n=i.instanceMatrix.array,s=i.instanceColor,r=new Map;for(let a=0;a<e;a++){let c=Math.floor(n[a*16+12]/t)+","+Math.floor(n[a*16+14]/t),l=r.get(c);l||(l=[],r.set(c,l)),l.push(a)}if(r.size<2)return[i];let o=[];for(let a of r.values()){let c=new fi(i.geometry,i.material,a.length);s&&c.setColorAt(0,new Ft),a.forEach((l,h)=>{c.instanceMatrix.array.set(n.subarray(l*16,l*16+16),h*16),s&&c.instanceColor.array.set(s.array.subarray(l*3,l*3+3),h*3)}),c.castShadow=i.castShadow,c.receiveShadow=i.receiveShadow,c.renderOrder=i.renderOrder,c.computeBoundingSphere(),o.push(c)}return o}function Fo(i,t=new Set){i.updateMatrixWorld(!0);let e=i.matrixWorld.clone().invert(),n=new Map;i.traverse(r=>{if(!r.isMesh||r.isInstancedMesh||Array.isArray(r.material))return;for(let l=r;l&&l!==i;l=l.parent)if(t.has(l))return;let o=r.geometry,a=r.material.uuid+"|"+Object.keys(o.attributes).sort().join(",")+"|"+(o.index?"i":"n")+"|"+(r.castShadow?"s":""),c=n.get(a);c||(c={mat:r.material,cast:r.castShadow,list:[]},n.set(a,c)),c.list.push(r)});let s=new oe;for(let r of n.values()){if(r.list.length<2)continue;let o=r.list.map(l=>{let h=l.geometry.clone();for(let d of Object.keys(h.morphAttributes))delete h.morphAttributes[d];return h.clearGroups(),s.multiplyMatrices(e,l.matrixWorld),h.applyMatrix4(s),h}),a=ie(o,!1);if(o.forEach(l=>l.dispose()),!a)continue;for(let l of r.list)l.parent.remove(l);let c=new B(a,r.mat);c.castShadow=r.cast,i.add(c)}}var id=new WeakMap;function sd(i){if(!i||!i.isMeshStandardMaterial)return i;let t=id.get(i);return t||(t=new Mo({color:i.color,map:i.map,emissive:i.emissive,emissiveMap:i.emissiveMap,emissiveIntensity:i.emissiveIntensity,transparent:i.transparent,opacity:i.opacity,side:i.side,vertexColors:i.vertexColors,flatShading:i.flatShading,alphaTest:i.alphaTest,depthWrite:i.depthWrite,fog:i.fog}),t.color=i.metalness>.5?i.color.clone().multiplyScalar(1.25):i.color,t.name=i.name,id.set(i,t),t)}function Rs(i,t){i.traverse(e=>{if(!(!e.isMesh&&!e.isInstancedMesh))if(t){if(e.userData.richMaterial)return;let n=Array.isArray(e.material)?e.material.map(sd):sd(e.material);if(n===e.material)return;e.userData.richMaterial=e.material,e.material=n}else e.userData.richMaterial&&(e.material=e.userData.richMaterial,delete e.userData.richMaterial)})}function rd(i){i.traverse(t=>{if(t.material)for(let e of[].concat(t.material,t.userData.richMaterial||[]))for(let n of[e.map,e.emissiveMap])n&&n.minFilter===Hn&&(n.minFilter=qs,n.needsUpdate=!0)})}function od(i){let t=new Set,e=new Set,n=new Set,s=r=>{if(r){if(Array.isArray(r)){r.forEach(s);return}e.add(r);for(let o of Object.values(r))o&&o.isTexture&&n.add(o);if(r.uniforms)for(let o of Object.values(r.uniforms))o&&o.value&&o.value.isTexture&&n.add(o.value)}};i.traverse(r=>{r.geometry&&t.add(r.geometry),s(r.material),s(r.userData.richMaterial),r.isInstancedMesh&&r.dispose(),r.isLight&&r.shadow&&r.shadow.dispose()});for(let r of t)r.dispose();for(let r of e)r.dispose();for(let r of n)r!==i.environment&&!Vu(r)&&r.dispose()}var ae=(i,t)=>({type:"S",len:i,...t}),te=(i,t)=>({type:"A",ang:i,r:t}),Dl=(i,t,e,n,s=16,r=3.5)=>({s0:i(e,n),s1:i(e,n+s),d0:-t,d1:t,h:r}),ce=(i,t,e,n,s=9,r=5)=>({s:i(t,e),d:n,rs:s,rd:r}),ad=[-8,-3,2,7],cd=[-5.5,-.5,4.5,9],Ul=i=>i.map((t,e)=>[t,e%2?cd:ad]),Kn=(i,t,e=3)=>{let n=t<0?[-9,-5.5,-7.3]:[5.5,9,7.3],s=[[i,[n[0],n[1]]],[i+3,[n[2]]]];return e>3&&s.push([i+6,[n[0]]]),s};function by(i,t,e={}){return{plateaus:[{a:i(2,115),b:i(2,160),c:i(2,270),d:i(2,315),h:5},{a:i(9,130),b:i(9,172),c:i(9,275),d:i(9,318),h:4.5}],whoops:[{a:i(9,65),b:i(9,65)+54,amp:.75,wl:9}],ramps:[{s0:i(2,180),s1:i(2,196),d0:-t,d1:t,h:3.5},{s0:i(9,190),s1:i(9,206),d0:-t,d1:3,h:3.5}],pits:[{name:"foso",s0:i(2,196),s1:i(2,214),floor:e.bigPitLiquid?1.4:0,liquid:e.bigPitLiquid||null},{name:"puente",s0:i(9,206),s1:i(9,228),floor:1.4,liquid:e.liquid||"water",bridges:[[6.5,11.5]]}],mud:[{s:i(9,18),d:-5,rs:9,rd:5},{s:i(9,34),d:4,rs:10,rd:6},{s:i(9,52),d:-2,rs:8,rd:5.5},...(e.extraPatches||[]).map(([n,s,r])=>({s:i(n,s),d:r,rs:9,rd:5}))],tunnel:{s0:i(7,30),s1:i(7,250)}}}var Sy={turbos:[[0,50,-6],[0,50,6],[2,166,-5],[2,166,5],[7,150,-5],[7,150,5],[9,178,-5],[11,120,0]],boxes:[[0,185],[2,250],[7,90],[9,300],[11,100]],rollers:[{seg:2,list:[[35,4.2,0],[60,3.6,.45],[85,4.8,.2]],sign:[2,5]}],balls:[{seg:5,frac:.25,phase:0},{seg:5,frac:.8,phase:Math.PI}],nets:[[11,45]],crush:[{seg:0,rows:[[100,[-8,-3,2,7]],[113,[-5.5,-.5,4.5,9]],[126,[-8,-3,2,7]],[139,[-5.5,-.5,4.5,9]]],sign:[0,80]}],barrels:[{seg:7,rows:[[190,[-8,-2,4,10]],[206,[-5,1,7]],[222,[-9,-2,5]]]}],patchSigns:[[9,2]]};function ld(i){let t=e=>e==null?[]:Array.isArray(e)?e:[e];return{turbos:i.turbos||[],boxes:i.boxes||[],rollers:t(i.rollers),balls:Array.isArray(i.balls)?i.balls:i.balls?i.balls.at.map((e,n)=>({seg:i.balls.seg,frac:e,phase:n%2?Math.PI:0})):[],nets:i.nets||(i.net?[i.net]:[]),crush:t(i.crush),barrels:t(i.barrels),patchSigns:i.patchSigns||(i.patchSign?[i.patchSign]:[])}}var Bo=[{id:"clasico",name:"Valle Monstruo",short:"Valle",desc:"El circuito de siempre: fosos, troncos y cocodrilos.",layout:[ae(230),te(90,70),ae(330),te(90,65),te(-35,60),te(70,60),te(-35,60),ae(290),te(90,70),ae(0,{solve:"X"}),te(90,65),ae(0,{solve:"Y"})],features:(i,t)=>by(i,t,{liquid:"water"}),places:Sy,theme:{tex:{},sky:[4034528,13625077],fog:[13625077,260,1300],hemi:[13625599,7035450,1],sun:[16773590,2.6],mountains:8163228,hills:7313989,trees:"mixed",rocks:9077882,tunnel:{inner:11577500,outer:12177292},crocs:!0,roller:"log",crush:"car",patch:"mud",patchName:"\xA1BARRO!",rollerName:"\xA1TRONCOS!",rollerHit:"\xA1TRONCO!"}},{id:"nieve",name:"Pico Helado",short:"Nieve",rev:2,desc:"R\xE1pido y resbaladizo: un lago helado con mu\xF1ecos de nieve, bolas gigantes y un salto sobre una grieta.",layout:[ae(330),te(50,220),ae(0,{solve:"X"}),te(130,110),ae(450),te(-50,150),te(50,150),te(90,120),ae(0,{solve:"Y"}),te(90,120),ae(150)],features:(i,t)=>({lakes:[{s0:i(1,95),s1:i(2,40)}],ramps:[Dl(i,t,4,200,20,4.5)],pits:[{name:"grieta",s0:i(4,220),s1:i(4,246),floor:1.4,liquid:"ice"}],whoops:[{a:i(4,60),b:i(4,60)+54,amp:.75,wl:9}],mud:[ce(i,0,200,-5),ce(i,0,222,4),ce(i,0,244,-2),ce(i,4,400,0),ce(i,5,70,5),ce(i,6,45,-5),ce(i,6,90,4)],tunnel:{s0:i(8,120),s1:i(8,220)}}),places:{turbos:[[0,40,-6],[0,40,6],[3,232,-5],[3,232,5],[4,150,0],[4,185,0],[7,150,0],[10,100,-6],[10,100,6]],boxes:[[0,110],[3,125],[4,330],[8,240],[6,120]],rollers:[{seg:2,list:[[90,4.2,0],[118,3.6,.45]],sign:[2,60]},{seg:8,list:[[45,4,.1],[72,4.6,.6]],sign:[7,170]}],balls:[],nets:[[10,60]],crush:[{seg:1,rows:[[115,[-8,-1,6]],[135,[-5,2,9]],[155,[-9,-2,5]],[175,[-6,1,8]]],sign:[1,45]},{seg:2,rows:[[8,[-7,0,7]],[26,[-4,3]]]}],barrels:[{seg:8,rows:[...Kn(150,-1),...Kn(185,1)]}],patchSigns:[[0,170],[5,35]]},theme:{tex:{id:"nieve",edge:["#e7edf3","#d5dee8","#f4f7fa","#c9d4df"],road:["#c9d2dc","#b9c4d0","#d8e0e8","#aab6c4","#e2e8ee","#9fadbd"],ruts:"#6d7e93",curb:["#2a6fdb","#f4f4f4"],grass:["#e9eef4","#dbe3ec","#f6f8fb","#cfd9e4","#ffffff"],dirt:["#d6dee7","#c4cfdb","#e6ecf2","#b7c4d2"],barrier:["#2a6fdb","#f2f2f2"],rock:["#7d8a99","#6b7787","#8f9bab","#5d6878","#a2adbb"],patch:[[170,215,240],[190,228,250],[230,245,255]],water:["#5d8fb0","rgba(235,250,255,0.5)"]},sky:[7315416,15266040],fog:[15134454,200,1050],hemi:[15660543,9280947,1.15],sun:[16774894,2.2],mountains:15265525,hills:14673903,trees:"snowpine",rocks:8227481,tunnel:{inner:12572910,outer:15660024},crocs:!1,snow:!0,roller:"snowball",crush:"snowman",patch:"ice",patchName:"\xA1HIELO!",rollerName:"\xA1BOLAS DE NIEVE!",rollerHit:"\xA1BOLA DE NIEVE!",dust:[.93,.95,.98]}},{id:"volcan",name:"Volc\xE1n Rugiente",short:"Volc\xE1n",rev:2,desc:"El m\xE1s largo: tres fosos de lava que saltar, rocas rodantes, un t\xFAnel lleno de barriles y una recta bajo una lluvia de rocas de fuego.",layout:[ae(350),te(120,120),ae(430),te(-60,150),te(150,100),ae(0,{solve:"X"}),te(60,130),ae(0,{solve:"Y"}),te(90,120),ae(150)],features:(i,t)=>({plateaus:[{a:i(7,195),b:i(7,235),c:i(7,345),d:i(7,390),h:5}],whoops:[{a:i(3,40),b:i(3,40)+54,amp:.75,wl:9}],ramps:[Dl(i,t,2,330),{s0:i(5,220),s1:i(5,236),d0:-t,d1:2,h:3.5},Dl(i,t,7,262)],pits:[{name:"lava1",s0:i(2,346),s1:i(2,366),floor:1.4,liquid:"lava"},{name:"lava2",s0:i(5,236),s1:i(5,258),floor:1.4,liquid:"lava",bridges:[[6,11]]},{name:"lava3",s0:i(7,278),s1:i(7,298),floor:1.4,liquid:"lava"}],mud:[ce(i,1,60,-4),ce(i,1,95,5),ce(i,1,130,-2),ce(i,4,100,4),ce(i,4,140,-5),ce(i,4,180,0)],tunnel:{s0:i(2,30),s1:i(2,290)},meteors:[{s0:i(7,20),s1:i(7,170),sign:i(7,20)-35}]}),places:{turbos:[[0,40,-6],[0,40,6],[2,310,0],[4,240,0],[5,200,-7],[7,240,0],[9,60,-6],[9,60,6]],boxes:[[0,110],[2,410],[4,30],[7,185],[8,90]],rollers:[{seg:0,list:[[185,4.2,0],[212,3.6,.45]],sign:[0,150]},{seg:5,list:[[65,4,.15],[92,4.6,.55]],sign:[5,25]}],balls:[],nets:[],crush:[{seg:6,rows:Ul([30,43,56]),sign:[5,330]}],barrels:[{seg:2,rows:[...Kn(80,-1),...Kn(130,1),[180,[-2,2]],[183,[0]],...Kn(230,-1,4)]}],patchSigns:[[1,25],[4,70]]},theme:{tex:{id:"volcan",edge:["#3b3533","#2e2927","#4a423f","#5a2a1a","#332d2b"],road:["#7a665c","#6a564c","#8a7468","#5e4c44","#9a8274","#54423a"],ruts:"#1e1714",curb:["#ff6a00","#1d1d1d"],grass:["#35302e","#2b2725","#403a37","#4c2a20","#2a2523","#5a3020"],dirt:["#4a3d37","#3a2f2a","#57483f","#2e2420"],barrier:["#1d1d1d","#ffb000"],rock:["#3d3836","#2f2b29","#4a4442","#262220","#56504c"],patch:[[40,36,34],[58,52,50],[110,100,96]],water:["#ff5a00","rgba(255,230,80,0.75)"]},sky:[4857888,14712904],fog:[10115642,200,1e3],hemi:[16762016,5914672,1.35],sun:[16764057,2.9],mountains:3813936,hills:3353642,trees:"dead",rocks:4012086,tunnel:{inner:6965822,outer:4142644},crocs:!1,volcano:!0,roller:"boulder",crush:"car",patch:"mud",patchName:"\xA1CENIZA!",rollerName:"\xA1ROCAS!",rollerHit:"\xA1ROCA!",dust:[.4,.36,.34]}},{id:"selva",name:"Selva Salvaje",short:"Selva",rev:2,desc:"Curvas y barro sin parar, troncos colgantes y un r\xEDo con cocodrilos: \xBFqu\xE9 puente eliges?",layout:[ae(170),te(90,55),te(-60,55),te(120,55),te(-60,55),ae(0,{solve:"X"}),te(90,55),ae(130),te(-60,55),te(120,55),te(-60,55),ae(50),te(90,55),ae(50),te(-50,55),te(100,55),te(-50,55),ae(50),te(90,55),ae(0,{solve:"Y"})],features:(i,t)=>({pits:[{name:"r\xEDo",s0:i(7,45),s1:i(7,87),floor:1.4,liquid:"water",bridges:[[-11.5,-6.5],[6.5,11.5]]}],whoops:[{a:i(11,2),b:i(11,2)+45,amp:.75,wl:9}],mud:[ce(i,1,30,-4),ce(i,1,58,5),ce(i,2,30,4),ce(i,4,30,-4),ce(i,8,30,3),ce(i,9,25,-3),ce(i,9,85,5),ce(i,10,30,-4),ce(i,14,25,4),ce(i,15,30,-4),ce(i,15,70,4),ce(i,16,25,0)],tunnel:{s0:i(19,10),s1:i(19,95)}}),places:{turbos:[[0,30,-6],[0,30,6],[5,15,0],[7,110,0],[17,45,0],[19,150,-6],[19,150,6]],boxes:[[0,155],[7,120],[12,43],[19,125]],rollers:[{seg:0,list:[[95,4.2,0],[120,3.6,.45]],sign:[0,62]}],balls:[{seg:3,frac:.3,phase:0},{seg:3,frac:.78,phase:Math.PI},{seg:9,frac:.5,phase:Math.PI/2}],nets:[[5,50],[13,30]],crush:[{seg:17,rows:[[8,ad],[21,cd]],sign:[16,10]}],barrels:[{seg:19,rows:[...Kn(35,-1),...Kn(65,1)]}],patchSigns:[[0,165],[8,5],[14,2]]},theme:{tex:{id:"selva",edge:["#3f7a2a","#336b22","#4c8a33","#5a4a28","#2e5f1e"],road:["#8a4e2c","#7a4226","#9a5a34","#6c3a20","#a86640","#5e321b"],ruts:"#3a1d0e",curb:["#ffd400","#2e8b2e"],grass:["#3a7526","#2f661e","#478a30","#2a5c1a","#55973a"],dirt:["#6b4026","#5a341e","#7a4b2e","#4a2a17"],barrier:["#c8a050","#7a5a2a"],rock:["#7d7a5e","#6a684e","#8f8c6e","#5a5840","#9a9878"],water:["#3e6b3a","rgba(200,240,190,0.35)"]},sky:[4890832,14217424],fog:[12903104,170,900],hemi:[14221264,3824162,1],sun:[16774352,2.5],mountains:5208650,hills:4160053,trees:"jungle",rocks:7302226,tunnel:{inner:11049584,outer:6262600},crocs:!0,roller:"log",crush:"car",patch:"mud",patchName:"\xA1BARRO!",rollerName:"\xA1TRONCOS!",rollerHit:"\xA1TRONCO!",dust:[.6,.36,.22],swing:"log",ballHit:"\xA1TRONCAZO!"}},{id:"ciudad",name:"Gran Ciudad",short:"Ciudad",rev:2,desc:"Avenidas a toda velocidad, esquinas cerradas, obras, aceite, cruces con tr\xE1fico y una alcantarilla con cocodrilos.",layout:[ae(280),te(90,38),ae(160),te(-90,38),ae(140),te(90,38),ae(210),te(90,38),ae(0,{solve:"X"}),te(90,38),ae(150),te(-90,38),ae(120),te(90,38),ae(0,{solve:"Y"}),te(90,38),ae(150)],features:(i,t)=>({ramps:[{s0:i(8,330),s1:i(8,346),d0:-t,d1:3,h:3.5}],pits:[{name:"alcantarilla",s0:i(8,346),s1:i(8,368),floor:1.4,liquid:"water",bridges:[[6.5,11.5]]}],mud:[ce(i,0,255,4),ce(i,4,118,-4),ce(i,6,195,3),ce(i,8,425,-3),ce(i,12,100,4),ce(i,14,205,0)],tunnel:{s0:i(6,30),s1:i(6,180)},crossings:[{s0:i(8,255),s1:i(8,285),dir:-1,speed:13,sign:i(8,225)},{s0:i(10,60),s1:i(10,90),dir:1,speed:15,sign:i(10,30)}]}),places:{turbos:[[0,40,-6],[0,40,6],[2,20,0],[4,30,-5],[4,30,5],[6,10,0],[8,30,-6],[8,30,6],[8,230,0],[10,20,0],[12,15,0],[14,30,-6],[14,30,6],[16,60,0]],boxes:[[0,200],[4,60],[8,240],[10,120],[14,150]],rollers:[{seg:8,list:[[60,4.2,0],[85,3.6,.45],[110,4.8,.2]],sign:[8,26]}],balls:[{seg:2,rel:55,phase:0},{seg:2,rel:105,phase:Math.PI}],nets:[[14,100]],crush:[{seg:0,rows:Ul([100,113,126,139]),sign:[0,75]},{seg:12,rows:Ul([30,43,56]),sign:[11,30]}],barrels:[{seg:8,rows:[...Kn(160,-1,4),...Kn(195,1,4)]}],patchSigns:[[0,225],[4,90],[8,400],[12,72],[14,175]]},theme:{tex:{id:"ciudad",edge:["#9a9a96","#8a8a86","#a8a8a4","#7e7e7a"],road:["#45474b","#3d3f43","#4e5054","#36383b","#55575b","#303235"],ruts:"#1c1d1f",lanes:!0,curb:["#d6261f","#f4f4f4"],grass:["#8d8f93","#84868a","#96989c","#7c7e82"],tiles:!0,dirt:["#8a7a68","#7a6a58","#9a8a78","#6a5a48"],barrier:["#f2f2f2","#ffcc00"],rock:["#9a9a9a","#8a8a8a","#a8a8a8","#7a7a7a"],patch:[[18,18,22],[30,30,38],[90,70,140]],water:["#3a5a5a","rgba(190,230,220,0.3)"]},sky:[4886752,14083826],fog:[13162210,260,1300],hemi:[14674687,5921374,1],sun:[16774368,2.5],mountains:null,hills:null,trees:"park",rocks:null,city:!0,tunnel:{inner:10526880,outer:7314005},crocs:!0,crocName:"\xA1COCODRILOS EN LA ALCANTARILLA!",roller:"pipe",crush:"car",patch:"oil",patchName:"\xA1ACEITE!",rollerName:"\xA1TUBER\xCDAS!",rollerHit:"\xA1TUBER\xCDA!",dust:[.62,.62,.64]}}],ko=i=>Bo.find(t=>t.id===i)||Bo[0];function Ho(i,t){return t==="lava"?"\xA1LAVA!":t==="ice"?"\xA1AGUA HELADA!":t==="water"?i.crocs?i.crocName||"\xA1COCODRILOS!":"\xA1AL AGUA!":"\xA1FOSO!"}function mn(i,t,e,n,s=null){let r=[],o=[],a=[],c=0;t.forEach(h=>{let d=i.pointAt(h),u=e(h);c=u.length,u.forEach(([f,g],x)=>{r.push(d.x+d.rx*f,g,d.z+d.rz*f);let[m,p]=n(h,x,f,g);o.push(m,p)})});for(let h=0;h<t.length-1;h++)if(!(s&&s(t[h],t[h+1])))for(let d=0;d<c-1;d++){let u=h*c+d,f=u+1,g=u+c,x=g+1;a.push(u,f,g,f,x,g)}let l=new ye;return l.setAttribute("position",new Qt(r,3)),l.setAttribute("uv",new Qt(o,2)),l.setIndex(a),l.computeVertexNormals(),l}function Cs(i,t,e){let n=[],s=Math.round(t/i.ds),r=Math.round(e/i.ds);for(let o=s;o<=r;o++)n.push(o*i.ds);return n}function bn(i,t,e,n=0,s=0){let r=t.pointAt(e,n);return i.position.set(r.x,s,r.z),i.rotation.set(0,Math.PI/2-r.th,0),i}function dd(i,t){let e=new Jt,n=i.length,s=(U,W)=>i.pits.some(ot=>U>=ot.s0-.01&&W<=ot.s1+.01),r=[-15,-13,-11,-8.25,-5.5,-2.75,0,2.75,5.5,8.25,11,13,15],o=[];for(let U=0;U<=i.N;U++)o.push(U*i.ds);let a=mn(i,o,U=>{let W=i.baseAt(U)+.03;return r.map(ot=>[ot,W])},(U,W,ot)=>[(ot+15)/30,U/12],s),c=new j({map:qu(),roughness:.95,metalness:0}),l=new B(a,c);l.receiveShadow=!0,e.add(l);let h=new j({map:Zu(),roughness:.8,side:ue}),d=(U,W)=>i.crossings.some(ot=>U>=ot.g0-.01&&W<=ot.g1+.01);for(let U of[-1,1]){let W=mn(i,o,gt=>{let vt=i.baseAt(gt);return[[U*15,vt],[U*15,vt+1.3],[U*(15+.7),vt+1.3],[U*(15+.7),vt]]},(gt,vt)=>[gt/8,[0,1,.92,0][vt]],d),ot=new B(W,h);ot.castShadow=!0,ot.receiveShadow=!0,e.add(ot)}let u=new j({map:Co(),roughness:1,side:ue}),f=[...i.plateaus.map(U=>[U.a-2,U.d+2]),...i.whoops.map(U=>[U.a-1,U.b+1])];for(let[U,W]of f){let ot=Cs(i,U,W);for(let gt of[-1,1]){let vt=mn(i,ot,V=>{let tt=i.baseAt(V),P=1.2+tt*1.6;return[[gt*(15+.7),tt],[gt*(15+2.2),tt],[gt*(15+2.2+P),-.04]]},(V,tt)=>[tt*.6,V/8]),It=new B(vt,u);It.receiveShadow=!0,e.add(It)}}let g=[],x=new j({map:Co(),roughness:1,side:ue,color:10259066});for(let U of i.pits){let W=Cs(i,U.s0,U.s1),ot=U.water?U.floor<0?U.floor-3:0:U.floor;for(let V of[-1,1]){let tt=mn(i,W,P=>[[V*15,ot],[V*15,i.baseAt(P)]],(P,lt,et,ft)=>[P/6,ft/6]);e.add(new B(tt,x))}for(let V of[U.s0,U.s1]){let tt=i.pointAt(V),P=i.baseAt(V)+.03,lt=new B(new ve(30,P-ot),x);lt.position.set(tt.x,(P+ot)/2,tt.z),lt.rotation.y=Math.PI/2-tt.th,e.add(lt)}let gt=U.water?new j({color:1911324,roughness:1}):new j({map:Co(),color:7034952,roughness:1}),vt=mn(i,W,()=>[[-15,ot+.02],[15,ot+.02]],(V,tt,P)=>[P/8,V/8]),It=new B(vt,gt);if(It.receiveShadow=!0,e.add(It),U.water){let V=U.liquid==="lava",tt=U.liquid==="ice",P=Ll(),lt=V?new j({map:P,color:16747056,emissive:16730624,emissiveMap:P,emissiveIntensity:1.4,roughness:.6}):new j({map:P,color:tt?13625590:6267018,roughness:tt?.3:.15,metalness:.1,transparent:!0,opacity:tt?.93:.88}),et=new B(mn(i,W,()=>[[-15,U.floor],[15,U.floor]],(ft,pt,zt)=>[zt/10,ft/10]),lt);if(V&&g.length<2){let ft=new Zn(16738848,900,60,1.6),pt=i.pointAt((U.s0+U.s1)/2);ft.position.set(pt.x,U.top+4,pt.z),e.add(ft),g.push(ft)}et.userData.animTex=P,e.add(et),U.waterMesh=et}else{let V=[],tt=hd(5);for(let lt=0;lt<22;lt++){let et=U.s0+2+tt()*(U.s1-U.s0-4),ft=(tt()-.5)*2*13,pt=i.pointAt(et,ft),zt=new ln(.9,.38,8,16);zt.rotateX(Math.PI/2+(tt()-.5)*.6),zt.translate(pt.x,ot+.4+lt%3*.3,pt.z),V.push(zt)}let P=new B(ie(V),new j({color:1973790,roughness:.9}));P.castShadow=!0,e.add(P)}for(let V of[-1,1]){let tt=Ho(i.theme,U.liquid),P=ud(tt,U.liquid==="lava"?"#d4380d":U.liquid==="ice"?"#2a6fdb":U.water?"#1f8a3a":"#e0a100");bn(P,i,U.s0-30,V*18,i.baseAt(U.s0-30)),P.rotation.y+=Math.PI,e.add(P)}}let m=new j({map:Pl(),roughness:.85,side:ue}),p=new j({color:5913116,roughness:.9,side:ue});for(let U of i.ramps){let W=Cs(i,U.s0,U.s1),ot=lt=>i.baseAt(lt)+U.h*(lt-U.s0)/(U.s1-U.s0)+.06,gt=mn(i,W,lt=>[[U.d0,ot(lt)],[U.d1,ot(lt)]],(lt,et,ft)=>[(ft-U.d0)/(U.d1-U.d0)*((U.d1-U.d0)/8),(lt-U.s0)/8]),vt=new B(gt,m);vt.receiveShadow=!0,vt.castShadow=!0,e.add(vt);for(let lt of[U.d0,U.d1])Math.abs(lt)>=15||e.add(new B(mn(i,W,et=>[[lt,i.baseAt(et)],[lt,ot(et)]],(et,ft)=>[et,ft]),p));let It=i.pointAt(U.s1,(U.d0+U.d1)/2),V=U.h+.06,tt=new B(new ve(U.d1-U.d0,V),p);tt.position.set(It.x,i.baseAt(U.s1)+V/2,It.z),tt.rotation.y=Math.PI/2-It.th,e.add(tt);let P=new B(new Ct(U.d1-U.d0,.15,.6),new j({color:16761856,emissive:3351040}));bn(P,i,U.s1-.3,(U.d0+U.d1)/2,i.baseAt(U.s1)+U.h+.05),e.add(P)}let _=new j({map:Pl(),color:11569754,roughness:.9}),v=new j({color:14270602,side:ue});for(let U of i.pits)for(let[W,ot]of U.bridges){let gt=[],vt=hd(3);for(let V=U.s0-.5;V<U.s1+.5;V+=.9){let tt=i.pointAt(V,(W+ot)/2),P=new Ct(ot-W+.4,.25,.75);P.rotateY(Math.PI/2-tt.th+(vt()-.5)*.05),P.translate(tt.x,U.top+.17,tt.z),gt.push(P)}for(let V of[W-.1,ot+.1])for(let tt=U.s0;tt<=U.s1+.01;tt+=(U.s1-U.s0)/4){let P=i.pointAt(tt,V),lt=new qt(.15,.18,2.4,6);lt.translate(P.x,U.top+.6,P.z),gt.push(lt)}let It=new B(ie(gt),_);It.castShadow=!0,It.receiveShadow=!0,e.add(It);for(let V of[W-.1,ot+.1]){let tt=Cs(i,U.s0,U.s1),P=mn(i,tt,lt=>{let et=(lt-U.s0)/(U.s1-U.s0),ft=U.top+1.6-Math.sin(et*Math.PI)*.5;return[[V,ft],[V,ft+.12]]},(lt,et)=>[lt,et]);e.add(new B(P,v))}}for(let U of i.lakes){let W=Cs(i,U.s0,U.s1).filter((vt,It,V)=>It%3===0||It===V.length-1),ot=Ll().clone();ot.needsUpdate=!0;let gt=new B(mn(i,W,vt=>{let It=i.baseAt(vt)+.05;return[[-15,It],[0,It],[15,It]]},(vt,It,V)=>[V/14,vt/14]),new j({map:ot,color:15398911,roughness:.12,metalness:.15,transparent:!0,opacity:.9,depthWrite:!1}));gt.renderOrder=1,gt.receiveShadow=!0,e.add(gt);for(let vt of[-1,1]){let It=ud(U.name||"\xA1LAGO HELADO!","#2a6fdb");bn(It,i,U.s0-25,vt*18,i.baseAt(U.s0-25)),It.rotation.y+=Math.PI,e.add(It)}}let y=i.tunnel,A=Cs(i,y.s0,y.s1),S=15+.8,T=7,R=[];R.push([-S,0]);for(let U=0;U<=16;U++){let W=Math.PI-U/16*Math.PI;R.push([Math.cos(W)*S,T+Math.sin(W)*S*.85])}R.push([S,0]);let E=new j({map:hr(),roughness:1,side:ue,color:i.theme.tunnel.inner}),M=new B(mn(i,A,U=>R.map(([W,ot])=>[W,ot+i.baseAt(U)]),(U,W)=>[W/4,U/10]),E);M.receiveShadow=!0,e.add(M);let I=75,H=34,N=(U,W)=>{let ot=Math.sin(U*12.9898+W*78.233)*43758.5453;return ot-Math.floor(ot)},X=U=>{let W=Math.round(U/i.ds),ot=[];for(let gt=0;gt<=20;gt++){let vt=-I+gt/20*2*I,It=Math.abs(vt)/I,V=H*(1-Math.pow(It,1.6));V+=(N(Math.floor(W/6),gt)-.5)*6*(1-It),(gt===0||gt===20)&&(V=-.5),ot.push([vt,Math.max(-.5,V)])}return ot},J=A.filter((U,W)=>W%6===0||W===A.length-1),G=new j({map:hr(),color:i.theme.tunnel.outer,roughness:1,flatShading:!0,side:ue}),ct=new B(mn(i,J,X,(U,W)=>[W/3,U/20]),G);ct.castShadow=!0,ct.receiveShadow=!0,e.add(ct);for(let U of[J[0],J[J.length-1]]){let W=X(U),ot=new pn;ot.moveTo(W[0][0],W[0][1]);for(let[lt,et]of W.slice(1))ot.lineTo(lt,et);ot.lineTo(W[0][0],W[0][1]);let gt=new ys;gt.moveTo(R[0][0],R[0][1]-.3);for(let[lt,et]of R.slice(1))gt.lineTo(lt,et===0?-.3:et);gt.lineTo(R[0][0],R[0][1]-.3),ot.holes.push(gt);let vt=new Oi(ot),It=i.pointAt(U),V=new B(vt,G);V.position.set(It.x,i.baseAt(U),It.z),V.rotation.y=Math.atan2(-It.rz,It.rx),e.add(V);let tt=[];for(let lt=0;lt<=12;lt++){let et=Math.PI-lt/12*Math.PI,ft=new Ct(2.2,2.2,1.6);ft.rotateZ(et-Math.PI/2),ft.translate(Math.cos(et)*(S+.6),T+Math.sin(et)*(S*.85+.6),0),tt.push(ft)}for(let lt of[-1,1]){let et=new Ct(2.2,T,1.6);et.translate(lt*(S+.6),T/2,0),tt.push(et)}let P=new B(ie(tt),new j({color:9274488,roughness:.9,flatShading:!0}));P.position.copy(V.position),P.rotation.y=V.rotation.y,P.castShadow=!0,e.add(P)}let K=[];for(let U=y.s0+6;U<y.s1;U+=12)for(let W of[-6,6]){let ot=i.pointAt(U,W),gt=new Ct(.6,.3,3);gt.rotateY(Math.PI/2-ot.th);let vt=T+Math.sqrt(Math.max(0,S*S-W*W))*.85-.4;gt.translate(ot.x,i.baseAt(U)+vt,ot.z),K.push(gt)}let yt=new B(ie(K),new me({color:16771496}));e.add(yt);let wt=[];for(let U=y.s0+3;U<y.s1;U+=6)for(let W of[-15+.05,15-.05]){let ot=i.pointAt(U,W),gt=new Ct(.2,.25,.8);gt.rotateY(Math.PI/2-ot.th),gt.translate(ot.x,i.baseAt(U)+.9,ot.z),wt.push(gt)}e.add(new B(ie(wt),new me({color:6742271})));{let U=Po().clone();U.repeat.set(5.5,.75),U.needsUpdate=!0;let W=new Jt;bn(W,i,0,0,.06);let ot=new B(new ve(22,3),new j({map:U,roughness:.8}));ot.rotation.x=-Math.PI/2,ot.receiveShadow=!0,W.add(ot),e.add(W)}let Tt=new Jt;bn(Tt,i,0,0,0);let Vt=new j({color:2763312,metalness:.6,roughness:.4});for(let U of[-1,1]){let W=new B(new Ct(1.2,12,1.2),Vt);W.position.set(U*(15+1.5),6,0),W.castShadow=!0,Tt.add(W)}let ee=new B(new Ct(30+4.2,2.6,1.2),Vt);ee.position.y=11,ee.castShadow=!0,Tt.add(ee);for(let U of[-1,1]){let W=new B(new ve(33,2.4),new me({map:Io("META  \xB7  MEGA MONSTRUOS"),side:Rn}));W.position.set(0,11,U*.62),U<0&&(W.rotation.y=Math.PI),Tt.add(W)}let it=[],mt=new B(new Ct(8,2.2,1),new j({color:1118481}));mt.position.set(0,8.6,-.3),Tt.add(mt);for(let U=0;U<3;U++){let W=new B(new _e(.75,16,12),new me({color:3346705}));W.position.set((U-1)*2.4,8.6,-.85),Tt.add(W),it.push(W)}return e.add(Tt),No(e,3e3),t.add(e),{group:e,lights:it,lampMesh:yt,glows:g}}function hd(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ud(i,t){let e=new Jt,n=document.createElement("canvas");n.width=256,n.height=128;let s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,256,128),s.strokeStyle="#111",s.lineWidth=10,s.strokeRect(5,5,246,118),s.fillStyle="#111",s.font="bold 40px Impact, Arial Black, sans-serif",s.textAlign="center",s.textBaseline="middle";for(let a=40;a>16&&s.measureText(i).width>228;a-=2)s.font=`bold ${a}px Impact, Arial Black, sans-serif`;s.fillText(i,128,66);let r=new Qe(n);r.colorSpace=xe;let o=new B(new ve(6,3),new j({map:r,side:ue}));o.position.y=4.5,o.castShadow=!0,e.add(o);for(let a of[-2.4,2.4]){let c=new B(new qt(.12,.12,4.5,6),new j({color:5592405}));c.position.set(a,2.25,.05),e.add(c)}return e}function pd(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Hi=null;function fd(){if(Hi)return Hi;let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,64,128);let e=pd(77);for(let n=6;n<128;n+=16)for(let s=5;s<64;s+=15){let r=e()<.35;t.fillStyle=r?"#ffe9a8":"#2c3a4a",t.fillRect(s,n,9,10)}return Hi=Cl(new Qe(i)),Hi.colorSpace=xe,Hi.wrapS=Hi.wrapT=Pi,Hi}function md(i,t){let e=pd(42),n=t.theme,s=new Ft(n.sky[0]),r=new Ft(n.sky[1]);i.background=r.clone(),i.fog=new xs(n.fog[0],n.fog[1],n.fog[2]);let o=new B(new _e(1800,32,16),new Ve({side:Ce,depthWrite:!1,fog:!1,uniforms:{top:{value:s},horizon:{value:r},sunDir:{value:new D(.5,.6,.3).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; varying vec3 vP;
        void main(){ float h = clamp(vP.y, 0.0, 1.0); vec3 c = mix(horizon, top, pow(h, 0.55));
        float s = max(0.0, dot(vP, sunDir)); c += vec3(1.0,0.9,0.6) * (pow(s, 400.0) * 1.5 + pow(s, 12.0) * 0.18);
        gl_FragColor = vec4(c, 1.0); }`}));o.renderOrder=-1,i.add(o);let a=new Es(n.hemi[0],n.hemi[1],n.hemi[2]);i.add(a);let c=new ki(n.sun[0],n.sun[1]);c.position.set(120,160,70),c.castShadow=!0,c.shadow.mapSize.set(2048,2048);let l=c.shadow.camera;l.left=-75,l.right=75,l.top=75,l.bottom=-75,l.near=10,l.far=500,c.shadow.bias=-5e-4,c.shadow.normalBias=.04,i.add(c),i.add(c.target);let h=Yu();h.repeat.set(220,220);let d=new B(new ve(5e3,5e3),new j({map:h,roughness:1,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=-.08,d.renderOrder=-.5,d.receiveShadow=!0,i.add(d);let u=[];for(let k=0;k<t.N;k+=6)u.push([t.px[k],t.pz[k]]);let f=(k,Y)=>{let nt=1/0;for(let[ut,xt]of u){let L=(k-ut)**2+(Y-xt)**2;L<nt&&(nt=L)}return Math.sqrt(nt)},g=1/0,x=-1/0,m=1/0,p=-1/0;for(let[k,Y]of u)g=Math.min(g,k),x=Math.max(x,k),m=Math.min(m,Y),p=Math.max(p,Y);let _=(g+x)/2,v=(m+p)/2,y=[];for(let k=t.tunnel.s0-10;k<=t.tunnel.s1+10;k+=8){let Y=t.pointAt(k);y.push([Y.x,Y.z])}let A=(k,Y)=>y.some(([nt,ut])=>(k-nt)**2+(Y-ut)**2<6724),S=t.crossings.map(k=>t.pointAt(k.s)),T=(k,Y,nt)=>S.some(ut=>{let xt=k-ut.x,L=Y-ut.z;return Math.abs(xt*ut.tx+L*ut.tz)<nt&&Math.abs(xt*ut.rx+L*ut.rz)<130});if(n.mountains!==null){let k=[];for(let nt=0;nt<40;nt++){let ut=nt/40*Math.PI*2+e()*.1,xt=950+e()*350,L=120+e()*220,at=new Pe(140+e()*160,L,7,1);at.translate(_+Math.cos(ut)*xt,L/2-5,v+Math.sin(ut)*xt),k.push(at)}let Y=new B(ie(k),new j({color:n.mountains,flatShading:!0,roughness:1}));i.add(Y)}if(n.volcano){let k=_+700,Y=v-500,nt=new qt(70,330,380,14,1,!0);nt.translate(k,185,Y),i.add(new B(nt,new j({color:3024934,flatShading:!0,roughness:1})));let ut=new me({color:16734736,fog:!1}),xt=new B(new Yn(68,14).rotateX(-Math.PI/2),ut);xt.position.set(k,372,Y),i.add(xt);let L=[];for(let at=0;at<6;at++){let q=-Math.PI/2-.9+at*.36+e()*.1,Q=new Ct(10+e()*8,330,2);Q.translate(0,-165,0),Q.rotateX(.82),Q.rotateY(-q+Math.PI/2),Q.translate(k+Math.cos(q)*72,370,Y+Math.sin(q)*72),L.push(Q)}i.add(new B(ie(L),ut))}if(n.city){let k=[];for(let nt=0;nt<90;nt++){let ut=e()*Math.PI*2,xt=650+e()*500,L=30+e()*50,at=60+e()*260,q=new Ct(L,at,L*(.6+e()*.6));q.translate(_+Math.cos(ut)*xt,at/2,v+Math.sin(ut)*xt),k.push(q)}let Y=fd().clone();Y.needsUpdate=!0,Y.repeat.set(3,8),i.add(new B(ie(k),new j({map:Y,color:9413560,roughness:.7})))}let R=[];for(let k=0;k<70;k++){let Y=e()*Math.PI*2,nt=520+e()*300,ut=_+Math.cos(Y)*nt,xt=v+Math.sin(Y)*nt;if(f(ut,xt)<120)continue;let L=new _e(40+e()*60,10,6,0,Math.PI*2,0,Math.PI/2);L.scale(1,.35+e()*.4,1),L.translate(ut,-2,xt),R.push(L)}if(R.length&&n.hills!==null){let k=new B(ie(R),new j({color:n.hills,flatShading:!0,roughness:1}));k.receiveShadow=!0,i.add(k)}let E=n.trees,M=new oe,I=new Cn,H={mixed:650,snowpine:650,dead:260,jungle:900,park:140}[E]||400,N=[],X=0;for(;N.length<H&&X<25e3;){X++;let k=_+(e()-.5)*1300,Y=v+(e()-.5)*1200,nt=f(k,Y);nt<15+(E==="jungle"?10:18)||A(k,Y)||n.city&&nt>120||Math.abs(Y)<75&&k>-120&&k<140||N.push([k,Y,.7+e()*.8,e()])}S.length&&N.splice(0,N.length,...N.filter(([k,Y])=>!T(k,Y,12)));let J=(k,Y,nt,ut=1)=>{if(!nt.length)return;let xt=new fi(k,Y,nt.length);nt.forEach(([L,at,q],Q)=>{I.setFromAxisAngle(new D(0,1,0),(L*7.3+at*3.1)%6.28),M.compose(new D(L,0,at),I,new D(q,q*ut,q)),xt.setMatrixAt(Q,M)}),xt.castShadow=!0,xt.receiveShadow=!0;for(let L of Oo(xt))i.add(L)},G=new qt(.4,.6,3,6);G.translate(0,1.5,0);let ct=new j({color:5913378,roughness:1}),K=new Pe(3.2,9,7);K.translate(0,7,0);let yt=new pi(3.4,0);if(yt.translate(0,5.6,0),E==="mixed"||E==="park"){let k=N.filter(nt=>nt[3]<(E==="park"?0:.55)),Y=N.filter(nt=>nt[3]>=(E==="park"?0:.55));J(G,ct,N),J(K,new j({color:3107636,roughness:1,flatShading:!0}),k),J(yt,new j({color:5214010,roughness:1,flatShading:!0}),Y)}else if(E==="snowpine"){J(G,ct,N),J(K,new j({color:2906688,roughness:1,flatShading:!0}),N);let k=new Pe(2.1,4.6,7);k.translate(0,9.6,0),J(k,new j({color:16054524,roughness:.9,flatShading:!0}),N)}else if(E==="dead"){let k=[],Y=new qt(.25,.55,8,5);Y.translate(0,4,0),k.push(Y);for(let[nt,ut,xt]of[[4.5,.9,3],[6,-.8,2.5],[3.2,-1.1,2.2]]){let L=new qt(.1,.2,xt,4);L.translate(0,xt/2,0),L.rotateZ(ut),L.translate(0,nt,0),k.push(L)}J(ie(k),new j({color:1972760,roughness:1,flatShading:!0}),N)}else if(E==="jungle"){let k=N.filter(at=>at[3]<.45),Y=N.filter(at=>at[3]>=.45),nt=new qt(.3,.5,11,6);nt.translate(0,5.5,0),J(nt,new j({color:8018490,roughness:1}),k);let ut=[];for(let at=0;at<7;at++){let q=new Ct(.9,.15,5.5);q.translate(0,0,2.6),q.rotateX(.35),q.rotateY(at/7*Math.PI*2),q.translate(0,11,0),ut.push(q)}J(ie(ut),new j({color:3115562,roughness:1,flatShading:!0}),k);let xt=new qt(.6,1,7,6);xt.translate(0,3.5,0),J(xt,ct,Y);let L=new pi(5,0);L.scale(1.3,.75,1.3),L.translate(0,9,0),J(L,new j({color:2386218,roughness:1,flatShading:!0}),Y)}if(n.city){let k=[],Y=0;for(;k.length<220&&Y<3e4;){Y++;let Q=_+(e()-.5)*1100,Mt=v+(e()-.5)*1e3;f(Q,Mt)<55||A(Q,Mt)||Math.abs(Mt)<90&&Q>-140&&Q<160||k.push([Q,Mt])}let nt=new Ct(1,1,1);nt.translate(0,.5,0);let ut=[12109008,14207152,10465448,13150360,11057368,14735560],xt=fd(),L=k.map(([Q,Mt],bt)=>({x:Q,z:Mt,i:bt,w:18+e()*22,d:18+e()*22,h:20+e()*70,a:e()*.3})).filter(Q=>!T(Q.x,Q.z,8+.75*Math.max(Q.w,Q.d))),at=new fi(nt,new j({map:xt,roughness:.8}),L.length),q=new Ft;L.forEach(({x:Q,z:Mt,w:bt,d:Xt,h:Te,a:Be,i:re},$e)=>{I.setFromAxisAngle(new D(0,1,0),Be),M.compose(new D(Q,0,Mt),I,new D(bt,Te,Xt)),at.setMatrixAt($e,M),at.setColorAt($e,q.setHex(ut[re%ut.length]))}),at.castShadow=!0,at.receiveShadow=!0;for(let Q of Oo(at))i.add(Q)}let wt=new Ui(1.6,0),Tt=wt.attributes.position,Vt=new D,ee=n.rocks===null?0:n.trees==="dead"?360:160,it=new fi(wt,new j({color:n.rocks??9077882,flatShading:!0,roughness:1}),ee);for(let k=0;k<ee;k++){let Y,nt;do Y=_+(e()-.5)*1100,nt=v+(e()-.5)*1e3;while(f(Y,nt)<21||A(Y,nt));let ut=.5+e()*1.6;I.setFromEuler(new cn(e()*3,e()*3,e()*3)),M.compose(new D(Y,0,nt),I,new D(ut,ut*.7,ut));let xt=1/0;for(let L=0;L<Tt.count;L++)xt=Math.min(xt,Vt.fromBufferAttribute(Tt,L).applyMatrix4(M).y);M.elements[13]=-.08-xt,it.setMatrixAt(k,M)}it.castShadow=!0;for(let k of Oo(it))i.add(k);let mt=new j({map:ed(),roughness:.9}),U=new j({color:10134445,roughness:.8}),W=new j({color:12597547,roughness:.6,side:ue}),ot=[];for(let[k,Y]of[[-95,70],[-15,70],[65,60]]){let nt=new Jt;bn(nt,t,k+Y/2,-24,0),nt.updateMatrixWorld(!0);for(let xt=0;xt<6;xt++){let L=new B(new Ct(2.2,1.2+xt*1.2,Y),U);L.position.set(xt*2.2,(1.2+xt*1.2)/2,0),L.castShadow=!0,L.receiveShadow=!0,nt.add(L);let at=[Y/12,.5],q=[e(),xt%2?0:.5],Q=new ve(Y,1.3),Mt=Q.attributes.uv;for(let Xt=0;Xt<Mt.count;Xt++)Mt.setXY(Xt,Mt.getX(Xt)*at[0]+q[0],Mt.getY(Xt)*at[1]+q[1]);let bt=new De;bt.rotation.y=-Math.PI/2,bt.position.set(xt*2.2-1.12,1.2+xt*1.2+.55,0),nt.add(bt),bt.updateMatrixWorld(!0),Q.applyMatrix4(bt.matrixWorld),nt.remove(bt),ot.push(Q)}let ut=new B(new Ct(15,.4,Y+2),W);ut.position.set(6,12,0),ut.rotation.z=-.12,ut.castShadow=!0,nt.add(ut);for(let xt of[-Y/2,0,Y/2]){let L=new B(new Ct(.5,12,.5),U);L.position.set(13,6,xt),nt.add(L)}Fo(nt),i.add(nt)}let gt=new B(ie(ot),mt);gt.geometry.computeBoundingSphere(),i.add(gt);let vt=gt.geometry.attributes.position;vt.setUsage($n);let It=Float32Array.from({length:vt.count},(k,Y)=>vt.getY(Y)),V=new Float32Array(ot.length),tt=[],P=[15087942,16766474,2792948,3065014,15817653,16752412],lt=[];for(let k=20;k<t.length;k+=45)if(!(t.inTunnel(k)||t.inTunnel(k+20)||t.inTunnel(k-20))&&!t.crossings.some(Y=>Math.abs(k-Y.s)<12))for(let Y of[-1,1]){let nt=t.pointAt(k,Y*(15+2.2)),ut=t.baseAt(k),xt=new qt(.08,.08,6,5);xt.translate(nt.x,ut+3,nt.z),tt.push(xt);let L=P[Math.floor(e()*P.length)];lt.push({x:nt.x,y:ut+6,z:nt.z,a:e()*6,phase:e()*6,color:new Ft(L)})}let et=new ye,ft=new Float32Array(lt.length*9),pt=new Float32Array(lt.length*9),zt=new Float32Array(lt.length*9);lt.forEach((k,Y)=>{for(let nt=0;nt<3;nt++)zt.set([k.color.r,k.color.g,k.color.b],Y*9+nt*3)}),et.setAttribute("position",new pe(ft,3).setUsage($n)),et.setAttribute("normal",new pe(pt,3).setUsage($n)),et.setAttribute("color",new pe(zt,3));let Dt=[[0,0],[0,-1.6],[2.4,-.8]],C=()=>{lt.forEach((k,Y)=>{let nt=Math.cos(k.a),ut=Math.sin(k.a);for(let xt=0;xt<3;xt++){let L=Y*9+xt*3,[at,q]=Dt[xt];ft[L]=k.x+at*nt,ft[L+1]=k.y+q,ft[L+2]=k.z-at*ut,pt[L]=ut,pt[L+1]=0,pt[L+2]=nt}}),et.attributes.position.needsUpdate=!0,et.attributes.normal.needsUpdate=!0};if(C(),lt.length){let k=new B(et,new j({vertexColors:!0,side:ue}));k.frustumCulled=!1,i.add(k)}i.add(new B(ie(tt),new j({color:14540253,metalness:.5})));let b=new qt(1.05,1.05,.6,12,1,!1),z=[];for(let k of t.segs){if(k.type!=="A")continue;let Y=k.ang>0?-1:1;for(let nt=6;nt<k.length-4;nt+=4.5){let ut=k.s0+nt;if(t.inTunnel(ut))continue;let xt=t.pointAt(ut,Y*(15+1.9));for(let L=0;L<3;L++){let at=b.clone();at.translate(xt.x,t.baseAt(ut)+.32+L*.62,xt.z),z.push(at)}}}let st=new B(ie(z),new j({color:1907997,roughness:.9}));st.castShadow=!0,i.add(st),No(i,3e3);let ht=[];for(let k=0;k<26;k++){let Y=_+(e()-.5)*2200,nt=v+(e()-.5)*2200,ut=260+e()*140;for(let xt=0;xt<5;xt++){let L=new pi(25+e()*25,1);L.scale(1.6,.6,1),L.translate(Y+(xt-2)*35+e()*10,ut+e()*12,nt+e()*25),ht.push(L)}}let rt=n.volcano?[3814452,6961706]:[16777215,12572394],Ot=new B(ie(ht),new j({color:rt[0],emissive:rt[1],emissiveIntensity:.55,flatShading:!0,roughness:1,fog:!1}));i.add(Ot);let Et=new Jt,Lt=new B(new _e(8,20,14),new j({color:15921906,roughness:.5}));Lt.scale.set(2.6,1,1),Et.add(Lt);let Kt=new B(new ve(30,4),new me({map:Io("MEGA MONSTRUOS"),side:ue}));Kt.position.set(0,-2,8.05),Et.add(Kt);let dt=Kt.clone();dt.position.z=-8.05,dt.rotation.y=Math.PI,Et.add(dt);for(let k of[-4,4]){let Y=new B(new Ct(6,5,.4),new j({color:13904416}));Y.position.set(-18,0,0),Y.rotation.x=k>0?0:Math.PI/2,Et.add(Y)}let Ut=new B(new Ct(6,2,2.5),new j({color:3355443}));Ut.position.y=-8.5,Et.add(Ut),i.add(Et);let Wt=0;return{sun:c,hemi:a,sky:o,baseHemi:a.intensity,baseSun:c.intensity,setShadowSize(k){c.shadow.mapSize.x!==k&&(c.shadow.mapSize.set(k,k),c.shadow.map&&(c.shadow.map.dispose(),c.shadow.map=null))},focus(k){c.target.position.set(k.x,k.y,k.z),c.position.set(k.x+120,k.y+160,k.z+70),c.target.updateMatrixWorld()},update(k){Wt+=k;for(let nt of lt)nt.a+=Math.sin(Wt*3+nt.phase)*.01;C();for(let nt=0;nt<V.length;nt++)V[nt]+=Math.sin(Wt*9+nt*1.7)*.006;for(let nt=0;nt<vt.count;nt++)vt.setY(nt,It[nt]+V[nt>>2]);vt.needsUpdate=!0;let Y=Wt*.03;Et.position.set(_+Math.cos(Y)*380,120,v+Math.sin(Y)*300),Et.rotation.y=-Y-Math.PI/2+Math.PI}}}var hn=[{id:"trituradora",size:1,style:"pickup",name:"Trituradora",num:1,color:14099998,accent:1907997,rim:14211288,deco:"saw",stats:{speed:3,accel:3,handling:3,weight:3},desc:"Equilibrada, con dos sierras que giran en el morro. Ideal para empezar."},{id:"megalodon",size:1.15,style:"shark",name:"Megalod\xF3n",num:2,color:2060241,accent:15921906,rim:16777215,deco:"shark",stats:{speed:5,accel:2,handling:2,weight:3},desc:"La velocidad punta m\xE1s alta, pero cuesta hacerle girar."},{id:"escorpion",size:.9,style:"buggy",name:"Escorpi\xF3n",num:3,color:8311585,accent:1776411,rim:2236962,deco:"scorpion",stats:{speed:2,accel:4,handling:5,weight:1},desc:"Sale disparado y gira como nadie. Ligero: los golpes le afectan m\xE1s."},{id:"mamut",size:1.32,style:"hauler",name:"Mamut",num:4,color:9132587,accent:15918793,rim:13214826,deco:"mammoth",stats:{speed:3,accel:2,handling:2,weight:5},desc:"Pesad\xEDsimo: troncos y empujones apenas le frenan."},{id:"relampago",size:.82,style:"wedge",name:"Rel\xE1mpago",num:5,color:16763904,accent:1118481,rim:1118481,deco:"bolt",stats:{speed:4,accel:4,handling:3,weight:1},desc:"R\xE1pido y \xE1gil, pero ligero como una pluma."},{id:"dragon",size:1.12,style:"dragon",name:"Drag\xF3n",num:6,color:8072383,accent:3794489,rim:3794489,deco:"dragon",stats:{speed:4,accel:3,handling:2,weight:3},desc:"Escamas, cuernos y alas. Corre mucho y aguanta bien los golpes."}],gd={pickup:{shell:[[-2.35,0],[2.45,0],[2.55,.45],[2.35,.85],[.95,.98],[.35,1.78],[-.85,1.82],[-1.05,1],[-2.35,1.02]],glass:[[.99,1],[.4,1.76],[-.8,1.76],[-.98,1.04]],w:2.1,roofY:1.82,roofZ:-.25,noseZ:2.48,tailZ:-2.45,hlY:.62,tlY:.75,bar:!0,exhaust:!0},shark:{shell:[[-2.6,0],[2.75,0],[2.95,.25],[1.7,.85],[.55,1.6],[-.95,1.7],[-1.4,1.05],[-2.6,1.1]],glass:[[1.45,.98],[.55,1.58],[-.9,1.66],[-1.15,1.1]],w:2.15,roofY:1.68,roofZ:-.3,noseZ:2.9,tailZ:-2.7,hlY:.35,tlY:.8,bar:!1,exhaust:!0},buggy:{shell:[[-2.05,0],[2.3,0],[2.45,.45],[1.2,.75],[-1.2,.75],[-1.35,1.15],[-2.05,1.15]],glass:null,w:1.9,roofY:2.15,roofZ:-.1,noseZ:2.4,tailZ:-2.1,hlY:.45,tlY:.85,bar:!0,exhaust:!1,cage:!0},hauler:{shell:[[-2.4,0],[2.55,0],[2.6,1.05],[1.45,1.15],[1.15,2.15],[-.85,2.2],[-1.15,1.25],[-2.4,1.3]],glass:[[1.2,1.2],[1,2],[-.7,2.06],[-.95,1.3]],w:2.45,roofY:2.2,roofZ:.1,noseZ:2.6,tailZ:-2.45,hlY:.75,tlY:.95,bar:!0,exhaust:!0,grille:!0},wedge:{shell:[[-2.4,0],[2.6,0],[2.7,.25],[.95,.72],[.15,1.32],[-1,1.34],[-1.55,.92],[-2.4,.95]],glass:[[.92,.75],[.18,1.3],[-.95,1.3],[-1.35,.95]],w:2.05,roofY:1.34,roofZ:-.4,noseZ:2.7,tailZ:-2.45,hlY:.3,tlY:.7,bar:!1,exhaust:!1,spoiler:!0},dragon:{shell:[[-2.45,0],[2.5,0],[2.75,.5],[2.05,.95],[.85,1.05],[.3,1.88],[-.9,1.92],[-1.2,1.12],[-2.45,1.2]],glass:[[.88,1.07],[.35,1.85],[-.85,1.86],[-1.12,1.15]],w:2.2,roofY:1.92,roofZ:-.3,noseZ:2.6,tailZ:-2.55,hlY:.65,tlY:.9,bar:!1,exhaust:!0,eyes:!0}},mi=1.1,dr=.95,Nl=1.6,zo=1.75,Ol=2,Go=null;function wy(){if(Go)return Go;let i=new qt(mi,mi,dr,22,1);i.rotateZ(Math.PI/2);let t=[];for(let f=0;f<14;f++){let g=f/14*Math.PI*2;for(let x of[-1,1]){let m=new Ct(dr*.48,.22,.3);m.translate(x*dr*.26,mi+.03,x*.08),m.rotateX(g+x*.12),t.push(m)}}let e=ie(t),n=new j({color:2236962,roughness:.95}),s=new j({map:$u(),roughness:.95}),r=new j({map:Ju(),roughness:.9}),o=new qt(.58,.58,dr+.06,18);o.rotateZ(Math.PI/2);let a=new qt(.2,.26,dr+.2,8);a.rotateZ(Math.PI/2);let c=new j({color:13620182,metalness:.9,roughness:.25}),l=new j({color:1842207,metalness:.4,roughness:.6}),h=new j({color:1053980,metalness:.6,roughness:.15}),d=new j({color:16777198,emissive:16773808,emissiveIntensity:1.2}),u=new j({color:16720418,emissive:11141120,emissiveIntensity:1});return Go={tire:i,lugGeo:e,rubber:n,tread:s,side:r,rimGeo:o,hubGeo:a,chrome:c,dark:l,glass:h,headlight:d,taillight:u},Go}function xd(i,t,e=.08){let n=new pn;n.moveTo(i[0][0],i[0][1]);for(let[r,o]of i.slice(1))n.lineTo(r,o);n.closePath();let s=new vs(n,{depth:t,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:4});return s.translate(0,0,-t/2),s.rotateY(-Math.PI/2),s}var Me=(i,t,e=!0)=>{let n=new B(i,t);return n.castShadow=e,n};function Vo(i){let t=wy(),e=new Jt,n=new Jt;n.position.y=Ol,e.add(n);let s=new j({color:i.color,metalness:.2,roughness:.42}),r=new j({color:i.accent,metalness:.25,roughness:.45}),o=new j({color:i.rim,metalness:.8,roughness:.3}),a=gd[i.style]||gd.pickup,c=Me(xd(a.shell,a.w),s);if(n.add(c),a.glass){let x=Me(xd(a.glass,a.w+.2,0),t.glass,!1);n.add(x)}let l=Me(new Ct(1.7,.45,4.6),t.dark);l.position.y=-.3,n.add(l);for(let x of[-1,1]){let m=Me(new Ct(.03,.22,4.4),r,!1);m.position.set(x*(a.w/2+.09),.5,.05),n.add(m);let p=new B(new ve(.85,.85),new j({map:td(i.num,"#"+new Ft(i.color).getHexString(),"#"+new Ft(i.accent).getHexString()),transparent:!0}));p.position.set(x*(a.w/2+.11),.55,-1.6),p.rotation.y=x*Math.PI/2,n.add(p)}let h=Me(new Ct(.5,.03,1.15),r,!1);h.position.set(0,a.roofY+.09,a.roofZ),a.glass&&n.add(h);for(let x of[-1,1]){let m=Me(new Ct(.45,.25,.1),t.headlight,!1);m.position.set(x*.7,a.hlY,a.noseZ),n.add(m);let p=Me(new Ct(.35,.22,.1),t.taillight,!1);p.position.set(x*.75,a.tlY,a.tailZ),n.add(p)}if(a.bar){let x=Me(new Ct(1.7,.16,.25),t.dark);x.position.set(0,a.roofY+.16,a.roofZ+.5),n.add(x);for(let m=0;m<4;m++){let p=Me(new Ct(.28,.2,.08),t.headlight,!1);p.position.set(-.6+m*.4,a.roofY+.16,a.roofZ+.65),n.add(p)}}if(a.exhaust){let x=i.style==="hauler";for(let m of[-1,1]){let p=Me(new qt(x?.16:.11,x?.18:.13,x?2.6:1.6,10),t.chrome);p.position.set(m*(a.w/2-.2),x?2.2:1.55,x?.95:-1.2),n.add(p)}}if(a.cage){let x=(v,y,A=.08)=>{let S=new D(...v),T=new D(...y),R=S.distanceTo(T),E=Me(new qt(A,A,R,8),t.chrome);E.position.copy(S).add(T).multiplyScalar(.5),E.quaternion.setFromUnitVectors(new D(0,1,0),T.clone().sub(S).normalize()),n.add(E)},m=a.w/2-.15,p=a.roofY;for(let v of[-m,m])x([v,.75,1.15],[v*.85,p,.2]),x([v*.85,p,.2],[v*.85,p,-1]),x([v*.85,p,-1],[v,1.15,-1.4]);x([-m*.85,p,.2],[m*.85,p,.2]),x([-m*.85,p,-1],[m*.85,p,-1]);let _=Me(new Ct(.8,.9,.25),t.dark);_.position.set(0,1.2,-.75),_.rotation.x=-.15,n.add(_)}if(a.grille){let x=Me(new Ct(1.8,.85,.12),t.chrome);x.position.set(0,.55,a.noseZ+.02),n.add(x);for(let m=0;m<6;m++){let p=Me(new Ct(.1,.7,.06),t.dark,!1);p.position.set(-.75+m*.3,.55,a.noseZ+.09),n.add(p)}}if(a.spoiler){let x=Me(new Ct(a.w+.3,.08,.6),r);x.position.set(0,1.75,-2.15),x.rotation.x=.12,n.add(x);for(let m of[-.7,.7]){let p=Me(new Ct(.1,.8,.25),r);p.position.set(m,1.33,-2.1),n.add(p)}}if(a.eyes){let x=new j({color:11206502,emissive:6749986,emissiveIntensity:1.6});for(let m of[-1,1]){let p=Me(new _e(.16,10,8),x,!1);p.scale.set(1.4,.7,.6),p.position.set(m*.55,.88,a.noseZ-.12),n.add(p)}}let d=Me(new Ct(2,.18,.18),t.chrome);d.position.set(0,.2,a.noseZ+.14),n.add(d);for(let x of[-.6,.6]){let m=Me(new Ct(.14,.6,.14),t.chrome);m.position.set(x,.35,a.noseZ+.14),n.add(m)}let u=[];for(let x of[zo,-zo]){let m=Me(new qt(.16,.16,Nl*2,8),t.dark);m.rotation.z=Math.PI/2,m.position.set(0,mi,x),e.add(m);let p=Me(new _e(.38,10,8),t.dark);p.position.set(0,mi,x),e.add(p);for(let _ of[Nl,-Nl]){let v=new Jt;v.position.set(_,mi,x);let y=new Jt;v.add(y),y.add(Me(t.tire,[t.tread,t.side,t.side])),y.add(Me(t.lugGeo,t.rubber));let A=Me(t.rimGeo,o,!1);y.add(A);let S=Me(t.hubGeo,t.chrome,!1);y.add(S),e.add(v),u.push({pivot:v,spin:y,front:x>0})}}let f=[];for(let x of[zo-.35,-zo+.35])for(let m of[-1,1]){let p=Me(new qt(.11,.11,1,8),new j({color:i.accent===1118481?16763904:16742912,metalness:.5,roughness:.4}));p.position.set(m*.95,0,x),p.rotation.z=m*.35,e.add(p),f.push(p)}let g=[];return Ty(i,n,s,r,t,g),e.traverse(x=>{x.isMesh&&(x.receiveShadow=!1)}),Fo(n,new Set(g.map(x=>x.obj))),e.scale.setScalar(i.size||1),{root:e,body:n,wheels:u,shocks:f,spinners:g,paint:s}}function Ty(i,t,e,n,s,r){let o=new j({color:16052712,roughness:.5}),a=new j({color:855309,roughness:.4});switch(i.deco){case"saw":{let c=new pn,l=18,h=.62,d=.78;for(let f=0;f<l;f++){let g=f/l*Math.PI*2,x=(f+.6)/l*Math.PI*2;c[f===0?"moveTo":"lineTo"](Math.cos(g)*h,Math.sin(g)*h),c.lineTo(Math.cos(x)*d,Math.sin(x)*d)}c.closePath();let u=new vs(c,{depth:.06,bevelEnabled:!1});u.translate(0,0,-.03),u.rotateY(Math.PI/2);for(let f of[-.55,.55]){let g=new B(u,s.chrome);g.position.set(f,.35,2.75),g.castShadow=!0,t.add(g),r.push({obj:g,axis:"x",speed:25})}for(let f=0;f<6;f++){let g=new B(new Pe(.12,.32,4),o);g.position.set(-.75+f*.3,.72,2.53),g.rotation.x=Math.PI,t.add(g)}break}case"shark":{let c=new pn;c.moveTo(-.7,0),c.quadraticCurveTo(-.2,.6,-.55,1.45),c.quadraticCurveTo(.3,.7,.55,0),c.closePath();let l=new vs(c,{depth:.14,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});l.translate(0,0,-.07),l.rotateY(-Math.PI/2);let h=new B(l,e);h.position.set(0,1.84,-.35),h.castShadow=!0,t.add(h);let d=new B(new Ct(1.9,.35,.08),new j({color:9048080}));d.position.set(0,.35,2.5),t.add(d);for(let u=0;u<9;u++)for(let f of[1,-1]){let g=new B(new Pe(.09,.22,4),o);g.position.set(-.85+u*.21,.35+f*.08,2.55),g.rotation.x=f>0?Math.PI:0,t.add(g)}for(let u of[-1,1]){let f=new B(new _e(.22,12,8),o);f.position.set(u*1.08,.72,1.85),t.add(f);let g=new B(new _e(.12,10,8),a);g.position.set(u*1.25,.72,1.9),t.add(g);for(let x=0;x<3;x++){let m=new B(new Ct(.03,.45,.06),new j({color:801914}));m.position.set(u*1.13,.55,1.2-x*.22),t.add(m)}}break}case"scorpion":{let c=new tr(new D(0,1.05,-2),new D(0,3.4,-3.4),new D(0,4.6,-.6),new D(0,3.3,.45)),l=12;for(let f=0;f<l;f++){let g=f/(l-1),x=c.getPoint(g),m=.46-g*.24,p=new B(new _e(m,12,10),f%2?n:e);p.position.copy(x),p.castShadow=!0,t.add(p)}let h=c.getPoint(1),d=c.getTangent(1),u=new B(new Pe(.2,.8,8),a);u.position.copy(h).addScaledVector(d,.45),u.quaternion.setFromUnitVectors(new D(0,1,0),d),t.add(u);for(let f of[-1,1]){let g=new B(new Ct(.28,.28,.9),n);g.position.set(f*.75,.45,2.85),t.add(g);for(let x of[-1,1]){let m=new B(new Pe(.14,.7,6),e);m.position.set(f*.75+x*.16,.45,3.45),m.rotation.x=Math.PI/2,m.rotation.z=-x*.35,t.add(m)}}break}case"mammoth":{let c=new j({color:16051414,roughness:.4});for(let l of[-1,1]){let h=new B(new ln(.85,.13,8,18,Math.PI*.85),c);h.rotation.y=Math.PI/2,h.rotation.z=Math.PI*1.08,h.position.set(l*.75,.6,2.55+.75),h.castShadow=!0,t.add(h);let d=new B(new _e(.75,12,10),new j({color:5913116,roughness:.9}));d.scale.set(.15,1,.8),d.position.set(l*1.15,1,1.3),t.add(d)}for(let l=0;l<5;l++){let h=new B(new qt(.22-l*.025,.24-l*.025,.4,10),e);h.position.set(0,.7-l*.28,2.65+Math.sin(l*.5)*.25),h.rotation.x=.3-l*.12,t.add(h)}for(let l=0;l<16;l++){let h=new B(new Pe(.1,.45,5),new j({color:4860946}));h.position.set(-.6+l%4*.4,1.95,-.7+Math.floor(l/4)*.3),h.rotation.x=-.5,t.add(h)}break}case"bolt":{let c=new pn;c.moveTo(1.4,.95),c.lineTo(.2,.45),c.lineTo(.55,.45),c.lineTo(-1.6,.05),c.lineTo(-.2,.6),c.lineTo(-.55,.6),c.closePath();let l=new Oi(c);for(let d of[-1,1]){let u=new B(l,n);u.rotation.y=d*Math.PI/2,u.position.set(d*1.17,.05,0),t.add(u)}let h=new B(new Ct(2.4,.08,.7),n);h.position.set(0,2,-2.15),h.rotation.x=-.15,h.castShadow=!0,t.add(h);for(let d of[-.8,.8]){let u=new B(new Ct(.1,.95,.3),n);u.position.set(d,1.5,-2.15),t.add(u)}break}case"dragon":{for(let c=0;c<8;c++){let l=new B(new Pe(.17,.55,6),n),h=.25-c*.33,d=h>-.9?1.88:1.08;l.position.set(0,d+.25,h),l.rotation.x=-.4,t.add(l)}for(let c of[-1,1]){let l=new B(new Pe(.16,.9,8),new j({color:15656652}));l.position.set(c*.65,2.15,.35),l.rotation.x=-.9,l.rotation.z=-c*.3,t.add(l);let h=new pn;h.moveTo(0,0),h.lineTo(1.6,.5),h.lineTo(1.3,.05),h.lineTo(1.7,-.2),h.lineTo(1.1,-.35),h.lineTo(1.2,-.7),h.lineTo(.2,-.5),h.closePath();let d=new B(new Oi(h),new j({color:i.accent,side:ue,emissive:670218}));d.position.set(c*1.1,1.1,-1.4),d.rotation.y=c>0?0:Math.PI,d.rotation.z=.5,d.rotation.order="YZX",d.castShadow=!0,t.add(d);let u=new B(new _e(.15,10,8),new j({color:16772608,emissive:11175936}));u.position.set(c*.6,.86,2.3),t.add(u)}break}}}function fr(i,{wheelSpin:t,steer:e,comp:n,dt:s}){for(let o of i.wheels)o.spin.rotation.x+=t,o.front&&(o.pivot.rotation.y=e*.45);i.body.position.y=Ol-n;let r=Ol-n-.15;for(let o of i.shocks){let a=r-1.1500000000000001;o.scale.y=Math.max(.3,a/Math.cos(.35)),o.position.y=1.15+a/2}for(let o of i.spinners)o.obj.rotation[o.axis]+=o.speed*s}var yd=24,pr=2,vd=2.3,Ay={road:1,ramp:1,bridge:.92,grass:.74,mud:.5,ice:1,pit:1,water:1},gi=(i,t,e)=>i<t?t:i>e?e:i;var Wo=class{constructor(t,e,n=!1){this.def=t,this.track=e,this.isPlayer=n,this.size=t.size||1;let s=t.stats;this.maxSpeed=31+s.speed*2.3,this.accel=8+s.accel*2.3,this.turnRate=1.1+s.handling*.17,this.grip=3.2+s.handling*.7,this.mass=.8+s.weight*.3,this.stunMul=1.3-s.weight*.1,this.speedMul=1,this.parts=Vo(t),this.mesh=this.parts.root,this.events=[],this.reset()}reset(){this.x=0,this.y=0,this.z=0,this.th=0,this.vx=0,this.vz=0,this.vy=0,this.onGround=!0,this.groundH=0,this.wasGround=!0,this.idx=-1,this.s=0,this.d=0,this.prevS=0,this.lap=0,this.checkpoint=!0,this.finished=!1,this.finishTime=0,this.lapStart=0,this.lapTimes=[],this.place=1,this.stall=0,this.rev=0,this.boost=0,this.stun=0,this.spin=0,this.spinT=0,this.spinDur=0,this.state="ok",this.stateTimer=0,this.fall=null,this.comp=0,this.compV=0,this.pitch=0,this.roll=0,this.item=null,this.itemRoll=0,this.invuln=0,this.blink=0,this.hitCool=0,this.wrongT=0,this.stuckT=0,this.airT=0,this.surf="road",this.control={steer:0,throttle:0,brake:0},this.vF=0,this.accelVis=0,this.steerVis=0,this.lastSlopeV=0,this.netCaught=null,this.cool={}}get speed(){return Math.hypot(this.vx,this.vz)}get progress(){return this.lap*this.track.length+this.s}placeAt(t,e,n=0){let s=this.track.pointAt(t,e);this.x=s.x,this.z=s.z,this.th=s.th;let r=this.track.project(this.x,this.z,-1);this.idx=r.i,this.s=r.s,this.d=r.d,this.prevS=r.s;let o=this.track.surfaceAt(this.s,this.d);this.y=o.h,this.groundH=o.h,this.vx=Math.cos(this.th)*n,this.vz=Math.sin(this.th)*n,this.vy=0,this.onGround=!0,this.wasGround=!0,this.state="ok",this.stun=0,this.spinDur=0,this.spin=0,this.pitch=0,this.roll=0,this.syncMesh(0)}respawn(t,e=0,n=10){for(let s of this.track.pits)this.track.ahead(s.s0-4,t)<s.s1-s.s0+8&&(t=s.respawnS);this.placeAt(t,gi(e,-8,8),n),this.invuln=1.6,this.blink=1.6,this.events.push({type:"respawn"})}hit({dirX:t=0,dirZ:e=0,push:n=0,up:s=0,speedMul:r=1,stun:o=0,kind:a="hit"}){if(this.invuln>0||this.hitCool>0||this.state!=="ok")return!1;let c=this.stunMul;return this.vx*=r,this.vz*=r,this.vx+=t*n*c,this.vz+=e*n*c,s>0&&(this.vy=Math.max(this.vy,s*Math.min(1.2,c)),this.onGround=!1),o>0&&(this.stun=Math.max(this.stun,o*c),this.spinDur=this.stun,this.spinT=0),this.hitCool=.9,this.events.push({type:a}),!0}catchNet(t){return this.state!=="ok"||this.invuln>0?!1:(this.state="caught",this.stateTimer=1.1,this.netCaught=t,this.events.push({type:"net"}),!0)}useItem(t){if(!this.item||this.itemRoll>0||this.state!=="ok")return;let e=this.item;this.item=null,e==="nitro"?(this.boost=Math.max(this.boost,2.2),this.events.push({type:"nitro"})):e==="jump"?(this.vy=Math.max(this.vy,this.onGround?13:10),this.onGround=!1,this.wasGround=!1,this.invuln=Math.max(this.invuln,.6),this.events.push({type:"jump"})):e==="wave"?(t.shockwave(this),this.events.push({type:"wave"})):(e==="tire"||e==="barrel"||e==="rocket")&&(t.projectiles.launch(e,this),this.events.push({type:e==="rocket"?"rocket":"throw"}))}update(t,e,n){let s=this.track;if(this.control=e,this.prevS=this.s,this.boost=Math.max(0,this.boost-t),this.invuln=Math.max(0,this.invuln-t),this.blink=Math.max(0,this.blink-t),this.hitCool=Math.max(0,this.hitCool-t),this.stun>0&&(this.stun=Math.max(0,this.stun-t)),this.stall>0&&(this.stall=Math.max(0,this.stall-t)),this.spinDur>0)if(this.spinT+=t,this.spinT>=this.spinDur)this.spinDur=0,this.spin=0;else{let T=this.spinT/this.spinDur;this.spin=Math.PI*2*(1-(1-T)*(1-T))}if(this.itemRoll>0&&(this.itemRoll-=t,this.itemRoll<=0&&(this.itemRoll=0,this.item=n.rollItem(this),this.events.push({type:"gotItem"}))),this.state==="fallen"){this.updateFallen(t);return}let r=this.stun>0||this.state==="caught",o=Math.cos(this.th),a=Math.sin(this.th),c=this.vx*o+this.vz*a,l=r?0:e.steer;if(this.steerVis+=(l-this.steerVis)*Math.min(1,t*10),this.onGround){let T=gi(Math.abs(c)/9,0,1),R=gi(Math.abs(c)/this.maxSpeed,0,1.3),E=l*this.turnRate*T*(1-.32*R)*(this.surf==="mud"?.8:this.surf==="ice"?.6:1);this.th+=E*t*(c>=-.5?1:-1)}else this.th+=l*.9*t;o=Math.cos(this.th),a=Math.sin(this.th);let h=-a,d=o;c=this.vx*o+this.vz*a;let u=this.vx*h+this.vz*d,f=c;if(this.onGround){let T=Ay[this.surf]??1,R=this.maxSpeed*this.speedMul*T*(this.boost>0?1.32:1),E=r||this.stall>0?0:e.throttle,M=r?0:e.brake;if(E>0&&c<R){let H=this.accel*E*(this.boost>0?2.2:1)*(c<0?2:1)*(1-.35*gi(c/R,0,1));c=Math.min(R,c+H*t)}if(M>0&&(c>1?c-=32*M*t:c=Math.max(-13,c-this.accel*.6*M*t)),c>R&&(c=Math.max(R,c-((c-R)*1.3+2)*t)),E===0&&M===0){let H=(2.5+Math.abs(c)*.04+(r?8:0))*t;c=Math.abs(c)<=H?0:c-Math.sign(c)*H}let I=this.grip*(this.surf==="mud"?.35:this.surf==="ice"?.1:1)*(r?.35:1);u*=Math.exp(-I*t)}else c*=Math.exp(-.05*t);this.state==="caught"&&(c*=Math.exp(-7*t),u*=Math.exp(-7*t),this.stateTimer-=t,this.stateTimer<=0&&(this.state="ok",this.netCaught=null,this.invuln=.8,this.blink=.8)),this.accelVis+=((c-f)/Math.max(t,1e-4)-this.accelVis)*Math.min(1,t*6),this.vF=c,this.vx=o*c+h*u,this.vz=a*c+d*u;let g=this.x,x=this.z,m=this.idx,p=this.s,_=this.d;this.x+=this.vx*t,this.z+=this.vz*t;let v=s.project(this.x,this.z,this.idx);this.idx=v.i,this.s=v.s,this.d=v.d;let y=15-pr*this.size;if(Math.abs(this.d)>y){let T=Math.sign(this.d),R=Math.abs(this.d)-y,E=s.pointAt(this.s);this.x-=E.rx*R*T,this.z-=E.rz*R*T,this.d=T*y;let M=(this.vx*E.rx+this.vz*E.rz)*T;M>0&&(this.vx-=E.rx*T*M*1.35,this.vz-=E.rz*T*M*1.35,M>5&&this.events.push({type:"scrape",v:M}));let I=Math.exp(-.8*t);this.vx*=I,this.vz*=I}let A=s.surfaceAt(this.s,this.d);if(A.h-this.y>.9){let T=s.surfaceAt(this.s,_).h-this.y>.9;this.x=g,this.z=x,this.idx=m,this.s=p,this.d=_;let R=s.pointAt(this.s);if(T){let E=this.vx*R.tx+this.vz*R.tz;this.vx-=R.tx*E*1.2,this.vz-=R.tz*E*1.2}else{let E=this.vx*R.rx+this.vz*R.rz;this.vx-=R.rx*E*1.3,this.vz-=R.rz*E*1.3}this.speed>6&&this.events.push({type:"wall"}),A=s.surfaceAt(this.s,this.d)}let S=A.h;if(this.vy-=yd*t,this.y+=this.vy*t,this.y<=S){if(this.onGround){let T=gi((S-this.groundH)/t,-30,16);this.vy=Math.max(this.vy,T);let R=T-this.lastSlopeV;R>4&&(this.compV-=R*.01),this.lastSlopeV=T}else{let T=-this.vy;T>6&&(this.compV-=Math.min(T,22)*.11,this.events.push({type:"land",v:T})),this.vy=0}this.y=S,this.onGround=!0,this.airT=0}else this.onGround=!1,this.lastSlopeV=0,this.airT+=t;this.groundH=S,this.surf=A.type,(A.type==="pit"||A.type==="water")&&this.y<A.top-1.4&&(this.state="fallen",this.stateTimer=A.type==="water"?2.1:1.7,this.fall={pit:A.pit,water:A.type==="water",floor:A.h,splashed:!1},this.events.push({type:A.type==="water"?"fallWater":"fallPit",liquid:A.pit?.liquid})),this.updateLap(n),this.updateMisc(t,s,v)}updateFallen(t){this.stateTimer-=t;let e=this.fall;this.vx*=Math.exp(-3*t),this.vz*=Math.exp(-3*t),this.x+=this.vx*t,this.z+=this.vz*t,this.vy-=yd*t,this.y+=this.vy*t,e.water?(this.y<e.floor&&!e.splashed&&(e.splashed=!0,this.events.push({type:"splash"}),this.vy=-2),this.y<e.floor&&(this.vy=Math.max(this.vy,-1.2))):this.y<e.floor&&(this.vy<-6&&this.events.push({type:"land",v:-this.vy}),this.y=e.floor,this.vy=0),this.pitch+=(.5-this.pitch)*Math.min(1,t*2),this.syncMesh(t),this.stateTimer<=0&&this.respawn(e.pit.respawnS,0,12)}updateLap(t){let e=this.track.length;this.prevS>e*.75&&this.s<e*.25?this.checkpoint&&(this.lap++,this.checkpoint=!1,t.onLap(this)):this.prevS<e*.25&&this.s>e*.75&&(this.lap--,this.checkpoint=!0),this.s>e*.4&&this.s<e*.6&&(this.checkpoint=!0)}updateMisc(t,e,n){if(Math.cos(this.th-n.th)<-.4&&this.vF>3?this.wrongT+=t:this.wrongT=0,this.control.throttle>0&&this.speed<2&&this.state==="ok"?this.stuckT+=t:this.stuckT=0,this.compV+=(-95*this.comp-9*this.compV)*t,this.comp+=this.compV*t,this.comp<-.3&&(this.comp=-.3,this.compV=0),this.comp>.55&&(this.comp=.55,this.compV=0),this.onGround){let r=this.th-n.th,o=Math.cos(r),a=Math.sin(r),c=(x,m)=>{let p=e.surfaceAt(this.s+x*o-m*a,this.d+x*a+m*o);return p.type==="pit"||p.type==="water"?p.top:p.h},l=c(1.9,0),h=c(-1.9,0),d=c(0,-1.6),u=c(0,1.6),f=Math.atan2(l-h,3.8)+gi(this.accelVis*.004,-.06,.06),g=Math.atan2(d-u,3.2)+gi(-this.steerVis*this.vF*.0025,-.07,.07);this.pitch+=(f-this.pitch)*Math.min(1,t*12),this.roll+=(g-this.roll)*Math.min(1,t*10)}else{let r=gi(Math.atan2(this.vy,Math.max(8,Math.abs(this.vF)))*.8,-.55,.45);this.pitch+=(r-this.pitch)*Math.min(1,t*2.5),this.roll+=(0-this.roll)*Math.min(1,t*3)}this.syncMesh(t)}syncMesh(t){let e=this.mesh;e.position.set(this.x,this.y,this.z),e.rotation.order="YXZ",e.rotation.set(-this.pitch,Math.PI/2-this.th+this.spin,this.roll);let n=this.blink>0&&this.state==="ok"?Math.floor(this.blink*12)%2===0:!0;e.visible=n,fr(this.parts,{wheelSpin:(this.onGround?this.vF+this.rev*28:this.control.throttle*30)*t/mi,steer:this.steerVis,comp:this.comp,dt:t})}};var We=(i,t)=>i+Math.random()*(t-i),Ry=new D(0,1,0),_d=[.6,.9],Md=[1.25,1.45],Ps=4.5,Cy=.7,Py=12,Iy=5,Ly=6,wd=80,Ed=10,Xo=class{constructor(t,e,n){this.track=t,this.game=n,this.group=new Jt,e.add(this.group),this.time=0,this.turbos=[],this.boxes=[],this.logs=[],this.balls=[],this.nets=[],this.cars=[],this.barrels=[],this.crocs=[],this.rain=null,this.crossings=[],this.traffic=[],this.build(),this.buildRain(),this.buildTraffic(),this.dodge=[...this.logs,...this.traffic]}anyNear(t,e,n,s=250){let r=this.track;for(let o of t)if(r.ahead(o.s,e)<s||r.ahead(n,o.s)<s||r.ahead(e,o.s)<n-e)return!0;return!1}rel(t,e){let n=this.track.length,s=(t-e)%n;return s>n/2&&(s-=n),s<-n/2&&(s+=n),s}holder(t,e=0,n=0){let s=new Jt;return bn(s,this.track,t,e,this.track.baseAt(t)+n),this.group.add(s),s}build(){let t=this.track,e=(A,S)=>t.at(A,S),n=ld(t.circuit.places),s=t.theme,r=new me({map:Ku(),transparent:!0,opacity:.95}),o=new ve(4.5,7);o.rotateX(-Math.PI/2),o.rotateY(Math.PI);let a=n.turbos.map(([A,S,T])=>[e(A,S),T]);for(let[A,S]of a)this.holder(A,S,.07).add(new B(o,r)),this.turbos.push({s:A,d:S});this.turboTex=r.map;let c=new Ct(1.8,1.8,1.8),l=new j({map:Il(),emissive:16777215,emissiveMap:Il(),emissiveIntensity:.35,transparent:!0,opacity:.92,roughness:.2});for(let A of n.boxes.map(([S,T])=>e(S,T)))for(let S of[-8,-4,0,4,8]){let T=new B(c,l);T.castShadow=!0;let R=t.pointAt(A,S);T.position.set(R.x,t.baseAt(A)+1.8,R.z),this.group.add(T),this.boxes.push({s:A,d:S,mesh:T,base:t.baseAt(A)+1.8,active:!0,timer:0,phase:Math.random()*6})}let h=Dy(s.roller);for(let A of n.rollers)A.list.forEach(([S,T,R])=>{let E=e(A.seg,S),M=this.holder(E),I=h.mesh();I.castShadow=!0,I.position.y=h.r,M.add(I),this.logs.push({s:E,period:T,phase:R,amp:12.5,r:h.r,len:h.len,mesh:I,d:0,vd:0,ball:h.ball})}),A.sign&&this.signs(s.rollerName,"#e0a100",e(A.sign[0],A.sign[1]));let d=s.swing==="log",u=new j(d?{map:Do(),color:14731432,roughness:1}:{color:15774720,metalness:.4,roughness:.5}),f=d?new j({color:12098146,roughness:1}):new j({color:5592405,metalness:.8,roughness:.4});for(let A of n.balls){let S=t.segs[A.seg],T=t.snap(S.s0+(A.frac!==void 0?S.length*A.frac:A.rel)),R=A.phase||0,E=this.holder(T),M=[];for(let X of[-1,1]){let J=d?new qt(.6,.8,19.6,7):new Ct(1,19,1);J.translate(X*(15+1.8),9.5,0),M.push(J);for(let G=0;G<(d?0:6);G++){let ct=new Ct(.2,3.4,.2);ct.rotateZ(.5*(G%2?1:-1)),ct.translate(X*(15+1.8),1.6+G*3,.55),M.push(ct)}}let I=d?new qt(.7,.7,35,8).rotateZ(Math.PI/2):new Ct(30+4.6,1.2,1.2);I.translate(0,19,0),M.push(I);let H=new B(ie(M),u);H.castShadow=!0,E.add(H);let N=new Jt;if(N.position.y=18.4,E.add(N),d){let X=[];for(let ct of[-2.2,2.2])X.push(new qt(.1,.1,15,5).translate(0,-7.5,ct));N.add(new B(ie(X),f));let J=new qt(1.5,1.5,6.5,12);J.rotateX(Math.PI/2);let G=new B(J,Uy());G.position.y=-14-1.5,G.castShadow=!0,N.add(G)}else{let X=new B(new qt(.12,.12,14,6),f);X.position.y=-7,N.add(X);let J=new B(new _e(2.2,20,16),new j({color:2829102,metalness:.7,roughness:.35}));J.position.y=-14-1.5,J.castShadow=!0,N.add(J);let G=new B(new ln(2.2,.18,8,24),new j({color:16763904}));G.position.copy(J.position),G.rotation.y=Math.PI/2,N.add(G)}this.balls.push({s:T,pivot:N,phase:R,period:3.8,amp:1.05,L:15.5,top:18.4,d:0,y:0,vd:0,len:d?1.5:0})}for(let[A,S]of n.nets){let T=e(A,S),R=this.holder(T),E=new j({color:3816004,metalness:.6,roughness:.4}),M=[];for(let Tt of[-1,1]){let Vt=new Ct(1.2,12,1.2);Vt.translate(Tt*(15+1.2),6,0),M.push(Vt)}let I=new Ct(30+3.6,1.4,1.4);I.translate(0,11.4,0),M.push(I);let H=new B(ie(M),E);H.castShadow=!0,R.add(H);let N=new B(new qt(.7,.7,31,12),new j({color:13220238,roughness:1}));N.rotation.z=Math.PI/2,N.position.set(0,10.3,.4),R.add(N);let X=31,J=9.6,G=new ve(X,J,30,12);G.translate(0,-J/2,0);let ct=ju().clone();ct.needsUpdate=!0,ct.repeat.set(X/2.4,J/2.4);let K=new B(G,new j({map:ct,alphaTest:.4,side:ue,roughness:1}));K.position.set(0,10.3,.4),K.castShadow=!0,R.add(K);let yt=[];for(let Tt of[-1,1]){let Vt=new B(new _e(.55,12,10),new me({color:2293572}));Vt.position.set(Tt*14,12.4,-.6),R.add(Vt),yt.push(Vt)}let wt=bd("\xA1CUIDADO CON LA RED!","#e0a100",512);wt.position.set(0,13.6,-.75),wt.rotation.y=Math.PI,wt.scale.set(1.6,1.6,1.6),R.add(wt),this.nets.push({s:T,mesh:K,geo:G,base0:Float32Array.from(G.attributes.position.array),lamps:yt,H:J,open:0,cycle:5.6,bulge:0,bulgeX:0,catchers:[]})}let g=[4030143,12597547,2600544,15965202,9323693,9807270,1482885,13849600,15528177],x=0;for(let A of n.crush){for(let[S,T]of A.rows)for(let R of T){let E=e(A.seg,S)+We(-1,1),M=s.crush==="snowman"?Ny():Oy(g[x++%g.length]);bn(M.group,t,E,R,t.baseAt(E)+.03),M.group.rotation.y+=We(-.25,.25)+(Math.random()<.3?Math.PI:0),this.group.add(M.group),this.cars.push({s:E,d:R,...M,crushed:!1,t:0,timer:0})}A.sign&&this.signs("\xA1APLASTA!","#2ecc71",e(A.sign[0],A.sign[1]))}let m=new qt(.75,.75,1.6,14),p=[new j({map:nd(),roughness:.5,metalness:.3}),new j({color:9048080,roughness:.5,metalness:.3}),new j({color:9048080})];for(let A of n.barrels)for(let[S,T]of A.rows)for(let R of T){let E=e(A.seg,S),M=t.pointAt(E,R),I=new B(m,p);I.position.set(M.x,t.baseAt(E)+.8,M.z),I.rotation.y=Math.random()*6,I.castShadow=!0,this.group.add(I),this.barrels.push({s:E,d:R,mesh:I,alive:!0,timer:0,fuse:0})}let _=s.patch==="ice"||s.patch==="oil",v=new j({map:Qu(),transparent:!0,roughness:_?.05:.18,metalness:s.patch==="oil"?.5:.05,depthWrite:!1});for(let A of t.mud){let S=new ve(2*A.rd*1.15,2*A.rs*1.15);S.rotateX(-Math.PI/2);let T=this.holder(A.s,A.d,.06),R=new B(S,v);R.receiveShadow=!0,R.renderOrder=1,T.add(R)}for(let[A,S]of n.patchSigns)this.signs(s.patchName,s.patch==="ice"?"#2a6fdb":s.patch==="oil"?"#333333":"#8b5a2b",e(A,S));let y=s.crocs?t.pits.filter(A=>A.liquid==="water"&&(A.crocs??A.bridges.length>0)):[];y.forEach((A,S)=>{let T=[],R=-15+2.5;for(let[M,I]of[...A.bridges].sort((H,N)=>H[0]-N[0]))M-1.5-R>2&&T.push([R,M-1.5]),R=Math.max(R,I+1.5);15-2.5-R>2&&T.push([R,15-2.5]),A.crocFree=T.length?T:[[-15+2.5,15-2.5]];let E=Math.max(2,Math.floor(6/y.length)+(S<6%y.length?1:0));for(let M=0;M<E;M++){let I=Fy(),H={...I,pit:A,s:0,d:0,heading:We(0,Math.PI*2),ts:0,td:0,timer:0,jaw:0,snapT:We(0,3),wag:We(0,6),target:null};this.pickCrocTarget(H),H.s=We(A.s0+3,A.s1-3),H.d=H.td,this.group.add(I.group),this.crocs.push(H)}})}signs(t,e,n){for(let s of[-1,1]){let r=bd(t,e);bn(r,this.track,n,s*18,0),r.rotation.y+=Math.PI,this.group.add(r)}}pickCrocTarget(t){let e=t.pit,[n,s]=e.crocFree[Math.floor(Math.random()*e.crocFree.length)];t.ts=We(e.s0+3,e.s1-3),t.td=We(n,s),t.timer=We(3,7)}dangerAhead(t,e){let n=s=>{let r=this.rel(s.s,t);return r>2&&r<e};return!!(this.logs.some(n)||this.balls.some(n)||this.traffic.some(s=>n(s)&&Math.abs(s.d)<15+s.r)||this.nets.some(s=>n(s)&&s.open>.3))}rollerD(t,e){if(t.loop)return t.dir*((((this.time+e)*t.speed+t.off)%t.P+t.P)%t.P-t.P/2);let n=(((this.time+e)/t.period+t.phase)%1+1)%1;return t.amp*(n<.5?4*n-1:3-4*n)}update(t,e){this.time+=t;let n=this.time,s=this.track,r=this.game;this.turboTex.offset.y=(this.turboTex.offset.y-t*1.6)%1;for(let o of this.turbos)for(let a of e)a.state!=="ok"||!a.onGround||Math.abs(this.rel(a.s,o.s))<3.6&&Math.abs(a.d-o.d)<2.6&&(a.boost<1&&a.events.push({type:"turbo"}),a.boost=Math.max(a.boost,1.3));for(let o of this.boxes){o.active||(o.timer-=t,o.timer<=0&&(o.active=!0));let a=o.active?1:0,c=o.mesh.scale.x+(a-o.mesh.scale.x)*Math.min(1,t*(o.active?4:14));if(o.mesh.scale.setScalar(Math.max(.001,c)),o.mesh.visible=c>.02,o.mesh.rotation.y+=t*1.4,o.mesh.rotation.x=Math.sin(n*1.3+o.phase)*.35,o.mesh.position.y=o.base+Math.sin(n*2+o.phase)*.3,!!o.active){for(let l of e)if(l.state!=="fallen"&&Math.abs(this.rel(l.s,o.s))<2.8&&Math.abs(l.d-o.d)<2.8&&Math.abs(l.y+1.5-o.base)<3.5){o.active=!1,o.timer=4,!l.item&&l.itemRoll<=0&&(l.itemRoll=l.isPlayer?1.3:.8),l.events.push({type:"box"}),r.fx.sparks(o.mesh.position.x,o.mesh.position.y,o.mesh.position.z,14);break}}}for(let o of this.logs){let a=((n/o.period+o.phase)%1+1)%1,c=a<.5?4*a-1:3-4*a;o.d=o.amp*c,o.vd=o.amp*4/o.period*(a<.5?1:-1),o.mesh.position.x=-o.d,o.mesh.rotation.z+=o.vd/o.r*t;let l=s.baseAt(o.s)+o.r*2;for(let h of e)if(h.state==="ok"&&Math.abs(this.rel(h.s,o.s))<o.len/2+2.6&&Math.abs(h.d-o.d)<o.r+pr&&h.y<l-.3){let d=s.pointAt(h.s),u=Math.sign(o.vd)||1;h.hit({dirX:d.rx*u,dirZ:d.rz*u,push:10,up:4,speedMul:.45,stun:.9,kind:"log"})&&(r.fx.sparks(h.x,h.y+1.5,h.z,8),r.fx.dust(h.x,h.y,h.z,0,0,[.45,.3,.18],8,1.5))}}for(let o of this.balls){let a=2*Math.PI/o.period,c=o.amp*Math.sin(a*n+o.phase),l=o.amp*a*Math.cos(a*n+o.phase);o.pivot.rotation.z=-c,o.d=o.L*Math.sin(c),o.y=s.baseAt(o.s)+o.top-o.L*Math.cos(c),o.vd=o.L*Math.cos(c)*l;for(let h of e){if(h.state!=="ok")continue;let d=Math.max(0,Math.abs(this.rel(h.s,o.s))-o.len),u=h.d-o.d,f=h.y+2-o.y;if(d*d+u*u+f*f<4.3*4.3){let g=s.pointAt(h.s),x=Math.sign(o.vd)||Math.sign(u)||1;h.hit({dirX:g.rx*x,dirZ:g.rz*x,push:16,up:6,speedMul:.35,stun:1.3,kind:"ball"})&&r.fx.sparks(h.x,h.y+2.5,h.z,20)}}}for(let o of this.nets){let a=n%o.cycle/o.cycle*o.cycle,c;a<2.8?c=0:a<3.2?c=(a-2.8)/.4:a<4.9?c=1:c=1-(a-4.9)/.7,o.open=c,o.mesh.scale.y=.06+.94*c;let l=a>1.6&&a<2.8;for(let f of o.lamps){let g=c>.05||l&&Math.floor(n*6)%2===0;f.material.color.setHex(g?16720418:2293572)}let h=s.baseAt(o.s)+10.3-o.H*o.mesh.scale.y;for(let f of e){if(f.state!=="ok")continue;let g=this.rel(f.prevS,o.s),x=this.rel(f.s,o.s);g<0&&x>=0&&Math.abs(x)<10&&h<f.y+3&&Math.abs(f.d)<15&&f.catchNet(o)&&o.catchers.push(f)}o.catchers=o.catchers.filter(f=>f.state==="caught"&&f.netCaught===o);let d=0,u=o.bulgeX;for(let f of o.catchers)d=Math.max(d,Math.min(5,Math.max(0,this.rel(f.s,o.s)+2.5))),u=-f.d;if(o.bulge+=(d-o.bulge)*Math.min(1,t*8),o.bulgeX=u,o.bulge>.01||o.dirty){let f=o.geo.attributes.position,g=o.base0;for(let x=0;x<f.count;x++){let m=g[x*3],p=g[x*3+1],_=Math.max(0,1-Math.pow((p+o.H*.55)/(o.H*.55),2));f.array[x*3+2]=o.bulge*Math.exp(-((m-u)**2)/14)*_}f.needsUpdate=!0,o.dirty=o.bulge>.01}}for(let o of this.cars){o.crushed?(o.t=Math.min(1,o.t+t*6),o.timer-=t,o.timer<=0&&(o.crushed=!1)):o.t=Math.max(0,o.t-t*2);let a=1-.68*o.t;if(o.group.scale.set(1+.12*o.t,a,1+.08*o.t),o.paint.color.copy(o.baseColor).multiplyScalar(1-.35*o.t),!o.crushed){for(let c of e)if(c.state==="ok"&&Math.abs(this.rel(c.s,o.s))<3.3&&Math.abs(c.d-o.d)<2.6&&c.y<s.baseAt(o.s)+1.8){o.crushed=!0,o.timer=25,c.onGround&&(c.vy=Math.max(c.vy,4.5),c.onGround=!1),c.compV-=1.2,c.boost=Math.max(c.boost,.35),c.events.push({type:"crush"});let l=s.pointAt(o.s,o.d);r.fx.sparks(l.x,s.baseAt(o.s)+1,l.z,12),r.fx.dust(l.x,s.baseAt(o.s),l.z,0,0,[.6,.6,.65],4,1.4);break}}}for(let o of this.barrels){if(!o.alive){o.timer-=t,o.timer<=0&&(o.alive=!0),o.mesh.scale.setScalar(Math.max(.001,o.mesh.scale.x*.5)),o.mesh.visible=!1;continue}if(o.fuse>0&&(o.fuse-=t,o.fuse<=0)){this.explodeBarrel(o,e);continue}o.mesh.visible=!0;let a=Math.min(1,o.mesh.scale.x+t*3);o.mesh.scale.setScalar(a);for(let c of e)if(c.state==="ok"&&Math.abs(this.rel(c.s,o.s))<3.2&&Math.abs(c.d-o.d)<2.5&&c.y<s.baseAt(o.s)+1.8){this.explodeBarrel(o,e);break}}this.updateCrocs(t,e),this.updateRain(t,e),this.updateTraffic(t,e)}buildRain(){let t=this.track.meteors[0];if(!t)return;let e=new Jt;this.group.add(e);let n=new Ui(1.5,0).toNonIndexed(),s=[],r=[16734720,12593152,16751136,8001536];for(let v=0;v<n.attributes.position.count/3;v++){let y=new Ft(r[v%r.length]);for(let A=0;A<3;A++)s.push(y.r,y.g,y.b)}n.setAttribute("color",new Qt(s,3));let o=new Pe(1.25,11,7,1,!0).translate(0,5.5,0).toNonIndexed(),a=[],c=o.attributes.position;for(let v=0;v<c.count;v++){let y=new Ft(16764992).lerp(new Ft(16726528),c.getY(v)/11);a.push(y.r,y.g,y.b)}o.setAttribute("color",new Qt(a,3)),o.deleteAttribute("uv"),n.deleteAttribute("uv");let l=ie([n,o]);n.dispose(),o.dispose();let h=new me({vertexColors:!0,side:ue}),d={polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2},u=new _o(Ps-.7,Ps,28).rotateX(-Math.PI/2),f=new Yn(Ps-.7,20).rotateX(-Math.PI/2),g=new me({color:13901824,...d}),x=new Yn(3,16).rotateX(-Math.PI/2),m=new me({color:3021844,...d}),p=[],_=[];for(let v=0;v<Ly;v++){let y=new B(l,h),A=new me({color:16764928,...d}),S=new B(f,g),T=new B(u,A),R=new Jt;R.add(S,T);let E=new B(x,m);y.visible=R.visible=E.visible=!1,e.add(y,R,E),p.push({rock:y,mark:R,disc:S,ringMat:A}),_.push({mesh:E,t:0})}this.rain={s0:t.s0,s1:t.s1,group:e,timer:.3,active:[],free:p,scorch:_,on:!1,aimed:new Map,emitT:0},e.visible=!1,t.sign!==void 0&&this.signs("\xA1LLUVIA DE ROCAS!","#ff6a00",t.sign)}spawnMeteor(t){let e=this.track,n=this.rain;if(!n.free.length)return;let s=We(Md[0],Md[1]),r=n.s1-n.s0,o=u=>n.active.every(f=>Math.abs(this.rel(f.s,u))>Py),a=null,c=0;if(Math.random()<Cy){let u=t.filter(f=>f.state==="ok"&&e.ahead(n.s0-30,f.s)<r+30&&!(n.aimed.get(f)>this.time));if(u.length){let f=u[Math.floor(Math.random()*u.length)],g=e.wrap(f.s+Math.max(0,f.vF)*s*We(.85,1.05));e.ahead(n.s0+2,g)<r-4&&o(g)&&(a=g,c=Math.max(-12,Math.min(12,f.d+We(-2,2))),n.aimed.set(f,this.time+1.4))}}for(let u=0;a===null&&u<4;u++){let f=n.s0+We(3,r-3);o(f)&&(a=f,c=We(-12,12))}if(a===null)return;let l=n.free.pop(),h=e.pointAt(a,c);l.s=a,l.d=c,l.t=0,l.T=s,l.x=h.x,l.z=h.z,l.y=e.baseAt(a),l.sx=h.x+22,l.sy=l.y+62,l.sz=h.z-16;let d=new D(l.sx-l.x,l.sy-l.y,l.sz-l.z).normalize();l.rock.quaternion.setFromUnitVectors(Ry,d),l.rock.visible=!0,l.mark.position.set(h.x,l.y+.09,h.z),l.mark.visible=!0,l.disc.scale.setScalar(.05),l.ringMat.color.setHex(16764928),l.ai=null,n.active.push(l)}updateRain(t,e){let n=this.rain;if(!n)return;if(!this.anyNear(e,n.s0,n.s1)){if(n.on){for(let o of n.active)o.rock.visible=o.mark.visible=!1,n.free.push(o);n.active.length=0;for(let o of n.scorch)o.t=0,o.mesh.visible=!1;n.aimed.clear(),n.on=!1,n.group.visible=!1}return}n.on=!0,n.group.visible=!0,n.timer-=t,n.timer<=0&&(n.timer=We(_d[0],_d[1]),this.spawnMeteor(e));let s=this.game.fx;n.emitT+=t;let r=n.emitT>=1/30;r&&(n.emitT=0);for(let o=n.active.length-1;o>=0;o--){let a=n.active[o];a.t+=t;let c=Math.min(1,a.t/a.T),l=a.sx+(a.x-a.sx)*c,h=a.sy+(a.y+1.2-a.sy)*c,d=a.sz+(a.z-a.sz)*c;a.rock.position.set(l,h,d),a.disc.scale.setScalar(.05+.95*c),a.T-a.t<.4&&a.ringMat.color.setHex(Math.floor(a.t*14)%2?16719872:16777215),r&&s.glow.emit({x:l,y:h,z:d,vx:(Math.random()-.5)*3,vy:2,vz:(Math.random()-.5)*3,life:.45,size:2.2,grow:-2,color:[1,.5,.12],alpha:1,gravity:0,drag:2}),!(a.t<a.T)&&(this.meteorImpact(a,e),a.rock.visible=a.mark.visible=!1,n.active.splice(o,1),n.free.push(a))}for(let o of n.scorch)o.t<=0||(o.t-=t,o.mesh.scale.setScalar(Math.max(.01,Math.min(1,o.t/1.2))),o.t<=0&&(o.mesh.visible=!1))}meteorImpact(t,e){let n=this.game,s=this.rain;n.fx.explosion(t.x,t.y,t.z),n.boom(t.x,t.y,t.z);for(let o of e){if(o.state!=="ok")continue;let a=o.x-t.x,c=o.z-t.z,l=Math.hypot(a,c);if(l<Ps&&o.y<t.y+4){let h=1/Math.max(.5,l);o.hit({dirX:a*h,dirZ:c*h,push:6,up:10,speedMul:.5,stun:1.1,kind:"meteor"})&&s.aimed.set(o,this.time+2.5)}}let r=s.scorch[0];for(let o of s.scorch)o.t<r.t&&(r=o);r.t=Iy,r.mesh.position.set(t.x,t.y+.07,t.z),r.mesh.rotation.y=Math.random()*6,r.mesh.scale.setScalar(1),r.mesh.visible=!0}buildTraffic(){let t=this.track;if(!t.crossings.length)return;let e=Vy();this.trafficAssets=e,t.crossings.forEach((n,s)=>{let r=this.holder(n.s),o=t.baseAt(n.s),a=new Jt;a.scale.z=(n.g1-n.g0)/(2*6.5),a.position.z=(n.g0+n.g1)/2-n.s,r.add(a);let c=new B(e.streetGeo,e.streetMat);c.position.y=.06,c.receiveShadow=!0,r.add(c);let l=new B(e.staticGeo,e.metalMat);l.castShadow=!0;let h=new B(e.armGeo,e.armMat);h.castShadow=!0,a.add(l,h,new B(e.kerbGeo,e.kerbMat)),r.add(new B(e.lampGeoA,e.lampA),new B(e.lampGeoB,e.lampB));let d=s%2?["car","car","van","car","car"]:["car","bus","car","car","car"],u=2*wd,f=d.reduce((_,v)=>_+e.size[v].len,0),g=(u-f)/d.length,x=[1.18,.86,1.08,.88,1],m=0,p=[];d.forEach((_,v)=>{let y=e.size[_],A=_==="car"?e.carGeos[(s*2+v)%e.carGeos.length]:e.geos[_],S=new B(A,e.carMat);S.castShadow=!0,S.rotation.y=n.dir>0?-Math.PI/2:Math.PI/2,r.add(S);let T={s:n.s,loop:!0,dir:n.dir,speed:n.speed,P:u,off:m+y.len/2,r:y.len/2,len:y.w,ball:!0,d:0,vd:n.dir*n.speed,mesh:S,top:o+y.h,kind:_};m+=y.len+g*x[v%x.length],p.push(T),this.traffic.push(T)}),n.sign!==void 0&&this.signs("\xA1CRUCE!","#ffcc00",n.sign),this.crossings.push({c:n,holder:r,cars:p,on:!0,hornT:0})})}updateTraffic(t,e){if(!this.crossings.length)return;let n=this.track,s=this.game,r=this.trafficAssets,o=!1;for(let a of this.crossings){let c=this.anyNear(e,a.c.s0,a.c.s1);if(c!==a.on&&(a.on=c,a.holder.visible=c),!!c){o=!0;for(let l of a.cars)if(l.d=this.rollerD(l,0),l.mesh.position.x=-l.d,!(Math.abs(l.d)>15+l.r+pr)){for(let h of e)if(h.state==="ok"&&Math.abs(this.rel(h.s,l.s))<l.len/2+2.6&&Math.abs(h.d-l.d)<l.r+pr&&h.y<l.top-.3){let d=n.pointAt(h.s);h.hit({dirX:d.rx*l.dir,dirZ:d.rz*l.dir,push:12,up:3,speedMul:.4,stun:.9,kind:"car"})&&s.fx.sparks(h.x,h.y+1.5,h.z,10)}}if(a.hornT-=t,!(a.hornT>0))for(let l of e){if(!l.isPlayer||l.state!=="ok")continue;let h=n.ahead(l.s,a.c.s);if(h<12||h>70)continue;let d=a.cars.find(u=>u.dir*u.d<-13&&u.dir*u.d>-45);if(d){let u=n.pointAt(d.s,d.d);s.sound3d("horn",u.x,u.z,.55),a.hornT=3.5;break}}}}if(o){let a=Math.floor(this.time*2.4)%2;r.lampA.color.setHex(a?16756736:3811856),r.lampB.color.setHex(a?3811856:16756736)}}explodeBarrel(t,e){t.alive=!1,t.timer=12,t.fuse=0;let n=this.track.pointAt(t.s,t.d),s=this.track.baseAt(t.s);this.game.fx.explosion(n.x,s,n.z),this.game.boom(n.x,s,n.z);for(let r of e){if(r.state!=="ok")continue;let o=r.x-n.x,a=r.z-n.z,c=Math.hypot(o,a);if(c<7&&r.y<s+4){let l=1/Math.max(1,c);r.hit({dirX:o*l,dirZ:a*l,push:6,up:11,speedMul:.5,stun:1.1,kind:"boom"})}}for(let r of this.barrels)r.alive&&r!==t&&!(r.fuse>0)&&Math.abs(this.rel(r.s,t.s))<5&&Math.abs(r.d-t.d)<5&&(r.fuse=.18)}updateCrocs(t,e){if(!this.crocs.length)return;let n=this.track;for(let s of this.crocs){let r=s.pit,o=null;for(let p of e)p.state==="fallen"&&p.fall?.water&&p.fall.pit===r&&(o=p);s.timer-=t;let a=s.ts,c=s.td,l=1.6;if(o){let p=n.project(o.x,o.z,o.idx);a=p.s,c=p.d,l=5.5}else s.timer<=0&&this.pickCrocTarget(s);let h=this.rel(a,s.s),d=c-s.d,u=Math.hypot(h,d),g=Math.atan2(d,h)-s.heading;for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;s.heading+=Math.max(-1.5*t,Math.min(1.5*t,g)),u>(o?2.5:1)&&(s.s+=Math.cos(s.heading)*l*t,s.d+=Math.sin(s.heading)*l*t),s.s=Math.max(r.s0+2.5,Math.min(r.s1-2.5,s.s)),s.d=Math.max(-13,Math.min(13,s.d)),s.snapT-=t*(o&&u<6?3:1),s.snapT<=0&&(s.snapT=We(2,4),s.jaw=.75,o&&u<7&&this.game.sound3d("snap",o.x,o.z,.8)),s.jaw=Math.max(0,s.jaw-t*(s.jaw>.4?.6:2.5));let x=s.jaw>.4?(.75-s.jaw)/.35*.7:s.jaw/.4*.7;s.jawPivot.rotation.x=x,s.headPivot.rotation.x=-x*.4,s.wag+=t*(l>2?9:3),s.tail.rotation.y=Math.sin(s.wag)*.45;let m=n.pointAt(s.s,s.d);s.group.position.set(m.x,r.floor-.05+Math.sin(s.wag*.5)*.05,m.z),s.group.rotation.y=Math.PI/2-(m.th+s.heading)}}};function bd(i,t,e=256){let n=new Jt,s=document.createElement("canvas");s.width=e,s.height=128;let r=s.getContext("2d");r.fillStyle=t,r.fillRect(0,0,e,128),r.strokeStyle="#111",r.lineWidth=10,r.strokeRect(5,5,e-10,118),r.fillStyle="#111",r.font="bold 44px Impact, Arial Black, sans-serif",r.textAlign="center",r.textBaseline="middle";for(let l=44;l>16&&r.measureText(i).width>e-28;l-=2)r.font=`bold ${l}px Impact, Arial Black, sans-serif`;r.fillText(i,e/2,66);let o=new Qe(s);o.colorSpace=xe;let a=e/128*3,c=new B(new ve(a,3),new j({map:o,side:ue}));if(c.position.y=e>256?0:4.5,n.add(c),e<=256)for(let l of[-a/2+.4,a/2-.4]){let h=new B(new qt(.12,.12,4.5,6),new j({color:5592405}));h.position.set(l,2.25,.05),n.add(h)}return n}function Dy(i){if(i==="snowball"||i==="boulder"){let n=i==="snowball"?2:1.9,s=i==="snowball"?new pi(n,2):new Ui(n,1),r=i==="snowball"?new j({color:16185852,roughness:.85,flatShading:!0}):new j({map:hr(),color:6969938,roughness:1,flatShading:!0,emissive:3803648});return{r:n,len:2*n,ball:!0,mesh:()=>new B(s,r)}}if(i==="pipe"){let n=new qt(1.3,1.3,7,16,1,!0);n.rotateX(Math.PI/2);let s=new qt(1,1,7.02,16,1,!0);s.rotateX(Math.PI/2);let r=new j({color:10132118,roughness:.9,side:ue}),o=new j({color:3815994,roughness:1,side:Ce});return{r:1.3,len:7,ball:!1,mesh:()=>{let a=new Jt,c=new B(n,r);return c.castShadow=!0,a.add(c,new B(s,o)),a}}}let t=new qt(1,1,7,14);t.rotateX(Math.PI/2);let e=[new j({map:Do(),roughness:1}),new j({map:ur(),roughness:1}),new j({map:ur(),roughness:1})];return{r:1,len:7,ball:!1,mesh:()=>new B(t,e)}}var Fl=null;function Uy(){return Fl||(Fl=[new j({map:Do(),roughness:1}),new j({map:ur(),roughness:1}),new j({map:ur(),roughness:1})]),Fl}function Ny(){let i=new Jt,t=new j({color:16054524,roughness:.9}),e=[];for(let[c,l]of[[1.1,1],[.8,2.5],[.55,3.6]]){let h=new _e(c,12,9);h.translate(0,l,0),e.push(h)}let n=new B(ie(e),t);n.castShadow=!0,i.add(n);let s=new B(new Pe(.12,.6,8).rotateX(Math.PI/2),new j({color:16742912}));s.position.set(0,3.6,.75),i.add(s);let r=new B(new qt(.45,.45,.7,12),new j({color:1710618}));r.position.y=4.3,i.add(r);let o=new j({color:13904416}),a=new B(new ln(.62,.14,6,14).rotateX(Math.PI/2),o);return a.position.y=3.15,i.add(a),{group:i,paint:o,baseColor:o.color.clone()}}function Oy(i){let t=new Jt,e=new Ft(i),n=new j({color:i,metalness:.3,roughness:.55}),s=new j({color:1710618,roughness:.8}),r=new j({color:10471128,metalness:.4,roughness:.15}),o=new Ct(1.9,.75,4.3);o.translate(0,.75,0);let a=new Ct(1.7,.65,2.1);a.translate(0,1.45,-.25);let c=new B(ie([o,a]),n);c.castShadow=!0,t.add(c);let l=new B(new Ct(1.74,.45,1.9),r);l.position.set(0,1.47,-.25),t.add(l);let h=[];for(let u of[-.85,.85])for(let f of[-1.35,1.35]){let g=new qt(.38,.38,.3,12);g.rotateZ(Math.PI/2),g.translate(u,.38,f),h.push(g)}t.add(new B(ie(h),s));let d=new B(new Ct(1.92,.3,1.2),new j({color:9063200,roughness:1}));return d.position.set(0,.55,1.2),t.add(d),{group:t,paint:n,baseColor:e}}function Fy(){let i=new Jt,t=new j({color:4156202,roughness:.7}),e=new j({color:10466154,roughness:.8}),n=new j({color:16777215}),s=new B(new Ct(1.2,.6,3.2),t);s.castShadow=!0,i.add(s);for(let u=0;u<6;u++){let f=new B(new Pe(.12,.3,4),t);f.position.set(0,.4,-1.2+u*.45),i.add(f)}let r=new Jt;r.position.set(0,.1,1.55),i.add(r);let o=new B(new Ct(.9,.35,1.5),t);o.position.set(0,.12,.75),r.add(o);for(let u=0;u<5;u++)for(let f of[-1,1]){let g=new B(new Pe(.06,.18,4),n);g.position.set(f*.4,-.08,.3+u*.28),g.rotation.x=Math.PI,r.add(g)}for(let u of[-1,1]){let f=new B(new _e(.14,10,8),new j({color:16769357,emissive:3353088}));f.position.set(u*.28,.38,.25),r.add(f);let g=new B(new _e(.06,8,6),new j({color:0}));g.position.set(u*.3,.42,.37),r.add(g)}let a=new Jt;a.position.set(0,0,1.55),i.add(a);let c=new B(new Ct(.85,.2,1.45),e);c.position.set(0,-.12,.72),a.add(c);let l=new Jt;l.position.set(0,0,-1.6),i.add(l);let h=new Pe(.5,2.6,6);h.rotateX(-Math.PI/2),h.translate(0,0,-1.3);let d=new B(h,t);d.scale.set(1,.6,1),l.add(d);for(let u of[-1,1])for(let f of[-.9,.9]){let g=new B(new Ct(.35,.25,.5),t);g.position.set(u*.75,-.2,f),g.rotation.y=u*.5,i.add(g)}return i.scale.setScalar(1.5),{group:i,headPivot:r,jawPivot:a,tail:l}}var Td=(i,t)=>{let e=i.index?i.toNonIndexed():i;e!==i&&i.dispose();let n=new Ft(t),s=e.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return e.setAttribute("color",new pe(r,3)),e.deleteAttribute("uv"),e},Se=(i,t,e,n,s,r,o)=>Td(new Ct(i,t,e).translate(n,s,r),o),Bl=(i,t,e,n=.32)=>{let s=[];for(let r of[-i,i])for(let o of t)s.push(Td(new qt(e,e,n,10).rotateZ(Math.PI/2).translate(r,e,o),1447446));return s},Is=8365757,qo=1447446;function By(i){return ie([Se(1.9,.75,4.3,0,.75,0,i),Se(1.7,.65,2.1,0,1.45,-.25,i),Se(1.74,.45,1.9,0,1.47,-.25,Is),Se(1.56,.48,.06,0,1.45,.81,Is),Se(.42,.18,.06,-.6,.85,2.16,16773808),Se(.42,.18,.06,.6,.85,2.16,16773808),Se(.42,.18,.06,-.6,.85,-2.16,13635600),Se(.42,.18,.06,.6,.85,-2.16,13635600),Se(1.95,.22,.2,0,.45,2.17,qo),Se(1.95,.22,.2,0,.45,-2.17,qo),...Bl(.85,[-1.35,1.35],.38)])}function ky(){return ie([Se(2.5,2.5,10,0,1.65,0,15906560),Se(2.54,.9,8.4,0,2.2,-.2,Is),Se(2.2,1.3,.06,0,2,5.02,Is),Se(2.54,.25,10.02,0,1.05,0,2776496),Se(2.56,.35,.25,0,.55,5,qo),Se(2.56,.35,.25,0,.55,-5,qo),Se(.5,.25,.06,-.8,.9,5.02,16773808),Se(.5,.25,.06,.8,.9,5.02,16773808),...Bl(1.1,[-3.4,3.4],.55,.4)])}function Hy(){return ie([Se(2.1,1.7,1.8,0,1.25,2.3,14826792),Se(2.14,.6,1,0,1.75,2.45,Is),Se(1.9,.62,.06,0,1.72,3.21,Is),Se(2.3,2.6,4.6,0,1.75,-.95,16053492),Se(2.34,.45,4.62,0,1.6,-.95,14826792),Se(.4,.2,.06,-.7,.85,3.21,16773808),Se(.4,.2,.06,.7,.85,3.21,16773808),...Bl(.95,[2.3,-2.4],.5,.36)])}function zy(i,t,e=8){let n=document.createElement("canvas");n.width=16,n.height=128;let s=n.getContext("2d");for(let o=0;o<e;o++)s.fillStyle=o%2?t:i,s.fillRect(0,o*128/e,16,128/e);let r=new Qe(n);return r.colorSpace=xe,r}function Gy(i,t,e){let r=document.createElement("canvas");r.width=2048,r.height=256;let o=r.getContext("2d"),a=2048/(2*i),c=256/(t+2*e),l=x=>2048/2+x*a,h=x=>256/2+x*c;o.fillStyle="#8f9196",o.fillRect(0,0,2048,256),o.fillStyle="#7f8186";for(let x=-i;x<i;x+=1.5)o.fillRect(l(x),0,1,h(-t/2)),o.fillRect(l(x),h(t/2),1,256);o.fillStyle="#3a3c40",o.fillRect(0,h(-t/2),2048,t*c);let d=(()=>{let x=7;return()=>(x=x*16807%2147483647)/2147483647})();for(let x=0;x<2600;x++){let m=50+Math.floor(d()*30);o.fillStyle=`rgb(${m},${m},${m+3})`,o.fillRect(d()*2048,h(-t/2)+d()*t*c,2,2)}o.fillStyle="#c9c9c4",o.fillRect(0,h(-t/2)-3,2048,3),o.fillRect(0,h(t/2),2048,3),o.fillStyle="#e8e8e8";for(let x=-i;x<i;x+=6)Math.abs(x+1.5)<18||(o.fillRect(l(x),h(-t/2+.8),3*a,4),o.fillRect(l(x),h(t/2-.8)-4,3*a,4));let u=l(-15),f=l(15);o.fillStyle="#45474b",o.fillRect(u,0,f-u,h(-t/2)),o.fillRect(u,h(t/2),f-u,256-h(t/2)),o.fillStyle="#f2f2f2";for(let x=-15+.6;x<15-.5;x+=1.2)o.fillRect(l(x),h(-t/2-e+.35),.6*a,(e-.7)*c),o.fillRect(l(x),h(t/2+.35),.6*a,(e-.7)*c);o.save(),o.beginPath(),o.rect(u,h(-t/2),f-u,t*c),o.clip(),o.strokeStyle="#ffcc00",o.lineWidth=5;for(let x=-15-t;x<15+t;x+=2.2)o.beginPath(),o.moveTo(l(x),h(-t/2)),o.lineTo(l(x-t),h(t/2)),o.stroke(),o.beginPath(),o.moveTo(l(x),h(-t/2)),o.lineTo(l(x+t),h(t/2)),o.stroke();o.restore(),o.strokeStyle="#ffcc00",o.lineWidth=8,o.strokeRect(u+4,h(-t/2)+4,f-u-8,t*c-8);let g=new Qe(r);return g.colorSpace=xe,g.anisotropy=Math.min(4,zu()),g}function Vy(){let i={car:{len:4.3,w:1.9,h:1.8},bus:{len:10,w:2.5,h:2.9},van:{len:6.6,w:2.3,h:3.05}},t=[4030143,12597547,2600544,15965202,9323693,15528177].map(By),e={bus:ky(),van:Hy()},n=new j({vertexColors:!0,roughness:.5,metalness:.15}),s=wd+10,r=3,o=new ve(2*s,Ed+2*r).rotateX(-Math.PI/2),a=new j({map:Gy(s,Ed,r),roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),c=15+.35,l=6.5,h=[],d=[],u=[],f=[],g=[];for(let m of[-1,1]){for(let v of[-l,l])h.push(new Ct(1,2,1).translate(m*c,1,v));d.push(new Ct(.3,6.5,.3).translate(0,3.25,0).rotateZ(m*.12).translate(m*c,2,m*l)),u.push(new Ct(.8,.32,2*l-1).translate(m*c,.16,0));let p=m*(15+2.6),_=-l-3;h.push(new qt(.14,.14,5.6,6).translate(p,2.8,_)),h.push(new Ct(2.1,.95,.4).translate(p,5.8,_)),f.push(new _e(.36,10,8).translate(p-.55,5.8,_-.25)),g.push(new _e(.36,10,8).translate(p+.55,5.8,_-.25))}let x=m=>{let p=ie(m);return m.forEach(_=>_.dispose()),p};return{size:i,carGeos:t,geos:e,carMat:n,streetGeo:o,streetMat:a,staticGeo:x(h),armGeo:x(d),kerbGeo:x(u),lampGeoA:x(f),lampGeoB:x(g),metalMat:new j({color:3159098,metalness:.5,roughness:.5}),armMat:new j({map:zy("#d42a20","#f4f4f4"),roughness:.6}),kerbMat:new j({color:16761856,roughness:.7}),lampA:new me({color:16756736}),lampB:new me({color:3811856})}}var zi=(i,t)=>i+Math.random()*(t-i),Wy=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},Yo=class{constructor(t,e,{skill:n=1,preferBridge:s=!1}={}){this.v=t,this.track=e,this.skill=n,this.lane=zi(-6,6),this.laneTarget=this.lane,this.laneTimer=zi(2,6),this.preferBridge=s,this.itemDelay=0,this.noise=0,this.noiseT=0,this.rollerTry=null,this.rollerBest=null,this.meteorBest=null,this.pitPick=null,this.careful=!1}pitLanes(t){if(t.aiLanes!==void 0)return t.aiLanes;let e=this.track.ramps.filter(s=>Math.abs(s.s1-t.s0)<1.5);if(e.some(s=>s.d0<=-11&&s.d1>=11))return t.aiLanes=null;let n=t.bridges.map(([s,r])=>({d:(s+r)/2,w:r-s,bridge:!0}));for(let s of e){let r=s.d0<=-15?s.d1-8:s.d1>=15?s.d0+8:(s.d0+s.d1)/2;n.push({d:r,w:Math.min(s.d1,11)-Math.max(s.d0,-11),bridge:!1})}return t.aiLanes=n.length?n:null}laneAt(t){let e=this.track;for(let n of e.pits){let s=this.pitLanes(n);if(!s)continue;let r=e.ahead(t,n.s0),o=e.ahead(n.s1,t);if(r<110||o<6){if(this.pitPick?.p!==n){let a=s.filter(l=>l.bridge===this.preferBridge);a.length||(a=s);let c=a[0];for(let l of a)Math.abs(l.d-this.lane)<Math.abs(c.d-this.lane)&&(c=l);this.pitPick={p:n,lane:c.d,narrow:c.w<8}}return this.pitPick.lane}}for(let n of e.mud)if((e.ahead(t,n.s)<n.rs+12||e.ahead(n.s,t)<n.rs)&&Math.abs(this.laneTarget-n.d)<n.rd+2.5)return n.d>0?Math.max(-9,n.d-n.rd-3):Math.min(9,n.d+n.rd+3);return this.laneTarget}control(t,e){let n=this.v,s=this.track;this.laneTimer-=t,this.laneTimer<=0&&(this.laneTimer=zi(3,7),this.laneTarget=zi(-7,7));for(let S of e.vehicles){if(S===n)continue;let T=s.ahead(n.s,S.s);T>0&&T<14&&Math.abs(S.d-this.lane)<3.2&&(this.laneTarget=S.d>0?S.d-5:S.d+5,this.laneTarget=Math.max(-9,Math.min(9,this.laneTarget)))}for(let S of e.projectiles.list){if(S.kind==="rocket"||S.owner===n)continue;let T=s.ahead(n.s,S.s);T>2&&T<30&&Math.abs(S.d-this.lane)<3.5&&Math.random()<this.skill*.6&&(this.laneTarget=Math.max(-9,Math.min(9,S.d>0?S.d-5.5:S.d+5.5)))}let r=Math.max(0,n.vF),o=this.pitPick;this.careful=!!o?.narrow&&(s.ahead(n.s,o.p.s0)<70||s.ahead(o.p.s0,n.s)<o.p.s1-o.p.s0+2);let a=this.careful?7+r*.3:9+r*.45,c=this.laneAt(n.s+a),l=this.rollerLane(e,r,c),h=l===null?this.meteorLane(e,r):null,d=h!==null&&!this.careful?6+r*.25:a,u=l??h??c;l!==null||h!==null?this.dodgeT=3:this.dodgeT=Math.max(0,(this.dodgeT||0)-t);let f=this.dodgeT>0&&this.pitPick&&s.ahead(n.s,this.pitPick.p.s0)<90;this.lane+=(u-this.lane)*Math.min(1,t*(h!==null?6:l===null&&!this.careful&&!f?1.2:3));let g=s.pointAt(n.s+d,this.lane);this.noiseT-=t,this.noiseT<=0&&(this.noiseT=zi(.3,1.2),this.noise=zi(-.12,.12)/this.skill);let x=Math.atan2(g.z-n.z,g.x-n.x),m=Wy(x-n.th),p=Math.max(-1,Math.min(1,m*(h!==null?5:2.6)+(this.careful?0:this.noise))),_=1,v=0;this.careful&&r>27&&(_=0,v=r>31?.5:0),l!==null&&this.rollerCost>=9&&this.rollerTraffic&&this.skill>=1.5&&r>14&&(_=0,v=.4),Math.abs(m)>1.7?(_=0,v=1,p=-Math.sign(m)):Math.abs(m)>.55&&r>18&&(_=.3),Math.abs(s.curvatureAhead(n.s,25))>.9&&r>30&&(_=Math.min(_,.5));let A=!1;if(n.item==="jump"&&this.rocketClose(e))A=!0;else if(n.item){if(this.itemDelay-=t,this.itemDelay<=0)if(n.item==="nitro")A=Math.abs(s.curvatureAhead(n.s,70))<.3;else if(n.item==="jump"){if(A=e.obstacles.dangerAhead(n.s,12+r*.15)&&n.onGround,!A)for(let S of s.pits)s.ahead(n.s,S.s0)<6&&n.onGround&&r<24&&!S.bridges.some(([R,E])=>n.d>R-.5&&n.d<E+.5)&&(A=!0)}else n.item==="wave"?A=e.vehicles.some(S=>S!==n&&S.state==="ok"&&Math.hypot(S.x-n.x,S.z-n.z)<16):n.item==="tire"?A=e.vehicles.some(S=>S!==n&&S.state==="ok"&&s.ahead(n.s,S.s)<45&&Math.abs(S.d-n.d)<3.5):n.item==="barrel"?A=e.vehicles.some(S=>S!==n&&S.state==="ok"&&s.ahead(S.s,n.s)<30)||this.itemDelay<-6:n.item==="rocket"&&(A=n.place>1)}else this.itemDelay=zi(.8,3);return{steer:p,throttle:_,brake:v,item:A}}rollerLane(t,e,n=null){let s=this.v,r=this.track,o=t.obstacles,a=o.dodge.map(u=>{let f=r.ahead(s.s,u.s);return f>r.length/2&&(f-=r.length),{o:u,ds:f,reach:u.len/2+2.6}}).filter(u=>u.ds>-u.reach&&u.ds<80);if(!a.length)return this.rollerTry=null,null;if(this.rollerTry==null&&(this.rollerTry=Math.random()<.5*this.skill*(a[0].o.ball?1.5:1)),!this.rollerTry)return null;let c=Math.max(e,10),l=n!==null&&this.pitPick&&r.ahead(s.s,this.pitPick.p.s0)<150,h=null,d=1/0;for(let u=-10;u<=10;u++){let f=Math.abs(u-s.d)*.05-(u===this.rollerBest?.3:0)+(l?Math.abs(u-n)*.2:0);for(let{o:g,ds:x,reach:m}of a){let p=Math.max(0,(x-m)/c-.2),_=(x+m)/c+.2;for(let v=p;v<=_;v+=.05){let y=s.d+Math.max(-7*v,Math.min(7*v,u-s.d));if(Math.abs(o.rollerD(g,v)-y)<g.r+2*s.size+.6){f+=10;break}}}f<d&&(d=f,h=u)}return this.rollerBest=h,this.rollerCost=d,this.rollerTraffic=a.some(u=>u.o.loop),h}meteorLane(t,e){let n=t.obstacles.rain;if(!n||!n.active.length)return null;let s=this.v,r=this.track,o=Math.max(e,8),a=Ps+2.2*s.size,c=[];for(let d of n.active){let u=d.T-d.t,f=r.ahead(s.s,d.s);f>r.length/2&&(f-=r.length);let g=f-o*u;Math.abs(g)>a+3||(d.ai=d.ai||new Map,d.ai.has(this)||d.ai.set(this,Math.random()<.05+.4*this.skill),d.ai.get(this)&&c.push({m:d,left:u}))}if(!c.length)return null;let l=null,h=1/0;for(let d=-11;d<=11;d++){let u=Math.abs(d-s.d)*.05-(d===this.meteorBest?.5:0);for(let{m:f,left:g}of c){let x=s.d+Math.max(-7*g,Math.min(7*g,d-s.d)),m=Math.abs(x-f.d);m<a&&(u+=10+2*(a-m))}u<h&&(h=u,l=d)}return this.meteorBest=l,l}rocketClose(t){let e=this.v,n=this.track;for(let s of t.projectiles.list){if(s.kind!=="rocket"||s.target!==e||s.dead)continue;let r=n.ahead(s.s,e.s);if(!(r>n.length/2||(r-2.6*e.size)/Math.max(1,s.speed-e.vF)>.35)&&(s.aiDodge===void 0&&(s.aiDodge=Math.random()<.4*this.skill),s.aiDodge))return!0}return!1}};var Xy=26,qy=72,Yy=2.6,Zo=null;function Zy(){if(Zo)return Zo;let i=new ln(.9,.42,8,14),t=new j({color:1776411,roughness:.9}),e=new qt(.5,.5,.5,10).rotateX(Math.PI/2),n=new j({color:16763904,metalness:.3,roughness:.4}),s=new qt(.9,.9,1.8,12),r=new j({color:13904410,roughness:.5}),o=new qt(.93,.93,.18,12),a=new j({color:16765952,emissive:5583616}),c=new qt(.35,.35,2.4,10).rotateZ(Math.PI/2),l=new Pe(.35,.8,10).rotateZ(-Math.PI/2).translate(1.6,0,0),h=new Ct(.6,1.1,.08).translate(-1,0,0),d=new j({color:15658734,roughness:.4}),u=new j({color:16724016,emissive:6688784});return Zo={tireGeo:i,tireMat:t,rimGeo:e,rimMat:n,barrelGeo:s,barrelMat:r,bandGeo:o,bandMat:a,bodyGeo:c,noseGeo:l,finGeo:h,rocketMat:d,noseMat:u},Zo}function $y(i){let t=Zy(),e=new Jt;if(i==="tire"){let n=new B(t.tireGeo,t.tireMat),s=new B(t.rimGeo,t.rimMat),r=new Jt;r.add(n,s),e.add(r),e.userData.spin=r}else if(i==="barrel"){let n=new B(t.barrelGeo,t.barrelMat);n.position.y=.9,e.add(n);for(let s of[.45,1.35]){let r=new B(t.bandGeo,t.bandMat);r.position.y=s,e.add(r)}}else{let n=new B(t.bodyGeo,t.rocketMat),s=new B(t.noseGeo,t.noseMat);e.add(n,s);for(let r=0;r<4;r++){let o=new B(t.finGeo,t.noseMat);o.rotation.x=r*Math.PI/2,e.add(o)}e.children.forEach(r=>r.scale.setScalar(1.6))}return e.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),e}var $o=class{constructor(t,e){this.scene=t,this.game=e,this.list=[],this.pool={tire:[],barrel:[],rocket:[]}}clear(){for(let t of this.list)this.release(t);this.list.length=0}mesh(t){let e=this.pool[t].pop()||$y(t);return e.visible=!0,e.parent||this.scene.add(e),e}release(t){t.mesh.visible=!1,this.pool[t.kind].push(t.mesh)}launch(t,e){let n=this.game.track,s=Math.max(0,e.vx*Math.cos(e.th)+e.vz*Math.sin(e.th)),r={kind:t,owner:e,s:e.s,d:e.d,y:e.y+1,t:0,vy:0,mesh:this.mesh(t),dead:!1};t==="tire"?(r.s=n.wrap(e.s+4*e.size),r.speed=s+Xy,r.vy=6,r.life=7):t==="barrel"?(r.s=n.wrap(e.s-4.5*e.size),r.speed=0,r.y=e.y+1.5,r.life=40):(r.s=n.wrap(e.s+3*e.size),r.y=e.y+3,r.speed=Math.max(s+20,qy),r.target=this.pickTarget(e),r.life=9,r.target&&r.target.events.push({type:"rocketWarn"})),this.list.push(r),this.place(r,0)}pickTarget(t){let e=this.game.vehicles.filter(n=>n!==t&&!n.finished&&n.state!=="fallen"&&n.place<t.place);return e.sort((n,s)=>s.place-n.place),e[0]||null}ground(t){return this.game.track.surfaceAt(t.s,t.d)}place(t,e){let n=this.game.track.pointAt(t.s,t.d);t.x=n.x,t.z=n.z;let s=t.mesh;s.position.set(n.x,t.y,n.z),s.rotation.y=Math.PI/2-n.th,t.kind==="tire"?(s.rotation.y=-n.th,s.userData.spin.rotation.z-=t.speed*e/1.3):t.kind==="rocket"&&s.rotation.set(0,-n.th,0)}explode(t,e){this.game.fx.explosion(t.x,t.y,t.z),this.game.boom(t.x,t.y,t.z);for(let s of this.game.vehicles){if(s.state!=="ok"||t.kind==="rocket"&&s===t.owner)continue;let r=s.x-t.x,o=s.z-t.z,a=Math.hypot(r,o);s!==e&&a>7||s.hit({dirX:r/(a||1),dirZ:o/(a||1),push:6,up:9,speedMul:.35,stun:1.3,kind:t.kind==="rocket"?"rocketed":"barreled"})}t.dead=!0}update(t){let e=this.game.track,n=this.game.vehicles;for(let s of this.list){if(s.t+=t,s.t>s.life){s.dead=!0;continue}s.s=e.wrap(s.s+s.speed*t);let r=this.ground(s);if(s.kind==="tire"){s.vy-=30*t,s.y+=s.vy*t;let o=r.h+.95;if(s.y<o&&!r.pit&&(s.y=o,s.vy=Math.abs(s.vy)>3?Math.abs(s.vy)*.55:4.5),r.pit&&s.y<r.h-3){s.dead=!0;continue}s.d*=1-t*.4}else if(s.kind==="barrel"){if(s.vy-=30*t,s.y=Math.max(r.h,s.y+s.vy*t),s.y===r.h&&(s.vy=0),r.pit&&s.y<=r.h+.01){s.dead=!0;continue}}else{let o=s.target,a=1/0;if(o&&o.state!=="fallen"&&!o.finished){a=e.ahead(s.s,o.s),a>e.length/2&&(a=1/0);let c=Math.min(1,t*(a<30?6:2));s.d+=(o.d-s.d)*c;let l=a<12?o.y+1.2:Math.max(r.h+3,o.y+3);s.y+=(l-s.y)*Math.min(1,t*5),s.speed=Math.max(s.speed,(o.vF||0)+25)}else s.y+=(r.h+3-s.y)*Math.min(1,t*3);this.game.fx.boostFlame(s.x,s.y,s.z,0,0)}this.place(s,t);for(let o of n){if(o.state!=="ok"||o===s.owner&&(s.kind==="rocket"||s.t<(s.kind==="barrel"?1.2:.6)))continue;let a=o.x-s.x,c=o.z-s.z,l=Yy*o.size;if(!(a*a+c*c>l*l||Math.abs(o.y+1.5-s.y)>3.5*o.size)){if(s.kind==="tire"){let h=Math.hypot(a,c)||1;o.hit({dirX:a/h,dirZ:c/h,push:5,up:4,speedMul:.45,stun:1.2,kind:"tired"})&&(this.game.fx.dust(s.x,s.y,s.z,0,0,void 0,12,2),s.dead=!0)}else this.explode(s,o);break}}}for(let s of this.list)s.dead&&this.release(s);this.list=this.list.filter(s=>!s.dead)}dangerAhead(t,e,n){let s=this.game.track;return this.list.some(r=>r.kind!=="rocket"&&Math.abs(r.d-e)<4&&s.ahead(t,r.s)<n)}};var Jy=`
attribute float psize;
attribute float palpha;
attribute vec3 pcolor;
uniform float scale;
uniform float maxPx;
varying float vA;
varying vec3 vC;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = min(maxPx, psize * scale / max(0.1, -mv.z));
  gl_Position = projectionMatrix * mv;
  vA = palpha;
  vC = pcolor;
}`,Ky=`
uniform sampler2D map;
varying float vA;
varying vec3 vC;
void main() {
  vec4 t = texture2D(map, gl_PointCoord);
  float a = t.a * vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vC, a);
}`,Jo=class{constructor(t,e=1600,n=!1){this.max=e,this.next=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size0=new Float32Array(e),this.grow=new Float32Array(e),this.alpha0=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.under=new Uint8Array(e);let s=new ye;s.setAttribute("position",new pe(this.pos,3).setUsage($n)),s.setAttribute("pcolor",new pe(this.col,3).setUsage($n)),s.setAttribute("psize",new pe(this.size,1).setUsage($n)),s.setAttribute("palpha",new pe(this.alpha,1).setUsage($n)),this.mat=new Ve({uniforms:{map:{value:Lo()},scale:{value:500},maxPx:{value:4096}},vertexShader:Jy,fragmentShader:Ky,transparent:!0,depthWrite:!1,blending:n?Kr:ci}),this.points=new po(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=n?11:10,t.add(this.points),this.geo=s,this.alive=0}setScale(t,e,n=0){this.mat.uniforms.scale.value=t/(2*Math.tan(e*Math.PI/360)),this.mat.uniforms.maxPx.value=n?t*n:4096}emit(t){let e=this.next;this.next=(this.next+1)%this.max,this.life[e]<=0&&this.alive++;let n=e*3;this.pos[n]=t.x,this.pos[n+1]=t.y,this.pos[n+2]=t.z,this.vel[n]=t.vx||0,this.vel[n+1]=t.vy||0,this.vel[n+2]=t.vz||0;let s=t.color||[1,1,1];this.col[n]=s[0],this.col[n+1]=s[1],this.col[n+2]=s[2],this.life[e]=this.maxLife[e]=t.life||1,this.size0[e]=t.size||1,this.grow[e]=t.grow||0,this.alpha0[e]=t.alpha??1,this.grav[e]=t.gravity||0,this.drag[e]=t.drag??1,this.under[e]=t.y<-.1?1:0,this.size[e]=this.size0[e],this.alpha[e]=this.alpha0[e]}update(t){if(this.alive===0){this.points.visible=!1;return}this.points.visible=!0;let{pos:e,vel:n,life:s,maxLife:r,size:o,size0:a,grow:c,alpha:l,alpha0:h,grav:d,drag:u,under:f}=this,g=0;for(let x=0;x<this.max;x++){if(s[x]<=0){l[x]!==0&&(l[x]=0,o[x]=0);continue}s[x]-=t,s[x]>0&&g++;let m=x*3,p=Math.exp(-u[x]*t);n[m]*=p,n[m+2]*=p,n[m+1]=n[m+1]*p-d[x]*t,e[m]+=n[m]*t,e[m+1]+=n[m+1]*t,e[m+2]+=n[m+2]*t;let _=Math.max(0,s[x]/r[x]);o[x]=a[x]+c[x]*(1-_),l[x]=h[x]*Math.min(1,_*2.5),e[m+1]<-.1&&!f[x]&&(l[x]=0)}this.alive=g;for(let x of["position","pcolor","psize","palpha"])this.geo.attributes[x].needsUpdate=!0}},Ko=class{constructor(t){this.soft=new Jo(t,2200,!1),this.glow=new Jo(t,1200,!0),this.cheap=!1,this.maxFrac=.2}setScale(t,e){let n=this.cheap?this.maxFrac:0;this.soft.setScale(t,e,n),this.glow.setScale(t,e,n)}update(t){this.soft.update(t),this.glow.update(t)}dust(t,e,n,s,r,o=this.dustColor||[.62,.48,.34],a=1,c=2.2){for(let l=0;l<a;l++)this.soft.emit({x:t+(Math.random()-.5)*1.2,y:e+.3,z:n+(Math.random()-.5)*1.2,vx:s*.15+(Math.random()-.5)*3,vy:1+Math.random()*2.5,vz:r*.15+(Math.random()-.5)*3,life:.9+Math.random()*.6,size:c,grow:3.5,color:o,alpha:.55,gravity:-.4,drag:1.5})}mud(t,e,n,s,r,o=3){for(let a=0;a<o;a++)this.soft.emit({x:t,y:e+.5,z:n,vx:-s*.1+(Math.random()-.5)*6,vy:4+Math.random()*6,vz:-r*.1+(Math.random()-.5)*6,life:.8+Math.random()*.4,size:.7+Math.random()*.6,grow:.2,color:[.3+Math.random()*.08,.2,.1],alpha:1,gravity:22,drag:.5})}sparks(t,e,n,s=10){for(let r=0;r<s;r++)this.glow.emit({x:t,y:e,z:n,vx:(Math.random()-.5)*14,vy:Math.random()*8+2,vz:(Math.random()-.5)*14,life:.3+Math.random()*.4,size:.35,grow:-.2,color:[1,.75,.3],alpha:1,gravity:20,drag:1})}splash(t,e,n,s=50){for(let r=0;r<s;r++){let o=Math.random()*Math.PI*2,a=2+Math.random()*7;this.soft.emit({x:t,y:e,z:n,vx:Math.cos(o)*a,vy:6+Math.random()*10,vz:Math.sin(o)*a,life:1+Math.random()*.6,size:.8+Math.random()*1.2,grow:1,color:[.75,.9,.95],alpha:.9,gravity:18,drag:.6})}}explosion(t,e,n){for(let s=0;s<60;s++){let r=Math.random()*Math.PI*2,o=Math.random()*Math.PI/2,a=6+Math.random()*14;this.glow.emit({x:t,y:e+1,z:n,vx:Math.cos(r)*Math.cos(o)*a,vy:Math.sin(o)*a+3,vz:Math.sin(r)*Math.cos(o)*a,life:.4+Math.random()*.5,size:2+Math.random()*2,grow:3,color:[1,.45+Math.random()*.35,.1],alpha:1,gravity:-2,drag:3})}for(let s=0;s<40;s++)this.soft.emit({x:t+(Math.random()-.5)*3,y:e+1+Math.random()*2,z:n+(Math.random()-.5)*3,vx:(Math.random()-.5)*6,vy:3+Math.random()*5,vz:(Math.random()-.5)*6,life:1.6+Math.random(),size:3,grow:7,color:[.2,.2,.2],alpha:.7,gravity:-1.5,drag:1.2});this.sparks(t,e+1,n,30)}smoke(t,e,n,s,r,o=0,a=1.2){let c=.8-.6*o;this.soft.emit({x:t+(Math.random()-.5)*.8,y:e+.3,z:n+(Math.random()-.5)*.8,vx:s+(Math.random()-.5)*2.5,vy:1.5+Math.random()*2+o*1.5,vz:r+(Math.random()-.5)*2.5,life:.7+Math.random()*.4+o*.3,size:a,grow:2.2+o*1.3,color:[c,c*.97,c*.95],alpha:.4+.2*o,gravity:-.8,drag:1.6})}boostFlame(t,e,n,s,r){this.glow.emit({x:t,y:e,z:n,vx:s*.6+(Math.random()-.5)*2,vy:1.5+Math.random(),vz:r*.6+(Math.random()-.5)*2,life:.25,size:1.1,grow:-.6,color:[.4,.7,1],alpha:1,gravity:0,drag:2})}confetti(t,e,n,s=80){let r=[[1,.2,.3],[1,.85,.1],[.2,.8,1],[.4,1,.4],[1,.5,1]];for(let o=0;o<s;o++)this.soft.emit({x:t+(Math.random()-.5)*20,y:e+10+Math.random()*6,z:n+(Math.random()-.5)*20,vx:(Math.random()-.5)*4,vy:Math.random()*3,vz:(Math.random()-.5)*4,life:3+Math.random()*2,size:.5,grow:0,color:r[o%r.length],alpha:1,gravity:3,drag:1.5})}};var zl=i=>440*Math.pow(2,(i-69)/12),Ad=new WeakMap;function kl(i,t){let e=Ad.get(i);if(e||(e={},Ad.set(i,e)),e[t])return e[t];let n=2048,s=new Float32Array(n);for(let r=0;r<n;r++){let o=r/(n-1)*2-1;s[r]=Math.tanh(o*t)/Math.tanh(t)}return e[t]=s,s}var Rd=new WeakMap;function jy(i){let t=Rd.get(i);if(t)return t;t=i.createBuffer(1,i.sampleRate,i.sampleRate);let e=t.getChannelData(0),n=12345;for(let s=0;s<e.length;s++)n=n*1103515245+12345&2147483647,e[s]=n/2147483647*2-1;return Rd.set(i,t),t}var Cd=new WeakMap;function Hl(i,t,{secs:e=1.2,damp:n=.996,bright:s=.5,seed:r=1}={}){let o=Cd.get(i);o||(o=new Map,Cd.set(i,o));let a=`${t}|${e}|${n}|${s}|${r}`;if(o.has(a))return o.get(a);let c=i.sampleRate,l=Math.ceil(e*c),h=i.createBuffer(1,l,c),d=h.getChannelData(0),u=c/zl(t),f=Math.max(2,Math.floor(u)),g=u-f,x=r*9301+49297,m=()=>(x=(x*9301+49297)%233280,x/233280*2-1),p=0;for(let v=0;v<f;v++)p+=s*(m()-p),d[v]=p;for(let v=f;v<l;v++){let y=d[v-f],A=v-f-1>=0?d[v-f-1]:y;d[v]=n*(.5*(y+A)*(1-g)+y*g)}let _=0;for(let v=0;v<l;v++)_=Math.max(_,Math.abs(d[v]));if(_>0)for(let v=0;v<l;v++)d[v]/=_;return o.set(a,h),h}var we={kick(i,t,e,n=1){let s=i.createOscillator(),r=i.createGain();s.type="sine",s.frequency.setValueAtTime(160,e),s.frequency.exponentialRampToValueAtTime(42,e+.12),r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(1*n,e+.004),r.gain.exponentialRampToValueAtTime(1e-4,e+.32),s.connect(r).connect(t),s.start(e),s.stop(e+.35),we.noiseHit(i,t,e,.015,.25*n,"highpass",2500)},noiseHit(i,t,e,n,s,r,o,a=.8){let c=i.createBufferSource();c.buffer=jy(i);let l=i.createBiquadFilter();l.type=r,l.frequency.value=o,l.Q.value=a;let h=i.createGain();h.gain.setValueAtTime(s,e),h.gain.exponentialRampToValueAtTime(1e-4,e+n),c.connect(l).connect(h).connect(t),c.start(e,Math.random()*.5),c.stop(e+n+.02)},snare(i,t,e,n=1){we.noiseHit(i,t,e,.2,.55*n,"bandpass",2200,.6),we.noiseHit(i,t,e,.12,.3*n,"highpass",5e3);let s=i.createOscillator(),r=i.createGain();s.type="triangle",s.frequency.setValueAtTime(240,e),s.frequency.exponentialRampToValueAtTime(170,e+.08),r.gain.setValueAtTime(.45*n,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.1),s.connect(r).connect(t),s.start(e),s.stop(e+.12)},hat(i,t,e,n=1,s=!1){we.noiseHit(i,t,e,s?.28:.045,.22*n,"highpass",7500)},crash(i,t,e,n=1){we.noiseHit(i,t,e,1.6,.3*n,"highpass",4500,.5),we.noiseHit(i,t,e,.6,.18*n,"bandpass",3e3,.4)},tom(i,t,e,n,s=1){let r=i.createOscillator(),o=i.createGain();r.type="sine",r.frequency.setValueAtTime(zl(n)*1.5,e),r.frequency.exponentialRampToValueAtTime(zl(n),e+.08),o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.8*s,e+.005),o.gain.exponentialRampToValueAtTime(1e-4,e+.35),r.connect(o).connect(t),r.start(e),r.stop(e+.4),we.noiseHit(i,t,e,.05,.15*s,"bandpass",1200)},bass(i,t,e,n,s,r=1){let o=i.createBufferSource();o.buffer=Hl(i,n,{secs:1,damp:.998,bright:.35,seed:n});let a=i.createWaveShaper();a.curve=kl(i,1.8);let c=i.createBiquadFilter();c.type="lowpass",c.frequency.value=1100,c.Q.value=.6;let l=i.createGain();l.gain.setValueAtTime(.9*r,e),l.gain.setValueAtTime(.9*r,e+s*.85),l.gain.exponentialRampToValueAtTime(1e-4,e+s+.04),o.connect(a).connect(c).connect(l).connect(t),o.start(e),o.stop(e+s+.06)},guitar(i,t,e,n,s,{v:r=1,mute:o=!1,drive:a=9,bright:c=4200}={}){let l=o?Math.min(s,.16):s;for(let[h,d,u]of[[-.75,0,1],[.75,.011,2]]){let f=e+d,g=i.createGain();g.gain.value=2.2;let x=i.createBiquadFilter();x.type="highpass",x.frequency.value=100;let m=i.createWaveShaper();m.curve=kl(i,a),m.oversample="2x";let p=i.createBiquadFilter();p.type="peaking",p.frequency.value=500,p.gain.value=-3,p.Q.value=1;let _=i.createBiquadFilter();_.type="peaking",_.frequency.value=1700,_.gain.value=4,_.Q.value=.9;let v=i.createBiquadFilter();v.type="lowpass",v.Q.value=.7,v.frequency.value=o?1800:c;let y=i.createBiquadFilter();y.type="lowpass",y.Q.value=.5,y.frequency.value=o?2600:c*1.5;let A=i.createGain();A.gain.setValueAtTime(.17*r,f),A.gain.setValueAtTime(.17*r,f+l*.8),A.gain.exponentialRampToValueAtTime(1e-4,f+l+.03);for(let[T,R]of[[0,0],[7,1],[12,2]]){let E=i.createBufferSource();E.buffer=Hl(i,n+T,{secs:1.4,damp:o?.985:.9985,bright:o?.4:.8,seed:u*7+R}),E.connect(g),E.start(f+R*.004),E.stop(f+l+.05)}let S=g.connect(x).connect(m).connect(p).connect(_).connect(v).connect(y).connect(A);if(i.createStereoPanner){let T=i.createStereoPanner();T.pan.value=h,S=S.connect(T)}S.connect(t)}},lead(i,t,e,n,s,r=1){let o=i.createBufferSource();o.buffer=Hl(i,n,{secs:2.5,damp:.9996,bright:.7,seed:3});let a=i.createOscillator(),c=i.createGain();a.frequency.value=5.8,c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(s>.3?.012:0,e+Math.min(s,.3)),a.connect(c).connect(o.playbackRate);let l=i.createGain();l.gain.value=2.5;let h=i.createWaveShaper();h.curve=kl(i,6),h.oversample="2x";let d=i.createBiquadFilter();d.type="peaking",d.frequency.value=1200,d.gain.value=5,d.Q.value=.8;let u=i.createBiquadFilter();u.type="lowpass",u.frequency.value=3600,u.Q.value=.7;let f=i.createGain();f.gain.setValueAtTime(.14*r,e),f.gain.setValueAtTime(.14*r,e+s*.9),f.gain.exponentialRampToValueAtTime(1e-4,e+s+.08);let g=i.createDelay(1);g.delayTime.value=.18;let x=i.createGain();x.gain.value=.25;let m=i.createGain();m.gain.value=.3,o.connect(l).connect(h).connect(d).connect(u).connect(f),f.connect(t),f.connect(g),g.connect(x).connect(g),g.connect(m).connect(t),o.start(e),o.stop(e+s+.1),a.start(e),a.stop(e+s+.1)}},Ze=40,Gi=43,Ls=45,jo=47,en=48,Pn=50,Qo=41;function Qy(i,t,{half:e=!1,fill:n=!1}={}){let s=[];return n&&i>=8?(i%2===0&&s.push(["tom",50-(i-8)*2]),i===15&&s.push(["snare",1.1]),s):(e?((i===0||i===10)&&s.push(["kick",1]),i===8&&s.push(["snare",1])):((i===0||i===6||i===8||i===11)&&s.push(["kick",i===0?1:.85]),(i===4||i===12)&&s.push(["snare",1])),i%2===0&&s.push(["hat",i%4===0?.9:.6]),s)}var tv={bpm:150,sections:[{name:"intro",bars:[Ze,Ze,Ze,Ze],guitar:"mute",drums:"build",lead:null},{name:"estrofa",bars:[Ze,Ze,en,Pn,Ze,Ze,en,jo],guitar:"mute",drums:"rock",lead:null},{name:"estribillo",bars:[Gi,Pn,Ze,en,Gi,Pn,en,Pn],guitar:"open",drums:"rock",lead:"chorus"},{name:"estrofa",bars:[Ze,Ze,en,Pn,Ze,Ze,en,jo],guitar:"mute",drums:"rock",lead:"riff"},{name:"puente",bars:[en,en,Pn,Pn,Ls,Ls,jo,jo],guitar:"open",drums:"half",lead:null},{name:"estribillo",bars:[Gi,Pn,Ze,en,Gi,Pn,en,Pn],guitar:"open",drums:"rock",lead:"chorus"}],loopFrom:1,leads:{chorus:[[[0,71,4],[4,74,4],[8,76,6],[14,74,2]],[[0,74,3],[3,71,3],[6,69,2],[8,71,8]],[[0,67,4],[4,71,4],[8,74,4],[12,76,4]],[[0,79,6],[6,78,2],[8,76,4],[12,74,4]],[[0,71,4],[4,74,4],[8,76,6],[14,79,2]],[[0,78,3],[3,76,3],[6,74,2],[8,74,8]],[[0,72,4],[4,76,4],[8,79,4],[12,76,4]],[[0,78,8],[8,74,4],[12,69,4]]],riff:[[[0,64,2],[3,67,2],[6,69,2],[10,67,2],[12,71,3]],[[0,69,2],[2,67,2],[4,64,4],[12,62,2],[14,64,2]],[[0,64,2],[3,67,2],[6,69,2],[10,72,2],[12,71,3]],[[0,74,3],[4,71,2],[6,69,2],[8,71,8]]]}},Id={bpm:112,sections:[{name:"a",bars:[Ls,Ls,Qo,Qo,en,en,Gi,Gi],guitar:"stab",drums:"groove",lead:null},{name:"b",bars:[Ls,Ls,Qo,Qo,en,en,Gi,Ze],guitar:"stab",drums:"groove",lead:"menu"}],loopFrom:0,leads:{menu:[[[0,76,3],[4,72,2],[6,74,2],[8,76,6]],[[0,79,4],[6,76,2],[8,74,8]],[[0,72,3],[4,69,2],[6,72,2],[8,77,6]],[[0,76,4],[4,74,4],[8,72,8]],[[0,67,2],[2,72,2],[4,76,4],[8,79,6]],[[0,79,2],[2,77,2],[4,76,4],[8,74,8]],[[0,74,3],[4,71,3],[8,74,4],[12,79,4]],[[0,76,12]]]}},Ld={race:tv,menu:Id},Vi=new Set;function ev(i,t){let e=i.sections,n=t,s=o=>e.slice(o).reduce((a,c)=>a+c.bars.length,0),r=s(0);n>=r&&(n=i.sections.slice(0,i.loopFrom).reduce((o,a)=>o+a.bars.length,0)+(n-r)%s(i.loopFrom));for(let o of e){if(n<o.bars.length)return{sec:o,inSec:n,root:o.bars[n],next:o.bars[n+1]};n-=o.bars.length}return{sec:e[0],inSec:0,root:e[0].bars[0]}}var Pd=new WeakMap;function nv(i,t){let e=Pd.get(t);if(e)return e;let n=Math.floor(i.sampleRate*1.3),s=i.createBuffer(2,n,i.sampleRate);for(let l=0;l<2;l++){let h=s.getChannelData(l),d=777+l*31;for(let u=0;u<n;u++){d=d*1103515245+12345&2147483647;let f=u/i.sampleRate;h[u]=(d/2147483647*2-1)*Math.exp(-f*4.2)*(f<.012?f/.012:1)*.5}}let r=i.createConvolver();r.buffer=s;let o=i.createBiquadFilter();o.type="highpass",o.frequency.value=300;let a=i.createGain();a.gain.value=.35,o.connect(r).connect(a).connect(t);let c=(l,h)=>{let d=i.createGain();if(d.gain.value=l,d.connect(t),h){let u=i.createGain();u.gain.value=h,d.connect(u).connect(o)}return d};return e={drums:c(1.9,.35),bass:c(.55,0),guitar:c(1,.2),lead:c(1,.45)},Pd.set(t,e),e}function iv(i,t,e,n,s,r){let o=nv(i,t),a=o.drums,c=Math.floor(n/16),l=n%16,{sec:h,inSec:d,root:u}=ev(e,c),f=d===h.bars.length-1,g=e===Id;if(!Vi.has("drums"))if(h.drums==="build")l%4===0&&we.kick(i,a,s,.9),d>=2&&l%2===0&&we.hat(i,a,s,.5),d===3&&l>=8&&we.snare(i,a,s,.4+(l-8)*.08);else{d===0&&l===0&&we.crash(i,a,s,.9);let m=g?(()=>{let p=[];return(l===0||l===7||l===10)&&p.push(["kick",.9]),(l===4||l===12)&&p.push(["snare",.8]),p.push(["hat",l%4===2?.7:.4]),l===14&&p.push(["hatOpen",.6]),p})():Qy(l,c,{half:h.drums==="half",fill:f&&h.name!=="puente"&&d%8===7});for(let[p,_]of m)p==="kick"?we.kick(i,a,s,_):p==="snare"?we.snare(i,a,s,_):p==="hat"?we.hat(i,a,s,_):p==="hatOpen"?we.hat(i,a,s,_,!0):p==="tom"&&we.tom(i,a,s,_)}a=o.bass,Vi.has("bass")||(g?[0,3,6,8,11,14].includes(l)&&we.bass(i,a,s,u+(l===11?12:l===14?7:0),r*2,.9):(h.drums!=="build"||d>=2)&&l%2===0&&we.bass(i,a,s,u+(h.drums==="half"&&l>=8?7:0),r*1.8,l%4===0?1:.8)),a=o.guitar;let x=u+12;if(Vi.has("guitar")||(h.guitar==="mute"?l%2===0&&we.guitar(i,a,s,x,r*2,{mute:l%8!==0,v:l%8===0?1:.75}):h.guitar==="open"?(l===0&&we.guitar(i,a,s,x,r*6,{v:1}),l===6&&we.guitar(i,a,s,x,r*2,{mute:!0,v:.8}),l===8&&we.guitar(i,a,s,x,r*6,{v:.95}),l===14&&we.guitar(i,a,s,x,r*2,{mute:!0,v:.8})):h.guitar==="stab"&&(l===2||l===6||l===10||l===13)&&we.guitar(i,a,s,x,r*1.5,{v:.8,drive:4,bright:2600})),a=o.lead,h.lead&&!Vi.has("lead")){let m=e.leads[h.lead],p=m[d%m.length];for(let[_,v,y]of p)_===l&&we.lead(i,a,s,v,r*y*.95,g?.85:1)}}var Gl=1;function Dd(i){let t=Ld[i],e=60/t.bpm*4,n=c=>c.reduce((l,h)=>l+h.bars.length,0),s=n(t.sections.slice(0,t.loopFrom)),r=n(t.sections.slice(t.loopFrom)),o=.05+s*e,a=o+r*e;return{loopStart:o,loopEnd:a,seconds:a+.05}}async function ta(i,t=30,e=44100,n=[]){Vi.clear();for(let h of n)Vi.add(h);let s=new OfflineAudioContext(2,Math.ceil(t*e),e),r=s.createGain();r.gain.value=.5;let o=s.createDynamicsCompressor();o.threshold.value=-14,o.ratio.value=4,r.connect(o).connect(s.destination);let a=Ld[i],c=60/a.bpm/4;for(let h=0,d=.05;d<t;h++,d+=c)iv(s,r,a,h,d,c);let l=await s.startRendering();return Vi.clear(),l}var sv=1105/44100,rv=.012;function Ud(){return new Promise(i=>{try{let t=indexedDB.open("megamonstruos",1);t.onupgradeneeded=()=>t.result.createObjectStore("musica"),t.onsuccess=()=>i(t.result),t.onerror=()=>i(null)}catch{i(null)}})}async function ov(i){let t=await Ud();return t?new Promise(e=>{try{let n=t.transaction("musica").objectStore("musica").get(i);n.onsuccess=()=>e(n.result||null),n.onerror=()=>e(null)}catch{e(null)}}):null}async function av(i,t){let e=await Ud();if(e)try{e.transaction("musica","readwrite").objectStore("musica").put(t,i)}catch{}}var ea=class{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!0,this.engine=null,this.last={}}init(){if(this.ctx){this.ctx.resume?.();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.muted?0:.7;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,this.master.connect(n).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.22,this.musicBus.connect(this.master);let s=e.sampleRate*2;this.noise=e.createBuffer(1,s,e.sampleRate);let r=this.noise.getChannelData(0);for(let o=0;o<s;o++)r[o]=Math.random()*2-1}toggleMute(){return this.muted=!this.muted,this.master&&this.master.gain.setTargetAtTime(this.muted?0:.7,this.ctx.currentTime,.05),this.muted}osc(t,e,n,s,r,o=0,a=this.sfx){let c=this.ctx,l=c.currentTime+o,h=c.createOscillator(),d=c.createGain();h.type=t,h.frequency.setValueAtTime(e,l),n!==e&&h.frequency.exponentialRampToValueAtTime(Math.max(1,n),l+s),d.gain.setValueAtTime(1e-4,l),d.gain.exponentialRampToValueAtTime(r,l+.01),d.gain.exponentialRampToValueAtTime(1e-4,l+s),h.connect(d).connect(a),h.start(l),h.stop(l+s+.05)}noiseBurst(t,e,n,s,r=s,o=1,a=0,c=this.sfx){let l=this.ctx,h=l.currentTime+a,d=l.createBufferSource();d.buffer=this.noise,d.playbackRate.value=.8+Math.random()*.4;let u=l.createBiquadFilter();u.type=n,u.Q.value=o,u.frequency.setValueAtTime(s,h),r!==s&&u.frequency.exponentialRampToValueAtTime(Math.max(20,r),h+t);let f=l.createGain();f.gain.setValueAtTime(e,h),f.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(u).connect(f).connect(c),d.start(h,Math.random()),d.stop(h+t+.05)}play(t,e=1){if(!this.ctx||this.muted||e<.02)return;let n=this.ctx.currentTime;if(this.last[t]&&n-this.last[t]<.06)return;this.last[t]=n;let s=e;switch(t){case"count":this.osc("square",520,520,.22,.25*s);break;case"go":this.osc("square",1040,1040,.6,.28*s),this.osc("square",1560,1560,.6,.12*s);break;case"stall":for(let r=0;r<7;r++){let o=r*.17+Math.random()*.05,a=1-r*.1;this.noiseBurst(.09,.8*a*s,"lowpass",700,150,1,o),this.osc("square",75-r*4,40,.1,.3*a*s,o)}this.osc("sawtooth",120,35,.9,.12*s);break;case"perfect":[523,784,1046,1568].forEach((r,o)=>this.osc("triangle",r,r,.14,.22*s,o*.05));break;case"crash":this.noiseBurst(.45,.9*s,"lowpass",1600,200),this.osc("sine",120,45,.35,.8*s);break;case"crunch":for(let r=0;r<4;r++)this.noiseBurst(.12,.6*s,"bandpass",900+r*500,400,3,r*.05);this.osc("square",140,60,.3,.25*s);break;case"splash":this.noiseBurst(.9,.8*s,"highpass",500,2500,.7),this.noiseBurst(.5,.5*s,"lowpass",600,150);break;case"boing":this.osc("sine",180,720,.25,.4*s),this.osc("sine",720,360,.3,.25*s,.2);break;case"horn":for(let[r,o]of[[0,.16],[.22,.42]])this.osc("sawtooth",415,405,o,.16*s,r),this.osc("square",523,515,o,.1*s,r);break;case"boom":this.noiseBurst(1.4,1*s,"lowpass",900,60),this.osc("sine",90,30,.9,.9*s);break;case"pickup":[660,880,1320].forEach((r,o)=>this.osc("triangle",r,r,.12,.25*s,o*.06));break;case"tick":this.osc("square",1800,1800,.03,.08*s);break;case"item":this.osc("triangle",990,1480,.15,.25*s);break;case"nitro":this.noiseBurst(1,.7*s,"bandpass",400,3e3,2),this.osc("sawtooth",110,330,.8,.12*s);break;case"turbo":this.noiseBurst(.5,.45*s,"bandpass",600,2400,2);break;case"wave":this.osc("sine",700,60,.7,.6*s),this.noiseBurst(.6,.5*s,"lowpass",2e3,100);break;case"snap":this.noiseBurst(.05,.9*s,"highpass",1500,1500),this.noiseBurst(.05,.9*s,"highpass",1500,1500,1,.18),this.osc("sawtooth",70,50,.6,.25*s,.05);break;case"net":this.osc("sine",110,55,.6,.5*s),this.osc("sawtooth",90,70,.5,.1*s);break;case"land":this.osc("sine",90,40,.25,.7*s),this.noiseBurst(.2,.4*s,"lowpass",500,120);break;case"scrape":this.noiseBurst(.18,.35*s,"bandpass",2600,1800,4);break;case"bump":this.osc("sine",150,70,.15,.5*s),this.noiseBurst(.1,.3*s,"lowpass",800,200);break;case"fall":this.osc("sine",1100,160,1.1,.3*s);break;case"lap":[784,1046].forEach((r,o)=>this.osc("triangle",r,r,.25,.3*s,o*.14));break;case"final":[784,988,1175,1568].forEach((r,o)=>this.osc("square",r,r,.16,.16*s,o*.1));break;case"finish":[523,659,784,1046,784,1046].forEach((r,o)=>this.osc("square",r,r,o===5?.7:.16,.18*s,o*.14));break;case"throw":this.noiseBurst(.25,.4*s,"bandpass",500,1800,1.5),this.osc("triangle",220,440,.18,.2*s);break;case"rocket":this.noiseBurst(1.2,.6*s,"bandpass",1800,600,1.2),this.osc("sawtooth",300,900,.6,.12*s);break;case"click":this.osc("triangle",600,900,.07,.2*s);break;case"wrong":this.osc("square",300,200,.3,.15*s);break}}engineStart(){if(!this.ctx||this.engine)return;let t=this.ctx,e=t.createGain();e.gain.value=0;let n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=500,n.Q.value=3;let s=t.createOscillator();s.type="sawtooth";let r=t.createOscillator();r.type="square";let o=t.createOscillator();o.type="sawtooth";let a=t.createGain();a.gain.value=.5,s.connect(n),r.connect(a).connect(n),o.connect(n),n.connect(e).connect(this.sfx),s.start(),r.start(),o.start(),this.engine={g:e,f:n,o1:s,o2:r,o3:o}}engineUpdate(t,e,n,s){if(!this.engine)return;let r=this.ctx.currentTime,o=Math.min(1.3,Math.max(0,t))+(s?.25*e:0),a=38+o*95+(n?25:0);this.engine.o1.frequency.setTargetAtTime(a,r,.06),this.engine.o2.frequency.setTargetAtTime(a*.5,r,.06),this.engine.o3.frequency.setTargetAtTime(a*1.01+2,r,.06),this.engine.f.frequency.setTargetAtTime(300+o*900+e*500,r,.08),this.engine.g.gain.setTargetAtTime(this.muted?0:.07+e*.05,r,.1)}engineStop(){if(!this.engine)return;let t=this.engine,e=this.ctx.currentTime;t.g.gain.setTargetAtTime(0,e,.1),setTimeout(()=>{try{t.o1.stop(),t.o2.stop(),t.o3.stop()}catch{}},400),this.engine=null}prepareMusic(){if(this.songs||!this.ctx)return;this.songs={};let t=async e=>{let n=Dd(e);try{let s=await this.loadMp3(e,n);this.songs[e]=s||{buf:await this.renderOrCache(e,n),...n}}catch(s){console.warn("M\xFAsica no disponible:",e,s?.message||s);return}this.wantSong===e&&!this.musicSrc&&this.playSong(e)};t("menu").then(()=>t("race"))}async loadMp3(t,e){if(location.protocol==="file:"||typeof fetch!="function")return null;try{let n=await fetch(`assets/musica/${t}-v${Gl}.mp3`);if(!n.ok)return null;let s=await n.arrayBuffer(),r=await new Promise((c,l)=>{let h=this.ctx.decodeAudioData(s,c,l);h&&h.catch&&h.catch(l)}),a=r.duration-e.seconds>rv?sv:0;return r.duration<e.loopEnd+a?null:{buf:r,loopStart:e.loopStart+a,loopEnd:e.loopEnd+a,seconds:e.seconds,from:"mp3"}}catch{return null}}async renderOrCache(t,e){if(typeof OfflineAudioContext>"u")throw new Error("sin OfflineAudioContext");let n=32e3,s=`${t}-v${Gl}-${n}`,r=await ov(s);if(r&&r.ch?.length===2){let a=this.ctx.createBuffer(2,r.ch[0].length,r.rate);return r.ch.forEach((c,l)=>a.copyToChannel(c,l)),a}let o=await ta(t,e.seconds,n);return av(s,{rate:n,ch:[o.getChannelData(0).slice(),o.getChannelData(1).slice()]}),o}playSong(t){let e=this.songs?.[t];if(this.wantSong=t,this.currentSong===t&&this.musicSrc||(this.stopSong(),!e))return;let n=this.ctx.createBufferSource();n.buffer=e.buf,n.loop=!0,n.loopStart=e.loopStart,n.loopEnd=e.loopEnd;let s=this.ctx.createGain(),r=this.ctx.currentTime;s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(1,r+.4),n.connect(s).connect(this.musicBus),n.start(r+.02),this.musicSrc=n,this.musicGain=s,this.currentSong=t}stopSong(){if(!this.musicSrc)return;let{musicSrc:t,musicGain:e}=this,n=this.ctx.currentTime;e.gain.cancelScheduledValues(n),e.gain.setValueAtTime(e.gain.value,n),e.gain.linearRampToValueAtTime(0,n+.3);try{t.stop(n+.32)}catch{}this.musicSrc=null,this.currentSong=null}musicStart(t=!0){this.ctx&&(this.prepareMusic(),this.musicBus.gain.setTargetAtTime(this.musicOn?t?.34:.26:0,this.ctx.currentTime,.1),this.playSong(t?"race":"menu"),this.musicTempo(1))}musicTempo(t){this.musicSrc&&this.musicSrc.playbackRate.setTargetAtTime(t,this.ctx.currentTime,.3)}musicStop(){this.wantSong=null,this.stopSong()}setMusicOn(t){this.musicOn=t,this.musicBus&&this.musicBus.gain.setTargetAtTime(t?.3:0,this.ctx.currentTime,.1)}};var cv={solo:{left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"],gas:["ArrowUp","KeyW"],brake:["ArrowDown","KeyS"],item:["Space","ShiftLeft","ShiftRight","KeyE"],reset:["KeyR"]},p1:{left:["KeyA"],right:["KeyD"],gas:["KeyW"],brake:["KeyS"],item:["KeyQ","Space","ShiftLeft","KeyE"],reset:["KeyR"]},p2:{left:["ArrowLeft"],right:["ArrowRight"],gas:["ArrowUp"],brake:["ArrowDown"],item:["Enter","NumpadEnter","ShiftRight","ControlRight","Numpad0"],reset:["Backspace","NumpadDecimal"]}},lv={0:"A",1:"B",2:"X",3:"Y",4:"LB",5:"RB",9:"Start"},hv=/nintendo|switch|joy-?con|057e/i,uv={pressed:!0,value:1},Nd={pressed:!1,value:0};function dv(i){if(!hv.test(i.id||""))return i;let t=i.buttons,e=i.axes,n,s;if(i.mapping==="standard")n=Array.from(t),n[0]=t[1],n[1]=t[0],n[2]=t[3],n[3]=t[2],s=e;else if(t.length>=10&&e.length>=2){let r=e.length>=6,o=r?e[e.length-2]:0,a=r?e[e.length-1]:0,c=l=>l?uv:Nd;n=[t[2],t[1],t[3],t[0],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],c(a<-.5),c(a>.5),c(o<-.5),c(o>.5),t[12],t[13]].map(l=>l||Nd),s=[e[0]||0,e[1]||0,e[2]||0,e[3]||0]}else return i;return{index:i.index,id:i.id,connected:i.connected,timestamp:i.timestamp,mapping:i.mapping,vibrationActuator:i.vibrationActuator,buttons:n,axes:s,raw:i}}var Od={Left:{keys:["ArrowLeft","KeyA"],button:14,axis:0,sign:-1},Right:{keys:["ArrowRight","KeyD"],button:15,axis:0,sign:1},Up:{keys:["ArrowUp","KeyW"],button:12,axis:1,sign:-1},Down:{keys:["ArrowDown","KeyS"],button:13,axis:1,sign:1}},Fd=.4,fv=.15,na=class{constructor(){this.keys=new Set,this.edges=new Set,this.touch={left:!1,right:!1,gas:!1,brake:!1,item:!1},this.prevPad={},this.padHeld={},this.navState={},this.usedPads=new Set,this.onPadLost=null,this.windows=[];try{navigator.gamepadInputEmulation="gamepad"}catch{}this.attach(window)}attach(t){this.windows.includes(t)||(this.windows.push(t),t.addEventListener("keydown",e=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","Backspace","Enter","NumpadEnter"].includes(e.code)&&e.preventDefault(),this.keys.has(e.code)||this.edges.add(e.code),this.keys.add(e.code)}),t.addEventListener("keyup",e=>this.keys.delete(e.code)),t.addEventListener("blur",()=>this.keys.clear()),t.addEventListener("gamepaddisconnected",e=>{let n=e.gamepad?.index;this.usedPads.has(n)&&(this.usedPads.delete(n),this.onPadLost&&this.onPadLost(n))}))}detach(t){this.windows=this.windows.filter(e=>e!==t)}bindTouch(t){t.querySelectorAll("[data-touch]").forEach(e=>{let n=e.dataset.touch,s=o=>{o.preventDefault(),n==="item"&&!this.touch.item&&this.edges.add("TouchItem"),this.touch[n]=!0,e.classList.add("on")},r=o=>{o.preventDefault(),this.touch[n]=!1,e.classList.remove("on")};e.addEventListener("pointerdown",s),e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("pointerleave",r)})}pressed(...t){for(let e of t)if(this.edges.has(e))return!0;return!1}endFrame(){this.edges.clear()}pads(){let t=new Map;for(let e of this.windows){let n=[];try{n=e.closed?[]:e.navigator.getGamepads?e.navigator.getGamepads():[]}catch{n=[]}for(let s of n){if(!s||!s.connected)continue;let r=t.get(s.index);(!r||s.timestamp>r.timestamp)&&t.set(s.index,s)}}return[...t.values()].sort((e,n)=>e.index-n.index).map(dv)}padDebug(){return(this.padList||[]).map((t,e)=>{let n=t.raw||t,s=t.raw?"Nintendo":n.mapping==="standard"?"est\xE1ndar":"sin adaptar",r=Array.from(n.buttons,(a,c)=>a?.pressed?c:-1).filter(a=>a>=0).join(","),o=Array.from(n.axes,a=>(a||0).toFixed(1)).join(" ");return`J${e+1}: ${s} (${n.mapping||"sin mapa"}, ${n.buttons.length} botones) \xB7 pulsados [${r}] \xB7 ejes ${o}`}).join(`
`)}padEdges(){this.padList=this.pads();let t={};this.padList.forEach((e,n)=>{let s=(r,o)=>{let a=r+"@"+n;o&&!this.prevPad[a]&&(this.edges.add("Pad"+r),this.edges.add("Pad"+r+"@"+n)),this.prevPad[a]=o};for(let[r,o]of Object.entries(lv))s(o,!!e.buttons[r]?.pressed);for(let[r,o]of Object.entries(Od)){let a=!!e.buttons[o.button]?.pressed||(e.axes[o.axis]||0)*o.sign>.6;s(r,a),a&&(t[r]=!0)}(e.buttons.some(r=>r?.pressed)||e.axes.some(r=>Math.abs(r||0)>.3))&&(this.usedPads.add(e.index),this.lastPad=e.index)}),this.padHeld=t}nav(t){let e={};for(let[n,s]of Object.entries(Od)){let r=this.navState[n]||(this.navState[n]={t:0,next:Fd,armed:!1}),o=s.keys.some(a=>this.keys.has(a))||!!this.padHeld[n];this.pressed(...s.keys,"Pad"+n)?(e[n]=!0,r.t=0,r.next=Fd,r.armed=o):o&&r.armed?(r.t+=t,r.t>=r.next&&(e[n]=!0,r.next=Math.max(r.next+fv,r.t))):r.armed=!1}return e}navReset(){for(let t of Object.values(this.navState))t.armed=!1}rumble(t="solo",e=.6,n=200){let s=this.padList||[],o=(t==="solo"?s.find(c=>c.index===this.lastPad)||s[0]:s[t==="p2"?1:0])?.vibrationActuator;if(!o?.playEffect)return;let a=Math.max(0,Math.min(1,e));try{o.playEffect("dual-rumble",{startDelay:0,duration:n,weakMagnitude:a,strongMagnitude:a*.8})?.catch?.(()=>{})}catch{}}drive(t="solo"){let e=cv[t],n=this.keys,s=m=>m.some(p=>n.has(p)),r=t!=="p2",o=0,a=0,c=0,l=!1;(s(e.left)||r&&this.touch.left)&&(o-=1),(s(e.right)||r&&this.touch.right)&&(o+=1),(s(e.gas)||r&&this.touch.gas)&&(a=1),(s(e.brake)||r&&this.touch.brake)&&(c=1);let h=t==="p2"?1:0,d=this.padList||[],u=t==="solo"?d.find(m=>m.buttons.some(p=>p.pressed)||Math.abs(m.axes[0]||0)>.15)||d[0]:d[h];if(u){let m=u.axes[0]||0;Math.abs(m)>.15&&(o=Math.max(-1,Math.min(1,o+m)),l=o===m),u.buttons[14]?.pressed&&(o=-1,l=!1),u.buttons[15]?.pressed&&(o=1,l=!1);let p=u.buttons[7]?.value||0;p>.05&&(a=Math.max(a,p)),u.buttons[0]?.pressed&&(a=1);let _=u.buttons[6]?.value||0;_>.05&&(c=Math.max(c,_)),u.buttons[1]?.pressed&&(c=1)}let f=t==="solo"?["PadX","PadRB","PadLB"]:["PadX@"+h,"PadRB@"+h,"PadLB@"+h],g=this.pressed(...e.item,...f,...r?["TouchItem"]:[]),x=this.pressed(...e.reset,t==="solo"?"PadY":"PadY@"+h);return{steer:o,throttle:a,brake:c,item:g,reset:x,analog:l}}};var Bd=i=>!!i&&i.getClientRects().length>0,xi=class{constructor(t,{row:e=0,col:n=0,ok:s=null}={}){this.allRows=t,this.start=[e,n],this.defaultOk=s,this.painted=[],this.row=e,this.col=n}rows(){return this.allRows.filter(t=>(t.items?t.items():t.els()).some(Bd))}items(t){return t.items?t.items().filter(Bd):null}current(){let t=this.rows();return this.row=Math.max(0,Math.min(t.length-1,this.row)),t[this.row]}clear(){for(let t of this.painted)t.classList.remove("focus");this.painted=[]}reset(){[this.row,this.col]=this.start,this.paint()}move(t){let e=this.rows().length,n=Math.max(0,Math.min(e-1,this.row+t));return n===this.row?!1:(this.row=n,this.paint(),!0)}side(t){let e=this.current();if(!e)return!1;if(e.change)return e.change(t),this.paint(),!0;let n=this.items(e),s=Math.max(0,Math.min(n.length-1,this.col+t));return s===this.col?!1:(this.col=s,this.paint(),!0)}ok(){let t=this.current();if(t){if(t.items){let e=this.items(t);e[Math.min(this.col,e.length-1)]?.click();return}(t.ok||this.defaultOk)?.()}}sync(t){let e=this.rows();for(let n=0;n<e.length;n++){let s=e[n];if(s.items){let r=this.items(s).findIndex(o=>o.contains(t));if(r>=0){this.row=n,this.col=r,this.paint();return}}else if(s.els().some(r=>r.contains(t))){this.row=n,this.paint();return}}}paint(){this.clear();let t=this.current();if(!t){this.painted=[];return}if(t.items){let e=this.items(t);this.col=Math.max(0,Math.min(e.length-1,this.col)),this.painted=e.length?[e[this.col]]:[]}else this.painted=t.els();for(let e of this.painted)e.classList.add("focus")}};var Vl={nitro:'<svg viewBox="0 0 64 64"><path d="M26 8h12v6h-12z" fill="#ddd"/><rect x="20" y="14" width="24" height="40" rx="7" fill="#1f8fff" stroke="#fff" stroke-width="3"/><path d="M32 22c5 6 7 10 3 16-1-4-3-5-5-6 1 4-2 7-4 9-2-6 0-12 6-19z" fill="#ffd400"/></svg>',jump:'<svg viewBox="0 0 64 64"><path d="M14 52h36" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M20 46l24-6-24-6 24-6-24-6 24-6" fill="none" stroke="#ffd400" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><path d="M32 4l10 10H22z" fill="#2ee86b"/></svg>',wave:'<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="6" fill="#ff4fd8"/><circle cx="32" cy="32" r="15" fill="none" stroke="#ff4fd8" stroke-width="5"/><circle cx="32" cy="32" r="25" fill="none" stroke="#b07bff" stroke-width="4" stroke-dasharray="8 5"/></svg>',tire:`<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="22" fill="#222" stroke="#555" stroke-width="3"/><circle cx="32" cy="32" r="10" fill="#ffd400"/><g stroke="#666" stroke-width="5">${[0,45,90,135,180,225,270,315].map(i=>`<path d="M32 4v8" transform="rotate(${i} 32 32)"/>`).join("")}</g><path d="M4 50l8-4M2 40l9-1" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`,barrel:'<svg viewBox="0 0 64 64"><rect x="16" y="8" width="32" height="48" rx="6" fill="#d42a1a" stroke="#fff" stroke-width="3"/><rect x="16" y="18" width="32" height="5" fill="#ffd400"/><rect x="16" y="41" width="32" height="5" fill="#ffd400"/><path d="M32 25l-5 9h4l-2 7 7-10h-4l3-6z" fill="#fff"/></svg>',rocket:'<svg viewBox="0 0 64 64"><path d="M50 14c-10 0-20 6-26 16l10 10c10-6 16-16 16-26z" fill="#eee" stroke="#fff" stroke-width="2"/><circle cx="40" cy="24" r="4" fill="#1f8fff"/><path d="M24 30l-10 2 6 6zM34 40l-2 10-6-6z" fill="#ff3030"/><path d="M22 42c-4 2-8 6-10 10 4-2 8-6 10-10z" fill="#ffd400"/><path d="M50 14l-6 0 6 6z" fill="#ff3030"/></svg>'},pv={nitro:"Nitro",jump:"Supersalto",wave:"Onda expansiva",tire:"Neum\xE1tico loco",barrel:"Barril explosivo",rocket:"Cohete buscador"},kd=Object.keys(Vl);function Ds(i){if(!isFinite(i))return"--:--.--";let t=Math.floor(i/60),e=i-t*60;return`${t}:${e.toFixed(2).padStart(5,"0")}`}var mv=`
  <div class="h-pos"><span class="pos-num">1</span><span class="pos-suf">\xBA</span><small class="pos-total">/6</small></div>
  <div class="h-lap">VUELTA <b class="lap-num">1</b>/<span class="lap-total">3</span></div>
  <ol class="ranking"></ol>
  <div class="h-time"><div class="time-total">0:00.00</div><div class="time-best"></div></div>
  <div class="h-item"><div class="item-slot"></div><div class="item-name"></div><small class="keyhint"></small></div>
  <canvas class="minimap" width="220" height="220"></canvas>
  <div class="h-speed"><span class="speed-num">0</span><small>km/h</small><div class="boost-bar"><div class="boost-fill"></div></div></div>
  <div class="h-msg"></div>
  <div class="h-big"></div>
  <div class="h-hint"></div>
  <div class="h-tag"></div>`,ia=class{constructor(t,e,{doc:n=document,parent:s=null,tag:r="",keyhint:o="ESPACIO"}={}){this.game=t,this.player=e,this.doc=n,this.root=n.createElement("div"),this.root.className="hud hidden",this.root.innerHTML=mv,(s||n.body).appendChild(this.root);let a=c=>this.root.querySelector("."+c);this.el={pos:a("pos-num"),posTotal:a("pos-total"),lap:a("lap-num"),lapTotal:a("lap-total"),time:a("time-total"),best:a("time-best"),item:a("item-slot"),itemBox:a("h-item"),itemName:a("item-name"),speed:a("speed-num"),boost:a("boost-fill"),msg:a("h-msg"),big:a("h-big"),ranking:a("ranking"),hint:a("h-hint"),tag:a("h-tag")},a("keyhint").textContent=o,this.el.tag.textContent=r,this.el.tag.classList.toggle("hidden",!r),this.map=a("minimap"),this.mctx=this.map.getContext("2d"),this.cache={},this.msgT=0,this.bigT=0,this.rollT=0,this.rollIdx=0,this.prepMap()}place(t,e,n,s,r,o){let a=this.root.style;a.left=t*100+"%",a.top=e*100+"%",a.width=n*100+"%",a.height=s*100+"%",this.root.classList.toggle("compact",r<760||o<520)}remove(){this.root.remove()}set(t,e,n,s="textContent"){this.cache[t]!==n&&(this.cache[t]=n,e[s]=n)}show(t){this.root.classList.toggle("hidden",!t)}prepMap(){let t=this.game.track,e=1/0,n=-1/0,s=1/0,r=-1/0;for(let _=0;_<t.N;_++)e=Math.min(e,t.px[_]),n=Math.max(n,t.px[_]),s=Math.min(s,t.pz[_]),r=Math.max(r,t.pz[_]);let o=this.map.width,a=18,c=(o-2*a)/Math.max(n-e,r-s),l=a+(o-2*a-(n-e)*c)/2,h=a+(o-2*a-(r-s)*c)/2;this.toMap=(_,v)=>[l+(_-e)*c,h+(v-s)*c];let d=this.doc.createElement("canvas");d.width=d.height=o;let u=d.getContext("2d"),f=(_,v,y=3)=>{u.beginPath();for(let A=_;A<=v;A+=y){let S=t.pointAt(A),[T,R]=this.toMap(S.x,S.z);A===_?u.moveTo(T,R):u.lineTo(T,R)}};u.lineJoin="round",u.lineCap="round",f(0,t.length),u.closePath(),u.strokeStyle="rgba(0,0,0,0.55)",u.lineWidth=12,u.stroke(),u.strokeStyle="#d9b98c",u.lineWidth=7,u.stroke(),f(t.tunnel.s0,t.tunnel.s1),u.strokeStyle="#555",u.lineWidth=7,u.stroke();for(let _ of t.lakes)f(_.s0,_.s1,2),u.strokeStyle="#c4ecff",u.lineWidth=9,u.stroke();let g={lava:"#ff6a1a",ice:"#6cc8ff",water:"#2bb3a0"};for(let _ of t.pits)f(_.s0,_.s1,1),u.strokeStyle=g[_.liquid]||(_.water?"#2bb3a0":"#222"),u.lineWidth=9,u.stroke();for(let _ of t.meteors)f(_.s0,_.s1,2),u.setLineDash([4,3]),u.strokeStyle="#e8200c",u.lineWidth=4,u.stroke(),u.setLineDash([]);for(let _ of t.crossings){let v=t.pointAt(_.s),[y,A]=this.toMap(v.x,v.z);u.save(),u.translate(y,A),u.rotate(v.th+Math.PI/2),u.fillStyle="rgba(0,0,0,0.7)",u.fillRect(-9,-3,18,6),u.fillStyle="#ffd400",u.fillRect(-8,-2,16,4),u.restore()}let x=t.pointAt(0),[m,p]=this.toMap(x.x,x.z);u.fillStyle="#fff",u.save(),u.translate(m,p),u.rotate(x.th+Math.PI/2),u.fillRect(-6,-2,12,4),u.restore(),this.mapBg=d}drawMap(){let t=this.mctx,e=this.map.width;t.clearRect(0,0,e,e),t.drawImage(this.mapBg,0,0);let n=this.player,s=o=>o===n?2:o.isPlayer?1:0,r=[...this.game.vehicles].sort((o,a)=>s(o)-s(a));for(let o of r){let[a,c]=this.toMap(o.x,o.z);t.beginPath(),t.arc(a,c,o===n?7:o.isPlayer?6:5,0,Math.PI*2),t.fillStyle="#"+new Ft(o.def.color).getHexString(),t.fill(),t.lineWidth=o.isPlayer?3:1.5,t.strokeStyle=o===n?"#fff":o.isPlayer?o.human===1?"#3ca0ff":"#ffcc00":"#111",t.stroke()}}message(t,e=1.6,n=""){this.el.msg.textContent=t,this.el.msg.className="h-msg show "+n,this.msgT=e}big(t,e=.9,n=""){this.el.big.textContent=t,this.el.big.className="h-big",this.el.big.offsetWidth,this.el.big.className="h-big show "+n,this.bigT=e}update(t){let e=this.game,n=this.player;if(!n)return;let s=e.vehicles.length;this.set("pos",this.el.pos,String(n.place)),this.set("posTotal",this.el.posTotal,"/"+s),this.set("lap",this.el.lap,String(Math.max(1,Math.min(e.laps,n.lap)))),this.set("lapTotal",this.el.lapTotal,String(e.laps));let r=n.finished?n.finishTime:e.raceTime;this.set("time",this.el.time,Ds(r));let o=n.lapTimes.length?Math.min(...n.lapTimes):1/0;this.set("best",this.el.best,isFinite(o)?"Mejor vuelta "+Ds(o):""),this.set("speed",this.el.speed,String(Math.round(Math.abs(n.vF)*3.6))),this.el.boost.style.width=Math.min(100,n.boost/2.2*100)+"%",n.itemRoll>0?(this.rollT-=t,this.rollT<=0&&(this.rollT=.08,this.rollIdx=(this.rollIdx+1)%kd.length,e.sound.play("tick",.6)),this.set("item",this.el.item,Vl[kd[this.rollIdx]],"innerHTML"),this.set("itemName",this.el.itemName,"..."),this.el.itemBox.classList.add("rolling")):(this.el.itemBox.classList.remove("rolling"),this.set("item",this.el.item,n.item?Vl[n.item]:"","innerHTML"),this.set("itemName",this.el.itemName,n.item?pv[n.item]:""),this.el.itemBox.classList.toggle("ready",!!n.item));let c=[...e.vehicles].sort((l,h)=>l.place-h.place).map(l=>`<li class="${l.isPlayer?l.human===1?"other":"me":""}${l.finished?" done":""}"><i style="background:#${new Ft(l.def.color).getHexString()}"></i>${l.place}. ${l.def.name}</li>`).join("");this.set("ranking",this.el.ranking,c,"innerHTML"),this.msgT>0&&(this.msgT-=t,this.msgT<=0&&(this.el.msg.className="h-msg")),this.bigT>0&&(this.bigT-=t,this.bigT<=0&&(this.el.big.className="h-big")),this.drawMap()}hint(t){this.set("hint",this.el.hint,t||""),this.el.hint.classList.toggle("show",!!t)}};var gv=["clasico","selva","nieve","ciudad","volcan"],xv=[10,7,5,3,2,1];function Wl(i){return{round:0,ids:[...gv],humans:[...i],table:{},awarded:-1}}function Hd(i,t){i.awarded!==i.round&&(i.awarded=i.round,t.forEach((e,n)=>{var r;let s=(r=i.table)[e]||(r[e]={pts:0,wins:0,last:0,gained:0});s.gained=xv[n]||0,s.pts+=s.gained,n===0&&s.wins++,s.last=n+1}))}function Xl(i){return Object.entries(i.table).map(([t,e])=>({id:t,...e})).sort((t,e)=>e.pts-t.pts||e.wins-t.wins||t.last-e.last)}function zd(){let i=new Jt,t=[],e=[{place:1,x:0,h:3,color:16762910},{place:2,x:-6.6,h:2,color:13226718},{place:3,x:6.6,h:1.3,color:13664572}];for(let n of e){let s=new B(new Ct(6.2,n.h,6.2),new j({color:n.color,metalness:.35,roughness:.45}));s.position.set(n.x,n.h/2-.6,0),s.castShadow=!0,s.receiveShadow=!0,i.add(s);let r=document.createElement("canvas");r.width=r.height=128;let o=r.getContext("2d");o.font="bold 104px Bangers, Impact, sans-serif",o.textAlign="center",o.textBaseline="middle",o.lineWidth=10,o.strokeStyle="#141018",o.strokeText(String(n.place),64,70),o.fillStyle="#ffffff",o.fillText(String(n.place),64,70);let a=new Qe(r);a.colorSpace=xe;let c=Math.min(2.2,n.h*.85),l=new B(new ve(c,c),new me({map:a,transparent:!0}));l.position.set(n.x,n.h/2-.6,3.11),i.add(l),t[n.place-1]=new D(n.x,n.h-.6,0)}return i.visible=!1,{group:i,spots:t}}var mr=1/120,sa={facil:{mul:.86,skill:.7,label:"F\xE1cil"},normal:{mul:.95,skill:1,label:"Normal"},dificil:{mul:1.03,skill:1.5,label:"Dif\xEDcil"}},Gd={log:"\xA1TRONCO!",ball:"\xA1BOLAZO!",boom:"\xA1BOOM!",net:"\xA1ATRAPADO EN LA RED!",crush:"\xA1CRUNCH!",fallPit:"\xA1AL FOSO!",fallWater:"\xA1COCODRILOS!",waved:"\xA1ONDA EXPANSIVA!",nitro:"\xA1NITRO!",jump:"\xA1SUPERSALTO!",tired:"\xA1NEUMATAZO!",barreled:"\xA1BARRILAZO!",rocketed:"\xA1COHETAZO!",rocketWarn:"\xA1TE SIGUE UN COHETE!",meteor:"\xA1ROCA DE FUEGO!",car:"\xA1CUIDADO CON EL TR\xC1FICO!"},yv=.85,ra=["PRIMERO","SEGUNDO","TERCERO","CUARTO","QUINTO","SEXTO"],vv={solo:"ESPACIO",p1:"Q / ESPACIO",p2:"INTRO"},Xe={total:4.7,intro:1.5,two:2,perfect:.4,boostPerfect:1.8,boostGood:.8,stall:1.2,press:.3,aiBoost:.35},Vd={facil:.12,normal:.06,dificil:.015},_v=i=>i===null?null:i>Xe.two?"stall":i>Xe.two-Xe.perfect?"perfect":"good",Nt=i=>document.getElementById(i),nn=(i,t,e)=>i<t?t:i>e?e:i,oa=i=>"#"+new Ft(i).getHexString(),Mv=(i,t,e)=>{let n=t-i;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return i+n*e};function Wd(i,t){try{return{...t,...JSON.parse(localStorage.getItem(i)||"{}")}}catch{return{...t}}}function ql(i,t){try{localStorage.setItem(i,JSON.stringify(t))}catch{}}function Ev(){try{let i=document.createElement("canvas").getContext("webgl2")||document.createElement("canvas").getContext("webgl");if(!i)return!0;let t=i.getExtension("WEBGL_debug_renderer_info"),e=String(t?i.getParameter(t.UNMASKED_RENDERER_WEBGL):i.getParameter(i.RENDERER));return/swiftshader|llvmpipe|softpipe|software|basic render/i.test(e)}catch{return!1}}var Yd={alta:{scale:1.75,minScale:.8,shadows:2,aa:!0},media:{scale:1,minScale:.65,shadows:1,aa:!0},baja:{scale:.7,minScale:.45,shadows:0,aa:!1,cheap:!0}},Yl=Ev(),bv=(()=>{let i="auto";try{i=JSON.parse(localStorage.getItem("megamonstruos.ajustes")||"{}").quality||"auto"}catch{}return i})(),Zd=i=>i==="auto"?Yl?"baja":"alta":i;function Xd(i){let t=Yd[Zd(bv)].aa,e=new fo({canvas:i,antialias:t,powerPreference:"high-performance"}),n=i.ownerDocument.defaultView||window;return e.setPixelRatio(Math.min(n.devicePixelRatio||1,1.75)),e.shadowMap.enabled=!0,e.shadowMap.type=or,e.toneMapping=pl,e.toneMappingExposure=1,e}var Zl=class{constructor(t,e,n,{doc:s,who:r,tag:o}){this.game=t,this.player=e,this.idx=n,this.who=r,this.doc=s,this.camera=new Ue(68,1,.5,4e3),this.camPos=new D,this.camLook=new D,this.camYaw=e.th,this.fov=68,this.shake=0,this.tunnelF=0,this.steerSmooth=0,this.heldSince=null,this.rect={x:0,y:0,w:1,h:1},this.hud=new ia(t,e,{doc:s,tag:o,keyhint:vv[r]}),this.hud.el.tag.classList.toggle("p2",n===1)}get external(){return this.doc!==document}dispose(){this.hud.remove()}},$l=class{constructor(){let t=new URLSearchParams(location.search);this.autopilot=t.has("auto"),this.renderer=Xd(Nt("game")),Hu(Yl?1:Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.envMap=new Li(this.renderer).fromScene(new cr,.04).texture,this.camera=new Ue(68,1,.5,4e3),this.sound=new ea,this.input=new na,this.vehicles=hn.map(e=>new Wo(e,null)),this.settings=Wd("megamonstruos.ajustes",{truck:0,truck2:1,laps:3,diff:"normal",music:!0,mode:1,split:"auto",quality:"auto",circuit:"clasico",cup:!1}),this.settings.truck2===this.settings.truck&&(this.settings.truck2=(this.settings.truck+1)%hn.length),this.records=Wd("megamonstruos.records",{}),this.sound.musicOn=this.settings.music,this.laps=this.settings.laps,this.perf={acc:0,n:0,fps:60,scale:1,shadows:-1},this.loadCircuit(this.settings.circuit),this.applyQuality(!0),this.views=[],this.humans=[],this.win2=null,this.renderer2=null,this.buildShowroom(),Rs(this.show.scene,!!this.qualityLevel().cheap),this.bindUI(),this.state="title",this.titleSel=this.settings.mode===2?1:0,this.selectStep=0,this.time=0,this.raceTime=0,this.acc=0,this.titlePos=new D,this.titleLook=new D,this.setupRace(1),this.state="title",window.addEventListener("resize",()=>this.resize()),this.resize(),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.state==="race"||this.state==="countdown")&&this.pause()}),this.last=performance.now(),Nt("loading").classList.add("hidden"),this.showScreen("title"),this.updateTitle(),requestAnimationFrame(e=>this.loop(e))}loadCircuit(t){let e=ko(t);if(this.circuit===e)return;if(this.circuit=e,this.scene){this.projectiles.clear();for(let o of this.vehicles)this.scene.remove(o.mesh);for(let o of Object.values(this.projectiles.pool))for(let a of o)this.scene.remove(a);od(this.scene)}Xu(e.theme.tex);let n=this.scene=new Di;n.environment=this.envMap,this.envBase=n.environmentIntensity=e.theme.volcano?.3:.45,this.track=new Ro(e),this.trackMeshes=dd(this.track,n),this.world=md(n,this.track),this.fx=new Ko(n),this.fx.dustColor=e.theme.dust,this.obstacles=new Xo(this.track,n,this),this.projectiles=new $o(n,this);for(let o of this.vehicles)o.track=this.track,n.add(o.mesh);let s=new ve(1,1).rotateX(-Math.PI/2),r=new me({map:Lo(),color:0,transparent:!0,opacity:.55,depthWrite:!1});this.blobs=this.vehicles.map(()=>{let o=new B(s,r.clone());return o.renderOrder=1,o.visible=!1,n.add(o),o}),this.headlight=new bo(16774352,0,90,.55,.5,1.2),n.add(this.headlight,this.headlight.target),this.tunnelColor=new Ft(e.theme.volcano?16742960:16769696),this.tunnelLight=new Zn(this.tunnelColor,0,45,1.4),n.add(this.tunnelLight),this.flash=new Zn(16752704,0,60,1.5),n.add(this.flash),this.rings=[];for(let o=0;o<4;o++){let a=new B(new ln(1,.35,8,40),new me({color:16732120,transparent:!0,opacity:0,depthWrite:!1}));a.rotation.x=Math.PI/2,a.visible=!1,n.add(a),this.rings.push({mesh:a,t:1})}if(this.snowT=0,this.perf.shadows>=0){let o=this.qualityLevel();this.world.setShadowSize(this.perf.shadows===2?2048:1024),Rs(n,!!o.cheap)}this.lowQualityExtras(),this.vehicles.forEach((o,a)=>o.placeAt(this.track.wrap(-12-a*8),a%2?5:-5,0)),Yl&&rd(n),this.views=this.views||[]}ambient(t){let e=this.track.theme;if(!e.snow&&!e.volcano)return;let n=this.views.length&&this.state!=="title"?this.views.map(s=>s.camera):[this.camera];for(this.snowT+=t*(e.snow?70:18)*(this.perf.shadows===0?.6:1);this.snowT>=1;){this.snowT-=1;for(let s of n){let r=s.position,o=r.x+(Math.random()-.5)*90,a=r.z+(Math.random()-.5)*90;e.snow?this.fx.soft.emit({x:o,y:r.y+10+Math.random()*18,z:a,vx:1.5,vy:-4,vz:.6,life:6,size:.35,color:[1,1,1],alpha:.9,gravity:0,drag:0}):this.fx.glow.emit({x:o,y:r.y-4+Math.random()*6,z:a,vx:Math.random()-.5,vy:2+Math.random()*2,vz:Math.random()-.5,life:3,size:.3,color:[1,.45,.1],alpha:.9,gravity:0,drag:0})}}}circuitTag(){let t=this.circuit;return t.id+(t.rev>1?"@"+t.rev:"")}recordKey(t,e){return(this.circuit.id==="clasico"?"":this.circuitTag()+"_")+t+"_"+e}lapRecordKey(){return this.circuit.id==="clasico"?"vuelta":"vuelta_"+this.circuitTag()}get player(){return this.humans[0]}bindUI(){let t=(n,s)=>Nt(n).addEventListener("click",()=>{this.sound.init(),this.sound.play("click"),s()});t("btn-play",()=>this.goSelect(1)),t("btn-play2",()=>this.goSelect(2)),t("btn-prev",()=>this.changeTruck(-1)),t("btn-next",()=>this.changeTruck(1)),t("btn-start",()=>this.confirmSelect()),t("btn-back",()=>this.backSelect()),t("btn-resume",()=>this.resume()),t("btn-restart",()=>this.startRace()),t("btn-quit",()=>this.goTitle()),t("btn-again",()=>this.startRace()),t("btn-change",()=>this.goSelect(this.settings.mode)),t("btn-menu",()=>this.goTitle()),t("btn-sound",()=>this.toggleMute()),t("btn-music",()=>this.toggleMusic()),t("btn-pause",()=>this.pause()),t("btn-fs",()=>this.toggleFullscreen()),t("btn-fs-pause",()=>this.toggleFullscreen()),t("btn-cup-next",()=>this.cupNext()),t("btn-cup-quit",()=>this.goTitle()),t("btn-cup-again",()=>this.startCup()),t("btn-cup-menu",()=>this.goTitle()),document.querySelectorAll("[data-cup]").forEach(n=>n.addEventListener("click",()=>{this.sound.play("click"),this.settings.cup=n.dataset.cup==="1",this.refreshOptions(),this.updateSelect()})),document.querySelectorAll("[data-laps]").forEach(n=>n.addEventListener("click",()=>{this.sound.play("click"),this.settings.laps=+n.dataset.laps,this.refreshOptions(),this.updateSelect()})),document.querySelectorAll("[data-diff]").forEach(n=>n.addEventListener("click",()=>{this.sound.play("click"),this.settings.diff=n.dataset.diff,this.refreshOptions()})),Nt("circuit-opts").innerHTML=Bo.map(n=>`<button data-circuit="${n.id}">${n.short}</button>`).join(""),document.querySelectorAll("[data-circuit]").forEach(n=>n.addEventListener("click",()=>{this.sound.play("click"),this.settings.circuit=n.dataset.circuit,this.loadCircuit(this.settings.circuit),this.refreshOptions(),this.updateSelect()})),document.querySelectorAll("[data-quality]").forEach(n=>n.addEventListener("click",()=>{this.sound.play("click"),this.settings.quality=n.dataset.quality,this.applyQuality(!0),this.refreshOptions()})),window.addEventListener("keydown",n=>{n.code==="KeyF"&&!n.repeat&&this.toggleFps()}),document.querySelectorAll("[data-split]").forEach(n=>n.addEventListener("click",()=>{if(this.sound.play("click"),n.dataset.split==="window"){if(!this.openWindow2())return}else this.closeWindow2();this.settings.split=n.dataset.split,this.refreshOptions()})),this.input.bindTouch(Nt("touch")),this.isTouch=window.matchMedia("(pointer: coarse)").matches;let e=()=>{this.sound.init(),(this.state==="title"||this.state==="select")&&this.sound.musicStart(!1)};window.addEventListener("pointerdown",e,{once:!0}),window.addEventListener("keydown",e,{once:!0}),window.addEventListener("beforeunload",()=>{this.win2&&!this.win2.closed&&this.win2.close()}),this.buildMenus(),this.refreshOptions()}buildMenus(){let t=(...r)=>()=>r.map(Nt),e=r=>()=>[...document.querySelectorAll(r)],n=r=>({els:()=>[document.querySelector(r).closest(".opt")],change:o=>{let a=[...document.querySelectorAll(r)],c=Math.max(0,a.findIndex(l=>l.classList.contains("sel")));a[(c+o+a.length)%a.length].click()}});this.menus={title:new xi([{items:e(".corner-btns .round")},{els:()=>[this.titleSel===1?Nt("btn-play2"):Nt("btn-play")],change:()=>{this.titleSel=1-this.titleSel,this.sound.play("click"),this.updateTitle()},ok:()=>{this.sound.init(),this.sound.play("click"),this.goSelect(this.titleSel+1)}}],{row:1}),select:new xi([{els:t("btn-prev","btn-next","truck-name"),change:r=>{this.sound.play("click"),this.changeTruck(r)}},n("[data-cup]"),n("[data-circuit]"),n("[data-laps]"),n("[data-diff]"),n("[data-quality]"),n("[data-split]"),{items:t("btn-back","btn-start")}],{ok:()=>{this.sound.play("click"),this.confirmSelect()},col:1}),pause:new xi(["btn-resume","btn-restart","btn-fs-pause","btn-quit"].map(r=>({items:t(r)}))),results:new xi([{items:t("btn-again","btn-cup-next")},{items:t("btn-change","btn-menu","btn-cup-quit")}]),podium:new xi([{items:t("btn-cup-again","btn-cup-menu")}])};let s=r=>{r.type==="pointermove"&&!r.movementX&&!r.movementY||(document.body.classList.remove("nav-on"),r.type==="pointerdown"&&this.menus[this.menuName()]?.sync(r.target))};window.addEventListener("pointermove",s),window.addEventListener("pointerdown",s),document.fullscreenEnabled||document.querySelectorAll(".fs-btn").forEach(r=>r.classList.add("hidden")),document.addEventListener("fullscreenchange",()=>{let r=!!document.fullscreenElement;Nt("btn-fs-pause").textContent=r?"Salir de pantalla completa":"Pantalla completa",Nt("btn-fs").classList.toggle("on",r)}),this.input.onPadLost=()=>this.pause()}menuName(){return this.state==="finished"?this.resultsT<-1?"results":null:{title:"title",select:"select",paused:"pause",podium:"podium"}[this.state]||null}toggleFullscreen(){try{document.fullscreenElement?document.exitFullscreen?.()?.catch?.(()=>{}):document.documentElement.requestFullscreen?.()?.catch?.(()=>{})}catch{}}refreshOptions(){document.querySelectorAll("[data-laps]").forEach(s=>s.classList.toggle("sel",+s.dataset.laps===this.settings.laps)),document.querySelectorAll("[data-diff]").forEach(s=>s.classList.toggle("sel",s.dataset.diff===this.settings.diff)),document.querySelectorAll("[data-quality]").forEach(s=>s.classList.toggle("sel",s.dataset.quality===this.settings.quality)),document.querySelectorAll("[data-circuit]").forEach(s=>s.classList.toggle("sel",s.dataset.circuit===this.settings.circuit)),Nt("circuit-desc").textContent=`${this.circuit.name}: ${this.circuit.desc}`;let t=!!this.settings.cup;document.querySelectorAll("[data-cup]").forEach(s=>s.classList.toggle("sel",s.dataset.cup==="1"===t)),document.querySelector(".opt-circuit").classList.toggle("hidden",t),Nt("circuit-desc").classList.toggle("hidden",t),Nt("cup-route").classList.toggle("hidden",!t),Nt("cup-route").textContent="Recorrido: "+Wl([]).ids.map(s=>ko(s).short).join(" \u2192 ");let e=this.settings.split==="window"&&this.win2Ready();document.querySelectorAll("[data-split]").forEach(s=>s.classList.toggle("sel",s.dataset.split==="window"===e));let n=location.protocol==="file:";Nt("screen2-note").textContent=n?"Para usar dos monitores: estira esta ventana por los dos (pantalla partida lado a lado) o abre el juego con \xABnpm start\xBB para tener una ventana por jugador.":e?"Arrastra la ventana del jugador 2 al otro monitor y ponla a pantalla completa (F11).":"",Nt("btn-sound").classList.toggle("off",this.sound.muted),Nt("btn-music").classList.toggle("off",!this.sound.musicOn),ql("megamonstruos.ajustes",this.settings)}toggleMute(){this.sound.toggleMute(),this.refreshOptions()}toggleMusic(){this.sound.setMusicOn(!this.sound.musicOn),this.settings.music=this.sound.musicOn,this.refreshOptions()}showScreen(t){for(let n of["title","select","pause","results","cupnext","podium"])Nt("screen-"+n).classList.toggle("hidden",n!==t);let e=t===null;for(let n of this.views)n.hud.show(e||t==="pause");Nt("touch").classList.toggle("hidden",!(e&&this.isTouch&&this.humans.length===1)),Nt("btn-pause").classList.toggle("hidden",!e),this.setWindow2Waiting(!(e||t==="pause"||t==="results"));for(let[n,s]of Object.entries(this.menus||{}))n===t?s.reset():s.clear()}updateTitle(){Nt("btn-play").classList.toggle("sel",this.titleSel===0),Nt("btn-play2").classList.toggle("sel",this.titleSel===1)}goTitle(){this.endCup(),this.sound.engineStop(),this.sound.musicStart(!1),this.state="title",this.setupRace(1),this.state="title",this.showScreen("title"),this.updateTitle()}goSelect(t=this.settings.mode){this.endCup(),this.settings.mode=t,this.titleSel=t===2?1:0,this.selectStep=0,this.sound.engineStop(),this.sound.init(),this.sound.musicStart(!1),this.state="select",this.showScreen("select"),this.refreshOptions(),this.updateSelect()}selKey(){return this.selectStep===1?"truck2":"truck"}changeTruck(t){let e=this.selKey(),n=this.settings[e];do n=(n+t+hn.length)%hn.length;while(this.selectStep===1&&n===this.settings.truck);this.settings[e]=n,this.showSpin=0,this.updateSelect(),this.refreshOptions()}confirmSelect(){if(this.settings.mode===2&&this.selectStep===0){this.selectStep=1,this.settings.truck2===this.settings.truck&&(this.settings.truck2=(this.settings.truck+1)%hn.length),this.showSpin=0,this.updateSelect(),this.menus.select.reset();return}this.settings.cup?this.startCup():this.startRace()}backSelect(){if(this.selectStep===1){this.selectStep=0,this.updateSelect(),this.menus.select.reset();return}this.goTitle()}updateSelect(){let t=this.settings.mode===2,e=this.settings[this.selKey()],n=hn[e];this.show.trucks.forEach((o,a)=>{o.root.visible=a===e}),Nt("select-who").classList.toggle("hidden",!t),Nt("select-who").classList.toggle("p2",this.selectStep===1),Nt("select-who").textContent=this.selectStep===1?"JUGADOR 2":"JUGADOR 1",Nt("opt-screen2").classList.toggle("hidden",!t),Nt("select-keys").classList.toggle("hidden",!t),Nt("select-keys").textContent="J1: W A S D, objeto Q \xB7 J2: flechas, objeto Intro \xB7 o un mando para cada uno",Nt("btn-start").textContent=t&&this.selectStep===0?"SIGUIENTE":"\xA1A CORRER!",Nt("truck-name").textContent=n.name,Nt("truck-name").style.color=oa(n.color),Nt("truck-desc").textContent=n.desc;let s={speed:"Velocidad",accel:"Aceleraci\xF3n",handling:"Manejo",weight:"Peso"};Nt("truck-stats").innerHTML=Object.entries(s).map(([o,a])=>`<div class="stat"><span>${a}</span><div class="bar">${[1,2,3,4,5].map(c=>`<i class="${c<=n.stats[o]?"on":""}"></i>`).join("")}</div></div>`).join("");let r=this.records[this.recordKey(n.id,this.settings.laps)];Nt("truck-record").textContent=r?`R\xE9cord con ${this.settings.laps} ${this.settings.laps===1?"vuelta":"vueltas"}: ${Ds(r)}`:"",this.settings.cup&&(Nt("truck-record").textContent=this.cupRecordText()),Nt("truck-dots").innerHTML=hn.map((o,a)=>{let c=this.selectStep===1&&a===this.settings.truck;return`<i class="${a===e?"on":""}${c?" taken":""}" style="background:${oa(o.color)}"></i>`}).join("")}win2Ready(){return!!(this.win2&&!this.win2.closed&&this.renderer2)}openWindow2(){if(location.protocol==="file:")return this.refreshOptions(),!1;if(this.win2Ready())return!0;let t=window.open(location.pathname+"?pantalla2","megamonstruos-j2","popup,width=1280,height=720");if(!t)return Nt("screen2-note").textContent="El navegador ha bloqueado la ventana: permite las ventanas emergentes para esta p\xE1gina.",!1;this.win2=t;let e=performance.now(),n=setInterval(()=>{if(t.closed||performance.now()-e>15e3){clearInterval(n),this.refreshOptions();return}let s=!1;try{s=!!t.__screen2Ready}catch{s=!1}s&&(clearInterval(n),this.setupWindow2(t))},150);return!0}setupWindow2(t){this.renderer2=Xd(t.document.getElementById("game")),this.renderer2.setPixelRatio(this.perf.scale),this.renderer2.shadowMap.enabled=this.perf.shadows>0,this.renderer2.shadowMap.type=this.perf.shadows===2?or:rr,this.envMap2=new Li(this.renderer2).fromScene(new cr,.04).texture,this.input.attach(t),t.addEventListener("resize",()=>this.layoutViews()),t.addEventListener("pagehide",()=>setTimeout(()=>this.onWindow2Closed(),0)),this.layoutViews(),this.refreshOptions(),this.setWindow2Waiting(!(this.state==="race"||this.state==="countdown"||this.state==="finished"))}closeWindow2(){this.win2&&!this.win2.closed&&this.win2.close(),this.onWindow2Closed()}onWindow2Closed(){if(this.win2){if(this.input.detach(this.win2),this.win2=null,this.renderer2)try{this.renderer2.dispose()}catch{}if(this.renderer2=null,this.views.some(t=>t.external)){let t=this.state!=="title"&&this.state!=="select";if(this.buildViews(),t)for(let e of this.views)e.hud.show(!0)}this.refreshOptions()}}setWindow2Waiting(t){if(this.win2Ready())try{this.win2.document.getElementById("screen2-wait").classList.toggle("hidden",!t)}catch{}}buildShowroom(){let t=new Di;t.environment=this.envMap,t.environmentIntensity=.35;let e=new Ue(38,1,.5,500),n=new B(new _e(200,32,16),new Ve({side:Ce,depthWrite:!1,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying vec3 vP; void main(){ float h = vP.y * 0.5 + 0.5; vec3 c = mix(vec3(0.95,0.45,0.12), vec3(0.12,0.08,0.28), smoothstep(0.35, 0.75, h)); gl_FragColor = vec4(c, 1.0); }"}));t.add(n),t.fog=new xs(new Ft().setRGB(.69,.33,.17,xe),40,150),t.add(new Es(16773344,3153984,1.4));let s=new ki(16777215,2.6);s.position.set(8,14,10),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:1,far:50}),t.add(s);let r=new ki(8956671,1.6);r.position.set(-10,6,-8),t.add(r);let o=new Jt;t.add(o);let a=Po().clone();a.needsUpdate=!0,a.repeat.set(6,6);let c=new B(new qt(7.5,7.8,.6,48),[new j({color:2236962,metalness:.6,roughness:.4}),new j({map:a,roughness:.5}),new j({color:2236962})]);c.position.y=-.3,c.receiveShadow=!0,o.add(c);let l=new B(new Yn(180,48),new j({color:2366003,roughness:.65,metalness:.1}));l.rotation.x=-Math.PI/2,l.position.y=-.6,l.receiveShadow=!0,t.add(l);let h=hn.map(d=>{let u=Vo(d);return u.root.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),o.add(u.root),u.root.visible=!1,u});this.show={scene:t,cam:e,table:o,trucks:h},this.showSpin=0}setupRace(t=this.settings.mode){this.projectiles.clear();let e=sa[this.settings.diff]||sa.normal;this.laps=this.settings.laps;let n=this.track.length,s=[this.vehicles[this.settings.truck]];t===2&&s.push(this.vehicles[this.settings.truck2]);let r=this.vehicles.filter(a=>!s.includes(a)).sort(()=>Math.random()-.5),o=t===2?[...r.slice(0,4),...s]:[...r.slice(0,4),s[0],r[4]];this.drivers=new Map,o.forEach((a,c)=>{a.reset(),a.isPlayer=s.includes(a),a.human=s.indexOf(a),a.speedMul=a.isPlayer?1:e.mul,a.placeAt(n-10-Math.floor(c/2)*10,c%2?5.5:-5.5,0),a.place=c+1,this.drivers.set(a,new Yo(a,this.track,{skill:a.isPlayer?1.5:e.skill,preferBridge:Math.random()<.5}))}),this.humans=s,this.raceTime=0,this.countdown=Xe.total,this.finishCount=0,this.resultsT=0,this.allDoneT=null;for(let a of this.trackMeshes.lights)a.material.color.setHex(3346705);this.buildViews(),this.lightsWarm=!this.leanLights}buildViews(){for(let n of this.views)n.dispose();let t=this.humans.length===2,e=t&&this.settings.split==="window"&&this.win2Ready();this.views=this.humans.map((n,s)=>new Zl(this,n,s,{doc:s===1&&e?this.win2.document:document,who:t?s===0?"p1":"p2":"solo",tag:t?"J"+(s+1):""}));for(let n of this.views){let s=n.player;n.camPos.set(s.x+Math.cos(s.th)*16,s.y+4,s.z+Math.sin(s.th)*16)}this.layoutViews()}layoutViews(){let t=window.innerWidth,e=window.innerHeight,n=this.views.filter(r=>!r.external),s=t/e>2;n.forEach((r,o)=>{n.length===1?r.rect={x:0,y:0,w:1,h:1}:r.rect=s?{x:o*.5,y:0,w:.5,h:1}:{x:0,y:o*.5,w:1,h:.5};let a=r.rect.w*t,c=r.rect.h*e;r.camera.aspect=a/c,r.camera.updateProjectionMatrix(),r.hud.place(r.rect.x,r.rect.y,r.rect.w,r.rect.h,a,c),r.hud.root.classList.toggle("div-top",o===1&&!s),r.hud.root.classList.toggle("div-left",o===1&&s)});for(let r of this.views.filter(o=>o.external)){let o=this.win2,a=o.innerWidth,c=o.innerHeight;this.renderer2.setSize(a,c,!1),r.rect={x:0,y:0,w:1,h:1},r.camera.aspect=a/c,r.camera.updateProjectionMatrix(),r.hud.place(0,0,1,1,a,c)}}viewOf(t){return this.views.find(e=>e.player===t)}startRace(){this.sound.init(),this.setupRace(this.settings.mode),this.state="countdown",this.showScreen(null),this.sound.musicStop(),this.sound.engineStart(),document.body.classList.toggle("two",this.views.filter(t=>!t.external).length===2),this.cup&&(Nt("cup-banner").textContent=`CARRERA ${this.cup.round+1} DE ${this.cup.ids.length} \xB7 ${this.circuit.name.toUpperCase()}`)}pause(){if(!(this.state!=="race"&&this.state!=="countdown")){this.prevState=this.state,this.state="paused",this.sound.engineStop(),this.showScreen("pause");for(let t of this.views)t.external&&t.hud.message("PAUSA",1e9,"warn")}}resume(){if(this.state==="paused"){this.state=this.prevState,this.showScreen(null);for(let t of this.views)t.external&&t.hud.message("",.01);this.sound.engineStart(),this.last=performance.now()}}rollItem(t){let e=(t.place-1)/Math.max(1,this.vehicles.length-1),n={nitro:.26,jump:.2-.08*e,wave:.12+.08*e,tire:.17,barrel:.18-.1*e,rocket:t.place>1?.04+.2*e:0},s=Math.random()*Object.values(n).reduce((r,o)=>r+o,0);for(let r of Object.keys(n))if(s-=n[r],s<=0)return r;return"nitro"}shockwave(t){let e=this.rings.find(n=>n.t>=1)||this.rings[0];e.t=0,e.mesh.position.set(t.x,t.y+1.5,t.z),e.mesh.visible=!0,this.sound3d("wave",t.x,t.z,1);for(let n of this.vehicles){if(n===t||n.state!=="ok")continue;let s=n.x-t.x,r=n.z-t.z,o=Math.hypot(s,r);o<22&&Math.abs(n.y-t.y)<8&&n.hit({dirX:s/(o||1),dirZ:r/(o||1),push:9,up:5,speedMul:.5,stun:1,kind:"waved"})}}boom(t,e,n){this.flash.position.set(t,e+3,n),this.flash.intensity=4e3,this.sound3d("boom",t,n,1)}sound3d(t,e,n,s=1){let r=this.humans.length?1/0:0;for(let o of this.humans)r=Math.min(r,Math.hypot(o.x-e,o.z-n));this.sound.play(t,s*nn(1-r/90,0,1))}onLap(t){if(t.lap===1){t.lapStart=this.raceTime;return}if(t.lapTimes.push(this.raceTime-t.lapStart),t.lapStart=this.raceTime,t.lap>this.laps&&!t.finished){t.finished=!0,t.finishTime=this.raceTime,t.finishPlace=++this.finishCount,t.isPlayer&&this.playerFinished(t);return}let e=this.viewOf(t);e&&(t.lap===this.laps?(e.hud.big("\xA1\xDALTIMA VUELTA!",1.6,"small"),this.sound.play("final"),this.sound.musicTempo(1.1)):(e.hud.big(`VUELTA ${t.lap}`,1.2,"small"),this.sound.play("lap")))}playerFinished(t){this.viewOf(t).hud.big(t.finishPlace===1?"\xA1GANASTE!":`\xA1${ra[t.finishPlace-1]}!`,3,"small"),this.sound.play("finish"),this.fx.confetti(t.x,t.y,t.z,160);let n=this.recordKey(t.def.id,this.laps);t.newRecord=!this.records[n]||t.finishTime<this.records[n],t.newRecord&&(this.records[n]=t.finishTime);let s=t.lapTimes.length?Math.min(...t.lapTimes):1/0,r=this.lapRecordKey();t.newLapRecord=isFinite(s)&&(!this.records[r]||s<this.records[r]),t.newLapRecord&&(this.records[r]=s),ql("megamonstruos.records",this.records),this.humans.every(o=>o.finished)?this.endRace():this.allDoneT===null&&(this.allDoneT=45)}endRace(){this.state!=="finished"&&(this.state="finished",this.resultsT=3.2,this.sound.musicStop())}showResults(){let t=this.track.length,e=33,n=[...this.vehicles].map(o=>{let a=o.finishTime;return o.finished||(a=this.raceTime+Math.max(0,(this.laps+1)*t-o.progress)/e),{v:o,t:a,est:!o.finished}}).sort((o,a)=>o.t-a.t),s=o=>n.findIndex(a=>a.v===o)+1,r=this.humans.length===2;if(r){let[o,a]=this.humans.map(s),c=o<a?1:2;Nt("res-title").textContent=Math.min(o,a)===1?`\xA1GANA EL JUGADOR ${c}!`:`\xA1EL JUGADOR ${c} LLEGA ANTES!`}else{let o=s(this.player);Nt("res-title").textContent=o===1?"\xA1HAS GANADO!":o<=3?`\xA1PODIO! QUEDASTE ${ra[o-1]}`:`HAS QUEDADO ${ra[o-1]}`}Nt("res-table").innerHTML=n.map((o,a)=>{let c=this.humans.indexOf(o.v),l=c===0?"me":c===1?"me2":"",h=r&&c>=0?` <b class="tag">J${c+1}</b>`:"";return`<tr class="${l}"><td>${a+1}</td><td><i style="background:${oa(o.v.def.color)}"></i>${o.v.def.name}${h}</td><td>${o.est?"~":""}${Ds(o.t)}</td></tr>`}).join(""),Nt("res-extra").innerHTML=this.humans.map((o,a)=>{let c=o.lapTimes.length?Math.min(...o.lapTimes):1/0,l=`${r?`J${a+1} \xB7 `:""}Mejor vuelta: ${Ds(c)}`;return o.newRecord?l+=" \xB7 \xA1Nuevo r\xE9cord de carrera!":o.newLapRecord&&(l+=" \xB7 \xA1R\xE9cord de vuelta!"),l}).join("<br>"),this.cupResults(n),this.showScreen("results"),this.sound.musicStart(!1);for(let o of this.views)o.external&&o.hud.message(s(o.player)===1?"\xA1GANASTE!":`\xA1${ra[s(o.player)-1]}!`,1e9,"warn")}startCup(){this.leavePodium();let t=[this.settings.truck];this.settings.mode===2&&t.push(this.settings.truck2),this.cup=Wl(t.map(e=>hn[e].id)),this.cupGo()}cupNext(){let t=this.cup;if(!(!t||this.state!=="finished")){if(t.round>=t.ids.length-1){this.showPodium();return}t.round++,this.cupGo()}}cupGo(){let t=this.cup,e=t.ids[t.round];if(this.circuit.id===e){this.startRace();return}this.sound.engineStop(),this.state="cupnext",this.cupWait=2,Nt("cupnext-round").textContent=`CARRERA ${t.round+1} DE ${t.ids.length}`,Nt("cupnext-name").textContent=`Siguiente: ${ko(e).name}`,this.showScreen("cupnext")}cupLoad(){this.loadCircuit(this.cup.ids[this.cup.round]),this.startRace()}endCup(){this.leavePodium(),this.cup&&(this.cup=null,this.cupResults(null),this.circuit.id!==this.settings.circuit&&this.loadCircuit(this.settings.circuit))}cupRecordText(){let t=this.records.copas||0,e=this.records.copaMejor||0;return`Copas ganadas: ${t}`+(e?` \xB7 Mejor: ${e} puntos`:"")}cupTableHTML(){let t=this.cup,e=t.humans.length===2;return Xl(t).map((n,s)=>{let r=hn.find(l=>l.id===n.id),o=t.humans.indexOf(n.id),a=o===0?"me":o===1?"me2":"",c=e&&o>=0?` <b class="tag">J${o+1}</b>`:"";return`<tr class="${a}" data-id="${n.id}"><td>${s+1}</td><td><i style="background:${oa(r.color)}"></i>${r.name}${c}</td><td>${n.pts} <small>ptos.</small></td></tr>`}).join("")}cupResults(t){let e=!!(this.cup&&t);for(let s of["btn-again","btn-change","btn-menu"])Nt(s).classList.toggle("hidden",e);for(let s of["btn-cup-next","btn-cup-quit","res-round","cup-general"])Nt(s).classList.toggle("hidden",!e);if(Nt("screen-results").classList.toggle("cup",e),!e)return;let n=this.cup;Hd(n,t.map(s=>s.v.def.id)),Nt("res-round").textContent=`CARRERA ${n.round+1} DE ${n.ids.length} \xB7 ${this.circuit.name.toUpperCase()}`,[...Nt("res-table").rows].forEach((s,r)=>{let o=s.insertCell();o.className="pts",o.textContent="+"+n.table[t[r].v.def.id].gained}),Nt("cup-table").innerHTML=this.cupTableHTML(),Nt("btn-cup-next").textContent=n.round===n.ids.length-1?"Ver podio":"Siguiente circuito"}showPodium(){let t=this.cup,e=Xl(t),n=this.show;this.sound.engineStop(),this.state="podium",this.podium||(this.podium=zd(),n.scene.add(this.podium.group));let s=this.podium;s.trucks=e.slice(0,3).map((d,u)=>{let f=n.trucks[hn.findIndex(g=>g.id===d.id)];return s.group.add(f.root),f.root.position.copy(s.spots[u]),f.root.rotation.set(0,[.35,.75,-.05][u],0),f.root.visible=!0,f}),s.group.visible=!0,n.table.visible=!1,Rs(n.scene,!!this.qualityLevel().cheap);let r=t.humans.length===2,o=d=>hn.find(u=>u.id===d).name,a=d=>e.findIndex(u=>u.id===d)+1,c=e[0],l=t.humans.indexOf(c.id);if(Nt("screen-podium").classList.toggle("ai",l<0),l>=0?(Nt("podium-title").textContent=`\xA1CAMPE\xD3N: JUGADOR ${l+1}!`,Nt("podium-sub").textContent=`${o(c.id)} \xB7 ${c.pts} puntos`+(r?` \xB7 Jugador ${2-l}: ${a(t.humans[1-l])}.\xBA`:"")):(Nt("podium-title").textContent=`Campe\xF3n: ${o(c.id)}`,Nt("podium-sub").textContent=r?t.humans.map((d,u)=>`Jugador ${u+1}: ${a(d)}.\xBA`).join(" \xB7 "):`Has quedado ${a(t.humans[0])}.\xBA con ${t.table[t.humans[0]].pts} puntos`),Nt("podium-table").innerHTML=this.cupTableHTML(),!t.done){t.done=!0;let d=Math.max(...t.humans.map(u=>t.table[u].pts));t.newBest=d>(this.records.copaMejor||0),l>=0&&(this.records.copas=(this.records.copas||0)+1),t.newBest&&(this.records.copaMejor=d),ql("megamonstruos.records",this.records)}Nt("podium-record").textContent=this.cupRecordText()+(t.newBest?" \xB7 \xA1Nuevo r\xE9cord!":"");let h=Nt("confetti");if(!h.children.length){let d=["#ffcc00","#ff6a00","#e2231a","#3ca0ff","#39e639","#ff4fd8","#fff"];h.innerHTML=[...Array(70)].map((u,f)=>`<i style="left:${(Math.random()*100).toFixed(1)}%;background:${d[f%d.length]};animation-delay:${(-Math.random()*6).toFixed(2)}s;animation-duration:${(3.5+Math.random()*3).toFixed(2)}s"></i>`).join("")}this.sound.play("finish"),this.showScreen("podium")}leavePodium(){let t=this.podium;if(!(!t||!t.group.visible)){for(let e of t.trucks)this.show.table.add(e.root),e.root.position.set(0,0,0),e.root.rotation.set(0,0,0),e.root.visible=!1;t.trucks=[],t.group.visible=!1,this.show.table.visible=!0,this.resize()}}renderPodium(t){let e=this.renderer,n=this.show,s=n.cam,r=window.innerWidth,o=window.innerHeight,a=r>o*1.2,c=a?Math.min(440,r*.4)+r*.03:0,l=a?1:1.5;if(s.position.set(Math.sin(this.time*.3)*4,7.5*l,29*l),a)s.aspect=(r+c)/o,s.setViewOffset(r+c,o,c,0,r,o);else{let h=o*.22;s.aspect=r/(o+2*h),s.setViewOffset(r,o+2*h,0,2*h,r,o)}s.lookAt(0,2.4,0),s.updateProjectionMatrix(),this.podium.trucks.forEach((h,d)=>{h.root.position.y=this.podium.spots[d].y+(d===0?Math.abs(Math.sin(this.time*3))*.5:0),fr(h,{wheelSpin:0,steer:Math.sin(this.time*1.2+d)*.5,comp:Math.sin(this.time*4+d)*.05,dt:t})}),e.setScissorTest(!1),e.setViewport(0,0,r,o),e.render(n.scene,s)}step(t,e){if(this.state==="race"||this.state==="finished"){this.raceTime+=t;for(let s of this.vehicles){let r;s.isPlayer&&!s.finished&&!this.autopilot?r=e[s.human]:r=this.drivers.get(s).control(t,this),r.item&&s.useItem(this),s.update(t,r,this)}for(let s of e)s.item=!1;this.collide(),this.obstacles.update(t,this.vehicles),this.projectiles.update(t);for(let s of this.vehicles){if(s.state!=="ok")continue;let r=s.isPlayer&&!this.autopilot?5:2.5;(s.stuckT>r||!s.isPlayer&&s.wrongT>4)&&(s.respawn(s.s,s.d*.5,6),s.stuckT=0,s.wrongT=0)}this.rank()}}collide(){let t=this.vehicles;for(let e=0;e<t.length;e++){let n=t[e];if(n.state!=="fallen")for(let s=e+1;s<t.length;s++){let r=t[s];if(r.state==="fallen")continue;let o=r.x-n.x,a=r.z-n.z,c=o*o+a*a,l=vd*(n.size+r.size);if(c>l*l||Math.abs(n.y-r.y)>2.8*Math.max(n.size,r.size))continue;let h=Math.sqrt(c)||.01,d=o/h,u=a/h,f=l-h,g=n.mass,x=r.mass;n.x-=d*f*(x/(g+x)),n.z-=u*f*(x/(g+x)),r.x+=d*f*(g/(g+x)),r.z+=u*f*(g/(g+x));let m=(r.vx-n.vx)*d+(r.vz-n.vz)*u;if(m<0){let p=-1.4*m/(1/g+1/x);if(n.vx-=p*d/g,n.vz-=p*u/g,r.vx+=p*d/x,r.vz+=p*u/x,-m>4){let _=(n.x+r.x)/2,v=(n.z+r.z)/2;this.sound3d("bump",_,v,nn(-m/15,.2,1)),this.fx.sparks(_,(n.y+r.y)/2+1.8,v,6);for(let y of[n,r]){let A=this.viewOf(y);A&&(A.shake=Math.max(A.shake,nn(-m/20,.1,.5)))}}}}}}rank(){[...this.vehicles].sort((o,a)=>o.finished&&a.finished?o.finishPlace-a.finishPlace:o.finished?-1:a.finished?1:a.progress-o.progress).forEach((o,a)=>{o.place=a+1});let e=(sa[this.settings.diff]||sa.normal).mul,n=this.vehicles.reduce((o,a)=>o+a.maxSpeed,0)/this.vehicles.length,s=this.humans.filter(o=>!o.finished),r=s.length?Math.max(...s.map(o=>o.progress)):null;for(let o of this.vehicles){if(o.isPlayer){o.speedMul=1;continue}let a=e*(1+yv*(n-o.maxSpeed)/o.maxSpeed);o.speedMul=r===null?a:a*nn(1+(r-o.progress)/900,.92,1.1)}}handleEvents(){for(let t of this.vehicles){let e=this.viewOf(t),n=!!e,s=r=>{e&&(e.shake=Math.max(e.shake,r),this.input.rumble(e.who,Math.min(1,.35+r*.6),120+220*r))};for(let r of t.events){let o=(c,l=1)=>n?this.sound.play(c,l):this.sound3d(c,t.x,t.z,l);switch(r.type){case"turbo":o("turbo",.8);break;case"box":o("pickup",.8);break;case"gotItem":n&&this.sound.play("item");break;case"nitro":o("nitro");break;case"jump":o("boing"),this.fx.dust(t.x,t.y,t.z,0,0,void 0,10,2);break;case"log":case"ball":o("crash"),s(.7);break;case"boom":s(.9);break;case"meteor":s(1);break;case"car":o("horn"),o("crash",.8),s(.7);break;case"waved":s(.5);break;case"tired":o("crash",.8),s(.6);break;case"barreled":case"rocketed":s(1);break;case"throw":o("throw");break;case"rocket":o("rocket");break;case"rocketWarn":n&&this.sound.play("wrong");break;case"net":o("net");break;case"crush":o("crunch",.9),s(.3);break;case"fallPit":case"fallWater":o("fall",.8),e&&this.input.rumble(e.who,1,400);break;case"splash":t.fall?.pit?.liquid==="lava"?(o("boom",.7),this.fx.explosion(t.x,t.y-1,t.z)):(o("splash"),this.fx.splash(t.x,t.y+.5,t.z));break;case"land":if(r.v>9){o("land",nn(r.v/18,.3,1));for(let c=0;c<14;c++){let l=c/14*Math.PI*2;this.fx.dust(t.x+Math.cos(l)*2.5,t.y,t.z+Math.sin(l)*2.5,Math.cos(l)*20,Math.sin(l)*20,void 0,1,2.4)}s(nn(r.v/30,.15,.6))}break;case"scrape":o("scrape",nn(r.v/12,.2,.8)),this.fx.sparks(t.x,t.y+1.2,t.z,4);break;case"wall":o("bump",.6);break}let a=r.type==="fallWater"?Ho(this.track.theme,r.liquid):r.type==="log"?this.track.theme.rollerHit:r.type==="ball"?this.track.theme.ballHit||Gd.ball:Gd[r.type];if(e&&a){let c=["fallPit","fallWater","net","ball","boom","rocketWarn","meteor","car"].includes(r.type);e.hud.message(a,c?1.6:1,c?"warn":"")}}t.events.length=0}}qualityLevel(){return Yd[Zd(this.settings.quality)]}applyQuality(t){let e=this.qualityLevel(),n=window.devicePixelRatio||1;t&&(this.perf.scale=Math.min(n,e.scale)),this.perf.scale=Math.max(e.minScale,Math.min(Math.min(n,e.scale),this.perf.scale));for(let s of[this.renderer,this.renderer2])s&&s.setPixelRatio(this.perf.scale);this.lowQualityExtras(),t&&(this.setShadows(e.shadows),Rs(this.scene,!!e.cheap),this.show&&Rs(this.show.scene,!!e.cheap)),this.show&&this.resize()}lowQualityExtras(){let t=!!this.qualityLevel().cheap;this.leanLights=t,this.fx.cheap=t;for(let e of[this.headlight,this.tunnelLight,this.flash,...this.trackMeshes.glows])e.visible=!t}warmLights(t){let e=this.renderer,n=[[this.headlight,this.tunnelLight],[this.flash]];for(let s of[this.headlight,this.tunnelLight,this.flash,...this.trackMeshes.glows])s.visible=!1;e.setScissorTest(!0),e.setViewport(0,0,1,1),e.setScissor(0,0,1,1);for(let s of n){for(let r of s)r.visible=!0;e.render(this.scene,t.camera);for(let r of s)r.visible=!1}}leanLightsFor(t,e){this.headlight.visible=this.tunnelLight.visible=e;let n=this.flash.intensity>=1;this.flash.visible=n&&!e;let s=this.tunnelLight;e&&n&&this.flash.intensity>s.intensity?(s.position.copy(this.flash.position),s.intensity=this.flash.intensity,s.color.copy(this.flash.color),s.distance=this.flash.distance,s.decay=this.flash.decay):(s.color.copy(this.tunnelColor),s.distance=45,s.decay=1.4);let r=null,o=22500;if(!e&&!n){let a=t.camera.position;for(let c of this.trackMeshes.glows){let l=(c.position.x-a.x)**2+(c.position.z-a.z)**2;l<o&&(o=l,r=c)}}for(let a of this.trackMeshes.glows)a.visible=a===r}setShadows(t){if(this.perf.shadows===t)return;let e=this.perf.shadows!==-1&&this.perf.shadows===0!=(t===0);this.perf.shadows=t;for(let n of[this.renderer,this.renderer2])n&&(n.shadowMap.enabled=t>0,n.shadowMap.type=t===2?or:rr,n.shadowMap.needsUpdate=!0);this.world.setShadowSize(t===2?2048:1024),e&&this.scene.traverse(n=>{if(n.material)for(let s of[].concat(n.material))s.needsUpdate=!0})}adaptQuality(t){let e=this.perf;if(e.acc+=t,e.n++,e.acc<1.5||(e.fps=e.n/e.acc,e.acc=0,e.n=0,this.fpsText=`${e.fps.toFixed(0)} fps \xB7 ${Math.round(e.scale*100)}% \xB7 sombras ${["no","s\xED","suaves"][e.shadows]}`,this.settings.quality!=="auto"||!(this.state==="race"||this.state==="countdown"||this.state==="title")))return;let n=this.qualityLevel();e.fps<40?e.scale>n.minScale+.01?(e.scale=Math.max(n.minScale,e.scale*(e.fps<25?.8:.9)),this.applyQuality(!1)):e.shadows>0&&this.setShadows(e.shadows-1):e.fps>56&&e.scale<Math.min(window.devicePixelRatio||1,n.scale)-.01&&(e.scale=Math.min(n.scale,e.scale*1.06),this.applyQuality(!1))}toggleFps(){if(this.fpsEl){this.fpsEl.remove(),this.fpsEl=null;return}this.fpsEl=document.createElement("div"),this.fpsEl.id="fps",this.fpsEl.textContent="\u2026",document.body.appendChild(this.fpsEl)}loop(t){requestAnimationFrame(s=>this.loop(s));let e=Math.max(0,(t-this.last)/1e3),n=Math.min(.05,e);this.last=t,this.adaptQuality(Math.min(e,.5)),this.frame(n)}readControls(t){let e=this.views.length===2;return this.views.map(n=>{let s=this.input.drive(e?n.who:"solo"),r=s.analog?40:s.steer===0?10:Math.sign(s.steer)!==Math.sign(n.steerSmooth)?9:6;return n.steerSmooth+=(s.steer-n.steerSmooth)*Math.min(1,t*r),Math.abs(n.steerSmooth)<.01&&s.steer===0&&(n.steerSmooth=0),{steer:n.steerSmooth,throttle:s.throttle,brake:s.brake,item:s.item,reset:s.reset}})}frame(t){this.frames=(this.frames||0)+1,this.time+=t;let e=this.input;this.win2&&this.win2.closed&&this.onWindow2Closed(),e.padEdges(),this.fpsEl&&(this.fpsEl.textContent=(this.fpsText||"\u2026")+(e.padList.length?`
`+e.padDebug():"")),this.menuInput(t),this.state==="cupnext"&&--this.cupWait<=0&&this.cupLoad();{let s=!!this.cup&&this.state==="countdown";s!==this.cupBannerOn&&(this.cupBannerOn=s,Nt("cup-banner").classList.toggle("hidden",!s))}let n=this.readControls(t);if(this.state==="race"&&n.forEach((s,r)=>{let o=this.humans[r];s.reset&&o.state==="ok"&&!o.finished&&o.respawn(o.s,o.d*.5,4)}),this.state==="countdown"&&this.updateCountdown(t,n),this.state==="race"||this.state==="finished"){this.acc+=t;let s=0;for(;this.acc>=mr&&s<10;)this.step(mr,n),this.acc-=mr,s++;s===10&&(this.acc=0),this.handleEvents(),this.vehicleFx(t);for(let r of this.views){let o=r.player,a=r.who==="p2"?"Retroceso":"R";r.hud.hint(this.state==="race"&&!o.finished?o.wrongT>1.2?"\xA1DIRECCI\xD3N CONTRARIA!":o.stuckT>2?`Pulsa ${a}${this.input.padList?.length?" (o Y en el mando)":""} para volver a la pista`:"":"")}this.state==="race"&&this.allDoneT!==null&&(this.allDoneT-=t,this.allDoneT<=0&&this.endRace()),this.state==="finished"&&(this.resultsT-=t,this.resultsT<=0&&this.resultsT>-1&&(this.resultsT=-5,this.showResults()))}else(this.state==="title"||this.state==="select")&&this.obstacles.update(t,[]);if(this.state==="race"||this.state==="countdown"||this.state==="finished"){let s=null;for(let c of this.humans)(!s||Math.abs(c.vF)/c.maxSpeed>Math.abs(s.vF)/s.maxSpeed)&&(s=c);let r=this.humans.indexOf(s),o=this.state==="countdown"?Math.max(...n.map(c=>c.throttle)):this.state==="finished"?.3:s.control.throttle,a=this.state==="countdown"?o*.6+(this.startStrain||0)*(.45+Math.random()*.3):0;s.stall>0&&r>=0&&(o=0,a=Math.random()<.25?.25:-.3),this.sound.engineUpdate(Math.abs(s.vF)/s.maxSpeed+a,o,s.boost>0&&r>=0,!s.onGround)}this.updateRings(t),this.flash.intensity*=Math.exp(-t*8),this.ambient(t),this.fx.update(t),this.world.update(t);for(let s of this.track.pits)s.waterMesh&&(s.waterMesh.material.map.offset.y+=t*.03);if(this.state==="title")this.updateTitleCamera();else if(this.state!=="select")for(let s of this.views)this.updateViewCamera(s,t);if(this.state!=="select"&&this.state!=="title")for(let s of this.views)s.hud.update(t);this.render(t),e.endFrame()}menuInput(t=0){let e=this.input,n=this.menuName(),s=n&&this.menus[n];s||e.navReset();let r=s?e.nav(t):{},o=e.pressed("Enter","NumpadEnter","PadA","Space"),a=e.pressed("Escape","PadB");if(s&&(r.Up||r.Down||r.Left||r.Right||o||a)&&document.body.classList.add("nav-on"),s&&(r.Up&&s.move(-1)&&this.sound.play("click"),r.Down&&s.move(1)&&this.sound.play("click"),r.Left||r.Right)){let c=s.current();s.side(r.Left?-1:1)&&!c?.change&&this.sound.play("click")}switch(this.state){case"title":e.pressed("Digit1","Numpad1","Digit2","Numpad2")?(this.titleSel=e.pressed("Digit2","Numpad2")?1:0,this.sound.init(),this.sound.play("click"),this.goSelect(this.titleSel+1)):(o||e.pressed("PadStart"))&&(this.sound.init(),e.pressed("PadStart")?(this.sound.play("click"),this.goSelect(this.titleSel+1)):s.ok());{let c=!!e.padList?.length;c!==this.padShown&&(this.padShown=c,Nt("pad-controls").classList.toggle("hidden",!c))}break;case"select":e.pressed("PadStart")?(this.sound.play("click"),this.confirmSelect()):o?s.ok():a&&this.backSelect();break;case"race":case"countdown":e.pressed("KeyP","Escape","PadStart")&&this.pause();break;case"paused":e.pressed("KeyP","PadStart")||a?this.resume():o&&s.ok();break;case"podium":e.pressed("Enter","NumpadEnter","PadA","PadStart")?s.ok():a&&(this.sound.play("click"),this.goTitle());break;case"finished":s?e.pressed("Enter","NumpadEnter","PadA","PadStart")&&s.ok():this.resultsT>.4&&e.pressed("Enter","NumpadEnter","PadA","PadStart")&&(this.resultsT=.01);break}e.pressed("KeyM")&&this.toggleMute(),s&&(r.Up||r.Down)&&document.querySelector(".focus")?.scrollIntoView?.({block:"nearest"})}updateCountdown(t,e){let n=this.countdown;this.countdown-=t;let s=this.countdown;if(this.views.forEach((o,a)=>{e[a].throttle>Xe.press?o.heldSince===null&&(o.heldSince=s):o.heldSince=null}),this.startStrain=0,!this.autopilot)for(let o of this.views)this.startHint(o,t,s);let r=this.trackMeshes.lights;for(let o of[3,2,1])if(n>o&&s<=o){for(let a of this.views)a.hud.big(String(o),.9);this.sound.play("count"),r[3-o].material.color.setHex(16719904)}if(n>Xe.total-.05&&s<=Xe.total-.05)for(let o of this.views)o.hud.message("\xA1PREPARADOS!",Xe.intro);if(s<=0){this.state="race",this.sound.play("go");for(let a of r)a.material.color.setHex(2293572);for(let a of this.views){a.hud.big("\xA1YA!",1,"go");let c=a.player;c.rev=0;let l=this.autopilot?null:_v(a.heldSince);l==="stall"?(c.stall=Xe.stall,a.hud.message("\xA1MOTOR AHOGADO!",1.4,"warn"),this.sound.play("stall")):l==="perfect"?(c.boost=Xe.boostPerfect,a.hud.message("\xA1SALIDA PERFECTA!",1.4),this.sound.play("perfect"),this.sound.play("nitro",.7)):l==="good"&&(c.boost=Xe.boostGood,a.hud.message("\xA1BUENA SALIDA!",1.2),this.sound.play("turbo",.8))}let o=Vd[this.settings.diff]??Vd.normal;for(let a of this.vehicles){if(a.isPlayer)continue;let c=Math.random();c<o?a.stall=Xe.stall:c<o+Xe.aiBoost&&(a.boost=1.2)}this.sound.musicStart(!0)}for(let o of this.vehicles)o.syncMesh(t)}startHint(t,e,n){let s=t.player,r=t.heldSince!==null&&n>0;if(s.rev=r?1:0,!r)return;let o=t.heldSince>Xe.two,a=o?nn(.3+(t.heldSince-n)/1.2,0,1):0;o&&(this.startStrain=Math.max(this.startStrain,a));let c=(o?16+22*a:14)*e,l=Math.cos(s.th),h=Math.sin(s.th),d=s.size;for(let u=0;u<4&&Math.random()<c-u;u++){let f=(Math.random()<.5?1.5:-1.5)*d,g=-1.9*d;this.fx.smoke(s.x+l*g-h*f,s.y,s.z+h*g+l*f,-l*4,-h*4,a,(1.1+.5*a)*d)}}vehicleFx(t){for(let e of this.vehicles){if(e.state==="fallen")continue;if(e.stall>0&&Math.random()<t*20){let s=Math.cos(e.th),r=Math.sin(e.th),o=(Math.random()<.5?-.85:.85)*e.size;this.fx.smoke(e.x-s*2.4*e.size-r*o,e.y+3.2*e.size,e.z-r*2.4*e.size+s*o,-s*2,-r*2,1,1.2*e.size)}let n=e.speed;if(e.onGround&&n>8){let r=e.x+Math.cos(e.th)*-2.2,o=e.z+Math.sin(e.th)*-2.2,a=e.surf==="mud"?1:e.surf==="grass"?.25:.35;Math.random()<a*(n/30)&&(e.surf==="mud"?this.fx.mud(r,e.y,o,e.vx,e.vz,3):this.fx.dust(r,e.y,o,e.vx,e.vz,e.surf==="grass"?[.45,.55,.3]:void 0,1,2))}if(e.boost>0){let s=e.x-Math.cos(e.th)*2.6,r=e.z-Math.sin(e.th)*2.6;for(let o of[-.85,.85]){let a=s-Math.sin(e.th)*o,c=r+Math.cos(e.th)*o;this.fx.boostFlame(a,e.y+3.6,c,-Math.cos(e.th)*10,-Math.sin(e.th)*10)}}}}updateRings(t){for(let e of this.rings){if(e.t>=1){e.mesh.visible=!1;continue}e.t=Math.min(1,e.t+t*1.6);let n=2+e.t*22;e.mesh.scale.set(n,n,1+e.t*3),e.mesh.material.opacity=(1-e.t)*.85}}prepareLights(t,e){let n=t.player,s=this.track,r=0;s.inTunnel(n.s)&&(r=nn(Math.min(n.s-s.tunnel.s0,s.tunnel.s1-n.s)/30,0,1)),t.tunnelF+=(r-t.tunnelF)*Math.min(1,e*4);let o=t.tunnelF,a=this.world;a.hemi.intensity=a.baseHemi*(1-.72*o),a.sun.intensity=a.baseSun*(1-.97*o),this.scene.environmentIntensity=this.envBase*(1-.7*o);let c=Math.cos(n.th),l=Math.sin(n.th);this.headlight.intensity=260*o,this.headlight.position.set(n.x+c*2.5,n.y+2.6,n.z+l*2.5),this.headlight.target.position.set(n.x+c*30,n.y,n.z+l*30),this.headlight.target.updateMatrixWorld();let h=Math.cos((n.s-s.tunnel.s0-6)/12*Math.PI*2);this.tunnelLight.intensity=o*(150+90*h),this.tunnelLight.position.set(n.x+c*6,s.baseAt(n.s)+15,n.z+l*6),this.leanLights&&this.leanLightsFor(t,o>.002),a.focus(n.mesh.position)}resetLights(){let t=this.world;if(t.hemi.intensity=t.baseHemi,t.sun.intensity=t.baseSun,this.scene.environmentIntensity=this.envBase,this.headlight.intensity=0,this.tunnelLight.intensity=0,this.leanLights)for(let e of[this.headlight,this.tunnelLight,this.flash])e.visible=!1}updateTitleCamera(){let t=this.camera,e=this.track.pointAt(this.track.length-20),n=(150+40*Math.sin(this.time*.13))*Math.PI/180,s=26,r=Math.cos(n)*s,o=Math.sin(n)*s;t.position.set(e.x+e.tx*r+e.rx*o,6.5+Math.sin(this.time*.2)*1.5,e.z+e.tz*r+e.rz*o),t.lookAt(e.x+e.tx*6,2.2,e.z+e.tz*6),t.fov=68,t.updateProjectionMatrix()}updateViewCamera(t,e){let n=t.camera,s=t.player,r=this.state==="paused"?this.prevState:this.state,o=68,a=n.aspect<1;if(this.state!=="paused")if(r==="countdown"){t.camYaw=s.th;let c=this.chaseTarget(t,s);o=c.fov;let l=nn((Xe.total-this.countdown)/Xe.intro,0,1);if(l>=1)t.camPos.copy(c.want),t.camLook.copy(c.look);else{let h=l*l*l*(l*(l*6-15)+10),d=Math.cos(s.th),u=Math.sin(s.th),f=this.track.pointAt(s.s),g=Math.abs(s.d)>1?Math.sign(s.d)*Math.sign(-u*f.rx+d*f.rz||1):t.idx===1?-1:1,x=.55+.45*s.size,m=7.5*x*(a?1.25:1),p=c.want.x-s.x,_=c.want.z-s.z,v=-(p*d+_*u),y=p*-u+_*d,A=.6+(Math.PI-.6)*h,S=Math.cos(A)*(m+(v-m)*h),T=g*Math.sin(A)*6*x+y*h,R=s.y+3.2*x;t.camPos.set(s.x+d*S-u*T,R+(c.want.y-R)*h,s.z+u*S+d*T),t.camLook.set(s.x,s.y+1.8*x,s.z).lerp(c.look,h)}}else if(s.finished&&(r==="race"||this.resultsT<2.2)){let c=this.time*.25+t.idx*Math.PI;t.camPos.lerp(new D(s.x+Math.cos(c)*16,s.y+7,s.z+Math.sin(c)*16),1-Math.exp(-e*2)),t.camLook.set(s.x,s.y+2,s.z)}else{if(s.state!=="fallen"){let u=Math.abs(s.vF)>1;t.camYaw=Mv(t.camYaw,u||s.stun<=0?s.th:t.camYaw,1-Math.exp(-e*5))}let c=this.chaseTarget(t,s),l=c.want,h=1-Math.exp(-e*9),d=1-Math.exp(-e*5);t.camPos.x+=(l.x-t.camPos.x)*h,t.camPos.z+=(l.z-t.camPos.z)*h,t.camPos.y+=(l.y-t.camPos.y)*d,t.camLook.copy(c.look),o=c.fov}if(t.fov+=(o-t.fov)*Math.min(1,e*3),n.fov=t.fov,n.position.copy(t.camPos),t.shake>0){t.shake=Math.max(0,t.shake-e*1.8);let c=t.shake*.5;n.position.x+=(Math.random()-.5)*c,n.position.y+=(Math.random()-.5)*c,n.position.z+=(Math.random()-.5)*c}n.lookAt(t.camLook),n.updateProjectionMatrix()}chaseTarget(t,e){let n=t.camera,s=n.aspect<1,r=Math.abs(e.vF),o=n.aspect>2.6,a=.55+.45*e.size,c=(10.5+nn(r*.07,0,3.2))*(s?1.55:1)*a,l=(4.4+nn(r*.02,0,.8))*(s?1.35:o?.9:1)*a,h=e.state==="fallen"&&e.fall?Math.max(e.y,e.fall.pit.top-1):e.y,d=new D(e.x-Math.cos(t.camYaw)*c,h+l,e.z-Math.sin(t.camYaw)*c),u=this.track.project(d.x,d.z,e.idx),f=this.track.surfaceAt(u.s,nn(u.d,-15,15)),g=f.type==="pit"||f.type==="water"?f.top:f.h;d.y=Math.max(d.y,g+2.2);let x=new D(e.x+Math.cos(t.camYaw)*5,e.y+2.4,e.z+Math.sin(t.camYaw)*5),m=(s?78:o?58:68)+nn(r/e.maxSpeed,0,1.3)*8+(e.boost>0?7:0);return{want:d,look:x,fov:m}}updateBlobs(){let t=this.perf.shadows===0&&this.state!=="title";this.vehicles.forEach((e,n)=>{let s=this.blobs[n];if(s.visible=t&&e.mesh.visible&&e.state!=="fallen",!s.visible)return;let r=this.track.surfaceAt(e.s,e.d).h,o=Math.max(0,e.y-r),a=Math.max(.35,1-o/12);s.position.set(e.x,r+.08,e.z),s.scale.setScalar(6.5*e.mesh.scale.x*(.7+.3*a)),s.material.opacity=.55*a})}render(t){this.updateBlobs();let e=this.renderer;if(this.state==="podium"){this.renderPodium(t);return}if(this.state==="cupnext")return;if(this.state==="select"){this.showSpin+=t,this.show.table.rotation.y=this.time*.45;let o=this.show.trucks[this.settings[this.selKey()]];o.root.position.y=Math.abs(Math.sin(this.time*2.2))*.25*Math.max(0,1-this.showSpin),fr(o,{wheelSpin:0,steer:Math.sin(this.time*.8)*.6,comp:Math.sin(this.time*3)*.04,dt:t}),e.setScissorTest(!1),e.setViewport(0,0,window.innerWidth,window.innerHeight),e.render(this.show.scene,this.show.cam);return}if(this.state==="title"||!this.views.length){this.resetLights(),this.world.focus(this.track.pointAt(this.track.length-20)),e.setScissorTest(!1),e.setViewport(0,0,window.innerWidth,window.innerHeight),this.fx.setScale(e.domElement.height,this.camera.fov),e.render(this.scene,this.camera);return}let n=window.innerWidth,s=window.innerHeight,r=this.views.filter(o=>!o.external);!this.lightsWarm&&this.leanLights&&(this.lightsWarm=!0,this.prepareLights(this.views[0],t),this.warmLights(this.views[0])),e.setScissorTest(r.length>1);for(let o of r){let a=o.rect.x*n,c=(1-o.rect.y-o.rect.h)*s,l=o.rect.w*n,h=o.rect.h*s;e.setViewport(a,c,l,h),e.setScissor(a,c,l,h),this.prepareLights(o,t),this.fx.setScale(h*e.getPixelRatio(),o.camera.fov),e.render(this.scene,o.camera)}for(let o of this.views.filter(a=>a.external))if(this.win2Ready()){this.prepareLights(o,t),this.fx.setScale(this.renderer2.domElement.height,o.camera.fov),this.scene.environment=this.envMap2;try{this.renderer2.render(this.scene,o.camera)}finally{this.scene.environment=this.envMap}}}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.layoutViews();let n=this.show.cam;if(t>=900||t>=600&&e<=500&&t>e){let s=t>=900?Math.min(470,t*.42)+t*.03:t*.45+16;n.position.set(13.5,6.4,16),n.aspect=(t+s)/e,n.setViewOffset(t+s,e,s,0,t,e)}else{let s=e*.2,r=t<e?1.9:1.4;n.position.set(10.5*r,5.2*r,12.5*r),n.aspect=t/(e+2*s),n.setViewOffset(t,e+2*s,0,2*s,t,e)}n.lookAt(0,2,0),n.updateProjectionMatrix()}simulate(t){let e=Math.round(t/mr),n=()=>this.humans.map(()=>({steer:0,throttle:0,brake:0,item:!1}));for(let s=0;s<e;s++)this.state==="countdown"&&(this.countdown=0,this.updateCountdown(0,n())),this.step(mr,n()),s%12===0&&this.handleEvents()}};function Sv(){document.body.classList.add("screen2"),Nt("loading").classList.add("hidden"),Nt("screen2-wait").addEventListener("click",()=>{document.documentElement.requestFullscreen?.().catch(()=>{})}),document.addEventListener("dblclick",()=>{document.documentElement.requestFullscreen?.().catch(()=>{})}),window.__screen2Ready=!0}window.__renderSong=async(i,t=30,e=[])=>{let n=await ta(i,t,44100,e),s=n.length,r=n.numberOfChannels,o=new DataView(new ArrayBuffer(44+s*r*2)),a=(u,f)=>{for(let g=0;g<f.length;g++)o.setUint8(u+g,f.charCodeAt(g))};a(0,"RIFF"),o.setUint32(4,36+s*r*2,!0),a(8,"WAVEfmt "),o.setUint32(16,16,!0),o.setUint16(20,1,!0),o.setUint16(22,r,!0),o.setUint32(24,n.sampleRate,!0),o.setUint32(28,n.sampleRate*r*2,!0),o.setUint16(32,r*2,!0),o.setUint16(34,16,!0),a(36,"data"),o.setUint32(40,s*r*2,!0);let c=[...Array(r)].map((u,f)=>n.getChannelData(f)),l=44;for(let u=0;u<s;u++)for(let f=0;f<r;f++)o.setInt16(l,Math.max(-1,Math.min(1,c[f][u]))*32767,!0),l+=2;let h=new Uint8Array(o.buffer),d="";for(let u=0;u<h.length;u+=32768)d+=String.fromCharCode(...h.subarray(u,u+32768));return btoa(d)};function qd(){if(new URLSearchParams(location.search).has("pantalla2")){Sv();return}try{let i=new $l;window.__mm=i}catch(i){console.error(i);let t=Nt("loading");t.classList.remove("hidden"),t.innerHTML="<b>No se ha podido arrancar el juego.</b><br>Necesitas un navegador con WebGL activado.<br><small>"+String(i.message||i)+"</small>"}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",qd):qd();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
