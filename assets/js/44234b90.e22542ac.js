"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[7012],{5532:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>v,frontMatter:()=>u,metadata:()=>g,toc:()=>j});var t=a(5893),s=a(1151),r=a(4298),l=a(1230),i=a(2361),o=a(5130),d=a(9992),c=a(8139),h=a(460);const u={sidebar_label:"Upgrade",title:""},m="Upgrade",g={id:"upgrade",title:"",description:"All components in Elemental are managed using Kubernetes. Below is how",source:"@site/docs/upgrade.md",sourceDirName:".",slug:"/upgrade",permalink:"/next/upgrade",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Upgrade",title:""},sidebar:"docs",previous:{title:"Installation",permalink:"/next/installation"},next:{title:"Customize Elemental Install",permalink:"/next/customizing"}},p={},j=[{value:"Elemental Teal node upgrade",id:"elemental-teal-node-upgrade",level:2},{value:"Upgrade via command line interface",id:"upgrade-via-command-line-interface",level:2},{value:"Selecting source for upgrade",id:"selecting-source-for-upgrade",level:3},{value:"Managing available versions",id:"managing-available-versions",level:3},{value:"Upgrade via user interface",id:"upgrade-via-user-interface",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{CodeBlock:u,TabItem:m,Tabs:g,Vars:p}=n;return u||b("CodeBlock",!0),m||b("TabItem",!0),g||b("Tabs",!0),p||b("Vars",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"upgrade",children:"Upgrade"}),"\n",(0,t.jsx)(n.p,{children:"All components in Elemental are managed using Kubernetes. Below is how\nto use Kubernetes approaches to upgrade the components."}),"\n",(0,t.jsx)(n.h2,{id:"elemental-teal-node-upgrade",children:"Elemental Teal node upgrade"}),"\n",(0,t.jsxs)(n.p,{children:["Elemental Teal is upgraded with the ",(0,t.jsx)(p,{name:"elemental_operator_name"}),". Refer to the\n",(0,t.jsx)(n.a,{href:"/next/elementaloperatorchart-reference",children:(0,t.jsx)(p,{name:"elemental_operator_name"})})," documentation for complete information."]}),"\n",(0,t.jsx)(n.p,{children:"Upgrade can be achieve either with CLI or UI:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#upgrade-via-command-line-interface",children:"Command Line Interface"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#upgrade-via-user-interface",children:"User Interface"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"upgrade-via-command-line-interface",children:"Upgrade via command line interface"}),"\n",(0,t.jsx)(n.p,{children:"There are two ways of selecting nodes for upgrading. Via a cluster target, which will match ALL nodes in a cluster that matches our\nselector or via node selector, which will match nodes based on the node labels. Node selector allows us to be more targeted with the upgrade\nwhile cluster selector just selects all the nodes in a matched cluster."}),"\n",(0,t.jsxs)(g,{children:[(0,t.jsxs)(m,{value:"clusterTarget",label:"With 'clusterTarget'",default:!0,children:[(0,t.jsxs)(n.p,{children:["You can target nodes for an upgrade via a ",(0,t.jsx)(n.code,{children:"clusterTarget"})," by setting it to the cluster name that you want to upgrade.\nAll nodes in a cluster that matches that name will match and be upgraded."]}),(0,t.jsx)(u,{language:"yaml",title:"upgrade-cluster-target.yaml",showLineNumbers:!0,children:r.Z})]}),(0,t.jsxs)(m,{value:"nodeSelector",label:"With nodeSelector",children:[(0,t.jsxs)(n.p,{children:["You can target nodes for an upgrade via a ",(0,t.jsx)(n.code,{children:"nodeSelector"})," by setting it to the label and value that you want to match.\nAny nodes containing that key with the value will match and be upgraded."]}),(0,t.jsx)(u,{language:"yaml",title:"upgrade-node-selector.yaml",showLineNumbers:!0,children:l.Z})]}),(0,t.jsxs)(m,{value:"forceUpgrade",label:"With FORCE flag",children:[(0,t.jsx)(n.p,{children:"When upgrading to an older version or the same version that is already running the upgrade-procedure will be skipped."}),(0,t.jsx)(n.p,{children:"It is possible to force upgrades to older versions by setting the FORCE environment variable as shown below."}),(0,t.jsx)(u,{language:"yaml",title:"upgrade-force.yaml",showLineNumbers:!0,children:i.Z})]})]}),"\n",(0,t.jsx)(n.h3,{id:"selecting-source-for-upgrade",children:"Selecting source for upgrade"}),"\n",(0,t.jsxs)(g,{children:[(0,t.jsxs)(m,{value:"osImage",label:"Via 'osImage'",children:[(0,t.jsxs)(n.p,{children:["Just specify an OCI image on the ",(0,t.jsx)(n.code,{children:"osImage"})," field"]}),(0,t.jsx)(u,{language:"yaml",title:"upgrade-cluster-target.yaml",showLineNumbers:!0,children:r.Z})]}),(0,t.jsxs)(m,{value:"managedOSVersion",label:"Via 'ManagedOSVersion'",children:[(0,t.jsxs)(n.p,{children:["In this case we use the auto populated ",(0,t.jsx)(n.code,{children:"ManagedOSVersion"})," resources to set the wanted ",(0,t.jsx)(n.code,{children:"managedOSVersionName"})," field.\nSee section ",(0,t.jsx)(n.a,{href:"#managing-available-versions",children:"Managing available versions"})," to understand how the ",(0,t.jsx)(n.code,{children:"ManagedOSVersion"})," are managed."]}),(0,t.jsx)(u,{language:"yaml",title:"upgrade-managedos-version.yaml",showLineNumbers:!0,children:o.Z})]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Warning",type:"warning",children:(0,t.jsxs)(n.p,{children:["If both ",(0,t.jsx)(n.code,{children:"osImage"})," and ",(0,t.jsx)(n.code,{children:"ManagedOSVersion"})," are defined in the same ",(0,t.jsx)(n.code,{children:"ManagedOSImage"})," be aware that ",(0,t.jsx)(n.code,{children:"osImage"})," takes precedence."]})}),"\n",(0,t.jsx)(n.h3,{id:"managing-available-versions",children:"Managing available versions"}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.code,{children:"ManagedOSVersionChannel"})," resource can be created in a Kubernetes cluster where the Elemental operator is installed to synchronize available versions for upgrades."]}),"\n",(0,t.jsxs)(n.p,{children:["It has a syncer in order to generate ",(0,t.jsx)(n.code,{children:"ManagedOSVersion"})," automatically. Currently, we provide a json syncer and a custom one."]}),"\n",(0,t.jsxs)(g,{children:[(0,t.jsxs)(m,{value:"jsonSyncer",label:"Json syncer",children:[(0,t.jsxs)(n.p,{children:["This syncer will fetch a json from url and parse it into valid ",(0,t.jsx)(n.code,{children:"ManagedOSVersion"})," resources."]}),(0,t.jsx)(u,{language:"yaml",title:"managed-os-version-json",showLineNumbers:!0,children:d.Z})]}),(0,t.jsxs)(m,{value:"customSyncer",label:"Custom syncer",children:[(0,t.jsxs)(n.p,{children:["A custom syncer allows more flexibility on how to gather ",(0,t.jsx)(n.code,{children:"ManagedOSVersion"})," by allowing custom commands with custom images."]}),(0,t.jsxs)(n.p,{children:["This type of syncer allows to run a given command with arguments and env vars in a custom image and output a json file to ",(0,t.jsx)(n.code,{children:"/data/output"}),".\nThe generated data is then automounted by the syncer and then parsed so it can gather create the proper versions."]}),(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The only requirement to make your own custom syncer is to make it output a json file to ",(0,t.jsx)(n.code,{children:"/data/output"})," and keep the correct json structure."]})}),(0,t.jsxs)(n.p,{children:["Elemental project provides an Elemental Teal channel to list all ",(0,t.jsx)(n.code,{children:"ManagedOSVersions"})," released as a custom syncer.\nSee the Elemental Teal channel resource definition below:"]}),(0,t.jsx)(u,{language:"yaml",title:"managed-os-version-channel-json.yaml",showLineNumbers:!0,children:c.Z})]})]}),"\n",(0,t.jsx)(n.p,{children:"In both cases the file that the operator expects to parse is a json file with the versions on it as follows"}),"\n",(0,t.jsx)(u,{language:"json",title:"versions.json",showLineNumbers:!0,children:h.Z}),"\n",(0,t.jsx)(n.h2,{id:"upgrade-via-user-interface",children:"Upgrade via user interface"}),"\n",(0,t.jsxs)(n.p,{children:["To upgrade via the UI, you have to go in the Elemental Advanced menu, then click on ",(0,t.jsx)(n.code,{children:"Update Groups"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Choose a name, select clusters to target and choose between the two upgrade ways:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Elemental Upgrade Menu",src:a(8041).Z+"",width:"901",height:"745"})}),"\n",(0,t.jsxs)(g,{children:[(0,t.jsxs)(m,{value:"managedOSVersion",label:"Via Managed OS Version",children:[(0,t.jsxs)(n.p,{children:["In this case, a ",(0,t.jsx)(n.code,{children:"OS Version Channels"})," is used to auto populated ",(0,t.jsx)(n.code,{children:"OS Versions"})," resources."]}),(0,t.jsx)(n.p,{children:"The channel bellow is provide by us but you can bring your own channel as well."}),(0,t.jsxs)(n.p,{children:["See section ",(0,t.jsx)(n.a,{href:"#managing-available-versions",children:"Managing available versions"})," to understand how the ",(0,t.jsx)(n.code,{children:"ManagedOSVersion"})," are managed."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Create OS Version Channel",src:a(188).Z+"",width:"792",height:"535"})}),(0,t.jsxs)(n.p,{children:["After a short syncing time, you will see your ",(0,t.jsx)(n.code,{children:"OS Versions"})," appears in the ",(0,t.jsx)(n.code,{children:"OS Versions"})," menu."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Elemental OS Version menu",src:a(4830).Z+"",width:"993",height:"438"})}),(0,t.jsxs)(n.p,{children:["Finally, you can select the ",(0,t.jsx)(n.code,{children:"OS Versions"})," when you create your ",(0,t.jsx)(n.code,{children:"Upgrade Group"})," according to the following screenshot:"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Select OS Version in Upgrade Group",src:a(3908).Z+"",width:"788",height:"802"})})]}),(0,t.jsxs)(m,{value:"imageFromRegistry",label:"Via Image from registry",children:[(0,t.jsxs)(n.p,{children:["Just specify an OCI image on the ",(0,t.jsx)(n.code,{children:"Image path"})," field to upgrade to:"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Upgrade via Image Registry",src:a(5156).Z+"",width:"765",height:"557"})})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Click on the ",(0,t.jsx)(n.code,{children:"Create"})," button to start the upgrade process, if you have multiple nodes, the upgrade will be done sequentially node by node."]})]})}function v(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}function b(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8139:(e,n,a)=>{a.d(n,{Z:()=>t});const t="apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSVersionChannel\nmetadata:\n  name: elemental-teal-channel\n  namespace: fleet-default\nspec:\n  options:\n    image: registry.suse.com/rancher/elemental-teal-channel/5.3:latest\n  type: custom\n"},9992:(e,n,a)=>{a.d(n,{Z:()=>t});const t='apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSVersionChannel\nmetadata:\n  name: elemental-versions\n  namespace: fleet-default\nspec:\n  options:\n    URI: "https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/upgrade/versions.json"\n    Timeout: "1m"\n  type: json'},4298:(e,n,a)=>{a.d(n,{Z:()=>t});const t='apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSImage\nmetadata:\n  name: my-upgrade\n  namespace: fleet-default\nspec:\n  # Set to the new Elemental version you would like to upgrade to or track the latest tag\n  osImage: "registry.suse.com/rancher/elemental-teal/5.3:latest"\n  clusterTargets:\n    - clusterName: my-cluster\n'},2361:(e,n,a)=>{a.d(n,{Z:()=>t});const t='apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSImage\nmetadata:\n  name: my-upgrade\n  namespace: fleet-default\nspec:\n  # Set to the new Elemental version you would like to upgrade to\n  osImage: "registry.suse.com/rancher/elemental-teal/5.3:latest"\n  clusterTargets:\n    - clusterName: my-cluster\n  upgradeContainer:\n    envs:\n      - name: FORCE\n        value: "true"\n'},5130:(e,n,a)=>{a.d(n,{Z:()=>t});const t="apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSImage\nmetadata:\n  name:  my-upgrade\n  namespace: fleet-default\nspec:\n  # Set to the new ManagedOSVersion you would like to upgrade to\n  managedOSVersionName: v0.1.0-alpha22-amd64\n  clusterTargets:\n    - clusterName: my-cluster"},1230:(e,n,a)=>{a.d(n,{Z:()=>t});const t='apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSImage\nmetadata:\n  name: my-upgrade\n  namespace: fleet-default\nspec:\n  # Set to the new Elemental version you would like to upgrade to\n  osImage: "registry.suse.com/rancher/elemental-teal/5.3:latest"\n  clusterTargets:\n    - clusterName: my-cluster\n  nodeSelector:\n    matchLabels:\n      kubernetes.io/hostname: my-machine\n'},460:(e,n,a)=>{a.d(n,{Z:()=>t});const t='[\n  {\n    "metadata": {\n      "name": "v0.1.0"\n    },\n    "spec": {\n      "version": "v0.1.0",\n      "type": "container",\n      "metadata": {\n        "upgradeImage": "foo/bar:v0.1.0"\n      }\n    }\n  },\n  {\n    "metadata": {\n      "name": "v0.2.0"\n    },\n    "spec": {\n      "version": "v0.2.0",\n      "type": "container",\n      "metadata": {\n        "upgradeImage": "foo/bar:v0.2.0"\n      }\n    }\n  }\n]'},5156:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/upgrade-ui-image-registry-2f404c81df7747f4d2800ca9899dc657.png"},8041:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/upgrade-ui-menu-93b767af21b0dbe3e2b60d07897488ca.png"},4830:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/upgrade-ui-os-version-0dbbe5e7b5f9a4c0ba6801227541b900.png"},3908:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/upgrade-ui-upgrade-group-channel-6f58b8b4ab7ad99803bd22cdaf983a16.png"},188:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/upgrade-ui-version-channel-8189dd091df520bafb6593f492d511c8.png"},1151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>l});var t=a(7294);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);