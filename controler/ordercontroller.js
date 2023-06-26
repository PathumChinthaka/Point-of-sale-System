import { PlaceOrder } from "../model/placeOrder.js";
import { getAllItemData, saveOrderItem, getPlaceOrderDetails, updateOrderItem, deleteOrderItem, refreshPlaceOrder } from "../DB/db.js";

var itm;

export class PlaceOrderController {

    constructor() {
        $('#cmbItemCode').on('change', (event) => {
            this.getItemDetails(event.target.value);
        });
        $('#btn_addToCart').click((event) => {
            this.addOrderItems();
            this.netAmount();
        });
        $('#btn_updateCart').click((event) => {
            this.updatePlaceOrder();
            this.netAmount();
        });
        $('#btn-Refresh').click((event) => {
            $('table tbody tr td').remove();
            $('#amount').text("0.00")
            this.refreshOrderTable();
            let data=getPlaceOrderDetails("PlaceOrderDetails");
            data=[];
            this.loadTableData();
            this.clearInputFields();
        });
        $('#btn-Clear').click((event) => {
            this.deletePlaceOrder();
        });
        $('#btn-PlaceOrder').click((event) => {
            this.testordrr();
        });

        this.loadTableData();
        this.netAmount();
        this.getSelectedTableRow();
        this.setComboBoxValue();
        this.clearInputFields();
        this.setDateandTime();
    }

    // inputValidation(){
    //     $("#cmbItemCode :selected").text() === "Choose..."
    //   ? (alert("Please select the Item Id !"),
    //     $("#cmbItemCode").focus(),
    //     $("#cmbItemCode").css({ borderBottom: "2px solid red" }))
    //   : !$('#order_Id').val()
    //   ? alert('Invalid Order Id')
    //   : $('#item_Name').val()
    //   ? alert('invalid item Name')
    //   :$('#item_Price').val()
    //   ? alert('invalid item Price')
    //   :$('#item_Qty').val()
    //   ? alert('Invalid Item Qty')
    //   : $("#btn_addToCart").text() === "AddToCart"
    //   ? this.addOrderItems()
    //   : this.updatePlaceOrder();
    // }

    //generate new order Id

    genarateOrderID(){
        let ordArray=getPlaceOrderDetails("PlaceOrderDetails");
        if(ordArray.length===0){
            $('#order_Id').val("Ord00001");
            return;
        }

        let arr=ordArray[ordArray.length -1]._orderId;
        let id= +arr[1];
        id++;

        $('#orderId').text("MD-" + String(id).padStart(5, '0'));

    }

    //set Item combo b0x values
    setComboBoxValue(){
        getAllItemData("ItemData").map((value)=>{
           $('#cmbItemCode').append("<option>" + value._itemCode + "</option>");
        });
    }

    getItemDetails(itemCode){
        getAllItemData("ItemData").map((value)=>{
            if(value._itemCode===itemCode){
                $('#item_Name').val(value._itemName);
                $('#item_Price').val(value._itemPrice);
            }
        })
    }

    //send obejct to sendOrderItem function in db.js

    addOrderItems() {
        saveOrderItem(new PlaceOrder(
            $('#order_Id').val(),
            $('#cmbItemCode').val(),
            $('#item_Name').val(),
            $('#item_Price').val(),
            $('#item_Qty').val(),
            this.getAmount()
        ));
        this.loadTableData();
        this.clearInputFields();
    }

    //send obejct to updateOrderItem function in db.js

    updatePlaceOrder() {
        updateOrderItem(new PlaceOrder(
            $('#order_Id').val(),
            $('#cmbItemCode').val(),
            $('#item_Name').val(),
            $('#item_Price').val(),
            $('#item_Qty').val(),
            this.getAmount()
        ));
        this.loadTableData();
        this.clearInputFields();
    }

    //send obejct to deleteOrderItem function in db.js

    deletePlaceOrder() {
        deleteOrderItem(new PlaceOrder(
            $('#order_Id').val(),
            $('#cmbItemCode').val(),
            $('#item_Name').val(),
            $('#item_Price').val(),
            $('#item_Qty').val(),
        ));
        let okey = alert('Do u want to delete this Item ?');
        this.loadTableData();
        this.clearInputFields();
    }

    // Refresh table for new Order

    refreshOrderTable() {
        refreshPlaceOrder(new PlaceOrder(
            $('#order_Id').val(),
            $('#cmbItemCode').val(),
            $('#item_Name').val(),
            $('#item_Price').val(),
            $('#item_Qty').val()
        ));
    }

    //get Amount calculation

    getAmount() {
        let itemPrice = $('#item_Price').val();
        let itemQty = $('#item_Qty').val();
        const netAmount = itemPrice * itemQty;
        return netAmount;
    }

    //get Net Amount

    netAmount() {
        let value = getPlaceOrderDetails("PlaceOrderDetails");
        let netTot = 0;

        value.forEach(element => {
            netTot += element._amount;
        });

        $('#amount').text(netTot.toFixed(2));

    }


    // load table data

    loadTableData() {
        $('table tbody tr td').remove();
        getPlaceOrderDetails("PlaceOrderDetails").map((value) => {
            let row = "<tr>" +
                "<td>" + value._orderId + "</td>" +
                "<td>" + value._itemCode + "</td>" +
                "<td>" + value._itemName + "</td>" +
                "<td>" + value._itemPrice + "</td>" +
                "<td>" + value._itemQty + "</td>" +
                "<td>" + value._amount + "</td>" +
                "</tr>";
            $('#order_tbody').append(row);
        });
    }

    // getting selected row

    getSelectedTableRow() {

        $('#order_tbody').click('tr', (event) => {

            let orderID = $(event.target).closest('tr').find('td').eq(0).text();
            let itemCode = $(event.target).closest('tr').find('td').eq(1).text();
            let itemName = $(event.target).closest('tr').find('td').eq(2).text();
            let itemPrice = $(event.target).closest('tr').find('td').eq(3).text();
            let itemQty = $(event.target).closest('tr').find('td').eq(4).text();

            $('#order_Id').val(orderID);
            $('#item_Code').val(itemCode);
            $('#item_Name').val(itemName);
            $('#item_Price').val(itemPrice);
            $('#item_Qty').val(itemQty);

        });

    }

    testordrr(){
         $('#btn-PlaceOrder').click('#order_tbody', (event) => {
            console.log($('#order_tbody').closest('tr').find('td').eq(0).text());
         });
    }

    // clear input fields
    
    clearInputFields() {
        $('#item_Code').val("");
        $('#item_Name').val("");
        $('#item_Price').val("");
        $('#item_Qty').val("");
    }

    //set date and time
    setDateandTime(){
        var date = new Date();
        $('#date').text(date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear());
    }
    
}

new PlaceOrderController();





