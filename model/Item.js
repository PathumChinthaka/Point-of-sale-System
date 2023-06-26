
export class Item{
    
    constructor(itemCode,itemName,itemCategory,itemBrand,itemQty,itemPrice){
        
        this._itemCode=itemCode;
        this._itemName=itemName;
        this._itemCategory=itemCategory;
        this._itemBrand=itemBrand;
        this._itemQty=itemQty;
        this._itemPrice=itemPrice;
    }

    get itemCode() {
        return this._itemCode;
    }

    set itemCode(itemCode) {
        this._itemCode = itemCode;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(itemName) {
        this._itemName = itemName;
    }

    get itemCategory() {
        return this._itemCategory;
    }

    set itemCategory(itemCategory) {
        this._itemCategory = itemCategory;
    }

    get itemBrand() {
        return this._itemBrand;
    }

    set itemBrand(itemBrand) {
        this._itemBrand = itemBrand;
    }

    get itemQty() {
        return this._itemQty;
    }

    set itemQty(itemQty) {
        this._itemQty = itemQty;
    }

    get itemPrice() {
        return this._itemPrice;
    }

    set itemPrice(itemPrice) {
        this._itemPrice = itemPrice;
    }

}