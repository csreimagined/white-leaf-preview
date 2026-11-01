import{l as z,F as He,a as Ye,L as Ot,I as Xe,h as Ze,_ as tn,j as en,p as ye,x as nn,g as rn,e as sn,b as on,c as an,C as un,z as Kt,S as ln,n as cn,w as Ee}from"./firebase-applet-config-DPKcDCKD.js";import{g as At,D as Qt}from"./index-CIHqgsjB.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}R.UNAUTHENTICATED=new R(null),R.GOOGLE_CREDENTIALS=new R("google-credentials-uid"),R.FIRST_PARTY=new R("first-party-uid"),R.MOCK_USER=new R("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let K="12.13.0";function hn(n){K=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=new Ye("@firebase/firestore");function at(n,...t){if(B.logLevel<=Ot.DEBUG){const e=t.map(Lt);B.debug(`Firestore (${K}): ${n}`,...e)}}function Ft(n,...t){if(B.logLevel<=Ot.ERROR){const e=t.map(Lt);B.error(`Firestore (${K}): ${n}`,...e)}}function Ie(n,...t){if(B.logLevel<=Ot.WARN){const e=t.map(Lt);B.warn(`Firestore (${K}): ${n}`,...e)}}function Lt(n){if(typeof n=="string")return n;try{return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Ae(n,r,e)}function Ae(n,t,e){let r=`FIRESTORE (${K}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ft(r),new Error(r)}function v(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Ae(t,i,r)}function _t(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable"};class h extends He{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class dn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(R.UNAUTHENTICATED)))}shutdown(){}}class fn{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class pn{constructor(t){this.auth=null,t.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((t=>t?(v(typeof t.accessToken=="string",42297,{t}),new Te(t.accessToken,new R(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class mn{constructor(t,e,r){this.i=t,this.o=e,this.u=r,this.type="FirstParty",this.user=R.FIRST_PARTY,this.l=new Map}h(){return this.u?this.u():null}get headers(){this.l.set("X-Goog-AuthUser",this.i);const t=this.h();return t&&this.l.set("Authorization",t),this.o&&this.l.set("X-Goog-Iam-Authorization-Token",this.o),this.l}}class _n{constructor(t,e,r){this.i=t,this.o=e,this.u=r}getToken(){return Promise.resolve(new mn(this.i,this.o,this.u))}start(t,e){t.enqueueRetryable((()=>e(R.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wt{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gn{constructor(t,e){this.m=e,this.appCheck=null,this.P=null,on(t)&&t.settings.appCheckToken&&(this.P=t.settings.appCheckToken),e.onInit((r=>{this.appCheck=r}))}getToken(){return this.P?Promise.resolve(new Wt(this.P)):this.appCheck?this.appCheck.getToken().then((t=>t?(v(typeof t.token=="string",3470,{tokenResult:t}),new Wt(t.token)):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,e,r,i,s,o,a,u,c,d,p){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=p}}const Rt="(default)";class H{constructor(t,e){this.projectId=t,this.database=e||Rt}static empty(){return new H("","")}get isDefaultDatabase(){return this.database===Rt}isEqual(t){return t instanceof H&&t.projectId===this.projectId&&t.database===this.database}}function En(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new h(l.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new H(n.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=In(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%62))}return r}}function m(n,t){return n<t?-1:n>t?1:0}function vt(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),s=t.charAt(r);if(i!==s)return Tt(i)===Tt(s)?m(i,s):Tt(i)?1:-1}return m(n.length,t.length)}const Tn=55296,Vn=57343;function Tt(n){const t=n.charCodeAt(0);return t>=Tn&&t<=Vn}function wn(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="__name__";class k{constructor(t,e,r){e===void 0?e=0:e>t.length&&E(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&E(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return k.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof k?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=k.compareSegments(t.get(i),e.get(i));if(s!==0)return s}return m(t.length,e.length)}static compareSegments(t,e){const r=k.isNumericId(t),i=k.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?k.extractNumericId(t).compare(k.extractNumericId(e)):vt(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Xe.fromString(t.substring(4,t.length-2))}}class g extends k{construct(t,e,r){return new g(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new h(l.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new g(e)}static emptyPath(){return new g([])}}const Rn=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class P extends k{construct(t,e,r){return new P(t,e,r)}static isValidIdentifier(t){return Rn.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),P.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jt}static keyField(){return new P([Jt])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new h(l.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new h(l.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new h(l.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new h(l.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new P(e)}static emptyPath(){return new P([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(g.fromString(t))}static fromName(t){return new T(g.fromString(t).popFirst(5))}static empty(){return new T(g.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&g.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return g.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new g(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n,t,e){if(!e)throw new h(l.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ht(n){if(!T.isDocumentKey(n))throw new h(l.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Yt(n){if(T.isDocumentKey(n))throw new h(l.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function we(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function gt(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":E(12329,{type:typeof n})}function Ut(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new h(l.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=gt(n);throw new h(l.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt=null;function vn(){return rt===null?rt=(function(){return 268435456+Math.round(2147483648*Math.random())})():rt++,"0x"+rt.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(n){return n==null}function ut(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="RestConnection",Nn={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Sn{get T(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.R=e+"://"+t.host,this.V=`projects/${r}/databases/${i}`,this.A=this.databaseId.database===Rt?`project_id=${r}`:`project_id=${r}&database_id=${i}`}I(t,e,r,i,s){const o=vn(),a=this.p(t,e.toUriEncodedString());at(Vt,`Sending RPC '${t}' ${o}:`,a,r);const u={"google-cloud-resource-prefix":this.V,"x-goog-request-params":this.A};this.F(u,i,s);const{host:c}=new URL(a),d=ye(c);return this.v(t,a,u,r,d).then((p=>(at(Vt,`Received RPC '${t}' ${o}: `,p),p)),(p=>{throw Ie(Vt,`RPC '${t}' ${o} failed with error: `,p,"url: ",a,"request:",r),p}))}D(t,e,r,i,s,o){return this.I(t,e,r,i,s)}F(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+K})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,s)=>t[s]=i)),r&&r.headers.forEach(((i,s)=>t[s]=i))}p(t,e){const r=Nn[t];let i=`${this.R}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt,f;function Zt(n){if(n===void 0)return Ft("RPC_ERROR","HTTP error has no status"),l.UNKNOWN;switch(n){case 200:return l.OK;case 400:return l.FAILED_PRECONDITION;case 401:return l.UNAUTHENTICATED;case 403:return l.PERMISSION_DENIED;case 404:return l.NOT_FOUND;case 409:return l.ABORTED;case 416:return l.OUT_OF_RANGE;case 429:return l.RESOURCE_EXHAUSTED;case 499:return l.CANCELLED;case 500:return l.UNKNOWN;case 501:return l.UNIMPLEMENTED;case 503:return l.UNAVAILABLE;case 504:return l.DEADLINE_EXCEEDED;default:return n>=200&&n<300?l.OK:n>=400&&n<500?l.FAILED_PRECONDITION:n>=500&&n<600?l.INTERNAL:l.UNKNOWN}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(f=Xt||(Xt={}))[f.OK=0]="OK",f[f.CANCELLED=1]="CANCELLED",f[f.UNKNOWN=2]="UNKNOWN",f[f.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",f[f.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",f[f.NOT_FOUND=5]="NOT_FOUND",f[f.ALREADY_EXISTS=6]="ALREADY_EXISTS",f[f.PERMISSION_DENIED=7]="PERMISSION_DENIED",f[f.UNAUTHENTICATED=16]="UNAUTHENTICATED",f[f.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",f[f.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",f[f.ABORTED=10]="ABORTED",f[f.OUT_OF_RANGE=11]="OUT_OF_RANGE",f[f.UNIMPLEMENTED=12]="UNIMPLEMENTED",f[f.INTERNAL=13]="INTERNAL",f[f.UNAVAILABLE=14]="UNAVAILABLE",f[f.DATA_LOSS=15]="DATA_LOSS";class bn extends Sn{S(t,e){throw new Error("Not supported by FetchConnection")}async v(t,e,r,i,s){var u;const o=JSON.stringify(i);let a;try{const c={method:"POST",headers:r,body:o};s&&(c.credentials="include"),a=await fetch(e,c)}catch(c){const d=c;throw new h(Zt(d.status),"Request failed with error: "+d.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const d=(u=c==null?void 0:c.error)==null?void 0:u.message;throw new h(Zt(a.status),`Request failed with error: ${d??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function yt(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Dn("Invalid base64 string: "+s):s}})(t);return new U(e)}static fromUint8Array(t){const e=(function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s})(t);return new U(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return m(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}U.EMPTY_BYTE_STRING=new U("");const kn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function q(n){if(v(!!n,39018),typeof n=="string"){let t=0;const e=kn.exec(n);if(v(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:_(n.seconds),nanos:_(n.nanos)}}function _(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Y(n){return typeof n=="string"?U.fromBase64String(n):U.fromUint8Array(n)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(n,t){const e={typeString:n};return t&&(e.value=t),e}function tt(n,t){if(!we(n))throw new h(l.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){e=`Expected '${r}' field to equal '${s.value}'`;break}}if(e)throw new h(l.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=-62135596800,ne=1e6;class y{static now(){return y.fromMillis(Date.now())}static fromDate(t){return y.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ne);return new y(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new h(l.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new h(l.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ee)throw new h(l.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new h(l.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ne}_compareTo(t){return this.seconds===t.seconds?m(this.nanoseconds,t.nanoseconds):m(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(tt(t,y._jsonSchema))return new y(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ee;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}y._jsonSchemaVersion="firestore/timestamp/1.0",y._jsonSchema={type:S("string",y._jsonSchemaVersion),seconds:S("number"),nanoseconds:S("number")};function ve(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{}).__type__)==null?void 0:r.stringValue)==="server_timestamp"}function Pe(n){const t=n.mapValue.fields.__previous_value__;return ve(t)?Pe(t):t}function X(n){const t=q(n.mapValue.fields.__local_write_time__.timestampValue);return new y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="__type__",On="__max__",it={},Se="__vector__",lt="value";function $(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ve(n)?4:(function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===On})(n)?9007199254740991:(function(e){var i,s;return((s=(((i=e==null?void 0:e.mapValue)==null?void 0:i.fields)||{})[Ne])==null?void 0:s.stringValue)===Se})(n)?10:11:E(28295,{value:n})}function ct(n,t){if(n===t)return!0;const e=$(n);if(e!==$(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return X(n).isEqual(X(t));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=q(i.timestampValue),a=q(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,s){return Y(i.bytesValue).isEqual(Y(s.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,s){return _(i.geoPointValue.latitude)===_(s.geoPointValue.latitude)&&_(i.geoPointValue.longitude)===_(s.geoPointValue.longitude)})(n,t);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return _(i.integerValue)===_(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=_(i.doubleValue),a=_(s.doubleValue);return o===a?ut(o)===ut(a):isNaN(o)&&isNaN(a)}return!1})(n,t);case 9:return wn(n.arrayValue.values||[],t.arrayValue.values||[],ct);case 10:case 11:return(function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(te(o)!==te(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!ct(o[u],a[u])))return!1;return!0})(n,t);default:return E(52216,{left:n})}}function Z(n,t){return(n.values||[]).find((e=>ct(e,t)))!==void 0}function ht(n,t){if(n===t)return 0;const e=$(n),r=$(t);if(e!==r)return m(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return m(n.booleanValue,t.booleanValue);case 2:return(function(s,o){const a=_(s.integerValue||s.doubleValue),u=_(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1})(n,t);case 3:return re(n.timestampValue,t.timestampValue);case 4:return re(X(n),X(t));case 5:return vt(n.stringValue,t.stringValue);case 6:return(function(s,o){const a=Y(s),u=Y(o);return a.compareTo(u)})(n.bytesValue,t.bytesValue);case 7:return(function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=m(a[c],u[c]);if(d!==0)return d}return m(a.length,u.length)})(n.referenceValue,t.referenceValue);case 8:return(function(s,o){const a=m(_(s.latitude),_(o.latitude));return a!==0?a:m(_(s.longitude),_(o.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return ie(n.arrayValue,t.arrayValue);case 10:return(function(s,o){var A,C,x,nt;const a=s.fields||{},u=o.fields||{},c=(A=a[lt])==null?void 0:A.arrayValue,d=(C=u[lt])==null?void 0:C.arrayValue,p=m(((x=c==null?void 0:c.values)==null?void 0:x.length)||0,((nt=d==null?void 0:d.values)==null?void 0:nt.length)||0);return p!==0?p:ie(c,d)})(n.mapValue,t.mapValue);case 11:return(function(s,o){if(s===it&&o===it)return 0;if(s===it)return 1;if(o===it)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const A=vt(u[p],d[p]);if(A!==0)return A;const C=ht(a[u[p]],c[d[p]]);if(C!==0)return C}return m(u.length,d.length)})(n.mapValue,t.mapValue);default:throw E(23264,{C:e})}}function re(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return m(n,t);const e=q(n),r=q(t),i=m(e.seconds,r.seconds);return i!==0?i:m(e.nanos,r.nanos)}function ie(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const s=ht(e[i],r[i]);if(s)return s}return m(e.length,r.length)}function se(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function be(n){return!!n&&"arrayValue"in n}function oe(n){return!!n&&"nullValue"in n}function ae(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function wt(n){return!!n&&"mapValue"in n}function Q(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return yt(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Q(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Q(n.arrayValue.values[e]);return t}return{...n}}class ue{constructor(t,e){this.position=t,this.inclusive=e}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{}class D extends De{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Fn(t,e,r):e==="array-contains"?new Cn(t,r):e==="in"?new xn(t,r):e==="not-in"?new Mn(t,r):e==="array-contains-any"?new qn(t,r):new D(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ln(t,r):new Un(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ht(e,this.value)):e!==null&&$(this.value)===$(e)&&this.matchesComparison(ht(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return E(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class et extends De{constructor(t,e){super(),this.filters=t,this.op=e,this.N=null}static create(t,e){return new et(t,e)}matches(t){return(function(r){return r.op==="and"})(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.N!==null||(this.N=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.N}getFilters(){return Object.assign([],this.filters)}}class Fn extends D{constructor(t,e,r){super(t,e,r),this.key=T.fromName(r.referenceValue)}matches(t){const e=T.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ln extends D{constructor(t,e){super(t,"in",e),this.keys=ke("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Un extends D{constructor(t,e){super(t,"not-in",e),this.keys=ke("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ke(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((r=>T.fromName(r.referenceValue)))}class Cn extends D{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return be(e)&&Z(e.arrayValue,this.value)}}class xn extends D{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Z(this.value.arrayValue,e)}}class Mn extends D{constructor(t,e){super(t,"not-in",e)}matches(t){if(Z(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Z(this.value.arrayValue,e)}}class qn extends D{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!be(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Z(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e="asc"){this.field=t,this.dir=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{static fromTimestamp(t){return new V(t)}static min(){return new V(new y(0,0))}static max(){return new V(new y(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t,e){this.comparator=t,this.root=e||w.EMPTY}insert(t,e){return new ft(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,w.BLACK,null,null))}remove(t){return new ft(this.comparator,this.root.remove(t,this.comparator).copy(null,null,w.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new st(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new st(this.root,t,this.comparator,!1)}getReverseIterator(){return new st(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new st(this.root,t,this.comparator,!0)}}class st{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class w{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??w.RED,this.left=i??w.EMPTY,this.right=s??w.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new w(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return w.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return w.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,w.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,w.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw E(43730,{key:this.key,value:this.value});if(this.right.isRed())throw E(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw E(27949);return t+(this.isRed()?0:1)}}w.EMPTY=null,w.RED=!0,w.BLACK=!1;w.EMPTY=new class{constructor(){this.size=0}get key(){throw E(57766)}get value(){throw E(16141)}get color(){throw E(16727)}get left(){throw E(29726)}get right(){throw E(36894)}copy(t,e,r,i,s){return this}insert(t,e,r){return new w(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.comparator=t,this.data=new ft(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new le(this.data.getIterator())}getIteratorFrom(t){return new le(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new pt(this.comparator);return e.data=t,e}}class le{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.value=t}static empty(){return new F({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!wt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Q(e)}setAll(t){let e=P.emptyPath(),r={},i=[];t.forEach(((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=Q(o):i.push(a.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());wt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ct(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];wt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){yt(e,((i,s)=>t[i]=s));for(const i of r)delete t[i]}clone(){return new F(Q(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new O(t,0,V.min(),V.min(),V.min(),F.empty(),0)}static newFoundDocument(t,e,r,i){return new O(t,1,e,V.min(),r,i,0)}static newNoDocument(t,e){return new O(t,2,e,V.min(),V.min(),F.empty(),0)}static newUnknownDocument(t,e){return new O(t,3,e,V.min(),V.min(),F.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=F.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=F.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof O&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new O(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.O=null}}function ce(n,t=null,e=[],r=[],i=null,s=null,o=null){return new $n(n,t,e,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.q=null,this.L=null,this.B=null,this.startAt,this.endAt}}function jn(n){return n.collectionGroup!==null}function Gn(n){const t=_t(n);if(t.q===null){t.q=[];const e=new Set;for(const s of t.explicitOrderBy)t.q.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new pt(P.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((c=>{c.isInequality()&&(a=a.add(c.field))}))})),a})(t).forEach((s=>{e.has(s.canonicalString())||s.isKeyField()||t.q.push(new dt(s,r))})),e.has(P.keyField().canonicalString())||t.q.push(new dt(P.keyField(),r))}return t.q}function zn(n){const t=_t(n);return t.L||(t.L=Bn(t,Gn(n))),t.L}function Bn(n,t){if(n.limitType==="F")return ce(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new dt(i.field,s)}));const e=n.endAt?new ue(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ue(n.startAt.position,n.startAt.inclusive):null;return ce(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Pt(n,t){const e=n.filters.concat([t]);return new Ct(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ut(t)?"-0":t}}function Kn(n,t){return(function(r){return typeof r=="number"&&Number.isInteger(r)&&!ut(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER})(t)?(function(r){return{integerValue:""+r}})(t):Oe(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn={asc:"ASCENDING",desc:"DESCENDING"},Wn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jn={and:"AND",or:"OR"};class Hn{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function he(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Yn(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function W(n){return v(!!n,49232),V.fromTimestamp((function(e){const r=q(e);return new y(r.seconds,r.nanos)})(n))}function xt(n,t){return Nt(n,t).canonicalString()}function Nt(n,t){const e=(function(i){return new g(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Xn(n,t){return xt(n.databaseId,t.path)}function St(n,t){const e=(function(i){const s=g.fromString(i);return v(Le(s),10190,{key:s.toString()}),s})(t);if(e.get(1)!==n.databaseId.projectId)throw new h(l.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new h(l.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new T((function(i){return v(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)})(e))}function Zn(n,t){return"found"in t?(function(r,i){v(!!i.found,43571),i.found.name,i.found.updateTime;const s=St(r,i.found.name),o=W(i.found.updateTime),a=i.found.createTime?W(i.found.createTime):V.min(),u=new F({mapValue:{fields:i.found.fields}});return O.newFoundDocument(s,o,a,u)})(n,t):"missing"in t?(function(r,i){v(!!i.missing,3894),v(!!i.readTime,22933);const s=St(r,i.missing),o=W(i.readTime);return O.newNoDocument(s,o)})(n,t):E(7234,{result:t})}function tr(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=(function(c,d){return xt(c.databaseId,d)})(n,i);const s=(function(c){if(c.length!==0)return Fe(et.create(c,"and"))})(t.filters);s&&(e.structuredQuery.where=s);const o=(function(c){if(c.length!==0)return c.map((d=>(function(A){return{field:G(A.field),direction:er(A.dir)}})(d)))})(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=(function(c,d){return c.useProto3Json||Pn(d)?d:{value:d}})(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=(function(c){return{before:c.inclusive,values:c.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(c){return{before:!c.inclusive,values:c.position}})(t.endAt)),{M:e,parent:i}}function er(n){return Qn[n]}function nr(n){return Wn[n]}function rr(n){return Jn[n]}function G(n){return{fieldPath:n.canonicalString()}}function Fe(n){return n instanceof D?(function(e){if(e.op==="=="){if(ae(e.value))return{unaryFilter:{field:G(e.field),op:"IS_NAN"}};if(oe(e.value))return{unaryFilter:{field:G(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ae(e.value))return{unaryFilter:{field:G(e.field),op:"IS_NOT_NAN"}};if(oe(e.value))return{unaryFilter:{field:G(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:G(e.field),op:nr(e.op),value:e.value}}})(n):n instanceof et?(function(e){const r=e.getFilters().map((i=>Fe(i)));return r.length===1?r[0]:{compositeFilter:{op:rr(e.op),filters:r}}})(n):E(54877,{filter:n})}function Le(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Ue(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n){return new Hn(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{}class sr extends ir{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.k=!1}j(){if(this.k)throw new h(l.FAILED_PRECONDITION,"The client has already been terminated.")}I(t,e,r,i){return this.j(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.I(t,Nt(e,r),i,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===l.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new h(l.UNKNOWN,s.toString())}))}D(t,e,r,i,s){return this.j(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.D(t,Nt(e,r),i,o,a,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===l.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new h(l.UNKNOWN,o.toString())}))}terminate(){this.k=!0,this.connection.terminate()}}async function or(n,t){const e=_t(n),r={documents:t.map((a=>Xn(e.serializer,a)))},i=await e.D("BatchGetDocuments",e.serializer.databaseId,g.emptyPath(),r,t.length),s=new Map;i.forEach((a=>{const u=Zn(e.serializer,a);s.set(u.key.toString(),u)}));const o=[];return t.forEach((a=>{const u=s.get(a.toString());v(!!u,55234,{key:a}),o.push(u)})),o}async function ar(n,t){const e=_t(n),{M:r,parent:i}=tr(e.serializer,zn(t));return(await e.D("RunQuery",e.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter((s=>!!s.document)).map((s=>(function(a,u,c){const d=St(a,u.name),p=W(u.updateTime),A=u.createTime?W(u.createTime):V.min(),C=new F({mapValue:{fields:u.fields}}),x=O.newFoundDocument(d,p,A,C);return c?x.setHasCommittedMutations():x})(e.serializer,s.document,void 0)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="ComponentProvider",J=new Map;function xe(n){if(n._terminated)throw new h(l.FAILED_PRECONDITION,"The client has already been terminated.");if(!J.has(n)){at(Ce,"Initializing Datastore");const t=(function(s){return new bn(s)})((function(s,o,a,u,c){return new yn(s,o,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Re(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator,u)})(n._databaseId,n.app.options.appId||"",n._persistenceKey,n.app.options.apiKey,n._freezeSettings())),e=Mt(n._databaseId),r=(function(s,o,a,u){return new sr(s,o,a,u)})(n._authCredentials,n._appCheckCredentials,t,e);J.set(n,r)}return J.get(n)}const ur=1048576,Me="firestore.googleapis.com",de=!0;class fe{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new h(l.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Me,this.ssl=de}else this.host=t.host,this.ssl=t.ssl??de;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ur)throw new h(l.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(r,i,s,o){if(i===!0&&o===!0)throw new h(l.INVALID_ARGUMENT,`${r} and ${s} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Re(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new h(l.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new h(l.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new h(l.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Et{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fe({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new h(l.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new h(l.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fe(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new dn;switch(r.type){case"firstParty":return new _n(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new h(l.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=J.get(e);r&&(at(Ce,"Removing Datastore"),J.delete(e),r.terminate())})(this),Promise.resolve()}}function lr(n,t){const e=typeof n=="object"?n:Ze(),r=typeof n=="string"?n:t||"(default)",i=tn(e,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=en("firestore");s&&cr(i,...s)}return i}function cr(n,t,e,r={}){var c;n=Ut(n,Et);const i=ye(t),s=n._getSettings(),o={...s,emulatorOptions:n._getEmulatorOptions()},a=`${t}:${e}`;i&&nn(`https://${a}`),s.host!==Me&&s.host!==a&&Ie("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:a,ssl:i,emulatorOptions:r};if(!rn(u,o)&&(n._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=R.MOCK_USER;else{d=sn(r.mockUserToken,(c=n._app)==null?void 0:c.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new h(l.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new R(A)}n._authCredentials=new fn(new Te(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new j(this.firestore,t,this._query)}}class I{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new M(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new I(this.firestore,t,this._key)}toJSON(){return{type:I._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(tt(e,I._jsonSchema))return new I(t,r||null,new T(g.fromString(e.referencePath)))}}I._jsonSchemaVersion="firestore/documentReference/1.0",I._jsonSchema={type:S("string",I._jsonSchemaVersion),referencePath:S("string")};class M extends j{constructor(t,e,r){super(t,e,(function(s){return new Ct(s)})(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new I(this.firestore,null,new T(t))}withConverter(t){return new M(this.firestore,t,this._path)}}function bt(n,t,...e){if(n=z(n),Ve("collection","path",t),n instanceof Et){const r=g.fromString(t,...e);return Yt(r),new M(n,null,r)}{if(!(n instanceof I||n instanceof M))throw new h(l.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(g.fromString(t,...e));return Yt(r),new M(n.firestore,null,r)}}function hr(n,t,...e){if(n=z(n),arguments.length===1&&(t=An.newId()),Ve("doc","path",t),n instanceof Et){const r=g.fromString(t,...e);return Ht(r),new I(n,null,new T(r))}{if(!(n instanceof I||n instanceof M))throw new h(l.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(g.fromString(t,...e));return Ht(r),new I(n.firestore,n instanceof M?n.converter:null,new T(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this._byteString=t}static fromBase64String(t){try{return new N(U.fromBase64String(t))}catch(e){throw new h(l.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new N(U.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:N._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(tt(t,N._jsonSchema))return N.fromBase64String(t.bytes)}}N._jsonSchemaVersion="firestore/bytes/1.0",N._jsonSchema={type:S("string",N._jsonSchemaVersion),bytes:S("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new h(l.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new P(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new h(l.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new h(l.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return m(this._lat,t._lat)||m(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:L._jsonSchemaVersion}}static fromJSON(t){if(tt(t,L._jsonSchema))return new L(t.latitude,t.longitude)}}L._jsonSchemaVersion="firestore/geoPoint/1.0",L._jsonSchema={type:S("string",L._jsonSchemaVersion),latitude:S("number"),longitude:S("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,t._values)}toJSON(){return{type:b._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(tt(t,b._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new b(t.vectorValues);throw new h(l.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}b._jsonSchemaVersion="firestore/vectorValue/1.0",b._jsonSchema={type:S("string",b._jsonSchemaVersion),vectorValues:S("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=/^__.*__$/;function je(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E(40011,{dataSource:n})}}class qt{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.G(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}ne(t){return new qt({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}J(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.ne({path:e,arrayElement:!1});return r.H(t),r}Y(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.ne({path:e,arrayElement:!1});return r.G(),r}X(t){return this.ne({path:void 0,arrayElement:!0})}Z(t){return mt(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}G(){if(this.path)for(let t=0;t<this.path.length;t++)this.H(this.path.get(t))}H(t){if(t.length===0)throw this.Z("Document fields must not be empty");if(je(this.dataSource)&&dr.test(t))throw this.Z('Document fields cannot begin and end with "__"')}}class fr{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Mt(t)}ce(t,e,r,i=!1){return new qt({dataSource:t,methodName:e,targetDoc:r,path:P.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pr(n){const t=n._freezeSettings(),e=Mt(n._databaseId);return new fr(n._databaseId,!!t.ignoreUndefinedProperties,e)}function mr(n,t,e,r=!1){return $t(e,n.ce(r?4:3,t))}function $t(n,t){if(Ge(n=z(n)))return gr("Unsupported field value:",t,n),_r(n,t);if(n instanceof $e)return(function(r,i){if(!je(i.dataSource))throw i.Z(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Z(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.Z("Nested arrays are not supported");return(function(r,i){const s=[];let o=0;for(const a of r){let u=$t(a,i.X(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}})(n,t)}return(function(r,i){if((r=z(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kn(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=y.fromDate(r);return{timestampValue:he(i.serializer,s)}}if(r instanceof y){const s=new y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:he(i.serializer,s)}}if(r instanceof L)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof N)return{bytesValue:Yn(i.serializer,r._byteString)};if(r instanceof I){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Z(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:xt(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof b)return(function(o,a){const u=o instanceof b?o.toArray():o;return{mapValue:{fields:{[Ne]:{stringValue:Se},[lt]:{arrayValue:{values:u.map((d=>{if(typeof d!="number")throw a.Z("VectorValues must only contain numeric values.");return Oe(a.serializer,d)}))}}}}}})(r,i);if(Ue(r))return r._toProto(i.serializer);throw i.Z(`Unsupported field value: ${gt(r)}`)})(n,t)}function _r(n,t){const e={};return(function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0})(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):yt(n,((r,i)=>{const s=$t(i,t.J(r));s!=null&&(e[r]=s)})),{mapValue:{fields:e}}}function Ge(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof y||n instanceof L||n instanceof N||n instanceof I||n instanceof $e||n instanceof b||Ue(n))}function gr(n,t,e){if(!Ge(e)||!we(e)){const r=gt(e);throw r==="an object"?t.Z(n+" a custom object"):t.Z(n+" "+r)}}function jt(n,t,e){if((t=z(t))instanceof qe)return t._internalPath;if(typeof t=="string")return Er(n,t);throw mt("Field path arguments must be of type string or ",n,!1,void 0,e)}const yr=new RegExp("[~\\*/\\[\\]]");function Er(n,t,e){if(t.search(yr)>=0)throw mt(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new qe(...t.split("."))._internalPath}catch{throw mt(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function mt(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new h(l.INVALID_ARGUMENT,a+n+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new I(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Be(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(jt("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Be extends ze{data(){return super.data()}}class Ir{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,e){this._docs.forEach(t,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{}class Ke extends Gt{}function Dt(n,t,...e){let r=[];t instanceof Gt&&r.push(t),r=r.concat(e),(function(s){const o=s.filter((u=>u instanceof zt)).length,a=s.filter((u=>u instanceof It)).length;if(o>1||o>0&&a>0)throw new h(l.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class It extends Ke{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new It(t,e,r)}_apply(t){const e=this._parse(t);return We(t._query,e),new j(t.firestore,t.converter,Pt(t._query,e))}_parse(t){const e=pr(t.firestore);return(function(s,o,a,u,c,d,p){let A;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new h(l.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){me(p,d);const x=[];for(const nt of p)x.push(pe(u,s,nt));A={arrayValue:{values:x}}}else A=pe(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||me(p,d),A=mr(a,o,p,d==="in"||d==="not-in");return D.create(c,d,A)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Ar(n,t,e){const r=t,i=jt("where",n);return It._create(i,r,e)}class zt extends Gt{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new zt(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:et.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)We(o,u),o=Pt(o,u)})(t._query,e),new j(t.firestore,t.converter,Pt(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bt extends Ke{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Bt(t,e)}_apply(t){const e=(function(i,s,o){if(i.startAt!==null)throw new h(l.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new h(l.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new dt(s,o)})(t._query,this._field,this._direction);return new j(t.firestore,t.converter,(function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ct(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(t._query,e))}}function Qe(n,t="asc"){const e=t,r=jt("orderBy",n);return Bt._create(r,e)}function pe(n,t,e){if(typeof(e=z(e))=="string"){if(e==="")throw new h(l.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jn(t)&&e.indexOf("/")!==-1)throw new h(l.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(g.fromString(e));if(!T.isDocumentKey(r))throw new h(l.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return se(n,new T(r))}if(e instanceof I)return se(n,e._key);throw new h(l.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gt(e)}.`)}function me(n,t){if(!Array.isArray(n)||n.length===0)throw new h(l.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function We(n,t){const e=(function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new h(l.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new h(l.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Tr{convertValue(t,e="none"){switch($(t)){case 0:return null;case 1:return t.booleanValue;case 2:return _(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Y(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw E(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return yt(t,((i,s)=>{r[i]=this.convertValue(s,e)})),r}convertVectorValue(t){var r,i,s;const e=(s=(i=(r=t.fields)==null?void 0:r[lt].arrayValue)==null?void 0:i.values)==null?void 0:s.map((o=>_(o.doubleValue)));return new b(e)}convertGeoPoint(t){return new L(_(t.latitude),_(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Pe(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(X(t));default:return null}}convertTimestamp(t){const e=q(t);return new y(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=g.fromString(t);v(Le(r),9688,{name:t});const i=new H(r.get(1),r.get(3)),s=new T(r.popFirst(5));return i.isEqual(e)||Ft(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}class Je extends Tr{constructor(t){super(),this.firestore=t}convertBytes(t){return new N(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new I(this.firestore,null,e)}}function Vr(n){const t=xe((n=Ut(n,I)).firestore),e=new Je(n.firestore);return or(t,[n._key]).then((r=>{v(r.length===1,15618);const i=r[0];return new ze(n.firestore,e,n._key,i.isFoundDocument()?i:null,n.converter)}))}function kt(n){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new h(l.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Ut(n,j))._query);const t=xe(n.firestore),e=new Je(n.firestore);return ar(t,n._query).then((r=>{const i=r.map((s=>new Be(n.firestore,e,s.key,s,n.converter)));return n._query.limitType==="L"&&i.reverse(),new Ir(n,i)}))}const _e="4.14.1";(function(){hn(`${ln}_lite`),an(new un("firestore/lite",((t,{instanceIdentifier:e,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Et(new pn(t.getProvider("auth-internal")),new gn(i,t.getProvider("app-check-internal")),En(i,e),i);return r&&s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Kt("firestore-lite",_e,""),Kt("firestore-lite",_e,"esm2020")})();const wr=cn(Ee,"site"),ot=lr(wr,Ee.firestoreDatabaseId),ge=["pages/home","pages/appointments","pages/about","pages/alterations","pages/privacy","app/gallery","app/testimonials","app/settings"];async function Nr(){const[n,t,...e]=await Promise.all([kt(Dt(bt(ot,"designers"),Qe("order"))),kt(Dt(bt(ot,"customPages"),Ar("isVisible","==",!0))),...ge.map(s=>Vr(hr(ot,s)))]);if(n.empty||!e[0].exists())return null;let r=Qt;e.forEach((s,o)=>{s.exists()&&(r=At(r,ge[o],s.data()))}),t.docs.forEach(s=>{r=At(r,`customPages/${s.id}`,s.data())});const i=new Map(Qt.designers.map(s=>[s.slug,s.dresses]));r={...r,designers:[]};for(const s of n.docs)r=At(r,`designers/${s.id}`,{...s.data(),slug:s.id,dresses:i.get(s.id)??[]});return r}async function Sr(n){return(await kt(Dt(bt(ot,"designers",n,"dresses"),Qe("order")))).docs.map(e=>e.data()).filter(e=>e.isVisible!==!1)}export{Nr as loadContent,Sr as loadDresses};
