import{j as e}from"./index-fm0F84UX.js";import{r as o}from"./react-t7nT_heO.js";import{P as t}from"./index-Nafxz_UV.js";import{N as j,u as y,e as L}from"./reactRouter-Jh5tb--W.js";import{v as p}from"./v4-yQnnJER4.js";import{T as w}from"./TitleSection-dGV4_s-w.js";import"./recoil-Y9BdFwrk.js";import"./fbAuth-Cks-JP-t.js";import"./fbApp-WBmmrZ2E.js";import"./fbStore-ITQ65Lcc.js";import"./fbStorage-DidXJKWr.js";const H="_0zOX",C="Yhjp",M="NiwP",b="_9rUT",k="SPG5",N="BVgc",O="J2c-",D="LNUa",W="JS7h",R="i3Z0",B="_3ZOX",F="gFV0",A="We58",P="IBd6",S="LQAV",_="y-3m",E="R0qT",V="l84P",$="Ih9K",i={Card:H,linkTextWrapper:C,image:M,textWrapper:b,title:k,subtitle:N,CardWrapper:O,Desc:D,descContentsWrapper:W,imgWrapper:R,img:B,description:F,buttonList:A,button:P,isClicked:S,FuncChar:_,list:E,item:V,itemText:$},G="/assets/machines_C060D-suEWKlrS.png",Q="/assets/machines_C100D-pSTCvd73.png",X="/assets/machines_C200-0sh5P17q.png",I="/assets/machines_C200-0sh5P17q.png",K="/assets/machines_Fork-Lift Type-gVpernxo.png",U="/assets/machines_Foup Type-gedKhQN0.png",J="/assets/machines_L300-uXoLF8Pf.png",z="/assets/machines_L1000-SXNG377a.png",Y="/assets/machines_P200-gi3qO1sv.png",t0="/assets/devices_HoloLens 2-ocPBsBHP.png",Z={"C060D CE":G,"C100D CE":Q,C200:X,C300:I,F150A:K,OW12:U,L300:J,L1000:z,P200:Y,"HoloLens 2":t0};function u({title:s,subTitle:c,currentLocation:h,data:a}){return e.jsx(j,{to:`/${h}/${c}`,className:i.Card,children:e.jsxs("div",{className:i.linkTextWrapper,children:[e.jsx("div",{className:i.image,children:e.jsx("img",{src:Z[Object.keys(a[s][c])[0]],alt:"Card 이미지"})}),e.jsxs("div",{className:i.textWrapper,children:[e.jsx("p",{className:i.title,children:s}),e.jsx("p",{className:i.subtitle,children:c})]})]})})}u.propTypes={title:t.string.isRequired,subTitle:t.string.isRequired,currentLocation:t.string.isRequired,data:t.objectOf(t.objectOf(t.objectOf(t.shape({char:t.arrayOf(t.shape({icon:t.string,text:t.string})),desc:t.arrayOf(t.string)})))).isRequired};function f({data:s,currentLocation:c}){return e.jsx("nav",{className:i.CardWrapper,children:Object.entries(s).map(([h,a])=>Object.entries(a).map(([r])=>e.jsx(u,{title:h,subTitle:r,currentLocation:c,data:s},p())))})}f.propTypes={data:t.objectOf(t.objectOf(t.objectOf(t.shape({char:t.arrayOf(t.shape({icon:t.string,text:t.string})),desc:t.arrayOf(t.string)})))).isRequired,currentLocation:t.string.isRequired};const e0={"Lift Type1":{"C060D CE":{desc:["C060D CE은 좁은 통로와 다양한 차종에 최적화된 크기를 갖추고 있습니다.","레이저 SLAM 및 시각적 융합 내비게이션을 통해 다양한 요구사항을 충족시키며, 안전성 향상을 위한 다중 장애물 회피 솔루션을 제공합니다.","600 kg의 하중을 지원하며, 부하가 없을 때의 속도는 2.0m/s, 정격 하중 속도는 1.0m/s입니다."],char:[{text:"빠른 배터리 교체 지원",icon:"batteryCharging"},{text:"높은 대역폭과 낮은 지연 시간으로 Wi-Fi를 지원",icon:"wifi"}]},"C100D CE":{desc:["C100D CE은 좁은 통로와 다양한 차종에 최적화된 크기를 갖추고 있습니다.","레이저 SLAM 및 시각적 융합 내비게이션을 통해 다양한 요구사항을 충족시키며, 안전성 향상을 위한 다중 장애물 회피 솔루션을 제공합니다.","1000kg의 하중을 지원하며, 부하가 없을 때의 속도는 1.5m/s, 정격 하중 속도는 0.8m/s입니다."],char:[{text:"빠른 배터리 교체 지원",icon:"batteryCharging"},{text:"높은 대역폭과 낮은 지연 시간으로 Wi-Fi를 지원",icon:"wifi"}]},C200:{desc:["C200은 좁은 통로와 다양한 차종에 최적화된 크기를 갖추고 있습니다.","레이저 SLAM 및 시각적 융합 내비게이션을 통해 다양한 요구사항을 충족시키며, 안전성 향상을 위한 다중 장애물 회피 솔루션을 제공합니다.","2000kg의 하중을 지원하며, 부하가 없을 때의 속도는 1.2m/s, 정격 하중 속도는 1.0m/s입니다."],char:[{text:"빠른 배터리 교체 지원",icon:"batteryCharging"},{text:"높은 대역폭과 낮은 지연 시간으로 Wi-Fi를 지원",icon:"wifi"}]},C300:{desc:["C300은 좁은 통로와 다양한 차종에 최적화된 크기를 갖추고 있습니다.","레이저 SLAM 및 시각적 융합 내비게이션을 통해 다양한 요구사항을 충족시키며, 안전성 향상을 위한 다중 장애물 회피 솔루션을 제공합니다.","3000kg의 하중을 지원하며, 부하가 없을 때의 속도는 1.2m/s, 정격 하중 속도는 1.0m/s입니다."],char:[{text:"빠른 배터리 교체 지원",icon:"batteryCharging"},{text:"높은 대역폭과 낮은 지연 시간으로 Wi-Fi를 지원",icon:"wifi"}]}},"Lift Type2":{P200:{desc:["P200은 제조 시설에서 복잡한 재료 처리 작업을 처리하도록 설계된 다용도 솔루션입니다.","AMR과 최고 모듈 모두에 대해 하루 종일 작동할 수 있도록 상단 모듈과 코봇 통합을 위한 범용 인터페이스와 더 큰 정격 용량의 배터리가 내장되어 있습니다."],char:[{text:"복잡한 재료 처리 작업 처리",icon:"rebase"},{text:"코봇 통합을 위한 범용 인터페이스",icon:"gridView"},{text:"더 큰 정격 용량의 배터리",icon:"batteryPlus"}]},L300:{desc:["L300은 민첩하며 통로가 좁은 창고나 제조 시설에 적합한 옵션입니다.","최대 적재량 300kg을 운반하는 AMR에는 최대 높이 60mm에서 상승하고 360도 회전하는 상단 모듈이 장착되어 있습니다."],char:[{text:"유연한 구축 및 클러스터 구축",icon:"flexWrap"},{text:"상단 모듈 들어 올리기 및 회전",icon:"D360"},{text:"지능형 교통정리",icon:"editRoad"},{text:"8시간 런타임",icon:"timer"},{text:"LiDAR, QR 코드 캐리어 도킹 카메라",icon:"qr"}]},L1000:{desc:["L1000은 적재량이 1000kg에 달하는 가장 강력한 AMR 중 하나입니다.","설비에서 가장 무거운 작업량을 처리하고 제품, 랙 및 팔레트의 이동을 자동화하여 창고 내 물류 효율성 및 처리량을 최적화하는 것을 목표로 설계되었습니다."],char:[{text:"유연한 구축 및 클러스터 구축",icon:"flexWrap"},{text:"상단 모듈 들어 올리기 및 회전",icon:"D360"},{text:"지능형 교통정리",icon:"editRoad"},{text:"8시간 런타임",icon:"timer"},{text:"LiDAR, QR 코드 캐리어 도킹 카메라",icon:"qr"}]}},"Fork-Lift Type":{F150A:{desc:["AGV Fork-Lift Type은 1500kg의 정격 하중, 픽업 채널 2.2m입니다.","지능형 자율 팔렛 인식 기능으로 좁은 통로에서 독립적인 팔렛 인식 및 로딩/언로딩이 가능하며, 강화된 안전 보호를 위해 다양한 안전 센서를 통합합니다."],char:[{text:"레이저 SLAM 내비게이션 활용",icon:"navigation"},{text:"표준 팔레트를 수용하고 수평 지상 운송을 지원하기 위한 2m의 리프팅 높이",icon:"forkLift"}]}},"Foup Type":{OW12:{desc:["Foup Type은 이 12인치  집게발을 가지고 있으며 통합 시각 위치 결정 및 다중 물체 위치 식별 능력과 함께, 다양한 기기 상태를 식별하는 기능을 갖추고 있습니다.","또한 협동형으로 동작하는 URL10 로봇 팔과 함께 사용되며, 터치 조작 판 및 로봇 팔 동작 시의 인체 감지 센서를 포함하여 사용자 친화적인 제어를 제공합니다.","로봇 주변에 위치한 상태 표시등은 로봇의 현재 작동 상태를 시각적으로 표현하며, Lidar 센서를 통한 네비게이션 및 장애물 회피 기능을 갖추고 있습니다.","또한 디버깅 인터페이스와 충전 접촉면을 통해 로봇의 자동 충전이 가능하며, 충돌 검출 기능을 통해 낮은 장애물을 감지하고 360° 보호를 제공합니다."],char:[{text:"협동형 로봇 팔",icon:"precisionManufacturing"},{text:"로봇 주변 상태 표시 및 인체 감지",icon:"detectorAlarm"},{text:"로봇 네비게이션 및 충돌 검출",icon:"carCrash"}]}}},s0={AGV:e0},i0={"MR Device":{Microsoft:{"HoloLens 2":{desc:["HoloLens 2는 Microsoft가 개발한 2세대 HMD 증강현실 디바이스로, 현존하는 기기 중 최고의 퍼포먼스를 자랑하는 스탠드 얼론 제품입니다.","물리적 공간 및 물체와 홀로그램 이미지를 결합하여 상호작용하며, VR과 AR의 한계를 벗어난 Mixed Reality(혼합현실)을 사용하여 제조, 건축, 교육 등 다양한 분야에서 활용할 수 있습니다."],char:[{text:"몰입감: 시야각을 넓혀 더 많은 홀로그램을 한 번에 쉽고 편안하게 볼 수 있습니다.",icon:"eyeglasses"},{text:"인체공학적 설계: 다이얼 인 핏(Dial-in-Fit) 시스템으로 설계되어 장시간 착용 시에도 편안합니다.",icon:"designServices"},{text:"직관적 방식: 홀로그램을 자연스럽게 터치하고 움직이면 실제 물체처럼 반응합니다.",icon:"psychology"},{text:"편의성: Wi-Fi에 연결된 독립형 디바이스로 움직임에 방해되는 전선이나 외부 부속물 없이 자유롭게 이동할 수 있습니다.",icon:"conversionPath"}]}}}};function x({descProps:s,id:c,currentLocation:h,selectedProduct:a,setSelectedProduct:r}){var g;o.useEffect(()=>{s&&Object.values(s).length>0&&r(Object.keys(s.types)[0])},[s,r]);function m(n){r(n.target.value)}const v=Z[a];return e.jsxs("div",{className:i.Desc,children:[e.jsxs("h3",{className:`${i.title} ${h==="devices"?"text-center":""}`,children:[s.product,e.jsx("span",{children:" - "}),c]}),e.jsx("ul",{className:i.buttonList,children:s.types&&Object.keys(s.types).map(n=>e.jsx("li",{children:e.jsx("button",{type:"button",value:n,onClick:m,className:`${a===n?i.isClicked:""} ${i.button}`,children:n})},p()))}),e.jsxs("div",{className:i.descContentsWrapper,children:[e.jsx("div",{className:i.imgWrapper,children:v&&e.jsx("img",{src:v,alt:"Machines",className:i.img})}),e.jsx("div",{className:i.textWrapper,children:e.jsx("ul",{children:s.types&&((g=s.types[a])==null?void 0:g.desc.map(n=>e.jsx("li",{className:i.description,children:n},p())))})})]})]})}x.propTypes={descProps:t.shape({types:t.objectOf(t.shape({char:t.arrayOf(t.shape({icon:t.string,text:t.string})),desc:t.arrayOf(t.string)})),product:t.string}).isRequired,id:t.string.isRequired,currentLocation:t.string.isRequired,selectedProduct:t.string,setSelectedProduct:t.func.isRequired};x.defaultProps={selectedProduct:""};const c0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='m360-160-56-56%2070-72q-128-17-211-70T80-480q0-83%20115.5-141.5T480-680q169%200%20284.5%2058.5T880-480q0%2062-66.5%20111T640-296v-82q77-20%20118.5-49.5T800-480q0-32-85.5-76T480-600q-149%200-234.5%2044T160-480q0%2024%2051%2057.5T356-372l-52-52%2056-56%20160%20160-160%20160Z'/%3e%3c/svg%3e",a0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M320-80q-17%200-28.5-11.5T280-120v-640q0-17%2011.5-28.5T320-800h80v-80h160v80h80q17%200%2028.5%2011.5T680-760v280q-100%201-170%2070.5T440-240q0%2046%2016%2087t45%2073H320Zm40-560h240v-80H360v80ZM660-80v-120H560l140-200v120h100L660-80Z'/%3e%3c/svg%3e",n0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M360-160Zm-40%2080q-17%200-28.5-11.5T280-120v-640q0-17%2011.5-28.5T320-800h80v-80h160v80h80q17%200%2028.5%2011.5T680-760v280q-21%200-41%203.5T600-466v-254H360v560h94q8%2023%2019.5%2043T501-80H320Zm320%200v-120H520v-80h120v-120h80v120h120v80H720v120h-80Z'/%3e%3c/svg%3e",h0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M720-520q-83%200-141.5-58.5T520-720q0-82%2058-141t142-59q83%200%20141.5%2058.5T920-720q0%2083-58.5%20141.5T720-520Zm-20-160h40v-160h-40v160ZM160-160q-17%200-28.5-11.5T120-200v-320l84-240q6-18%2021.5-29t34.5-11h192q-6%2019-9%2039t-3%2041H274l-42%20120h235q11%2023%2025.5%2043t32.5%2037H200v200h560v-123q21-3%2041-9t39-15v267q0%2017-11.5%2028.5T800-160h-40q-17%200-28.5-11.5T720-200v-40H240v40q0%2017-11.5%2028.5T200-160h-40Zm560-440q8%200%2014-6t6-14q0-8-6-14t-14-6q-8%200-14%206t-6%2014q0%208%206%2014t14%206ZM300-360q25%200%2042.5-17.5T360-420q0-25-17.5-42.5T300-480q-25%200-42.5%2017.5T240-420q0%2025%2017.5%2042.5T300-360Zm360%200q25%200%2042.5-17.5T720-420q0-5-.5-10t-2.5-10q-27%200-52.5-5T616-460q-8%208-12%2018.5t-4%2021.5q0%2025%2017.5%2042.5T660-360Zm-460%2040v-200%20200Z'/%3e%3c/svg%3e",r0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M760-120q-39%200-70-22.5T647-200H440q-66%200-113-47t-47-113q0-66%2047-113t113-47h80q33%200%2056.5-23.5T600-600q0-33-23.5-56.5T520-680H313q-13%2035-43.5%2057.5T200-600q-50%200-85-35t-35-85q0-50%2035-85t85-35q39%200%2069.5%2022.5T313-760h207q66%200%20113%2047t47%20113q0%2066-47%20113t-113%2047h-80q-33%200-56.5%2023.5T360-360q0%2033%2023.5%2056.5T440-280h207q13-35%2043.5-57.5T760-360q50%200%2085%2035t35%2085q0%2050-35%2085t-85%2035ZM200-680q17%200%2028.5-11.5T240-720q0-17-11.5-28.5T200-760q-17%200-28.5%2011.5T160-720q0%2017%2011.5%2028.5T200-680Z'/%3e%3c/svg%3e",o0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='m352-522%2086-87-56-57-44%2044-56-56%2043-44-45-45-87%2087%20159%20158Zm328%20329%2087-87-45-45-44%2043-56-56%2043-44-57-56-86%2086%20158%20159Zm24-567%2057%2057-57-57ZM290-120H120v-170l175-175L80-680l200-200%20216%20216%20151-152q12-12%2027-18t31-6q16%200%2031%206t27%2018l53%2054q12%2012%2018%2027t6%2031q0%2016-6%2030.5T816-647L665-495l215%20215L680-80%20465-295%20290-120Zm-90-80h56l392-391-57-57-391%20392v56Zm420-419-29-29%2057%2057-28-28Z'/%3e%3c/svg%3e",v0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M440-120v-200h80v200h-80Zm323-101L621-362l57-57%20141%20142-56%2056Zm-566%200-56-56%20141-142%2057%2057-142%20141Zm3-539v40h560v-40H200Zm124%20120%2012%2040h288l12-40H324Zm12%20120q-26%200-47-15.5T260-576l-20-64h-40q-33%200-56.5-23.5T120-720v-120h720v120q0%2033-23.5%2056.5T760-640h-40l-26%2068q-9%2023-29%2037.5T620-520H336ZM200-760v40-40Z'/%3e%3c/svg%3e",l0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M640-475v-325h80v245l-80%2080ZM160-160v-640h80v640h-80Zm240-480v-160h80v160h-80Zm0%20240v-160h80v160h-80Zm0%20240v-160h80v160h-80Zm160%200v-123l221-220q9-9%2020-13t22-4q12%200%2023%204.5t20%2013.5l37%2037q8%209%2012.5%2020t4.5%2022q0%2011-4%2022.5T903-380L683-160H560Zm300-263-37-37%2037%2037ZM620-220h38l121-122-18-19-19-18-122%20121v38Zm141-141-19-18%2037%2037-18-19Z'/%3e%3c/svg%3e",m0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M274-360q31%200%2055.5-18t34.5-47l15-46q16-48-8-88.5T302-600H161l19%20157q5%2035%2031.5%2059t62.5%2024Zm412%200q36%200%2062.5-24t31.5-59l19-157H659q-45%200-69%2041t-8%2089l14%2045q10%2029%2034.5%2047t55.5%2018Zm-412%2080q-66%200-115.5-43.5T101-433L80-600H40v-80h262q44%200%2080.5%2021.5T440-600h81q21-37%2057.5-58.5T659-680h261v80h-40l-21%20167q-8%2066-57.5%20109.5T686-280q-57%200-102.5-32.5T520-399l-15-45q-2-7-4-14.5t-4-21.5h-34q-2%2012-4%2019.5t-4%2014.5l-15%2046q-18%2054-63.5%2087T274-280Z'/%3e%3c/svg%3e",g0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M40-80v-360h240v360H40Zm320%200v-360h240v360H360Zm320%200v-360h240v360H680Zm-240-80h80v-200h-80v200ZM40-520v-360h240v360H40Zm320%200v-360h240v360H360Zm320%200v-360h240v360H680Zm-560-80h80v-200h-80v200Zm640%200h80v-200h-80v200Z'/%3e%3c/svg%3e",p0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M160-120q-50%200-85-35t-35-85q0-26%2010-49.5T80-330v-190h80v-240h320l188%20443q6%2014%209%2028t3%2029q0%2058-41%2099t-99%2041q-41%200-75.5-21.5T413-200H273q-13%2036-44%2058t-69%2022Zm560-40v-640h80v560h120v80H720Zm-560-40q17%200%2028.5-11.5T200-240q0-17-11.5-28.5T160-280q-17%200-28.5%2011.5T120-240q0%2017%2011.5%2028.5T160-200Zm380%200q25%200%2042.5-17.5T600-260q0-25-17.5-42.5T540-320q-25%200-42.5%2017.5T480-260q0%2025%2017.5%2042.5T540-200Zm-267-80h128q2-11%204.5-20.5T413-320h-90L206-440h-46v80q38%200%2069%2022t44%2058Zm84-120h189L427-680H240v160l117%20120Zm-34%2080-18.5-19q-18.5-19-40-41.5t-40-41L206-440h-46%2046l117%20120h90-90Z'/%3e%3c/svg%3e",q0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M120-520v-320h320v320H120Zm0%20400v-320h320v320H120Zm400-400v-320h320v320H520Zm0%20400v-320h320v320H520ZM200-600h160v-160H200v160Zm400%200h160v-160H600v160Zm0%20400h160v-160H600v160Zm-400%200h160v-160H200v160Zm400-400Zm0%20240Zm-240%200Zm0-240Z'/%3e%3c/svg%3e",d0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='m200-120-40-40%20320-720%20320%20720-40%2040-280-120-280%20120Zm84-124%20196-84%20196%2084-196-440-196%20440Zm196-84Z'/%3e%3c/svg%3e",x0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M159-120v-120h124L181-574q-27-15-44.5-44T119-680q0-50%2035-85t85-35q39%200%2069.5%2022.5T351-720h128v-40q0-17%2011.5-28.5T519-800q9%200%2017.5%204t14.5%2012l68-64q9-9%2021.5-11.5T665-856l156%2072q12%206%2016.5%2017.5T837-744q-6%2012-17.5%2015.5T797-730l-144-66-94%2088v56l94%2086%20144-66q11-5%2023-1t17%2015q6%2012%201%2023t-17%2017l-156%2074q-12%206-24.5%203.5T619-512l-68-64q-6%206-14.5%2011t-17.5%205q-17%200-28.5-11.5T479-600v-40H351q-3%208-6.5%2015t-9.5%2015l200%20370h144v120H159Zm80-520q17%200%2028.5-11.5T279-680q0-17-11.5-28.5T239-720q-17%200-28.5%2011.5T199-680q0%2017%2011.5%2028.5T239-640Zm126%20400h78L271-560h-4l98%20320Zm78%200Z'/%3e%3c/svg%3e",T0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M240-80v-172q-57-52-88.5-121.5T120-520q0-150%20105-255t255-105q125%200%20221.5%2073.5T827-615l52%20205q5%2019-7%2034.5T840-360h-80v120q0%2033-23.5%2056.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116%200-198%2081t-82%20197q0%2060%2024.5%20114t69.5%2096l26%2024v208h-80Zm254-360Zm-54%2080h80l6-50q8-3%2014.5-7t11.5-9l46%2020%2040-68-40-30q2-8%202-16t-2-16l40-30-40-68-46%2020q-5-5-11.5-9t-14.5-7l-6-50h-80l-6%2050q-8%203-14.5%207t-11.5%209l-46-20-40%2068%2040%2030q-2%208-2%2016t2%2016l-40%2030%2040%2068%2046-20q5%205%2011.5%209t14.5%207l6%2050Zm40-100q-25%200-42.5-17.5T420-520q0-25%2017.5-42.5T480-580q25%200%2042.5%2017.5T540-520q0%2025-17.5%2042.5T480-460Z'/%3e%3c/svg%3e",w0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M120-520v-320h320v320H120Zm80-80h160v-160H200v160Zm-80%20480v-320h320v320H120Zm80-80h160v-160H200v160Zm320-320v-320h320v320H520Zm80-80h160v-160H600v160Zm160%20480v-80h80v80h-80ZM520-360v-80h80v80h-80Zm80%2080v-80h80v80h-80Zm-80%2080v-80h80v80h-80Zm80%2080v-80h80v80h-80Zm80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80%2080v-80h80v80h-80Z'/%3e%3c/svg%3e",Z0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='m430-30-56-57%2073-73H313q-13%2035-43.5%2057.5T200-80q-50%200-85-35t-35-85q0-39%2022.5-69.5T160-313v-334q-35-13-57.5-43.5T80-760q0-50%2035-85t85-35q39%200%2069.5%2022.5T313-800h134l-73-73%2056-57%20170%20170-170%20170-56-57%2073-73H313q-9%2026-28%2045t-45%2028v334q26%209%2045%2028t28%2045h134l-73-73%2056-57%20170%20170L430-30Zm330-50q-50%200-85-35t-35-85q0-40%2022.5-70.5T720-313v-334q-35-12-57.5-42.5T640-760q0-50%2035-85t85-35q50%200%2085%2035t35%2085q0%2040-22.5%2070.5T800-647v334q35%2013%2057.5%2043.5T880-200q0%2050-35%2085t-85%2035Zm-560-80q17%200%2028.5-11.5T240-200q0-17-11.5-28.5T200-240q-17%200-28.5%2011.5T160-200q0%2017%2011.5%2028.5T200-160Zm560%200q17%200%2028.5-11.5T800-200q0-17-11.5-28.5T760-240q-17%200-28.5%2011.5T720-200q0%2017%2011.5%2028.5T760-160ZM200-720q17%200%2028.5-11.5T240-760q0-17-11.5-28.5T200-800q-17%200-28.5%2011.5T160-760q0%2017%2011.5%2028.5T200-720Zm560%200q17%200%2028.5-11.5T800-760q0-17-11.5-28.5T760-800q-17%200-28.5%2011.5T720-760q0%2017%2011.5%2028.5T760-720ZM200-200Zm560%200ZM200-760Zm560%200Z'/%3e%3c/svg%3e",u0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M360-840v-80h240v80H360Zm80%20440h80v-240h-80v240Zm40%20320q-74%200-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74%2028.5-139.5T226-694q49-49%20114.5-77.5T480-800q62%200%20119%2020t107%2058l56-56%2056%2056-56%2056q38%2050%2058%20107t20%20119q0%2074-28.5%20139.5T734-186q-49%2049-114.5%2077.5T480-80Zm0-80q116%200%20198-82t82-198q0-116-82-198t-198-82q-116%200-198%2082t-82%20198q0%20116%2082%20198t198%2082Zm0-280Z'/%3e%3c/svg%3e",f0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20width='24'%3e%3cpath%20d='M480-120q-42%200-71-29t-29-71q0-42%2029-71t71-29q42%200%2071%2029t29%2071q0%2042-29%2071t-71%2029ZM254-346l-84-86q59-59%20138.5-93.5T480-560q92%200%20171.5%2035T790-430l-84%2084q-44-44-102-69t-124-25q-66%200-124%2025t-102%2069ZM84-516%200-600q92-94%20215-147t265-53q142%200%20265%2053t215%20147l-84%2084q-77-77-178.5-120.5T480-680q-116%200-217.5%2043.5T84-516Z'/%3e%3c/svg%3e",j0={D360:c0,batteryCharging:a0,batteryPlus:n0,carCrash:h0,conversionPath:r0,designServices:o0,detectorAlarm:v0,editRoad:l0,eyeglasses:m0,flexWrap:g0,forkLift:p0,gridView:q0,navigation:d0,precisionManufacturing:x0,psychology:T0,qr:w0,rebase:Z0,timer:u0,wifi:f0};function T({descProps:s,selectedProduct:c}){var h;return e.jsxs("div",{className:i.FuncChar,children:[e.jsx("p",{className:i.title,children:"기능 및 특징"}),e.jsx("ul",{className:i.list,children:s.types&&((h=s.types[c])==null?void 0:h.char.map(a=>e.jsxs("li",{className:i.item,children:[e.jsx("img",{src:j0[a.icon],alt:"Machines",className:"desktop:w-open-5xl tablet:w-open-5xl w-open-2xl desktop:h-open-5xl tablet:h-open-5xl h-open-w-open-2xl"}),e.jsx("span",{className:i.itemText,children:a.text})]},p())))})]})}T.propTypes={descProps:t.shape({types:t.objectOf(t.shape({char:t.arrayOf(t.shape({icon:t.string,text:t.string})),desc:t.arrayOf(t.string)})),product:t.string}).isRequired,selectedProduct:t.string};T.defaultProps={selectedProduct:""};function R0(){const[s,c]=o.useState({}),[h,a]=o.useState({types:{},product:""}),[r,m]=o.useState(""),[v,g]=o.useState(""),n=y(),{id:l}=L();return o.useEffect(()=>{n.pathname.includes("machines")?(c(s0),m("machines")):n.pathname.includes("devices")&&(c(i0),m("devices"))},[n]),o.useEffect(()=>{if(s&&Object.values(s).length>0){const q=Object.entries(s).find(d=>d[1][l]);q&&a(d=>({...d,types:q[1][l],product:q[0]}))}},[s,l]),e.jsxs("div",{className:"w-full",children:[n.pathname.includes("machines")?e.jsx(w,{category:"Open Smart Machine",title:"자동화의 시작과 끝,",subTitle:"Smart Machine",background:"bg-[url('@/assets/products_background.svg')]",textAlign:"text-left"}):e.jsx(w,{category:"Open Device",title:"미래를 여는 오픈 디바이스",background:"bg-[url('@/assets/products_background.svg')]",textAlign:"text-left"}),e.jsxs("section",{className:"w-full flex flex-col items-center",children:[e.jsx("section",{className:"desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile flex flex-col items-center w-full",children:e.jsx(f,{data:s,currentLocation:r})}),e.jsx("section",{className:"w-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile",children:e.jsxs("div",{className:"w-full flex flex-col items-center",children:[e.jsx("h2",{className:"sr-only",children:"제품 소개"}),e.jsx(x,{descProps:h,id:l,currentLocation:r,selectedProduct:v,setSelectedProduct:g})]})}),e.jsx("section",{className:"-bg--open-gray-50 w-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile ",children:e.jsxs("div",{className:"w-full flex flex-col items-center",children:[e.jsx("h2",{className:"sr-only",children:"기능 및 특징"}),e.jsx(T,{descProps:h,id:l,selectedProduct:v})]})})]})]})}export{R0 as default};
