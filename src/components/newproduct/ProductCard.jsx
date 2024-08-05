import '@components/newproduct/productCard.sass'

export default function ProductCard({ product }) {
    return <div className="productCard">
        <img src={product.img} alt="product image" className="productCard__image" loading='lazy' width='100%' height='100%'/>
        <div className="productCard__info">
            <h3 className="productCard__cost">{product.cost} сом</h3>
            <h2 className="productCard__name">{product.name}</h2>
        </div>
    </div>
}