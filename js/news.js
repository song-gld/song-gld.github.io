$(function(){
    $.get("https://www.mxnzp.com/api/news/list?typeId=518&page=1&app_id=ipxswkmoqiszlwzm&app_secret=QjlCV3duZkQ2NkVEN1VHNmNyTU5KUT09",function(data,status){
        console.log(data.data[0])        
        for(var i =0; i < data.data.length; i++) {
           $('#news').append('<li>' + data.data[i].title + '</li>') 
        }
    })
    $.get("https://www.mxnzp.com/api/history/today?type=1&app_id=ipxswkmoqiszlwzm&app_secret=QjlCV3duZkQ2NkVEN1VHNmNyTU5KUT09",function(data,status){
        for(var i =0; i < 11; i++) {
           $('#todays').append('<li>' + data.data[i].title + '</li>') 
        }
    })  
})

