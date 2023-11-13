"use strict";!function(){let e,r,t;t=(isDarkStyle?(e=config.colors_dark.textMuted,r=config.colors_dark.headingColor,config.colors_dark):(e=config.colors.textMuted,r=config.colors.headingColor,config.colors)).borderColor;var a={donut:{series1:"#22A95E",series2:"#24B364",series3:config.colors.success,series4:"#53D28C",series5:"#7EDDA9",series6:"#A9E9C5"}},s=document.querySelector("#leadsReportChart"),a={chart:{height:157,width:130,parentHeightOffset:0,type:"donut"},labels:["36h","56h","16h","32h","56h","16h"],series:[23,35,10,20,35,23],colors:[a.donut.series1,a.donut.series2,a.donut.series3,a.donut.series4,a.donut.series5,a.donut.series6],stroke:{width:0},dataLabels:{enabled:!1,formatter:function(e,t){return parseInt(e)+"%"}},legend:{show:!1},tooltip:{theme:!1},grid:{padding:{top:0}},plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,value:{fontSize:"1.5rem",fontFamily:"Public Sans",color:r,fontWeight:500,offsetY:-15,formatter:function(e){return parseInt(e)+"%"}},name:{offsetY:20,fontFamily:"Public Sans"},total:{show:!0,fontSize:".7rem",label:"Total",color:e,formatter:function(e){return"231h"}}}}}}};null!==s&&new ApexCharts(s,a).render();const o=document.querySelector("#horizontalBarChart"),i={chart:{height:270,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,barHeight:"70%",distributed:!0,startingShape:"rounded",borderRadius:7}},grid:{strokeDashArray:10,borderColor:t,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-35,bottom:-12}},colors:[config.colors.primary,config.colors.info,config.colors.success,config.colors.secondary,config.colors.danger,config.colors.warning],dataLabels:{enabled:!0,style:{colors:["#fff"],fontWeight:200,fontSize:"13px",fontFamily:"Public Sans"},formatter:function(e,t){return i.labels[t.dataPointIndex]},offsetX:0,dropShadow:{enabled:!1}},labels:["UI Design","UX Design","Music","Animation","React","SEO"],series:[{data:[35,20,14,12,10,9]}],xaxis:{categories:["6","5","4","3","2","1"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:e,fontSize:"13px"},formatter:function(e){return e+"%"}}},yaxis:{max:35,labels:{style:{colors:[e],fontFamily:"Public Sans",fontSize:"13px"}}},tooltip:{enabled:!0,style:{fontSize:"12px"},onDatasetHover:{highlightDataSeries:!1},custom:function({series:e,seriesIndex:t,dataPointIndex:a}){return'<div class="px-3 py-2"><span>'+e[t][a]+"%</span></div>"}},legend:{show:!1}};null!==o&&new ApexCharts(o,i).render();var n,s=document.querySelectorAll(".chart-progress"),a=(s&&s.forEach(function(e){var t=config.colors[e.dataset.color],a=e.dataset.series,s=e.dataset.progress_variant,t=(t=t,a=a,{chart:{height:"true"==(s=s)?58:53,width:"true"==s?58:43,type:"radialBar"},plotOptions:{radialBar:{hollow:{size:"true"==s?"45%":"33%"},dataLabels:{show:"true"==s,value:{offsetY:-10,fontSize:"15px",fontWeight:500,fontFamily:"Public Sans",color:r}},track:{background:config.colors_label.secondary}}},stroke:{lineCap:"round"},colors:[t],grid:{padding:{top:"true"==s?-12:-15,bottom:"true"==s?-17:-15,left:"true"==s?-17:-5,right:-15}},series:[a],labels:"true"==s?[""]:["Progress"]});new ApexCharts(e,t).render()}),$(".datatables-academy-course")),l={angular:'<span class="badge bg-label-danger p-2"><i class="ti ti-brand-angular ti-md"></i></span>',figma:'<span class="badge bg-label-warning p-2"><i class="ti ti-brand-figma ti-md"></i></span>',react:'<span class="badge bg-label-info p-2"><i class="ti ti-brand-react-native ti-md"></i></span>',art:'<span class="badge bg-label-success p-2"><i class="ti ti-color-swatch ti-md"></i></span>',fundamentals:'<span class="badge bg-label-primary p-2"><i class="ti ti-diamond ti-md"></i></span>'};a.length&&(n=a.DataTable({ajax:assetsPath+"json/app-academy-overview.json",columns:[{data:""},{data:"id"},{data:"course name"},{data:"time"},{data:"progress"},{data:"status"}],columnDefs:[{className:"control",searchable:!1,orderable:!1,responsivePriority:2,targets:0,render:function(e,t,a,s){return""}},{targets:1,orderable:!1,searchable:!1,checkboxes:!0,checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'},render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'}},{targets:2,responsivePriority:2,render:function(e,t,a,s){var r=a.logo,o=a.course,i=a.user,n=a.image;return a=n?'<img src="'+assetsPath+"img/avatars/"+n+'" alt="Avatar" class="rounded-circle">':'<span class="avatar-initial rounded-circle bg-label-'+["success","danger","warning","info","dark","primary","secondary"][Math.floor(6*Math.random())]+'">'+(n=(((n=a.user.match(/\b\w/g)||[]).shift()||"")+(n.pop()||"")).toUpperCase())+"</span>",'<div class="d-flex align-items-center"><span class="me-3">'+l[r]+'</span><div><a class="text-body text-truncate fw-medium mb-2 text-wrap" href="app-academy-course-details.html">'+o+'</a><div class="d-flex align-items-center mt-1"><div class="avatar-wrapper me-2"><div class="avatar avatar-xs">'+a+'</div></div><span class="text-nowrap">'+i+"</span></div></div></div>"}},{targets:3,responsivePriority:3,render:function(e,t,a,s){var e=moment.duration(e),r=Math.floor(e.asHours());return'<span class="h6 mb-0 text-nowrap">'+(r+"h "+(Math.floor(e.asMinutes())-60*r)+"m")+"</span>"}},{targets:4,render:function(e,t,a,s){var r=a.status;return'<div class="d-flex align-items-center gap-3"><p class="h6 mb-0">'+r+'</p><div class="progress w-100" style="height: 8px;"><div class="progress-bar" style="width: '+r+'" aria-valuenow="'+r+'" aria-valuemin="0" aria-valuemax="100"></div></div><small class="text-muted">'+a.number+"</small></div>"}},{targets:5,render:function(e,t,a,s){return'<div class="d-flex align-items-center justify-content-between"><div class="w-px-50 d-flex align-items-center"><i class="ti ti-users ti-sm me-2 text-primary"></i>'+a.user_number+'</div><div class="w-px-50 d-flex align-items-center"><i class="ti ti-book ti-sm me-2 text-info"></i>'+a.note+'</div><div class="w-px-50 d-flex align-items-center"><i class="ti ti-video ti-sm me-2 text-danger" ></i>'+a.view+"</div></div>"}}],order:[[2,"desc"]],dom:'<"card-header py-sm-0"<"head-label text-center">f>t<"row mx-4"<"col-sm-6 col-12 text-center text-xl-start pb-2 pb-xl-0 px-0"i><"col-sm-6 col-12 d-flex justify-content-center justify-content-xl-end px-0"p>>',lengthMenu:[5],language:{sLengthMenu:"_MENU_",search:"",searchPlaceholder:"Course Name"},responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(e){return"Details of "+e.data().order}}),type:"column",renderer:function(e,t,a){a=$.map(a,function(e,t){return""!==e.title?'<tr data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><td>'+e.title+":</td> <td>"+e.data+"</td></tr>":""}).join("");return!!a&&$('<table class="table"/><tbody />').append(a)}}}}),$("div.head-label").html('<h5 class="card-title mb-0 text-nowrap">Course you are taking</h5>')),$(".datatables-orders tbody").on("click",".delete-record",function(){n.row($(this).parents("tr")).remove().draw()}),setTimeout(()=>{$(".dataTables_filter .form-control").removeClass("form-control-sm"),$(".dataTables_length .form-select").removeClass("form-select-sm")},300)}();