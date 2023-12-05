const user={
  name:"Atul",
  branch:"cs"
};

function Myapp(){
  return(
  <button>Helo</button>
  );
}

const Abc=({user})=>{
  return(
  <>
  <h1>{user.name}</h1>
  <h2>{user.branch}</h2>

  <Myapp/>
  </>
  );
};

export default Abc;


