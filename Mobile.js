class Mobile {
    constructor( battery, inbox, outbox, inboxMessage, outboxMessage, status,messageBox, batteryLife) {
        this.status = status;
        this.battery = battery;
        this.batteryLife = batteryLife;
        this.inbox = inbox;
        this.outbox = outbox
        this.inboxMessage = inboxMessage;
        this.outboxMessage = outboxMessage;
        this.messageBox = messageBox;
    }
    turnOn(){
        if(this.status == false){
            this.status = true;
        }
    }
    turnOff(){
        if(this.status == true){
            this.status = false;
        }
    }
    checkStatus(){
        this.status == true ? alert("ON") : alert("OFF");
    }
    charge(){
        this.batteryLife += 20;
    }
    sendMessage(mobile) {
        if(this.batteryLife == 0 || this.status == false){
            alert("Out Of battery");
            return;
        }
        mobile.inbox.push(this.messageBox.value);
        this.outbox.push(this.messageBox.value);
        this.batteryLife -= 10;
        this.battery.innerHTML = this.batteryLife;
    }
    showInbox(){
        if(this.batteryLife == 0 || this.status == false){
            alert("Out Of battery or turn on");
            return;
        }
        this.inboxMessage.innerHTML = "";
        for(let i = 0; i < this.inbox.length; i++){
            this.inboxMessage.innerHTML += this.inbox[i] + "<br>";
        }
    }
    showOutbox(){
        if(this.batteryLife == 0 || this.status == false){
            alert("Out Of battery or turn on");
            return;
        }
        this.outboxMessage.innerHTML = "";
        for(let i = 0; i < this.outbox.length; i++){
            this.outboxMessage.innerHTML += this.outbox[i] + "<br>";
        }
    }
    setInboxMessage(inboxMessage){
        this.inboxMessage = inboxMessage;
    }
    setOutboxMessage(outboxMessage){
        this.outboxMessage = outboxMessage;
    }
    setInbox(inbox){
        this.inbox = inbox;
    }
    setOutbox(outbox){
        this.outbox = outbox;
    }
    setBatteryLife(batteryLife){
        this.batteryLife = batteryLife;
    }
    setBattery(battery){
        this.battery = battery
    }
    setMessagebox(message){
        this.messageBox = message;
    }
    setStatus(status){
        this.status = status;
    }
}

let mobile1 = new Mobile();
let mobile2 = new Mobile();
mobile1.setMessagebox(document.getElementById("message1"));
mobile2.setMessagebox(document.getElementById("message2"));
let inboxArr1 = new Array();
let inboxArr2 = new Array();
let outboxArr1 = new Array();
let outboxArr2 = new Array();

mobile1.setInbox(inboxArr1);
mobile1.setOutbox(outboxArr1);
mobile2.setInbox(inboxArr2);
mobile2.setOutbox(outboxArr2);
mobile1.setInboxMessage(document.getElementById("inboxMessage1"));
mobile2.setInboxMessage(document.getElementById("inboxMessage2"));
mobile1.setOutboxMessage(document.getElementById("outboxMessage1"));
mobile2.setOutboxMessage(document.getElementById("outboxMessage2"));
mobile1.setBattery(document.getElementById("battery1"));
mobile2.setBattery(document.getElementById("battery2"));
mobile1.setBatteryLife(100);
mobile2.setBatteryLife(100);
mobile1.setStatus(false);
mobile1.turnOn();
