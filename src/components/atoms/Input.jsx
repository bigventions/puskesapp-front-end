  
  
  export const Input = (props)  => {
    const { 
      label1 = '', 
      label2 = '', 
      label3 = '', 
      type = 'text', 
      id = '', 
      tailwind = '', 
      text = 'black', 
      bg = 'white', 
      placeholder = '', 
      label2_tailwind = '',
      value = '', 
      onChange = () => {}, 
      onKeyDown = () => {}, 
      min = ''
    } = props;
    return (
      <div className="w-full">
        <div className="flex justify-between">
          <h1 className="text-sm font-semibold">{label1}</h1>
          <p className="text-sm text-gray-500">{label3}</p>
        </div>
        <input type={type} id={id} className={` ${tailwind} text-${text} bg-${bg} border my-1  border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder={placeholder} value={value} onChange={onChange} onKeyDown={onKeyDown} min={min}/>
        <p className={` text-xs text-gray-500 ${label2_tailwind} `}> {label2}  </p>
      </div>
    );
  }