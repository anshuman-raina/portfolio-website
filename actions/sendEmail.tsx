// "use client";

// export default async function sendEmail(formData: FormData) {
//   try {
//     const response = await fetch("/api/sendEmail", {
//       method: "POST",
//       body: JSON.stringify({
//         senderEmail: formData.get("senderEmail"),
//         message: formData.get("message"),
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.error || "Something went wrong");
//     }

//     return { data };
//   } catch (error) {
//     return { error: error.message };
//   }
// }
