import{r as d,j as e,b as j,c as x,i as p,g as u,B as f,D as g,I as y,d as N,n as m,e as v,f as I,h as w,k as C,a as L}from"./index-Mbs-38nN.js";import{S as h}from"./SectionTitle-CgoqL0QE.js";import{F as R}from"./FilterdItemList-DpSj7LWN.js";import{u as b}from"./useQuery-heMLqzqk.js";import{a as D,b as _}from"./apiItems-Q7YbdaSC.js";function A({photos:s}){const a=d.useRef(null),[l,t]=d.useState(0);return d.useEffect(()=>{const r=()=>{const c=a.current.scrollLeft,i=a.current.clientWidth,o=Math.round(c/i);o!==l&&t(o)},n=a.current;return n.addEventListener("scroll",r),()=>{n.removeEventListener("scroll",r)}},[l]),e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{ref:a,className:"no-scrollbar flex h-[20rem] w-[20rem] snap-x snap-mandatory items-center justify-start overflow-x-scroll",children:s.length>0?s.map((r,n)=>e.jsx("img",{className:"mx-2 h-[100%] w-auto min-w-[20rem] snap-center object-contain",src:r,alt:`Photo-${n+1}`},n)):e.jsx("img",{className:"mx-2 h-[100%] w-auto min-w-[20rem] snap-center",src:"https://plwmolwghzszhrgeoeaq.supabase.co/storage/v1/object/public/App%20Photos/noimg.png",alt:"Not Available"})}),e.jsx("div",{className:"mt-10 flex items-center justify-center",children:s&&s.map((r,n)=>e.jsx("p",{className:`m-1 h-2 w-2 rounded-full border border-gray-400 ${l===n?"bg-gray-400":""}`},n))})]})}function P({item:s}){const a=j(),l=x(p(s.id)),t=x(u(s.id));function r(){const o={id:s.id,name:s.name,price:s.price,photos:s.photos,quantity:1,description:s.description};a(N(o)),m.success(`${s.name} Added Cart`)}function n(){a(v(s.id)),m.error(`${s.name} Removed from your Cart`)}function c(){a(I(s.id))}function i(){a(w(s.id))}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mx-2 mt-5 flex flex-col sm:mx-10 md:mx-16 lg:mx-20",children:[e.jsxs("div",{className:"sm:flex",children:[e.jsx("p",{className:"text-3xl font-semibold",children:s.name}),e.jsx("p",{className:`mt-[2px] text-right text-base font-semibold ${s.available?"text-green-400":"text-red-400 line-through"} text-justify sm:ml-4`,children:s.available&&s.quantity?"Available":"Not Available"})]}),e.jsxs("ul",{children:[e.jsxs("li",{className:"mt-4 border-b py-2 text-base font-semibold",children:[e.jsx("span",{className:"mr-2 text-sm font-bold text-gray-600",children:"Description:"}),s.description]}),e.jsxs("li",{className:"mt-1 border-b py-2 text-base font-semibold",children:[e.jsx("span",{className:"mr-2 text-sm font-bold text-gray-600",children:"Category:"}),s.category]}),e.jsxs("li",{className:"mt-1 border-b py-2 text-base font-semibold text-green-400",children:[e.jsx("span",{className:"mr-2 text-sm font-bold text-gray-600",children:"Unit Price:"}),"$",s.price]})]}),!l&&s.available&&e.jsx("div",{className:"mt-9 flex items-center justify-end",children:e.jsx(f,{text:"Add to cart",onClick:r,hoverTextColor:"green"})}),l&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center justify-between sm:flex-col md:flex-row",children:[e.jsxs("div",{className:"mt-9 flex items-center gap-2",children:[e.jsx(g,{onClick:c}),e.jsx("p",{className:"font-bold text-gray-600",children:t}),e.jsx(y,{onClick:i})]}),e.jsx("div",{className:"mt-9 flex items-center justify-end sm:mt-2 md:mt-9",children:e.jsx(f,{text:"Drop Item",onClick:n,hoverTextColor:"red"})})]})})]})})}function k({item:s}){const a=s.related_accessories.length-1,l=s.variants.length-1;return e.jsxs("div",{className:"mx-10 flex flex-col lg:mx-40",children:[e.jsxs("div",{className:"mb-3 flex items-center border-b-2 pb-4",children:[e.jsx("p",{className:"font-semibold text-gray-700",children:"Variant:"}),e.jsx("ul",{className:"ml-5 flex",children:s.variants.map((t,r)=>e.jsxs("li",{className:"mx-2 font-semibold",children:[t,r<l?",":""]},t))})]}),e.jsxs("div",{className:"mb-3 flex items-center border-b-2 pb-4",children:[e.jsx("p",{className:"font-semibold text-gray-700",children:"Related Accessories:"}),e.jsx("ul",{className:"ml-5 flex",children:s.related_accessories.map((t,r)=>e.jsxs("li",{className:"mx-2 font-semibold",children:[t,r<a?",":""]},t))})]}),e.jsxs("div",{className:"mb-3 flex items-center border-b-2 pb-4",children:[e.jsx("p",{className:"font-semibold text-gray-700",children:"Brand Infromation:"}),e.jsx("p",{className:"ml-7 font-semibold",children:s.brand_information})]}),e.jsxs("div",{className:"mb-3 flex items-center border-b-2 pb-4",children:[e.jsx("p",{className:"font-semibold text-gray-700",children:"Delivery Infromation:"}),e.jsx("p",{className:"ml-7 font-semibold",children:s.delivery_information})]}),e.jsxs("div",{className:"mb-3 flex items-center border-b-2 pb-4",children:[e.jsx("p",{className:"font-semibold text-gray-700",children:"Warranty Return:"}),e.jsx("p",{className:"ml-7 font-semibold",children:s.warranty_return_policy})]}),e.jsxs("div",{className:"mb-3 flex items-center border-b-2 pb-4",children:[e.jsx("p",{className:"font-semibold text-gray-700",children:"Average Rating:"}),e.jsxs("p",{className:"ml-7 font-semibold",children:["⭐ ",s.customer_reviews.average_rating]})]}),e.jsxs("div",{className:"mb-3 flex items-center border-b-2 pb-4",children:[e.jsx("p",{className:"font-semibold text-gray-700",children:"Highlighted Review:"}),e.jsxs("p",{className:"ml-7 font-normal italic text-gray-800",children:['"',s.customer_reviews.highlighted_reviews,'"']})]}),e.jsxs("div",{className:"items- mb-3 flex flex-col pb-4",children:[e.jsx("p",{className:"w-[8.3rem] border-b border-gray-400 text-lg font-semibold text-red-700",children:"Specifications"}),e.jsx("ul",{className:"mt-4",children:Array.from(Object.keys(s.specifications)).map(t=>e.jsxs("li",{className:"border-b p-1 pl-8 font-semibold capitalize text-gray-700",children:[t,":",e.jsx("span",{className:"ml-7 font-bold text-black",children:t==="available_sizes"?s.specifications[t].map(r=>r+", "):s.specifications[t]})]},t))})]})]})}function E(){const{nameDescriptionId:s}=C(),a=Number(s.substring(s.lastIndexOf(".")+1)),{isLoading:l,data:t,error:r}=b({queryKey:[`#${a}Item`],queryFn:()=>_(a)});r&&m.error("ERROR: ",r);const{isLoading:n,data:c,error:i}=b({enabled:!!t,queryKey:[t?`${t.category.toLowerCase()}Items`:""],queryFn:()=>D(t.category.toLowerCase())});return i&&m.error("ERROR: ",i),{isLoadingItem:l,isLoadingItemsList:n,detailedItem:t,categoryItems:c}}function F(){const{isLoadingItem:s,isLoadingItemsList:a,detailedItem:l,categoryItems:t}=E();return s||a?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-screen"}),e.jsx(L,{})]}):e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsxs("div",{className:"mx-5 h-[100%] flex-col justify-center pt-40 md:flex md:flex-row md:xl:w-[80%]",children:[e.jsx(A,{photos:l.photos}),e.jsx(P,{item:l})]}),e.jsxs("div",{className:"mx-auto w-[100%] xl:w-[75%]",children:[e.jsx(h,{title:"Item Information",additionalClassName:"sticky ml-5 sm:ml-8 md:ml-11 lg:ml-14 xl:ml-24"}),e.jsx(k,{item:l})]}),e.jsxs("div",{className:"mx-auto w-[100%] xl:w-[75%]",children:[e.jsx(h,{title:`Other ${l.category}`,additionalClassName:"sticky ml-5 sm:ml-8 md:ml-11 lg:ml-14 xl:ml-24 "}),e.jsx(R,{items:t})]})]})}export{F as default};
