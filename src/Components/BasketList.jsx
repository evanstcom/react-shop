import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((acc, el) => {
        return acc + el.coast * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active deep-purple darken-2">
                <b>Корзина</b>
                <span
                    className="secondary-content"
                    style={{ color: "#ffffff", cursor: "pointer" }}
                    onClick={handleBasketShow}
                >
                    Закрыть
                </span>
            </li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.mainId}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        decQuantity={decQuantity}
                        incQuantity={incQuantity}
                    />
                ))
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            {order.length ? (
                <li
                    className="collection-item btn-order"
                    style={{ border: "1px solid #4a148c", verticalAlign: 'middle' }}
                >
                    <b>Общая стоимость: {totalPrice} ₽</b>
                    <button
                    className="deep-purple darken-2 btn-small"
                    style={{}}
                >
                    Оформить заказ
                </button>
                </li>
            ) : (
                ""
            )}
        </ul>
    );
}

export { BasketList };
