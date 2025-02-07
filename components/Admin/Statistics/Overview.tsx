export function OverviewStats({ users }) {
  var numSignedUp = Object.keys(users).length
  var numNotApplied = Object.keys(users.filter((user) => !user.uid)).length
  var numPending = Object.keys(
    users.filter((user) => user.qualified === '')
  ).length
  var numApproved = Object.keys(
    users.filter((user) => user.qualified === 'yeah')
  ).length
  var numRejected = Object.keys(
    users.filter((user) => user.qualified === 'nope')
  ).length
  var numCheckedIn = Object.keys(users.filter((user) => user.checkedIn)).length

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <div className="grid grid-cols-2 col-span-2 bg-blue-200 text-blue-500 rounded-2xl">
        <div className="flex flex-col px-8 py-6">
          <h3 className="font-medium">{numSignedUp}</h3>
          <p className="m-0 text-sm md:text-base">Total users signed up</p>
        </div>
        <div className="flex flex-col px-8 py-6">
          <h3 className="font-medium">{numNotApplied}</h3>
          <p className="m-0 text-sm md:text-base">Total users not applied</p>
        </div>
      </div>
      <div className="flex flex-col px-8 py-6 bg-sub text-sub-bright rounded-2xl">
        <h3 className="font-medium">{numCheckedIn}</h3>
        <p className="m-0 text-sm md:text-base">Total checked-in users</p>
      </div>
      <div className="flex flex-col px-8 py-6 bg-green-200 text-green-500 rounded-2xl">
        <h3 className="font-medium">{numApproved}</h3>
        <p className="m-0 text-sm md:text-base">Total approved applications</p>
      </div>
      <div className="flex flex-col px-8 py-6 bg-amber-200 text-amber-600 rounded-2xl">
        <h3 className="font-medium">{numPending}</h3>
        <p className="m-0 text-sm md:text-base">Total pending applications</p>
      </div>
      <div className="flex flex-col px-8 py-6 bg-red-200 text-red-500 rounded-2xl">
        <h3 className="font-medium">{numRejected}</h3>
        <p className="m-0 text-sm md:text-base">Total rejected applications</p>
      </div>
    </div>
  )
}
