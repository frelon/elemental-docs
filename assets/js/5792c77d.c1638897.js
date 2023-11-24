"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[7269],{6802:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>h});var a=t(5893),i=t(1151);const l={sidebar_label:"Architecture",title:""},r="Architecture",s={id:"architecture",title:"",description:"The Elemental stack can be divided in two main parts: the Elemental OS, an immutable and customizable OS which comprises the tools and the steps needed to prepare the Cloud Native OS image and perform the actual OS installation on the host, and the , that allows central management of the Elemental OS via Rancher, the Kubernetes way.",source:"@site/versioned_docs/version-1.3/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/architecture",draft:!1,unlisted:!1,tags:[],version:"1.3",frontMatter:{sidebar_label:"Architecture",title:""},sidebar:"docs",previous:{title:"Elemental the command line way",permalink:"/quickstart-cli"},next:{title:"Installation",permalink:"/installation"}},o={},h=[{value:"Elemental Architecture",id:"elemental-architecture",level:2},{value:"Elemental OS",id:"elemental-os",level:2},{value:"Elemental OS image",id:"elemental-os-image",level:3},{value:"Elemental installation configuration",id:"elemental-installation-configuration",level:3},{value:"Elemental CLI",id:"elemental-cli",level:3},{value:"Elemental Operator",id:"elemental-operator",level:2},{value:"Elemental Operator Helm Chart",id:"elemental-operator-helm-chart",level:3},{value:"MachineRegistration",id:"machineregistration",level:4},{value:"MachineInventory",id:"machineinventory",level:4},{value:"MachineInventorySelector",id:"machineinventoryselector",level:4},{value:"MachineInventorySelectorTemplate",id:"machineinventoryselectortemplate",level:4},{value:"SeedImage",id:"seedimage",level:4},{value:"Elemental Register client",id:"elemental-register-client",level:3},{value:"Elemental Teal",id:"elemental-teal",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Vars:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Vars",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"architecture",children:"Architecture"}),"\n",(0,a.jsxs)(n.p,{children:["The Elemental stack can be divided in two main parts: the Elemental OS, an immutable and customizable OS which comprises the tools and the steps needed to prepare the Cloud Native OS image and perform the actual OS installation on the host, and the ",(0,a.jsx)(l,{name:"elemental_operator_name"}),", that allows central management of the Elemental OS via Rancher, the Kubernetes way."]}),"\n",(0,a.jsx)(n.h2,{id:"elemental-architecture",children:(0,a.jsx)(n.img,{alt:"Elemental Architecture",src:t(8466).Z+"",width:"1501",height:"1116"})}),"\n",(0,a.jsx)(n.h2,{id:"elemental-os",children:"Elemental OS"}),"\n",(0,a.jsx)(n.p,{children:"In order to deploy the Elemental OS we need:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"an Elemental base OS image"}),"\n",(0,a.jsx)(n.li,{children:"an Elemental installation configuration"}),"\n",(0,a.jsxs)(n.li,{children:["the ",(0,a.jsx)(l,{name:"elemental_cli_name"})," tool, which installs the Elemental OS image on the target host applying the Elemental installation configuration"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"elemental-os-image",children:"Elemental OS image"}),"\n",(0,a.jsxs)(n.p,{children:["The Elemental OS image is an OCI container image containing all the files that will make up the OS of the target host. It will contain not only all the desired binaries and libraries, but also the kernel and the boot files required by a linux system.\nThe ",(0,a.jsx)(l,{name:"elemental_toolkit_name",link:"elemental_toolkit_url"})," is at the core of the Elemental OS, enabling to boot and upgrade an OS from container images. It also provides a framework that allows to combine different packages to bake custom OS container images. For more information check the ",(0,a.jsx)(l,{name:"elemental_toolkit_name",link:"elemental_toolkit_url"})," project page."]}),"\n",(0,a.jsx)(n.h3,{id:"elemental-installation-configuration",children:"Elemental installation configuration"}),"\n",(0,a.jsxs)(n.p,{children:["In order to provision a machine with an Elemental OS image, installation configuration parameters are required: things such as the boot device, the root password, system configuration, users and custom files are things that should be provided aside from the Elemental OS image. All the data can be provided in a single .yaml file. More details can be found in the ",(0,a.jsx)(l,{name:"elemental_toolkit_name",link:"elemental_toolkit_url"})," documentation."]}),"\n",(0,a.jsx)(n.h3,{id:"elemental-cli",children:"Elemental CLI"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(l,{name:"elemental_cli_name"})," is the tool that allows to turn the Elemental OS image in a bootable and installed OS: it can generate an ",(0,a.jsx)(l,{name:"elemental_iso_name"})," image from the provided Elemental OS container image. The generated ",(0,a.jsx)(l,{name:"elemental_iso_name"})," image can be used to boot a virtual machine or a bare metal host and start the Elemental OS installation."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(l,{name:"elemental_cli_name"})," allows also to install the Elemental OS on the storage device of the live booted host, applying the provided Elemental installation configuration. For the list and syntax of the commands available in the ",(0,a.jsx)(l,{name:"elemental_cli_name"}),", check the ",(0,a.jsx)(l,{link:"elemental_cli_url",children:"online documentation"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"",children:(0,a.jsx)(l,{name:"elemental_iso_name"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(l,{name:"elemental_iso_name"})," is a live ISO based on the Elemental OS (an Elemental live ISO).\nIt includes all the tools needed to perform a full node provisioning, from the OS to Kubernetes, including the ",(0,a.jsx)(n.a,{href:"#elemental-cli",children:(0,a.jsx)(l,{name:"elemental_cli_name"})})," and the ",(0,a.jsx)(n.a,{href:"#elemental-register-client",children:(0,a.jsx)(l,{name:"elemental_register_name"})}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"elemental-operator",children:"Elemental Operator"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(l,{name:"elemental_operator_name"})," is responsible for managing OS upgrades and a secure device inventory to assist\nwith zero touch provisioning.\nIt provides an ",(0,a.jsx)(l,{name:"elemental_operator_name"})," Helm Chart and an ",(0,a.jsx)(l,{name:"elemental_register_name"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"elemental-operator-helm-chart",children:"Elemental Operator Helm Chart"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(l,{name:"elemental_operator_name"})," Helm Chart must be installed on a Rancher Cluster. It enables new hosts to:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["register against the ",(0,a.jsx)(l,{name:"elemental_operator_name"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"retrieve the Elemental installation configuration (which is stored in custom Kubernetes resources) to start the Elemental OS installation."}),"\n",(0,a.jsxs)(n.li,{children:["download and install the ",(0,a.jsx)(l,{name:"ranchersystemagent_name",link:"ranchersystemagent_url"}),", which enables Rancher to provision and manage K3s and RKE2 on the Elemental nodes."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(l,{name:"elemental_operator_name"})," allows control of the Elemental Nodes by extending the Kubernetes APIs with a set of ",(0,a.jsx)(n.em,{children:"elemental.cattle.io"})," ",(0,a.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/",children:"Kubernetes CRDs"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"MachineRegistration"}),"\n",(0,a.jsx)(n.li,{children:"MachineInventory"}),"\n",(0,a.jsx)(n.li,{children:"MachineInventorySelector"}),"\n",(0,a.jsx)(n.li,{children:"MachineInventorySelectorTemplate"}),"\n",(0,a.jsx)(n.li,{children:"ManagedOSImage"}),"\n",(0,a.jsx)(n.li,{children:"ManagedOSVersion"}),"\n",(0,a.jsx)(n.li,{children:"ManagedOSVersionChannel"}),"\n",(0,a.jsx)(n.li,{children:"SeedImage"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"machineregistration",children:"MachineRegistration"}),"\n",(0,a.jsxs)(n.p,{children:["The MachineRegistration includes the Elemental installation configuration (provided by the user) and a registration token (generated by the ",(0,a.jsx)(l,{name:"elemental_operator_name"}),"), from which a registration URL is derived."]}),"\n",(0,a.jsxs)(n.p,{children:["The registration URL is the way through which an host can access the ",(0,a.jsx)(l,{name:"elemental_operator_name"})," services, to kick off the Elemental provisioning process."]}),"\n",(0,a.jsxs)(n.p,{children:["The MachineRegistration has a ",(0,a.jsx)(n.code,{children:"Ready"})," condition which turns to true when the ",(0,a.jsx)(l,{name:"elemental_operator_name"})," has successfully generated the registration URL and an associated ServiceAccount. From this point on the target host can connect to the registration URL to kick off the provisioning process."]}),"\n",(0,a.jsxs)(n.p,{children:["An HTTP GET request against the registration URL returns the ",(0,a.jsx)(n.em,{children:"registration file"}),": a .yaml file containing the registration data (i.e., the ",(0,a.jsx)(n.em,{children:"spec:config:elemental:registration"})," section only from the just created MachineRegistration).\nThe registration file contains all the required data to allow the target host to perform self registration and start the Elemental provisioning. See the ",(0,a.jsxs)(n.a,{href:"#elemental-register-client",children:[(0,a.jsx)(l,{name:"elemental_register_name"})," section"]})," for more info on the registration process and the ",(0,a.jsxs)(n.a,{href:"/machineregistration-reference#configelementalregistration",children:["config:elemental",":registration"," section in the MachineRegistration reference"]})," for more details on the available registration options."]}),"\n",(0,a.jsx)(n.h4,{id:"machineinventory",children:"MachineInventory"}),"\n",(0,a.jsxs)(n.p,{children:["When a new host registers successfully, the ",(0,a.jsx)(l,{name:"elemental_operator_name"})," creates a MachineInventory resource representing that particular host.\nThe MachineInventory stores the TPM hash of the tracked host, retrieved during the registration process, and allows to execute arbitrary commands (plans) on the machine."]}),"\n",(0,a.jsx)(n.p,{children:"A MachineInventory has two conditions:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"AdoptionReady"}),", which indicates the machine has been adopted by a selector to be part of a cluster."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Ready"}),", which indicates that the machine has been registered and provisioned with an Elemental OS."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"machineinventoryselector",children:"MachineInventorySelector"}),"\n",(0,a.jsx)(n.p,{children:"A MachineInventorySelector selects MachineInventories based on applied selectors (usually pattern matching on MachineInventory label values)."}),"\n",(0,a.jsx)(n.p,{children:"MachineInventorySelectors have two conditions:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"InventoryReady"}),", turns to true if the MachineInventorySelector has found a matching MachineInventory and has successfully set itself as the MachineInventory owner."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Ready"}),", tracks if the selector already adopted a machine and started the kubernetes provisioning process (node bootstrap)."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"machineinventoryselectortemplate",children:"MachineInventorySelectorTemplate"}),"\n",(0,a.jsx)(n.p,{children:"The MachineInventorySelectorTemplate is a user defined resource that will be used as the blueprint to create the required MachineInventorySelectors: it includes the selector to identify the eligible MachineInventories."}),"\n",(0,a.jsx)(n.h4,{id:"seedimage",children:"SeedImage"}),"\n",(0,a.jsx)(n.p,{children:"A SeedImage is a resource to handle the installation media creation. Includes the reference to the base installation system and a reference to the machine registration. It is used to create and serve installation ISOs including\nthe MachineRegistration metadata required for the machine registration. The installation media is created and being served in a devoted Pod."}),"\n",(0,a.jsx)(n.p,{children:"SeedImage have two conditions:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SeedImageReady"}),", tracks the status of the associated pod."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Ready"}),", tracks if all the SeedImage child resources have been successfully created."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"elemental-register-client",children:"Elemental Register client"}),"\n",(0,a.jsxs)(n.p,{children:["New hosts start the Elemental provisioning process through the ",(0,a.jsx)(l,{name:"elemental_register_name"}),": this tool requires a valid elemental-operator registration URL as input (see the ",(0,a.jsx)(n.a,{href:"#machineregistration",children:"MachineRegistration section"}),"), and performs the following steps:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"setups a websocket connection to the registration URL"}),"\n",(0,a.jsxs)(n.li,{children:["authenticates itself using the registration token and the onboard ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Trusted_Platform_Module",children:"TPM (Trusted Platform Module)"})]}),"\n",(0,a.jsxs)(n.li,{children:["sends ",(0,a.jsx)(n.a,{href:"/smbios",children:"SMBIOS data"})," to the ",(0,a.jsx)(l,{name:"elemental_operator_name"})]}),"\n",(0,a.jsx)(n.li,{children:"retrieves the Elemental installation configuration"}),"\n",(0,a.jsxs)(n.li,{children:["starts the ",(0,a.jsx)(n.a,{href:"#elemental-cli",children:(0,a.jsx)(l,{name:"elemental_cli_name"})})," and performs the Elemental OS installation"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"}),"\nif no TPM 2.0 is available on the host, TPM can be emulated by software: see the ",(0,a.jsx)(n.code,{children:"emulate-tpm"})," key in the ",(0,a.jsx)(n.a,{href:"/machineregistration-reference#configelementalregistration",children:"config.elemental.register reference document"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(l,{name:"elemental_operator_name"})," includes a Kubernetes operator installed in the management cluster and a client\nside installed in nodes, so they can self register into the management cluster. Once a node is\nregistered the ",(0,a.jsx)(l,{name:"elemental_operator_name"})," will kick-start the OS installation and schedule the Kubernetes\nprovisioning using the ",(0,a.jsx)(l,{name:"ranchersystemagent_name",link:"ranchersystemagent_url"}),".\nRancher System Agent is responsible for bootstrapping RKE2/k3s and Rancher from an OCI registry. This means\nan update of containerd, k3s, RKE2, or Rancher does not require an OS upgrade\nor node reboot."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"elemental-teal",children:"Elemental Teal"}),"\n",(0,a.jsx)(n.p,{children:"Elemental Teal is Elemental OS built on top of SUSE Linux Enterprise (SLE) Micro for Rancher using the Elemental stack."})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8466:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/elemental-arch-v1.3_nobg-cbe062db521c514fc332b92ff6e7f3d5.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(7294);const i={},l=a.createContext(i);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);