export default function Home () {
    <div className="filterableProductTable">
        <div className="SearchBar">
            <input type="text"placeholder="search...."></input>
            <label><input type="checkbox">Only show products instock</input></label>
        </div>
            <div className="ProductTable">
                <div>
                    <p>Name</p>
                    <p>Price</p>
                </div>
                <div className="ProductCategory">
                    <div className="ProductCategoryRow">
                        <p>fruits</p>
                    </div>
                    <div className="ProductRow">
                        <p>Apple</p>
                        <p>1$</p>
                    </div>
                </div>
            </div>
        </div>

}


export default function Home() {
    const DATA = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },  
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" }, 
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },  
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },  
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },  
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]
}
export default function Home(){
    const DATA = [
        {
            category: "Fruits"
        }
    ]
}
