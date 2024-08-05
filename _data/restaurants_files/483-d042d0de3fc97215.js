"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{28452:function(e,t,n){n.d(t,{x:function(){return l},r:function(){return u}});var r=n(27573),a=n(10075),o=n(7653),i=n(92627);let s=o.createContext({attachments:[],files:[],model:"",prompt:"",project:void 0,isProjectLocked:!1,isSending:!1,setPrompt:()=>void 0,setAttachments:()=>void 0,setFiles:()=>void 0,setModel:()=>Promise.resolve(),setProject:()=>void 0,sendMessage:()=>void 0,stopSampling:()=>void 0,conversation:void 0,focusInput:()=>void 0,promptInputRef:{current:null}}),u=()=>o.useContext(s),l=e=>{var t;let n=(0,o.useRef)(null),u="conversation"in e,{children:l,projectId:c}=e,d=u?e.conversation:void 0,{input:f,setInput:m,attachments:h,setAttachments:g,files:p,setFiles:v,clear:_}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",[n,r,a]=(0,i.Rr)("".concat(e,":attachment"),[]),[s,u,l]=(0,i.Rr)("".concat(e,":files"),[]),[c,d,f]=(0,i.Rr)("".concat(e,":textInput"),t);return{attachments:n,setAttachments:r,files:s,setFiles:u,input:c,setInput:d,clear:(0,o.useCallback)(()=>{f(),a(),l()},[a,f,l])}}(null!==(t=null==d?void 0:d.id)&&void 0!==t?t:void 0===c?"new-conversation":"".concat(c,":conversation")),[C,y]=o.useState(null==d?void 0:d.model),{stickyModelPreference:w}=(0,a.M)();(0,o.useEffect)(()=>{!C&&w&&y(w)},[w,C,y]);let[S,b]=o.useState(c),[x,I]=o.useState(!1),P=async()=>{var t,r;if(""!==f.trim()||0!==h.length||0!==p.length){_(),null===(t=n.current)||void 0===t||t.setContent(""),I(!0);try{u?await e.onSend({prompt:f,attachments:h,files:p}):await e.onCreate({prompt:f,attachments:h,files:p,model:C,project:S})}catch(e){m(f),null===(r=n.current)||void 0===r||r.setContent(f),g(h),v(p)}finally{I(!1)}}},E=async t=>{if(y(t),u){I(!0);try{await e.onCreate({prompt:f,attachments:h,files:p,model:t,project:S})}finally{I(!1)}}};return(0,r.jsx)(s.Provider,{value:{prompt:f,attachments:h,files:p,model:C,project:S,isProjectLocked:void 0!==c||void 0!==d,isSending:x,setPrompt:function(e){let{forceUpdateTiptap:t=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(m(e),!0===t){var r;null===(r=n.current)||void 0===r||r.setContent(e)}},setAttachments:e=>g(e),setFiles:e=>v(e),setModel:E,setProject:b,sendMessage:P,stopSampling:()=>{u&&e.onStopSampling()},conversation:d,focusInput:()=>{var e;return null===(e=n.current)||void 0===e?void 0:e.focus()},promptInputRef:n},children:l})}},96755:function(e,t,n){n.d(t,{Ck:function(){return _},IR:function(){return h},Pd:function(){return g},Rc:function(){return w},WQ:function(){return m},_y:function(){return p},gq:function(){return y},k7:function(){return C},ml:function(){return f},uV:function(){return u},wO:function(){return c},xo:function(){return l},yU:function(){return d},yq:function(){return v}});var r=n(83041),a=n(11492),o=n(35146),i=n(84983),s=n(54603);let u=()=>(0,r.WE)("/api/legal",{staleTime:1/0,meta:{noToast:!0}}),l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.useIsClaudeDot)();return(0,r.uC)("/api/auth/send_code","POST",{...e,transformVariables:e=>({...e,source:t?"claude":"console"})})},c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.useIsClaudeDot)();return(0,r.uC)("/api/auth/send_magic_link","POST",{...e,transformVariables:e=>({...e,source:t?"claude":"console"})})},d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.useIsClaudeDot)();return(0,r.uC)("/api/auth/exchange_nonce_for_code","POST",{...e,transformVariables:e=>({...e,source:t?"claude":"console"})})},f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.useIsClaudeDot)();return(0,r.uC)("/api/auth/verify_magic_link","POST",{...e,transformVariables:e=>({...e,source:t?"claude":"console"})})},m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.useIsClaudeDot)();return(0,r.uC)("/api/auth/verify_code","POST",{...e,transformVariables:e=>({...e,source:t?"claude":"console"})})},h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.useIsClaudeDot)();return(0,r.uC)("/api/auth/verify_google","POST",{...e,transformVariables:e=>({...e,source:t?"claude":"console"})})},g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.useIsClaudeDot)();return(0,r.uC)("/api/auth/accept_invite","POST",{...e,transformVariables:e=>({...e,source:t?"claude":"console"})})},p=()=>(0,r.uC)("/api/auth/logout","POST"),v=()=>{let e=(0,i.useQueryClient)();return(0,r.uC)("/api/account","PUT",{async onSuccess(){await e.invalidateQueries([o.aY])}})},_=()=>(0,r.Ne)("/api/account","PUT",(e,t)=>(null==t?void 0:t.account)?{...t,account:{...t.account,settings:e}}:t,{queryKey:[o.aY],transformVariables:e=>({settings:e})}),C=()=>{let e=(0,i.useQueryClient)();return(0,r.uC)("/api/account/accept_legal_docs","PUT",{async onSuccess(){await e.invalidateQueries([o.aY])}})};function y(e){return(0,r.WE)("/api/signups/".concat(e),{enabled:!!e,staleTime:0})}function w(e,t){let n=(0,i.useQueryClient)(),a=(0,s.useRouter)();return(0,r.uC)("/api/enterprise_auth/sso_callback?code=".concat(e,"&state=").concat(t),"GET",{onSuccess:async()=>{await n.invalidateQueries([o.aY]),a.push("/new")}})}},79755:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(27573),a=n(11492),o=n(16096),i=n(77997);let s=()=>{let e=(0,a.useIsClaudeDot)(),{websiteBaseUrl:t}=(0,a.useConfiguration)();return e?(0,r.jsxs)(r.Fragment,{children:[" ","Or consider"," ",(0,r.jsx)("a",{href:"/settings/billing?action=subscribe",className:"font-bold underline",rel:"noreferrer",children:"upgrading to Claude Pro"}),"."]}):(0,r.jsxs)(r.Fragment,{children:[" ","Or"," ",(0,r.jsx)(i.default,{href:"".concat(t,"/contact-sales"),className:"font-bold underline",children:"contact sales"})," ","if you would be interested in upgrading to a paid version of Claude."]})};function u(){let e=(0,o.useCanUpgradeToPro)(),t=(0,o.useIsReadOnlyMode)();return e&&!t?(0,r.jsx)(s,{}):null}},11925:function(e,t,n){n.d(t,{hH:function(){return Q},wN:function(){return A},pV:function(){return j},lE:function(){return M}});var r,a,o,i,s=n(27573),u=n(79755),l=n(11492),c=n(16096),d=n(59374),f=n(89937),m=n(28648),h=n(14983),g=n(35146),p=n(28505),v=n(43316),_=n(84983),C=n(2645),y=n(71875),w=n(54603),S=n(7653),b=n(80248),x=n(94354);class I{_set_raw_completion(e,t){0===this.start&&(this.start=Date.now()),this.text+=e,this.model_done=t,this.arrivals.push([(Date.now()-this.start)/1e3,this.text.length])}_get_smoothed_completion(){if(0===this.start)return"";let e=(Date.now()-this.start)/1e3,t=this.arrivals[this.arrivals.length-1][1]+(this.model_done?100:0),n=.9*e-.3,r=this.arrivals.filter(e=>e[0]<n).map(e=>e[1]),a=r[r.length-1],o=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.01;if(t===n)return t;let a=e(t),o=e(n);if(t>=n)throw Error("Lower x is greater than upper x");if(a>r)throw Error("Lower f is greater than zero");if(o<-r)throw Error("Upper f is less than zero");for(;a<-r;){let r=(t+n)/2,i=e(r);i<=0?(t=r,a=i):(n=r,o=i)}return t}(n=>{let r=(n-this.x)/(e-this.t),o=1/(e-this.t);return 2*this.gamma*o*(r-this.v)-1/(n-a)+1/(t-n)},a,t),i=(o-this.x)/(e-this.t);return this.v=this.alpha*this.v+(1-this.alpha)*i,this.x=Math.max(o,this.x),this.t=e,this.smoother_done=this.model_done&&this.x>=this.text.length,this.stats.push({t:e,x:o,v:i,min_chars:a,max_chars:t}),this.text.slice(0,this.x)}onMessage(e){this._set_raw_completion(e.completion,null!==e.stop)}async task(e,t){for(;!this.smoother_done&&!t.aborted;)e(this._get_smoothed_completion()),await new Promise(e=>setTimeout(e,10))}constructor(){this.alpha=.99,this.gamma=1e-5,this.v=100,this.x=0,this.t=0,this.arrivals=[[-9999,0]],this.start=0,this.text="",this.model_done=!1,this.smoother_done=!1,this.stats=[]}}var P=n(29351);async function E(e){let{frontendPrivateApiUrl:t,endpoint:n,orgUuid:r,conversationUuid:a,body:o,onCompletion:i,abortController:s,completion:u}=e,l=new I,c=l.task(i,s.signal),d=null,f="",h=JSON.stringify({...u,...o,text:void 0,rendering_mode:"raw",organization_uuid:void 0,conversation_uuid:void 0}),g=(0,P.L)(function(e,t,n,r){let a;if(void 0===n||void 0===r)throw Error("Missing org uuid or conversation uuid");switch(t){case 1:a="completion";break;case 2:a="retry_completion";break;default:throw Error("Invalid endpoint")}return"".concat(e,"/api/organizations/").concat(n,"/chat_conversations/").concat(r,"/").concat(a)}(t,n,r,a),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",Accept:"text/event-stream"},body:h,openWhenHidden:!0,signal:s.signal,async onopen(e){var t;if(!e.ok||!(null===(t=e.headers.get("content-type"))||void 0===t?void 0:t.includes(P.a))){let t=await e.text(),n={};try{n=JSON.parse(t)}catch(e){}throw(0,m.fT)(e.status,n,"Failed to fetch",e.headers)}},onmessage(e){switch(e.event){case"ping":default:return;case"error":throw(0,m.fT)(0,JSON.parse(e.data),"Streaming error: 22");case"completion":{let t=JSON.parse(e.data);if(d=t,void 0===t.completion)throw Error("Unexpected message received when streaming: ".concat(e.data));f+=t.completion,l.onMessage(t)}}},onclose(){l.model_done=!0},onerror(e){throw e instanceof m.Hx&&529===e.statusCode||(0,v.Tb)(e),l.model_done=!0,l.smoother_done=!0,e}});return await Promise.all([g,c]),Object.assign({},d,{completion:f})}(r=o||(o={}))[r.APPEND_MESSAGE_WITH_COMPLETION=1]="APPEND_MESSAGE_WITH_COMPLETION",r[r.RETRY_MESSAGE_WITH_COMPLETION=2]="RETRY_MESSAGE_WITH_COMPLETION",(a=i||(i={})).Ping="ping",a.Completion="completion",a.Error="error";var k=n(50504),T=n(39206),O=n(27113),D=n(75763);let N=(0,S.createContext)([null,null]);function Q(e){let{children:t}=e,n=(0,S.useState)({});return(0,s.jsx)(N.Provider,{value:n,children:t})}function j(e){let{onIncrementalCompletion:t,onStartAppend:n,onStreamCompleted:r}=(0,D.p)(),a=U({conversationUUID:e,endpoint:o.APPEND_MESSAGE_WITH_COMPLETION,onIncrementalCompletion:t,onStreamCompleted:r}),{runStream:i}=a,s=(0,S.useCallback)(async t=>{let{prompt:r,attachments:a,files:o,rethrowErrors:s=!1,modelOverride:u,parent_message_uuid:l}=t;await n(e,e=>{if(!e)throw Error("Conversation tree must be provided for tree append");let t=(0,k.HX)(e),n=[{uuid:k.wZ,text:r,created_at:new Date().toISOString(),sender:"human",attachments:a,files:o,index:t+1,parent_message_uuid:null!=l?l:k.QC},{uuid:k.FC,text:"",created_at:new Date().toISOString(),sender:"assistant",attachments:[],files:[],index:t+2,parent_message_uuid:k.wZ}];return(0,k.vv)(e,n)}),await i({prompt:r,attachments:a,files:o,rethrowErrors:s,modelOverride:u,parent_message_uuid:l})},[i,n,e]);return{...a,runStream:s}}function M(e){let{onIncrementalCompletion:t,onStreamCompleted:n,onStartAppend:r}=(0,D.p)(),a=U({conversationUUID:e,endpoint:o.RETRY_MESSAGE_WITH_COMPLETION,onIncrementalCompletion:t,onStreamCompleted:n}),{runStream:i}=a,s=(0,S.useCallback)(async t=>{await r(e,e=>{let n=[{uuid:k.FC,text:"",created_at:new Date().toISOString(),sender:"assistant",attachments:[],files:[],parent_message_uuid:t,selectedOption:0,index:(0,k.HX)(e)+1}];return(0,k.vv)(e,n)}),await i({prompt:"",attachments:[],files:[],parent_message_uuid:t})},[e,i,r]);return{...a,runStream:s}}let R="incomplete_stream",A=e=>{var t;let n=L(e),{layer:r}=(0,b.useLayer)("frontend"),a=null===(t=r.get("console_default_model_override",null))||void 0===t?void 0:t.model,{config:o}=(0,b.useConfig)("console_default_model"),i=o.get("model",null);return n||a||i||"claude-2.1"},L=e=>{let{data:t}=(0,x.Rq)(e||""),n=(0,w.useSearchParams)(),r=null==n?void 0:n.get("model");return(null==t?void 0:t.model)?null==t?void 0:t.model:r||void 0},H={},J=e=>{let t=(0,_.useQueryClient)(),n=(0,S.useMemo)(()=>[g.sf,e],[e]);return{failedStreamRetryData:(0,C.useQuery)(n,()=>e&&H[e]||null,{initialData:null}).data||null,setFailedStreamRetryData:(0,S.useCallback)(r=>{e&&(H[e]=r,t.invalidateQueries(n))},[t,n,e])}};function U(e){var t;let{conversationUUID:n,endpoint:r,onIncrementalCompletion:a,onStreamCompleted:o}=e,{frontendPrivateApiUrl:i}=(0,l.useConfiguration)(),{activeOrganization:g}=(0,c.useCurrentAccount)(),_=null==g?void 0:g.uuid,{context:C,clearContext:b,setContext:I}=function(e){let[t,n]=(0,S.useContext)(N),[r,a]=(0,S.useState)(),o=(0,S.useCallback)(()=>{n?n(t=>{let n={...t};return delete n[e],n}):a(void 0)},[e,n]),i=(0,S.useCallback)(t=>{n?n(n=>({...n,[e]:t})):a(t)},[e,n]);return{context:t?t[e]:r,clearContext:o,setContext:i}}(n),P=(0,w.useSearchParams)(),k=null==P?void 0:P.get("t"),D=null!==(t=L(n))&&void 0!==t?t:"",Q=null==P?void 0:P.get("max_tokens"),j=(0,O.n)(),{addError:M,clearToast:A}=(0,d.useToasts)(),H=(0,S.useMemo)(p.H,[]),U=(0,x.$H)("push",H),{setFailedStreamRetryData:W}=J(n),F=(0,S.useCallback)(async e=>{await (null==o?void 0:o(n,e)),b()},[o,n,b]),V="Network connection interrupted. Claude may still be responding, please wait for a bit to see the response.",Y=(0,S.useCallback)((e,t)=>{if(e===R)return M(V);if(!(e instanceof m.Hx))return M("We couldn’t connect to Claude. Please check your network connection and try again.");if("rate_limit_error"===e.type){if(e.message.includes("{")&&_)try{let t=JSON.parse(e.message);j(t,_,n)}catch(e){}return M((0,s.jsxs)("p",{children:["You've reached the limit for Claude messages at this time. Please wait before trying again. ",(0,s.jsx)(u.Z,{})]}))}if("not_found_error"===e.type)return M((0,s.jsx)("p",{children:"Claude model version not found."}));if("overloaded_error"===e.type)return M((0,s.jsxs)("p",{children:["Due to unexpected capacity constraints, Claude is unable to respond to your message. Please try again soon.",(0,s.jsx)(u.Z,{})]}));if("invalid_request_error"===e.type&&413===e.statusCode){let e=M((0,s.jsxs)("p",{children:["Your message will exceed the"," ",(0,s.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:h.jC,children:"length limit"})," ","for this chat.",t>0?" Try attaching fewer or smaller files":" Try shortening your message"," ",(0,s.jsx)("a",{href:"#",className:"underline",onClick:t=>{t.preventDefault(),U(),A(e)},children:"or starting a new conversation."}),(0,s.jsx)(u.Z,{})]}));return}return"invalid_request_error"===e.type&&"read_only_mode"===e.extra.code?M((0,s.jsx)("p",{children:"Due to capacity constraints, chatting with Claude is currently not available. Please try again in a little while."})):M(e)},[M,_,j,n,U,A]),z=(0,f.K)(),q=(0,S.useCallback)(async e=>{let{prompt:t,attachments:o,files:s,rethrowErrors:u=!1,modelOverride:l,parent_message_uuid:c}=e;if(C)return;if(!g)throw Error("Cannot stream without an organization");let d=new AbortController;I({controller:d}),W(null);let f={prompt:t,parent_message_uuid:c,timezone:y.ou.local().zoneName||void 0},m=(0,T.l)();m&&(f.custom_system_prompt=m),D&&"string"==typeof D&&(f.model=D),l&&(f.model=l),"string"==typeof k&&(f.temperature=parseInt(k)),Q&&"string"==typeof Q&&(f.max_tokens_to_sample=parseInt(Q));let h="",p=null;try{p=await E({frontendPrivateApiUrl:i,endpoint:r,orgUuid:g.uuid,conversationUuid:n,body:{organization_uuid:g.uuid,conversation_uuid:n,text:t,attachments:o,files:s.map(e=>e.file_uuid)},onCompletion:e=>{a(n,e.substring(h.length)),h=e},abortController:d,completion:f})}catch(e){if(W({prompt:t,attachments:o,files:s}),Y(e,o.length+s.length),u)throw e}finally{p&&!p.stop_reason&&(a(n,"\n\n```"+V+"```"),Y(R,o.length+s.length),z.track("sse_interrupted"),(0,v.uT)("sse_interrupted"),await new Promise(e=>setTimeout(e,3e4))),await F(p)}return h},[i,C,g,I,D,k,a,n,r,Y,F,Q,W,z]),G=(0,S.useCallback)(()=>{C&&(C.controller.abort(),F(null))},[C,F]);return{runStream:q,isStreaming:!!C,abortStream:G}}},39206:function(e,t,n){n.d(t,{h:function(){return o},l:function(){return i}});var r=n(7653);let a="customSystemPrompt",o=()=>{let[e,t]=(0,r.useState)(()=>"undefined"==typeof localStorage?"":localStorage.getItem(a)||"");return(0,r.useEffect)(()=>{localStorage.setItem(a,e)},[e]),{customSystemPrompt:e,setCustomSystemPrompt:t}},i=()=>"undefined"==typeof localStorage?"":localStorage.getItem(a)},27809:function(e,t,n){n.d(t,{V:function(){return u},u:function(){return l}});var r=n(83041),a=n(16096),o=n(35146),i=n(80248);let s={image_in:!1},u=e=>{let{activeOrganization:t}=(0,a.useCurrentAccount)(),n=null==t?void 0:t.uuid,{data:i,isLoading:u,isPreviousData:l}=(0,r.WE)("/api/organizations/".concat(n,"/model_configs/").concat(e),{queryKey:[o.Qn,n,e],enabled:!!n,staleTime:3e5,meta:{noToast:!0}});return{isLoading:u,modelConfig:!l&&i||s}},l=()=>{let{config:e}=(0,i.useConfig)("claude_ai_models"),t=e.get("models",[]),n=t.filter(e=>!e.inactive);return{allModelOptions:t,activeModelOptions:n}}},78429:function(e,t,n){n.d(t,{b:function(){return c},w:function(){return d}});var r=n(28505),a=n(84983),o=n(19073),i=n.n(o),s=n(54603),u=n(7653),l=n(94354);let c=()=>{let e="new-conversation-params-for-navigation",t=(0,a.useQueryClient)(),n=(0,u.useCallback)(()=>{let t=localStorage.getItem(e);if(!t)return{};try{let e=JSON.parse(t);return i()(e,e=>Date.now()-e.created_at<6e4)}catch(t){localStorage.removeItem(e)}return{}},[]);return{prepareNewConversation:(0,u.useCallback)((r,a)=>{let o={created_at:Date.now(),...a};t.setQueryData([e,r],o);let i=n();i[r]=o;try{localStorage.setItem(e,JSON.stringify(i))}catch(e){}},[t,n]),getCreateParamsForConvo:(0,u.useCallback)(r=>{let a=n(),o=t.getQueryData([e,r])||a[r];t.removeQueries([e,r]);let s=i()(a,(e,t)=>t!==r);return localStorage.setItem(e,JSON.stringify(s)),o},[t,n])}},d=()=>{let{mutateAsync:e}=(0,l.$Y)(),[t,n]=(0,u.useReducer)(r.H,"",r.H),{prepareNewConversation:a}=c(),o=(0,s.useRouter)();return(0,u.useCallback)(async r=>{let{model:i,project_uuid:s}=r,u=e({uuid:t,name:"",model:i,project_uuid:s});a(t,r),await u,o.push("/chat/".concat(t)),n()},[e,t,o,a])}},10075:function(e,t,n){n.d(t,{M:function(){return u}});var r=n(87050),a=n(2645),o=n(7653),i=n(11925),s=n(27809);let u=()=>{let e="sticky-model-selector",{value:t}=(0,r.F)("sticky_model_selector"),{value:n}=(0,r.F)("model_selector_enabled"),{activeModelOptions:u}=(0,s.u)(),l=(0,i.wN)(null),c=(0,a.useQuery)([e],()=>{if(!t||!n)return null;let r=localStorage.getItem(e);return r===l?null:r&&u.find(e=>e.model===r)?r:null},{initialData:null}),d=(0,o.useCallback)(t=>{t&&localStorage.setItem(e,t),c.refetch()},[c]);return{stickyModelPreference:c.data,setStickyModelPreference:d}}},27113:function(e,t,n){n.d(t,{I:function(){return l},n:function(){return u}});var r=n(83041),a=n(16096),o=n(35146),i=n(84983),s=n(7653);let u=()=>{let e=(0,i.useQueryClient)();return(0,s.useCallback)((t,n,r)=>{"within_limit"!==t.type&&t.perModelLimit&&(t.conversationUUID=r),e.setQueryData([o.aY],e=>e?{...e,messageLimits:{...e.messageLimits,[n]:t}}:e)},[e])},l=e=>{let{activeOrganization:t}=(0,a.useCurrentAccount)(),n=null==t?void 0:t.uuid,o=u(),i={type:"within_limit"};return(0,r.uC)(()=>"/api/organizations/".concat(n,"/reset_rate_limits"),"POST",{onSuccess:()=>{o(i,n,e||"")},meta:{noToast:!0}})}},75763:function(e,t,n){n.d(t,{p:function(){return l}});var r=n(16096),a=n(35146),o=n(84983),i=n(7653),s=n(50504),u=n(27113);let l=()=>{let e=(0,o.useQueryClient)(),{activeOrganization:t}=(0,r.useCurrentAccount)(),n=null==t?void 0:t.uuid,l=(0,i.useRef)(),c=(0,u.n)(),d=(0,i.useCallback)(async(t,r)=>{let o=[a.I8,{orgUUID:n},{uuid:t}],i=e.getQueryData(o);if(!i)throw Error("Conversation tree must be provided for append");let s=r(i);l.current=s,await e.cancelQueries(o),e.setQueryData(o,l.current)},[e,n]),f=(0,i.useCallback)((t,r)=>{""!==r&&e.setQueryData([a.I8,{orgUUID:n},{uuid:t}],()=>{let e=l.current;if(!e)throw Error("Conversation tree must be provided for incremental completion");if(!e.current_leaf_message_uuid)throw Error("Couldn't figure out where to put completion");let t=e.messageByUuid.get(e.current_leaf_message_uuid);if(!t)throw Error("New assistant message not found");return t.text+=r,{...e,created_at:new Date().toISOString()}})},[e,n]);return{onStartAppend:d,onStreamCompleted:(0,i.useCallback)(async(t,r)=>{let o=[a.I8,{orgUUID:n},{uuid:t}];l.current=void 0,r?(e.setQueryData([a.tv,{orgUUID:n}],e=>{if(!e)return;let n=e.find(e=>e.uuid===t);return n?[{...n,updated_at:new Date().toISOString()},...e.filter(e=>e.uuid!==t)]:e}),await e.invalidateQueries(o)):e.invalidateQueries(o);let i=null==r?void 0:r.messageLimit;i&&n&&c(i,n,t)},[e,c,n]),onIncrementalCompletion:f,changeDisplayedConversationPath:(0,i.useCallback)((t,r,o,i)=>{e.setQueryData([a.I8,{orgUUID:n},{uuid:t}],e=>{if(!e)throw Error("Conversation tree must be provided for changeDisplayedConversationPath");let t=(0,s.mj)(e,r,o);return t.current_leaf_message_uuid&&i&&i(t.current_leaf_message_uuid),t})},[e,n])}}},59374:function(e,t,n){n.r(t),n.d(t,{ErrorsProvider:function(){return i},useToasts:function(){return s}});var r=n(27573),a=n(7653);let o=(0,a.createContext)(void 0);function i(e){let{children:t}=e,n=(0,a.useRef)(1),[i,s]=(0,a.useState)([]),u=(0,a.useCallback)(e=>{let t=n.current++;return s(n=>[...n,{id:t,message:e instanceof Error?e.message:e,toastType:"error"}]),t},[]),l=(0,a.useCallback)(e=>{let t=n.current++;return s(n=>[...n,{id:t,message:e,toastType:"success"}]),t},[]),c=(0,a.useCallback)(e=>{s(t=>t.filter(t=>t.id!==e))},[]),d=(0,a.useMemo)(()=>({toasts:i,addError:u,addSuccess:l,clearToast:c}),[i,u,l,c]);return(0,r.jsx)(o.Provider,{value:d,children:t})}function s(){let e=(0,a.useContext)(o);if(!e)throw Error("Must be called within ErrorsProvider");return e}},92627:function(e,t,n){n.d(t,{Rr:function(){return s}});var r=n(23203),a=n.n(r),o=n(7653);let i=(e,t)=>e===window.localStorage?"LSS-".concat(t):"SSS-".concat(t);function s(e,t){return function(e,t,n){let[r,s]=(0,o.useState)(()=>{if(null===e)return n;try{let r=e.getItem(i(e,t));return r?JSON.parse(r):n}catch(e){return console.log(e),n}}),u=(0,o.useRef)(a()(r=>{if(null!==e)try{if(JSON.stringify(r)===JSON.stringify(n)){e.removeItem(i(e,t));return}e.setItem(i(e,t),JSON.stringify(r))}catch(e){console.log(e)}},250)),l=(0,o.useCallback)(()=>{s(n),setTimeout(()=>{null!==e&&(u.current.cancel(),e.removeItem(i(e,t)))},0)},[s,n,e,t]);return(0,o.useEffect)(()=>{u.current(r)},[r]),[r,s,l]}(window.localStorage,e,t)}}}]);