import React from 'react'
import {FiDownload} from "react-icons/fi"
import { Table } from 'flowbite-react';
export const TableCustom = () => {
  return (
  
        <Table>
          <Table.Head>
            <Table.HeadCell className='bg-gray-900'>
              File Name
            </Table.HeadCell>
            <Table.HeadCell className='bg-gray-900'>
              Download
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="border-gray-700 bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-white">
                Apple MacBook Pro 17"
              </Table.Cell>
              <Table.Cell>
               <button className='hover:text-blue-700'><FiDownload/></button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      )
    }
    
