(this.webpackJsonpportfolio_app=this.webpackJsonpportfolio_app||[]).push([[0],{33:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var i,o=t(7),a=t.n(o),r=t(19),d=t.n(r),s=(t(33),t(20)),l=t(21).a.div(i||(i=Object(s.a)(["\n  width: 100%;\n  height: 100vh;\n"]))),c=t(2),p=t(25),u=t(26),f=t(27),g=t(28),h=null,m=(new g.a.timeline({defaults:{duration:30}}),new c.db),w=new c.U(25,1,.1,2e3);m.add(w),w.position.set(0,0,5),w.lookAt(new c.rb),m.background=new c.h(1249813),m.fog=new c.n(1249813,.1);var b=new c.tb({antialias:!0});b.setSize(100,100);var v=new p.a(w,b.domElement);v.enableDamping=!0,v.target.y=0;var x=function(){b.setSize(h.clientWidth,h.clientHeight),w.aspect=h.clientWidth/h.clientHeight,w.updateProjectionMatrix()};window.addEventListener("resize",x);var j=new c.a(10461183,1);m.add(j);var y=new c.V(3289746,4);y.position.y=5,y.position.x=1,m.add(y);var z=new c.V(11489898,2);z.position.set(-2,1,5),m.add(z);var O=(new c.i).load(["./hdri/px.png","./hdri/nx.png","./hdri/py.png","./hdri/ny.png","./hdri/pz.png","./hdri/nz.png"]);m.environment=O;var M=new c.nb,E=M.load("textures/eroded-stylized-cliff3-albedo.png"),S=M.load("textures/eroded-stylized-cliff3-ao.png"),k=M.load("textures/eroded-stylized-cliff3-normal-ogl.png"),C=M.load("textures/eroded-stylized-cliff3-height.png"),A=M.load("textures/eroded-stylized-cliff3-metallic.png"),D=M.load("textures/eroded-stylized-cliff3-roughness.png"),P=(new c.hb(.5,64,64),new c.M({map:E,aoMap:S,roughnessMap:D,normalMap:k,displacementMap:C,displacementScale:.1,metalnessMap:A,wireframe:!0}),new f.a);P.setDecoderPath("./draco/");var F=new u.a;F.setDRACOLoader(P),F.load("./models/cubetas/pro.gltf",(function(e){m.add(e.scene)}),(function(){console.log("Progress")}),(function(){console.log("Error")}));!function e(){v.update(),b.render(m,w),requestAnimationFrame(e)}();var H=t(10),J=function(){var e=Object(o.useRef)(null);return Object(o.useEffect)((function(){return function(e){h=e.current,x(),h.appendChild(b.domElement)}(e),function(){m.dispose(),h.removeChild(b.domElement)}}),[]),Object(H.jsx)(l,{className:"SceneContainer",ref:e})};var L=function(){return Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(J,{})})};d.a.render(Object(H.jsx)(a.a.StrictMode,{children:Object(H.jsx)(L,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.608b0d65.chunk.js.map