(()=>{"use strict";var e,t={73:()=>{const e=window.wp.element,t=window.wp.blocks,a=window.wp.i18n,n=window.wp.blockEditor,l=window.wp.components,r=t=>{let{attributes:a,setAttributes:n}=t;const{homeTeam:r,awayTeam:o}=a;return(0,e.createElement)(l.PanelBody,{title:"Block Settings",initialOpen:!1},(0,e.createElement)(l.PanelRow,null,"Teams Information"),(0,e.createElement)(l.TextControl,{label:"Home Team Name",value:r,onChange:e=>{n({homeTeam:e})}}),(0,e.createElement)(l.TextControl,{label:"Away Team Name",value:o,onChange:e=>{n({awayTeam:e})}}))},o=t=>{let{attributes:a,setAttributes:n}=t;const{paragraphCount:r,showInfographicContent:o}=a;return(0,e.createElement)(l.PanelBody,{title:"Content Settings",initialOpen:!1},(0,e.createElement)(l.PanelRow,null,"Content Information"),(0,e.createElement)(l.SelectControl,{label:"How many paragraph for the Biography",options:[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"}],value:r,onChange:e=>{n({paragraphCount:e})},__nextHasNoMarginBottom:!0}),(0,e.createElement)(l.CheckboxControl,{label:"Show Infographic content",checked:o,onChange:e=>{n({showInfographicContent:e})}}))},i=t=>{let{attributes:a,setAttributes:n}=t;const{language:r,showPrediction:o}=a;return(0,e.createElement)(l.PanelBody,{title:"Extra Settings",initialOpen:!1},(0,e.createElement)(l.PanelRow,null,"Extra Information"),(0,e.createElement)(l.CheckboxControl,{label:"Show the prediction",checked:o,onChange:e=>{n({showPrediction:e})}}),(0,e.createElement)(l.SelectControl,{label:"Content language",options:[{label:"English",value:"English"},{label:"Danish",value:"Danish"},{label:"French",value:"French"},{label:"Greek",value:"Greek"},{label:"Italian",value:"Italian"},{label:"Farsi",value:"Farsi"},{label:"Serbian",value:"Serbian"}],value:r,onChange:e=>{n({language:e})},__nextHasNoMarginBottom:!0}))},c=t=>(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(l.Panel,null,(0,e.createElement)(r,t)),(0,e.createElement)(l.Panel,null,(0,e.createElement)(o,t)),(0,e.createElement)(l.Panel,null,(0,e.createElement)(i,t))),h=t=>{let{attributes:a}=t;const{language:n,homeTeam:l,awayTeam:r,paragraphCount:o,showInfographicContent:i,showPrediction:c}=a;let h=`Write a biography in ${n} about `;return h+=l||"",h+=l&&r?" and ":"",h+=r||"",h+=` in ${o} paragraphs`,h+=l&&r?" separately":"",h+=i?" with infography about the teams.":".",h+=l&&r&&c?" At the end, what is the result's prediction in a match between these teams.":"",l||r?(0,e.createElement)(e.Fragment,null,(0,e.createElement)("h3",null,"We will ask this from the ChatGPT:"),(0,e.createElement)("blockquote",null,(0,e.createElement)("p",null,h))):""},s=JSON.parse('{"u2":"bc-blocks/ai-team-bio"}');(0,t.registerBlockType)(s.u2,{icon:{src:(0,e.createElement)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M16,13H8a3,3,0,0,1-3-3V6A3,3,0,0,1,8,3h8a3,3,0,0,1,3,3v4A3,3,0,0,1,16,13ZM8,5A1,1,0,0,0,7,6v4a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1Z"}),(0,e.createElement)("path",{d:"M10,9a1.05,1.05,0,0,1-.71-.29A1,1,0,0,1,10.19,7a.6.6,0,0,1,.19.06.56.56,0,0,1,.17.09l.16.12A1,1,0,0,1,10,9Z"}),(0,e.createElement)("path",{d:"M14,9a1,1,0,0,1-.71-1.71,1,1,0,0,1,1.42,1.42,1,1,0,0,1-.16.12.56.56,0,0,1-.17.09.6.6,0,0,1-.19.06Z"}),(0,e.createElement)("path",{d:"M12,4a1,1,0,0,1-1-1V2a1,1,0,0,1,2,0V3A1,1,0,0,1,12,4Z"}),(0,e.createElement)("path",{d:"M9,22a1,1,0,0,1-1-1V18a1,1,0,0,1,2,0v3A1,1,0,0,1,9,22Z"}),(0,e.createElement)("path",{d:"M15,22a1,1,0,0,1-1-1V18a1,1,0,0,1,2,0v3A1,1,0,0,1,15,22Z"}),(0,e.createElement)("path",{d:"M15,19H9a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v6A1,1,0,0,1,15,19Zm-5-2h4V13H10Z"}),(0,e.createElement)("path",{d:"M5,17a1,1,0,0,1-.89-.55,1,1,0,0,1,.44-1.34l4-2a1,1,0,1,1,.9,1.78l-4,2A.93.93,0,0,1,5,17Z"}),(0,e.createElement)("path",{d:"M19,17a.93.93,0,0,1-.45-.11l-4-2a1,1,0,1,1,.9-1.78l4,2a1,1,0,0,1,.44,1.34A1,1,0,0,1,19,17Z"})),background:"#00a767",foreground:"#fff"},edit:function(t){return(0,e.createElement)("div",(0,n.useBlockProps)(),(0,e.createElement)(c,t),(0,e.createElement)("p",null,(0,a.__)("AI Team Bio – set the parameters on sidebar!","ai-team-bio")),(0,e.createElement)(h,t))},save:function(){return(0,e.createElement)("p",n.useBlockProps.save(),"AI Team Bio – hello from the saved content!")}})}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,a,l,r)=>{if(!a){var o=1/0;for(s=0;s<e.length;s++){for(var[a,l,r]=e[s],i=!0,c=0;c<a.length;c++)(!1&r||o>=r)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(i=!1,r<o&&(o=r));if(i){e.splice(s--,1);var h=l();void 0!==h&&(t=h)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[a,l,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var l,r,[o,i,c]=a,h=0;if(o.some((t=>0!==e[t]))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(c)var s=c(n)}for(t&&t(a);h<o.length;h++)r=o[h],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(s)},a=globalThis.webpackChunkai_team_bio=globalThis.webpackChunkai_team_bio||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=n.O(void 0,[431],(()=>n(73)));l=n.O(l)})();