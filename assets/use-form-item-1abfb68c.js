import{f as p,a as t}from"./constants-84857360.js";import{u as f}from"./index-d1b6c543.js";import{O as r,s as e,q as I,o as m,U as h,a9 as w,aK as y}from"./index-db3bc910.js";const L=()=>{const v=r(p,void 0),u=r(t,void 0);return{form:v,formItem:u}},j=(v,{formItemContext:u,disableIdGeneration:i,disableIdManagement:s})=>{i||(i=e(!1)),s||(s=e(!1));const a=e();let d;const c=I(()=>{var l;return!!(!(v.label||v.ariaLabel)&&u&&u.inputIds&&((l=u.inputIds)==null?void 0:l.length)<=1)});return m(()=>{d=h([w(v,"id"),i],([l,n])=>{const o=l??(n?void 0:f().value);o!==a.value&&(u!=null&&u.removeInputId&&(a.value&&u.removeInputId(a.value),!(s!=null&&s.value)&&!n&&o&&u.addInputId(o)),a.value=o)},{immediate:!0})}),y(()=>{d&&d(),u!=null&&u.removeInputId&&a.value&&u.removeInputId(a.value)}),{isLabeledByFormItem:c,inputId:a}};export{j as a,L as u};