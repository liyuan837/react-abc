var dataInit={
    data:[
        {
            id:1,
            user:'liyuan',
            content:'真皮'
        },
        {
            id:2,
            user:'liyuanqw',
            content:'真皮'
        },
        {
            id:3,
            user:'liyuanwq',
            content:'真皮'
        }
    ],
    inputValue:''
}

function CommentRedux(state = dataInit, action) {
    switch (action.type) {
        case "SORT_REVERSE":
            //倒叙显示
            var arr=state.data;
            var arr2=[];
            for(var i=arr.length-1;i>=0;i--){
                arr2.push(arr[i])
            }
            return Object.assign({},state,{data:arr2})
        case 'DELETE_ITEM':
            //删除当前项
            var arr=state.data;
            var arr2=[];
            for(var i=arr.length-1;i>=0;i--){
                if(action.deleteId != arr[i].id){
                    arr2.push(arr[i])
                }
            }
            return Object.assign({},state,{data:arr2})
        default:
            return state
    }
}

export default CommentRedux