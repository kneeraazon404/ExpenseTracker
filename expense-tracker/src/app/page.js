export default function Home() {
  return (
    <main className="text-center items-center bg-sky-200 min-h-screen">
      <h1 className="text-3xl font-bold py-4">My Favorite Expense Traker</h1>
      <div className="bg-sky-500 text-center items-center mx-auto w-1/2 py-4 rounded-sm ">
        <button className="py-3 px-8 bg-indigo-600 text-white rounded-md">
          Add New Expense
        </button>
      </div>
    </main >
  )
}
