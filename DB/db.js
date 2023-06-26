
//---------------------------------------Customer Section------------------------------------


//This is the keynames of each object in localstorage 

var cus_Data = "CustomerData";
var Item_Data = "ItemData";
var place_Order_Data = "PlaceOrderDetails";


//create a function to get all the local storage data

export function getAllDbData(CustomerData) {

    let getData = localStorage.getItem(CustomerData);
    let customer_Arr = [];
    if (getData) {
        customer_Arr = JSON.parse(getData);
    }
    return customer_Arr;
}

//create a function for save customer data

export function saveCustomerData(customer) {

    let cusArray = getAllDbData(cus_Data);

    cusArray.push(customer);

    localStorage.setItem(cus_Data, JSON.stringify(cusArray));
}

// create a function for update customer data

export function updateCustomerData(customer) {

    let cusArray = getAllDbData(cus_Data);

    let arrindex = getAllDbData(cus_Data).findIndex(value => value._cusId === customer._cusId);

    cusArray[arrindex] = customer;

    localStorage.setItem(cus_Data, JSON.stringify(cusArray));
}

//create a function for delete customer data

export function deleteCustomerData(customer) {
    
    let cusArray = getAllDbData(cus_Data);

    let arrindex = getAllDbData(cus_Data).findIndex(value => value._cusId === customer._cusId);

    cusArray.splice(arrindex, 1);

    localStorage.setItem(cus_Data, JSON.stringify(cusArray));
}


//-----------------------------------------Item Details Section------------------------------------------



//create a function to get all the local storage data

export function getAllItemData(ItemData) {
    let getItems = localStorage.getItem(ItemData);
    let itemdataArr = [];
    if (getItems) {
        itemdataArr = JSON.parse(getItems);
    }
    return itemdataArr;
}

//create a function for save Item data

export function saveItemData(item) {

    let itemArr = getAllItemData(Item_Data);

    itemArr.push(item);

    localStorage.setItem(Item_Data, JSON.stringify(itemArr));

}

//create a function for Update Item data

export function updateItemData(item) {

    let itemArray = getAllItemData(Item_Data);

    let itmindex = getAllItemData(Item_Data).findIndex(value => value._itemCode === item._itemCode);

    itemArray[itmindex] = item;

    localStorage.setItem(Item_Data, JSON.stringify(itemArray));
}

//create a function for delete Item data

export function deleteItemData(item) {

    let itemArray = getAllItemData(Item_Data);

    let arrindex = getAllItemData(Item_Data).findIndex(value => value._itemCode === item._itemCode);

    itemArray.splice(arrindex, 1);

    localStorage.setItem(Item_Data, JSON.stringify(itemArray));
}


//---------------------------------------Place order section--------------------------------------------



//create a function getOrderItems from local storage

export function getPlaceOrderDetails(PlaceOrderDetails) {
    let placeOrderDetails = localStorage.getItem(PlaceOrderDetails);
    let OrderArray = [];
    if (placeOrderDetails) {
        OrderArray = JSON.parse(placeOrderDetails);
    }
    return OrderArray;
}

//create a function for save OrderItem in localstorage

export function saveOrderItem(placeOrder) {

    let saveData = getPlaceOrderDetails(place_Order_Data);

    saveData.push(placeOrder);

    localStorage.setItem(place_Order_Data, JSON.stringify(saveData));

}

//create a function for update OrderItem in localstorage

export function updateOrderItem(placeOrder) {

    let orderArr = getPlaceOrderDetails(place_Order_Data);

    let orderItemindex = getPlaceOrderDetails(place_Order_Data).findIndex(value => value._orderId === placeOrder._orderId);

    orderArr[orderItemindex] = placeOrder;

    localStorage.setItem(place_Order_Data, JSON.stringify(orderArr));

}

//create a function for delete OrderItem in localstorage

export function deleteOrderItem(placeOrder) {

    let orderItemarr = getPlaceOrderDetails(place_Order_Data);

    let orderItemindex = getPlaceOrderDetails(place_Order_Data).findIndex(value => value._orderId === placeOrder._orderId);

    orderItemarr.splice(orderItemindex, 1);

    localStorage.setItem(place_Order_Data, JSON.stringify(orderItemarr));

}


//---------------------------------order Details section-------------------------------------


//Clear localstorage data after placed order event

export function refreshPlaceOrder(placeOrder) {

    let orderItemarr = getPlaceOrderDetails(place_Order_Data);

    let orderItemindex = getPlaceOrderDetails(place_Order_Data).findIndex(value => value._orderId === placeOrder._orderId);

    orderItemarr.splice(orderItemindex);

    localStorage.setItem(place_Order_Data, JSON.stringify(orderItemarr));
}

