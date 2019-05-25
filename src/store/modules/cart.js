//初始化数据
const state = {
    //商品列表
    shop_list: [],

    //添加到购物车的商品
    added: []
}

//getter 抛出去的数据
const getters = {
    //商品列表
    cartLists: state => {


    },
    //购物车的列表
    cartProducts: state => {

        return state.added.map(({ productId, num, data }) => {

            return { data, num }

        })
    },
    //计算总价
    totalPrice: (state, getters) => {
        let total = 0;
        getters.cartProducts.forEach(n => {
            total += n.data.prodcutPrice * n.num
        })
        return total;
    },
    //计算总数量
    totalNum: (state, getters) => {
        let total = 0;
        getters.cartProducts.forEach(n => {
            total += n.num
        })
        return total;
    },


}

//action 异步的操作
const actions = {
    initToCart({ commit }) {
        debugger;
        commit('initCart');
    },
    //添加到购物车操作
    addToCart({ commit }, product) {

        commit('add', {
            addNum: product.num,
            obj: product.cardata,
            productId: product.cardata.productId
        })
    },
    //清除购物车
    clearAllCart({ commit }) {
        commit('clearAll')
    },
    //删除购物车的指定的商品
    delProduct({ commit }, product) {
        commit('del', product)
    },
}

//mutation
const mutations = {
    initCart(state) {
        
        var cart_Str1 = window.localStorage.getItem('cart_Str');
        var obj = JSON.parse(cart_Str1);
        state.added = obj ? obj : [];
    },
    //添加到购物车操作
    add(state, { addNum, obj, productId }) {
        
        let record = state.added.find(n => n.productId == productId);

        if (!record) {
            var DATA = new Object();
            DATA['productId'] = obj.productId;
            DATA['productName'] = obj.productName;
            DATA['prodcutPrice'] = obj.prodcutPrice;
            DATA['prodcutImg'] = obj.prodcutImg;


            state.added.push({
                data: DATA,
                productId,
                num: addNum
            })
        } else {
            record.num += addNum;
        }

        var cart_Str = JSON.stringify(state.added);
        window.localStorage.setItem('cart_Str', cart_Str);
        // console.log(record)

    },
    //清除购物车
    clearAll(state) {
        state.added = [];
        var cart_Str = JSON.stringify(state.added);
        window.localStorage.setItem('cart_Str', cart_Str);
    },
    //删除购物车的指定的商品
    del(state, product) {
        //console.info(state,product)
        state.added.forEach((n, i) => {

            if (n.productId == product.data.productId) {
                //console.info(11,n)
                //找到index的下标值
                state.added.splice(i, 1);
                var cart_Str = JSON.stringify(state.added);
                window.localStorage.setItem('cart_Str', cart_Str);
            }
        })
    },
}


export default {
    state,
    mutations,
    actions,
    getters,
};
