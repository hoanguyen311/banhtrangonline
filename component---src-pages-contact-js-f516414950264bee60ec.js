(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});var n=a(0),r=a.n(n),i=(a(147),a(158)),s=a(160);t.default=function(e){var t=e.data.markdownRemark.frontmatter,a=t.address,n=t.phone,o=t.email;return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"Page two"}),r.a.createElement("p",null,"Address: ",a," "),r.a.createElement("p",null,"Phone: ",n," "),r.a.createElement("p",null,"Email: ",o," "))};var o="865159144"},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(32),l=a.n(o);a.d(t,"a",function(){return l.a});a(151);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},151:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Bánh tráng nướng 4.0"}}}}},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(54),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},157:function(e){e.exports={name:"banhtrangonline",private:!0,description:"A simple starter to get up and developing quickly with Gatsby",version:"0.1.0",author:"Hoa Nguyen <hoa.nguyen311@gmail.com>",dependencies:{gatsby:"^2.2.1","gatsby-image":"^2.0.34","gatsby-plugin-manifest":"^2.0.24","gatsby-plugin-offline":"^2.0.25","gatsby-plugin-react-helmet":"^3.0.10","gatsby-plugin-sharp":"^2.0.29","gatsby-source-filesystem":"^2.0.27","gatsby-transformer-remark":"^2.3.7","gatsby-transformer-sharp":"^2.1.17","prop-types":"^15.7.2",react:"^16.8.4","react-bootstrap":"^1.0.0-beta.5","react-dom":"^16.8.4","react-helmet":"^5.2.0"},devDependencies:{"gh-pages":"^2.0.1",prettier:"^1.16.4"},keywords:["gatsby"],license:"MIT",scripts:{build:"gatsby build",deploy:"yarn build && gh-pages -d public",develop:"gatsby develop",format:"prettier --write src/**/*.{js,jsx}",start:"npm run develop",serve:"gatsby serve",test:'echo "Write tests! -> https://gatsby.dev/unit-testing"'},repository:{type:"git",url:"https://github.com/gatsbyjs/gatsby-starter-default"},bugs:{url:"https://github.com/gatsbyjs/gatsby/issues"}}},158:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),s=a(4),o=a.n(s),l=a(147),c=a(156),u=a.n(c),p=a(181),d=a(182),m=a(157),g=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"#20232a",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};g.propTypes={siteTitle:o.a.string},g.defaultProps={siteTitle:""};var y=g,b=(a(162),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(u.a,null,i.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",integrity:"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS",crossorigin:"anonymous"})),i.a.createElement(p.a,null,i.a.createElement(d.a,{variant:"pills"},i.a.createElement(d.a.Item,null,i.a.createElement(d.a.Link,{as:l.a,to:"/"},"Home")),i.a.createElement(d.a.Item,null,i.a.createElement(d.a.Link,{as:l.a,to:"/contact"},"Contact"))),i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Build by ",m.author)))},data:n})});b.propTypes={children:o.a.node.isRequired};t.a=b},160:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),s=a(4),o=a.n(s),l=a(156),c=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,l=n.data.site,u=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Bánh tráng nướng 4.0",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-contact-js-f516414950264bee60ec.js.map