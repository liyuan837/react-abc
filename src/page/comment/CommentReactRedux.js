import { connect } from 'react-redux';

//=====引入组件=====
import CommentList from '@/page/comment/CommentList'


//=====react-redux 封装组件=====

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
    return {
        data: state.CommentRedux.data
    };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
    return {
        SORTREVERSE:function(){
            dispatch({type:"SORT_REVERSE"})
        },
        handleDelete:function(deleteId){
          dispatch({
              type:'DELETE_ITEM',
              deleteId:deleteId
          })
        }
    };
}

//封装传递state和dispatch
var CommentReactRedux = connect(mapStateToProps,mapDispatchToProps)(CommentList);

export default CommentReactRedux