import React from "react";

const Aukstas1 = () => {
  return (
    <div className="aukstas1">
      <div className="left">
        <table cellpadding="8" cellspacing="0">
          <thead>
            <tr>
              <th>Sandėlio zona</th>
              <th>Sandėlio plotas, kv. m</th>
              <th>Rampos</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>B</td>
              <td>6 963,29</td>
              <td>5 rampos</td>
            </tr>
            <tr>
              <td>C</td>
              <td>3 371,05</td>
              <td>5 rampos</td>
            </tr>
            <tr>
              <td>D</td>
              <td>3 300,79</td>
              <td>5 rampos bei 1 šoninė</td>
            </tr>
            <tr>
              <td>E</td>
              <td></td>
              <td>17,24 (bendrosios buitinės patalpos)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="right">
        <img src="./src/components/Sandelys/images/aukstas1.png" alt="" />
      </div>
    </div>
  );
};

export default Aukstas1;
