import { cry, Transaction } from 'thor-devkit'

//const txid = '0x38fac25309ab5395f1725284af46af585988983945e67b77cf9916b1ddf13d4b'
const origin = '0xa4d2050f24ed7EfF313B7E912D6e5BF96ce57B95'

let clauses =  [{
    to: '0x564B08C9e249B563903E06D461824b5d6b7F2968',
    value: "0x2a7ee2750fca8ea00000",
    data: '0x'
}]

let body: Transaction.Body = {
    chainTag: 74,
    blockRef: '0x002e3040a9ade438',
    expiration: 720,
    clauses: clauses,
    gasPriceCoef: 0,
    gas: 21000,
    dependsOn: null,
    nonce: '0x73541be64e72817c'
}

let tx = new Transaction(body)
let signingHash = cry.blake2b256(tx.encode())
let id = '0x' + cry.blake2b256(signingHash, Buffer.from(origin.slice(2), 'hex')).toString('hex')

console.log(id)