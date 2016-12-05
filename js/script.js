$(document).ready(function(){

$.ajax({
type:"GET",
  url: "data.json",
  dataType:"JSON",
  }).success(function(resp) {
  var x="<ul class='barTender_ul'><li><a href='#'>vodka <span><span class='ing vodka'>"+resp.data.vodka+"</span><span>ml</span></span></a></li><li><a href='#''>Gin <span><span class='ing Gin'>"+resp.data.gin+"</span><span>l</span></span></a></li><li><a href='#'>Tequila<span><span class='ing Tequila'>"+resp.data.tequila+"</span><span>ml</span></span>z</a></li><li><a href='#'>Whisky <span><span class='ing Whisky'>"+resp.data.whiskey+"</span><span>ml</span></span></a></li></ul><ul class='barTender_ul'><li><a href='#'>Sweet Varmouth<span><span class='ing Sweet'>"+resp.data.sweetvermouth+"</span><span>ml</span></span></a></li><li><a href='#''>DryVarmouth<span><span class='ing Dry_Vermouth'>"+resp.data.dryvermouth+"</span><span>l</span></span></a></li><li><a href='#'>Bloody Mary Mix<span><span class='ing Bloody_Mary_Mix'>"+resp.data.bloodymarymix+"</span><span>ml</span></span>z</a></li></ul><ul class='barTender_ul'><li><a href='#'>Agave Nectar<span><span class='ing Agave_Nectar'>"+resp.data.agavenectar+"</span><span>ml</span></span></a></li><li><a href='#''>Orange Juice<span><span class='ing Orange_Juice'>"+resp.data.orangejuice+"</span><span>l</span></span></a></li><li><a href='#'>Limes<span><span class='ing lime'>"+resp.data.limes+"</span><span>ml</span></span>z</a></li></ul><ul class='barTender_ul'><li><a href='#'>Cherries<span><span class='ing cherry'>"+resp.data.cherries+"</span><span>ml</span></span></a></li><li><a href='#''>Celery Stalks<span><span class='ing Celery_Stalk'>"+resp.data.celerystalks+"</span><span>l</span></span></a></li><li><a href='#'>Olives<span><span class='ing Olive'>"+resp.data.olives+"</span><span>ml</span></span>z</a></li></ul>";
 $(x).appendTo('nav');	

});

      var onz=[];
	  var get_class=[];
	  var m=[];
	$('.plus').click(function(){
	arrayData=[];
	  var ipt = $(this).parent().next().find('input').prop('value');
	  for(i=0;i<4;i++)
	  {

	  onz[i]=parseInt($(this).parent().parent().prev().find('.contains'+i+'').text().slice(0,1));
	  get_class[i]=$(this).parent().parent().prev().find('.contains'+i+'').next().prop('class');
	  m[i]=parseInt($('nav').find('.'+get_class[i]).text())-onz[i];
	
	  arrayData.push(m[i]);
	   if(m[i]-onz[i]<=0 )
	   {
	 return false;
	   }
	  
	  }
var qty=$(this).parent().next().find('input').prop('value');
	  $(this).parent().next().find('input').prop('value',++qty);
$.each(arrayData,function(key,val){
	 $('nav').find('.'+get_class[key]).text(val); 
});
	});

   $('.minus').click(function(){
   if($(this).parent().prev().find('input').val()==0)
   {

   }
   else
   {
	var qty=$(this).parent().prev().find('input').prop('value');
	if(qty>0)
	$(this).parent().prev().find('input').prop('value',--qty);
	else
	$(this).parent().prev().find('input').prop('value',0);
	  for(i=0;i<4;i++)
	  {
	  onz[i]=parseInt($(this).parent().parent().prev().find('.contains'+i+'').text().slice(0,1));
	  get_class[i]=$(this).parent().parent().prev().find('.contains'+i+'').next().prop('class');
	  m[i]=parseInt($('nav').find('.'+get_class[i]).text())+onz[i];
	  $('nav').find('.'+get_class[i]).text(m[i]);
	  }
	  }
	});


	$('button').click(function(){
	var m=[];
	$('.input[type="text"]').each(function(){
	var x=$(this).val();
    m.push(x);
    });
    window.location.href=window.location="summary.html ?Bloody_Mary=" +m[0]+"&Martini="+m[1]+"&Margarita="+m[2]+"&Srewdriver="+m[3]+"&Manhattan="+m[4];
	});


});