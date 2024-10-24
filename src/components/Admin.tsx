import Sidebar from "./Sidebar"


const sampleCardsData = [
  {
    name: "Generic",
    adminCount: 10,
    membersCount: 10
  },
  {
    name: "Generic",
    adminCount: 10,
    membersCount: 10
  },
  {
    name: "Generic",
    adminCount: 10,
    membersCount: 10
  },
  {
    name: "Generic",
    adminCount: 10,
    membersCount: 10
  },
  {
    name: "Generic",
    adminCount: 10,
    membersCount: 10
  },


]

const Admin = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="bg-yellow-300 w-full h-[60px] flex justify-end px-4 py-2">
          <button className="bg-black text-white font-bold rounded-md px-4 py-2">Logout</button>
      </div>
    </div>
  )
}

export default Admin