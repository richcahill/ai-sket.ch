"use server";

const passwords = ["icp24", "ICP24"];

export async function checkPassword(code: string) {
  console.log("Checking password", code);
  return { success: passwords.includes(code) };
}
