// import React from "react";
// import Meaning from "./Meaning";
// import "../styles/Results.css";

// const Results = (props) => {
//   if (props.results) {
//     return (
//       <div className="results-container">
//         <div className="searched-word">
//           <h2>{props.results.word}<span className="phonetics">/{props.results.phonetic}/</span></h2>
          
//         </div>
//         {props.results.meanings.map((meaning, index) => {
//           return (
//             <section key={index}>
//               <Meaning meaning={meaning} />
//             </section>
//           );
//         })}
//       </div>
//     );
//   } else {
//     return null;
//   }
// };

// export default Results;



import React from "react";
import Meaning from "./Meaning";
import "../styles/Results.css";

const Results = (props) => {
  if (props.results) {
    // if (props.results.total_results === 0) {
    //   return (
    //     <div className="results-container">
    //       <p>No results found. Did you mean something else?</p>
    //     </div>
    //   );
    // }

    if (!props.results.meanings) {
      return (
        <div className="results-container">
          <p>The word seems to be misspelled. Please check and try again.</p>
        </div>
      );
    }

    return (
      <div className="results-container">
        <div className="searched-word">
          <h2>{props.results.word}<span className="phonetics">/{props.results.phonetic}/</span></h2>
        </div>
        {props.results.meanings.map((meaning, index) => (
          <section key={index}>
            <Meaning meaning={meaning} />
          </section>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default Results;

