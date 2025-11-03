
export const validation = (email, password,name) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
  const nameregex = /^[a-zA-Z\s]+$/.test(name)  
  if(!emailRegex) return "Email ID is not valid"
  if(!passwordRegex) return "Password must be at least 8 characters long and contain at least one letter and one number"
   if(nameregex) return "Name  is not valid"  
  return null
}

