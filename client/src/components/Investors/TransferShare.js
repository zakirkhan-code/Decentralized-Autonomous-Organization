import "./investors.css"
function TransferShare({state,account}){

    async function ShareTransfer(event)
    {
        try {
            event.preventDefault()
            const {contract} = state
            const amount = document.querySelector("#amount").value
            const _to = document.querySelector("#to").value
            const sendShare = await contract.methods.transferShare(amount,_to).send({from:account,gas:480000})
            console.log(sendShare)
        } catch (error) {
            alert(error)
        }
    }

    return<><form onSubmit={ShareTransfer}>
    <label className="label1" htmlFor="amount">
    <span className="font">Amount:</span>
        </label>
    <input type="text" id="amount"></input>
    <label className="label1" htmlFor="to">
    <span className="font">Address:</span>
        </label>
    <input type="text" id="to"></input>
    
    <button className="button" type="submit">Transfer Share</button>
    </form><br></br></>
   }
   export default TransferShare;