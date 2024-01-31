import React, { useState } from 'react';

const JsonToCsvConverter: React.FC = () => {
  const [jsonInput, setJsonInput] = useState<string>('');
  const [csvOutput, setCsvOutput] = useState<string>('');

  const convertToJson = () => {
    try {
      const jsonData = JSON.parse(jsonInput);
      const csvData = convertToCsv(jsonData);
      setCsvOutput(csvData);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  };

  const convertToCsv = (jsonData: []) => {
    // Implement your logic to convert JSON to CSV
    // For simplicity, let's assume a basic conversion here
    return jsonData.map((item) => Object.values(item).join(',')).join('\n');
  };

  const handleExport = () => {
    const blob = new Blob([csvOutput], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, 'converted_data.csv');
    } else {
      // Other browsers
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = 'converted_data.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <>
    <div className='flex justify-between gap-2 p-4 mx-auto h-[75vh]'>
      <textarea
      className='p-4 w-1/2 shadow-lg shadow-orange-300 rounded-lg'
        placeholder="Enter JSON data..."
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <textarea className='p-4 w-1/2 shadow-lg shadow-green-300 rounded-lg' readOnly value={csvOutput} placeholder="CSV output..." />
      </div>
      <div className='flex justify-around p-4 gap-2'>
      <button className='w-full bg-gray-500 text-white rounded-lg' onClick={convertToJson}>Convert to CSV</button>
      <button className='w-full bg-cyan-300 rounded-lg' onClick={handleExport} disabled={!csvOutput}>
        Export CSV
      </button>
      </div>
    </>
  );
};

export default JsonToCsvConverter;