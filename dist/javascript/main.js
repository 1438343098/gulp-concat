 $(function() {
 	var projects = [{
 			label: "13789456201",
 			desc: "1"
 		},
 		{
 			label: "865946021056666",
 			desc: "10000"
 		},
 		{
 			label: "461382199508050126",
 			desc: "1"
 		},
 		{
 			label: "13789456201",
 			desc: "1"
 		},
 		{
 			label: "865946021056666",
 			desc: "10000"
 		},
 		{
 			label: "461382199508050126",
 			desc: "1"
 		}
 	];

 	$("#searched").autocomplete({
 			minLength: 0,
 			//source: projects,
 			source: function(request, response) {
 				var search = encodeURI(request.term);
 				var s = [];
 				if(search != null && search != "") {
 					s = projects;
 				}
 				response(s);
 			},

 			focus: function(event, ui) {
 				$("#searched").val(ui.item.label);
 				return false;
 			},
 			select: function(event, ui) {
 				$("#searched").val(ui.item.label);

 				return false;
 			}
 		})
 		.data("ui-autocomplete")._renderItem = function(ul, item) {
 			if(screen.height <= 768 || screen.width <= 1280) {
 				$('.tname,.tcont').css('fontSize', '15px')
 				$('.tname,.tcont').parent('a').parent('li').css({
 					'height': '25px',
 					'line-height': '25px'
 				})
 				$('.tname,.tcont').parent('a').css({
 					'height': '25px',
 					'line-height': '25px'
 				})
 			}
 			return $("<li>")
 				.append("<a class='clear'>" + "<div class='tname'>" + item.label + "</div>" + "<div class='tcont'>" + '约' + item.desc + '条结果' + "</div>" + "</a>")
 				.appendTo(ul);
 		};
 });