"use server";

const passwords = ["icp24", "ICP24", "polene"];

export async function checkPassword(code: string) {
  console.log("Checking password", code);
  return { success: passwords.includes(code) };
}
