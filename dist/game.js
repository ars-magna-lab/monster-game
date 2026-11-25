(()=>{var Dd=0,Yl=1,Ud=2;var Qs=1,tr=2,On=3,wn=0,Te=1,le=2,ni=0,ii=1,Xr=2,Zl=3,$l=4,Nd=5,_i=100,Od=101,Fd=102,Bd=103,kd=104,Hd=200,zd=201,Gd=202,Vd=203,Da=204,Ua=205,Wd=206,Xd=207,qd=208,Yd=209,Zd=210,$d=211,Jd=212,Kd=213,jd=214,Na=0,Oa=1,Fa=2,rs=3,Ba=4,ka=5,Ha=6,za=7,sl=0,Qd=1,tf=2,si=0,ef=1,nf=2,sf=3,rl=4,rf=5,of=6,af=7;var iu=300,os=301,as=302,Ga=303,Va=304,xo=306,wi=1e3,Ei=1001,Wa=1002,tn=1003,cf=1004;var dr=1005;var En=1006,jo=1007;var Si=1008;var Hn=1009,su=1010,ru=1011,Ws=1012,ol=1013,Ti=1014,Sn=1015,er=1016,al=1017,cl=1018,cs=1020,ou=35902,au=1021,cu=1022,xn=1023,lu=1024,hu=1025,ns=1026,ls=1027,ll=1028,hl=1029,uu=1030,ul=1031;var dl=1033,Hr=33776,zr=33777,Gr=33778,Vr=33779,Xa=35840,qa=35841,Ya=35842,Za=35843,$a=36196,Ja=37492,Ka=37496,ja=37808,Qa=37809,tc=37810,ec=37811,nc=37812,ic=37813,sc=37814,rc=37815,oc=37816,ac=37817,cc=37818,lc=37819,hc=37820,uc=37821,Wr=36492,dc=36494,fc=36495,du=36283,pc=36284,mc=36285,gc=36286;var qr=2300,xc=2301,Qo=2302,Jl=2400,Kl=2401,jl=2402;var lf=3200,hf=3201;var fl=0,uf=1,ei="",be="srgb",_s="srgb-linear",yo="linear",he="srgb";var ki=7680;var Ql=519,df=512,ff=513,pf=514,fu=515,mf=516,gf=517,xf=518,yf=519,th=35044,nr=35048;var eh="300 es",Bn=2e3,Yr=2001,oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ta=Math.PI/180,Zr=180/Math.PI;function Ms(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function vf(i,t){return(i%t+t)%t}function ea(i,t,e){return(1-e)*i+e*t}function Is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var vt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],v=s[4],y=s[7],C=s[2],T=s[5],w=s[8];return r[0]=o*x+a*M+c*C,r[3]=o*m+a*v+c*T,r[6]=o*p+a*y+c*w,r[1]=l*x+h*M+u*C,r[4]=l*m+h*v+u*T,r[7]=l*p+h*y+u*w,r[2]=d*x+f*M+g*C,r[5]=d*m+f*v+g*T,r[8]=d*p+f*y+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},na=new Yt;function pu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _f(){let i=$r("canvas");return i.style.display="block",i}var nh={};function ks(i){i in nh||(nh[i]=!0,console.warn(i))}function Mf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ef(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ee={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?yo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ih=[.64,.33,.3,.6,.15,.06],sh=[.2126,.7152,.0722],rh=[.3127,.329],oh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[_s]:{primaries:ih,whitePoint:rh,transfer:yo,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:sh,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:ih,whitePoint:rh,transfer:he,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:sh,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});var Hi,yc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=$r("canvas")),Hi.width=t.width,Hi.height=t.height;let n=Hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$r("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sf=0,Jr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Ms(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ia(s[o].image)):r.push(ia(s[o]))}else r=ia(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wf=0,Ze=class i extends oi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ei,s=Ei,r=En,o=Si,a=xn,c=Hn,l=i.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Ms(),this.name="",this.source=new Jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wi:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wi:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=iu;Ze.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,y=(f+1)/2,C=(p+1)/2,T=(h+d)/4,w=(u+x)/4,P=(g+m)/4;return v>y&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=w/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vc=class extends oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Jr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends vc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Kr=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _c=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*x,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),T=Math.atan2(C,p*M);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}let y=a*M;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+x*y,m===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ch.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ch.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sa=new U,ch=new Tn,Gn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),pr.subVectors(this.max,Ls),zi.subVectors(t.a,Ls),Gi.subVectors(t.b,Ls),Vi.subVectors(t.c,Ls),$n.subVectors(Gi,zi),Jn.subVectors(Vi,Gi),fi.subVectors(zi,Vi);let e=[0,-$n.z,$n.y,0,-Jn.z,Jn.y,0,-fi.z,fi.y,$n.z,0,-$n.x,Jn.z,0,-Jn.x,fi.z,0,-fi.x,-$n.y,$n.x,0,-Jn.y,Jn.x,0,-fi.y,fi.x,0];return!ra(e,zi,Gi,Vi,pr)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,zi,Gi,Vi,pr))?!1:(mr.crossVectors($n,Jn),e=[mr.x,mr.y,mr.z],ra(e,zi,Gi,Vi,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},In=[new U,new U,new U,new U,new U,new U,new U,new U],pn=new U,fr=new Gn,zi=new U,Gi=new U,Vi=new U,$n=new U,Jn=new U,fi=new U,Ls=new U,pr=new U,mr=new U,pi=new U;function ra(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);let a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),c=t.dot(pi),l=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Tf=new Gn,Ds=new U,oa=new U,ai=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(oa)),this.expandByPoint(Ds.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new U,aa=new U,gr=new U,Kn=new U,ca=new U,xr=new U,la=new U,jr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){aa.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(aa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(gr),a=Kn.dot(this.direction),c=-Kn.dot(gr),l=Kn.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(aa).addScaledVector(gr,d),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){ca.subVectors(e,t),xr.subVectors(n,t),la.crossVectors(ca,xr);let o=this.direction.dot(la),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);let c=a*this.direction.dot(xr.crossVectors(Kn,xr));if(c<0)return null;let l=a*this.direction.dot(ca.cross(Kn));if(l<0||c+l>o)return null;let h=-a*Kn.dot(la);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Af,t,Rf)}lookAt(t,e,n){let s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),jn.crossVectors(n,je),jn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),jn.crossVectors(n,je)),jn.normalize(),yr.crossVectors(je,jn),s[0]=jn.x,s[4]=yr.x,s[8]=je.x,s[1]=jn.y,s[5]=yr.y,s[9]=je.y,s[2]=jn.z,s[6]=yr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],v=n[7],y=n[11],C=n[15],T=s[0],w=s[4],P=s[8],b=s[12],_=s[1],I=s[5],G=s[9],F=s[13],X=s[2],tt=s[6],W=s[10],at=s[14],J=s[3],ft=s[7],mt=s[11],bt=s[15];return r[0]=o*T+a*_+c*X+l*J,r[4]=o*w+a*I+c*tt+l*ft,r[8]=o*P+a*G+c*W+l*mt,r[12]=o*b+a*F+c*at+l*bt,r[1]=h*T+u*_+d*X+f*J,r[5]=h*w+u*I+d*tt+f*ft,r[9]=h*P+u*G+d*W+f*mt,r[13]=h*b+u*F+d*at+f*bt,r[2]=g*T+x*_+m*X+p*J,r[6]=g*w+x*I+m*tt+p*ft,r[10]=g*P+x*G+m*W+p*mt,r[14]=g*b+x*F+m*at+p*bt,r[3]=M*T+v*_+y*X+C*J,r[7]=M*w+v*I+y*tt+C*ft,r[11]=M*P+v*G+y*W+C*mt,r[15]=M*b+v*F+y*at+C*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=u*m*l-x*d*l+x*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,y=h*x*l-g*u*l+g*a*f-o*x*f-h*a*p+o*u*p,C=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,T=e*M+n*v+s*y+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=M*w,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*w,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*w,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*w,t[4]=v*w,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*w,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*w,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*w,t[8]=y*w,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*w,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*w,t[12]=C*w,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*w,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,M=c*l,v=c*h,y=c*u,C=n.x,T=n.y,w=n.z;return s[0]=(1-(x+p))*C,s[1]=(f+y)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+v)*w,s[9]=(m-M)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Wi.set(s[0],s[1],s[2]).length(),o=Wi.set(s[4],s[5],s[6]).length(),a=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);let l=1/r,h=1/o,u=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Bn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(a===Bn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Yr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Bn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h,g,x;if(a===Bn)g=(o+r)*u,x=-2*u;else if(a===Yr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Wi=new U,mn=new ie,Af=new U(0,0,0),Rf=new U(1,1,1),jn=new U,yr=new U,je=new U,lh=new ie,hh=new Tn,en=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hh.setFromEuler(this),this.setFromQuaternion(hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cf=0,uh=new U,Xi=new Tn,Dn=new ie,vr=new U,Us=new U,Pf=new U,If=new Tn,dh=new U(1,0,0),fh=new U(0,1,0),ph=new U(0,0,1),mh={type:"added"},Lf={type:"removed"},qi={type:"childadded",child:null},ha={type:"childremoved",child:null},Fe=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new en,n=new Tn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Yt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(dh,t)}rotateY(t){return this.rotateOnAxis(fh,t)}rotateZ(t){return this.rotateOnAxis(ph,t)}translateOnAxis(t,e){return uh.copy(t).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dh,t)}translateY(t){return this.translateOnAxis(fh,t)}translateZ(t){return this.translateOnAxis(ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Us,vr,this.up):Dn.lookAt(vr,Us,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mh),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lf),ha.child=t,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mh),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Pf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,If,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Fe.DEFAULT_UP=new U(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new U,Un=new U,ua=new U,Nn=new U,Yi=new U,Zi=new U,gh=new U,da=new U,fa=new U,pa=new U,ma=new ue,ga=new ue,xa=new ue,Mi=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Un.subVectors(n,e),ua.subVectors(t,e);let o=gn.dot(gn),a=gn.dot(Un),c=gn.dot(ua),l=Un.dot(Un),h=Un.dot(ua),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(o,Nn.y),c.addScaledVector(a,Nn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ma.setScalar(0),ga.setScalar(0),xa.setScalar(0),ma.fromBufferAttribute(t,e),ga.fromBufferAttribute(t,n),xa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ma,r.x),o.addScaledVector(ga,r.y),o.addScaledVector(xa,r.z),o}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Un.subVectors(t,e),gn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),gn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Yi.subVectors(s,n),Zi.subVectors(r,n),da.subVectors(t,n);let c=Yi.dot(da),l=Zi.dot(da);if(c<=0&&l<=0)return e.copy(n);fa.subVectors(t,s);let h=Yi.dot(fa),u=Zi.dot(fa);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Yi,o);pa.subVectors(t,r);let f=Yi.dot(pa),g=Zi.dot(pa);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Zi,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return gh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(gh,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Yi,o).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=vf(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ya(o,r,t+1/3),this.g=ya(o,r,t),this.b=ya(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let n=mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return ee.fromWorkingColorSpace(He.copy(this),t),Math.round(ze(He.r*255,0,255))*65536+Math.round(ze(He.g*255,0,255))*256+Math.round(ze(He.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=be){ee.fromWorkingColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(_r);let n=ea(Qn.h,_r.h,e),s=ea(Qn.s,_r.s,e),r=ea(Qn.l,_r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new kt;kt.NAMES=mu;var Df=0,Vn=class extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Ms(),this.name="",this.blending=ii,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ua,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Re=class extends Vn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new U,Mr=new vt,Ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=th,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==th&&(t.usage=this.usage),t}};var to=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var eo=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Uf=0,an=new ie,va=new Fe,$i=new U,Qe=new Gn,Ns=new Gn,Oe=new U,ye=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pu(t)?eo:to)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return va.lookAt(t),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(Qe.min,Ns.min),Qe.expandByPoint(Oe),Oe.addVectors(Qe.max,Ns.max),Qe.expandByPoint(Oe)):(Qe.expandByPoint(Ns.min),Qe.expandByPoint(Ns.max))}Qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Oe.fromBufferAttribute(a,l),c&&($i.fromBufferAttribute(t,l),Oe.add($i)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new U,c[P]=new U;let l=new U,h=new U,u=new U,d=new vt,f=new vt,g=new vt,x=new U,m=new U;function p(P,b,_){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,_),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[P].add(x),a[b].add(x),a[_].add(x),c[P].add(m),c[b].add(m),c[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,b=M.length;P<b;++P){let _=M[P],I=_.start,G=_.count;for(let F=I,X=I+G;F<X;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let v=new U,y=new U,C=new U,T=new U;function w(P){C.fromBufferAttribute(s,P),T.copy(C);let b=a[P];v.copy(b),v.sub(C.multiplyScalar(C.dot(b))).normalize(),y.crossVectors(T,b);let I=y.dot(c[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,I)}for(let P=0,b=M.length;P<b;++P){let _=M[P],I=_.start,G=_.count;for(let F=I,X=I+G;F<X;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ae(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xh=new ie,mi=new jr,br=new ai,yh=new U,Er=new U,Sr=new U,wr=new U,_a=new U,Tr=new U,vh=new U,Ar=new U,z=class extends Fe{constructor(t=new ye,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Tr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(_a.fromBufferAttribute(u,t),o?Tr.addScaledVector(_a,h):Tr.addScaledVector(_a.sub(e),h))}e.add(Tr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(br.containsPoint(mi.origin)===!1&&(mi.intersectSphere(br,yh)===null||mi.origin.distanceToSquared(yh)>(t.far-t.near)**2))&&(xh.copy(r).invert(),mi.copy(t.ray).applyMatrix4(xh),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,C=v;y<C;y+=3){let T=a.getX(y),w=a.getX(y+1),P=a.getX(y+2);s=Rr(this,p,t,n,l,h,u,T,w,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=Rr(this,o,t,n,l,h,u,M,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,C=v;y<C;y+=3){let T=y,w=y+1,P=y+2;s=Rr(this,p,t,n,l,h,u,T,w,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=m,v=m+1,y=m+2;s=Rr(this,o,t,n,l,h,u,M,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Nf(i,t,e,n,s,r,o,a){let c;if(t.side===Te?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===wn,a),c===null)return null;Ar.copy(a),Ar.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ar);return l<e.near||l>e.far?null:{distance:l,point:Ar.clone(),object:i}}function Rr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Er),i.getVertexPosition(c,Sr),i.getVertexPosition(l,wr);let h=Nf(i,t,e,n,Er,Sr,wr,vh);if(h){let u=new U;Mi.getBarycoord(vh,Er,Sr,wr,u),s&&(h.uv=Mi.getInterpolatedAttribute(s,a,c,l,u,new vt)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,a,c,l,u,new vt)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};Mi.getNormal(Er,Sr,wr,d.normal),h.face=d,h.barycoord=u}return h}var Ct=class i extends ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function g(x,m,p,M,v,y,C,T,w,P,b){let _=y/w,I=C/P,G=y/2,F=C/2,X=T/2,tt=w+1,W=P+1,at=0,J=0,ft=new U;for(let mt=0;mt<W;mt++){let bt=mt*I-F;for(let Ft=0;Ft<tt;Ft++){let jt=Ft*_-G;ft[x]=jt*M,ft[m]=bt*v,ft[p]=X,l.push(ft.x,ft.y,ft.z),ft[x]=0,ft[m]=0,ft[p]=T>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(Ft/w),u.push(1-mt/P),at+=1}}for(let mt=0;mt<P;mt++)for(let bt=0;bt<w;bt++){let Ft=d+bt+tt*mt,jt=d+bt+tt*(mt+1),it=d+(bt+1)+tt*(mt+1),D=d+(bt+1)+tt*mt;c.push(Ft,jt,D),c.push(jt,it,D),J+=6}a.addGroup(f,J,b),f+=J,d+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function hs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=hs(i[e]);for(let s in n)t[s]=n[s]}return t}function Of(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Ff={clone:hs,merge:Ve},Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends Vn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},no=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ti=new U,_h=new vt,Mh=new vt,Le=class extends no{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,_h,Mh),e.subVectors(Mh,_h)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ta*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ji=-90,Ki=1,Mc=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(Ji,Ki,t,e);s.layers=this.layers,this.add(s);let r=new Le(Ji,Ki,t,e);r.layers=this.layers,this.add(r);let o=new Le(Ji,Ki,t,e);o.layers=this.layers,this.add(o);let a=new Le(Ji,Ki,t,e);a.layers=this.layers,this.add(a);let c=new Le(Ji,Ki,t,e);c.layers=this.layers,this.add(c);let l=new Le(Ji,Ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},io=class extends Ze{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bc=class extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new io(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ct(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:ni});r.uniforms.tEquirect.value=e;let o=new z(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=En),new Mc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ma=new U,Hf=new U,zf=new Yt,Fn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ma.subVectors(n,e).cross(Hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||zf.getNormalMatrix(t),s=this.coplanarPoint(Ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new ai,Cr=new U,Xs=class{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,o=new Fn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],M=s[13],v=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,m-f,y-p).normalize(),n[1].setComponents(c+r,d+l,m+f,y+p).normalize(),n[2].setComponents(c+o,d+h,m+g,y+M).normalize(),n[3].setComponents(c-o,d-h,m-g,y-M).normalize(),n[4].setComponents(c-a,d-u,m-x,y-v).normalize(),e===Bn)n[5].setComponents(c+a,d+u,m+x,y+v).normalize();else if(e===Yr)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Cr.x=s.normal.x>0?t.max.x:t.min.x,Cr.y=s.normal.y>0?t.max.y:t.min.y,Cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gf(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ve=class i extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let M=p*d-o;for(let v=0;v<l;v++){let y=v*u-r;g.push(y,-M,0),x.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let v=M+l*p,y=M+l*(p+1),C=M+1+l*(p+1),T=M+1+l*p;f.push(v,y,T),f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
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
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$f=`#ifdef USE_AOMAP
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
#endif`,Jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kf=`#ifdef USE_BATCHING
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
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,np=`#ifdef USE_IRIDESCENCE
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
#endif`,ip=`#ifdef USE_BUMPMAP
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dp=`#define PI 3.141592653589793
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
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pp=`vec3 transformedNormal = objectNormal;
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
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",_p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
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
}`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
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
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,zp=`struct PhysicalMaterial {
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
}`,Gp=`
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jp=`#if defined( USE_POINTS_UV )
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
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
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
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Am=`float getShadowMask() {
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
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
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
}`,$m=`#if DEPTH_PACKING == 3200
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
}`,Jm=`#define DISTANCE
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
}`,Km=`#define DISTANCE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#define LAMBERT
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
}`,r0=`#define LAMBERT
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
}`,o0=`#define MATCAP
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
}`,a0=`#define MATCAP
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
}`,c0=`#define NORMAL
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
}`,l0=`#define NORMAL
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
}`,h0=`#define PHONG
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
}`,u0=`#define PHONG
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
}`,d0=`#define STANDARD
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
}`,f0=`#define STANDARD
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
}`,p0=`#define TOON
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
}`,m0=`#define TOON
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
}`,g0=`uniform float size;
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
}`,x0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,v0=`uniform vec3 color;
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
}`,_0=`uniform float rotation;
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
}`,M0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Vf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:Zf,aomap_fragment:$f,aomap_pars_fragment:Jf,batching_pars_vertex:Kf,batching_vertex:jf,begin_vertex:Qf,beginnormal_vertex:tp,bsdfs:ep,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:op,clipping_planes_vertex:ap,color_fragment:cp,color_pars_fragment:lp,color_pars_vertex:hp,color_vertex:up,common:dp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:xp,emissivemap_pars_fragment:yp,colorspace_fragment:vp,colorspace_pars_fragment:_p,envmap_fragment:Mp,envmap_common_pars_fragment:bp,envmap_pars_fragment:Ep,envmap_pars_vertex:Sp,envmap_physical_pars_fragment:Np,envmap_vertex:wp,fog_vertex:Tp,fog_pars_vertex:Ap,fog_fragment:Rp,fog_pars_fragment:Cp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Dp,lights_pars_begin:Up,lights_toon_fragment:Op,lights_toon_pars_fragment:Fp,lights_phong_fragment:Bp,lights_phong_pars_fragment:kp,lights_physical_fragment:Hp,lights_physical_pars_fragment:zp,lights_fragment_begin:Gp,lights_fragment_maps:Vp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Zp,map_fragment:$p,map_pars_fragment:Jp,map_particle_fragment:Kp,map_particle_pars_fragment:jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:tm,morphinstance_vertex:em,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:cm,normal_pars_vertex:lm,normal_vertex:hm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:xm,premultiplied_alpha_fragment:ym,project_vertex:vm,dithering_fragment:_m,dithering_pars_fragment:Mm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:wm,shadowmap_vertex:Tm,shadowmask_pars_fragment:Am,skinbase_vertex:Rm,skinning_pars_vertex:Cm,skinning_vertex:Pm,skinnormal_vertex:Im,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Um,tonemapping_pars_fragment:Nm,transmission_fragment:Om,transmission_pars_fragment:Fm,uv_pars_fragment:Bm,uv_pars_vertex:km,uv_vertex:Hm,worldpos_vertex:zm,background_vert:Gm,background_frag:Vm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:Zm,depth_frag:$m,distanceRGBA_vert:Jm,distanceRGBA_frag:Km,equirect_vert:jm,equirect_frag:Qm,linedashed_vert:t0,linedashed_frag:e0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:s0,meshlambert_frag:r0,meshmatcap_vert:o0,meshmatcap_frag:a0,meshnormal_vert:c0,meshnormal_frag:l0,meshphong_vert:h0,meshphong_frag:u0,meshphysical_vert:d0,meshphysical_frag:f0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:x0,shadow_vert:y0,shadow_frag:v0,sprite_vert:_0,sprite_frag:M0},Mt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},bn={basic:{uniforms:Ve([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ve([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ve([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ve([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ve([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ve([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ve([Mt.points,Mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ve([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ve([Mt.common,Mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ve([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ve([Mt.sprite,Mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ve([Mt.common,Mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ve([Mt.lights,Mt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};bn.physical={uniforms:Ve([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Pr={r:0,b:0,g:0},xi=new en,b0=new ie;function E0(i,t,e,n,s,r,o){let a=new kt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1,y=g(M);y===null?p(a,c):y&&y.isColor&&(p(y,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){let y=g(v);y&&(y.isCubeTexture||y.mapping===xo)?(h===void 0&&(h=new z(new Ct(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:hs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(v.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(b0.makeRotationFromEuler(xi)),h.material.toneMapped=ee.getTransfer(y.colorSpace)!==he,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new z(new ve(2,2),new Ge({name:"BackgroundMaterial",uniforms:hs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ee.getTransfer(y.colorSpace)!==he,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,v){M.getRGB(Pr,gu(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:x,addToRenderList:m}}function S0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(_,I,G,F,X){let tt=!1,W=u(F,G,I);r!==W&&(r=W,l(r.object)),tt=f(_,F,G,X),tt&&g(_,F,G,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,y(_,I,G,F),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,I,G){let F=G.wireframe===!0,X=n[_.id];X===void 0&&(X={},n[_.id]=X);let tt=X[I.id];tt===void 0&&(tt={},X[I.id]=tt);let W=tt[F];return W===void 0&&(W=d(c()),tt[F]=W),W}function d(_){let I=[],G=[],F=[];for(let X=0;X<e;X++)I[X]=0,G[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:F,object:_,attributes:{},index:null}}function f(_,I,G,F){let X=r.attributes,tt=I.attributes,W=0,at=G.getAttributes();for(let J in at)if(at[J].location>=0){let mt=X[J],bt=tt[J];if(bt===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(bt=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(bt=_.instanceColor)),mt===void 0||mt.attribute!==bt||bt&&mt.data!==bt.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(_,I,G,F){let X={},tt=I.attributes,W=0,at=G.getAttributes();for(let J in at)if(at[J].location>=0){let mt=tt[J];mt===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(mt=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(mt=_.instanceColor));let bt={};bt.attribute=mt,mt&&mt.data&&(bt.data=mt.data),X[J]=bt,W++}r.attributes=X,r.attributesNum=W,r.index=F}function x(){let _=r.newAttributes;for(let I=0,G=_.length;I<G;I++)_[I]=0}function m(_){p(_,0)}function p(_,I){let G=r.newAttributes,F=r.enabledAttributes,X=r.attributeDivisors;G[_]=1,F[_]===0&&(i.enableVertexAttribArray(_),F[_]=1),X[_]!==I&&(i.vertexAttribDivisor(_,I),X[_]=I)}function M(){let _=r.newAttributes,I=r.enabledAttributes;for(let G=0,F=I.length;G<F;G++)I[G]!==_[G]&&(i.disableVertexAttribArray(G),I[G]=0)}function v(_,I,G,F,X,tt,W){W===!0?i.vertexAttribIPointer(_,I,G,X,tt):i.vertexAttribPointer(_,I,G,F,X,tt)}function y(_,I,G,F){x();let X=F.attributes,tt=G.getAttributes(),W=I.defaultAttributeValues;for(let at in tt){let J=tt[at];if(J.location>=0){let ft=X[at];if(ft===void 0&&(at==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),at==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor)),ft!==void 0){let mt=ft.normalized,bt=ft.itemSize,Ft=t.get(ft);if(Ft===void 0)continue;let jt=Ft.buffer,it=Ft.type,D=Ft.bytesPerElement,j=it===i.INT||it===i.UNSIGNED_INT||ft.gpuType===ol;if(ft.isInterleavedBufferAttribute){let $=ft.data,ht=$.stride,_t=ft.offset;if($.isInstancedInterleavedBuffer){for(let gt=0;gt<J.locationSize;gt++)p(J.location+gt,$.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let gt=0;gt<J.locationSize;gt++)m(J.location+gt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let gt=0;gt<J.locationSize;gt++)v(J.location+gt,bt/J.locationSize,it,mt,ht*D,(_t+bt/J.locationSize*gt)*D,j)}else{if(ft.isInstancedBufferAttribute){for(let $=0;$<J.locationSize;$++)p(J.location+$,ft.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let $=0;$<J.locationSize;$++)m(J.location+$);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let $=0;$<J.locationSize;$++)v(J.location+$,bt/J.locationSize,it,mt,bt*D,bt/J.locationSize*$*D,j)}}else if(W!==void 0){let mt=W[at];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(J.location,mt);break;case 3:i.vertexAttrib3fv(J.location,mt);break;case 4:i.vertexAttrib4fv(J.location,mt);break;default:i.vertexAttrib1fv(J.location,mt)}}}}M()}function C(){P();for(let _ in n){let I=n[_];for(let G in I){let F=I[G];for(let X in F)h(F[X].object),delete F[X];delete I[G]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;let I=n[_.id];for(let G in I){let F=I[G];for(let X in F)h(F[X].object),delete F[X];delete I[G]}delete n[_.id]}function w(_){for(let I in n){let G=n[I];if(G[_.id]===void 0)continue;let F=G[_.id];for(let X in F)h(F[X].object),delete F[X];delete G[_.id]}}function P(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function w0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function T0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==xn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let P=w===er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Hn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Sn&&!P)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function A0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Fn,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,v=M*4,y=p.clippingState||null;c.value=y,y=h(g,d,v,f);for(let C=0;C!==v;++C)y[C]=e[C];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==x;++v,y+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function R0(i){let t=new WeakMap;function e(o,a){return a===Ga?o.mapping=os:a===Va&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ga||a===Va)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new bc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var so=class extends no{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ts=4,bh=[.125,.215,.35,.446,.526,.582],bi=20,ba=new so,Eh=new kt,Ea=null,Sa=0,wa=0,Ta=!1,vi=(1+Math.sqrt(5))/2,ji=1/vi,Sh=[new U(-vi,ji,0),new U(vi,ji,0),new U(-ji,0,vi),new U(ji,0,vi),new U(0,vi,-ji),new U(0,vi,ji),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Ai=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ea=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,Sa,wa),this._renderer.xr.enabled=Ta,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:er,format:xn,colorSpace:_s,depthBuffer:!1},s=wh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C0(r)),this._blurMaterial=P0(r,t,e)}return s}_compileMaterial(t){let e=new z(this._lodPlanes[0],t);this._renderer.compile(e,ba)}_sceneToCubeUV(t,e,n,s){let a=new Le(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Eh),h.toneMapping=si,h.autoClear=!1;let f=new Re({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new z(new Ct,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Eh),x=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;Ir(s,M*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===os||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ir(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sh[(s-r-1)%Sh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new z(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*bi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);let p=[],M=0;for(let w=0;w<bi;++w){let P=w/x,b=Math.exp(-P*P/2);p.push(b),w===0?M+=b:w<m&&(M+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let y=this._sizeLods[s],C=3*y*(s>v-ts?s-v+ts:0),T=4*(this._cubeSize-y);Ir(e,C,T,3*y,2*y),c.setRenderTarget(e),c.render(u,ba)}};function C0(i){let t=[],e=[],n=[],s=i,r=i-ts+1+bh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ts?c=bh[o-i+ts-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){let w=T%3*2/3-1,P=T>2?0:-1,b=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];M.set(b,x*g*T),v.set(d,m*g*T);let _=[T,T,T,T,T,T];y.set(_,p*g*T)}let C=new ye;C.setAttribute("position",new Ae(M,x)),C.setAttribute("uv",new Ae(v,m)),C.setAttribute("faceIndex",new Ae(y,p)),t.push(C),s>ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wh(i,t,e){let n=new zn(i,t,e);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function P0(i,t,e){let n=new Float32Array(bi),s=new U(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Th(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Ah(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function pl(){return`

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
	`}function I0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ga||c===Va,h=c===os||c===as;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ai(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ai(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function L0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function D0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let M=f.array;x=f.version;for(let v=0,y=M.length;v<y;v+=3){let C=M[v+0],T=M[v+1],w=M[v+2];d.push(C,T,T,w,w,C)}}else if(g!==void 0){let M=g.array;x=g.version;for(let v=0,y=M.length/3-1;v<y;v+=3){let C=v+0,T=v+1,w=v+2;d.push(C,T,T,w,w,C)}}else return;let m=new(pu(d)?eo:to)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function U0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*x[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function N0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function O0(i,t,e){let n=new WeakMap,s=new ue;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*C*4*u),w=new Kr(T,y,C,u);w.type=Sn,w.needsUpdate=!0;let P=v*4;for(let _=0;_<u;_++){let I=m[_],G=p[_],F=M[_],X=y*C*4*_;for(let tt=0;tt<I.count;tt++){let W=tt*P;f===!0&&(s.fromBufferAttribute(I,tt),T[X+W+0]=s.x,T[X+W+1]=s.y,T[X+W+2]=s.z,T[X+W+3]=0),g===!0&&(s.fromBufferAttribute(G,tt),T[X+W+4]=s.x,T[X+W+5]=s.y,T[X+W+6]=s.z,T[X+W+7]=0),x===!0&&(s.fromBufferAttribute(F,tt),T[X+W+8]=s.x,T[X+W+9]=s.y,T[X+W+10]=s.z,T[X+W+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new vt(y,C)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function F0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ro=class extends Ze{constructor(t,e,n,s,r,o,a,c,l,h=ns){if(h!==ns&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Ti),n===void 0&&h===ls&&(n=cs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yu=new Ze,Rh=new ro(1,1),vu=new Kr,_u=new _c,Mu=new io,Ch=[],Ph=[],Ih=new Float32Array(16),Lh=new Float32Array(9),Dh=new Float32Array(4);function bs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ch[s];if(r===void 0&&(r=new Float32Array(s),Ch[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vo(i,t){let e=Ph[t];e===void 0&&(e=new Int32Array(t),Ph[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function B0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function G0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Dh.set(n),i.uniformMatrix2fv(this.addr,!1,Dh),Ue(e,n)}}function V0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Lh.set(n),i.uniformMatrix3fv(this.addr,!1,Lh),Ue(e,n)}}function W0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Ih.set(n),i.uniformMatrix4fv(this.addr,!1,Ih),Ue(e,n)}}function X0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function $0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Q0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rh.compareFunction=fu,r=Rh):r=yu,e.setTexture2D(t||r,s)}function tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_u,s)}function eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mu,s)}function ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vu,s)}function ig(i){switch(i){case 5126:return B0;case 35664:return k0;case 35665:return H0;case 35666:return z0;case 35674:return G0;case 35675:return V0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return Z0;case 5125:return $0;case 36294:return J0;case 36295:return K0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return ng}}function sg(i,t){i.uniform1fv(this.addr,t)}function rg(i,t){let e=bs(t,this.size,2);i.uniform2fv(this.addr,e)}function og(i,t){let e=bs(t,this.size,3);i.uniform3fv(this.addr,e)}function ag(i,t){let e=bs(t,this.size,4);i.uniform4fv(this.addr,e)}function cg(i,t){let e=bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function lg(i,t){let e=bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hg(i,t){let e=bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ug(i,t){i.uniform1iv(this.addr,t)}function dg(i,t){i.uniform2iv(this.addr,t)}function fg(i,t){i.uniform3iv(this.addr,t)}function pg(i,t){i.uniform4iv(this.addr,t)}function mg(i,t){i.uniform1uiv(this.addr,t)}function gg(i,t){i.uniform2uiv(this.addr,t)}function xg(i,t){i.uniform3uiv(this.addr,t)}function yg(i,t){i.uniform4uiv(this.addr,t)}function vg(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yu,r[o])}function _g(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_u,r[o])}function Mg(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mu,r[o])}function bg(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vu,r[o])}function Eg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return og;case 35666:return ag;case 35674:return cg;case 35675:return lg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return bg}}var Ec=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ig(e.type)}},Sc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Eg(e.type)}},wc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Aa=/(\w+)(\])?(\[|\.)?/g;function Uh(i,t){i.seq.push(t),i.map[t.id]=t}function Sg(i,t,e){let n=i.name,s=n.length;for(Aa.lastIndex=0;;){let r=Aa.exec(n),o=Aa.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Uh(e,l===void 0?new Ec(a,i,t):new Sc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new wc(a),Uh(e,u)),e=u}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Sg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Nh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var wg=37297,Tg=0;function Ag(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Oh=new Yt;function Rg(i){ee._getMatrix(Oh,ee.workingColorSpace,i);let t=`mat3( ${Oh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case yo:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ag(i.getShaderSource(t),o)}else return s}function Cg(i,t){let e=Rg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pg(i,t){let e;switch(t){case ef:e="Linear";break;case nf:e="Reinhard";break;case sf:e="Cineon";break;case rl:e="ACESFilmic";break;case of:e="AgX";break;case af:e="Neutral";break;case rf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Lr=new U;function Ig(){ee.getLuminanceCoefficients(Lr);let i=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function Dg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ug(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hs(i){return i!==""}function Bh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(i){return i.replace(Ng,Fg)}var Og=new Map;function Fg(i,t){let e=$t[t];if(e===void 0){let n=Og.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tc(e)}var Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(i){return i.replace(Bg,kg)}function kg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Hg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qs?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===tr?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function zg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===as&&(t="ENVMAP_MODE_REFRACTION"),t}function Vg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sl:t="ENVMAP_BLENDING_MULTIPLY";break;case Qd:t="ENVMAP_BLENDING_MIX";break;case tf:t="ENVMAP_BLENDING_ADD";break}return t}function Wg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Xg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Hg(e),l=zg(e),h=Gg(e),u=Vg(e),d=Wg(e),f=Lg(e),g=Dg(r),x=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),p.length>0&&(p+=`
`)):(m=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),p=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?$t.tonemapping_pars_fragment:"",e.toneMapping!==si?Pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Cg("linearToOutputTexel",e.outputColorSpace),Ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),o=Tc(o),o=Bh(o,e),o=kh(o,e),a=Tc(a),a=Bh(a,e),a=kh(a,e),o=Hh(o),a=Hh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=M+m+o,y=M+p+a,C=Nh(s,s.VERTEX_SHADER,v),T=Nh(s,s.FRAGMENT_SHADER,y);s.attachShader(x,C),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(I){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(C).trim(),X=s.getShaderInfoLog(T).trim(),tt=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,T);else{let at=Fh(s,C,"vertex"),J=Fh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+at+`
`+J)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(F===""||X==="")&&(W=!1);W&&(I.diagnostics={runnable:tt,programLog:G,vertexShader:{log:F,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(C),s.deleteShader(T),P=new ss(s,x),b=Ug(s,x)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,wg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var qg=0,Ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Rc(t),e.set(t,n)),n}},Rc=class{constructor(t){this.id=qg++,this.code=t,this.usedTimes=0}};function Yg(i,t,e,n,s,r,o){let a=new Qr,c=new Ac,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,_,I,G,F){let X=G.fog,tt=F.geometry,W=b.isMeshStandardMaterial?G.environment:null,at=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),J=at&&at.mapping===xo?at.image.height:null,ft=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let mt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,bt=mt!==void 0?mt.length:0,Ft=0;tt.morphAttributes.position!==void 0&&(Ft=1),tt.morphAttributes.normal!==void 0&&(Ft=2),tt.morphAttributes.color!==void 0&&(Ft=3);let jt,it,D,j;if(ft){let ce=bn[ft];jt=ce.vertexShader,it=ce.fragmentShader}else jt=b.vertexShader,it=b.fragmentShader,c.update(b),D=c.getVertexShaderID(b),j=c.getFragmentShaderID(b);let $=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),_t=F.isInstancedMesh===!0,gt=F.isBatchedMesh===!0,xt=!!b.map,q=!!b.matcap,et=!!at,R=!!b.aoMap,ut=!!b.lightMap,st=!!b.bumpMap,yt=!!b.normalMap,dt=!!b.displacementMap,Ht=!!b.emissiveMap,St=!!b.metalnessMap,A=!!b.roughnessMap,E=b.anisotropy>0,L=b.clearcoat>0,N=b.dispersion>0,H=b.iridescence>0,V=b.sheen>0,rt=b.transmission>0,Q=E&&!!b.anisotropyMap,lt=L&&!!b.clearcoatMap,Pt=L&&!!b.clearcoatNormalMap,ct=L&&!!b.clearcoatRoughnessMap,Rt=H&&!!b.iridescenceMap,zt=H&&!!b.iridescenceThicknessMap,Gt=V&&!!b.sheenColorMap,It=V&&!!b.sheenRoughnessMap,te=!!b.specularMap,Zt=!!b.specularColorMap,fe=!!b.specularIntensityMap,O=rt&&!!b.transmissionMap,Et=rt&&!!b.thicknessMap,nt=!!b.gradientMap,ot=!!b.alphaMap,At=b.alphaTest>0,wt=!!b.alphaHash,Xt=!!b.extensions,we=si;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(we=i.toneMapping);let Be={shaderID:ft,shaderType:b.type,shaderName:b.name,vertexShader:jt,fragmentShader:it,defines:b.defines,customVertexShaderID:D,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:gt,batchingColor:gt&&F._colorsTexture!==null,instancing:_t,instancingColor:_t&&F.instanceColor!==null,instancingMorph:_t&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:_s,alphaToCoverage:!!b.alphaToCoverage,map:xt,matcap:q,envMap:et,envMapMode:et&&at.mapping,envMapCubeUVHeight:J,aoMap:R,lightMap:ut,bumpMap:st,normalMap:yt,displacementMap:d&&dt,emissiveMap:Ht,normalMapObjectSpace:yt&&b.normalMapType===uf,normalMapTangentSpace:yt&&b.normalMapType===fl,metalnessMap:St,roughnessMap:A,anisotropy:E,anisotropyMap:Q,clearcoat:L,clearcoatMap:lt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:ct,dispersion:N,iridescence:H,iridescenceMap:Rt,iridescenceThicknessMap:zt,sheen:V,sheenColorMap:Gt,sheenRoughnessMap:It,specularMap:te,specularColorMap:Zt,specularIntensityMap:fe,transmission:rt,transmissionMap:O,thicknessMap:Et,gradientMap:nt,opaque:b.transparent===!1&&b.blending===ii&&b.alphaToCoverage===!1,alphaMap:ot,alphaTest:At,alphaHash:wt,combine:b.combine,mapUv:xt&&x(b.map.channel),aoMapUv:R&&x(b.aoMap.channel),lightMapUv:ut&&x(b.lightMap.channel),bumpMapUv:st&&x(b.bumpMap.channel),normalMapUv:yt&&x(b.normalMap.channel),displacementMapUv:dt&&x(b.displacementMap.channel),emissiveMapUv:Ht&&x(b.emissiveMap.channel),metalnessMapUv:St&&x(b.metalnessMap.channel),roughnessMapUv:A&&x(b.roughnessMap.channel),anisotropyMapUv:Q&&x(b.anisotropyMap.channel),clearcoatMapUv:lt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(b.sheenRoughnessMap.channel),specularMapUv:te&&x(b.specularMap.channel),specularColorMapUv:Zt&&x(b.specularColorMap.channel),specularIntensityMapUv:fe&&x(b.specularIntensityMap.channel),transmissionMapUv:O&&x(b.transmissionMap.channel),thicknessMapUv:Et&&x(b.thicknessMap.channel),alphaMapUv:ot&&x(b.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(yt||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!tt.attributes.uv&&(xt||ot),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ht,skinning:F.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ft,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:xt&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===he,decodeVideoTextureEmissive:Ht&&b.emissiveMap.isVideoTexture===!0&&ee.getTransfer(b.emissiveMap.colorSpace)===he,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===le,flipSided:b.side===Te,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Xt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&b.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function p(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)_.push(I),_.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(M(_,b),v(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function M(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function v(b,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let _=g[b.type],I;if(_){let G=bn[_];I=Ff.clone(G.uniforms)}else I=b.uniforms;return I}function C(b,_){let I;for(let G=0,F=h.length;G<F;G++){let X=h[G];if(X.cacheKey===_){I=X,++I.usedTimes;break}}return I===void 0&&(I=new Xg(i,_,b,r),h.push(I)),I}function T(b){if(--b.usedTimes===0){let _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function w(b){c.remove(b)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:P}}function Zg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||$g),n.length>1&&n.sort(d||Gh),s.length>1&&s.sort(d||Gh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Jg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Vh,i.set(n,[o])):s>=r.length?(o=new Vh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Kg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new kt};break;case"SpotLight":e={position:new U,direction:new U,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function jg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Qg=0;function tx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ex(i){let t=new Kg,e=jg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new ie,o=new ie;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,v=0,y=0,C=0,T=0,w=0;l.sort(tx);for(let b=0,_=l.length;b<_;b++){let I=l[b],G=I.color,F=I.intensity,X=I.distance,tt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=G.r*F,u+=G.g*F,d+=G.b*F;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],F);w++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let at=I.shadow,J=e.get(I);J.shadowIntensity=at.intensity,J.shadowBias=at.bias,J.shadowNormalBias=at.normalBias,J.shadowRadius=at.radius,J.shadowMapSize=at.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=tt,n.directionalShadowMatrix[f]=I.shadow.matrix,M++}n.directional[f]=W,f++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(G).multiplyScalar(F),W.distance=X,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[x]=W;let at=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,at.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[x]=at.matrix,I.castShadow){let J=e.get(I);J.shadowIntensity=at.intensity,J.shadowBias=at.bias,J.shadowNormalBias=at.normalBias,J.shadowRadius=at.radius,J.shadowMapSize=at.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=tt,y++}x++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(G).multiplyScalar(F),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let at=I.shadow,J=e.get(I);J.shadowIntensity=at.intensity,J.shadowBias=at.bias,J.shadowNormalBias=at.normalBias,J.shadowRadius=at.radius,J.shadowMapSize=at.mapSize,J.shadowCameraNear=at.camera.near,J.shadowCameraFar=at.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(F),W.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==v||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=v,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=w,n.version=Qg++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let v=l[p];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Wh(i){let t=new ex(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function nx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Wh(i),t.set(s,[a])):r>=o.length?(a=new Wh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Cc=class extends Vn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pc=class extends Vn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sx=`uniform sampler2D shadow_pass;
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
}`;function rx(i,t,e){let n=new Xs,s=new vt,r=new vt,o=new ue,a=new Cc({depthPacking:hf}),c=new Pc,l={},h=e.maxTextureSize,u={[wn]:Te,[Te]:wn,[le]:le},d=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:ix,fragmentShader:sx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ye;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new z(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let p=this.type;this.render=function(T,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=i.getRenderTarget(),_=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ni),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let F=p!==On&&this.type===On,X=p===On&&this.type!==On;for(let tt=0,W=T.length;tt<W;tt++){let at=T[tt],J=at.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ft=J.getFrameExtents();if(s.multiply(ft),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,J.mapSize.y=r.y)),J.map===null||F===!0||X===!0){let bt=this.type!==On?{minFilter:tn,magFilter:tn}:{};J.map!==null&&J.map.dispose(),J.map=new zn(s.x,s.y,bt),J.map.texture.name=at.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let mt=J.getViewportCount();for(let bt=0;bt<mt;bt++){let Ft=J.getViewport(bt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),G.viewport(o),J.updateMatrices(at,bt),n=J.getFrustum(),y(w,P,J.camera,at,this.type)}J.isPointLightShadow!==!0&&this.type===On&&M(J,P),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,_,I)};function M(T,w){let P=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new zn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,P,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,P,f,x,null)}function v(T,w,P,b){let _=null,I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)_=I;else if(_=P.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let G=_.uuid,F=w.uuid,X=l[G];X===void 0&&(X={},l[G]=X);let tt=X[F];tt===void 0&&(tt=_.clone(),X[F]=tt,w.addEventListener("dispose",C)),_=tt}if(_.visible=w.visible,_.wireframe=w.wireframe,b===On?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:u[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let G=i.properties.get(_);G.light=P}return _}function y(T,w,P,b,_){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===On)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let F=t.update(T),X=T.material;if(Array.isArray(X)){let tt=F.groups;for(let W=0,at=tt.length;W<at;W++){let J=tt[W],ft=X[J.materialIndex];if(ft&&ft.visible){let mt=v(T,ft,b,_);T.onBeforeShadow(i,T,w,P,F,mt,J),i.renderBufferDirect(P,null,F,mt,T,J),T.onAfterShadow(i,T,w,P,F,mt,J)}}}else if(X.visible){let tt=v(T,X,b,_);T.onBeforeShadow(i,T,w,P,F,tt,null),i.renderBufferDirect(P,null,F,tt,T,null),T.onAfterShadow(i,T,w,P,F,tt,null)}}let G=T.children;for(let F=0,X=G.length;F<X;F++)y(G[F],w,P,b,_)}function C(T){T.target.removeEventListener("dispose",C);for(let P in l){let b=l[P],_=T.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var ox={[Na]:Oa,[Fa]:Ha,[Ba]:za,[rs]:ka,[Oa]:Na,[Ha]:Fa,[za]:Ba,[ka]:rs};function ax(i,t){function e(){let O=!1,Et=new ue,nt=null,ot=new ue(0,0,0,0);return{setMask:function(At){nt!==At&&!O&&(i.colorMask(At,At,At,At),nt=At)},setLocked:function(At){O=At},setClear:function(At,wt,Xt,we,Be){Be===!0&&(At*=we,wt*=we,Xt*=we),Et.set(At,wt,Xt,we),ot.equals(Et)===!1&&(i.clearColor(At,wt,Xt,we),ot.copy(Et))},reset:function(){O=!1,nt=null,ot.set(-1,0,0,0)}}}function n(){let O=!1,Et=!1,nt=null,ot=null,At=null;return{setReversed:function(wt){if(Et!==wt){let Xt=t.get("EXT_clip_control");Et?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);let we=At;At=null,this.setClear(we)}Et=wt},getReversed:function(){return Et},setTest:function(wt){wt?$(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(wt){nt!==wt&&!O&&(i.depthMask(wt),nt=wt)},setFunc:function(wt){if(Et&&(wt=ox[wt]),ot!==wt){switch(wt){case Na:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case Fa:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=wt}},setLocked:function(wt){O=wt},setClear:function(wt){At!==wt&&(Et&&(wt=1-wt),i.clearDepth(wt),At=wt)},reset:function(){O=!1,nt=null,ot=null,At=null,Et=!1}}}function s(){let O=!1,Et=null,nt=null,ot=null,At=null,wt=null,Xt=null,we=null,Be=null;return{setTest:function(ce){O||(ce?$(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(ce){Et!==ce&&!O&&(i.stencilMask(ce),Et=ce)},setFunc:function(ce,dn,Cn){(nt!==ce||ot!==dn||At!==Cn)&&(i.stencilFunc(ce,dn,Cn),nt=ce,ot=dn,At=Cn)},setOp:function(ce,dn,Cn){(wt!==ce||Xt!==dn||we!==Cn)&&(i.stencilOp(ce,dn,Cn),wt=ce,Xt=dn,we=Cn)},setLocked:function(ce){O=ce},setClear:function(ce){Be!==ce&&(i.clearStencil(ce),Be=ce)},reset:function(){O=!1,Et=null,nt=null,ot=null,At=null,wt=null,Xt=null,we=null,Be=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,M=null,v=null,y=null,C=null,T=null,w=new kt(0,0,0),P=0,b=!1,_=null,I=null,G=null,F=null,X=null,tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,at=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=at>=1):J.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=at>=2);let ft=null,mt={},bt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),jt=new ue().fromArray(bt),it=new ue().fromArray(Ft);function D(O,Et,nt,ot){let At=new Uint8Array(4),wt=i.createTexture();i.bindTexture(O,wt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<nt;Xt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(Et+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return wt}let j={};j[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(rs),st(!1),yt(Yl),$(i.CULL_FACE),R(ni);function $(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ht(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function _t(O,Et){return u[O]!==Et?(i.bindFramebuffer(O,Et),u[O]=Et,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Et),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function gt(O,Et){let nt=f,ot=!1;if(O){nt=d.get(Et),nt===void 0&&(nt=[],d.set(Et,nt));let At=O.textures;if(nt.length!==At.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Xt=At.length;wt<Xt;wt++)nt[wt]=i.COLOR_ATTACHMENT0+wt;nt.length=At.length,ot=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,ot=!0);ot&&i.drawBuffers(nt)}function xt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let q={[_i]:i.FUNC_ADD,[Od]:i.FUNC_SUBTRACT,[Fd]:i.FUNC_REVERSE_SUBTRACT};q[Bd]=i.MIN,q[kd]=i.MAX;let et={[Hd]:i.ZERO,[zd]:i.ONE,[Gd]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[Zd]:i.SRC_ALPHA_SATURATE,[qd]:i.DST_COLOR,[Wd]:i.DST_ALPHA,[Vd]:i.ONE_MINUS_SRC_COLOR,[Ua]:i.ONE_MINUS_SRC_ALPHA,[Yd]:i.ONE_MINUS_DST_COLOR,[Xd]:i.ONE_MINUS_DST_ALPHA,[$d]:i.CONSTANT_COLOR,[Jd]:i.ONE_MINUS_CONSTANT_COLOR,[Kd]:i.CONSTANT_ALPHA,[jd]:i.ONE_MINUS_CONSTANT_ALPHA};function R(O,Et,nt,ot,At,wt,Xt,we,Be,ce){if(O===ni){x===!0&&(ht(i.BLEND),x=!1);return}if(x===!1&&($(i.BLEND),x=!0),O!==Nd){if(O!==m||ce!==b){if((p!==_i||y!==_i)&&(i.blendEquation(i.FUNC_ADD),p=_i,y=_i),ce)switch(O){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xr:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,v=null,C=null,T=null,w.set(0,0,0),P=0,m=O,b=ce}return}At=At||Et,wt=wt||nt,Xt=Xt||ot,(Et!==p||At!==y)&&(i.blendEquationSeparate(q[Et],q[At]),p=Et,y=At),(nt!==M||ot!==v||wt!==C||Xt!==T)&&(i.blendFuncSeparate(et[nt],et[ot],et[wt],et[Xt]),M=nt,v=ot,C=wt,T=Xt),(we.equals(w)===!1||Be!==P)&&(i.blendColor(we.r,we.g,we.b,Be),w.copy(we),P=Be),m=O,b=!1}function ut(O,Et){O.side===le?ht(i.CULL_FACE):$(i.CULL_FACE);let nt=O.side===Te;Et&&(nt=!nt),st(nt),O.blending===ii&&O.transparent===!1?R(ni):R(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let ot=O.stencilWrite;a.setTest(ot),ot&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ht(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(O){_!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),_=O)}function yt(O){O!==Dd?($(i.CULL_FACE),O!==I&&(O===Yl?i.cullFace(i.BACK):O===Ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),I=O}function dt(O){O!==G&&(W&&i.lineWidth(O),G=O)}function Ht(O,Et,nt){O?($(i.POLYGON_OFFSET_FILL),(F!==Et||X!==nt)&&(i.polygonOffset(Et,nt),F=Et,X=nt)):ht(i.POLYGON_OFFSET_FILL)}function St(O){O?$(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function A(O){O===void 0&&(O=i.TEXTURE0+tt-1),ft!==O&&(i.activeTexture(O),ft=O)}function E(O,Et,nt){nt===void 0&&(ft===null?nt=i.TEXTURE0+tt-1:nt=ft);let ot=mt[nt];ot===void 0&&(ot={type:void 0,texture:void 0},mt[nt]=ot),(ot.type!==O||ot.texture!==Et)&&(ft!==nt&&(i.activeTexture(nt),ft=nt),i.bindTexture(O,Et||j[O]),ot.type=O,ot.texture=Et)}function L(){let O=mt[ft];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function N(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(O){jt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),jt.copy(O))}function It(O){it.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),it.copy(O))}function te(O,Et){let nt=l.get(Et);nt===void 0&&(nt=new WeakMap,l.set(Et,nt));let ot=nt.get(O);ot===void 0&&(ot=i.getUniformBlockIndex(Et,O.name),nt.set(O,ot))}function Zt(O,Et){let ot=l.get(Et).get(O);c.get(Et)!==ot&&(i.uniformBlockBinding(Et,ot,O.__bindingPointIndex),c.set(Et,ot))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ft=null,mt={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,M=null,v=null,y=null,C=null,T=null,w=new kt(0,0,0),P=0,b=!1,_=null,I=null,G=null,F=null,X=null,jt.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:ht,bindFramebuffer:_t,drawBuffers:gt,useProgram:xt,setBlending:R,setMaterial:ut,setFlipSided:st,setCullFace:yt,setLineWidth:dt,setPolygonOffset:Ht,setScissorTest:St,activeTexture:A,bindTexture:E,unbindTexture:L,compressedTexImage2D:N,compressedTexImage3D:H,texImage2D:Rt,texImage3D:zt,updateUBOMapping:te,uniformBlockBinding:Zt,texStorage2D:Pt,texStorage3D:ct,texSubImage2D:V,texSubImage3D:rt,compressedTexSubImage2D:Q,compressedTexSubImage3D:lt,scissor:Gt,viewport:It,reset:fe}}function Xh(i,t,e,n){let s=cx(n);switch(e){case au:return i*t;case lu:return i*t;case hu:return i*t*2;case ll:return i*t/s.components*s.byteLength;case hl:return i*t/s.components*s.byteLength;case uu:return i*t*2/s.components*s.byteLength;case ul:return i*t*2/s.components*s.byteLength;case cu:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case dl:return i*t*4/s.components*s.byteLength;case Hr:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:case Za:return Math.max(i,16)*Math.max(t,8)/4;case Xa:case Ya:return Math.max(i,8)*Math.max(t,8)/2;case $a:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wr:case dc:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case du:case pc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case mc:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cx(i){switch(i){case Hn:case su:return{byteLength:1,components:1};case Ws:case ru:case er:return{byteLength:2,components:1};case al:case cl:return{byteLength:2,components:4};case Ti:case ol:case Sn:return{byteLength:4,components:1};case ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function lx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return f?new OffscreenCanvas(A,E):$r("canvas")}function x(A,E,L){let N=1,H=St(A);if((H.width>L||H.height>L)&&(N=L/Math.max(H.width,H.height)),N<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let V=Math.floor(N*H.width),rt=Math.floor(N*H.height);u===void 0&&(u=g(V,rt));let Q=E?g(V,rt):u;return Q.width=V,Q.height=rt,Q.getContext("2d").drawImage(A,0,0,V,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+V+"x"+rt+")."),Q}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,E,L,N,H=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let V=E;if(E===i.RED&&(L===i.FLOAT&&(V=i.R32F),L===i.HALF_FLOAT&&(V=i.R16F),L===i.UNSIGNED_BYTE&&(V=i.R8)),E===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(V=i.R8UI),L===i.UNSIGNED_SHORT&&(V=i.R16UI),L===i.UNSIGNED_INT&&(V=i.R32UI),L===i.BYTE&&(V=i.R8I),L===i.SHORT&&(V=i.R16I),L===i.INT&&(V=i.R32I)),E===i.RG&&(L===i.FLOAT&&(V=i.RG32F),L===i.HALF_FLOAT&&(V=i.RG16F),L===i.UNSIGNED_BYTE&&(V=i.RG8)),E===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(V=i.RG8UI),L===i.UNSIGNED_SHORT&&(V=i.RG16UI),L===i.UNSIGNED_INT&&(V=i.RG32UI),L===i.BYTE&&(V=i.RG8I),L===i.SHORT&&(V=i.RG16I),L===i.INT&&(V=i.RG32I)),E===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(V=i.RGB8UI),L===i.UNSIGNED_SHORT&&(V=i.RGB16UI),L===i.UNSIGNED_INT&&(V=i.RGB32UI),L===i.BYTE&&(V=i.RGB8I),L===i.SHORT&&(V=i.RGB16I),L===i.INT&&(V=i.RGB32I)),E===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),L===i.UNSIGNED_INT&&(V=i.RGBA32UI),L===i.BYTE&&(V=i.RGBA8I),L===i.SHORT&&(V=i.RGBA16I),L===i.INT&&(V=i.RGBA32I)),E===i.RGB&&L===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),E===i.RGBA){let rt=H?yo:ee.getTransfer(N);L===i.FLOAT&&(V=i.RGBA32F),L===i.HALF_FLOAT&&(V=i.RGBA16F),L===i.UNSIGNED_BYTE&&(V=rt===he?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function y(A,E){let L;return A?E===null||E===Ti||E===cs?L=i.DEPTH24_STENCIL8:E===Sn?L=i.DEPTH32F_STENCIL8:E===Ws&&(L=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ti||E===cs?L=i.DEPTH_COMPONENT24:E===Sn?L=i.DEPTH_COMPONENT32F:E===Ws&&(L=i.DEPTH_COMPONENT16),L}function C(A,E){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==tn&&A.minFilter!==En?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function T(A){let E=A.target;E.removeEventListener("dispose",T),P(E),E.isVideoTexture&&h.delete(E)}function w(A){let E=A.target;E.removeEventListener("dispose",w),_(E)}function P(A){let E=n.get(A);if(E.__webglInit===void 0)return;let L=A.source,N=d.get(L);if(N){let H=N[E.__cacheKey];H.usedTimes--,H.usedTimes===0&&b(A),Object.keys(N).length===0&&d.delete(L)}n.remove(A)}function b(A){let E=n.get(A);i.deleteTexture(E.__webglTexture);let L=A.source,N=d.get(L);delete N[E.__cacheKey],o.memory.textures--}function _(A){let E=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(E.__webglFramebuffer[N]))for(let H=0;H<E.__webglFramebuffer[N].length;H++)i.deleteFramebuffer(E.__webglFramebuffer[N][H]);else i.deleteFramebuffer(E.__webglFramebuffer[N]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[N])}else{if(Array.isArray(E.__webglFramebuffer))for(let N=0;N<E.__webglFramebuffer.length;N++)i.deleteFramebuffer(E.__webglFramebuffer[N]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let N=0;N<E.__webglColorRenderbuffer.length;N++)E.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[N]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let L=A.textures;for(let N=0,H=L.length;N<H;N++){let V=n.get(L[N]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(L[N])}n.remove(A)}let I=0;function G(){I=0}function F(){let A=I;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function X(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function tt(A,E){let L=n.get(A);if(A.isVideoTexture&&dt(A),A.isRenderTargetTexture===!1&&A.version>0&&L.__version!==A.version){let N=A.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(L,A,E);return}}e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+E)}function W(A,E){let L=n.get(A);if(A.version>0&&L.__version!==A.version){it(L,A,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+E)}function at(A,E){let L=n.get(A);if(A.version>0&&L.__version!==A.version){it(L,A,E);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+E)}function J(A,E){let L=n.get(A);if(A.version>0&&L.__version!==A.version){D(L,A,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+E)}let ft={[wi]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},mt={[tn]:i.NEAREST,[cf]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[jo]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},bt={[df]:i.NEVER,[yf]:i.ALWAYS,[ff]:i.LESS,[fu]:i.LEQUAL,[pf]:i.EQUAL,[xf]:i.GEQUAL,[mf]:i.GREATER,[gf]:i.NOTEQUAL};function Ft(A,E){if(E.type===Sn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===En||E.magFilter===jo||E.magFilter===dr||E.magFilter===Si||E.minFilter===En||E.minFilter===jo||E.minFilter===dr||E.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ft[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ft[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ft[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,mt[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,mt[E.minFilter]),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,bt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===tn||E.minFilter!==dr&&E.minFilter!==Si||E.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function jt(A,E){let L=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",T));let N=E.source,H=d.get(N);H===void 0&&(H={},d.set(N,H));let V=X(E);if(V!==A.__cacheKey){H[V]===void 0&&(H[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),H[V].usedTimes++;let rt=H[A.__cacheKey];rt!==void 0&&(H[A.__cacheKey].usedTimes--,rt.usedTimes===0&&b(E)),A.__cacheKey=V,A.__webglTexture=H[V].texture}return L}function it(A,E,L){let N=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(N=i.TEXTURE_3D);let H=jt(A,E),V=E.source;e.bindTexture(N,A.__webglTexture,i.TEXTURE0+L);let rt=n.get(V);if(V.version!==rt.__version||H===!0){e.activeTexture(i.TEXTURE0+L);let Q=ee.getPrimaries(ee.workingColorSpace),lt=E.colorSpace===ei?null:ee.getPrimaries(E.colorSpace),Pt=E.colorSpace===ei||Q===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let ct=x(E.image,!1,s.maxTextureSize);ct=Ht(E,ct);let Rt=r.convert(E.format,E.colorSpace),zt=r.convert(E.type),Gt=v(E.internalFormat,Rt,zt,E.colorSpace,E.isVideoTexture);Ft(N,E);let It,te=E.mipmaps,Zt=E.isVideoTexture!==!0,fe=rt.__version===void 0||H===!0,O=V.dataReady,Et=C(E,ct);if(E.isDepthTexture)Gt=y(E.format===ls,E.type),fe&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Gt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,Rt,zt,null));else if(E.isDataTexture)if(te.length>0){Zt&&fe&&e.texStorage2D(i.TEXTURE_2D,Et,Gt,te[0].width,te[0].height);for(let nt=0,ot=te.length;nt<ot;nt++)It=te[nt],Zt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,It.width,It.height,Rt,zt,It.data):e.texImage2D(i.TEXTURE_2D,nt,Gt,It.width,It.height,0,Rt,zt,It.data);E.generateMipmaps=!1}else Zt?(fe&&e.texStorage2D(i.TEXTURE_2D,Et,Gt,ct.width,ct.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,Rt,zt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,Rt,zt,ct.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Zt&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Gt,te[0].width,te[0].height,ct.depth);for(let nt=0,ot=te.length;nt<ot;nt++)if(It=te[nt],E.format!==xn)if(Rt!==null)if(Zt){if(O)if(E.layerUpdates.size>0){let At=Xh(It.width,It.height,E.format,E.type);for(let wt of E.layerUpdates){let Xt=It.data.subarray(wt*At/It.data.BYTES_PER_ELEMENT,(wt+1)*At/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,wt,It.width,It.height,1,Rt,Xt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,It.width,It.height,ct.depth,Rt,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Gt,It.width,It.height,ct.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,It.width,It.height,ct.depth,Rt,zt,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Gt,It.width,It.height,ct.depth,0,Rt,zt,It.data)}else{Zt&&fe&&e.texStorage2D(i.TEXTURE_2D,Et,Gt,te[0].width,te[0].height);for(let nt=0,ot=te.length;nt<ot;nt++)It=te[nt],E.format!==xn?Rt!==null?Zt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,It.width,It.height,Rt,It.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Gt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,It.width,It.height,Rt,zt,It.data):e.texImage2D(i.TEXTURE_2D,nt,Gt,It.width,It.height,0,Rt,zt,It.data)}else if(E.isDataArrayTexture)if(Zt){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Gt,ct.width,ct.height,ct.depth),O)if(E.layerUpdates.size>0){let nt=Xh(ct.width,ct.height,E.format,E.type);for(let ot of E.layerUpdates){let At=ct.data.subarray(ot*nt/ct.data.BYTES_PER_ELEMENT,(ot+1)*nt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,ct.width,ct.height,1,Rt,zt,At)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Rt,zt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,ct.width,ct.height,ct.depth,0,Rt,zt,ct.data);else if(E.isData3DTexture)Zt?(fe&&e.texStorage3D(i.TEXTURE_3D,Et,Gt,ct.width,ct.height,ct.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Rt,zt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,ct.width,ct.height,ct.depth,0,Rt,zt,ct.data);else if(E.isFramebufferTexture){if(fe)if(Zt)e.texStorage2D(i.TEXTURE_2D,Et,Gt,ct.width,ct.height);else{let nt=ct.width,ot=ct.height;for(let At=0;At<Et;At++)e.texImage2D(i.TEXTURE_2D,At,Gt,nt,ot,0,Rt,zt,null),nt>>=1,ot>>=1}}else if(te.length>0){if(Zt&&fe){let nt=St(te[0]);e.texStorage2D(i.TEXTURE_2D,Et,Gt,nt.width,nt.height)}for(let nt=0,ot=te.length;nt<ot;nt++)It=te[nt],Zt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Rt,zt,It):e.texImage2D(i.TEXTURE_2D,nt,Gt,Rt,zt,It);E.generateMipmaps=!1}else if(Zt){if(fe){let nt=St(ct);e.texStorage2D(i.TEXTURE_2D,Et,Gt,nt.width,nt.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,zt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Rt,zt,ct);m(E)&&p(N),rt.__version=V.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function D(A,E,L){if(E.image.length!==6)return;let N=jt(A,E),H=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+L);let V=n.get(H);if(H.version!==V.__version||N===!0){e.activeTexture(i.TEXTURE0+L);let rt=ee.getPrimaries(ee.workingColorSpace),Q=E.colorSpace===ei?null:ee.getPrimaries(E.colorSpace),lt=E.colorSpace===ei||rt===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Pt=E.isCompressedTexture||E.image[0].isCompressedTexture,ct=E.image[0]&&E.image[0].isDataTexture,Rt=[];for(let ot=0;ot<6;ot++)!Pt&&!ct?Rt[ot]=x(E.image[ot],!0,s.maxCubemapSize):Rt[ot]=ct?E.image[ot].image:E.image[ot],Rt[ot]=Ht(E,Rt[ot]);let zt=Rt[0],Gt=r.convert(E.format,E.colorSpace),It=r.convert(E.type),te=v(E.internalFormat,Gt,It,E.colorSpace),Zt=E.isVideoTexture!==!0,fe=V.__version===void 0||N===!0,O=H.dataReady,Et=C(E,zt);Ft(i.TEXTURE_CUBE_MAP,E);let nt;if(Pt){Zt&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,te,zt.width,zt.height);for(let ot=0;ot<6;ot++){nt=Rt[ot].mipmaps;for(let At=0;At<nt.length;At++){let wt=nt[At];E.format!==xn?Gt!==null?Zt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,0,0,wt.width,wt.height,Gt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,te,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,0,0,wt.width,wt.height,Gt,It,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,te,wt.width,wt.height,0,Gt,It,wt.data)}}}else{if(nt=E.mipmaps,Zt&&fe){nt.length>0&&Et++;let ot=St(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,te,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ct){Zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Rt[ot].width,Rt[ot].height,Gt,It,Rt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,te,Rt[ot].width,Rt[ot].height,0,Gt,It,Rt[ot].data);for(let At=0;At<nt.length;At++){let Xt=nt[At].image[ot].image;Zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,0,0,Xt.width,Xt.height,Gt,It,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,te,Xt.width,Xt.height,0,Gt,It,Xt.data)}}else{Zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Gt,It,Rt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,te,Gt,It,Rt[ot]);for(let At=0;At<nt.length;At++){let wt=nt[At];Zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,0,0,Gt,It,wt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,te,Gt,It,wt.image[ot])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),V.__version=H.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function j(A,E,L,N,H,V){let rt=r.convert(L.format,L.colorSpace),Q=r.convert(L.type),lt=v(L.internalFormat,rt,Q,L.colorSpace),Pt=n.get(E),ct=n.get(L);if(ct.__renderTarget=E,!Pt.__hasExternalTextures){let Rt=Math.max(1,E.width>>V),zt=Math.max(1,E.height>>V);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?e.texImage3D(H,V,lt,Rt,zt,E.depth,0,rt,Q,null):e.texImage2D(H,V,lt,Rt,zt,0,rt,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),yt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,H,ct.__webglTexture,0,st(E)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,H,ct.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $(A,E,L){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer){let N=E.depthTexture,H=N&&N.isDepthTexture?N.type:null,V=y(E.stencilBuffer,H),rt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=st(E);yt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,V,E.width,E.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,V,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,V,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,A)}else{let N=E.textures;for(let H=0;H<N.length;H++){let V=N[H],rt=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),lt=v(V.internalFormat,rt,Q,V.colorSpace),Pt=st(E);L&&yt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,lt,E.width,E.height):yt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,lt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,lt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let N=n.get(E.depthTexture);N.__renderTarget=E,(!N.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),tt(E.depthTexture,0);let H=N.__webglTexture,V=st(E);if(E.depthTexture.format===ns)yt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0);else if(E.depthTexture.format===ls)yt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function _t(A){let E=n.get(A),L=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){let N=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),N){let H=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,N.removeEventListener("dispose",H)};N.addEventListener("dispose",H),E.__depthDisposeCallback=H}E.__boundDepthTexture=N}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");ht(E.__webglFramebuffer,A)}else if(L){E.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[N]),E.__webglDepthbuffer[N]===void 0)E.__webglDepthbuffer[N]=i.createRenderbuffer(),$(E.__webglDepthbuffer[N],A,!1);else{let H=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=E.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,V)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),$(E.__webglDepthbuffer,A,!1);else{let N=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,H)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(A,E,L){let N=n.get(A);E!==void 0&&j(N.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&_t(A)}function xt(A){let E=A.texture,L=n.get(A),N=n.get(E);A.addEventListener("dispose",w);let H=A.textures,V=A.isWebGLCubeRenderTarget===!0,rt=H.length>1;if(rt||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=E.version,o.memory.textures++),V){L.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps&&E.mipmaps.length>0){L.__webglFramebuffer[Q]=[];for(let lt=0;lt<E.mipmaps.length;lt++)L.__webglFramebuffer[Q][lt]=i.createFramebuffer()}else L.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){L.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)L.__webglFramebuffer[Q]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(rt)for(let Q=0,lt=H.length;Q<lt;Q++){let Pt=n.get(H[Q]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&yt(A)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let Q=0;Q<H.length;Q++){let lt=H[Q];L.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[Q]);let Pt=r.convert(lt.format,lt.colorSpace),ct=r.convert(lt.type),Rt=v(lt.internalFormat,Pt,ct,lt.colorSpace,A.isXRRenderTarget===!0),zt=st(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Rt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,L.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),$(L.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps&&E.mipmaps.length>0)for(let lt=0;lt<E.mipmaps.length;lt++)j(L.__webglFramebuffer[Q][lt],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,lt);else j(L.__webglFramebuffer[Q],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let Q=0,lt=H.length;Q<lt;Q++){let Pt=H[Q],ct=n.get(Pt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),Ft(i.TEXTURE_2D,Pt),j(L.__webglFramebuffer,A,Pt,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,0),m(Pt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,N.__webglTexture),Ft(Q,E),E.mipmaps&&E.mipmaps.length>0)for(let lt=0;lt<E.mipmaps.length;lt++)j(L.__webglFramebuffer[lt],A,E,i.COLOR_ATTACHMENT0,Q,lt);else j(L.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,Q,0);m(E)&&p(Q),e.unbindTexture()}A.depthBuffer&&_t(A)}function q(A){let E=A.textures;for(let L=0,N=E.length;L<N;L++){let H=E[L];if(m(H)){let V=M(A),rt=n.get(H).__webglTexture;e.bindTexture(V,rt),p(V),e.unbindTexture()}}}let et=[],R=[];function ut(A){if(A.samples>0){if(yt(A)===!1){let E=A.textures,L=A.width,N=A.height,H=i.COLOR_BUFFER_BIT,V=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(A),Q=E.length>1;if(Q)for(let lt=0;lt<E.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let lt=0;lt<E.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[lt]);let Pt=n.get(E[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,L,N,0,0,L,N,H,i.NEAREST),c===!0&&(et.length=0,R.length=0,et.push(i.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(et.push(V),R.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let lt=0;lt<E.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,rt.__webglColorRenderbuffer[lt]);let Pt=n.get(E[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let E=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function st(A){return Math.min(s.maxSamples,A.samples)}function yt(A){let E=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function dt(A){let E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function Ht(A,E){let L=A.colorSpace,N=A.format,H=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||L!==_s&&L!==ei&&(ee.getTransfer(L)===he?(N!==xn||H!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),E}function St(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=G,this.setTexture2D=tt,this.setTexture2DArray=W,this.setTexture3D=at,this.setTextureCube=J,this.rebindTextures=gt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=j,this.useMultisampledRTT=yt}function hx(i,t){function e(n,s=ei){let r,o=ee.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===su)return i.BYTE;if(n===ru)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===er)return i.HALF_FLOAT;if(n===au)return i.ALPHA;if(n===cu)return i.RGB;if(n===xn)return i.RGBA;if(n===lu)return i.LUMINANCE;if(n===hu)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===uu)return i.RG;if(n===ul)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===Hr||n===zr||n===Gr||n===Vr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===qa||n===Ya||n===Za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Ja||n===Ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Ja)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ka)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===Qa||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wr||n===dc||n===fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wr)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===du||n===pc||n===mc||n===gc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ic=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Kt=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},ux={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ux)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fx=`
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

}`,Lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ge({vertexShader:dx,fragmentShader:fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new z(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends oi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=new Lc,m=e.getContextAttributes(),p=null,M=null,v=[],y=[],C=new vt,T=null,w=new Le;w.viewport=new ue;let P=new Le;P.viewport=new ue;let b=[w,P],_=new Ic,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let D=v[it];return D===void 0&&(D=new zs,v[it]=D),D.getTargetRaySpace()},this.getControllerGrip=function(it){let D=v[it];return D===void 0&&(D=new zs,v[it]=D),D.getGripSpace()},this.getHand=function(it){let D=v[it];return D===void 0&&(D=new zs,v[it]=D),D.getHandSpace()};function F(it){let D=y.indexOf(it.inputSource);if(D===-1)return;let j=v[D];j!==void 0&&(j.update(it.inputSource,it.frame,l||o),j.dispatchEvent({type:it.type,data:it.inputSource}))}function X(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",tt);for(let it=0;it<v.length;it++){let D=y[it];D!==null&&(y[it]=null,v[it].disconnect(D))}I=null,G=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,M=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(it){l=it},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",X),s.addEventListener("inputsourceschange",tt),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let D={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,D),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new zn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let D=null,j=null,$=null;m.depth&&($=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=m.stencil?ls:ns,j=m.stencil?cs:Ti);let ht={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ht),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new zn(d.textureWidth,d.textureHeight,{format:xn,type:Hn,depthTexture:new ro(d.textureWidth,d.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function tt(it){for(let D=0;D<it.removed.length;D++){let j=it.removed[D],$=y.indexOf(j);$>=0&&(y[$]=null,v[$].disconnect(j))}for(let D=0;D<it.added.length;D++){let j=it.added[D],$=y.indexOf(j);if($===-1){for(let _t=0;_t<v.length;_t++)if(_t>=y.length){y.push(j),$=_t;break}else if(y[_t]===null){y[_t]=j,$=_t;break}if($===-1)break}let ht=v[$];ht&&ht.connect(j)}}let W=new U,at=new U;function J(it,D,j){W.setFromMatrixPosition(D.matrixWorld),at.setFromMatrixPosition(j.matrixWorld);let $=W.distanceTo(at),ht=D.projectionMatrix.elements,_t=j.projectionMatrix.elements,gt=ht[14]/(ht[10]-1),xt=ht[14]/(ht[10]+1),q=(ht[9]+1)/ht[5],et=(ht[9]-1)/ht[5],R=(ht[8]-1)/ht[0],ut=(_t[8]+1)/_t[0],st=gt*R,yt=gt*ut,dt=$/(-R+ut),Ht=dt*-R;if(D.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ht),it.translateZ(dt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),ht[10]===-1)it.projectionMatrix.copy(D.projectionMatrix),it.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{let St=gt+dt,A=xt+dt,E=st-Ht,L=yt+($-Ht),N=q*xt/A*St,H=et*xt/A*St;it.projectionMatrix.makePerspective(E,L,N,H,St,A),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function ft(it,D){D===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(D.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let D=it.near,j=it.far;x.texture!==null&&(x.depthNear>0&&(D=x.depthNear),x.depthFar>0&&(j=x.depthFar)),_.near=P.near=w.near=D,_.far=P.far=w.far=j,(I!==_.near||G!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,G=_.far),w.layers.mask=it.layers.mask|2,P.layers.mask=it.layers.mask|4,_.layers.mask=w.layers.mask|P.layers.mask;let $=it.parent,ht=_.cameras;ft(_,$);for(let _t=0;_t<ht.length;_t++)ft(ht[_t],$);ht.length===2?J(_,w,P):_.projectionMatrix.copy(w.projectionMatrix),mt(it,_,$)};function mt(it,D,j){j===null?it.matrix.copy(D.matrixWorld):(it.matrix.copy(j.matrixWorld),it.matrix.invert(),it.matrix.multiply(D.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(D.projectionMatrix),it.projectionMatrixInverse.copy(D.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Zr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(it){c=it,d!==null&&(d.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let bt=null;function Ft(it,D){if(h=D.getViewerPose(l||o),g=D,h!==null){let j=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let $=!1;j.length!==_.cameras.length&&(_.cameras.length=0,$=!0);for(let _t=0;_t<j.length;_t++){let gt=j[_t],xt=null;if(f!==null)xt=f.getViewport(gt);else{let et=u.getViewSubImage(d,gt);xt=et.viewport,_t===0&&(t.setRenderTargetTextures(M,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(M))}let q=b[_t];q===void 0&&(q=new Le,q.layers.enable(_t),q.viewport=new ue,b[_t]=q),q.matrix.fromArray(gt.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(gt.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(xt.x,xt.y,xt.width,xt.height),_t===0&&(_.matrix.copy(q.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),$===!0&&_.cameras.push(q)}let ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")){let _t=u.getDepthInformation(j[0]);_t&&_t.isValid&&_t.texture&&x.init(t,_t,s.renderState)}}for(let j=0;j<v.length;j++){let $=y[j],ht=v[j];$!==null&&ht!==void 0&&ht.update($,D,l||o)}bt&&bt(it,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),g=null}let jt=new xu;jt.setAnimationLoop(Ft),this.setAnimationLoop=function(it){bt=it},this.dispose=function(){}}},yi=new en,px=new ie;function mx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Te&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Te&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),v=M.envMap,y=M.envMapRotation;v&&(m.envMap.value=v,yi.copy(y),yi.x*=-1,yi.y*=-1,yi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(px.makeRotationFromEuler(yi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Te&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){let y=v.program;n.uniformBlockBinding(M,y)}function l(M,v){let y=s[M.id];y===void 0&&(g(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",m));let C=v.program;n.updateUBOMapping(M,C);let T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){let v=u();M.__bindingPointIndex=v;let y=i.createBuffer(),C=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=s[M.id],y=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,w=y.length;T<w;T++){let P=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,_=P.length;b<_;b++){let I=P[b];if(f(I,T,b,C)===!0){let G=I.__offset,F=Array.isArray(I.value)?I.value:[I.value],X=0;for(let tt=0;tt<F.length;tt++){let W=F[tt],at=x(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,G+X,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,X),X+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,y,C){let T=M.value,w=v+"_"+y;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{let P=C[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(M){let v=M.uniforms,y=0,C=16;for(let w=0,P=v.length;w<P;w++){let b=Array.isArray(v[w])?v[w]:[v[w]];for(let _=0,I=b.length;_<I;_++){let G=b[_],F=Array.isArray(G.value)?G.value:[G.value];for(let X=0,tt=F.length;X<tt;X++){let W=F[X],at=x(W),J=y%C,ft=J%at.boundary,mt=J+ft;y+=ft,mt!==0&&C-mt<at.storage&&(y+=C-mt),G.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=at.storage}}}let T=y%C;return T>0&&(y+=C-T),M.__size=y,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){let v=M.target;v.removeEventListener("dispose",m);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var oo=class{constructor(t={}){let{canvas:e=_f(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=si,this.toneMappingExposure=1;let y=this,C=!1,T=0,w=0,P=null,b=-1,_=null,I=new ue,G=new ue,F=null,X=new kt(0),tt=0,W=e.width,at=e.height,J=1,ft=null,mt=null,bt=new ue(0,0,W,at),Ft=new ue(0,0,W,at),jt=!1,it=new Xs,D=!1,j=!1,$=new ie,ht=new ie,_t=new U,gt=new ue,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},q=!1;function et(){return P===null?J:1}let R=n;function ut(S,B){return e.getContext(S,B)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",wt,!1),R===null){let B="webgl2";if(R=ut(B,S),R===null)throw ut(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let st,yt,dt,Ht,St,A,E,L,N,H,V,rt,Q,lt,Pt,ct,Rt,zt,Gt,It,te,Zt,fe,O;function Et(){st=new L0(R),st.init(),Zt=new hx(R,st),yt=new T0(R,st,t,Zt),dt=new ax(R,st),yt.reverseDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),Ht=new N0(R),St=new Zg,A=new lx(R,st,dt,St,yt,Zt,Ht),E=new R0(y),L=new I0(y),N=new Gf(R),fe=new S0(R,N),H=new D0(R,N,Ht,fe),V=new F0(R,H,N,Ht),Gt=new O0(R,yt,A),ct=new A0(St),rt=new Yg(y,E,L,st,yt,fe,ct),Q=new mx(y,St),lt=new Jg,Pt=new nx(st),zt=new E0(y,E,L,dt,V,f,c),Rt=new rx(y,V,yt),O=new gx(R,Ht,yt,dt),It=new w0(R,st,Ht),te=new U0(R,st,Ht),Ht.programs=rt.programs,y.capabilities=yt,y.extensions=st,y.properties=St,y.renderLists=lt,y.shadowMap=Rt,y.state=dt,y.info=Ht}Et();let nt=new Dc(y,R);this.xr=nt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let S=st.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=st.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(W,at,!1))},this.getSize=function(S){return S.set(W,at)},this.setSize=function(S,B,Y=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,at=B,e.width=Math.floor(S*J),e.height=Math.floor(B*J),Y===!0&&(e.style.width=S+"px",e.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(W*J,at*J).floor()},this.setDrawingBufferSize=function(S,B,Y){W=S,at=B,J=Y,e.width=Math.floor(S*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(bt)},this.setViewport=function(S,B,Y,Z){S.isVector4?bt.set(S.x,S.y,S.z,S.w):bt.set(S,B,Y,Z),dt.viewport(I.copy(bt).multiplyScalar(J).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,B,Y,Z){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,B,Y,Z),dt.scissor(G.copy(Ft).multiplyScalar(J).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(S){dt.setScissorTest(jt=S)},this.setOpaqueSort=function(S){ft=S},this.setTransparentSort=function(S){mt=S},this.getClearColor=function(S){return S.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(S=!0,B=!0,Y=!0){let Z=0;if(S){let k=!1;if(P!==null){let pt=P.texture.format;k=pt===dl||pt===ul||pt===hl}if(k){let pt=P.texture.type,Tt=pt===Hn||pt===Ti||pt===Ws||pt===cs||pt===al||pt===cl,Ut=zt.getClearColor(),Nt=zt.getClearAlpha(),Wt=Ut.r,qt=Ut.g,Ot=Ut.b;Tt?(g[0]=Wt,g[1]=qt,g[2]=Ot,g[3]=Nt,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Wt,x[1]=qt,x[2]=Ot,x[3]=Nt,R.clearBufferiv(R.COLOR,0,x))}else Z|=R.COLOR_BUFFER_BIT}B&&(Z|=R.DEPTH_BUFFER_BIT),Y&&(Z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),lt.dispose(),Pt.dispose(),St.dispose(),E.dispose(),L.dispose(),V.dispose(),fe.dispose(),O.dispose(),rt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",kl),nt.removeEventListener("sessionend",Hl),di.stop()};function ot(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let S=Ht.autoReset,B=Rt.enabled,Y=Rt.autoUpdate,Z=Rt.needsUpdate,k=Rt.type;Et(),Ht.autoReset=S,Rt.enabled=B,Rt.autoUpdate=Y,Rt.needsUpdate=Z,Rt.type=k}function wt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Xt(S){let B=S.target;B.removeEventListener("dispose",Xt),we(B)}function we(S){Be(S),St.remove(S)}function Be(S){let B=St.get(S).programs;B!==void 0&&(B.forEach(function(Y){rt.releaseProgram(Y)}),S.isShaderMaterial&&rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,Y,Z,k,pt){B===null&&(B=xt);let Tt=k.isMesh&&k.matrixWorld.determinant()<0,Ut=Pd(S,B,Y,Z,k);dt.setMaterial(Z,Tt);let Nt=Y.index,Wt=1;if(Z.wireframe===!0){if(Nt=H.getWireframeAttribute(Y),Nt===void 0)return;Wt=2}let qt=Y.drawRange,Ot=Y.attributes.position,ne=qt.start*Wt,pe=(qt.start+qt.count)*Wt;pt!==null&&(ne=Math.max(ne,pt.start*Wt),pe=Math.min(pe,(pt.start+pt.count)*Wt)),Nt!==null?(ne=Math.max(ne,0),pe=Math.min(pe,Nt.count)):Ot!=null&&(ne=Math.max(ne,0),pe=Math.min(pe,Ot.count));let ge=pe-ne;if(ge<0||ge===1/0)return;fe.setup(k,Z,Ut,Y,Nt);let qe,oe=It;if(Nt!==null&&(qe=N.get(Nt),oe=te,oe.setIndex(qe)),k.isMesh)Z.wireframe===!0?(dt.setLineWidth(Z.wireframeLinewidth*et()),oe.setMode(R.LINES)):oe.setMode(R.TRIANGLES);else if(k.isLine){let Bt=Z.linewidth;Bt===void 0&&(Bt=1),dt.setLineWidth(Bt*et()),k.isLineSegments?oe.setMode(R.LINES):k.isLineLoop?oe.setMode(R.LINE_LOOP):oe.setMode(R.LINE_STRIP)}else k.isPoints?oe.setMode(R.POINTS):k.isSprite&&oe.setMode(R.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)oe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))oe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Bt=k._multiDrawStarts,Pn=k._multiDrawCounts,ae=k._multiDrawCount,fn=Nt?N.get(Nt).bytesPerElement:1,Bi=St.get(Z).currentProgram.getUniforms();for(let Ke=0;Ke<ae;Ke++)Bi.setValue(R,"_gl_DrawID",Ke),oe.render(Bt[Ke]/fn,Pn[Ke])}else if(k.isInstancedMesh)oe.renderInstances(ne,ge,k.count);else if(Y.isInstancedBufferGeometry){let Bt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pn=Math.min(Y.instanceCount,Bt);oe.renderInstances(ne,ge,Pn)}else oe.render(ne,ge)};function ce(S,B,Y){S.transparent===!0&&S.side===le&&S.forceSinglePass===!1?(S.side=Te,S.needsUpdate=!0,ur(S,B,Y),S.side=wn,S.needsUpdate=!0,ur(S,B,Y),S.side=le):ur(S,B,Y)}this.compile=function(S,B,Y=null){Y===null&&(Y=S),p=Pt.get(Y),p.init(B),v.push(p),Y.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==Y&&S.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let Z=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pt=k.material;if(pt)if(Array.isArray(pt))for(let Tt=0;Tt<pt.length;Tt++){let Ut=pt[Tt];ce(Ut,Y,k),Z.add(Ut)}else ce(pt,Y,k),Z.add(pt)}),v.pop(),p=null,Z},this.compileAsync=function(S,B,Y=null){let Z=this.compile(S,B,Y);return new Promise(k=>{function pt(){if(Z.forEach(function(Tt){St.get(Tt).currentProgram.isReady()&&Z.delete(Tt)}),Z.size===0){k(S);return}setTimeout(pt,10)}st.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let dn=null;function Cn(S){dn&&dn(S)}function kl(){di.stop()}function Hl(){di.start()}let di=new xu;di.setAnimationLoop(Cn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(S){dn=S,nt.setAnimationLoop(S),S===null?di.stop():di.start()},nt.addEventListener("sessionstart",kl),nt.addEventListener("sessionend",Hl),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(B),B=nt.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,B,P),p=Pt.get(S,v.length),p.init(B),v.push(p),ht.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),it.setFromProjectionMatrix(ht),j=this.localClippingEnabled,D=ct.init(this.clippingPlanes,j),m=lt.get(S,M.length),m.init(),M.push(m),nt.enabled===!0&&nt.isPresenting===!0){let pt=y.xr.getDepthSensingMesh();pt!==null&&Ko(pt,B,-1/0,y.sortObjects)}Ko(S,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ft,mt),q=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,q&&zt.addToRenderList(m,S),this.info.render.frame++,D===!0&&ct.beginShadows();let Y=p.state.shadowsArray;Rt.render(Y,S,B),D===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){let pt=B.cameras;if(k.length>0)for(let Tt=0,Ut=pt.length;Tt<Ut;Tt++){let Nt=pt[Tt];Gl(Z,k,S,Nt)}q&&zt.render(S);for(let Tt=0,Ut=pt.length;Tt<Ut;Tt++){let Nt=pt[Tt];zl(m,S,Nt,Nt.viewport)}}else k.length>0&&Gl(Z,k,S,B),q&&zt.render(S),zl(m,S,B);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(y,S,B),fe.resetDefaultState(),b=-1,_=null,v.pop(),v.length>0?(p=v[v.length-1],D===!0&&ct.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ko(S,B,Y,Z){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||it.intersectsSprite(S)){Z&&gt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ht);let Tt=V.update(S),Ut=S.material;Ut.visible&&m.push(S,Tt,Ut,Y,gt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||it.intersectsObject(S))){let Tt=V.update(S),Ut=S.material;if(Z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),gt.copy(S.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),gt.copy(Tt.boundingSphere.center)),gt.applyMatrix4(S.matrixWorld).applyMatrix4(ht)),Array.isArray(Ut)){let Nt=Tt.groups;for(let Wt=0,qt=Nt.length;Wt<qt;Wt++){let Ot=Nt[Wt],ne=Ut[Ot.materialIndex];ne&&ne.visible&&m.push(S,Tt,ne,Y,gt.z,Ot)}}else Ut.visible&&m.push(S,Tt,Ut,Y,gt.z,null)}}let pt=S.children;for(let Tt=0,Ut=pt.length;Tt<Ut;Tt++)Ko(pt[Tt],B,Y,Z)}function zl(S,B,Y,Z){let k=S.opaque,pt=S.transmissive,Tt=S.transparent;p.setupLightsView(Y),D===!0&&ct.setGlobalState(y.clippingPlanes,Y),Z&&dt.viewport(I.copy(Z)),k.length>0&&hr(k,B,Y),pt.length>0&&hr(pt,B,Y),Tt.length>0&&hr(Tt,B,Y),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Gl(S,B,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new zn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?er:Hn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let pt=p.state.transmissionRenderTarget[Z.id],Tt=Z.viewport||I;pt.setSize(Tt.z,Tt.w);let Ut=y.getRenderTarget();y.setRenderTarget(pt),y.getClearColor(X),tt=y.getClearAlpha(),tt<1&&y.setClearColor(16777215,.5),y.clear(),q&&zt.render(Y);let Nt=y.toneMapping;y.toneMapping=si;let Wt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),D===!0&&ct.setGlobalState(y.clippingPlanes,Z),hr(S,Y,Z),A.updateMultisampleRenderTarget(pt),A.updateRenderTargetMipmap(pt),st.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ot=0,ne=B.length;Ot<ne;Ot++){let pe=B[Ot],ge=pe.object,qe=pe.geometry,oe=pe.material,Bt=pe.group;if(oe.side===le&&ge.layers.test(Z.layers)){let Pn=oe.side;oe.side=Te,oe.needsUpdate=!0,Vl(ge,Y,Z,qe,oe,Bt),oe.side=Pn,oe.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(pt),A.updateRenderTargetMipmap(pt))}y.setRenderTarget(Ut),y.setClearColor(X,tt),Wt!==void 0&&(Z.viewport=Wt),y.toneMapping=Nt}function hr(S,B,Y){let Z=B.isScene===!0?B.overrideMaterial:null;for(let k=0,pt=S.length;k<pt;k++){let Tt=S[k],Ut=Tt.object,Nt=Tt.geometry,Wt=Z===null?Tt.material:Z,qt=Tt.group;Ut.layers.test(Y.layers)&&Vl(Ut,B,Y,Nt,Wt,qt)}}function Vl(S,B,Y,Z,k,pt){S.onBeforeRender(y,B,Y,Z,k,pt),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(y,B,Y,Z,S,pt),k.transparent===!0&&k.side===le&&k.forceSinglePass===!1?(k.side=Te,k.needsUpdate=!0,y.renderBufferDirect(Y,B,Z,k,S,pt),k.side=wn,k.needsUpdate=!0,y.renderBufferDirect(Y,B,Z,k,S,pt),k.side=le):y.renderBufferDirect(Y,B,Z,k,S,pt),S.onAfterRender(y,B,Y,Z,k,pt)}function ur(S,B,Y){B.isScene!==!0&&(B=xt);let Z=St.get(S),k=p.state.lights,pt=p.state.shadowsArray,Tt=k.state.version,Ut=rt.getParameters(S,k.state,pt,B,Y),Nt=rt.getProgramCacheKey(Ut),Wt=Z.programs;Z.environment=S.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(S.isMeshStandardMaterial?L:E).get(S.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Wt===void 0&&(S.addEventListener("dispose",Xt),Wt=new Map,Z.programs=Wt);let qt=Wt.get(Nt);if(qt!==void 0){if(Z.currentProgram===qt&&Z.lightsStateVersion===Tt)return Xl(S,Ut),qt}else Ut.uniforms=rt.getUniforms(S),S.onBeforeCompile(Ut,y),qt=rt.acquireProgram(Ut,Nt),Wt.set(Nt,qt),Z.uniforms=Ut.uniforms;let Ot=Z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ot.clippingPlanes=ct.uniform),Xl(S,Ut),Z.needsLights=Ld(S),Z.lightsStateVersion=Tt,Z.needsLights&&(Ot.ambientLightColor.value=k.state.ambient,Ot.lightProbe.value=k.state.probe,Ot.directionalLights.value=k.state.directional,Ot.directionalLightShadows.value=k.state.directionalShadow,Ot.spotLights.value=k.state.spot,Ot.spotLightShadows.value=k.state.spotShadow,Ot.rectAreaLights.value=k.state.rectArea,Ot.ltc_1.value=k.state.rectAreaLTC1,Ot.ltc_2.value=k.state.rectAreaLTC2,Ot.pointLights.value=k.state.point,Ot.pointLightShadows.value=k.state.pointShadow,Ot.hemisphereLights.value=k.state.hemi,Ot.directionalShadowMap.value=k.state.directionalShadowMap,Ot.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ot.spotShadowMap.value=k.state.spotShadowMap,Ot.spotLightMatrix.value=k.state.spotLightMatrix,Ot.spotLightMap.value=k.state.spotLightMap,Ot.pointShadowMap.value=k.state.pointShadowMap,Ot.pointShadowMatrix.value=k.state.pointShadowMatrix),Z.currentProgram=qt,Z.uniformsList=null,qt}function Wl(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=ss.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Xl(S,B){let Y=St.get(S);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Pd(S,B,Y,Z,k){B.isScene!==!0&&(B=xt),A.resetTextureUnits();let pt=B.fog,Tt=Z.isMeshStandardMaterial?B.environment:null,Ut=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:_s,Nt=(Z.isMeshStandardMaterial?L:E).get(Z.envMap||Tt),Wt=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,qt=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ot=!!Y.morphAttributes.position,ne=!!Y.morphAttributes.normal,pe=!!Y.morphAttributes.color,ge=si;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ge=y.toneMapping);let qe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=qe!==void 0?qe.length:0,Bt=St.get(Z),Pn=p.state.lights;if(D===!0&&(j===!0||S!==_)){let on=S===_&&Z.id===b;ct.setState(Z,S,on)}let ae=!1;Z.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Pn.state.version||Bt.outputColorSpace!==Ut||k.isBatchedMesh&&Bt.batching===!1||!k.isBatchedMesh&&Bt.batching===!0||k.isBatchedMesh&&Bt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Bt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Bt.instancing===!1||!k.isInstancedMesh&&Bt.instancing===!0||k.isSkinnedMesh&&Bt.skinning===!1||!k.isSkinnedMesh&&Bt.skinning===!0||k.isInstancedMesh&&Bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Bt.instancingMorph===!1&&k.morphTexture!==null||Bt.envMap!==Nt||Z.fog===!0&&Bt.fog!==pt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ct.numPlanes||Bt.numIntersection!==ct.numIntersection)||Bt.vertexAlphas!==Wt||Bt.vertexTangents!==qt||Bt.morphTargets!==Ot||Bt.morphNormals!==ne||Bt.morphColors!==pe||Bt.toneMapping!==ge||Bt.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Bt.__version=Z.version);let fn=Bt.currentProgram;ae===!0&&(fn=ur(Z,B,k));let Bi=!1,Ke=!1,Cs=!1,xe=fn.getUniforms(),Mn=Bt.uniforms;if(dt.useProgram(fn.program)&&(Bi=!0,Ke=!0,Cs=!0),Z.id!==b&&(b=Z.id,Ke=!0),Bi||_!==S){dt.buffers.depth.getReversed()?($.copy(S.projectionMatrix),bf($),Ef($),xe.setValue(R,"projectionMatrix",$)):xe.setValue(R,"projectionMatrix",S.projectionMatrix),xe.setValue(R,"viewMatrix",S.matrixWorldInverse);let Yn=xe.map.cameraPosition;Yn!==void 0&&Yn.setValue(R,_t.setFromMatrixPosition(S.matrixWorld)),yt.logarithmicDepthBuffer&&xe.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&xe.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,Ke=!0,Cs=!0)}if(k.isSkinnedMesh){xe.setOptional(R,k,"bindMatrix"),xe.setOptional(R,k,"bindMatrixInverse");let on=k.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),xe.setValue(R,"boneTexture",on.boneTexture,A))}k.isBatchedMesh&&(xe.setOptional(R,k,"batchingTexture"),xe.setValue(R,"batchingTexture",k._matricesTexture,A),xe.setOptional(R,k,"batchingIdTexture"),xe.setValue(R,"batchingIdTexture",k._indirectTexture,A),xe.setOptional(R,k,"batchingColorTexture"),k._colorsTexture!==null&&xe.setValue(R,"batchingColorTexture",k._colorsTexture,A));let Ps=Y.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&Gt.update(k,Y,fn),(Ke||Bt.receiveShadow!==k.receiveShadow)&&(Bt.receiveShadow=k.receiveShadow,xe.setValue(R,"receiveShadow",k.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Mn.envMap.value=Nt,Mn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(Mn.envMapIntensity.value=B.environmentIntensity),Ke&&(xe.setValue(R,"toneMappingExposure",y.toneMappingExposure),Bt.needsLights&&Id(Mn,Cs),pt&&Z.fog===!0&&Q.refreshFogUniforms(Mn,pt),Q.refreshMaterialUniforms(Mn,Z,J,at,p.state.transmissionRenderTarget[S.id]),ss.upload(R,Wl(Bt),Mn,A)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ss.upload(R,Wl(Bt),Mn,A),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&xe.setValue(R,"center",k.center),xe.setValue(R,"modelViewMatrix",k.modelViewMatrix),xe.setValue(R,"normalMatrix",k.normalMatrix),xe.setValue(R,"modelMatrix",k.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let on=Z.uniformsGroups;for(let Yn=0,Zn=on.length;Yn<Zn;Yn++){let ql=on[Yn];O.update(ql,fn),O.bind(ql,fn)}}return fn}function Id(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Ld(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,B,Y){St.get(S.texture).__webglTexture=B,St.get(S.depthTexture).__webglTexture=Y;let Z=St.get(S);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,B){let Y=St.get(S);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,Y=0){P=S,T=B,w=Y;let Z=!0,k=null,pt=!1,Tt=!1;if(S){let Nt=St.get(S);if(Nt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(R.FRAMEBUFFER,null),Z=!1;else if(Nt.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(Nt.__hasExternalTextures)A.rebindTextures(S,St.get(S.texture).__webglTexture,St.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ot=S.depthTexture;if(Nt.__boundDepthTexture!==Ot){if(Ot!==null&&St.has(Ot)&&(S.width!==Ot.image.width||S.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}let Wt=S.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Tt=!0);let qt=St.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qt[B])?k=qt[B][Y]:k=qt[B],pt=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?k=St.get(S).__webglMultisampledFramebuffer:Array.isArray(qt)?k=qt[Y]:k=qt,I.copy(S.viewport),G.copy(S.scissor),F=S.scissorTest}else I.copy(bt).multiplyScalar(J).floor(),G.copy(Ft).multiplyScalar(J).floor(),F=jt;if(dt.bindFramebuffer(R.FRAMEBUFFER,k)&&Z&&dt.drawBuffers(S,k),dt.viewport(I),dt.scissor(G),dt.setScissorTest(F),pt){let Nt=St.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+B,Nt.__webglTexture,Y)}else if(Tt){let Nt=St.get(S.texture),Wt=B||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Nt.__webglTexture,Y||0,Wt)}b=-1},this.readRenderTargetPixels=function(S,B,Y,Z,k,pt,Tt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ut=Ut[Tt]),Ut){dt.bindFramebuffer(R.FRAMEBUFFER,Ut);try{let Nt=S.texture,Wt=Nt.format,qt=Nt.type;if(!yt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-Z&&Y>=0&&Y<=S.height-k&&R.readPixels(B,Y,Z,k,Zt.convert(Wt),Zt.convert(qt),pt)}finally{let Nt=P!==null?St.get(P).__webglFramebuffer:null;dt.bindFramebuffer(R.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(S,B,Y,Z,k,pt,Tt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ut=Ut[Tt]),Ut){let Nt=S.texture,Wt=Nt.format,qt=Nt.type;if(!yt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=S.width-Z&&Y>=0&&Y<=S.height-k){dt.bindFramebuffer(R.FRAMEBUFFER,Ut);let Ot=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ot),R.bufferData(R.PIXEL_PACK_BUFFER,pt.byteLength,R.STREAM_READ),R.readPixels(B,Y,Z,k,Zt.convert(Wt),Zt.convert(qt),0);let ne=P!==null?St.get(P).__webglFramebuffer:null;dt.bindFramebuffer(R.FRAMEBUFFER,ne);let pe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Mf(R,pe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ot),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,pt),R.deleteBuffer(Ot),R.deleteSync(pe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,B=null,Y=0){S.isTexture!==!0&&(ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1]);let Z=Math.pow(2,-Y),k=Math.floor(S.image.width*Z),pt=Math.floor(S.image.height*Z),Tt=B!==null?B.x:0,Ut=B!==null?B.y:0;A.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,Y,0,0,Tt,Ut,k,pt),dt.unbindTexture()},this.copyTextureToTexture=function(S,B,Y=null,Z=null,k=0){S.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,S=arguments[1],B=arguments[2],k=arguments[3]||0,Y=null);let pt,Tt,Ut,Nt,Wt,qt,Ot,ne,pe,ge=S.isCompressedTexture?S.mipmaps[k]:S.image;Y!==null?(pt=Y.max.x-Y.min.x,Tt=Y.max.y-Y.min.y,Ut=Y.isBox3?Y.max.z-Y.min.z:1,Nt=Y.min.x,Wt=Y.min.y,qt=Y.isBox3?Y.min.z:0):(pt=ge.width,Tt=ge.height,Ut=ge.depth||1,Nt=0,Wt=0,qt=0),Z!==null?(Ot=Z.x,ne=Z.y,pe=Z.z):(Ot=0,ne=0,pe=0);let qe=Zt.convert(B.format),oe=Zt.convert(B.type),Bt;B.isData3DTexture?(A.setTexture3D(B,0),Bt=R.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),Bt=R.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),Bt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);let Pn=R.getParameter(R.UNPACK_ROW_LENGTH),ae=R.getParameter(R.UNPACK_IMAGE_HEIGHT),fn=R.getParameter(R.UNPACK_SKIP_PIXELS),Bi=R.getParameter(R.UNPACK_SKIP_ROWS),Ke=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ge.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ge.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Nt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Wt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,qt);let Cs=S.isDataArrayTexture||S.isData3DTexture,xe=B.isDataArrayTexture||B.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Mn=St.get(S),Ps=St.get(B),on=St.get(Mn.__renderTarget),Yn=St.get(Ps.__renderTarget);dt.bindFramebuffer(R.READ_FRAMEBUFFER,on.__webglFramebuffer),dt.bindFramebuffer(R.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Zn=0;Zn<Ut;Zn++)Cs&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,St.get(S).__webglTexture,k,qt+Zn),S.isDepthTexture?(xe&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,St.get(B).__webglTexture,k,pe+Zn),R.blitFramebuffer(Nt,Wt,pt,Tt,Ot,ne,pt,Tt,R.DEPTH_BUFFER_BIT,R.NEAREST)):xe?R.copyTexSubImage3D(Bt,k,Ot,ne,pe+Zn,Nt,Wt,pt,Tt):R.copyTexSubImage2D(Bt,k,Ot,ne,pe+Zn,Nt,Wt,pt,Tt);dt.bindFramebuffer(R.READ_FRAMEBUFFER,null),dt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else xe?S.isDataTexture||S.isData3DTexture?R.texSubImage3D(Bt,k,Ot,ne,pe,pt,Tt,Ut,qe,oe,ge.data):B.isCompressedArrayTexture?R.compressedTexSubImage3D(Bt,k,Ot,ne,pe,pt,Tt,Ut,qe,ge.data):R.texSubImage3D(Bt,k,Ot,ne,pe,pt,Tt,Ut,qe,oe,ge):S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,k,Ot,ne,pt,Tt,qe,oe,ge.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,k,Ot,ne,ge.width,ge.height,qe,ge.data):R.texSubImage2D(R.TEXTURE_2D,k,Ot,ne,pt,Tt,qe,oe,ge);R.pixelStorei(R.UNPACK_ROW_LENGTH,Pn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ae),R.pixelStorei(R.UNPACK_SKIP_PIXELS,fn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Bi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ke),k===0&&B.generateMipmaps&&R.generateMipmap(Bt),dt.unbindTexture()},this.copyTextureToTexture3D=function(S,B,Y=null,Z=null,k=0){return S.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,S=arguments[2],B=arguments[3],k=arguments[4]||0),ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,B,Y,Z,k)},this.initRenderTarget=function(S){St.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),dt.unbindTexture()},this.resetState=function(){T=0,w=0,P=null,dt.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var us=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ri=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Uc=class extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=tn,h=tn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qs=class extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qi=new ie,qh=new ie,Dr=[],Yh=new Gn,xx=new ie,Os=new z,Fs=new ai,ds=class extends z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),Yh.copy(t.boundingBox).applyMatrix4(Qi),this.boundingBox.union(Yh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),Fs.copy(t.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),t.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),qh.multiplyMatrices(n,Qi),Os.matrixWorld=qh,Os.raycast(t,Dr);for(let o=0,a=Dr.length;o<a;o++){let c=Dr[o];c.instanceId=r,c.object=this,e.push(c)}Dr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uc(new Float32Array(s*this.count),s,this.count,ll,Sn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Nc=class extends Vn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zh=new ie,Oc=new jr,Ur=new ai,Nr=new U,ao=class extends Fe{constructor(t=new ye,e=new Nc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,t.ray.intersectsSphere(Ur)===!1)return;Zh.copy(s).invert(),Oc.copy(t.ray).applyMatrix4(Zh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);Nr.fromBufferAttribute(u,m),$h(Nr,m,c,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Nr.fromBufferAttribute(u,g),$h(Nr,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $h(i,t,e,n,s,r,o){let a=Oc.distanceSqToPoint(i);if(a<e){let c=new U;Oc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var cn=class extends Ze{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new vt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new U,s=[],r=[],o=[],a=new U,c=new ie;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ze(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ys=class extends ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Fc=class extends Ys{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ml(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Or=new U,Ra=new ml,Ca=new ml,Pa=new ml,Bc=class extends ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Or.subVectors(s[0],s[1]).add(s[0]),l=Or);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Or.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Or),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ra.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),Ca.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),Pa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ra.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ca.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Pa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ra.calc(c),Ca.calc(c),Pa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Jh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function yx(i,t){let e=1-i;return e*e*t}function vx(i,t){return 2*(1-i)*i*t}function _x(i,t){return i*i*t}function Gs(i,t,e,n){return yx(i,t)+vx(i,e)+_x(i,n)}function Mx(i,t){let e=1-i;return e*e*e*t}function bx(i,t){let e=1-i;return 3*e*e*i*t}function Ex(i,t){return 3*(1-i)*i*i*t}function Sx(i,t){return i*i*i*t}function Vs(i,t,e,n,s){return Mx(i,t)+bx(i,e)+Ex(i,n)+Sx(i,s)}var co=class extends ln{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,s.x,r.x,o.x,a.x),Vs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zs=class extends ln{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,s.x,r.x,o.x,a.x),Vs(t,s.y,r.y,o.y,a.y),Vs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lo=class extends ln{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kc=class extends ln{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends ln{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hc=class extends ln{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y),Gs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Jh(a,c.x,l.x,h.x,u.x),Jh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},zc=Object.freeze({__proto__:null,ArcCurve:Fc,CatmullRomCurve3:Bc,CubicBezierCurve:co,CubicBezierCurve3:Zs,EllipseCurve:Ys,LineCurve:lo,LineCurve3:kc,QuadraticBezierCurve:ho,QuadraticBezierCurve3:Hc,SplineCurve:uo}),Gc=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new zc[s.type]().fromJSON(s))}return this}},fs=class extends Gc{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new lo(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ho(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new co(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Ys(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var ps=class i extends ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new U,h=new vt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Vt=class i extends ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function M(){let y=new U,C=new U,T=0,w=(e-t)/n;for(let P=0;P<=r;P++){let b=[],_=P/r,I=_*(e-t)+t;for(let G=0;G<=s;G++){let F=G/s,X=F*c+a,tt=Math.sin(X),W=Math.cos(X);C.x=I*tt,C.y=-_*n+m,C.z=I*W,u.push(C.x,C.y,C.z),y.set(tt,w,W).normalize(),d.push(y.x,y.y,y.z),f.push(F,1-_),b.push(g++)}x.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){let _=x[b][P],I=x[b+1][P],G=x[b+1][P+1],F=x[b][P+1];(t>0||b!==0)&&(h.push(_,I,F),T+=3),(e>0||b!==r-1)&&(h.push(I,G,F),T+=3)}l.addGroup(p,T,0),p+=T}function v(y){let C=g,T=new vt,w=new U,P=0,b=y===!0?t:e,_=y===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;let I=g;for(let G=0;G<=s;G++){let X=G/s*c+a,tt=Math.cos(X),W=Math.sin(X);w.x=b*W,w.y=m*_,w.z=b*tt,u.push(w.x,w.y,w.z),d.push(0,_,0),T.x=tt*.5+.5,T.y=W*.5*_+.5,f.push(T.x,T.y),g++}for(let G=0;G<s;G++){let F=C+G,X=I+G;y===!0?h.push(X,X+1,F):h.push(X+1,X,F),P+=3}l.addGroup(p,P,y===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ce=class i extends Vt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fo=class i extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let v=new U,y=new U,C=new U;for(let T=0;T<e.length;T+=3)f(e[T+0],v),f(e[T+1],y),f(e[T+2],C),c(v,y,C,M)}function c(M,v,y,C){let T=C+1,w=[];for(let P=0;P<=T;P++){w[P]=[];let b=M.clone().lerp(y,P/T),_=v.clone().lerp(y,P/T),I=T-P;for(let G=0;G<=I;G++)G===0&&P===T?w[P][G]=b:w[P][G]=b.clone().lerp(_,G/I)}for(let P=0;P<T;P++)for(let b=0;b<2*(T-P)-1;b++){let _=Math.floor(b/2);b%2===0?(d(w[P][_+1]),d(w[P+1][_]),d(w[P][_])):(d(w[P][_+1]),d(w[P+1][_+1]),d(w[P+1][_]))}}function l(M){let v=new U;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(M),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let M=new U;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let y=m(M)/2/Math.PI+.5,C=p(M)/Math.PI+.5;o.push(y,1-C)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let v=o[M+0],y=o[M+2],C=o[M+4],T=Math.max(v,y,C),w=Math.min(v,y,C);T>.9&&w<.1&&(v<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,v){let y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){let M=new U,v=new U,y=new U,C=new U,T=new vt,w=new vt,P=new vt;for(let b=0,_=0;b<r.length;b+=9,_+=6){M.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),T.set(o[_+0],o[_+1]),w.set(o[_+2],o[_+3]),P.set(o[_+4],o[_+5]),C.copy(M).add(v).add(y).divideScalar(3);let I=m(C);x(T,_+0,M,I),x(w,_+2,v,I),x(P,_+4,y,I)}}function x(M,v,y,C){C<0&&M.x===1&&(o[v]=M.x-1),y.x===0&&y.z===0&&(o[v]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},ms=class i extends fo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var hn=class extends fs{constructor(t){super(t),this.uuid=Ms(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new fs().fromJSON(s))}return this}},wx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=bu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=Px(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return $s(r,o,e,a,c,f,0),o}};function bu(i,t,e,n,s){let r,o;if(s===zx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Kh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Kh(r,i[r],i[r+1],o);return o&&_o(o,o.next)&&(Ks(o),o=o.next),o}function Ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_o(e,e.next)||Se(e.prev,e,e.next)===0)){if(Ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $s(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Nx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Ax(i,n,s,r):Tx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ks(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Rx(Ci(i),t,e),$s(i,t,e,n,s,r,2)):o===2&&Cx(i,t,e,n,s,r):$s(Ci(i),t,e,n,s,r,1);break}}}function Tx(i){let t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&es(s,a,r,c,o,l,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ax(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Vc(f,g,t,e,n),M=Vc(x,m,t,e,n),v=i.prevZ,y=i.nextZ;for(;v&&v.z>=p&&y&&y.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&es(a,h,c,u,l,d,v.x,v.y)&&Se(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&es(a,h,c,u,l,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&es(a,h,c,u,l,d,v.x,v.y)&&Se(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&es(a,h,c,u,l,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Rx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!_o(s,r)&&Eu(s,n,n.next,r)&&Js(s,r)&&Js(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ks(n),Ks(n.next),n=i=r),n=n.next}while(n!==i);return Ci(n)}function Cx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bx(o,a)){let c=Su(o,a);o=Ci(o,o.next),c=Ci(c,c.next),$s(o,t,e,n,s,r,0),$s(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Px(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=bu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Fx(l));for(s.sort(Ix),r=0;r<s.length;r++)e=Lx(s[r],e);return e}function Ix(i,t){return i.x-t.x}function Lx(i,t){let e=Dx(i,t);if(!e)return t;let n=Su(e,i);return Ci(n,n.next),Ci(e,e.next)}function Dx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&es(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Js(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Ux(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Ux(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function Nx(i,t,e,n){let s=i;do s.z===0&&(s.z=Vc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ox(s)}function Ox(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Vc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function es(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Bx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!kx(i,t)&&(Js(i,t)&&Js(t,i)&&Hx(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||_o(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _o(i,t){return i.x===t.x&&i.y===t.y}function Eu(i,t,e,n){let s=Br(Se(i,t,e)),r=Br(Se(i,t,n)),o=Br(Se(e,n,i)),a=Br(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&Fr(i,e,t)||r===0&&Fr(i,n,t)||o===0&&Fr(e,i,n)||a===0&&Fr(e,t,n))}function Fr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Br(i){return i>0?1:i<0?-1:0}function kx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Eu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Js(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function Hx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Su(i,t){let e=new Wc(i.i,i.x,i.y),n=new Wc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Kh(i,t,e,n){let s=new Wc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ri=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];jh(t),Qh(n,t);let o=t.length;e.forEach(jh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Qh(n,e[c]);let a=wx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function jh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var gs=class i extends ye{constructor(t=new hn([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Gx,v,y=!1,C,T,w,P;p&&(v=p.getSpacedPoints(h),y=!0,d=!1,C=p.computeFrenetFrames(h,!1),T=new U,w=new U,P=new U),d||(m=0,f=0,g=0,x=0);let b=a.extractPoints(l),_=b.shape,I=b.holes;if(!ri.isClockWise(_)){_=_.reverse();for(let q=0,et=I.length;q<et;q++){let R=I[q];ri.isClockWise(R)&&(I[q]=R.reverse())}}let F=ri.triangulateShape(_,I),X=_;for(let q=0,et=I.length;q<et;q++){let R=I[q];_=_.concat(R)}function tt(q,et,R){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(et,R)}let W=_.length,at=F.length;function J(q,et,R){let ut,st,yt,dt=q.x-et.x,Ht=q.y-et.y,St=R.x-q.x,A=R.y-q.y,E=dt*dt+Ht*Ht,L=dt*A-Ht*St;if(Math.abs(L)>Number.EPSILON){let N=Math.sqrt(E),H=Math.sqrt(St*St+A*A),V=et.x-Ht/N,rt=et.y+dt/N,Q=R.x-A/H,lt=R.y+St/H,Pt=((Q-V)*A-(lt-rt)*St)/(dt*A-Ht*St);ut=V+dt*Pt-q.x,st=rt+Ht*Pt-q.y;let ct=ut*ut+st*st;if(ct<=2)return new vt(ut,st);yt=Math.sqrt(ct/2)}else{let N=!1;dt>Number.EPSILON?St>Number.EPSILON&&(N=!0):dt<-Number.EPSILON?St<-Number.EPSILON&&(N=!0):Math.sign(Ht)===Math.sign(A)&&(N=!0),N?(ut=-Ht,st=dt,yt=Math.sqrt(E)):(ut=dt,st=Ht,yt=Math.sqrt(E/2))}return new vt(ut/yt,st/yt)}let ft=[];for(let q=0,et=X.length,R=et-1,ut=q+1;q<et;q++,R++,ut++)R===et&&(R=0),ut===et&&(ut=0),ft[q]=J(X[q],X[R],X[ut]);let mt=[],bt,Ft=ft.concat();for(let q=0,et=I.length;q<et;q++){let R=I[q];bt=[];for(let ut=0,st=R.length,yt=st-1,dt=ut+1;ut<st;ut++,yt++,dt++)yt===st&&(yt=0),dt===st&&(dt=0),bt[ut]=J(R[ut],R[yt],R[dt]);mt.push(bt),Ft=Ft.concat(bt)}for(let q=0;q<m;q++){let et=q/m,R=f*Math.cos(et*Math.PI/2),ut=g*Math.sin(et*Math.PI/2)+x;for(let st=0,yt=X.length;st<yt;st++){let dt=tt(X[st],ft[st],ut);$(dt.x,dt.y,-R)}for(let st=0,yt=I.length;st<yt;st++){let dt=I[st];bt=mt[st];for(let Ht=0,St=dt.length;Ht<St;Ht++){let A=tt(dt[Ht],bt[Ht],ut);$(A.x,A.y,-R)}}}let jt=g+x;for(let q=0;q<W;q++){let et=d?tt(_[q],Ft[q],jt):_[q];y?(w.copy(C.normals[0]).multiplyScalar(et.x),T.copy(C.binormals[0]).multiplyScalar(et.y),P.copy(v[0]).add(w).add(T),$(P.x,P.y,P.z)):$(et.x,et.y,0)}for(let q=1;q<=h;q++)for(let et=0;et<W;et++){let R=d?tt(_[et],Ft[et],jt):_[et];y?(w.copy(C.normals[q]).multiplyScalar(R.x),T.copy(C.binormals[q]).multiplyScalar(R.y),P.copy(v[q]).add(w).add(T),$(P.x,P.y,P.z)):$(R.x,R.y,u/h*q)}for(let q=m-1;q>=0;q--){let et=q/m,R=f*Math.cos(et*Math.PI/2),ut=g*Math.sin(et*Math.PI/2)+x;for(let st=0,yt=X.length;st<yt;st++){let dt=tt(X[st],ft[st],ut);$(dt.x,dt.y,u+R)}for(let st=0,yt=I.length;st<yt;st++){let dt=I[st];bt=mt[st];for(let Ht=0,St=dt.length;Ht<St;Ht++){let A=tt(dt[Ht],bt[Ht],ut);y?$(A.x,A.y+v[h-1].y,v[h-1].x+R):$(A.x,A.y,u+R)}}}it(),D();function it(){let q=s.length/3;if(d){let et=0,R=W*et;for(let ut=0;ut<at;ut++){let st=F[ut];ht(st[2]+R,st[1]+R,st[0]+R)}et=h+m*2,R=W*et;for(let ut=0;ut<at;ut++){let st=F[ut];ht(st[0]+R,st[1]+R,st[2]+R)}}else{for(let et=0;et<at;et++){let R=F[et];ht(R[2],R[1],R[0])}for(let et=0;et<at;et++){let R=F[et];ht(R[0]+W*h,R[1]+W*h,R[2]+W*h)}}n.addGroup(q,s.length/3-q,0)}function D(){let q=s.length/3,et=0;j(X,et),et+=X.length;for(let R=0,ut=I.length;R<ut;R++){let st=I[R];j(st,et),et+=st.length}n.addGroup(q,s.length/3-q,1)}function j(q,et){let R=q.length;for(;--R>=0;){let ut=R,st=R-1;st<0&&(st=q.length-1);for(let yt=0,dt=h+m*2;yt<dt;yt++){let Ht=W*yt,St=W*(yt+1),A=et+ut+Ht,E=et+st+Ht,L=et+st+St,N=et+ut+St;_t(A,E,L,N)}}}function $(q,et,R){c.push(q),c.push(et),c.push(R)}function ht(q,et,R){gt(q),gt(et),gt(R);let ut=s.length/3,st=M.generateTopUV(n,s,ut-3,ut-2,ut-1);xt(st[0]),xt(st[1]),xt(st[2])}function _t(q,et,R,ut){gt(q),gt(et),gt(ut),gt(et),gt(R),gt(ut);let st=s.length/3,yt=M.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);xt(yt[0]),xt(yt[1]),xt(yt[3]),xt(yt[1]),xt(yt[2]),xt(yt[3])}function gt(q){s.push(c[q*3+0]),s.push(c[q*3+1]),s.push(c[q*3+2])}function xt(q){r.push(q.x),r.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Vx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new zc[s.type]().fromJSON(s)),new i(n,t.options)}},Gx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new vt(r,o),new vt(a,c),new vt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new vt(o,1-c),new vt(l,1-u),new vt(d,1-g),new vt(x,1-p)]:[new vt(a,1-c),new vt(h,1-u),new vt(f,1-g),new vt(m,1-p)]}};function Vx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ci=class i extends fo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Pi=class i extends ye{constructor(t=new hn([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(o,2));function l(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;ri.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];ri.isClockWise(M)===!0&&(g[m]=M.reverse())}let x=ri.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=x.length;m<p;m++){let M=x[m],v=M[0]+u,y=M[1]+u,C=M[2]+u;n.push(v,y,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Wx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Wx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ee=class i extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new U,d=new U,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],v=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+y,1-v),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let v=h[p][M+1],y=h[p][M],C=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&f.push(v,y,T),(p!==n-1||c<Math.PI)&&f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var nn=class i extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new U,u=new U,d=new U;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(x,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var K=class extends Vn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var po=class extends Vn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function kr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var xs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xc=class extends xs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jl,endingEnd:Jl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kl:r=t,a=2*e-n;break;case jl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Kl:o=t,c=2*n-e;break;case jl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+M*o[l+C]+v*o[c+C]+y*o[u+C];return r}},qc=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Yc=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=kr(e,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:kr(t.times,Array),values:kr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qr:e=this.InterpolantFactoryMethodDiscrete;break;case xc:e=this.InterpolantFactoryMethodLinear;break;case Qo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return xc;case this.InterpolantFactoryMethodSmooth:return Qo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Xx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=xc;var Ii=class extends yn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=qr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Zc=class extends yn{};Zc.prototype.ValueTypeName="color";var $c=class extends yn{};$c.prototype.ValueTypeName="number";var Jc=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},mo=class extends yn{InterpolantFactoryMethodLinear(t){return new Jc(this.times,this.values,this.getValueSize(),t)}};mo.prototype.ValueTypeName="quaternion";mo.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends yn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=qr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Kc=class extends yn{};Kc.prototype.ValueTypeName="vector";var jc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},qx=new jc,Qc=class{constructor(t){this.manager=t!==void 0?t:qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Qc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},vs=class extends ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ia=new ie,tu=new U,eu=new U,js=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(tu),eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eu),e.updateMatrixWorld(),Ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},tl=class extends js{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Zr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},go=class extends ys{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new tl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},nu=new ie,Bs=new U,La=new U,el=class extends js{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Bs),La.copy(n.position),La.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(La),n.updateMatrixWorld(),s.makeTranslation(-Bs.x,-Bs.y,-Bs.z),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu)}},Wn=class extends ys{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new el}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},nl=class extends js{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Di=class extends ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new nl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var gl="\\[\\]\\.:\\/",Yx=new RegExp("["+gl+"]","g"),xl="[^"+gl+"]",Zx="[^"+gl.replace("\\.","")+"]",$x=/((?:WC+[\/:])*)/.source.replace("WC",xl),Jx=/(WCOD+)?/.source.replace("WCOD",Zx),Kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),Qx=new RegExp("^"+$x+Jx+Kx+jx+"$"),ty=["material","materials","bones","map"],il=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(t){let e=Qx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ty.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=il;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ir=class extends Ri{constructor(){super();let t=new Ct;t.deleteAttribute("uv");let e=new K({side:Te}),n=new K,s=new Wn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new z(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new z(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new z(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new z(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new z(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new z(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new z(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new z(t,Es(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new z(t,Es(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new z(t,Es(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new z(t,Es(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new z(t,Es(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new z(t,Es(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Es(i){let t=new Re;return t.color.setScalar(i),t}var ey=Math.PI/180,yl=i=>[-Math.sin(i),Math.cos(i)];function wu(i){let t=0,e=0,n=0,s=0;for(let r of i){if(r.s0=t,r.x0=e,r.z0=n,r.th0=s,r.type==="S")r.length=r.len,e+=Math.cos(s)*r.len,n+=Math.sin(s)*r.len;else{let o=r.ang*ey,a=Math.sign(o);r.length=Math.abs(o)*r.r;let[c,l]=yl(s);r.cx=e+c*r.r*a,r.cz=n+l*r.r*a,s+=o;let[h,u]=yl(s);e=r.cx-h*r.r*a,n=r.cz-u*r.r*a}t+=r.length}return{s:t,x:e,z:n,th:s}}function ny(i){let t=i.map(f=>({...f})),e=wu(t),n=t.find(f=>f.solve==="X"),s=t.find(f=>f.solve==="Y"),r=Math.cos(n.th0),o=Math.sin(n.th0),a=Math.cos(s.th0),c=Math.sin(s.th0),l=r*c-o*a,h=(-e.x*c+e.z*a)/l,u=(-r*e.z+o*e.x)/l;n.len=h,s.len=u;let d=wu(t);if(Math.hypot(d.x,d.z)>.01||h<50||u<50)throw new Error("El circuito no cierra");return{segs:t,length:d.s}}var Tu=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Mo=class{constructor(t){this.circuit=t,this.theme=t.theme;let{segs:e,length:n}=ny(t.layout);this.segs=e,this.length=n,this.N=Math.round(n),this.ds=n/this.N;let s=this.N;this.px=new Float32Array(s),this.pz=new Float32Array(s),this.th=new Float32Array(s);for(let r=0;r<s;r++){let o=this.evalAt(r*this.ds);this.px[r]=o.x,this.pz[r]=o.z,this.th[r]=o.th}this.buildFeatures()}at(t,e){return this.snap(this.segs[t].s0+e)}snap(t){return Math.round(t/this.ds)*this.ds}wrap(t){let e=this.length;return t%=e,t<0?t+e:t}evalAt(t){t=this.wrap(t);let e=this.segs[this.segs.length-1];for(let c of this.segs)if(t<c.s0+c.length){e=c;break}let n=t-e.s0;if(e.type==="S")return{x:e.x0+Math.cos(e.th0)*n,z:e.z0+Math.sin(e.th0)*n,th:e.th0};let s=Math.sign(e.ang),r=e.th0+s*n/e.r,[o,a]=yl(r);return{x:e.cx-o*e.r*s,z:e.cz-a*e.r*s,th:r}}buildFeatures(){let t=this.circuit.features((e,n)=>this.at(e,n),15);Object.assign(this,{plateaus:[],whoops:[],ramps:[],pits:[],mud:[],lakes:[],reserved:[]},t);for(let e of this.pits)e.water=!!e.liquid,e.top=this.baseAt((e.s0+e.s1)/2),e.respawnS=e.s1+10,e.bridges=e.bridges||(e.bridge?[e.bridge]:[]);this.patchKind=this.theme.patch||"mud",this.startLine=0}baseAt(t){t=this.wrap(t);let e=0;for(let n of this.plateaus)t>n.a&&t<n.d&&(e+=n.h*Tu(n.a,n.b,t)*(1-Tu(n.c,n.d,t)));for(let n of this.whoops)t>n.a&&t<n.b&&(e+=n.amp*(1-Math.cos(2*Math.PI*(t-n.a)/n.wl))/2);return e}surfaceAt(t,e){t=this.wrap(t);let n=this.baseAt(t),s=Math.abs(e)<=11?"road":"grass";for(let r of this.ramps)t>=r.s0&&t<r.s1&&e>=r.d0&&e<=r.d1&&(n+=r.h*(t-r.s0)/(r.s1-r.s0),s="ramp");for(let r of this.pits)if(t>=r.s0&&t<r.s1){for(let o of r.bridges)if(e>=o[0]&&e<=o[1])return{h:n+.3,type:"bridge",top:n};return{h:r.floor,type:r.water?"water":"pit",top:n,pit:r}}for(let r of this.lakes)if(t>=r.s0&&t<r.s1&&Math.abs(e)<=15)return{h:n,type:"ice"};if(s==="road")for(let r of this.mud){let o=t-r.s;if(o>this.length/2&&(o-=this.length),(o/r.rs)**2+((e-r.d)/r.rd)**2<1){s=this.patchKind==="mud"?"mud":"ice";break}}return{h:n,type:s}}inTunnel(t){return t=this.wrap(t),t>this.tunnel.s0&&t<this.tunnel.s1}pointAt(t,e=0){t=this.wrap(t);let n=t/this.ds,s=Math.floor(n)%this.N,r=(s+1)%this.N,o=n-Math.floor(n),a=this.th[s],l=this.th[r]-a;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;let h=a+l*o,u=this.px[s]+(this.px[r]-this.px[s])*o,d=this.pz[s]+(this.pz[r]-this.pz[s])*o,f=-Math.sin(h),g=Math.cos(h);return{x:u+f*e,z:d+g*e,th:h,rx:f,rz:g,tx:Math.cos(h),tz:Math.sin(h)}}project(t,e,n=-1){let s=this.N,r=this.px,o=this.pz,a=0,c=1/0;if(n>=0)for(let m=-40;m<=40;m++){let p=(n+m+s)%s,M=t-r[p],v=e-o[p],y=M*M+v*v;y<c&&(c=y,a=p)}if(n<0||c>1600){c=1/0;for(let m=0;m<s;m++){let p=t-r[m],M=e-o[m],v=p*p+M*M;v<c&&(c=v,a=m)}}let l=this.th[a],h=Math.cos(l),u=Math.sin(l),d=t-r[a],f=e-o[a],g=d*h+f*u,x=-d*u+f*h;return{s:this.wrap(a*this.ds+g),d:x,i:a,th:l}}curvatureAhead(t,e){let n=this.pointAt(t).th,r=this.pointAt(t+e).th-n;for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;return r}ahead(t,e){return this.wrap(e-t)}};function de(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ye,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Au(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=Au(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Au(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ae(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Cu=4;function Pu(i){Cu=i}function Xn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Pe(i,t,e,{repeat:n=!0,srgb:s=!0}={}){let r=document.createElement("canvas");r.width=i,r.height=t;let o=r.getContext("2d");e(o,i,t);let a=new cn(r);return s&&(a.colorSpace=be),n&&(a.wrapS=a.wrapT=wi),a.anisotropy=Cu,a}function sr(i,t,e,n,s,r,o,a){for(let c=0;c<n;c++){i.fillStyle=s[Math.floor(a()*s.length)];let l=r+a()*(o-r);i.globalAlpha=.25+a()*.5,i.fillRect(a()*t,a()*e,l,l)}i.globalAlpha=1}var Ru={},Iu=new WeakSet;function vl(i){return Iu.add(i),i}var Lu=i=>Iu.has(i),We=(i,t)=>Ru[i]||(Ru[i]=vl(t())),Du={id:"clasico",edge:["#5f7d34","#4e6b2a","#76923f","#6b5a35","#839b4a"],road:["#9a7048","#8a6240","#a87d52","#7c5638","#b58a5c","#6e4c30"],ruts:"#4a321e",lanes:!1,curb:["#d6261f","#f4f4f4"],grass:["#5c8a35","#4f7a2c","#6c9c3f","#7aa94a","#477026","#83a650"],dirt:["#7a5434","#6a4629","#8c6241","#5a3a22","#9b7150"],barrier:["#d42a20","#f2f2f2"],rock:["#6d6862","#5b5751","#7c776f","#4a4641","#8a857c"],patch:[[70,44,22],[84,55,30],[120,90,60]],water:["#2f6b5e","rgba(190,240,220,0.35)"]},Ne=Du;function Uu(i){Ne={...Du,...i}}var Ss=(i,t)=>We(i+"@"+Ne.id,t),Nu=()=>Ss("road",()=>Pe(512,512,(i,t,e)=>{let n=Xn(7);i.fillStyle=Ne.edge[0],i.fillRect(0,0,t,e),sr(i,t,e,4e3,Ne.edge.slice(1),1,4,n);let s=Math.round(t*(4/30)),r=Math.round(t*(26/30));if(i.save(),i.beginPath(),i.rect(s,0,r-s,e),i.clip(),i.fillStyle=Ne.road[0],i.fillRect(s,0,r-s,e),sr(i,t,e,9e3,Ne.road.slice(1),1,5,n),i.restore(),Ne.lanes){i.fillStyle="rgba(245,245,235,0.85)";for(let c of[1/3,2/3])i.fillRect(s+(r-s)*c-3,e*.1,6,e*.4);i.fillRect(s+6,0,5,e),i.fillRect(r-11,0,5,e)}i.globalAlpha=.18,i.fillStyle=Ne.ruts;for(let c of[.3,.38,.62,.7])for(let l=0;l<e;l+=2)i.fillRect(t*c+Math.sin(l*.05)*3,l,9,2);i.globalAlpha=1;let o=12,a=8;for(let c=0;c<a;c++)i.fillStyle=Ne.curb[c%2],i.fillRect(s-o,c*e/a,o,e/a),i.fillRect(r,c*e/a,o,e/a)})),Ou=()=>Ss("grass",()=>Pe(256,256,(i,t,e)=>{let n=Xn(3);if(i.fillStyle=Ne.grass[0],i.fillRect(0,0,t,e),sr(i,t,e,5e3,Ne.grass.slice(1),1,3,n),Ne.tiles){i.strokeStyle="rgba(0,0,0,0.18)",i.lineWidth=2;for(let s=0;s<=4;s++)i.beginPath(),i.moveTo(s*t/4,0),i.lineTo(s*t/4,e),i.moveTo(0,s*e/4),i.lineTo(t,s*e/4),i.stroke()}})),bo=()=>Ss("dirt",()=>Pe(256,256,(i,t,e)=>{let n=Xn(11);i.fillStyle=Ne.dirt[0],i.fillRect(0,0,t,e),sr(i,t,e,6e3,Ne.dirt.slice(1),1,5,n),i.globalAlpha=.15,i.fillStyle="#3b2615";for(let s=0;s<e;s+=16)i.fillRect(0,s+n()*6,t,2);i.globalAlpha=1})),Fu=()=>Ss("barrier",()=>Pe(256,64,(i,t,e)=>{for(let n=0;n<4;n++)i.fillStyle=Ne.barrier[n%2],i.fillRect(n*t/4,0,t/4,e);i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(0,e-8,t,8),i.fillStyle="rgba(255,255,255,0.35)",i.fillRect(0,0,t,4),i.fillStyle="rgba(0,0,0,0.3)";for(let n=0;n<4;n++)i.fillRect(n*t/4,0,2,e)})),_l=()=>We("planks",()=>Pe(256,256,(i,t,e)=>{let n=Xn(5),s=8;for(let r=0;r<s;r++){let o=120+Math.floor(n()*40);i.fillStyle=`rgb(${o+40},${o},${Math.floor(o*.55)})`,i.fillRect(0,r*e/s,t,e/s-3),i.fillStyle="rgba(60,35,10,0.3)";for(let a=0;a<6;a++)i.fillRect(0,r*e/s+n()*(e/s),t,1);i.fillStyle="#3a2410",i.fillRect(0,(r+1)*e/s-3,t,3)}i.fillStyle="rgba(255,200,0,0.85)";for(let r of[t*.25,t*.75])i.beginPath(),i.moveTo(r-40,e*.75),i.lineTo(r,e*.35),i.lineTo(r+40,e*.75),i.lineTo(r+22,e*.75),i.lineTo(r,e*.5),i.lineTo(r-22,e*.75),i.closePath(),i.fill()})),rr=()=>Ss("rock",()=>Pe(256,256,(i,t,e)=>{let n=Xn(21);i.fillStyle=Ne.rock[0],i.fillRect(0,0,t,e),sr(i,t,e,5e3,Ne.rock.slice(1),2,8,n),i.strokeStyle="rgba(30,28,25,0.5)",i.lineWidth=2;for(let s=0;s<14;s++){i.beginPath();let r=n()*t,o=n()*e;i.moveTo(r,o);for(let a=0;a<4;a++)r+=(n()-.5)*60,o+=(n()-.5)*60,i.lineTo(r,o);i.stroke()}})),Bu=()=>We("tread",()=>Pe(512,64,(i,t,e)=>{i.fillStyle="#1b1b1b",i.fillRect(0,0,t,e),i.fillStyle="#2e2e2e";let n=18;for(let s=0;s<n;s++){let r=s*t/n;i.beginPath(),i.moveTo(r,0),i.lineTo(r+14,0),i.lineTo(r+26,e/2),i.lineTo(r+14,e),i.lineTo(r,e),i.lineTo(r+12,e/2),i.closePath(),i.fill()}})),ku=()=>We("tireSide",()=>Pe(256,256,(i,t,e)=>{i.fillStyle="#1c1c1c",i.fillRect(0,0,t,e),i.strokeStyle="#333",i.lineWidth=6;for(let n of[118,100,84])i.beginPath(),i.arc(128,128,n,0,Math.PI*2),i.stroke();i.fillStyle="#444",i.font="bold 20px sans-serif",i.textAlign="center",i.save(),i.translate(128,128);for(let n=0;n<2;n++)i.rotate(Math.PI),i.fillText("MONSTRUO",0,-102);i.restore()},{repeat:!1})),Ml=()=>We("itemBox",()=>Pe(128,128,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,e);n.addColorStop(0,"#ff4fd8"),n.addColorStop(.35,"#ffd400"),n.addColorStop(.7,"#27e3ff"),n.addColorStop(1,"#7b5cff"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="rgba(255,255,255,0.9)",i.lineWidth=8,i.strokeRect(4,4,t-8,e-8),i.fillStyle="#fff",i.font="bold 90px Arial Black, sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=6,i.strokeStyle="rgba(0,0,0,0.35)",i.strokeText("?",t/2,e/2+6),i.fillText("?",t/2,e/2+6)},{repeat:!1})),Hu=()=>We("turbo",()=>Pe(128,256,(i,t,e)=>{i.fillStyle="#1a1206",i.fillRect(0,0,t,e);for(let n=0;n<3;n++){let s=n*(e/3)+10,r=i.createLinearGradient(0,s,0,s+70);r.addColorStop(0,"#ffe600"),r.addColorStop(1,"#ff5a00"),i.fillStyle=r,i.beginPath(),i.moveTo(t/2,s),i.lineTo(t-10,s+50),i.lineTo(t-34,s+50),i.lineTo(t/2,s+26),i.lineTo(34,s+50),i.lineTo(10,s+50),i.closePath(),i.fill()}})),zu=()=>We("net",()=>Pe(256,256,(i,t,e)=>{i.clearRect(0,0,t,e),i.strokeStyle="#f3e7c4",i.lineWidth=7;let n=4;for(let s=0;s<=n;s++)i.beginPath(),i.moveTo(0,s*e/n),i.lineTo(t,s*e/n),i.stroke(),i.beginPath(),i.moveTo(s*t/n,0),i.lineTo(s*t/n,e),i.stroke();i.fillStyle="#c9b98e";for(let s=0;s<=n;s++)for(let r=0;r<=n;r++)i.beginPath(),i.arc(s*t/n,r*e/n,7,0,Math.PI*2),i.fill()})),Eo=()=>We("checker",()=>Pe(128,128,(i,t,e)=>{for(let s=0;s<8;s++)for(let r=0;r<8;r++)i.fillStyle=(s+r)%2?"#111":"#f5f5f5",i.fillRect(s*t/8,r*e/8,t/8,e/8)})),So=(i,t="#d42a20",e="#fff")=>We("banner"+i+t,()=>Pe(1024,128,(n,s,r)=>{n.fillStyle=t,n.fillRect(0,0,s,r);let o=4,a=r/o;for(let c of[0,s-a*3])for(let l=0;l<3;l++)for(let h=0;h<o;h++)n.fillStyle=(l+h)%2?"#111":"#f5f5f5",n.fillRect(c+l*a,h*a,a,a);n.fillStyle=e,n.font="bold 84px Impact, Arial Black, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(i,s/2,r/2+4)},{repeat:!1})),Gu=()=>Ss("mud",()=>Pe(256,256,(i,t,e)=>{let n=Xn(9),[s,r,o]=Ne.patch,a=i.createRadialGradient(128,128,20,128,128,128);a.addColorStop(0,`rgba(${s},1)`),a.addColorStop(.75,`rgba(${r},0.95)`),a.addColorStop(1,`rgba(${r},0)`),i.fillStyle=a,i.fillRect(0,0,t,e),i.globalCompositeOperation="source-atop";for(let c=0;c<40;c++)i.fillStyle=`rgba(${o[0]+n()*40},${o[1]+n()*30},${o[2]+n()*20},0.35)`,i.beginPath(),i.ellipse(n()*t,n()*e,4+n()*14,2+n()*6,n()*3,0,Math.PI*2),i.fill()},{repeat:!1})),bl=(i=Ne.water)=>We("water"+i.join(),()=>Pe(256,256,(t,e,n)=>{let s=Xn(13);t.fillStyle=i[0],t.fillRect(0,0,e,n),t.strokeStyle=i[1],t.lineWidth=2;for(let r=0;r<60;r++){let o=s()*e,a=s()*n,c=8+s()*24;t.beginPath(),t.moveTo(o,a),t.quadraticCurveTo(o+c/2,a-4,o+c,a),t.stroke()}})),wo=()=>We("dot",()=>Pe(64,64,(i,t,e)=>{let n=i.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.45,"rgba(255,255,255,0.75)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)},{repeat:!1,srgb:!1})),Vu=(i,t,e)=>Pe(128,128,(n,s,r)=>{n.clearRect(0,0,s,r),n.fillStyle=e,n.beginPath(),n.arc(64,64,60,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(64,64,50,0,Math.PI*2),n.fill(),n.fillStyle=t,n.font="bold 72px Impact, Arial Black, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(i),64,68)},{repeat:!1}),Wu=()=>We("crowd",()=>Pe(256,128,(i,t,e)=>{let n=Xn(17);i.fillStyle="#3b3b48",i.fillRect(0,0,t,e);let s=["#e63946","#f1fa8c","#2a9df4","#ffffff","#ff9f1c","#2ec4b6","#9b5de5","#f15bb5"];for(let r=0;r<4;r++)for(let o=0;o<t;o+=9){i.fillStyle=s[Math.floor(n()*s.length)];let a=r*32+8+n()*4;i.fillRect(o+n()*3,a+8,7,14),i.fillStyle=["#f1c27d","#c68642","#8d5524","#ffdbac"][Math.floor(n()*4)],i.beginPath(),i.arc(o+4,a+4,4,0,Math.PI*2),i.fill()}})),To=()=>We("bark",()=>Pe(256,128,(i,t,e)=>{let n=Xn(31);i.fillStyle="#5b3a1e",i.fillRect(0,0,t,e);for(let s=0;s<70;s++)i.fillStyle=n()>.5?"rgba(40,24,10,0.6)":"rgba(120,84,50,0.4)",i.fillRect(0,n()*e,t,1+n()*3);for(let s=0;s<20;s++)i.fillStyle="rgba(30,18,8,0.7)",i.beginPath(),i.ellipse(n()*t,n()*e,6+n()*10,2+n()*3,0,0,Math.PI*2),i.fill()})),or=()=>We("rings",()=>Pe(128,128,(i,t,e)=>{i.fillStyle="#c9a26b",i.fillRect(0,0,t,e),i.strokeStyle="rgba(110,70,30,0.6)",i.lineWidth=2;for(let n=6;n<64;n+=7)i.beginPath(),i.arc(64,64,n,0,Math.PI*2),i.stroke();i.strokeStyle="#5b3a1e",i.lineWidth=10,i.beginPath(),i.arc(64,64,60,0,Math.PI*2),i.stroke()},{repeat:!1})),Xu=()=>We("barrel",()=>Pe(256,128,(i,t,e)=>{i.fillStyle="#c4161c",i.fillRect(0,0,t,e),i.fillStyle="#ffd200",i.fillRect(0,e*.38,t,e*.24),i.fillStyle="#111";for(let n=0;n<2;n++){let s=t*(.25+n*.5),r=e*.5;i.beginPath(),i.moveTo(s,r-13),i.lineTo(s+15,r+12),i.lineTo(s-15,r+12),i.closePath(),i.fill(),i.fillStyle="#ffd200",i.font="bold 18px sans-serif",i.textAlign="center",i.fillText("!",s,r+10),i.fillStyle="#111"}i.fillStyle="rgba(0,0,0,0.3)",i.fillRect(0,6,t,5),i.fillRect(0,e-11,t,5)}));function iy(i,t=160){let e=i.geometry.index?i.geometry.toNonIndexed():i.geometry,n=e.attributes.position,s=Object.keys(e.attributes),r=new Map;for(let a=0;a<n.count;a+=3){let c=(n.getX(a)+n.getX(a+1)+n.getX(a+2))/3,l=(n.getZ(a)+n.getZ(a+1)+n.getZ(a+2))/3,h=Math.floor(c/t)+","+Math.floor(l/t),u=r.get(h);u||(u=[],r.set(h,u)),u.push(a)}if(r.size<2)return[i];let o=[];for(let a of r.values()){let c=new ye;for(let h of s){let u=e.attributes[h],d=u.itemSize,f=new u.array.constructor(a.length*3*d),g=0;for(let x of a)for(let m=0;m<3;m++)for(let p=0;p<d;p++)f[g++]=u.array[(x+m)*d+p];c.setAttribute(h,new Ae(f,d,u.normalized))}c.computeBoundingSphere();let l=new z(c,i.material);l.castShadow=i.castShadow,l.receiveShadow=i.receiveShadow,l.renderOrder=i.renderOrder,l.position.copy(i.position),l.quaternion.copy(i.quaternion),l.scale.copy(i.scale),o.push(l)}return o}function Ro(i,t=3e3,e=160){for(let n of[...i.children]){if(!n.isMesh||n.isInstancedMesh||n.isSkinnedMesh)continue;let s=n.geometry;if((s.index?s.index.count:s.attributes.position.count)/3<t)continue;let o=iy(n,e);if(!(o.length<2)){i.remove(n);for(let a of o)i.add(a);s.dispose()}}}function Zu(i,t=new Set){i.updateMatrixWorld(!0);let e=i.matrixWorld.clone().invert(),n=new Map;i.traverse(r=>{if(!r.isMesh||r.isInstancedMesh||Array.isArray(r.material))return;for(let l=r;l&&l!==i;l=l.parent)if(t.has(l))return;let o=r.geometry,a=r.material.uuid+"|"+Object.keys(o.attributes).sort().join(",")+"|"+(o.index?"i":"n")+"|"+(r.castShadow?"s":""),c=n.get(a);c||(c={mat:r.material,cast:r.castShadow,list:[]},n.set(a,c)),c.list.push(r)});let s=new ie;for(let r of n.values()){if(r.list.length<2)continue;let o=r.list.map(l=>{let h=l.geometry.clone();for(let u of Object.keys(h.morphAttributes))delete h.morphAttributes[u];return h.clearGroups(),s.multiplyMatrices(e,l.matrixWorld),h.applyMatrix4(s),h}),a=de(o,!1);if(o.forEach(l=>l.dispose()),!a)continue;for(let l of r.list)l.parent.remove(l);let c=new z(a,r.mat);c.castShadow=r.cast,i.add(c)}}var qu=new WeakMap;function Yu(i){if(!i||!i.isMeshStandardMaterial)return i;let t=qu.get(i);return t||(t=new po({color:i.color,map:i.map,emissive:i.emissive,emissiveMap:i.emissiveMap,emissiveIntensity:i.emissiveIntensity,transparent:i.transparent,opacity:i.opacity,side:i.side,vertexColors:i.vertexColors,flatShading:i.flatShading,alphaTest:i.alphaTest,depthWrite:i.depthWrite,fog:i.fog}),t.color=i.metalness>.5?i.color.clone().multiplyScalar(1.25):i.color,t.name=i.name,qu.set(i,t),t)}function ws(i,t){i.traverse(e=>{if(!(!e.isMesh&&!e.isInstancedMesh))if(t){if(e.userData.richMaterial)return;let n=Array.isArray(e.material)?e.material.map(Yu):Yu(e.material);if(n===e.material)return;e.userData.richMaterial=e.material,e.material=n}else e.userData.richMaterial&&(e.material=e.userData.richMaterial,delete e.userData.richMaterial)})}function $u(i){let t=new Set,e=new Set,n=new Set,s=r=>{if(r){if(Array.isArray(r)){r.forEach(s);return}e.add(r);for(let o of Object.values(r))o&&o.isTexture&&n.add(o);if(r.uniforms)for(let o of Object.values(r.uniforms))o&&o.value&&o.value.isTexture&&n.add(o.value)}};i.traverse(r=>{r.geometry&&t.add(r.geometry),s(r.material),s(r.userData.richMaterial),r.isInstancedMesh&&r.dispose(),r.isLight&&r.shadow&&r.shadow.dispose()});for(let r of t)r.dispose();for(let r of e)r.dispose();for(let r of n)r!==i.environment&&!Lu(r)&&r.dispose()}var se=(i,t)=>({type:"S",len:i,...t}),Jt=(i,t)=>({type:"A",ang:i,r:t}),El=(i,t,e,n,s=16,r=3.5)=>({s0:i(e,n),s1:i(e,n+s),d0:-t,d1:t,h:r}),re=(i,t,e,n,s=9,r=5)=>({s:i(t,e),d:n,rs:s,rd:r}),Ju=[-8,-3,2,7],Ku=[-5.5,-.5,4.5,9],Sl=i=>i.map((t,e)=>[t,e%2?Ku:Ju]),qn=(i,t,e=3)=>{let n=t<0?[-9,-5.5,-7.3]:[5.5,9,7.3],s=[[i,[n[0],n[1]]],[i+3,[n[2]]]];return e>3&&s.push([i+6,[n[0]]]),s};function sy(i,t,e={}){return{plateaus:[{a:i(2,115),b:i(2,160),c:i(2,270),d:i(2,315),h:5},{a:i(9,130),b:i(9,172),c:i(9,275),d:i(9,318),h:4.5}],whoops:[{a:i(9,65),b:i(9,65)+54,amp:.75,wl:9}],ramps:[{s0:i(2,180),s1:i(2,196),d0:-t,d1:t,h:3.5},{s0:i(9,190),s1:i(9,206),d0:-t,d1:3,h:3.5}],pits:[{name:"foso",s0:i(2,196),s1:i(2,214),floor:e.bigPitLiquid?1.4:0,liquid:e.bigPitLiquid||null},{name:"puente",s0:i(9,206),s1:i(9,228),floor:1.4,liquid:e.liquid||"water",bridges:[[6.5,11.5]]}],mud:[{s:i(9,18),d:-5,rs:9,rd:5},{s:i(9,34),d:4,rs:10,rd:6},{s:i(9,52),d:-2,rs:8,rd:5.5},...(e.extraPatches||[]).map(([n,s,r])=>({s:i(n,s),d:r,rs:9,rd:5}))],tunnel:{s0:i(7,30),s1:i(7,250)}}}var ry={turbos:[[0,50,-6],[0,50,6],[2,166,-5],[2,166,5],[7,150,-5],[7,150,5],[9,178,-5],[11,120,0]],boxes:[[0,185],[2,250],[7,90],[9,300],[11,100]],rollers:[{seg:2,list:[[35,4.2,0],[60,3.6,.45],[85,4.8,.2]],sign:[2,5]}],balls:[{seg:5,frac:.25,phase:0},{seg:5,frac:.8,phase:Math.PI}],nets:[[11,45]],crush:[{seg:0,rows:[[100,[-8,-3,2,7]],[113,[-5.5,-.5,4.5,9]],[126,[-8,-3,2,7]],[139,[-5.5,-.5,4.5,9]]],sign:[0,80]}],barrels:[{seg:7,rows:[[190,[-8,-2,4,10]],[206,[-5,1,7]],[222,[-9,-2,5]]]}],patchSigns:[[9,2]]};function ju(i){let t=e=>e==null?[]:Array.isArray(e)?e:[e];return{turbos:i.turbos||[],boxes:i.boxes||[],rollers:t(i.rollers),balls:Array.isArray(i.balls)?i.balls:i.balls?i.balls.at.map((e,n)=>({seg:i.balls.seg,frac:e,phase:n%2?Math.PI:0})):[],nets:i.nets||(i.net?[i.net]:[]),crush:t(i.crush),barrels:t(i.barrels),patchSigns:i.patchSigns||(i.patchSign?[i.patchSign]:[])}}var Co=[{id:"clasico",name:"Valle Monstruo",short:"Valle",desc:"El circuito de siempre: fosos, troncos y cocodrilos.",layout:[se(230),Jt(90,70),se(330),Jt(90,65),Jt(-35,60),Jt(70,60),Jt(-35,60),se(290),Jt(90,70),se(0,{solve:"X"}),Jt(90,65),se(0,{solve:"Y"})],features:(i,t)=>sy(i,t,{liquid:"water"}),places:ry,theme:{tex:{},sky:[4034528,13625077],fog:[13625077,260,1300],hemi:[13625599,7035450,1],sun:[16773590,2.6],mountains:8163228,hills:7313989,trees:"mixed",rocks:9077882,tunnel:{inner:11577500,outer:12177292},crocs:!0,roller:"log",crush:"car",patch:"mud",patchName:"\xA1BARRO!",rollerName:"\xA1TRONCOS!",rollerHit:"\xA1TRONCO!"}},{id:"nieve",name:"Pico Helado",short:"Nieve",rev:2,desc:"R\xE1pido y resbaladizo: un lago helado con mu\xF1ecos de nieve, bolas gigantes y un salto sobre una grieta.",layout:[se(330),Jt(50,220),se(0,{solve:"X"}),Jt(130,110),se(450),Jt(-50,150),Jt(50,150),Jt(90,120),se(0,{solve:"Y"}),Jt(90,120),se(150)],features:(i,t)=>({lakes:[{s0:i(1,95),s1:i(2,40)}],ramps:[El(i,t,4,200,20,4.5)],pits:[{name:"grieta",s0:i(4,220),s1:i(4,246),floor:1.4,liquid:"ice"}],whoops:[{a:i(4,60),b:i(4,60)+54,amp:.75,wl:9}],mud:[re(i,0,200,-5),re(i,0,222,4),re(i,0,244,-2),re(i,4,400,0),re(i,5,70,5),re(i,6,45,-5),re(i,6,90,4)],tunnel:{s0:i(8,120),s1:i(8,220)}}),places:{turbos:[[0,40,-6],[0,40,6],[3,232,-5],[3,232,5],[4,150,0],[4,185,0],[7,150,0],[10,100,-6],[10,100,6]],boxes:[[0,110],[3,125],[4,330],[8,240],[6,120]],rollers:[{seg:2,list:[[90,4.2,0],[118,3.6,.45]],sign:[2,60]},{seg:8,list:[[45,4,.1],[72,4.6,.6]],sign:[7,170]}],balls:[],nets:[[10,60]],crush:[{seg:1,rows:[[115,[-8,-1,6]],[135,[-5,2,9]],[155,[-9,-2,5]],[175,[-6,1,8]]],sign:[1,45]},{seg:2,rows:[[8,[-7,0,7]],[26,[-4,3]]]}],barrels:[{seg:8,rows:[...qn(150,-1),...qn(185,1)]}],patchSigns:[[0,170],[5,35]]},theme:{tex:{id:"nieve",edge:["#e7edf3","#d5dee8","#f4f7fa","#c9d4df"],road:["#c9d2dc","#b9c4d0","#d8e0e8","#aab6c4","#e2e8ee","#9fadbd"],ruts:"#6d7e93",curb:["#2a6fdb","#f4f4f4"],grass:["#e9eef4","#dbe3ec","#f6f8fb","#cfd9e4","#ffffff"],dirt:["#d6dee7","#c4cfdb","#e6ecf2","#b7c4d2"],barrier:["#2a6fdb","#f2f2f2"],rock:["#7d8a99","#6b7787","#8f9bab","#5d6878","#a2adbb"],patch:[[170,215,240],[190,228,250],[230,245,255]],water:["#5d8fb0","rgba(235,250,255,0.5)"]},sky:[7315416,15266040],fog:[15134454,200,1050],hemi:[15660543,9280947,1.15],sun:[16774894,2.2],mountains:15265525,hills:14673903,trees:"snowpine",rocks:8227481,tunnel:{inner:12572910,outer:15660024},crocs:!1,snow:!0,roller:"snowball",crush:"snowman",patch:"ice",patchName:"\xA1HIELO!",rollerName:"\xA1BOLAS DE NIEVE!",rollerHit:"\xA1BOLA DE NIEVE!",dust:[.93,.95,.98]}},{id:"volcan",name:"Volc\xE1n Rugiente",short:"Volc\xE1n",rev:2,desc:"El m\xE1s largo: tres fosos de lava que saltar, rocas rodantes y un t\xFAnel lleno de barriles.",layout:[se(350),Jt(120,120),se(430),Jt(-60,150),Jt(150,100),se(0,{solve:"X"}),Jt(60,130),se(0,{solve:"Y"}),Jt(90,120),se(150)],features:(i,t)=>({plateaus:[{a:i(7,195),b:i(7,235),c:i(7,345),d:i(7,390),h:5}],whoops:[{a:i(3,40),b:i(3,40)+54,amp:.75,wl:9}],ramps:[El(i,t,2,330),{s0:i(5,220),s1:i(5,236),d0:-t,d1:2,h:3.5},El(i,t,7,262)],pits:[{name:"lava1",s0:i(2,346),s1:i(2,366),floor:1.4,liquid:"lava"},{name:"lava2",s0:i(5,236),s1:i(5,258),floor:1.4,liquid:"lava",bridges:[[6,11]]},{name:"lava3",s0:i(7,278),s1:i(7,298),floor:1.4,liquid:"lava"}],mud:[re(i,1,60,-4),re(i,1,95,5),re(i,1,130,-2),re(i,4,100,4),re(i,4,140,-5),re(i,4,180,0)],tunnel:{s0:i(2,30),s1:i(2,290)},reserved:[{kind:"lluvia de rocas",s0:i(7,20),s1:i(7,170)}]}),places:{turbos:[[0,40,-6],[0,40,6],[2,310,0],[4,240,0],[5,200,-7],[7,240,0],[9,60,-6],[9,60,6]],boxes:[[0,110],[2,410],[4,30],[7,185],[8,90]],rollers:[{seg:0,list:[[185,4.2,0],[212,3.6,.45]],sign:[0,150]},{seg:5,list:[[65,4,.15],[92,4.6,.55]],sign:[5,25]}],balls:[],nets:[],crush:[{seg:6,rows:Sl([30,43,56]),sign:[5,330]}],barrels:[{seg:2,rows:[...qn(80,-1),...qn(130,1),[180,[-2,2]],[183,[0]],...qn(230,-1,4)]}],patchSigns:[[1,25],[4,70]]},theme:{tex:{id:"volcan",edge:["#3b3533","#2e2927","#4a423f","#5a2a1a","#332d2b"],road:["#7a665c","#6a564c","#8a7468","#5e4c44","#9a8274","#54423a"],ruts:"#1e1714",curb:["#ff6a00","#1d1d1d"],grass:["#35302e","#2b2725","#403a37","#4c2a20","#2a2523","#5a3020"],dirt:["#4a3d37","#3a2f2a","#57483f","#2e2420"],barrier:["#1d1d1d","#ffb000"],rock:["#3d3836","#2f2b29","#4a4442","#262220","#56504c"],patch:[[40,36,34],[58,52,50],[110,100,96]],water:["#ff5a00","rgba(255,230,80,0.75)"]},sky:[4857888,14712904],fog:[10115642,200,1e3],hemi:[16762016,5914672,1.35],sun:[16764057,2.9],mountains:3813936,hills:3353642,trees:"dead",rocks:4012086,tunnel:{inner:6965822,outer:4142644},crocs:!1,volcano:!0,roller:"boulder",crush:"car",patch:"mud",patchName:"\xA1CENIZA!",rollerName:"\xA1ROCAS!",rollerHit:"\xA1ROCA!",dust:[.4,.36,.34]}},{id:"selva",name:"Selva Salvaje",short:"Selva",rev:2,desc:"Curvas y barro sin parar, troncos colgantes y un r\xEDo con cocodrilos: \xBFqu\xE9 puente eliges?",layout:[se(170),Jt(90,55),Jt(-60,55),Jt(120,55),Jt(-60,55),se(0,{solve:"X"}),Jt(90,55),se(130),Jt(-60,55),Jt(120,55),Jt(-60,55),se(50),Jt(90,55),se(50),Jt(-50,55),Jt(100,55),Jt(-50,55),se(50),Jt(90,55),se(0,{solve:"Y"})],features:(i,t)=>({pits:[{name:"r\xEDo",s0:i(7,45),s1:i(7,87),floor:1.4,liquid:"water",bridges:[[-11.5,-6.5],[6.5,11.5]]}],whoops:[{a:i(11,2),b:i(11,2)+45,amp:.75,wl:9}],mud:[re(i,1,30,-4),re(i,1,58,5),re(i,2,30,4),re(i,4,30,-4),re(i,8,30,3),re(i,9,25,-3),re(i,9,85,5),re(i,10,30,-4),re(i,14,25,4),re(i,15,30,-4),re(i,15,70,4),re(i,16,25,0)],tunnel:{s0:i(19,10),s1:i(19,95)}}),places:{turbos:[[0,30,-6],[0,30,6],[5,15,0],[7,110,0],[17,45,0],[19,150,-6],[19,150,6]],boxes:[[0,155],[7,120],[12,43],[19,125]],rollers:[{seg:0,list:[[95,4.2,0],[120,3.6,.45]],sign:[0,62]}],balls:[{seg:3,frac:.3,phase:0},{seg:3,frac:.78,phase:Math.PI},{seg:9,frac:.5,phase:Math.PI/2}],nets:[[5,50],[13,30]],crush:[{seg:17,rows:[[8,Ju],[21,Ku]],sign:[16,10]}],barrels:[{seg:19,rows:[...qn(35,-1),...qn(65,1)]}],patchSigns:[[0,165],[8,5],[14,2]]},theme:{tex:{id:"selva",edge:["#3f7a2a","#336b22","#4c8a33","#5a4a28","#2e5f1e"],road:["#8a4e2c","#7a4226","#9a5a34","#6c3a20","#a86640","#5e321b"],ruts:"#3a1d0e",curb:["#ffd400","#2e8b2e"],grass:["#3a7526","#2f661e","#478a30","#2a5c1a","#55973a"],dirt:["#6b4026","#5a341e","#7a4b2e","#4a2a17"],barrier:["#c8a050","#7a5a2a"],rock:["#7d7a5e","#6a684e","#8f8c6e","#5a5840","#9a9878"],water:["#3e6b3a","rgba(200,240,190,0.35)"]},sky:[4890832,14217424],fog:[12903104,170,900],hemi:[14221264,3824162,1],sun:[16774352,2.5],mountains:5208650,hills:4160053,trees:"jungle",rocks:7302226,tunnel:{inner:11049584,outer:6262600},crocs:!0,roller:"log",crush:"car",patch:"mud",patchName:"\xA1BARRO!",rollerName:"\xA1TRONCOS!",rollerHit:"\xA1TRONCO!",dust:[.6,.36,.22],swing:"log",ballHit:"\xA1TRONCAZO!"}},{id:"ciudad",name:"Gran Ciudad",short:"Ciudad",rev:2,desc:"Avenidas a toda velocidad, esquinas cerradas, obras, aceite y una alcantarilla con cocodrilos.",layout:[se(280),Jt(90,38),se(160),Jt(-90,38),se(140),Jt(90,38),se(210),Jt(90,38),se(0,{solve:"X"}),Jt(90,38),se(150),Jt(-90,38),se(120),Jt(90,38),se(0,{solve:"Y"}),Jt(90,38),se(150)],features:(i,t)=>({ramps:[{s0:i(8,330),s1:i(8,346),d0:-t,d1:3,h:3.5}],pits:[{name:"alcantarilla",s0:i(8,346),s1:i(8,368),floor:1.4,liquid:"water",bridges:[[6.5,11.5]]}],mud:[re(i,0,255,4),re(i,4,118,-4),re(i,6,195,3),re(i,8,425,-3),re(i,12,100,4),re(i,14,205,0)],tunnel:{s0:i(6,30),s1:i(6,180)},reserved:[{kind:"cruce",s0:i(8,255),s1:i(8,285)},{kind:"cruce",s0:i(10,60),s1:i(10,90)}]}),places:{turbos:[[0,40,-6],[0,40,6],[2,20,0],[4,30,-5],[4,30,5],[6,10,0],[8,30,-6],[8,30,6],[8,230,0],[10,20,0],[12,15,0],[14,30,-6],[14,30,6],[16,60,0]],boxes:[[0,200],[4,60],[8,240],[10,120],[14,150]],rollers:[{seg:8,list:[[60,4.2,0],[85,3.6,.45],[110,4.8,.2]],sign:[8,26]}],balls:[{seg:2,rel:55,phase:0},{seg:2,rel:105,phase:Math.PI}],nets:[[14,100]],crush:[{seg:0,rows:Sl([100,113,126,139]),sign:[0,75]},{seg:12,rows:Sl([30,43,56]),sign:[11,30]}],barrels:[{seg:8,rows:[...qn(160,-1,4),...qn(195,1,4)]}],patchSigns:[[0,225],[4,90],[8,400],[12,72],[14,175]]},theme:{tex:{id:"ciudad",edge:["#9a9a96","#8a8a86","#a8a8a4","#7e7e7a"],road:["#45474b","#3d3f43","#4e5054","#36383b","#55575b","#303235"],ruts:"#1c1d1f",lanes:!0,curb:["#d6261f","#f4f4f4"],grass:["#8d8f93","#84868a","#96989c","#7c7e82"],tiles:!0,dirt:["#8a7a68","#7a6a58","#9a8a78","#6a5a48"],barrier:["#f2f2f2","#ffcc00"],rock:["#9a9a9a","#8a8a8a","#a8a8a8","#7a7a7a"],patch:[[18,18,22],[30,30,38],[90,70,140]],water:["#3a5a5a","rgba(190,230,220,0.3)"]},sky:[4886752,14083826],fog:[13162210,260,1300],hemi:[14674687,5921374,1],sun:[16774368,2.5],mountains:null,hills:null,trees:"park",rocks:null,city:!0,tunnel:{inner:10526880,outer:7314005},crocs:!0,crocName:"\xA1COCODRILOS EN LA ALCANTARILLA!",roller:"pipe",crush:"car",patch:"oil",patchName:"\xA1ACEITE!",rollerName:"\xA1TUBER\xCDAS!",rollerHit:"\xA1TUBER\xCDA!",dust:[.62,.62,.64]}}],Po=i=>Co.find(t=>t.id===i)||Co[0];function Io(i,t){return t==="lava"?"\xA1LAVA!":t==="ice"?"\xA1AGUA HELADA!":t==="water"?i.crocs?i.crocName||"\xA1COCODRILOS!":"\xA1AL AGUA!":"\xA1FOSO!"}function un(i,t,e,n,s=null){let r=[],o=[],a=[],c=0;t.forEach(h=>{let u=i.pointAt(h),d=e(h);c=d.length,d.forEach(([f,g],x)=>{r.push(u.x+u.rx*f,g,u.z+u.rz*f);let[m,p]=n(h,x,f,g);o.push(m,p)})});for(let h=0;h<t.length-1;h++)if(!(s&&s(t[h],t[h+1])))for(let u=0;u<c-1;u++){let d=h*c+u,f=d+1,g=d+c,x=g+1;a.push(d,f,g,f,x,g)}let l=new ye;return l.setAttribute("position",new Qt(r,3)),l.setAttribute("uv",new Qt(o,2)),l.setIndex(a),l.computeVertexNormals(),l}function Ts(i,t,e){let n=[],s=Math.round(t/i.ds),r=Math.round(e/i.ds);for(let o=s;o<=r;o++)n.push(o*i.ds);return n}function _n(i,t,e,n=0,s=0){let r=t.pointAt(e,n);return i.position.set(r.x,s,r.z),i.rotation.set(0,Math.PI/2-r.th,0),i}function ed(i,t){let e=new Kt,n=i.length,s=(D,j)=>i.pits.some($=>D>=$.s0-.01&&j<=$.s1+.01),r=[-15,-13,-11,-8.25,-5.5,-2.75,0,2.75,5.5,8.25,11,13,15],o=[];for(let D=0;D<=i.N;D++)o.push(D*i.ds);let a=un(i,o,D=>{let j=i.baseAt(D)+.03;return r.map($=>[$,j])},(D,j,$)=>[($+15)/30,D/12],s),c=new K({map:Nu(),roughness:.95,metalness:0}),l=new z(a,c);l.receiveShadow=!0,e.add(l);let h=new K({map:Fu(),roughness:.8,side:le});for(let D of[-1,1]){let j=un(i,o,ht=>{let _t=i.baseAt(ht);return[[D*15,_t],[D*15,_t+1.3],[D*(15+.7),_t+1.3],[D*(15+.7),_t]]},(ht,_t)=>[ht/8,[0,1,.92,0][_t]]),$=new z(j,h);$.castShadow=!0,$.receiveShadow=!0,e.add($)}let u=new K({map:bo(),roughness:1,side:le}),d=[...i.plateaus.map(D=>[D.a-2,D.d+2]),...i.whoops.map(D=>[D.a-1,D.b+1])];for(let[D,j]of d){let $=Ts(i,D,j);for(let ht of[-1,1]){let _t=un(i,$,xt=>{let q=i.baseAt(xt),et=1.2+q*1.6;return[[ht*(15+.7),q],[ht*(15+2.2),q],[ht*(15+2.2+et),-.04]]},(xt,q)=>[q*.6,xt/8]),gt=new z(_t,u);gt.receiveShadow=!0,e.add(gt)}}let f=0,g=new K({map:bo(),roughness:1,side:le,color:10259066});for(let D of i.pits){let j=Ts(i,D.s0,D.s1),$=D.water?0:D.floor;for(let xt of[-1,1]){let q=un(i,j,et=>[[xt*15,$],[xt*15,i.baseAt(et)]],(et,R,ut,st)=>[et/6,st/6]);e.add(new z(q,g))}for(let xt of[D.s0,D.s1]){let q=i.pointAt(xt),et=i.baseAt(xt)+.03,R=new z(new ve(30,et-$),g);R.position.set(q.x,(et+$)/2,q.z),R.rotation.y=Math.PI/2-q.th,e.add(R)}let ht=D.water?new K({color:1911324,roughness:1}):new K({map:bo(),color:7034952,roughness:1}),_t=un(i,j,()=>[[-15,$+.02],[15,$+.02]],(xt,q,et)=>[et/8,xt/8]),gt=new z(_t,ht);if(gt.receiveShadow=!0,e.add(gt),D.water){let xt=D.liquid==="lava",q=D.liquid==="ice",et=bl(),R=xt?new K({map:et,color:16747056,emissive:16730624,emissiveMap:et,emissiveIntensity:1.4,roughness:.6}):new K({map:et,color:q?13625590:6267018,roughness:q?.3:.15,metalness:.1,transparent:!0,opacity:q?.93:.88}),ut=new z(un(i,j,()=>[[-15,D.floor],[15,D.floor]],(st,yt,dt)=>[dt/10,st/10]),R);if(xt&&f++<2){let st=new Wn(16738848,900,60,1.6),yt=i.pointAt((D.s0+D.s1)/2);st.position.set(yt.x,D.top+4,yt.z),e.add(st)}ut.userData.animTex=et,e.add(ut),D.waterMesh=ut}else{let xt=[],q=Qu(5);for(let R=0;R<22;R++){let ut=D.s0+2+q()*(D.s1-D.s0-4),st=(q()-.5)*2*13,yt=i.pointAt(ut,st),dt=new nn(.9,.38,8,16);dt.rotateX(Math.PI/2+(q()-.5)*.6),dt.translate(yt.x,$+.4+R%3*.3,yt.z),xt.push(dt)}let et=new z(de(xt),new K({color:1973790,roughness:.9}));et.castShadow=!0,e.add(et)}for(let xt of[-1,1]){let q=Io(i.theme,D.liquid),et=td(q,D.liquid==="lava"?"#d4380d":D.liquid==="ice"?"#2a6fdb":D.water?"#1f8a3a":"#e0a100");_n(et,i,D.s0-30,xt*18,i.baseAt(D.s0-30)),e.add(et)}}let x=new K({map:_l(),roughness:.85,side:le}),m=new K({color:5913116,roughness:.9,side:le});for(let D of i.ramps){let j=Ts(i,D.s0,D.s1),$=R=>i.baseAt(R)+D.h*(R-D.s0)/(D.s1-D.s0)+.06,ht=un(i,j,R=>[[D.d0,$(R)],[D.d1,$(R)]],(R,ut,st)=>[(st-D.d0)/(D.d1-D.d0)*((D.d1-D.d0)/8),(R-D.s0)/8]),_t=new z(ht,x);_t.receiveShadow=!0,_t.castShadow=!0,e.add(_t);for(let R of[D.d0,D.d1])Math.abs(R)>=15||e.add(new z(un(i,j,ut=>[[R,i.baseAt(ut)],[R,$(ut)]],(ut,st)=>[ut,st]),m));let gt=i.pointAt(D.s1,(D.d0+D.d1)/2),xt=D.h+.06,q=new z(new ve(D.d1-D.d0,xt),m);q.position.set(gt.x,i.baseAt(D.s1)+xt/2,gt.z),q.rotation.y=Math.PI/2-gt.th,e.add(q);let et=new z(new Ct(D.d1-D.d0,.15,.6),new K({color:16761856,emissive:3351040}));_n(et,i,D.s1-.3,(D.d0+D.d1)/2,i.baseAt(D.s1)+D.h+.05),e.add(et)}let p=new K({map:_l(),color:11569754,roughness:.9}),M=new K({color:14270602,side:le});for(let D of i.pits)for(let[j,$]of D.bridges){let ht=[],_t=Qu(3);for(let xt=D.s0-.5;xt<D.s1+.5;xt+=.9){let q=i.pointAt(xt,(j+$)/2),et=new Ct($-j+.4,.25,.75);et.rotateY(Math.PI/2-q.th+(_t()-.5)*.05),et.translate(q.x,D.top+.17,q.z),ht.push(et)}for(let xt of[j-.1,$+.1])for(let q=D.s0;q<=D.s1+.01;q+=(D.s1-D.s0)/4){let et=i.pointAt(q,xt),R=new Vt(.15,.18,2.4,6);R.translate(et.x,D.top+.6,et.z),ht.push(R)}let gt=new z(de(ht),p);gt.castShadow=!0,gt.receiveShadow=!0,e.add(gt);for(let xt of[j-.1,$+.1]){let q=Ts(i,D.s0,D.s1),et=un(i,q,R=>{let ut=(R-D.s0)/(D.s1-D.s0),st=D.top+1.6-Math.sin(ut*Math.PI)*.5;return[[xt,st],[xt,st+.12]]},(R,ut)=>[R,ut]);e.add(new z(et,M))}}for(let D of i.lakes){let j=Ts(i,D.s0,D.s1).filter((_t,gt,xt)=>gt%3===0||gt===xt.length-1),$=bl().clone();$.needsUpdate=!0;let ht=new z(un(i,j,_t=>{let gt=i.baseAt(_t)+.05;return[[-15,gt],[0,gt],[15,gt]]},(_t,gt,xt)=>[xt/14,_t/14]),new K({map:$,color:15398911,roughness:.12,metalness:.15,transparent:!0,opacity:.9,depthWrite:!1}));ht.renderOrder=1,ht.receiveShadow=!0,e.add(ht);for(let _t of[-1,1]){let gt=td(D.name||"\xA1LAGO HELADO!","#2a6fdb");_n(gt,i,D.s0-25,_t*18,i.baseAt(D.s0-25)),e.add(gt)}}let v=i.tunnel,y=Ts(i,v.s0,v.s1),C=15+.8,T=7,w=[];w.push([-C,0]);for(let D=0;D<=16;D++){let j=Math.PI-D/16*Math.PI;w.push([Math.cos(j)*C,T+Math.sin(j)*C*.85])}w.push([C,0]);let P=new K({map:rr(),roughness:1,side:le,color:i.theme.tunnel.inner}),b=new z(un(i,y,D=>w.map(([j,$])=>[j,$+i.baseAt(D)]),(D,j)=>[j/4,D/10]),P);b.receiveShadow=!0,e.add(b);let _=75,I=34,G=(D,j)=>{let $=Math.sin(D*12.9898+j*78.233)*43758.5453;return $-Math.floor($)},F=D=>{let j=Math.round(D/i.ds),$=[];for(let ht=0;ht<=20;ht++){let _t=-_+ht/20*2*_,gt=Math.abs(_t)/_,xt=I*(1-Math.pow(gt,1.6));xt+=(G(Math.floor(j/6),ht)-.5)*6*(1-gt),(ht===0||ht===20)&&(xt=-.5),$.push([_t,Math.max(-.5,xt)])}return $},X=y.filter((D,j)=>j%6===0||j===y.length-1),tt=new K({map:rr(),color:i.theme.tunnel.outer,roughness:1,flatShading:!0,side:le}),W=new z(un(i,X,F,(D,j)=>[j/3,D/20]),tt);W.castShadow=!0,W.receiveShadow=!0,e.add(W);for(let D of[X[0],X[X.length-1]]){let j=F(D),$=new hn;$.moveTo(j[0][0],j[0][1]);for(let[R,ut]of j.slice(1))$.lineTo(R,ut);$.lineTo(j[0][0],j[0][1]);let ht=new fs;ht.moveTo(w[0][0],w[0][1]-.3);for(let[R,ut]of w.slice(1))ht.lineTo(R,ut===0?-.3:ut);ht.lineTo(w[0][0],w[0][1]-.3),$.holes.push(ht);let _t=new Pi($),gt=i.pointAt(D),xt=new z(_t,tt);xt.position.set(gt.x,i.baseAt(D),gt.z),xt.rotation.y=Math.atan2(-gt.rz,gt.rx),e.add(xt);let q=[];for(let R=0;R<=12;R++){let ut=Math.PI-R/12*Math.PI,st=new Ct(2.2,2.2,1.6);st.rotateZ(ut-Math.PI/2),st.translate(Math.cos(ut)*(C+.6),T+Math.sin(ut)*(C*.85+.6),0),q.push(st)}for(let R of[-1,1]){let ut=new Ct(2.2,T,1.6);ut.translate(R*(C+.6),T/2,0),q.push(ut)}let et=new z(de(q),new K({color:9274488,roughness:.9,flatShading:!0}));et.position.copy(xt.position),et.rotation.y=xt.rotation.y,et.castShadow=!0,e.add(et)}let at=[];for(let D=v.s0+6;D<v.s1;D+=12)for(let j of[-6,6]){let $=i.pointAt(D,j),ht=new Ct(.6,.3,3);ht.rotateY(Math.PI/2-$.th);let _t=T+Math.sqrt(Math.max(0,C*C-j*j))*.85-.4;ht.translate($.x,i.baseAt(D)+_t,$.z),at.push(ht)}let J=new z(de(at),new Re({color:16771496}));e.add(J);let ft=[];for(let D=v.s0+3;D<v.s1;D+=6)for(let j of[-15+.05,15-.05]){let $=i.pointAt(D,j),ht=new Ct(.2,.25,.8);ht.rotateY(Math.PI/2-$.th),ht.translate($.x,i.baseAt(D)+.9,$.z),ft.push(ht)}e.add(new z(de(ft),new Re({color:6742271})));{let D=Eo().clone();D.repeat.set(5.5,.75),D.needsUpdate=!0;let j=new Kt;_n(j,i,0,0,.06);let $=new z(new ve(22,3),new K({map:D,roughness:.8}));$.rotation.x=-Math.PI/2,$.receiveShadow=!0,j.add($),e.add(j)}let mt=new Kt;_n(mt,i,0,0,0);let bt=new K({color:2763312,metalness:.6,roughness:.4});for(let D of[-1,1]){let j=new z(new Ct(1.2,12,1.2),bt);j.position.set(D*(15+1.5),6,0),j.castShadow=!0,mt.add(j)}let Ft=new z(new Ct(30+4.2,2.6,1.2),bt);Ft.position.y=11,Ft.castShadow=!0,mt.add(Ft);for(let D of[-1,1]){let j=new z(new ve(33,2.4),new Re({map:So("META  \xB7  MEGA MONSTRUOS"),side:wn}));j.position.set(0,11,D*.62),D<0&&(j.rotation.y=Math.PI),mt.add(j)}let jt=[],it=new z(new Ct(8,2.2,1),new K({color:1118481}));it.position.set(0,8.6,-.3),mt.add(it);for(let D=0;D<3;D++){let j=new z(new Ee(.75,16,12),new Re({color:3346705}));j.position.set((D-1)*2.4,8.6,-.85),mt.add(j),jt.push(j)}return e.add(mt),Ro(e,3e3),t.add(e),{group:e,lights:jt,lampMesh:J}}function Qu(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function td(i,t){let e=new Kt,n=document.createElement("canvas");n.width=256,n.height=128;let s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,256,128),s.strokeStyle="#111",s.lineWidth=10,s.strokeRect(5,5,246,118),s.fillStyle="#111",s.font="bold 40px Impact, Arial Black, sans-serif",s.textAlign="center",s.textBaseline="middle";for(let a=40;a>16&&s.measureText(i).width>228;a-=2)s.font=`bold ${a}px Impact, Arial Black, sans-serif`;s.fillText(i,128,66);let r=new cn(n);r.colorSpace=be;let o=new z(new ve(6,3),new K({map:r,side:le}));o.position.y=4.5,o.castShadow=!0,e.add(o);for(let a of[-2.4,2.4]){let c=new z(new Vt(.12,.12,4.5,6),new K({color:5592405}));c.position.set(a,2.25,.05),e.add(c)}return e}function id(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ui=null;function nd(){if(Ui)return Ui;let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,64,128);let e=id(77);for(let n=6;n<128;n+=16)for(let s=5;s<64;s+=15){let r=e()<.35;t.fillStyle=r?"#ffe9a8":"#2c3a4a",t.fillRect(s,n,9,10)}return Ui=vl(new cn(i)),Ui.colorSpace=be,Ui.wrapS=Ui.wrapT=wi,Ui}function sd(i,t){let e=id(42),n=t.theme,s=new kt(n.sky[0]),r=new kt(n.sky[1]);i.background=r.clone(),i.fog=new us(n.fog[0],n.fog[1],n.fog[2]);let o=new z(new Ee(1800,32,16),new Ge({side:Te,depthWrite:!1,fog:!1,uniforms:{top:{value:s},horizon:{value:r},sunDir:{value:new U(.5,.6,.3).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; varying vec3 vP;
        void main(){ float h = clamp(vP.y, 0.0, 1.0); vec3 c = mix(horizon, top, pow(h, 0.55));
        float s = max(0.0, dot(vP, sunDir)); c += vec3(1.0,0.9,0.6) * (pow(s, 400.0) * 1.5 + pow(s, 12.0) * 0.18);
        gl_FragColor = vec4(c, 1.0); }`}));o.renderOrder=-1,i.add(o);let a=new vs(n.hemi[0],n.hemi[1],n.hemi[2]);i.add(a);let c=new Di(n.sun[0],n.sun[1]);c.position.set(120,160,70),c.castShadow=!0,c.shadow.mapSize.set(2048,2048);let l=c.shadow.camera;l.left=-75,l.right=75,l.top=75,l.bottom=-75,l.near=10,l.far=500,c.shadow.bias=-5e-4,c.shadow.normalBias=.04,i.add(c),i.add(c.target);let h=Ou();h.repeat.set(220,220);let u=new z(new ve(5e3,5e3),new K({map:h,roughness:1,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=-.08,u.renderOrder=-.5,u.receiveShadow=!0,i.add(u);let d=[];for(let L=0;L<t.N;L+=6)d.push([t.px[L],t.pz[L]]);let f=(L,N)=>{let H=1/0;for(let[V,rt]of d){let Q=(L-V)**2+(N-rt)**2;Q<H&&(H=Q)}return Math.sqrt(H)},g=1/0,x=-1/0,m=1/0,p=-1/0;for(let[L,N]of d)g=Math.min(g,L),x=Math.max(x,L),m=Math.min(m,N),p=Math.max(p,N);let M=(g+x)/2,v=(m+p)/2,y=[];for(let L=t.tunnel.s0-10;L<=t.tunnel.s1+10;L+=8){let N=t.pointAt(L);y.push([N.x,N.z])}let C=(L,N)=>y.some(([H,V])=>(L-H)**2+(N-V)**2<6724);if(n.mountains!==null){let L=[];for(let H=0;H<40;H++){let V=H/40*Math.PI*2+e()*.1,rt=950+e()*350,Q=120+e()*220,lt=new Ce(140+e()*160,Q,7,1);lt.translate(M+Math.cos(V)*rt,Q/2-5,v+Math.sin(V)*rt),L.push(lt)}let N=new z(de(L),new K({color:n.mountains,flatShading:!0,roughness:1}));i.add(N)}if(n.volcano){let L=M+700,N=v-500,H=new Vt(70,330,380,14,1,!0);H.translate(L,185,N),i.add(new z(H,new K({color:3024934,flatShading:!0,roughness:1})));let V=new Re({color:16734736,fog:!1}),rt=new z(new ps(68,14).rotateX(-Math.PI/2),V);rt.position.set(L,372,N),i.add(rt);let Q=[];for(let lt=0;lt<6;lt++){let Pt=-Math.PI/2-.9+lt*.36+e()*.1,ct=new Ct(10+e()*8,330,2);ct.translate(0,-165,0),ct.rotateX(.82),ct.rotateY(-Pt+Math.PI/2),ct.translate(L+Math.cos(Pt)*72,370,N+Math.sin(Pt)*72),Q.push(ct)}i.add(new z(de(Q),V))}if(n.city){let L=[];for(let H=0;H<90;H++){let V=e()*Math.PI*2,rt=650+e()*500,Q=30+e()*50,lt=60+e()*260,Pt=new Ct(Q,lt,Q*(.6+e()*.6));Pt.translate(M+Math.cos(V)*rt,lt/2,v+Math.sin(V)*rt),L.push(Pt)}let N=nd().clone();N.needsUpdate=!0,N.repeat.set(3,8),i.add(new z(de(L),new K({map:N,color:9413560,roughness:.7})))}let T=[];for(let L=0;L<70;L++){let N=e()*Math.PI*2,H=520+e()*300,V=M+Math.cos(N)*H,rt=v+Math.sin(N)*H;if(f(V,rt)<120)continue;let Q=new Ee(40+e()*60,10,6,0,Math.PI*2,0,Math.PI/2);Q.scale(1,.35+e()*.4,1),Q.translate(V,-2,rt),T.push(Q)}if(T.length&&n.hills!==null){let L=new z(de(T),new K({color:n.hills,flatShading:!0,roughness:1}));L.receiveShadow=!0,i.add(L)}let w=n.trees,P=new ie,b=new Tn,_={mixed:650,snowpine:650,dead:260,jungle:900,park:140}[w]||400,I=[],G=0;for(;I.length<_&&G<25e3;){G++;let L=M+(e()-.5)*1300,N=v+(e()-.5)*1200,H=f(L,N);H<15+(w==="jungle"?10:18)||C(L,N)||n.city&&H>120||Math.abs(N)<75&&L>-120&&L<140||I.push([L,N,.7+e()*.8,e()])}let F=(L,N,H,V=1)=>{if(!H.length)return;let rt=new ds(L,N,H.length);H.forEach(([Q,lt,Pt],ct)=>{b.setFromAxisAngle(new U(0,1,0),(Q*7.3+lt*3.1)%6.28),P.compose(new U(Q,0,lt),b,new U(Pt,Pt*V,Pt)),rt.setMatrixAt(ct,P)}),rt.castShadow=!0,rt.receiveShadow=!0,i.add(rt)},X=new Vt(.4,.6,3,6);X.translate(0,1.5,0);let tt=new K({color:5913378,roughness:1}),W=new Ce(3.2,9,7);W.translate(0,7,0);let at=new ci(3.4,0);if(at.translate(0,5.6,0),w==="mixed"||w==="park"){let L=I.filter(H=>H[3]<(w==="park"?0:.55)),N=I.filter(H=>H[3]>=(w==="park"?0:.55));F(X,tt,I),F(W,new K({color:3107636,roughness:1,flatShading:!0}),L),F(at,new K({color:5214010,roughness:1,flatShading:!0}),N)}else if(w==="snowpine"){F(X,tt,I),F(W,new K({color:2906688,roughness:1,flatShading:!0}),I);let L=new Ce(2.1,4.6,7);L.translate(0,9.6,0),F(L,new K({color:16054524,roughness:.9,flatShading:!0}),I)}else if(w==="dead"){let L=[],N=new Vt(.25,.55,8,5);N.translate(0,4,0),L.push(N);for(let[H,V,rt]of[[4.5,.9,3],[6,-.8,2.5],[3.2,-1.1,2.2]]){let Q=new Vt(.1,.2,rt,4);Q.translate(0,rt/2,0),Q.rotateZ(V),Q.translate(0,H,0),L.push(Q)}F(de(L),new K({color:1972760,roughness:1,flatShading:!0}),I)}else if(w==="jungle"){let L=I.filter(lt=>lt[3]<.45),N=I.filter(lt=>lt[3]>=.45),H=new Vt(.3,.5,11,6);H.translate(0,5.5,0),F(H,new K({color:8018490,roughness:1}),L);let V=[];for(let lt=0;lt<7;lt++){let Pt=new Ct(.9,.15,5.5);Pt.translate(0,0,2.6),Pt.rotateX(.35),Pt.rotateY(lt/7*Math.PI*2),Pt.translate(0,11,0),V.push(Pt)}F(de(V),new K({color:3115562,roughness:1,flatShading:!0}),L);let rt=new Vt(.6,1,7,6);rt.translate(0,3.5,0),F(rt,tt,N);let Q=new ci(5,0);Q.scale(1.3,.75,1.3),Q.translate(0,9,0),F(Q,new K({color:2386218,roughness:1,flatShading:!0}),N)}if(n.city){let L=[],N=0;for(;L.length<220&&N<3e4;){N++;let Pt=M+(e()-.5)*1100,ct=v+(e()-.5)*1e3;f(Pt,ct)<55||C(Pt,ct)||Math.abs(ct)<90&&Pt>-140&&Pt<160||L.push([Pt,ct])}let H=new Ct(1,1,1);H.translate(0,.5,0);let V=[12109008,14207152,10465448,13150360,11057368,14735560],rt=nd(),Q=new ds(H,new K({map:rt,roughness:.8}),L.length),lt=new kt;L.forEach(([Pt,ct],Rt)=>{let zt=18+e()*22,Gt=18+e()*22,It=20+e()*70;b.setFromAxisAngle(new U(0,1,0),e()*.3),P.compose(new U(Pt,0,ct),b,new U(zt,It,Gt)),Q.setMatrixAt(Rt,P),Q.setColorAt(Rt,lt.setHex(V[Rt%V.length]))}),Q.castShadow=!0,Q.receiveShadow=!0,i.add(Q)}let J=new ms(1.6,0),ft=J.attributes.position,mt=new U,bt=n.rocks===null?0:n.trees==="dead"?360:160,Ft=new ds(J,new K({color:n.rocks??9077882,flatShading:!0,roughness:1}),bt);for(let L=0;L<bt;L++){let N,H;do N=M+(e()-.5)*1100,H=v+(e()-.5)*1e3;while(f(N,H)<21||C(N,H));let V=.5+e()*1.6;b.setFromEuler(new en(e()*3,e()*3,e()*3)),P.compose(new U(N,0,H),b,new U(V,V*.7,V));let rt=1/0;for(let Q=0;Q<ft.count;Q++)rt=Math.min(rt,mt.fromBufferAttribute(ft,Q).applyMatrix4(P).y);P.elements[13]=-.08-rt,Ft.setMatrixAt(L,P)}Ft.castShadow=!0,i.add(Ft);let jt=new K({map:Wu(),roughness:.9}),it=new K({color:10134445,roughness:.8}),D=new K({color:12597547,roughness:.6,side:le}),j=[];for(let[L,N]of[[-95,70],[-15,70],[65,60]]){let H=new Kt;_n(H,t,L+N/2,-24,0);for(let rt=0;rt<6;rt++){let Q=new z(new Ct(2.2,1.2+rt*1.2,N),it);Q.position.set(rt*2.2,(1.2+rt*1.2)/2,0),Q.castShadow=!0,Q.receiveShadow=!0,H.add(Q);let lt=jt.map.clone();lt.needsUpdate=!0,lt.repeat.set(N/12,.5),lt.offset.set(e(),rt%2?0:.5);let Pt=new z(new ve(N,1.3),new K({map:lt,roughness:.9}));Pt.rotation.y=-Math.PI/2,Pt.position.set(rt*2.2-1.12,1.2+rt*1.2+.55,0),H.add(Pt),j.push(Pt)}let V=new z(new Ct(15,.4,N+2),D);V.position.set(6,12,0),V.rotation.z=-.12,V.castShadow=!0,H.add(V);for(let rt of[-N/2,0,N/2]){let Q=new z(new Ct(.5,12,.5),it);Q.position.set(13,6,rt),H.add(Q)}i.add(H)}let $=[],ht=[],_t=[15087942,16766474,2792948,3065014,15817653,16752412],gt=[];for(let L=20;L<t.length;L+=45)if(!(t.inTunnel(L)||t.inTunnel(L+20)||t.inTunnel(L-20)))for(let N of[-1,1]){let H=t.pointAt(L,N*(15+2.2)),V=t.baseAt(L),rt=new Vt(.08,.08,6,5);rt.translate(H.x,V+3,H.z),ht.push(rt);let Q=new ye;Q.setAttribute("position",new Qt([0,0,0,0,-1.6,0,2.4,-.8,0],3)),Q.computeVertexNormals();let lt=new z(Q,new K({color:_t[Math.floor(e()*_t.length)],side:le}));lt.position.set(H.x,V+6,H.z),lt.rotation.y=e()*6,lt.userData.phase=e()*6,i.add(lt),gt.push(lt)}i.add(new z(de(ht),new K({color:14540253,metalness:.5})));let xt=new Vt(1.05,1.05,.6,12,1,!1),q=[];for(let L of t.segs){if(L.type!=="A")continue;let N=L.ang>0?-1:1;for(let H=6;H<L.length-4;H+=4.5){let V=L.s0+H;if(t.inTunnel(V))continue;let rt=t.pointAt(V,N*(15+1.9));for(let Q=0;Q<3;Q++){let lt=xt.clone();lt.translate(rt.x,t.baseAt(V)+.32+Q*.62,rt.z),q.push(lt)}}}let et=new z(de(q),new K({color:1907997,roughness:.9}));et.castShadow=!0,i.add(et),Ro(i,3e3);let R=[];for(let L=0;L<26;L++){let N=M+(e()-.5)*2200,H=v+(e()-.5)*2200,V=260+e()*140;for(let rt=0;rt<5;rt++){let Q=new ci(25+e()*25,1);Q.scale(1.6,.6,1),Q.translate(N+(rt-2)*35+e()*10,V+e()*12,H+e()*25),R.push(Q)}}let ut=n.volcano?[3814452,6961706]:[16777215,12572394],st=new z(de(R),new K({color:ut[0],emissive:ut[1],emissiveIntensity:.55,flatShading:!0,roughness:1,fog:!1}));i.add(st);let yt=new Kt,dt=new z(new Ee(8,20,14),new K({color:15921906,roughness:.5}));dt.scale.set(2.6,1,1),yt.add(dt);let Ht=new z(new ve(30,4),new Re({map:So("MEGA MONSTRUOS"),side:le}));Ht.position.set(0,-2,8.05),yt.add(Ht);let St=Ht.clone();St.position.z=-8.05,St.rotation.y=Math.PI,yt.add(St);for(let L of[-4,4]){let N=new z(new Ct(6,5,.4),new K({color:13904416}));N.position.set(-18,0,0),N.rotation.x=L>0?0:Math.PI/2,yt.add(N)}let A=new z(new Ct(6,2,2.5),new K({color:3355443}));A.position.y=-8.5,yt.add(A),i.add(yt);let E=0;return{sun:c,hemi:a,sky:o,baseHemi:a.intensity,baseSun:c.intensity,setShadowSize(L){c.shadow.mapSize.x!==L&&(c.shadow.mapSize.set(L,L),c.shadow.map&&(c.shadow.map.dispose(),c.shadow.map=null))},focus(L){c.target.position.set(L.x,L.y,L.z),c.position.set(L.x+120,L.y+160,L.z+70),c.target.updateMatrixWorld()},update(L){E+=L;for(let H of gt)H.rotation.y+=Math.sin(E*3+H.userData.phase)*.01;for(let H=0;H<j.length;H++)j[H].position.y+=Math.sin(E*9+H*1.7)*.006;let N=E*.03;yt.position.set(M+Math.cos(N)*380,120,v+Math.sin(N)*300),yt.rotation.y=-N-Math.PI/2+Math.PI}}}var sn=[{id:"trituradora",size:1,style:"pickup",name:"Trituradora",num:1,color:14099998,accent:1907997,rim:14211288,deco:"saw",stats:{speed:3,accel:3,handling:3,weight:3},desc:"Equilibrada, con dos sierras que giran en el morro. Ideal para empezar."},{id:"megalodon",size:1.15,style:"shark",name:"Megalod\xF3n",num:2,color:2060241,accent:15921906,rim:16777215,deco:"shark",stats:{speed:5,accel:2,handling:2,weight:3},desc:"La velocidad punta m\xE1s alta, pero cuesta hacerle girar."},{id:"escorpion",size:.9,style:"buggy",name:"Escorpi\xF3n",num:3,color:8311585,accent:1776411,rim:2236962,deco:"scorpion",stats:{speed:2,accel:4,handling:5,weight:1},desc:"Sale disparado y gira como nadie. Ligero: los golpes le afectan m\xE1s."},{id:"mamut",size:1.32,style:"hauler",name:"Mamut",num:4,color:9132587,accent:15918793,rim:13214826,deco:"mammoth",stats:{speed:3,accel:2,handling:2,weight:5},desc:"Pesad\xEDsimo: troncos y empujones apenas le frenan."},{id:"relampago",size:.82,style:"wedge",name:"Rel\xE1mpago",num:5,color:16763904,accent:1118481,rim:1118481,deco:"bolt",stats:{speed:4,accel:4,handling:3,weight:1},desc:"R\xE1pido y \xE1gil, pero ligero como una pluma."},{id:"dragon",size:1.12,style:"dragon",name:"Drag\xF3n",num:6,color:8072383,accent:3794489,rim:3794489,deco:"dragon",stats:{speed:4,accel:3,handling:2,weight:3},desc:"Escamas, cuernos y alas. Corre mucho y aguanta bien los golpes."}],rd={pickup:{shell:[[-2.35,0],[2.45,0],[2.55,.45],[2.35,.85],[.95,.98],[.35,1.78],[-.85,1.82],[-1.05,1],[-2.35,1.02]],glass:[[.99,1],[.4,1.76],[-.8,1.76],[-.98,1.04]],w:2.1,roofY:1.82,roofZ:-.25,noseZ:2.48,tailZ:-2.45,hlY:.62,tlY:.75,bar:!0,exhaust:!0},shark:{shell:[[-2.6,0],[2.75,0],[2.95,.25],[1.7,.85],[.55,1.6],[-.95,1.7],[-1.4,1.05],[-2.6,1.1]],glass:[[1.45,.98],[.55,1.58],[-.9,1.66],[-1.15,1.1]],w:2.15,roofY:1.68,roofZ:-.3,noseZ:2.9,tailZ:-2.7,hlY:.35,tlY:.8,bar:!1,exhaust:!0},buggy:{shell:[[-2.05,0],[2.3,0],[2.45,.45],[1.2,.75],[-1.2,.75],[-1.35,1.15],[-2.05,1.15]],glass:null,w:1.9,roofY:2.15,roofZ:-.1,noseZ:2.4,tailZ:-2.1,hlY:.45,tlY:.85,bar:!0,exhaust:!1,cage:!0},hauler:{shell:[[-2.4,0],[2.55,0],[2.6,1.05],[1.45,1.15],[1.15,2.15],[-.85,2.2],[-1.15,1.25],[-2.4,1.3]],glass:[[1.2,1.2],[1,2],[-.7,2.06],[-.95,1.3]],w:2.45,roofY:2.2,roofZ:.1,noseZ:2.6,tailZ:-2.45,hlY:.75,tlY:.95,bar:!0,exhaust:!0,grille:!0},wedge:{shell:[[-2.4,0],[2.6,0],[2.7,.25],[.95,.72],[.15,1.32],[-1,1.34],[-1.55,.92],[-2.4,.95]],glass:[[.92,.75],[.18,1.3],[-.95,1.3],[-1.35,.95]],w:2.05,roofY:1.34,roofZ:-.4,noseZ:2.7,tailZ:-2.45,hlY:.3,tlY:.7,bar:!1,exhaust:!1,spoiler:!0},dragon:{shell:[[-2.45,0],[2.5,0],[2.75,.5],[2.05,.95],[.85,1.05],[.3,1.88],[-.9,1.92],[-1.2,1.12],[-2.45,1.2]],glass:[[.88,1.07],[.35,1.85],[-.85,1.86],[-1.12,1.15]],w:2.2,roofY:1.92,roofZ:-.3,noseZ:2.6,tailZ:-2.55,hlY:.65,tlY:.9,bar:!1,exhaust:!0,eyes:!0}},li=1.1,ar=.95,wl=1.6,Lo=1.75,Tl=2,Do=null;function oy(){if(Do)return Do;let i=new Vt(li,li,ar,22,1);i.rotateZ(Math.PI/2);let t=[];for(let f=0;f<14;f++){let g=f/14*Math.PI*2;for(let x of[-1,1]){let m=new Ct(ar*.48,.22,.3);m.translate(x*ar*.26,li+.03,x*.08),m.rotateX(g+x*.12),t.push(m)}}let e=de(t),n=new K({color:2236962,roughness:.95}),s=new K({map:Bu(),roughness:.95}),r=new K({map:ku(),roughness:.9}),o=new Vt(.58,.58,ar+.06,18);o.rotateZ(Math.PI/2);let a=new Vt(.2,.26,ar+.2,8);a.rotateZ(Math.PI/2);let c=new K({color:13620182,metalness:.9,roughness:.25}),l=new K({color:1842207,metalness:.4,roughness:.6}),h=new K({color:1053980,metalness:.6,roughness:.15}),u=new K({color:16777198,emissive:16773808,emissiveIntensity:1.2}),d=new K({color:16720418,emissive:11141120,emissiveIntensity:1});return Do={tire:i,lugGeo:e,rubber:n,tread:s,side:r,rimGeo:o,hubGeo:a,chrome:c,dark:l,glass:h,headlight:u,taillight:d},Do}function od(i,t,e=.08){let n=new hn;n.moveTo(i[0][0],i[0][1]);for(let[r,o]of i.slice(1))n.lineTo(r,o);n.closePath();let s=new gs(n,{depth:t,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:4});return s.translate(0,0,-t/2),s.rotateY(-Math.PI/2),s}var me=(i,t,e=!0)=>{let n=new z(i,t);return n.castShadow=e,n};function Uo(i){let t=oy(),e=new Kt,n=new Kt;n.position.y=Tl,e.add(n);let s=new K({color:i.color,metalness:.2,roughness:.42}),r=new K({color:i.accent,metalness:.25,roughness:.45}),o=new K({color:i.rim,metalness:.8,roughness:.3}),a=rd[i.style]||rd.pickup,c=me(od(a.shell,a.w),s);if(n.add(c),a.glass){let x=me(od(a.glass,a.w+.2,0),t.glass,!1);n.add(x)}let l=me(new Ct(1.7,.45,4.6),t.dark);l.position.y=-.3,n.add(l);for(let x of[-1,1]){let m=me(new Ct(.03,.22,4.4),r,!1);m.position.set(x*(a.w/2+.09),.5,.05),n.add(m);let p=new z(new ve(.85,.85),new K({map:Vu(i.num,"#"+new kt(i.color).getHexString(),"#"+new kt(i.accent).getHexString()),transparent:!0}));p.position.set(x*(a.w/2+.11),.55,-1.6),p.rotation.y=x*Math.PI/2,n.add(p)}let h=me(new Ct(.5,.03,1.15),r,!1);h.position.set(0,a.roofY+.09,a.roofZ),a.glass&&n.add(h);for(let x of[-1,1]){let m=me(new Ct(.45,.25,.1),t.headlight,!1);m.position.set(x*.7,a.hlY,a.noseZ),n.add(m);let p=me(new Ct(.35,.22,.1),t.taillight,!1);p.position.set(x*.75,a.tlY,a.tailZ),n.add(p)}if(a.bar){let x=me(new Ct(1.7,.16,.25),t.dark);x.position.set(0,a.roofY+.16,a.roofZ+.5),n.add(x);for(let m=0;m<4;m++){let p=me(new Ct(.28,.2,.08),t.headlight,!1);p.position.set(-.6+m*.4,a.roofY+.16,a.roofZ+.65),n.add(p)}}if(a.exhaust){let x=i.style==="hauler";for(let m of[-1,1]){let p=me(new Vt(x?.16:.11,x?.18:.13,x?2.6:1.6,10),t.chrome);p.position.set(m*(a.w/2-.2),x?2.2:1.55,x?.95:-1.2),n.add(p)}}if(a.cage){let x=(v,y,C=.08)=>{let T=new U(...v),w=new U(...y),P=T.distanceTo(w),b=me(new Vt(C,C,P,8),t.chrome);b.position.copy(T).add(w).multiplyScalar(.5),b.quaternion.setFromUnitVectors(new U(0,1,0),w.clone().sub(T).normalize()),n.add(b)},m=a.w/2-.15,p=a.roofY;for(let v of[-m,m])x([v,.75,1.15],[v*.85,p,.2]),x([v*.85,p,.2],[v*.85,p,-1]),x([v*.85,p,-1],[v,1.15,-1.4]);x([-m*.85,p,.2],[m*.85,p,.2]),x([-m*.85,p,-1],[m*.85,p,-1]);let M=me(new Ct(.8,.9,.25),t.dark);M.position.set(0,1.2,-.75),M.rotation.x=-.15,n.add(M)}if(a.grille){let x=me(new Ct(1.8,.85,.12),t.chrome);x.position.set(0,.55,a.noseZ+.02),n.add(x);for(let m=0;m<6;m++){let p=me(new Ct(.1,.7,.06),t.dark,!1);p.position.set(-.75+m*.3,.55,a.noseZ+.09),n.add(p)}}if(a.spoiler){let x=me(new Ct(a.w+.3,.08,.6),r);x.position.set(0,1.75,-2.15),x.rotation.x=.12,n.add(x);for(let m of[-.7,.7]){let p=me(new Ct(.1,.8,.25),r);p.position.set(m,1.33,-2.1),n.add(p)}}if(a.eyes){let x=new K({color:11206502,emissive:6749986,emissiveIntensity:1.6});for(let m of[-1,1]){let p=me(new Ee(.16,10,8),x,!1);p.scale.set(1.4,.7,.6),p.position.set(m*.55,.88,a.noseZ-.12),n.add(p)}}let u=me(new Ct(2,.18,.18),t.chrome);u.position.set(0,.2,a.noseZ+.14),n.add(u);for(let x of[-.6,.6]){let m=me(new Ct(.14,.6,.14),t.chrome);m.position.set(x,.35,a.noseZ+.14),n.add(m)}let d=[];for(let x of[Lo,-Lo]){let m=me(new Vt(.16,.16,wl*2,8),t.dark);m.rotation.z=Math.PI/2,m.position.set(0,li,x),e.add(m);let p=me(new Ee(.38,10,8),t.dark);p.position.set(0,li,x),e.add(p);for(let M of[wl,-wl]){let v=new Kt;v.position.set(M,li,x);let y=new Kt;v.add(y),y.add(me(t.tire,[t.tread,t.side,t.side])),y.add(me(t.lugGeo,t.rubber));let C=me(t.rimGeo,o,!1);y.add(C);let T=me(t.hubGeo,t.chrome,!1);y.add(T),e.add(v),d.push({pivot:v,spin:y,front:x>0})}}let f=[];for(let x of[Lo-.35,-Lo+.35])for(let m of[-1,1]){let p=me(new Vt(.11,.11,1,8),new K({color:i.accent===1118481?16763904:16742912,metalness:.5,roughness:.4}));p.position.set(m*.95,0,x),p.rotation.z=m*.35,e.add(p),f.push(p)}let g=[];return ay(i,n,s,r,t,g),e.traverse(x=>{x.isMesh&&(x.receiveShadow=!1)}),Zu(n,new Set(g.map(x=>x.obj))),e.scale.setScalar(i.size||1),{root:e,body:n,wheels:d,shocks:f,spinners:g,paint:s}}function ay(i,t,e,n,s,r){let o=new K({color:16052712,roughness:.5}),a=new K({color:855309,roughness:.4});switch(i.deco){case"saw":{let c=new hn,l=18,h=.62,u=.78;for(let f=0;f<l;f++){let g=f/l*Math.PI*2,x=(f+.6)/l*Math.PI*2;c[f===0?"moveTo":"lineTo"](Math.cos(g)*h,Math.sin(g)*h),c.lineTo(Math.cos(x)*u,Math.sin(x)*u)}c.closePath();let d=new gs(c,{depth:.06,bevelEnabled:!1});d.translate(0,0,-.03),d.rotateY(Math.PI/2);for(let f of[-.55,.55]){let g=new z(d,s.chrome);g.position.set(f,.35,2.75),g.castShadow=!0,t.add(g),r.push({obj:g,axis:"x",speed:25})}for(let f=0;f<6;f++){let g=new z(new Ce(.12,.32,4),o);g.position.set(-.75+f*.3,.72,2.53),g.rotation.x=Math.PI,t.add(g)}break}case"shark":{let c=new hn;c.moveTo(-.7,0),c.quadraticCurveTo(-.2,.6,-.55,1.45),c.quadraticCurveTo(.3,.7,.55,0),c.closePath();let l=new gs(c,{depth:.14,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});l.translate(0,0,-.07),l.rotateY(-Math.PI/2);let h=new z(l,e);h.position.set(0,1.84,-.35),h.castShadow=!0,t.add(h);let u=new z(new Ct(1.9,.35,.08),new K({color:9048080}));u.position.set(0,.35,2.5),t.add(u);for(let d=0;d<9;d++)for(let f of[1,-1]){let g=new z(new Ce(.09,.22,4),o);g.position.set(-.85+d*.21,.35+f*.08,2.55),g.rotation.x=f>0?Math.PI:0,t.add(g)}for(let d of[-1,1]){let f=new z(new Ee(.22,12,8),o);f.position.set(d*1.08,.72,1.85),t.add(f);let g=new z(new Ee(.12,10,8),a);g.position.set(d*1.25,.72,1.9),t.add(g);for(let x=0;x<3;x++){let m=new z(new Ct(.03,.45,.06),new K({color:801914}));m.position.set(d*1.13,.55,1.2-x*.22),t.add(m)}}break}case"scorpion":{let c=new Zs(new U(0,1.05,-2),new U(0,3.4,-3.4),new U(0,4.6,-.6),new U(0,3.3,.45)),l=12;for(let f=0;f<l;f++){let g=f/(l-1),x=c.getPoint(g),m=.46-g*.24,p=new z(new Ee(m,12,10),f%2?n:e);p.position.copy(x),p.castShadow=!0,t.add(p)}let h=c.getPoint(1),u=c.getTangent(1),d=new z(new Ce(.2,.8,8),a);d.position.copy(h).addScaledVector(u,.45),d.quaternion.setFromUnitVectors(new U(0,1,0),u),t.add(d);for(let f of[-1,1]){let g=new z(new Ct(.28,.28,.9),n);g.position.set(f*.75,.45,2.85),t.add(g);for(let x of[-1,1]){let m=new z(new Ce(.14,.7,6),e);m.position.set(f*.75+x*.16,.45,3.45),m.rotation.x=Math.PI/2,m.rotation.z=-x*.35,t.add(m)}}break}case"mammoth":{let c=new K({color:16051414,roughness:.4});for(let l of[-1,1]){let h=new z(new nn(.85,.13,8,18,Math.PI*.85),c);h.rotation.y=Math.PI/2,h.rotation.z=Math.PI*1.08,h.position.set(l*.75,.6,2.55+.75),h.castShadow=!0,t.add(h);let u=new z(new Ee(.75,12,10),new K({color:5913116,roughness:.9}));u.scale.set(.15,1,.8),u.position.set(l*1.15,1,1.3),t.add(u)}for(let l=0;l<5;l++){let h=new z(new Vt(.22-l*.025,.24-l*.025,.4,10),e);h.position.set(0,.7-l*.28,2.65+Math.sin(l*.5)*.25),h.rotation.x=.3-l*.12,t.add(h)}for(let l=0;l<16;l++){let h=new z(new Ce(.1,.45,5),new K({color:4860946}));h.position.set(-.6+l%4*.4,1.95,-.7+Math.floor(l/4)*.3),h.rotation.x=-.5,t.add(h)}break}case"bolt":{let c=new hn;c.moveTo(1.4,.95),c.lineTo(.2,.45),c.lineTo(.55,.45),c.lineTo(-1.6,.05),c.lineTo(-.2,.6),c.lineTo(-.55,.6),c.closePath();let l=new Pi(c);for(let u of[-1,1]){let d=new z(l,n);d.rotation.y=u*Math.PI/2,d.position.set(u*1.17,.05,0),t.add(d)}let h=new z(new Ct(2.4,.08,.7),n);h.position.set(0,2,-2.15),h.rotation.x=-.15,h.castShadow=!0,t.add(h);for(let u of[-.8,.8]){let d=new z(new Ct(.1,.95,.3),n);d.position.set(u,1.5,-2.15),t.add(d)}break}case"dragon":{for(let c=0;c<8;c++){let l=new z(new Ce(.17,.55,6),n),h=.25-c*.33,u=h>-.9?1.88:1.08;l.position.set(0,u+.25,h),l.rotation.x=-.4,t.add(l)}for(let c of[-1,1]){let l=new z(new Ce(.16,.9,8),new K({color:15656652}));l.position.set(c*.65,2.15,.35),l.rotation.x=-.9,l.rotation.z=-c*.3,t.add(l);let h=new hn;h.moveTo(0,0),h.lineTo(1.6,.5),h.lineTo(1.3,.05),h.lineTo(1.7,-.2),h.lineTo(1.1,-.35),h.lineTo(1.2,-.7),h.lineTo(.2,-.5),h.closePath();let u=new z(new Pi(h),new K({color:i.accent,side:le,emissive:670218}));u.position.set(c*1.1,1.1,-1.4),u.rotation.y=c>0?0:Math.PI,u.rotation.z=.5,u.rotation.order="YZX",u.castShadow=!0,t.add(u);let d=new z(new Ee(.15,10,8),new K({color:16772608,emissive:11175936}));d.position.set(c*.6,.86,2.3),t.add(d)}break}}}function cr(i,{wheelSpin:t,steer:e,comp:n,dt:s}){for(let o of i.wheels)o.spin.rotation.x+=t,o.front&&(o.pivot.rotation.y=e*.45);i.body.position.y=Tl-n;let r=Tl-n-.15;for(let o of i.shocks){let a=r-1.1500000000000001;o.scale.y=Math.max(.3,a/Math.cos(.35)),o.position.y=1.15+a/2}for(let o of i.spinners)o.obj.rotation[o.axis]+=o.speed*s}var ad=24,Al=2,cd=2.3,cy={road:1,ramp:1,bridge:.92,grass:.74,mud:.5,ice:1,pit:1,water:1},hi=(i,t,e)=>i<t?t:i>e?e:i;var No=class{constructor(t,e,n=!1){this.def=t,this.track=e,this.isPlayer=n,this.size=t.size||1;let s=t.stats;this.maxSpeed=31+s.speed*2.3,this.accel=8+s.accel*2.3,this.turnRate=1.1+s.handling*.17,this.grip=3.2+s.handling*.7,this.mass=.8+s.weight*.3,this.stunMul=1.3-s.weight*.1,this.speedMul=1,this.parts=Uo(t),this.mesh=this.parts.root,this.events=[],this.reset()}reset(){this.x=0,this.y=0,this.z=0,this.th=0,this.vx=0,this.vz=0,this.vy=0,this.onGround=!0,this.groundH=0,this.wasGround=!0,this.idx=-1,this.s=0,this.d=0,this.prevS=0,this.lap=0,this.checkpoint=!0,this.finished=!1,this.finishTime=0,this.lapStart=0,this.lapTimes=[],this.place=1,this.boost=0,this.stun=0,this.spin=0,this.spinT=0,this.spinDur=0,this.state="ok",this.stateTimer=0,this.fall=null,this.comp=0,this.compV=0,this.pitch=0,this.roll=0,this.item=null,this.itemRoll=0,this.invuln=0,this.blink=0,this.hitCool=0,this.wrongT=0,this.stuckT=0,this.airT=0,this.surf="road",this.control={steer:0,throttle:0,brake:0},this.vF=0,this.accelVis=0,this.steerVis=0,this.lastSlopeV=0,this.netCaught=null,this.cool={}}get speed(){return Math.hypot(this.vx,this.vz)}get progress(){return this.lap*this.track.length+this.s}placeAt(t,e,n=0){let s=this.track.pointAt(t,e);this.x=s.x,this.z=s.z,this.th=s.th;let r=this.track.project(this.x,this.z,-1);this.idx=r.i,this.s=r.s,this.d=r.d,this.prevS=r.s;let o=this.track.surfaceAt(this.s,this.d);this.y=o.h,this.groundH=o.h,this.vx=Math.cos(this.th)*n,this.vz=Math.sin(this.th)*n,this.vy=0,this.onGround=!0,this.wasGround=!0,this.state="ok",this.stun=0,this.spinDur=0,this.spin=0,this.pitch=0,this.roll=0,this.syncMesh(0)}respawn(t,e=0,n=10){for(let s of this.track.pits)this.track.ahead(s.s0-4,t)<s.s1-s.s0+8&&(t=s.respawnS);this.placeAt(t,hi(e,-8,8),n),this.invuln=1.6,this.blink=1.6,this.events.push({type:"respawn"})}hit({dirX:t=0,dirZ:e=0,push:n=0,up:s=0,speedMul:r=1,stun:o=0,kind:a="hit"}){if(this.invuln>0||this.hitCool>0||this.state!=="ok")return!1;let c=this.stunMul;return this.vx*=r,this.vz*=r,this.vx+=t*n*c,this.vz+=e*n*c,s>0&&(this.vy=Math.max(this.vy,s*Math.min(1.2,c)),this.onGround=!1),o>0&&(this.stun=Math.max(this.stun,o*c),this.spinDur=this.stun,this.spinT=0),this.hitCool=.9,this.events.push({type:a}),!0}catchNet(t){return this.state!=="ok"||this.invuln>0?!1:(this.state="caught",this.stateTimer=1.1,this.netCaught=t,this.events.push({type:"net"}),!0)}useItem(t){if(!this.item||this.itemRoll>0||this.state!=="ok")return;let e=this.item;this.item=null,e==="nitro"?(this.boost=Math.max(this.boost,2.2),this.events.push({type:"nitro"})):e==="jump"?(this.vy=Math.max(this.vy,this.onGround?13:10),this.onGround=!1,this.wasGround=!1,this.invuln=Math.max(this.invuln,.6),this.events.push({type:"jump"})):e==="wave"?(t.shockwave(this),this.events.push({type:"wave"})):(e==="tire"||e==="barrel"||e==="rocket")&&(t.projectiles.launch(e,this),this.events.push({type:e==="rocket"?"rocket":"throw"}))}update(t,e,n){let s=this.track;if(this.control=e,this.prevS=this.s,this.boost=Math.max(0,this.boost-t),this.invuln=Math.max(0,this.invuln-t),this.blink=Math.max(0,this.blink-t),this.hitCool=Math.max(0,this.hitCool-t),this.stun>0&&(this.stun=Math.max(0,this.stun-t)),this.spinDur>0)if(this.spinT+=t,this.spinT>=this.spinDur)this.spinDur=0,this.spin=0;else{let w=this.spinT/this.spinDur;this.spin=Math.PI*2*(1-(1-w)*(1-w))}if(this.itemRoll>0&&(this.itemRoll-=t,this.itemRoll<=0&&(this.itemRoll=0,this.item=n.rollItem(this),this.events.push({type:"gotItem"}))),this.state==="fallen"){this.updateFallen(t);return}let r=this.stun>0||this.state==="caught",o=Math.cos(this.th),a=Math.sin(this.th),c=this.vx*o+this.vz*a,l=r?0:e.steer;if(this.steerVis+=(l-this.steerVis)*Math.min(1,t*10),this.onGround){let w=hi(Math.abs(c)/9,0,1),P=hi(Math.abs(c)/this.maxSpeed,0,1.3),b=l*this.turnRate*w*(1-.32*P)*(this.surf==="mud"?.8:this.surf==="ice"?.6:1);this.th+=b*t*(c>=-.5?1:-1)}else this.th+=l*.9*t;o=Math.cos(this.th),a=Math.sin(this.th);let h=-a,u=o;c=this.vx*o+this.vz*a;let d=this.vx*h+this.vz*u,f=c;if(this.onGround){let w=cy[this.surf]??1,P=this.maxSpeed*this.speedMul*w*(this.boost>0?1.32:1),b=r?0:e.throttle,_=r?0:e.brake;if(b>0&&c<P){let G=this.accel*b*(this.boost>0?2.2:1)*(c<0?2:1)*(1-.35*hi(c/P,0,1));c=Math.min(P,c+G*t)}if(_>0&&(c>1?c-=32*_*t:c=Math.max(-13,c-this.accel*.6*_*t)),c>P&&(c=Math.max(P,c-((c-P)*1.3+2)*t)),b===0&&_===0){let G=(2.5+Math.abs(c)*.04+(r?8:0))*t;c=Math.abs(c)<=G?0:c-Math.sign(c)*G}let I=this.grip*(this.surf==="mud"?.35:this.surf==="ice"?.1:1)*(r?.35:1);d*=Math.exp(-I*t)}else c*=Math.exp(-.05*t);this.state==="caught"&&(c*=Math.exp(-7*t),d*=Math.exp(-7*t),this.stateTimer-=t,this.stateTimer<=0&&(this.state="ok",this.netCaught=null,this.invuln=.8,this.blink=.8)),this.accelVis+=((c-f)/Math.max(t,1e-4)-this.accelVis)*Math.min(1,t*6),this.vF=c,this.vx=o*c+h*d,this.vz=a*c+u*d;let g=this.x,x=this.z,m=this.idx,p=this.s,M=this.d;this.x+=this.vx*t,this.z+=this.vz*t;let v=s.project(this.x,this.z,this.idx);this.idx=v.i,this.s=v.s,this.d=v.d;let y=15-Al*this.size;if(Math.abs(this.d)>y){let w=Math.sign(this.d),P=Math.abs(this.d)-y,b=s.pointAt(this.s);this.x-=b.rx*P*w,this.z-=b.rz*P*w,this.d=w*y;let _=(this.vx*b.rx+this.vz*b.rz)*w;_>0&&(this.vx-=b.rx*w*_*1.35,this.vz-=b.rz*w*_*1.35,_>5&&this.events.push({type:"scrape",v:_}));let I=Math.exp(-.8*t);this.vx*=I,this.vz*=I}let C=s.surfaceAt(this.s,this.d);if(C.h-this.y>.9){let w=s.surfaceAt(this.s,M).h-this.y>.9;this.x=g,this.z=x,this.idx=m,this.s=p,this.d=M;let P=s.pointAt(this.s);if(w){let b=this.vx*P.tx+this.vz*P.tz;this.vx-=P.tx*b*1.2,this.vz-=P.tz*b*1.2}else{let b=this.vx*P.rx+this.vz*P.rz;this.vx-=P.rx*b*1.3,this.vz-=P.rz*b*1.3}this.speed>6&&this.events.push({type:"wall"}),C=s.surfaceAt(this.s,this.d)}let T=C.h;if(this.vy-=ad*t,this.y+=this.vy*t,this.y<=T){if(this.onGround){let w=hi((T-this.groundH)/t,-30,16);this.vy=Math.max(this.vy,w);let P=w-this.lastSlopeV;P>4&&(this.compV-=P*.01),this.lastSlopeV=w}else{let w=-this.vy;w>6&&(this.compV-=Math.min(w,22)*.11,this.events.push({type:"land",v:w})),this.vy=0}this.y=T,this.onGround=!0,this.airT=0}else this.onGround=!1,this.lastSlopeV=0,this.airT+=t;this.groundH=T,this.surf=C.type,(C.type==="pit"||C.type==="water")&&this.y<C.top-1.4&&(this.state="fallen",this.stateTimer=C.type==="water"?2.1:1.7,this.fall={pit:C.pit,water:C.type==="water",floor:C.h,splashed:!1},this.events.push({type:C.type==="water"?"fallWater":"fallPit",liquid:C.pit?.liquid})),this.updateLap(n),this.updateMisc(t,s,v)}updateFallen(t){this.stateTimer-=t;let e=this.fall;this.vx*=Math.exp(-3*t),this.vz*=Math.exp(-3*t),this.x+=this.vx*t,this.z+=this.vz*t,this.vy-=ad*t,this.y+=this.vy*t,e.water?(this.y<e.floor&&!e.splashed&&(e.splashed=!0,this.events.push({type:"splash"}),this.vy=-2),this.y<e.floor&&(this.vy=Math.max(this.vy,-1.2))):this.y<e.floor&&(this.vy<-6&&this.events.push({type:"land",v:-this.vy}),this.y=e.floor,this.vy=0),this.pitch+=(.5-this.pitch)*Math.min(1,t*2),this.syncMesh(t),this.stateTimer<=0&&this.respawn(e.pit.respawnS,0,12)}updateLap(t){let e=this.track.length;this.prevS>e*.75&&this.s<e*.25?this.checkpoint&&(this.lap++,this.checkpoint=!1,t.onLap(this)):this.prevS<e*.25&&this.s>e*.75&&(this.lap--,this.checkpoint=!0),this.s>e*.4&&this.s<e*.6&&(this.checkpoint=!0)}updateMisc(t,e,n){if(Math.cos(this.th-n.th)<-.4&&this.vF>3?this.wrongT+=t:this.wrongT=0,this.control.throttle>0&&this.speed<2&&this.state==="ok"?this.stuckT+=t:this.stuckT=0,this.compV+=(-95*this.comp-9*this.compV)*t,this.comp+=this.compV*t,this.comp<-.3&&(this.comp=-.3,this.compV=0),this.comp>.55&&(this.comp=.55,this.compV=0),this.onGround){let r=this.th-n.th,o=Math.cos(r),a=Math.sin(r),c=(x,m)=>{let p=e.surfaceAt(this.s+x*o-m*a,this.d+x*a+m*o);return p.type==="pit"||p.type==="water"?p.top:p.h},l=c(1.9,0),h=c(-1.9,0),u=c(0,-1.6),d=c(0,1.6),f=Math.atan2(l-h,3.8)+hi(this.accelVis*.004,-.06,.06),g=Math.atan2(u-d,3.2)+hi(-this.steerVis*this.vF*.0025,-.07,.07);this.pitch+=(f-this.pitch)*Math.min(1,t*12),this.roll+=(g-this.roll)*Math.min(1,t*10)}else{let r=hi(Math.atan2(this.vy,Math.max(8,Math.abs(this.vF)))*.8,-.55,.45);this.pitch+=(r-this.pitch)*Math.min(1,t*2.5),this.roll+=(0-this.roll)*Math.min(1,t*3)}this.syncMesh(t)}syncMesh(t){let e=this.mesh;e.position.set(this.x,this.y,this.z),e.rotation.order="YXZ",e.rotation.set(-this.pitch,Math.PI/2-this.th+this.spin,this.roll);let n=this.blink>0&&this.state==="ok"?Math.floor(this.blink*12)%2===0:!0;e.visible=n,cr(this.parts,{wheelSpin:(this.onGround?this.vF:this.control.throttle*30)*t/li,steer:this.steerVis,comp:this.comp,dt:t})}};var Ni=(i,t)=>i+Math.random()*(t-i),ly=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},Oo=class{constructor(t,e,{skill:n=1,preferBridge:s=!1}={}){this.v=t,this.track=e,this.skill=n,this.lane=Ni(-6,6),this.laneTarget=this.lane,this.laneTimer=Ni(2,6),this.preferBridge=s,this.itemDelay=0,this.noise=0,this.noiseT=0,this.rollerTry=null,this.rollerBest=null,this.pitPick=null,this.careful=!1}pitLanes(t){if(t.aiLanes!==void 0)return t.aiLanes;let e=this.track.ramps.filter(s=>Math.abs(s.s1-t.s0)<1.5);if(e.some(s=>s.d0<=-11&&s.d1>=11))return t.aiLanes=null;let n=t.bridges.map(([s,r])=>({d:(s+r)/2,w:r-s,bridge:!0}));for(let s of e){let r=s.d0<=-15?s.d1-8:s.d1>=15?s.d0+8:(s.d0+s.d1)/2;n.push({d:r,w:Math.min(s.d1,11)-Math.max(s.d0,-11),bridge:!1})}return t.aiLanes=n.length?n:null}laneAt(t){let e=this.track;for(let n of e.pits){let s=this.pitLanes(n);if(!s)continue;let r=e.ahead(t,n.s0),o=e.ahead(n.s1,t);if(r<110||o<6){if(this.pitPick?.p!==n){let a=s.filter(l=>l.bridge===this.preferBridge);a.length||(a=s);let c=a[0];for(let l of a)Math.abs(l.d-this.lane)<Math.abs(c.d-this.lane)&&(c=l);this.pitPick={p:n,lane:c.d,narrow:c.w<8}}return this.pitPick.lane}}for(let n of e.mud)if((e.ahead(t,n.s)<n.rs+12||e.ahead(n.s,t)<n.rs)&&Math.abs(this.laneTarget-n.d)<n.rd+2.5)return n.d>0?Math.max(-9,n.d-n.rd-3):Math.min(9,n.d+n.rd+3);return this.laneTarget}control(t,e){let n=this.v,s=this.track;this.laneTimer-=t,this.laneTimer<=0&&(this.laneTimer=Ni(3,7),this.laneTarget=Ni(-7,7));for(let M of e.vehicles){if(M===n)continue;let v=s.ahead(n.s,M.s);v>0&&v<14&&Math.abs(M.d-this.lane)<3.2&&(this.laneTarget=M.d>0?M.d-5:M.d+5,this.laneTarget=Math.max(-9,Math.min(9,this.laneTarget)))}for(let M of e.projectiles.list){if(M.kind==="rocket"||M.owner===n)continue;let v=s.ahead(n.s,M.s);v>2&&v<30&&Math.abs(M.d-this.lane)<3.5&&Math.random()<this.skill*.6&&(this.laneTarget=Math.max(-9,Math.min(9,M.d>0?M.d-5.5:M.d+5.5)))}let r=Math.max(0,n.vF),o=this.pitPick;this.careful=!!o?.narrow&&(s.ahead(n.s,o.p.s0)<70||s.ahead(o.p.s0,n.s)<o.p.s1-o.p.s0+2);let a=this.careful?7+r*.3:9+r*.45,c=this.rollerLane(e,r),l=c??this.laneAt(n.s+a);this.lane+=(l-this.lane)*Math.min(1,t*(c===null&&!this.careful?1.2:3));let h=s.pointAt(n.s+a,this.lane);this.noiseT-=t,this.noiseT<=0&&(this.noiseT=Ni(.3,1.2),this.noise=Ni(-.12,.12)/this.skill);let u=Math.atan2(h.z-n.z,h.x-n.x),d=ly(u-n.th),f=Math.max(-1,Math.min(1,d*2.6+(this.careful?0:this.noise))),g=1,x=0;this.careful&&r>27&&(g=0,x=r>31?.5:0),Math.abs(d)>1.7?(g=0,x=1,f=-Math.sign(d)):Math.abs(d)>.55&&r>18&&(g=.3),Math.abs(s.curvatureAhead(n.s,25))>.9&&r>30&&(g=Math.min(g,.5));let p=!1;if(n.item==="jump"&&this.rocketClose(e))p=!0;else if(n.item){if(this.itemDelay-=t,this.itemDelay<=0)if(n.item==="nitro")p=Math.abs(s.curvatureAhead(n.s,70))<.3;else if(n.item==="jump"){if(p=e.obstacles.dangerAhead(n.s,12+r*.15)&&n.onGround,!p)for(let M of s.pits)s.ahead(n.s,M.s0)<6&&n.onGround&&r<24&&!M.bridges.some(([y,C])=>n.d>y-.5&&n.d<C+.5)&&(p=!0)}else n.item==="wave"?p=e.vehicles.some(M=>M!==n&&M.state==="ok"&&Math.hypot(M.x-n.x,M.z-n.z)<16):n.item==="tire"?p=e.vehicles.some(M=>M!==n&&M.state==="ok"&&s.ahead(n.s,M.s)<45&&Math.abs(M.d-n.d)<3.5):n.item==="barrel"?p=e.vehicles.some(M=>M!==n&&M.state==="ok"&&s.ahead(M.s,n.s)<30)||this.itemDelay<-6:n.item==="rocket"&&(p=n.place>1)}else this.itemDelay=Ni(.8,3);return{steer:f,throttle:g,brake:x,item:p}}rollerLane(t,e){let n=this.v,s=this.track,r=t.obstacles,o=r.logs.map(h=>{let u=s.ahead(n.s,h.s);return u>s.length/2&&(u-=s.length),{o:h,ds:u,reach:h.len/2+2.6}}).filter(h=>h.ds>-h.reach&&h.ds<80);if(!o.length)return this.rollerTry=null,null;if(this.rollerTry==null&&(this.rollerTry=Math.random()<.5*this.skill*(o[0].o.ball?1.5:1)),!this.rollerTry)return null;let a=Math.max(e,10),c=null,l=1/0;for(let h=-10;h<=10;h++){let u=Math.abs(h-n.d)*.05-(h===this.rollerBest?.3:0);for(let{o:d,ds:f,reach:g}of o){let x=Math.max(0,(f-g)/a-.2),m=(f+g)/a+.2;for(let p=x;p<=m;p+=.05){let M=n.d+Math.max(-7*p,Math.min(7*p,h-n.d));if(Math.abs(r.rollerD(d,p)-M)<d.r+2*n.size+.6){u+=10;break}}}u<l&&(l=u,c=h)}return this.rollerBest=c,c}rocketClose(t){let e=this.v,n=this.track;for(let s of t.projectiles.list){if(s.kind!=="rocket"||s.target!==e||s.dead)continue;let r=n.ahead(s.s,e.s);if(!(r>n.length/2||(r-2.6*e.size)/Math.max(1,s.speed-e.vF)>.35)&&(s.aiDodge===void 0&&(s.aiDodge=Math.random()<.4*this.skill),s.aiDodge))return!0}return!1}};var An=(i,t)=>i+Math.random()*(t-i),Fo=class{constructor(t,e,n){this.track=t,this.game=n,this.group=new Kt,e.add(this.group),this.time=0,this.turbos=[],this.boxes=[],this.logs=[],this.balls=[],this.nets=[],this.cars=[],this.barrels=[],this.crocs=[],this.build()}rel(t,e){let n=this.track.length,s=(t-e)%n;return s>n/2&&(s-=n),s<-n/2&&(s+=n),s}holder(t,e=0,n=0){let s=new Kt;return _n(s,this.track,t,e,this.track.baseAt(t)+n),this.group.add(s),s}build(){let t=this.track,e=(C,T)=>t.at(C,T),n=ju(t.circuit.places),s=t.theme,r=new Re({map:Hu(),transparent:!0,opacity:.95}),o=new ve(4.5,7);o.rotateX(-Math.PI/2),o.rotateY(Math.PI);let a=n.turbos.map(([C,T,w])=>[e(C,T),w]);for(let[C,T]of a)this.holder(C,T,.07).add(new z(o,r)),this.turbos.push({s:C,d:T});this.turboTex=r.map;let c=new Ct(1.8,1.8,1.8),l=new K({map:Ml(),emissive:16777215,emissiveMap:Ml(),emissiveIntensity:.35,transparent:!0,opacity:.92,roughness:.2});for(let C of n.boxes.map(([T,w])=>e(T,w)))for(let T of[-8,-4,0,4,8]){let w=new z(c,l);w.castShadow=!0;let P=t.pointAt(C,T);w.position.set(P.x,t.baseAt(C)+1.8,P.z),this.group.add(w),this.boxes.push({s:C,d:T,mesh:w,base:t.baseAt(C)+1.8,active:!0,timer:0,phase:Math.random()*6})}let h=hy(s.roller);for(let C of n.rollers)C.list.forEach(([T,w,P])=>{let b=e(C.seg,T),_=this.holder(b),I=h.mesh();I.castShadow=!0,I.position.y=h.r,_.add(I),this.logs.push({s:b,period:w,phase:P,amp:12.5,r:h.r,len:h.len,mesh:I,d:0,vd:0,ball:h.ball})}),C.sign&&this.signs(s.rollerName,"#e0a100",e(C.sign[0],C.sign[1]));let u=s.swing==="log",d=new K(u?{map:To(),color:14731432,roughness:1}:{color:15774720,metalness:.4,roughness:.5}),f=u?new K({color:12098146,roughness:1}):new K({color:5592405,metalness:.8,roughness:.4});for(let C of n.balls){let T=t.segs[C.seg],w=t.snap(T.s0+(C.frac!==void 0?T.length*C.frac:C.rel)),P=C.phase||0,b=this.holder(w),_=[];for(let X of[-1,1]){let tt=u?new Vt(.6,.8,19.6,7):new Ct(1,19,1);tt.translate(X*(15+1.8),9.5,0),_.push(tt);for(let W=0;W<(u?0:6);W++){let at=new Ct(.2,3.4,.2);at.rotateZ(.5*(W%2?1:-1)),at.translate(X*(15+1.8),1.6+W*3,.55),_.push(at)}}let I=u?new Vt(.7,.7,35,8).rotateZ(Math.PI/2):new Ct(30+4.6,1.2,1.2);I.translate(0,19,0),_.push(I);let G=new z(de(_),d);G.castShadow=!0,b.add(G);let F=new Kt;if(F.position.y=18.4,b.add(F),u){let X=[];for(let at of[-2.2,2.2])X.push(new Vt(.1,.1,15,5).translate(0,-7.5,at));F.add(new z(de(X),f));let tt=new Vt(1.5,1.5,6.5,12);tt.rotateX(Math.PI/2);let W=new z(tt,uy());W.position.y=-14-1.5,W.castShadow=!0,F.add(W)}else{let X=new z(new Vt(.12,.12,14,6),f);X.position.y=-7,F.add(X);let tt=new z(new Ee(2.2,20,16),new K({color:2829102,metalness:.7,roughness:.35}));tt.position.y=-14-1.5,tt.castShadow=!0,F.add(tt);let W=new z(new nn(2.2,.18,8,24),new K({color:16763904}));W.position.copy(tt.position),W.rotation.y=Math.PI/2,F.add(W)}this.balls.push({s:w,pivot:F,phase:P,period:3.8,amp:1.05,L:15.5,top:18.4,d:0,y:0,vd:0,len:u?1.5:0})}for(let[C,T]of n.nets){let w=e(C,T),P=this.holder(w),b=new K({color:3816004,metalness:.6,roughness:.4}),_=[];for(let bt of[-1,1]){let Ft=new Ct(1.2,12,1.2);Ft.translate(bt*(15+1.2),6,0),_.push(Ft)}let I=new Ct(30+3.6,1.4,1.4);I.translate(0,11.4,0),_.push(I);let G=new z(de(_),b);G.castShadow=!0,P.add(G);let F=new z(new Vt(.7,.7,31,12),new K({color:13220238,roughness:1}));F.rotation.z=Math.PI/2,F.position.set(0,10.3,.4),P.add(F);let X=31,tt=9.6,W=new ve(X,tt,30,12);W.translate(0,-tt/2,0);let at=zu().clone();at.needsUpdate=!0,at.repeat.set(X/2.4,tt/2.4);let J=new z(W,new K({map:at,alphaTest:.4,side:le,roughness:1}));J.position.set(0,10.3,.4),J.castShadow=!0,P.add(J);let ft=[];for(let bt of[-1,1]){let Ft=new z(new Ee(.55,12,10),new Re({color:2293572}));Ft.position.set(bt*14,12.4,-.6),P.add(Ft),ft.push(Ft)}let mt=ld("\xA1CUIDADO CON LA RED!","#e0a100",512);mt.position.set(0,13.6,-.75),mt.rotation.y=Math.PI,mt.scale.set(1.6,1.6,1.6),P.add(mt),this.nets.push({s:w,mesh:J,geo:W,base0:Float32Array.from(W.attributes.position.array),lamps:ft,H:tt,open:0,cycle:5.6,bulge:0,bulgeX:0,catchers:[]})}let g=[4030143,12597547,2600544,15965202,9323693,9807270,1482885,13849600,15528177],x=0;for(let C of n.crush){for(let[T,w]of C.rows)for(let P of w){let b=e(C.seg,T)+An(-1,1),_=s.crush==="snowman"?dy():fy(g[x++%g.length]);_n(_.group,t,b,P,t.baseAt(b)+.03),_.group.rotation.y+=An(-.25,.25)+(Math.random()<.3?Math.PI:0),this.group.add(_.group),this.cars.push({s:b,d:P,..._,crushed:!1,t:0,timer:0})}C.sign&&this.signs("\xA1APLASTA!","#2ecc71",e(C.sign[0],C.sign[1]))}let m=new Vt(.75,.75,1.6,14),p=[new K({map:Xu(),roughness:.5,metalness:.3}),new K({color:9048080,roughness:.5,metalness:.3}),new K({color:9048080})];for(let C of n.barrels)for(let[T,w]of C.rows)for(let P of w){let b=e(C.seg,T),_=t.pointAt(b,P),I=new z(m,p);I.position.set(_.x,t.baseAt(b)+.8,_.z),I.rotation.y=Math.random()*6,I.castShadow=!0,this.group.add(I),this.barrels.push({s:b,d:P,mesh:I,alive:!0,timer:0,fuse:0})}let M=s.patch==="ice"||s.patch==="oil",v=new K({map:Gu(),transparent:!0,roughness:M?.05:.18,metalness:s.patch==="oil"?.5:.05,depthWrite:!1});for(let C of t.mud){let T=new ve(2*C.rd*1.15,2*C.rs*1.15);T.rotateX(-Math.PI/2);let w=this.holder(C.s,C.d,.06),P=new z(T,v);P.receiveShadow=!0,P.renderOrder=1,w.add(P)}for(let[C,T]of n.patchSigns)this.signs(s.patchName,s.patch==="ice"?"#2a6fdb":s.patch==="oil"?"#333333":"#8b5a2b",e(C,T));let y=s.crocs?t.pits.filter(C=>C.liquid==="water"&&(C.crocs??C.bridges.length>0)):[];y.forEach((C,T)=>{let w=[],P=-15+2.5;for(let[_,I]of[...C.bridges].sort((G,F)=>G[0]-F[0]))_-1.5-P>2&&w.push([P,_-1.5]),P=Math.max(P,I+1.5);15-2.5-P>2&&w.push([P,15-2.5]),C.crocFree=w.length?w:[[-15+2.5,15-2.5]];let b=Math.max(2,Math.floor(6/y.length)+(T<6%y.length?1:0));for(let _=0;_<b;_++){let I=py(),G={...I,pit:C,s:0,d:0,heading:An(0,Math.PI*2),ts:0,td:0,timer:0,jaw:0,snapT:An(0,3),wag:An(0,6),target:null};this.pickCrocTarget(G),G.s=An(C.s0+3,C.s1-3),G.d=G.td,this.group.add(I.group),this.crocs.push(G)}})}signs(t,e,n){for(let s of[-1,1]){let r=ld(t,e);_n(r,this.track,n,s*18,0),this.group.add(r)}}pickCrocTarget(t){let e=t.pit,[n,s]=e.crocFree[Math.floor(Math.random()*e.crocFree.length)];t.ts=An(e.s0+3,e.s1-3),t.td=An(n,s),t.timer=An(3,7)}dangerAhead(t,e){let n=s=>{let r=this.rel(s.s,t);return r>2&&r<e};return!!(this.logs.some(n)||this.balls.some(n)||this.nets.some(s=>n(s)&&s.open>.3))}rollerD(t,e){let n=(((this.time+e)/t.period+t.phase)%1+1)%1;return t.amp*(n<.5?4*n-1:3-4*n)}update(t,e){this.time+=t;let n=this.time,s=this.track,r=this.game;this.turboTex.offset.y=(this.turboTex.offset.y-t*1.6)%1;for(let o of this.turbos)for(let a of e)a.state!=="ok"||!a.onGround||Math.abs(this.rel(a.s,o.s))<3.6&&Math.abs(a.d-o.d)<2.6&&(a.boost<1&&a.events.push({type:"turbo"}),a.boost=Math.max(a.boost,1.3));for(let o of this.boxes){o.active||(o.timer-=t,o.timer<=0&&(o.active=!0));let a=o.active?1:0,c=o.mesh.scale.x+(a-o.mesh.scale.x)*Math.min(1,t*(o.active?4:14));if(o.mesh.scale.setScalar(Math.max(.001,c)),o.mesh.visible=c>.02,o.mesh.rotation.y+=t*1.4,o.mesh.rotation.x=Math.sin(n*1.3+o.phase)*.35,o.mesh.position.y=o.base+Math.sin(n*2+o.phase)*.3,!!o.active){for(let l of e)if(l.state!=="fallen"&&Math.abs(this.rel(l.s,o.s))<2.8&&Math.abs(l.d-o.d)<2.8&&Math.abs(l.y+1.5-o.base)<3.5){o.active=!1,o.timer=4,!l.item&&l.itemRoll<=0&&(l.itemRoll=l.isPlayer?1.3:.8),l.events.push({type:"box"}),r.fx.sparks(o.mesh.position.x,o.mesh.position.y,o.mesh.position.z,14);break}}}for(let o of this.logs){let a=((n/o.period+o.phase)%1+1)%1,c=a<.5?4*a-1:3-4*a;o.d=o.amp*c,o.vd=o.amp*4/o.period*(a<.5?1:-1),o.mesh.position.x=-o.d,o.mesh.rotation.z+=o.vd/o.r*t;let l=s.baseAt(o.s)+o.r*2;for(let h of e)if(h.state==="ok"&&Math.abs(this.rel(h.s,o.s))<o.len/2+2.6&&Math.abs(h.d-o.d)<o.r+Al&&h.y<l-.3){let u=s.pointAt(h.s),d=Math.sign(o.vd)||1;h.hit({dirX:u.rx*d,dirZ:u.rz*d,push:10,up:4,speedMul:.45,stun:.9,kind:"log"})&&(r.fx.sparks(h.x,h.y+1.5,h.z,8),r.fx.dust(h.x,h.y,h.z,0,0,[.45,.3,.18],8,1.5))}}for(let o of this.balls){let a=2*Math.PI/o.period,c=o.amp*Math.sin(a*n+o.phase),l=o.amp*a*Math.cos(a*n+o.phase);o.pivot.rotation.z=-c,o.d=o.L*Math.sin(c),o.y=s.baseAt(o.s)+o.top-o.L*Math.cos(c),o.vd=o.L*Math.cos(c)*l;for(let h of e){if(h.state!=="ok")continue;let u=Math.max(0,Math.abs(this.rel(h.s,o.s))-o.len),d=h.d-o.d,f=h.y+2-o.y;if(u*u+d*d+f*f<4.3*4.3){let g=s.pointAt(h.s),x=Math.sign(o.vd)||Math.sign(d)||1;h.hit({dirX:g.rx*x,dirZ:g.rz*x,push:16,up:6,speedMul:.35,stun:1.3,kind:"ball"})&&r.fx.sparks(h.x,h.y+2.5,h.z,20)}}}for(let o of this.nets){let a=n%o.cycle/o.cycle*o.cycle,c;a<2.8?c=0:a<3.2?c=(a-2.8)/.4:a<4.9?c=1:c=1-(a-4.9)/.7,o.open=c,o.mesh.scale.y=.06+.94*c;let l=a>1.6&&a<2.8;for(let f of o.lamps){let g=c>.05||l&&Math.floor(n*6)%2===0;f.material.color.setHex(g?16720418:2293572)}let h=s.baseAt(o.s)+10.3-o.H*o.mesh.scale.y;for(let f of e){if(f.state!=="ok")continue;let g=this.rel(f.prevS,o.s),x=this.rel(f.s,o.s);g<0&&x>=0&&Math.abs(x)<10&&h<f.y+3&&Math.abs(f.d)<15&&f.catchNet(o)&&o.catchers.push(f)}o.catchers=o.catchers.filter(f=>f.state==="caught"&&f.netCaught===o);let u=0,d=o.bulgeX;for(let f of o.catchers)u=Math.max(u,Math.min(5,Math.max(0,this.rel(f.s,o.s)+2.5))),d=-f.d;if(o.bulge+=(u-o.bulge)*Math.min(1,t*8),o.bulgeX=d,o.bulge>.01||o.dirty){let f=o.geo.attributes.position,g=o.base0;for(let x=0;x<f.count;x++){let m=g[x*3],p=g[x*3+1],M=Math.max(0,1-Math.pow((p+o.H*.55)/(o.H*.55),2));f.array[x*3+2]=o.bulge*Math.exp(-((m-d)**2)/14)*M}f.needsUpdate=!0,o.dirty=o.bulge>.01}}for(let o of this.cars){o.crushed?(o.t=Math.min(1,o.t+t*6),o.timer-=t,o.timer<=0&&(o.crushed=!1)):o.t=Math.max(0,o.t-t*2);let a=1-.68*o.t;if(o.group.scale.set(1+.12*o.t,a,1+.08*o.t),o.paint.color.copy(o.baseColor).multiplyScalar(1-.35*o.t),!o.crushed){for(let c of e)if(c.state==="ok"&&Math.abs(this.rel(c.s,o.s))<3.3&&Math.abs(c.d-o.d)<2.6&&c.y<s.baseAt(o.s)+1.8){o.crushed=!0,o.timer=25,c.onGround&&(c.vy=Math.max(c.vy,4.5),c.onGround=!1),c.compV-=1.2,c.boost=Math.max(c.boost,.35),c.events.push({type:"crush"});let l=s.pointAt(o.s,o.d);r.fx.sparks(l.x,s.baseAt(o.s)+1,l.z,12),r.fx.dust(l.x,s.baseAt(o.s),l.z,0,0,[.6,.6,.65],4,1.4);break}}}for(let o of this.barrels){if(!o.alive){o.timer-=t,o.timer<=0&&(o.alive=!0),o.mesh.scale.setScalar(Math.max(.001,o.mesh.scale.x*.5)),o.mesh.visible=!1;continue}if(o.fuse>0&&(o.fuse-=t,o.fuse<=0)){this.explodeBarrel(o,e);continue}o.mesh.visible=!0;let a=Math.min(1,o.mesh.scale.x+t*3);o.mesh.scale.setScalar(a);for(let c of e)if(c.state==="ok"&&Math.abs(this.rel(c.s,o.s))<3.2&&Math.abs(c.d-o.d)<2.5&&c.y<s.baseAt(o.s)+1.8){this.explodeBarrel(o,e);break}}this.updateCrocs(t,e)}explodeBarrel(t,e){t.alive=!1,t.timer=12,t.fuse=0;let n=this.track.pointAt(t.s,t.d),s=this.track.baseAt(t.s);this.game.fx.explosion(n.x,s,n.z),this.game.boom(n.x,s,n.z);for(let r of e){if(r.state!=="ok")continue;let o=r.x-n.x,a=r.z-n.z,c=Math.hypot(o,a);if(c<7&&r.y<s+4){let l=1/Math.max(1,c);r.hit({dirX:o*l,dirZ:a*l,push:6,up:11,speedMul:.5,stun:1.1,kind:"boom"})}}for(let r of this.barrels)r.alive&&r!==t&&!(r.fuse>0)&&Math.abs(this.rel(r.s,t.s))<5&&Math.abs(r.d-t.d)<5&&(r.fuse=.18)}updateCrocs(t,e){if(!this.crocs.length)return;let n=this.track;for(let s of this.crocs){let r=s.pit,o=null;for(let p of e)p.state==="fallen"&&p.fall?.water&&p.fall.pit===r&&(o=p);s.timer-=t;let a=s.ts,c=s.td,l=1.6;if(o){let p=n.project(o.x,o.z,o.idx);a=p.s,c=p.d,l=5.5}else s.timer<=0&&this.pickCrocTarget(s);let h=this.rel(a,s.s),u=c-s.d,d=Math.hypot(h,u),g=Math.atan2(u,h)-s.heading;for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;s.heading+=Math.max(-1.5*t,Math.min(1.5*t,g)),d>(o?2.5:1)&&(s.s+=Math.cos(s.heading)*l*t,s.d+=Math.sin(s.heading)*l*t),s.s=Math.max(r.s0+2.5,Math.min(r.s1-2.5,s.s)),s.d=Math.max(-13,Math.min(13,s.d)),s.snapT-=t*(o&&d<6?3:1),s.snapT<=0&&(s.snapT=An(2,4),s.jaw=.75,o&&d<7&&this.game.sound3d("snap",o.x,o.z,.8)),s.jaw=Math.max(0,s.jaw-t*(s.jaw>.4?.6:2.5));let x=s.jaw>.4?(.75-s.jaw)/.35*.7:s.jaw/.4*.7;s.jawPivot.rotation.x=x,s.headPivot.rotation.x=-x*.4,s.wag+=t*(l>2?9:3),s.tail.rotation.y=Math.sin(s.wag)*.45;let m=n.pointAt(s.s,s.d);s.group.position.set(m.x,r.floor-.05+Math.sin(s.wag*.5)*.05,m.z),s.group.rotation.y=Math.PI/2-(m.th+s.heading)}}};function ld(i,t,e=256){let n=new Kt,s=document.createElement("canvas");s.width=e,s.height=128;let r=s.getContext("2d");r.fillStyle=t,r.fillRect(0,0,e,128),r.strokeStyle="#111",r.lineWidth=10,r.strokeRect(5,5,e-10,118),r.fillStyle="#111",r.font="bold 44px Impact, Arial Black, sans-serif",r.textAlign="center",r.textBaseline="middle";for(let l=44;l>16&&r.measureText(i).width>e-28;l-=2)r.font=`bold ${l}px Impact, Arial Black, sans-serif`;r.fillText(i,e/2,66);let o=new cn(s);o.colorSpace=be;let a=e/128*3,c=new z(new ve(a,3),new K({map:o,side:le}));if(c.position.y=e>256?0:4.5,n.add(c),e<=256)for(let l of[-a/2+.4,a/2-.4]){let h=new z(new Vt(.12,.12,4.5,6),new K({color:5592405}));h.position.set(l,2.25,.05),n.add(h)}return n}function hy(i){if(i==="snowball"||i==="boulder"){let n=i==="snowball"?2:1.9,s=i==="snowball"?new ci(n,2):new ms(n,1),r=i==="snowball"?new K({color:16185852,roughness:.85,flatShading:!0}):new K({map:rr(),color:6969938,roughness:1,flatShading:!0,emissive:3803648});return{r:n,len:2*n,ball:!0,mesh:()=>new z(s,r)}}if(i==="pipe"){let n=new Vt(1.3,1.3,7,16,1,!0);n.rotateX(Math.PI/2);let s=new Vt(1,1,7.02,16,1,!0);s.rotateX(Math.PI/2);let r=new K({color:10132118,roughness:.9,side:le}),o=new K({color:3815994,roughness:1,side:Te});return{r:1.3,len:7,ball:!1,mesh:()=>{let a=new Kt,c=new z(n,r);return c.castShadow=!0,a.add(c,new z(s,o)),a}}}let t=new Vt(1,1,7,14);t.rotateX(Math.PI/2);let e=[new K({map:To(),roughness:1}),new K({map:or(),roughness:1}),new K({map:or(),roughness:1})];return{r:1,len:7,ball:!1,mesh:()=>new z(t,e)}}var Rl=null;function uy(){return Rl||(Rl=[new K({map:To(),roughness:1}),new K({map:or(),roughness:1}),new K({map:or(),roughness:1})]),Rl}function dy(){let i=new Kt,t=new K({color:16054524,roughness:.9}),e=[];for(let[c,l]of[[1.1,1],[.8,2.5],[.55,3.6]]){let h=new Ee(c,12,9);h.translate(0,l,0),e.push(h)}let n=new z(de(e),t);n.castShadow=!0,i.add(n);let s=new z(new Ce(.12,.6,8).rotateX(Math.PI/2),new K({color:16742912}));s.position.set(0,3.6,.75),i.add(s);let r=new z(new Vt(.45,.45,.7,12),new K({color:1710618}));r.position.y=4.3,i.add(r);let o=new K({color:13904416}),a=new z(new nn(.62,.14,6,14).rotateX(Math.PI/2),o);return a.position.y=3.15,i.add(a),{group:i,paint:o,baseColor:o.color.clone()}}function fy(i){let t=new Kt,e=new kt(i),n=new K({color:i,metalness:.3,roughness:.55}),s=new K({color:1710618,roughness:.8}),r=new K({color:10471128,metalness:.4,roughness:.15}),o=new Ct(1.9,.75,4.3);o.translate(0,.75,0);let a=new Ct(1.7,.65,2.1);a.translate(0,1.45,-.25);let c=new z(de([o,a]),n);c.castShadow=!0,t.add(c);let l=new z(new Ct(1.74,.45,1.9),r);l.position.set(0,1.47,-.25),t.add(l);let h=[];for(let d of[-.85,.85])for(let f of[-1.35,1.35]){let g=new Vt(.38,.38,.3,12);g.rotateZ(Math.PI/2),g.translate(d,.38,f),h.push(g)}t.add(new z(de(h),s));let u=new z(new Ct(1.92,.3,1.2),new K({color:9063200,roughness:1}));return u.position.set(0,.55,1.2),t.add(u),{group:t,paint:n,baseColor:e}}function py(){let i=new Kt,t=new K({color:4156202,roughness:.7}),e=new K({color:10466154,roughness:.8}),n=new K({color:16777215}),s=new z(new Ct(1.2,.6,3.2),t);s.castShadow=!0,i.add(s);for(let d=0;d<6;d++){let f=new z(new Ce(.12,.3,4),t);f.position.set(0,.4,-1.2+d*.45),i.add(f)}let r=new Kt;r.position.set(0,.1,1.55),i.add(r);let o=new z(new Ct(.9,.35,1.5),t);o.position.set(0,.12,.75),r.add(o);for(let d=0;d<5;d++)for(let f of[-1,1]){let g=new z(new Ce(.06,.18,4),n);g.position.set(f*.4,-.08,.3+d*.28),g.rotation.x=Math.PI,r.add(g)}for(let d of[-1,1]){let f=new z(new Ee(.14,10,8),new K({color:16769357,emissive:3353088}));f.position.set(d*.28,.38,.25),r.add(f);let g=new z(new Ee(.06,8,6),new K({color:0}));g.position.set(d*.3,.42,.37),r.add(g)}let a=new Kt;a.position.set(0,0,1.55),i.add(a);let c=new z(new Ct(.85,.2,1.45),e);c.position.set(0,-.12,.72),a.add(c);let l=new Kt;l.position.set(0,0,-1.6),i.add(l);let h=new Ce(.5,2.6,6);h.rotateX(-Math.PI/2),h.translate(0,0,-1.3);let u=new z(h,t);u.scale.set(1,.6,1),l.add(u);for(let d of[-1,1])for(let f of[-.9,.9]){let g=new z(new Ct(.35,.25,.5),t);g.position.set(d*.75,-.2,f),g.rotation.y=d*.5,i.add(g)}return i.scale.setScalar(1.5),{group:i,headPivot:r,jawPivot:a,tail:l}}var my=26,gy=72,xy=2.6,Bo=null;function yy(){if(Bo)return Bo;let i=new nn(.9,.42,8,14),t=new K({color:1776411,roughness:.9}),e=new Vt(.5,.5,.5,10).rotateX(Math.PI/2),n=new K({color:16763904,metalness:.3,roughness:.4}),s=new Vt(.9,.9,1.8,12),r=new K({color:13904410,roughness:.5}),o=new Vt(.93,.93,.18,12),a=new K({color:16765952,emissive:5583616}),c=new Vt(.35,.35,2.4,10).rotateZ(Math.PI/2),l=new Ce(.35,.8,10).rotateZ(-Math.PI/2).translate(1.6,0,0),h=new Ct(.6,1.1,.08).translate(-1,0,0),u=new K({color:15658734,roughness:.4}),d=new K({color:16724016,emissive:6688784});return Bo={tireGeo:i,tireMat:t,rimGeo:e,rimMat:n,barrelGeo:s,barrelMat:r,bandGeo:o,bandMat:a,bodyGeo:c,noseGeo:l,finGeo:h,rocketMat:u,noseMat:d},Bo}function vy(i){let t=yy(),e=new Kt;if(i==="tire"){let n=new z(t.tireGeo,t.tireMat),s=new z(t.rimGeo,t.rimMat),r=new Kt;r.add(n,s),e.add(r),e.userData.spin=r}else if(i==="barrel"){let n=new z(t.barrelGeo,t.barrelMat);n.position.y=.9,e.add(n);for(let s of[.45,1.35]){let r=new z(t.bandGeo,t.bandMat);r.position.y=s,e.add(r)}}else{let n=new z(t.bodyGeo,t.rocketMat),s=new z(t.noseGeo,t.noseMat);e.add(n,s);for(let r=0;r<4;r++){let o=new z(t.finGeo,t.noseMat);o.rotation.x=r*Math.PI/2,e.add(o)}e.children.forEach(r=>r.scale.setScalar(1.6))}return e.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),e}var ko=class{constructor(t,e){this.scene=t,this.game=e,this.list=[],this.pool={tire:[],barrel:[],rocket:[]}}clear(){for(let t of this.list)this.release(t);this.list.length=0}mesh(t){let e=this.pool[t].pop()||vy(t);return e.visible=!0,e.parent||this.scene.add(e),e}release(t){t.mesh.visible=!1,this.pool[t.kind].push(t.mesh)}launch(t,e){let n=this.game.track,s=Math.max(0,e.vx*Math.cos(e.th)+e.vz*Math.sin(e.th)),r={kind:t,owner:e,s:e.s,d:e.d,y:e.y+1,t:0,vy:0,mesh:this.mesh(t),dead:!1};t==="tire"?(r.s=n.wrap(e.s+4*e.size),r.speed=s+my,r.vy=6,r.life=7):t==="barrel"?(r.s=n.wrap(e.s-4.5*e.size),r.speed=0,r.y=e.y+1.5,r.life=40):(r.s=n.wrap(e.s+3*e.size),r.y=e.y+3,r.speed=Math.max(s+20,gy),r.target=this.pickTarget(e),r.life=9,r.target&&r.target.events.push({type:"rocketWarn"})),this.list.push(r),this.place(r,0)}pickTarget(t){let e=this.game.vehicles.filter(n=>n!==t&&!n.finished&&n.state!=="fallen"&&n.place<t.place);return e.sort((n,s)=>s.place-n.place),e[0]||null}ground(t){return this.game.track.surfaceAt(t.s,t.d)}place(t,e){let n=this.game.track.pointAt(t.s,t.d);t.x=n.x,t.z=n.z;let s=t.mesh;s.position.set(n.x,t.y,n.z),s.rotation.y=Math.PI/2-n.th,t.kind==="tire"?(s.rotation.y=-n.th,s.userData.spin.rotation.z-=t.speed*e/1.3):t.kind==="rocket"&&s.rotation.set(0,-n.th,0)}explode(t,e){this.game.fx.explosion(t.x,t.y,t.z),this.game.boom(t.x,t.y,t.z);for(let s of this.game.vehicles){if(s.state!=="ok"||t.kind==="rocket"&&s===t.owner)continue;let r=s.x-t.x,o=s.z-t.z,a=Math.hypot(r,o);s!==e&&a>7||s.hit({dirX:r/(a||1),dirZ:o/(a||1),push:6,up:9,speedMul:.35,stun:1.3,kind:t.kind==="rocket"?"rocketed":"barreled"})}t.dead=!0}update(t){let e=this.game.track,n=this.game.vehicles;for(let s of this.list){if(s.t+=t,s.t>s.life){s.dead=!0;continue}s.s=e.wrap(s.s+s.speed*t);let r=this.ground(s);if(s.kind==="tire"){s.vy-=30*t,s.y+=s.vy*t;let o=r.h+.95;if(s.y<o&&!r.pit&&(s.y=o,s.vy=Math.abs(s.vy)>3?Math.abs(s.vy)*.55:4.5),r.pit&&s.y<r.h-3){s.dead=!0;continue}s.d*=1-t*.4}else if(s.kind==="barrel"){if(s.vy-=30*t,s.y=Math.max(r.h,s.y+s.vy*t),s.y===r.h&&(s.vy=0),r.pit&&s.y<=r.h+.01){s.dead=!0;continue}}else{let o=s.target,a=1/0;if(o&&o.state!=="fallen"&&!o.finished){a=e.ahead(s.s,o.s),a>e.length/2&&(a=1/0);let c=Math.min(1,t*(a<30?6:2));s.d+=(o.d-s.d)*c;let l=a<12?o.y+1.2:Math.max(r.h+3,o.y+3);s.y+=(l-s.y)*Math.min(1,t*5),s.speed=Math.max(s.speed,(o.vF||0)+25)}else s.y+=(r.h+3-s.y)*Math.min(1,t*3);this.game.fx.boostFlame(s.x,s.y,s.z,0,0)}this.place(s,t);for(let o of n){if(o.state!=="ok"||o===s.owner&&(s.kind==="rocket"||s.t<(s.kind==="barrel"?1.2:.6)))continue;let a=o.x-s.x,c=o.z-s.z,l=xy*o.size;if(!(a*a+c*c>l*l||Math.abs(o.y+1.5-s.y)>3.5*o.size)){if(s.kind==="tire"){let h=Math.hypot(a,c)||1;o.hit({dirX:a/h,dirZ:c/h,push:5,up:4,speedMul:.45,stun:1.2,kind:"tired"})&&(this.game.fx.dust(s.x,s.y,s.z,0,0,void 0,12,2),s.dead=!0)}else this.explode(s,o);break}}}for(let s of this.list)s.dead&&this.release(s);this.list=this.list.filter(s=>!s.dead)}dangerAhead(t,e,n){let s=this.game.track;return this.list.some(r=>r.kind!=="rocket"&&Math.abs(r.d-e)<4&&s.ahead(t,r.s)<n)}};var _y=`
attribute float psize;
attribute float palpha;
attribute vec3 pcolor;
uniform float scale;
varying float vA;
varying vec3 vC;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = psize * scale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
  vA = palpha;
  vC = pcolor;
}`,My=`
uniform sampler2D map;
varying float vA;
varying vec3 vC;
void main() {
  vec4 t = texture2D(map, gl_PointCoord);
  float a = t.a * vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vC, a);
}`,Ho=class{constructor(t,e=1600,n=!1){this.max=e,this.next=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size0=new Float32Array(e),this.grow=new Float32Array(e),this.alpha0=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e);let s=new ye;s.setAttribute("position",new Ae(this.pos,3).setUsage(nr)),s.setAttribute("pcolor",new Ae(this.col,3).setUsage(nr)),s.setAttribute("psize",new Ae(this.size,1).setUsage(nr)),s.setAttribute("palpha",new Ae(this.alpha,1).setUsage(nr)),this.mat=new Ge({uniforms:{map:{value:wo()},scale:{value:500}},vertexShader:_y,fragmentShader:My,transparent:!0,depthWrite:!1,blending:n?Xr:ii}),this.points=new ao(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=n?11:10,t.add(this.points),this.geo=s,this.alive=0}setScale(t,e){this.mat.uniforms.scale.value=t/(2*Math.tan(e*Math.PI/360))}emit(t){let e=this.next;this.next=(this.next+1)%this.max,this.life[e]<=0&&this.alive++;let n=e*3;this.pos[n]=t.x,this.pos[n+1]=t.y,this.pos[n+2]=t.z,this.vel[n]=t.vx||0,this.vel[n+1]=t.vy||0,this.vel[n+2]=t.vz||0;let s=t.color||[1,1,1];this.col[n]=s[0],this.col[n+1]=s[1],this.col[n+2]=s[2],this.life[e]=this.maxLife[e]=t.life||1,this.size0[e]=t.size||1,this.grow[e]=t.grow||0,this.alpha0[e]=t.alpha??1,this.grav[e]=t.gravity||0,this.drag[e]=t.drag??1,this.size[e]=this.size0[e],this.alpha[e]=this.alpha0[e]}update(t){if(this.alive===0){this.points.visible=!1;return}this.points.visible=!0;let{pos:e,vel:n,life:s,maxLife:r,size:o,size0:a,grow:c,alpha:l,alpha0:h,grav:u,drag:d}=this,f=0;for(let g=0;g<this.max;g++){if(s[g]<=0){l[g]!==0&&(l[g]=0,o[g]=0);continue}s[g]-=t,s[g]>0&&f++;let x=g*3,m=Math.exp(-d[g]*t);n[x]*=m,n[x+2]*=m,n[x+1]=n[x+1]*m-u[g]*t,e[x]+=n[x]*t,e[x+1]+=n[x+1]*t,e[x+2]+=n[x+2]*t;let p=Math.max(0,s[g]/r[g]);o[g]=a[g]+c[g]*(1-p),l[g]=h[g]*Math.min(1,p*2.5),e[x+1]<-.1&&(l[g]=0)}this.alive=f;for(let g of["position","pcolor","psize","palpha"])this.geo.attributes[g].needsUpdate=!0}},zo=class{constructor(t){this.soft=new Ho(t,2200,!1),this.glow=new Ho(t,1200,!0)}setScale(t,e){this.soft.setScale(t,e),this.glow.setScale(t,e)}update(t){this.soft.update(t),this.glow.update(t)}dust(t,e,n,s,r,o=this.dustColor||[.62,.48,.34],a=1,c=2.2){for(let l=0;l<a;l++)this.soft.emit({x:t+(Math.random()-.5)*1.2,y:e+.3,z:n+(Math.random()-.5)*1.2,vx:s*.15+(Math.random()-.5)*3,vy:1+Math.random()*2.5,vz:r*.15+(Math.random()-.5)*3,life:.9+Math.random()*.6,size:c,grow:3.5,color:o,alpha:.55,gravity:-.4,drag:1.5})}mud(t,e,n,s,r,o=3){for(let a=0;a<o;a++)this.soft.emit({x:t,y:e+.5,z:n,vx:-s*.1+(Math.random()-.5)*6,vy:4+Math.random()*6,vz:-r*.1+(Math.random()-.5)*6,life:.8+Math.random()*.4,size:.7+Math.random()*.6,grow:.2,color:[.3+Math.random()*.08,.2,.1],alpha:1,gravity:22,drag:.5})}sparks(t,e,n,s=10){for(let r=0;r<s;r++)this.glow.emit({x:t,y:e,z:n,vx:(Math.random()-.5)*14,vy:Math.random()*8+2,vz:(Math.random()-.5)*14,life:.3+Math.random()*.4,size:.35,grow:-.2,color:[1,.75,.3],alpha:1,gravity:20,drag:1})}splash(t,e,n,s=50){for(let r=0;r<s;r++){let o=Math.random()*Math.PI*2,a=2+Math.random()*7;this.soft.emit({x:t,y:e,z:n,vx:Math.cos(o)*a,vy:6+Math.random()*10,vz:Math.sin(o)*a,life:1+Math.random()*.6,size:.8+Math.random()*1.2,grow:1,color:[.75,.9,.95],alpha:.9,gravity:18,drag:.6})}}explosion(t,e,n){for(let s=0;s<60;s++){let r=Math.random()*Math.PI*2,o=Math.random()*Math.PI/2,a=6+Math.random()*14;this.glow.emit({x:t,y:e+1,z:n,vx:Math.cos(r)*Math.cos(o)*a,vy:Math.sin(o)*a+3,vz:Math.sin(r)*Math.cos(o)*a,life:.4+Math.random()*.5,size:2+Math.random()*2,grow:3,color:[1,.45+Math.random()*.35,.1],alpha:1,gravity:-2,drag:3})}for(let s=0;s<40;s++)this.soft.emit({x:t+(Math.random()-.5)*3,y:e+1+Math.random()*2,z:n+(Math.random()-.5)*3,vx:(Math.random()-.5)*6,vy:3+Math.random()*5,vz:(Math.random()-.5)*6,life:1.6+Math.random(),size:3,grow:7,color:[.2,.2,.2],alpha:.7,gravity:-1.5,drag:1.2});this.sparks(t,e+1,n,30)}boostFlame(t,e,n,s,r){this.glow.emit({x:t,y:e,z:n,vx:s*.6+(Math.random()-.5)*2,vy:1.5+Math.random(),vz:r*.6+(Math.random()-.5)*2,life:.25,size:1.1,grow:-.6,color:[.4,.7,1],alpha:1,gravity:0,drag:2})}confetti(t,e,n,s=80){let r=[[1,.2,.3],[1,.85,.1],[.2,.8,1],[.4,1,.4],[1,.5,1]];for(let o=0;o<s;o++)this.soft.emit({x:t+(Math.random()-.5)*20,y:e+10+Math.random()*6,z:n+(Math.random()-.5)*20,vx:(Math.random()-.5)*4,vy:Math.random()*3,vz:(Math.random()-.5)*4,life:3+Math.random()*2,size:.5,grow:0,color:r[o%r.length],alpha:1,gravity:3,drag:1.5})}};var Il=i=>440*Math.pow(2,(i-69)/12),hd=new WeakMap;function Cl(i,t){let e=hd.get(i);if(e||(e={},hd.set(i,e)),e[t])return e[t];let n=2048,s=new Float32Array(n);for(let r=0;r<n;r++){let o=r/(n-1)*2-1;s[r]=Math.tanh(o*t)/Math.tanh(t)}return e[t]=s,s}var ud=new WeakMap;function by(i){let t=ud.get(i);if(t)return t;t=i.createBuffer(1,i.sampleRate,i.sampleRate);let e=t.getChannelData(0),n=12345;for(let s=0;s<e.length;s++)n=n*1103515245+12345&2147483647,e[s]=n/2147483647*2-1;return ud.set(i,t),t}var dd=new WeakMap;function Pl(i,t,{secs:e=1.2,damp:n=.996,bright:s=.5,seed:r=1}={}){let o=dd.get(i);o||(o=new Map,dd.set(i,o));let a=`${t}|${e}|${n}|${s}|${r}`;if(o.has(a))return o.get(a);let c=i.sampleRate,l=Math.ceil(e*c),h=i.createBuffer(1,l,c),u=h.getChannelData(0),d=c/Il(t),f=Math.max(2,Math.floor(d)),g=d-f,x=r*9301+49297,m=()=>(x=(x*9301+49297)%233280,x/233280*2-1),p=0;for(let v=0;v<f;v++)p+=s*(m()-p),u[v]=p;for(let v=f;v<l;v++){let y=u[v-f],C=v-f-1>=0?u[v-f-1]:y;u[v]=n*(.5*(y+C)*(1-g)+y*g)}let M=0;for(let v=0;v<l;v++)M=Math.max(M,Math.abs(u[v]));if(M>0)for(let v=0;v<l;v++)u[v]/=M;return o.set(a,h),h}var _e={kick(i,t,e,n=1){let s=i.createOscillator(),r=i.createGain();s.type="sine",s.frequency.setValueAtTime(160,e),s.frequency.exponentialRampToValueAtTime(42,e+.12),r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(1*n,e+.004),r.gain.exponentialRampToValueAtTime(1e-4,e+.32),s.connect(r).connect(t),s.start(e),s.stop(e+.35),_e.noiseHit(i,t,e,.015,.25*n,"highpass",2500)},noiseHit(i,t,e,n,s,r,o,a=.8){let c=i.createBufferSource();c.buffer=by(i);let l=i.createBiquadFilter();l.type=r,l.frequency.value=o,l.Q.value=a;let h=i.createGain();h.gain.setValueAtTime(s,e),h.gain.exponentialRampToValueAtTime(1e-4,e+n),c.connect(l).connect(h).connect(t),c.start(e,Math.random()*.5),c.stop(e+n+.02)},snare(i,t,e,n=1){_e.noiseHit(i,t,e,.2,.55*n,"bandpass",2200,.6),_e.noiseHit(i,t,e,.12,.3*n,"highpass",5e3);let s=i.createOscillator(),r=i.createGain();s.type="triangle",s.frequency.setValueAtTime(240,e),s.frequency.exponentialRampToValueAtTime(170,e+.08),r.gain.setValueAtTime(.45*n,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.1),s.connect(r).connect(t),s.start(e),s.stop(e+.12)},hat(i,t,e,n=1,s=!1){_e.noiseHit(i,t,e,s?.28:.045,.22*n,"highpass",7500)},crash(i,t,e,n=1){_e.noiseHit(i,t,e,1.6,.3*n,"highpass",4500,.5),_e.noiseHit(i,t,e,.6,.18*n,"bandpass",3e3,.4)},tom(i,t,e,n,s=1){let r=i.createOscillator(),o=i.createGain();r.type="sine",r.frequency.setValueAtTime(Il(n)*1.5,e),r.frequency.exponentialRampToValueAtTime(Il(n),e+.08),o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.8*s,e+.005),o.gain.exponentialRampToValueAtTime(1e-4,e+.35),r.connect(o).connect(t),r.start(e),r.stop(e+.4),_e.noiseHit(i,t,e,.05,.15*s,"bandpass",1200)},bass(i,t,e,n,s,r=1){let o=i.createBufferSource();o.buffer=Pl(i,n,{secs:1,damp:.998,bright:.35,seed:n});let a=i.createWaveShaper();a.curve=Cl(i,1.8);let c=i.createBiquadFilter();c.type="lowpass",c.frequency.value=1100,c.Q.value=.6;let l=i.createGain();l.gain.setValueAtTime(.9*r,e),l.gain.setValueAtTime(.9*r,e+s*.85),l.gain.exponentialRampToValueAtTime(1e-4,e+s+.04),o.connect(a).connect(c).connect(l).connect(t),o.start(e),o.stop(e+s+.06)},guitar(i,t,e,n,s,{v:r=1,mute:o=!1,drive:a=9,bright:c=4200}={}){let l=o?Math.min(s,.16):s;for(let[h,u,d]of[[-.75,0,1],[.75,.011,2]]){let f=e+u,g=i.createGain();g.gain.value=2.2;let x=i.createBiquadFilter();x.type="highpass",x.frequency.value=100;let m=i.createWaveShaper();m.curve=Cl(i,a),m.oversample="2x";let p=i.createBiquadFilter();p.type="peaking",p.frequency.value=500,p.gain.value=-3,p.Q.value=1;let M=i.createBiquadFilter();M.type="peaking",M.frequency.value=1700,M.gain.value=4,M.Q.value=.9;let v=i.createBiquadFilter();v.type="lowpass",v.Q.value=.7,v.frequency.value=o?1800:c;let y=i.createBiquadFilter();y.type="lowpass",y.Q.value=.5,y.frequency.value=o?2600:c*1.5;let C=i.createGain();C.gain.setValueAtTime(.17*r,f),C.gain.setValueAtTime(.17*r,f+l*.8),C.gain.exponentialRampToValueAtTime(1e-4,f+l+.03);for(let[w,P]of[[0,0],[7,1],[12,2]]){let b=i.createBufferSource();b.buffer=Pl(i,n+w,{secs:1.4,damp:o?.985:.9985,bright:o?.4:.8,seed:d*7+P}),b.connect(g),b.start(f+P*.004),b.stop(f+l+.05)}let T=g.connect(x).connect(m).connect(p).connect(M).connect(v).connect(y).connect(C);if(i.createStereoPanner){let w=i.createStereoPanner();w.pan.value=h,T=T.connect(w)}T.connect(t)}},lead(i,t,e,n,s,r=1){let o=i.createBufferSource();o.buffer=Pl(i,n,{secs:2.5,damp:.9996,bright:.7,seed:3});let a=i.createOscillator(),c=i.createGain();a.frequency.value=5.8,c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(s>.3?.012:0,e+Math.min(s,.3)),a.connect(c).connect(o.playbackRate);let l=i.createGain();l.gain.value=2.5;let h=i.createWaveShaper();h.curve=Cl(i,6),h.oversample="2x";let u=i.createBiquadFilter();u.type="peaking",u.frequency.value=1200,u.gain.value=5,u.Q.value=.8;let d=i.createBiquadFilter();d.type="lowpass",d.frequency.value=3600,d.Q.value=.7;let f=i.createGain();f.gain.setValueAtTime(.14*r,e),f.gain.setValueAtTime(.14*r,e+s*.9),f.gain.exponentialRampToValueAtTime(1e-4,e+s+.08);let g=i.createDelay(1);g.delayTime.value=.18;let x=i.createGain();x.gain.value=.25;let m=i.createGain();m.gain.value=.3,o.connect(l).connect(h).connect(u).connect(d).connect(f),f.connect(t),f.connect(g),g.connect(x).connect(g),g.connect(m).connect(t),o.start(e),o.stop(e+s+.1),a.start(e),a.stop(e+s+.1)}},Xe=40,Oi=43,As=45,Go=47,Je=48,Rn=50,Vo=41;function Ey(i,t,{half:e=!1,fill:n=!1}={}){let s=[];return n&&i>=8?(i%2===0&&s.push(["tom",50-(i-8)*2]),i===15&&s.push(["snare",1.1]),s):(e?((i===0||i===10)&&s.push(["kick",1]),i===8&&s.push(["snare",1])):((i===0||i===6||i===8||i===11)&&s.push(["kick",i===0?1:.85]),(i===4||i===12)&&s.push(["snare",1])),i%2===0&&s.push(["hat",i%4===0?.9:.6]),s)}var Sy={bpm:150,sections:[{name:"intro",bars:[Xe,Xe,Xe,Xe],guitar:"mute",drums:"build",lead:null},{name:"estrofa",bars:[Xe,Xe,Je,Rn,Xe,Xe,Je,Go],guitar:"mute",drums:"rock",lead:null},{name:"estribillo",bars:[Oi,Rn,Xe,Je,Oi,Rn,Je,Rn],guitar:"open",drums:"rock",lead:"chorus"},{name:"estrofa",bars:[Xe,Xe,Je,Rn,Xe,Xe,Je,Go],guitar:"mute",drums:"rock",lead:"riff"},{name:"puente",bars:[Je,Je,Rn,Rn,As,As,Go,Go],guitar:"open",drums:"half",lead:null},{name:"estribillo",bars:[Oi,Rn,Xe,Je,Oi,Rn,Je,Rn],guitar:"open",drums:"rock",lead:"chorus"}],loopFrom:1,leads:{chorus:[[[0,71,4],[4,74,4],[8,76,6],[14,74,2]],[[0,74,3],[3,71,3],[6,69,2],[8,71,8]],[[0,67,4],[4,71,4],[8,74,4],[12,76,4]],[[0,79,6],[6,78,2],[8,76,4],[12,74,4]],[[0,71,4],[4,74,4],[8,76,6],[14,79,2]],[[0,78,3],[3,76,3],[6,74,2],[8,74,8]],[[0,72,4],[4,76,4],[8,79,4],[12,76,4]],[[0,78,8],[8,74,4],[12,69,4]]],riff:[[[0,64,2],[3,67,2],[6,69,2],[10,67,2],[12,71,3]],[[0,69,2],[2,67,2],[4,64,4],[12,62,2],[14,64,2]],[[0,64,2],[3,67,2],[6,69,2],[10,72,2],[12,71,3]],[[0,74,3],[4,71,2],[6,69,2],[8,71,8]]]}},pd={bpm:112,sections:[{name:"a",bars:[As,As,Vo,Vo,Je,Je,Oi,Oi],guitar:"stab",drums:"groove",lead:null},{name:"b",bars:[As,As,Vo,Vo,Je,Je,Oi,Xe],guitar:"stab",drums:"groove",lead:"menu"}],loopFrom:0,leads:{menu:[[[0,76,3],[4,72,2],[6,74,2],[8,76,6]],[[0,79,4],[6,76,2],[8,74,8]],[[0,72,3],[4,69,2],[6,72,2],[8,77,6]],[[0,76,4],[4,74,4],[8,72,8]],[[0,67,2],[2,72,2],[4,76,4],[8,79,6]],[[0,79,2],[2,77,2],[4,76,4],[8,74,8]],[[0,74,3],[4,71,3],[8,74,4],[12,79,4]],[[0,76,12]]]}},md={race:Sy,menu:pd},Fi=new Set;function wy(i,t){let e=i.sections,n=t,s=o=>e.slice(o).reduce((a,c)=>a+c.bars.length,0),r=s(0);n>=r&&(n=i.sections.slice(0,i.loopFrom).reduce((o,a)=>o+a.bars.length,0)+(n-r)%s(i.loopFrom));for(let o of e){if(n<o.bars.length)return{sec:o,inSec:n,root:o.bars[n],next:o.bars[n+1]};n-=o.bars.length}return{sec:e[0],inSec:0,root:e[0].bars[0]}}var fd=new WeakMap;function Ty(i,t){let e=fd.get(t);if(e)return e;let n=Math.floor(i.sampleRate*1.3),s=i.createBuffer(2,n,i.sampleRate);for(let l=0;l<2;l++){let h=s.getChannelData(l),u=777+l*31;for(let d=0;d<n;d++){u=u*1103515245+12345&2147483647;let f=d/i.sampleRate;h[d]=(u/2147483647*2-1)*Math.exp(-f*4.2)*(f<.012?f/.012:1)*.5}}let r=i.createConvolver();r.buffer=s;let o=i.createBiquadFilter();o.type="highpass",o.frequency.value=300;let a=i.createGain();a.gain.value=.35,o.connect(r).connect(a).connect(t);let c=(l,h)=>{let u=i.createGain();if(u.gain.value=l,u.connect(t),h){let d=i.createGain();d.gain.value=h,u.connect(d).connect(o)}return u};return e={drums:c(1.9,.35),bass:c(.55,0),guitar:c(1,.2),lead:c(1,.45)},fd.set(t,e),e}function Ay(i,t,e,n,s,r){let o=Ty(i,t),a=o.drums,c=Math.floor(n/16),l=n%16,{sec:h,inSec:u,root:d}=wy(e,c),f=u===h.bars.length-1,g=e===pd;if(!Fi.has("drums"))if(h.drums==="build")l%4===0&&_e.kick(i,a,s,.9),u>=2&&l%2===0&&_e.hat(i,a,s,.5),u===3&&l>=8&&_e.snare(i,a,s,.4+(l-8)*.08);else{u===0&&l===0&&_e.crash(i,a,s,.9);let m=g?(()=>{let p=[];return(l===0||l===7||l===10)&&p.push(["kick",.9]),(l===4||l===12)&&p.push(["snare",.8]),p.push(["hat",l%4===2?.7:.4]),l===14&&p.push(["hatOpen",.6]),p})():Ey(l,c,{half:h.drums==="half",fill:f&&h.name!=="puente"&&u%8===7});for(let[p,M]of m)p==="kick"?_e.kick(i,a,s,M):p==="snare"?_e.snare(i,a,s,M):p==="hat"?_e.hat(i,a,s,M):p==="hatOpen"?_e.hat(i,a,s,M,!0):p==="tom"&&_e.tom(i,a,s,M)}a=o.bass,Fi.has("bass")||(g?[0,3,6,8,11,14].includes(l)&&_e.bass(i,a,s,d+(l===11?12:l===14?7:0),r*2,.9):(h.drums!=="build"||u>=2)&&l%2===0&&_e.bass(i,a,s,d+(h.drums==="half"&&l>=8?7:0),r*1.8,l%4===0?1:.8)),a=o.guitar;let x=d+12;if(Fi.has("guitar")||(h.guitar==="mute"?l%2===0&&_e.guitar(i,a,s,x,r*2,{mute:l%8!==0,v:l%8===0?1:.75}):h.guitar==="open"?(l===0&&_e.guitar(i,a,s,x,r*6,{v:1}),l===6&&_e.guitar(i,a,s,x,r*2,{mute:!0,v:.8}),l===8&&_e.guitar(i,a,s,x,r*6,{v:.95}),l===14&&_e.guitar(i,a,s,x,r*2,{mute:!0,v:.8})):h.guitar==="stab"&&(l===2||l===6||l===10||l===13)&&_e.guitar(i,a,s,x,r*1.5,{v:.8,drive:4,bright:2600})),a=o.lead,h.lead&&!Fi.has("lead")){let m=e.leads[h.lead],p=m[u%m.length];for(let[M,v,y]of p)M===l&&_e.lead(i,a,s,v,r*y*.95,g?.85:1)}}var Ll=1;function gd(i){let t=md[i],e=60/t.bpm*4,n=c=>c.reduce((l,h)=>l+h.bars.length,0),s=n(t.sections.slice(0,t.loopFrom)),r=n(t.sections.slice(t.loopFrom)),o=.05+s*e,a=o+r*e;return{loopStart:o,loopEnd:a,seconds:a+.05}}async function Wo(i,t=30,e=44100,n=[]){Fi.clear();for(let h of n)Fi.add(h);let s=new OfflineAudioContext(2,Math.ceil(t*e),e),r=s.createGain();r.gain.value=.5;let o=s.createDynamicsCompressor();o.threshold.value=-14,o.ratio.value=4,r.connect(o).connect(s.destination);let a=md[i],c=60/a.bpm/4;for(let h=0,u=.05;u<t;h++,u+=c)Ay(s,r,a,h,u,c);let l=await s.startRendering();return Fi.clear(),l}var Ry=1105/44100,Cy=.012;function xd(){return new Promise(i=>{try{let t=indexedDB.open("megamonstruos",1);t.onupgradeneeded=()=>t.result.createObjectStore("musica"),t.onsuccess=()=>i(t.result),t.onerror=()=>i(null)}catch{i(null)}})}async function Py(i){let t=await xd();return t?new Promise(e=>{try{let n=t.transaction("musica").objectStore("musica").get(i);n.onsuccess=()=>e(n.result||null),n.onerror=()=>e(null)}catch{e(null)}}):null}async function Iy(i,t){let e=await xd();if(e)try{e.transaction("musica","readwrite").objectStore("musica").put(t,i)}catch{}}var Xo=class{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!0,this.engine=null,this.last={}}init(){if(this.ctx){this.ctx.resume?.();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.muted?0:.7;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,this.master.connect(n).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.22,this.musicBus.connect(this.master);let s=e.sampleRate*2;this.noise=e.createBuffer(1,s,e.sampleRate);let r=this.noise.getChannelData(0);for(let o=0;o<s;o++)r[o]=Math.random()*2-1}toggleMute(){return this.muted=!this.muted,this.master&&this.master.gain.setTargetAtTime(this.muted?0:.7,this.ctx.currentTime,.05),this.muted}osc(t,e,n,s,r,o=0,a=this.sfx){let c=this.ctx,l=c.currentTime+o,h=c.createOscillator(),u=c.createGain();h.type=t,h.frequency.setValueAtTime(e,l),n!==e&&h.frequency.exponentialRampToValueAtTime(Math.max(1,n),l+s),u.gain.setValueAtTime(1e-4,l),u.gain.exponentialRampToValueAtTime(r,l+.01),u.gain.exponentialRampToValueAtTime(1e-4,l+s),h.connect(u).connect(a),h.start(l),h.stop(l+s+.05)}noiseBurst(t,e,n,s,r=s,o=1,a=0,c=this.sfx){let l=this.ctx,h=l.currentTime+a,u=l.createBufferSource();u.buffer=this.noise,u.playbackRate.value=.8+Math.random()*.4;let d=l.createBiquadFilter();d.type=n,d.Q.value=o,d.frequency.setValueAtTime(s,h),r!==s&&d.frequency.exponentialRampToValueAtTime(Math.max(20,r),h+t);let f=l.createGain();f.gain.setValueAtTime(e,h),f.gain.exponentialRampToValueAtTime(1e-4,h+t),u.connect(d).connect(f).connect(c),u.start(h,Math.random()),u.stop(h+t+.05)}play(t,e=1){if(!this.ctx||this.muted||e<.02)return;let n=this.ctx.currentTime;if(this.last[t]&&n-this.last[t]<.06)return;this.last[t]=n;let s=e;switch(t){case"count":this.osc("square",520,520,.22,.25*s);break;case"go":this.osc("square",1040,1040,.6,.28*s),this.osc("square",1560,1560,.6,.12*s);break;case"crash":this.noiseBurst(.45,.9*s,"lowpass",1600,200),this.osc("sine",120,45,.35,.8*s);break;case"crunch":for(let r=0;r<4;r++)this.noiseBurst(.12,.6*s,"bandpass",900+r*500,400,3,r*.05);this.osc("square",140,60,.3,.25*s);break;case"splash":this.noiseBurst(.9,.8*s,"highpass",500,2500,.7),this.noiseBurst(.5,.5*s,"lowpass",600,150);break;case"boing":this.osc("sine",180,720,.25,.4*s),this.osc("sine",720,360,.3,.25*s,.2);break;case"boom":this.noiseBurst(1.4,1*s,"lowpass",900,60),this.osc("sine",90,30,.9,.9*s);break;case"pickup":[660,880,1320].forEach((r,o)=>this.osc("triangle",r,r,.12,.25*s,o*.06));break;case"tick":this.osc("square",1800,1800,.03,.08*s);break;case"item":this.osc("triangle",990,1480,.15,.25*s);break;case"nitro":this.noiseBurst(1,.7*s,"bandpass",400,3e3,2),this.osc("sawtooth",110,330,.8,.12*s);break;case"turbo":this.noiseBurst(.5,.45*s,"bandpass",600,2400,2);break;case"wave":this.osc("sine",700,60,.7,.6*s),this.noiseBurst(.6,.5*s,"lowpass",2e3,100);break;case"snap":this.noiseBurst(.05,.9*s,"highpass",1500,1500),this.noiseBurst(.05,.9*s,"highpass",1500,1500,1,.18),this.osc("sawtooth",70,50,.6,.25*s,.05);break;case"net":this.osc("sine",110,55,.6,.5*s),this.osc("sawtooth",90,70,.5,.1*s);break;case"land":this.osc("sine",90,40,.25,.7*s),this.noiseBurst(.2,.4*s,"lowpass",500,120);break;case"scrape":this.noiseBurst(.18,.35*s,"bandpass",2600,1800,4);break;case"bump":this.osc("sine",150,70,.15,.5*s),this.noiseBurst(.1,.3*s,"lowpass",800,200);break;case"fall":this.osc("sine",1100,160,1.1,.3*s);break;case"lap":[784,1046].forEach((r,o)=>this.osc("triangle",r,r,.25,.3*s,o*.14));break;case"final":[784,988,1175,1568].forEach((r,o)=>this.osc("square",r,r,.16,.16*s,o*.1));break;case"finish":[523,659,784,1046,784,1046].forEach((r,o)=>this.osc("square",r,r,o===5?.7:.16,.18*s,o*.14));break;case"throw":this.noiseBurst(.25,.4*s,"bandpass",500,1800,1.5),this.osc("triangle",220,440,.18,.2*s);break;case"rocket":this.noiseBurst(1.2,.6*s,"bandpass",1800,600,1.2),this.osc("sawtooth",300,900,.6,.12*s);break;case"click":this.osc("triangle",600,900,.07,.2*s);break;case"wrong":this.osc("square",300,200,.3,.15*s);break}}engineStart(){if(!this.ctx||this.engine)return;let t=this.ctx,e=t.createGain();e.gain.value=0;let n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=500,n.Q.value=3;let s=t.createOscillator();s.type="sawtooth";let r=t.createOscillator();r.type="square";let o=t.createOscillator();o.type="sawtooth";let a=t.createGain();a.gain.value=.5,s.connect(n),r.connect(a).connect(n),o.connect(n),n.connect(e).connect(this.sfx),s.start(),r.start(),o.start(),this.engine={g:e,f:n,o1:s,o2:r,o3:o}}engineUpdate(t,e,n,s){if(!this.engine)return;let r=this.ctx.currentTime,o=Math.min(1.3,Math.max(0,t))+(s?.25*e:0),a=38+o*95+(n?25:0);this.engine.o1.frequency.setTargetAtTime(a,r,.06),this.engine.o2.frequency.setTargetAtTime(a*.5,r,.06),this.engine.o3.frequency.setTargetAtTime(a*1.01+2,r,.06),this.engine.f.frequency.setTargetAtTime(300+o*900+e*500,r,.08),this.engine.g.gain.setTargetAtTime(this.muted?0:.07+e*.05,r,.1)}engineStop(){if(!this.engine)return;let t=this.engine,e=this.ctx.currentTime;t.g.gain.setTargetAtTime(0,e,.1),setTimeout(()=>{try{t.o1.stop(),t.o2.stop(),t.o3.stop()}catch{}},400),this.engine=null}prepareMusic(){if(this.songs||!this.ctx)return;this.songs={};let t=async e=>{let n=gd(e);try{let s=await this.loadMp3(e,n);this.songs[e]=s||{buf:await this.renderOrCache(e,n),...n}}catch(s){console.warn("M\xFAsica no disponible:",e,s?.message||s);return}this.wantSong===e&&!this.musicSrc&&this.playSong(e)};t("menu").then(()=>t("race"))}async loadMp3(t,e){if(location.protocol==="file:"||typeof fetch!="function")return null;try{let n=await fetch(`assets/musica/${t}-v${Ll}.mp3`);if(!n.ok)return null;let s=await n.arrayBuffer(),r=await new Promise((c,l)=>{let h=this.ctx.decodeAudioData(s,c,l);h&&h.catch&&h.catch(l)}),a=r.duration-e.seconds>Cy?Ry:0;return r.duration<e.loopEnd+a?null:{buf:r,loopStart:e.loopStart+a,loopEnd:e.loopEnd+a,seconds:e.seconds,from:"mp3"}}catch{return null}}async renderOrCache(t,e){if(typeof OfflineAudioContext>"u")throw new Error("sin OfflineAudioContext");let n=32e3,s=`${t}-v${Ll}-${n}`,r=await Py(s);if(r&&r.ch?.length===2){let a=this.ctx.createBuffer(2,r.ch[0].length,r.rate);return r.ch.forEach((c,l)=>a.copyToChannel(c,l)),a}let o=await Wo(t,e.seconds,n);return Iy(s,{rate:n,ch:[o.getChannelData(0).slice(),o.getChannelData(1).slice()]}),o}playSong(t){let e=this.songs?.[t];if(this.wantSong=t,this.currentSong===t&&this.musicSrc||(this.stopSong(),!e))return;let n=this.ctx.createBufferSource();n.buffer=e.buf,n.loop=!0,n.loopStart=e.loopStart,n.loopEnd=e.loopEnd;let s=this.ctx.createGain(),r=this.ctx.currentTime;s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(1,r+.4),n.connect(s).connect(this.musicBus),n.start(r+.02),this.musicSrc=n,this.musicGain=s,this.currentSong=t}stopSong(){if(!this.musicSrc)return;let{musicSrc:t,musicGain:e}=this,n=this.ctx.currentTime;e.gain.cancelScheduledValues(n),e.gain.setValueAtTime(e.gain.value,n),e.gain.linearRampToValueAtTime(0,n+.3);try{t.stop(n+.32)}catch{}this.musicSrc=null,this.currentSong=null}musicStart(t=!0){this.ctx&&(this.prepareMusic(),this.musicBus.gain.setTargetAtTime(this.musicOn?t?.34:.26:0,this.ctx.currentTime,.1),this.playSong(t?"race":"menu"),this.musicTempo(1))}musicTempo(t){this.musicSrc&&this.musicSrc.playbackRate.setTargetAtTime(t,this.ctx.currentTime,.3)}musicStop(){this.wantSong=null,this.stopSong()}setMusicOn(t){this.musicOn=t,this.musicBus&&this.musicBus.gain.setTargetAtTime(t?.3:0,this.ctx.currentTime,.1)}};var Ly={solo:{left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"],gas:["ArrowUp","KeyW"],brake:["ArrowDown","KeyS"],item:["Space","ShiftLeft","ShiftRight","KeyE"],reset:["KeyR"]},p1:{left:["KeyA"],right:["KeyD"],gas:["KeyW"],brake:["KeyS"],item:["KeyQ","Space","ShiftLeft","KeyE"],reset:["KeyR"]},p2:{left:["ArrowLeft"],right:["ArrowRight"],gas:["ArrowUp"],brake:["ArrowDown"],item:["Enter","NumpadEnter","ShiftRight","ControlRight","Numpad0"],reset:["Backspace","NumpadDecimal"]}},Dy={0:"A",1:"B",2:"X",3:"Y",5:"RB",9:"Start"},yd={Left:{keys:["ArrowLeft","KeyA"],button:14,axis:0,sign:-1},Right:{keys:["ArrowRight","KeyD"],button:15,axis:0,sign:1},Up:{keys:["ArrowUp","KeyW"],button:12,axis:1,sign:-1},Down:{keys:["ArrowDown","KeyS"],button:13,axis:1,sign:1}},vd=.4,Uy=.15,qo=class{constructor(){this.keys=new Set,this.edges=new Set,this.touch={left:!1,right:!1,gas:!1,brake:!1,item:!1},this.prevPad={},this.padHeld={},this.navState={},this.usedPads=new Set,this.onPadLost=null,this.windows=[];try{navigator.gamepadInputEmulation="gamepad"}catch{}this.attach(window)}attach(t){this.windows.includes(t)||(this.windows.push(t),t.addEventListener("keydown",e=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","Backspace","Enter","NumpadEnter"].includes(e.code)&&e.preventDefault(),this.keys.has(e.code)||this.edges.add(e.code),this.keys.add(e.code)}),t.addEventListener("keyup",e=>this.keys.delete(e.code)),t.addEventListener("blur",()=>this.keys.clear()),t.addEventListener("gamepaddisconnected",e=>{let n=e.gamepad?.index;this.usedPads.has(n)&&(this.usedPads.delete(n),this.onPadLost&&this.onPadLost(n))}))}detach(t){this.windows=this.windows.filter(e=>e!==t)}bindTouch(t){t.querySelectorAll("[data-touch]").forEach(e=>{let n=e.dataset.touch,s=o=>{o.preventDefault(),n==="item"&&!this.touch.item&&this.edges.add("TouchItem"),this.touch[n]=!0,e.classList.add("on")},r=o=>{o.preventDefault(),this.touch[n]=!1,e.classList.remove("on")};e.addEventListener("pointerdown",s),e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("pointerleave",r)})}pressed(...t){for(let e of t)if(this.edges.has(e))return!0;return!1}endFrame(){this.edges.clear()}pads(){let t=new Map;for(let e of this.windows){let n=[];try{n=e.closed?[]:e.navigator.getGamepads?e.navigator.getGamepads():[]}catch{n=[]}for(let s of n){if(!s||!s.connected)continue;let r=t.get(s.index);(!r||s.timestamp>r.timestamp)&&t.set(s.index,s)}}return[...t.values()].sort((e,n)=>e.index-n.index)}padEdges(){this.padList=this.pads();let t={};this.padList.forEach((e,n)=>{let s=(r,o)=>{let a=r+"@"+n;o&&!this.prevPad[a]&&(this.edges.add("Pad"+r),this.edges.add("Pad"+r+"@"+n)),this.prevPad[a]=o};for(let[r,o]of Object.entries(Dy))s(o,!!e.buttons[r]?.pressed);for(let[r,o]of Object.entries(yd)){let a=!!e.buttons[o.button]?.pressed||(e.axes[o.axis]||0)*o.sign>.6;s(r,a),a&&(t[r]=!0)}(e.buttons.some(r=>r?.pressed)||e.axes.some(r=>Math.abs(r||0)>.3))&&(this.usedPads.add(e.index),this.lastPad=e.index)}),this.padHeld=t}nav(t){let e={};for(let[n,s]of Object.entries(yd)){let r=this.navState[n]||(this.navState[n]={t:0,next:vd,armed:!1}),o=s.keys.some(a=>this.keys.has(a))||!!this.padHeld[n];this.pressed(...s.keys,"Pad"+n)?(e[n]=!0,r.t=0,r.next=vd,r.armed=o):o&&r.armed?(r.t+=t,r.t>=r.next&&(e[n]=!0,r.next=Math.max(r.next+Uy,r.t))):r.armed=!1}return e}navReset(){for(let t of Object.values(this.navState))t.armed=!1}rumble(t="solo",e=.6,n=200){let s=this.padList||[],o=(t==="solo"?s.find(c=>c.index===this.lastPad)||s[0]:s[t==="p2"?1:0])?.vibrationActuator;if(!o?.playEffect)return;let a=Math.max(0,Math.min(1,e));try{o.playEffect("dual-rumble",{startDelay:0,duration:n,weakMagnitude:a,strongMagnitude:a*.8})?.catch?.(()=>{})}catch{}}drive(t="solo"){let e=Ly[t],n=this.keys,s=m=>m.some(p=>n.has(p)),r=t!=="p2",o=0,a=0,c=0,l=!1;(s(e.left)||r&&this.touch.left)&&(o-=1),(s(e.right)||r&&this.touch.right)&&(o+=1),(s(e.gas)||r&&this.touch.gas)&&(a=1),(s(e.brake)||r&&this.touch.brake)&&(c=1);let h=t==="p2"?1:0,u=this.padList||[],d=t==="solo"?u.find(m=>m.buttons.some(p=>p.pressed)||Math.abs(m.axes[0]||0)>.15)||u[0]:u[h];if(d){let m=d.axes[0]||0;Math.abs(m)>.15&&(o=Math.max(-1,Math.min(1,o+m)),l=o===m),d.buttons[14]?.pressed&&(o=-1,l=!1),d.buttons[15]?.pressed&&(o=1,l=!1);let p=d.buttons[7]?.value||0;p>.05&&(a=Math.max(a,p)),d.buttons[0]?.pressed&&(a=1);let M=d.buttons[6]?.value||0;M>.05&&(c=Math.max(c,M)),d.buttons[1]?.pressed&&(c=1)}let f=t==="solo"?["PadX","PadRB"]:["PadX@"+h,"PadRB@"+h],g=this.pressed(...e.item,...f,...r?["TouchItem"]:[]),x=this.pressed(...e.reset,t==="solo"?"PadY":"PadY@"+h);return{steer:o,throttle:a,brake:c,item:g,reset:x,analog:l}}};var _d=i=>!!i&&i.getClientRects().length>0,ui=class{constructor(t,{row:e=0,col:n=0,ok:s=null}={}){this.allRows=t,this.start=[e,n],this.defaultOk=s,this.painted=[],this.row=e,this.col=n}rows(){return this.allRows.filter(t=>(t.items?t.items():t.els()).some(_d))}items(t){return t.items?t.items().filter(_d):null}current(){let t=this.rows();return this.row=Math.max(0,Math.min(t.length-1,this.row)),t[this.row]}clear(){for(let t of this.painted)t.classList.remove("focus");this.painted=[]}reset(){[this.row,this.col]=this.start,this.paint()}move(t){let e=this.rows().length,n=Math.max(0,Math.min(e-1,this.row+t));return n===this.row?!1:(this.row=n,this.paint(),!0)}side(t){let e=this.current();if(!e)return!1;if(e.change)return e.change(t),this.paint(),!0;let n=this.items(e),s=Math.max(0,Math.min(n.length-1,this.col+t));return s===this.col?!1:(this.col=s,this.paint(),!0)}ok(){let t=this.current();if(t){if(t.items){let e=this.items(t);e[Math.min(this.col,e.length-1)]?.click();return}(t.ok||this.defaultOk)?.()}}sync(t){let e=this.rows();for(let n=0;n<e.length;n++){let s=e[n];if(s.items){let r=this.items(s).findIndex(o=>o.contains(t));if(r>=0){this.row=n,this.col=r,this.paint();return}}else if(s.els().some(r=>r.contains(t))){this.row=n,this.paint();return}}}paint(){this.clear();let t=this.current();if(!t){this.painted=[];return}if(t.items){let e=this.items(t);this.col=Math.max(0,Math.min(e.length-1,this.col)),this.painted=e.length?[e[this.col]]:[]}else this.painted=t.els();for(let e of this.painted)e.classList.add("focus")}};var Dl={nitro:'<svg viewBox="0 0 64 64"><path d="M26 8h12v6h-12z" fill="#ddd"/><rect x="20" y="14" width="24" height="40" rx="7" fill="#1f8fff" stroke="#fff" stroke-width="3"/><path d="M32 22c5 6 7 10 3 16-1-4-3-5-5-6 1 4-2 7-4 9-2-6 0-12 6-19z" fill="#ffd400"/></svg>',jump:'<svg viewBox="0 0 64 64"><path d="M14 52h36" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M20 46l24-6-24-6 24-6-24-6 24-6" fill="none" stroke="#ffd400" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><path d="M32 4l10 10H22z" fill="#2ee86b"/></svg>',wave:'<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="6" fill="#ff4fd8"/><circle cx="32" cy="32" r="15" fill="none" stroke="#ff4fd8" stroke-width="5"/><circle cx="32" cy="32" r="25" fill="none" stroke="#b07bff" stroke-width="4" stroke-dasharray="8 5"/></svg>',tire:`<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="22" fill="#222" stroke="#555" stroke-width="3"/><circle cx="32" cy="32" r="10" fill="#ffd400"/><g stroke="#666" stroke-width="5">${[0,45,90,135,180,225,270,315].map(i=>`<path d="M32 4v8" transform="rotate(${i} 32 32)"/>`).join("")}</g><path d="M4 50l8-4M2 40l9-1" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`,barrel:'<svg viewBox="0 0 64 64"><rect x="16" y="8" width="32" height="48" rx="6" fill="#d42a1a" stroke="#fff" stroke-width="3"/><rect x="16" y="18" width="32" height="5" fill="#ffd400"/><rect x="16" y="41" width="32" height="5" fill="#ffd400"/><path d="M32 25l-5 9h4l-2 7 7-10h-4l3-6z" fill="#fff"/></svg>',rocket:'<svg viewBox="0 0 64 64"><path d="M50 14c-10 0-20 6-26 16l10 10c10-6 16-16 16-26z" fill="#eee" stroke="#fff" stroke-width="2"/><circle cx="40" cy="24" r="4" fill="#1f8fff"/><path d="M24 30l-10 2 6 6zM34 40l-2 10-6-6z" fill="#ff3030"/><path d="M22 42c-4 2-8 6-10 10 4-2 8-6 10-10z" fill="#ffd400"/><path d="M50 14l-6 0 6 6z" fill="#ff3030"/></svg>'},Ny={nitro:"Nitro",jump:"Supersalto",wave:"Onda expansiva",tire:"Neum\xE1tico loco",barrel:"Barril explosivo",rocket:"Cohete buscador"},Md=Object.keys(Dl);function Rs(i){if(!isFinite(i))return"--:--.--";let t=Math.floor(i/60),e=i-t*60;return`${t}:${e.toFixed(2).padStart(5,"0")}`}var Oy=`
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
  <div class="h-tag"></div>`,Yo=class{constructor(t,e,{doc:n=document,parent:s=null,tag:r="",keyhint:o="ESPACIO"}={}){this.game=t,this.player=e,this.doc=n,this.root=n.createElement("div"),this.root.className="hud hidden",this.root.innerHTML=Oy,(s||n.body).appendChild(this.root);let a=c=>this.root.querySelector("."+c);this.el={pos:a("pos-num"),posTotal:a("pos-total"),lap:a("lap-num"),lapTotal:a("lap-total"),time:a("time-total"),best:a("time-best"),item:a("item-slot"),itemBox:a("h-item"),itemName:a("item-name"),speed:a("speed-num"),boost:a("boost-fill"),msg:a("h-msg"),big:a("h-big"),ranking:a("ranking"),hint:a("h-hint"),tag:a("h-tag")},a("keyhint").textContent=o,this.el.tag.textContent=r,this.el.tag.classList.toggle("hidden",!r),this.map=a("minimap"),this.mctx=this.map.getContext("2d"),this.cache={},this.msgT=0,this.bigT=0,this.rollT=0,this.rollIdx=0,this.prepMap()}place(t,e,n,s,r,o){let a=this.root.style;a.left=t*100+"%",a.top=e*100+"%",a.width=n*100+"%",a.height=s*100+"%",this.root.classList.toggle("compact",r<760||o<520)}remove(){this.root.remove()}set(t,e,n,s="textContent"){this.cache[t]!==n&&(this.cache[t]=n,e[s]=n)}show(t){this.root.classList.toggle("hidden",!t)}prepMap(){let t=this.game.track,e=1/0,n=-1/0,s=1/0,r=-1/0;for(let p=0;p<t.N;p++)e=Math.min(e,t.px[p]),n=Math.max(n,t.px[p]),s=Math.min(s,t.pz[p]),r=Math.max(r,t.pz[p]);let o=this.map.width,a=18,c=(o-2*a)/Math.max(n-e,r-s),l=a+(o-2*a-(n-e)*c)/2,h=a+(o-2*a-(r-s)*c)/2;this.toMap=(p,M)=>[l+(p-e)*c,h+(M-s)*c];let u=this.doc.createElement("canvas");u.width=u.height=o;let d=u.getContext("2d"),f=(p,M,v=3)=>{d.beginPath();for(let y=p;y<=M;y+=v){let C=t.pointAt(y),[T,w]=this.toMap(C.x,C.z);y===p?d.moveTo(T,w):d.lineTo(T,w)}};d.lineJoin="round",d.lineCap="round",f(0,t.length),d.closePath(),d.strokeStyle="rgba(0,0,0,0.55)",d.lineWidth=12,d.stroke(),d.strokeStyle="#d9b98c",d.lineWidth=7,d.stroke(),f(t.tunnel.s0,t.tunnel.s1),d.strokeStyle="#555",d.lineWidth=7,d.stroke();for(let p of t.pits)f(p.s0,p.s1,1),d.strokeStyle=p.water?"#2bb3a0":"#222",d.lineWidth=9,d.stroke();let g=t.pointAt(0),[x,m]=this.toMap(g.x,g.z);d.fillStyle="#fff",d.save(),d.translate(x,m),d.rotate(g.th+Math.PI/2),d.fillRect(-6,-2,12,4),d.restore(),this.mapBg=u}drawMap(){let t=this.mctx,e=this.map.width;t.clearRect(0,0,e,e),t.drawImage(this.mapBg,0,0);let n=this.player,s=o=>o===n?2:o.isPlayer?1:0,r=[...this.game.vehicles].sort((o,a)=>s(o)-s(a));for(let o of r){let[a,c]=this.toMap(o.x,o.z);t.beginPath(),t.arc(a,c,o===n?7:o.isPlayer?6:5,0,Math.PI*2),t.fillStyle="#"+new kt(o.def.color).getHexString(),t.fill(),t.lineWidth=o.isPlayer?3:1.5,t.strokeStyle=o===n?"#fff":o.isPlayer?o.human===1?"#3ca0ff":"#ffcc00":"#111",t.stroke()}}message(t,e=1.6,n=""){this.el.msg.textContent=t,this.el.msg.className="h-msg show "+n,this.msgT=e}big(t,e=.9,n=""){this.el.big.textContent=t,this.el.big.className="h-big",this.el.big.offsetWidth,this.el.big.className="h-big show "+n,this.bigT=e}update(t){let e=this.game,n=this.player;if(!n)return;let s=e.vehicles.length;this.set("pos",this.el.pos,String(n.place)),this.set("posTotal",this.el.posTotal,"/"+s),this.set("lap",this.el.lap,String(Math.max(1,Math.min(e.laps,n.lap)))),this.set("lapTotal",this.el.lapTotal,String(e.laps));let r=n.finished?n.finishTime:e.raceTime;this.set("time",this.el.time,Rs(r));let o=n.lapTimes.length?Math.min(...n.lapTimes):1/0;this.set("best",this.el.best,isFinite(o)?"Mejor vuelta "+Rs(o):""),this.set("speed",this.el.speed,String(Math.round(Math.abs(n.vF)*3.6))),this.el.boost.style.width=Math.min(100,n.boost/2.2*100)+"%",n.itemRoll>0?(this.rollT-=t,this.rollT<=0&&(this.rollT=.08,this.rollIdx=(this.rollIdx+1)%Md.length,e.sound.play("tick",.6)),this.set("item",this.el.item,Dl[Md[this.rollIdx]],"innerHTML"),this.set("itemName",this.el.itemName,"..."),this.el.itemBox.classList.add("rolling")):(this.el.itemBox.classList.remove("rolling"),this.set("item",this.el.item,n.item?Dl[n.item]:"","innerHTML"),this.set("itemName",this.el.itemName,n.item?Ny[n.item]:""),this.el.itemBox.classList.toggle("ready",!!n.item));let c=[...e.vehicles].sort((l,h)=>l.place-h.place).map(l=>`<li class="${l.isPlayer?l.human===1?"other":"me":""}${l.finished?" done":""}"><i style="background:#${new kt(l.def.color).getHexString()}"></i>${l.place}. ${l.def.name}</li>`).join("");this.set("ranking",this.el.ranking,c,"innerHTML"),this.msgT>0&&(this.msgT-=t,this.msgT<=0&&(this.el.msg.className="h-msg")),this.bigT>0&&(this.bigT-=t,this.bigT<=0&&(this.el.big.className="h-big")),this.drawMap()}hint(t){this.set("hint",this.el.hint,t||""),this.el.hint.classList.toggle("show",!!t)}};var Fy=["clasico","selva","nieve","ciudad","volcan"],By=[10,7,5,3,2,1];function Ul(i){return{round:0,ids:[...Fy],humans:[...i],table:{},awarded:-1}}function bd(i,t){i.awarded!==i.round&&(i.awarded=i.round,t.forEach((e,n)=>{var r;let s=(r=i.table)[e]||(r[e]={pts:0,wins:0,last:0,gained:0});s.gained=By[n]||0,s.pts+=s.gained,n===0&&s.wins++,s.last=n+1}))}function Nl(i){return Object.entries(i.table).map(([t,e])=>({id:t,...e})).sort((t,e)=>e.pts-t.pts||e.wins-t.wins||t.last-e.last)}function Ed(){let i=new Kt,t=[],e=[{place:1,x:0,h:3,color:16762910},{place:2,x:-6.6,h:2,color:13226718},{place:3,x:6.6,h:1.3,color:13664572}];for(let n of e){let s=new z(new Ct(6.2,n.h,6.2),new K({color:n.color,metalness:.35,roughness:.45}));s.position.set(n.x,n.h/2-.6,0),s.castShadow=!0,s.receiveShadow=!0,i.add(s);let r=document.createElement("canvas");r.width=r.height=128;let o=r.getContext("2d");o.font="bold 104px Bangers, Impact, sans-serif",o.textAlign="center",o.textBaseline="middle",o.lineWidth=10,o.strokeStyle="#141018",o.strokeText(String(n.place),64,70),o.fillStyle="#ffffff",o.fillText(String(n.place),64,70);let a=new cn(r);a.colorSpace=be;let c=Math.min(2.2,n.h*.85),l=new z(new ve(c,c),new Re({map:a,transparent:!0}));l.position.set(n.x,n.h/2-.6,3.11),i.add(l),t[n.place-1]=new U(n.x,n.h-.6,0)}return i.visible=!1,{group:i,spots:t}}var lr=1/120,Zo={facil:{mul:.86,skill:.7,label:"F\xE1cil"},normal:{mul:.95,skill:1,label:"Normal"},dificil:{mul:1.03,skill:1.5,label:"Dif\xEDcil"}},Sd={log:"\xA1TRONCO!",ball:"\xA1BOLAZO!",boom:"\xA1BOOM!",net:"\xA1ATRAPADO EN LA RED!",crush:"\xA1CRUNCH!",fallPit:"\xA1AL FOSO!",fallWater:"\xA1COCODRILOS!",waved:"\xA1ONDA EXPANSIVA!",nitro:"\xA1NITRO!",jump:"\xA1SUPERSALTO!",tired:"\xA1NEUMATAZO!",barreled:"\xA1BARRILAZO!",rocketed:"\xA1COHETAZO!",rocketWarn:"\xA1TE SIGUE UN COHETE!"},ky=.85,$o=["PRIMERO","SEGUNDO","TERCERO","CUARTO","QUINTO","SEXTO"],Hy={solo:"ESPACIO",p1:"Q / ESPACIO",p2:"INTRO"},Dt=i=>document.getElementById(i),rn=(i,t,e)=>i<t?t:i>e?e:i,Jo=i=>"#"+new kt(i).getHexString(),zy=(i,t,e)=>{let n=t-i;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return i+n*e};function wd(i,t){try{return{...t,...JSON.parse(localStorage.getItem(i)||"{}")}}catch{return{...t}}}function Ol(i,t){try{localStorage.setItem(i,JSON.stringify(t))}catch{}}function Gy(){try{let i=document.createElement("canvas").getContext("webgl2")||document.createElement("canvas").getContext("webgl");if(!i)return!0;let t=i.getExtension("WEBGL_debug_renderer_info"),e=String(t?i.getParameter(t.UNMASKED_RENDERER_WEBGL):i.getParameter(i.RENDERER));return/swiftshader|llvmpipe|softpipe|software|basic render/i.test(e)}catch{return!1}}var Rd={alta:{scale:1.75,minScale:.8,shadows:2,aa:!0},media:{scale:1,minScale:.65,shadows:1,aa:!0},baja:{scale:.7,minScale:.45,shadows:0,aa:!1,cheap:!0}},Vy=Gy(),Wy=(()=>{let i="auto";try{i=JSON.parse(localStorage.getItem("megamonstruos.ajustes")||"{}").quality||"auto"}catch{}return i})(),Cd=i=>i==="auto"?Vy?"baja":"alta":i;function Td(i){let t=Rd[Cd(Wy)].aa,e=new oo({canvas:i,antialias:t,powerPreference:"high-performance"}),n=i.ownerDocument.defaultView||window;return e.setPixelRatio(Math.min(n.devicePixelRatio||1,1.75)),e.shadowMap.enabled=!0,e.shadowMap.type=tr,e.toneMapping=rl,e.toneMappingExposure=1,e}var Fl=class{constructor(t,e,n,{doc:s,who:r,tag:o}){this.game=t,this.player=e,this.idx=n,this.who=r,this.doc=s,this.camera=new Le(68,1,.5,4e3),this.camPos=new U,this.camLook=new U,this.camYaw=e.th,this.fov=68,this.shake=0,this.tunnelF=0,this.steerSmooth=0,this.heldSince=null,this.rect={x:0,y:0,w:1,h:1},this.hud=new Yo(t,e,{doc:s,tag:o,keyhint:Hy[r]}),this.hud.el.tag.classList.toggle("p2",n===1)}get external(){return this.doc!==document}dispose(){this.hud.remove()}},Bl=class{constructor(){let t=new URLSearchParams(location.search);this.autopilot=t.has("auto"),this.renderer=Td(Dt("game")),Pu(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.envMap=new Ai(this.renderer).fromScene(new ir,.04).texture,this.camera=new Le(68,1,.5,4e3),this.sound=new Xo,this.input=new qo,this.vehicles=sn.map(e=>new No(e,null)),this.settings=wd("megamonstruos.ajustes",{truck:0,truck2:1,laps:3,diff:"normal",music:!0,mode:1,split:"auto",quality:"auto",circuit:"clasico",cup:!1}),this.settings.truck2===this.settings.truck&&(this.settings.truck2=(this.settings.truck+1)%sn.length),this.records=wd("megamonstruos.records",{}),this.sound.musicOn=this.settings.music,this.laps=this.settings.laps,this.perf={acc:0,n:0,fps:60,scale:1,shadows:-1},this.loadCircuit(this.settings.circuit),this.applyQuality(!0),this.views=[],this.humans=[],this.win2=null,this.renderer2=null,this.buildShowroom(),ws(this.show.scene,!!this.qualityLevel().cheap),this.bindUI(),this.state="title",this.titleSel=this.settings.mode===2?1:0,this.selectStep=0,this.time=0,this.raceTime=0,this.acc=0,this.titlePos=new U,this.titleLook=new U,this.setupRace(1),this.state="title",window.addEventListener("resize",()=>this.resize()),this.resize(),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.state==="race"||this.state==="countdown")&&this.pause()}),this.last=performance.now(),Dt("loading").classList.add("hidden"),this.showScreen("title"),this.updateTitle(),requestAnimationFrame(e=>this.loop(e))}loadCircuit(t){let e=Po(t);if(this.circuit===e)return;if(this.circuit=e,this.scene){this.projectiles.clear();for(let o of this.vehicles)this.scene.remove(o.mesh);for(let o of Object.values(this.projectiles.pool))for(let a of o)this.scene.remove(a);$u(this.scene)}Uu(e.theme.tex);let n=this.scene=new Ri;n.environment=this.envMap,this.envBase=n.environmentIntensity=e.theme.volcano?.3:.45,this.track=new Mo(e),this.trackMeshes=ed(this.track,n),this.world=sd(n,this.track),this.fx=new zo(n),this.fx.dustColor=e.theme.dust,this.obstacles=new Fo(this.track,n,this),this.projectiles=new ko(n,this);for(let o of this.vehicles)o.track=this.track,n.add(o.mesh);let s=new ve(1,1).rotateX(-Math.PI/2),r=new Re({map:wo(),color:0,transparent:!0,opacity:.55,depthWrite:!1});this.blobs=this.vehicles.map(()=>{let o=new z(s,r.clone());return o.renderOrder=1,o.visible=!1,n.add(o),o}),this.headlight=new go(16774352,0,90,.55,.5,1.2),n.add(this.headlight,this.headlight.target),this.tunnelLight=new Wn(e.theme.volcano?16742960:16769696,0,45,1.4),n.add(this.tunnelLight),this.flash=new Wn(16752704,0,60,1.5),n.add(this.flash),this.rings=[];for(let o=0;o<4;o++){let a=new z(new nn(1,.35,8,40),new Re({color:16732120,transparent:!0,opacity:0,depthWrite:!1}));a.rotation.x=Math.PI/2,a.visible=!1,n.add(a),this.rings.push({mesh:a,t:1})}if(this.snowT=0,this.perf.shadows>=0){let o=this.qualityLevel();this.world.setShadowSize(this.perf.shadows===2?2048:1024),ws(n,!!o.cheap)}this.vehicles.forEach((o,a)=>o.placeAt(this.track.wrap(-12-a*8),a%2?5:-5,0)),this.views=this.views||[]}ambient(t){let e=this.track.theme;if(!e.snow&&!e.volcano)return;let n=this.views.length&&this.state!=="title"?this.views.map(s=>s.camera):[this.camera];for(this.snowT+=t*(e.snow?70:18)*(this.perf.shadows===0?.6:1);this.snowT>=1;){this.snowT-=1;for(let s of n){let r=s.position,o=r.x+(Math.random()-.5)*90,a=r.z+(Math.random()-.5)*90;e.snow?this.fx.soft.emit({x:o,y:r.y+10+Math.random()*18,z:a,vx:1.5,vy:-4,vz:.6,life:6,size:.35,color:[1,1,1],alpha:.9,gravity:0,drag:0}):this.fx.glow.emit({x:o,y:r.y-4+Math.random()*6,z:a,vx:Math.random()-.5,vy:2+Math.random()*2,vz:Math.random()-.5,life:3,size:.3,color:[1,.45,.1],alpha:.9,gravity:0,drag:0})}}}circuitTag(){let t=this.circuit;return t.id+(t.rev>1?"@"+t.rev:"")}recordKey(t,e){return(this.circuit.id==="clasico"?"":this.circuitTag()+"_")+t+"_"+e}lapRecordKey(){return this.circuit.id==="clasico"?"vuelta":"vuelta_"+this.circuitTag()}get player(){return this.humans[0]}bindUI(){let t=(n,s)=>Dt(n).addEventListener("click",()=>{this.sound.init(),this.sound.play("click"),s()});t("btn-play",()=>this.goSelect(1)),t("btn-play2",()=>this.goSelect(2)),t("btn-prev",()=>this.changeTruck(-1)),t("btn-next",()=>this.changeTruck(1)),t("btn-start",()=>this.confirmSelect()),t("btn-back",()=>this.backSelect()),t("btn-resume",()=>this.resume()),t("btn-restart",()=>this.startRace()),t("btn-quit",()=>this.goTitle()),t("btn-again",()=>this.startRace()),t("btn-change",()=>this.goSelect(this.settings.mode)),t("btn-menu",()=>this.goTitle()),t("btn-sound",()=>this.toggleMute()),t("btn-music",()=>this.toggleMusic()),t("btn-pause",()=>this.pause()),t("btn-fs",()=>this.toggleFullscreen()),t("btn-fs-pause",()=>this.toggleFullscreen()),t("btn-cup-next",()=>this.cupNext()),t("btn-cup-quit",()=>this.goTitle()),t("btn-cup-again",()=>this.startCup()),t("btn-cup-menu",()=>this.goTitle()),document.querySelectorAll("[data-cup]").forEach(n=>n.addEventListener("click",()=>{this.sound.play("click"),this.settings.cup=n.dataset.cup==="1",this.refreshOptions(),this.updateSelect()})),document.querySelectorAll("[data-laps]").forEach(n=>n.addEventListener("click",()=>{this.sound.play("click"),this.settings.laps=+n.dataset.laps,this.refreshOptions(),this.updateSelect()})),document.querySelectorAll("[data-diff]").forEach(n=>n.addEventListener("click",()=>{this.sound.play("click"),this.settings.diff=n.dataset.diff,this.refreshOptions()})),Dt("circuit-opts").innerHTML=Co.map(n=>`<button data-circuit="${n.id}">${n.short}</button>`).join(""),document.querySelectorAll("[data-circuit]").forEach(n=>n.addEventListener("click",()=>{this.sound.play("click"),this.settings.circuit=n.dataset.circuit,this.loadCircuit(this.settings.circuit),this.refreshOptions(),this.updateSelect()})),document.querySelectorAll("[data-quality]").forEach(n=>n.addEventListener("click",()=>{this.sound.play("click"),this.settings.quality=n.dataset.quality,this.applyQuality(!0),this.refreshOptions()})),window.addEventListener("keydown",n=>{n.code==="KeyF"&&!n.repeat&&this.toggleFps()}),document.querySelectorAll("[data-split]").forEach(n=>n.addEventListener("click",()=>{if(this.sound.play("click"),n.dataset.split==="window"){if(!this.openWindow2())return}else this.closeWindow2();this.settings.split=n.dataset.split,this.refreshOptions()})),this.input.bindTouch(Dt("touch")),this.isTouch=window.matchMedia("(pointer: coarse)").matches;let e=()=>{this.sound.init(),(this.state==="title"||this.state==="select")&&this.sound.musicStart(!1)};window.addEventListener("pointerdown",e,{once:!0}),window.addEventListener("keydown",e,{once:!0}),window.addEventListener("beforeunload",()=>{this.win2&&!this.win2.closed&&this.win2.close()}),this.buildMenus(),this.refreshOptions()}buildMenus(){let t=(...r)=>()=>r.map(Dt),e=r=>()=>[...document.querySelectorAll(r)],n=r=>({els:()=>[document.querySelector(r).closest(".opt")],change:o=>{let a=[...document.querySelectorAll(r)],c=Math.max(0,a.findIndex(l=>l.classList.contains("sel")));a[(c+o+a.length)%a.length].click()}});this.menus={title:new ui([{items:e(".corner-btns .round")},{els:()=>[this.titleSel===1?Dt("btn-play2"):Dt("btn-play")],change:()=>{this.titleSel=1-this.titleSel,this.sound.play("click"),this.updateTitle()},ok:()=>{this.sound.init(),this.sound.play("click"),this.goSelect(this.titleSel+1)}}],{row:1}),select:new ui([{els:t("btn-prev","btn-next","truck-name"),change:r=>{this.sound.play("click"),this.changeTruck(r)}},n("[data-cup]"),n("[data-circuit]"),n("[data-laps]"),n("[data-diff]"),n("[data-quality]"),n("[data-split]"),{items:t("btn-back","btn-start")}],{ok:()=>{this.sound.play("click"),this.confirmSelect()},col:1}),pause:new ui(["btn-resume","btn-restart","btn-fs-pause","btn-quit"].map(r=>({items:t(r)}))),results:new ui([{items:t("btn-again","btn-cup-next")},{items:t("btn-change","btn-menu","btn-cup-quit")}]),podium:new ui([{items:t("btn-cup-again","btn-cup-menu")}])};let s=r=>{r.type==="pointermove"&&!r.movementX&&!r.movementY||(document.body.classList.remove("nav-on"),r.type==="pointerdown"&&this.menus[this.menuName()]?.sync(r.target))};window.addEventListener("pointermove",s),window.addEventListener("pointerdown",s),document.fullscreenEnabled||document.querySelectorAll(".fs-btn").forEach(r=>r.classList.add("hidden")),document.addEventListener("fullscreenchange",()=>{let r=!!document.fullscreenElement;Dt("btn-fs-pause").textContent=r?"Salir de pantalla completa":"Pantalla completa",Dt("btn-fs").classList.toggle("on",r)}),this.input.onPadLost=()=>this.pause()}menuName(){return this.state==="finished"?this.resultsT<-1?"results":null:{title:"title",select:"select",paused:"pause",podium:"podium"}[this.state]||null}toggleFullscreen(){try{document.fullscreenElement?document.exitFullscreen?.()?.catch?.(()=>{}):document.documentElement.requestFullscreen?.()?.catch?.(()=>{})}catch{}}refreshOptions(){document.querySelectorAll("[data-laps]").forEach(s=>s.classList.toggle("sel",+s.dataset.laps===this.settings.laps)),document.querySelectorAll("[data-diff]").forEach(s=>s.classList.toggle("sel",s.dataset.diff===this.settings.diff)),document.querySelectorAll("[data-quality]").forEach(s=>s.classList.toggle("sel",s.dataset.quality===this.settings.quality)),document.querySelectorAll("[data-circuit]").forEach(s=>s.classList.toggle("sel",s.dataset.circuit===this.settings.circuit)),Dt("circuit-desc").textContent=`${this.circuit.name}: ${this.circuit.desc}`;let t=!!this.settings.cup;document.querySelectorAll("[data-cup]").forEach(s=>s.classList.toggle("sel",s.dataset.cup==="1"===t)),document.querySelector(".opt-circuit").classList.toggle("hidden",t),Dt("circuit-desc").classList.toggle("hidden",t),Dt("cup-route").classList.toggle("hidden",!t),Dt("cup-route").textContent="Recorrido: "+Ul([]).ids.map(s=>Po(s).short).join(" \u2192 ");let e=this.settings.split==="window"&&this.win2Ready();document.querySelectorAll("[data-split]").forEach(s=>s.classList.toggle("sel",s.dataset.split==="window"===e));let n=location.protocol==="file:";Dt("screen2-note").textContent=n?"Para usar dos monitores: estira esta ventana por los dos (pantalla partida lado a lado) o abre el juego con \xABnpm start\xBB para tener una ventana por jugador.":e?"Arrastra la ventana del jugador 2 al otro monitor y ponla a pantalla completa (F11).":"",Dt("btn-sound").classList.toggle("off",this.sound.muted),Dt("btn-music").classList.toggle("off",!this.sound.musicOn),Ol("megamonstruos.ajustes",this.settings)}toggleMute(){this.sound.toggleMute(),this.refreshOptions()}toggleMusic(){this.sound.setMusicOn(!this.sound.musicOn),this.settings.music=this.sound.musicOn,this.refreshOptions()}showScreen(t){for(let n of["title","select","pause","results","cupnext","podium"])Dt("screen-"+n).classList.toggle("hidden",n!==t);let e=t===null;for(let n of this.views)n.hud.show(e||t==="pause");Dt("touch").classList.toggle("hidden",!(e&&this.isTouch&&this.humans.length===1)),Dt("btn-pause").classList.toggle("hidden",!e),this.setWindow2Waiting(!(e||t==="pause"||t==="results"));for(let[n,s]of Object.entries(this.menus||{}))n===t?s.reset():s.clear()}updateTitle(){Dt("btn-play").classList.toggle("sel",this.titleSel===0),Dt("btn-play2").classList.toggle("sel",this.titleSel===1)}goTitle(){this.endCup(),this.sound.engineStop(),this.sound.musicStart(!1),this.state="title",this.setupRace(1),this.state="title",this.showScreen("title"),this.updateTitle()}goSelect(t=this.settings.mode){this.endCup(),this.settings.mode=t,this.titleSel=t===2?1:0,this.selectStep=0,this.sound.engineStop(),this.sound.init(),this.sound.musicStart(!1),this.state="select",this.showScreen("select"),this.refreshOptions(),this.updateSelect()}selKey(){return this.selectStep===1?"truck2":"truck"}changeTruck(t){let e=this.selKey(),n=this.settings[e];do n=(n+t+sn.length)%sn.length;while(this.selectStep===1&&n===this.settings.truck);this.settings[e]=n,this.showSpin=0,this.updateSelect(),this.refreshOptions()}confirmSelect(){if(this.settings.mode===2&&this.selectStep===0){this.selectStep=1,this.settings.truck2===this.settings.truck&&(this.settings.truck2=(this.settings.truck+1)%sn.length),this.showSpin=0,this.updateSelect(),this.menus.select.reset();return}this.settings.cup?this.startCup():this.startRace()}backSelect(){if(this.selectStep===1){this.selectStep=0,this.updateSelect(),this.menus.select.reset();return}this.goTitle()}updateSelect(){let t=this.settings.mode===2,e=this.settings[this.selKey()],n=sn[e];this.show.trucks.forEach((o,a)=>{o.root.visible=a===e}),Dt("select-who").classList.toggle("hidden",!t),Dt("select-who").classList.toggle("p2",this.selectStep===1),Dt("select-who").textContent=this.selectStep===1?"JUGADOR 2":"JUGADOR 1",Dt("opt-screen2").classList.toggle("hidden",!t),Dt("select-keys").classList.toggle("hidden",!t),Dt("select-keys").textContent="J1: W A S D, objeto Q \xB7 J2: flechas, objeto Intro \xB7 o un mando para cada uno",Dt("btn-start").textContent=t&&this.selectStep===0?"SIGUIENTE":"\xA1A CORRER!",Dt("truck-name").textContent=n.name,Dt("truck-name").style.color=Jo(n.color),Dt("truck-desc").textContent=n.desc;let s={speed:"Velocidad",accel:"Aceleraci\xF3n",handling:"Manejo",weight:"Peso"};Dt("truck-stats").innerHTML=Object.entries(s).map(([o,a])=>`<div class="stat"><span>${a}</span><div class="bar">${[1,2,3,4,5].map(c=>`<i class="${c<=n.stats[o]?"on":""}"></i>`).join("")}</div></div>`).join("");let r=this.records[this.recordKey(n.id,this.settings.laps)];Dt("truck-record").textContent=r?`R\xE9cord con ${this.settings.laps} ${this.settings.laps===1?"vuelta":"vueltas"}: ${Rs(r)}`:"",this.settings.cup&&(Dt("truck-record").textContent=this.cupRecordText()),Dt("truck-dots").innerHTML=sn.map((o,a)=>{let c=this.selectStep===1&&a===this.settings.truck;return`<i class="${a===e?"on":""}${c?" taken":""}" style="background:${Jo(o.color)}"></i>`}).join("")}win2Ready(){return!!(this.win2&&!this.win2.closed&&this.renderer2)}openWindow2(){if(location.protocol==="file:")return this.refreshOptions(),!1;if(this.win2Ready())return!0;let t=window.open(location.pathname+"?pantalla2","megamonstruos-j2","popup,width=1280,height=720");if(!t)return Dt("screen2-note").textContent="El navegador ha bloqueado la ventana: permite las ventanas emergentes para esta p\xE1gina.",!1;this.win2=t;let e=performance.now(),n=setInterval(()=>{if(t.closed||performance.now()-e>15e3){clearInterval(n),this.refreshOptions();return}let s=!1;try{s=!!t.__screen2Ready}catch{s=!1}s&&(clearInterval(n),this.setupWindow2(t))},150);return!0}setupWindow2(t){this.renderer2=Td(t.document.getElementById("game")),this.renderer2.setPixelRatio(this.perf.scale),this.renderer2.shadowMap.enabled=this.perf.shadows>0,this.renderer2.shadowMap.type=this.perf.shadows===2?tr:Qs,this.envMap2=new Ai(this.renderer2).fromScene(new ir,.04).texture,this.input.attach(t),t.addEventListener("resize",()=>this.layoutViews()),t.addEventListener("pagehide",()=>setTimeout(()=>this.onWindow2Closed(),0)),this.layoutViews(),this.refreshOptions(),this.setWindow2Waiting(!(this.state==="race"||this.state==="countdown"||this.state==="finished"))}closeWindow2(){this.win2&&!this.win2.closed&&this.win2.close(),this.onWindow2Closed()}onWindow2Closed(){if(this.win2){if(this.input.detach(this.win2),this.win2=null,this.renderer2)try{this.renderer2.dispose()}catch{}if(this.renderer2=null,this.views.some(t=>t.external)){let t=this.state!=="title"&&this.state!=="select";if(this.buildViews(),t)for(let e of this.views)e.hud.show(!0)}this.refreshOptions()}}setWindow2Waiting(t){if(this.win2Ready())try{this.win2.document.getElementById("screen2-wait").classList.toggle("hidden",!t)}catch{}}buildShowroom(){let t=new Ri;t.environment=this.envMap,t.environmentIntensity=.35;let e=new Le(38,1,.5,500),n=new z(new Ee(200,32,16),new Ge({side:Te,depthWrite:!1,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying vec3 vP; void main(){ float h = vP.y * 0.5 + 0.5; vec3 c = mix(vec3(0.95,0.45,0.12), vec3(0.12,0.08,0.28), smoothstep(0.35, 0.75, h)); gl_FragColor = vec4(c, 1.0); }"}));t.add(n),t.fog=new us(new kt().setRGB(.69,.33,.17,be),40,150),t.add(new vs(16773344,3153984,1.4));let s=new Di(16777215,2.6);s.position.set(8,14,10),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:1,far:50}),t.add(s);let r=new Di(8956671,1.6);r.position.set(-10,6,-8),t.add(r);let o=new Kt;t.add(o);let a=Eo().clone();a.needsUpdate=!0,a.repeat.set(6,6);let c=new z(new Vt(7.5,7.8,.6,48),[new K({color:2236962,metalness:.6,roughness:.4}),new K({map:a,roughness:.5}),new K({color:2236962})]);c.position.y=-.3,c.receiveShadow=!0,o.add(c);let l=new z(new ps(180,48),new K({color:2366003,roughness:.65,metalness:.1}));l.rotation.x=-Math.PI/2,l.position.y=-.6,l.receiveShadow=!0,t.add(l);let h=sn.map(u=>{let d=Uo(u);return d.root.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),o.add(d.root),d.root.visible=!1,d});this.show={scene:t,cam:e,table:o,trucks:h},this.showSpin=0}setupRace(t=this.settings.mode){this.projectiles.clear();let e=Zo[this.settings.diff]||Zo.normal;this.laps=this.settings.laps;let n=this.track.length,s=[this.vehicles[this.settings.truck]];t===2&&s.push(this.vehicles[this.settings.truck2]);let r=this.vehicles.filter(a=>!s.includes(a)).sort(()=>Math.random()-.5),o=t===2?[...r.slice(0,4),...s]:[...r.slice(0,4),s[0],r[4]];this.drivers=new Map,o.forEach((a,c)=>{a.reset(),a.isPlayer=s.includes(a),a.human=s.indexOf(a),a.speedMul=a.isPlayer?1:e.mul,a.placeAt(n-10-Math.floor(c/2)*10,c%2?5.5:-5.5,0),a.place=c+1,this.drivers.set(a,new Oo(a,this.track,{skill:a.isPlayer?1.5:e.skill,preferBridge:Math.random()<.5}))}),this.humans=s,this.raceTime=0,this.countdown=4.2,this.finishCount=0,this.resultsT=0,this.allDoneT=null;for(let a of this.trackMeshes.lights)a.material.color.setHex(3346705);this.buildViews()}buildViews(){for(let n of this.views)n.dispose();let t=this.humans.length===2,e=t&&this.settings.split==="window"&&this.win2Ready();this.views=this.humans.map((n,s)=>new Fl(this,n,s,{doc:s===1&&e?this.win2.document:document,who:t?s===0?"p1":"p2":"solo",tag:t?"J"+(s+1):""}));for(let n of this.views){let s=n.player;n.camPos.set(s.x+Math.cos(s.th)*16,s.y+4,s.z+Math.sin(s.th)*16)}this.layoutViews()}layoutViews(){let t=window.innerWidth,e=window.innerHeight,n=this.views.filter(r=>!r.external),s=t/e>2;n.forEach((r,o)=>{n.length===1?r.rect={x:0,y:0,w:1,h:1}:r.rect=s?{x:o*.5,y:0,w:.5,h:1}:{x:0,y:o*.5,w:1,h:.5};let a=r.rect.w*t,c=r.rect.h*e;r.camera.aspect=a/c,r.camera.updateProjectionMatrix(),r.hud.place(r.rect.x,r.rect.y,r.rect.w,r.rect.h,a,c),r.hud.root.classList.toggle("div-top",o===1&&!s),r.hud.root.classList.toggle("div-left",o===1&&s)});for(let r of this.views.filter(o=>o.external)){let o=this.win2,a=o.innerWidth,c=o.innerHeight;this.renderer2.setSize(a,c,!1),r.rect={x:0,y:0,w:1,h:1},r.camera.aspect=a/c,r.camera.updateProjectionMatrix(),r.hud.place(0,0,1,1,a,c)}}viewOf(t){return this.views.find(e=>e.player===t)}startRace(){this.sound.init(),this.setupRace(this.settings.mode),this.state="countdown",this.showScreen(null),this.sound.musicStop(),this.sound.engineStart(),document.body.classList.toggle("two",this.views.filter(t=>!t.external).length===2),this.cup&&(Dt("cup-banner").textContent=`CARRERA ${this.cup.round+1} DE ${this.cup.ids.length} \xB7 ${this.circuit.name.toUpperCase()}`)}pause(){if(!(this.state!=="race"&&this.state!=="countdown")){this.prevState=this.state,this.state="paused",this.sound.engineStop(),this.showScreen("pause");for(let t of this.views)t.external&&t.hud.message("PAUSA",1e9,"warn")}}resume(){if(this.state==="paused"){this.state=this.prevState,this.showScreen(null);for(let t of this.views)t.external&&t.hud.message("",.01);this.sound.engineStart(),this.last=performance.now()}}rollItem(t){let e=(t.place-1)/Math.max(1,this.vehicles.length-1),n={nitro:.26,jump:.2-.08*e,wave:.12+.08*e,tire:.17,barrel:.18-.1*e,rocket:t.place>1?.04+.2*e:0},s=Math.random()*Object.values(n).reduce((r,o)=>r+o,0);for(let r of Object.keys(n))if(s-=n[r],s<=0)return r;return"nitro"}shockwave(t){let e=this.rings.find(n=>n.t>=1)||this.rings[0];e.t=0,e.mesh.position.set(t.x,t.y+1.5,t.z),e.mesh.visible=!0,this.sound3d("wave",t.x,t.z,1);for(let n of this.vehicles){if(n===t||n.state!=="ok")continue;let s=n.x-t.x,r=n.z-t.z,o=Math.hypot(s,r);o<22&&Math.abs(n.y-t.y)<8&&n.hit({dirX:s/(o||1),dirZ:r/(o||1),push:9,up:5,speedMul:.5,stun:1,kind:"waved"})}}boom(t,e,n){this.flash.position.set(t,e+3,n),this.flash.intensity=4e3,this.sound3d("boom",t,n,1)}sound3d(t,e,n,s=1){let r=this.humans.length?1/0:0;for(let o of this.humans)r=Math.min(r,Math.hypot(o.x-e,o.z-n));this.sound.play(t,s*rn(1-r/90,0,1))}onLap(t){if(t.lap===1){t.lapStart=this.raceTime;return}if(t.lapTimes.push(this.raceTime-t.lapStart),t.lapStart=this.raceTime,t.lap>this.laps&&!t.finished){t.finished=!0,t.finishTime=this.raceTime,t.finishPlace=++this.finishCount,t.isPlayer&&this.playerFinished(t);return}let e=this.viewOf(t);e&&(t.lap===this.laps?(e.hud.big("\xA1\xDALTIMA VUELTA!",1.6,"small"),this.sound.play("final"),this.sound.musicTempo(1.1)):(e.hud.big(`VUELTA ${t.lap}`,1.2,"small"),this.sound.play("lap")))}playerFinished(t){this.viewOf(t).hud.big(t.finishPlace===1?"\xA1GANASTE!":`\xA1${$o[t.finishPlace-1]}!`,3,"small"),this.sound.play("finish"),this.fx.confetti(t.x,t.y,t.z,160);let n=this.recordKey(t.def.id,this.laps);t.newRecord=!this.records[n]||t.finishTime<this.records[n],t.newRecord&&(this.records[n]=t.finishTime);let s=t.lapTimes.length?Math.min(...t.lapTimes):1/0,r=this.lapRecordKey();t.newLapRecord=isFinite(s)&&(!this.records[r]||s<this.records[r]),t.newLapRecord&&(this.records[r]=s),Ol("megamonstruos.records",this.records),this.humans.every(o=>o.finished)?this.endRace():this.allDoneT===null&&(this.allDoneT=45)}endRace(){this.state!=="finished"&&(this.state="finished",this.resultsT=3.2,this.sound.musicStop())}showResults(){let t=this.track.length,e=33,n=[...this.vehicles].map(o=>{let a=o.finishTime;return o.finished||(a=this.raceTime+Math.max(0,(this.laps+1)*t-o.progress)/e),{v:o,t:a,est:!o.finished}}).sort((o,a)=>o.t-a.t),s=o=>n.findIndex(a=>a.v===o)+1,r=this.humans.length===2;if(r){let[o,a]=this.humans.map(s),c=o<a?1:2;Dt("res-title").textContent=Math.min(o,a)===1?`\xA1GANA EL JUGADOR ${c}!`:`\xA1EL JUGADOR ${c} LLEGA ANTES!`}else{let o=s(this.player);Dt("res-title").textContent=o===1?"\xA1HAS GANADO!":o<=3?`\xA1PODIO! QUEDASTE ${$o[o-1]}`:`HAS QUEDADO ${$o[o-1]}`}Dt("res-table").innerHTML=n.map((o,a)=>{let c=this.humans.indexOf(o.v),l=c===0?"me":c===1?"me2":"",h=r&&c>=0?` <b class="tag">J${c+1}</b>`:"";return`<tr class="${l}"><td>${a+1}</td><td><i style="background:${Jo(o.v.def.color)}"></i>${o.v.def.name}${h}</td><td>${o.est?"~":""}${Rs(o.t)}</td></tr>`}).join(""),Dt("res-extra").innerHTML=this.humans.map((o,a)=>{let c=o.lapTimes.length?Math.min(...o.lapTimes):1/0,l=`${r?`J${a+1} \xB7 `:""}Mejor vuelta: ${Rs(c)}`;return o.newRecord?l+=" \xB7 \xA1Nuevo r\xE9cord de carrera!":o.newLapRecord&&(l+=" \xB7 \xA1R\xE9cord de vuelta!"),l}).join("<br>"),this.cupResults(n),this.showScreen("results"),this.sound.musicStart(!1);for(let o of this.views)o.external&&o.hud.message(s(o.player)===1?"\xA1GANASTE!":`\xA1${$o[s(o.player)-1]}!`,1e9,"warn")}startCup(){this.leavePodium();let t=[this.settings.truck];this.settings.mode===2&&t.push(this.settings.truck2),this.cup=Ul(t.map(e=>sn[e].id)),this.cupGo()}cupNext(){let t=this.cup;if(!(!t||this.state!=="finished")){if(t.round>=t.ids.length-1){this.showPodium();return}t.round++,this.cupGo()}}cupGo(){let t=this.cup,e=t.ids[t.round];if(this.circuit.id===e){this.startRace();return}this.sound.engineStop(),this.state="cupnext",this.cupWait=2,Dt("cupnext-round").textContent=`CARRERA ${t.round+1} DE ${t.ids.length}`,Dt("cupnext-name").textContent=`Siguiente: ${Po(e).name}`,this.showScreen("cupnext")}cupLoad(){this.loadCircuit(this.cup.ids[this.cup.round]),this.startRace()}endCup(){this.leavePodium(),this.cup&&(this.cup=null,this.cupResults(null),this.circuit.id!==this.settings.circuit&&this.loadCircuit(this.settings.circuit))}cupRecordText(){let t=this.records.copas||0,e=this.records.copaMejor||0;return`Copas ganadas: ${t}`+(e?` \xB7 Mejor: ${e} puntos`:"")}cupTableHTML(){let t=this.cup,e=t.humans.length===2;return Nl(t).map((n,s)=>{let r=sn.find(l=>l.id===n.id),o=t.humans.indexOf(n.id),a=o===0?"me":o===1?"me2":"",c=e&&o>=0?` <b class="tag">J${o+1}</b>`:"";return`<tr class="${a}" data-id="${n.id}"><td>${s+1}</td><td><i style="background:${Jo(r.color)}"></i>${r.name}${c}</td><td>${n.pts} <small>ptos.</small></td></tr>`}).join("")}cupResults(t){let e=!!(this.cup&&t);for(let s of["btn-again","btn-change","btn-menu"])Dt(s).classList.toggle("hidden",e);for(let s of["btn-cup-next","btn-cup-quit","res-round","cup-general"])Dt(s).classList.toggle("hidden",!e);if(Dt("screen-results").classList.toggle("cup",e),!e)return;let n=this.cup;bd(n,t.map(s=>s.v.def.id)),Dt("res-round").textContent=`CARRERA ${n.round+1} DE ${n.ids.length} \xB7 ${this.circuit.name.toUpperCase()}`,[...Dt("res-table").rows].forEach((s,r)=>{let o=s.insertCell();o.className="pts",o.textContent="+"+n.table[t[r].v.def.id].gained}),Dt("cup-table").innerHTML=this.cupTableHTML(),Dt("btn-cup-next").textContent=n.round===n.ids.length-1?"Ver podio":"Siguiente circuito"}showPodium(){let t=this.cup,e=Nl(t),n=this.show;this.sound.engineStop(),this.state="podium",this.podium||(this.podium=Ed(),n.scene.add(this.podium.group));let s=this.podium;s.trucks=e.slice(0,3).map((u,d)=>{let f=n.trucks[sn.findIndex(g=>g.id===u.id)];return s.group.add(f.root),f.root.position.copy(s.spots[d]),f.root.rotation.set(0,[.35,.75,-.05][d],0),f.root.visible=!0,f}),s.group.visible=!0,n.table.visible=!1,ws(n.scene,!!this.qualityLevel().cheap);let r=t.humans.length===2,o=u=>sn.find(d=>d.id===u).name,a=u=>e.findIndex(d=>d.id===u)+1,c=e[0],l=t.humans.indexOf(c.id);if(Dt("screen-podium").classList.toggle("ai",l<0),l>=0?(Dt("podium-title").textContent=`\xA1CAMPE\xD3N: JUGADOR ${l+1}!`,Dt("podium-sub").textContent=`${o(c.id)} \xB7 ${c.pts} puntos`+(r?` \xB7 Jugador ${2-l}: ${a(t.humans[1-l])}.\xBA`:"")):(Dt("podium-title").textContent=`Campe\xF3n: ${o(c.id)}`,Dt("podium-sub").textContent=r?t.humans.map((u,d)=>`Jugador ${d+1}: ${a(u)}.\xBA`).join(" \xB7 "):`Has quedado ${a(t.humans[0])}.\xBA con ${t.table[t.humans[0]].pts} puntos`),Dt("podium-table").innerHTML=this.cupTableHTML(),!t.done){t.done=!0;let u=Math.max(...t.humans.map(d=>t.table[d].pts));t.newBest=u>(this.records.copaMejor||0),l>=0&&(this.records.copas=(this.records.copas||0)+1),t.newBest&&(this.records.copaMejor=u),Ol("megamonstruos.records",this.records)}Dt("podium-record").textContent=this.cupRecordText()+(t.newBest?" \xB7 \xA1Nuevo r\xE9cord!":"");let h=Dt("confetti");if(!h.children.length){let u=["#ffcc00","#ff6a00","#e2231a","#3ca0ff","#39e639","#ff4fd8","#fff"];h.innerHTML=[...Array(70)].map((d,f)=>`<i style="left:${(Math.random()*100).toFixed(1)}%;background:${u[f%u.length]};animation-delay:${(-Math.random()*6).toFixed(2)}s;animation-duration:${(3.5+Math.random()*3).toFixed(2)}s"></i>`).join("")}this.sound.play("finish"),this.showScreen("podium")}leavePodium(){let t=this.podium;if(!(!t||!t.group.visible)){for(let e of t.trucks)this.show.table.add(e.root),e.root.position.set(0,0,0),e.root.rotation.set(0,0,0),e.root.visible=!1;t.trucks=[],t.group.visible=!1,this.show.table.visible=!0,this.resize()}}renderPodium(t){let e=this.renderer,n=this.show,s=n.cam,r=window.innerWidth,o=window.innerHeight,a=r>o*1.2,c=a?Math.min(440,r*.4)+r*.03:0,l=a?1:1.5;if(s.position.set(Math.sin(this.time*.3)*4,7.5*l,29*l),a)s.aspect=(r+c)/o,s.setViewOffset(r+c,o,c,0,r,o);else{let h=o*.22;s.aspect=r/(o+2*h),s.setViewOffset(r,o+2*h,0,2*h,r,o)}s.lookAt(0,2.4,0),s.updateProjectionMatrix(),this.podium.trucks.forEach((h,u)=>{h.root.position.y=this.podium.spots[u].y+(u===0?Math.abs(Math.sin(this.time*3))*.5:0),cr(h,{wheelSpin:0,steer:Math.sin(this.time*1.2+u)*.5,comp:Math.sin(this.time*4+u)*.05,dt:t})}),e.setScissorTest(!1),e.setViewport(0,0,r,o),e.render(n.scene,s)}step(t,e){if(this.state==="race"||this.state==="finished"){this.raceTime+=t;for(let s of this.vehicles){let r;s.isPlayer&&!s.finished&&!this.autopilot?r=e[s.human]:r=this.drivers.get(s).control(t,this),r.item&&s.useItem(this),s.update(t,r,this)}for(let s of e)s.item=!1;this.collide(),this.obstacles.update(t,this.vehicles),this.projectiles.update(t);for(let s of this.vehicles){if(s.state!=="ok")continue;let r=s.isPlayer&&!this.autopilot?5:2.5;(s.stuckT>r||!s.isPlayer&&s.wrongT>4)&&(s.respawn(s.s,s.d*.5,6),s.stuckT=0,s.wrongT=0)}this.rank()}}collide(){let t=this.vehicles;for(let e=0;e<t.length;e++){let n=t[e];if(n.state!=="fallen")for(let s=e+1;s<t.length;s++){let r=t[s];if(r.state==="fallen")continue;let o=r.x-n.x,a=r.z-n.z,c=o*o+a*a,l=cd*(n.size+r.size);if(c>l*l||Math.abs(n.y-r.y)>2.8*Math.max(n.size,r.size))continue;let h=Math.sqrt(c)||.01,u=o/h,d=a/h,f=l-h,g=n.mass,x=r.mass;n.x-=u*f*(x/(g+x)),n.z-=d*f*(x/(g+x)),r.x+=u*f*(g/(g+x)),r.z+=d*f*(g/(g+x));let m=(r.vx-n.vx)*u+(r.vz-n.vz)*d;if(m<0){let p=-1.4*m/(1/g+1/x);if(n.vx-=p*u/g,n.vz-=p*d/g,r.vx+=p*u/x,r.vz+=p*d/x,-m>4){let M=(n.x+r.x)/2,v=(n.z+r.z)/2;this.sound3d("bump",M,v,rn(-m/15,.2,1)),this.fx.sparks(M,(n.y+r.y)/2+1.8,v,6);for(let y of[n,r]){let C=this.viewOf(y);C&&(C.shake=Math.max(C.shake,rn(-m/20,.1,.5)))}}}}}}rank(){[...this.vehicles].sort((o,a)=>o.finished&&a.finished?o.finishPlace-a.finishPlace:o.finished?-1:a.finished?1:a.progress-o.progress).forEach((o,a)=>{o.place=a+1});let e=(Zo[this.settings.diff]||Zo.normal).mul,n=this.vehicles.reduce((o,a)=>o+a.maxSpeed,0)/this.vehicles.length,s=this.humans.filter(o=>!o.finished),r=s.length?Math.max(...s.map(o=>o.progress)):null;for(let o of this.vehicles){if(o.isPlayer){o.speedMul=1;continue}let a=e*(1+ky*(n-o.maxSpeed)/o.maxSpeed);o.speedMul=r===null?a:a*rn(1+(r-o.progress)/900,.92,1.1)}}handleEvents(){for(let t of this.vehicles){let e=this.viewOf(t),n=!!e,s=r=>{e&&(e.shake=Math.max(e.shake,r),this.input.rumble(e.who,Math.min(1,.35+r*.6),120+220*r))};for(let r of t.events){let o=(c,l=1)=>n?this.sound.play(c,l):this.sound3d(c,t.x,t.z,l);switch(r.type){case"turbo":o("turbo",.8);break;case"box":o("pickup",.8);break;case"gotItem":n&&this.sound.play("item");break;case"nitro":o("nitro");break;case"jump":o("boing"),this.fx.dust(t.x,t.y,t.z,0,0,void 0,10,2);break;case"log":case"ball":o("crash"),s(.7);break;case"boom":s(.9);break;case"waved":s(.5);break;case"tired":o("crash",.8),s(.6);break;case"barreled":case"rocketed":s(1);break;case"throw":o("throw");break;case"rocket":o("rocket");break;case"rocketWarn":n&&this.sound.play("wrong");break;case"net":o("net");break;case"crush":o("crunch",.9),s(.3);break;case"fallPit":case"fallWater":o("fall",.8),e&&this.input.rumble(e.who,1,400);break;case"splash":t.fall?.pit?.liquid==="lava"?(o("boom",.7),this.fx.explosion(t.x,t.y-1,t.z)):(o("splash"),this.fx.splash(t.x,t.y+.5,t.z));break;case"land":if(r.v>9){o("land",rn(r.v/18,.3,1));for(let c=0;c<14;c++){let l=c/14*Math.PI*2;this.fx.dust(t.x+Math.cos(l)*2.5,t.y,t.z+Math.sin(l)*2.5,Math.cos(l)*20,Math.sin(l)*20,void 0,1,2.4)}s(rn(r.v/30,.15,.6))}break;case"scrape":o("scrape",rn(r.v/12,.2,.8)),this.fx.sparks(t.x,t.y+1.2,t.z,4);break;case"wall":o("bump",.6);break}let a=r.type==="fallWater"?Io(this.track.theme,r.liquid):r.type==="log"?this.track.theme.rollerHit:r.type==="ball"?this.track.theme.ballHit||Sd.ball:Sd[r.type];if(e&&a){let c=["fallPit","fallWater","net","ball","boom","rocketWarn"].includes(r.type);e.hud.message(a,c?1.6:1,c?"warn":"")}}t.events.length=0}}qualityLevel(){return Rd[Cd(this.settings.quality)]}applyQuality(t){let e=this.qualityLevel(),n=window.devicePixelRatio||1;t&&(this.perf.scale=Math.min(n,e.scale)),this.perf.scale=Math.max(e.minScale,Math.min(Math.min(n,e.scale),this.perf.scale));for(let s of[this.renderer,this.renderer2])s&&s.setPixelRatio(this.perf.scale);t&&(this.setShadows(e.shadows),ws(this.scene,!!e.cheap),this.show&&ws(this.show.scene,!!e.cheap)),this.show&&this.resize()}setShadows(t){if(this.perf.shadows===t)return;let e=this.perf.shadows!==-1&&this.perf.shadows===0!=(t===0);this.perf.shadows=t;for(let n of[this.renderer,this.renderer2])n&&(n.shadowMap.enabled=t>0,n.shadowMap.type=t===2?tr:Qs,n.shadowMap.needsUpdate=!0);this.world.setShadowSize(t===2?2048:1024),e&&this.scene.traverse(n=>{if(n.material)for(let s of[].concat(n.material))s.needsUpdate=!0})}adaptQuality(t){let e=this.perf;if(e.acc+=t,e.n++,e.acc<1.5||(e.fps=e.n/e.acc,e.acc=0,e.n=0,this.fpsEl&&(this.fpsEl.textContent=`${e.fps.toFixed(0)} fps \xB7 ${Math.round(e.scale*100)}% \xB7 sombras ${["no","s\xED","suaves"][e.shadows]}`),this.settings.quality!=="auto"||!(this.state==="race"||this.state==="countdown"||this.state==="title")))return;let n=this.qualityLevel();e.fps<40?e.scale>n.minScale+.01?(e.scale=Math.max(n.minScale,e.scale*(e.fps<25?.8:.9)),this.applyQuality(!1)):e.shadows>0&&this.setShadows(e.shadows-1):e.fps>56&&e.scale<Math.min(window.devicePixelRatio||1,n.scale)-.01&&(e.scale=Math.min(n.scale,e.scale*1.06),this.applyQuality(!1))}toggleFps(){if(this.fpsEl){this.fpsEl.remove(),this.fpsEl=null;return}this.fpsEl=document.createElement("div"),this.fpsEl.id="fps",this.fpsEl.textContent="\u2026",document.body.appendChild(this.fpsEl)}loop(t){requestAnimationFrame(s=>this.loop(s));let e=Math.max(0,(t-this.last)/1e3),n=Math.min(.05,e);this.last=t,this.adaptQuality(Math.min(e,.5)),this.frame(n)}readControls(t){let e=this.views.length===2;return this.views.map(n=>{let s=this.input.drive(e?n.who:"solo"),r=s.analog?40:s.steer===0?10:Math.sign(s.steer)!==Math.sign(n.steerSmooth)?9:6;return n.steerSmooth+=(s.steer-n.steerSmooth)*Math.min(1,t*r),Math.abs(n.steerSmooth)<.01&&s.steer===0&&(n.steerSmooth=0),{steer:n.steerSmooth,throttle:s.throttle,brake:s.brake,item:s.item,reset:s.reset}})}frame(t){this.frames=(this.frames||0)+1,this.time+=t;let e=this.input;this.win2&&this.win2.closed&&this.onWindow2Closed(),e.padEdges(),this.menuInput(t),this.state==="cupnext"&&--this.cupWait<=0&&this.cupLoad();{let s=!!this.cup&&this.state==="countdown";s!==this.cupBannerOn&&(this.cupBannerOn=s,Dt("cup-banner").classList.toggle("hidden",!s))}let n=this.readControls(t);if(this.state==="race"&&n.forEach((s,r)=>{let o=this.humans[r];s.reset&&o.state==="ok"&&!o.finished&&o.respawn(o.s,o.d*.5,4)}),this.state==="countdown"&&this.updateCountdown(t,n),this.state==="race"||this.state==="finished"){this.acc+=t;let s=0;for(;this.acc>=lr&&s<10;)this.step(lr,n),this.acc-=lr,s++;s===10&&(this.acc=0),this.handleEvents(),this.vehicleFx(t);for(let r of this.views){let o=r.player,a=r.who==="p2"?"Retroceso":"R";r.hud.hint(this.state==="race"&&!o.finished?o.wrongT>1.2?"\xA1DIRECCI\xD3N CONTRARIA!":o.stuckT>2?`Pulsa ${a}${this.input.padList?.length?" (o Y en el mando)":""} para volver a la pista`:"":"")}this.state==="race"&&this.allDoneT!==null&&(this.allDoneT-=t,this.allDoneT<=0&&this.endRace()),this.state==="finished"&&(this.resultsT-=t,this.resultsT<=0&&this.resultsT>-1&&(this.resultsT=-5,this.showResults()))}else(this.state==="title"||this.state==="select")&&this.obstacles.update(t,[]);if(this.state==="race"||this.state==="countdown"||this.state==="finished"){let s=null;for(let a of this.humans)(!s||Math.abs(a.vF)/a.maxSpeed>Math.abs(s.vF)/s.maxSpeed)&&(s=a);let r=this.humans.indexOf(s),o=this.state==="countdown"?Math.max(...n.map(a=>a.throttle)):this.state==="finished"?.3:s.control.throttle;this.sound.engineUpdate(Math.abs(s.vF)/s.maxSpeed+(this.state==="countdown"?o*.6:0),o,s.boost>0&&r>=0,!s.onGround)}this.updateRings(t),this.flash.intensity*=Math.exp(-t*8),this.ambient(t),this.fx.update(t),this.world.update(t);for(let s of this.track.pits)s.waterMesh&&(s.waterMesh.material.map.offset.y+=t*.03);if(this.state==="title")this.updateTitleCamera();else if(this.state!=="select")for(let s of this.views)this.updateViewCamera(s,t);if(this.state!=="select"&&this.state!=="title")for(let s of this.views)s.hud.update(t);this.render(t),e.endFrame()}menuInput(t=0){let e=this.input,n=this.menuName(),s=n&&this.menus[n];s||e.navReset();let r=s?e.nav(t):{},o=e.pressed("Enter","NumpadEnter","PadA","Space"),a=e.pressed("Escape","PadB");if(s&&(r.Up||r.Down||r.Left||r.Right||o||a)&&document.body.classList.add("nav-on"),s&&(r.Up&&s.move(-1)&&this.sound.play("click"),r.Down&&s.move(1)&&this.sound.play("click"),r.Left||r.Right)){let c=s.current();s.side(r.Left?-1:1)&&!c?.change&&this.sound.play("click")}switch(this.state){case"title":e.pressed("Digit1","Numpad1","Digit2","Numpad2")?(this.titleSel=e.pressed("Digit2","Numpad2")?1:0,this.sound.init(),this.sound.play("click"),this.goSelect(this.titleSel+1)):(o||e.pressed("PadStart"))&&(this.sound.init(),e.pressed("PadStart")?(this.sound.play("click"),this.goSelect(this.titleSel+1)):s.ok());{let c=!!e.padList?.length;c!==this.padShown&&(this.padShown=c,Dt("pad-controls").classList.toggle("hidden",!c))}break;case"select":e.pressed("PadStart")?(this.sound.play("click"),this.confirmSelect()):o?s.ok():a&&this.backSelect();break;case"race":case"countdown":e.pressed("KeyP","Escape","PadStart")&&this.pause();break;case"paused":e.pressed("KeyP","PadStart")||a?this.resume():o&&s.ok();break;case"podium":e.pressed("Enter","NumpadEnter","PadA","PadStart")?s.ok():a&&(this.sound.play("click"),this.goTitle());break;case"finished":s?e.pressed("Enter","NumpadEnter","PadA","PadStart")&&s.ok():this.resultsT>.4&&e.pressed("Enter","NumpadEnter","PadA","PadStart")&&(this.resultsT=.01);break}e.pressed("KeyM")&&this.toggleMute(),s&&(r.Up||r.Down)&&document.querySelector(".focus")?.scrollIntoView?.({block:"nearest"})}updateCountdown(t,e){let n=this.countdown;this.countdown-=t;let s=this.countdown;this.views.forEach((o,a)=>{e[a].throttle>0?o.heldSince===null&&(o.heldSince=s):o.heldSince=null});let r=this.trackMeshes.lights;for(let o of[3,2,1])if(n>o&&s<=o){for(let a of this.views)a.hud.big(String(o),.9);this.sound.play("count"),r[3-o].material.color.setHex(16719904)}if(n>3.9&&s<=3.9)for(let o of this.views)o.hud.message("\xA1PREPARADOS!",1.2);if(s<=0){this.state="race",this.sound.play("go");for(let o of r)o.material.color.setHex(2293572);for(let o of this.views)o.hud.big("\xA1YA!",1,"go"),o.heldSince!==null&&o.heldSince<=2&&!this.autopilot&&(o.player.boost=1.4,o.hud.message("\xA1SALIDA TURBO!",1.2),this.sound.play("nitro",.7));for(let o of this.vehicles)!o.isPlayer&&Math.random()<.35&&(o.boost=1.2);this.sound.musicStart(!0)}for(let o of this.vehicles)o.syncMesh(t)}vehicleFx(t){for(let e of this.vehicles){if(e.state==="fallen")continue;let n=e.speed;if(e.onGround&&n>8){let r=e.x+Math.cos(e.th)*-2.2,o=e.z+Math.sin(e.th)*-2.2,a=e.surf==="mud"?1:e.surf==="grass"?.25:.35;Math.random()<a*(n/30)&&(e.surf==="mud"?this.fx.mud(r,e.y,o,e.vx,e.vz,3):this.fx.dust(r,e.y,o,e.vx,e.vz,e.surf==="grass"?[.45,.55,.3]:void 0,1,2))}if(e.boost>0){let s=e.x-Math.cos(e.th)*2.6,r=e.z-Math.sin(e.th)*2.6;for(let o of[-.85,.85]){let a=s-Math.sin(e.th)*o,c=r+Math.cos(e.th)*o;this.fx.boostFlame(a,e.y+3.6,c,-Math.cos(e.th)*10,-Math.sin(e.th)*10)}}}}updateRings(t){for(let e of this.rings){if(e.t>=1){e.mesh.visible=!1;continue}e.t=Math.min(1,e.t+t*1.6);let n=2+e.t*22;e.mesh.scale.set(n,n,1+e.t*3),e.mesh.material.opacity=(1-e.t)*.85}}prepareLights(t,e){let n=t.player,s=this.track,r=0;s.inTunnel(n.s)&&(r=rn(Math.min(n.s-s.tunnel.s0,s.tunnel.s1-n.s)/30,0,1)),t.tunnelF+=(r-t.tunnelF)*Math.min(1,e*4);let o=t.tunnelF,a=this.world;a.hemi.intensity=a.baseHemi*(1-.72*o),a.sun.intensity=a.baseSun*(1-.97*o),this.scene.environmentIntensity=this.envBase*(1-.7*o);let c=Math.cos(n.th),l=Math.sin(n.th);this.headlight.intensity=260*o,this.headlight.position.set(n.x+c*2.5,n.y+2.6,n.z+l*2.5),this.headlight.target.position.set(n.x+c*30,n.y,n.z+l*30),this.headlight.target.updateMatrixWorld();let h=Math.cos((n.s-s.tunnel.s0-6)/12*Math.PI*2);this.tunnelLight.intensity=o*(150+90*h),this.tunnelLight.position.set(n.x+c*6,s.baseAt(n.s)+15,n.z+l*6),a.focus(n.mesh.position)}resetLights(){let t=this.world;t.hemi.intensity=t.baseHemi,t.sun.intensity=t.baseSun,this.scene.environmentIntensity=this.envBase,this.headlight.intensity=0,this.tunnelLight.intensity=0}updateTitleCamera(){let t=this.camera,e=this.track.pointAt(this.track.length-20),n=(150+40*Math.sin(this.time*.13))*Math.PI/180,s=26,r=Math.cos(n)*s,o=Math.sin(n)*s;t.position.set(e.x+e.tx*r+e.rx*o,6.5+Math.sin(this.time*.2)*1.5,e.z+e.tz*r+e.rz*o),t.lookAt(e.x+e.tx*6,2.2,e.z+e.tz*6),t.fov=68,t.updateProjectionMatrix()}updateViewCamera(t,e){let n=t.camera,s=t.player,r=this.state==="paused"?this.prevState:this.state,o=68,a=n.aspect<1;if(this.state!=="paused")if(r==="countdown"){let c=rn(1-(this.countdown-.4)/3.8,0,1),l=c*c*(3-2*c),h=s.th+Math.PI*(1-l)+(t.idx===1?-.6:.6)*Math.sin(l*Math.PI),u=(15-4*l)*(a?1.4:1);t.camPos.set(s.x+Math.cos(h)*u,s.y+3.5+2*(1-l),s.z+Math.sin(h)*u),t.camLook.set(s.x,s.y+2.2,s.z),t.camYaw=s.th}else if(s.finished&&(r==="race"||this.resultsT<2.2)){let c=this.time*.25+t.idx*Math.PI;t.camPos.lerp(new U(s.x+Math.cos(c)*16,s.y+7,s.z+Math.sin(c)*16),1-Math.exp(-e*2)),t.camLook.set(s.x,s.y+2,s.z)}else{if(s.state!=="fallen"){let y=Math.abs(s.vF)>1;t.camYaw=zy(t.camYaw,y||s.stun<=0?s.th:t.camYaw,1-Math.exp(-e*5))}let c=Math.abs(s.vF),l=n.aspect>2.6,h=.55+.45*s.size,u=(10.5+rn(c*.07,0,3.2))*(a?1.55:1)*h,d=(4.4+rn(c*.02,0,.8))*(a?1.35:l?.9:1)*h,f=s.state==="fallen"&&s.fall?Math.max(s.y,s.fall.pit.top-1):s.y,g=new U(s.x-Math.cos(t.camYaw)*u,f+d,s.z-Math.sin(t.camYaw)*u),x=this.track.project(g.x,g.z,s.idx),m=this.track.surfaceAt(x.s,rn(x.d,-15,15)),p=m.type==="pit"||m.type==="water"?m.top:m.h;g.y=Math.max(g.y,p+2.2);let M=1-Math.exp(-e*9),v=1-Math.exp(-e*5);t.camPos.x+=(g.x-t.camPos.x)*M,t.camPos.z+=(g.z-t.camPos.z)*M,t.camPos.y+=(g.y-t.camPos.y)*v,t.camLook.set(s.x+Math.cos(t.camYaw)*5,s.y+2.4,s.z+Math.sin(t.camYaw)*5),o=(a?78:l?58:68)+rn(c/s.maxSpeed,0,1.3)*8+(s.boost>0?7:0)}if(t.fov+=(o-t.fov)*Math.min(1,e*3),n.fov=t.fov,n.position.copy(t.camPos),t.shake>0){t.shake=Math.max(0,t.shake-e*1.8);let c=t.shake*.5;n.position.x+=(Math.random()-.5)*c,n.position.y+=(Math.random()-.5)*c,n.position.z+=(Math.random()-.5)*c}n.lookAt(t.camLook),n.updateProjectionMatrix()}updateBlobs(){let t=this.perf.shadows===0&&this.state!=="title";this.vehicles.forEach((e,n)=>{let s=this.blobs[n];if(s.visible=t&&e.mesh.visible&&e.state!=="fallen",!s.visible)return;let r=this.track.surfaceAt(e.s,e.d).h,o=Math.max(0,e.y-r),a=Math.max(.35,1-o/12);s.position.set(e.x,r+.08,e.z),s.scale.setScalar(6.5*e.mesh.scale.x*(.7+.3*a)),s.material.opacity=.55*a})}render(t){this.updateBlobs();let e=this.renderer;if(this.state==="podium"){this.renderPodium(t);return}if(this.state==="cupnext")return;if(this.state==="select"){this.showSpin+=t,this.show.table.rotation.y=this.time*.45;let o=this.show.trucks[this.settings[this.selKey()]];o.root.position.y=Math.abs(Math.sin(this.time*2.2))*.25*Math.max(0,1-this.showSpin),cr(o,{wheelSpin:0,steer:Math.sin(this.time*.8)*.6,comp:Math.sin(this.time*3)*.04,dt:t}),e.setScissorTest(!1),e.setViewport(0,0,window.innerWidth,window.innerHeight),e.render(this.show.scene,this.show.cam);return}if(this.state==="title"||!this.views.length){this.resetLights(),this.world.focus(this.track.pointAt(this.track.length-20)),e.setScissorTest(!1),e.setViewport(0,0,window.innerWidth,window.innerHeight),this.fx.setScale(e.domElement.height,this.camera.fov),e.render(this.scene,this.camera);return}let n=window.innerWidth,s=window.innerHeight,r=this.views.filter(o=>!o.external);e.setScissorTest(r.length>1);for(let o of r){let a=o.rect.x*n,c=(1-o.rect.y-o.rect.h)*s,l=o.rect.w*n,h=o.rect.h*s;e.setViewport(a,c,l,h),e.setScissor(a,c,l,h),this.prepareLights(o,t),this.fx.setScale(h*e.getPixelRatio(),o.camera.fov),e.render(this.scene,o.camera)}for(let o of this.views.filter(a=>a.external))if(this.win2Ready()){this.prepareLights(o,t),this.fx.setScale(this.renderer2.domElement.height,o.camera.fov),this.scene.environment=this.envMap2;try{this.renderer2.render(this.scene,o.camera)}finally{this.scene.environment=this.envMap}}}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.layoutViews();let n=this.show.cam;if(t>=900||t>=600&&e<=500&&t>e){let s=t>=900?Math.min(470,t*.42)+t*.03:t*.45+16;n.position.set(13.5,6.4,16),n.aspect=(t+s)/e,n.setViewOffset(t+s,e,s,0,t,e)}else{let s=e*.2,r=t<e?1.9:1.4;n.position.set(10.5*r,5.2*r,12.5*r),n.aspect=t/(e+2*s),n.setViewOffset(t,e+2*s,0,2*s,t,e)}n.lookAt(0,2,0),n.updateProjectionMatrix()}simulate(t){let e=Math.round(t/lr),n=()=>this.humans.map(()=>({steer:0,throttle:0,brake:0,item:!1}));for(let s=0;s<e;s++)this.state==="countdown"&&(this.countdown=0,this.updateCountdown(0,n())),this.step(lr,n()),s%12===0&&this.handleEvents()}};function Xy(){document.body.classList.add("screen2"),Dt("loading").classList.add("hidden"),Dt("screen2-wait").addEventListener("click",()=>{document.documentElement.requestFullscreen?.().catch(()=>{})}),document.addEventListener("dblclick",()=>{document.documentElement.requestFullscreen?.().catch(()=>{})}),window.__screen2Ready=!0}window.__renderSong=async(i,t=30,e=[])=>{let n=await Wo(i,t,44100,e),s=n.length,r=n.numberOfChannels,o=new DataView(new ArrayBuffer(44+s*r*2)),a=(d,f)=>{for(let g=0;g<f.length;g++)o.setUint8(d+g,f.charCodeAt(g))};a(0,"RIFF"),o.setUint32(4,36+s*r*2,!0),a(8,"WAVEfmt "),o.setUint32(16,16,!0),o.setUint16(20,1,!0),o.setUint16(22,r,!0),o.setUint32(24,n.sampleRate,!0),o.setUint32(28,n.sampleRate*r*2,!0),o.setUint16(32,r*2,!0),o.setUint16(34,16,!0),a(36,"data"),o.setUint32(40,s*r*2,!0);let c=[...Array(r)].map((d,f)=>n.getChannelData(f)),l=44;for(let d=0;d<s;d++)for(let f=0;f<r;f++)o.setInt16(l,Math.max(-1,Math.min(1,c[f][d]))*32767,!0),l+=2;let h=new Uint8Array(o.buffer),u="";for(let d=0;d<h.length;d+=32768)u+=String.fromCharCode(...h.subarray(d,d+32768));return btoa(u)};function Ad(){if(new URLSearchParams(location.search).has("pantalla2")){Xy();return}try{let i=new Bl;window.__mm=i}catch(i){console.error(i);let t=Dt("loading");t.classList.remove("hidden"),t.innerHTML="<b>No se ha podido arrancar el juego.</b><br>Necesitas un navegador con WebGL activado.<br><small>"+String(i.message||i)+"</small>"}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ad):Ad();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
