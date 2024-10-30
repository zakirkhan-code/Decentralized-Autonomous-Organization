import { useState, useEffect } from "react";
import "./investors.css";

function InvestorList({ state }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const { contract } = state;
    async function ListInvestor() {
      const Investors = await contract.methods.InvestorList().call();
      setList(Investors);
      console.log(Investors);
    }
    contract && ListInvestor();
  }, [state]);

  return (
    <div className="list">
      <h3>Investor's List</h3>
      {list.map((address, index) => (
        <p key={address}>
          <span>{index}</span> {address}
        </p>
      ))}
    </div>
  );
}

export default InvestorList;
