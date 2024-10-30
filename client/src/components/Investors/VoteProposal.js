import "./investors.css"
function VoteProposal({state,account}){

    async function ProposalVote(event)
    {
        try {
            event.preventDefault()
            const {contract} = state
            const voteId = document.querySelector("#voteId").value
            const NoOfShare = await contract.methods.voteId(voteId).send({from:account,gas:480000})
            console.log(NoOfShare)
        } catch (error) {
            alert(error)
        }
    }
  
    return<><form onSubmit={ProposalVote}>
     <label className="label1" htmlFor="voteId">
     <span className="font">Proposal Id:</span>
        </label>
    <input type="text" id="voteId"></input>
    <button className ="button" type="submit">Vote</button>
    </form><br></br></>
   }
   export default VoteProposal;