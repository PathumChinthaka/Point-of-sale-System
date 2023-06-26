
export class PlaceOrder{
    
    constructor(orderId,itemCode,itemName,itemPrice,itemQty,amount){
		
        this._orderId=orderId;
        this._itemCode=itemCode;
        this._itemName=itemName;
        this._itemPrice=itemPrice;
        this._itemQty=itemQty;
        this._amount=amount;
    }

	get orderId() {
		return this._orderId;
	}

	set orderId(orderId) {
		this._orderId = orderId;
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

	get itemPrice() {
		return this._itemPrice;
	}

	set itemPrice(itemPrice) {
		this._itemPrice = itemPrice;
	}

	get itemQty() {
		return this._itemQty;
	}

	set itemQty(itemQty) {
		this._itemQty = itemQty;
	}

	get amount() {
		return this._amount;
	}

	set amount(amount) {
		this._amount = amount;
	}
}

