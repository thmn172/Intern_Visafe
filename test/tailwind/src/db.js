// get json
    var newsAPI = "http://localhost:3000/news";
    function start(){
        getNews(renderNews)
        createData();
        deleteNews();
        updateNews();
    }
    
    start();
    
    function getNews(callback) {
        fetch(newsAPI)
            .then(function(response){
                return response.json();
            })
            .then(callback);
    }
    
    function renderNews(response){
        var list = document.getElementById('news-list-items')
        var items = response.map(function(item){
            return `
                    <div class="flex flex-col h-full mt-5 " id="${item.id}">
                        <a href="" class="flex flex-col h-full">
                            <img src="${item.picture}" 
                                class="rounded-lg object-cover w-full" 
                                alt="${item.title}">
                            <div class="flex flex-col justify-between break-words mt-2 p-2 flex-grow">
                                <h1 class="text-xl font-semibold">
                                ${item.title}
                                </h1>
                                <button class="bg-slate-500 text-white" onclick="deleteNews(event, ${item.id})">Xóa</button>
                                <button class="bg-slate-500 text-white" onclick="updateNews(event, ${item.id})">Sửa</button>
                            </div>
                        </a>
                    </div>
            `
        });
        list.innerHTML = items.join('')
    }
    
    function createNews(data, callback){
        var methodData = 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        fetch(newsAPI, methodData)
            .then(function(response){
                response.json()
            })
            .then(callback)
    }
    
    function createData(){
        var save = document.getElementById('save')
        save.onclick = function(){
            var avt = document.querySelector('input[name="avt"]').value
            var title = document.querySelector('input[name="title"]').value
            var formdata = {
                title : title,
                picture: avt
            }
            createNews(formdata, function(){
                getNews(renderNews)
            })
        }
    }
    function editNews(id){
        var item_ID = typeof id === 'number'? id : id.id
        var methodData = 
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item_ID),
            }
        fetch(newsAPI+'/'+item_ID, methodData)
            .then(function(response){
                response.json()
            })
            .then((json)=>console.log(json))
    }
    
    function updateNews(id){
        // var save = document.getElementById('save')
        save.onclick = function(){
            var item_ID = typeof id === 'number'? id : id.id
        var methodData = 
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item_ID),
            }
        fetch(newsAPI+'/'+item_ID, methodData)
            .then(function(response){
                response.json()
            })
            .then((json)=>console.log(json))
        }
    }
    
    function deleteNews(event,id){
        var item_ID = typeof id === 'number'? id : id.id
        var methodData = 
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            }
        fetch(newsAPI+'/'+item_ID , methodData)
            .then(function(response){
                response.json()
            })
            .then(function(){
               var item =  document.getElementById(item_ID)
               if(item){
                item.remove();
               }
                
            })
        
    }