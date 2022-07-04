/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array){
    const obj = {
       "firstName": array[0],
       "familyName": array[1],
       "title": array[2],
       "payPerHour": array[3],
       "timeInEvents":[],
       "timeOutEvents": []
   }
   return obj
}

function createEmployeeRecords(arrayOfArrays){
   return arrayOfArrays.map(array => createEmployeeRecord(array) )
}

function createTimeInEvent(dateStamp){
   const date = dateStamp.split(' ')[0]
   const hour = dateStamp.split(' ')[1]
   //const[date, hour] = dateStamp.split(' ') -- alternate strategy
   const inEvent = {
       "type": "TimeIn",
       "hour": parseInt(hour),
       "date": date
   }
   this.timeInEvents.push(inEvent)
   return this
}
function createTimeOutEvent(dateStamp){
   const date = dateStamp.split(' ')[0]
   const hour = dateStamp.split(' ')[1]
   const outEvent = {
       "type": "TimeOut",
       "hour": parseInt(hour),
       "date": date
   }
   this.timeOutEvents.push(outEvent)
   return this
}

function hoursWorkedOnDate(dateStamp){
   const [date, hour] = dateStamp.split(' ')
   const outObj = this.timeOutEvents.find(obj => obj.date === date)
   const inObj = this.timeInEvents.find(obj => obj.date === date)
   return (outObj.hour - inObj.hour)/100
}

function wagesEarnedOnDate(dateStamp){
   const date = dateStamp.split(' ')[0]
   return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName){
   const record = srcArray.find(record => record.firstName === firstName)
   return record
}

function calculatePayroll(arrayOfRecords){
   return arrayOfRecords.reduce((total, record)=>{
       return total + allWagesFor.call(record)
       
   },0)
}


let employees = [
  ["luis", "vasquez", "sir", 20],
  ["sasha", "vasquez", "dog", 10],
  ["chim", "vasquez", "cat", 15],
]
let me = ["luis", "vasquez", "sir", 20]
