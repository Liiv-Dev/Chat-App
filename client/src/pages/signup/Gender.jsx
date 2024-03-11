const Gender = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="cursor-pointer label">
        <span className="label-text text-white">Male</span>
        <input type="checkbox" defaultChecked className="checkbox border-green-800 checked:border-indigo-800 [--chkbg:theme(colors.green.800)] [--chkfg:white]" />
        </label>
      </div>

      <div className="form-control">
        <label className="cursor-pointer label">
        <span className="label-text text-white">Female</span>
        <input type="checkbox" defaultChecked className="checkbox border-green-800 checked:border-indigo-800 [--chkbg:theme(colors.green.800)] [--chkfg:white]" />
        </label>
      </div>
    </div>
  )
}

export default Gender