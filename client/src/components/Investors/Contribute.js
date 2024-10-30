import "./investors.css"
function Contribute({state,account}){
  async function ContributeTime(event)
    {
        try {
          event.preventDefault()
          const {contract} = state
          const weiValue = document.querySelector("#weiValue").value
          const ConTime = await contract.methods.contribution().send({from:account,gas:480000,value:weiValue})
          console.log(ConTime)
        } catch (error) {
          alert(error)
        }
    }
 return<>
 <form onSubmit={ContributeTime}>
   <label className="label1" htmlFor="weiValue">
   <span className="font">Contribution Amount: </span>
        </label>
    <input type="text" id="weiValue" ></input>
    <button type="submit" className="button">Contribute</button>
    </form>
    <br></br></>
}
export default Contribute;