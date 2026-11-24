(()=>{var yu=0,sl=1,vu=2;var ph=1,wc=2,Tn=3,gn=0,Me=1,oe=2,Vn=0,Gn=1,Sr=2,rl=3,ol=4,Mu=5,li=100,Su=101,Eu=102,bu=103,Tu=104,wu=200,Au=201,Ru=202,Cu=203,ea=204,na=205,Pu=206,Iu=207,Lu=208,Du=209,Uu=210,Nu=211,Fu=212,Ou=213,Bu=214,ia=0,sa=1,ra=2,Xi=3,oa=4,aa=5,ca=6,la=7,mh=0,zu=1,Hu=2,Wn=0,ku=1,Vu=2,Gu=3,Ac=4,Wu=5,Xu=6,qu=7;var gh=300,qi=301,Yi=302,ha=303,ua=304,Zr=306,bs=1e3,di=1001,da=1002,Ye=1003,Yu=1004;var Gs=1005;var pn=1006,vo=1007;var fi=1008;var Cn=1009,xh=1010,_h=1011,Ts=1012,Rc=1013,pi=1014,mn=1015,Ns=1016,Cc=1017,Pc=1018,Zi=1020,yh=35902,vh=1021,Mh=1022,cn=1023,Sh=1024,Eh=1025,Vi=1026,$i=1027,Ic=1028,Lc=1029,bh=1030,Dc=1031;var Uc=1033,xr=33776,_r=33777,yr=33778,vr=33779,fa=35840,pa=35841,ma=35842,ga=35843,xa=36196,_a=37492,ya=37496,va=37808,Ma=37809,Sa=37810,Ea=37811,ba=37812,Ta=37813,wa=37814,Aa=37815,Ra=37816,Ca=37817,Pa=37818,Ia=37819,La=37820,Da=37821,Mr=36492,Ua=36494,Na=36495,Th=36283,Fa=36284,Oa=36285,Ba=36286;var Er=2300,za=2301,Mo=2302,al=2400,cl=2401,ll=2402;var Zu=3200,$u=3201;var wh=0,Ju=1,kn="",ve="srgb",ss="srgb-linear",$r="linear",se="srgb";var Ti=7680;var hl=519,Ku=512,Qu=513,ju=514,Ah=515,td=516,ed=517,nd=518,id=519,ul=35044,Fs=35048;var dl="300 es",An=2e3,br=2001,qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var So=Math.PI/180,Tr=180/Math.PI;function rs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function sd(i,t){return(i%t+t)%t}function Eo(i,t,e){return(1-e)*i+e*t}function us(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _t=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],y=s[4],_=s[7],I=s[2],A=s[5],w=s[8];return r[0]=o*x+a*v+c*I,r[3]=o*m+a*y+c*A,r[6]=o*p+a*_+c*w,r[1]=l*x+h*v+d*I,r[4]=l*m+h*y+d*A,r[7]=l*p+h*_+d*w,r[2]=u*x+f*v+g*I,r[5]=u*m+f*y+g*A,r[8]=u*p+f*_+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(bo.makeScale(t,e)),this}rotate(t){return this.premultiply(bo.makeRotation(-t)),this}translate(t,e){return this.premultiply(bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},bo=new qt;function Rh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rd(){let i=wr("canvas");return i.style.display="block",i}var fl={};function ys(i){i in fl||(fl[i]=!0,console.warn(i))}function od(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ad(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Kt={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?$r:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pl=[.64,.33,.3,.6,.15,.06],ml=[.2126,.7152,.0722],gl=[.3127,.329],xl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[ss]:{primaries:pl,whitePoint:gl,transfer:$r,toXYZ:xl,fromXYZ:_l,luminanceCoefficients:ml,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:pl,whitePoint:gl,transfer:se,toXYZ:xl,fromXYZ:_l,luminanceCoefficients:ml,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}});var wi,Ha=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=wr("canvas")),wi.width=t.width,wi.height=t.height;let n=wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rn(e[n]/255)*255):e[n]=Rn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ld=0,Ar=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(To(s[o].image)):r.push(To(s[o]))}else r=To(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function To(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hd=0,Ge=class i extends qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=di,s=di,r=pn,o=fi,a=cn,c=Cn,l=i.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=rs(),this.name="",this.source=new Ar(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bs:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bs:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=gh;Ge.DEFAULT_ANISOTROPY=1;var re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,_=(f+1)/2,I=(p+1)/2,A=(h+u)/4,w=(d+x)/4,C=(g+m)/4;return y>_&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=w/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=C/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=w/r,s=C/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ka=class extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ar(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Rr=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Va=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==u||l!==f||h!==g){let m=1-a,p=c*u+l*f+h*g+d*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let I=Math.sqrt(y),A=Math.atan2(I,p*v);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}let _=a*v;if(c=c*m+u*_,l=l*m+f*_,h=h*m+g*_,d=d*m+x*_,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wo.copy(this).projectOnVector(t),this.sub(wo)}reflect(t){return this.sub(wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wo=new L,yl=new xn,In=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Xs.subVectors(this.max,ds),Ai.subVectors(t.a,ds),Ri.subVectors(t.b,ds),Ci.subVectors(t.c,ds),Nn.subVectors(Ri,Ai),Fn.subVectors(Ci,Ri),ni.subVectors(Ai,Ci);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-ni.z,ni.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,ni.z,0,-ni.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-ni.y,ni.x,0];return!Ao(e,Ai,Ri,Ci,Xs)||(e=[1,0,0,0,1,0,0,0,1],!Ao(e,Ai,Ri,Ci,Xs))?!1:(qs.crossVectors(Nn,Fn),e=[qs.x,qs.y,qs.z],Ao(e,Ai,Ri,Ci,Xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},vn=[new L,new L,new L,new L,new L,new L,new L,new L],rn=new L,Ws=new In,Ai=new L,Ri=new L,Ci=new L,Nn=new L,Fn=new L,ni=new L,ds=new L,Xs=new L,qs=new L,ii=new L;function Ao(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ii.fromArray(i,r);let a=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),c=t.dot(ii),l=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var ud=new In,fs=new L,Ro=new L,Yn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ud.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let e=fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(Ro)),this.expandByPoint(fs.copy(t.center).sub(Ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mn=new L,Co=new L,Ys=new L,On=new L,Po=new L,Zs=new L,Io=new L,Cr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Co.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Co);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ys),a=On.dot(this.direction),c=-On.dot(Ys),l=On.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Co).addScaledVector(Ys,u),f}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);let n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){Po.subVectors(e,t),Zs.subVectors(n,t),Io.crossVectors(Po,Zs);let o=this.direction.dot(Io),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);let c=a*this.direction.dot(Zs.crossVectors(On,Zs));if(c<0)return null;let l=a*this.direction.dot(Po.cross(On));if(l<0||c+l>o)return null;let h=-a*On.dot(Io);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class i{constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),o=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dd,t,fd)}lookAt(t,e,n){let s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Bn.crossVectors(n,Xe),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Bn.crossVectors(n,Xe)),Bn.normalize(),$s.crossVectors(Xe,Bn),s[0]=Bn.x,s[4]=$s.x,s[8]=Xe.x,s[1]=Bn.y,s[5]=$s.y,s[9]=Xe.y,s[2]=Bn.z,s[6]=$s.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],y=n[7],_=n[11],I=n[15],A=s[0],w=s[4],C=s[8],E=s[12],M=s[1],P=s[5],V=s[9],z=s[13],W=s[2],j=s[6],X=s[10],tt=s[14],$=s[3],gt=s[7],Mt=s[11],At=s[15];return r[0]=o*A+a*M+c*W+l*$,r[4]=o*w+a*P+c*j+l*gt,r[8]=o*C+a*V+c*X+l*Mt,r[12]=o*E+a*z+c*tt+l*At,r[1]=h*A+d*M+u*W+f*$,r[5]=h*w+d*P+u*j+f*gt,r[9]=h*C+d*V+u*X+f*Mt,r[13]=h*E+d*z+u*tt+f*At,r[2]=g*A+x*M+m*W+p*$,r[6]=g*w+x*P+m*j+p*gt,r[10]=g*C+x*V+m*X+p*Mt,r[14]=g*E+x*z+m*tt+p*At,r[3]=v*A+y*M+_*W+I*$,r[7]=v*w+y*P+_*j+I*gt,r[11]=v*C+y*V+_*X+I*Mt,r[15]=v*E+y*z+_*tt+I*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*f-n*c*f)+x*(+e*c*f-e*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*d+e*a*u+s*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=d*m*l-x*u*l+x*c*f-a*m*f-d*c*p+a*u*p,y=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,_=h*x*l-g*d*l+g*a*f-o*x*f-h*a*p+o*d*p,I=g*d*c-h*x*c-g*a*u+o*x*u+h*a*m-o*d*m,A=e*v+n*y+s*_+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return t[0]=v*w,t[1]=(x*u*r-d*m*r-x*s*f+n*m*f+d*s*p-n*u*p)*w,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*w,t[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*f-n*c*f)*w,t[4]=y*w,t[5]=(h*m*r-g*u*r+g*s*f-e*m*f-h*s*p+e*u*p)*w,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*w,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*f+e*c*f)*w,t[8]=_*w,t[9]=(g*d*r-h*x*r-g*n*f+e*x*f+h*n*p-e*d*p)*w,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*w,t[12]=I*w,t[13]=(h*x*s-g*d*s+g*n*u-e*x*u-h*n*m+e*d*m)*w,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*w,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*u+e*a*u)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,x=o*h,m=o*d,p=a*d,v=c*l,y=c*h,_=c*d,I=n.x,A=n.y,w=n.z;return s[0]=(1-(x+p))*I,s[1]=(f+_)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(u+p))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+y)*w,s[9]=(m-v)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Pi.set(s[0],s[1],s[2]).length(),o=Pi.set(s[4],s[5],s[6]).length(),a=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);let l=1/r,h=1/o,d=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=An){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,g;if(a===An)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===br)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=An){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*l,f=(n+s)*h,g,x;if(a===An)g=(o+r)*d,x=-2*d;else if(a===br)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Pi=new L,on=new ie,dd=new L(0,0,0),fd=new L(1,1,1),Bn=new L,$s=new L,Xe=new L,vl=new ie,Ml=new xn,Ke=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ke.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pd=0,Sl=new L,Ii=new xn,Sn=new ie,Js=new L,ps=new L,md=new L,gd=new xn,El=new L(1,0,0),bl=new L(0,1,0),Tl=new L(0,0,1),wl={type:"added"},xd={type:"removed"},Li={type:"childadded",child:null},Lo={type:"childremoved",child:null},Ie=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Ke,n=new xn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new qt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(El,t)}rotateY(t){return this.rotateOnAxis(bl,t)}rotateZ(t){return this.rotateOnAxis(Tl,t)}translateOnAxis(t,e){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(El,t)}translateY(t){return this.translateOnAxis(bl,t)}translateZ(t){return this.translateOnAxis(Tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Js.copy(t):Js.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ps,Js,this.up):Sn.lookAt(Js,ps,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wl),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xd),Lo.child=t,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wl),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new L(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new L,En=new L,Do=new L,bn=new L,Di=new L,Ui=new L,Al=new L,Uo=new L,No=new L,Fo=new L,Oo=new re,Bo=new re,zo=new re,hi=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),En.subVectors(n,e),Do.subVectors(t,e);let o=an.dot(an),a=an.dot(En),c=an.dot(Do),l=En.dot(En),h=En.dot(Do),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bn.x),c.addScaledVector(o,bn.y),c.addScaledVector(a,bn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Oo.setScalar(0),Bo.setScalar(0),zo.setScalar(0),Oo.fromBufferAttribute(t,e),Bo.fromBufferAttribute(t,n),zo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Oo,r.x),o.addScaledVector(Bo,r.y),o.addScaledVector(zo,r.z),o}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),En.subVectors(t,e),an.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),En.subVectors(this.a,this.b),an.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Di.subVectors(s,n),Ui.subVectors(r,n),Uo.subVectors(t,n);let c=Di.dot(Uo),l=Ui.dot(Uo);if(c<=0&&l<=0)return e.copy(n);No.subVectors(t,s);let h=Di.dot(No),d=Ui.dot(No);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Di,o);Fo.subVectors(t,r);let f=Di.dot(Fo),g=Ui.dot(Fo);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ui,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Al.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Al,a);let p=1/(m+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(Di,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function Ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=sd(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ho(o,r,t+1/3),this.g=Ho(o,r,t),this.b=Ho(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let n=Ch[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return Kt.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Be(Oe.r*255,0,255))*65536+Math.round(Be(Oe.g*255,0,255))*256+Math.round(Be(Oe.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Oe.copy(this),e);let n=Oe.r,s=Oe.g,r=Oe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=ve){Kt.fromWorkingColorSpace(Oe.copy(this),t);let e=Oe.r,n=Oe.g,s=Oe.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Ks);let n=Eo(zn.h,Ks.h,e),s=Eo(zn.s,Ks.s,e),r=Eo(zn.l,Ks.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new Ot;Ot.NAMES=Ch;var _d=0,Zn=class extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=rs(),this.name="",this.blending=Gn,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=na,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gn&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Le=class extends Zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new L,Qs=new _t,Se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ul,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ul&&(t.usage=this.usage),t}};var Ir=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Lr=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},yd=0,Je=new ie,ko=new Ie,Ni=new L,qe=new In,ms=new In,Ce=new L,pe=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rh(t)?Lr:Ir)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return ko.lookAt(t),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(qe.min,ms.min),qe.expandByPoint(Ce),Ce.addVectors(qe.max,ms.max),qe.expandByPoint(Ce)):(qe.expandByPoint(ms.min),qe.expandByPoint(ms.max))}qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ce.fromBufferAttribute(a,l),c&&(Ni.fromBufferAttribute(t,l),Ce.add(Ni)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new L,c[C]=new L;let l=new L,h=new L,d=new L,u=new _t,f=new _t,g=new _t,x=new L,m=new L;function p(C,E,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(x),a[E].add(x),a[M].add(x),c[C].add(m),c[E].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,E=v.length;C<E;++C){let M=v[C],P=M.start,V=M.count;for(let z=P,W=P+V;z<W;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let y=new L,_=new L,I=new L,A=new L;function w(C){I.fromBufferAttribute(s,C),A.copy(I);let E=a[C];y.copy(E),y.sub(I.multiplyScalar(I.dot(E))).normalize(),_.crossVectors(A,E);let P=_.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,E=v.length;C<E;++C){let M=v[C],P=M.start,V=M.count;for(let z=P,W=P+V;z<W;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Se(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rl=new ie,si=new Cr,js=new Yn,Cl=new L,tr=new L,er=new L,nr=new L,Vo=new L,ir=new L,Pl=new L,sr=new L,J=class extends Ie{constructor(t=new pe,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ir.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Vo.fromBufferAttribute(d,t),o?ir.addScaledVector(Vo,h):ir.addScaledVector(Vo.sub(e),h))}e.add(ir)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(js.containsPoint(si.origin)===!1&&(si.intersectSphere(js,Cl)===null||si.origin.distanceToSquared(Cl)>(t.far-t.near)**2))&&(Rl.copy(r).invert(),si.copy(t.ray).applyMatrix4(Rl),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,I=y;_<I;_+=3){let A=a.getX(_),w=a.getX(_+1),C=a.getX(_+2);s=rr(this,p,t,n,l,h,d,A,w,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=rr(this,o,t,n,l,h,d,v,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,I=y;_<I;_+=3){let A=_,w=_+1,C=_+2;s=rr(this,p,t,n,l,h,d,A,w,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=m,y=m+1,_=m+2;s=rr(this,o,t,n,l,h,d,v,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function vd(i,t,e,n,s,r,o,a){let c;if(t.side===Me?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===gn,a),c===null)return null;sr.copy(a),sr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(sr);return l<e.near||l>e.far?null:{distance:l,point:sr.clone(),object:i}}function rr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,tr),i.getVertexPosition(c,er),i.getVertexPosition(l,nr);let h=vd(i,t,e,n,tr,er,nr,Pl);if(h){let d=new L;hi.getBarycoord(Pl,tr,er,nr,d),s&&(h.uv=hi.getInterpolatedAttribute(s,a,c,l,d,new _t)),r&&(h.uv1=hi.getInterpolatedAttribute(r,a,c,l,d,new _t)),o&&(h.normal=hi.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};hi.getNormal(tr,er,nr,u.normal),h.face=u,h.barycoord=d}return h}var Ft=class i extends pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(d,2));function g(x,m,p,v,y,_,I,A,w,C,E){let M=_/w,P=I/C,V=_/2,z=I/2,W=A/2,j=w+1,X=C+1,tt=0,$=0,gt=new L;for(let Mt=0;Mt<X;Mt++){let At=Mt*P-z;for(let N=0;N<j;N++){let ct=N*M-V;gt[x]=ct*v,gt[m]=At*y,gt[p]=W,l.push(gt.x,gt.y,gt.z),gt[x]=0,gt[m]=0,gt[p]=A>0?1:-1,h.push(gt.x,gt.y,gt.z),d.push(N/w),d.push(1-Mt/C),tt+=1}}for(let Mt=0;Mt<C;Mt++)for(let At=0;At<w;At++){let N=u+At+j*Mt,ct=u+At+j*(Mt+1),B=u+(At+1)+j*(Mt+1),Q=u+(At+1)+j*Mt;c.push(N,ct,Q),c.push(ct,B,Q),$+=6}a.addGroup(f,$,E),f+=$,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=Ji(i[e]);for(let s in n)t[s]=n[s]}return t}function Md(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ph(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var Sd={clone:Ji,merge:He},Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends Zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Dr=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hn=new L,Il=new _t,Ll=new _t,Pe=class extends Dr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,Il,Ll),e.subVectors(Ll,Il)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(So*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Fi=-90,Oi=1,Ga=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pe(Fi,Oi,t,e);s.layers=this.layers,this.add(s);let r=new Pe(Fi,Oi,t,e);r.layers=this.layers,this.add(r);let o=new Pe(Fi,Oi,t,e);o.layers=this.layers,this.add(o);let a=new Pe(Fi,Oi,t,e);a.layers=this.layers,this.add(a);let c=new Pe(Fi,Oi,t,e);c.layers=this.layers,this.add(c);let l=new Pe(Fi,Oi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ur=class extends Ge{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wa=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ur(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ft(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:Vn});r.uniforms.tEquirect.value=e;let o=new J(s,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=pn),new Ga(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Go=new L,Td=new L,wd=new qt,wn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Go.subVectors(n,e).cross(Td.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wd.getNormalMatrix(t),s=this.coplanarPoint(Go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ri=new Yn,or=new L,ws=class{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,o=new wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,u-l,m-f,_-p).normalize(),n[1].setComponents(c+r,u+l,m+f,_+p).normalize(),n[2].setComponents(c+o,u+h,m+g,_+v).normalize(),n[3].setComponents(c-o,u-h,m-g,_-v).normalize(),n[4].setComponents(c-a,u-d,m-x,_-y).normalize(),e===An)n[5].setComponents(c+a,u+d,m+x,_+y).normalize();else if(e===br)n[5].setComponents(a,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(or.x=s.normal.x>0?t.max.x:t.min.x,or.y=s.normal.y>0?t.max.y:t.min.y,or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ih(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ad(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var xe=class i extends pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*u-o;for(let y=0;y<l;y++){let _=y*d-r;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let y=v+l*p,_=v+l*(p+1),I=v+1+l*(p+1),A=v+1+l*p;f.push(y,_,A),f.push(_,I,A)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cd=`#ifdef USE_ALPHAHASH
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
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ud=`#ifdef USE_AOMAP
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
#endif`,Nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fd=`#ifdef USE_BATCHING
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
#endif`,Od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Vd=`#ifdef USE_BUMPMAP
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kd=`#define PI 3.141592653589793
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
} // validated`,Qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jd=`vec3 transformedNormal = objectNormal;
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
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gf=`#ifdef USE_GRADIENTMAP
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
}`,xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vf=`uniform bool receiveShadow;
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
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wf=`PhysicalMaterial material;
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
#endif`,Af=`struct PhysicalMaterial {
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
}`,Rf=`
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,If=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bf=`#if defined( USE_POINTS_UV )
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
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`#ifdef USE_MORPHTARGETS
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
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kf=`#ifdef USE_NORMALMAP
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
#endif`,Qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fp=`float getShadowMask() {
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
}`,pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,_p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`#include <common>
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
}`,Np=`#if DEPTH_PACKING == 3200
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
}`,Fp=`#define DISTANCE
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
}`,Op=`#define DISTANCE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
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
}`,kp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Wp=`#define LAMBERT
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
}`,Xp=`#define LAMBERT
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
}`,qp=`#define MATCAP
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
}`,Yp=`#define MATCAP
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
}`,Zp=`#define NORMAL
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
}`,$p=`#define NORMAL
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
}`,Jp=`#define PHONG
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
}`,Kp=`#define PHONG
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
}`,Qp=`#define STANDARD
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
}`,jp=`#define STANDARD
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
}`,tm=`#define TOON
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
}`,em=`#define TOON
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
}`,nm=`uniform float size;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 color;
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
}`,om=`uniform float rotation;
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
}`,am=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Rd,alphahash_pars_fragment:Cd,alphamap_fragment:Pd,alphamap_pars_fragment:Id,alphatest_fragment:Ld,alphatest_pars_fragment:Dd,aomap_fragment:Ud,aomap_pars_fragment:Nd,batching_pars_vertex:Fd,batching_vertex:Od,begin_vertex:Bd,beginnormal_vertex:zd,bsdfs:Hd,iridescence_fragment:kd,bumpmap_pars_fragment:Vd,clipping_planes_fragment:Gd,clipping_planes_pars_fragment:Wd,clipping_planes_pars_vertex:Xd,clipping_planes_vertex:qd,color_fragment:Yd,color_pars_fragment:Zd,color_pars_vertex:$d,color_vertex:Jd,common:Kd,cube_uv_reflection_fragment:Qd,defaultnormal_vertex:jd,displacementmap_pars_vertex:tf,displacementmap_vertex:ef,emissivemap_fragment:nf,emissivemap_pars_fragment:sf,colorspace_fragment:rf,colorspace_pars_fragment:of,envmap_fragment:af,envmap_common_pars_fragment:cf,envmap_pars_fragment:lf,envmap_pars_vertex:hf,envmap_physical_pars_fragment:Mf,envmap_vertex:uf,fog_vertex:df,fog_pars_vertex:ff,fog_fragment:pf,fog_pars_fragment:mf,gradientmap_pars_fragment:gf,lightmap_pars_fragment:xf,lights_lambert_fragment:_f,lights_lambert_pars_fragment:yf,lights_pars_begin:vf,lights_toon_fragment:Sf,lights_toon_pars_fragment:Ef,lights_phong_fragment:bf,lights_phong_pars_fragment:Tf,lights_physical_fragment:wf,lights_physical_pars_fragment:Af,lights_fragment_begin:Rf,lights_fragment_maps:Cf,lights_fragment_end:Pf,logdepthbuf_fragment:If,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:Df,logdepthbuf_vertex:Uf,map_fragment:Nf,map_pars_fragment:Ff,map_particle_fragment:Of,map_particle_pars_fragment:Bf,metalnessmap_fragment:zf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:kf,morphcolor_vertex:Vf,morphnormal_vertex:Gf,morphtarget_pars_vertex:Wf,morphtarget_vertex:Xf,normal_fragment_begin:qf,normal_fragment_maps:Yf,normal_pars_fragment:Zf,normal_pars_vertex:$f,normal_vertex:Jf,normalmap_pars_fragment:Kf,clearcoat_normal_fragment_begin:Qf,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:tp,iridescence_pars_fragment:ep,opaque_fragment:np,packing:ip,premultiplied_alpha_fragment:sp,project_vertex:rp,dithering_fragment:op,dithering_pars_fragment:ap,roughnessmap_fragment:cp,roughnessmap_pars_fragment:lp,shadowmap_pars_fragment:hp,shadowmap_pars_vertex:up,shadowmap_vertex:dp,shadowmask_pars_fragment:fp,skinbase_vertex:pp,skinning_pars_vertex:mp,skinning_vertex:gp,skinnormal_vertex:xp,specularmap_fragment:_p,specularmap_pars_fragment:yp,tonemapping_fragment:vp,tonemapping_pars_fragment:Mp,transmission_fragment:Sp,transmission_pars_fragment:Ep,uv_pars_fragment:bp,uv_pars_vertex:Tp,uv_vertex:wp,worldpos_vertex:Ap,background_vert:Rp,background_frag:Cp,backgroundCube_vert:Pp,backgroundCube_frag:Ip,cube_vert:Lp,cube_frag:Dp,depth_vert:Up,depth_frag:Np,distanceRGBA_vert:Fp,distanceRGBA_frag:Op,equirect_vert:Bp,equirect_frag:zp,linedashed_vert:Hp,linedashed_frag:kp,meshbasic_vert:Vp,meshbasic_frag:Gp,meshlambert_vert:Wp,meshlambert_frag:Xp,meshmatcap_vert:qp,meshmatcap_frag:Yp,meshnormal_vert:Zp,meshnormal_frag:$p,meshphong_vert:Jp,meshphong_frag:Kp,meshphysical_vert:Qp,meshphysical_frag:jp,meshtoon_vert:tm,meshtoon_frag:em,points_vert:nm,points_frag:im,shadow_vert:sm,shadow_frag:rm,sprite_vert:om,sprite_frag:am},vt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},fn={basic:{uniforms:He([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:He([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:He([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:He([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:He([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:He([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:He([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:He([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:He([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:He([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:He([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:He([vt.common,vt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:He([vt.lights,vt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};fn.physical={uniforms:He([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var ar={r:0,b:0,g:0},oi=new Ke,cm=new ie;function lm(i,t,e,n,s,r,o){let a=new Ot(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1,_=g(v);_===null?p(a,c):_&&_.isColor&&(p(_,1),y=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){let _=g(y);_&&(_.isCubeTexture||_.mapping===Zr)?(h===void 0&&(h=new J(new Ft(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:Ji(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),oi.copy(y.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cm.makeRotationFromEuler(oi)),h.material.toneMapped=Kt.getTransfer(_.colorSpace)!==se,(d!==_||u!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new J(new xe(2,2),new ze({name:"BackgroundMaterial",uniforms:Ji(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(_.colorSpace)!==se,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(ar,Ph(i)),n.buffers.color.setClear(ar.r,ar.g,ar.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:m}}function hm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(M,P,V,z,W){let j=!1,X=d(z,V,P);r!==X&&(r=X,l(r.object)),j=f(M,z,V,W),j&&g(M,z,V,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(M,P,V,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,P,V){let z=V.wireframe===!0,W=n[M.id];W===void 0&&(W={},n[M.id]=W);let j=W[P.id];j===void 0&&(j={},W[P.id]=j);let X=j[z];return X===void 0&&(X=u(c()),j[z]=X),X}function u(M){let P=[],V=[],z=[];for(let W=0;W<e;W++)P[W]=0,V[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:z,object:M,attributes:{},index:null}}function f(M,P,V,z){let W=r.attributes,j=P.attributes,X=0,tt=V.getAttributes();for(let $ in tt)if(tt[$].location>=0){let Mt=W[$],At=j[$];if(At===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(At=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(At=M.instanceColor)),Mt===void 0||Mt.attribute!==At||At&&Mt.data!==At.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(M,P,V,z){let W={},j=P.attributes,X=0,tt=V.getAttributes();for(let $ in tt)if(tt[$].location>=0){let Mt=j[$];Mt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor));let At={};At.attribute=Mt,Mt&&Mt.data&&(At.data=Mt.data),W[$]=At,X++}r.attributes=W,r.attributesNum=X,r.index=z}function x(){let M=r.newAttributes;for(let P=0,V=M.length;P<V;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){let V=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;V[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),W[M]!==P&&(i.vertexAttribDivisor(M,P),W[M]=P)}function v(){let M=r.newAttributes,P=r.enabledAttributes;for(let V=0,z=P.length;V<z;V++)P[V]!==M[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function y(M,P,V,z,W,j,X){X===!0?i.vertexAttribIPointer(M,P,V,W,j):i.vertexAttribPointer(M,P,V,z,W,j)}function _(M,P,V,z){x();let W=z.attributes,j=V.getAttributes(),X=P.defaultAttributeValues;for(let tt in j){let $=j[tt];if($.location>=0){let gt=W[tt];if(gt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),gt!==void 0){let Mt=gt.normalized,At=gt.itemSize,N=t.get(gt);if(N===void 0)continue;let ct=N.buffer,B=N.type,Q=N.bytesPerElement,ft=B===i.INT||B===i.UNSIGNED_INT||gt.gpuType===Rc;if(gt.isInterleavedBufferAttribute){let it=gt.data,ot=it.stride,pt=gt.offset;if(it.isInstancedInterleavedBuffer){for(let xt=0;xt<$.locationSize;xt++)p($.location+xt,it.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let xt=0;xt<$.locationSize;xt++)m($.location+xt);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let xt=0;xt<$.locationSize;xt++)y($.location+xt,At/$.locationSize,B,Mt,ot*Q,(pt+At/$.locationSize*xt)*Q,ft)}else{if(gt.isInstancedBufferAttribute){for(let it=0;it<$.locationSize;it++)p($.location+it,gt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let it=0;it<$.locationSize;it++)m($.location+it);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let it=0;it<$.locationSize;it++)y($.location+it,At/$.locationSize,B,Mt,At*Q,At/$.locationSize*it*Q,ft)}}else if(X!==void 0){let Mt=X[tt];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv($.location,Mt);break;case 3:i.vertexAttrib3fv($.location,Mt);break;case 4:i.vertexAttrib4fv($.location,Mt);break;default:i.vertexAttrib1fv($.location,Mt)}}}}v()}function I(){C();for(let M in n){let P=n[M];for(let V in P){let z=P[V];for(let W in z)h(z[W].object),delete z[W];delete P[V]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let V in P){let z=P[V];for(let W in z)h(z[W].object),delete z[W];delete P[V]}delete n[M.id]}function w(M){for(let P in n){let V=n[P];if(V[M.id]===void 0)continue;let z=V[M.id];for(let W in z)h(z[W].object),delete z[W];delete V[M.id]}}function C(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function um(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function dm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==cn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Cn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==mn&&!C)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:I,maxSamples:A}}function fm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new wn,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,y=v*4,_=p.clippingState||null;c.value=_,_=h(g,u,y,f);for(let I=0;I!==y;++I)_[I]=e[I];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function pm(i){let t=new WeakMap;function e(o,a){return a===ha?o.mapping=qi:a===ua&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ha||a===ua)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Wa(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Nr=class extends Dr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hi=4,Dl=[.125,.215,.35,.446,.526,.582],ui=20,Wo=new Nr,Ul=new Ot,Xo=null,qo=0,Yo=0,Zo=!1,ci=(1+Math.sqrt(5))/2,Bi=1/ci,Nl=[new L(-ci,Bi,0),new L(ci,Bi,0),new L(-Bi,0,ci),new L(Bi,0,ci),new L(0,ci,-Bi),new L(0,ci,Bi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Ki=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xo,qo,Yo),this._renderer.xr.enabled=Zo,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ns,format:cn,colorSpace:ss,depthBuffer:!1},s=Fl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mm(r)),this._blurMaterial=gm(r,t,e)}return s}_compileMaterial(t){let e=new J(this._lodPlanes[0],t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,n,s){let a=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ul),h.toneMapping=Wn,h.autoClear=!1;let f=new Le({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),g=new J(new Ft,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Ul),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let y=this._cubeSize;cr(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===qi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new J(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;cr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Wo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nl[(s-r-1)%Nl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new J(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ui-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);let p=[],v=0;for(let w=0;w<ui;++w){let C=w/x,E=Math.exp(-C*C/2);p.push(E),w===0?v+=E:w<m&&(v+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;let _=this._sizeLods[s],I=3*_*(s>y-Hi?s-y+Hi:0),A=4*(this._cubeSize-_);cr(e,I,A,3*_,2*_),c.setRenderTarget(e),c.render(d,Wo)}};function mm(i){let t=[],e=[],n=[],s=i,r=i-Hi+1+Dl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Hi?c=Dl[o-i+Hi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let A=0;A<f;A++){let w=A%3*2/3-1,C=A>2?0:-1,E=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];v.set(E,x*g*A),y.set(u,m*g*A);let M=[A,A,A,A,A,A];_.set(M,p*g*A)}let I=new pe;I.setAttribute("position",new Se(v,x)),I.setAttribute("uv",new Se(y,m)),I.setAttribute("faceIndex",new Se(_,p)),t.push(I),s>Hi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fl(i,t,e){let n=new Pn(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gm(i,t,e){let n=new Float32Array(ui),s=new L(0,1,0);return new ze({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ol(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Bl(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function xm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ha||c===ua,h=c===qi||c===Yi;if(l||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ki(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ki(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function _m(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ym(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let y=0,_=v.length;y<_;y+=3){let I=v[y+0],A=v[y+1],w=v[y+2];u.push(I,A,A,w,w,I)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let I=y+0,A=y+1,w=y+2;u.push(I,A,A,w,w,I)}}else return;let m=new(Rh(u)?Lr:Ir)(u,1);m.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function vm(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*x[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Mm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Sm(i,t,e){let n=new WeakMap,s=new re;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,I=1;_>t.maxTextureSize&&(I=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let A=new Float32Array(_*I*4*d),w=new Rr(A,_,I,d);w.type=mn,w.needsUpdate=!0;let C=y*4;for(let M=0;M<d;M++){let P=m[M],V=p[M],z=v[M],W=_*I*4*M;for(let j=0;j<P.count;j++){let X=j*C;f===!0&&(s.fromBufferAttribute(P,j),A[W+X+0]=s.x,A[W+X+1]=s.y,A[W+X+2]=s.z,A[W+X+3]=0),g===!0&&(s.fromBufferAttribute(V,j),A[W+X+4]=s.x,A[W+X+5]=s.y,A[W+X+6]=s.z,A[W+X+7]=0),x===!0&&(s.fromBufferAttribute(z,j),A[W+X+8]=s.x,A[W+X+9]=s.y,A[W+X+10]=s.z,A[W+X+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new _t(_,I)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Em(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Fr=class extends Ge{constructor(t,e,n,s,r,o,a,c,l,h=Vi){if(h!==Vi&&h!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vi&&(n=pi),n===void 0&&h===$i&&(n=Zi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ye,this.minFilter=c!==void 0?c:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Lh=new Ge,zl=new Fr(1,1),Dh=new Rr,Uh=new Va,Nh=new Ur,Hl=[],kl=[],Vl=new Float32Array(16),Gl=new Float32Array(9),Wl=new Float32Array(4);function os(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Hl[s];if(r===void 0&&(r=new Float32Array(s),Hl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jr(i,t){let e=kl[t];e===void 0&&(e=new Int32Array(t),kl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function Am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Rm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;Wl.set(n),i.uniformMatrix2fv(this.addr,!1,Wl),Te(e,n)}}function Cm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;Gl.set(n),i.uniformMatrix3fv(this.addr,!1,Gl),Te(e,n)}}function Pm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;Vl.set(n),i.uniformMatrix4fv(this.addr,!1,Vl),Te(e,n)}}function Im(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Nm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function Om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zl.compareFunction=Ah,r=zl):r=Lh,e.setTexture2D(t||r,s)}function Hm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uh,s)}function km(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nh,s)}function Vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dh,s)}function Gm(i){switch(i){case 5126:return bm;case 35664:return Tm;case 35665:return wm;case 35666:return Am;case 35674:return Rm;case 35675:return Cm;case 35676:return Pm;case 5124:case 35670:return Im;case 35667:case 35671:return Lm;case 35668:case 35672:return Dm;case 35669:case 35673:return Um;case 5125:return Nm;case 36294:return Fm;case 36295:return Om;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Vm}}function Wm(i,t){i.uniform1fv(this.addr,t)}function Xm(i,t){let e=os(t,this.size,2);i.uniform2fv(this.addr,e)}function qm(i,t){let e=os(t,this.size,3);i.uniform3fv(this.addr,e)}function Ym(i,t){let e=os(t,this.size,4);i.uniform4fv(this.addr,e)}function Zm(i,t){let e=os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $m(i,t){let e=os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jm(i,t){let e=os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Km(i,t){i.uniform1iv(this.addr,t)}function Qm(i,t){i.uniform2iv(this.addr,t)}function jm(i,t){i.uniform3iv(this.addr,t)}function t0(i,t){i.uniform4iv(this.addr,t)}function e0(i,t){i.uniform1uiv(this.addr,t)}function n0(i,t){i.uniform2uiv(this.addr,t)}function i0(i,t){i.uniform3uiv(this.addr,t)}function s0(i,t){i.uniform4uiv(this.addr,t)}function r0(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Lh,r[o])}function o0(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Uh,r[o])}function a0(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Nh,r[o])}function c0(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Dh,r[o])}function l0(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return Zm;case 35675:return $m;case 35676:return Jm;case 5124:case 35670:return Km;case 35667:case 35671:return Qm;case 35668:case 35672:return jm;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return c0}}var Xa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gm(e.type)}},qa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=l0(e.type)}},Ya=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},$o=/(\w+)(\])?(\[|\.)?/g;function Xl(i,t){i.seq.push(t),i.map[t.id]=t}function h0(i,t,e){let n=i.name,s=n.length;for($o.lastIndex=0;;){let r=$o.exec(n),o=$o.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Xl(e,l===void 0?new Xa(a,i,t):new qa(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Ya(a),Xl(e,d)),e=d}}}var Wi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);h0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ql(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var u0=37297,d0=0;function f0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Yl=new qt;function p0(i){Kt._getMatrix(Yl,Kt.workingColorSpace,i);let t=`mat3( ${Yl.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case $r:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+f0(i.getShaderSource(t),o)}else return s}function m0(i,t){let e=p0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function g0(i,t){let e;switch(t){case ku:e="Linear";break;case Vu:e="Reinhard";break;case Gu:e="Cineon";break;case Ac:e="ACESFilmic";break;case Xu:e="AgX";break;case qu:e="Neutral";break;case Wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var lr=new L;function x0(){Kt.getLuminanceCoefficients(lr);let i=lr.x.toFixed(4),t=lr.y.toFixed(4),e=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function y0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function v0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vs(i){return i!==""}function $l(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var M0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(i){return i.replace(M0,E0)}var S0=new Map;function E0(i,t){let e=Zt[t];if(e===void 0){let n=S0.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Za(e)}var b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(i){return i.replace(b0,T0)}function T0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ql(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function w0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ph?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function A0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function R0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Yi&&(t="ENVMAP_MODE_REFRACTION"),t}function C0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mh:t="ENVMAP_BLENDING_MULTIPLY";break;case zu:t="ENVMAP_BLENDING_MIX";break;case Hu:t="ENVMAP_BLENDING_ADD";break}return t}function P0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function I0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=w0(e),l=A0(e),h=R0(e),d=C0(e),u=P0(e),f=_0(e),g=y0(r),x=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vs).join(`
`),p.length>0&&(p+=`
`)):(m=[Ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),p=[Ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?g0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,m0("linearToOutputTexel",e.outputColorSpace),x0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),o=Za(o),o=$l(o,e),o=Jl(o,e),a=Za(a),a=$l(a,e),a=Jl(a,e),o=Kl(o),a=Kl(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+m+o,_=v+p+a,I=ql(s,s.VERTEX_SHADER,y),A=ql(s,s.FRAGMENT_SHADER,_);s.attachShader(x,I),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(P){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(A).trim(),j=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,A);else{let tt=Zl(s,I,"vertex"),$=Zl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+tt+`
`+$)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:j,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(I),s.deleteShader(A),C=new Wi(s,x),E=v0(s,x)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,u0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}var L0=0,$a=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ja(t),e.set(t,n)),n}},Ja=class{constructor(t){this.id=L0++,this.code=t,this.usedTimes=0}};function D0(i,t,e,n,s,r,o){let a=new Pr,c=new $a,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,V,z){let W=V.fog,j=z.geometry,X=E.isMeshStandardMaterial?V.environment:null,tt=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),$=tt&&tt.mapping===Zr?tt.image.height:null,gt=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let Mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,At=Mt!==void 0?Mt.length:0,N=0;j.morphAttributes.position!==void 0&&(N=1),j.morphAttributes.normal!==void 0&&(N=2),j.morphAttributes.color!==void 0&&(N=3);let ct,B,Q,ft;if(gt){let ne=fn[gt];ct=ne.vertexShader,B=ne.fragmentShader}else ct=E.vertexShader,B=E.fragmentShader,c.update(E),Q=c.getVertexShaderID(E),ft=c.getFragmentShaderID(E);let it=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),pt=z.isInstancedMesh===!0,xt=z.isBatchedMesh===!0,yt=!!E.map,Z=!!E.matcap,st=!!tt,R=!!E.aoMap,Ct=!!E.lightMap,lt=!!E.bumpMap,Rt=!!E.normalMap,dt=!!E.displacementMap,zt=!!E.emissiveMap,Et=!!E.metalnessMap,T=!!E.roughnessMap,S=E.anisotropy>0,k=E.clearcoat>0,U=E.dispersion>0,G=E.iridescence>0,H=E.sheen>0,at=E.transmission>0,et=S&&!!E.anisotropyMap,ht=k&&!!E.clearcoatMap,Ht=k&&!!E.clearcoatNormalMap,ut=k&&!!E.clearcoatRoughnessMap,Pt=G&&!!E.iridescenceMap,kt=G&&!!E.iridescenceThicknessMap,Vt=H&&!!E.sheenColorMap,It=H&&!!E.sheenRoughnessMap,Jt=!!E.specularMap,Yt=!!E.specularColorMap,ae=!!E.specularIntensityMap,D=at&&!!E.transmissionMap,St=at&&!!E.thicknessMap,K=!!E.gradientMap,nt=!!E.alphaMap,wt=E.alphaTest>0,bt=!!E.alphaHash,Wt=!!E.extensions,me=Wn;E.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(me=i.toneMapping);let Ne={shaderID:gt,shaderType:E.type,shaderName:E.name,vertexShader:ct,fragmentShader:B,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:ft,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:xt,batchingColor:xt&&z._colorsTexture!==null,instancing:pt,instancingColor:pt&&z.instanceColor!==null,instancingMorph:pt&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ss,alphaToCoverage:!!E.alphaToCoverage,map:yt,matcap:Z,envMap:st,envMapMode:st&&tt.mapping,envMapCubeUVHeight:$,aoMap:R,lightMap:Ct,bumpMap:lt,normalMap:Rt,displacementMap:u&&dt,emissiveMap:zt,normalMapObjectSpace:Rt&&E.normalMapType===Ju,normalMapTangentSpace:Rt&&E.normalMapType===wh,metalnessMap:Et,roughnessMap:T,anisotropy:S,anisotropyMap:et,clearcoat:k,clearcoatMap:ht,clearcoatNormalMap:Ht,clearcoatRoughnessMap:ut,dispersion:U,iridescence:G,iridescenceMap:Pt,iridescenceThicknessMap:kt,sheen:H,sheenColorMap:Vt,sheenRoughnessMap:It,specularMap:Jt,specularColorMap:Yt,specularIntensityMap:ae,transmission:at,transmissionMap:D,thicknessMap:St,gradientMap:K,opaque:E.transparent===!1&&E.blending===Gn&&E.alphaToCoverage===!1,alphaMap:nt,alphaTest:wt,alphaHash:bt,combine:E.combine,mapUv:yt&&x(E.map.channel),aoMapUv:R&&x(E.aoMap.channel),lightMapUv:Ct&&x(E.lightMap.channel),bumpMapUv:lt&&x(E.bumpMap.channel),normalMapUv:Rt&&x(E.normalMap.channel),displacementMapUv:dt&&x(E.displacementMap.channel),emissiveMapUv:zt&&x(E.emissiveMap.channel),metalnessMapUv:Et&&x(E.metalnessMap.channel),roughnessMapUv:T&&x(E.roughnessMap.channel),anisotropyMapUv:et&&x(E.anisotropyMap.channel),clearcoatMapUv:ht&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(E.sheenRoughnessMap.channel),specularMapUv:Jt&&x(E.specularMap.channel),specularColorMapUv:Yt&&x(E.specularColorMap.channel),specularIntensityMapUv:ae&&x(E.specularIntensityMap.channel),transmissionMapUv:D&&x(E.transmissionMap.channel),thicknessMapUv:St&&x(E.thicknessMap.channel),alphaMapUv:nt&&x(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Rt||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(yt||nt),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ot,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:N,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:yt&&E.map.isVideoTexture===!0&&Kt.getTransfer(E.map.colorSpace)===se,decodeVideoTextureEmissive:zt&&E.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(E.emissiveMap.colorSpace)===se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===oe,flipSided:E.side===Me,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Wt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&E.extensions.multiDraw===!0||xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(v(M,E),y(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){let M=g[E.type],P;if(M){let V=fn[M];P=Sd.clone(V.uniforms)}else P=E.uniforms;return P}function I(E,M){let P;for(let V=0,z=h.length;V<z;V++){let W=h[V];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new I0(i,M,E,r),h.push(P)),P}function A(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function w(E){c.remove(E)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:C}}function U0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function N0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function th(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,g,x,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function a(d,u,f,g,x,m){let p=o(d,u,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,u,f,g,x,m){let p=o(d,u,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||N0),n.length>1&&n.sort(u||jl),s.length>1&&s.sort(u||jl)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function F0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new th,i.set(n,[o])):s>=r.length?(o=new th,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function O0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ot};break;case"SpotLight":e={position:new L,direction:new L,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function B0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var z0=0;function H0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function k0(i){let t=new O0,e=B0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new ie,o=new ie;function a(l){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,y=0,_=0,I=0,A=0,w=0;l.sort(H0);for(let E=0,M=l.length;E<M;E++){let P=l[E],V=P.color,z=P.intensity,W=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*z,d+=V.g*z,u+=V.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],z);w++}else if(P.isDirectionalLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,$=e.get(P);$.shadowIntensity=tt.intensity,$.shadowBias=tt.bias,$.shadowNormalBias=tt.normalBias,$.shadowRadius=tt.radius,$.shadowMapSize=tt.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=X,f++}else if(P.isSpotLight){let X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(V).multiplyScalar(z),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[x]=X;let tt=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,tt.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[x]=tt.matrix,P.castShadow){let $=e.get(P);$.shadowIntensity=tt.intensity,$.shadowBias=tt.bias,$.shadowNormalBias=tt.normalBias,$.shadowRadius=tt.radius,$.shadowMapSize=tt.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=j,_++}x++}else if(P.isRectAreaLight){let X=t.get(P);X.color.copy(V).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let tt=P.shadow,$=e.get(P);$.shadowIntensity=tt.intensity,$.shadowBias=tt.bias,$.shadowNormalBias=tt.normalBias,$.shadowRadius=tt.radius,$.shadowMapSize=tt.mapSize,$.shadowCameraNear=tt.camera.near,$.shadowCameraFar=tt.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=X,g++}else if(P.isHemisphereLight){let X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==_||C.numSpotMaps!==I||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=f,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=_,C.numSpotMaps=I,C.numLightProbes=w,n.version=z0++)}function c(l,h){let d=0,u=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let y=l[p];if(y.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function eh(i){let t=new k0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function V0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new eh(i),t.set(s,[a])):r>=o.length?(a=new eh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ka=class extends Zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qa=class extends Zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},G0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W0=`uniform sampler2D shadow_pass;
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
}`;function X0(i,t,e){let n=new ws,s=new _t,r=new _t,o=new re,a=new Ka({depthPacking:$u}),c=new Qa,l={},h=e.maxTextureSize,d={[gn]:Me,[Me]:gn,[oe]:oe},u=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:G0,fragmentShader:W0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new pe;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new J(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ph;let p=this.type;this.render=function(A,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Vn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let z=p!==Tn&&this.type===Tn,W=p===Tn&&this.type!==Tn;for(let j=0,X=A.length;j<X;j++){let tt=A[j],$=tt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let gt=$.getFrameExtents();if(s.multiply(gt),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,$.mapSize.y=r.y)),$.map===null||z===!0||W===!0){let At=this.type!==Tn?{minFilter:Ye,magFilter:Ye}:{};$.map!==null&&$.map.dispose(),$.map=new Pn(s.x,s.y,At),$.map.texture.name=tt.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let Mt=$.getViewportCount();for(let At=0;At<Mt;At++){let N=$.getViewport(At);o.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),V.viewport(o),$.updateMatrices(tt,At),n=$.getFrustum(),_(w,C,$.camera,tt,this.type)}$.isPointLightShadow!==!0&&this.type===Tn&&v($,C),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,P)};function v(A,w){let C=t.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pn(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,C,u,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,C,f,x,null)}function y(A,w,C,E){let M=null,P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let V=M.uuid,z=w.uuid,W=l[V];W===void 0&&(W={},l[V]=W);let j=W[z];j===void 0&&(j=M.clone(),W[z]=j,w.addEventListener("dispose",I)),M=j}if(M.visible=w.visible,M.wireframe=w.wireframe,E===Tn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let V=i.properties.get(M);V.light=C}return M}function _(A,w,C,E,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Tn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let z=t.update(A),W=A.material;if(Array.isArray(W)){let j=z.groups;for(let X=0,tt=j.length;X<tt;X++){let $=j[X],gt=W[$.materialIndex];if(gt&&gt.visible){let Mt=y(A,gt,E,M);A.onBeforeShadow(i,A,w,C,z,Mt,$),i.renderBufferDirect(C,null,z,Mt,A,$),A.onAfterShadow(i,A,w,C,z,Mt,$)}}}else if(W.visible){let j=y(A,W,E,M);A.onBeforeShadow(i,A,w,C,z,j,null),i.renderBufferDirect(C,null,z,j,A,null),A.onAfterShadow(i,A,w,C,z,j,null)}}let V=A.children;for(let z=0,W=V.length;z<W;z++)_(V[z],w,C,E,M)}function I(A){A.target.removeEventListener("dispose",I);for(let C in l){let E=l[C],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var q0={[ia]:sa,[ra]:ca,[oa]:la,[Xi]:aa,[sa]:ia,[ca]:ra,[la]:oa,[aa]:Xi};function Y0(i,t){function e(){let D=!1,St=new re,K=null,nt=new re(0,0,0,0);return{setMask:function(wt){K!==wt&&!D&&(i.colorMask(wt,wt,wt,wt),K=wt)},setLocked:function(wt){D=wt},setClear:function(wt,bt,Wt,me,Ne){Ne===!0&&(wt*=me,bt*=me,Wt*=me),St.set(wt,bt,Wt,me),nt.equals(St)===!1&&(i.clearColor(wt,bt,Wt,me),nt.copy(St))},reset:function(){D=!1,K=null,nt.set(-1,0,0,0)}}}function n(){let D=!1,St=!1,K=null,nt=null,wt=null;return{setReversed:function(bt){if(St!==bt){let Wt=t.get("EXT_clip_control");St?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);let me=wt;wt=null,this.setClear(me)}St=bt},getReversed:function(){return St},setTest:function(bt){bt?it(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(bt){K!==bt&&!D&&(i.depthMask(bt),K=bt)},setFunc:function(bt){if(St&&(bt=q0[bt]),nt!==bt){switch(bt){case ia:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=bt}},setLocked:function(bt){D=bt},setClear:function(bt){wt!==bt&&(St&&(bt=1-bt),i.clearDepth(bt),wt=bt)},reset:function(){D=!1,K=null,nt=null,wt=null,St=!1}}}function s(){let D=!1,St=null,K=null,nt=null,wt=null,bt=null,Wt=null,me=null,Ne=null;return{setTest:function(ne){D||(ne?it(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(ne){St!==ne&&!D&&(i.stencilMask(ne),St=ne)},setFunc:function(ne,nn,_n){(K!==ne||nt!==nn||wt!==_n)&&(i.stencilFunc(ne,nn,_n),K=ne,nt=nn,wt=_n)},setOp:function(ne,nn,_n){(bt!==ne||Wt!==nn||me!==_n)&&(i.stencilOp(ne,nn,_n),bt=ne,Wt=nn,me=_n)},setLocked:function(ne){D=ne},setClear:function(ne){Ne!==ne&&(i.clearStencil(ne),Ne=ne)},reset:function(){D=!1,St=null,K=null,nt=null,wt=null,bt=null,Wt=null,me=null,Ne=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,I=null,A=null,w=new Ot(0,0,0),C=0,E=!1,M=null,P=null,V=null,z=null,W=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,tt=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec($)[1]),X=tt>=1):$.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=tt>=2);let gt=null,Mt={},At=i.getParameter(i.SCISSOR_BOX),N=i.getParameter(i.VIEWPORT),ct=new re().fromArray(At),B=new re().fromArray(N);function Q(D,St,K,nt){let wt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(D,bt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<K;Wt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(St+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return bt}let ft={};ft[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(Xi),lt(!1),Rt(sl),it(i.CULL_FACE),R(Vn);function it(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function ot(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function pt(D,St){return d[D]!==St?(i.bindFramebuffer(D,St),d[D]=St,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=St),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=St),!0):!1}function xt(D,St){let K=f,nt=!1;if(D){K=u.get(St),K===void 0&&(K=[],u.set(St,K));let wt=D.textures;if(K.length!==wt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Wt=wt.length;bt<Wt;bt++)K[bt]=i.COLOR_ATTACHMENT0+bt;K.length=wt.length,nt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,nt=!0);nt&&i.drawBuffers(K)}function yt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let Z={[li]:i.FUNC_ADD,[Su]:i.FUNC_SUBTRACT,[Eu]:i.FUNC_REVERSE_SUBTRACT};Z[bu]=i.MIN,Z[Tu]=i.MAX;let st={[wu]:i.ZERO,[Au]:i.ONE,[Ru]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[Uu]:i.SRC_ALPHA_SATURATE,[Lu]:i.DST_COLOR,[Pu]:i.DST_ALPHA,[Cu]:i.ONE_MINUS_SRC_COLOR,[na]:i.ONE_MINUS_SRC_ALPHA,[Du]:i.ONE_MINUS_DST_COLOR,[Iu]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Fu]:i.ONE_MINUS_CONSTANT_COLOR,[Ou]:i.CONSTANT_ALPHA,[Bu]:i.ONE_MINUS_CONSTANT_ALPHA};function R(D,St,K,nt,wt,bt,Wt,me,Ne,ne){if(D===Vn){x===!0&&(ot(i.BLEND),x=!1);return}if(x===!1&&(it(i.BLEND),x=!0),D!==Mu){if(D!==m||ne!==E){if((p!==li||_!==li)&&(i.blendEquation(i.FUNC_ADD),p=li,_=li),ne)switch(D){case Gn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sr:i.blendFunc(i.ONE,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Gn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ol:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,y=null,I=null,A=null,w.set(0,0,0),C=0,m=D,E=ne}return}wt=wt||St,bt=bt||K,Wt=Wt||nt,(St!==p||wt!==_)&&(i.blendEquationSeparate(Z[St],Z[wt]),p=St,_=wt),(K!==v||nt!==y||bt!==I||Wt!==A)&&(i.blendFuncSeparate(st[K],st[nt],st[bt],st[Wt]),v=K,y=nt,I=bt,A=Wt),(me.equals(w)===!1||Ne!==C)&&(i.blendColor(me.r,me.g,me.b,Ne),w.copy(me),C=Ne),m=D,E=!1}function Ct(D,St){D.side===oe?ot(i.CULL_FACE):it(i.CULL_FACE);let K=D.side===Me;St&&(K=!K),lt(K),D.blending===Gn&&D.transparent===!1?R(Vn):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let nt=D.stencilWrite;a.setTest(nt),nt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),zt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Rt(D){D!==yu?(it(i.CULL_FACE),D!==P&&(D===sl?i.cullFace(i.BACK):D===vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),P=D}function dt(D){D!==V&&(X&&i.lineWidth(D),V=D)}function zt(D,St,K){D?(it(i.POLYGON_OFFSET_FILL),(z!==St||W!==K)&&(i.polygonOffset(St,K),z=St,W=K)):ot(i.POLYGON_OFFSET_FILL)}function Et(D){D?it(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+j-1),gt!==D&&(i.activeTexture(D),gt=D)}function S(D,St,K){K===void 0&&(gt===null?K=i.TEXTURE0+j-1:K=gt);let nt=Mt[K];nt===void 0&&(nt={type:void 0,texture:void 0},Mt[K]=nt),(nt.type!==D||nt.texture!==St)&&(gt!==K&&(i.activeTexture(K),gt=K),i.bindTexture(D,St||ft[D]),nt.type=D,nt.texture=St)}function k(){let D=Mt[gt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function U(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(D){ct.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ct.copy(D))}function It(D){B.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),B.copy(D))}function Jt(D,St){let K=l.get(St);K===void 0&&(K=new WeakMap,l.set(St,K));let nt=K.get(D);nt===void 0&&(nt=i.getUniformBlockIndex(St,D.name),K.set(D,nt))}function Yt(D,St){let nt=l.get(St).get(D);c.get(St)!==nt&&(i.uniformBlockBinding(St,nt,D.__bindingPointIndex),c.set(St,nt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},gt=null,Mt={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,I=null,A=null,w=new Ot(0,0,0),C=0,E=!1,M=null,P=null,V=null,z=null,W=null,ct.set(0,0,i.canvas.width,i.canvas.height),B.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:ot,bindFramebuffer:pt,drawBuffers:xt,useProgram:yt,setBlending:R,setMaterial:Ct,setFlipSided:lt,setCullFace:Rt,setLineWidth:dt,setPolygonOffset:zt,setScissorTest:Et,activeTexture:T,bindTexture:S,unbindTexture:k,compressedTexImage2D:U,compressedTexImage3D:G,texImage2D:Pt,texImage3D:kt,updateUBOMapping:Jt,uniformBlockBinding:Yt,texStorage2D:Ht,texStorage3D:ut,texSubImage2D:H,texSubImage3D:at,compressedTexSubImage2D:et,compressedTexSubImage3D:ht,scissor:Vt,viewport:It,reset:ae}}function nh(i,t,e,n){let s=Z0(n);switch(e){case vh:return i*t;case Sh:return i*t;case Eh:return i*t*2;case Ic:return i*t/s.components*s.byteLength;case Lc:return i*t/s.components*s.byteLength;case bh:return i*t*2/s.components*s.byteLength;case Dc:return i*t*2/s.components*s.byteLength;case Mh:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case Uc:return i*t*4/s.components*s.byteLength;case xr:case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yr:case vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(t,8)/4;case fa:case ma:return Math.max(i,8)*Math.max(t,8)/2;case xa:case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Mr:case Ua:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Th:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Z0(i){switch(i){case Cn:case xh:return{byteLength:1,components:1};case Ts:case _h:case Ns:return{byteLength:2,components:1};case Cc:case Pc:return{byteLength:2,components:4};case pi:case Rc:case mn:return{byteLength:4,components:1};case yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function $0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return f?new OffscreenCanvas(T,S):wr("canvas")}function x(T,S,k){let U=1,G=Et(T);if((G.width>k||G.height>k)&&(U=k/Math.max(G.width,G.height)),U<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let H=Math.floor(U*G.width),at=Math.floor(U*G.height);d===void 0&&(d=g(H,at));let et=S?g(H,at):d;return et.width=H,et.height=at,et.getContext("2d").drawImage(T,0,0,H,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+H+"x"+at+")."),et}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,S,k,U,G=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let H=S;if(S===i.RED&&(k===i.FLOAT&&(H=i.R32F),k===i.HALF_FLOAT&&(H=i.R16F),k===i.UNSIGNED_BYTE&&(H=i.R8)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(H=i.R8UI),k===i.UNSIGNED_SHORT&&(H=i.R16UI),k===i.UNSIGNED_INT&&(H=i.R32UI),k===i.BYTE&&(H=i.R8I),k===i.SHORT&&(H=i.R16I),k===i.INT&&(H=i.R32I)),S===i.RG&&(k===i.FLOAT&&(H=i.RG32F),k===i.HALF_FLOAT&&(H=i.RG16F),k===i.UNSIGNED_BYTE&&(H=i.RG8)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(H=i.RG8UI),k===i.UNSIGNED_SHORT&&(H=i.RG16UI),k===i.UNSIGNED_INT&&(H=i.RG32UI),k===i.BYTE&&(H=i.RG8I),k===i.SHORT&&(H=i.RG16I),k===i.INT&&(H=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(H=i.RGB8UI),k===i.UNSIGNED_SHORT&&(H=i.RGB16UI),k===i.UNSIGNED_INT&&(H=i.RGB32UI),k===i.BYTE&&(H=i.RGB8I),k===i.SHORT&&(H=i.RGB16I),k===i.INT&&(H=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),k===i.UNSIGNED_INT&&(H=i.RGBA32UI),k===i.BYTE&&(H=i.RGBA8I),k===i.SHORT&&(H=i.RGBA16I),k===i.INT&&(H=i.RGBA32I)),S===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),S===i.RGBA){let at=G?$r:Kt.getTransfer(U);k===i.FLOAT&&(H=i.RGBA32F),k===i.HALF_FLOAT&&(H=i.RGBA16F),k===i.UNSIGNED_BYTE&&(H=at===se?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function _(T,S){let k;return T?S===null||S===pi||S===Zi?k=i.DEPTH24_STENCIL8:S===mn?k=i.DEPTH32F_STENCIL8:S===Ts&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===pi||S===Zi?k=i.DEPTH_COMPONENT24:S===mn?k=i.DEPTH_COMPONENT32F:S===Ts&&(k=i.DEPTH_COMPONENT16),k}function I(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ye&&T.minFilter!==pn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function A(T){let S=T.target;S.removeEventListener("dispose",A),C(S),S.isVideoTexture&&h.delete(S)}function w(T){let S=T.target;S.removeEventListener("dispose",w),M(S)}function C(T){let S=n.get(T);if(S.__webglInit===void 0)return;let k=T.source,U=u.get(k);if(U){let G=U[S.__cacheKey];G.usedTimes--,G.usedTimes===0&&E(T),Object.keys(U).length===0&&u.delete(k)}n.remove(T)}function E(T){let S=n.get(T);i.deleteTexture(S.__webglTexture);let k=T.source,U=u.get(k);delete U[S.__cacheKey],o.memory.textures--}function M(T){let S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(S.__webglFramebuffer[U]))for(let G=0;G<S.__webglFramebuffer[U].length;G++)i.deleteFramebuffer(S.__webglFramebuffer[U][G]);else i.deleteFramebuffer(S.__webglFramebuffer[U]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[U])}else{if(Array.isArray(S.__webglFramebuffer))for(let U=0;U<S.__webglFramebuffer.length;U++)i.deleteFramebuffer(S.__webglFramebuffer[U]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let U=0;U<S.__webglColorRenderbuffer.length;U++)S.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[U]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let k=T.textures;for(let U=0,G=k.length;U<G;U++){let H=n.get(k[U]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(k[U])}n.remove(T)}let P=0;function V(){P=0}function z(){let T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function W(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function j(T,S){let k=n.get(T);if(T.isVideoTexture&&dt(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){let U=T.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(k,T,S);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function X(T,S){let k=n.get(T);if(T.version>0&&k.__version!==T.version){B(k,T,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function tt(T,S){let k=n.get(T);if(T.version>0&&k.__version!==T.version){B(k,T,S);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function $(T,S){let k=n.get(T);if(T.version>0&&k.__version!==T.version){Q(k,T,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}let gt={[bs]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},Mt={[Ye]:i.NEAREST,[Yu]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[vo]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},At={[Ku]:i.NEVER,[id]:i.ALWAYS,[Qu]:i.LESS,[Ah]:i.LEQUAL,[ju]:i.EQUAL,[nd]:i.GEQUAL,[td]:i.GREATER,[ed]:i.NOTEQUAL};function N(T,S){if(S.type===mn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===pn||S.magFilter===vo||S.magFilter===Gs||S.magFilter===fi||S.minFilter===pn||S.minFilter===vo||S.minFilter===Gs||S.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,gt[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,gt[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,gt[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Mt[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Mt[S.minFilter]),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,At[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ye||S.minFilter!==Gs&&S.minFilter!==fi||S.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ct(T,S){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",A));let U=S.source,G=u.get(U);G===void 0&&(G={},u.set(U,G));let H=W(S);if(H!==T.__cacheKey){G[H]===void 0&&(G[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),G[H].usedTimes++;let at=G[T.__cacheKey];at!==void 0&&(G[T.__cacheKey].usedTimes--,at.usedTimes===0&&E(S)),T.__cacheKey=H,T.__webglTexture=G[H].texture}return k}function B(T,S,k){let U=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(U=i.TEXTURE_3D);let G=ct(T,S),H=S.source;e.bindTexture(U,T.__webglTexture,i.TEXTURE0+k);let at=n.get(H);if(H.version!==at.__version||G===!0){e.activeTexture(i.TEXTURE0+k);let et=Kt.getPrimaries(Kt.workingColorSpace),ht=S.colorSpace===kn?null:Kt.getPrimaries(S.colorSpace),Ht=S.colorSpace===kn||et===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let ut=x(S.image,!1,s.maxTextureSize);ut=zt(S,ut);let Pt=r.convert(S.format,S.colorSpace),kt=r.convert(S.type),Vt=y(S.internalFormat,Pt,kt,S.colorSpace,S.isVideoTexture);N(U,S);let It,Jt=S.mipmaps,Yt=S.isVideoTexture!==!0,ae=at.__version===void 0||G===!0,D=H.dataReady,St=I(S,ut);if(S.isDepthTexture)Vt=_(S.format===$i,S.type),ae&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Vt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Vt,ut.width,ut.height,0,Pt,kt,null));else if(S.isDataTexture)if(Jt.length>0){Yt&&ae&&e.texStorage2D(i.TEXTURE_2D,St,Vt,Jt[0].width,Jt[0].height);for(let K=0,nt=Jt.length;K<nt;K++)It=Jt[K],Yt?D&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,It.width,It.height,Pt,kt,It.data):e.texImage2D(i.TEXTURE_2D,K,Vt,It.width,It.height,0,Pt,kt,It.data);S.generateMipmaps=!1}else Yt?(ae&&e.texStorage2D(i.TEXTURE_2D,St,Vt,ut.width,ut.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,Pt,kt,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,ut.width,ut.height,0,Pt,kt,ut.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Yt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Vt,Jt[0].width,Jt[0].height,ut.depth);for(let K=0,nt=Jt.length;K<nt;K++)if(It=Jt[K],S.format!==cn)if(Pt!==null)if(Yt){if(D)if(S.layerUpdates.size>0){let wt=nh(It.width,It.height,S.format,S.type);for(let bt of S.layerUpdates){let Wt=It.data.subarray(bt*wt/It.data.BYTES_PER_ELEMENT,(bt+1)*wt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,bt,It.width,It.height,1,Pt,Wt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,It.width,It.height,ut.depth,Pt,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Vt,It.width,It.height,ut.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,It.width,It.height,ut.depth,Pt,kt,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Vt,It.width,It.height,ut.depth,0,Pt,kt,It.data)}else{Yt&&ae&&e.texStorage2D(i.TEXTURE_2D,St,Vt,Jt[0].width,Jt[0].height);for(let K=0,nt=Jt.length;K<nt;K++)It=Jt[K],S.format!==cn?Pt!==null?Yt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,It.width,It.height,Pt,It.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Vt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?D&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,It.width,It.height,Pt,kt,It.data):e.texImage2D(i.TEXTURE_2D,K,Vt,It.width,It.height,0,Pt,kt,It.data)}else if(S.isDataArrayTexture)if(Yt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Vt,ut.width,ut.height,ut.depth),D)if(S.layerUpdates.size>0){let K=nh(ut.width,ut.height,S.format,S.type);for(let nt of S.layerUpdates){let wt=ut.data.subarray(nt*K/ut.data.BYTES_PER_ELEMENT,(nt+1)*K/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ut.width,ut.height,1,Pt,kt,wt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Pt,kt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,ut.width,ut.height,ut.depth,0,Pt,kt,ut.data);else if(S.isData3DTexture)Yt?(ae&&e.texStorage3D(i.TEXTURE_3D,St,Vt,ut.width,ut.height,ut.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Pt,kt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,ut.width,ut.height,ut.depth,0,Pt,kt,ut.data);else if(S.isFramebufferTexture){if(ae)if(Yt)e.texStorage2D(i.TEXTURE_2D,St,Vt,ut.width,ut.height);else{let K=ut.width,nt=ut.height;for(let wt=0;wt<St;wt++)e.texImage2D(i.TEXTURE_2D,wt,Vt,K,nt,0,Pt,kt,null),K>>=1,nt>>=1}}else if(Jt.length>0){if(Yt&&ae){let K=Et(Jt[0]);e.texStorage2D(i.TEXTURE_2D,St,Vt,K.width,K.height)}for(let K=0,nt=Jt.length;K<nt;K++)It=Jt[K],Yt?D&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Pt,kt,It):e.texImage2D(i.TEXTURE_2D,K,Vt,Pt,kt,It);S.generateMipmaps=!1}else if(Yt){if(ae){let K=Et(ut);e.texStorage2D(i.TEXTURE_2D,St,Vt,K.width,K.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,kt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Vt,Pt,kt,ut);m(S)&&p(U),at.__version=H.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Q(T,S,k){if(S.image.length!==6)return;let U=ct(T,S),G=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);let H=n.get(G);if(G.version!==H.__version||U===!0){e.activeTexture(i.TEXTURE0+k);let at=Kt.getPrimaries(Kt.workingColorSpace),et=S.colorSpace===kn?null:Kt.getPrimaries(S.colorSpace),ht=S.colorSpace===kn||at===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Ht=S.isCompressedTexture||S.image[0].isCompressedTexture,ut=S.image[0]&&S.image[0].isDataTexture,Pt=[];for(let nt=0;nt<6;nt++)!Ht&&!ut?Pt[nt]=x(S.image[nt],!0,s.maxCubemapSize):Pt[nt]=ut?S.image[nt].image:S.image[nt],Pt[nt]=zt(S,Pt[nt]);let kt=Pt[0],Vt=r.convert(S.format,S.colorSpace),It=r.convert(S.type),Jt=y(S.internalFormat,Vt,It,S.colorSpace),Yt=S.isVideoTexture!==!0,ae=H.__version===void 0||U===!0,D=G.dataReady,St=I(S,kt);N(i.TEXTURE_CUBE_MAP,S);let K;if(Ht){Yt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Jt,kt.width,kt.height);for(let nt=0;nt<6;nt++){K=Pt[nt].mipmaps;for(let wt=0;wt<K.length;wt++){let bt=K[wt];S.format!==cn?Vt!==null?Yt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,bt.width,bt.height,Vt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,Jt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,bt.width,bt.height,Vt,It,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,Jt,bt.width,bt.height,0,Vt,It,bt.data)}}}else{if(K=S.mipmaps,Yt&&ae){K.length>0&&St++;let nt=Et(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Jt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ut){Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Pt[nt].width,Pt[nt].height,Vt,It,Pt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,Pt[nt].width,Pt[nt].height,0,Vt,It,Pt[nt].data);for(let wt=0;wt<K.length;wt++){let Wt=K[wt].image[nt].image;Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,Wt.width,Wt.height,Vt,It,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,Jt,Wt.width,Wt.height,0,Vt,It,Wt.data)}}else{Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Vt,It,Pt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,Vt,It,Pt[nt]);for(let wt=0;wt<K.length;wt++){let bt=K[wt];Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,Vt,It,bt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,Jt,Vt,It,bt.image[nt])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),H.__version=G.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ft(T,S,k,U,G,H){let at=r.convert(k.format,k.colorSpace),et=r.convert(k.type),ht=y(k.internalFormat,at,et,k.colorSpace),Ht=n.get(S),ut=n.get(k);if(ut.__renderTarget=S,!Ht.__hasExternalTextures){let Pt=Math.max(1,S.width>>H),kt=Math.max(1,S.height>>H);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?e.texImage3D(G,H,ht,Pt,kt,S.depth,0,at,et,null):e.texImage2D(G,H,ht,Pt,kt,0,at,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Rt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,G,ut.__webglTexture,0,lt(S)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,G,ut.__webglTexture,H),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(T,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer){let U=S.depthTexture,G=U&&U.isDepthTexture?U.type:null,H=_(S.stencilBuffer,G),at=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=lt(S);Rt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,H,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,H,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,H,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,T)}else{let U=S.textures;for(let G=0;G<U.length;G++){let H=U[G],at=r.convert(H.format,H.colorSpace),et=r.convert(H.type),ht=y(H.internalFormat,at,et,H.colorSpace),Ht=lt(S);k&&Rt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,ht,S.width,S.height):Rt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,ht,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ht,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let U=n.get(S.depthTexture);U.__renderTarget=S,(!U.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);let G=U.__webglTexture,H=lt(S);if(S.depthTexture.format===Vi)Rt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(S.depthTexture.format===$i)Rt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function pt(T){let S=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){let U=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),U){let G=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,U.removeEventListener("dispose",G)};U.addEventListener("dispose",G),S.__depthDisposeCallback=G}S.__boundDepthTexture=U}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ot(S.__webglFramebuffer,T)}else if(k){S.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[U]),S.__webglDepthbuffer[U]===void 0)S.__webglDepthbuffer[U]=i.createRenderbuffer(),it(S.__webglDepthbuffer[U],T,!1);else{let G=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=S.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,H)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),it(S.__webglDepthbuffer,T,!1);else{let U=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,G)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(T,S,k){let U=n.get(T);S!==void 0&&ft(U.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&pt(T)}function yt(T){let S=T.texture,k=n.get(T),U=n.get(S);T.addEventListener("dispose",w);let G=T.textures,H=T.isWebGLCubeRenderTarget===!0,at=G.length>1;if(at||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=S.version,o.memory.textures++),H){k.__webglFramebuffer=[];for(let et=0;et<6;et++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[et]=[];for(let ht=0;ht<S.mipmaps.length;ht++)k.__webglFramebuffer[et][ht]=i.createFramebuffer()}else k.__webglFramebuffer[et]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let et=0;et<S.mipmaps.length;et++)k.__webglFramebuffer[et]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(at)for(let et=0,ht=G.length;et<ht;et++){let Ht=n.get(G[et]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Rt(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let et=0;et<G.length;et++){let ht=G[et];k.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[et]);let Ht=r.convert(ht.format,ht.colorSpace),ut=r.convert(ht.type),Pt=y(ht.internalFormat,Ht,ut,ht.colorSpace,T.isXRRenderTarget===!0),kt=lt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Pt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,k.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),it(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),N(i.TEXTURE_CUBE_MAP,S);for(let et=0;et<6;et++)if(S.mipmaps&&S.mipmaps.length>0)for(let ht=0;ht<S.mipmaps.length;ht++)ft(k.__webglFramebuffer[et][ht],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ht);else ft(k.__webglFramebuffer[et],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let et=0,ht=G.length;et<ht;et++){let Ht=G[et],ut=n.get(Ht);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),N(i.TEXTURE_2D,Ht),ft(k.__webglFramebuffer,T,Ht,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,0),m(Ht)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(et=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,U.__webglTexture),N(et,S),S.mipmaps&&S.mipmaps.length>0)for(let ht=0;ht<S.mipmaps.length;ht++)ft(k.__webglFramebuffer[ht],T,S,i.COLOR_ATTACHMENT0,et,ht);else ft(k.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,et,0);m(S)&&p(et),e.unbindTexture()}T.depthBuffer&&pt(T)}function Z(T){let S=T.textures;for(let k=0,U=S.length;k<U;k++){let G=S[k];if(m(G)){let H=v(T),at=n.get(G).__webglTexture;e.bindTexture(H,at),p(H),e.unbindTexture()}}}let st=[],R=[];function Ct(T){if(T.samples>0){if(Rt(T)===!1){let S=T.textures,k=T.width,U=T.height,G=i.COLOR_BUFFER_BIT,H=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(T),et=S.length>1;if(et)for(let ht=0;ht<S.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ht=0;ht<S.length;ht++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[ht]);let Ht=n.get(S[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,k,U,0,0,k,U,G,i.NEAREST),c===!0&&(st.length=0,R.length=0,st.push(i.COLOR_ATTACHMENT0+ht),T.depthBuffer&&T.resolveDepthBuffer===!1&&(st.push(H),R.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let ht=0;ht<S.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,at.__webglColorRenderbuffer[ht]);let Ht=n.get(S[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function lt(T){return Math.min(s.maxSamples,T.samples)}function Rt(T){let S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function dt(T){let S=o.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function zt(T,S){let k=T.colorSpace,U=T.format,G=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==ss&&k!==kn&&(Kt.getTransfer(k)===se?(U!==cn||G!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Et(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=$,this.rebindTextures=xt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Rt}function J0(i,t){function e(n,s=kn){let r,o=Kt.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return i.BYTE;if(n===_h)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===Rc)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Ns)return i.HALF_FLOAT;if(n===vh)return i.ALPHA;if(n===Mh)return i.RGB;if(n===cn)return i.RGBA;if(n===Sh)return i.LUMINANCE;if(n===Eh)return i.LUMINANCE_ALPHA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===Lc)return i.RED_INTEGER;if(n===bh)return i.RG;if(n===Dc)return i.RG_INTEGER;if(n===Uc)return i.RGBA_INTEGER;if(n===xr||n===_r||n===yr||n===vr)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===_a||n===ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===_a)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ya)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===va||n===Ma||n===Sa||n===Ea||n===ba||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===va)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Aa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ra)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ca)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ia)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===La)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mr||n===Ua||n===Na)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Mr)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Th||n===Fa||n===Oa||n===Ba)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ja=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jt=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},K0={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j0=`
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

}`,tc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ge,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:Q0,fragmentShader:j0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ec=class extends qn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,x=new tc,m=e.getContextAttributes(),p=null,v=null,y=[],_=[],I=new _t,A=null,w=new Pe;w.viewport=new re;let C=new Pe;C.viewport=new re;let E=[w,C],M=new ja,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Q=y[B];return Q===void 0&&(Q=new Ms,y[B]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(B){let Q=y[B];return Q===void 0&&(Q=new Ms,y[B]=Q),Q.getGripSpace()},this.getHand=function(B){let Q=y[B];return Q===void 0&&(Q=new Ms,y[B]=Q),Q.getHandSpace()};function z(B){let Q=_.indexOf(B.inputSource);if(Q===-1)return;let ft=y[Q];ft!==void 0&&(ft.update(B.inputSource,B.frame,l||o),ft.dispatchEvent({type:B.type,data:B.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let B=0;B<y.length;B++){let Q=_[B];Q!==null&&(_[B]=null,y[B].disconnect(Q))}P=null,V=null,x.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,v=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Pn(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ft=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?$i:Vi,ft=m.stencil?Zi:pi);let ot={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Pn(u.textureWidth,u.textureHeight,{format:cn,type:Cn,depthTexture:new Fr(u.textureWidth,u.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(B){for(let Q=0;Q<B.removed.length;Q++){let ft=B.removed[Q],it=_.indexOf(ft);it>=0&&(_[it]=null,y[it].disconnect(ft))}for(let Q=0;Q<B.added.length;Q++){let ft=B.added[Q],it=_.indexOf(ft);if(it===-1){for(let pt=0;pt<y.length;pt++)if(pt>=_.length){_.push(ft),it=pt;break}else if(_[pt]===null){_[pt]=ft,it=pt;break}if(it===-1)break}let ot=y[it];ot&&ot.connect(ft)}}let X=new L,tt=new L;function $(B,Q,ft){X.setFromMatrixPosition(Q.matrixWorld),tt.setFromMatrixPosition(ft.matrixWorld);let it=X.distanceTo(tt),ot=Q.projectionMatrix.elements,pt=ft.projectionMatrix.elements,xt=ot[14]/(ot[10]-1),yt=ot[14]/(ot[10]+1),Z=(ot[9]+1)/ot[5],st=(ot[9]-1)/ot[5],R=(ot[8]-1)/ot[0],Ct=(pt[8]+1)/pt[0],lt=xt*R,Rt=xt*Ct,dt=it/(-R+Ct),zt=dt*-R;if(Q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(zt),B.translateZ(dt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ot[10]===-1)B.projectionMatrix.copy(Q.projectionMatrix),B.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Et=xt+dt,T=yt+dt,S=lt-zt,k=Rt+(it-zt),U=Z*yt/T*Et,G=st*yt/T*Et;B.projectionMatrix.makePerspective(S,k,U,G,Et,T),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function gt(B,Q){Q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let Q=B.near,ft=B.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ft=x.depthFar)),M.near=C.near=w.near=Q,M.far=C.far=w.far=ft,(P!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,V=M.far),w.layers.mask=B.layers.mask|2,C.layers.mask=B.layers.mask|4,M.layers.mask=w.layers.mask|C.layers.mask;let it=B.parent,ot=M.cameras;gt(M,it);for(let pt=0;pt<ot.length;pt++)gt(ot[pt],it);ot.length===2?$(M,w,C):M.projectionMatrix.copy(w.projectionMatrix),Mt(B,M,it)};function Mt(B,Q,ft){ft===null?B.matrix.copy(Q.matrixWorld):(B.matrix.copy(ft.matrixWorld),B.matrix.invert(),B.matrix.multiply(Q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Q.projectionMatrix),B.projectionMatrixInverse.copy(Q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Tr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(B){c=B,u!==null&&(u.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let At=null;function N(B,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){let ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let it=!1;ft.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let pt=0;pt<ft.length;pt++){let xt=ft[pt],yt=null;if(f!==null)yt=f.getViewport(xt);else{let st=d.getViewSubImage(u,xt);yt=st.viewport,pt===0&&(t.setRenderTargetTextures(v,st.colorTexture,u.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(v))}let Z=E[pt];Z===void 0&&(Z=new Pe,Z.layers.enable(pt),Z.viewport=new re,E[pt]=Z),Z.matrix.fromArray(xt.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(xt.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(yt.x,yt.y,yt.width,yt.height),pt===0&&(M.matrix.copy(Z.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(Z)}let ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")){let pt=d.getDepthInformation(ft[0]);pt&&pt.isValid&&pt.texture&&x.init(t,pt,s.renderState)}}for(let ft=0;ft<y.length;ft++){let it=_[ft],ot=y[ft];it!==null&&ot!==void 0&&ot.update(it,Q,l||o)}At&&At(B,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ct=new Ih;ct.setAnimationLoop(N),this.setAnimationLoop=function(B){At=B},this.dispose=function(){}}},ai=new Ke,tg=new ie;function eg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ph(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Me&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Me&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,ai.copy(_),ai.x*=-1,ai.y*=-1,ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(ai)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Me&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ng(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let _=y.program;n.uniformBlockBinding(v,_)}function l(v,y){let _=s[v.id];_===void 0&&(g(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",m));let I=y.program;n.updateUBOMapping(v,I);let A=t.render.frame;r[v.id]!==A&&(u(v),r[v.id]=A)}function h(v){let y=d();v.__bindingPointIndex=y;let _=i.createBuffer(),I=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let y=s[v.id],_=v.uniforms,I=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,w=_.length;A<w;A++){let C=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,M=C.length;E<M;E++){let P=C[E];if(f(P,A,E,I)===!0){let V=P.__offset,z=Array.isArray(P.value)?P.value:[P.value],W=0;for(let j=0;j<z.length;j++){let X=z[j],tt=x(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,V+W,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,_,I){let A=v.value,w=y+"_"+_;if(I[w]===void 0)return typeof A=="number"||typeof A=="boolean"?I[w]=A:I[w]=A.clone(),!0;{let C=I[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return I[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(v){let y=v.uniforms,_=0,I=16;for(let w=0,C=y.length;w<C;w++){let E=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,P=E.length;M<P;M++){let V=E[M],z=Array.isArray(V.value)?V.value:[V.value];for(let W=0,j=z.length;W<j;W++){let X=z[W],tt=x(X),$=_%I,gt=$%tt.boundary,Mt=$+gt;_+=gt,Mt!==0&&I-Mt<tt.storage&&(_+=I-Mt),V.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=tt.storage}}}let A=_%I;return A>0&&(_+=I-A),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Or=class{constructor(t={}){let{canvas:e=rd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this.toneMapping=Wn,this.toneMappingExposure=1;let _=this,I=!1,A=0,w=0,C=null,E=-1,M=null,P=new re,V=new re,z=null,W=new Ot(0),j=0,X=e.width,tt=e.height,$=1,gt=null,Mt=null,At=new re(0,0,X,tt),N=new re(0,0,X,tt),ct=!1,B=new ws,Q=!1,ft=!1,it=new ie,ot=new ie,pt=new L,xt=new re,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function st(){return C===null?$:1}let R=n;function Ct(b,F){return e.getContext(b,F)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),R===null){let F="webgl2";if(R=Ct(F,b),R===null)throw Ct(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let lt,Rt,dt,zt,Et,T,S,k,U,G,H,at,et,ht,Ht,ut,Pt,kt,Vt,It,Jt,Yt,ae,D;function St(){lt=new _m(R),lt.init(),Yt=new J0(R,lt),Rt=new dm(R,lt,t,Yt),dt=new Y0(R,lt),Rt.reverseDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),zt=new Mm(R),Et=new U0,T=new $0(R,lt,dt,Et,Rt,Yt,zt),S=new pm(_),k=new xm(_),U=new Ad(R),ae=new hm(R,U),G=new ym(R,U,zt,ae),H=new Em(R,G,U,zt),Vt=new Sm(R,Rt,T),ut=new fm(Et),at=new D0(_,S,k,lt,Rt,ae,ut),et=new eg(_,Et),ht=new F0,Ht=new V0(lt),kt=new lm(_,S,k,dt,H,f,c),Pt=new X0(_,H,Rt),D=new ng(R,zt,Rt,dt),It=new um(R,lt,zt),Jt=new vm(R,lt,zt),zt.programs=at.programs,_.capabilities=Rt,_.extensions=lt,_.properties=Et,_.renderLists=ht,_.shadowMap=Pt,_.state=dt,_.info=zt}St();let K=new ec(_,R);this.xr=K,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let b=lt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=lt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(X,tt,!1))},this.getSize=function(b){return b.set(X,tt)},this.setSize=function(b,F,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,tt=F,e.width=Math.floor(b*$),e.height=Math.floor(F*$),q===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(X*$,tt*$).floor()},this.setDrawingBufferSize=function(b,F,q){X=b,tt=F,$=q,e.width=Math.floor(b*q),e.height=Math.floor(F*q),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,F,q,Y){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,F,q,Y),dt.viewport(P.copy(At).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(N)},this.setScissor=function(b,F,q,Y){b.isVector4?N.set(b.x,b.y,b.z,b.w):N.set(b,F,q,Y),dt.scissor(V.copy(N).multiplyScalar($).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(b){dt.setScissorTest(ct=b)},this.setOpaqueSort=function(b){gt=b},this.setTransparentSort=function(b){Mt=b},this.getClearColor=function(b){return b.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(b=!0,F=!0,q=!0){let Y=0;if(b){let O=!1;if(C!==null){let mt=C.texture.format;O=mt===Uc||mt===Dc||mt===Lc}if(O){let mt=C.texture.type,Tt=mt===Cn||mt===pi||mt===Ts||mt===Zi||mt===Cc||mt===Pc,Lt=kt.getClearColor(),Dt=kt.getClearAlpha(),Gt=Lt.r,Xt=Lt.g,Ut=Lt.b;Tt?(g[0]=Gt,g[1]=Xt,g[2]=Ut,g[3]=Dt,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Gt,x[1]=Xt,x[2]=Ut,x[3]=Dt,R.clearBufferiv(R.COLOR,0,x))}else Y|=R.COLOR_BUFFER_BIT}F&&(Y|=R.DEPTH_BUFFER_BIT),q&&(Y|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),ht.dispose(),Ht.dispose(),Et.dispose(),S.dispose(),k.dispose(),H.dispose(),ae.dispose(),D.dispose(),at.dispose(),K.dispose(),K.removeEventListener("sessionstart",Jc),K.removeEventListener("sessionend",Kc),ei.stop()};function nt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let b=zt.autoReset,F=Pt.enabled,q=Pt.autoUpdate,Y=Pt.needsUpdate,O=Pt.type;St(),zt.autoReset=b,Pt.enabled=F,Pt.autoUpdate=q,Pt.needsUpdate=Y,Pt.type=O}function bt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Wt(b){let F=b.target;F.removeEventListener("dispose",Wt),me(F)}function me(b){Ne(b),Et.remove(b)}function Ne(b){let F=Et.get(b).programs;F!==void 0&&(F.forEach(function(q){at.releaseProgram(q)}),b.isShaderMaterial&&at.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,q,Y,O,mt){F===null&&(F=yt);let Tt=O.isMesh&&O.matrixWorld.determinant()<0,Lt=gu(b,F,q,Y,O);dt.setMaterial(Y,Tt);let Dt=q.index,Gt=1;if(Y.wireframe===!0){if(Dt=G.getWireframeAttribute(q),Dt===void 0)return;Gt=2}let Xt=q.drawRange,Ut=q.attributes.position,Qt=Xt.start*Gt,ce=(Xt.start+Xt.count)*Gt;mt!==null&&(Qt=Math.max(Qt,mt.start*Gt),ce=Math.min(ce,(mt.start+mt.count)*Gt)),Dt!==null?(Qt=Math.max(Qt,0),ce=Math.min(ce,Dt.count)):Ut!=null&&(Qt=Math.max(Qt,0),ce=Math.min(ce,Ut.count));let he=ce-Qt;if(he<0||he===1/0)return;ae.setup(O,Y,Lt,q,Dt);let ke,te=It;if(Dt!==null&&(ke=U.get(Dt),te=Jt,te.setIndex(ke)),O.isMesh)Y.wireframe===!0?(dt.setLineWidth(Y.wireframeLinewidth*st()),te.setMode(R.LINES)):te.setMode(R.TRIANGLES);else if(O.isLine){let Nt=Y.linewidth;Nt===void 0&&(Nt=1),dt.setLineWidth(Nt*st()),O.isLineSegments?te.setMode(R.LINES):O.isLineLoop?te.setMode(R.LINE_LOOP):te.setMode(R.LINE_STRIP)}else O.isPoints?te.setMode(R.POINTS):O.isSprite&&te.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)te.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))te.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Nt=O._multiDrawStarts,yn=O._multiDrawCounts,ee=O._multiDrawCount,sn=Dt?U.get(Dt).bytesPerElement:1,bi=Et.get(Y).currentProgram.getUniforms();for(let We=0;We<ee;We++)bi.setValue(R,"_gl_DrawID",We),te.render(Nt[We]/sn,yn[We])}else if(O.isInstancedMesh)te.renderInstances(Qt,he,O.count);else if(q.isInstancedBufferGeometry){let Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,yn=Math.min(q.instanceCount,Nt);te.renderInstances(Qt,he,yn)}else te.render(Qt,he)};function ne(b,F,q){b.transparent===!0&&b.side===oe&&b.forceSinglePass===!1?(b.side=Me,b.needsUpdate=!0,Vs(b,F,q),b.side=gn,b.needsUpdate=!0,Vs(b,F,q),b.side=oe):Vs(b,F,q)}this.compile=function(b,F,q=null){q===null&&(q=b),p=Ht.get(q),p.init(F),y.push(p),q.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==q&&b.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let Y=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let mt=O.material;if(mt)if(Array.isArray(mt))for(let Tt=0;Tt<mt.length;Tt++){let Lt=mt[Tt];ne(Lt,q,O),Y.add(Lt)}else ne(mt,q,O),Y.add(mt)}),y.pop(),p=null,Y},this.compileAsync=function(b,F,q=null){let Y=this.compile(b,F,q);return new Promise(O=>{function mt(){if(Y.forEach(function(Tt){Et.get(Tt).currentProgram.isReady()&&Y.delete(Tt)}),Y.size===0){O(b);return}setTimeout(mt,10)}lt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let nn=null;function _n(b){nn&&nn(b)}function Jc(){ei.stop()}function Kc(){ei.start()}let ei=new Ih;ei.setAnimationLoop(_n),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(b){nn=b,K.setAnimationLoop(b),b===null?ei.stop():ei.start()},K.addEventListener("sessionstart",Jc),K.addEventListener("sessionend",Kc),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,F,C),p=Ht.get(b,y.length),p.init(F),y.push(p),ot.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),B.setFromProjectionMatrix(ot),ft=this.localClippingEnabled,Q=ut.init(this.clippingPlanes,ft),m=ht.get(b,v.length),m.init(),v.push(m),K.enabled===!0&&K.isPresenting===!0){let mt=_.xr.getDepthSensingMesh();mt!==null&&yo(mt,F,-1/0,_.sortObjects)}yo(b,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(gt,Mt),Z=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Z&&kt.addToRenderList(m,b),this.info.render.frame++,Q===!0&&ut.beginShadows();let q=p.state.shadowsArray;Pt.render(q,b,F),Q===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){let mt=F.cameras;if(O.length>0)for(let Tt=0,Lt=mt.length;Tt<Lt;Tt++){let Dt=mt[Tt];jc(Y,O,b,Dt)}Z&&kt.render(b);for(let Tt=0,Lt=mt.length;Tt<Lt;Tt++){let Dt=mt[Tt];Qc(m,b,Dt,Dt.viewport)}}else O.length>0&&jc(Y,O,b,F),Z&&kt.render(b),Qc(m,b,F);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(_,b,F),ae.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],Q===!0&&ut.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function yo(b,F,q,Y){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||B.intersectsSprite(b)){Y&&xt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ot);let Tt=H.update(b),Lt=b.material;Lt.visible&&m.push(b,Tt,Lt,q,xt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||B.intersectsObject(b))){let Tt=H.update(b),Lt=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),xt.copy(b.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),xt.copy(Tt.boundingSphere.center)),xt.applyMatrix4(b.matrixWorld).applyMatrix4(ot)),Array.isArray(Lt)){let Dt=Tt.groups;for(let Gt=0,Xt=Dt.length;Gt<Xt;Gt++){let Ut=Dt[Gt],Qt=Lt[Ut.materialIndex];Qt&&Qt.visible&&m.push(b,Tt,Qt,q,xt.z,Ut)}}else Lt.visible&&m.push(b,Tt,Lt,q,xt.z,null)}}let mt=b.children;for(let Tt=0,Lt=mt.length;Tt<Lt;Tt++)yo(mt[Tt],F,q,Y)}function Qc(b,F,q,Y){let O=b.opaque,mt=b.transmissive,Tt=b.transparent;p.setupLightsView(q),Q===!0&&ut.setGlobalState(_.clippingPlanes,q),Y&&dt.viewport(P.copy(Y)),O.length>0&&ks(O,F,q),mt.length>0&&ks(mt,F,q),Tt.length>0&&ks(Tt,F,q),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function jc(b,F,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Pn(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Ns:Cn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let mt=p.state.transmissionRenderTarget[Y.id],Tt=Y.viewport||P;mt.setSize(Tt.z,Tt.w);let Lt=_.getRenderTarget();_.setRenderTarget(mt),_.getClearColor(W),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),Z&&kt.render(q);let Dt=_.toneMapping;_.toneMapping=Wn;let Gt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Q===!0&&ut.setGlobalState(_.clippingPlanes,Y),ks(b,q,Y),T.updateMultisampleRenderTarget(mt),T.updateRenderTargetMipmap(mt),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ut=0,Qt=F.length;Ut<Qt;Ut++){let ce=F[Ut],he=ce.object,ke=ce.geometry,te=ce.material,Nt=ce.group;if(te.side===oe&&he.layers.test(Y.layers)){let yn=te.side;te.side=Me,te.needsUpdate=!0,tl(he,q,Y,ke,te,Nt),te.side=yn,te.needsUpdate=!0,Xt=!0}}Xt===!0&&(T.updateMultisampleRenderTarget(mt),T.updateRenderTargetMipmap(mt))}_.setRenderTarget(Lt),_.setClearColor(W,j),Gt!==void 0&&(Y.viewport=Gt),_.toneMapping=Dt}function ks(b,F,q){let Y=F.isScene===!0?F.overrideMaterial:null;for(let O=0,mt=b.length;O<mt;O++){let Tt=b[O],Lt=Tt.object,Dt=Tt.geometry,Gt=Y===null?Tt.material:Y,Xt=Tt.group;Lt.layers.test(q.layers)&&tl(Lt,F,q,Dt,Gt,Xt)}}function tl(b,F,q,Y,O,mt){b.onBeforeRender(_,F,q,Y,O,mt),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(_,F,q,Y,b,mt),O.transparent===!0&&O.side===oe&&O.forceSinglePass===!1?(O.side=Me,O.needsUpdate=!0,_.renderBufferDirect(q,F,Y,O,b,mt),O.side=gn,O.needsUpdate=!0,_.renderBufferDirect(q,F,Y,O,b,mt),O.side=oe):_.renderBufferDirect(q,F,Y,O,b,mt),b.onAfterRender(_,F,q,Y,O,mt)}function Vs(b,F,q){F.isScene!==!0&&(F=yt);let Y=Et.get(b),O=p.state.lights,mt=p.state.shadowsArray,Tt=O.state.version,Lt=at.getParameters(b,O.state,mt,F,q),Dt=at.getProgramCacheKey(Lt),Gt=Y.programs;Y.environment=b.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(b.isMeshStandardMaterial?k:S).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Gt===void 0&&(b.addEventListener("dispose",Wt),Gt=new Map,Y.programs=Gt);let Xt=Gt.get(Dt);if(Xt!==void 0){if(Y.currentProgram===Xt&&Y.lightsStateVersion===Tt)return nl(b,Lt),Xt}else Lt.uniforms=at.getUniforms(b),b.onBeforeCompile(Lt,_),Xt=at.acquireProgram(Lt,Dt),Gt.set(Dt,Xt),Y.uniforms=Lt.uniforms;let Ut=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ut.clippingPlanes=ut.uniform),nl(b,Lt),Y.needsLights=_u(b),Y.lightsStateVersion=Tt,Y.needsLights&&(Ut.ambientLightColor.value=O.state.ambient,Ut.lightProbe.value=O.state.probe,Ut.directionalLights.value=O.state.directional,Ut.directionalLightShadows.value=O.state.directionalShadow,Ut.spotLights.value=O.state.spot,Ut.spotLightShadows.value=O.state.spotShadow,Ut.rectAreaLights.value=O.state.rectArea,Ut.ltc_1.value=O.state.rectAreaLTC1,Ut.ltc_2.value=O.state.rectAreaLTC2,Ut.pointLights.value=O.state.point,Ut.pointLightShadows.value=O.state.pointShadow,Ut.hemisphereLights.value=O.state.hemi,Ut.directionalShadowMap.value=O.state.directionalShadowMap,Ut.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ut.spotShadowMap.value=O.state.spotShadowMap,Ut.spotLightMatrix.value=O.state.spotLightMatrix,Ut.spotLightMap.value=O.state.spotLightMap,Ut.pointShadowMap.value=O.state.pointShadowMap,Ut.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=Xt,Y.uniformsList=null,Xt}function el(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=Wi.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function nl(b,F){let q=Et.get(b);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function gu(b,F,q,Y,O){F.isScene!==!0&&(F=yt),T.resetTextureUnits();let mt=F.fog,Tt=Y.isMeshStandardMaterial?F.environment:null,Lt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ss,Dt=(Y.isMeshStandardMaterial?k:S).get(Y.envMap||Tt),Gt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ut=!!q.morphAttributes.position,Qt=!!q.morphAttributes.normal,ce=!!q.morphAttributes.color,he=Wn;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(he=_.toneMapping);let ke=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,te=ke!==void 0?ke.length:0,Nt=Et.get(Y),yn=p.state.lights;if(Q===!0&&(ft===!0||b!==M)){let $e=b===M&&Y.id===E;ut.setState(Y,b,$e)}let ee=!1;Y.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==yn.state.version||Nt.outputColorSpace!==Lt||O.isBatchedMesh&&Nt.batching===!1||!O.isBatchedMesh&&Nt.batching===!0||O.isBatchedMesh&&Nt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Nt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Nt.instancing===!1||!O.isInstancedMesh&&Nt.instancing===!0||O.isSkinnedMesh&&Nt.skinning===!1||!O.isSkinnedMesh&&Nt.skinning===!0||O.isInstancedMesh&&Nt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Nt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Nt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Nt.instancingMorph===!1&&O.morphTexture!==null||Nt.envMap!==Dt||Y.fog===!0&&Nt.fog!==mt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ut.numPlanes||Nt.numIntersection!==ut.numIntersection)||Nt.vertexAlphas!==Gt||Nt.vertexTangents!==Xt||Nt.morphTargets!==Ut||Nt.morphNormals!==Qt||Nt.morphColors!==ce||Nt.toneMapping!==he||Nt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Nt.__version=Y.version);let sn=Nt.currentProgram;ee===!0&&(sn=Vs(Y,F,O));let bi=!1,We=!1,ls=!1,ue=sn.getUniforms(),dn=Nt.uniforms;if(dt.useProgram(sn.program)&&(bi=!0,We=!0,ls=!0),Y.id!==E&&(E=Y.id,We=!0),bi||M!==b){dt.buffers.depth.getReversed()?(it.copy(b.projectionMatrix),ad(it),cd(it),ue.setValue(R,"projectionMatrix",it)):ue.setValue(R,"projectionMatrix",b.projectionMatrix),ue.setValue(R,"viewMatrix",b.matrixWorldInverse);let Dn=ue.map.cameraPosition;Dn!==void 0&&Dn.setValue(R,pt.setFromMatrixPosition(b.matrixWorld)),Rt.logarithmicDepthBuffer&&ue.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ue.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,We=!0,ls=!0)}if(O.isSkinnedMesh){ue.setOptional(R,O,"bindMatrix"),ue.setOptional(R,O,"bindMatrixInverse");let $e=O.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ue.setValue(R,"boneTexture",$e.boneTexture,T))}O.isBatchedMesh&&(ue.setOptional(R,O,"batchingTexture"),ue.setValue(R,"batchingTexture",O._matricesTexture,T),ue.setOptional(R,O,"batchingIdTexture"),ue.setValue(R,"batchingIdTexture",O._indirectTexture,T),ue.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&ue.setValue(R,"batchingColorTexture",O._colorsTexture,T));let hs=q.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&Vt.update(O,q,sn),(We||Nt.receiveShadow!==O.receiveShadow)&&(Nt.receiveShadow=O.receiveShadow,ue.setValue(R,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(dn.envMap.value=Dt,dn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(dn.envMapIntensity.value=F.environmentIntensity),We&&(ue.setValue(R,"toneMappingExposure",_.toneMappingExposure),Nt.needsLights&&xu(dn,ls),mt&&Y.fog===!0&&et.refreshFogUniforms(dn,mt),et.refreshMaterialUniforms(dn,Y,$,tt,p.state.transmissionRenderTarget[b.id]),Wi.upload(R,el(Nt),dn,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Wi.upload(R,el(Nt),dn,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ue.setValue(R,"center",O.center),ue.setValue(R,"modelViewMatrix",O.modelViewMatrix),ue.setValue(R,"normalMatrix",O.normalMatrix),ue.setValue(R,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let $e=Y.uniformsGroups;for(let Dn=0,Un=$e.length;Dn<Un;Dn++){let il=$e[Dn];D.update(il,sn),D.bind(il,sn)}}return sn}function xu(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function _u(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,F,q){Et.get(b.texture).__webglTexture=F,Et.get(b.depthTexture).__webglTexture=q;let Y=Et.get(b);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){let q=Et.get(b);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,q=0){C=b,A=F,w=q;let Y=!0,O=null,mt=!1,Tt=!1;if(b){let Dt=Et.get(b);if(Dt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(R.FRAMEBUFFER,null),Y=!1;else if(Dt.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Dt.__hasExternalTextures)T.rebindTextures(b,Et.get(b.texture).__webglTexture,Et.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ut=b.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&Et.has(Ut)&&(b.width!==Ut.image.width||b.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}let Gt=b.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Tt=!0);let Xt=Et.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xt[F])?O=Xt[F][q]:O=Xt[F],mt=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?O=Et.get(b).__webglMultisampledFramebuffer:Array.isArray(Xt)?O=Xt[q]:O=Xt,P.copy(b.viewport),V.copy(b.scissor),z=b.scissorTest}else P.copy(At).multiplyScalar($).floor(),V.copy(N).multiplyScalar($).floor(),z=ct;if(dt.bindFramebuffer(R.FRAMEBUFFER,O)&&Y&&dt.drawBuffers(b,O),dt.viewport(P),dt.scissor(V),dt.setScissorTest(z),mt){let Dt=Et.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,Dt.__webglTexture,q)}else if(Tt){let Dt=Et.get(b.texture),Gt=F||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Dt.__webglTexture,q||0,Gt)}E=-1},this.readRenderTargetPixels=function(b,F,q,Y,O,mt,Tt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Lt=Lt[Tt]),Lt){dt.bindFramebuffer(R.FRAMEBUFFER,Lt);try{let Dt=b.texture,Gt=Dt.format,Xt=Dt.type;if(!Rt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-Y&&q>=0&&q<=b.height-O&&R.readPixels(F,q,Y,O,Yt.convert(Gt),Yt.convert(Xt),mt)}finally{let Dt=C!==null?Et.get(C).__webglFramebuffer:null;dt.bindFramebuffer(R.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(b,F,q,Y,O,mt,Tt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Lt=Lt[Tt]),Lt){let Dt=b.texture,Gt=Dt.format,Xt=Dt.type;if(!Rt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-Y&&q>=0&&q<=b.height-O){dt.bindFramebuffer(R.FRAMEBUFFER,Lt);let Ut=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ut),R.bufferData(R.PIXEL_PACK_BUFFER,mt.byteLength,R.STREAM_READ),R.readPixels(F,q,Y,O,Yt.convert(Gt),Yt.convert(Xt),0);let Qt=C!==null?Et.get(C).__webglFramebuffer:null;dt.bindFramebuffer(R.FRAMEBUFFER,Qt);let ce=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await od(R,ce,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ut),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,mt),R.deleteBuffer(Ut),R.deleteSync(ce),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,q=0){b.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);let Y=Math.pow(2,-q),O=Math.floor(b.image.width*Y),mt=Math.floor(b.image.height*Y),Tt=F!==null?F.x:0,Lt=F!==null?F.y:0;T.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,q,0,0,Tt,Lt,O,mt),dt.unbindTexture()},this.copyTextureToTexture=function(b,F,q=null,Y=null,O=0){b.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1],F=arguments[2],O=arguments[3]||0,q=null);let mt,Tt,Lt,Dt,Gt,Xt,Ut,Qt,ce,he=b.isCompressedTexture?b.mipmaps[O]:b.image;q!==null?(mt=q.max.x-q.min.x,Tt=q.max.y-q.min.y,Lt=q.isBox3?q.max.z-q.min.z:1,Dt=q.min.x,Gt=q.min.y,Xt=q.isBox3?q.min.z:0):(mt=he.width,Tt=he.height,Lt=he.depth||1,Dt=0,Gt=0,Xt=0),Y!==null?(Ut=Y.x,Qt=Y.y,ce=Y.z):(Ut=0,Qt=0,ce=0);let ke=Yt.convert(F.format),te=Yt.convert(F.type),Nt;F.isData3DTexture?(T.setTexture3D(F,0),Nt=R.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),Nt=R.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),Nt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);let yn=R.getParameter(R.UNPACK_ROW_LENGTH),ee=R.getParameter(R.UNPACK_IMAGE_HEIGHT),sn=R.getParameter(R.UNPACK_SKIP_PIXELS),bi=R.getParameter(R.UNPACK_SKIP_ROWS),We=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,he.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,he.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Dt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Gt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Xt);let ls=b.isDataArrayTexture||b.isData3DTexture,ue=F.isDataArrayTexture||F.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let dn=Et.get(b),hs=Et.get(F),$e=Et.get(dn.__renderTarget),Dn=Et.get(hs.__renderTarget);dt.bindFramebuffer(R.READ_FRAMEBUFFER,$e.__webglFramebuffer),dt.bindFramebuffer(R.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let Un=0;Un<Lt;Un++)ls&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Et.get(b).__webglTexture,O,Xt+Un),b.isDepthTexture?(ue&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Et.get(F).__webglTexture,O,ce+Un),R.blitFramebuffer(Dt,Gt,mt,Tt,Ut,Qt,mt,Tt,R.DEPTH_BUFFER_BIT,R.NEAREST)):ue?R.copyTexSubImage3D(Nt,O,Ut,Qt,ce+Un,Dt,Gt,mt,Tt):R.copyTexSubImage2D(Nt,O,Ut,Qt,ce+Un,Dt,Gt,mt,Tt);dt.bindFramebuffer(R.READ_FRAMEBUFFER,null),dt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ue?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Nt,O,Ut,Qt,ce,mt,Tt,Lt,ke,te,he.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(Nt,O,Ut,Qt,ce,mt,Tt,Lt,ke,he.data):R.texSubImage3D(Nt,O,Ut,Qt,ce,mt,Tt,Lt,ke,te,he):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,O,Ut,Qt,mt,Tt,ke,te,he.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,O,Ut,Qt,he.width,he.height,ke,he.data):R.texSubImage2D(R.TEXTURE_2D,O,Ut,Qt,mt,Tt,ke,te,he);R.pixelStorei(R.UNPACK_ROW_LENGTH,yn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ee),R.pixelStorei(R.UNPACK_SKIP_PIXELS,sn),R.pixelStorei(R.UNPACK_SKIP_ROWS,bi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,We),O===0&&F.generateMipmaps&&R.generateMipmap(Nt),dt.unbindTexture()},this.copyTextureToTexture3D=function(b,F,q=null,Y=null,O=0){return b.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,b=arguments[2],F=arguments[3],O=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,q,Y,O)},this.initRenderTarget=function(b){Et.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),dt.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,dt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var Qi=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mi=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var nc=class extends Ge{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ye,h=Ye,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var As=class extends Se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zi=new ie,ih=new ie,hr=[],sh=new In,ig=new ie,gs=new J,xs=new Yn,gi=class extends J{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ig)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new In),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),sh.copy(t.boundingBox).applyMatrix4(zi),this.boundingBox.union(sh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),xs.copy(t.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(n),t.ray.intersectsSphere(xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zi),ih.multiplyMatrices(n,zi),gs.matrixWorld=ih,gs.raycast(t,hr);for(let o=0,a=hr.length;o<a;o++){let c=hr[o];c.instanceId=r,c.object=this,e.push(c)}hr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new nc(new Float32Array(s*this.count),s,this.count,Ic,mn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ic=class extends Zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rh=new ie,sc=new Cr,ur=new Yn,dr=new L,Br=class extends Ie{constructor(t=new pe,e=new ic){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),ur.radius+=r,t.ray.intersectsSphere(ur)===!1)return;rh.copy(s).invert(),sc.copy(t.ray).applyMatrix4(rh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,x=f;g<x;g++){let m=l.getX(g);dr.fromBufferAttribute(d,m),oh(dr,m,c,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)dr.fromBufferAttribute(d,g),oh(dr,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function oh(i,t,e,n,s,r,o){let a=sc.distanceSqToPoint(i);if(a<e){let c=new L;sc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var $n=class extends Ge{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new _t:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,c=new ie;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rs=class extends Qe{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},rc=class extends Rs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Fc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var fr=new L,Jo=new Fc,Ko=new Fc,Qo=new Fc,oc=class extends Qe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(fr.subVectors(s[0],s[1]).add(s[0]),l=fr);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Jo.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,x,m),Ko.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,x,m),Qo.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Jo.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Ko.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Qo.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Jo.calc(c),Ko.calc(c),Qo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ah(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function sg(i,t){let e=1-i;return e*e*t}function rg(i,t){return 2*(1-i)*i*t}function og(i,t){return i*i*t}function Ss(i,t,e,n){return sg(i,t)+rg(i,e)+og(i,n)}function ag(i,t){let e=1-i;return e*e*e*t}function cg(i,t){let e=1-i;return 3*e*e*i*t}function lg(i,t){return 3*(1-i)*i*i*t}function hg(i,t){return i*i*i*t}function Es(i,t,e,n,s){return ag(i,t)+cg(i,e)+lg(i,n)+hg(i,s)}var zr=class extends Qe{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Es(t,s.x,r.x,o.x,a.x),Es(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cs=class extends Qe{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Es(t,s.x,r.x,o.x,a.x),Es(t,s.y,r.y,o.y,a.y),Es(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hr=class extends Qe{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ac=class extends Qe{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kr=class extends Qe{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ss(t,s.x,r.x,o.x),Ss(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cc=class extends Qe{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ss(t,s.x,r.x,o.x),Ss(t,s.y,r.y,o.y),Ss(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vr=class extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ah(a,c.x,l.x,h.x,d.x),ah(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},lc=Object.freeze({__proto__:null,ArcCurve:rc,CatmullRomCurve3:oc,CubicBezierCurve:zr,CubicBezierCurve3:Cs,EllipseCurve:Rs,LineCurve:Hr,LineCurve3:ac,QuadraticBezierCurve:kr,QuadraticBezierCurve3:cc,SplineCurve:Vr}),hc=class extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new lc[s.type]().fromJSON(s))}return this}},ji=class extends hc{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Hr(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new kr(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new zr(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Vr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Rs(t,e,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Gr=class i extends pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,h=new _t;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},le=class i extends pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],m=n/2,p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2));function v(){let _=new L,I=new L,A=0,w=(e-t)/n;for(let C=0;C<=r;C++){let E=[],M=C/r,P=M*(e-t)+t;for(let V=0;V<=s;V++){let z=V/s,W=z*c+a,j=Math.sin(W),X=Math.cos(W);I.x=P*j,I.y=-M*n+m,I.z=P*X,d.push(I.x,I.y,I.z),_.set(j,w,X).normalize(),u.push(_.x,_.y,_.z),f.push(z,1-M),E.push(g++)}x.push(E)}for(let C=0;C<s;C++)for(let E=0;E<r;E++){let M=x[E][C],P=x[E+1][C],V=x[E+1][C+1],z=x[E][C+1];(t>0||E!==0)&&(h.push(M,P,z),A+=3),(e>0||E!==r-1)&&(h.push(P,V,z),A+=3)}l.addGroup(p,A,0),p+=A}function y(_){let I=g,A=new _t,w=new L,C=0,E=_===!0?t:e,M=_===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;let P=g;for(let V=0;V<=s;V++){let W=V/s*c+a,j=Math.cos(W),X=Math.sin(W);w.x=E*X,w.y=m*M,w.z=E*j,d.push(w.x,w.y,w.z),u.push(0,M,0),A.x=j*.5+.5,A.y=X*.5*M+.5,f.push(A.x,A.y),g++}for(let V=0;V<s;V++){let z=I+V,W=P+V;_===!0?h.push(W,W+1,z):h.push(W+1,W,z),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},De=class i extends le{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wr=class i extends pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new L,_=new L,I=new L;for(let A=0;A<e.length;A+=3)f(e[A+0],y),f(e[A+1],_),f(e[A+2],I),c(y,_,I,v)}function c(v,y,_,I){let A=I+1,w=[];for(let C=0;C<=A;C++){w[C]=[];let E=v.clone().lerp(_,C/A),M=y.clone().lerp(_,C/A),P=A-C;for(let V=0;V<=P;V++)V===0&&C===A?w[C][V]=E:w[C][V]=E.clone().lerp(M,V/P)}for(let C=0;C<A;C++)for(let E=0;E<2*(A-C)-1;E++){let M=Math.floor(E/2);E%2===0?(u(w[C][M+1]),u(w[C+1][M]),u(w[C][M])):(u(w[C][M+1]),u(w[C+1][M+1]),u(w[C+1][M]))}}function l(v){let y=new L;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let v=new L;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let _=m(v)/2/Math.PI+.5,I=p(v)/Math.PI+.5;o.push(_,1-I)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){let y=o[v+0],_=o[v+2],I=o[v+4],A=Math.max(y,_,I),w=Math.min(y,_,I);A>.9&&w<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),I<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,y){let _=v*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){let v=new L,y=new L,_=new L,I=new L,A=new _t,w=new _t,C=new _t;for(let E=0,M=0;E<r.length;E+=9,M+=6){v.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),A.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),I.copy(v).add(y).add(_).divideScalar(3);let P=m(I);x(A,M+0,v,P),x(w,M+2,y,P),x(C,M+4,_,P)}}function x(v,y,_,I){I<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=I/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Xr=class i extends Wr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var je=class extends ji{constructor(t){super(t),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ji().fromJSON(s))}return this}},ug={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Fh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,u,f;if(n&&(r=gg(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)d=i[g],u=i[g+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Ps(r,o,e,a,c,f,0),o}};function Fh(i,t,e,n,s){let r,o;if(s===Ag(i,t,e,n)>0)for(r=t;r<e;r+=n)o=ch(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=ch(r,i[r],i[r+1],o);return o&&Kr(o,o.next)&&(Ls(o),o=o.next),o}function xi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Kr(e,e.next)||fe(e.prev,e,e.next)===0)){if(Ls(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ps(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Mg(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?fg(i,n,s,r):dg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ls(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=pg(xi(i),t,e),Ps(i,t,e,n,s,r,2)):o===2&&mg(i,t,e,n,s,r):Ps(xi(i),t,e,n,s,r,1);break}}}function dg(i){let t=i.prev,e=i,n=i.next;if(fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&ki(s,a,r,c,o,l,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(fe(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<d?h<u?h:u:d<u?d:u,x=a>c?a>l?a:l:c>l?c:l,m=h>d?h>u?h:u:d>u?d:u,p=uc(f,g,t,e,n),v=uc(x,m,t,e,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ki(a,h,c,d,l,u,y.x,y.y)&&fe(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ki(a,h,c,d,l,u,_.x,_.y)&&fe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ki(a,h,c,d,l,u,y.x,y.y)&&fe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ki(a,h,c,d,l,u,_.x,_.y)&&fe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function pg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Kr(s,r)&&Oh(s,n,n.next,r)&&Is(s,r)&&Is(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ls(n),Ls(n.next),n=i=r),n=n.next}while(n!==i);return xi(n)}function mg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bg(o,a)){let c=Bh(o,a);o=xi(o,o.next),c=xi(c,c.next),Ps(o,t,e,n,s,r,0),Ps(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function gg(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Fh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Eg(l));for(s.sort(xg),r=0;r<s.length;r++)e=_g(s[r],e);return e}function xg(i,t){return i.x-t.x}function _g(i,t){let e=yg(i,t);if(!e)return t;let n=Bh(e,i);return xi(n,n.next),xi(e,e.next)}function yg(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ki(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Is(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&vg(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function vg(i,t){return fe(i.prev,i,t.prev)<0&&fe(t.next,i,i.next)<0}function Mg(i,t,e,n){let s=i;do s.z===0&&(s.z=uc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sg(s)}function Sg(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function uc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Eg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ki(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function bg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Tg(i,t)&&(Is(i,t)&&Is(t,i)&&wg(i,t)&&(fe(i.prev,i,t.prev)||fe(i,t.prev,t))||Kr(i,t)&&fe(i.prev,i,i.next)>0&&fe(t.prev,t,t.next)>0)}function fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Kr(i,t){return i.x===t.x&&i.y===t.y}function Oh(i,t,e,n){let s=mr(fe(i,t,e)),r=mr(fe(i,t,n)),o=mr(fe(e,n,i)),a=mr(fe(e,n,t));return!!(s!==r&&o!==a||s===0&&pr(i,e,t)||r===0&&pr(i,n,t)||o===0&&pr(e,i,n)||a===0&&pr(e,t,n))}function pr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function mr(i){return i>0?1:i<0?-1:0}function Tg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Oh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Is(i,t){return fe(i.prev,i,i.next)<0?fe(i,t,i.next)>=0&&fe(i,i.prev,t)>=0:fe(i,t,i.prev)<0||fe(i,i.next,t)<0}function wg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bh(i,t){let e=new dc(i.i,i.x,i.y),n=new dc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ch(i,t,e,n){let s=new dc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ag(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Xn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];lh(t),hh(n,t);let o=t.length;e.forEach(lh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,hh(n,e[c]);let a=ug.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function lh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function hh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ts=class i extends pe{constructor(t=new je([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new $t(s,3)),this.setAttribute("uv",new $t(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Rg,y,_=!1,I,A,w,C;p&&(y=p.getSpacedPoints(h),_=!0,u=!1,I=p.computeFrenetFrames(h,!1),A=new L,w=new L,C=new L),u||(m=0,f=0,g=0,x=0);let E=a.extractPoints(l),M=E.shape,P=E.holes;if(!Xn.isClockWise(M)){M=M.reverse();for(let Z=0,st=P.length;Z<st;Z++){let R=P[Z];Xn.isClockWise(R)&&(P[Z]=R.reverse())}}let z=Xn.triangulateShape(M,P),W=M;for(let Z=0,st=P.length;Z<st;Z++){let R=P[Z];M=M.concat(R)}function j(Z,st,R){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(st,R)}let X=M.length,tt=z.length;function $(Z,st,R){let Ct,lt,Rt,dt=Z.x-st.x,zt=Z.y-st.y,Et=R.x-Z.x,T=R.y-Z.y,S=dt*dt+zt*zt,k=dt*T-zt*Et;if(Math.abs(k)>Number.EPSILON){let U=Math.sqrt(S),G=Math.sqrt(Et*Et+T*T),H=st.x-zt/U,at=st.y+dt/U,et=R.x-T/G,ht=R.y+Et/G,Ht=((et-H)*T-(ht-at)*Et)/(dt*T-zt*Et);Ct=H+dt*Ht-Z.x,lt=at+zt*Ht-Z.y;let ut=Ct*Ct+lt*lt;if(ut<=2)return new _t(Ct,lt);Rt=Math.sqrt(ut/2)}else{let U=!1;dt>Number.EPSILON?Et>Number.EPSILON&&(U=!0):dt<-Number.EPSILON?Et<-Number.EPSILON&&(U=!0):Math.sign(zt)===Math.sign(T)&&(U=!0),U?(Ct=-zt,lt=dt,Rt=Math.sqrt(S)):(Ct=dt,lt=zt,Rt=Math.sqrt(S/2))}return new _t(Ct/Rt,lt/Rt)}let gt=[];for(let Z=0,st=W.length,R=st-1,Ct=Z+1;Z<st;Z++,R++,Ct++)R===st&&(R=0),Ct===st&&(Ct=0),gt[Z]=$(W[Z],W[R],W[Ct]);let Mt=[],At,N=gt.concat();for(let Z=0,st=P.length;Z<st;Z++){let R=P[Z];At=[];for(let Ct=0,lt=R.length,Rt=lt-1,dt=Ct+1;Ct<lt;Ct++,Rt++,dt++)Rt===lt&&(Rt=0),dt===lt&&(dt=0),At[Ct]=$(R[Ct],R[Rt],R[dt]);Mt.push(At),N=N.concat(At)}for(let Z=0;Z<m;Z++){let st=Z/m,R=f*Math.cos(st*Math.PI/2),Ct=g*Math.sin(st*Math.PI/2)+x;for(let lt=0,Rt=W.length;lt<Rt;lt++){let dt=j(W[lt],gt[lt],Ct);it(dt.x,dt.y,-R)}for(let lt=0,Rt=P.length;lt<Rt;lt++){let dt=P[lt];At=Mt[lt];for(let zt=0,Et=dt.length;zt<Et;zt++){let T=j(dt[zt],At[zt],Ct);it(T.x,T.y,-R)}}}let ct=g+x;for(let Z=0;Z<X;Z++){let st=u?j(M[Z],N[Z],ct):M[Z];_?(w.copy(I.normals[0]).multiplyScalar(st.x),A.copy(I.binormals[0]).multiplyScalar(st.y),C.copy(y[0]).add(w).add(A),it(C.x,C.y,C.z)):it(st.x,st.y,0)}for(let Z=1;Z<=h;Z++)for(let st=0;st<X;st++){let R=u?j(M[st],N[st],ct):M[st];_?(w.copy(I.normals[Z]).multiplyScalar(R.x),A.copy(I.binormals[Z]).multiplyScalar(R.y),C.copy(y[Z]).add(w).add(A),it(C.x,C.y,C.z)):it(R.x,R.y,d/h*Z)}for(let Z=m-1;Z>=0;Z--){let st=Z/m,R=f*Math.cos(st*Math.PI/2),Ct=g*Math.sin(st*Math.PI/2)+x;for(let lt=0,Rt=W.length;lt<Rt;lt++){let dt=j(W[lt],gt[lt],Ct);it(dt.x,dt.y,d+R)}for(let lt=0,Rt=P.length;lt<Rt;lt++){let dt=P[lt];At=Mt[lt];for(let zt=0,Et=dt.length;zt<Et;zt++){let T=j(dt[zt],At[zt],Ct);_?it(T.x,T.y+y[h-1].y,y[h-1].x+R):it(T.x,T.y,d+R)}}}B(),Q();function B(){let Z=s.length/3;if(u){let st=0,R=X*st;for(let Ct=0;Ct<tt;Ct++){let lt=z[Ct];ot(lt[2]+R,lt[1]+R,lt[0]+R)}st=h+m*2,R=X*st;for(let Ct=0;Ct<tt;Ct++){let lt=z[Ct];ot(lt[0]+R,lt[1]+R,lt[2]+R)}}else{for(let st=0;st<tt;st++){let R=z[st];ot(R[2],R[1],R[0])}for(let st=0;st<tt;st++){let R=z[st];ot(R[0]+X*h,R[1]+X*h,R[2]+X*h)}}n.addGroup(Z,s.length/3-Z,0)}function Q(){let Z=s.length/3,st=0;ft(W,st),st+=W.length;for(let R=0,Ct=P.length;R<Ct;R++){let lt=P[R];ft(lt,st),st+=lt.length}n.addGroup(Z,s.length/3-Z,1)}function ft(Z,st){let R=Z.length;for(;--R>=0;){let Ct=R,lt=R-1;lt<0&&(lt=Z.length-1);for(let Rt=0,dt=h+m*2;Rt<dt;Rt++){let zt=X*Rt,Et=X*(Rt+1),T=st+Ct+zt,S=st+lt+zt,k=st+lt+Et,U=st+Ct+Et;pt(T,S,k,U)}}}function it(Z,st,R){c.push(Z),c.push(st),c.push(R)}function ot(Z,st,R){xt(Z),xt(st),xt(R);let Ct=s.length/3,lt=v.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);yt(lt[0]),yt(lt[1]),yt(lt[2])}function pt(Z,st,R,Ct){xt(Z),xt(st),xt(Ct),xt(st),xt(R),xt(Ct);let lt=s.length/3,Rt=v.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);yt(Rt[0]),yt(Rt[1]),yt(Rt[3]),yt(Rt[1]),yt(Rt[2]),yt(Rt[3])}function xt(Z){s.push(c[Z*3+0]),s.push(c[Z*3+1]),s.push(c[Z*3+2])}function yt(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Cg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new lc[s.type]().fromJSON(s)),new i(n,t.options)}},Rg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new _t(r,o),new _t(a,c),new _t(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new _t(o,1-c),new _t(l,1-d),new _t(u,1-g),new _t(x,1-p)]:[new _t(a,1-c),new _t(h,1-d),new _t(f,1-g),new _t(m,1-p)]}};function Cg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ds=class i extends Wr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var _i=class i extends pe{constructor(t=new je([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(r,3)),this.setAttribute("uv",new $t(o,2));function l(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;Xn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];Xn.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=Xn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){let v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){let v=x[m],y=v[0]+d,_=v[1]+d,I=v[2]+d;n.push(y,_,I),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Pg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Pg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ge=class i extends pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new L,u=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],y=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){let A=I/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(A+_,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let y=h[p][v+1],_=h[p][v],I=h[p+1][v],A=h[p+1][v+1];(p!==0||o>0)&&f.push(y,_,A),(p!==n-1||c<Math.PI)&&f.push(_,I,A)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var tn=class i extends pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,d=new L,u=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var rt=class extends Zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function gr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ig(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var es=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fc=class extends es{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:al,endingEnd:al}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case cl:r=t,a=2*e-n;break;case ll:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cl:o=t,c=2*n-e;break;case ll:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+v*o[l+I]+y*o[c+I]+_*o[d+I];return r}},pc=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},mc=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gr(e,this.TimeBufferType),this.values=gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gr(t.times,Array),values:gr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Er:e=this.InterpolantFactoryMethodDiscrete;break;case za:e=this.InterpolantFactoryMethodLinear;break;case Mo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Mo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Ig(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=za;var yi=class extends ln{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Er;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends ln{};gc.prototype.ValueTypeName="color";var xc=class extends ln{};xc.prototype.ValueTypeName="number";var _c=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)xn.slerpFlat(r,0,o,l-a,o,l,c);return r}},qr=class extends ln{InterpolantFactoryMethodLinear(t){return new _c(this.times,this.values,this.getValueSize(),t)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends ln{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Er;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends ln{};yc.prototype.ValueTypeName="vector";var vc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Lg=new vc,Mc=class{constructor(t){this.manager=t!==void 0?t:Lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Mc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ns=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},is=class extends ns{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},jo=new ie,uh=new L,dh=new L,Us=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(uh),dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dh),e.updateMatrixWorld(),jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sc=class extends Us{constructor(){super(new Pe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Tr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Yr=class extends ns{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Sc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},fh=new ie,_s=new L,ta=new L,Ec=class extends Us{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_s.setFromMatrixPosition(t.matrixWorld),n.position.copy(_s),ta.copy(n.position),ta.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ta),n.updateMatrixWorld(),s.makeTranslation(-_s.x,-_s.y,-_s.z),fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh)}},Mi=class extends ns{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ec}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},bc=class extends Us{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Si=class extends ns{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new bc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Oc="\\[\\]\\.:\\/",Dg=new RegExp("["+Oc+"]","g"),Bc="[^"+Oc+"]",Ug="[^"+Oc.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",Bc),Fg=/(WCOD+)?/.source.replace("WCOD",Ug),Og=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),Bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),zg=new RegExp("^"+Ng+Fg+Og+Bg+"$"),Hg=["material","materials","bones","map"],Tc=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dg,"")}static parseTrackName(t){let e=zg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Hg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Tc;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var kg=Math.PI/180;function Vg(){return[{type:"S",len:230},{type:"A",ang:90,r:70},{type:"S",len:330},{type:"A",ang:90,r:65},{type:"A",ang:-35,r:60},{type:"A",ang:70,r:60},{type:"A",ang:-35,r:60},{type:"S",len:290},{type:"A",ang:90,r:70},{type:"S",len:0,solve:"X"},{type:"A",ang:90,r:65},{type:"S",len:0,solve:"Y"}]}var zc=i=>[-Math.sin(i),Math.cos(i)];function zh(i){let t=0,e=0,n=0,s=0;for(let r of i){if(r.s0=t,r.x0=e,r.z0=n,r.th0=s,r.type==="S")r.length=r.len,e+=Math.cos(s)*r.len,n+=Math.sin(s)*r.len;else{let o=r.ang*kg,a=Math.sign(o);r.length=Math.abs(o)*r.r;let[c,l]=zc(s);r.cx=e+c*r.r*a,r.cz=n+l*r.r*a,s+=o;let[h,d]=zc(s);e=r.cx-h*r.r*a,n=r.cz-d*r.r*a}t+=r.length}return{s:t,x:e,z:n,th:s}}function Gg(){let i=Vg(),t=zh(i),e=i.find(u=>u.solve==="X"),n=i.find(u=>u.solve==="Y"),s=Math.cos(e.th0),r=Math.sin(e.th0),o=Math.cos(n.th0),a=Math.sin(n.th0),c=s*a-r*o,l=(-t.x*a+t.z*o)/c,h=(-s*t.z+r*t.x)/c;e.len=l,n.len=h;let d=zh(i);if(Math.hypot(d.x,d.z)>.01||l<50||h<50)throw new Error("El circuito no cierra");return{segs:i,length:d.s}}var Hh=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Qr=class{constructor(){let{segs:t,length:e}=Gg();this.segs=t,this.length=e,this.N=Math.round(e),this.ds=e/this.N;let n=this.N;this.px=new Float32Array(n),this.pz=new Float32Array(n),this.th=new Float32Array(n);for(let s=0;s<n;s++){let r=this.evalAt(s*this.ds);this.px[s]=r.x,this.pz[s]=r.z,this.th[s]=r.th}this.buildFeatures()}at(t,e){return this.snap(this.segs[t].s0+e)}snap(t){return Math.round(t/this.ds)*this.ds}wrap(t){let e=this.length;return t%=e,t<0?t+e:t}evalAt(t){t=this.wrap(t);let e=this.segs[this.segs.length-1];for(let c of this.segs)if(t<c.s0+c.length){e=c;break}let n=t-e.s0;if(e.type==="S")return{x:e.x0+Math.cos(e.th0)*n,z:e.z0+Math.sin(e.th0)*n,th:e.th0};let s=Math.sign(e.ang),r=e.th0+s*n/e.r,[o,a]=zc(r);return{x:e.cx-o*e.r*s,z:e.cz-a*e.r*s,th:r}}buildFeatures(){let t=(e,n)=>this.at(e,n);this.plateaus=[{a:t(2,115),b:t(2,160),c:t(2,270),d:t(2,315),h:5},{a:t(9,130),b:t(9,172),c:t(9,275),d:t(9,318),h:4.5}],this.whoops=[{a:t(9,65),b:t(9,65)+54,amp:.75,wl:9}],this.ramps=[{s0:t(2,180),s1:t(2,196),d0:-15,d1:15,h:3.5},{s0:t(9,190),s1:t(9,206),d0:-15,d1:3,h:3.5}],this.pits=[{name:"foso",s0:t(2,196),s1:t(2,214),floor:0,water:!1},{name:"cocodrilos",s0:t(9,206),s1:t(9,228),floor:1.4,water:!0,bridge:[6.5,11.5]}];for(let e of this.pits)e.top=this.baseAt((e.s0+e.s1)/2),e.respawnS=e.s1+10;this.mud=[{s:t(9,18),d:-5,rs:9,rd:5},{s:t(9,34),d:4,rs:10,rd:6},{s:t(9,52),d:-2,rs:8,rd:5.5}],this.tunnel={s0:t(7,30),s1:t(7,250)},this.startLine=0}baseAt(t){t=this.wrap(t);let e=0;for(let n of this.plateaus)t>n.a&&t<n.d&&(e+=n.h*Hh(n.a,n.b,t)*(1-Hh(n.c,n.d,t)));for(let n of this.whoops)t>n.a&&t<n.b&&(e+=n.amp*(1-Math.cos(2*Math.PI*(t-n.a)/n.wl))/2);return e}surfaceAt(t,e){t=this.wrap(t);let n=this.baseAt(t),s=Math.abs(e)<=11?"road":"grass";for(let r of this.ramps)t>=r.s0&&t<r.s1&&e>=r.d0&&e<=r.d1&&(n+=r.h*(t-r.s0)/(r.s1-r.s0),s="ramp");for(let r of this.pits)if(t>=r.s0&&t<r.s1)return r.bridge&&e>=r.bridge[0]&&e<=r.bridge[1]?{h:n+.3,type:"bridge",top:n}:{h:r.floor,type:r.water?"water":"pit",top:n,pit:r};if(s==="road")for(let r of this.mud){let o=t-r.s;if(o>this.length/2&&(o-=this.length),(o/r.rs)**2+((e-r.d)/r.rd)**2<1){s="mud";break}}return{h:n,type:s}}inTunnel(t){return t=this.wrap(t),t>this.tunnel.s0&&t<this.tunnel.s1}pointAt(t,e=0){t=this.wrap(t);let n=t/this.ds,s=Math.floor(n)%this.N,r=(s+1)%this.N,o=n-Math.floor(n),a=this.th[s],l=this.th[r]-a;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;let h=a+l*o,d=this.px[s]+(this.px[r]-this.px[s])*o,u=this.pz[s]+(this.pz[r]-this.pz[s])*o,f=-Math.sin(h),g=Math.cos(h);return{x:d+f*e,z:u+g*e,th:h,rx:f,rz:g,tx:Math.cos(h),tz:Math.sin(h)}}project(t,e,n=-1){let s=this.N,r=this.px,o=this.pz,a=0,c=1/0;if(n>=0)for(let m=-40;m<=40;m++){let p=(n+m+s)%s,v=t-r[p],y=e-o[p],_=v*v+y*y;_<c&&(c=_,a=p)}if(n<0||c>1600){c=1/0;for(let m=0;m<s;m++){let p=t-r[m],v=e-o[m],y=p*p+v*v;y<c&&(c=y,a=m)}}let l=this.th[a],h=Math.cos(l),d=Math.sin(l),u=t-r[a],f=e-o[a],g=u*h+f*d,x=-u*d+f*h;return{s:this.wrap(a*this.ds+g),d:x,i:a,th:l}}curvatureAhead(t,e){let n=this.pointAt(t).th,r=this.pointAt(t+e).th-n;for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;return r}ahead(t,e){return this.wrap(e-t)}};function we(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new pe,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=kh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let g=kh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function kh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Se(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let x=h.getComponent(u,g);a.setComponent(u+d,g,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Gh=4;function Wh(i){Gh=i}function Ln(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function _e(i,t,e,{repeat:n=!0,srgb:s=!0}={}){let r=document.createElement("canvas");r.width=i,r.height=t;let o=r.getContext("2d");e(o,i,t);let a=new $n(r);return s&&(a.colorSpace=ve),n&&(a.wrapS=a.wrapT=bs),a.anisotropy=Gh,a}function Os(i,t,e,n,s,r,o,a){for(let c=0;c<n;c++){i.fillStyle=s[Math.floor(a()*s.length)];let l=r+a()*(o-r);i.globalAlpha=.25+a()*.5,i.fillRect(a()*t,a()*e,l,l)}i.globalAlpha=1}var Vh={},Ee=(i,t)=>Vh[i]||(Vh[i]=t()),Xh=()=>Ee("road",()=>_e(512,512,(i,t,e)=>{let n=Ln(7);i.fillStyle="#5f7d34",i.fillRect(0,0,t,e),Os(i,t,e,4e3,["#4e6b2a","#76923f","#6b5a35","#839b4a"],1,4,n);let s=Math.round(t*(4/30)),r=Math.round(t*(26/30));i.save(),i.beginPath(),i.rect(s,0,r-s,e),i.clip(),i.fillStyle="#9a7048",i.fillRect(s,0,r-s,e),Os(i,t,e,9e3,["#8a6240","#a87d52","#7c5638","#b58a5c","#6e4c30"],1,5,n),i.restore(),i.globalAlpha=.18,i.fillStyle="#4a321e";for(let c of[.3,.38,.62,.7])for(let l=0;l<e;l+=2)i.fillRect(t*c+Math.sin(l*.05)*3,l,9,2);i.globalAlpha=1;let o=12,a=8;for(let c=0;c<a;c++)i.fillStyle=c%2?"#f4f4f4":"#d6261f",i.fillRect(s-o,c*e/a,o,e/a),i.fillRect(r,c*e/a,o,e/a)})),qh=()=>Ee("grass",()=>_e(256,256,(i,t,e)=>{let n=Ln(3);i.fillStyle="#5c8a35",i.fillRect(0,0,t,e),Os(i,t,e,5e3,["#4f7a2c","#6c9c3f","#7aa94a","#477026","#83a650"],1,3,n)})),jr=()=>Ee("dirt",()=>_e(256,256,(i,t,e)=>{let n=Ln(11);i.fillStyle="#7a5434",i.fillRect(0,0,t,e),Os(i,t,e,6e3,["#6a4629","#8c6241","#5a3a22","#9b7150"],1,5,n),i.globalAlpha=.15,i.fillStyle="#3b2615";for(let s=0;s<e;s+=16)i.fillRect(0,s+n()*6,t,2);i.globalAlpha=1})),Yh=()=>Ee("barrier",()=>_e(256,64,(i,t,e)=>{for(let n=0;n<4;n++)i.fillStyle=n%2?"#f2f2f2":"#d42a20",i.fillRect(n*t/4,0,t/4,e);i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(0,e-8,t,8),i.fillStyle="rgba(255,255,255,0.35)",i.fillRect(0,0,t,4),i.fillStyle="rgba(0,0,0,0.3)";for(let n=0;n<4;n++)i.fillRect(n*t/4,0,2,e)})),Hc=()=>Ee("planks",()=>_e(256,256,(i,t,e)=>{let n=Ln(5),s=8;for(let r=0;r<s;r++){let o=120+Math.floor(n()*40);i.fillStyle=`rgb(${o+40},${o},${Math.floor(o*.55)})`,i.fillRect(0,r*e/s,t,e/s-3),i.fillStyle="rgba(60,35,10,0.3)";for(let a=0;a<6;a++)i.fillRect(0,r*e/s+n()*(e/s),t,1);i.fillStyle="#3a2410",i.fillRect(0,(r+1)*e/s-3,t,3)}i.fillStyle="rgba(255,200,0,0.85)";for(let r of[t*.25,t*.75])i.beginPath(),i.moveTo(r-40,e*.75),i.lineTo(r,e*.35),i.lineTo(r+40,e*.75),i.lineTo(r+22,e*.75),i.lineTo(r,e*.5),i.lineTo(r-22,e*.75),i.closePath(),i.fill()})),kc=()=>Ee("rock",()=>_e(256,256,(i,t,e)=>{let n=Ln(21);i.fillStyle="#6d6862",i.fillRect(0,0,t,e),Os(i,t,e,5e3,["#5b5751","#7c776f","#4a4641","#8a857c"],2,8,n),i.strokeStyle="rgba(30,28,25,0.5)",i.lineWidth=2;for(let s=0;s<14;s++){i.beginPath();let r=n()*t,o=n()*e;i.moveTo(r,o);for(let a=0;a<4;a++)r+=(n()-.5)*60,o+=(n()-.5)*60,i.lineTo(r,o);i.stroke()}})),Zh=()=>Ee("tread",()=>_e(512,64,(i,t,e)=>{i.fillStyle="#1b1b1b",i.fillRect(0,0,t,e),i.fillStyle="#2e2e2e";let n=18;for(let s=0;s<n;s++){let r=s*t/n;i.beginPath(),i.moveTo(r,0),i.lineTo(r+14,0),i.lineTo(r+26,e/2),i.lineTo(r+14,e),i.lineTo(r,e),i.lineTo(r+12,e/2),i.closePath(),i.fill()}})),$h=()=>Ee("tireSide",()=>_e(256,256,(i,t,e)=>{i.fillStyle="#1c1c1c",i.fillRect(0,0,t,e),i.strokeStyle="#333",i.lineWidth=6;for(let n of[118,100,84])i.beginPath(),i.arc(128,128,n,0,Math.PI*2),i.stroke();i.fillStyle="#444",i.font="bold 20px sans-serif",i.textAlign="center",i.save(),i.translate(128,128);for(let n=0;n<2;n++)i.rotate(Math.PI),i.fillText("MONSTRUO",0,-102);i.restore()},{repeat:!1})),Vc=()=>Ee("itemBox",()=>_e(128,128,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,e);n.addColorStop(0,"#ff4fd8"),n.addColorStop(.35,"#ffd400"),n.addColorStop(.7,"#27e3ff"),n.addColorStop(1,"#7b5cff"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="rgba(255,255,255,0.9)",i.lineWidth=8,i.strokeRect(4,4,t-8,e-8),i.fillStyle="#fff",i.font="bold 90px Arial Black, sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=6,i.strokeStyle="rgba(0,0,0,0.35)",i.strokeText("?",t/2,e/2+6),i.fillText("?",t/2,e/2+6)},{repeat:!1})),Jh=()=>Ee("turbo",()=>_e(128,256,(i,t,e)=>{i.fillStyle="#1a1206",i.fillRect(0,0,t,e);for(let n=0;n<3;n++){let s=n*(e/3)+10,r=i.createLinearGradient(0,s,0,s+70);r.addColorStop(0,"#ffe600"),r.addColorStop(1,"#ff5a00"),i.fillStyle=r,i.beginPath(),i.moveTo(t/2,s),i.lineTo(t-10,s+50),i.lineTo(t-34,s+50),i.lineTo(t/2,s+26),i.lineTo(34,s+50),i.lineTo(10,s+50),i.closePath(),i.fill()}})),Kh=()=>Ee("net",()=>_e(256,256,(i,t,e)=>{i.clearRect(0,0,t,e),i.strokeStyle="#f3e7c4",i.lineWidth=7;let n=4;for(let s=0;s<=n;s++)i.beginPath(),i.moveTo(0,s*e/n),i.lineTo(t,s*e/n),i.stroke(),i.beginPath(),i.moveTo(s*t/n,0),i.lineTo(s*t/n,e),i.stroke();i.fillStyle="#c9b98e";for(let s=0;s<=n;s++)for(let r=0;r<=n;r++)i.beginPath(),i.arc(s*t/n,r*e/n,7,0,Math.PI*2),i.fill()})),to=()=>Ee("checker",()=>_e(128,128,(i,t,e)=>{for(let s=0;s<8;s++)for(let r=0;r<8;r++)i.fillStyle=(s+r)%2?"#111":"#f5f5f5",i.fillRect(s*t/8,r*e/8,t/8,e/8)})),eo=(i,t="#d42a20",e="#fff")=>Ee("banner"+i+t,()=>_e(1024,128,(n,s,r)=>{n.fillStyle=t,n.fillRect(0,0,s,r);let o=4,a=r/o;for(let c of[0,s-a*3])for(let l=0;l<3;l++)for(let h=0;h<o;h++)n.fillStyle=(l+h)%2?"#111":"#f5f5f5",n.fillRect(c+l*a,h*a,a,a);n.fillStyle=e,n.font="bold 84px Impact, Arial Black, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(i,s/2,r/2+4)},{repeat:!1})),Qh=()=>Ee("mud",()=>_e(256,256,(i,t,e)=>{let n=Ln(9),s=i.createRadialGradient(128,128,20,128,128,128);s.addColorStop(0,"rgba(70,44,22,1)"),s.addColorStop(.75,"rgba(84,55,30,0.95)"),s.addColorStop(1,"rgba(84,55,30,0)"),i.fillStyle=s,i.fillRect(0,0,t,e),i.globalCompositeOperation="source-atop";for(let r=0;r<40;r++)i.fillStyle=`rgba(${120+n()*40},${90+n()*30},${60+n()*20},0.35)`,i.beginPath(),i.ellipse(n()*t,n()*e,4+n()*14,2+n()*6,n()*3,0,Math.PI*2),i.fill()},{repeat:!1})),jh=()=>Ee("water",()=>_e(256,256,(i,t,e)=>{let n=Ln(13);i.fillStyle="#2f6b5e",i.fillRect(0,0,t,e),i.strokeStyle="rgba(190,240,220,0.35)",i.lineWidth=2;for(let s=0;s<60;s++){let r=n()*t,o=n()*e,a=8+n()*24;i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r+a/2,o-4,r+a,o),i.stroke()}})),tu=()=>Ee("dot",()=>_e(64,64,(i,t,e)=>{let n=i.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.45,"rgba(255,255,255,0.75)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)},{repeat:!1,srgb:!1})),eu=(i,t,e)=>_e(128,128,(n,s,r)=>{n.clearRect(0,0,s,r),n.fillStyle=e,n.beginPath(),n.arc(64,64,60,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(64,64,50,0,Math.PI*2),n.fill(),n.fillStyle=t,n.font="bold 72px Impact, Arial Black, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(i),64,68)},{repeat:!1}),nu=()=>Ee("crowd",()=>_e(256,128,(i,t,e)=>{let n=Ln(17);i.fillStyle="#3b3b48",i.fillRect(0,0,t,e);let s=["#e63946","#f1fa8c","#2a9df4","#ffffff","#ff9f1c","#2ec4b6","#9b5de5","#f15bb5"];for(let r=0;r<4;r++)for(let o=0;o<t;o+=9){i.fillStyle=s[Math.floor(n()*s.length)];let a=r*32+8+n()*4;i.fillRect(o+n()*3,a+8,7,14),i.fillStyle=["#f1c27d","#c68642","#8d5524","#ffdbac"][Math.floor(n()*4)],i.beginPath(),i.arc(o+4,a+4,4,0,Math.PI*2),i.fill()}})),iu=()=>Ee("bark",()=>_e(256,128,(i,t,e)=>{let n=Ln(31);i.fillStyle="#5b3a1e",i.fillRect(0,0,t,e);for(let s=0;s<70;s++)i.fillStyle=n()>.5?"rgba(40,24,10,0.6)":"rgba(120,84,50,0.4)",i.fillRect(0,n()*e,t,1+n()*3);for(let s=0;s<20;s++)i.fillStyle="rgba(30,18,8,0.7)",i.beginPath(),i.ellipse(n()*t,n()*e,6+n()*10,2+n()*3,0,0,Math.PI*2),i.fill()})),Gc=()=>Ee("rings",()=>_e(128,128,(i,t,e)=>{i.fillStyle="#c9a26b",i.fillRect(0,0,t,e),i.strokeStyle="rgba(110,70,30,0.6)",i.lineWidth=2;for(let n=6;n<64;n+=7)i.beginPath(),i.arc(64,64,n,0,Math.PI*2),i.stroke();i.strokeStyle="#5b3a1e",i.lineWidth=10,i.beginPath(),i.arc(64,64,60,0,Math.PI*2),i.stroke()},{repeat:!1})),su=()=>Ee("barrel",()=>_e(256,128,(i,t,e)=>{i.fillStyle="#c4161c",i.fillRect(0,0,t,e),i.fillStyle="#ffd200",i.fillRect(0,e*.38,t,e*.24),i.fillStyle="#111";for(let n=0;n<2;n++){let s=t*(.25+n*.5),r=e*.5;i.beginPath(),i.moveTo(s,r-13),i.lineTo(s+15,r+12),i.lineTo(s-15,r+12),i.closePath(),i.fill(),i.fillStyle="#ffd200",i.font="bold 18px sans-serif",i.textAlign="center",i.fillText("!",s,r+10),i.fillStyle="#111"}i.fillStyle="rgba(0,0,0,0.3)",i.fillRect(0,6,t,5),i.fillRect(0,e-11,t,5)}));function hn(i,t,e,n,s=null){let r=[],o=[],a=[],c=0;t.forEach(h=>{let d=i.pointAt(h),u=e(h);c=u.length,u.forEach(([f,g],x)=>{r.push(d.x+d.rx*f,g,d.z+d.rz*f);let[m,p]=n(h,x,f,g);o.push(m,p)})});for(let h=0;h<t.length-1;h++)if(!(s&&s(t[h],t[h+1])))for(let d=0;d<c-1;d++){let u=h*c+d,f=u+1,g=u+c,x=g+1;a.push(u,f,g,f,x,g)}let l=new pe;return l.setAttribute("position",new $t(r,3)),l.setAttribute("uv",new $t(o,2)),l.setIndex(a),l.computeVertexNormals(),l}function Bs(i,t,e){let n=[],s=Math.round(t/i.ds),r=Math.round(e/i.ds);for(let o=s;o<=r;o++)n.push(o*i.ds);return n}function en(i,t,e,n=0,s=0){let r=t.pointAt(e,n);return i.position.set(r.x,s,r.z),i.rotation.set(0,Math.PI/2-r.th,0),i}function ou(i,t){let e=new jt,n=i.length,s=(N,ct)=>i.pits.some(B=>N>=B.s0-.01&&ct<=B.s1+.01),r=[-15,-13,-11,-8.25,-5.5,-2.75,0,2.75,5.5,8.25,11,13,15],o=[];for(let N=0;N<=i.N;N++)o.push(N*i.ds);let a=hn(i,o,N=>{let ct=i.baseAt(N)+.03;return r.map(B=>[B,ct])},(N,ct,B)=>[(B+15)/30,N/12],s),c=new rt({map:Xh(),roughness:.95,metalness:0}),l=new J(a,c);l.receiveShadow=!0,e.add(l);let h=new rt({map:Yh(),roughness:.8,side:oe});for(let N of[-1,1]){let ct=hn(i,o,Q=>{let ft=i.baseAt(Q);return[[N*15,ft],[N*15,ft+1.3],[N*(15+.7),ft+1.3],[N*(15+.7),ft]]},(Q,ft)=>[Q/8,[0,1,.92,0][ft]]),B=new J(ct,h);B.castShadow=!0,B.receiveShadow=!0,e.add(B)}let d=new rt({map:jr(),roughness:1,side:oe}),u=[...i.plateaus.map(N=>[N.a-2,N.d+2]),...i.whoops.map(N=>[N.a-1,N.b+1])];for(let[N,ct]of u){let B=Bs(i,N,ct);for(let Q of[-1,1]){let ft=hn(i,B,ot=>{let pt=i.baseAt(ot),xt=1.2+pt*1.6;return[[Q*(15+.7),pt],[Q*(15+2.2),pt],[Q*(15+2.2+xt),-.04]]},(ot,pt)=>[pt*.6,ot/8]),it=new J(ft,d);it.receiveShadow=!0,e.add(it)}}let f=new rt({map:jr(),roughness:1,side:oe,color:10259066});for(let N of i.pits){let ct=Bs(i,N.s0,N.s1),B=N.water?0:N.floor;for(let ot of[-1,1]){let pt=hn(i,ct,xt=>[[ot*15,B],[ot*15,i.baseAt(xt)]],(xt,yt,Z,st)=>[xt/6,st/6]);e.add(new J(pt,f))}for(let ot of[N.s0,N.s1]){let pt=i.pointAt(ot),xt=i.baseAt(ot)+.03,yt=new J(new xe(30,xt-B),f);yt.position.set(pt.x,(xt+B)/2,pt.z),yt.rotation.y=Math.PI/2-pt.th,e.add(yt)}let Q=N.water?new rt({color:1911324,roughness:1}):new rt({map:jr(),color:7034952,roughness:1}),ft=hn(i,ct,()=>[[-15,B+.02],[15,B+.02]],(ot,pt,xt)=>[xt/8,ot/8]),it=new J(ft,Q);if(it.receiveShadow=!0,e.add(it),N.water){let ot=jh(),pt=new J(hn(i,ct,()=>[[-15,N.floor],[15,N.floor]],(xt,yt,Z)=>[Z/10,xt/10]),new rt({map:ot,color:6267018,roughness:.15,metalness:.1,transparent:!0,opacity:.88}));pt.userData.animTex=ot,e.add(pt),N.waterMesh=pt}else{let ot=[],pt=ru(5);for(let yt=0;yt<22;yt++){let Z=N.s0+2+pt()*(N.s1-N.s0-4),st=(pt()-.5)*2*13,R=i.pointAt(Z,st),Ct=new tn(.9,.38,8,16);Ct.rotateX(Math.PI/2+(pt()-.5)*.6),Ct.translate(R.x,B+.4+yt%3*.3,R.z),ot.push(Ct)}let xt=new J(we(ot),new rt({color:1973790,roughness:.9}));xt.castShadow=!0,e.add(xt)}for(let ot of[-1,1]){let pt=Wg(N.water?"\xA1COCODRILOS!":"\xA1FOSO!",N.water?"#1f8a3a":"#e0a100");en(pt,i,N.s0-30,ot*18,i.baseAt(N.s0-30)),e.add(pt)}}let g=new rt({map:Hc(),roughness:.85,side:oe}),x=new rt({color:5913116,roughness:.9,side:oe});for(let N of i.ramps){let ct=Bs(i,N.s0,N.s1),B=yt=>i.baseAt(yt)+N.h*(yt-N.s0)/(N.s1-N.s0)+.06,Q=hn(i,ct,yt=>[[N.d0,B(yt)],[N.d1,B(yt)]],(yt,Z,st)=>[(st-N.d0)/(N.d1-N.d0)*((N.d1-N.d0)/8),(yt-N.s0)/8]),ft=new J(Q,g);ft.receiveShadow=!0,ft.castShadow=!0,e.add(ft);for(let yt of[N.d0,N.d1])Math.abs(yt)>=15||e.add(new J(hn(i,ct,Z=>[[yt,i.baseAt(Z)],[yt,B(Z)]],(Z,st)=>[Z,st]),x));let it=i.pointAt(N.s1,(N.d0+N.d1)/2),ot=N.h+.06,pt=new J(new xe(N.d1-N.d0,ot),x);pt.position.set(it.x,i.baseAt(N.s1)+ot/2,it.z),pt.rotation.y=Math.PI/2-it.th,e.add(pt);let xt=new J(new Ft(N.d1-N.d0,.15,.6),new rt({color:16761856,emissive:3351040}));en(xt,i,N.s1-.3,(N.d0+N.d1)/2,i.baseAt(N.s1)+N.h+.05),e.add(xt)}for(let N of i.pits){if(!N.bridge)continue;let[ct,B]=N.bridge,Q=[],ft=ru(3);for(let ot=N.s0-.5;ot<N.s1+.5;ot+=.9){let pt=i.pointAt(ot,(ct+B)/2),xt=new Ft(B-ct+.4,.25,.75);xt.rotateY(Math.PI/2-pt.th+(ft()-.5)*.05),xt.translate(pt.x,N.top+.17,pt.z),Q.push(xt)}for(let ot of[ct-.1,B+.1])for(let pt=N.s0;pt<=N.s1+.01;pt+=(N.s1-N.s0)/4){let xt=i.pointAt(pt,ot),yt=new le(.15,.18,2.4,6);yt.translate(xt.x,N.top+.6,xt.z),Q.push(yt)}let it=new J(we(Q),new rt({map:Hc(),color:11569754,roughness:.9}));it.castShadow=!0,it.receiveShadow=!0,e.add(it);for(let ot of[ct-.1,B+.1]){let pt=Bs(i,N.s0,N.s1),xt=hn(i,pt,yt=>{let Z=(yt-N.s0)/(N.s1-N.s0),st=N.top+1.6-Math.sin(Z*Math.PI)*.5;return[[ot,st],[ot,st+.12]]},(yt,Z)=>[yt,Z]);e.add(new J(xt,new rt({color:14270602,side:oe})))}}let m=i.tunnel,p=Bs(i,m.s0,m.s1),v=15+.8,y=7,_=[];_.push([-v,0]);for(let N=0;N<=16;N++){let ct=Math.PI-N/16*Math.PI;_.push([Math.cos(ct)*v,y+Math.sin(ct)*v*.85])}_.push([v,0]);let I=new rt({map:kc(),roughness:1,side:oe,color:11577500}),A=new J(hn(i,p,N=>_.map(([ct,B])=>[ct,B+i.baseAt(N)]),(N,ct)=>[ct/4,N/10]),I);A.receiveShadow=!0,e.add(A);let w=75,C=34,E=(N,ct)=>{let B=Math.sin(N*12.9898+ct*78.233)*43758.5453;return B-Math.floor(B)},M=N=>{let ct=Math.round(N/i.ds),B=[];for(let Q=0;Q<=20;Q++){let ft=-w+Q/20*2*w,it=Math.abs(ft)/w,ot=C*(1-Math.pow(it,1.6));ot+=(E(Math.floor(ct/6),Q)-.5)*6*(1-it),(Q===0||Q===20)&&(ot=-.5),B.push([ft,Math.max(-.5,ot)])}return B},P=p.filter((N,ct)=>ct%6===0||ct===p.length-1),V=new rt({map:kc(),color:12177292,roughness:1,flatShading:!0,side:oe}),z=new J(hn(i,P,M,(N,ct)=>[ct/3,N/20]),V);z.castShadow=!0,z.receiveShadow=!0,e.add(z);for(let N of[P[0],P[P.length-1]]){let ct=M(N),B=new je;B.moveTo(ct[0][0],ct[0][1]);for(let[yt,Z]of ct.slice(1))B.lineTo(yt,Z);B.lineTo(ct[0][0],ct[0][1]);let Q=new ji;Q.moveTo(_[0][0],_[0][1]-.3);for(let[yt,Z]of _.slice(1))Q.lineTo(yt,Z===0?-.3:Z);Q.lineTo(_[0][0],_[0][1]-.3),B.holes.push(Q);let ft=new _i(B),it=i.pointAt(N),ot=new J(ft,V);ot.position.set(it.x,i.baseAt(N),it.z),ot.rotation.y=Math.atan2(-it.rz,it.rx),e.add(ot);let pt=[];for(let yt=0;yt<=12;yt++){let Z=Math.PI-yt/12*Math.PI,st=new Ft(2.2,2.2,1.6);st.rotateZ(Z-Math.PI/2),st.translate(Math.cos(Z)*(v+.6),y+Math.sin(Z)*(v*.85+.6),0),pt.push(st)}for(let yt of[-1,1]){let Z=new Ft(2.2,y,1.6);Z.translate(yt*(v+.6),y/2,0),pt.push(Z)}let xt=new J(we(pt),new rt({color:9274488,roughness:.9,flatShading:!0}));xt.position.copy(ot.position),xt.rotation.y=ot.rotation.y,xt.castShadow=!0,e.add(xt)}let W=[];for(let N=m.s0+6;N<m.s1;N+=12)for(let ct of[-6,6]){let B=i.pointAt(N,ct),Q=new Ft(.6,.3,3);Q.rotateY(Math.PI/2-B.th);let ft=y+Math.sqrt(Math.max(0,v*v-ct*ct))*.85-.4;Q.translate(B.x,i.baseAt(N)+ft,B.z),W.push(Q)}let j=new J(we(W),new Le({color:16771496}));e.add(j);let X=[];for(let N=m.s0+3;N<m.s1;N+=6)for(let ct of[-15+.05,15-.05]){let B=i.pointAt(N,ct),Q=new Ft(.2,.25,.8);Q.rotateY(Math.PI/2-B.th),Q.translate(B.x,i.baseAt(N)+.9,B.z),X.push(Q)}e.add(new J(we(X),new Le({color:6742271})));{let N=to().clone();N.repeat.set(5.5,.75),N.needsUpdate=!0;let ct=new jt;en(ct,i,0,0,.06);let B=new J(new xe(22,3),new rt({map:N,roughness:.8}));B.rotation.x=-Math.PI/2,B.receiveShadow=!0,ct.add(B),e.add(ct)}let tt=new jt;en(tt,i,0,0,0);let $=new rt({color:2763312,metalness:.6,roughness:.4});for(let N of[-1,1]){let ct=new J(new Ft(1.2,12,1.2),$);ct.position.set(N*(15+1.5),6,0),ct.castShadow=!0,tt.add(ct)}let gt=new J(new Ft(30+4.2,2.6,1.2),$);gt.position.y=11,gt.castShadow=!0,tt.add(gt);for(let N of[-1,1]){let ct=new J(new xe(33,2.4),new Le({map:eo("META  \xB7  MEGA MONSTRUOS"),side:gn}));ct.position.set(0,11,N*.62),N<0&&(ct.rotation.y=Math.PI),tt.add(ct)}let Mt=[],At=new J(new Ft(8,2.2,1),new rt({color:1118481}));At.position.set(0,8.6,-.3),tt.add(At);for(let N=0;N<3;N++){let ct=new J(new ge(.75,16,12),new Le({color:3346705}));ct.position.set((N-1)*2.4,8.6,-.85),tt.add(ct),Mt.push(ct)}return e.add(tt),t.add(e),{group:e,lights:Mt,lampMesh:j}}function ru(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Wg(i,t){let e=new jt,n=document.createElement("canvas");n.width=256,n.height=128;let s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,256,128),s.strokeStyle="#111",s.lineWidth=10,s.strokeRect(5,5,246,118),s.fillStyle="#111",s.font="bold 40px Impact, Arial Black, sans-serif",s.textAlign="center",s.textBaseline="middle";for(let a=40;a>16&&s.measureText(i).width>228;a-=2)s.font=`bold ${a}px Impact, Arial Black, sans-serif`;s.fillText(i,128,66);let r=new $n(n);r.colorSpace=ve;let o=new J(new xe(6,3),new rt({map:r,side:oe}));o.position.y=4.5,o.castShadow=!0,e.add(o);for(let a of[-2.4,2.4]){let c=new J(new le(.12,.12,4.5,6),new rt({color:5592405}));c.position.set(a,2.25,.05),e.add(c)}return e}function Xg(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function au(i,t){let e=Xg(42),n=new Ot(4034528),s=new Ot(13625077);i.background=s.clone(),i.fog=new Qi(13625077,260,1300);let r=new J(new ge(1800,32,16),new ze({side:Me,depthWrite:!1,fog:!1,uniforms:{top:{value:n},horizon:{value:s},sunDir:{value:new L(.5,.6,.3).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; varying vec3 vP;
        void main(){ float h = clamp(vP.y, 0.0, 1.0); vec3 c = mix(horizon, top, pow(h, 0.55));
        float s = max(0.0, dot(vP, sunDir)); c += vec3(1.0,0.9,0.6) * (pow(s, 400.0) * 1.5 + pow(s, 12.0) * 0.18);
        gl_FragColor = vec4(c, 1.0); }`}));r.renderOrder=-1,i.add(r);let o=new is(13625599,7035450,1);i.add(o);let a=new Si(16773590,2.6);a.position.set(120,160,70),a.castShadow=!0,a.shadow.mapSize.set(2048,2048);let c=a.shadow.camera;c.left=-75,c.right=75,c.top=75,c.bottom=-75,c.near=10,c.far=500,a.shadow.bias=-5e-4,a.shadow.normalBias=.04,i.add(a),i.add(a.target);let l=qh();l.repeat.set(220,220);let h=new J(new xe(5e3,5e3),new rt({map:l,roughness:1}));h.rotation.x=-Math.PI/2,h.position.y=-.08,h.receiveShadow=!0,i.add(h);let d=[];for(let U=0;U<t.N;U+=6)d.push([t.px[U],t.pz[U]]);let u=(U,G)=>{let H=1/0;for(let[at,et]of d){let ht=(U-at)**2+(G-et)**2;ht<H&&(H=ht)}return Math.sqrt(H)},f=1/0,g=-1/0,x=1/0,m=-1/0;for(let[U,G]of d)f=Math.min(f,U),g=Math.max(g,U),x=Math.min(x,G),m=Math.max(m,G);let p=(f+g)/2,v=(x+m)/2,y=t.pointAt((t.tunnel.s0+t.tunnel.s1)/2),_=(U,G)=>{let H=t.pointAt(t.tunnel.s0),at=t.pointAt(t.tunnel.s1),et=Math.min(H.x,at.x)-10,ht=Math.max(H.x,at.x)+10;return U>et&&U<ht&&Math.abs(G-y.z)<85},I=[];for(let U=0;U<40;U++){let G=U/40*Math.PI*2+e()*.1,H=950+e()*350,at=120+e()*220,et=new De(140+e()*160,at,7,1);et.translate(p+Math.cos(G)*H,at/2-5,v+Math.sin(G)*H),I.push(et)}let A=new J(we(I),new rt({color:8163228,flatShading:!0,roughness:1}));i.add(A);let w=[];for(let U=0;U<70;U++){let G=e()*Math.PI*2,H=520+e()*300,at=p+Math.cos(G)*H,et=v+Math.sin(G)*H;if(u(at,et)<120)continue;let ht=new ge(40+e()*60,10,6,0,Math.PI*2,0,Math.PI/2);ht.scale(1,.35+e()*.4,1),ht.translate(at,-2,et),w.push(ht)}if(w.length){let U=new J(we(w),new rt({color:7313989,flatShading:!0,roughness:1}));U.receiveShadow=!0,i.add(U)}let C=new le(.4,.6,3,6);C.translate(0,1.5,0);let E=new De(3.2,9,7);E.translate(0,7,0);let M=new Ds(3.4,0);M.translate(0,5.6,0);let P=new rt({color:5913378,roughness:1}),V=new rt({color:3107636,roughness:1,flatShading:!0}),z=new rt({color:5214010,roughness:1,flatShading:!0}),W=[],j=0;for(;W.length<650&&j<2e4;){j++;let U=p+(e()-.5)*1300,G=v+(e()-.5)*1200;u(U,G)<33||_(U,G)||Math.abs(G)<75&&U>-120&&U<140||W.push([U,G,.7+e()*.8,e()<.55])}let X=new ie,tt=new xn,$=new gi(C,P,W.length),gt=new gi(E,V,W.filter(U=>U[3]).length),Mt=new gi(M,z,W.filter(U=>!U[3]).length),At=0,N=0;W.forEach(([U,G,H,at],et)=>{tt.setFromAxisAngle(new L(0,1,0),e()*6),X.compose(new L(U,0,G),tt,new L(H,H,H)),$.setMatrixAt(et,X),at?gt.setMatrixAt(At++,X):Mt.setMatrixAt(N++,X)});for(let U of[$,gt,Mt])U.castShadow=!0,U.receiveShadow=!0,i.add(U);let ct=new Xr(1.6,0),B=new gi(ct,new rt({color:9077882,flatShading:!0,roughness:1}),160);for(let U=0;U<160;U++){let G,H;do G=p+(e()-.5)*1100,H=v+(e()-.5)*1e3;while(u(G,H)<21||_(G,H));let at=.5+e()*1.6;tt.setFromEuler(new Ke(e()*3,e()*3,e()*3)),X.compose(new L(G,at*.4,H),tt,new L(at,at*.7,at)),B.setMatrixAt(U,X)}B.castShadow=!0,i.add(B);let Q=new rt({map:nu(),roughness:.9}),ft=new rt({color:10134445,roughness:.8}),it=new rt({color:12597547,roughness:.6,side:oe}),ot=[];for(let[U,G]of[[-95,70],[-15,70],[65,60]]){let H=new jt;en(H,t,U+G/2,-24,0);for(let et=0;et<6;et++){let ht=new J(new Ft(2.2,1.2+et*1.2,G),ft);ht.position.set(et*2.2,(1.2+et*1.2)/2,0),ht.castShadow=!0,ht.receiveShadow=!0,H.add(ht);let Ht=Q.map.clone();Ht.needsUpdate=!0,Ht.repeat.set(G/12,.5),Ht.offset.set(e(),et%2?0:.5);let ut=new J(new xe(G,1.3),new rt({map:Ht,roughness:.9}));ut.rotation.y=-Math.PI/2,ut.position.set(et*2.2-1.12,1.2+et*1.2+.55,0),H.add(ut),ot.push(ut)}let at=new J(new Ft(15,.4,G+2),it);at.position.set(6,12,0),at.rotation.z=-.12,at.castShadow=!0,H.add(at);for(let et of[-G/2,0,G/2]){let ht=new J(new Ft(.5,12,.5),ft);ht.position.set(13,6,et),H.add(ht)}i.add(H)}let pt=[],xt=[],yt=[15087942,16766474,2792948,3065014,15817653,16752412],Z=[];for(let U=20;U<t.length;U+=45)if(!(t.inTunnel(U)||t.inTunnel(U+20)||t.inTunnel(U-20)))for(let G of[-1,1]){let H=t.pointAt(U,G*(15+2.2)),at=t.baseAt(U),et=new le(.08,.08,6,5);et.translate(H.x,at+3,H.z),xt.push(et);let ht=new pe;ht.setAttribute("position",new $t([0,0,0,0,-1.6,0,2.4,-.8,0],3)),ht.computeVertexNormals();let Ht=new J(ht,new rt({color:yt[Math.floor(e()*yt.length)],side:oe}));Ht.position.set(H.x,at+6,H.z),Ht.rotation.y=e()*6,Ht.userData.phase=e()*6,i.add(Ht),Z.push(Ht)}i.add(new J(we(xt),new rt({color:14540253,metalness:.5})));let st=new tn(.75,.32,8,16);st.rotateX(Math.PI/2);let R=[];for(let U of t.segs){if(U.type!=="A")continue;let G=U.ang>0?-1:1;for(let H=6;H<U.length-4;H+=4.5){let at=U.s0+H,et=t.pointAt(at,G*(15+1.9));for(let ht=0;ht<3;ht++){let Ht=st.clone();Ht.translate(et.x,t.baseAt(at)+.32+ht*.62,et.z),R.push(Ht)}}}let Ct=new J(we(R),new rt({color:1907997,roughness:.9}));Ct.castShadow=!0,i.add(Ct);let lt=[];for(let U=0;U<26;U++){let G=p+(e()-.5)*2200,H=v+(e()-.5)*2200,at=260+e()*140;for(let et=0;et<5;et++){let ht=new Ds(25+e()*25,1);ht.scale(1.6,.6,1),ht.translate(G+(et-2)*35+e()*10,at+e()*12,H+e()*25),lt.push(ht)}}let Rt=new J(we(lt),new rt({color:16777215,emissive:12572394,emissiveIntensity:.55,flatShading:!0,roughness:1,fog:!1}));i.add(Rt);let dt=new jt,zt=new J(new ge(8,20,14),new rt({color:15921906,roughness:.5}));zt.scale.set(2.6,1,1),dt.add(zt);let Et=new J(new xe(30,4),new Le({map:eo("MEGA MONSTRUOS"),side:oe}));Et.position.set(0,-2,8.05),dt.add(Et);let T=Et.clone();T.position.z=-8.05,T.rotation.y=Math.PI,dt.add(T);for(let U of[-4,4]){let G=new J(new Ft(6,5,.4),new rt({color:13904416}));G.position.set(-18,0,0),G.rotation.x=U>0?0:Math.PI/2,dt.add(G)}let S=new J(new Ft(6,2,2.5),new rt({color:3355443}));S.position.y=-8.5,dt.add(S),i.add(dt);let k=0;return{sun:a,hemi:o,sky:r,baseHemi:o.intensity,baseSun:a.intensity,update(U,G){k+=U,a.target.position.set(G.x,G.y,G.z),a.position.set(G.x+120,G.y+160,G.z+70),a.target.updateMatrixWorld();for(let at of Z)at.rotation.y+=Math.sin(k*3+at.userData.phase)*.01;for(let at=0;at<ot.length;at++)ot[at].position.y+=Math.sin(k*9+at*1.7)*.006;let H=k*.03;dt.position.set(p+Math.cos(H)*380,120,v+Math.sin(H)*300),dt.rotation.y=-H-Math.PI/2+Math.PI}}}var jn=[{id:"trituradora",name:"Trituradora",num:1,color:14099998,accent:1907997,rim:14211288,deco:"saw",stats:{speed:3,accel:3,handling:3,weight:3},desc:"Equilibrada, con dos sierras que giran en el morro. Ideal para empezar."},{id:"megalodon",name:"Megalod\xF3n",num:2,color:2060241,accent:15921906,rim:16777215,deco:"shark",stats:{speed:5,accel:2,handling:2,weight:3},desc:"La velocidad punta m\xE1s alta, pero cuesta hacerle girar."},{id:"escorpion",name:"Escorpi\xF3n",num:3,color:8311585,accent:1776411,rim:2236962,deco:"scorpion",stats:{speed:2,accel:4,handling:5,weight:1},desc:"Sale disparado y gira como nadie. Ligero: los golpes le afectan m\xE1s."},{id:"mamut",name:"Mamut",num:4,color:9132587,accent:15918793,rim:13214826,deco:"mammoth",stats:{speed:3,accel:2,handling:2,weight:5},desc:"Pesad\xEDsimo: troncos y empujones apenas le frenan."},{id:"relampago",name:"Rel\xE1mpago",num:5,color:16763904,accent:1118481,rim:1118481,deco:"bolt",stats:{speed:4,accel:4,handling:3,weight:1},desc:"R\xE1pido y \xE1gil, pero ligero como una pluma."},{id:"dragon",name:"Drag\xF3n",num:6,color:8072383,accent:3794489,rim:3794489,deco:"dragon",stats:{speed:4,accel:3,handling:2,weight:3},desc:"Escamas, cuernos y alas. Corre mucho y aguanta bien los golpes."}],Qn=1.1,zs=.95,Wc=1.6,io=1.75,Xc=2,so=null;function qg(){if(so)return so;let i=new le(Qn,Qn,zs,22,1);i.rotateZ(Math.PI/2);let t=[];for(let f=0;f<14;f++){let g=f/14*Math.PI*2;for(let x of[-1,1]){let m=new Ft(zs*.48,.22,.3);m.translate(x*zs*.26,Qn+.03,x*.08),m.rotateX(g+x*.12),t.push(m)}}let e=we(t),n=new rt({color:2236962,roughness:.95}),s=new rt({map:Zh(),roughness:.95}),r=new rt({map:$h(),roughness:.9}),o=new le(.58,.58,zs+.06,18);o.rotateZ(Math.PI/2);let a=new le(.2,.26,zs+.2,8);a.rotateZ(Math.PI/2);let c=new rt({color:13620182,metalness:.9,roughness:.25}),l=new rt({color:1842207,metalness:.4,roughness:.6}),h=new rt({color:1053980,metalness:.6,roughness:.15}),d=new rt({color:16777198,emissive:16773808,emissiveIntensity:1.2}),u=new rt({color:16720418,emissive:11141120,emissiveIntensity:1});return so={tire:i,lugGeo:e,rubber:n,tread:s,side:r,rimGeo:o,hubGeo:a,chrome:c,dark:l,glass:h,headlight:d,taillight:u},so}function cu(i,t,e=.08){let n=new je;n.moveTo(i[0][0],i[0][1]);for(let[r,o]of i.slice(1))n.lineTo(r,o);n.closePath();let s=new ts(n,{depth:t,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:4});return s.translate(0,0,-t/2),s.rotateY(-Math.PI/2),s}var Ae=(i,t,e=!0)=>{let n=new J(i,t);return n.castShadow=e,n};function ro(i){let t=qg(),e=new jt,n=new jt;n.position.y=Xc,e.add(n);let s=new rt({color:i.color,metalness:.2,roughness:.42}),r=new rt({color:i.accent,metalness:.25,roughness:.45}),o=new rt({color:i.rim,metalness:.8,roughness:.3}),c=Ae(cu([[-2.35,0],[2.45,0],[2.55,.45],[2.35,.85],[.95,.98],[.35,1.78],[-.85,1.82],[-1.05,1],[-2.35,1.02]],2.1),s);n.add(c);let l=Ae(cu([[.99,1],[.4,1.76],[-.8,1.76],[-.98,1.04]],2.3,0),t.glass,!1);n.add(l);let h=Ae(new Ft(1.7,.45,4.6),t.dark);h.position.y=-.3,n.add(h);for(let p of[-1,1]){let v=Ae(new Ft(.03,.22,4.4),r,!1);v.position.set(p*1.14,.5,.05),n.add(v);let y=new J(new xe(.85,.85),new rt({map:eu(i.num,"#"+new Ot(i.color).getHexString(),"#"+new Ot(i.accent).getHexString()),transparent:!0}));y.position.set(p*1.16,.55,-1.6),y.rotation.y=p*Math.PI/2,n.add(y)}let d=Ae(new Ft(.5,.03,1.15),r,!1);d.position.set(0,1.91,-.25),n.add(d);for(let p of[-1,1]){let v=Ae(new Ft(.45,.25,.1),t.headlight,!1);v.position.set(p*.7,.62,2.48),n.add(v);let y=Ae(new Ft(.35,.22,.1),t.taillight,!1);y.position.set(p*.75,.75,-2.45),n.add(y)}let u=Ae(new Ft(1.7,.16,.25),t.dark);u.position.set(0,1.98,.25),n.add(u);for(let p=0;p<4;p++){let v=Ae(new Ft(.28,.2,.08),t.headlight,!1);v.position.set(-.6+p*.4,1.98,.4),n.add(v)}for(let p of[-1,1]){let v=Ae(new le(.11,.13,1.6,10),t.chrome);v.position.set(p*.85,1.55,-1.2),n.add(v)}let f=Ae(new Ft(2,.18,.18),t.chrome);f.position.set(0,.2,2.62),n.add(f);for(let p of[-.6,.6]){let v=Ae(new Ft(.14,.6,.14),t.chrome);v.position.set(p,.35,2.62),n.add(v)}let g=[];for(let p of[io,-io]){let v=Ae(new le(.16,.16,Wc*2,8),t.dark);v.rotation.z=Math.PI/2,v.position.set(0,Qn,p),e.add(v);let y=Ae(new ge(.38,10,8),t.dark);y.position.set(0,Qn,p),e.add(y);for(let _ of[Wc,-Wc]){let I=new jt;I.position.set(_,Qn,p);let A=new jt;I.add(A),A.add(Ae(t.tire,[t.tread,t.side,t.side])),A.add(Ae(t.lugGeo,t.rubber));let w=Ae(t.rimGeo,o,!1);A.add(w);let C=Ae(t.hubGeo,t.chrome,!1);A.add(C),e.add(I),g.push({pivot:I,spin:A,front:p>0})}}let x=[];for(let p of[io-.35,-io+.35])for(let v of[-1,1]){let y=Ae(new le(.11,.11,1,8),new rt({color:i.accent===1118481?16763904:16742912,metalness:.5,roughness:.4}));y.position.set(v*.95,0,p),y.rotation.z=v*.35,e.add(y),x.push(y)}let m=[];return Yg(i,n,s,r,t,m),e.traverse(p=>{p.isMesh&&(p.receiveShadow=!1)}),{root:e,body:n,wheels:g,shocks:x,spinners:m,paint:s}}function Yg(i,t,e,n,s,r){let o=new rt({color:16052712,roughness:.5}),a=new rt({color:855309,roughness:.4});switch(i.deco){case"saw":{let c=new je,l=18,h=.62,d=.78;for(let f=0;f<l;f++){let g=f/l*Math.PI*2,x=(f+.6)/l*Math.PI*2;c[f===0?"moveTo":"lineTo"](Math.cos(g)*h,Math.sin(g)*h),c.lineTo(Math.cos(x)*d,Math.sin(x)*d)}c.closePath();let u=new ts(c,{depth:.06,bevelEnabled:!1});u.translate(0,0,-.03),u.rotateY(Math.PI/2);for(let f of[-.55,.55]){let g=new J(u,s.chrome);g.position.set(f,.35,2.75),g.castShadow=!0,t.add(g),r.push({obj:g,axis:"x",speed:25})}for(let f=0;f<6;f++){let g=new J(new De(.12,.32,4),o);g.position.set(-.75+f*.3,.72,2.53),g.rotation.x=Math.PI,t.add(g)}break}case"shark":{let c=new je;c.moveTo(-.7,0),c.quadraticCurveTo(-.2,.6,-.55,1.45),c.quadraticCurveTo(.3,.7,.55,0),c.closePath();let l=new ts(c,{depth:.14,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});l.translate(0,0,-.07),l.rotateY(-Math.PI/2);let h=new J(l,e);h.position.set(0,1.84,-.35),h.castShadow=!0,t.add(h);let d=new J(new Ft(1.9,.35,.08),new rt({color:9048080}));d.position.set(0,.35,2.5),t.add(d);for(let u=0;u<9;u++)for(let f of[1,-1]){let g=new J(new De(.09,.22,4),o);g.position.set(-.85+u*.21,.35+f*.08,2.55),g.rotation.x=f>0?Math.PI:0,t.add(g)}for(let u of[-1,1]){let f=new J(new ge(.22,12,8),o);f.position.set(u*1.08,.72,1.85),t.add(f);let g=new J(new ge(.12,10,8),a);g.position.set(u*1.25,.72,1.9),t.add(g);for(let x=0;x<3;x++){let m=new J(new Ft(.03,.45,.06),new rt({color:801914}));m.position.set(u*1.13,.55,1.2-x*.22),t.add(m)}}break}case"scorpion":{let c=new Cs(new L(0,1.05,-2),new L(0,3.4,-3.4),new L(0,4.6,-.6),new L(0,3.3,.45)),l=12;for(let f=0;f<l;f++){let g=f/(l-1),x=c.getPoint(g),m=.46-g*.24,p=new J(new ge(m,12,10),f%2?n:e);p.position.copy(x),p.castShadow=!0,t.add(p)}let h=c.getPoint(1),d=c.getTangent(1),u=new J(new De(.2,.8,8),a);u.position.copy(h).addScaledVector(d,.45),u.quaternion.setFromUnitVectors(new L(0,1,0),d),t.add(u);for(let f of[-1,1]){let g=new J(new Ft(.28,.28,.9),n);g.position.set(f*.75,.45,2.85),t.add(g);for(let x of[-1,1]){let m=new J(new De(.14,.7,6),e);m.position.set(f*.75+x*.16,.45,3.45),m.rotation.x=Math.PI/2,m.rotation.z=-x*.35,t.add(m)}}break}case"mammoth":{let c=new rt({color:16051414,roughness:.4});for(let l of[-1,1]){let h=new J(new tn(.85,.13,8,18,Math.PI*.85),c);h.rotation.y=Math.PI/2,h.rotation.z=Math.PI*1.08,h.position.set(l*.75,.6,2.55+.75),h.castShadow=!0,t.add(h);let d=new J(new ge(.75,12,10),new rt({color:5913116,roughness:.9}));d.scale.set(.15,1,.8),d.position.set(l*1.15,1,1.3),t.add(d)}for(let l=0;l<5;l++){let h=new J(new le(.22-l*.025,.24-l*.025,.4,10),e);h.position.set(0,.7-l*.28,2.65+Math.sin(l*.5)*.25),h.rotation.x=.3-l*.12,t.add(h)}for(let l=0;l<16;l++){let h=new J(new De(.1,.45,5),new rt({color:4860946}));h.position.set(-.6+l%4*.4,1.95,-.7+Math.floor(l/4)*.3),h.rotation.x=-.5,t.add(h)}break}case"bolt":{let c=new je;c.moveTo(1.4,.95),c.lineTo(.2,.45),c.lineTo(.55,.45),c.lineTo(-1.6,.05),c.lineTo(-.2,.6),c.lineTo(-.55,.6),c.closePath();let l=new _i(c);for(let d of[-1,1]){let u=new J(l,n);u.rotation.y=d*Math.PI/2,u.position.set(d*1.17,.05,0),t.add(u)}let h=new J(new Ft(2.4,.08,.7),n);h.position.set(0,2,-2.15),h.rotation.x=-.15,h.castShadow=!0,t.add(h);for(let d of[-.8,.8]){let u=new J(new Ft(.1,.95,.3),n);u.position.set(d,1.5,-2.15),t.add(u)}break}case"dragon":{for(let c=0;c<8;c++){let l=new J(new De(.17,.55,6),n),h=.25-c*.33,d=h>-.9?1.88:1.08;l.position.set(0,d+.25,h),l.rotation.x=-.4,t.add(l)}for(let c of[-1,1]){let l=new J(new De(.16,.9,8),new rt({color:15656652}));l.position.set(c*.65,2.15,.35),l.rotation.x=-.9,l.rotation.z=-c*.3,t.add(l);let h=new je;h.moveTo(0,0),h.lineTo(1.6,.5),h.lineTo(1.3,.05),h.lineTo(1.7,-.2),h.lineTo(1.1,-.35),h.lineTo(1.2,-.7),h.lineTo(.2,-.5),h.closePath();let d=new J(new _i(h),new rt({color:i.accent,side:oe,emissive:670218}));d.position.set(c*1.1,1.1,-1.4),d.rotation.y=c>0?0:Math.PI,d.rotation.z=.5,d.rotation.order="YZX",d.castShadow=!0,t.add(d);let u=new J(new ge(.15,10,8),new rt({color:16772608,emissive:11175936}));u.position.set(c*.6,.86,2.3),t.add(u)}break}}}function oo(i,{wheelSpin:t,steer:e,comp:n,dt:s}){for(let o of i.wheels)o.spin.rotation.x+=t,o.front&&(o.pivot.rotation.y=e*.45);i.body.position.y=Xc-n;let r=Xc-n-.15;for(let o of i.shocks){let a=r-1.1500000000000001;o.scale.y=Math.max(.3,a/Math.cos(.35)),o.position.y=1.15+a/2}for(let o of i.spinners)o.obj.rotation[o.axis]+=o.speed*s}var lu=24,qc=2,hu=2.3,Zg={road:1,ramp:1,bridge:.92,grass:.74,mud:.5,pit:1,water:1},ti=(i,t,e)=>i<t?t:i>e?e:i;var ao=class{constructor(t,e,n=!1){this.def=t,this.track=e,this.isPlayer=n;let s=t.stats;this.maxSpeed=31+s.speed*2.3,this.accel=8+s.accel*2.3,this.turnRate=1.1+s.handling*.17,this.grip=3.2+s.handling*.7,this.mass=.8+s.weight*.3,this.stunMul=1.3-s.weight*.1,this.speedMul=1,this.parts=ro(t),this.mesh=this.parts.root,this.events=[],this.reset()}reset(){this.x=0,this.y=0,this.z=0,this.th=0,this.vx=0,this.vz=0,this.vy=0,this.onGround=!0,this.groundH=0,this.wasGround=!0,this.idx=-1,this.s=0,this.d=0,this.prevS=0,this.lap=0,this.checkpoint=!0,this.finished=!1,this.finishTime=0,this.lapStart=0,this.lapTimes=[],this.place=1,this.boost=0,this.stun=0,this.spin=0,this.spinT=0,this.spinDur=0,this.state="ok",this.stateTimer=0,this.fall=null,this.comp=0,this.compV=0,this.pitch=0,this.roll=0,this.item=null,this.itemRoll=0,this.invuln=0,this.hitCool=0,this.wrongT=0,this.stuckT=0,this.airT=0,this.surf="road",this.control={steer:0,throttle:0,brake:0},this.vF=0,this.accelVis=0,this.steerVis=0,this.lastSlopeV=0,this.netCaught=null,this.cool={}}get speed(){return Math.hypot(this.vx,this.vz)}get progress(){return this.lap*this.track.length+this.s}placeAt(t,e,n=0){let s=this.track.pointAt(t,e);this.x=s.x,this.z=s.z,this.th=s.th;let r=this.track.project(this.x,this.z,-1);this.idx=r.i,this.s=r.s,this.d=r.d,this.prevS=r.s;let o=this.track.surfaceAt(this.s,this.d);this.y=o.h,this.groundH=o.h,this.vx=Math.cos(this.th)*n,this.vz=Math.sin(this.th)*n,this.vy=0,this.onGround=!0,this.wasGround=!0,this.state="ok",this.stun=0,this.spinDur=0,this.spin=0,this.pitch=0,this.roll=0,this.syncMesh(0)}respawn(t,e=0,n=10){for(let s of this.track.pits)this.track.ahead(s.s0-4,t)<s.s1-s.s0+8&&(t=s.respawnS);this.placeAt(t,ti(e,-8,8),n),this.invuln=1.6,this.events.push({type:"respawn"})}hit({dirX:t=0,dirZ:e=0,push:n=0,up:s=0,speedMul:r=1,stun:o=0,kind:a="hit"}){if(this.invuln>0||this.hitCool>0||this.state!=="ok")return!1;let c=this.stunMul;return this.vx*=r,this.vz*=r,this.vx+=t*n*c,this.vz+=e*n*c,s>0&&(this.vy=Math.max(this.vy,s*Math.min(1.2,c)),this.onGround=!1),o>0&&(this.stun=Math.max(this.stun,o*c),this.spinDur=this.stun,this.spinT=0),this.hitCool=.9,this.events.push({type:a}),!0}catchNet(t){return this.state!=="ok"||this.invuln>0?!1:(this.state="caught",this.stateTimer=1.1,this.netCaught=t,this.events.push({type:"net"}),!0)}useItem(t){if(!this.item||this.itemRoll>0||this.state!=="ok")return;let e=this.item;this.item=null,e==="nitro"?(this.boost=Math.max(this.boost,2.2),this.events.push({type:"nitro"})):e==="jump"?(this.vy=Math.max(this.vy,this.onGround?13:10),this.onGround=!1,this.wasGround=!1,this.invuln=Math.max(this.invuln,.6),this.events.push({type:"jump"})):e==="wave"&&(t.shockwave(this),this.events.push({type:"wave"}))}update(t,e,n){let s=this.track;if(this.control=e,this.prevS=this.s,this.boost=Math.max(0,this.boost-t),this.invuln=Math.max(0,this.invuln-t),this.hitCool=Math.max(0,this.hitCool-t),this.stun>0&&(this.stun=Math.max(0,this.stun-t)),this.spinDur>0)if(this.spinT+=t,this.spinT>=this.spinDur)this.spinDur=0,this.spin=0;else{let w=this.spinT/this.spinDur;this.spin=Math.PI*2*(1-(1-w)*(1-w))}if(this.itemRoll>0&&(this.itemRoll-=t,this.itemRoll<=0&&(this.itemRoll=0,this.item=n.rollItem(this),this.events.push({type:"gotItem"}))),this.state==="fallen"){this.updateFallen(t);return}let r=this.stun>0||this.state==="caught",o=Math.cos(this.th),a=Math.sin(this.th),c=this.vx*o+this.vz*a,l=r?0:e.steer;if(this.steerVis+=(l-this.steerVis)*Math.min(1,t*10),this.onGround){let w=ti(Math.abs(c)/9,0,1),C=ti(Math.abs(c)/this.maxSpeed,0,1.3),E=l*this.turnRate*w*(1-.32*C)*(this.surf==="mud"?.8:1);this.th+=E*t*(c>=-.5?1:-1)}else this.th+=l*.9*t;o=Math.cos(this.th),a=Math.sin(this.th);let h=-a,d=o;c=this.vx*o+this.vz*a;let u=this.vx*h+this.vz*d,f=c;if(this.onGround){let w=Zg[this.surf]??1,C=this.maxSpeed*this.speedMul*w*(this.boost>0?1.32:1),E=r?0:e.throttle,M=r?0:e.brake;if(E>0&&c<C){let V=this.accel*E*(this.boost>0?2.2:1)*(c<0?2:1)*(1-.35*ti(c/C,0,1));c=Math.min(C,c+V*t)}if(M>0&&(c>1?c-=32*M*t:c=Math.max(-13,c-this.accel*.6*M*t)),c>C&&(c=Math.max(C,c-((c-C)*1.3+2)*t)),E===0&&M===0){let V=(2.5+Math.abs(c)*.04+(r?8:0))*t;c=Math.abs(c)<=V?0:c-Math.sign(c)*V}let P=this.grip*(this.surf==="mud"?.35:1)*(r?.35:1);u*=Math.exp(-P*t)}else c*=Math.exp(-.05*t);this.state==="caught"&&(c*=Math.exp(-7*t),u*=Math.exp(-7*t),this.stateTimer-=t,this.stateTimer<=0&&(this.state="ok",this.netCaught=null,this.invuln=.8)),this.accelVis+=((c-f)/Math.max(t,1e-4)-this.accelVis)*Math.min(1,t*6),this.vF=c,this.vx=o*c+h*u,this.vz=a*c+d*u;let g=this.x,x=this.z,m=this.idx,p=this.s,v=this.d;this.x+=this.vx*t,this.z+=this.vz*t;let y=s.project(this.x,this.z,this.idx);this.idx=y.i,this.s=y.s,this.d=y.d;let _=15-qc;if(Math.abs(this.d)>_){let w=Math.sign(this.d),C=Math.abs(this.d)-_,E=s.pointAt(this.s);this.x-=E.rx*C*w,this.z-=E.rz*C*w,this.d=w*_;let M=(this.vx*E.rx+this.vz*E.rz)*w;M>0&&(this.vx-=E.rx*w*M*1.35,this.vz-=E.rz*w*M*1.35,M>5&&this.events.push({type:"scrape",v:M}));let P=Math.exp(-.8*t);this.vx*=P,this.vz*=P}let I=s.surfaceAt(this.s,this.d);if(I.h-this.y>.9){let w=s.surfaceAt(this.s,v).h-this.y>.9;this.x=g,this.z=x,this.idx=m,this.s=p,this.d=v;let C=s.pointAt(this.s);if(w){let E=this.vx*C.tx+this.vz*C.tz;this.vx-=C.tx*E*1.2,this.vz-=C.tz*E*1.2}else{let E=this.vx*C.rx+this.vz*C.rz;this.vx-=C.rx*E*1.3,this.vz-=C.rz*E*1.3}this.speed>6&&this.events.push({type:"wall"}),I=s.surfaceAt(this.s,this.d)}let A=I.h;if(this.vy-=lu*t,this.y+=this.vy*t,this.y<=A){if(this.onGround){let w=ti((A-this.groundH)/t,-30,16);this.vy=Math.max(this.vy,w);let C=w-this.lastSlopeV;C>4&&(this.compV-=C*.01),this.lastSlopeV=w}else{let w=-this.vy;w>6&&(this.compV-=Math.min(w,22)*.11,this.events.push({type:"land",v:w})),this.vy=0}this.y=A,this.onGround=!0,this.airT=0}else this.onGround=!1,this.lastSlopeV=0,this.airT+=t;this.groundH=A,this.surf=I.type,(I.type==="pit"||I.type==="water")&&this.y<I.top-1.4&&(this.state="fallen",this.stateTimer=I.type==="water"?2.1:1.7,this.fall={pit:I.pit,water:I.type==="water",floor:I.h,splashed:!1},this.events.push({type:I.type==="water"?"fallWater":"fallPit"})),this.updateLap(n),this.updateMisc(t,s,y)}updateFallen(t){this.stateTimer-=t;let e=this.fall;this.vx*=Math.exp(-3*t),this.vz*=Math.exp(-3*t),this.x+=this.vx*t,this.z+=this.vz*t,this.vy-=lu*t,this.y+=this.vy*t,e.water?(this.y<e.floor&&!e.splashed&&(e.splashed=!0,this.events.push({type:"splash"}),this.vy=-2),this.y<e.floor&&(this.vy=Math.max(this.vy,-1.2))):this.y<e.floor&&(this.vy<-6&&this.events.push({type:"land",v:-this.vy}),this.y=e.floor,this.vy=0),this.pitch+=(.5-this.pitch)*Math.min(1,t*2),this.syncMesh(t),this.stateTimer<=0&&this.respawn(e.pit.respawnS,0,12)}updateLap(t){let e=this.track.length;this.prevS>e*.75&&this.s<e*.25?this.checkpoint&&(this.lap++,this.checkpoint=!1,t.onLap(this)):this.prevS<e*.25&&this.s>e*.75&&(this.lap--,this.checkpoint=!0),this.s>e*.4&&this.s<e*.6&&(this.checkpoint=!0)}updateMisc(t,e,n){if(Math.cos(this.th-n.th)<-.4&&this.vF>3?this.wrongT+=t:this.wrongT=0,this.control.throttle>0&&this.speed<2&&this.state==="ok"?this.stuckT+=t:this.stuckT=0,this.compV+=(-95*this.comp-9*this.compV)*t,this.comp+=this.compV*t,this.comp<-.3&&(this.comp=-.3,this.compV=0),this.comp>.55&&(this.comp=.55,this.compV=0),this.onGround){let r=this.th-n.th,o=Math.cos(r),a=Math.sin(r),c=(x,m)=>{let p=e.surfaceAt(this.s+x*o-m*a,this.d+x*a+m*o);return p.type==="pit"||p.type==="water"?p.top:p.h},l=c(1.9,0),h=c(-1.9,0),d=c(0,-1.6),u=c(0,1.6),f=Math.atan2(l-h,3.8)+ti(this.accelVis*.004,-.06,.06),g=Math.atan2(d-u,3.2)+ti(-this.steerVis*this.vF*.0025,-.07,.07);this.pitch+=(f-this.pitch)*Math.min(1,t*12),this.roll+=(g-this.roll)*Math.min(1,t*10)}else{let r=ti(Math.atan2(this.vy,Math.max(8,Math.abs(this.vF)))*.8,-.55,.45);this.pitch+=(r-this.pitch)*Math.min(1,t*2.5),this.roll+=(0-this.roll)*Math.min(1,t*3)}this.syncMesh(t)}syncMesh(t){let e=this.mesh;e.position.set(this.x,this.y,this.z),e.rotation.order="YXZ",e.rotation.set(-this.pitch,Math.PI/2-this.th+this.spin,this.roll);let n=this.invuln>0&&this.state==="ok"?Math.floor(this.invuln*12)%2===0:!0;e.visible=n,oo(this.parts,{wheelSpin:(this.onGround?this.vF:this.control.throttle*30)*t/Qn,steer:this.steerVis,comp:this.comp,dt:t})}};var Ei=(i,t)=>i+Math.random()*(t-i),$g=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},co=class{constructor(t,e,{skill:n=1,preferBridge:s=!1}={}){this.v=t,this.track=e,this.skill=n,this.lane=Ei(-6,6),this.laneTarget=this.lane,this.laneTimer=Ei(2,6),this.preferBridge=s,this.itemDelay=0,this.noise=0,this.noiseT=0}laneAt(t){let e=this.track;for(let n of e.pits){if(!n.bridge)continue;let s=e.ahead(t,n.s0),r=e.ahead(n.s1,t);if(s<110||r<6)return this.preferBridge?(n.bridge[0]+n.bridge[1])/2:-5}for(let n of e.mud)if((e.ahead(t,n.s)<n.rs+12||e.ahead(n.s,t)<n.rs)&&Math.abs(this.laneTarget-n.d)<n.rd+2.5)return n.d>0?Math.max(-9,n.d-n.rd-3):Math.min(9,n.d+n.rd+3);return this.laneTarget}control(t,e){let n=this.v,s=this.track;this.laneTimer-=t,this.laneTimer<=0&&(this.laneTimer=Ei(3,7),this.laneTarget=Ei(-7,7));for(let m of e.vehicles){if(m===n)continue;let p=s.ahead(n.s,m.s);p>0&&p<14&&Math.abs(m.d-this.lane)<3.2&&(this.laneTarget=m.d>0?m.d-5:m.d+5,this.laneTarget=Math.max(-9,Math.min(9,this.laneTarget)))}let r=Math.max(0,n.vF),o=9+r*.45,a=this.laneAt(n.s+o);this.lane+=(a-this.lane)*Math.min(1,t*1.2);let c=s.pointAt(n.s+o,this.lane);this.noiseT-=t,this.noiseT<=0&&(this.noiseT=Ei(.3,1.2),this.noise=Ei(-.12,.12)/this.skill);let l=Math.atan2(c.z-n.z,c.x-n.x),h=$g(l-n.th),d=Math.max(-1,Math.min(1,h*2.6+this.noise)),u=1,f=0;Math.abs(h)>1.7?(u=0,f=1,d=-Math.sign(h)):Math.abs(h)>.55&&r>18&&(u=.3),Math.abs(s.curvatureAhead(n.s,25))>.9&&r>30&&(u=Math.min(u,.5));let x=!1;if(n.item){if(this.itemDelay-=t,this.itemDelay<=0)if(n.item==="nitro")x=Math.abs(s.curvatureAhead(n.s,70))<.3;else if(n.item==="jump"){if(x=e.obstacles.dangerAhead(n.s,12+r*.15)&&n.onGround,!x)for(let m of s.pits)s.ahead(n.s,m.s0)<6&&n.onGround&&r<24&&Math.abs(n.d-(m.bridge?(m.bridge[0]+m.bridge[1])/2:99))>3&&(x=!0)}else n.item==="wave"&&(x=e.vehicles.some(m=>m!==n&&m.state==="ok"&&Math.hypot(m.x-n.x,m.z-n.z)<16))}else this.itemDelay=Ei(.8,3);return{steer:d,throttle:u,brake:f,item:x}}};var un=(i,t)=>i+Math.random()*(t-i),ho=class{constructor(t,e,n){this.track=t,this.game=n,this.group=new jt,e.add(this.group),this.time=0,this.turbos=[],this.boxes=[],this.logs=[],this.balls=[],this.nets=[],this.cars=[],this.barrels=[],this.crocs=[],this.build()}rel(t,e){let n=this.track.length,s=(t-e)%n;return s>n/2&&(s-=n),s<-n/2&&(s+=n),s}holder(t,e=0,n=0){let s=new jt;return en(s,this.track,t,e,this.track.baseAt(t)+n),this.group.add(s),s}build(){let t=this.track,e=(v,y)=>t.at(v,y),n=new Le({map:Jh(),transparent:!0,opacity:.95}),s=new xe(4.5,7);s.rotateX(-Math.PI/2),s.rotateY(Math.PI);let r=[[e(0,50),-6],[e(0,50),6],[e(2,166),-5],[e(2,166),5],[e(7,150),-5],[e(7,150),5],[e(9,178),-5],[e(11,120),0]];for(let[v,y]of r)this.holder(v,y,.07).add(new J(s,n)),this.turbos.push({s:v,d:y});this.turboTex=n.map;let o=new Ft(1.8,1.8,1.8),a=new rt({map:Vc(),emissive:16777215,emissiveMap:Vc(),emissiveIntensity:.35,transparent:!0,opacity:.92,roughness:.2});for(let v of[e(0,185),e(2,250),e(7,90),e(9,300),e(11,100)])for(let y of[-8,-4,0,4,8]){let _=new J(o,a);_.castShadow=!0;let I=t.pointAt(v,y);_.position.set(I.x,t.baseAt(v)+1.8,I.z),this.group.add(_),this.boxes.push({s:v,d:y,mesh:_,base:t.baseAt(v)+1.8,active:!0,timer:0,phase:Math.random()*6})}let c=new le(1,1,7,14);c.rotateX(Math.PI/2);let l=[new rt({map:iu(),roughness:1}),new rt({map:Gc(),roughness:1}),new rt({map:Gc(),roughness:1})];[[35,4.2,0],[60,3.6,.45],[85,4.8,.2]].forEach(([v,y,_])=>{let I=e(2,v),A=this.holder(I),w=new J(c,l);w.castShadow=!0,w.position.y=1,A.add(w),this.logs.push({s:I,period:y,phase:_,amp:12.5,r:1,len:7,mesh:w,d:0,vd:0})});for(let v of[-1,1]){let y=lo("\xA1TRONCOS!","#e0a100");en(y,t,e(2,5),v*18,0),this.group.add(y)}let h=t.segs[5];for(let[v,y]of[[h.length*.25,0],[h.length*.8,Math.PI]]){let _=t.snap(h.s0+v),I=this.holder(_),A=new rt({color:15774720,metalness:.4,roughness:.5}),w=[];for(let W of[-1,1]){let j=new Ft(1,19,1);j.translate(W*(15+1.8),9.5,0),w.push(j);for(let X=0;X<6;X++){let tt=new Ft(.2,3.4,.2);tt.rotateZ(.5*(X%2?1:-1)),tt.translate(W*(15+1.8),1.6+X*3,.55),w.push(tt)}}let C=new Ft(30+4.6,1.2,1.2);C.translate(0,19,0),w.push(C);let E=new J(we(w),A);E.castShadow=!0,I.add(E);let M=new jt;M.position.y=18.4,I.add(M);let P=new J(new le(.12,.12,14,6),new rt({color:5592405,metalness:.8,roughness:.4}));P.position.y=-7,M.add(P);let V=new J(new ge(2.2,20,16),new rt({color:2829102,metalness:.7,roughness:.35}));V.position.y=-14-1.5,V.castShadow=!0,M.add(V);let z=new J(new tn(2.2,.18,8,24),new rt({color:16763904}));z.position.copy(V.position),z.rotation.y=Math.PI/2,M.add(z),this.balls.push({s:_,pivot:M,phase:y,period:3.8,amp:1.05,L:15.5,top:18.4,d:0,y:0,vd:0})}{let v=e(11,45),y=this.holder(v),_=new rt({color:3816004,metalness:.6,roughness:.4}),I=[];for(let X of[-1,1]){let tt=new Ft(1.2,12,1.2);tt.translate(X*(15+1.2),6,0),I.push(tt)}let A=new Ft(30+3.6,1.4,1.4);A.translate(0,11.4,0),I.push(A);let w=new J(we(I),_);w.castShadow=!0,y.add(w);let C=new J(new le(.7,.7,31,12),new rt({color:13220238,roughness:1}));C.rotation.z=Math.PI/2,C.position.set(0,10.3,.4),y.add(C);let E=31,M=9.6,P=new xe(E,M,30,12);P.translate(0,-M/2,0);let V=Kh().clone();V.needsUpdate=!0,V.repeat.set(E/2.4,M/2.4);let z=new J(P,new rt({map:V,alphaTest:.4,side:oe,roughness:1}));z.position.set(0,10.3,.4),z.castShadow=!0,y.add(z);let W=[];for(let X of[-1,1]){let tt=new J(new ge(.55,12,10),new Le({color:2293572}));tt.position.set(X*14,12.4,-.6),y.add(tt),W.push(tt)}let j=lo("\xA1CUIDADO CON LA RED!","#e0a100",512);j.position.set(0,13.6,-.75),j.rotation.y=Math.PI,j.scale.set(1.6,1.6,1.6),y.add(j),this.nets.push({s:v,mesh:z,geo:P,base0:Float32Array.from(P.attributes.position.array),lamps:W,H:M,open:0,cycle:5.6,bulge:0,bulgeX:0,catchers:[]})}let d=[4030143,12597547,2600544,15965202,9323693,9807270,1482885,13849600,15528177],u=[[100,[-8,-3,2,7]],[113,[-5.5,-.5,4.5,9]],[126,[-8,-3,2,7]],[139,[-5.5,-.5,4.5,9]]],f=0;for(let[v,y]of u)for(let _ of y){let I=e(0,v)+un(-1,1),A=Jg(d[f++%d.length]);en(A.group,t,I,_,t.baseAt(I)+.03),A.group.rotation.y+=un(-.25,.25)+(Math.random()<.3?Math.PI:0),this.group.add(A.group),this.cars.push({s:I,d:_,...A,crushed:!1,t:0,timer:0})}for(let v of[-1,1]){let y=lo("\xA1APLASTA!","#2ecc71");en(y,t,e(0,80),v*18,0),this.group.add(y)}let g=new le(.75,.75,1.6,14),x=[new rt({map:su(),roughness:.5,metalness:.3}),new rt({color:9048080,roughness:.5,metalness:.3}),new rt({color:9048080})];for(let[v,y]of[[190,[-8,-2,4,10]],[206,[-5,1,7]],[222,[-9,-2,5]]])for(let _ of y){let I=e(7,v),A=t.pointAt(I,_),w=new J(g,x);w.position.set(A.x,t.baseAt(I)+.8,A.z),w.rotation.y=Math.random()*6,w.castShadow=!0,this.group.add(w),this.barrels.push({s:I,d:_,mesh:w,alive:!0,timer:0})}let m=new rt({map:Qh(),transparent:!0,roughness:.18,metalness:.05,depthWrite:!1});for(let v of t.mud){let y=new xe(2*v.rd*1.15,2*v.rs*1.15);y.rotateX(-Math.PI/2);let _=this.holder(v.s,v.d,.06),I=new J(y,m);I.receiveShadow=!0,I.renderOrder=1,_.add(I)}for(let v of[-1,1]){let y=lo("\xA1BARRO!","#8b5a2b");en(y,t,e(9,2),v*18,0),this.group.add(y)}let p=t.pits.find(v=>v.water);if(p){this.crocPit=p;for(let v=0;v<6;v++){let y=Kg(),_={...y,s:un(p.s0+3,p.s1-3),d:un(-12,4),heading:un(0,Math.PI*2),ts:0,td:0,timer:0,jaw:0,snapT:un(0,3),wag:un(0,6),target:null};this.pickCrocTarget(_),this.group.add(y.group),this.crocs.push(_)}}}pickCrocTarget(t){let e=this.crocPit;t.ts=un(e.s0+3,e.s1-3),t.td=un(-12.5,4.5),t.timer=un(3,7)}dangerAhead(t,e){let n=s=>{let r=this.rel(s.s,t);return r>2&&r<e};return!!(this.logs.some(n)||this.balls.some(n)||this.nets.some(s=>n(s)&&s.open>.3))}update(t,e){this.time+=t;let n=this.time,s=this.track,r=this.game;this.turboTex.offset.y=(this.turboTex.offset.y-t*1.6)%1;for(let o of this.turbos)for(let a of e)a.state!=="ok"||!a.onGround||Math.abs(this.rel(a.s,o.s))<3.6&&Math.abs(a.d-o.d)<2.6&&(a.boost<1&&a.events.push({type:"turbo"}),a.boost=Math.max(a.boost,1.3));for(let o of this.boxes){o.active||(o.timer-=t,o.timer<=0&&(o.active=!0));let a=o.active?1:0,c=o.mesh.scale.x+(a-o.mesh.scale.x)*Math.min(1,t*(o.active?4:14));if(o.mesh.scale.setScalar(Math.max(.001,c)),o.mesh.visible=c>.02,o.mesh.rotation.y+=t*1.4,o.mesh.rotation.x=Math.sin(n*1.3+o.phase)*.35,o.mesh.position.y=o.base+Math.sin(n*2+o.phase)*.3,!!o.active){for(let l of e)if(l.state!=="fallen"&&Math.abs(this.rel(l.s,o.s))<2.8&&Math.abs(l.d-o.d)<2.8&&Math.abs(l.y+1.5-o.base)<3.5){o.active=!1,o.timer=4,!l.item&&l.itemRoll<=0&&(l.itemRoll=l.isPlayer?1.3:.8),l.events.push({type:"box"}),r.fx.sparks(o.mesh.position.x,o.mesh.position.y,o.mesh.position.z,14);break}}}for(let o of this.logs){let a=((n/o.period+o.phase)%1+1)%1,c=a<.5?4*a-1:3-4*a;o.d=o.amp*c,o.vd=o.amp*4/o.period*(a<.5?1:-1),o.mesh.position.x=-o.d,o.mesh.rotation.z+=o.vd/o.r*t;let l=s.baseAt(o.s)+o.r*2;for(let h of e)if(h.state==="ok"&&Math.abs(this.rel(h.s,o.s))<o.len/2+2.6&&Math.abs(h.d-o.d)<o.r+qc&&h.y<l-.3){let d=s.pointAt(h.s),u=Math.sign(o.vd)||1;h.hit({dirX:d.rx*u,dirZ:d.rz*u,push:10,up:4,speedMul:.45,stun:.9,kind:"log"})&&(r.fx.sparks(h.x,h.y+1.5,h.z,8),r.fx.dust(h.x,h.y,h.z,0,0,[.45,.3,.18],8,1.5))}}for(let o of this.balls){let a=2*Math.PI/o.period,c=o.amp*Math.sin(a*n+o.phase),l=o.amp*a*Math.cos(a*n+o.phase);o.pivot.rotation.z=-c,o.d=o.L*Math.sin(c),o.y=s.baseAt(o.s)+o.top-o.L*Math.cos(c),o.vd=o.L*Math.cos(c)*l;for(let h of e){if(h.state!=="ok")continue;let d=this.rel(h.s,o.s),u=h.d-o.d,f=h.y+2-o.y;if(d*d+u*u+f*f<4.3*4.3){let g=s.pointAt(h.s),x=Math.sign(o.vd)||Math.sign(u)||1;h.hit({dirX:g.rx*x,dirZ:g.rz*x,push:16,up:6,speedMul:.35,stun:1.3,kind:"ball"})&&r.fx.sparks(h.x,h.y+2.5,h.z,20)}}}for(let o of this.nets){let a=n%o.cycle/o.cycle*o.cycle,c;a<2.8?c=0:a<3.2?c=(a-2.8)/.4:a<4.9?c=1:c=1-(a-4.9)/.7,o.open=c,o.mesh.scale.y=.06+.94*c;let l=a>1.6&&a<2.8;for(let f of o.lamps){let g=c>.05||l&&Math.floor(n*6)%2===0;f.material.color.setHex(g?16720418:2293572)}let h=s.baseAt(o.s)+10.3-o.H*o.mesh.scale.y;for(let f of e){if(f.state!=="ok")continue;let g=this.rel(f.prevS,o.s),x=this.rel(f.s,o.s);g<0&&x>=0&&Math.abs(x)<10&&h<f.y+3&&Math.abs(f.d)<15&&f.catchNet(o)&&o.catchers.push(f)}o.catchers=o.catchers.filter(f=>f.state==="caught"&&f.netCaught===o);let d=0,u=o.bulgeX;for(let f of o.catchers)d=Math.max(d,Math.min(5,Math.max(0,this.rel(f.s,o.s)+2.5))),u=-f.d;if(o.bulge+=(d-o.bulge)*Math.min(1,t*8),o.bulgeX=u,o.bulge>.01||o.dirty){let f=o.geo.attributes.position,g=o.base0;for(let x=0;x<f.count;x++){let m=g[x*3],p=g[x*3+1],v=Math.max(0,1-Math.pow((p+o.H*.55)/(o.H*.55),2));f.array[x*3+2]=o.bulge*Math.exp(-((m-u)**2)/14)*v}f.needsUpdate=!0,o.dirty=o.bulge>.01}}for(let o of this.cars){o.crushed?(o.t=Math.min(1,o.t+t*6),o.timer-=t,o.timer<=0&&(o.crushed=!1)):o.t=Math.max(0,o.t-t*2);let a=1-.68*o.t;if(o.group.scale.set(1+.12*o.t,a,1+.08*o.t),o.paint.color.copy(o.baseColor).multiplyScalar(1-.35*o.t),!o.crushed){for(let c of e)if(c.state==="ok"&&Math.abs(this.rel(c.s,o.s))<3.3&&Math.abs(c.d-o.d)<2.6&&c.y<s.baseAt(o.s)+1.8){o.crushed=!0,o.timer=25,c.onGround&&(c.vy=Math.max(c.vy,4.5),c.onGround=!1),c.compV-=1.2,c.boost=Math.max(c.boost,.35),c.events.push({type:"crush"});let l=s.pointAt(o.s,o.d);r.fx.sparks(l.x,s.baseAt(o.s)+1,l.z,12),r.fx.dust(l.x,s.baseAt(o.s),l.z,0,0,[.6,.6,.65],4,1.4);break}}}for(let o of this.barrels){if(!o.alive){o.timer-=t,o.timer<=0&&(o.alive=!0),o.mesh.scale.setScalar(Math.max(.001,o.mesh.scale.x*.5)),o.mesh.visible=!1;continue}o.mesh.visible=!0;let a=Math.min(1,o.mesh.scale.x+t*3);o.mesh.scale.setScalar(a);for(let c of e)if(c.state==="ok"&&Math.abs(this.rel(c.s,o.s))<3.2&&Math.abs(c.d-o.d)<2.5&&c.y<s.baseAt(o.s)+1.8){this.explodeBarrel(o,e);break}}this.updateCrocs(t,e)}explodeBarrel(t,e){t.alive=!1,t.timer=12;let n=this.track.pointAt(t.s,t.d),s=this.track.baseAt(t.s);this.game.fx.explosion(n.x,s,n.z),this.game.boom(n.x,s,n.z);for(let r of e){if(r.state!=="ok")continue;let o=r.x-n.x,a=r.z-n.z,c=Math.hypot(o,a);if(c<7&&r.y<s+4){let l=1/Math.max(1,c);r.hit({dirX:o*l,dirZ:a*l,push:6,up:11,speedMul:.5,stun:1.1,kind:"boom"})}}for(let r of this.barrels)r.alive&&r!==t&&Math.abs(this.rel(r.s,t.s))<5&&Math.abs(r.d-t.d)<5&&setTimeout(()=>{r.alive&&this.explodeBarrel(r,e)},180)}updateCrocs(t,e){let n=this.crocPit;if(!n)return;let s=this.track,r=null;for(let o of e)o.state==="fallen"&&o.fall?.water&&(r=o);for(let o of this.crocs){o.timer-=t;let a=o.ts,c=o.td,l=1.6;if(r){let p=s.project(r.x,r.z,r.idx);a=p.s,c=p.d,l=5.5}else o.timer<=0&&this.pickCrocTarget(o);let h=this.rel(a,o.s),d=c-o.d,u=Math.hypot(h,d),g=Math.atan2(d,h)-o.heading;for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;o.heading+=Math.max(-1.5*t,Math.min(1.5*t,g)),u>(r?2.5:1)&&(o.s+=Math.cos(o.heading)*l*t,o.d+=Math.sin(o.heading)*l*t),o.s=Math.max(n.s0+2.5,Math.min(n.s1-2.5,o.s)),o.d=Math.max(-13,Math.min(5,o.d)),o.snapT-=t*(r&&u<6?3:1),o.snapT<=0&&(o.snapT=un(2,4),o.jaw=.75,r&&u<7&&this.game.sound3d("snap",r.x,r.z,.8)),o.jaw=Math.max(0,o.jaw-t*(o.jaw>.4?.6:2.5));let x=o.jaw>.4?(.75-o.jaw)/.35*.7:o.jaw/.4*.7;o.jawPivot.rotation.x=x,o.headPivot.rotation.x=-x*.4,o.wag+=t*(l>2?9:3),o.tail.rotation.y=Math.sin(o.wag)*.45;let m=s.pointAt(o.s,o.d);o.group.position.set(m.x,n.floor-.05+Math.sin(o.wag*.5)*.05,m.z),o.group.rotation.y=Math.PI/2-(m.th+o.heading)}}};function lo(i,t,e=256){let n=new jt,s=document.createElement("canvas");s.width=e,s.height=128;let r=s.getContext("2d");r.fillStyle=t,r.fillRect(0,0,e,128),r.strokeStyle="#111",r.lineWidth=10,r.strokeRect(5,5,e-10,118),r.fillStyle="#111",r.font="bold 44px Impact, Arial Black, sans-serif",r.textAlign="center",r.textBaseline="middle";for(let l=44;l>16&&r.measureText(i).width>e-28;l-=2)r.font=`bold ${l}px Impact, Arial Black, sans-serif`;r.fillText(i,e/2,66);let o=new $n(s);o.colorSpace=ve;let a=e/128*3,c=new J(new xe(a,3),new rt({map:o,side:oe}));if(c.position.y=e>256?0:4.5,n.add(c),e<=256)for(let l of[-a/2+.4,a/2-.4]){let h=new J(new le(.12,.12,4.5,6),new rt({color:5592405}));h.position.set(l,2.25,.05),n.add(h)}return n}function Jg(i){let t=new jt,e=new Ot(i),n=new rt({color:i,metalness:.3,roughness:.55}),s=new rt({color:1710618,roughness:.8}),r=new rt({color:10471128,metalness:.4,roughness:.15}),o=new Ft(1.9,.75,4.3);o.translate(0,.75,0);let a=new Ft(1.7,.65,2.1);a.translate(0,1.45,-.25);let c=new J(we([o,a]),n);c.castShadow=!0,t.add(c);let l=new J(new Ft(1.74,.45,1.9),r);l.position.set(0,1.47,-.25),t.add(l);let h=[];for(let u of[-.85,.85])for(let f of[-1.35,1.35]){let g=new le(.38,.38,.3,12);g.rotateZ(Math.PI/2),g.translate(u,.38,f),h.push(g)}t.add(new J(we(h),s));let d=new J(new Ft(1.92,.3,1.2),new rt({color:9063200,roughness:1}));return d.position.set(0,.55,1.2),t.add(d),{group:t,paint:n,baseColor:e}}function Kg(){let i=new jt,t=new rt({color:4156202,roughness:.7}),e=new rt({color:10466154,roughness:.8}),n=new rt({color:16777215}),s=new J(new Ft(1.2,.6,3.2),t);s.castShadow=!0,i.add(s);for(let u=0;u<6;u++){let f=new J(new De(.12,.3,4),t);f.position.set(0,.4,-1.2+u*.45),i.add(f)}let r=new jt;r.position.set(0,.1,1.55),i.add(r);let o=new J(new Ft(.9,.35,1.5),t);o.position.set(0,.12,.75),r.add(o);for(let u=0;u<5;u++)for(let f of[-1,1]){let g=new J(new De(.06,.18,4),n);g.position.set(f*.4,-.08,.3+u*.28),g.rotation.x=Math.PI,r.add(g)}for(let u of[-1,1]){let f=new J(new ge(.14,10,8),new rt({color:16769357,emissive:3353088}));f.position.set(u*.28,.38,.25),r.add(f);let g=new J(new ge(.06,8,6),new rt({color:0}));g.position.set(u*.3,.42,.37),r.add(g)}let a=new jt;a.position.set(0,0,1.55),i.add(a);let c=new J(new Ft(.85,.2,1.45),e);c.position.set(0,-.12,.72),a.add(c);let l=new jt;l.position.set(0,0,-1.6),i.add(l);let h=new De(.5,2.6,6);h.rotateX(-Math.PI/2),h.translate(0,0,-1.3);let d=new J(h,t);d.scale.set(1,.6,1),l.add(d);for(let u of[-1,1])for(let f of[-.9,.9]){let g=new J(new Ft(.35,.25,.5),t);g.position.set(u*.75,-.2,f),g.rotation.y=u*.5,i.add(g)}return i.scale.setScalar(1.5),{group:i,headPivot:r,jawPivot:a,tail:l}}var Qg=`
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
}`,jg=`
uniform sampler2D map;
varying float vA;
varying vec3 vC;
void main() {
  vec4 t = texture2D(map, gl_PointCoord);
  float a = t.a * vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vC, a);
}`,uo=class{constructor(t,e=1600,n=!1){this.max=e,this.next=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size0=new Float32Array(e),this.grow=new Float32Array(e),this.alpha0=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e);let s=new pe;s.setAttribute("position",new Se(this.pos,3).setUsage(Fs)),s.setAttribute("pcolor",new Se(this.col,3).setUsage(Fs)),s.setAttribute("psize",new Se(this.size,1).setUsage(Fs)),s.setAttribute("palpha",new Se(this.alpha,1).setUsage(Fs)),this.mat=new ze({uniforms:{map:{value:tu()},scale:{value:500}},vertexShader:Qg,fragmentShader:jg,transparent:!0,depthWrite:!1,blending:n?Sr:Gn}),this.points=new Br(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=n?11:10,t.add(this.points),this.geo=s,this.alive=0}setScale(t,e){this.mat.uniforms.scale.value=t/(2*Math.tan(e*Math.PI/360))}emit(t){let e=this.next;this.next=(this.next+1)%this.max;let n=e*3;this.pos[n]=t.x,this.pos[n+1]=t.y,this.pos[n+2]=t.z,this.vel[n]=t.vx||0,this.vel[n+1]=t.vy||0,this.vel[n+2]=t.vz||0;let s=t.color||[1,1,1];this.col[n]=s[0],this.col[n+1]=s[1],this.col[n+2]=s[2],this.life[e]=this.maxLife[e]=t.life||1,this.size0[e]=t.size||1,this.grow[e]=t.grow||0,this.alpha0[e]=t.alpha??1,this.grav[e]=t.gravity||0,this.drag[e]=t.drag??1,this.size[e]=this.size0[e],this.alpha[e]=this.alpha0[e]}update(t){let{pos:e,vel:n,life:s,maxLife:r,size:o,size0:a,grow:c,alpha:l,alpha0:h,grav:d,drag:u}=this;for(let f=0;f<this.max;f++){if(s[f]<=0){l[f]!==0&&(l[f]=0,o[f]=0);continue}s[f]-=t;let g=f*3,x=Math.exp(-u[f]*t);n[g]*=x,n[g+2]*=x,n[g+1]=n[g+1]*x-d[f]*t,e[g]+=n[g]*t,e[g+1]+=n[g+1]*t,e[g+2]+=n[g+2]*t;let m=Math.max(0,s[f]/r[f]);o[f]=a[f]+c[f]*(1-m),l[f]=h[f]*Math.min(1,m*2.5)}for(let f of["position","pcolor","psize","palpha"])this.geo.attributes[f].needsUpdate=!0}},fo=class{constructor(t){this.soft=new uo(t,2200,!1),this.glow=new uo(t,1200,!0)}setScale(t,e){this.soft.setScale(t,e),this.glow.setScale(t,e)}update(t){this.soft.update(t),this.glow.update(t)}dust(t,e,n,s,r,o=[.62,.48,.34],a=1,c=2.2){for(let l=0;l<a;l++)this.soft.emit({x:t+(Math.random()-.5)*1.2,y:e+.3,z:n+(Math.random()-.5)*1.2,vx:s*.15+(Math.random()-.5)*3,vy:1+Math.random()*2.5,vz:r*.15+(Math.random()-.5)*3,life:.9+Math.random()*.6,size:c,grow:3.5,color:o,alpha:.55,gravity:-.4,drag:1.5})}mud(t,e,n,s,r,o=3){for(let a=0;a<o;a++)this.soft.emit({x:t,y:e+.5,z:n,vx:-s*.1+(Math.random()-.5)*6,vy:4+Math.random()*6,vz:-r*.1+(Math.random()-.5)*6,life:.8+Math.random()*.4,size:.7+Math.random()*.6,grow:.2,color:[.3+Math.random()*.08,.2,.1],alpha:1,gravity:22,drag:.5})}sparks(t,e,n,s=10){for(let r=0;r<s;r++)this.glow.emit({x:t,y:e,z:n,vx:(Math.random()-.5)*14,vy:Math.random()*8+2,vz:(Math.random()-.5)*14,life:.3+Math.random()*.4,size:.35,grow:-.2,color:[1,.75,.3],alpha:1,gravity:20,drag:1})}splash(t,e,n,s=50){for(let r=0;r<s;r++){let o=Math.random()*Math.PI*2,a=2+Math.random()*7;this.soft.emit({x:t,y:e,z:n,vx:Math.cos(o)*a,vy:6+Math.random()*10,vz:Math.sin(o)*a,life:1+Math.random()*.6,size:.8+Math.random()*1.2,grow:1,color:[.75,.9,.95],alpha:.9,gravity:18,drag:.6})}}explosion(t,e,n){for(let s=0;s<60;s++){let r=Math.random()*Math.PI*2,o=Math.random()*Math.PI/2,a=6+Math.random()*14;this.glow.emit({x:t,y:e+1,z:n,vx:Math.cos(r)*Math.cos(o)*a,vy:Math.sin(o)*a+3,vz:Math.sin(r)*Math.cos(o)*a,life:.4+Math.random()*.5,size:2+Math.random()*2,grow:3,color:[1,.45+Math.random()*.35,.1],alpha:1,gravity:-2,drag:3})}for(let s=0;s<40;s++)this.soft.emit({x:t+(Math.random()-.5)*3,y:e+1+Math.random()*2,z:n+(Math.random()-.5)*3,vx:(Math.random()-.5)*6,vy:3+Math.random()*5,vz:(Math.random()-.5)*6,life:1.6+Math.random(),size:3,grow:7,color:[.2,.2,.2],alpha:.7,gravity:-1.5,drag:1.2});this.sparks(t,e+1,n,30)}boostFlame(t,e,n,s,r){this.glow.emit({x:t,y:e,z:n,vx:s*.6+(Math.random()-.5)*2,vy:1.5+Math.random(),vz:r*.6+(Math.random()-.5)*2,life:.25,size:1.1,grow:-.6,color:[.4,.7,1],alpha:1,gravity:0,drag:2})}confetti(t,e,n,s=80){let r=[[1,.2,.3],[1,.85,.1],[.2,.8,1],[.4,1,.4],[1,.5,1]];for(let o=0;o<s;o++)this.soft.emit({x:t+(Math.random()-.5)*20,y:e+10+Math.random()*6,z:n+(Math.random()-.5)*20,vx:(Math.random()-.5)*4,vy:Math.random()*3,vz:(Math.random()-.5)*4,life:3+Math.random()*2,size:.5,grow:0,color:r[o%r.length],alpha:1,gravity:3,drag:1.5})}};var po=class{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!0,this.engine=null,this.musicTimer=null,this.last={}}init(){if(this.ctx){this.ctx.resume?.();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.muted?0:.7;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,this.master.connect(n).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.22,this.musicBus.connect(this.master);let s=e.sampleRate*2;this.noise=e.createBuffer(1,s,e.sampleRate);let r=this.noise.getChannelData(0);for(let o=0;o<s;o++)r[o]=Math.random()*2-1}toggleMute(){return this.muted=!this.muted,this.master&&this.master.gain.setTargetAtTime(this.muted?0:.7,this.ctx.currentTime,.05),this.muted}osc(t,e,n,s,r,o=0,a=this.sfx){let c=this.ctx,l=c.currentTime+o,h=c.createOscillator(),d=c.createGain();h.type=t,h.frequency.setValueAtTime(e,l),n!==e&&h.frequency.exponentialRampToValueAtTime(Math.max(1,n),l+s),d.gain.setValueAtTime(1e-4,l),d.gain.exponentialRampToValueAtTime(r,l+.01),d.gain.exponentialRampToValueAtTime(1e-4,l+s),h.connect(d).connect(a),h.start(l),h.stop(l+s+.05)}noiseBurst(t,e,n,s,r=s,o=1,a=0,c=this.sfx){let l=this.ctx,h=l.currentTime+a,d=l.createBufferSource();d.buffer=this.noise,d.playbackRate.value=.8+Math.random()*.4;let u=l.createBiquadFilter();u.type=n,u.Q.value=o,u.frequency.setValueAtTime(s,h),r!==s&&u.frequency.exponentialRampToValueAtTime(Math.max(20,r),h+t);let f=l.createGain();f.gain.setValueAtTime(e,h),f.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(u).connect(f).connect(c),d.start(h,Math.random()),d.stop(h+t+.05)}play(t,e=1){if(!this.ctx||this.muted||e<.02)return;let n=this.ctx.currentTime;if(this.last[t]&&n-this.last[t]<.06)return;this.last[t]=n;let s=e;switch(t){case"count":this.osc("square",520,520,.22,.25*s);break;case"go":this.osc("square",1040,1040,.6,.28*s),this.osc("square",1560,1560,.6,.12*s);break;case"crash":this.noiseBurst(.45,.9*s,"lowpass",1600,200),this.osc("sine",120,45,.35,.8*s);break;case"crunch":for(let r=0;r<4;r++)this.noiseBurst(.12,.6*s,"bandpass",900+r*500,400,3,r*.05);this.osc("square",140,60,.3,.25*s);break;case"splash":this.noiseBurst(.9,.8*s,"highpass",500,2500,.7),this.noiseBurst(.5,.5*s,"lowpass",600,150);break;case"boing":this.osc("sine",180,720,.25,.4*s),this.osc("sine",720,360,.3,.25*s,.2);break;case"boom":this.noiseBurst(1.4,1*s,"lowpass",900,60),this.osc("sine",90,30,.9,.9*s);break;case"pickup":[660,880,1320].forEach((r,o)=>this.osc("triangle",r,r,.12,.25*s,o*.06));break;case"tick":this.osc("square",1800,1800,.03,.08*s);break;case"item":this.osc("triangle",990,1480,.15,.25*s);break;case"nitro":this.noiseBurst(1,.7*s,"bandpass",400,3e3,2),this.osc("sawtooth",110,330,.8,.12*s);break;case"turbo":this.noiseBurst(.5,.45*s,"bandpass",600,2400,2);break;case"wave":this.osc("sine",700,60,.7,.6*s),this.noiseBurst(.6,.5*s,"lowpass",2e3,100);break;case"snap":this.noiseBurst(.05,.9*s,"highpass",1500,1500),this.noiseBurst(.05,.9*s,"highpass",1500,1500,1,.18),this.osc("sawtooth",70,50,.6,.25*s,.05);break;case"net":this.osc("sine",110,55,.6,.5*s),this.osc("sawtooth",90,70,.5,.1*s);break;case"land":this.osc("sine",90,40,.25,.7*s),this.noiseBurst(.2,.4*s,"lowpass",500,120);break;case"scrape":this.noiseBurst(.18,.35*s,"bandpass",2600,1800,4);break;case"bump":this.osc("sine",150,70,.15,.5*s),this.noiseBurst(.1,.3*s,"lowpass",800,200);break;case"fall":this.osc("sine",1100,160,1.1,.3*s);break;case"lap":[784,1046].forEach((r,o)=>this.osc("triangle",r,r,.25,.3*s,o*.14));break;case"final":[784,988,1175,1568].forEach((r,o)=>this.osc("square",r,r,.16,.16*s,o*.1));break;case"finish":[523,659,784,1046,784,1046].forEach((r,o)=>this.osc("square",r,r,o===5?.7:.16,.18*s,o*.14));break;case"click":this.osc("triangle",600,900,.07,.2*s);break;case"wrong":this.osc("square",300,200,.3,.15*s);break}}engineStart(){if(!this.ctx||this.engine)return;let t=this.ctx,e=t.createGain();e.gain.value=0;let n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=500,n.Q.value=3;let s=t.createOscillator();s.type="sawtooth";let r=t.createOscillator();r.type="square";let o=t.createOscillator();o.type="sawtooth";let a=t.createGain();a.gain.value=.5,s.connect(n),r.connect(a).connect(n),o.connect(n),n.connect(e).connect(this.sfx),s.start(),r.start(),o.start(),this.engine={g:e,f:n,o1:s,o2:r,o3:o}}engineUpdate(t,e,n,s){if(!this.engine)return;let r=this.ctx.currentTime,o=Math.min(1.3,Math.max(0,t))+(s?.25*e:0),a=38+o*95+(n?25:0);this.engine.o1.frequency.setTargetAtTime(a,r,.06),this.engine.o2.frequency.setTargetAtTime(a*.5,r,.06),this.engine.o3.frequency.setTargetAtTime(a*1.01+2,r,.06),this.engine.f.frequency.setTargetAtTime(300+o*900+e*500,r,.08),this.engine.g.gain.setTargetAtTime(this.muted?0:.07+e*.05,r,.1)}engineStop(){if(!this.engine)return;let t=this.engine,e=this.ctx.currentTime;t.g.gain.setTargetAtTime(0,e,.1),setTimeout(()=>{try{t.o1.stop(),t.o2.stop(),t.o3.stop()}catch{}},400),this.engine=null}musicStart(t=!0){if(!this.ctx||this.musicTimer)return;let n=60/(t?148:112)/4,s=[41.2,49,55,49],r=0,o=this.ctx.currentTime+.1,a=[1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0],c=[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],l=[1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1],h=[0,0,7,0,5,0,7,10,12,0,10,7,5,0,3,0];this.musicTimer=setInterval(()=>{if(this.ctx)for(;o<this.ctx.currentTime+.2;){let d=r%16,u=Math.floor(r/16)%4,f=s[u],g=o-this.ctx.currentTime;if(this.musicOn&&!this.muted&&(a[d]&&this.osc("sine",140,40,.18,.9,g,this.musicBus),c[d]&&this.noiseBurst(.14,.45,"highpass",1200,1200,.7,g,this.musicBus),d%2===0&&this.noiseBurst(.04,.12,"highpass",7e3,7e3,.7,g,this.musicBus),l[d]&&this.osc("sawtooth",f*2,f*2,n*.9,.22,g,this.musicBus),t&&h[d]&&Math.floor(r/64)%2===1)){let x=f*8*Math.pow(2,h[d]/12);this.osc("square",x,x,n*1.6,.06,g,this.musicBus)}o+=n,r++}},50)}musicStop(){this.musicTimer&&clearInterval(this.musicTimer),this.musicTimer=null}};var mo=class{constructor(){this.keys=new Set,this.edges=new Set,this.touch={left:!1,right:!1,gas:!1,brake:!1,item:!1},this.prevPad={},window.addEventListener("keydown",t=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),this.keys.has(t.code)||this.edges.add(t.code),this.keys.add(t.code)}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear())}bindTouch(t){t.querySelectorAll("[data-touch]").forEach(e=>{let n=e.dataset.touch,s=o=>{o.preventDefault(),n==="item"&&!this.touch.item&&this.edges.add("TouchItem"),this.touch[n]=!0,e.classList.add("on")},r=o=>{o.preventDefault(),this.touch[n]=!1,e.classList.remove("on")};e.addEventListener("pointerdown",s),e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("pointerleave",r)})}pressed(...t){for(let e of t)if(this.edges.has(e))return!0;return!1}endFrame(){this.edges.clear()}pad(){let t=navigator.getGamepads?navigator.getGamepads():[];for(let e of t)if(e&&e.connected)return e;return null}padEdges(){let t=this.pad(),e={};if(!t)return e;let n={0:"PadA",1:"PadB",2:"PadX",3:"PadY",5:"PadRB",9:"PadStart",12:"PadUp",13:"PadDown",14:"PadLeft",15:"PadRight"};for(let[s,r]of Object.entries(n)){let o=t.buttons[s],a=!!(o&&o.pressed);a&&!this.prevPad[r]&&this.edges.add(r),this.prevPad[r]=a}return t.axes[0]<-.6&&!this.prevPad.AxL&&this.edges.add("PadLeft"),t.axes[0]>.6&&!this.prevPad.AxR&&this.edges.add("PadRight"),this.prevPad.AxL=t.axes[0]<-.6,this.prevPad.AxR=t.axes[0]>.6,e}drive(){let t=this.keys,e=0,n=0,s=0;(t.has("ArrowLeft")||t.has("KeyA")||this.touch.left)&&(e-=1),(t.has("ArrowRight")||t.has("KeyD")||this.touch.right)&&(e+=1),(t.has("ArrowUp")||t.has("KeyW")||this.touch.gas)&&(n=1),(t.has("ArrowDown")||t.has("KeyS")||this.touch.brake)&&(s=1);let r=this.pad();if(r){let a=r.axes[0]||0;Math.abs(a)>.15&&(e=Math.max(-1,Math.min(1,e+a))),r.buttons[14]?.pressed&&(e=-1),r.buttons[15]?.pressed&&(e=1);let c=r.buttons[7]?.value||0;c>.05&&(n=Math.max(n,c)),r.buttons[0]?.pressed&&(n=1);let l=r.buttons[6]?.value||0;l>.05&&(s=Math.max(s,l)),r.buttons[1]?.pressed&&(s=1)}let o=this.pressed("Space","ShiftLeft","ShiftRight","KeyE","TouchItem","PadX","PadRB");return{steer:e,throttle:n,brake:s,item:o}}};var Yc={nitro:'<svg viewBox="0 0 64 64"><path d="M26 8h12v6h-12z" fill="#ddd"/><rect x="20" y="14" width="24" height="40" rx="7" fill="#1f8fff" stroke="#fff" stroke-width="3"/><path d="M32 22c5 6 7 10 3 16-1-4-3-5-5-6 1 4-2 7-4 9-2-6 0-12 6-19z" fill="#ffd400"/></svg>',jump:'<svg viewBox="0 0 64 64"><path d="M14 52h36" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M20 46l24-6-24-6 24-6-24-6 24-6" fill="none" stroke="#ffd400" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><path d="M32 4l10 10H22z" fill="#2ee86b"/></svg>',wave:'<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="6" fill="#ff4fd8"/><circle cx="32" cy="32" r="15" fill="none" stroke="#ff4fd8" stroke-width="5"/><circle cx="32" cy="32" r="25" fill="none" stroke="#b07bff" stroke-width="4" stroke-dasharray="8 5"/></svg>'},tx={nitro:"Nitro",jump:"Supersalto",wave:"Onda expansiva"},uu=Object.keys(Yc),Ue=i=>document.getElementById(i);function as(i){if(!isFinite(i))return"--:--.--";let t=Math.floor(i/60),e=i-t*60;return`${t}:${e.toFixed(2).padStart(5,"0")}`}var go=class{constructor(t){this.game=t,this.root=Ue("hud"),this.el={pos:Ue("pos-num"),posSuf:Ue("pos-suf"),posTotal:Ue("pos-total"),lap:Ue("lap-num"),lapTotal:Ue("lap-total"),time:Ue("time-total"),best:Ue("time-best"),item:Ue("item-slot"),itemName:Ue("item-name"),speed:Ue("speed-num"),boost:Ue("boost-fill"),msg:Ue("hud-msg"),big:Ue("hud-big"),ranking:Ue("ranking"),hint:Ue("hud-hint")},this.map=Ue("minimap"),this.mctx=this.map.getContext("2d"),this.cache={},this.msgT=0,this.bigT=0,this.rollT=0,this.rollIdx=0,this.prepMap()}set(t,e,n,s="textContent"){this.cache[t]!==n&&(this.cache[t]=n,e[s]=n)}show(t){this.root.classList.toggle("hidden",!t)}prepMap(){let t=this.game.track,e=1/0,n=-1/0,s=1/0,r=-1/0;for(let p=0;p<t.N;p++)e=Math.min(e,t.px[p]),n=Math.max(n,t.px[p]),s=Math.min(s,t.pz[p]),r=Math.max(r,t.pz[p]);let o=this.map.width,a=18,c=(o-2*a)/Math.max(n-e,r-s),l=a+(o-2*a-(n-e)*c)/2,h=a+(o-2*a-(r-s)*c)/2;this.toMap=(p,v)=>[l+(p-e)*c,h+(v-s)*c];let d=document.createElement("canvas");d.width=d.height=o;let u=d.getContext("2d"),f=(p,v,y=3)=>{u.beginPath();for(let _=p;_<=v;_+=y){let I=t.pointAt(_),[A,w]=this.toMap(I.x,I.z);_===p?u.moveTo(A,w):u.lineTo(A,w)}};u.lineJoin="round",u.lineCap="round",f(0,t.length),u.closePath(),u.strokeStyle="rgba(0,0,0,0.55)",u.lineWidth=12,u.stroke(),u.strokeStyle="#d9b98c",u.lineWidth=7,u.stroke(),f(t.tunnel.s0,t.tunnel.s1),u.strokeStyle="#555",u.lineWidth=7,u.stroke();for(let p of t.pits)f(p.s0,p.s1,1),u.strokeStyle=p.water?"#2bb3a0":"#222",u.lineWidth=9,u.stroke();let g=t.pointAt(0),[x,m]=this.toMap(g.x,g.z);u.fillStyle="#fff",u.save(),u.translate(x,m),u.rotate(g.th+Math.PI/2),u.fillRect(-6,-2,12,4),u.restore(),this.mapBg=d}drawMap(){let t=this.mctx,e=this.map.width;t.clearRect(0,0,e,e),t.drawImage(this.mapBg,0,0);let n=[...this.game.vehicles].sort((s,r)=>(s.isPlayer?1:0)-(r.isPlayer?1:0));for(let s of n){let[r,o]=this.toMap(s.x,s.z);t.beginPath(),t.arc(r,o,s.isPlayer?7:5,0,Math.PI*2),t.fillStyle="#"+new Ot(s.def.color).getHexString(),t.fill(),t.lineWidth=s.isPlayer?3:1.5,t.strokeStyle=s.isPlayer?"#fff":"#111",t.stroke()}}message(t,e=1.6,n=""){this.el.msg.textContent=t,this.el.msg.className="show "+n,this.msgT=e}big(t,e=.9,n=""){this.el.big.textContent=t,this.el.big.className="",this.el.big.offsetWidth,this.el.big.className="show "+n,this.bigT=e}update(t){let e=this.game,n=e.player;if(!n)return;let s=e.vehicles.length;this.set("pos",this.el.pos,String(n.place)),this.set("posTotal",this.el.posTotal,"/"+s),this.set("lap",this.el.lap,String(Math.max(1,Math.min(e.laps,n.lap)))),this.set("lapTotal",this.el.lapTotal,String(e.laps));let r=n.finished?n.finishTime:e.raceTime;this.set("time",this.el.time,as(r));let o=n.lapTimes.length?Math.min(...n.lapTimes):1/0;this.set("best",this.el.best,isFinite(o)?"Mejor vuelta "+as(o):""),this.set("speed",this.el.speed,String(Math.round(Math.abs(n.vF)*3.6))),this.el.boost.style.width=Math.min(100,n.boost/2.2*100)+"%",n.itemRoll>0?(this.rollT-=t,this.rollT<=0&&(this.rollT=.08,this.rollIdx=(this.rollIdx+1)%uu.length,e.sound.play("tick",.6)),this.set("item",this.el.item,Yc[uu[this.rollIdx]],"innerHTML"),this.set("itemName",this.el.itemName,"..."),this.el.item.parentElement.classList.add("rolling")):(this.el.item.parentElement.classList.remove("rolling"),this.set("item",this.el.item,n.item?Yc[n.item]:"","innerHTML"),this.set("itemName",this.el.itemName,n.item?tx[n.item]:""),this.el.item.parentElement.classList.toggle("ready",!!n.item));let c=[...e.vehicles].sort((l,h)=>l.place-h.place).map(l=>`<li class="${l.isPlayer?"me":""}${l.finished?" done":""}"><i style="background:#${new Ot(l.def.color).getHexString()}"></i>${l.place}. ${l.def.name}</li>`).join("");this.set("ranking",this.el.ranking,c,"innerHTML"),this.msgT>0&&(this.msgT-=t,this.msgT<=0&&(this.el.msg.className="")),this.bigT>0&&(this.bigT-=t,this.bigT<=0&&(this.el.big.className="")),this.drawMap()}hint(t){this.set("hint",this.el.hint,t||""),this.el.hint.classList.toggle("show",!!t)}};var xo=class extends mi{constructor(){super();let t=new Ft;t.deleteAttribute("uv");let e=new rt({side:Me}),n=new rt,s=new Mi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new J(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new J(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new J(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new J(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new J(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new J(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new J(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let u=new J(t,cs(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let f=new J(t,cs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new J(t,cs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new J(t,cs(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new J(t,cs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new J(t,cs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function cs(i){let t=new Le;return t.color.setScalar(i),t}var Hs=1/120,_o={facil:{mul:.86,skill:.7,label:"F\xE1cil"},normal:{mul:.95,skill:1,label:"Normal"},dificil:{mul:1.03,skill:1.5,label:"Dif\xEDcil"}},du={log:"\xA1TRONCO!",ball:"\xA1BOLAZO!",boom:"\xA1BOOM!",net:"\xA1ATRAPADO EN LA RED!",crush:"\xA1CRUNCH!",fallPit:"\xA1AL FOSO!",fallWater:"\xA1COCODRILOS!",waved:"\xA1ONDA EXPANSIVA!",nitro:"\xA1NITRO!",jump:"\xA1SUPERSALTO!"},Zc=["PRIMERO","SEGUNDO","TERCERO","CUARTO","QUINTO","SEXTO"],Re=i=>document.getElementById(i),Ze=(i,t,e)=>i<t?t:i>e?e:i,ex=(i,t,e)=>{let n=t-i;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return i+n*e};function fu(i,t){try{return{...t,...JSON.parse(localStorage.getItem(i)||"{}")}}catch{return{...t}}}function pu(i,t){try{localStorage.setItem(i,JSON.stringify(t))}catch{}}var $c=class{constructor(){let t=new URLSearchParams(location.search);this.autopilot=t.has("auto"),this.canvas=Re("game"),this.renderer=new Or({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wc,this.renderer.toneMapping=Ac,this.renderer.toneMappingExposure=1,Wh(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.scene=new mi;let e=new Ki(this.renderer);this.envMap=e.fromScene(new xo,.04).texture,this.scene.environment=this.envMap,this.scene.environmentIntensity=.45,this.camera=new Pe(68,1,.5,4e3),this.track=new Qr,this.trackMeshes=ou(this.track,this.scene),this.world=au(this.scene,this.track),this.fx=new fo(this.scene),this.sound=new po,this.input=new mo,this.obstacles=new ho(this.track,this.scene,this),this.vehicles=jn.map(n=>new ao(n,this.track));for(let n of this.vehicles)this.scene.add(n.mesh);this.headlight=new Yr(16774352,0,90,.55,.5,1.2),this.scene.add(this.headlight,this.headlight.target),this.tunnelLight=new Mi(16769696,0,45,1.4),this.scene.add(this.tunnelLight),this.flash=new Mi(16752704,0,60,1.5),this.scene.add(this.flash),this.rings=[];for(let n=0;n<4;n++){let s=new J(new tn(1,.35,8,40),new Le({color:16732120,transparent:!0,opacity:0,depthWrite:!1}));s.rotation.x=Math.PI/2,s.visible=!1,this.scene.add(s),this.rings.push({mesh:s,t:1})}this.settings=fu("megamonstruos.ajustes",{truck:0,laps:3,diff:"normal",music:!0}),this.records=fu("megamonstruos.records",{}),this.sound.musicOn=this.settings.music,this.laps=this.settings.laps,this.hud=new go(this),this.buildShowroom(),this.bindUI(),this.state="title",this.time=0,this.raceTime=0,this.acc=0,this.camYaw=0,this.camPos=new L(0,30,-60),this.camLook=new L,this.shake=0,this.fov=68,this.tunnelF=0,this.setupRace(),this.state="title",window.addEventListener("resize",()=>this.resize()),this.resize(),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.state==="race"||this.state==="countdown")&&this.pause()}),this.last=performance.now(),Re("loading").classList.add("hidden"),this.showScreen("title"),requestAnimationFrame(n=>this.loop(n))}bindUI(){let t=(e,n)=>Re(e).addEventListener("click",()=>{this.sound.init(),this.sound.play("click"),n()});t("btn-play",()=>this.goSelect()),t("btn-prev",()=>this.changeTruck(-1)),t("btn-next",()=>this.changeTruck(1)),t("btn-start",()=>this.startRace()),t("btn-back",()=>this.goTitle()),t("btn-resume",()=>this.resume()),t("btn-restart",()=>this.startRace()),t("btn-quit",()=>this.goTitle()),t("btn-again",()=>this.startRace()),t("btn-change",()=>this.goSelect()),t("btn-menu",()=>this.goTitle()),t("btn-sound",()=>this.toggleMute()),t("btn-music",()=>this.toggleMusic()),t("btn-pause",()=>this.pause()),document.querySelectorAll("[data-laps]").forEach(e=>e.addEventListener("click",()=>{this.sound.play("click"),this.settings.laps=+e.dataset.laps,this.refreshOptions()})),document.querySelectorAll("[data-diff]").forEach(e=>e.addEventListener("click",()=>{this.sound.play("click"),this.settings.diff=e.dataset.diff,this.refreshOptions()})),this.input.bindTouch(Re("touch")),this.isTouch=window.matchMedia("(pointer: coarse)").matches,window.addEventListener("pointerdown",()=>this.sound.init(),{once:!0}),window.addEventListener("keydown",()=>this.sound.init(),{once:!0}),this.refreshOptions()}refreshOptions(){document.querySelectorAll("[data-laps]").forEach(t=>t.classList.toggle("sel",+t.dataset.laps===this.settings.laps)),document.querySelectorAll("[data-diff]").forEach(t=>t.classList.toggle("sel",t.dataset.diff===this.settings.diff)),Re("btn-sound").classList.toggle("off",this.sound.muted),Re("btn-music").classList.toggle("off",!this.sound.musicOn),pu("megamonstruos.ajustes",this.settings)}toggleMute(){this.sound.toggleMute(),this.refreshOptions()}toggleMusic(){this.sound.musicOn=!this.sound.musicOn,this.settings.music=this.sound.musicOn,this.refreshOptions()}showScreen(t){for(let n of["title","select","pause","results"])Re("screen-"+n).classList.toggle("hidden",n!==t);let e=t===null;this.hud.show(e||t==="pause"),Re("touch").classList.toggle("hidden",!(e&&this.isTouch)),Re("btn-pause").classList.toggle("hidden",!e)}goTitle(){this.sound.engineStop(),this.state="title",this.setupRace(),this.state="title",this.showScreen("title")}goSelect(){this.sound.engineStop(),this.sound.init(),this.sound.musicStart(!1),this.state="select",this.showScreen("select"),this.updateSelect()}changeTruck(t){this.settings.truck=(this.settings.truck+t+jn.length)%jn.length,this.showSpin=0,this.updateSelect(),this.refreshOptions()}updateSelect(){let t=jn[this.settings.truck];this.show.trucks.forEach((s,r)=>{s.root.visible=r===this.settings.truck}),Re("truck-name").textContent=t.name,Re("truck-name").style.color="#"+new Ot(t.color).getHexString(),Re("truck-desc").textContent=t.desc;let e={speed:"Velocidad",accel:"Aceleraci\xF3n",handling:"Manejo",weight:"Peso"};Re("truck-stats").innerHTML=Object.entries(e).map(([s,r])=>`<div class="stat"><span>${r}</span><div class="bar">${[1,2,3,4,5].map(o=>`<i class="${o<=t.stats[s]?"on":""}"></i>`).join("")}</div></div>`).join("");let n=this.records[t.id+"_"+this.settings.laps];Re("truck-record").textContent=n?`R\xE9cord con ${this.settings.laps} ${this.settings.laps===1?"vuelta":"vueltas"}: ${as(n)}`:"",Re("truck-dots").innerHTML=jn.map((s,r)=>`<i class="${r===this.settings.truck?"on":""}" style="background:#${new Ot(s.color).getHexString()}"></i>`).join("")}buildShowroom(){let t=new mi;t.environment=this.envMap,t.environmentIntensity=.35;let e=new Pe(38,1,.5,500),n=new J(new ge(200,32,16),new ze({side:Me,depthWrite:!1,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying vec3 vP; void main(){ float h = vP.y * 0.5 + 0.5; vec3 c = mix(vec3(0.95,0.45,0.12), vec3(0.12,0.08,0.28), smoothstep(0.35, 0.75, h)); gl_FragColor = vec4(c, 1.0); }"}));t.add(n),t.fog=new Qi(new Ot().setRGB(.69,.33,.17,ve),40,150),t.add(new is(16773344,3153984,1.4));let s=new Si(16777215,2.6);s.position.set(8,14,10),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:1,far:50}),t.add(s);let r=new Si(8956671,1.6);r.position.set(-10,6,-8),t.add(r);let o=new jt;t.add(o);let a=to().clone();a.needsUpdate=!0,a.repeat.set(6,6);let c=new J(new le(7.5,7.8,.6,48),[new rt({color:2236962,metalness:.6,roughness:.4}),new rt({map:a,roughness:.5}),new rt({color:2236962})]);c.position.y=-.3,c.receiveShadow=!0,o.add(c);let l=new J(new Gr(180,48),new rt({color:2366003,roughness:.65,metalness:.1}));l.rotation.x=-Math.PI/2,l.position.y=-.6,l.receiveShadow=!0,t.add(l);let h=jn.map(d=>{let u=ro(d);return u.root.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),o.add(u.root),u.root.visible=!1,u});e.position.set(10.5,5.2,12.5),e.lookAt(0,2,0),this.show={scene:t,cam:e,table:o,trucks:h},this.showSpin=0}setupRace(){let t=jn[this.settings.truck],e=_o[this.settings.diff]||_o.normal;this.laps=this.settings.laps;let n=this.track.length,s=this.vehicles.find(a=>a.def===t),r=this.vehicles.filter(a=>a!==s).sort(()=>Math.random()-.5),o=[...r.slice(0,4),s,r[4]];this.drivers=new Map,o.forEach((a,c)=>{a.reset(),a.isPlayer=a===s,a.speedMul=a.isPlayer?1:e.mul,a.placeAt(n-10-Math.floor(c/2)*10,c%2?5.5:-5.5,0),a.place=c+1,this.drivers.set(a,new co(a,this.track,{skill:a.isPlayer?1.5:e.skill,preferBridge:Math.random()<.5}))}),this.player=s,this.raceTime=0,this.countdown=4.2,this.lastCount=5,this.finishCount=0,this.resultsT=0,this.throttleHeldSince=null,this.camYaw=s.th;for(let a of this.trackMeshes.lights)a.material.color.setHex(3346705)}startRace(){this.sound.init(),this.setupRace(),this.state="countdown",this.showScreen(null),this.hud.message(""),this.sound.musicStop(),this.sound.engineStart();let t=this.player;this.camPos.set(t.x+Math.cos(t.th)*16,t.y+4,t.z+Math.sin(t.th)*16)}pause(){this.state!=="race"&&this.state!=="countdown"||(this.prevState=this.state,this.state="paused",this.sound.engineStop(),this.showScreen("pause"))}resume(){this.state==="paused"&&(this.state=this.prevState,this.showScreen(null),this.sound.engineStart(),this.last=performance.now())}rollItem(t){let e=(t.place-1)/Math.max(1,this.vehicles.length-1),n={nitro:.42,jump:.36-.14*e,wave:.22+.2*e},s=Math.random()*(n.nitro+n.jump+n.wave);for(let r of Object.keys(n))if(s-=n[r],s<=0)return r;return"nitro"}shockwave(t){let e=this.rings.find(n=>n.t>=1)||this.rings[0];e.t=0,e.mesh.position.set(t.x,t.y+1.5,t.z),e.mesh.visible=!0,this.sound3d("wave",t.x,t.z,1);for(let n of this.vehicles){if(n===t||n.state!=="ok")continue;let s=n.x-t.x,r=n.z-t.z,o=Math.hypot(s,r);o<22&&Math.abs(n.y-t.y)<8&&n.hit({dirX:s/(o||1),dirZ:r/(o||1),push:9,up:5,speedMul:.5,stun:1,kind:"waved"})}}boom(t,e,n){this.flash.position.set(t,e+3,n),this.flash.intensity=4e3,this.sound3d("boom",t,n,1)}sound3d(t,e,n,s=1){let r=this.player,o=r?Math.hypot(r.x-e,r.z-n):0;this.sound.play(t,s*Ze(1-o/90,0,1))}onLap(t){if(t.lap===1){t.lapStart=this.raceTime;return}if(t.lapTimes.push(this.raceTime-t.lapStart),t.lapStart=this.raceTime,t.lap>this.laps&&!t.finished){t.finished=!0,t.finishTime=this.raceTime,t.finishPlace=++this.finishCount,t.isPlayer&&this.playerFinished();return}t.isPlayer&&(t.lap===this.laps?(this.hud.big("\xA1\xDALTIMA VUELTA!",1.6,"small"),this.sound.play("final")):(this.hud.big(`VUELTA ${t.lap}`,1.2,"small"),this.sound.play("lap")))}playerFinished(){let t=this.player;this.state="finished",this.resultsT=3.2,this.hud.big(t.finishPlace===1?"\xA1GANASTE!":`\xA1${Zc[t.finishPlace-1]}!`,3,"small"),this.sound.play("finish"),this.fx.confetti(t.x,t.y,t.z,160);let e=t.def.id+"_"+this.laps;this.newRecord=!this.records[e]||t.finishTime<this.records[e],this.newRecord&&(this.records[e]=t.finishTime);let n=t.lapTimes.length?Math.min(...t.lapTimes):1/0;this.newLapRecord=isFinite(n)&&(!this.records.vuelta||n<this.records.vuelta),this.newLapRecord&&(this.records.vuelta=n),pu("megamonstruos.records",this.records)}showResults(){let t=this.player,e=this.track.length,n=33,s=[...this.vehicles].map(c=>{let l=c.finishTime;if(!c.finished){let h=(this.laps+1)*e-c.progress;l=this.raceTime+Math.max(0,h)/n}return{v:c,t:l,est:!c.finished}}).sort((c,l)=>c.t-l.t),r=s.findIndex(c=>c.v===t)+1;Re("res-title").textContent=r===1?"\xA1HAS GANADO!":r<=3?`\xA1PODIO! QUEDASTE ${Zc[r-1]}`:`HAS QUEDADO ${Zc[r-1]}`,Re("res-table").innerHTML=s.map((c,l)=>`<tr class="${c.v===t?"me":""}"><td>${l+1}</td><td><i style="background:#${new Ot(c.v.def.color).getHexString()}"></i>${c.v.def.name}</td><td>${c.est?"~":""}${as(c.t)}</td></tr>`).join("");let o=t.lapTimes.length?Math.min(...t.lapTimes):1/0,a=`Mejor vuelta: ${as(o)}`;this.newRecord?a+=" \xB7 \xA1Nuevo r\xE9cord de carrera!":this.newLapRecord&&(a+=" \xB7 \xA1R\xE9cord de vuelta!"),Re("res-extra").textContent=a,this.showScreen("results")}step(t,e){if(this.state==="race"||this.state==="finished"){this.raceTime+=t;for(let s of this.vehicles){let r;s.isPlayer&&!s.finished&&!this.autopilot?r=e:r=this.drivers.get(s).control(t,this),r.item&&s.useItem(this),s.update(t,r,this)}e.item=!1,this.collide(),this.obstacles.update(t,this.vehicles);for(let s of this.vehicles){if(s.state!=="ok")continue;let r=s.isPlayer&&!this.autopilot?5:2.5;(s.stuckT>r||!s.isPlayer&&s.wrongT>4)&&(s.respawn(s.s,s.d*.5,6),s.stuckT=0,s.wrongT=0)}this.rank()}}collide(){let t=this.vehicles;for(let e=0;e<t.length;e++){let n=t[e];if(n.state!=="fallen")for(let s=e+1;s<t.length;s++){let r=t[s];if(r.state==="fallen")continue;let o=r.x-n.x,a=r.z-n.z,c=o*o+a*a,l=hu*2;if(c>l*l||Math.abs(n.y-r.y)>2.8)continue;let h=Math.sqrt(c)||.01,d=o/h,u=a/h,f=l-h,g=n.mass,x=r.mass;n.x-=d*f*(x/(g+x)),n.z-=u*f*(x/(g+x)),r.x+=d*f*(g/(g+x)),r.z+=u*f*(g/(g+x));let m=(r.vx-n.vx)*d+(r.vz-n.vz)*u;if(m<0){let p=-1.4*m/(1/g+1/x);if(n.vx-=p*d/g,n.vz-=p*u/g,r.vx+=p*d/x,r.vz+=p*u/x,-m>4){let v=(n.x+r.x)/2,y=(n.z+r.z)/2;this.sound3d("bump",v,y,Ze(-m/15,.2,1)),this.fx.sparks(v,(n.y+r.y)/2+1.8,y,6),(n.isPlayer||r.isPlayer)&&(this.shake=Math.max(this.shake,Ze(-m/20,.1,.5)))}}}}}rank(){[...this.vehicles].sort((s,r)=>s.finished&&r.finished?s.finishPlace-r.finishPlace:s.finished?-1:r.finished?1:r.progress-s.progress).forEach((s,r)=>{s.place=r+1});let e=this.player,n=(_o[this.settings.diff]||_o.normal).mul;for(let s of this.vehicles){if(s.isPlayer){s.speedMul=1;continue}if(e.finished){s.speedMul=n;continue}let r=e.progress-s.progress;s.speedMul=n*Ze(1+r/900,.92,1.1)}}handleEvents(){for(let t of this.vehicles){let e=t.isPlayer;for(let n of t.events){let s=(r,o=1)=>e?this.sound.play(r,o):this.sound3d(r,t.x,t.z,o);switch(n.type){case"turbo":s("turbo",.8);break;case"box":s("pickup",.8);break;case"gotItem":e&&this.sound.play("item");break;case"nitro":s("nitro");break;case"jump":s("boing"),this.fx.dust(t.x,t.y,t.z,0,0,void 0,10,2);break;case"log":case"ball":s("crash"),e&&(this.shake=.7);break;case"boom":e&&(this.shake=.9);break;case"waved":e&&(this.shake=.5);break;case"net":s("net");break;case"crush":s("crunch",.9),e&&(this.shake=Math.max(this.shake,.3));break;case"fallPit":case"fallWater":s("fall",.8);break;case"splash":s("splash"),this.fx.splash(t.x,t.y+.5,t.z);break;case"land":if(n.v>9){s("land",Ze(n.v/18,.3,1));for(let r=0;r<14;r++){let o=r/14*Math.PI*2;this.fx.dust(t.x+Math.cos(o)*2.5,t.y,t.z+Math.sin(o)*2.5,Math.cos(o)*20,Math.sin(o)*20,void 0,1,2.4)}e&&(this.shake=Math.max(this.shake,Ze(n.v/30,.15,.6)))}break;case"scrape":s("scrape",Ze(n.v/12,.2,.8)),this.fx.sparks(t.x,t.y+1.2,t.z,4);break;case"wall":s("bump",.6);break}if(e&&du[n.type]){let r=["fallPit","fallWater","net","ball","boom"].includes(n.type);this.hud.message(du[n.type],r?1.6:1,r?"warn":"")}}t.events.length=0}}loop(t){requestAnimationFrame(n=>this.loop(n));let e=Math.min(.05,Math.max(0,(t-this.last)/1e3));this.last=t,this.frame(e)}frame(t){this.frames=(this.frames||0)+1,this.time+=t;let e=this.input;e.padEdges(),this.menuInput();let n=e.drive(),s=n.steer===0?10:Math.sign(n.steer)!==Math.sign(this.steerSmooth||0)?9:6;this.steerSmooth=(this.steerSmooth||0)+(n.steer-(this.steerSmooth||0))*Math.min(1,t*s),Math.abs(this.steerSmooth)<.01&&n.steer===0&&(this.steerSmooth=0);let r={steer:this.steerSmooth,throttle:n.throttle,brake:n.brake,item:n.item};if((this.state==="race"||this.state==="finished"||this.state==="countdown")&&e.pressed("KeyR","PadY")&&this.state==="race"&&this.player.state==="ok"&&this.player.respawn(this.player.s,this.player.d*.5,4),this.state==="countdown"&&this.updateCountdown(t,r),this.state==="race"||this.state==="finished"){this.acc+=t;let a=0;for(;this.acc>=Hs&&a<10;)this.step(Hs,r),this.acc-=Hs,a++;a===10&&(this.acc=0),this.handleEvents(),this.vehicleFx(t);let c=this.player;this.state==="race"?this.hud.hint(c.wrongT>1.2?"\xA1DIRECCI\xD3N CONTRARIA!":c.stuckT>2?"Pulsa R para volver a la pista":""):(this.hud.hint(""),this.resultsT-=t,this.resultsT<=0&&this.resultsT>-1&&(this.resultsT=-5,this.showResults()))}else(this.state==="title"||this.state==="select")&&this.obstacles.update(t,[]);let o=this.player;if(this.state==="race"||this.state==="countdown"){let a=this.state==="countdown"?r.throttle:o.control.throttle;this.sound.engineUpdate(Math.abs(o.vF)/o.maxSpeed+(this.state==="countdown"?a*.6:0),a,o.boost>0,!o.onGround)}else this.state==="finished"&&this.sound.engineUpdate(Math.abs(o.vF)/o.maxSpeed,.3,!1,!1);this.updateRings(t),this.flash.intensity*=Math.exp(-t*8),this.fx.update(t),this.world.update(t,this.state==="select"?new L:this.player.mesh.position),this.trackMeshes.group.children.forEach(a=>{a.userData.animTex&&(a.userData.animTex.offset.x+=t*.02)});for(let a of this.track.pits)a.waterMesh&&(a.waterMesh.material.map.offset.y+=t*.03);this.updateCamera(t),this.updateTunnelLight(t),this.state!=="select"&&this.state!=="title"&&this.hud.update(t),this.render(t),e.endFrame()}menuInput(){let t=this.input,e=()=>t.pressed("Enter","NumpadEnter","PadA","PadStart");switch(this.state){case"title":(e()||t.pressed("Space"))&&(this.sound.init(),this.sound.play("click"),this.goSelect());break;case"select":t.pressed("ArrowLeft","KeyA","PadLeft")&&(this.sound.play("click"),this.changeTruck(-1)),t.pressed("ArrowRight","KeyD","PadRight")&&(this.sound.play("click"),this.changeTruck(1)),e()&&(this.sound.play("click"),this.startRace()),t.pressed("Escape","PadB")&&this.goTitle();break;case"race":case"countdown":t.pressed("KeyP","Escape","PadStart")&&this.pause();break;case"paused":t.pressed("KeyP","Escape","PadStart","Enter")&&this.resume();break;case"finished":this.resultsT<-1&&t.pressed("Enter","PadA")?this.startRace():this.resultsT>.4&&e()&&(this.resultsT=.01);break}t.pressed("KeyM")&&this.toggleMute()}updateCountdown(t,e){let n=this.countdown;this.countdown-=t;let s=this.countdown;e.throttle>0?this.throttleHeldSince===null&&(this.throttleHeldSince=s):this.throttleHeldSince=null;let r=this.trackMeshes.lights;for(let o of[3,2,1])n>o&&s<=o&&(this.hud.big(String(o),.9),this.sound.play("count"),r[3-o].material.color.setHex(16719904));if(n>3.9&&s<=3.9&&this.hud.message("\xA1PREPARADOS!",1.2),s<=0){this.state="race",this.hud.big("\xA1YA!",1,"go"),this.sound.play("go");for(let a of r)a.material.color.setHex(2293572);let o=this.throttleHeldSince;o!==null&&o<=2&&!this.autopilot&&(this.player.boost=1.4,this.hud.message("\xA1SALIDA TURBO!",1.2),this.sound.play("nitro",.7));for(let a of this.vehicles)!a.isPlayer&&Math.random()<.35&&(a.boost=1.2);this.sound.musicStart(!0)}for(let o of this.vehicles)o.syncMesh(t)}vehicleFx(t){for(let e of this.vehicles){if(e.state==="fallen")continue;let n=e.speed;if(e.onGround&&n>8){let r=e.x+Math.cos(e.th)*-2.2,o=e.z+Math.sin(e.th)*-2.2,a=e.surf==="mud"?1:e.surf==="grass"?.25:.35;Math.random()<a*(n/30)&&(e.surf==="mud"?this.fx.mud(r,e.y,o,e.vx,e.vz,3):this.fx.dust(r,e.y,o,e.vx,e.vz,e.surf==="grass"?[.45,.55,.3]:void 0,1,2))}if(e.boost>0){let s=e.x-Math.cos(e.th)*2.6,r=e.z-Math.sin(e.th)*2.6;for(let o of[-.85,.85]){let a=s-Math.sin(e.th)*o,c=r+Math.cos(e.th)*o;this.fx.boostFlame(a,e.y+3.6,c,-Math.cos(e.th)*10,-Math.sin(e.th)*10)}}}}updateRings(t){for(let e of this.rings){if(e.t>=1){e.mesh.visible=!1;continue}e.t=Math.min(1,e.t+t*1.6);let n=2+e.t*22;e.mesh.scale.set(n,n,1+e.t*3),e.mesh.material.opacity=(1-e.t)*.85}}updateTunnelLight(t){let e=this.player,n=this.track,s=0;this.state!=="select"&&n.inTunnel(e.s)&&(s=Ze(Math.min(e.s-n.tunnel.s0,n.tunnel.s1-e.s)/30,0,1)),this.tunnelF+=(s-this.tunnelF)*Math.min(1,t*4);let r=this.tunnelF,o=this.world;o.hemi.intensity=o.baseHemi*(1-.72*r),o.sun.intensity=o.baseSun*(1-.97*r),this.scene.environmentIntensity=.45*(1-.7*r);let a=Math.cos(e.th),c=Math.sin(e.th);this.headlight.intensity=260*r,this.headlight.position.set(e.x+a*2.5,e.y+2.6,e.z+c*2.5),this.headlight.target.position.set(e.x+a*30,e.y,e.z+c*30),this.headlight.target.updateMatrixWorld();let l=Math.cos((e.s-n.tunnel.s0-6)/12*Math.PI*2);this.tunnelLight.intensity=r*(150+90*l),this.tunnelLight.position.set(e.x+a*6,n.baseAt(e.s)+15,e.z+c*6)}updateCamera(t){let e=this.camera,n=this.player,s=68;if(this.state!=="select"){if(this.state==="title"){let r=this.track.pointAt(this.track.length-20),o=(150+40*Math.sin(this.time*.13))*Math.PI/180,a=26,c=Math.cos(o)*a,l=Math.sin(o)*a;this.camPos.set(r.x+r.tx*c+r.rx*l,6.5+Math.sin(this.time*.2)*1.5,r.z+r.tz*c+r.rz*l),this.camLook.set(r.x+r.tx*6,2.2,r.z+r.tz*6)}else if(this.state==="countdown"||this.state==="paused"&&this.prevState==="countdown"){let r=Ze(1-(this.countdown-.4)/3.8,0,1),o=r*r*(3-2*r),a=n.th+Math.PI*(1-o)+.6*Math.sin(o*Math.PI),c=15-4*o;this.camPos.set(n.x+Math.cos(a)*c,n.y+3.5+2*(1-o),n.z+Math.sin(a)*c),this.camLook.set(n.x,n.y+2.2,n.z),this.camYaw=n.th}else if(this.state==="finished"&&this.resultsT<2.2){let r=this.time*.25;this.camPos.lerp(new L(n.x+Math.cos(r)*16,n.y+7,n.z+Math.sin(r)*16),1-Math.exp(-t*2)),this.camLook.set(n.x,n.y+2,n.z)}else if(this.state!=="paused"){if(n.state!=="fallen"){let m=Math.abs(n.vF)>1,p=(n.vF<-2,n.th);this.camYaw=ex(this.camYaw,m||n.stun<=0?p:this.camYaw,1-Math.exp(-t*5))}let r=Math.abs(n.vF),o=this.camera.aspect<1,a=(10.5+Ze(r*.07,0,3.2))*(o?1.55:1),c=(4.4+Ze(r*.02,0,.8))*(o?1.35:1),l=n.state==="fallen"&&n.fall?Math.max(n.y,n.fall.pit.top-1):n.y,h=new L(n.x-Math.cos(this.camYaw)*a,l+c,n.z-Math.sin(this.camYaw)*a),d=this.track.project(h.x,h.z,n.idx),u=this.track.surfaceAt(d.s,Ze(d.d,-15,15)),f=u.type==="pit"||u.type==="water"?u.top:u.h;h.y=Math.max(h.y,f+2.2);let g=1-Math.exp(-t*9),x=1-Math.exp(-t*5);this.camPos.x+=(h.x-this.camPos.x)*g,this.camPos.z+=(h.z-this.camPos.z)*g,this.camPos.y+=(h.y-this.camPos.y)*x,this.camLook.set(n.x+Math.cos(this.camYaw)*5,n.y+2.4,n.z+Math.sin(this.camYaw)*5),s=(o?78:68)+Ze(r/n.maxSpeed,0,1.3)*8+(n.boost>0?7:0)}if(this.fov+=(s-this.fov)*Math.min(1,t*3),e.fov=this.fov,e.position.copy(this.camPos),this.shake>0){this.shake=Math.max(0,this.shake-t*1.8);let r=this.shake*.5;e.position.x+=(Math.random()-.5)*r,e.position.y+=(Math.random()-.5)*r,e.position.z+=(Math.random()-.5)*r}e.lookAt(this.camLook),e.updateProjectionMatrix(),this.fx.setScale(this.renderer.domElement.height,e.fov)}}render(t){if(this.state==="select"){this.showSpin+=t,this.show.table.rotation.y=this.time*.45;let e=this.show.trucks[this.settings.truck];e.root.position.y=Math.abs(Math.sin(this.time*2.2))*.25*Math.max(0,1-this.showSpin),oo(e,{wheelSpin:0,steer:Math.sin(this.time*.8)*.6,comp:Math.sin(this.time*3)*.04,dt:t}),this.renderer.render(this.show.scene,this.show.cam)}else this.renderer.render(this.scene,this.camera)}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix();let n=this.show.cam;if(t>=900){let s=Math.min(470,t*.42)+t*.03;n.position.set(13.5,6.4,16),n.aspect=(t+s)/e,n.setViewOffset(t+s,e,s,0,t,e)}else{let s=e*.2,r=t<e?1.9:1.4;n.position.set(10.5*r,5.2*r,12.5*r),n.aspect=t/(e+2*s),n.setViewOffset(t,e+2*s,0,2*s,t,e)}n.lookAt(0,2,0),n.updateProjectionMatrix()}simulate(t){let e=Math.round(t/Hs),n={steer:0,throttle:0,brake:0,item:!1};for(let s=0;s<e;s++)this.state==="countdown"&&(this.countdown=0,this.updateCountdown(0,n)),this.step(Hs,n),s%12===0&&this.handleEvents()}};function mu(){try{let i=new $c;window.__mm=i}catch(i){console.error(i);let t=Re("loading");t.classList.remove("hidden"),t.innerHTML="<b>No se ha podido arrancar el juego.</b><br>Necesitas un navegador con WebGL activado.<br><small>"+String(i.message||i)+"</small>"}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",mu):mu();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
