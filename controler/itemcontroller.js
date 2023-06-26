import { Item } from "../model/Item.js";
import { getAllItemData, saveItemData, updateItemData, deleteItemData } from "../DB/db.js";

//create class itemController

export class ItemController {

    constructor() {

        $('#btn_AddItem').click((event) => {
            this.inputValidation("SaveItem");
        });
        $('#btn_UpdateItem').click((event) => {
            this.inputValidation("UpdateItem");
        });
        $('#btn_DeleteItem').click((event) => {
            this.inputValidation("DeleteItem");
        });

        this.loadTableData();
        this.getSelectedRow();
    }

//Add Items to Local storage

    addItemDetails() {
        if (this.isExistItemCode()) {
            $('#ItemCode').css({ borderBottom: "2px solid red" });
            alert('ItemCode is Already Exist');
            return;
        }

        saveItemData(new Item(
            $('#itemCode').val(),
            $('#itemName').val(),
            $('#itemCategory').val(),
            $('#itemBrand').val(),
            $('#itemQty').val(),
            $('#itemPrice').val()
        ));

        this.loadTableData();
        this.clearInputData();
    }

    inputValidation(Function){
        !/^(I)([0-9]{2,})$/.test($("#itemCode").val())
        ? alert("Invalid ID")
        : !$("#itemName").val()
        ? alert("Invalid Item name")
        : !$("#itemCategory").val()
        ? alert("Invalid item category")
        : !$("#itemBrand").val()
        ? alert("Invalid item Brand")
        : !$("#itemQty").val()
        ? alert("Invalid item Qty")
        : !$("#itemPrice").val()
        ? alert("Invalid item price")
        : Function === "SaveItem"
        ? this.addItemDetails()
        : Function === "UpdateItem"
        ? this.updateItemDetails()
        : this.deleteItemDetails();
    }

//Update Items in local storage

    updateItemDetails() {
        updateItemData(new Item(
            $('#itemCode').val(),
            $('#itemName').val(),
            $('#itemCategory').val(),
            $('#itemBrand').val(),
            $('#itemQty').val(),
            $('#itemPrice').val()
        ));

        this.loadTableData();
        this.clearInputData();
    }

// Delete Items in local storage

    deleteItemDetails() {
        deleteItemData(new Item(
            $('#itemCode').val(),
            $('#itemName').val(),
            $('#itemCategory').val(),
            $('#itemBrand').val(),
            $('#itemQty').val(),
            $('#itemPrice').val()
        ));
        let okey = alert('Do u want to delete this Item ?');
        this.loadTableData();
        this.clearInputData();
    }

// Check item code is exist

    isExistItemCode() {
        let result = false;
        getAllItemData("ItemData").filter((event) => {
            if (event._itemCode === $('#itemCode').val()) {
                result = true;
            }
        });
        return result;
    }

// fetch data from local storage 

    loadTableData() {
        $('table tbody tr td').remove();
        getAllItemData("ItemData").map((value) => {
            let row = "<tr>" +
                "<td>" + value._itemCode + "</td>" +
                "<td>" + value._itemName + "</td>" +
                "<td>" + value._itemCategory + "</td>" +
                "<td>" + value._itemBrand + "</td>" +
                "<td>" + value._itemPrice + "</td>" +
                "<td>" + value._itemQty + "</td>" +
                "</tr>";
            $('#item-tbody').append(row);
        });
    }

//get Selected table row event

    getSelectedRow() {
        $('#item-tbody').click('tr', (event) => {
            let itemCode = $(event.target).closest('tr').find('td').eq(0).text();
            let itemName = $(event.target).closest('tr').find('td').eq(1).text();
            let itemCategory = $(event.target).closest('tr').find('td').eq(2).text();
            let itemBrand = $(event.target).closest('tr').find('td').eq(3).text();
            let itemQty = $(event.target).closest('tr').find('td').eq(4).text();
            let itemPrice = $(event.target).closest('tr').find('td').eq(5).text();

            $('#itemCode').val(itemCode);
            $('#itemName').val(itemName);
            $('#itemCategory').val(itemCategory);
            $('#itemBrand').val(itemBrand);
            $('#itemQty').val(itemQty);
            $('#itemPrice').val(itemPrice);
        });
    }

// clear input fields 

    clearInputData() {
        $('#itemCode').val("");
        $('#itemName').val("");
        $('#itemCategory').val("");
        $('#itemBrand').val("");
        $('#itemQty').val("");
        $('#itemPrice').val("");
    }
}

new ItemController();




