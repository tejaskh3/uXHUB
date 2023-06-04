import { useAuth } from "@polybase/react";
function PolybaseTesting() {

    const { auth, state, loading } = useAuth();
  return (
    <div>
      <button onClick={() => auth.signIn()}>Sign In</button>
      <button onClick={() => auth.signOut()}>Sign Out</button>
      <h1>hiii</h1>
    </div>
  )
}

export default PolybaseTesting
