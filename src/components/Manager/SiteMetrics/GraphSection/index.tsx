import React, { useState } from 'react'
import DonutChart from '../DonutChart';
import LineChartGraph from '../LineChart';
import Excel from 'exceljs';
import { saveAs } from 'file-saver';

export default function GraphSection() {

  const columns = [
    { header: 'Name', key: 'name' },
    { header: 'Value', key: 'value' },
    { header: 'Colour', key: 'fill' },
  ];
  
  const data = [
    { name: "No Part/Contents", value: 36, fill: "#0F2C6B" },
    { name: "Part Damage/Quality Issue", value: 13, fill: "#1A4BB5" },
    { name: "Vehicle Damage/Quality Issue", value: 4, fill: "#2469FF" },
    { name: "Team Member Not Trained", value: 2, fill: "#6C9BFF" },
    { name: "Re-routed", value: 2, fill: "#BBD1FF" },
    { name: "Missing Tool", value: 1, fill: "#909295" },
    { name: "End of shift/End of day", value: 1, fill: "#909295" }
  ];

  const workSheetName = 'Donutchart';
  const workBookName = 'Donutchart';
  const workbook = new Excel.Workbook();

  const exportDonutChartExcel = async () => {
    try {
      const fileName = workBookName;

      // creating one worksheet in workbook
      const worksheet = workbook.addWorksheet(workSheetName);

      // add worksheet columns
      // each columns contains header and its mapping key from data
      worksheet.columns = columns;

      // updated the font for first row.
      worksheet.getRow(1).font = { bold: true };

      // loop through all of the columns and set the alignment with width.
      worksheet.columns.forEach((column:any) => {
        column.width = column.header.length + 5;
        column.alignment = { horizontal: 'center' };
      });

      // loop through data and add each one to worksheet
      data.forEach(singleData => {
        worksheet.addRow(singleData);
      });

      // loop through all of the rows and set the outline style.
      worksheet.eachRow({ includeEmpty: false }, (row:any) => {
        // store each cell to currentCell
        const currentCell = row._cells;

        // loop through currentCell to apply border only for the non-empty cell of excel
        currentCell.forEach((singleCell:any) => {
          // store the cell address i.e. A1, A2, A3, B1, B2, B3, ...
          const cellAddress = singleCell._address;

          // apply border
          worksheet.getCell(cellAddress).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
          };
        });
      });

      // write the content using writeBuffer
      const buf = await workbook.xlsx.writeBuffer();

      // download the processed file
      saveAs(new Blob([buf]), `${fileName}.xlsx`);
    } catch (error:any) {
      console.error('<<<ERRROR>>>', error);
      console.error('Something Went Wrong', error.message);
    } finally {
      // removing worksheet's instance to create new one
      workbook.removeWorksheet(workSheetName);
    }
  };

  return (
    <div className='grid grid-cols-12 mt-9'>
      <div className='col-span-5 p-4 bg-white mr-10'>
        <div className='flex'>
          <div className='w-1/2 mb-3 text-base'>
            <div className='text-black font-bold'>Installation Exceptions</div>
            <div className='text-grey4 font-normal'>60 Vehicles Affected</div>
          </div>
          <div className='w-1/2 flex items-center justify-end'>
              <button className="text-grey4 text-2xl font-normal -mt-8" onClick={exportDonutChartExcel}>
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              </button>
          </div>
        </div>
        <DonutChart data={data} />
      </div>
      <div className='col-span-7 p-4 bg-white'>
        <div className='font-bold text-base mb-2'>Progress Against Plan (Vehicles)</div>
        <LineChartGraph />
      </div>
    </div>
  )
}
