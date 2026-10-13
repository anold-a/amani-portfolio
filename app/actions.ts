'use server'; 

export async function verifyPassword(enteredPassword: string): Promise<boolean> {
  
  const correctPassword = process.env.PASSWORD_SECRET; 
  
  return enteredPassword === correctPassword;
}
