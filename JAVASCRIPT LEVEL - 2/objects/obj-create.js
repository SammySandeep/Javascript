const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails(){
        const accepting = this.isAvailable ? 'is accepting applications' : 'is not accepting applications'
        console.log(`This ${this.position} position is ${this.type} and ${accepting}`)
    }
}

const barista = Object.create(job)
barista.position = 'barista'
barista.showDetails()   // This barista position is hourly and is accepting applications
console.log(barista)  // { position: 'barista' }
console.log(job)

/*
{
  position: 'cashier',
  type: 'hourly',
  isAvailable: true,
  showDetails: [Function: showDetails]
}
*/


