import type { NextPage } from 'next'
import { NumberInput, NumberInputField, Button, Spinner } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import 'twin.macro'
import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

const RepayLoanPage: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [availableTokens, setAvailableTokens] = useState(485)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      onOpen()
      setAvailableTokens((prevValue) => prevValue - 10)
    }, 7000)
  }
  return (
    <>
      <h1 tw="mt-8 ml-8 font-black font-mono text-4xl tracking-tight">Repay Loans</h1>
      <div tw="mt-16 ml-8 w-1/4">
        {' '}
        <p tw="mb-2 font-black font-mono text-2xl">Repayment Amount: {availableTokens}</p>
        <Button
          onClick={handleSubmit}
          isLoading={false}
          size="md"
          py={6}
          fontWeight="bold"
          rounded="2xl"
          colorScheme="purple"
          mt={8}
          mr={8}
          w="100%"
        >
          {isLoading ? <Spinner /> : <p>Repay Loan with Stable Coins</p>}
        </Button>
      </div>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Successfully repaid your loan</p>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="purple" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  )
}

export default RepayLoanPage
