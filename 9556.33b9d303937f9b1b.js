"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9556],{9556:(M,_,i)=>{i.r(_),i.d(_,{AuthenticationPageModule:()=>x});var h=i(9808),c=i(4182),a=i(3996),v=i(1264),t=i(9863),A=i(2468),g=i(7053),d=i(3003);function Z(n,u){if(1&n&&(t.TgZ(0,"h4"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij("Ayudanos a verificar que eres ",e.avatar.label.toLowerCase(),"")}}function l(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t._UZ(1,"ion-img",11),t.TgZ(2,"form"),t.TgZ(3,"div",12),t.TgZ(4,"ion-label",13),t._uU(5,"Documento de identidad"),t.qZA(),t.TgZ(6,"ion-input",14),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().numeroID=o}),t.qZA(),t.qZA(),t.TgZ(7,"div",12),t.TgZ(8,"ion-label",13),t._uU(9,"Placa:"),t.qZA(),t.TgZ(10,"ion-input",15),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().authentication=o}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.MGl("src","/assets/avatars/",e.avatar.img,""),t.xp6(5),t.Q6J("ngModel",e.numeroID),t.xp6(4),t.Q6J("ngModel",e.authentication)}}function m(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t._UZ(1,"ion-img",11),t.TgZ(2,"form"),t.TgZ(3,"div",12),t.TgZ(4,"ion-label",13),t._uU(5,"Numero de identificaci\xf3n:"),t.qZA(),t.TgZ(6,"ion-input",16),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().numeroID=o}),t.qZA(),t.qZA(),t.TgZ(7,"div",12),t.TgZ(8,"ion-label",13),t._uU(9,"Registro de profesi\xf3n: "),t.qZA(),t.TgZ(10,"ion-input",17),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().authentication=o}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.MGl("src","/assets/avatars/",e.avatar.img,""),t.xp6(5),t.Q6J("ngModel",e.numeroID),t.xp6(4),t.Q6J("ngModel",e.authentication)}}function p(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t._UZ(1,"ion-img",11),t.TgZ(2,"form"),t.TgZ(3,"div",12),t.TgZ(4,"ion-label",13),t._uU(5,"Documento de identidad"),t.qZA(),t.TgZ(6,"ion-input",14),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().numeroID=o}),t.qZA(),t.qZA(),t.TgZ(7,"div",12),t.TgZ(8,"ion-label",13),t._uU(9,"Numero de bombero: "),t.qZA(),t.TgZ(10,"ion-input",17),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().authentication=o}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.MGl("src","/assets/avatars/",e.avatar.img,""),t.xp6(5),t.Q6J("ngModel",e.numeroID),t.xp6(4),t.Q6J("ngModel",e.authentication)}}function T(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t._UZ(1,"ion-img",11),t.TgZ(2,"form"),t.TgZ(3,"div",12),t.TgZ(4,"ion-label",13),t._uU(5,"Documento de identidad"),t.qZA(),t.TgZ(6,"ion-input",14),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().numeroID=o}),t.qZA(),t.qZA(),t.TgZ(7,"div",12),t.TgZ(8,"ion-label",13),t._uU(9,"Numero de reconomiento"),t.qZA(),t.TgZ(10,"ion-input",17),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().authentication=o}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.MGl("src","/assets/avatars/",e.avatar.img,""),t.xp6(5),t.Q6J("ngModel",e.numeroID),t.xp6(4),t.Q6J("ngModel",e.authentication)}}const C=[{path:"",component:(()=>{class n{constructor(e,s,o,r){this.dataService=e,this.authService=s,this.navCtrl=o,this.toastMessage=r,this.data={},this.avatar={img:"",label:"Policia",seleccionado:!0}}ngOnInit(){this.avatar=this.dataService.getAvatar(),console.log(this.avatar)}onClickAuth(){switch(this.avatar.label){case"Policia":case"Defensa civ\xedl":default:this.authService.getAuth(this.avatar.label,this.numeroID,`${this.authentication}`).subscribe(e=>{console.log(e),e.success?(this.navCtrl.navigateForward("/tab1"),this.toastMessage.presentToast("Autenticacion realizada")):(this.dataService.isCivilAccesing=!0,this.navCtrl.navigateForward("/tab1"))});break;case"Personal m\xe9dico":case"Bombero":this.authService.getAuth(this.avatar.label,this.numeroID,`${this.authentication}`).subscribe(e=>{console.log(e),e.success?(this.navCtrl.navigateForward("/tab1"),this.toastMessage.presentToast("Autenticacion realizada")):(this.dataService.isCivilAccesing=!0,this.navCtrl.navigateForward("/tab1"),this.toastMessage.presentToast("Datos de autenticaci\xf3n no v\xe1lidos."))})}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(A.D),t.Y36(g.$),t.Y36(a.SH),t.Y36(d.K))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-authentication"]],decls:21,vars:6,consts:[[1,"ion-no-border"],["slot","start"],["color","primary","defaultHref","/access"],["color","primary"],[1,"ion-margin",3,"ngSwitch"],[4,"ngIf"],[4,"ngSwitchCase"],["no-border",""],[1,"btn-wrapper"],["size","small","fill","outline","color","tertiary",3,"click"],["slot","end","name","caret-forward-outline"],[1,"avatar",3,"src"],[1,"ion-margin"],[1,"label"],["name","numberID","type","text","required","",3,"ngModel","ngModelChange"],["name","placa","type","text","required","",1,"inputp",3,"ngModel","ngModelChange"],["name","numeroID","type","text","required","",3,"ngModel","ngModelChange"],["name","password","type","text","required","",3,"ngModel","ngModelChange"]],template:function(e,s){1&e&&(t.TgZ(0,"ion-header",0),t.TgZ(1,"ion-toolbar"),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5,"Autenticaci\xf3n"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"ion-content"),t.TgZ(7,"main",4),t.YNc(8,Z,2,1,"h4",5),t.YNc(9,l,11,3,"div",6),t.YNc(10,m,11,3,"div",6),t.YNc(11,p,11,3,"div",6),t.YNc(12,T,11,3,"div",6),t.qZA(),t.qZA(),t.TgZ(13,"ion-footer",7),t.TgZ(14,"ion-toolbar"),t.TgZ(15,"ion-row"),t.TgZ(16,"ion-col"),t.TgZ(17,"div",8),t.TgZ(18,"ion-button",9),t.NdJ("click",function(){return s.onClickAuth()}),t._uU(19," Continuar "),t._UZ(20,"ion-icon",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(7),t.Q6J("ngSwitch",s.avatar.label),t.xp6(1),t.Q6J("ngIf","civil"!==s.avatar.label),t.xp6(1),t.Q6J("ngSwitchCase","Policia"),t.xp6(1),t.Q6J("ngSwitchCase","Personal m\xe9dico"),t.xp6(1),t.Q6J("ngSwitchCase","Bombero"),t.xp6(1),t.Q6J("ngSwitchCase","Defensa civ\xedl"))},directives:[a.Gu,a.sr,a.Sm,a.oU,a.cs,a.wd,a.W2,h.RF,h.O5,h.n9,a.fr,a.Nd,a.wI,a.YG,a.gu,a.Xz,c._Y,c.JL,c.F,a.Q$,a.pK,a.j9,c.Q7,c.JJ,c.On],styles:[".btn-wrapper[_ngcontent-%COMP%]{text-align:end}ion-img[_ngcontent-%COMP%]{width:150px;margin:20px auto 10px}.label[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-weight:700}ion-input[_ngcontent-%COMP%]{background-color:#f5f2da;border-radius:5px;--padding-start: 12px}"]}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[v.Bz.forChild(C)],v.Bz]}),n})(),x=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h.ez,c.u5,a.Pc,f]]}),n})()},7053:(M,_,i)=>{i.d(_,{$:()=>g});var h=i(2340),c=i(1086),a=i(7221),v=i(9863),t=i(520);const A=h.N.url;let g=(()=>{class d{constructor(l){this.http=l}getAuth(l,m,p){return console.log(l,p),this.http.get(`${A}api/auth`,{params:{persona:l,numeroID:m,authentication:p}}).pipe((0,a.K)(this.handleError))}verificarQrPolicia(l){return this.http.get(`${A}api/auth/qrCop`,{params:{qrUrl:l}}).pipe((0,a.K)(this.handleError))}handleError(l){return(0,c.of)(l.error)}}return d.\u0275fac=function(l){return new(l||d)(v.LFG(t.eN))},d.\u0275prov=v.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},3003:(M,_,i)=>{i.d(_,{K:()=>v});var h=i(655),c=i(9863),a=i(3996);let v=(()=>{class t{constructor(g){this.toastController=g}presentToast(g){return(0,h.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:g,duration:4e3})).present()})}}return t.\u0275fac=function(g){return new(g||t)(c.LFG(a.yF))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);