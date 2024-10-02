"use client"; // Agar siz 'app' papkasidan foydalansangiz
import React, { useState } from "react";

const Register: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);

  const handlePhoneNumberSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Telefon raqami yuborilgandan so'ng, 6 xonali kodni yuborishni tasdiqlash
    setIsCodeSent(true);
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 6 xonali kodni yuborish logikasi
    console.log("Code submitted:", code);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isCodeSent ? "Kodingizni kiriting" : "Ro'yxatdan o'tish"}
        </h2>

        {!isCodeSent ? (
          <form onSubmit={handlePhoneNumberSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Telefon raqamingiz
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="(+998) 90 123 45 67"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Telefon raqamini yuborish
            </button>
          </form>
        ) : (
          <form onSubmit={handleCodeSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                6 xonali kod
              </label>
              <div className="flex space-x-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={code[index] || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      setCode((prev) => {
                        const newCode = prev.split("");
                        newCode[index] = value;
                        return newCode.join("");
                      });
                    }}
                    className="w-12 h-12 border border-gray-300 rounded-md text-center focus:ring-blue-500 focus:border-blue-500"
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Kodingizni tasdiqlang
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
