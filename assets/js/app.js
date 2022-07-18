class App {

    static SweetAleart = class {
        static showAleartSuccess(title) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: title,
                showConfirmButton: false,
                timer: 1500
            })
        }

        static showAleartError(title){
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: title,
                showConfirmButton: false,
                timer: 1500
            })
        }

        static showAleartConfirmDelete(){
            return Swal.fire({
                title: 'Are you sure?',
                text: "Are you sure you want to delete the selected data?", 
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: "Yes, delete it!"
            })
        }
    }

    static IziToast = class {
        static showAleartSuccess(title) {
            iziToast.success({
                title: 'SUCCESS',
                position: 'topRight',
                timeout: 2500,
                message: title
            })
        }

        static showAleartError(title){
            iziToast.error({
                title: 'ERROR',
                position: 'topRight',
                timeout: 2500,
                message: title
            })
        }
    }
}

class Customer {
    constructor(id, fullName, email, phone, locationRegion, balance = 0, deleted = 0) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.locationRegion = locationRegion;
        this.balance = balance;
        this.deleted = deleted;
    }
}

class Sender extends Customer{
    constructor() {
        super();
    }
}

class Recipient extends Customer{
    constructor() {
        super();
    }
}

class Deposit {
    constructor(id, customerId, transactionAmount, createdAt, createdBy = 1, udatedAt, updatedBy = 1, deleted = 0) {
        this.id = id;
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.udatedAt = udatedAt;
        this.updatedBy = updatedBy;
        this.deleted = deleted;
    }
}

class Withdraw {
    constructor(id, customerId, transactionAmount, createdAt, createdBy = 1, udatedAt, updatedBy = 1, deleted = 0) {
        this.id = id;
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.udatedAt = udatedAt;
        this.updatedBy = updatedBy;
        this.deleted = deleted;
    }
}

class Transfer {
    constructor(id, transferAmount,  senderId,  recipientId) {
        this.id = id;
        this.transferAmount = transferAmount;
        this.senderId = senderId;
        this.recipientId = recipientId;
    }
}

class LocationRegion {
    constructor(address,provinceId,provinceName,districtId,districtName,wardId,wardName){
        this.address = address;
        this.provinceId = provinceId;
        this.provinceName = provinceName;
        this.districtId = districtId;
        this.districtName = districtName;
        this.wardId = wardId;
        this.wardName = wardName;
    }
}