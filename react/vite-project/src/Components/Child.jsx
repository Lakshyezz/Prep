
const Child = ({ value, setValue }) => {
    return (
        <div >
            <span>CHILD</span>
            {/* <button onClick={()=> setValue(value+1)}>Call Child</button> */}
        </div>
      )
}

export default Child;


// style={
//     {height: "200px",
//      width: "300px",
//     //   border: "1px solid black",
//       display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//       alignItems: "center",
//       justifyContent: "center"
// }
// }