"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[2936],{1704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var i=t(5893),r=t(1151);const s={sidebar_label:"MachineRegistration reference",title:""},l="MachineRegistration reference",a={id:"machineregistration-reference",title:"",description:"The MachineRegistration resource is the responsible of defining a machine registration end point. Once created it generates a registration URL used by nodes to register so they are inventoried.",source:"@site/docs/machineregistration-reference.md",sourceDirName:".",slug:"/machineregistration-reference",permalink:"/next/machineregistration-reference",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"MachineRegistration reference",title:""},sidebar:"docs",previous:{title:"Cloud-config reference",permalink:"/next/cloud-config-reference"},next:{title:"MachineInventorySelectorTemplate reference",permalink:"/next/machineinventoryselectortemplate-reference"}},d={},o=[{value:"config.cloud-config",id:"configcloud-config",level:4},{value:"config.elemental.registration",id:"configelementalregistration",level:4},{value:"config.elemental.install",id:"configelementalinstall",level:4},{value:"config.elemental.reset",id:"configelementalreset",level:4},{value:"machineName",id:"machinename",level:4},{value:"machineInventoryLabels",id:"machineinventorylabels",level:4},{value:"machineInventoryAnnotations",id:"machineinventoryannotations",level:4}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{Details:t,Vars:s}=n;return t||m("Details",!0),s||m("Vars",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"machineregistration-reference",children:"MachineRegistration reference"}),"\n",(0,i.jsx)(n.p,{children:"The MachineRegistration resource is the responsible of defining a machine registration end point. Once created it generates a registration URL used by nodes to register so they are inventoried."}),"\n",(0,i.jsxs)(n.p,{children:["There are several keys that can be configured under a ",(0,i.jsx)(n.code,{children:"MachineRegistration"})," resource spec."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="MachineRegistration" showLineNumbers',children:"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineName: name\n  machineInventoryLabels:\n    label: value\n  machineInventoryAnnotations:\n    annotation: value\n  config:\n    cloud-config:\n        ...\n    elemental:\n        registration:\n            ...\n        install:\n            ... \n"})}),"\n",(0,i.jsx)(n.h4,{id:"configcloud-config",children:"config.cloud-config"}),"\n",(0,i.jsxs)(n.p,{children:["Contains the cloud-configuration to be injected in the node. See the ",(0,i.jsx)(n.a,{href:"/next/cloud-config-reference",children:"Cloud Config Reference"})," for full information."]}),"\n",(0,i.jsx)(n.h4,{id:"configelementalregistration",children:"config.elemental.registration"}),"\n",(0,i.jsxs)(n.p,{children:["Contains the configuration used for the connection and the initial registration to the ",(0,i.jsx)(s,{name:"elemental_operator_name"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Supports the following values:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"url"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsxs)(n.td,{children:["URL to connect to the ",(0,i.jsx)(s,{name:"elemental_operator_name"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ca-cert"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsx)(n.td,{children:"CA to validate the certificate provided by the server at 'url' (required if the certificate is not signed by a public CA)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"no-smbios"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsxs)(n.td,{children:["Whether SMBIOS data should be sent to the ",(0,i.jsx)(s,{name:"elemental_operator_name"})," (see the ",(0,i.jsx)(n.a,{href:"/next/smbios",children:"SMBIOS reference"})," for more information)"]})]})]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"The following values are for development purposes only."}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"emulate-tpm"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"This will use software emulation of the TPM (required for hosts without TPM hardware)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"emulated-tpm-seed"}),(0,i.jsx)(n.td,{children:"int64"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:["Fixed seed to use with 'emulate-tpm'. Set to -1 to get a random seed. See ",(0,i.jsx)(n.a,{href:"/next/tpm",children:"TPM"})," for more information"]})]})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"configelementalinstall",children:"config.elemental.install"}),"\n",(0,i.jsxs)(n.p,{children:["Contains the installation configuration that would be applied via ",(0,i.jsx)(n.code,{children:"elemental-register --install"})," when booted from an ISO and passed to ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/elemental-toolkit/blob/main/docs/elemental_install.md",children:(0,i.jsx)(n.code,{children:"elemental install"})})]}),"\n",(0,i.jsx)(n.p,{children:"Supports the following values:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"firmware"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"efi"}),(0,i.jsx)(n.td,{children:"Firmware to install ('efi' or 'bios')"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"device"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsx)(n.td,{children:"Device to install the system to"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"no-format"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Don\u2019t format disks. It is implied that COS_STATE, COS_RECOVERY, COS_PERSISTENT, COS_OEM partitions are already existing on the target disk"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"config-urls"}),(0,i.jsx)(n.td,{children:"list"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsx)(n.td,{children:"Cloud-init config files locations"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"iso"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsx)(n.td,{children:"Performs an installation from the ISO url instead of the running ISO"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"system-uri"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsxs)(n.td,{children:["Sets the system image source and its type (e.g. 'docker",":registry",".org/image",":tag","') instead of using the running ISO"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"debug"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Enable debug output"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tty"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsx)(n.td,{children:"Add named tty to grub"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"poweroff"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Shutdown the system after install"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"reboot"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Reboot the system after install"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"eject-cd"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Try to eject the cd on reboot"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"warning",type:"warning",children:(0,i.jsxs)(n.p,{children:["In case of using both ",(0,i.jsx)(n.code,{children:"iso"})," and ",(0,i.jsx)(n.code,{children:"system-uri"})," the ",(0,i.jsx)(n.code,{children:"iso"})," value takes precedence"]})}),"\n",(0,i.jsxs)(n.p,{children:["The only required value for a successful installation is the ",(0,i.jsx)(n.code,{children:"device"})," key as we need a target disk to install to. The rest of the parameters are all optional."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    elemental:\n      install:\n        device: /dev/sda\n        debug: true\n        reboot: true\n        eject-cd: true\n        system-uri: registry.suse.com/rancher/elemental-teal/5.4:latest\n"})})]}),"\n",(0,i.jsx)(n.h4,{id:"configelementalreset",children:"config.elemental.reset"}),"\n",(0,i.jsxs)(n.p,{children:["Contains the reset configuration that would be applied via ",(0,i.jsx)(n.code,{children:"elemental-register --reset"}),", when booted from the recovery partition and passed to ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/elemental-toolkit/blob/main/docs/elemental_reset.md",children:(0,i.jsx)(n.code,{children:"elemental reset"})})]}),"\n",(0,i.jsx)(n.p,{children:"Supports the following values:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enabled"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"MachineInventories created from this MachineRegistration will have reset functionality enabled"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"reset-persistent"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:"Format the COS_PERSISTENT partition"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"reset-oem"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:"Format the COS_OEM partition"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"config-urls"}),(0,i.jsx)(n.td,{children:"list"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsx)(n.td,{children:"Cloud-init config files"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"system-uri"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsxs)(n.td,{children:["Sets the system image source and its type (e.g. 'docker",":registry",".org/image",":tag","') instead of using the running ISO"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"debug"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Enable debug output"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"poweroff"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Shutdown the system after reset"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"reboot"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:"Reboot the system after reset"})]})]})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    elemental:\n      reset:\n        enabled: true\n        debug: true\n        reset-persistent: true\n        reset-oem: true\n        reboot: true\n        system-uri: registry.opensuse.org/isv/rancher/elemental/stable/teal53/15.4/rancher/elemental-teal/5.3:latest\n"})})]}),"\n",(0,i.jsx)(n.h4,{id:"machinename",children:"machineName"}),"\n",(0,i.jsxs)(n.p,{children:["This refers to the name that will be set to the node and the kubernetes resources that require a hostname (rke2 deployed pods for example, they use the node hostname as part of the pod names)\n",(0,i.jsx)(n.code,{children:"String"})," type."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"elemental:registration:no-smbios"})," is set to ",(0,i.jsx)(n.code,{children:"false"})," (default), machineName is interpolated with ",(0,i.jsx)(n.a,{href:"https://www.dmtf.org/standards/smbios",children:"SMBIOS"})," data which allows you to store hardware information.\nSee our ",(0,i.jsx)(n.a,{href:"/next/smbios",children:"SMBIOS docs"})," for more information.\nIf no ",(0,i.jsx)(n.code,{children:"machineName"})," is specified, a default one in the form ",(0,i.jsx)(n.code,{children:"m-$UUID"})," will be set.\nThe UUID will be retrieved from the SMBIOS data if available, otherwise a random UUID will be generated."]})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineName: hostname-test-4\n"})})]}),"\n",(0,i.jsx)(n.h4,{id:"machineinventorylabels",children:"machineInventoryLabels"}),"\n",(0,i.jsxs)(n.p,{children:["Labels that will be set to the ",(0,i.jsx)(n.code,{children:"MachineInventory"})," that is created from this ",(0,i.jsx)(n.code,{children:"MachineRegistration"}),"\n",(0,i.jsx)(n.code,{children:"Key: value"})," type. These labels will be used to establish a selection criteria in ",(0,i.jsx)(n.a,{href:"/next/machineinventoryselectortemplate-reference",children:"MachineInventorySelectorTemplate"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Elemental Teal nodes will run ",(0,i.jsx)(n.code,{children:"elemental-register"})," every 24 hours.",(0,i.jsx)(n.br,{}),"\n","It is possible to update the ",(0,i.jsx)(n.code,{children:"machineInventoryLabels"})," so that all registered nodes will apply the new labels on the next successfull registration update."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"elemental:registration:no-smbios"})," is set to ",(0,i.jsx)(n.code,{children:"false"})," (default), Labels are interpolated with ",(0,i.jsx)(n.a,{href:"https://www.dmtf.org/standards/smbios",children:"SMBIOS"})," data. This allows to store hardware information in custom labels.\nSee our ",(0,i.jsx)(n.a,{href:"/next/smbios",children:"SMBIOS docs"})," for more information."]})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineInventoryLabels:\n    my.prefix.io/element: fire\n    my.prefix.io/cpus: 32\n    my.prefix.io/manufacturer: "${System Information/Manufacturer}"\n    my.prefix.io/productName: "${System Information/Product Name}"\n    my.prefix.io/serialNumber: "${System Information/Serial Number}"\n    my.prefix.io/machineUUID: "${System Information/UUID}"\n'})})]}),"\n",(0,i.jsx)(n.h4,{id:"machineinventoryannotations",children:"machineInventoryAnnotations"}),"\n",(0,i.jsxs)(n.p,{children:["Annotations that will be set to the ",(0,i.jsx)(n.code,{children:"MachineInventory"})," that is created from this ",(0,i.jsx)(n.code,{children:"MachineRegistration"}),"\n",(0,i.jsx)(n.code,{children:"Key: value"})," type"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineInventoryAnnotations:\n    owner: bob\n    version: 1.0.0\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var i=t(7294);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);