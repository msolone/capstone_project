(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-210dd452"],{"632d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"take_attendance_page"},[e("form",{attrs:{name:"attendance"}},[e("section",{staticClass:"attendance_entry_buttons"},[e("section",{staticClass:"print_save"},[e("input",{attrs:{type:"submit",value:"Save","data-toggle":"modal","data-target":"#exampleModalCenter"},on:{click:function(a){a.preventDefault(),t.submitAttendance()}}})])]),e("table",{staticClass:"take_attendance_table"},[e("tbody",[t._m(0),t._l(t.TeamData,function(a){return e("tr",{key:a.playerId,class:{green_color:t.isPresent(a.status),red_color:t.isAbsent(a.status),yellow_color:t.isTardy(a.status)}},[e("td",{staticClass:"player_name"},[e("router-link",{staticClass:"link",attrs:{to:"/home/player_attendance_history/"+a.playerId}},[t._v(t._s(a.firstName+" "+a.lastName))])],1),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.status,expression:"player.status"}],staticClass:"attendance_radio",attrs:{type:"radio",name:""+a.playerId,value:"present"},domProps:{checked:t._q(a.status,"present")},on:{change:function(e){t.$set(a,"status","present")}}})]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.status,expression:"player.status"}],staticClass:"attendance_radio",attrs:{type:"radio",name:""+a.playerId,value:"absent"},domProps:{checked:t._q(a.status,"absent")},on:{change:function(e){t.$set(a,"status","absent")}}})]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.status,expression:"player.status"}],staticClass:"attendance_radio",attrs:{type:"radio",name:""+a.playerId,value:"tardy"},domProps:{checked:t._q(a.status,"tardy")},on:{change:function(e){t.$set(a,"status","tardy")}}})])])})],2)])]),t._m(1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",{staticClass:"player_name"},[t._v("NAME")]),e("th",[t._v("PRE")]),e("th",[t._v("ABS")]),e("th",[t._v("TAR")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Message from Extracurricular")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e("div",{staticClass:"modal-body"},[t._v("\n              Attendance Submitted\n          ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])])])])}],r=(e("cadf"),e("551c"),e("097d"),e("c1df")),o=e.n(r),i={name:"TakeAttendance",data:function(){return{TeamData:[],currentTeamId:this.$route.params.TeamId}},mounted:function(){var t=this;console.log(this.TeamData),console.log(this.$route.params.TeamId),fetch("".concat("https://extracurricular.herokuapp.com/api","/players/").concat(this.$route.params.TeamId,"?d=").concat(o()().format("YYYY-MM-DD"))).then(function(t){return t.json()}).then(function(a){console.log(a),t.TeamData=a.map(function(t){return t.status=t.attendance[0]?t.attendance[0].status:"present",t.playerId=t.id,t.id=0,t})})},methods:{submitAttendance:function(){fetch("".concat("https://extracurricular.herokuapp.com/api","/attendance?d=").concat(o()().format("YYYY-MM-DD")),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(this.TeamData)}).then(function(t){return t.json()}).then(function(t){console.log(t)})},isPresent:function(t){return"present"===t.toLowerCase()},isAbsent:function(t){return"absent"===t.toLowerCase()},isTardy:function(t){return"tardy"===t.toLowerCase()}}},c=i,d=(e("e949"),e("2877")),l=Object(d["a"])(c,s,n,!1,null,"6e4e5dc2",null);l.options.__file="TakeAttendance.vue";a["default"]=l.exports},c3a1:function(t,a,e){},e949:function(t,a,e){"use strict";var s=e("c3a1"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-210dd452.3d2a23f8.js.map