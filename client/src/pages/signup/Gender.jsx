const Gender = ({ onCheckBox, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`cursor-pointer label ${selectedGender === 'male' ? 'selected' : ''}`}>
        <span className="label-text text-white">Male</span>
        <input 
          type="checkbox" 
          className="checkbox border-green-800 checked:border-indigo-800 [--chkbg:theme(colors.green.800)] [--chkfg:white]" 
          checked={ selectedGender === 'male' }
          onChange={() => onCheckBox( 'male' )}
        />
        </label>
      </div>

      <div className="form-control">
        <label className={`cursor-pointer label ${selectedGender === 'female' ? 'selected' : ''}`}>
        <span className="label-text text-white">Female</span>
        <input 
          type="checkbox" 
          className="checkbox border-green-800 checked:border-indigo-800 [--chkbg:theme(colors.green.800)] [--chkfg:white]" 
          checked={ selectedGender === 'female' }
          onChange={() => onCheckBox( 'female' )}
        />
        </label>
      </div>
    </div>
  )
}

export default Gender