function GoodsItem(props) {
    const { mainId, displayName, displayDescription, price, displayAssets, addToBasket = Function.prototype, } = props;

    const coast = price.finalPrice;

    return (
        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={displayAssets[0].background} alt={displayName} />
            </div>
            <div className="card-content">
                <h6 className="card-title">{displayName}</h6>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button className="btn deep-purple darken-2" onClick={() =>
                        addToBasket({
                            mainId,
                            displayName,
                            coast,
                            })}>Купить</button>
                <span className="right" style={{fontSize: '1.4rem'}}>{coast} ₽</span>
            </div>
        </div>
    );
}

export { GoodsItem };
