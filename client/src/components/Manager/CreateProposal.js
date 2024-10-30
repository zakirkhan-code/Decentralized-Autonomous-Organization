import "./manager.css"
function CreateProposal({state,account}){
    
    async function proposalCreation(event)
    {
        try {
            event.preventDefault()
            const {contract} = state
            const description = document.querySelector("#description").value
            const amount = document.querySelector("#amount").value
            const recipient = document.querySelector("#recipient").value
            await contract.methods.createProposal(description,amount,recipient).send({from:account,gas:480000})
            console.log(description,amount,recipient);
        } catch (error) {
            alert(error)
        }
    }
   
    return<><form onSubmit={proposalCreation}>
    <label className="label1" htmlFor="name">
    <span className="font">Description:</span>
    </label>
    <input type="text" id="description"></input>
    <label className="label1" htmlFor="amount">
    <span className="font"> Amount Need(in Wei):</span>
        </label>
    <input type="text" id="amount"></input>
    <label className="label1" htmlFor="recipient">
    <span className="font">Recipient Address:</span>
        </label>
    <input type="text" id="recipient"></input>
    <button className="button" type="submit">Create Proposal</button>
    </form><br></br></>
    
   }
   export default CreateProposal;