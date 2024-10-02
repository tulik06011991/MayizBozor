"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

const Register: React.FC = () => {
  const [phone, setPhone] = useState<string>(""); // Foydalanuvchining telefon raqamini saqlash
  const [codeSent, setCodeSent] = useState<boolean>(false); // Kod jo'natilgandan keyin kodni kiritish uchun input ko'rsatish
  const [verificationCode, setVerificationCode] = useState<string[]>(Array(6).fill("")); // 6 xonali kod uchun inputlar

  // Telefon raqamini submit qilish
  const handlePhoneSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Backendga telefon raqamini jo'natish lozim
    // Serverdan kod jo'natiladi
    setCodeSent(true); // Kodni kiritish inputlarini ko'rsatish
  };

  // Kodni inputlarga bo'lib kiritish
  const handleCodeChange = (value: string, index: number) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
  };

  // Kodni submit qilish
  const handleCodeSubmit = (e: FormEvent) => {
    e.preventDefault();
    const enteredCode = verificationCode.join("");
    console.log("Entered Code:", enteredCode);
    // Backendga kodni tekshirish uchun jo'natish lozim
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        {!codeSent ? (
          <form onSubmit={handlePhoneSubmit}>
            <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Enter your phone number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
                placeholder="+1234567890"
                required
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        ) : (
          <form onSubmit={handleCodeSubmit}>
            <h2 className="text-2xl font-semibold text-center mb-6">
              Enter Verification Code
            </h2>
            <div className="mb-6 grid grid-cols-6 gap-2">
              {verificationCode.map((code, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={code}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleCodeChange(e.target.value, index)
                  }
                  className="w-full h-12 text-center border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Verify
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
