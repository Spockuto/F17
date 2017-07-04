var teamgrid = '';

var io_loadto = ['#middle','#main'];

function io_disqus(){
	var disqus_config = function () {
	    this.page.url = document.location.href;
	    this.page.identifier = jQuery('.entry').data('slug');
	};
	(function() {
	    var d = document, s = d.createElement('script');
	    s.src = '//iohk.disqus.com/embed.js';
	    s.setAttribute('data-timestamp', +new Date());
	    (d.head || d.body).appendChild(s);
	})();
}

function io_loadmodal(obj,tit){
	jQuery("#morecontent-modal-header").text(tit);
	jQuery("#morecontent-modal-body").html(jQuery(obj).html());
}

var io_current_team_filter = 'show-all';
function io_team_filter(filt,obj){
	jQuery(".filters .active").removeClass('active');
	jQuery(".filters ."+obj).addClass('active');

	jQuery("#teamgrid").removeClass(io_current_team_filter);
	io_current_team_filter = obj;
	jQuery("#teamgrid").addClass(io_current_team_filter);

	jQuery("#teamgrid .griditem").not('.'+filt).hide(500);
	if(filt == 'all'){
		jQuery("#teamgrid .griditem").show(500);
	}else{
		filt = '.'+filt;
		jQuery("#teamgrid "+filt).show(500);
	}
}




function io_twitter_fetcher(username,count){
	var configProfile = {
	  "profile": {"screenName": username},
	  "domId": 'twitter_fetcher',
	  "maxTweets": count,
	  "enableLinks": true,
	  "showUser": true,
	  "showTime": true,
	  "showImages": false,
	  "lang": 'en'
	};
	twitterFetcher.fetch(configProfile);
}





function io_pop_item(arr,ide,cnt,blog){
	if(arr[ide] != undefined){
		var tit = arr[ide].tit;
		var sub = '';
		if(blog){
			tit = blog[0];
			sub = '<h6 class="uppercase">'+arr[ide].tit+', '+blog[1]+'</h6>';
		}
		var out = '<div class="float_profile roboto">\
			<img src="/'+arr[ide].pic+'" class="pull-right img-circle" width="80" height="80" /><h2>'+tit+'</h2>'+sub+'<h6 class="role uppercase">'+arr[ide].role+'</h6><div class="loc uppercase"><b>'+arr[ide].loc+'</b></div><hr />\
			<div id="" class="info"></div><div class="shade"></div>\
		</div>';
		return out;
	}
}


function io_pop(){
	//$.getJSON('/team.json', function (data) {
		//if(data){ //<div id="tester"></div>
			//$("#main").append('<div id="io_member_info" class="none"></div>');
			$.widget("ui.tooltip", $.ui.tooltip, {
			    options: {
						position: { my: "left+15 center", at: "right center" },
		        content: function ()           {
							if($(this).hasClass('profile-link')){
								var ide = $(this).attr('rel');
								return io_pop_item(io_team_arr,ide,$("#io_member_info").text(),false);
							}else {
								var ide = $(this).find('.author').attr('rel');
								var blog_arr = new Array();
								blog_arr = [$(this).attr('alt'),$(this).attr('date')];
								return io_pop_item(io_team_arr,ide,$("#io_member_info").text(),blog_arr);
							}




		        },
						open: function(event, ui) {
							if($(this).hasClass('blog-link')){
								var tit = $(this).attr('alt');
								$(".float_profile").addClass('blog-link');
								//$(".float_profile .tit").html('<h2>'+tit+'</h2>');
							}

							var url = $(this).attr('href');
							$(".float_profile .info").load(url+' #entry');

						}
			    }
			});
			var ww = $(window).width();
			if(ww > 767){

				$(".profile-link,.blog-link").each(function(){
					$(this).tooltip();
				});

			}



	//	}
	//});
}



function io_form_contact() {
	$("#form_contact").submit(function(){
		// id="form_message"
		var txt = $("#form_message").val();
		if(txt.replace(' ','').trim().length < 100){
			if(txt.replace(' ','').trim().length == ''){
				alert("Empty message");
			}else{
				alert("Your message has to be at least 100 characters long");
			}
			return false;
		}else{
			$("#form_message").val(txt);
		}
	});

}




