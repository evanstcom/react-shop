import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype  } = props;
    
    if(!goods.length){
        return <h5>Ничего нет</h5>
    }
    return <div className="goods">
        {
        goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket} />
    ))}
    </div>
}

export { GoodsList };
