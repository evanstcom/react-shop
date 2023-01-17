function BasketItem(props) {
    const {
        mainId,
        displayName,
        coast,
        quantity,
        removeFromBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
    } = props;
    return (
        <li className="collection-item">
            {displayName} {coast} ₽{" "}
            <span
                className="basket-quantity"
                style={{ color: "#d32f2f", cursor: "pointer" }}
                onClick={
                    quantity === 1
                        ? () => removeFromBasket(mainId)
                        : () => decQuantity(mainId)
                }
            >
                <i className="material-icons">remove</i>
            </span>{" "}
            {quantity}{" "}
            <span
                className="basket-quantity"
                style={{ color: "green", cursor: "pointer" }}
                onClick={() => incQuantity(mainId)}
            >
                <i className="material-icons">add</i>
            </span>
            = {coast * quantity} ₽
            <span
                className="secondary-content"
                style={{ color: "#d32f2f", cursor: "pointer" }}
                onClick={() => removeFromBasket(mainId)}
            >
                <i className="material-icons">clear</i>
            </span>
        </li>
    );
}

export { BasketItem };
