"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[87986],{3905:function(a,e,t){t.d(e,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function l(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,n,l=function(a,e){if(null==a)return{};var t,n,l={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(l[t]=a[t]);return l}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(l[t]=a[t])}return l}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},c=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},u={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(a,e){var t=a.components,l=a.mdxType,r=a.originalType,o=a.parentName,c=s(a,["components","mdxType","originalType","parentName"]),m=i(t),d=l,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||r;return t?n.createElement(k,p(p({ref:e},c),{},{components:t})):n.createElement(k,p({ref:e},c))}));function d(a,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof a||l){var r=t.length,p=new Array(r);p[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=a,s.mdxType="string"==typeof a?a:l,p[1]=s;for(var i=2;i<r;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(a,e,t){t.d(e,{Z:function(){return l}});var n=t(67294);function l(a){var e=a.children,t=a.hidden,l=a.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:l},e)}},9877:function(a,e,t){t.d(e,{Z:function(){return c}});var n=t(87462),l=t(67294),r=t(72389),p=t(22662),s=t(86010),o="tabItem_LplD";function i(a){var e,t,r,i=a.lazy,c=a.block,u=a.defaultValue,m=a.values,d=a.groupId,k=a.className,g=l.Children.map(a.children,(function(a){if((0,l.isValidElement)(a)&&void 0!==a.props.value)return a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof a.type?a.type:a.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:g.map((function(a){var e=a.props;return{value:e.value,label:e.label,attributes:e.attributes}})),h=(0,p.lx)(f,(function(a,e){return a.value===e.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(a){return a.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(e=null!=u?u:null==(t=g.find((function(a){return a.props.default})))?void 0:t.props.value)?e:null==(r=g[0])?void 0:r.props.value;if(null!==v&&!f.some((function(a){return a.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(a){return a.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,p.UB)(),b=y.tabGroupChoices,N=y.setTabGroupChoices,T=(0,l.useState)(v),A=T[0],P=T[1],w=[],S=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=b[d];null!=x&&x!==A&&f.some((function(a){return a.value===x}))&&P(x)}var E=function(a){var e=a.currentTarget,t=w.indexOf(e),n=f[t].value;n!==A&&(S(e),P(n),null!=d&&N(d,n))},I=function(a){var e,t=null;switch(a.key){case"ArrowRight":var n=w.indexOf(a.currentTarget)+1;t=w[n]||w[0];break;case"ArrowLeft":var l=w.indexOf(a.currentTarget)-1;t=w[l]||w[w.length-1]}null==(e=t)||e.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},k)},f.map((function(a){var e=a.value,t=a.label,r=a.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===e?0:-1,"aria-selected":A===e,key:e,ref:function(a){return w.push(a)},onKeyDown:I,onFocus:E,onClick:E},r,{className:(0,s.Z)("tabs__item",o,null==r?void 0:r.className,{"tabs__item--active":A===e})}),null!=t?t:e)}))),i?(0,l.cloneElement)(g.filter((function(a){return a.props.value===A}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},g.map((function(a,e){return(0,l.cloneElement)(a,{key:e,hidden:a.props.value!==A})}))))}function c(a){var e=(0,r.Z)();return l.createElement(i,(0,n.Z)({key:String(e)},a))}},66947:function(a,e,t){t.r(e),t.d(e,{assets:function(){return m},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var n=t(87462),l=t(63366),r=(t(67294),t(3905)),p=t(9877),s=t(58215),o=["components"],i={id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages"},c=void 0,u={unversionedId:"admin-api-packages",id:"admin-api-packages",title:"Manage packages",description:"Important",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/admin-api-packages.md",sourceDirName:".",slug:"/admin-api-packages",permalink:"/zh-TW/docs/next/admin-api-packages",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/admin-api-packages.md",tags:[],version:"current",frontMatter:{id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages"},sidebar:"docsSidebar",previous:{title:"Functions",permalink:"/zh-TW/docs/next/admin-api-functions"},next:{title:"Kafka client wrapper",permalink:"/zh-TW/docs/next/adaptors-kafka"}},m={},d=[{value:"What is a package?",id:"what-is-a-package",level:2},{value:"How to use a package",id:"how-to-use-a-package",level:2},{value:"Package management in Pulsar",id:"package-management-in-pulsar",level:2},{value:"Upload a package",id:"upload-a-package",level:3},{value:"Download a package",id:"download-a-package",level:3},{value:"Delete a package",id:"delete-a-package",level:3},{value:"Get the metadata of a package",id:"get-the-metadata-of-a-package",level:3},{value:"Update the metadata of a package",id:"update-the-metadata-of-a-package",level:3},{value:"List all versions of a package",id:"list-all-versions-of-a-package",level:3},{value:"List all packages of a specific type under a namespace",id:"list-all-packages-of-a-specific-type-under-a-namespace",level:3}],k={toc:d};function g(a){var e=a.components,t=(0,l.Z)(a,o);return(0,r.kt)("wrapper",(0,n.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important")),(0,r.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,r.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/"},"Java admin API doc"),".")))),(0,r.kt)("p",null,"Package managers or package-management systems automatically manage packages in a consistent manner. These tools simplify the installation tasks, upgrade process, and deletion operations for users. A package is a minimal unit that a package manager deals with. In Pulsar, packages are organized at the tenant- and namespace-level to manage Pulsar Functions and Pulsar IO connectors (i.e., source and sink)."),(0,r.kt)("h2",{id:"what-is-a-package"},"What is a package?"),(0,r.kt)("p",null,"A package is a set of elements that the user would like to reuse in later operations. In Pulsar, a package can be a group of functions, sources, and sinks. You can define a package according to your needs."),(0,r.kt)("p",null,"The package management system in Pulsar stores the data and metadata of each package (as shown in the table below) and tracks the package versions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metadata"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"The description of the package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contact"),(0,r.kt)("td",{parentName:"tr",align:null},"The contact information of a package. For example, an email address of the developer team.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create_time"),(0,r.kt)("td",{parentName:"tr",align:null},"The time when the package is created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modification_time"),(0,r.kt)("td",{parentName:"tr",align:null},"The time when the package is lastly modified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties"),(0,r.kt)("td",{parentName:"tr",align:null},"A user-defined key/value map to store other information.")))),(0,r.kt)("h2",{id:"how-to-use-a-package"},"How to use a package"),(0,r.kt)("p",null,"Packages can efficiently use the same set of functions and IO connectors. For example, you can use the same function, source, and sink in multiple namespaces. The main steps are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a package in the package manager by providing the following information: type, tenant, namespace, package name, and version."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify one of the supported package types: function, sink and source.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tenant"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the tenant where you want to create the package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the namespace where you want to create the package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the complete name of the package, using the format ",(0,r.kt)("inlineCode",{parentName:"td"},"<tenant>/<namespace>/<package name>"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the version of the package using the format ",(0,r.kt)("inlineCode",{parentName:"td"},"MajorVerion.MinorVersion")," in numerals.")))),(0,r.kt)("p",{parentName:"li"},"The information you provide creates a URL for a package, in the format ",(0,r.kt)("inlineCode",{parentName:"p"},"<type>://<tenant>/<namespace>/<package name>/<version>"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upload the elements to the package, i.e., the functions, sources, and sinks that you want to use across namespaces.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Apply permissions to this package from various namespaces."))),(0,r.kt)("p",null,"Now, you can use the elements you defined in the package by calling this package from within the package manager. The package manager locates it by the URL. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nsink://public/default/mysql-sink@1.0\nfunction://my-tenant/my-ns/my-function@0.1\nsource://my-tenant/my-ns/mysql-cdc-source@2.3\n\n")),(0,r.kt)("h2",{id:"package-management-in-pulsar"},"Package management in Pulsar"),(0,r.kt)("p",null,"You can use the command line tools, REST API, or the Java client to manage your package resources in Pulsar. More specifically, you can use these tools to ",(0,r.kt)("a",{parentName:"p",href:"#upload-a-package"},"upload"),", ",(0,r.kt)("a",{parentName:"p",href:"#download-a-package"},"download"),", and ",(0,r.kt)("a",{parentName:"p",href:"#delete-a-package"},"delete")," a package, ",(0,r.kt)("a",{parentName:"p",href:"#get-the-metadata-of-a-package"},"get the metadata")," and ",(0,r.kt)("a",{parentName:"p",href:"#update-the-metadata-of-a-package"},"update the metadata")," of a package, ",(0,r.kt)("a",{parentName:"p",href:"#list-all-versions-of-a-package"},"get the versions")," of a package, and ",(0,r.kt)("a",{parentName:"p",href:"#list-all-packages-of-a-specific-type-under-a-namespace"},"get all packages of a specific type under a namespace"),"."),(0,r.kt)("p",null,"To use package management service, ensure that the package management service has been enabled in your cluster by setting the following properties in ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Package management service is not enabled by default.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\nenablePackagesManagement=true\npackagesManagementStorageProvider=org.apache.pulsar.packages.management.storage.bookkeeper.BookKeeperPackagesStorageProvider\npackagesReplicas=1\npackagesManagementLedgerRootPath=/ledgers\n\n")),(0,r.kt)("h3",{id:"upload-a-package"},"Upload a package"),(0,r.kt)("p",null,"You can use the following commands to upload a package."),(0,r.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages upload function://public/default/example@v0.1 --path package-file --description package-description\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v3/packages/:type/:tenant/:namespace/:packageName/:versionversion=master&apiVersion=v3"},"POST /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("p",null,"Upload a package to the package management service synchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n  void upload(PackageMetadata metadata, String packageName, String path) throws PulsarAdminException;\n\n")),(0,r.kt)("p",null,"Upload a package to the package management service asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<Void> uploadAsync(PackageMetadata metadata, String packageName, String path);\n\n")))),(0,r.kt)("h3",{id:"download-a-package"},"Download a package"),(0,r.kt)("p",null,"You can use the following commands to download a package."),(0,r.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages download function://public/default/example@v0.1 --path package-file\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v3/packages/:type/:tenant/:namespace/:packageName/:versionversion=master&apiVersion=v3"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("p",null,"Download a package from the package management service synchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n  void download(String packageName, String path) throws PulsarAdminException;\n\n")),(0,r.kt)("p",null,"Download a package from the package management service asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<Void> downloadAsync(String packageName, String path);\n\n")))),(0,r.kt)("h3",{id:"delete-a-package"},"Delete a package"),(0,r.kt)("p",null,"You can use the following commands to delete a package."),(0,r.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"The following command deletes a package of version 0.1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages delete functions://public/default/example@v0.1\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v3/packages/:type/:tenant/:namespace/:packageName/:versionversion=master&apiVersion=v3"},"DELETE /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("p",null,"Delete a specified package synchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n  void delete(String packageName) throws PulsarAdminException;\n\n")),(0,r.kt)("p",null,"Delete a specified package asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<Void> deleteAsync(String packageName);\n\n")))),(0,r.kt)("h3",{id:"get-the-metadata-of-a-package"},"Get the metadata of a package"),(0,r.kt)("p",null,"You can use the following commands to get the metadate of a package."),(0,r.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages get-metadata function://public/default/test@v1\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadataversion=master&apiVersion=v3"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("p",null,"Get the metadata of a package synchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n  PackageMetadata getMetadata(String packageName) throws PulsarAdminException;\n\n")),(0,r.kt)("p",null,"Get the metadata of a package asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<PackageMetadata> getMetadataAsync(String packageName);\n\n")))),(0,r.kt)("h3",{id:"update-the-metadata-of-a-package"},"Update the metadata of a package"),(0,r.kt)("p",null,"You can use the following commands to update the metadata of a package."),(0,r.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages update-metadata function://public/default/example@v0.1 --description update-description\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadataversion=master&apiVersion=v3"},"PUT /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("p",null,"Update the metadata of a package synchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n  void updateMetadata(String packageName, PackageMetadata metadata) throws PulsarAdminException;\n\n")),(0,r.kt)("p",null,"Update the metadata of a package asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<Void> updateMetadataAsync(String packageName, PackageMetadata metadata);\n\n")))),(0,r.kt)("h3",{id:"list-all-versions-of-a-package"},"List all versions of a package"),(0,r.kt)("p",null,"You can use the following commands to list all versions of a package."),(0,r.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages list-versions type://tenant/namespace/packageName\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v3/packages/:type/:tenant/:namespace/:packageNameversion=master&apiVersion=v3"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("p",null,"List all versions of a package synchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n  List<String> listPackageVersions(String packageName) throws PulsarAdminException;\n\n")),(0,r.kt)("p",null,"List all versions of a package asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<List<String>> listPackageVersionsAsync(String packageName);\n\n")))),(0,r.kt)("h3",{id:"list-all-packages-of-a-specific-type-under-a-namespace"},"List all packages of a specific type under a namespace"),(0,r.kt)("p",null,"You can use the following commands to list all packages of a specific type under a namespace."),(0,r.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages list --type function public/default\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v3/packages/:type/:tenant/:namespaceversion=master&apiVersion=v3"},"PUT /admin/v3/packages/:type/:tenant/:namespace"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("p",null,"List all packages of a specific type under a namespace synchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n  List<String> listPackages(String type, String namespace) throws PulsarAdminException;\n\n")),(0,r.kt)("p",null,"List all packages of a specific type under a namespace asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<List<String>> listPackagesAsync(String type, String namespace);\n\n")))))}g.isMDXComponent=!0}}]);