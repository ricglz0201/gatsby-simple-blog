(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+pJr":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("9k+R");var n=a("q1tI"),r=a.n(n),l=a("Jz1z");function o(e){var t=e.tags,a=e.baseUrl,n=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["tags","baseUrl"]);return r.a.createElement("ul",Object.assign({className:"tag-ul"},n),t.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(l.a,{text:e,url:a+"/"+e}))})))}o.defaultProps={baseUrl:""};var i=o},"9k+R":function(e,t,a){},TshS:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return f}));var n=a("q1tI"),r=a.n(n),l=a("1q4l"),o=a("Zttt"),i=a("wtQ5"),s=a("mSsX"),c=(a("YbXK"),a("cFtU"),a("Wbzz")),u=(a("iPNO"),function(e){var t=e.currentPage,a=e.totalPageNumber,n=1===t?r.a.createElement("span",{className:"disabled"},"«"):r.a.createElement(c.Link,{to:"/"+(t-1)},"«"),l=t===a?r.a.createElement("span",{className:"disabled"},"»"):r.a.createElement(c.Link,{to:"/"+(t+1)},"»");return r.a.createElement("div",{className:"pagination"},n,Array.from({length:a}).map((function(e,t){return t+1})).map((function(e){return e===t?r.a.createElement("span",{key:"pageNum-"+e,className:"active"},e):r.a.createElement(c.Link,{key:"pageNum-"+e,to:"/"+e},e)})),l)});u.defaultProps={currentPage:1,totalPageNumber:1};var m=u,d=a("eb58"),p=a("efpO");function g(e){var t=e.pageContext,a=e.data,n=e.location,c=t.from,u=t.to,g=t.currentPage,f=t.numPages,b=a.site.siteMetadata.title,y=a.allMarkdownRemark.edges,k=Object(d.b)(),E=k.lang,w=k.homeLink;return r.a.createElement(o.a,{location:n,title:b},r.a.createElement(i.a,{title:Object(p.b)("tIndTitle"),keywords:Object(p.b)("taIndKeywords")}),r.a.createElement("aside",null,r.a.createElement(l.a,null)),r.a.createElement("h4",null,Object(p.b)("tfIndCountPosts",{count:a.allMarkdownRemark.totalCount,from:c,to:u})),y.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return r.a.createElement(s.a,{lang:E,base:w,key:t.fields.slug,slug:t.fields.slug,date:t.frontmatter.date,timeToRead:t.timeToRead,title:a,excerpt:t.frontmatter.description||t.excerpt,tags:t.frontmatter.tags})})),r.a.createElement(m,{currentPage:g,totalPageNumber:f}))}g.defaultProps={};t.default=g;var f="3416249734"},X8nl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Starter Blog","description":"A starter blog demonstrating what Gatsby can do.","author":"Kyle Mathews","lang":"en"}}}}')},iPNO:function(e,t,a){},mSsX:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("p3AD"),i=a("L6NH"),s=a("efpO"),c=a("+pJr");function u(e){var t,a,n=e.slug,u=e.title,m=e.date,d=e.timeToRead,p=e.excerpt,g=e.tags,f=e.base;return p&&(t=r.a.createElement("p",{dangerouslySetInnerHTML:{__html:p}})),g&&(a=r.a.createElement(c.a,{style:{margin:"0.5rem 0 -0.5rem -0.5rem"},tags:g,baseUrl:f+"tags"})),r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(o.a)(1),marginBottom:Object(o.a)(1/4)}},r.a.createElement(l.Link,{style:{boxShadow:"none"},to:n,rel:"bookmark"},u)),a,r.a.createElement("small",null,Object(s.a)(m)+" • "+Object(i.formatReadingTime)(d)),t))}u.defaultProps={title:null,excerpt:null,tags:null,base:""};var m=u},wtQ5:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("X8nl"),r=a("q1tI"),l=a.n(r),o=a("qhky"),i=a("eb58");function s(e){var t=e.description,a=e.meta,r=e.keywords,s=e.title,c=n.data.site,u=Object(i.b)().lang,m=t||c.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:u||c.siteMetadata.lang},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})}s.defaultProps={meta:[],keywords:[],description:""};var c=s}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-5e399cb892cd9c6bd88b.js.map