function io_crypto_prices(){
	var url = $("#crypto_prices").attr('rel');
	var out = '';
	$.getJSON(url, function (data) {
		if(data){ //<div id="tester"></div>
			for(var i=0;i<data.Data.length;i++){
				var arr = '<em class="fa fa-arrow-up"></em>';
				var change_cls = 'up';
				var change = 100 - data.Data[i].Open24Hour / data.Data[i].Price * 100;
				if(data.Data[i].Open24Hour > data.Data[i].Price){
					arr = '<em class="fa fa-arrow-down"></em>';
					change_cls = 'down';
				}
				out += '<p><span class="price">'+data.Data[i].Price+'</span> <span class="symbol">'+data.Data[i].Symbol+'</span> <span class="change '+change_cls+'">'+arr+'&nbsp;'+Math.round(change * 100) / 100+'&nbsp;%</span></p>';
			}
			$("#crypto_prices").prepend(out);
		}
	});
}


function io_cut_arr(arr){
	var out = new Array();
	for(var i=0;i<arr.length;i++){
		if(is_even(i)){
			arr[i] = '';
		}
	}
	return arr;
}


function io_crypto_chart(exchange,currency,compare){
	//https://www.cryptocompare.com/api/data/histohour/?e=Poloniex&fsym=ETC&limit=10&tsym=USD
	$.getJSON('https://www.cryptocompare.com/api/data/histoday/?e='+exchange+'&fsym='+currency+'&limit=30&tsym='+compare, function (data) {
		if(data){
			//
			$("#cryptochart").html('<canvas id="chart_canvas" height="170"></canvas>');

			var labels_arr = new Array();
			var data_high = new Array();
			var data_low = new Array();
			var data_open = new Array();
			var data_close = new Array();

			for(var i=0;i<data.Data.length;i++){

				var a = new Date(data.Data[i].time * 1000);
			  var months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
			  var year = a.getFullYear();
			  var month = months[a.getMonth()];
			  var date = a.getDate();

				labels_arr.push(date+'. '+month);
				data_high.push(data.Data[i].high);
				data_low.push(data.Data[i].low);
				data_open.push(data.Data[i].open);
				data_close.push(data.Data[i].close);
			}


      var config = {
          type: 'line',
          data: {
              labels: io_cut_arr(labels_arr),
              datasets: [{
                  label: ""+currency+"/"+compare+" LOW",
                  data: data_low,
                  backgroundColor: '#0F0F0F',
                  borderColor: '#ff0000',
                  fill: true,
									borderWidth: 1,
                  pointRadius: 1,
                  pointHoverRadius: 4,
              },{
								label: ""+currency+"/"+compare+" HIGH",
                  data: data_high,
                  backgroundColor: '#222222',
                  borderColor: '#00aa00',
                  fill: true,
                  borderWidth: 1,
                  pointRadius: 1,
                  pointHoverRadius: 4,
              }]
          },
          options: {
              responsive: true,
              legend: {
									display: false,
                  position: 'bottom',
              },
							scales: {
		            xAxes: [{
		                scaleType: "linear", // scatter should not use a dataset axis
		                display: true,
		                position: "bottom",
		                id: "x-axis-1", // need an ID so datasets can reference the scale

		                // grid line settings
		                gridLines: {
		                    show: true,
		                    color: "rgba(0, 0, 0, 0.05)",
		                    lineWidth: 1,
		                    drawOnChartArea: true, // if true, draw these grid lines on the chart area
		                    drawTicks: true, // if true, draw these grid lines as ticks on the axis
		                    zeroLineWidth: 1,
		                    zeroLineColor: "rgba(0,0,0,0.25)",
		                },

		                // scale numbers
		                beginAtZero: false,
		                integersOnly: false,
		                override: null,

		                // label settings
		                labels: {
		                    show: true,
		                    template: "<%=value%>",
		                    fontSize: 9,
		                    fontStyle: "normal",
		                    fontColor: "#666",
		                    fontFamily: "Helvetica Neue",
		                },
		            }],
		            yAxes: [{
		                scaleType: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
		                display: true,
		                position: "right",
		                id: "y-axis-1",

		                // grid line settings
		                gridLines: {
		                    show: true,
		                    color: "rgba(0, 0, 0, 0.05)",
		                    lineWidth: 1,
		                    drawOnChartArea: true,
		                    drawTicks: true, // draw ticks extending towards the label
		                    zeroLineWidth: 1,
		                    zeroLineColor: "rgba(0,0,0,0.25)",
		                },

		                // scale numbers
		                beginAtZero: false,
		                integersOnly: false,
		                override: null,

		                // label settings
		                labels: {
		                    show: true,
		                    template: "<%=value%>",
		                    fontSize: 9,
		                    fontStyle: "normal",
		                    fontColor: "#666",
		                    fontFamily: "Helvetica Neue",
		                }
		            }],
		        }
          }

      };

      var ctx = document.getElementById("chart_canvas").getContext("2d");
      window.myLine = new Chart(ctx, config);

		}
	});

}



