class NotificationSender {
    constructor(status){
        this.status = status
    }
    sendNotification (notification){
        console.log('sending: '+ notification)
    }
    findUsersWithStatus(status){
        let users = getUsers(status)
        return users
}
}

class PromotionSender extends NotificationSender{
    constructor(status){
        super (status)

    }
    // sendNotification (notification){
    //     console.log('sending: '+ notification)
    // }
    // findUsersWithStatus(status){
    //     let users = getUsers(status)
    //     return users
    
    calculateDiscount (status){
        if(status === 'GOLD') {
            return .3
        }else if(status === 'SILVER'){
            return .15
        }else {
            return 0
        }
    }}
//}

class CollectionSender extends NotificationSender {
    constructor(status){
        super (status)

    }
    // sendNotification (notification){
    //     console.log('sending: '+ notification)
    // }
    // findUsersWithStatus(status){
    //     let users = getUsers(status)
    //     return users
    
    calculateFee(status){
        if(status === 'OVERDUE'){
            return 25
        } else if (status === 'DELINQUENT'){
            return 10
        }else{
            return 5}
        }
}

    let collectionSender = new CollectionSender("OVERDUE")
    collectionSender. sendNotification('This is a test collection notification')