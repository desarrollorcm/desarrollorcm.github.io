"use strict";(self.webpackChunkrcm_salud=self.webpackChunkrcm_salud||[]).push([[651],{7651:(de,q,c)=>{c.r(q),c.d(q,{ProcedimientosModule:()=>me});var f=c(9808),p=c(7423),h=c(8099),l=c(2075),m=c(3075),T=c(7446),Z=c(508),g=c(6856),s=c(8966),U=c(4834),d=c(7322),_=c(7531),C=c(9814),A=c(4107),w=c(3251),S=c(7238),e=c(5e3);const k=["video"],V=["canvas"];function F(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().rotateVideoInput(!0)}),e.qZA()}}class I{constructor(n,t,o){this._mimeType=null,this._imageAsBase64=null,this._imageAsDataUrl=null,this._imageData=null,this._mimeType=t,this._imageAsDataUrl=n,this._imageData=o}static getDataFromDataUrl(n,t){return n.replace(`data:${t};base64,`,"")}get imageAsBase64(){return this._imageAsBase64?this._imageAsBase64:this._imageAsBase64=I.getDataFromDataUrl(this._imageAsDataUrl,this._mimeType)}get imageAsDataUrl(){return this._imageAsDataUrl}get imageData(){return this._imageData}}let D=(()=>{class i{constructor(){this.width=640,this.height=480,this.videoOptions=i.DEFAULT_VIDEO_OPTIONS,this.allowCameraSwitch=!0,this.captureImageData=!1,this.imageType=i.DEFAULT_IMAGE_TYPE,this.imageQuality=i.DEFAULT_IMAGE_QUALITY,this.imageCapture=new e.vpe,this.initError=new e.vpe,this.imageClick=new e.vpe,this.cameraSwitched=new e.vpe,this.availableVideoInputs=[],this.videoInitialized=!1,this.activeVideoInputIndex=-1,this.mediaStream=null,this.activeVideoSettings=null}set trigger(t){this.triggerSubscription&&this.triggerSubscription.unsubscribe(),this.triggerSubscription=t.subscribe(()=>{this.takeSnapshot()})}set switchCamera(t){this.switchCameraSubscription&&this.switchCameraSubscription.unsubscribe(),this.switchCameraSubscription=t.subscribe(o=>{"string"==typeof o?this.switchToVideoInput(o):this.rotateVideoInput(!1!==o)})}static getMediaConstraintsForDevice(t,o){const a=o||this.DEFAULT_VIDEO_OPTIONS;return t&&(a.deviceId={exact:t}),a}static getDeviceIdFromMediaStreamTrack(t){if(t.getSettings&&t.getSettings()&&t.getSettings().deviceId)return t.getSettings().deviceId;if(t.getConstraints&&t.getConstraints()&&t.getConstraints().deviceId){const o=t.getConstraints().deviceId;return i.getValueFromConstrainDOMString(o)}}static getFacingModeFromMediaStreamTrack(t){if(t){if(t.getSettings&&t.getSettings()&&t.getSettings().facingMode)return t.getSettings().facingMode;if(t.getConstraints&&t.getConstraints()&&t.getConstraints().facingMode){const o=t.getConstraints().facingMode;return i.getValueFromConstrainDOMString(o)}}}static isUserFacing(t){const o=i.getFacingModeFromMediaStreamTrack(t);return!!o&&"user"===o.toLowerCase()}static getValueFromConstrainDOMString(t){if(t){if(t instanceof String)return String(t);if(Array.isArray(t)&&Array(t).length>0)return String(t[0]);if("object"==typeof t){if(t.exact)return String(t.exact);if(t.ideal)return String(t.ideal)}}return null}ngAfterViewInit(){this.detectAvailableDevices().then(()=>{this.switchToVideoInput(null)}).catch(t=>{this.initError.next({message:t}),this.switchToVideoInput(null)})}ngOnDestroy(){this.stopMediaTracks(),this.unsubscribeFromSubscriptions()}takeSnapshot(){const t=this.nativeVideoElement,o={width:this.width,height:this.height};t.videoWidth&&(o.width=t.videoWidth,o.height=t.videoHeight);const a=this.canvas.nativeElement;a.width=o.width,a.height=o.height;const r=a.getContext("2d");r.drawImage(t,0,0);const u=this.imageType?this.imageType:i.DEFAULT_IMAGE_TYPE,P=a.toDataURL(u,this.imageQuality?this.imageQuality:i.DEFAULT_IMAGE_QUALITY);let E=null;this.captureImageData&&(E=r.getImageData(0,0,a.width,a.height)),this.imageCapture.next(new I(P,u,E))}rotateVideoInput(t){this.availableVideoInputs&&this.availableVideoInputs.length>1&&this.switchToVideoInput(this.availableVideoInputs[(this.activeVideoInputIndex+(t?1:this.availableVideoInputs.length-1))%this.availableVideoInputs.length].deviceId)}switchToVideoInput(t){this.videoInitialized=!1,this.stopMediaTracks(),this.initWebcam(t,this.videoOptions)}videoResize(){}get videoWidth(){const t=this.getVideoAspectRatio();return Math.min(this.width,this.height*t)}get videoHeight(){const t=this.getVideoAspectRatio();return Math.min(this.height,this.width/t)}get videoStyleClasses(){let t="";return this.isMirrorImage()&&(t+="mirrored "),t.trim()}get nativeVideoElement(){return this.video.nativeElement}getVideoAspectRatio(){const t=this.nativeVideoElement;return t.videoWidth&&t.videoWidth>0&&t.videoHeight&&t.videoHeight>0?t.videoWidth/t.videoHeight:this.width/this.height}initWebcam(t,o){const a=this.nativeVideoElement;if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){const r=i.getMediaConstraintsForDevice(t,o);navigator.mediaDevices.getUserMedia({video:r}).then(u=>{this.mediaStream=u,a.srcObject=u,a.play(),this.activeVideoSettings=u.getVideoTracks()[0].getSettings();const b=i.getDeviceIdFromMediaStreamTrack(u.getVideoTracks()[0]);this.cameraSwitched.next(b),this.detectAvailableDevices().then(()=>{this.activeVideoInputIndex=b?this.availableVideoInputs.findIndex(P=>P.deviceId===b):-1,this.videoInitialized=!0}).catch(()=>{this.activeVideoInputIndex=-1,this.videoInitialized=!0})}).catch(u=>{this.initError.next({message:u.message,mediaStreamError:u})})}else this.initError.next({message:"Cannot read UserMedia from MediaDevices."})}getActiveVideoTrack(){return this.mediaStream?this.mediaStream.getVideoTracks()[0]:null}isMirrorImage(){if(!this.getActiveVideoTrack())return!1;{let t="auto";switch(this.mirrorImage&&("string"==typeof this.mirrorImage?t=String(this.mirrorImage).toLowerCase():this.mirrorImage.x&&(t=this.mirrorImage.x.toLowerCase())),t){case"always":return!0;case"never":return!1}}return i.isUserFacing(this.getActiveVideoTrack())}stopMediaTracks(){this.mediaStream&&this.mediaStream.getTracks&&(this.nativeVideoElement.pause(),this.mediaStream.getTracks().forEach(t=>t.stop()))}unsubscribeFromSubscriptions(){this.triggerSubscription&&this.triggerSubscription.unsubscribe(),this.switchCameraSubscription&&this.switchCameraSubscription.unsubscribe()}detectAvailableDevices(){return new Promise((t,o)=>{(class J{static getAvailableVideoInputs(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?new Promise((n,t)=>{navigator.mediaDevices.enumerateDevices().then(o=>{n(o.filter(a=>"videoinput"===a.kind))}).catch(o=>{t(o.message||o)})}):Promise.reject("enumerateDevices() not supported.")}}).getAvailableVideoInputs().then(a=>{this.availableVideoInputs=a,t(a)}).catch(a=>{this.availableVideoInputs=[],o(a)})})}}return i.DEFAULT_VIDEO_OPTIONS={facingMode:"environment"},i.DEFAULT_IMAGE_TYPE="image/jpeg",i.DEFAULT_IMAGE_QUALITY=.92,i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["webcam"]],viewQuery:function(t,o){if(1&t&&(e.Gf(k,7),e.Gf(V,7)),2&t){let a;e.iGM(a=e.CRH())&&(o.video=a.first),e.iGM(a=e.CRH())&&(o.canvas=a.first)}},inputs:{width:"width",height:"height",videoOptions:"videoOptions",allowCameraSwitch:"allowCameraSwitch",mirrorImage:"mirrorImage",captureImageData:"captureImageData",imageType:"imageType",imageQuality:"imageQuality",trigger:"trigger",switchCamera:"switchCamera"},outputs:{imageCapture:"imageCapture",initError:"initError",imageClick:"imageClick",cameraSwitched:"cameraSwitched"},decls:6,vars:7,consts:[[1,"webcam-wrapper",3,"click"],["autoplay","","muted","","playsinline","",3,"width","height","resize"],["video",""],["class","camera-switch",3,"click",4,"ngIf"],[3,"width","height"],["canvas",""],[1,"camera-switch",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return o.imageClick.next()}),e.TgZ(1,"video",1,2),e.NdJ("resize",function(){return o.videoResize()}),e.qZA(),e.YNc(3,F,1,0,"div",3),e._UZ(4,"canvas",4,5),e.qZA()),2&t&&(e.xp6(1),e.Tol(o.videoStyleClasses),e.Q6J("width",o.videoWidth)("height",o.videoHeight),e.xp6(2),e.Q6J("ngIf",o.allowCameraSwitch&&o.availableVideoInputs.length>1&&o.videoInitialized),e.xp6(1),e.Q6J("width",o.width)("height",o.height))},directives:[f.O5],styles:[".webcam-wrapper[_ngcontent-%COMP%]{display:inline-block;position:relative;line-height:0}.webcam-wrapper[_ngcontent-%COMP%]   video.mirrored[_ngcontent-%COMP%]{transform:scaleX(-1)}.webcam-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:none}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]{background-color:#0000001a;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s ease}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]:hover{background-color:#0000002e}"]}),i})(),O=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[f.ez]]}),i})();var N=c(4466),v=c(6696),Q=c(4075),y=c(2308),M=c(947);let R=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-filter-procedimiento"]],decls:57,vars:6,consts:[[1,"row"],[1,"col-md-12"],[2,"border","1px solid #ddd","box-sizing","content-box","padding","18px 18px 0px 18px"],["appearance","outline",1,"col-12","col-sm-12","col-md-3"],["type","text","matInput",""],["value","all"],["value","1"],["value","2"],[1,"col-12","col-sm-12","col-md-3"],["color","primary",2,"padding-top","15px","padding-left","1px"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["picker2",""],["mat-raised-button","","color","primary",1,"btn-search"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",0)(4,"div",1)(5,"h3"),e._uU(6,"Filtros"),e.qZA()(),e.TgZ(7,"mat-form-field",3)(8,"mat-label"),e._uU(9,"RUN"),e.qZA(),e._UZ(10,"input",4),e.qZA(),e.TgZ(11,"mat-form-field",3)(12,"mat-label"),e._uU(13,"Nombre"),e.qZA(),e._UZ(14,"input",4),e.qZA(),e.TgZ(15,"mat-form-field",3)(16,"mat-label"),e._uU(17,"Estado"),e.qZA(),e.TgZ(18,"mat-select",5)(19,"mat-option",5),e._uU(20,"Todos"),e.qZA(),e.TgZ(21,"mat-option",6),e._uU(22,"Activo"),e.qZA(),e.TgZ(23,"mat-option",7),e._uU(24,"Cancelado"),e.qZA()()(),e.TgZ(25,"mat-form-field",3)(26,"mat-label"),e._uU(27,"Especialista"),e.qZA(),e.TgZ(28,"mat-select",5)(29,"mat-option",5),e._uU(30,"Todos"),e.qZA(),e.TgZ(31,"mat-option",6),e._uU(32,"Medico 1"),e.qZA(),e.TgZ(33,"mat-option",7),e._uU(34,"Medico 2"),e.qZA()()(),e.TgZ(35,"div",8)(36,"mat-checkbox",9),e._uU(37,"Agenda del dia"),e.qZA()(),e.TgZ(38,"mat-form-field",3)(39,"mat-label"),e._uU(40,"Desde"),e.qZA(),e._UZ(41,"input",10)(42,"mat-datepicker-toggle",11)(43,"mat-datepicker",null,12),e.qZA(),e.TgZ(45,"mat-form-field",3)(46,"mat-label"),e._uU(47,"Hasta"),e.qZA(),e._UZ(48,"input",10)(49,"mat-datepicker-toggle",11)(50,"mat-datepicker",null,13),e.qZA(),e.TgZ(52,"div",8)(53,"button",14)(54,"mat-icon"),e._uU(55,"search"),e.qZA(),e._uU(56," Buscar "),e.qZA()()()()()()),2&t){const a=e.MAs(44),r=e.MAs(51);e.xp6(3),e.Udp("font-size",12,"px"),e.xp6(38),e.Q6J("matDatepicker",a),e.xp6(1),e.Q6J("for",a),e.xp6(6),e.Q6J("matDatepicker",r),e.xp6(1),e.Q6J("for",r)}},directives:[m._Y,m.JL,m.F,d.KE,d.hX,_.Nt,A.gD,Z.ey,T.oG,g.hl,g.nW,d.R9,g.Mq,p.lW,h.Hw],styles:[".btn-search[_ngcontent-%COMP%]{width:100%;margin-top:3px;padding-bottom:4px;padding-top:4px}@media (min-width: 576px){.full-width-field-custom[_ngcontent-%COMP%]{width:100%}}@media (min-width: 768px){.full-width-field-custom[_ngcontent-%COMP%]{width:100%}}"]}),i})();var x=c(3259);function z(i,n){1&i&&(e.TgZ(0,"mat-header-cell"),e._uU(1,"Opciones"),e.qZA())}function H(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"mat-cell",8)(1,"button",9),e.NdJ("click",function(){return e.CHM(t),e.oxw().editProcedimiento()}),e.TgZ(2,"mat-icon"),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().editProcedimiento()}),e.TgZ(5,"mat-icon"),e._uU(6,"file_open"),e.qZA()(),e.TgZ(7,"button",11),e.NdJ("click",function(){return e.CHM(t),e.oxw().deleteProcedimiento()}),e.TgZ(8,"mat-icon"),e._uU(9,"delete"),e.qZA()()()}}const Y=[{run:"11111111-1",paciente:"Manuel Caroca",fecha:"15-10-2022",hora:"20:10",especialista:"Medico 1",estado:"Activo"},{run:"99999999-9",paciente:"Javier Hernandez",fecha:"15-10-2022",hora:"20:10",especialista:"Medico 2",estado:"Cancelado"}];let G=(()=>{class i{constructor(t,o,a){this.router=t,this.dialog=o,this.notify=a,this.dataSourceTable=Y,this.tableSetup=[{columnDef:"run",title:"RUN",cell:r=>`${r.run}`},{columnDef:"paciente",title:"Paciente",cell:r=>`${r.paciente}`},{columnDef:"fecha",title:"Fecha",cell:r=>`${r.fecha}`},{columnDef:"hora",title:"Hora",cell:r=>`${r.hora}`},{columnDef:"especialista",title:"Especialista",cell:r=>`${r.especialista}`},{columnDef:"estado",title:"Estado",cell:r=>`${r.estado}`},{columnDef:"opciones",title:"Opciones",custom:!0}]}ngOnInit(){}addProcedimiento(){this.router.navigate(["/dashboard/procedimientos/datos"])}editProcedimiento(){this.router.navigate(["/dashboard/procedimientos/datos"])}deleteProcedimiento(){const t=this.dialog.open(Q.b,{width:"400px",data:{}});t.componentInstance.title="\xbfDesea eliminar este procedimiento?",t.componentInstance.btnColor="warn",t.componentInstance.btnTitle="Eliminar",t.afterClosed().subscribe(o=>{null!=o&&this.notify.success("Se elimino procedimiento")})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(v.F0),e.Y36(s.uw),e.Y36(y.E))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-gestion-procedimientos"]],decls:11,vars:3,consts:[["title","Procedimientos",3,"btnView","OnBtnAdd"],["body",""],[1,"row","justify-content-md-center"],[1,"col-md-12"],[3,"data","tableSetup"],["matColumnDef","opciones"],[4,"matHeaderCellDef"],["data-label","Opciones",4,"matCellDef"],["data-label","Opciones"],["mat-mini-fab","","color","primary",3,"click"],["mat-mini-fab","",2,"background-color","orange",3,"click"],["mat-mini-fab","","color","warn",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"app-card-container",0),e.NdJ("OnBtnAdd",function(){return o.addProcedimiento()}),e.ynx(1,1),e._UZ(2,"app-filter-procedimiento")(3,"br"),e.TgZ(4,"div",2)(5,"div",3)(6,"app-table-dynamic",4),e.ynx(7)(8,5),e.YNc(9,z,2,0,"mat-header-cell",6),e.YNc(10,H,10,0,"mat-cell",7),e.BQk()(),e.qZA()()(),e.BQk(),e.qZA()),2&t&&(e.Q6J("btnView",!0),e.xp6(6),e.Q6J("data",o.dataSourceTable)("tableSetup",o.tableSetup))},directives:[M.D,R,x.V,l.w1,l.fO,l.ge,l.Dz,l.ev,p.lW,h.Hw],styles:[""]}),i})();var B=c(7579);let W=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-modal-informe"]],decls:32,vars:1,consts:[["mat-dialog-title",""],[1,"row"],["appearance","outline",1,"col-12","col-sm-12"],["matInput",""],[1,"col-12","col-sm-12"],["mat-raised-button",""],["align","end"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"mat-dialog-close"]],template:function(t,o){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"Informe"),e.qZA(),e.TgZ(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),e._uU(6,"Es\xf3fago"),e.qZA(),e._UZ(7,"textarea",3),e.qZA(),e.TgZ(8,"mat-form-field",2)(9,"mat-label"),e._uU(10,"Est\xf3mago"),e.qZA(),e._UZ(11,"textarea",3),e.qZA(),e.TgZ(12,"div",4)(13,"mat-label"),e._uU(14,"P\xedloro"),e.qZA(),e._uU(15," \xa0 \xa0 "),e.TgZ(16,"button",5),e._uU(17,"Positivo"),e.qZA(),e._uU(18," \xa0 \xa0 "),e.TgZ(19,"button",5),e._uU(20,"Negativo"),e.qZA(),e._UZ(21,"br")(22,"br"),e.qZA(),e.TgZ(23,"mat-form-field",2)(24,"mat-label"),e._uU(25,"Conclusion"),e.qZA(),e._UZ(26,"textarea",3),e.qZA()()(),e.TgZ(27,"mat-dialog-actions",6)(28,"button",7),e._uU(29,"Volver"),e.qZA(),e.TgZ(30,"button",8),e._uU(31," Guardar "),e.qZA()()),2&t&&(e.xp6(30),e.Q6J("mat-dialog-close",!0))},directives:[s.uh,s.xY,m._Y,m.JL,m.F,d.KE,d.hX,_.Nt,p.lW,s.H8,s.ZT],styles:[""]}),i})();function L(i,n){1&i&&(e.TgZ(0,"mat-header-cell"),e._uU(1,"Opciones"),e.qZA())}function X(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"mat-cell",17)(1,"button",18),e.NdJ("click",function(){return e.CHM(t),e.oxw().editReceta()}),e.TgZ(2,"mat-icon"),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",19),e.NdJ("click",function(){return e.CHM(t),e.oxw().deleteReceta()}),e.TgZ(5,"mat-icon"),e._uU(6,"delete"),e.qZA()()()}}const j=[{medicamento:"medicamento 1",via:"oral",dosis:"1 cada",frecuencia:"24 horas",tratamiento:"7 d\xedas"},{medicamento:"medicamento 2",via:"oral",dosis:"2 cada",frecuencia:"8 horas",tratamiento:"4 d\xedas"}];let K=(()=>{class i{constructor(t,o){this.dialogRef=t,this.dataSourceTable=j,this.tableSetup=[{columnDef:"medicamento",title:"Medicamento",cell:a=>`${a.medicamento}`},{columnDef:"via",title:"Via",cell:a=>`${a.via}`},{columnDef:"dosis",title:"Dosis",cell:a=>`${a.dosis}`},{columnDef:"frecuencia",title:"Frecuencia",cell:a=>`${a.frecuencia}`},{columnDef:"tratamiento",title:"Tratamiento",cell:a=>`${a.tratamiento}`},{columnDef:"opciones",title:"Opciones",custom:!0}]}ngOnInit(){}editReceta(){}deleteReceta(){}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(s.so),e.Y36(s.WI))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-modal-receta"]],decls:64,vars:7,consts:[["mat-dialog-title",""],[1,"row"],["appearance","outline",1,"col-12","col-sm-12","col-md-6"],["value","all"],["appearance","outline",1,"col-12","col-sm-6"],["matInput","","type","text"],["appearance","outline",1,"col-12","col-sm-3"],["appearance","outline",1,"col-12","col-sm-12","col-md-3"],[1,"col-12","col-sm-12","col-md-3"],["mat-raised-button","","color","primary",1,"btn-add"],[3,"data","tableSetup"],["matColumnDef","opciones"],[4,"matHeaderCellDef"],["data-label","Opciones",4,"matCellDef"],["align","end"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","",3,"mat-dialog-close"],["data-label","Opciones"],["mat-mini-fab","","color","primary",3,"click"],["mat-mini-fab","","color","warn",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"Receta [Nombre de paciente]"),e.qZA(),e.TgZ(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),e._uU(6,"Especialista"),e.qZA(),e.TgZ(7,"mat-select",3)(8,"mat-option",3),e._uU(9,"Seleccionar"),e.qZA()()(),e.TgZ(10,"mat-form-field",4)(11,"mat-label"),e._uU(12,"Edad"),e.qZA(),e._UZ(13,"input",5),e.qZA(),e._UZ(14,"mat-divider")(15,"br"),e.TgZ(16,"mat-form-field",6)(17,"mat-label"),e._uU(18,"Medicamento"),e.qZA(),e._UZ(19,"input",5),e.qZA(),e.TgZ(20,"mat-form-field",7)(21,"mat-label"),e._uU(22,"Via Administraci\xf3n"),e.qZA(),e.TgZ(23,"mat-select",3)(24,"mat-option",3),e._uU(25,"Seleccionar"),e.qZA()()(),e.TgZ(26,"mat-form-field",7)(27,"mat-label"),e._uU(28,"Dosis"),e.qZA(),e.TgZ(29,"mat-select",3)(30,"mat-option",3),e._uU(31,"Seleccionar"),e.qZA()()(),e.TgZ(32,"mat-form-field",7)(33,"mat-label"),e._uU(34,"Frecuencia"),e.qZA(),e.TgZ(35,"mat-select",3)(36,"mat-option",3),e._uU(37,"Seleccionar"),e.qZA()()(),e.TgZ(38,"mat-form-field",7)(39,"mat-label"),e._uU(40,"Tratamiento"),e.qZA(),e.TgZ(41,"mat-select",3)(42,"mat-option",3),e._uU(43,"Seleccionar"),e.qZA()()(),e.TgZ(44,"div",8)(45,"button",9)(46,"mat-icon"),e._uU(47,"add"),e.qZA(),e._uU(48," Agregar "),e.qZA()()(),e.TgZ(49,"div",1)(50,"app-table-dynamic",10),e.ynx(51)(52,11),e.YNc(53,L,2,0,"mat-header-cell",12),e.YNc(54,X,7,0,"mat-cell",13),e.BQk()(),e.qZA()()(),e.TgZ(55,"mat-dialog-actions",14)(56,"button",15),e._uU(57,"Volver"),e.qZA(),e.TgZ(58,"button",16),e._uU(59,"Imprimir"),e.qZA(),e.TgZ(60,"button",16),e._uU(61," Enviar por email "),e.qZA(),e.TgZ(62,"button",16),e._uU(63,"Guardar"),e.qZA()()),2&t&&(e.xp6(3),e.Udp("font-size",12,"px"),e.xp6(47),e.Q6J("data",o.dataSourceTable)("tableSetup",o.tableSetup),e.xp6(8),e.Q6J("mat-dialog-close","imprimir"),e.xp6(2),e.Q6J("mat-dialog-close","email"),e.xp6(2),e.Q6J("mat-dialog-close","guardar"))},directives:[s.uh,s.xY,m._Y,m.JL,m.F,d.KE,d.hX,A.gD,Z.ey,_.Nt,U.d,p.lW,h.Hw,x.V,l.w1,l.fO,l.ge,l.Dz,l.ev,s.H8,s.ZT],styles:[".btn-add[_ngcontent-%COMP%]{width:100%;margin-top:3px;padding-bottom:4px;padding-top:4px}"]}),i})();function $(i,n){1&i&&(e.TgZ(0,"mat-header-cell"),e._uU(1,"Opciones"),e.qZA())}function ee(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"mat-cell",47)(1,"button",48),e.NdJ("click",function(){return e.CHM(t),e.oxw().editPremedicacion()}),e.TgZ(2,"mat-icon"),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",49),e.NdJ("click",function(){return e.CHM(t),e.oxw().deletePremedicacion()}),e.TgZ(5,"mat-icon"),e._uU(6,"delete"),e.qZA()()()}}function te(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"webcam",50),e.NdJ("imageCapture",function(a){return e.CHM(t),e.oxw().handleImage(a)})("initError",function(a){return e.CHM(t),e.oxw().handleInitError(a)}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("trigger",t.triggerObservable)}}function ie(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"webcam",50),e.NdJ("imageCapture",function(a){return e.CHM(t),e.oxw().handleImage(a)})("initError",function(a){return e.CHM(t),e.oxw().handleInitError(a)}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("trigger",t.triggerObservable)}}function oe(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"button",51),e.NdJ("click",function(){return e.CHM(t),e.oxw().triggerSnapshot()}),e.TgZ(1,"mat-icon"),e._uU(2,"center_focus_strong"),e.qZA()()}}function ae(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"button",52),e.NdJ("click",function(){return e.CHM(t),e.oxw().openInforme()}),e.TgZ(1,"mat-icon"),e._uU(2,"summarize"),e.qZA()()}}function ne(i,n){1&i&&(e.TgZ(0,"button",53)(1,"mat-icon"),e._uU(2,"radio_button_checked"),e.qZA()())}function re(i,n){if(1&i&&(e.TgZ(0,"div",54)(1,"mat-checkbox",24),e._uU(2,"\xa0 \xa0"),e._UZ(3,"img",55),e.qZA(),e.TgZ(4,"mat-form-field",56),e._UZ(5,"input",18),e.qZA()()),2&i){const t=n.$implicit;e.xp6(3),e.Q6J("src",t,e.LSH)}}const ce=[{premedicacion:"Diazepam",dosis:"2mg"}],le=[{path:"",children:[{path:"gestion",component:G,data:{menu:!0,agenda:!0,btnMenu:!0,name:"procedimientos"}},{path:"datos",component:(()=>{class i{constructor(t,o,a){this.dialog=t,this.notify=o,this.router=a,this.showWebcam=!1,this.showWebVideo=!1,this.trigger=new B.x,this.btnViewSnapshot=!1,this.btnViewInforme=!1,this.btnViewRecord=!1,this.dataSourceTable=ce,this.tableSetup=[{columnDef:"premedicacion",title:"Premedicaci\xf3n",cell:r=>`${r.premedicacion}`},{columnDef:"dosis",title:"Dosis",cell:r=>`${r.dosis}`},{columnDef:"opciones",title:"Opciones",custom:!0}],this.photoData=[]}ngOnInit(){}tabsChange(t){"Imagen"===t.tab.textLabel?(this.btnViewSnapshot=!0,this.btnViewRecord=!1,this.showWebVideo=!1,this.showWebcam=!0):"Video"===t.tab.textLabel?(this.btnViewRecord=!0,this.btnViewSnapshot=!1,this.showWebVideo=!0,this.showWebcam=!1):(this.showWebcam=!1,this.btnViewSnapshot=!1,this.showWebVideo=!1,this.btnViewRecord=!1)}editPremedicacion(){}deletePremedicacion(){}triggerSnapshot(){this.trigger.next()}handleImage(t){console.info("Saved webcam image",t),this.webcamImage=t,this.photoData=[...this.photoData,t.imageAsDataUrl]}get triggerObservable(){return this.trigger.asObservable()}handleInitError(t){console.log(t),t.mediaStreamError&&"NotAllowedError"===t.mediaStreamError.name&&console.warn("Camera access was not allowed by user!")}openInforme(){this.dialog.open(W,{width:"600px",data:{}}).afterClosed().subscribe(o=>{null!=o&&this.notify.success("Se guardo informe")})}procedimientoSelect(t){this.btnViewInforme="all"!==t.value}openReceta(){this.dialog.open(K,{width:"1200px",data:{}}).afterClosed().subscribe(o=>{"imprimir"===o&&this.notify.warning("Problemas con imprimir"),"email"===o&&this.notify.info("Se envi\xf3 correo con la receta"),"guardar"===o&&this.notify.success("Se guardo receta")})}saveProcedimiento(){this.notify.success("Se guardo correctamente")}importarProcedimiento(){this.notify.success("Se importo procedimiento")}finalizarProcedimiento(){this.notify.info("Se finalizo procedimiento"),this.router.navigate(["/dashboard/procedimientos/gestion"])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(s.uw),e.Y36(y.E),e.Y36(v.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-principal-procedimiento"]],decls:182,vars:10,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body",2,"text-align","center"],["mat-fab","","matTooltip","Guardar",2,"background-color","rgb(33, 134, 51)",3,"click"],["mat-fab","","matTooltip","Imprimir","href","assets/pdf/archivo-001.pdf","target","_blank",2,"background-color","rgb(237, 230, 27)"],["mat-fab","","matTooltip","Receta",2,"background-color","rgb(210, 23, 23)",3,"click"],["mat-fab","","matTooltip","Importar",2,"background-color","rgb(220, 162, 27)",3,"click"],["mat-fab","","color","primary","matTooltip","Finalizar",3,"click"],[1,"col-md-8"],["title","Procedimientos"],["body",""],[3,"selectedTabChange"],["label","Procedimiento",1,"container"],["appearance","outline",1,"col-12","col-sm-12","col-md-3"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["type","text","matInput",""],["value","all"],["value","1"],["value","2"],["value","all",3,"selectionChange"],[1,"col-12","col-sm-12","col-md-12"],["color","primary"],[1,"col-12","col-sm-12","col-md-3"],["mat-raised-button","","color","primary",1,"btn-add"],[3,"data","tableSetup"],["matColumnDef","opciones"],[4,"matHeaderCellDef"],["data-label","Opciones",4,"matCellDef"],["appearance","outline",1,"col-12","col-sm-12"],["matInput",""],["label","Imagen"],[2,"text-align","center","width","100%"],["mirrorImage","never",3,"trigger","imageCapture","initError",4,"ngIf"],["label","Video"],[1,"col-md-4"],["title","Acciones"],[1,"row",2,"text-align","center"],["mat-fab","","style","background-color: rgb(111, 32, 127)","matTooltip","Capturar Foto",3,"click",4,"ngIf"],["mat-fab","","color","primary","matTooltip","Informe",3,"click",4,"ngIf"],["mat-fab","","style","background-color: rgb(213, 40, 40)","matTooltip","Grabar",4,"ngIf"],["mat-raised-button",""],["mat-raised-button","","color","warn"],[1,"row","inputs-img"],["class","col-md-6",4,"ngFor","ngForOf"],["data-label","Opciones"],["mat-mini-fab","","color","primary",3,"click"],["mat-mini-fab","","color","warn",3,"click"],["mirrorImage","never",3,"trigger","imageCapture","initError"],["mat-fab","","matTooltip","Capturar Foto",2,"background-color","rgb(111, 32, 127)",3,"click"],["mat-fab","","color","primary","matTooltip","Informe",3,"click"],["mat-fab","","matTooltip","Grabar",2,"background-color","rgb(213, 40, 40)"],[1,"col-md-6"],["alt","","srcset","",2,"width","100%",3,"src"],["appearance","outline",2,"width","90%"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4),e.NdJ("click",function(){return o.saveProcedimiento()}),e.TgZ(5,"mat-icon"),e._uU(6,"save"),e.qZA()(),e._uU(7," \xa0 \xa0 "),e.TgZ(8,"a",5)(9,"mat-icon"),e._uU(10,"print"),e.qZA()(),e._uU(11," \xa0 \xa0 "),e.TgZ(12,"button",6),e.NdJ("click",function(){return o.openReceta()}),e.TgZ(13,"mat-icon"),e._uU(14,"receipt"),e.qZA()(),e._uU(15," \xa0 \xa0 "),e.TgZ(16,"button",7),e.NdJ("click",function(){return o.importarProcedimiento()}),e.TgZ(17,"mat-icon"),e._uU(18,"sim_card_download"),e.qZA()(),e._uU(19," \xa0 \xa0 "),e.TgZ(20,"button",8),e.NdJ("click",function(){return o.finalizarProcedimiento()}),e.TgZ(21,"mat-icon"),e._uU(22,"verified"),e.qZA()()()(),e._UZ(23,"br"),e.qZA(),e.TgZ(24,"div",9)(25,"app-card-container",10),e.ynx(26,11),e.TgZ(27,"mat-tab-group",12),e.NdJ("selectedTabChange",function(r){return o.tabsChange(r)}),e.TgZ(28,"mat-tab",13)(29,"div",0)(30,"h2",1),e._uU(31,"Datos Paciente"),e.qZA(),e.TgZ(32,"mat-form-field",14)(33,"mat-label"),e._uU(34,"Fecha del procedimiento"),e.qZA(),e._UZ(35,"input",15)(36,"mat-datepicker-toggle",16)(37,"mat-datepicker",null,17),e.qZA(),e.TgZ(39,"mat-form-field",14)(40,"mat-label"),e._uU(41,"Hora"),e.qZA(),e._UZ(42,"input",18),e.qZA(),e.TgZ(43,"mat-form-field",14)(44,"mat-label"),e._uU(45,"Especialista"),e.qZA(),e.TgZ(46,"mat-select",19)(47,"mat-option",19),e._uU(48,"Todos"),e.qZA(),e.TgZ(49,"mat-option",20),e._uU(50,"Medico 1"),e.qZA(),e.TgZ(51,"mat-option",21),e._uU(52,"Medico 2"),e.qZA()()(),e.TgZ(53,"mat-form-field",14)(54,"mat-label"),e._uU(55,"RUN"),e.qZA(),e._UZ(56,"input",18),e.qZA(),e.TgZ(57,"mat-form-field",14)(58,"mat-label"),e._uU(59,"Paciente"),e.qZA(),e._UZ(60,"input",18),e.qZA(),e.TgZ(61,"mat-form-field",14)(62,"mat-label"),e._uU(63,"Edad"),e.qZA(),e._UZ(64,"input",18),e.qZA(),e._UZ(65,"mat-divider",1),e.TgZ(66,"h2",1),e._uU(67,"Datos Procedimientos"),e.qZA(),e.TgZ(68,"mat-form-field",14)(69,"mat-label"),e._uU(70,"Equipo"),e.qZA(),e.TgZ(71,"mat-select",19)(72,"mat-option",19),e._uU(73,"Seleccionar"),e.qZA(),e.TgZ(74,"mat-option",20),e._uU(75,"Colonoscopio xsass12"),e.qZA(),e.TgZ(76,"mat-option",21),e._uU(77,"Colonoscopio 2332"),e.qZA()()(),e.TgZ(78,"mat-form-field",14)(79,"mat-label"),e._uU(80,"Procedimiento"),e.qZA(),e.TgZ(81,"mat-select",22),e.NdJ("selectionChange",function(r){return o.procedimientoSelect(r)}),e.TgZ(82,"mat-option",19),e._uU(83,"Seleccionar"),e.qZA(),e.TgZ(84,"mat-option",20),e._uU(85,"Endoscopia"),e.qZA(),e.TgZ(86,"mat-option",20),e._uU(87,"Colonoscopia"),e.qZA()()(),e.TgZ(88,"mat-form-field",14)(89,"mat-label"),e._uU(90,"Motivo"),e.qZA(),e.TgZ(91,"mat-select",19)(92,"mat-option",19),e._uU(93,"Seleccionar"),e.qZA(),e.TgZ(94,"mat-option",20),e._uU(95,"Dolor abdominal"),e.qZA(),e.TgZ(96,"mat-option",21),e._uU(97,"Reflujos"),e.qZA()()(),e.TgZ(98,"mat-form-field",14)(99,"mat-label"),e._uU(100,"Auxiliar"),e.qZA(),e.TgZ(101,"mat-select",19)(102,"mat-option",19),e._uU(103,"Seleccionar"),e.qZA()()(),e.TgZ(104,"div",23)(105,"mat-label"),e._uU(106,"Biopsia"),e.qZA(),e._UZ(107,"br"),e.TgZ(108,"mat-radio-group",24)(109,"mat-radio-button",20),e._uU(110,"Si"),e.qZA(),e._uU(111," \xa0 "),e.TgZ(112,"mat-radio-button",21),e._uU(113,"No"),e.qZA()(),e._UZ(114,"br")(115,"br"),e.qZA(),e.TgZ(116,"mat-form-field",14)(117,"mat-label"),e._uU(118,"Premedicaci\xf3n"),e.qZA(),e.TgZ(119,"mat-select",19)(120,"mat-option",19),e._uU(121,"Seleccionar"),e.qZA(),e.TgZ(122,"mat-option",20),e._uU(123,"Diazepan"),e.qZA(),e.TgZ(124,"mat-option",21),e._uU(125,"Midazolam"),e.qZA()()(),e.TgZ(126,"mat-form-field",14)(127,"mat-label"),e._uU(128,"Dosis"),e.qZA(),e._UZ(129,"input",18),e.qZA(),e.TgZ(130,"div",25)(131,"button",26)(132,"mat-icon"),e._uU(133,"add"),e.qZA(),e._uU(134," Agregar "),e.qZA()(),e.TgZ(135,"div",1)(136,"app-table-dynamic",27),e.ynx(137)(138,28),e.YNc(139,$,2,0,"mat-header-cell",29),e.YNc(140,ee,7,0,"mat-cell",30),e.BQk()(),e.qZA()(),e.TgZ(141,"mat-form-field",31)(142,"mat-label"),e._uU(143,"Diagnostico"),e.qZA(),e._UZ(144,"textarea",32),e.qZA()()(),e.TgZ(145,"mat-tab",33)(146,"div",34),e.YNc(147,te,1,1,"webcam",35),e.qZA()(),e.TgZ(148,"mat-tab",36)(149,"div",34),e.YNc(150,ie,1,1,"webcam",35),e.qZA()()(),e.BQk(),e.qZA()(),e.TgZ(151,"div",37)(152,"app-card-container",38),e.ynx(153,11),e.TgZ(154,"div",39)(155,"div",1),e.YNc(156,oe,3,0,"button",40),e._uU(157," \xa0 \xa0 "),e.YNc(158,ae,3,0,"button",41),e._uU(159," \xa0 \xa0 "),e.YNc(160,ne,3,0,"button",42),e.qZA(),e.TgZ(161,"div",1),e._UZ(162,"br"),e.TgZ(163,"button",43)(164,"mat-icon"),e._uU(165,"edit"),e.qZA(),e._uU(166," Reordenar "),e.qZA(),e._uU(167," \xa0 \xa0 "),e.TgZ(168,"button",44)(169,"mat-icon"),e._uU(170,"delete"),e.qZA(),e._uU(171," Eliminar "),e.qZA()()(),e._UZ(172,"br")(173,"mat-divider"),e.TgZ(174,"div",0)(175,"div",1),e._UZ(176,"br"),e.TgZ(177,"mat-checkbox",24),e._uU(178,"Seleccionar todas"),e.qZA()()(),e._UZ(179,"br"),e.TgZ(180,"div",45),e.YNc(181,re,6,1,"div",46),e.qZA(),e.BQk(),e.qZA()()()),2&t){const a=e.MAs(38);e.xp6(35),e.Q6J("matDatepicker",a),e.xp6(1),e.Q6J("for",a),e.xp6(100),e.Q6J("data",o.dataSourceTable)("tableSetup",o.tableSetup),e.xp6(11),e.Q6J("ngIf",o.showWebcam),e.xp6(3),e.Q6J("ngIf",o.showWebVideo),e.xp6(6),e.Q6J("ngIf",o.btnViewSnapshot),e.xp6(2),e.Q6J("ngIf",o.btnViewInforme),e.xp6(2),e.Q6J("ngIf",o.btnViewRecord),e.xp6(21),e.Q6J("ngForOf",o.photoData)}},directives:[p.lW,S.gM,h.Hw,p.zs,M.D,w.SP,w.uX,d.KE,d.hX,_.Nt,g.hl,g.nW,d.R9,g.Mq,A.gD,Z.ey,U.d,C.VQ,C.U0,x.V,l.w1,l.fO,l.ge,l.Dz,l.ev,f.O5,D,T.oG,f.sg],styles:[".inputs-img[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:none!important}.btn-add[_ngcontent-%COMP%]{width:100%;margin-top:3px;padding-bottom:4px;padding-top:4px}.displayNone[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]     .mat-tab-label{color:#3f51b5!important}"]}),i})(),data:{menu:!1,agenda:!1,btnMenu:!0,name:"procedimientos-datos"}}]}];let se=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[v.Bz.forChild(le)],v.Bz]}),i})(),me=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[f.ez,se,h.Ps,l.p0,p.ot,m.UX,m.u5,g.FA,d.lN,A.LD,Z.XK,_.c,T.p9,U.t,C.Fk,w.Nh,s.Is,S.AV,N.m,O]]}),i})()}}]);