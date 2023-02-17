import { FC, useEffect } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'
import 'twin.macro'

export const PublicTransportHistory: FC = () => {
  const today: Date = new Date()
  const [data, setData] = useState<Array<any>>([])

  const tempData: Array<any> = []
  for (let i = 1; i < 6; i++) {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i)
    tempData.push({
      date: date,
      distance: Math.floor(date.getDate() * 3),
    })
  }

  useEffect(() => {
    setData(tempData)
  }, [])

  const tableData = data.map((row) => (
    <Tr key={row.date.toDateString()}>
      <Td>{row.date.toDateString()}</Td>
      <Td isNumeric>{row.distance}</Td>
      <Td isNumeric>{row.distance * 5}</Td>
    </Tr>
  ))

  const generateToken = () => {
    const newData = {
      date: new Date(),
      distance: 41,
    }
    setData((prevData) => {
      return [...prevData, newData]
    })
  }

  return (
    <>
      <div tw="ml-8 mt-16 w-1/2">
        <h2 tw="font-black font-mono text-2xl tracking-tight">Public Transport Usage History</h2>
        <TableContainer>
          <Table variant="striped" colorScheme="purple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th isNumeric>Distance (in km)</Th>
                <Th isNumeric>Tokens Generated</Th>
              </Tr>
            </Thead>
            <Tbody>{tableData}</Tbody>
          </Table>
        </TableContainer>

        <div tw="mt-16 flex flex-row items-center justify-between">
          <p tw="font-mono text-2xl">Distance Travelled today: {41} km</p>
          <Button
            onClick={generateToken}
            isLoading={false}
            size="md"
            py={6}
            fontWeight="bold"
            rounded="2xl"
            colorScheme="purple"
            mr={8}
          >
            Generate Carbon Tokens for Today
          </Button>
        </div>
      </div>
    </>
  )
}

export default PublicTransportHistory
