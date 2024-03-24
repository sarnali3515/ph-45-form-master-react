import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {
  // const handleSignUpSubmit = data => {
  //   console.log(data);
  // }
  // const handleUpdateProfile = data => {
  //   console.log(data);
  // }

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        formTitle={'Sign Up'}
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up!</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={'Profile Update'}
        submitBtnText='Update'
        handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile update.</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
