import Login from "./components/login"
function App() {
  return(
    <div className="h-screen w-screen bg-slate-800 flex flex-col justify-center items-center gap-y-10">
      <div className="flex gap-x-[50px]">
      <div className="h-40 w-40 bg-orange-400 rounded-4xl"></div>
      <div className="h-40 w-40 bg-green-600 rounded-4xl"></div>
      <div className="h-40 w-40 bg-blue-600 rounded-4xl"></div>
      <div className="h-40 w-40 bg-red-500 rounded-4xl"></div>
      </div>
      <Login email="" />
    </div>
  )
}
export default App