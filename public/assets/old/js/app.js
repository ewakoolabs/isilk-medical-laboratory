$(document).ready(function(){

});

function switch_tab(obj)
{
    $(".tabs > a").attr("class", "tab");
    $(obj).attr("class", "current_tab");
}

function formatNumber(input)
{
    var num = input.value.replace(/\,/g,'');
    if(!isNaN(num))
    {
        if(num.indexOf('.') > -1)
        {
            num = num.split('.');
            num[0] = num[0].toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,').split('').reverse().join('').replace(/^[\,]/,'');
            if(num[1].length > 0)
            {
                alert('Cukup masukkan bilangan utama!');
                num[1] = num[1].substring(0,num[1].length-1);
            } 
            input.value = num[0]+'.'+num[1];
        } 
        else
        { 
            input.value = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,').split('').reverse().join('').replace(/^[\,]/,''); 
        }
    }
    else
    { 
        alert('Anda hanya diperbolehkan memasukkan angka!');
        input.value = input.value.substring(0,input.value.length-1);
    }
}

function formatRupiah(nStr) {
   nStr += '';
   x = nStr.split('.');
   x1 = x[0];
   x2 = x.length > 1 ? '.' + x[1] : '';
   var rgx = /(\d+)(\d{3})/;
   while (rgx.test(x1))
   {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
   }
   return "Rp" + x1 + x2 + ",-";
}

function replaceAll(str,replace,with_this)
{
    var str_hasil ="";
    var temp;

    for(var i=0;i<str.length;i++)
    {
        if (str[i] == replace)
        {
            temp = with_this;
        }
        else
        {
                temp = str[i];
        }

        str_hasil += temp;
    }

    return str_hasil;
}

function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


/* COMMON FUNCTIONS */
function load(page,div){
    var image_load = "<div class='ajax_loading'><img src='"+loading_image_large+"' /></div>";
    $.ajax({
        url: site+page,
        beforeSend: function(){
            $(div).html(image_load);
        },
        success: function(response){
            $(div).html(response);
        },
        dataType:"html"  		
    });
    return false;
}
function send_form_loading(formObj,action,responseDIV)
{
    var image_load = "<div class='ajax_loading'><img src='"+loading_image_large+"' /></div>";
    $.ajax({
        url: site+action, 
        data: $(formObj.elements).serialize(),
        beforeSend: function(){
            $(responseDIV).html(image_load);
        },
        success: function(response){
                $(responseDIV).html(response);
            },
        type: "post", 
        dataType: "html"
    }); 
    return false;
}
function load_small(page,div,loadingDom,opt){
    var image_load_small = "<span class='ajax_loading_small'><img src='"+loading_image_small+"' /></span>";
    $.ajax({
        url: site+page,
        beforeSend: function(){
            $(loadingDom).html(image_load_small);
        },
        success: function(response){
            $(loadingDom).html('');
            if(opt=="append")
            {
                $(div).append(response);
            }
            else
            {
                $(div).html(response);
            }
        },
        dataType:"html"  		
    });
    return false;
}
function load_no_loading(page,div){
    $.ajax({
        url: site+page,
        success: function(response){
            $(div).html(response);
        },
        dataType:"html"  		
    });
    return false;
}
function dummyload(page){
    $.ajax({
        url: site+page,
        dataType:"html"  		
    });
    return false;
}
function send_form(formObj,action,responseDIV)
{
    $.ajax({
        url: site+action, 
        data: $(formObj.elements).serialize(), 
        success: function(response){
                $(responseDIV).html(response);
            },
        type: "post", 
        dataType: "html"
    }); 
    return false;
}