
import './App.css'
import PolybaseTesting from './PolybaseTesting'

import { PolybaseProvider, AuthProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";
import { Auth } from "@polybase/auth";
import Huddle from './Huddle';
const polybase = new Polybase();
const auth = new Auth()
function App() {
  return (

    <PolybaseProvider polybase={polybase}>
      <AuthProvider auth={auth} polybase={polybase}>
        <h1>hiii</h1>
        <Huddle></Huddle>
        <PolybaseTesting></PolybaseTesting>
      </AuthProvider>
    </PolybaseProvider>

  )
}

export default App
