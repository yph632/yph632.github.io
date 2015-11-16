/**
 * 页面ready方法
 */
$(document).ready(function() {
	loadJs();

    loadCategory()

});



/**
 *需要调用的函数集合
 */
function loadJs(){
	postDisplay();
    generateContent();
	searchForm()
    backToTop();
}


/**
 * 固定底栏的初始化方法
 * 在一开始载入页面时，使用fixFooter()方法固定底栏。
 * 在浏览器窗口改变大小是，依然固定底栏
 * @return {[type]} [description]
 */
function fixFooterInit() {
    var footerHeight = $('footer').outerHeight();
    var footerMarginTop = getFooterMarginTop() - 0; //类型转换
    // var footerMarginTop = 80;

    fixFooter(footerHeight, footerMarginTop); //fix footer at the beginning

    $(window).resize(function() { 
	//when resize window, footer can auto get the postion
        fixFooter(footerHeight, footerMarginTop);
    });


}

/**
 * 固定底栏
 * @param  {number} footerHeight    底栏高度
 * @param  {number} footerMarginTop 底栏MarginTop
 * @return {[type]}                 [description]
 */
function fixFooter(footerHeight, footerMarginTop) {
    var windowHeight = $(window).height();
    var contentHeight = $('body>.container').outerHeight() + $('body>.container').offset().top + footerHeight + footerMarginTop;
   
    console.log(contentHeight);
    if (contentHeight < windowHeight) {
        $('footer').addClass('navbar-fixed-bottom');
    } else {
        $('footer').removeClass('navbar-fixed-bottom');
    }

    $('footer').show(400);
}

/**
 * 使用正则表达式得到底栏的MarginTop
 * @return {string} 底栏的MarginTop
 */
function getFooterMarginTop() {
    var margintop = $('footer').css('marginTop');
    var patt = new RegExp("[0-9]*");
    var re = patt.exec(margintop);
    return re[0];
}

/**
 * 获取目录信息，并生成目录
 */

function getCategory(){
	$.getJSON("/api/categories.json", function(cate){
		$.each(cate, function(index,val){ 
			$('<li class="categories-list-item"><a class='+index+' href="javascript:;">'+
			val.category +'<span class="my-badge">'+val.size+'</span>'+
			'</a></li>').appendTo("#cates");
	    }); 
	});
}

/**
 * 为目录列添加class标记
 */
function addClassForCategory(){
	$.getJSON("/api/tags.json", function(tag){
	    $.each(tag, function(index,val){ 
			$("."+index).attr("cate", val.tag);
			console.log($("."+index));
	    });  
	});	
}

/**
 * 分类展示
 * 点击分类展示时
 */
function loadCategory(){
	//获取目录信息，并生成目录
    getCategory();
	//为目录列添加class标记
	setTimeout(function(){
		addClassForCategory();
	 },500);
	
} 
 
function postDisplay() {
    $(document).on("click", ".categories-list-item",function() {
       var cateName = $(this).children().attr('cate'); //get category's name
		$(".post-list-body").empty();
		$.getJSON("/api/"+cateName+".json", function(posts){
            $.each(posts, function(index,val){ 
				    $('<div class="panel panel-default">'+
				        '<div class="panel-heading">'+val.title+'</div>'+
						'<div class="panel-body">'+
							'<a  href='+val.url+' class="list-group-item pjaxlink clearfix">点击阅读'+
							    '<span class="badge">'+val.date+'</span></a></div></div>').
								appendTo(".post-list-body");
	        }); 
		   
        });
        //</div>
    });
}



/**
 * 回到顶部
 */
function backToTop() {
    //滚页面才显示返回顶部
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#top").fadeIn(500);
        } else {
            $("#top").fadeOut(500);
        }
    });
    //点击回到顶部
    $("#top").click(function() {
        $("body").animate({
            scrollTop: "0"
        }, 500);
    });

    //初始化tip
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });
}



/**
 * 侧边目录
 */
function generateContent() {

    // console.log($('#markdown-toc').html());
    if (typeof $('#markdown-toc').html() === 'undefined') {
        // $('#content .content-text').html('<ul><li>文本较短，暂无目录</li></ul>');
        $('#content').hide();
        $('#myArticle').removeClass('col-sm-9').addClass('col-sm-12');
    } else {
        $('#content .content-text').html('<ul>' + $('#markdown-toc').html() + '</ul>');

    }
}

/**
 *触发搜索
 */
function searchForm(){
	$("#searchBtn").on("click", function(){
		var data = $("#searchInput").val();
		window.open("http://baidu.com/s?wd="+data);
	});	
}
 