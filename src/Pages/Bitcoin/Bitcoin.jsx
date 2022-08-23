import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { GoArrowDown, GoArrowBoth, GoArrowUp } from "react-icons/go";

const Bitcoin = () => {

  const [coin, setCoin] = useState([]);
  const [EUR, setEUR] = useState(0);
  const [GBP, setGBP] = useState(0);
  const [USD, setUSD] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      let coinArray = [];
      await axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
          for (let key in response.data.bpi) {
            coinArray.push(response.data.bpi[key]);
          }
          setCoin(coinArray);
        })
        .catch((err) => {
          alert("there is an error", err.message);
        });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  function useOnceCall(cb, condition = true) {
    const isCalledRef = useRef(false);

    useEffect(() => {
      if (condition && !isCalledRef.current && coin.length > 0) {
        isCalledRef.current = true;
        cb();
      }
    }, [cb, condition]);
  }
  useOnceCall(() => {
    setUSD(JSON.parse(JSON.stringify(coin[0]["rate"])));
    setGBP(JSON.parse(JSON.stringify(coin[1]["rate"])));
    setEUR(JSON.parse(JSON.stringify(coin[2]["rate"])));
  });

  return (
    <div>
      {coin.length <= 0 ? (
        <h1>Loading...</h1>
      ) : (
        <table>
          <caption>
            <h1>BITCOIN CURRENCY</h1>
          </caption>

          <tbody>
            <tr>
              <th>{JSON.parse(JSON.stringify(coin[0]["description"])) + " - " + JSON.parse(JSON.stringify(coin[0]["code"]))}</th>
              <td>
                <h3>{JSON.parse(JSON.stringify(coin[0]["rate"]))}</h3>
              </td>
              <td style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>
                  {USD === JSON.parse(JSON.stringify(coin[0]["rate"])) ? (
                    <GoArrowBoth size="2em" color="grey" />
                  ) : USD > JSON.parse(JSON.stringify(coin[0]["rate"])) ? (
                    <GoArrowDown size="2em" color="red" />
                  ) : (
                    <GoArrowUp size="2em" color="green" />
                  )}
                </h3>
              </td>
            </tr>
            <tr>
              <th>{JSON.parse(JSON.stringify(coin[1]["description"])) + " - " + JSON.parse(JSON.stringify(coin[1]["code"]))}</th>
              <td>
                <h3>{JSON.parse(JSON.stringify(coin[1]["rate"]))}</h3>
              </td>
              <td style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>
                  {GBP === JSON.parse(JSON.stringify(coin[1]["rate"])) ? (
                    <GoArrowBoth size="2em" color="grey" />
                  ) : GBP > JSON.parse(JSON.stringify(coin[1]["rate"])) ? (
                    <GoArrowDown size="2em" color="red" />
                  ) : (
                    <GoArrowUp size="2em" color="green" />
                  )}
                </h3>
              </td>
            </tr>
            <tr>
              <th>{JSON.parse(JSON.stringify(coin[2]["description"])) + " - " + JSON.parse(JSON.stringify(coin[2]["code"]))}</th>
              <td>
                <h3>{JSON.parse(JSON.stringify(coin[2]["rate"]))}</h3>
              </td>
              <td style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>
                  {EUR === JSON.parse(JSON.stringify(coin[2]["rate"])) ? (
                    <GoArrowBoth size="2em" color="grey" />
                  ) : EUR > JSON.parse(JSON.stringify(coin[2]["rate"])) ? (
                    <GoArrowDown size="2em" color="red" />
                  ) : (
                    <GoArrowUp size="2em" color="green" />
                  )}
                </h3>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      ;
    </div>
  );
};
export default Bitcoin;