var allVideos = jQuery("iframe[src^='//www.youtube.com']");
var fluidEl = jQuery("body");

function io_fluid_videos(){
	allVideos = jQuery("iframe[src^='//www.youtube.com']"),
	fluidEl = jQuery("body");
	allVideos.each(function() {
		jQuery(this).data('aspectRatio', this.height / this.width).removeAttr('height').removeAttr('width');
	});
}



function io_ajaxload() {
	$(".ajaxload").unbind('click');
	$(".ajaxload").on('click',function(e){
		var url = $(this).attr('href');
		var obj = $(this).data('ide');
		var target = $(this).data('hash');
		var active = $(this).data('active');
		var callback = $(this).data('callback');

		io_loadto = [obj,target];

		$(active).removeClass('active');
		e.preventDefault();
		History.pushState(io_hist, "IOHK",url);
		//io_load_page(url,obj,target,callback);
		$(this).closest(active).addClass('active');
	});
}



function io_load_page(url,obj,hash,callback){
	choice = url;
	if(hash == '#main'){
		if($("body").hasClass('transin')){
		 	$("body").removeClass('transin');
		}
	}else{
		$(obj).addClass('transout');
	}
	var url_a = url.split('/');
	if(iolang == 'en'){
		chosen = url_a[url_a.length-2];
	}else{
		chosen = url_a[url_a.length-3];
	}
	if(url.match('team')){
		chosen = 'team';
	}
	if(url.match('blog')){
		chosen = 'blog';
	}
	if(url.match('papers')){
		chosen = 'papers';
	}
	setTimeout(function(){
		$(obj).load(url+' '+hash,function(){
			io_nav();
			var bodyvar = chosen;
			if(bodyvar == ''){
				bodyvar = 'home';
			}
			$("#page").attr('class',bodyvar);
			$("title").text($("h1 .title").text()+' - '+sitename);
			//io_retitle();
			$("html, body").animate({ scrollTop: 0 }, 300);

			setTimeout(function(){

				if(hash == '#main'){
					if(!$("body").hasClass('transin')){
					 	$("body").addClass('transin');
					}
				}else{
					$(obj).removeClass('transout');
				}

			},100);

			io_which_way_alter();
			if(typeof callback == 'function'){
				return callback;
			}

		});

	},500);
}



	$(".navbar a,.navbar-brand").click(function(e){
		e.preventDefault();
		io_intro_kill();

		io_zotero_setup = false;
		$(".navbar .active").removeClass('active');
		$(this).parent().addClass('active');
		var urlchoice = $(this).attr('href');
		io_loadto[0] = '#middle';
		io_loadto[1] = '#main';
		if(!lowie){
			//window.history.pushState(io_hist, "IOHK", urlchoice);
			History.pushState(io_hist, "IOHK",urlchoice);
			//io_load_page(urlchoice);
		}else{
			document.location.href = urlchoice;
		}
		if($("#navhider").hasClass('in')){
		 	$("#navhider").removeClass('in');
		}
	});

	function io_retitle() {
		//var h1 = $(".entry").attr('title');
		//if(chosen == 'team'){
		//	h1_arr = h1.split('/');
		//}
		//$("h1").html(h1);
	}

	function io_translate_update() {
		if(choice != ''){
			$("#lang-chooser a").each(function(){
				var lang = $(this).attr('class');
				if(lang == 'en'){
					lang = '';
				}
				var lang_choice = choice;
				if(lang_choice == '/'){
					lang_choice = '';
				}
				if(iolang == 'en'){
					$(this).attr('href',lang_choice+''+lang+'');
				}else{
					$(this).attr('href',lang_choice.substr(0,choice.length-4)+'/'+lang+'');
				}
			});
		}
	}

	function io_nav() {
		$(".subpages a,a.ajaxhref").unbind('click');
		$(".subpages a,a.ajaxhref").click(function(e){
			e.preventDefault();
			$(".subpages .active,a.ajaxhref").removeClass('active');
			$(this).parent().addClass('active');
			var urlchoice = $(this).attr('href');
			choice = urlchoice;
			io_loadto[0] = '#middle';
			io_loadto[1] = '#main';
			if(!lowie){
				History.pushState(io_hist, "IOHK",urlchoice);
				//alert(urlchoice);
				if(document.location.hash){
					//alert("hash");
					document.location.href = urlchoice;
				}
				/*
				setTimeout(function(){
				if(document.location.hash){
					//alert("hash");
					io_load_page(urlchoice,'#middle','#main',null);
				}else{
					//alert("no hash");
				}
				},500);
*/
			}else{
				document.location.href = urlchoice;
			}
		});
		io_ajaxload();
		//io_altnav();
	}

	function io_altnav() {
		$("a.fadehref").unbind('click');
		$("a.fadehref").click(function(e){
			e.preventDefault();
			$("a.fadehref").removeClass('active');
			$(this).parent().addClass('active');
			var urlchoice = $(this).attr('href');
			choice = urlchoice;
			io_loadto = ['#middle','#main'];
			if(!lowie){
				History.pushState(io_hist, "IOHK",urlchoice);
				io_goto_page(urlchoice);
			}else{
				document.location.href = urlchoice;
			}
		});
	}

	function io_subajax_loader(){
		var lowievar = false;
		$("#main a.io_ajax_load").click(function(e){
			e.preventDefault();
			var urlchoice = $(this).attr('href');
			var target = $(this).attr('data-target');
			var rel = $(this).attr('data-load');
			choice = urlchoice;
			$(".sidecol .active").removeClass('active');
			$(this).parent().addClass('active');
			if(lowie){
				if(lowievar){
					document.location.href = urlchoice;
				}
			}
			io_load_subpage(target,urlchoice,rel);
		});
	}

	function io_load_subpage(target,url,rel){
		if(!$("body").hasClass('transsub')){
		 	$("body").addClass('transsub');
		}
		setTimeout(function(){
			$(target).load(url+' '+rel,function(){
				lowievar = true;
				$("html, body").animate({ scrollTop: 0 }, 300);
				$("title").text($("h1").text()+' - '+homename);
				if($("body").hasClass('transsub')){
				 	$("body").removeClass('transsub');
				}
			}).delay(500);
		},300);
	}

	function io_goto_page(url){
		choice = url;
		if($("body").hasClass('transin')){
		 	$("body").removeClass('transin');
		}
		var url_a = url.split('/');
		if(iolang == 'en'){
			chosen = url_a[url_a.length-2];
		}else{
			chosen = url_a[url_a.length-3];
		}
		setTimeout(function(){
			document.location.href = url;
		},500);
	}

	var team_sec = 0;
	var team_car = true;
	function io_alter_title(){
		$("h1 .active").removeClass('active');
		$("h1 a").each(function(i,v){
			if(i == team_sec){
				$(this).addClass('active');
			}
		});
	}

	function io_title_typing(){
		var txt = $("h1").text();
		//$("h1").typewriter();
		if(txt.match('IOHK |')){
			setTimeout(function(){
				txt = txt.replace('IOHK |','<span class="c_f00">IOHK |</span>');
				$("h1").html(txt);
			},3500);
		}
	}



	function io_which_way_alter(){
		//$("title").text($("h1").text()+' - '+sitename);
		//$("html, body").animate({ scrollTop: 0 }, 300);

		io_translate_update();
		if(!webglAvailable){
        $(".io_webgl").remove();
    }

		io_zotero_setup = false;

		if(chosen == jobspage){
			//io_subajax_loader();
		 	//$(".sidecol li a:first").trigger('click');
		 	io_job_list();

		}
		if($("#main").hasClass('container-fluid')){
			$("#main").attr('class','container');
		}
		if($("#page").hasClass('intropage')){
			$("#page").removeClass('intropage');
		}
		if($("#io_intro").hasClass('ready')){
			$("#main").attr('class','container-fluid');
			$("#page").addClass('intropage home');
			io_intro();
		}else{
			io_intro_kill();
			//io_title_typing();
			//$("h1").typewriter();
		}
		if($(".entry").data('type') == 'blog-post'){
			io_fluid_videos();
		}
		if($("#page").hasClass('blog') || $("#page").hasClass('video')){
			io_fluid_videos();
		}
		if($("#page").hasClass('papers')){
			io_fluid_videos();
		}


		if($("#nav-tabs").hasClass('nav-tabs')){
			io_hash_tabs();
		}

		if($("#io_project_commits").hasClass('ready')){
			$("#io_project_commits").empty();
			io_load_commits();
		}
		if($("#zotero_load").hasClass('ready')){
			io_zotero_setup = false;
			io_zotero();
		}

		if(!$("body").hasClass('transin')){
		 	$("body").addClass('transin');
		}
		if($("#crypto_prices").hasClass('crypto_prices')){
		 	io_crypto_prices();
		}
		if($("#form_contact").hasClass('form_contact')){
		 	io_form_contact();
		}
		if($("#twitter_fetcher").hasClass('fetch')){
			var username = $("#twitter_fetcher").attr('username');
			var count = $("#twitter_fetcher").attr('count');
		 	io_twitter_fetcher(username,count);
		}
		if($("#cryptochart").hasClass('cryptochart')){
			var exchange = $("#cryptochart").data('exchange');
			var currency = $("#cryptochart").data('currency');
			var compare = $("#cryptochart").data('compare');
		 	io_crypto_chart(exchange,currency,compare);
		}
		if($("#main").hasClass('blog')){
			$(".entry a[href^='http://']").attr("target","_blank");
			$(".entry a[href^='https://']").attr("target","_blank");
		}

		$(".modal-image").each(function(){
			$(this).click(function(e){
				e.preventDefault();
				var url = $(this).attr('href');
				$("#iohk-modal-load").html('<img src="'+url+'" alt="" class="fullwidth" />');
				$("#iohk-modal").modal();
			});
		});

		if($(".iohk-video-list").hasClass('youtube')){
			iohk_videos();
		}

		io_pop();
		$('[data-toggle="tooltip"]').tooltip();


		if($(".entry").data('type') == 'blog-post'){
			$.getScript( "//iohk.disqus.com/count.js", function( data, textStatus, jqxhr ) {
					io_disqus();
			});
		}


		if(webglAvailable){
			if(!IE){
				if($("#subheader").hasClass('particles')){
		    	$("#subheader-particles").height($("#subheader").height());
					particlesJS.load('subheader-particles', '');
				}
			}
		}


	}


	function iohk_video_modal_update() {
	  $(".iohk_video_load_modal").each(function(){
	    var url = $(this).attr('rel');
	    $(this).click(function(e){
	      e.preventDefault();
	      //$("#videomodal iframe").attr('src','https://www.youtube.com/embed/'+url+'?autoplay=1');
	      $("#videomodal iframe").attr('src','https://www.youtube.com/embed/'+url+'');
	      $('#videomodal').modal();
	    });
	  });
	}

	function iohk_video_preview(obj) {
		var out = '';
	    out = '<div class="'+iohk_playlist_grid+'"><div class="video"><a href="https://www.youtube.com/watch?v='+obj.snippet.resourceId.videoId+'" class="iohk_video_load_modal" rel="'+obj.snippet.resourceId.videoId+'"><img src="'+obj.snippet.thumbnails.high.url+'" alt="" class="fullwidth" /></a><div class="title"><h3><a href="https://www.youtube.com/watch?v='+obj.snippet.resourceId.videoId+'" class="iohk_video_load_modal" rel="'+obj.snippet.resourceId.videoId+'">'+obj.snippet.title+'</a></h3></div></div></div>';
		return out;
	}

	var iohk_playlist = '';
	var iohk_playlist_grid = 'col-md-8 col-sm-12';
  var iohk_playlist_count = 3;
  var iohk_playlist_active = 0;
  var iohk_playlist_arr = new Array();



	function iohk_videos() {
		$.getScript( "https://apis.google.com/js/client.js?onload=iohk_videos_load", function( data, textStatus, jqxhr ) {});
	}


	function iohk_videos_load() {
		var ii = 0;
      $(".iohk-video-list").each(function(){
				$(this).html(svgloader);
          var iohk_playlist_arr_var = new Array();
          iohk_playlist_arr_var['rel'] = $(this).attr('rel');
          iohk_playlist_arr_var['id'] = $(this).attr('id');
          iohk_playlist_arr_var['grid'] = $(this).attr('grid');
					if(iohk_playlist_arr_var['grid'] == undefined){
						iohk_playlist_arr_var['grid'] = iohk_playlist_grid;
					}

					iohk_playlist_arr_var['count'] = $(this).attr('count')*1;

					iohk_playlist_arr.push(iohk_playlist_arr_var);

					ii++;
			});
      iohk_videos_load_call();
	}

	function iohk_videos_load_call() {
    if(iohk_playlist_arr[iohk_playlist_active] != undefined){
			//console.log(iohk_playlist_arr);
      gapi.client.setApiKey('AIzaSyAIqaKbClCtxWJ3pKCICB16A48yhe2VZQE');
      gapi.client.load('youtube', 'v3', function() {
      var request = gapi.client.youtube.playlistItems.list({
          part: 'snippet',
          playlistId: iohk_playlist_arr[iohk_playlist_active]['rel'],
          maxResults: iohk_playlist_arr[iohk_playlist_active]['count']
      });
      request.execute(function(response) {
        var out = '';
        var cnt = 0;
				if(response.items != undefined){
	        for (var i = 0; i < response.items.length; i++) {
	          if(response.items[i].snippet.title != 'Private video'){
	            if(cnt < iohk_playlist_arr[iohk_playlist_active]['count']){
	              out += iohk_video_preview(response.items[i]);
	              cnt++;
	            }
	          }
	        }

	        out = '<div class="row">'+out+'</div>';
	        $("#"+iohk_playlist_arr[iohk_playlist_active]['id']).html(out);
	        iohk_video_modal_update();
	        iohk_playlist_active++;
          iohk_videos_load_call();
				}else{
					console.log(response);
				}
      });

      });
    }
  }




	function io_which_way(){
		var ww = $(window).width();
		var wh = $(window).height();
		var row = wh/20;
		chosen = pageslug;
		io_nav();
		io_retitle();
		io_which_way_alter();
		if(!$("body").hasClass('introin')){
		 	$("body").addClass('introin');
		}
	}

	function io_resize(){

	}


	function io_hash_tabs() {
	    var url = document.location.hash;
	    if (url.match('#')) {
	        $('.nav-tabs a[href=#'+url.split('#')[1]+']').tab('show') ;
	    }
	    $('.nav-tabs a').on('shown.bs.tab', function (e) {
	        window.location.hash = e.target.hash;
	    });
	}

	function io_load_commits() {
		var url = $("#io_project_commits").data('url');
		if(url.length > 0){
			io_load_rss(url,"#io_project_commits",$("#io_project_commits").data('count'),$("#io_project_commits").data('show'));
		}

	}

	function io_load_rss(feed,target,items,itemshidden) {
		$("#io_project_commits").rss(feed,{
			limit: 8,
			ssl: true,
				dateFormat: 'MMMM Do, YYYY',
				entryTemplate: '<li><a class="block" href="{url}">{title}</a><small class="uppercase light block" style="margin:4px 0 0 0">{author} - {date}</small></li>'
		});
	}

	function io_search_links(words) {

	}










$(window).resize(function(){

	if(io_intro_animation != null){
		io_intro_animation.updateCanvas();
	}

	var newWidth = fluidEl.width();
	allVideos.each(function() {
		var $el = $(this);
		$el.width(newWidth).height(newWidth * $el.data('aspectRatio'));
	});

  if($("#subheader").hasClass('particles')){
    	$("#subheader-particles").height($("#subheader").height());
	}

	if($("#main").hasClass("papers")){
			io_papers_move_update();
	}

	if($("#io_intro").hasClass('ready')){
		io_intro_frame();
	}


});

$(window).load(function(){
	io_which_way();
});

$(window).on('hashchange', function() {
	//io_zotero();
});

$(document).ready(function() {
	History.Adapter.bind(window, 'statechange', function() {
		var State = History.getState();
		//console.log(State);
		io_load_page(State.url,io_loadto[0],io_loadto[1],null);

	});

});
