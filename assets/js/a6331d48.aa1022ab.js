"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[5993],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||i;return n?o.createElement(u,r(r({ref:t},c),{},{components:n})):o.createElement(u,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39272:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],s={title:"Docker Compose",sidebar_position:3},p=void 0,l={unversionedId:"mini-ossinsight/docker-compose",id:"mini-ossinsight/docker-compose",title:"Docker Compose",description:"There are 2 reasons that we should't start TiDB inside container:",source:"@site/workshop/mini-ossinsight/docker-compose.md",sourceDirName:"mini-ossinsight",slug:"/mini-ossinsight/docker-compose",permalink:"/workshop/mini-ossinsight/docker-compose",editUrl:"https://github.com/pingcap/ossinsight/tree/main/workshop/mini-ossinsight/docker-compose.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Docker Compose",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Step 3: Get Insights with SQL",permalink:"/workshop/mini-ossinsight/step-by-step/get-insights-with-sql"},next:{title:"Twitter Insight",permalink:"/workshop/twitter-insight"}},c=[{value:"0. Install TiDB",id:"0-install-tidb",children:[],level:2},{value:"1. Install Docker Compose",id:"1-install-docker-compose",children:[],level:2},{value:"2. Start mini OSS Insight!",id:"2-start-mini-oss-insight",children:[],level:2},{value:"3. Well Done!",id:"3-well-done",children:[],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are 2 reasons that we should't start TiDB inside container:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Performance loss on disk/network/cpu;"),(0,i.kt)("li",{parentName:"ol"},"Posibility of changing database from TiDB to other like MySQL for comparison.")),(0,i.kt)("h2",{id:"0-install-tidb"},"0. Install TiDB"),(0,i.kt)("p",null,"It's easy to setup a TiDB Cluster in your laptop (Mac or Linux) with the official cli tools: ",(0,i.kt)("a",{parentName:"p",href:"https://tiup.io/"},"tiup"),"(inspired by rustup)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Install tiup\ncurl --proto '=https' --tlsv1.2 -sSf https://tiup-mirrors.pingcap.com/install.sh | sh\n# Install & Start TiDB Server.\ntiup playground -T ossinsight\n")),(0,i.kt)("p",null,"Expected output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CLUSTER START SUCCESSFULLY, Enjoy it ^-^\nTo connect TiDB: mysql --comments --host 127.0.0.1 --port 4000 -u root -p (no password)\nTo view the dashboard: http://127.0.0.1:2379/dashboard\nPD client endpoints: [127.0.0.1:2379]\nTo view the Prometheus: http://127.0.0.1:9090\nTo view the Grafana: http://127.0.0.1:3000\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to use another MySQL compatible database, please change settings in ",(0,i.kt)("inlineCode",{parentName:"p"},"ossinsight/docker-compose.yml"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"...\nservices:\n  data:\n    environment:\n      - DATABASE_URL=tidb://root:@host.docker.internal:4000/gharchive_dev\n...\n  api:\n    environment:\n      - DB_HOST=host.docker.internal\n      - DB_PORT=4000\n      - DB_USER=root\n      - DB_DATABASE=gharchive_dev\n      - DB_PASSWORD=\n...\n")))),(0,i.kt)("h2",{id:"1-install-docker-compose"},"1. Install Docker Compose"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We suppose you have knowledge about Docker/Container/Docker Compose."))),(0,i.kt)("p",null,"If you haven't installed Docker Compose, please install it with this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"doc"),", then verfiy it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose --version\n")),(0,i.kt)("h2",{id:"2-start-mini-oss-insight"},"2. Start mini OSS Insight!"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/workshop/mini-ossinsight/step-by-step/find-data-source#creating-a-personal-access-token"},"Create GitHub personal access token")," first, then clone repo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/pingcap/ossinsight.git;\ncd ossinsight/;\nexport GITHUB_TOKEN=(personal access token);\ndocker-compose pull;\ndocker-compose up;\n")),(0,i.kt)("p",null,"then open another terminal tab to load sample events data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Load about 5 million sample events data\nwget https://github.com/pingcap/ossinsight/releases/download/sample/sample5m.sql.zip;\nunzip sample5m.sql.zip;\nmysql --host 127.0.0.1 --port 4000 -u root -p gharchive_dev < sample5m.sql\n")),(0,i.kt)("p",null,"The importing task would cost about 10 minutes."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"if you want to get different size of data please visit:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pingcap/ossinsight/releases/tag/sample"},"https://github.com/pingcap/ossinsight/releases/tag/sample")))),(0,i.kt)("h2",{id:"3-well-done"},"3. Well Done!"),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3001"},"http://localhost:3001"),";"))}d.isMDXComponent=!0}}]);