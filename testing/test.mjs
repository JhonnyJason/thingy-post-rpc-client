import { RPCPostClient } from "../output/index.js"

const publicKeyHex = "92caa31a2bfa97611cb504b8e077bf8552bbf362a67630ddc0796ac8a80674ea"
const secretKeyHex = "94864ba172e331c2e5d7e1fc24da301330045d21bf95f901467e222605de0138"
const serverURL = "http://localhost:6969/thingy-post-rpc"

const testFunctions = new Map()

//############################################################
//#region test functions

//############################################################
async function requestNodeIdTests() {
    const options = { publicKeyHex, secretKeyHex, serverURL }
    const client = new RPCPostClient(options)
    const serverId = await client.getServerId()

    console.log(serverId)
}
testFunctions.set("requestNodeIdTests", requestNodeIdTests)


//############################################################
async function noneAuthTests() {

}
testFunctions.set("requestNodeIdTests", requestNodeIdTests)

//############################################################
async function anonymousAuthTests() {

}
testFunctions.set("requestNodeIdTests", requestNodeIdTests)

//############################################################
async function publicAcessAuthTests() {

}
testFunctions.set("requestNodeIdTests", requestNodeIdTests)

//############################################################
async function signatureAuthTests() {

}
testFunctions.set("requestNodeIdTests", requestNodeIdTests)

//############################################################
async function tokenSimpleAuthTests() {

}
testFunctions.set("requestNodeIdTests", requestNodeIdTests)

//############################################################
async function tokenUniqueAuthTests() {

}
testFunctions.set("requestNodeIdTests", requestNodeIdTests)

//############################################################
async function authCodeSHA2Tests() {

}
testFunctions.set("requestNodeIdTests", requestNodeIdTests)

//#endregion

//############################################################
async function runTest(name) {
    console.log("________________________________________")
    console.log("> testing "+name+" ...")
    try {
        await testFunctions.get(name)()
        console.log(name+": success!")
    } catch(error) {
        console.log(name+": error!")
        console.log(error)
    }
}

//############################################################
async function run() {
 
    for(let name of testFunctions.keys()) {
        await runTest(name)
    }
    //run test.
}

run()
