// import classes

import { Customer } from "../model/customer.js";
import { getAllDbData, saveCustomerData, updateCustomerData, deleteCustomerData } from "../DB/db.js";

// create customerController class

export class CustomerController {

    constructor() {
        $('#btn-add').click((event) => {
            this.inputValidation("SaveCustomer")
        });
        $('#btn-update').click((event) => {
            this.inputValidation("UpdateCustomer");
        });
        $('#btn-delete').click((event) => {
            this.inputValidation("DeleteCustomer");
        });

        this.loadCustomerData();
        this.getSelectedRow();
    }

// add customer to local storage

    addCustomerData() {

        if (this.cusIdIsExist()) {
            $('#customer_id').css({ borderBottom: "2px solid red" });
            alert('Customer Id is Already Exist');
            return;
        }

        saveCustomerData(new Customer(
            $('#customer_id').val(),
            $('#customer_first_name').val(),
            $('#customer_last_name').val(),
            $('#customer_address').val(),
            $('#customer_nic').val(),
            $('#customer_email').val(),
            $('#customer_contact').val()
        ));

        this.loadCustomerData();
        this.clearInputs();
    }

    inputValidation(Function){
    //   !/^(C)-([0-9]{2,})$/.test($("#customer_id").val()) ? alert("Invalid ID")  : alert("Id ok");
    !/^(C)([0-9]{2,})$/.test($("#customer_id").val())
      ? alert("Invalid ID")
      : !$("#customer_first_name").val()
      ? alert("Invalid name")
      : !$("#customer_last_name").val()
      ? alert("Invalid Last Name")
      : !$("#customer_address").val()
      ? alert("Invalid address")
      : !$("#customer_nic").val()
      ? alert("Invalid Nic Number")
      : !$("#customer_email").val()
      ? alert("Invalid e-mail")
      : !/^(075|077|071|074|078|076|070|072)([0-9]{7})$/.test($("#customer_contact").val())
      ? alert("Invalid Contact Number")
      : Function === "SaveCustomer"
      ? this.addCustomerData()
      : Function === "UpdateCustomer"
      ? this.updateCustomerDetails()
      : this.deleteCustomerDetails();
    }

//update customerData in local storage

    updateCustomerDetails() {
        updateCustomerData(new Customer(
            $('#customer_id').val(),
            $('#customer_first_name').val(),
            $('#customer_last_name').val(),
            $('#customer_address').val(),
            $('#customer_nic').val(),
            $('#customer_email').val(),
            $('#customer_contact').val()
        ));
        this.loadCustomerData();
        this.clearInputs();
    }

//delete customer in local storage

    deleteCustomerDetails() {
        deleteCustomerData(new Customer(
            $('#customer_id').val(),
            $('#customer_first_name').val(),
            $('#customer_last_name').val(),
            $('#customer_address').val(),
            $('#customer_nic').val(),
            $('#customer_email').val(),
            $('#customer_contact').val()
        ));
        let okey = alert('Do u want to delete this Customer data ?');
        this.loadCustomerData();
        this.clearInputs();

    }

//fetch data in to tableview from localstorage

    loadCustomerData() {
        $('table tbody tr td').remove();
        getAllDbData("CustomerData").map((value) => {
            var row = "<tr>" +
                "<td>" + value._cusId + "</td>" +
                "<td>" + value._fName + "</td>" +
                "<td>" + value._lName + "</td>" +
                "<td>" + value._address + "</td>" +
                "<td>" + value._nic + "</td>" +
                "<td>" + value._email + "</td>" +
                "<td>" + value._contact + "</td>" +
                "</tr>";
            $('#customer-tbody').append(row);
        });

    }

// get the selected table row

    getSelectedRow() {

        $('#customer-tbody').click('tr', (event) => {

            let customer_id = $(event.target).closest('tr').find('td').eq(0).text();
            let customer_first_name = $(event.target).closest('tr').find('td').eq(1).text();
            let customer_last_name = $(event.target).closest('tr').find('td').eq(2).text();
            let customer_address = $(event.target).closest('tr').find('td').eq(3).text();
            let customer_Nic = $(event.target).closest('tr').find('td').eq(4).text();
            let customer_email = $(event.target).closest('tr').find('td').eq(5).text();
            let customer_Contact = $(event.target).closest('tr').find('td').eq(6).text();

            $('#customer_id').val(customer_id);
            $('#customer_first_name').val(customer_first_name);
            $('#customer_last_name').val(customer_last_name);
            $('#customer_address').val(customer_address);
            $('#customer_nic').val(customer_Nic);
            $('#customer_email').val(customer_email);
            $('#customer_contact').val(customer_Contact);

        });
    }

//check customer id is Exist in table

    cusIdIsExist() {
        let id = false;
        getAllDbData("CustomerData").filter((event) => {
            if (event._cusId === $('#customer_id').val()) {
                id = true;
            }
        });
        return id;
    }

//clear input fields

    clearInputs() {
        $('#customer_id').val("");
        $('#customer_first_name').val("");
        $('#customer_last_name').val("");
        $('#customer_address').val("");
        $('#customer_nic').val("");
        $('#customer_email').val("");
        $('#customer_contact').val("");
    }
}

new CustomerController();

