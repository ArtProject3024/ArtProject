// import React from 'react';

// const data = [
//   {
//     tool: 'Looka',
//     designQuality: 8,
//     customizationOptions: 7,
//     outputFileFormats: 9,
//     userExperience: 8,
//     pricingAndValue: 6,
//   },
//   {
//     tool: 'Hatchful by shopify',
//     designQuality: 9,
//     customizationOptions: 8,
//     outputFileFormats: 8,
//     userExperience: 9,
//     pricingAndValue: 7,
//   },
//   {
//     tool: 'Design Hill Logo Maker',
//     designQuality: 7,
//     customizationOptions: 9,
//     outputFileFormats: 7,
//     userExperience: 7,
//     pricingAndValue: 8,
//   },
// ];

// const BenchmarkCriteriaTable = () => {
//   return (
//     <div className="py-10 px-4 overflow-auto">
//       <h2 className="text-2xl font-bold mb-4">Benchmark Criteria - Logo Creation</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-300">
//             <th className="border border-gray-300 p-2">Tool</th>
//             <th className="border border-gray-300 p-2">Design Quality</th>
//             <th className="border border-gray-300 p-2">Customization Options</th>
//             <th className="border border-gray-300 p-2">User Experience</th>
//             <th className="border border-gray-300 p-2">Pricing and Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index} className="border border-gray-300">
//               <td className="border border-gray-300 p-2">{row.tool}</td>
//               <td className="border border-gray-300 p-2">{row.designQuality}/10</td>
//               <td className="border border-gray-300 p-2">{row.customizationOptions}/10</td>
//               <td className="border border-gray-300 p-2">{row.userExperience}/10</td>
//               <td className="border border-gray-300 p-2">{row.pricingAndValue}/10</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BenchmarkCriteriaTable;

import React from "react";

const data1 = [
  {
    tool: "Looka",
    designQuality: 8,
    customizationOptions: 7,
    outputFileFormats: 9,
    userExperience: 8,
    pricingAndValue: 6,
  },
  {
    tool: "Hatchful by shopify",
    designQuality: 9,
    customizationOptions: 8,
    outputFileFormats: 8,
    userExperience: 9,
    pricingAndValue: 7,
  },
  {
    tool: "Design Hill Logo Maker",
    designQuality: 7,
    customizationOptions: 9,
    outputFileFormats: 7,
    userExperience: 7,
    pricingAndValue: 8,
  },
];

const data2 = [
  {
    tool: "Adobe firefly",
    designQuality: 9,
    customizationOptions: 9,
    outputFileFormats: 8,
    userExperience: 8,
    pricingAndValue: 7,
  },
  {
    tool: "Gemini",
    designQuality: 7,
    customizationOptions: 6,
    outputFileFormats: 7,
    userExperience: 7,
    pricingAndValue: 10,
  },
  {
    tool: "Microsoft copilot designer",
    designQuality: 8,
    customizationOptions: 8,
    outputFileFormats: 8,
    userExperience: 8,
    pricingAndValue: 10,
  },
];

const data3 = [
  {
    tool: "Fotor",
    designQuality: 8,
    customizationOptions: 7,
    outputFileFormats: 7,
    userExperience: 7,
    pricingAndValue: 8,
  },
  {
    tool: "Phot.AI",
    designQuality: 8,
    customizationOptions: 7,
    outputFileFormats: 7,
    userExperience: 8,
    pricingAndValue: 6,
  },
  {
    tool: "Light X Editor",
    designQuality: 9,
    customizationOptions: 8,
    outputFileFormats: 9,
    userExperience: 9,
    pricingAndValue: 8,
  },
];

const BenchmarkCriteriaTable = () => {
  return (
    <div className="py-10 px-4 overflow-auto">
      <h2 className="text-3xl font-bold mb-4">Benchmark Criteria</h2>
      <h2 className="text-2xl font-bold mb-4">Logo Creation:</h2>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-300 p-2">Tool</th>
            <th className="border border-gray-300 p-2">Design Quality</th>
            <th className="border border-gray-300 p-2">
              Customization Options
            </th>
            <th className="border border-gray-300 p-2">User Experience</th>
            <th className="border border-gray-300 p-2">Pricing and Value</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((row, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="border border-gray-300 p-2">{row.tool}</td>
              <td className="border border-gray-300 p-2">
                {row.designQuality}/10
              </td>
              <td className="border border-gray-300 p-2">
                {row.customizationOptions}/10
              </td>
              <td className="border border-gray-300 p-2">
                {row.userExperience}/10
              </td>
              <td className="border border-gray-300 p-2">
                {row.pricingAndValue}/10
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="py-4"></div>

      <h2 className="text-2xl font-bold mb-4">Image Generation:</h2>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-300 p-2">Tool</th>
            <th className="border border-gray-300 p-2">Design Quality</th>
            <th className="border border-gray-300 p-2">
              Customization Options
            </th>
            <th className="border border-gray-300 p-2">User Experience</th>
            <th className="border border-gray-300 p-2">Pricing and Value</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((row, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="border border-gray-300 p-2">{row.tool}</td>
              <td className="border border-gray-300 p-2">
                {row.designQuality}/10
              </td>
              <td className="border border-gray-300 p-2">
                {row.customizationOptions}/10
              </td>
              <td className="border border-gray-300 p-2">
                {row.userExperience}/10
              </td>
              <td className="border border-gray-300 p-2">
                {row.pricingAndValue}/10
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="py-4"></div>

      <h2 className="text-2xl font-bold mb-4">Image Editing:</h2>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-300 p-2">Tool</th>
            <th className="border border-gray-300 p-2">Design Quality</th>
            <th className="border border-gray-300 p-2">
              Customization Options
            </th>
            <th className="border border-gray-300 p-2">User Experience</th>
            <th className="border border-gray-300 p-2">Pricing and Value</th>
          </tr>
        </thead>
        <tbody>
          {data3.map((row, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="border border-gray-300 p-2">{row.tool}</td>
              <td className="border border-gray-300 p-2">
                {row.designQuality}/10
              </td>
              <td className="border border-gray-300 p-2">
                {row.customizationOptions}/10
              </td>
              <td className="border border-gray-300 p-2">
                {row.userExperience}/10
              </td>
              <td className="border border-gray-300 p-2">
                {row.pricingAndValue}/10
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BenchmarkCriteriaTable;
