(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,21318,e=>{"use strict";var a=e.i(43476),t=e.i(71645),i=e.i(57688),o=e.i(7270),r=e.i(22016),s=e.i(18566),n=e.i(58394),l=e.i(58006);let c=({isOpen:e,onClose:t,imageSrc:o})=>(0,a.jsx)(l.Modal,{open:e,onClose:t,center:!0,styles:{modal:{maxWidth:"1000px",width:"100%",padding:"20px",background:"transparent",boxShadow:"none"},closeButton:{background:"#fff",borderRadius:"50%"}},children:o&&(0,a.jsx)("div",{style:{width:"100%",height:"100%",position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)(i.default,{src:o,alt:"Screenshot",style:{width:"100%",height:"auto",objectFit:"contain",maxHeight:"90vh",borderRadius:"12px"}})})});var d=e.i(65095),p=e.i(97889);let x=({project:e,prevId:o,nextId:s})=>{let[n,l]=(0,t.useState)(d.clientCompaniesWork.some(a=>a.id===e.client)?e.client:"make-my-homes"),[c,x]=(0,t.useState)("videos"),[f,h]=(0,t.useState)(null),[m,g]=(0,t.useState)(""),[b,u]=(0,t.useState)(null),[w,v]=(0,t.useState)(null),j=d.clientCompaniesWork.find(e=>e.id===n)||d.clientCompaniesWork[0],y=j.videos||[],N=j.images||[],k=j.brochures||[];return(0,a.jsxs)("section",{className:"client-showcase-section fix section-padding",children:[(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"showcase-hero text-center mb-5 wow fadeInUp","data-wow-delay":".2s",children:[(0,a.jsxs)("span",{className:"showcase-badge mb-3",children:[(0,a.jsx)("i",{className:"fa-solid fa-bullhorn me-1"}),e.category[0]," Project"]}),(0,a.jsxs)("h1",{className:"showcase-hero-title mb-3",children:["Client ",(0,a.jsx)("span",{className:"highlight-gradient",children:"Deliverables Hub"})]}),(0,a.jsx)("p",{className:"showcase-hero-desc mx-auto",children:"Explore the actual websites, mobile apps, social media ads, brochures, graphic designs, and video reels we created for our clients. Click on any brand below to see our work."})]}),(0,a.jsxs)("div",{className:"active-company-card mb-5 wow fadeInUp","data-wow-delay":".4s",children:[(0,a.jsxs)("div",{className:"row g-4 align-items-center mb-4",children:[(0,a.jsxs)("div",{className:"col-lg-7",children:[(0,a.jsxs)("div",{className:"company-header d-flex align-items-center gap-3 mb-3",children:[(0,a.jsx)("div",{className:"company-logo-badge",children:(0,a.jsx)(i.default,{src:j.logo,alt:j.name,className:"company-logo-main",width:64,height:64})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"company-main-title",children:j.name}),(0,a.jsx)("span",{className:"company-tagline",children:j.tagline})]})]}),(0,a.jsx)("p",{className:"company-description-text mb-4",children:j.description}),(0,a.jsx)("div",{className:"services-tags-container d-flex flex-wrap gap-2",children:j.services.map((e,t)=>(0,a.jsxs)("span",{className:"service-tag-pill",children:[(0,a.jsx)("i",{className:"fa-solid fa-circle-check text-green me-1"}),e]},t))})]}),(0,a.jsx)("div",{className:"col-lg-5 text-lg-end",children:(0,a.jsxs)("div",{className:"company-links-panel d-flex flex-column gap-3 justify-content-lg-end align-items-lg-end",children:[(0,a.jsx)("span",{className:"links-panel-title",children:"Launch Deliverables:"}),(0,a.jsxs)("div",{className:"d-flex flex-wrap gap-2 justify-content-lg-end",children:[j.websiteUrl&&(0,a.jsxs)("a",{href:j.websiteUrl,target:"_blank",rel:"noopener noreferrer",className:"launch-btn web-btn",children:[(0,a.jsx)("i",{className:"fa-solid fa-globe"}),(0,a.jsx)("span",{children:"Visit Website"})]}),j.appStoreUrl&&(0,a.jsxs)("a",{href:j.appStoreUrl,target:"_blank",rel:"noopener noreferrer",className:"launch-btn app-btn",children:[(0,a.jsx)("i",{className:"fa-brands fa-apple"}),(0,a.jsx)("span",{children:"App Store"})]}),j.playStoreUrl&&(0,a.jsxs)("a",{href:j.playStoreUrl,target:"_blank",rel:"noopener noreferrer",className:"launch-btn play-btn",children:[(0,a.jsx)("i",{className:"fa-brands fa-google-play"}),(0,a.jsx)("span",{children:"Google Play"})]})]})]})})]}),(0,a.jsx)("hr",{className:"divider mb-4"}),(0,a.jsxs)("div",{className:"showcase-tabs-bar mb-4",children:[y.length>0&&(0,a.jsxs)("button",{className:`showcase-tab-item ${"videos"===c?"active":""}`,onClick:()=>x("videos"),children:[(0,a.jsx)("i",{className:"fa-solid fa-play me-2"}),"Video Reels & Promos (",y.length,")"]}),N.length>0&&(0,a.jsxs)("button",{className:`showcase-tab-item ${"images"===c?"active":""}`,onClick:()=>x("images"),children:[(0,a.jsx)("i",{className:"fa-solid fa-image me-2"}),"Graphic Design & Ads (",N.length,")"]}),k.length>0&&(0,a.jsxs)("button",{className:`showcase-tab-item ${"brochures"===c?"active":""}`,onClick:()=>x("brochures"),children:[(0,a.jsx)("i",{className:"fa-solid fa-file-pdf me-2"}),"Print Brochures (",k.length,")"]})]}),(0,a.jsxs)("div",{className:"showcase-content-wrapper",children:["videos"===c&&y.length>0&&(0,a.jsx)("div",{className:"row g-4 animation-fade-in",children:y.map((e,t)=>(0,a.jsx)("div",{className:"col-md-6 col-lg-4",children:(0,a.jsxs)("div",{className:"video-showcase-card",onClick:()=>{h(e.videoUrl),g(e.title)},children:[(0,a.jsxs)("div",{className:"video-card-preview",children:[(0,a.jsx)(p.default,{src:e.videoUrl,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0,pointerEvents:"none"},onClick:e=>{e.preventDefault(),e.stopPropagation()}}),(0,a.jsx)("div",{className:"video-glow-effect"}),(0,a.jsx)("div",{className:"video-duration-tag",children:e.duration||"Reel"})]}),(0,a.jsxs)("div",{className:"video-card-meta",children:[(0,a.jsx)("h4",{className:"video-card-title",children:e.title}),(0,a.jsx)("p",{className:"video-card-desc",children:e.description})]})]})},t))}),"images"===c&&N.length>0&&(0,a.jsx)("div",{className:"row g-4 animation-fade-in",children:N.map((e,t)=>(0,a.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3",children:(0,a.jsxs)("div",{className:"graphic-showcase-card",onClick:()=>u(e),children:[(0,a.jsxs)("div",{className:"graphic-img-container",children:[(0,a.jsx)(i.default,{src:e.img,alt:e.title,className:"graphic-main-img",style:{objectFit:"cover",width:"100%",height:"100%"}}),(0,a.jsxs)("div",{className:"graphic-overlay",children:[(0,a.jsx)("span",{className:"graphic-overlay-category",children:e.category}),(0,a.jsx)("div",{className:"graphic-zoom-icon",children:(0,a.jsx)("i",{className:"fa-solid fa-magnifying-glass-plus"})})]})]}),(0,a.jsxs)("div",{className:"graphic-meta",children:[(0,a.jsx)("span",{className:"graphic-category-badge",children:e.category}),(0,a.jsx)("h4",{className:"graphic-title",children:e.title})]})]})},t))}),"brochures"===c&&k.length>0&&(0,a.jsx)("div",{className:"row g-4 justify-content-center animation-fade-in",children:k.map((e,t)=>(0,a.jsx)("div",{className:"col-md-8 col-lg-6",children:(0,a.jsxs)("div",{className:"brochure-showcase-card d-flex flex-column flex-sm-row",children:[(0,a.jsxs)("div",{className:"brochure-left-preview",children:[(0,a.jsx)(i.default,{src:e.previewImg,alt:e.title,className:"brochure-preview-img",style:{objectFit:"cover",width:"100%",height:"100%"}}),(0,a.jsx)("div",{className:"pdf-corner-tag",children:"PDF"})]}),(0,a.jsxs)("div",{className:"brochure-right-details d-flex flex-column justify-content-between p-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"pdf-icon-meta mb-2",children:[(0,a.jsx)("i",{className:"fa-solid fa-file-pdf text-red"}),(0,a.jsx)("span",{children:"DOCUMENT COLLATERAL"})]}),(0,a.jsx)("h4",{className:"brochure-card-title mb-2",children:e.title}),(0,a.jsx)("p",{className:"brochure-card-desc mb-3",children:e.description})]}),(0,a.jsxs)("button",{onClick:()=>{var a;return a=e.title,void(v(`Preparing to download: ${a}...`),setTimeout(()=>{v(`Success! ${a} downloaded.`),setTimeout(()=>{v(null)},3e3)},1200))},className:"brochure-download-btn",children:[(0,a.jsx)("i",{className:"fa-solid fa-download me-2"}),"Download Brochure"]})]})]})},t))})]})]}),(0,a.jsx)("div",{className:"company-selector-container mb-5 wow fadeInUp","data-wow-delay":".3s",children:(0,a.jsx)("div",{className:"company-selector-scroll",children:d.clientCompaniesWork.map(e=>{let t=e.id===n;return(0,a.jsxs)("button",{className:`company-tab-btn ${t?"active":""}`,onClick:()=>{l(e.id),(e.videos||[]).length>0?x("videos"):(e.images||[]).length>0?x("images"):x("brochures")},children:[(0,a.jsx)("div",{className:"company-tab-logo-wrapper",children:(0,a.jsx)(i.default,{src:e.logo,alt:e.name,className:"company-tab-logo-img",width:36,height:36})}),(0,a.jsx)("span",{className:"company-tab-name",children:e.name})]},e.id)})})}),(0,a.jsxs)("div",{className:"slider-button d-flex align-items-center justify-content-between wow fadeInUp mt-5 pt-4","data-wow-delay":".2s",children:[(0,a.jsxs)(r.default,{href:`/our-project-details?id=${o}`,className:"d-flex align-items-center gap-3 text-decoration-none hover-theme-color",children:[(0,a.jsx)("button",{className:"cmn-prev d-center",type:"button",children:(0,a.jsx)("i",{className:"fas fa-chevron-left"})}),(0,a.jsx)("span",{className:"previus-text text-capitalize",style:{fontWeight:700,fontSize:"16px"},children:"Prev Project"})]}),(0,a.jsx)("div",{className:"icon-grid",children:(0,a.jsx)(r.default,{href:"/our-projects",title:"All Projects",className:"icon-grid-link",children:(0,a.jsx)("i",{className:"fa-solid fa-table-cells"})})}),(0,a.jsxs)(r.default,{href:`/our-project-details?id=${s}`,className:"d-flex align-items-center gap-3 text-decoration-none hover-theme-color",children:[(0,a.jsx)("span",{className:"previus-text text-capitalize",style:{fontWeight:700,fontSize:"16px"},children:"Next Project"}),(0,a.jsx)("button",{className:"cmn-next d-center",type:"button",children:(0,a.jsx)("i",{className:"fas fa-chevron-right"})})]})]})]}),f&&(0,a.jsxs)("div",{className:"showcase-video-lightbox",onClick:()=>h(null),children:[(0,a.jsx)("div",{className:"lightbox-backdrop-blur"}),(0,a.jsxs)("div",{className:"video-lightbox-content",onClick:e=>e.stopPropagation(),children:[(0,a.jsxs)("div",{className:"video-lightbox-header d-flex justify-content-between align-items-center p-3",children:[(0,a.jsxs)("span",{className:"video-lightbox-title",children:[(0,a.jsx)("i",{className:"fa-solid fa-circle-play text-blue me-2"}),m]}),(0,a.jsx)("button",{className:"lightbox-close-btn",onClick:()=>h(null),children:(0,a.jsx)("i",{className:"fa-solid fa-xmark"})})]}),(0,a.jsx)("div",{className:"video-player-wrapper",children:(0,a.jsx)(p.default,{src:f,controls:!0,playing:!0,width:"100%",height:"100%",className:"lightbox-video-element"})})]})]}),b&&(0,a.jsxs)("div",{className:"showcase-image-lightbox",onClick:()=>u(null),children:[(0,a.jsx)("div",{className:"lightbox-backdrop-blur"}),(0,a.jsxs)("div",{className:"image-lightbox-content",onClick:e=>e.stopPropagation(),children:[(0,a.jsx)("button",{className:"lightbox-close-btn top-right-close",onClick:()=>u(null),children:(0,a.jsx)("i",{className:"fa-solid fa-xmark"})}),(0,a.jsx)("div",{className:"zoomed-image-wrapper",children:(0,a.jsx)(i.default,{src:b.img,alt:b.title,className:"zoomed-img-element"})}),(0,a.jsxs)("div",{className:"image-lightbox-footer p-3 text-center",children:[(0,a.jsx)("span",{className:"image-lightbox-category",children:b.category}),(0,a.jsx)("h4",{className:"image-lightbox-caption text-white",children:b.title})]})]})]}),w&&(0,a.jsxs)("div",{className:"download-toast-notification",children:[(0,a.jsx)("div",{className:"toast-icon",children:(0,a.jsx)("i",{className:"fa-solid fa-circle-check animate-pulse"})}),(0,a.jsx)("span",{className:"toast-message",children:w})]}),(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`
                .client-showcase-section {
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
                    position: relative;
                    overflow: hidden;
                    padding-bottom: 80px;
                }

                .showcase-badge {
                    background: linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(0, 210, 159, 0.12) 100%);
                    color: #1e3a8a;
                    padding: 8px 18px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border: 1px solid rgba(37, 99, 235, 0.15);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .showcase-hero-title {
                    font-size: 48px;
                    font-weight: 900;
                    color: #0f172a;
                    line-height: 1.2;
                    letter-spacing: -1px;
                }

                .highlight-gradient {
                    background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .showcase-hero-desc {
                    max-width: 760px;
                    font-size: 16px;
                    line-height: 1.7;
                    color: #475569;
                }

                /* Horizontal Company Tab Selector */
                .company-selector-container {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 20px;
                    padding: 12px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
                }

                .company-selector-scroll {
                    display: flex;
                    gap: 12px;
                    overflow-x: auto;
                    scrollbar-width: thin;
                    scroll-behavior: smooth;
                    padding-bottom: 4px;
                }

                .company-selector-scroll::-webkit-scrollbar {
                    height: 5px;
                }
                .company-selector-scroll::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 10px;
                }

                .company-tab-btn {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: transparent;
                    border: 1px solid transparent;
                    padding: 10px 20px;
                    border-radius: 14px;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    flex-shrink: 0;
                }

                .company-tab-btn:hover {
                    background: #f8fafc;
                    border-color: #cbd5e1;
                }

                .company-tab-btn.active {
                    background: linear-gradient(135deg, #f0f5ff 0%, #e0eaff 100%);
                    border-color: rgba(37, 99, 235, 0.25);
                    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.05);
                }

                .company-tab-logo-wrapper {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    overflow: hidden;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2px;
                    transition: transform 0.3s ease;
                }

                .company-tab-btn.active .company-tab-logo-wrapper {
                    transform: scale(1.1);
                    border-color: #2563eb;
                }

                .company-tab-logo-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                }

                .company-tab-name {
                    font-size: 14px;
                    font-weight: 700;
                    color: #475569;
                    transition: color 0.3s ease;
                }

                .company-tab-btn.active .company-tab-name {
                    color: #1e3a8a;
                }

                /* Active Company Showcase Card */
                .active-company-card {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 24px;
                    padding: 40px;
                    box-shadow: 0 20px 50px rgba(18, 62, 122, 0.03);
                }

                .company-logo-badge {
                    width: 64px;
                    height: 64px;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                    background: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 4px;
                }

                .company-logo-main {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 12px;
                }

                .company-main-title {
                    font-size: 28px;
                    font-weight: 800;
                    color: #0f172a;
                    margin: 0 0 4px 0;
                }

                .company-tagline {
                    font-size: 14px;
                    color: #64748b;
                    font-weight: 600;
                }

                .company-description-text {
                    font-size: 15px;
                    line-height: 1.7;
                    color: #475569;
                }

                .service-tag-pill {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    color: #334155;
                    font-size: 12px;
                    font-weight: 700;
                    padding: 6px 14px;
                    border-radius: 50px;
                    display: inline-flex;
                    align-items: center;
                }

                .text-green {
                    color: #10b981;
                }

                .divider {
                    border: 0;
                    border-top: 1px solid #e2e8f0;
                    margin: 0;
                }

                /* Portal launch links */
                .company-links-panel {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .links-panel-title {
                    font-size: 12px;
                    font-weight: 800;
                    color: #94a3b8;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .launch-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 18px;
                    border-radius: 10px;
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .web-btn {
                    background: #2563eb;
                    color: #ffffff;
                    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.2);
                }
                .web-btn:hover {
                    background: #1d4ed8;
                    transform: translateY(-2px);
                    color: #ffffff;
                }

                .app-btn {
                    background: #0f172a;
                    color: #ffffff;
                }
                .app-btn:hover {
                    background: #1e293b;
                    transform: translateY(-2px);
                    color: #ffffff;
                }

                .play-btn {
                    background: #10b981;
                    color: #ffffff;
                }
                .play-btn:hover {
                    background: #059669;
                    transform: translateY(-2px);
                    color: #ffffff;
                }

                /* Sub-Tabs selector inside active company */
                .showcase-tabs-bar {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    border-bottom: 2px solid #f1f5f9;
                    padding-bottom: 12px;
                }

                .showcase-tab-item {
                    background: transparent;
                    border: none;
                    font-weight: 700;
                    font-size: 14px;
                    color: #64748b;
                    padding: 8px 16px;
                    cursor: pointer;
                    position: relative;
                    transition: color 0.3s ease;
                }

                .showcase-tab-item:hover {
                    color: #1e3a8a;
                }

                .showcase-tab-item.active {
                    color: #2563eb;
                }

                .showcase-tab-item.active::after {
                    content: "";
                    position: absolute;
                    bottom: -14px;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: #2563eb;
                }

                /* Video Showcase layouts */
                .video-showcase-card {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 16px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    height: 100%;
                }

                .video-showcase-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(37, 99, 235, 0.2);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.03);
                }

                .video-card-preview {
                    position: relative;
                    padding-top: 56.25%; /* 16:9 aspect ratio */
                    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                    overflow: hidden;
                }

                .video-glow-effect {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at center, rgba(37, 99, 235, 0.15) 0%, transparent 70%);
                }

                .video-play-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.3s ease;
                }

                .play-ring {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2563eb;
                    font-size: 16px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .play-ring i {
                    margin-left: 3px;
                }

                .video-showcase-card:hover .play-ring {
                    transform: scale(1.15);
                    background: #2563eb;
                    color: #ffffff;
                }

                .video-duration-tag {
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    background: rgba(15, 23, 42, 0.75);
                    color: #ffffff;
                    font-size: 11px;
                    font-weight: 700;
                    padding: 2px 8px;
                    border-radius: 4px;
                }

                .video-card-meta {
                    padding: 15px;
                }

                .video-card-title {
                    font-size: 16px;
                    font-weight: 700;
                    color: #0f172a;
                    margin-bottom: 6px;
                }

                .video-card-desc {
                    font-size: 13px;
                    color: #64748b;
                    line-height: 1.5;
                    margin: 0;
                }

                /* Graphic Showcase layouts */
                .graphic-showcase-card {
                    background: #ffffff;
                    border: 1px solid #f1f5f9;
                    border-radius: 16px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    height: 100%;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
                }

                .graphic-showcase-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(37, 99, 235, 0.15);
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.04);
                }

                .graphic-img-container {
                    position: relative;
                    padding-top: 100%; /* Square 1:1 */
                    background: #f8fafc;
                    overflow: hidden;
                }

                .graphic-main-img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .graphic-showcase-card:hover .graphic-main-img {
                    transform: scale(1.06);
                }

                .graphic-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.7);
                    opacity: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 15px;
                    transition: opacity 0.3s ease;
                }

                .graphic-showcase-card:hover .graphic-overlay {
                    opacity: 1;
                }

                .graphic-overlay-category {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                }

                .graphic-zoom-icon {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    background: #2563eb;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    align-self: center;
                    transform: scale(0.8);
                    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .graphic-showcase-card:hover .graphic-zoom-icon {
                    transform: scale(1);
                }

                .graphic-meta {
                    padding: 12px;
                }

                .graphic-category-badge {
                    font-size: 10px;
                    font-weight: 800;
                    color: #2563eb;
                    background: rgba(37, 99, 235, 0.05);
                    padding: 2px 8px;
                    border-radius: 4px;
                    display: inline-block;
                    margin-bottom: 6px;
                    text-transform: uppercase;
                }

                .graphic-title {
                    font-size: 14px;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                /* Print Brochure Layout */
                .brochure-showcase-card {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.015);
                    transition: all 0.3s ease;
                }

                .brochure-showcase-card:hover {
                    border-color: rgba(37, 99, 235, 0.18);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.03);
                }

                .brochure-left-preview {
                    width: 100%;
                    max-width: 180px;
                    min-height: 200px;
                    position: relative;
                    background: #f8fafc;
                }

                @media (max-width: 575px) {
                    .brochure-left-preview {
                        max-width: 100%;
                        height: 200px;
                    }
                }

                .brochure-preview-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .pdf-corner-tag {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background: #ef4444;
                    color: #ffffff;
                    font-size: 10px;
                    font-weight: 800;
                    padding: 2px 6px;
                    border-radius: 4px;
                }

                .pdf-icon-meta {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 11px;
                    font-weight: 800;
                    color: #94a3b8;
                    letter-spacing: 0.5px;
                }

                .text-red {
                    color: #ef4444;
                }

                .brochure-card-title {
                    font-size: 18px;
                    font-weight: 700;
                    color: #0f172a;
                }

                .brochure-card-desc {
                    font-size: 13px;
                    line-height: 1.5;
                    color: #64748b;
                }

                .brochure-download-btn {
                    background: #f8fafc;
                    border: 1px solid #cbd5e1;
                    color: #334155;
                    padding: 10px 20px;
                    border-radius: 10px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .brochure-download-btn:hover {
                    background: #2563eb;
                    color: #ffffff;
                    border-color: #2563eb;
                    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.25);
                }

                /* Video Lightbox */
                .showcase-video-lightbox, .showcase-image-lightbox {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .lightbox-backdrop-blur {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.85);
                    backdrop-filter: blur(8px);
                }

                .video-lightbox-content {
                    position: relative;
                    width: 100%;
                    max-width: 800px;
                    background: #0f172a;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    z-index: 2;
                }

                .video-lightbox-header {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }

                .video-lightbox-title {
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 15px;
                }

                .text-blue {
                    color: #3b82f6;
                }

                .lightbox-close-btn {
                    background: transparent;
                    border: none;
                    color: #94a3b8;
                    font-size: 20px;
                    cursor: pointer;
                    transition: color 0.3s ease, transform 0.3s ease;
                }

                .lightbox-close-btn:hover {
                    color: #ffffff;
                    transform: rotate(90deg);
                }

                .video-player-wrapper {
                    position: relative;
                    padding-top: 56.25%; /* 16:9 */
                    background: #000000;
                }

                .lightbox-video-element {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }

                /* Image Lightbox */
                .image-lightbox-content {
                    position: relative;
                    z-index: 2;
                    max-width: 90%;
                    max-height: 85vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .top-right-close {
                    position: absolute;
                    top: -45px;
                    right: 0;
                    color: #ffffff;
                    font-size: 24px;
                }

                .zoomed-image-wrapper {
                    background: #ffffff;
                    padding: 8px;
                    border-radius: 12px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                }

                .zoomed-img-element {
                    max-width: 100%;
                    max-height: 70vh;
                    height: auto;
                    width: auto;
                    object-fit: contain;
                    border-radius: 6px;
                }

                .image-lightbox-footer {
                    margin-top: 15px;
                }

                .image-lightbox-category {
                    color: #3b82f6;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    display: block;
                    margin-bottom: 4px;
                }

                .image-lightbox-caption {
                    font-size: 16px;
                    font-weight: 700;
                    margin: 0;
                }

                /* Toast notification */
                .download-toast-notification {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    background: #0f172a;
                    color: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 14px;
                    padding: 14px 24px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
                    z-index: 99999;
                    animation: toastSlideIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .toast-icon {
                    color: #10b981;
                    font-size: 18px;
                }

                .toast-message {
                    font-size: 13px;
                    font-weight: 700;
                }

                /* Animation Keyframes */
                @keyframes toastSlideIn {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .animation-fade-in {
                    animation: fadeIn 0.4s ease-out;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Responsive helpers */
                @media (max-width: 991px) {
                    .showcase-hero-title {
                        font-size: 38px;
                    }
                    .active-company-card {
                        padding: 30px 20px;
                    }
                }
                `}})]})};e.s(["default",0,()=>{let e=(0,s.useSearchParams)().get("id"),l=e?parseInt(e):1,[d,p]=(0,t.useState)(!1),[f,h]=(0,t.useState)(null),[m,g]=(0,t.useState)(null),[b,u]=(0,t.useState)(null),w=(e,a)=>{g({destinationName:e,url:a}),u(setTimeout(()=>{window.open(a,"_blank","noopener,noreferrer"),g(null)},2200))},v=n.default.find(e=>e.id===l)||n.default[0],j=n.default.filter(e=>e.projectType===v.projectType),y=j.findIndex(e=>e.id===v.id),N=j[0===y?j.length-1:y-1],k=j[y===j.length-1?0:y+1],z=N?N.id:1,S=k?k.id:1,C=v.coreFeatures||[],P=v.methodologyCards||[];return"digital-marketing"===v.projectType?(0,a.jsx)(x,{project:v,prevId:z,nextId:S}):(0,a.jsxs)("section",{className:"project-details-section fix section-padding",children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"project-details-wrapper",children:[(0,a.jsxs)("div",{className:"row g-4 align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"app-mockup-container wow fadeInLeft","data-wow-delay":".2s",children:[(0,a.jsx)("div",{className:"glowing-mesh"}),(0,a.jsx)("div",{className:"clean-mockup",children:(0,a.jsx)("div",{className:"clean-content",children:(0,a.jsx)(i.default,{src:v.thumb,alt:v.title,style:{width:"100%",height:"auto",objectFit:"contain"},className:"clean-screenshot"})})})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"project-details-content wow fadeInRight","data-wow-delay":".4s",style:{paddingLeft:"15px"},children:[(0,a.jsxs)("span",{className:"app-badge mb-3",children:[(0,a.jsx)("i",{className:"fa-solid fa-rocket me-1"}),v.category[0]," Project"]}),(0,a.jsx)("h2",{className:"project-title mb-3",children:v.title}),(0,a.jsx)("p",{className:"project-desc mb-4",children:v.description}),(0,a.jsx)("div",{className:"project-meta-pills d-flex flex-wrap gap-2 mb-4",children:v.category.map((e,t)=>(0,a.jsxs)("span",{className:"meta-pill",children:[(0,a.jsx)("i",{className:"fa-solid fa-tag me-2"}),e]},t))}),(v.projectLink||v.appStoreLink||v.playStoreLink)&&(0,a.jsxs)("div",{className:"project-action-buttons d-flex flex-wrap gap-3 mt-4 mb-4 wow fadeInUp","data-wow-delay":".5s",children:[v.projectLink&&(0,a.jsxs)("button",{onClick:()=>w("Website",v.projectLink),className:"action-btn website-btn",title:"Visit project website",children:[(0,a.jsx)("div",{className:"btn-icon",children:(0,a.jsx)("i",{className:"fa-solid fa-globe"})}),(0,a.jsxs)("div",{className:"btn-text",children:[(0,a.jsx)("span",{className:"btn-subtitle",children:"Live Preview"}),(0,a.jsx)("span",{className:"btn-title",children:"Visit Website"})]}),(0,a.jsx)("div",{className:"btn-arrow",children:(0,a.jsx)("i",{className:"fa-solid fa-arrow-up-right"})})]}),v.appStoreLink&&(0,a.jsxs)("button",{onClick:()=>w("App Store",v.appStoreLink),className:"action-btn appstore-btn",title:"Download from App Store",children:[(0,a.jsx)("div",{className:"btn-icon",children:(0,a.jsx)("i",{className:"fa-brands fa-apple"})}),(0,a.jsxs)("div",{className:"btn-text",children:[(0,a.jsx)("span",{className:"btn-subtitle",children:"Download on the"}),(0,a.jsx)("span",{className:"btn-title",children:"App Store"})]}),(0,a.jsx)("div",{className:"btn-arrow",children:(0,a.jsx)("i",{className:"fa-solid fa-arrow-up-right"})})]}),v.playStoreLink&&(0,a.jsxs)("button",{onClick:()=>w("Google Play",v.playStoreLink),className:"action-btn playstore-btn",title:"Get it on Google Play",children:[(0,a.jsx)("div",{className:"btn-icon",children:(0,a.jsx)("i",{className:"fa-brands fa-google-play"})}),(0,a.jsxs)("div",{className:"btn-text",children:[(0,a.jsx)("span",{className:"btn-subtitle",children:"Get it on"}),(0,a.jsx)("span",{className:"btn-title",children:"Google Play"})]}),(0,a.jsx)("div",{className:"btn-arrow",children:(0,a.jsx)("i",{className:"fa-solid fa-arrow-up-right"})})]})]})]})})]}),(0,a.jsxs)("div",{className:"row g-4 mt-5",children:[(0,a.jsx)("div",{className:"col-lg-8",children:(0,a.jsxs)("div",{className:"project-details-content",children:[(0,a.jsx)("h3",{className:"section-subtitle wow fadeInUp","data-wow-delay":".2s",children:"App Development Methodology"}),(0,a.jsx)("p",{className:"mt-3 wow fadeInUp","data-wow-delay":".3s",style:{color:"#64748b",fontSize:"15px"},children:"Our development lifecycle prioritizes agility, security, and exceptional performance. We craft architectural frameworks that support frictionless scalability, low network latency, and secure auth layers."}),(0,a.jsx)("div",{className:"row g-4 mt-2",children:P.map((e,t)=>(0,a.jsx)("div",{className:"col-md-6 wow fadeInUp","data-wow-delay":`${.15*t}s`,children:(0,a.jsxs)("div",{className:"methodology-card",children:[(0,a.jsx)("div",{className:"m-card-icon-wrapper",style:{background:e.grad,color:e.iconColor},children:(0,a.jsx)("i",{className:e.icon})}),(0,a.jsxs)("div",{className:"m-card-info",children:[(0,a.jsx)("h5",{className:"m-card-title",children:e.title}),(0,a.jsx)("p",{className:"m-card-desc",children:e.desc})]})]})},t))}),(0,a.jsx)("h3",{className:"section-subtitle mt-5 wow fadeInUp","data-wow-delay":".5s",children:"Core Features & Architecture"}),(0,a.jsx)("p",{className:"mt-3 wow fadeInUp","data-wow-delay":".6s",style:{color:"#64748b",fontSize:"15px"},children:"Engineered with the latest technologies to deliver reliability and a high-performance experience under extreme operational loads."}),(0,a.jsx)("div",{className:"features-card-grid row g-3 mt-2",children:C.map((e,t)=>(0,a.jsx)("div",{className:"col-md-6 wow fadeInUp","data-wow-delay":`${.08*t}s`,children:(0,a.jsxs)("div",{className:"feature-item-card",children:[(0,a.jsx)("div",{className:"feature-check-icon",children:(0,a.jsx)("i",{className:"fa-solid fa-circle-check"})}),(0,a.jsx)("span",{className:"feature-text",children:e})]})},t))}),(0,a.jsx)("h3",{className:"section-subtitle mt-5 wow fadeInUp","data-wow-delay":".5s",children:"Application Visual Showcase"}),(0,a.jsx)("p",{className:"mt-3 wow fadeInUp","data-wow-delay":".6s",style:{color:"#64748b",fontSize:"15px"},children:"Explore the internal dashboards, layout mockups, and client-facing interfaces designed specifically for this project edition."}),(0,a.jsx)("div",{className:"row g-4 mt-3",children:v.gallery.map((e,t)=>(0,a.jsx)("div",{className:"col-md-4 col-sm-6 wow fadeInUp","data-wow-delay":`${.7+.1*t}s`,children:(0,a.jsx)("div",{className:"gallery-card",onClick:()=>{h(e),p(!0)},children:(0,a.jsxs)("div",{className:"gallery-img-container",children:[(0,a.jsx)(i.default,{src:e,alt:`${v.title} Screenshot ${t+1}`,className:"gallery-image"}),(0,a.jsxs)("div",{className:"gallery-overlay",children:[(0,a.jsx)("div",{className:"gallery-icon",children:(0,a.jsx)("i",{className:"fa-solid fa-magnifying-glass-plus"})}),(0,a.jsx)("span",{className:"gallery-text",children:"View Screenshot"})]})]})})},t))}),(0,a.jsxs)("div",{className:"slider-button d-flex align-items-center justify-content-between wow fadeInUp","data-wow-delay":"1.1s",children:[(0,a.jsxs)(r.default,{href:`/our-project-details?id=${z}`,className:"d-flex align-items-center gap-3 text-decoration-none hover-theme-color",children:[(0,a.jsx)("button",{className:"cmn-prev d-center",type:"button",children:(0,a.jsx)("i",{className:"fas fa-chevron-left"})}),(0,a.jsx)("span",{className:"previus-text text-capitalize",style:{fontWeight:700,fontSize:"16px"},children:"Prev Project"})]}),(0,a.jsx)("div",{className:"icon-grid",children:(0,a.jsx)(r.default,{href:"/our-projects",title:"All Projects",className:"icon-grid-link",children:(0,a.jsx)("i",{className:"fa-solid fa-table-cells"})})}),(0,a.jsxs)(r.default,{href:`/our-project-details?id=${S}`,className:"d-flex align-items-center gap-3 text-decoration-none hover-theme-color",children:[(0,a.jsx)("span",{className:"previus-text text-capitalize",style:{fontWeight:700,fontSize:"16px"},children:"Next Project"}),(0,a.jsx)("button",{className:"cmn-next d-center",type:"button",children:(0,a.jsx)("i",{className:"fas fa-chevron-right"})})]})]})]})}),(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("div",{className:"project-details-sidebar",children:[(0,a.jsxs)("div",{className:"sidebar-widget spec-widget wow fadeInUp","data-wow-delay":".2s",children:[(0,a.jsx)("div",{className:"sideber-title mb-4",children:(0,a.jsxs)("h4",{style:{fontSize:"20px",fontWeight:800,color:"var(--theme)",margin:0},children:[(0,a.jsx)("i",{className:"fa-solid fa-cube text-primary me-2 animate-pulse"}),"Project Specifications"]})}),(0,a.jsx)("ul",{className:"project-infrom",style:{listStyle:"none",padding:0,margin:0},children:[{label:"Client",val:v.client,icon:"fa-solid fa-briefcase"},{label:"Platform",val:v.category[0]||"Web / Mobile App",icon:"fa-solid fa-laptop-code"},{label:"Location",val:v.location,icon:"fa-solid fa-map-location-dot"},{label:"Sector",val:v.sector,icon:"fa-solid fa-chart-pie"},{label:"Release Date",val:v.date,icon:"fa-solid fa-calendar-days"}].map((e,t)=>(0,a.jsxs)("li",{className:"spec-row",children:[(0,a.jsxs)("div",{className:"spec-label",children:[(0,a.jsx)("div",{className:"spec-icon",children:(0,a.jsx)("i",{className:e.icon})}),(0,a.jsx)("span",{children:e.label})]}),(0,a.jsx)("span",{className:"spec-value",children:e.val})]},t))})]}),(0,a.jsxs)("div",{className:"sidebar-widget-image wow fadeInUp mt-4","data-wow-delay":".4s",children:[(0,a.jsx)(i.default,{src:v.sidebarThumb,alt:"Sidebar decoration",style:{width:"100%",height:"auto",objectFit:"cover"},className:"sidebar-bg-img"}),(0,a.jsx)("div",{className:"gradient-overlay"}),(0,a.jsxs)("div",{className:"content p-4 text-white d-flex flex-column justify-content-between h-100",style:{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:2},children:[(0,a.jsx)("div",{className:"white-logo p-1",style:{width:"90px"},children:(0,a.jsx)(i.default,{src:o.default,alt:"Logo"})}),(0,a.jsxs)("div",{style:{marginTop:"50px"},children:[(0,a.jsx)("h3",{className:"mb-3 text-white",style:{fontSize:"24px",fontWeight:800,lineHeight:1.3},children:"Let’s Bring Digital Ideas to Life."}),(0,a.jsxs)(r.default,{href:"/contact",className:"theme-btn text-white text-decoration-none premium-cta-btn",children:[(0,a.jsx)("span",{children:"Get in touch"}),(0,a.jsx)("i",{className:"fa-solid fa-arrow-up-right ms-2 animate-bounce-right"})]})]})]})]})]})})]})]})}),(0,a.jsx)(c,{isOpen:d,onClose:()=>p(!1),imageSrc:f}),m&&(0,a.jsx)("div",{className:"redirect-overlay",children:(0,a.jsxs)("div",{className:"redirect-card",children:[(0,a.jsxs)("div",{className:"portal-ring",children:[(0,a.jsx)("div",{className:"portal-core",children:(0,a.jsx)("i",{className:"App Store"===m.destinationName?"fa-brands fa-apple":"Google Play"===m.destinationName?"fa-brands fa-google-play":"fa-solid fa-globe"})}),(0,a.jsx)("div",{className:"ring-pulse-1"}),(0,a.jsx)("div",{className:"ring-pulse-2"})]}),(0,a.jsxs)("h3",{children:["Connecting to ",m.destinationName]}),(0,a.jsx)("p",{children:"You are being securely redirected to our official project page."}),(0,a.jsx)("div",{className:"redirect-loader",children:(0,a.jsx)("div",{className:"loader-fill"})}),(0,a.jsx)("span",{className:"redirect-url",children:m.url}),(0,a.jsx)("button",{className:"cancel-redirect-btn",onClick:()=>{b&&(clearTimeout(b),u(null)),g(null)},children:"Cancel Redirection"})]})}),(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`
                .project-details-section {
                    background: linear-gradient(180deg, #fafbfe 0%, #ffffff 100%);
                    position: relative;
                    overflow: hidden;
                }
                .app-mockup-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 30px 20px;
                    position: relative;
                }
                
                /* Dynamic Backdrop Mesh Glow */
                .glowing-mesh {
                    position: absolute;
                    width: 320px;
                    height: 320px;
                    background: radial-gradient(circle, rgba(18, 62, 122, 0.25) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(255, 255, 255, 0) 100%);
                    filter: blur(40px);
                    z-index: 1;
                    pointer-events: none;
                    border-radius: 50%;
                    animation: floatGlow 8s infinite ease-in-out;
                }
                @keyframes floatGlow {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(15px, -15px) scale(1.15); }
                }

                /* Clean Image Mockup CSS */
                .clean-mockup {
                    background: #ffffff;
                    border-radius: 16px;
                    box-shadow: 0 30px 70px -15px rgba(11, 13, 23, 0.2);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    overflow: hidden;
                    width: 100%;
                    max-width: 580px;
                    margin: 0 auto;
                    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.6s ease;
                    perspective: 1000px;
                    position: relative;
                    z-index: 2;
                    padding: 8px;
                }
                .clean-mockup:hover {
                    transform: translateY(-8px) rotateX(3deg) rotateY(-2deg);
                    box-shadow: 0 45px 85px -20px rgba(18, 62, 122, 0.15);
                }
                
                .clean-content {
                    background: #f8fafc;
                    display: block;
                    position: relative;
                    overflow: hidden;
                    border-radius: 8px;
                }
                .clean-screenshot {
                    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                }
                .clean-mockup:hover .clean-screenshot {
                    transform: scale(1.02);
                }

                /* Text & Pills Styling */
                .app-badge {
                    background: linear-gradient(135deg, rgba(18, 62, 122, 0.08) 0%, rgba(59, 130, 246, 0.12) 100%);
                    color: var(--theme);
                    padding: 8px 18px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border: 1px solid rgba(18, 62, 122, 0.15);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    box-shadow: 0 4px 15px rgba(18, 62, 122, 0.04);
                }
                .project-title {
                    font-weight: 900 !important;
                    font-size: 42px !important;
                    letter-spacing: -0.5px;
                    background: linear-gradient(135deg, #0b0d17 0%, #123e7a 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 20px;
                }
                .project-desc {
                    line-height: 1.8;
                    font-size: 16px;
                    color: #475569 !important;
                }
                .meta-pill {
                    background-color: rgba(248, 250, 252, 0.8);
                    color: #4b5563;
                    padding: 8px 16px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s ease;
                }
                .meta-pill i {
                    color: var(--theme);
                }
                .meta-pill:hover {
                    transform: translateY(-2px);
                    border-color: var(--theme);
                    background-color: #fff;
                    color: var(--theme);
                    box-shadow: 0 8px 20px rgba(18, 62, 122, 0.08);
                }

                /* Subtitle Styling */
                .section-subtitle {
                    font-size: 26px !important;
                    font-weight: 800 !important;
                    color: #0b0d17;
                    position: relative;
                    padding-bottom: 12px;
                    margin-bottom: 20px;
                }
                .section-subtitle::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 60px;
                    height: 4px;
                    background: linear-gradient(to right, var(--theme), #3b82f6);
                    border-radius: 4px;
                }

                /* Methodology Feature Card Grid */
                .methodology-card {
                    background: #fff;
                    border: 1px solid #f1f5f9;
                    border-radius: 20px;
                    padding: 24px;
                    display: flex;
                    gap: 20px;
                    box-shadow: 0 10px 30px rgba(18, 62, 122, 0.02);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    height: 100%;
                }
                .methodology-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(18, 62, 122, 0.2);
                    box-shadow: 0 20px 40px rgba(18, 62, 122, 0.06);
                }
                .m-card-icon-wrapper {
                    width: 54px;
                    height: 54px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    flex-shrink: 0;
                    transition: transform 0.4s ease;
                }
                .methodology-card:hover .m-card-icon-wrapper {
                    transform: scale(1.1) rotate(-8deg);
                }
                .m-card-info {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .m-card-title {
                    font-size: 17px;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0;
                }
                .m-card-desc {
                    font-size: 14px;
                    color: #64748b;
                    line-height: 1.5;
                    margin: 0;
                }

                /* Features Card Grid */
                .feature-item-card {
                    background: #fff;
                    border: 1px solid #f1f5f9;
                    padding: 18px 20px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    box-shadow: 0 4px 15px rgba(18, 62, 122, 0.02);
                    transition: all 0.3s ease;
                }
                .feature-item-card:hover {
                    transform: translateY(-3px);
                    border-color: rgba(18, 62, 122, 0.15);
                    box-shadow: 0 12px 28px rgba(18, 62, 122, 0.06);
                    background: linear-gradient(to right, #fff, #f8fafc);
                }
                .feature-check-icon {
                    font-size: 20px;
                    color: var(--theme);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }
                .feature-item-card:hover .feature-check-icon {
                    transform: scale(1.18) rotate(6deg);
                }
                .feature-text {
                    font-weight: 600;
                    font-size: 14px;
                    color: #334155;
                }

                /* Visual Showcase Gallery Grid */
                .gallery-img-container {
                    position: relative;
                    border-radius: 16px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #0f172a;
                    border: 1px solid #f1f5f9;
                    box-shadow: 0 8px 24px rgba(18, 62, 122, 0.03);
                }
                .gallery-image {
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .gallery-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(18, 62, 122, 0.85);
                    backdrop-filter: blur(4px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    opacity: 0;
                    transition: all 0.4s ease;
                    z-index: 2;
                }
                .gallery-card {
                    cursor: pointer;
                }
                .gallery-card:hover .gallery-overlay {
                    opacity: 1;
                }
                .gallery-card:hover .gallery-image {
                    transform: scale(1.12);
                }
                .gallery-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: #fff;
                    color: var(--theme);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    transform: translateY(12px);
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .gallery-card:hover .gallery-icon {
                    transform: translateY(0);
                }
                .gallery-text {
                    color: #fff;
                    font-weight: 700;
                    font-size: 13px;
                    letter-spacing: 0.5px;
                    transform: translateY(18px);
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.05s;
                }
                .gallery-card:hover .gallery-text {
                    transform: translateY(0);
                }

                /* Sidebar Spec Widget */
                .spec-widget {
                    background: rgba(255, 255, 255, 0.75) !important;
                    backdrop-filter: blur(25px);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    border-radius: 24px !important;
                    padding: 35px 30px !important;
                    box-shadow: 0 20px 40px rgba(18, 62, 122, 0.04) !important;
                }
                .spec-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 18px !important;
                    border-radius: 16px !important;
                    background: rgba(248, 250, 252, 0.6) !important;
                    border: 1px solid #f1f5f9;
                    margin-bottom: 12px !important;
                    transition: all 0.3s ease;
                }
                .spec-row:hover {
                    background: #fff !important;
                    border-color: rgba(18, 62, 122, 0.15);
                    transform: translateX(4px);
                    box-shadow: 0 10px 20px rgba(18, 62, 122, 0.04);
                }
                .spec-label {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-weight: 600;
                    color: #475569;
                    font-size: 14px;
                }
                .spec-icon {
                    width: 32px;
                    height: 32px;
                    border-radius: 10px;
                    background: rgba(18, 62, 122, 0.06);
                    color: var(--theme);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    transition: all 0.3s ease;
                }
                .spec-row:hover .spec-icon {
                    background: var(--theme);
                    color: #fff;
                }
                .spec-value {
                    font-weight: 700;
                    color: #0f172a;
                    font-size: 14px;
                    text-align: right;
                }

                /* Sidebar CTA Promo Widget */
                .sidebar-widget-image {
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 20px 45px rgba(11, 13, 23, 0.15);
                }
                .sidebar-bg-img {
                    transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .sidebar-widget-image:hover .sidebar-bg-img {
                    transform: scale(1.08);
                }
                .gradient-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(180deg, rgba(11, 13, 23, 0.25) 0%, rgba(18, 62, 122, 0.95) 100%);
                    z-index: 1;
                }
                .premium-cta-btn {
                    background: #fff !important;
                    color: var(--theme) !important;
                    font-weight: 700;
                    padding: 14px 28px !important;
                    border-radius: 50px !important;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    font-size: 13px;
                    letter-spacing: 0.5px;
                }
                .premium-cta-btn:hover {
                    background: var(--theme) !important;
                    color: #fff !important;
                    box-shadow: 0 15px 30px rgba(18, 62, 122, 0.35);
                    transform: translateY(-2px);
                }

                /* Nav Buttons & Icons styling */
                .slider-button {
                    border-top: 1px solid #e2e8f0 !important;
                    padding-top: 35px !important;
                    margin-top: 50px !important;
                }
                .cmn-prev, .cmn-next {
                    width: 54px !important;
                    height: 54px !important;
                    line-height: 54px;
                    border-radius: 50% !important;
                    border: 1px solid #e2e8f0 !important;
                    background: #fff;
                    color: var(--theme);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .hover-theme-color {
                    color: #475569 !important;
                    transition: all 0.3s ease;
                }
                .hover-theme-color:hover {
                    color: var(--theme) !important;
                }
                .hover-theme-color:hover button {
                    background-color: var(--theme) !important;
                    border-color: var(--theme) !important;
                    color: #fff !important;
                    transform: scale(1.05);
                }
                .icon-grid-link {
                    color: #64748b;
                    font-size: 22px;
                    transition: all 0.3s ease;
                }
                .icon-grid-link:hover {
                    color: var(--theme);
                    transform: scale(1.15) rotate(90deg);
                }

                /* Keyframes & Animations classes */
                .animate-pulse {
                    animation: pulse 2s infinite ease-in-out;
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.08); opacity: 0.85; }
                }
                .animate-bounce-right {
                    animation: bounceRight 1.5s infinite ease-in-out;
                }
                @keyframes bounceRight {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(6px); }
                }

                /* Premium Action Buttons */
                .project-action-buttons {
                    margin-top: 25px;
                    margin-bottom: 25px;
                }
                .action-btn {
                    display: inline-flex;
                    align-items: center;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 14px;
                    padding: 10px 20px;
                    gap: 15px;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    text-align: left;
                    box-shadow: 0 4px 12px rgba(18, 62, 122, 0.03);
                    position: relative;
                    overflow: hidden;
                }
                .action-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(18, 62, 122, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    z-index: 1;
                }
                .action-btn:hover::before {
                    opacity: 1;
                }
                .action-btn:hover {
                    transform: translateY(-4px);
                    border-color: var(--theme);
                    box-shadow: 0 12px 24px rgba(18, 62, 122, 0.08);
                }
                .action-btn .btn-icon {
                    font-size: 24px;
                    color: #475569;
                    transition: all 0.4s ease;
                    z-index: 2;
                }
                .action-btn:hover .btn-icon {
                    color: var(--theme);
                    transform: scale(1.1);
                }
                .action-btn .btn-text {
                    display: flex;
                    flex-direction: column;
                    z-index: 2;
                }
                .action-btn .btn-subtitle {
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    color: #64748b;
                }
                .action-btn .btn-title {
                    font-size: 15px;
                    font-weight: 800;
                    color: #0f172a;
                }
                .action-btn .btn-arrow {
                    font-size: 14px;
                    color: #94a3b8;
                    transition: all 0.3s ease;
                    z-index: 2;
                }
                .action-btn:hover .btn-arrow {
                    color: var(--theme);
                    transform: translate(2px, -2px);
                }
                
                /* Redirect Overlay */
                .redirect-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(11, 13, 23, 0.6);
                    backdrop-filter: blur(12px);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fadeInOverlay 0.4s ease forwards;
                }
                @keyframes fadeInOverlay {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .redirect-card {
                    background: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.8);
                    border-radius: 28px;
                    padding: 45px 35px;
                    width: 100%;
                    max-width: 480px;
                    text-align: center;
                    box-shadow: 0 40px 90px -10px rgba(11, 13, 23, 0.35);
                    transform: translateY(20px);
                    animation: slideUpCard 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                    position: relative;
                }
                @keyframes slideUpCard {
                    to { transform: translateY(0); }
                }
                .portal-ring {
                    width: 90px;
                    height: 90px;
                    margin: 0 auto 30px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .portal-core {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, var(--theme) 0%, #3b82f6 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 28px;
                    color: #fff;
                    z-index: 3;
                    box-shadow: 0 8px 25px rgba(18, 62, 122, 0.3);
                }
                .ring-pulse-1, .ring-pulse-2 {
                    position: absolute;
                    top: 5%;
                    left: 5%;
                    width: 90%;
                    height: 90%;
                    border: 2px solid var(--theme);
                    border-radius: 50%;
                    opacity: 0;
                    z-index: 1;
                }
                .ring-pulse-1 {
                    animation: portalPulse 2s infinite linear;
                }
                .ring-pulse-2 {
                    animation: portalPulse 2s infinite linear 1s;
                }
                @keyframes portalPulse {
                    0% { transform: scale(0.6); opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { transform: scale(1.4); opacity: 0; }
                }
                .redirect-card h3 {
                    font-size: 22px;
                    font-weight: 800;
                    color: #0f172a;
                    margin-bottom: 12px;
                }
                .redirect-card p {
                    font-size: 14px;
                    color: #64748b;
                    line-height: 1.6;
                    margin-bottom: 25px;
                }
                
                /* Redirect Progress Bar */
                .redirect-loader {
                    width: 100%;
                    height: 6px;
                    background: #f1f5f9;
                    border-radius: 10px;
                    overflow: hidden;
                    margin-bottom: 25px;
                    position: relative;
                }
                .loader-fill {
                    height: 100%;
                    background: linear-gradient(to right, var(--theme), #3b82f6);
                    border-radius: 10px;
                    width: 0%;
                    animation: loadProgress 2.2s linear forwards;
                }
                @keyframes loadProgress {
                    to { width: 100%; }
                }
                
                .redirect-url {
                    display: block;
                    font-size: 12px;
                    color: #94a3b8;
                    font-family: monospace;
                    word-break: break-all;
                    background: #f8fafc;
                    padding: 8px 12px;
                    border-radius: 8px;
                    margin-bottom: 30px;
                    border: 1px solid #e2e8f0;
                }
                .cancel-redirect-btn {
                    background: #f1f5f9;
                    color: #475569;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .cancel-redirect-btn:hover {
                    background: #e2e8f0;
                    color: #0f172a;
                }
            `}})]})}],21318)}]);