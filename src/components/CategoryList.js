
const CategoryList = (items) => {
    // console.log(items.list[1].card.info);

    return (
        
        <div>
            {items.list.map((items) => (
                <div key = {items.card.info.id} className="border-b-4 m-2 p-2">
                    <span>{items.card.info.name}</span>
                    <span> - ₹ {items.card.info.price/100}</span><br/>
                    <span> - ₹ {items.card.info.description}</span>

                </div>
                
        ))}
        </div>

    );
}

export default CategoryList;