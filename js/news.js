$(function(){
    $.get("https://www.mxnzp.com/api/news/list?typeId=518&page=1&app_id=ipxswkmoqiszlwzm&app_secret=QjlCV3duZkQ2NkVEN1VHNmNyTU5KUT09",function(data,status){
        console.log(data)        
        for(var i =0; i < data.data.length; i++) {
           $('#news').append('<li>' + data.data[i].title + '</li>') 
        }
    })
    setTimeout(getL,2000)
        // $.ajax({ 
    //     url:"https://www.mxnzp.com/api/history/today?type=1&app_id=ipxswkmoqiszlwzm&app_secret=QjlCV3duZkQ2NkVEN1VHNmNyTU5KUT09", 
    //     type:'GET', 
    //     dataType:'JSONP',  // 处理Ajax跨域问题
    //     success: function(data){ 
    //         console.log("ajax:" + data) 
    //     } 
    // });
})
function getL(){
   $.get("https://www.mxnzp.com/api/history/today?type=1&app_id=ipxswkmoqiszlwzm&app_secret=QjlCV3duZkQ2NkVEN1VHNmNyTU5KUT09",function(data,status){
            console.log(data)
            for(var i =0; i < 11; i++) {
               $('#todays').append('<li>' + data.data[i].title + '</li>') 
            }
        })   
}

